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

var template_contents = fs.readFileSync(API_TEMPLATE, { encoding: 'utf8' });
var transporter = new DefaultTransporter();

/**
 * Build a string used to create a URL from the discovery doc provided URL.
 * @param  {String} input URL to build from
 * @return {String}       Resulting built URL
 */
function buildurl(input) {
  return ('\'' + BASE_URL + input + '\'')
    .replace(/{/g, '\' + params.')
    .replace(new RegExp('}\'$', 'g'), '')
    .replace(new RegExp('}', 'g'), ' + \'');
}

/**
 * Disable auto-escaping its output
 * @type {Boolean}
 */
buildurl.safe = true;
swig.setFilter('buildurl', buildurl);
swig.setDefaults({ loader: swig.loaders.fs(__dirname + '/../templates')});

function Generator() {}

/**
 * Generate all APIs
 */
Generator.prototype.generateAllAPIs = function() {
  transporter.request({
    uri: DISCOVERY_URL,
    headers: {
      'X-User-Ip': '0.0.0.0'
    }
  }, function(err, resp) {
    var apis = resp.items;
    for (var i in apis) {
      Generator.prototype.generateAPI(apis[i].discoveryRestUrl);
    }
  });
};

/**
 * Generate API file given discovery URL
 * @param  {String} api_discovery_url URL of discovery doc for API
 */
Generator.prototype.generateAPI = function(api_discovery_url) {
  transporter.request({
    uri: api_discovery_url,
    headers: {
      'X-User-Ip': '0.0.0.0'
    }
  }, function(err, resp) {
    var contents = beautify(swig.render(template_contents, { locals: resp }),
      BEAUTIFY_OPTIONS);

    var export_filename = './apis/' + resp.name + '/' + resp.version + '.js';

    mkdirp(path.dirname(export_filename), function(err) {
      if (err) throw err;
      fs.writeFile(export_filename, contents, function(err) {
        if (err) throw err;
        console.log('Wrote ' + export_filename);
      });
    });
  });
};

/**
 * Generate index file
 */
Generator.prototype.generateIndex = function() {
  mkdirp(path.dirname(API_INDEX), function(err) {
    fs.createReadStream(API_INDEX_TEMPLATE).pipe(
      fs.createWriteStream(API_INDEX)
    );
  });
};

/**
 * Export the Generator object
 * @type {[type]}
 */
module.exports = Generator;
