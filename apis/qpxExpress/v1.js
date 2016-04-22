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
 * QPX Express API
 *
 * Finds the least expensive flights between an origin and a destination.
 *
 * @example
 * var google = require('googleapis');
 * var qpxExpress = google.qpxExpress('v1');
 *
 * @namespace qpxExpress
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Qpxexpress
 */
function Qpxexpress(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.trips = {

    /**
     * qpxExpress.trips.search
     *
     * @desc Returns a list of flights.
     *
     * @alias qpxExpress.trips.search
     * @memberOf! qpxExpress(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/qpxExpress/v1/trips/search',
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

module.exports = Qpxexpress;
