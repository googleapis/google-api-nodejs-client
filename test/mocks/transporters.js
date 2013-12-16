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

var fs = require('fs');
var util = require('util');
var DefaultTransporter = require('../../lib/transporters.js');

/**
 * @constructor
 * MockTransporter reads the contents of a file given by filePath and
 * acts as request has returned contents as response body.
 *
 * @param {string} filePath Path of the file.
 */
function MockTransporter(filePath) {
  this.filePath = filePath;
}

/**
 * Inherit from DefaultTransporter.
 */
util.inherits(MockTransporter, DefaultTransporter);

/**
 * Makes a request with given options and invokes callback.
 * @param {obj} opts Options.
 * @param {Function=} opt_callback Optional callback.
 */
MockTransporter.prototype.request = function(opts, opt_callback) {
  var response = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
  opt_callback && this.wrapCallback_(opt_callback)(null, {}, response);
};

/**
 * Exports MockTransporter.
 */
module.exports = MockTransporter;
