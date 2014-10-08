/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

var JWT = require('./jwtclient.js');

/**
 * GoogleCredentials account manager.
 *
 * @constructor
 */
function GoogleCredentials() {
  this.JWT = JWT;
}

function addCreateScopedMethod(jwt) {
  jwt.createScoped = function(scopes) {
    var self = this;
    self.setScopes(scopes);
    return self;
  }
}

/**
 * Get the initial access token using gapitoken.
 * @param {function=} opt_callback Optional callback.
 */
GoogleCredentials.prototype.fromJSON = function(json) {
  var that = this;

  if (!json) {
    throw new Error('Must pass in a JSON object containing the service account auth settings.');
  }

  if (!json.client_email) {
    throw new Error('The incoming JSON object does not contain a client_email field');
  }

  if (!json.private_key) {
    throw new Error('The incoming JSON object does not contain a private_key field');
  }

  // Extract the relevant information from the json key file.
  var email = json.client_email;
  var key = json.private_key;

  // Build up a JWT instance.
  var jwt = new that.JWT(email, /* keyFile */ null, key, /* scopes */ null, /* subject */ null);

  // Add a hook for setting the scope.
  addCreateScopedMethod(jwt);

  return jwt;
}

/**
 * Export GoogleCredentials.
 */
module.exports = GoogleCredentials;