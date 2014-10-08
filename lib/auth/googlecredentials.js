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

/**
 * Executes the callback if it exists.
 * @param {function=} callback The callback method..
 * @param {object=} Optional error instance.
 * @param {result=} Optional result intance.
 */
function callback(callback, error, result) {
  if (callback) {
    callback(error, result);
  }
}

/**
 * Create a credentials instance using the given input options.
 * @param {object=} json The input object.
 * @param {function=} opt_callback Optional callback.
 */
GoogleCredentials.prototype.fromJSON = function(json, opt_callback) {
  var that = this;

  if (!json) {
    callback(opt_callback, new Error('Must pass in a JSON object containing the service account auth settings.'));
  } else if (!json.client_email) {
    callback(opt_callback, new Error('The incoming JSON object does not contain a client_email field'));
  } else if (!json.private_key) {
    callback(opt_callback, new Error('The incoming JSON object does not contain a private_key field'));
  } else {
    // Extract the relevant information from the json key file.
    var email = json.client_email;
    var key = json.private_key;

    // Build up a JWT instance.
    var jwt = new that.JWT(email, /* keyFile */ null, key, /* scopes */ null, /* subject */ null);

    callback(opt_callback, null, jwt);
  }
}

/**
 * Create a credentials instance using the given input stream.
 * @param {object=} stream The input stream.
 * @param {function=} opt_callback Optional callback.
 */
GoogleCredentials.prototype.fromStream = function(stream, opt_callback) {
  var that = this;

  if (!stream) {
    callback(opt_callback, new Error('Must pass in a stream containing the service account auth settings.'));
  } else {
    var parser = JSONStream.parse("*");

    parser.on('data', function (data) {
      that.fromJSON(data, opt_callback);
    })

    stream.pipe(parser);
  }
}

/**
 * Export GoogleCredentials.
 */
module.exports = GoogleCredentials;