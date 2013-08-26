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

var async = require('async'),
    Cache = require('./cache.js'),
    Client = require('./client.js'),
    DefaultTransporter = require('./transporters.js'),
    qs = require('querystring'),
    requests = require('./requests.js'),
    fs = require('fs');

/**
 * @constructor
 * GoogleApisClient constructor.
 */
function GoogleApisClient() {
  this.clients = [];
  this.ops = {};
  this.authClient = null;
}

/**
 * Add a new individual client to the instance.
 * @param {String} name
 * @param {Client} client
 */
GoogleApisClient.prototype.add = function(name, client) {
  this[name] = client.withAuthClient(this.authClient);
};

/**
 * Creates a new batch request.
 * @return {BatchRequest} New batch request.
 */
GoogleApisClient.prototype.newBatchRequest = function() {
  return new requests.BatchRequest()
    .withAuthClient(this.authClient);
};

/**
 * Adds global auth client.
 *
 * @param {auth.AuthClient} client An auth client instance.
 *
 * @return {Client} Returns itself.
 */
GoogleApisClient.prototype.withAuthClient = function(client) {
  this.authClient = client;
  return this;
};

/**
 * @constructor
 * GoogleApis constructor.
 */
function GoogleApis() {
  this.opts = {};
  this.toBeDiscovered = [];
  this.transporter = exports.Transporter || new DefaultTransporter();
  this.authClient = null;
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
GoogleApis.DISCOVERY_TYPE_ = 'rest';

/**
 * @const
 * @private
 * Additional discovery parameters.
 * @type {object}
 */
GoogleApis.DISCOVERY_PARAMS_ = null;

/**
 * Discover the API with the given name, version and opt options.
 * @param  {String} name The name of the API.
 * @param  {String} version The version of the API.
 * @param  {Object} opt_opts Additional options.
 * @return {GoogleApis} Returns itself.
 */
GoogleApis.prototype.discover = function(name, version, opt_opts) {
  var alreadyDiscovered = this.toBeDiscovered.some(function(discovery) {
    return (discovery.name === name);
  });
  
	if (!alreadyDiscovered) {
    this.toBeDiscovered.push({
        name: name, version: version, opts: opt_opts });
  }
  return this;
};

/**
 * Executes requests to discover APIs.
 * @param  {Function=} opt_callback
 */
GoogleApis.prototype.execute = function(opt_callback) {
  var that = this,
      operations = [],
      client = new GoogleApisClient()
        .withAuthClient(this.authClient);

  this.toBeDiscovered.forEach(function(obj) {
    operations.push(function(callback) {
      that.load.call(that, obj, callback);
    });
  });

  async.parallel(operations, function(err, results) {
    if (err) {
      opt_callback && opt_callback(err, null);
    } else {
      results = results || [];
      results.forEach(function(result) {
        // extend client object with indivual clients.
        client.add(result.getName(), result);
      });
      opt_callback && opt_callback(null, client);
    }
  });
};

/**
 * Generates a client through discovery API.
 * @param {String} api An object to represent the api name, version and opts.
 * @param {Function=} opt_callback Optional callback function.
 */
GoogleApis.prototype.load = function(api, opt_callback) {
  var that = this;
  var cache = new Cache(this.opts.cache);

  if (api.opts && api.opts.localDiscoveryFilePath) {
    that.loadFromFile(api.opts.localDiscoveryFilePath, opt_callback);
    return;
  }

  var generateClient = function(err, data) {
    var client = null;
    if (!err && data) {
      cache.write(api, data);
      client = new Client(data);
    }
    opt_callback && opt_callback(err, client);
  };

  var data = cache.load(api);
  if (data) {
    generateClient(null, data);
  } else {
    that.transporter.request({
      uri: that.generateDiscoveryUrl(api), json: true
    }, generateClient);
  }
};

/**
 * Generates a client from a local discovery file.
 * @param {String} filename Path of the local discovery file.
 * @param {Function=} opt_callback Optional callback function.
 */
GoogleApis.prototype.loadFromFile = function(filename, opt_callback) {
  fs.readFile(filename, function(err, data) {
    var client = null;
    if (!err && data) {
      client = new Client(JSON.parse(data));
    }
    opt_callback && opt_callback(err, client);
  });
};

/**
 * Generates the discovery url.
 * @param {String} api An object to represent the api name, version and opts.
 * @return {string} discoveryUrl.
 */
GoogleApis.prototype.generateDiscoveryUrl = function(api) {
  api.opts = api.opts || {};
  var baseDiscoveryUrl = api.opts.baseDiscoveryUrl ||
      GoogleApis.BASE_DISCOVERY_URL_;

  var discoveryParams = api.opts.discoveryParams ||
      GoogleApis.DISCOVERY_PARAMS_;

  var discoveryUrl = baseDiscoveryUrl;
  discoveryUrl += encodeURIComponent(api.name) +
      '/' + encodeURIComponent(api.version) +
      '/' + GoogleApis.DISCOVERY_TYPE_;

  if (discoveryParams) {
    discoveryUrl += '?' + qs.stringify(discoveryParams);
  }

  return discoveryUrl;
};

/**
 * Adds options.
 *
 * @param {object} opts Options.
 * @return {GoogleApis} Returns itself.
 */
GoogleApis.prototype.withOpts = function(opts) {
  this.opts = opts;
  return this;
};

/**
 * Adds global auth client.
 *
 * @param {auth.AuthClient} client An auth client instance.
 * @return {GoogleApis} Returns itself.
 */
GoogleApis.prototype.withAuthClient = function(client) {
  this.authClient = client;
  return this;
};

var googleapis = new GoogleApis();

/**
 * Shortcut to GoogleApis.
 */
googleapis.GoogleApis = GoogleApis;

/**
 * Shortcut to OAuth2Client.
 */
googleapis.OAuth2Client = require('./auth/oauth2client.js');

/**
 * Shortcut to Auth.
 */
googleapis.auth = {
  Compute: require('./auth/computeclient.js'),
  JWT: require('./auth/jwtclient.js'),
  OAuth2Client: googleapis.OAuth2Client
};

/**
 * Exports googleapis.
 */
module.exports = googleapis;

/**
 * Exports Transporter.
 */
exports.Transporter = null;
