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

var Multipart = require('multipart-stream');
var utils = require('./utils.js');
var DefaultTransporter = require('./transporters.js');
var transporter = new DefaultTransporter();


function logErrorOnly(err) {
  if (err) {
    console.error(err);
  }
}

function createCallback(callback) {
  return typeof callback === 'function' ? callback : logErrorOnly;
}

function isValidParams(params, keys, callback) {
  var key;
  for (key in keys) {
    if (!params[keys[key]]) {
      callback(new Error('Missing required parameter: ' + keys[key]), null);
      return false;
    }
  }
  return true;
}

/**
 * Create and send request to Google API
 * @param  {object}   parameters Parameters used to form request
 * @param  {Function} callback   Callback when request finished or error found
 * @return {Request}             Returns Request object or null
 */
function createAPIRequest(parameters, callback) {
  var req;
  var context = parameters.context;
  var params = parameters.params;
  var options = parameters.options || {};
  var isMedia = parameters.isMedia || false;
  var requiredParams = parameters.requiredParams || [];
  var pathParams = parameters.pathParams || [];

  /**
   * If the params are not present, and callback was passed instead,
   * use params as the callback and create empty params.
   */
  if (typeof(params) === 'function') {
    callback = params;
    params = {};
  } else {
    params = utils.extend({}, params);
  }

  var callback = createCallback(callback);

  if (!isValidParams(params, requiredParams, callback)) {
    return null;
  }

  var method = options.method;
  var media = params.media;
  var resource = params.resource;
  var authClient = params.auth || context._options.auth || context.google._options.auth;
  delete params.media;
  delete params.resource;
  delete params.auth;

  // delete required parameters
  for (var i in pathParams) {
    delete params[pathParams[i]];
  }

  // if authClient is actually a string, use it as an API KEY
  if (typeof authClient === 'string') {
    params.key = params.key || authClient;
    authClient = null;
  }

  if (isMedia) {
    // Create a boundary identifier and multipart read stream
    var boundary = Math.random().toString(36).slice(2);
    var mp = new Multipart(boundary);

    // Always a multipart upload
    params.uploadType = 'multipart';

    options.headers = {
      'Content-Type': 'multipart/related; boundary="' + boundary + '"'
    };

    // Add parts to multipart request
    if (resource) {
      mp.addPart({
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resource)
      });
    }

    mp.addPart({
      headers: {
        'Content-Type': resource && resource.mimeType || 'application/octet-stream'
      },
      body: media // can be a readable stream or raw string!
    });
  }
  else {
    options.json = resource || ((method === 'GET' || method === 'DELETE') ? true : {});
  }

  options.qs = params;
  options = utils.extend({}, context.google._options, context._options, options);
  delete options.auth; // is overridden by our auth code

  // create request (using authClient or otherwise and return request obj)
  if (authClient) {
    req = authClient.request(options, callback);
  } else {
    req = transporter.request(options, callback);
  }

  if (mp) mp.pipe(req);
  return req;
}

/**
 * Exports helper functionsj
 * @type {object}
 */
module.exports = {
  createAPIRequest: createAPIRequest
};
