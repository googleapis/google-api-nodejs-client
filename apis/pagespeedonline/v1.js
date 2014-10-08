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
 * PageSpeed Insights API
 *
 * @classdesc Lets you analyze the performance of a web page and get tailored suggestions to make that page faster.
 * @namespace pagespeedonline
 * @version  v1
 * @variation v1
 * @this Pagespeedonline
 * @param {object=} options Options for Pagespeedonline
 */
function Pagespeedonline(options) {

  var self = this;
  this._options = options || {};

  this.pagespeedapi = {

    /**
     * pagespeedonline.pagespeedapi.runpagespeed
     *
     * @desc Runs Page Speed analysis on the page at the specified URL, and returns a Page Speed score, a list of suggestions to make that page faster, and other information.
     *
     * @alias pagespeedonline.pagespeedapi.runpagespeed
     * @memberOf! pagespeedonline(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.filter_third_party_resources - Indicates if third party resources should be filtered out before PageSpeed analysis.
     * @param  {string=} params.locale - The locale used to localize formatted results
     * @param  {string=} params.rule - A Page Speed rule to run; if none are given, all rules are run
     * @param  {boolean=} params.screenshot - Indicates if binary data containing a screenshot should be included
     * @param  {string=} params.strategy - The analysis strategy to use
     * @param  {string} params.url - The URL to fetch and analyze
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    runpagespeed: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed',
          method: 'GET'
        },
        params: params,
        requiredParams: ['url'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Pagespeedonline object
 * @type Pagespeedonline
 */
module.exports = Pagespeedonline;