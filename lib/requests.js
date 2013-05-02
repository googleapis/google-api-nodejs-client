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

var util = require('util');
var querystring = require('querystring');
var DefaultTransporter = require('./transporters.js');


function BaseRequest(apiMeta) {
  this.transporter = new DefaultTransporter();
  this.authClient = null;
  this.apiKey = null;
}

/**
 * @const
 * @type {String}
 */
BaseRequest.JSONRPC_VERSION = '2.0';

/**
 * @const
 * @type {String}
 */
BaseRequest.JSONRPC_URL = 'https://www.googleapis.com/rpc';

/**
 * Sets the auth client.
 * @param {AuthClient} client An auth client instance.
 * @return {BaseRequest} Returns itself.
 */
BaseRequest.prototype.withAuthClient = function(client) {
  this.authClient = client;
  return this;
};

/**
 * Sets an API key.
 * @param  {String} apiKey
 * @return {BaseRequest} Returns itself.
 */
BaseRequest.prototype.withApiKey = function(apiKey) {
  this.apiKey = apiKey;
  return this;
};

/**
 * @protected
 * Generates uri end-point with given params.
 *
 * @param {object=} opt_params Query parameters or null.
 * @return {string} Generated uri.
 */
BaseRequest.prototype.generateUri = function(opt_params) {
  var url = BaseRequest.JSONRPC_URL;
  opt_params = opt_params || {};

  if (this.apiKey) {
    opt_params.key = this.apiKey;
  }
  var params = querystring.stringify(opt_params);
  if (params) {
    url += '?' + params;
  }
  return url;
};

/**
 * @protected
 * Generates payload body of the request.
 * @return {object?} Request payload.
 */
BaseRequest.prototype.generatePayload = function() {
  return null;
};

/**
 * Executes the batch request.
 *
 * @param {Function=} opt_callback Optional callback function.
 */
BaseRequest.prototype.execute = function(opt_callback) {
  // TODO(burcud): Switch to REST.
  opt_callback = opt_callback || function() {};
  var callback = this.handleResponse(opt_callback);

  var requestOpts = {
    method: 'POST',
    uri: this.generateUri(),
    json: this.generatePayload()
  };

  if (this.authClient) {
    this.authClient.request(requestOpts, callback);
  } else {
    // make the request with default client
    this.transporter.request(requestOpts, callback);
  }
};

/**
 * @protected
 * Wraps request callbacks.
 *
 * @param {Function=} opt_fn Optional callback function to be wrapped.
 * @return {Function} Wrapped callback function.
 */
BaseRequest.prototype.handleResponse = function(opt_fn) {
  throw new Error('Not implemented...');
};

/**
 * Constructs a new Request.
 * @constructor
 *
 * @param {object} apiMeta Schema returned by Discovery API.
 * @param {string} methodName Method name.
 * @param {?object} params Parameters.
 * @param {object=} opt_resource Optional resource.
 */
function Request(apiMeta, methodName, params, opt_resource) {
  Request.super_.call(this);
  this.apiMeta = apiMeta;
  this.methodName = methodName;
  this.params = params;
  this.resource = opt_resource;
}

/**
 * Inherits from BaseRequest.
 */
util.inherits(Request, BaseRequest);

/**
 * Generates JSON-RPC payload with a single request.
 * @return {Array.<object>} Returns request payload.
 */
Request.prototype.generatePayload = function() {
  var request = {
    jsonrpc: BaseRequest.JSONRPC_VERSION,
    id: 0,
    method: this.methodName,
    params: this.params || {},
    apiVersion: this.apiMeta.version
  };

  if (this.resource) {
    request.params.resource = this.resource;
  }

  return [request];
};

/**
 * Handles response.
 * @param {Function=} opt_fn Optional callback function.
 * @return {Function} Wraps response callback and returns.
 */
Request.prototype.handleResponse = function(opt_fn) {
  return function(errors, results, res) {

    var result = null;
    if (results) {
      result = results[0].result;
    }
    var err = null;
    if (errors) {
      err = errors[0];
    }
    opt_fn && opt_fn(err, result, res);
  };
};

/**
 * Constructs a new batch request.
 * @constructor
 */
function BatchRequest() {
  BatchRequest.super_.call(this);
  this.requests_ = [];
}

/**
 * Inherits from BaseRequest.
 */
util.inherits(BatchRequest, BaseRequest);

/**
 * Adds a request to the batch request.
 * @param {Request} request A Request object to add to the batch.
 *
 * @return {BatchRequest} Returns itself.
 */
BatchRequest.prototype.add = function(request) {
  this.requests_.push({
    apiMeta: request.apiMeta,
    method: request.methodName,
    params: request.params,
    resource: request.resource
  });
  return this;
};

/**
 * @protected
 * Generates JSON-RPC payload.
 *
 * @return {Array.<object>} Generated payload.
 */
BatchRequest.prototype.generatePayload = function() {

  var payload = [];
  for (var i = 0; i < this.requests_.length; i++) {
    var request = this.requests_[i];
    request.params = request.params || {};

    if (request.resource) {
      request.params.resource = request.resource;
    }

    payload.push({
      jsonrpc: BaseRequest.JSONRPC_VERSION,
      id: i,
      method: request.method,
      params: request.params,
      apiVersion: request.apiMeta.version
    });
  }
  return payload;
};


/**
 * @protected
 * Wraps request callbacks.
 *
 * @param {Function=} opt_fn Optional callback function to be wrapped.
 * @return {Function} Wrapped callback function.
 */
BatchRequest.prototype.handleResponse = function(opt_fn) {
  return function(err, body, res) {
    var results = null;
    if (body) {
      results = [];
      for (var i in body) {
        results.push(body[i].result || null);
      }
    }
    opt_fn && opt_fn(err, results, res);
  };
};

/**
 * Exports Request.
 */
exports.Request = Request;

/**
 * Exports BatchRequest.
 */
exports.BatchRequest = BatchRequest;
