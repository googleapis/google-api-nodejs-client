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
 * Safe Browsing APIs
 *
 * Enables client applications to check web resources (most commonly URLs) against Google-generated lists of unsafe web resources.
 *
 * @example
 * var google = require('googleapis');
 * var safebrowsing = google.safebrowsing('v4');
 *
 * @namespace safebrowsing
 * @type {Function}
 * @version v4
 * @variation v4
 * @param {object=} options Options for Safebrowsing
 */
function Safebrowsing(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.threatMatches = {

    /**
     * safebrowsing.threatMatches.find
     *
     * @desc Finds the threat entries that match the Safe Browsing lists.
     *
     * @alias safebrowsing.threatMatches.find
     * @memberOf! safebrowsing(v4)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    find: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://safebrowsing.googleapis.com/v4/threatMatches:find',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.threatListUpdates = {

    /**
     * safebrowsing.threatListUpdates.fetch
     *
     * @desc Fetches the most recent threat list updates. A client can request updates for multiple lists at once.
     *
     * @alias safebrowsing.threatListUpdates.fetch
     * @memberOf! safebrowsing(v4)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    fetch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.fullHashes = {

    /**
     * safebrowsing.fullHashes.find
     *
     * @desc Finds the full hashes that match the requested hash prefixes.
     *
     * @alias safebrowsing.fullHashes.find
     * @memberOf! safebrowsing(v4)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    find: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://safebrowsing.googleapis.com/v4/fullHashes:find',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.threatLists = {

    /**
     * safebrowsing.threatLists.list
     *
     * @desc Lists the Safe Browsing threat lists available for download.
     *
     * @alias safebrowsing.threatLists.list
     * @memberOf! safebrowsing(v4)
     *
     * @param {object=} params Parameters for request
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://safebrowsing.googleapis.com/v4/threatLists',
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

module.exports = Safebrowsing;
