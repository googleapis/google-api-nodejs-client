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

var DefaultTransporter = require('./transporters.js'),
    querystring = require('querystring');
    stream = require('stream'),
    util = require('util');

function BaseRequest(apiMeta) {
  this.transporter = new DefaultTransporter();
  this.authClient = null;
  this.apiKey = null;
}

BaseRequest.BATCH_URL = 'https://www.googleapis.com/batch';

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
 * Returns true if request requires a parameter.
 * If no metadata is known about the request's method, true is returned.
 * @return {boolean} Returns whether a parameter is required or not.
 */
BaseRequest.prototype.doesRequireParams = function() {
  if (!this.methodMeta) {
    // we dont know much about the method, dont speculate
    // and require parameters
    return true;
  }
  var parameters = this.methodMeta.parameters || {};
  for (var paramName in parameters) {
    if (parameters[paramName].required) {
      return true;
    }
  }
  return false;
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
  opt_callback = opt_callback || function() {};
  var callback = this.handleResponse(opt_callback),
      requestOpts = this.generatePayload();

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
  return function(err, body, res) {
    // TODO: remove this interceptor
    opt_fn && opt_fn(err, body, res);
  };
};

/**
 * Constructs a new Request.
 * @constructor
 *
 * @param {object} apiMeta Schema returned by Discovery API.
 * @param {string} methodName Method name.
 * @param {?object} opt_params Required Parameters. If none are required,
 *                             expected to be not passed.
 * @param {object=} opt_resource Optional resource.
 */
function Request(
  apiMeta, methodMeta, opt_params, opt_body) {
  Request.super_.call(this);
  this.apiMeta = apiMeta;
  this.methodMeta = methodMeta;

  if (!this.doesRequireParams() && !opt_body) {
    this.params = {};
    this.body = opt_params;
  } else {
    this.params = opt_params || {};
    this.body = opt_body;
  }
}

/**
 * Inherits from BaseRequest.
 */
util.inherits(Request, BaseRequest);

/**
 * Generates an HTTP payload with a single request.
 * @return {object} Returns request payload.
 */
Request.prototype.generatePayload = function() {
  var uri = this.apiMeta.baseUrl,
      path = this.methodMeta.path;

  if (this.apiKey) {
    this.params.key = this.apiKey;
  }

  // replace path query parameters, if there are on the path
  for (var paramName in this.params) {
    if (path.indexOf('{' + paramName + '}') >= 0) {
      path = path.replace('{' + paramName + '}', this.params[paramName]);
      delete this.params[paramName];
    }
  }
  
  uri += path;
  // append the oher query parameters
  if (Object.keys(this.params).length > 0) {
    uri += '?' + querystring.stringify(this.params);
  }

  return {
    uri: uri,
    method: this.methodMeta.httpMethod,
    json: this.body || true // so content-type is set to application/json
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
  this.requests_.push(request);
  return this;
};

/**
 * @protected
 * Generates HTTP payload object.
 *
 * @return {object} Generated payload.
 */
BatchRequest.prototype.generatePayload = function() {
  // todo: implement
  var multipart = [];
  this.requests_.forEach(function(request, key) {
    var body = [];
    body.push(request.methodMeta.httpMethod + ' ' + 
        request.apiMeta.basePath +request.methodMeta.path, '');
    if (request.body){
      body.push(JSON.stringify(request.body), '');
    }

    multipart.push({
      'Content-Type': 'application/http',
      'Content-ID': key,
      body: body.join('\r\n')
    });
  });

  return {
    method: 'POST',
    uri: BaseRequest.BATCH_URL,
    multipart: multipart,
    headers: {
      'content-type': 'multipart/mixed'
    }
  };
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
    // todo: implement
    opt_fn(err, body, res);
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
