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
 * QPX Express API
 *
 * @classdesc Lets you find the least expensive flights between an origin and a destination.
 * @namespace qpxExpress
 * @version  v1
 * @variation v1
 * @this Qpxexpress
 * @param {object=} options Options for Qpxexpress
 */
function Qpxexpress(options) {

  var self = this;
  this._options = options || {};

  this.trips = {

    /**
     * qpxExpress.trips.search
     *
     * @desc Returns a list of flights.
     *
     * @alias qpxExpress.trips.search
     * @memberOf! qpxExpress(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/qpxExpress/v1/trips/search',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Qpxexpress object
 * @type Qpxexpress
 */
module.exports = Qpxexpress;