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
function JWT(email, keyFile, key, scopes, subject) {
  JWT.super_.call(this);
  this.email = email;
  this.keyFile = keyFile;
  this.key = key;
  this.scopes = scopes;
  this.subject = subject;
  this.GAPI = GAPI;

  this.credentials = {
    refresh_token: 'jwt-placeholder',
    expiry_date: 1
  };
}

/**
 * Inherit from Auth2Client.
 */
util.inherits(JWT, Auth2Client);

// Executes the given callback if it is not null.
function callback(c, err, res) {
  if (c) {
    c(err, res);
  }
}

/**
 * Creates a copy of the credential with the specified scopes.
 * @param {(string|array)=} scopes List of requested scopes or a single scope.
 * @return {object} The cloned instance.
 */
JWT.prototype.createScoped = function(scopes) {
  return new JWT(this.email, this.keyFile, this.key, scopes, this.subject);
};

/**
 * Indicates whether the credential requires scopes to be created by calling createdScoped before
 * use.
 * @return {object} The cloned instance.
 */
JWT.prototype.createScopedRequired = function() {
  var that = this;

  // If scopes is null, always return true.
  if (that.scopes) {
    // For arrays, check the array length.
    if (that.scopes instanceof Array) {
      return that.scopes.length === 0;
    }

    // For others, convert to a string and check the length.
    return String(that.scopes).length === 0;
  }

  return true;
};

/**
 * Get the initial access token using gapitoken.
 * @param {function=} opt_callback Optional callback.
 */
JWT.prototype.authorize = function(opt_callback) {
  var that = this;

  that.refreshToken_(null, function(err, result) {
    if (!err) {
      that.credentials = result;
      that.credentials.refresh_token = 'jwt-placeholder';
    }
    callback(opt_callback, err, result);
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

  this._createGAPI(function(err, gapi) {
    if (err) {
      callback(opt_callback, err);
    } else {
      gapi.getToken(function (err, token) {
        callback(opt_callback, err, {
          access_token: token,
          token_type: 'Bearer',
          expiry_date: that.gapi.token_expires * 1000
        });
      });
    }
  });
};

/**
 * Create a JWT credentials instance using the given input options.
 * @param {object=} json The input object.
 * @param {function=} opt_callback Optional callback.
 */
JWT.prototype.fromJSON = function(json, opt_callback) {
  var that = this;
  if (!json) {
    callback(opt_callback, new Error(
      'Must pass in a JSON object containing the service account auth settings.'));
    return;
  }
  if (!json.client_email) {
    callback(opt_callback, new Error(
      'The incoming JSON object does not contain a client_email field'));
    return;
  }
  if (!json.private_key) {
    callback(opt_callback, new Error(
      'The incoming JSON object does not contain a private_key field'));
    return;
  }
  // Extract the relevant information from the json key file.
  that.email = json.client_email;
  that.key = json.private_key;
  callback(opt_callback);
};

/**
 * Create a JWT credentials instance using the given input stream.
 * @param {object=} stream The input stream.
 * @param {function=} opt_callback Optional callback.
 */
JWT.prototype.fromStream = function(stream, opt_callback) {
  var that = this;
  if (!stream) {
    process.nextTick(function() {
      callback(
        opt_callback,
        new Error('Must pass in a stream containing the service account auth settings.'));
    });
    return;
  }
  var s = '';
  stream.setEncoding('utf8');
  stream.on('data', function (chunk) {
    s += chunk;
  });
  stream.on('end', function () {
    try {
      var data = JSON.parse(s);
      that.fromJSON(data, opt_callback);
    } catch (err) {
      callback(opt_callback, err);
    }
  });
};

/**
 * Creates the GAPI instance if it has not been created already.
 * @param {function=} callback Callback.
 * @private
 */
JWT.prototype._createGAPI = function(callback) {
  var that = this;

  if (that.gapi) {
    callback(null, that.gapi);
  } else {
    that.gapi = new that.GAPI({
      iss: that.email,
      sub: that.subject,
      scope: that.scopes instanceof Array ? that.scopes.join(' ') : that.scopes,
      keyFile: that.keyFile,
      key: that.key
    }, function (err) {
      if (err) {
        that.gapi = null;
      }
      callback(err, that.gapi);
    });
  }
};

/**
 * Export JWT.
 */
module.exports = JWT;