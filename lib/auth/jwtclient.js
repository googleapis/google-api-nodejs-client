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

var Auth2Client = require('./oauth2client.js');
var util = require('util');
var GAPI = require('gapitoken');

/**
 * @constructor
 * JWT service account credentials.
 *
 * Retrieve access token using gapitoken.
 *
 * @param {string=} email service account email address.
 * @param {string=} keyFile path to private key file.
 * @param {array=} scopes list of requested scopes.
 *
 */
function JWT(email, keyFile, scopes) {
  JWT.super_.call(this);
  this.email = email;
  this.keyFile = keyFile;
  this.scopes = scopes;
  this.GAPI = GAPI;
}

/**
 * Inherit from Auth2Client.
 */
util.inherits(JWT, Auth2Client);

/**
 * Get the initial access token using gapitoken.
 * @param {function=} opt_callback Optional callback.
 */
JWT.prototype.authorize = function(opt_callback) {
  var that = this;
  that.gapi = new that.GAPI({
    iss: that.email,
    scope: that.scopes.join(' '),
    keyFile: that.keyFile
  }, function(err) {
    if (err) {
      opt_callback && opt_callback(err, null);
    } else {
      that.refreshToken_(null, function(err, result) {
        if (!err) {
          that.credentials = result;
          that.credentials.refresh_token = 'jwt-placeholder';
        }
        opt_callback && opt_callback(err, result);
      });
    }
  });
};

/**
 * @private
 * Refreshes the access token.
 * @param {object=} ignored_
 * @param {function=} opt_callback Optional callback.
 */
JWT.prototype.refreshToken_ = function(ignored_, opt_callback) {
  var that = this;
  that.gapi.getToken(function(err, token) {
    opt_callback && opt_callback(err, {
      access_token: token,
      token_type: 'Bearer',
      expires_in: that.gapi.token_expires
    });
  });
};

/**
 * Export Compute.
 */
module.exports = JWT;
