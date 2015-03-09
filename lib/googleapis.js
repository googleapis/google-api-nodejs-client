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
var Multipart = require('multipart-stream');
var MemoryStream = require('memorystream');

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
    var memStream = new MemoryStream();
    //var body = [];
    var path = request.url.replace(rootUrl, '');

    //if there is a query string, append it to the end of the path
    if (request.qs) {
      var querystring = Qs.stringify(request.qs);
      path += querystring ? '?' + querystring : '';
    }

    //Add the request method and path to the request
    memStream.write(request.method + ' ' + path + '\r\n');
    //Now we add request headers
    /*
     * assume that request.json means that 
     * request.headers does not contain a content-type
     */
    if (request.json) {
      memStream.write('content-type: application/json\r\n');
    }
    else if (request.headers) {
      for (var key in request.headers) {
        memStream.write(key + ': ' + request.headers[key] + '\r\n');
      }
    }
    //Add one line before body of request is inputted
    memStream.write('\r\n');

    //If the request body is a multipart
    if (Array.isArray(request.multipart) && request.multipart.length > 0) {
      var mp = new Multipart();
      request.multipart.forEach(function(part) {
        var part_to_add = {
          headers: {
            'Content-Type': part['Content-Type']
          },
          body: part.body
        };
        mp.addPart(part_to_add);
      });
      mp.pipe(memStream);
    }
    //Otherwise, if the request body is just a stream
    else if (request.stream_body) {
      request.stream_body.pipe(memStream);
    }
    //If the request's body is a JSON object
    else if (typeof request.json === 'object' && Object.keys(request.json).length !== 0) {
      memStream.write(JSON.stringify(request.json) + '\r\n');
      memStream.end();
    }
    //Otherwise, just end the stream to not hang
    else {
      memStream.end();
    }

    multipart.push({
      'Content-Type': 'application/http',
      'Content-ID': pos,
      body: memStream
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
