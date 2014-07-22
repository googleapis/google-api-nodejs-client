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

var request = require('request'),
    pkg = require('../package.json');

/**
 * Default transporter constructor.
 * Wraps request and callback functions.
 */
function DefaultTransporter() {}

/**
 * Default user agent.
 */
DefaultTransporter.prototype.USER_AGENT =
    'google-api-nodejs-client/' + pkg.version;

/**
 * Configures request options before making a request.
 * @param {object} opts Options to configure.
 * @return {object} Configured options.
 */
DefaultTransporter.prototype.configure = function(opts) {
  // set transporter user agent
  opts.headers = opts.headers || {};
  opts.headers['User-Agent'] = opts.headers['User-Agent'] ?
      opts.headers['User-Agent'] + ' ' + this.USER_AGENT : this.USER_AGENT;
  return opts;
};

/**
 * Makes a request with given options and invokes callback.
 * @param {object} opts Options.
 * @param {Function=} opt_callback Optional callback.
 * @return {Request} Request object
 */
DefaultTransporter.prototype.request = function(opts, opt_callback) {
  opts = this.configure(opts);
  return request(opts, this.wrapCallback_(opt_callback));
};

/**
 * Wraps the response callback.
 * @param {Function=} opt_callback Optional callback.
 * @return {Function} Wrapped callback function.
 * @private
 */
DefaultTransporter.prototype.wrapCallback_ = function(opt_callback) {
  return function(err, res, body) {
    if (err || !body) {
      return opt_callback && opt_callback(err, body, res);
    }
    // Only and only application/json responses should
    // be decoded back to JSON, but there are cases API back-ends
    // responds without proper content-type.
    try {
      body = JSON.parse(body);
    } catch (err) { /* no op */ }

    if (body && body.error) {
      // handle single request errors
      err = body.error;
      body = null;
    }
    opt_callback && opt_callback(err, body, res);
  };
};

/**
 * Exports DefaultTransporter.
 */
module.exports = DefaultTransporter;
