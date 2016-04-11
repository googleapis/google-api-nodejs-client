/**
 * Copyright 2012 Google Inc. All Rights Reserved.
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

/**
 * A module for interacting with Google APIs
 * @module google
 */

var path = require('path');
var fs = require('fs');
var util = require('util');

/**
 * Load the apis from apis index file
 * This file holds all version information
 * @private
 */
var apis = {};

/**
 * Return a Function that requires an API from the disk
 * @param  {String} filename Filename of API
 * @return {function}        function used to require the API from disk
 * @private
 */
function requireAPI(filename) {
  return function(options) {
    var type = typeof options;
    var version;
    if (type === 'string') {
      version = options;
      options = {};
    } else if (type === 'object') {
      version = options.version;
      delete options.version;
    } else {
      throw new Error('Argument error: Accepts only string or object');
    }
    try {
      var endpointPath = path.join(__dirname, filename, path.basename(version));
      var Endpoint = require(endpointPath);
      var ep = new Endpoint(options);
      ep.google = this; // for drive.google.transporter
      return Object.freeze(ep); // create new & freeze
    } catch (e) {
      throw new Error(util.format('Unable to load endpoint %s("%s"): %s',
        filename, version, e.message));
    }
  };
}

/**
 * @callback callback
 * @param {Error} err Error object if an error occurred.
 * @param {object} data Response data object.
 */

// Dynamically discover available APIs
fs.readdirSync(path.join(__dirname, '../apis')).forEach(function(file) {
  apis[file] = requireAPI('../apis/' + file);
});

var GoogleAuth = require('google-auth-library');

/**
 * GoogleApis constructor.
 * @param {object} options Options to be passed in
 * @constructor
 */
function GoogleApis(options) {
  this.options(options);
  this.addAPIs(apis);
  this.auth = new GoogleAuth();
  this.GoogleApis = GoogleApis;
}

/**
 * Set options
 * @param  {Object} opts Options to set
 */
GoogleApis.prototype.options = function(opts) {
  this._options = opts || {};
};

/**
 * Add APIs endpoints to googleapis object
 * E.g. googleapis.drive and googleapis.datastore
 *
 * @param {Array} apis Apis to be added
 * @private
 */
GoogleApis.prototype.addAPIs = function(apis) {
  for (var apiName in apis) {
    this[apiName] = apis[apiName].bind(this);
  }
};

var google = new GoogleApis();

/**
 * Exports googleapis.
 */
module.exports = google;
