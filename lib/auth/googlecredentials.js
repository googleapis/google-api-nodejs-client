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
var JSONStream = require('JSONStream');
var domain = require('domain');
var fs = require('fs');
var util = require('util');

var cachedCredential = null;

/**
 * GoogleCredentials account manager.
 *
 * @constructor
 */
function GoogleCredentials() {
  this.JWT = JWT;

  this.internals = {
    createReadStream: createReadStream
  };
}

function callback(callback, error, result) {
  if (callback) {
    callback(error, result);
  }
}

function createError(message, err) {
  var s = message || '';

  if (err) {
    var errorMessage = String(err);
    if (errorMessage && errorMessage.length > 0) {
      if (s.length > 0) {
        s += ' ';
      }

      s += errorMessage;
    }
  }

  return Error(s);
}

/**
 * Obtains the default service-level credentials for the application..
 * @param {function=} opt_callback Optional callback.
 */
GoogleCredentials.prototype.getApplicationDefault = function(opt_callback) {
  var that = this;

  if (cachedCredential) {
    callback(opt_callback, null, cachedCredential);
  } else {
    if (!that._tryGetApplicationCredentialsFromEnvironmentVariable(opt_callback)) {
      callback(opt_callback, new Error('Could not load the default credentials.'));
    }
  }
}

/**
 * Attempts to load default credentials from the environment variable path..
 * @param {function=} opt_callback Optional callback.
 * @return {boolean=} Returns true if the callback has been executed; false otherwise.
 * @api private
 */
GoogleCredentials.prototype._tryGetApplicationCredentialsFromEnvironmentVariable = function(opt_callback) {
  var that = this;

  var credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!credentialsPath || credentialsPath.length == 0) {
    return false;
  }

  that._getApplicationCredentialsFromFilePath(credentialsPath, function(err, result) {
    var wrappedError = null;

    if (err) {
      wrappedError = createError(
        'Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable.',
        err);
    }

    callback(opt_callback, wrappedError, result);
  });

  return true;
}

/**
 * Attempts to load default credentials from a file at the given path..
 * @param {string=} filePath The path to the file to read.
 * @param {function=} opt_callback Optional callback.
 * @api private
 */
GoogleCredentials.prototype._getApplicationCredentialsFromFilePath = function(filePath, opt_callback) {
  var that = this;
  var error = null;

  // Make sure the path looks like a string.
  if (!filePath || filePath.length == 0) {
    error = new Error('The file path is invalid.');
  }

  // Make sure there is a file at the path. lstatSync will throw if there is nothing there.
  if (!error) {
    try {
      if (!fs.lstatSync(filePath).isFile()) {
        throw '';
      }
    } catch (err) {
      error = createError(util.format('The file at %s does not exist, or it is not a file.', filePath), err);
    }
  }

  // Now open a read stream on the file, and parse it.
  if (!error) {
    try {
      var stream = that.internals.createReadStream(filePath);
      that.fromStream(stream, opt_callback);
    } catch (err) {
      error = createError(util.format('Unable to read the file at %s.', filePath), err);
    }
  }

  if (error) {
    callback(opt_callback, error);
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

    var d = domain.create();
    d.on('error', function(err) {
      callback(opt_callback, err, null);
    });

    d.run(function() {
      var parser = JSONStream.parse();

      parser.on('root', function (data) {
        that.fromJSON(data, opt_callback);
      });

      stream.pipe(parser);
    });
  }
}

// Allows mocking.
var createReadStream = function(filePath) {
  return fs.createReadStream(filePath);
}

/**
 * Export GoogleCredentials.
 */
module.exports = GoogleCredentials;