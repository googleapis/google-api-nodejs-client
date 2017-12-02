// Copyright 2014-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {DefaultTransporter} from 'google-auth-library/lib/transporters';
import * as stream from 'stream';
import * as parseString from 'string-template';

// tslint:disable-next-line: no-any
function isReadableStream(obj: any) {
  return obj instanceof stream.Readable && typeof obj._read === 'function';
}

function logError(err) {
  if (err) {
    console.error(err);
  }
}

function createCallback(callback) {
  return typeof callback === 'function' ? callback : logError;
}

function getMissingParams(params, required) {
  const missing = [];

  required.forEach(param => {
    // Is the required param in the params object?
    if (params[param] === undefined) {
      missing.push(param);
    }
  });

  // If there are any required params missing, return their names in array,
  // otherwise return null
  return missing.length > 0 ? missing : null;
}

/**
 * Create and send request to Google API
 * @param  {object}   parameters Parameters used to form request
 * @param  {Function} callback   Callback when request finished or error found
 * @return {Request}             Returns Request object or null
 */
export function createAPIRequest(parameters, callback) {
  let req, body, missingParams;
  let params = parameters.params;
  let options = Object.assign({}, parameters.options);

  // If the params are not present, and callback was passed instead,
  // use params as the callback and create empty params.
  if (typeof params === 'function') {
    callback = params;
    params = {};
  }

  // Create a new params object so it can no longer be modified from outside
  // code Also support global and per-client params, but allow them to be
  // overriden per-request
  params = Object.assign(
      {},                                         // New base object
      parameters.context.google._options.params,  // Global params
      parameters.context._options.params,         // Per-client params
      params                                      // API call params
  );

  const media = params.media || {};
  const resource = params.resource;
  let authClient = params.auth || parameters.context._options.auth ||
      parameters.context.google._options.auth;

  const defaultMime = typeof media.body === 'string' ?
      'text/plain' :
      'application/octet-stream';
  delete params.media;
  delete params.resource;
  delete params.auth;

  // Grab headers from user provided options
  const headers = params.headers || {};
  delete params.headers;

  // Un-alias parameters that were modified due to conflicts with reserved names
  Object.keys(params).forEach(key => {
    if (key.slice(-1) === '_') {
      const newKey = key.slice(0, -1);
      params[newKey] = params[key];
      delete params[key];
    }
  });

  // Normalize callback
  callback = createCallback(callback);

  // Check for missing required parameters in the API request
  missingParams = getMissingParams(params, parameters.requiredParams);
  if (missingParams) {
    // Some params are missing - stop further operations and inform the
    // developer which required params are not included in the request
    callback(
        new Error('Missing required parameters: ' + missingParams.join(', ')));

    return null;
  }

  // Parse urls
  if (options.url) {
    options.url = parseString(options.url, params);
  }
  if (parameters.mediaUrl) {
    parameters.mediaUrl = parseString(parameters.mediaUrl, params);
  }

  // delete path parameters from the params object so they do not end up in
  // query
  parameters.pathParams.forEach(param => {
    delete params[param];
  });

  // if authClient is actually a string, use it as an API KEY
  if (typeof authClient === 'string') {
    params.key = params.key || authClient;
    authClient = null;
  }

  if (parameters.mediaUrl && media.body) {
    options.url = parameters.mediaUrl;
    if (resource) {
      params.uploadType = 'multipart';
      options.multipart = [
        {'Content-Type': 'application/json', body: JSON.stringify(resource)}, {
          'Content-Type':
              media.mimeType || (resource && resource.mimeType) || defaultMime,
          body: media.body  // can be a readable stream or raw string!
        }
      ];
    } else {
      params.uploadType = 'media';
      Object.assign(headers, {'Content-Type': media.mimeType || defaultMime});

      if (isReadableStream(media.body)) {
        body = media.body;
      } else {
        options.body = media.body;
      }
    }
  } else {
    options.json = resource ||
        ((options.method === 'GET' || options.method === 'DELETE') ? true : {});
  }

  options.headers = headers;
  options.qs = params;
  options.useQuerystring = true;

  options = Object.assign(
      {}, parameters.context.google._options, parameters.context._options,
      options);
  delete options.auth;    // is overridden by our auth code
  delete options.params;  // We handle params ourselves and Request does not
                          // recognise 'params'

  // create request (using authClient or otherwise and return request obj)
  if (authClient) {
    req = authClient.request(options, callback);
  } else {
    req = new DefaultTransporter().request(options, callback);
  }

  if (body) {
    body.pipe(req);
  }
  return req;
}
