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
var os = require('os');
var path = require('path');
var util = require('util');

/**
 * GoogleCredentials account manager.
 *
 * @constructor
 */
function GoogleCredentials() {
  this.JWT = JWT;
  this._cachedCredential = null;
}

// Executes the given callback if it is not null.
function callback(callback, error, result) {
  if (callback) {
    callback(error, result);
  }
}

// Creates an Error containing the given message, and includes the message from the optional err passed in.
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

  if (that._cachedCredential) {
    callback(opt_callback, null, that._cachedCredential);
  } else {
    // Inject our own callback routine, which will cache the credential once
    // it's been created.
    var my_callback = function(err, result) {
      if (!err && result) {
        that._cachedCredential = result;
      }

      callback(opt_callback, err, result);
    }

    // First, check for the existence of a local environment variable pointing to the
    // location of the credential file. This is typically used in local developer scenarios.
    if (!that._tryGetApplicationCredentialsFromEnvironmentVariable(my_callback)) {
      // Next, look in the well-known credential file location.
      if (!that._tryGetApplicationCredentialsFromWellKnownFile(my_callback)) {
        callback(opt_callback, new Error('Could not load the default credentials.'));
      }
    }
  }
}

/**
 * Attempts to load default credentials from the environment variable path..
 * @param {function=} opt_callback Optional callback.
 * @return {boolean} Returns true if the callback has been executed; false otherwise.
 * @api private
 */
GoogleCredentials.prototype._tryGetApplicationCredentialsFromEnvironmentVariable = function(opt_callback) {
  var that = this;

  var credentialsPath = that._getEnvironmentVariable('GOOGLE_APPLICATION_CREDENTIALS');
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
 * Attempts to load default credentials from a well-known file location
 * @param {function=} opt_callback Optional callback.
 * @return {boolean} Returns true if the callback has been executed; false otherwise.
 * @api private
 */
GoogleCredentials.prototype._tryGetApplicationCredentialsFromWellKnownFile = function(opt_callback) {
  var that = this;

  // First, figure out the location of the file, depending upon the OS type.
  var location = null;
  if (that._isWindows()) {
    // Windows
    location = that._getEnvironmentVariable('APPDATA');
  } else {
    // Linux or Mac
    var home = that._getEnvironmentVariable('HOME');
    if (home) {
      location = that._pathJoin(home, '.config');
    }
  }

  // If we found the root path, expand it.
  if (location) {
    location = that._pathJoin(location, 'gcloud');
    location = that._pathJoin(location, 'application_default_credentials.json');

    location = that._mockWellKnownFilePath(location);

    // Check whether the file exists.
    if (!that._fileExists(location)) {
      location = null;
    }
  }

  // The file does not exist.
  if (!location) {
    return false;
  }

  // The file seems to exist. Try to use it.
  this._getApplicationCredentialsFromFilePath(location, opt_callback);
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
      var stream = that._createReadStream(filePath);
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

/**
 * Determines whether the current operating system is Windows.
 * @api private
 * */
GoogleCredentials.prototype._isWindows = function() {
  var sys = this._osType();

  if (sys && sys.length >= 7) {
    if (sys.substring(0, 7).toLowerCase() == 'windows') {
      return true;
    }
  }

  return false;
}

/**
 * Creates a file stream. Allows mocking.
 * @api private
 * */
GoogleCredentials.prototype._createReadStream = function(filePath) {
  return fs.createReadStream(filePath);
}

/**
 * Gets the value of the environment variable with the given name. Allows mocking.
 * @api private
 * */
GoogleCredentials.prototype._getEnvironmentVariable = function(name) {
  return process.env[name];
}

/**
 * Gets the current operating system type. Allows mocking.
 * @api private
 * */
GoogleCredentials.prototype._osType = function() {
  return os.type();
}

/**
 * Determines whether a file exists. Allows mocking.
 * @api private
 * */
GoogleCredentials.prototype._fileExists = function(filePath) {
  return fs.existsSync(filePath);
}

/**
 * Joins two parts of a path. Allows mocking.
 * @api private
 * */
GoogleCredentials.prototype._pathJoin = function(item1, item2) {
  return path.join(item1, item2);
}

/**
 * Allows mocking of the path to a well-known file.
 * @api private
 * */
GoogleCredentials.prototype._mockWellKnownFilePath = function(filePath) {
  return filePath;
}

/**
 * Export GoogleCredentials.
 */
module.exports = GoogleCredentials;