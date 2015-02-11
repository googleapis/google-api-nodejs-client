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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Cloud Network Performance Monitoring API
 *
 * @classdesc A Test API to report latency data.
 * @namespace cloudlatencytest
 * @version  v2
 * @variation v2
 * @this Cloudlatencytest
 * @param {object=} options Options for Cloudlatencytest
 */
function Cloudlatencytest(options) {

  var self = this;
  this._options = options || {};

  this.statscollection = {

    /**
     * cloudlatencytest.statscollection.updateaggregatedstats
     *
     * @desc RPC to update the new TCP stats.
     *
     * @alias cloudlatencytest.statscollection.updateaggregatedstats
     * @memberOf! cloudlatencytest(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    updateaggregatedstats: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v2/statscollection/updateaggregatedstats',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudlatencytest.statscollection.updatestats
     *
     * @desc RPC to update the new TCP stats.
     *
     * @alias cloudlatencytest.statscollection.updatestats
     * @memberOf! cloudlatencytest(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    updatestats: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v2/statscollection/updatestats',
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
}

/**
 * Exports Cloudlatencytest object
 * @type Cloudlatencytest
 */
module.exports = Cloudlatencytest;