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

var JWTClient = require('./jwtclient.js');
var ComputeClient = require('./computeclient.js');
var fs = require('fs');
var os = require('os');
var path = require('path');
var util = require('util');
var defaultTransporter = require('../transporters.js');

/**
 * GoogleAuth account manager.
 *
 * @constructor
 */
function GoogleAuth() {
  this.JWTClient = JWTClient;
  this.ComputeClient = ComputeClient;
  this._cachedCredential = null;
}

// Executes the given callback if it is not null.
function callback(c, err, res) {
  if (c) {
    c(err, res);
  }
}

// Creates an Error containing the given message, and includes the message from the optional err
// passed in.
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
 * Convenience field mapping in the Compute credential type.
 */
GoogleAuth.prototype.Compute = require('./computeclient.js');

/**
 * Convenience field mapping in the JWT credential type.
 */
GoogleAuth.prototype.JWT = require('./jwtclient.js');

/**
 * Convenience field mapping in the OAuth2 credential type.
 */
GoogleAuth.prototype.OAuth2 = require('./oauth2client.js');

/**
 * Caches a value indicating whether the auth layer is running on Google Compute Engine.
 * @private
 */
GoogleAuth.prototype._isGCE = false;

/**
 * Caches a value indicating whether we've checked whether the auth layer is running on
 * Google Compute Engine.
 * @private
 */
GoogleAuth.prototype._checked_isGCE = false;

/**
 * Obtains the default service-level credentials for the application..
 * @param {function=} opt_callback Optional callback.
 */
GoogleAuth.prototype.getApplicationDefault = function(opt_callback) {
  var that = this;

  // If we've already got a cached credential, just return it.
  if (that._cachedCredential) {
    process.nextTick(function() {
      callback(opt_callback, null, that._cachedCredential);
    });
  } else {
    // Inject our own callback routine, which will cache the credential once it's been created.
    // It also allows us to ensure that the ultimate callback is always async.
    var my_callback = function(err, result) {
      if (!err && result) {
        that._cachedCredential = result;
      }
      process.nextTick(function() {
        callback(opt_callback, err, result);
      });
    };
    // Check for the existence of a local environment variable pointing to the
    // location of the credential file. This is typically used in local developer scenarios.
    if (!that._tryGetApplicationCredentialsFromEnvironmentVariable(my_callback)) {
      // Look in the well-known credential file location.
      if (!that._tryGetApplicationCredentialsFromWellKnownFile(my_callback)) {
        // Determine if we're running on GCE.
        that._checkIsGCE(function(gce) {
          if (gce) {
            // For GCE, just return a default ComputeClient. It will take care of the rest.
            my_callback(null, new that.ComputeClient());
          } else {
            // We failed to find the default credentials. Bail out with an error.
            my_callback(new Error('Could not load the default credentials. Browse to ' +
              'https://developers.google.com/accounts/docs/application-default-credentials for ' +
              'more information.'));
          }
        });
      }
    }
  }
};

/**
 * Determines whether the auth layer is running on Google Compute Engine.
 * @param {function=} callback The callback.
 * @api private
 */
GoogleAuth.prototype._checkIsGCE = function(callback) {
  var that = this;
  if (that._checked_isGCE) {
    callback(that._isGCE);
  } else {
    if (!that.transporter) {
      that.transporter = new defaultTransporter();
    }
    that.transporter.request({
      method: 'GET',
      uri: 'http://metadata.google.internal',
      json: true
    }, function(err, body, res) {
      if (!err && res && res.headers) {
        that._isGCE = res.headers['metadata-flavor'] === 'Google';
      }
      that._checked_isGCE = true;
      callback(that._isGCE);
    });
  }
};

/**
 * Attempts to load default credentials from the environment variable path..
 * @param {function=} opt_callback Optional callback.
 * @return {boolean} Returns true if the callback has been executed; false otherwise.
 * @api private
 */
GoogleAuth.prototype._tryGetApplicationCredentialsFromEnvironmentVariable =
  function(opt_callback) {

    var that = this;
    var credentialsPath = that._getEnv('GOOGLE_APPLICATION_CREDENTIALS');
    if (!credentialsPath || credentialsPath.length === 0) {
      return false;
    }
    that._getApplicationCredentialsFromFilePath(credentialsPath, function(err, result) {
      var wrappedError = null;
      if (err) {
        wrappedError = createError(
            'Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS ' +
            'environment variable.',
          err);
      }
      callback(opt_callback, wrappedError, result);
    });
    return true;
  };

/**
 * Attempts to load default credentials from a well-known file location
 * @param {function=} opt_callback Optional callback.
 * @return {boolean} Returns true if the callback has been executed; false otherwise.
 * @api private
 */
GoogleAuth.prototype._tryGetApplicationCredentialsFromWellKnownFile =
  function(opt_callback) {

    var that = this;
    // First, figure out the location of the file, depending upon the OS type.
    var location = null;
    if (that._isWindows()) {
      // Windows
      location = that._getEnv('APPDATA');
    } else {
      // Linux or Mac
      var home = that._getEnv('HOME');
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
  };

/**
 * Attempts to load default credentials from a file at the given path..
 * @param {string=} filePath The path to the file to read.
 * @param {function=} opt_callback Optional callback.
 * @api private
 */
GoogleAuth.prototype._getApplicationCredentialsFromFilePath =
  function(filePath, opt_callback) {

    var that = this;
    var error = null;
    // Make sure the path looks like a string.
    if (!filePath || filePath.length === 0) {
      error = new Error('The file path is invalid.');
    }
    // Make sure there is a file at the path. lstatSync will throw if there is nothing there.
    if (!error) {
      try {
        if (!fs.lstatSync(filePath).isFile()) {
          throw '';
        }
      } catch (err) {
        error = createError(util.format('The file at %s does not exist, or it is not a file.',
          filePath), err);
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
  };

/**
 * Create a credentials instance using the given input options.
 * @param {object=} json The input object.
 * @param {function=} opt_callback Optional callback.
 */
GoogleAuth.prototype.fromJSON = function(json, opt_callback) {
  var that = this;
  var jwtClient = new that.JWTClient();
  jwtClient.fromJSON(json, function(err) {
    if (err) {
      callback(opt_callback, err);
    } else {
      callback(opt_callback, null, jwtClient);
    }
  });
};

/**
 * Create a credentials instance using the given input stream.
 * @param {object=} stream The input stream.
 * @param {function=} opt_callback Optional callback.
 */
GoogleAuth.prototype.fromStream = function(stream, opt_callback) {
  var that = this;
  var jwtClient = new that.JWTClient();
  jwtClient.fromStream(stream, function(err) {
    if (err) {
      callback(opt_callback, err);
    } else {
      callback(opt_callback, null, jwtClient);
    }
  });
};

/**
 * Determines whether the current operating system is Windows.
 * @api private
 * */
GoogleAuth.prototype._isWindows = function() {
  var sys = this._osPlatform();
  if (sys && sys.length >= 3) {
    if (sys.substring(0, 3).toLowerCase() === 'win') {
      return true;
    }
  }
  return false;
};

/**
 * Creates a file stream. Allows mocking.
 * @api private
 * */
GoogleAuth.prototype._createReadStream = function(filePath) {
  return fs.createReadStream(filePath);
};

/**
 * Gets the value of the environment variable with the given name. Allows mocking.
 * @api private
 * */
GoogleAuth.prototype._getEnv = function(name) {
  return process.env[name];
};

/**
 * Gets the current operating system platform. Allows mocking.
 * @api private
 * */
GoogleAuth.prototype._osPlatform = function() {
  return os.platform();
};

/**
 * Determines whether a file exists. Allows mocking.
 * @api private
 * */
GoogleAuth.prototype._fileExists = function(filePath) {
  return fs.existsSync(filePath);
};

/**
 * Joins two parts of a path. Allows mocking.
 * @api private
 * */
GoogleAuth.prototype._pathJoin = function(item1, item2) {
  return path.join(item1, item2);
};

/**
 * Allows mocking of the path to a well-known file.
 * @api private
 * */
GoogleAuth.prototype._mockWellKnownFilePath = function(filePath) {
  return filePath;
};

/**
 * Export GoogleAuth.
 */
module.exports = GoogleAuth;
