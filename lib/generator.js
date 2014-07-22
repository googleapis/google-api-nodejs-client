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

var DefaultTransporter = require('../lib/transporters');
var swig = require('swig');
var beautify = require('js-beautify').js_beautify;
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');

var BASE_URL = 'https://www.googleapis.com';
var API_INDEX = './apis/index.js';
var API_INDEX_TEMPLATE = './templates/api-index.js';
var API_TEMPLATE = './templates/api-endpoint.js';
var DISCOVERY_URL = 'https://www.googleapis.com/discovery/v1/apis/';
var BEAUTIFY_OPTIONS = {
  'indent_size': 2,
  'indent_char': ' ',
  'indent_level': 0,
  'indent_with_tabs': false,
  'preserve_newlines': true,
  'max_preserve_newlines': 2,
  'jslint_happy': false,
  'brace_style': 'collapse',
  'keep_array_indentation': false,
  'keep_function_indentation': false,
  'space_before_conditional': true,
  'break_chained_methods': false,
  'eval_code': false,
  'unescape_strings': false,
  'wrap_line_length': 0
};

var templateContents = fs.readFileSync(API_TEMPLATE, { encoding: 'utf8' });
var indexTemplContents = fs.readFileSync(API_INDEX_TEMPLATE, { encoding: 'utf8' });
var transporter = new DefaultTransporter();

/**
 * Build a string used to create a URL from the discovery doc provided URL.
 * @param  {String} input URL to build from
 * @return {String}       Resulting built URL
 */
function buildurl(input) {
  return ('\'' + BASE_URL + input + '\'')
    .replace(/{\+/g, '\' + params.')
    .replace(/{\//g, '\' + params.')
    .replace(/{/g, '\' + params.')
    .replace(/\*}\'$/g, '')
    .replace(/\*}/g, ' + \'')
    .replace(new RegExp('}\'$', 'g'), '')
    .replace(new RegExp('}', 'g'), ' + \'');
}

/**
 * A multi-line string is turned into one line
 * @param  {string} str String to process
 * @return {string}     Single line string processed
 */
function oneLine(str) {
  return str.replace(/\n/g, ' ');
}

/**
 * Returns the list of names of APIS
 * @param  {object} items Object of api endpoints
 * @return {array}        Array of api names
 */
function getAPIs(items) {
  var apis = [];
  for (var i in items) {
    apis.push(items[i].name);
  }
  return apis;
}

/**
 * Disable auto-escaping its output
 * @type {Boolean}
 */
buildurl.safe = true;
swig.setFilter('buildurl', buildurl);
swig.setFilter('getAPIs', getAPIs);
swig.setFilter('oneLine', oneLine);
swig.setDefaults({ loader: swig.loaders.fs(__dirname + '/../templates')});

/**
 * Handle error object with callback
 * @param  {Error}   err      Error object to return in callback
 * @param  {Function=} callback Optional callback function
 */
function handleError(err, callback) {
  if (callback && typeof callback === 'function') {
    callback(err, null);
  }
}

/**
 * Generator for generating API endpoints
 * @param {object} options Options for generation
 * @this {Generator}
 */
function Generator(options) {
  this.options = options || {};
}

/**
 * Log output of generator
 * Works just like console.log
 */
Generator.prototype.log = function() {
  if (this.options && this.options.debug) {
    console.log.apply(this, arguments);
  }
};

/**
 * Generate all APIs
 * @param {function} callback Callback when all APIs have been generated
 * @throws {Error} If there is an error generating any of the APIs
 */
Generator.prototype.generateAllAPIs = function(callback) {
  var headers = this.options.includePrivate ? {} : { 'X-User-Ip': '0.0.0.0' };
  transporter.request({
    uri: DISCOVERY_URL,
    headers: headers
  }, function(err, resp) {
    if (err) {
      return handleError(err, callback);
    }
    var apis = resp.items;
    var count = apis.length;
    var done = 0;
    for (var i in apis) {
      this.log('Processing ' + apis[i].id + '...');
      Generator.prototype.generateAPI.call(this, apis[i].discoveryRestUrl, function(filename) {
        this.log('API generated for ' + apis[i].id + ' in ' + filename);
        done++;
        if (done === count) {
          if (callback && typeof callback === 'function') {
            callback(null, true);
            return;
          }
        }
      }.bind(this));
    }
  }.bind(this));
};

/**
 * Generate API file given discovery URL
 * @param  {String} apiDiscoveryUrl URL of discovery doc for API
 * @param {function} callback Callback when successful write of API
 * @throws {Error} If there is an error generating the API.
 */
Generator.prototype.generateAPI = function(apiDiscoveryUrl, callback) {
  this.log('Requesting ' + apiDiscoveryUrl);
  transporter.request({
    uri: apiDiscoveryUrl
  }, function(err, resp) {
    if (err) {
      return handleError(err, callback);
    }
    var contents = beautify(swig.render(templateContents, { locals: resp }), BEAUTIFY_OPTIONS);
    var exportFilename = './apis/' + resp.name + '/' + resp.version + '.js';
    mkdirp(path.dirname(exportFilename), function(err) {
      if (err) {
        return handleError(err, callback);
      }
      fs.writeFile(exportFilename, contents, function(err) {
        if (err) {
          return handleError(err, callback);
        } else if (callback && typeof callback === 'function') {
          callback(null, exportFilename);
          return;
        }
      });
    });
  });
};

/**
 * Generate the API index file
 * @param  {Function} callback Callback called with err, filename
 * @throws {Error} If there is an error generating the index file.
 */
Generator.prototype.generateIndex = function(callback) {
  var headers = this.options.includePrivate ? {} : { 'X-User-Ip': '0.0.0.0' };
  transporter.request({
    uri: DISCOVERY_URL,
    headers: headers
  }, function(err, resp) {
    if (err) {
      return handleError(err, callback);
    }
    var contents = beautify(swig.render(indexTemplContents, { locals: resp }), BEAUTIFY_OPTIONS);
    mkdirp(path.dirname(API_INDEX), function(err) {
      if (err) {
        return handleError(err, callback);
      }
      fs.writeFile(API_INDEX, contents, function(err) {
        if (err) {
          return handleError(err, callback);
        }
        this.log('API index generated in ' + API_INDEX);
        if (callback && typeof callback === 'function') {
          callback(null, API_INDEX);
          return;
        }
      }.bind(this));
    }.bind(this));
  }.bind(this));
};

/**
 * Export the Generator object
 * @type {Generator}
 */
module.exports = Generator;
