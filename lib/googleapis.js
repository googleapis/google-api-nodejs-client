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

/**
 * A module for interacting with Google APIs
 * @module google
 */

/**
 * Load the apis from apis index file
 * This file holds all version information
 * @private
 */
var apis = require('../apis');
var DefaultTransporter = require('./transporters.js');
var BatchTransporter = require('./batchtransporter.js');
var Qs = require('qs');

/**
 * GoogleApis constructor.
 * @param {object} options Options to be passed in
 * @constructor
 */
function GoogleApis(options) {
  this.options(options);
  this.addAPIs(apis);
  this.auth = {
    Compute: require('./auth/computeclient.js'),
    JWT: require('./auth/jwtclient.js'),
    OAuth2: require('./auth/oauth2client.js')
  };
  this.GoogleApis = GoogleApis;
}

/**
 * Set options
 * @param  {Object} opts Options to set
 */
GoogleApis.prototype.options = function(opts) {
  this._options = opts || {};
};

/**
 * Add APIs endpoints to googleapis object
 * E.g. googleapis.drive and googleapis.datastore
 *
 * @param {Array} apis Apis to be added
 * @private
 */
GoogleApis.prototype.addAPIs = function(apis) {
  for (var apiName in apis) {
    this[apiName] = apis[apiName].bind(this);
  }
};

/**
 * Makes a batch request to google and receives an object with 
 *
 * @param {Object} params Params used to make a batch request. Must contain reqs
 * @param  {Function} callback   Callback when batch request is finished or error found
 */
GoogleApis.prototype.batch = function(params, callback) {
  var multipart = [],
      rootUrl = 'https://www.googleapis.com';
  var reqs, authClient;
  if (typeof params === 'object') {
    reqs = params.reqs;
    authClient = params.auth;
  }
  if (!Array.isArray(reqs)) {
    return callback(new Error('reqs should be an array of requests.'));
  }
  
  reqs.forEach(function(request, pos) {
    var body = [];
    var path = request.url.replace('https://www.googleapis.com', '');

    //if there is a query string, append it to the end of the path
    if (request.useQuerystring && request.qs) {
      var querystring = Qs.stringify(request.qs);
      path += querystring ? '?' + querystring : '';
    }

    //request methods + path
    body.push(request.method + ' ' + path);
    //request headers
    if (request.json) {
      body.push('content-type: application/json');
    }
    body.push('');

    if (request.json && request.method === 'POST' && Object.keys(request.json).length !== 0) {
      body.push(JSON.stringify(request.json), '');
    }

    multipart.push({
      'Content-Type': 'application/http',
      'Content-ID': pos,
      body: body.join('\r\n')
    });
  });

  return new BatchTransporter(authClient ? authClient : new DefaultTransporter()).request({
    method: 'POST',
    uri: rootUrl + '/batch',
    multipart: multipart,
    headers: {
      'content-type': 'multipart/mixed'
    }
  }, callback);
};

var google = new GoogleApis();

/**
 * Exports googleapis.
 */
module.exports = google;
