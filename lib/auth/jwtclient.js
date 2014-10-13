/**
 * Copyright 2013 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var Auth2Client = require('./oauth2client.js');
var util = require('util');
var GAPI = require('gapitoken');


/**
 * Indicates whether the auth layer is running on a Google Compute Engine instance.
 */
var gce = false;

/**
 * JWT service account credentials.
 *
 * Retrieve access token using gapitoken.
 *
 * @param {string=} email service account email address.
 * @param {string=} keyFile path to private key file.
 * @param {string=} key value of key
 * @param {(string|array)=} scopes list of requested scopes or a single scope.
 * @param {string=} subject impersonated account's email address.
 * @constructor
 */
function JWT(email, keyFile, key, scopes, subject, gce) {
  JWT.super_.call(this);
  this.email = email;
  this.keyFile = keyFile;
  this.key = key;
  this.scopes = scopes;
  this.subject = subject;
  this.GAPI = GAPI;
}

/**
 * Inherit from Auth2Client.
 */
util.inherits(JWT, Auth2Client);

/**
 * Creates a copy of the credential with the specified scopes.
 * @param {(string|array)=} scopes List of requested scopes or a single scope.
 * @return {object} The cloned instance.
 */
JWT.prototype.createScoped = function(scopes) {
  var that = this;
  return new JWT(this.email, this.keyFile, this.key, scopes, this.subject, this.gce);
}

/**
 * Indicates whether the credential requires scopes to be created by calling createdScoped before use..
 * @return {object} The cloned instance.
 */
JWT.prototype.createScopedRequired = function() {
  var that = this;

  // If scopes is null, always return true.
  if (that.scopes) {
    // For arrays, check the array length.
    if (that.scopes instanceof Array) {
      return that.scopes.length == 0;
    }

    // For others, convert to a string and check the length.
    return String(that.scopes).length == 0;
  }

  return true;
}

/**
 * Get the initial access token using gapitoken.
 * @param {function=} opt_callback Optional callback.
 */
JWT.prototype.authorize = function(opt_callback) {
  var that = this;
  that.gapi = new that.GAPI({
    iss: that.email,
    sub: that.subject,
    scope: that.scopes instanceof Array ? that.scopes.join(' ') : that.scopes,
    keyFile: that.keyFile,
    key: that.key
  }, function(err) {
    if (err) {
      if (opt_callback) {
        opt_callback(err, null);
      }
    } else {
      that.refreshToken_(null, function(err, result) {
        if (!err) {
          that.credentials = result;
          that.credentials.refresh_token = 'jwt-placeholder';
        }
        if (opt_callback) {
          opt_callback(err, result);
        }
      });
    }
  });
};

/**
 * Refreshes the access token.
 * @param {object=} ignored_
 * @param {function=} opt_callback Optional callback.
 * @private
 */
JWT.prototype.refreshToken_ = function(ignored_, opt_callback) {
  var that = this;

  // When not running on GCE, use the GAPI library to request the token.
  // This is the way the library was originally written, so we are leaving it
  // this way to avoid a breaking change.
  that.gapi.getToken(function(err, token) {
    if (opt_callback) {
      opt_callback(err, {
        access_token: token,
        token_type: 'Bearer',
        expiry_date: that.gapi.token_expires * 1000
      });
    }
  });
};

/**
 * Export JWT.
 */
module.exports = JWT;