/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * APIs Discovery Service
 *
 * Provides information about other Google APIs, such as what APIs are available, the resource, and method details for each API.
 *
 * @example
 * var google = require('googleapis');
 * var discovery = google.discovery('v1');
 *
 * @namespace discovery
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Discovery
 */
function Discovery(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.apis = {

    /**
     * discovery.apis.getRest
     *
     * @desc Retrieve the description of a particular version of an api.
     *
     * @alias discovery.apis.getRest
     * @memberOf! discovery(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.api The name of the API.
     * @param {string} params.version The version of the API.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRest: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/discovery/v1/apis/{api}/{version}/rest',
          method: 'GET'
        },
        params: params,
        requiredParams: ['api', 'version'],
        pathParams: ['api', 'version'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * discovery.apis.list
     *
     * @desc Retrieve the list of APIs supported at this endpoint.
     *
     * @alias discovery.apis.list
     * @memberOf! discovery(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.name Only include APIs with the given name.
     * @param {boolean=} params.preferred Return only the preferred version of an API.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/discovery/v1/apis',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Discovery;
