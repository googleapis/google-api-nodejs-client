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

var Client = require('./client.js');
var DefaultTransporter = require('./transporters.js');
var qs = require('querystring');

/**
 * @constructor
 * GoogleApis constructor.
 *
 * @param {string} name Name of the API.
 * @param {string} version Version of the API.
 * @param {object=} opt_config Optional configuration.
 */
function GoogleApis(name, version, opt_config) {
  this.name = name;
  this.version = version;
  this.config = opt_config || {};
  this.transporter = exports.Transporter ||
      new DefaultTransporter();
}

/**
 * @const
 * @private
 * Base path for discovery API.
 * @type {string}
 */
GoogleApis.BASE_DISCOVERY_URL_ =
  'https://www.googleapis.com/discovery/v1/apis/';

/**
 * @const
 * @private
 * Discovery type.
 * @type {string}
 */
// TODO(burcud): Switch to REST.
GoogleApis.DISCOVERY_TYPE_ = 'rpc';

/**
 * @const
 * @private
 * Additional discovery parameters.
 * @type {object}
 */
GoogleApis.DISCOVERY_PARAMS_ = null;

/**
 * Generates a client through discovery API.
 *
 * @param {Function=} opt_callback Optional callback function.
 */
GoogleApis.prototype.load = function(opt_callback) {
  // make the request and generate client
  var opts = {
    uri: this.generateDiscoveryUrl(), json: true
  };

  this.transporter.request(opts, function(err, json, res) {
    var client = null;
    if (!err && json) {
      client = new Client(json);
    }
    opt_callback && opt_callback(err, client);
  });
};

/**
 * Generates the discovery url.
 *
 * @return {string} discoveryUrl.
 */
GoogleApis.prototype.generateDiscoveryUrl = function() {

  var baseDiscoveryUrl = this.config.baseDiscoveryUrl ||
      GoogleApis.BASE_DISCOVERY_URL_;

  var discoveryParams = this.config.discoveryParams ||
      GoogleApis.DISCOVERY_PARAMS_;

  var discoveryUrl = baseDiscoveryUrl;
  discoveryUrl += encodeURIComponent(this.name) +
      '/' + encodeURIComponent(this.version) +
      '/' + GoogleApis.DISCOVERY_TYPE_;

  if (discoveryParams) {
    discoveryUrl += '?' + qs.stringify(discoveryParams);
  }

  return discoveryUrl;
};

/**
 * Export client creating utility.
 *
 * @param {string} name Name of the API (e.g. urlshortener).
 * @param {string} version Version of the API. (e.g. v1).
 * @param {Function} callback Callback fn.
 * @param {object=} opt_config Optional configuration.
 */
exports.load = function(name, version, callback, opt_config) {
  new GoogleApis(name, version, opt_config).load(callback);
};

/**
 * Exports GoogleApis.
 */
exports.GoogleApis = GoogleApis;

/**
 * Exports Transporter.
 */
exports.Transporter = null;

/**
 * Exports OAuth2Client.
 */
exports.OAuth2Client = require('./auth/oauth2client.js');
