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

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * APIs Discovery Service
 *
 * @classdesc Lets you discover information about other Google APIs, such as what APIs are available, the resource and method details for each API.
 * @namespace discovery
 * @version  v1
 * @variation v1
 * @this Discovery
 * @param {object=} options Options for Discovery
 */
function Discovery(options) {

  var self = this;
  this._options = options || {};

  this.apis = {

    /**
     * discovery.apis.getRest
     *
     * @desc Retrieve the description of a particular version of an api.
     *
     * @alias discovery.apis.getRest
     * @memberOf! discovery(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.api - The name of the API.
     * @param  {string} params.version - The version of the API.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getRest: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['api', 'version']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/discovery/v1/apis/' + params.api + '/' + params.version + '/rest',
        method: 'GET'
      };

      delete params.api;
      delete params.version;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * discovery.apis.list
     *
     * @desc Retrieve the list of APIs supported at this endpoint.
     *
     * @alias discovery.apis.list
     * @memberOf! discovery(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.name - Only include APIs with the given name.
     * @param  {boolean=} params.preferred - Return only the preferred version of an API.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/discovery/v1/apis',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Discovery object
 * @type Discovery
 */
module.exports = Discovery;