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

var BatchParser = require('./exp/batchparser'),
    DefaultTransporter = require('./transporters.js'),
    utils = require('./utils.js'),
    querystring = require('querystring'),
    url = require('url'),
    util = require('util');


function BaseRequest(apiMeta) {
  this.transporter = new DefaultTransporter();
  this.authClient = null;
  this.apiKey = null;
}

BaseRequest.BASE_URL = 'https://www.googleapis.com';

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
 * Returns true if given params contains a query parameter key.
 * If no metadata is known about the request's method, true is returned.
 *
 * @param {object} params The parameters object.
 * @return {boolean} Returns whether a parameter is required or not.
 */
BaseRequest.prototype.containsQueryParams = function(params) {
  params = params || {};
  if (!this.methodMeta) {
    // we dont know much about the method, dont speculate
    // and require parameters
    return true;
  }
  var parameters = this.methodMeta.parameters || {};
  for (var paramName in parameters) {
    if ((parameters[paramName].location == 'query' ||
         parameters[paramName].location == 'path') &&
        params[paramName]) {
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
BaseRequest.prototype.generatePayload = function(rootUrl) {
  return null;
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
  apiMeta, methodMeta, opt_params, opt_body, opt_defaultParams) {
  Request.super_.call(this);
  this.apiMeta = apiMeta;
  this.methodMeta = methodMeta;

  // move params to body.
  if (!this.containsQueryParams(opt_params) && !opt_body) {
    this.params = {};
    this.body = opt_params;
  } else {
    this.params = opt_params || {};
    this.body = opt_body;
  }
  if (opt_defaultParams) {
    this.params = utils.extend(utils.extend({}, opt_defaultParams),
                               this.params);
  }
}

/**
 * Inherits from BaseRequest.
 */
util.inherits(Request, BaseRequest);

/**
 * Generates path to the method with given params.
 * @param  {object} queryParams Query params.
 * @return {String}             The method's REST path.
 */
Request.prototype.generatePath = function(queryParams) {
  var path = this.apiMeta.basePath + this.methodMeta.path;

  queryParams = queryParams || {};
  if (this.apiKey) {
    queryParams.key = this.apiKey;
  }

  // replace path query parameters, if there are on the path
  for (var paramName in queryParams) {
    if (path.indexOf('{' + paramName + '}') >= 0) {
      path = path.replace('{' + paramName + '}', queryParams[paramName]);
      delete queryParams[paramName];
    }
  }
  // append the oher query parameters
  if (Object.keys(queryParams).length > 0) {
    path += '?' + querystring.stringify(queryParams);
  }
  return path;
};

/**
 * Generates an HTTP payload with a single request.
 * @return {object} Returns request payload.
 */
Request.prototype.generatePayload = function(rootUrl) {
  return !this.media ? this.generateBody(rootUrl) : this.generateUploadBody(rootUrl);
};

/**
 * Generates request opts.
 * @return {object} The request object.
 */
Request.prototype.generateBody = function(rootUrl) {
  var path = this.generatePath(this.params);
  return {
    uri: rootUrl + path,
    path: path,
    method: this.methodMeta.httpMethod,
    json: this.body
  };
};

/**
 * Generates the request opts with media upload. If a body is set,
 * creates a multipart request body.
 * @return {object} The request opts.
 */
Request.prototype.generateUploadBody = function(rootUrl) {
  var params = this.params || {};

  if (!this.body) {
    params.uploadType = 'media';

    return {
      uri: rootUrl + '/upload' + this.generatePath(params),
      method: this.methodMeta.httpMethod,
      headers: {
        'Content-Type': this.media.mimeType,
      },
      body: this.media.data
    };
  }

  // metadata and media parts exist, it's a multipart request
  params.uploadType = 'multipart';

  return {
    uri: rootUrl + '/upload' + this.generatePath(params),
    method: this.methodMeta.httpMethod,
    multipart: [{
      'Content-Type': 'application/json',
      body: JSON.stringify(this.body)
    }, {
      'Content-Type': this.media.mimeType,
      body: this.media.data
    }]
  };
};

/**
 * Attachs a media to the request.
 * @param  {string} mimeType The mimetype of the media.
 * @param  {Stream} data     The media stream.
 * @return {Request}         Returns itself.
 */
Request.prototype.withMedia = function(mimeType, data) {
  this.media = {
    mimeType: mimeType,
    data: data
  };
  return this;
};

/**
 * Executes the request.
 *
 * @param {Function=} opt_callback Optional callback function.
 */
Request.prototype.execute = function(opt_callback) {
  opt_callback = opt_callback || function() {};

  var rootUrl = (this.apiMeta && this.apiMeta.rootUrl),
      callback = this.handleResponse(opt_callback),
      requestOpts = this.generatePayload(rootUrl);

  if (this.authClient) {
    this.authClient.request(requestOpts, callback);
  } else {
    // make the request with default client
    this.transporter.request(requestOpts, callback);
  }
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
BatchRequest.prototype.generatePayload = function(rootUrl) {
  // todo: implement
  var multipart = [];
  this.requests_.forEach(function(request, key) {
    var body = [];
    var payload = request.generatePayload(rootUrl);
    body.push(payload.method + ' ' + payload.path, '');

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
    uri: rootUrl + '/batch',
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
    if (err) {
      return opt_fn && opt_fn(err, body, res);
    }
    // TODO: fix boundary retrival with regex
    var boundary = res.headers['content-type'].split('boundary=')[1];
    new BatchParser(boundary, body).parse(function(err, results) {
      results = results || [];
      var errors = null;
      for (var i = 0; i < results.length; i++) {
        if (results[i].error) {
          errors = errors || [];
          errors[i] = results[i].error;
          delete results[i];
        }
      }
      opt_fn(err || errors, results, res);
    });
  };
};

/**
 * Executes the batch request.
 *
 * @param {Function=} opt_callback Optional callback function.
 */
BatchRequest.prototype.execute = function(opt_callback) {
  opt_callback = opt_callback || function() {};
  var callback = this.handleResponse(opt_callback),
      requestOpts = this.generatePayload(BaseRequest.BASE_URL);

  if (this.authClient) {
    this.authClient.request(requestOpts, callback);
  } else {
    // make the request with default client
    this.transporter.request(requestOpts, callback);
  }
};

/**
 * Exports Request.
 */
exports.Request = Request;

/**
 * Exports BatchRequest.
 */
exports.BatchRequest = BatchRequest;
