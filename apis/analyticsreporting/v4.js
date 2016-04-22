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
 * Analytics Reporting API V4
 *
 * The Analytics Reporting API provides access to Analytics report data.
 *
 * @example
 * var google = require('googleapis');
 * var analyticsreporting = google.analyticsreporting('v4');
 *
 * @namespace analyticsreporting
 * @type {Function}
 * @version v4
 * @variation v4
 * @param {object=} options Options for Analyticsreporting
 */
function Analyticsreporting(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.reports = {

    /**
     * analyticsreporting.reports.batchGet
     *
     * @desc Returns the Analytics data.
     *
     * @alias analyticsreporting.reports.batchGet
     * @memberOf! analyticsreporting(v4)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://analyticsreporting.googleapis.com/v4/reports:batchGet',
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

module.exports = Analyticsreporting;
