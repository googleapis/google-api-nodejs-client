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
 * YouTube Analytics API
 *
 * @classdesc Retrieve your YouTube Analytics reports.
 * @namespace youtubeAnalytics
 * @version  v1
 * @variation v1
 * @this Youtubeanalytics
 * @param {object=} options Options for Youtubeanalytics
 */
function Youtubeanalytics(options) {

  var self = this;
  this._options = options || {};

  this.batchReportDefinitions = {

    /**
     * youtubeAnalytics.batchReportDefinitions.list
     *
     * @desc Retrieves a list of available batch report definitions.
     *
     * @alias youtubeAnalytics.batchReportDefinitions.list
     * @memberOf! youtubeAnalytics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['onBehalfOfContentOwner']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/youtube/analytics/v1/batchReportDefinitions',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.batchReports = {

    /**
     * youtubeAnalytics.batchReports.list
     *
     * @desc Retrieves a list of processed batch reports.
     *
     * @alias youtubeAnalytics.batchReports.list
     * @memberOf! youtubeAnalytics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.batchReportDefinitionId - The batchReportDefinitionId parameter specifies the ID of the batch reportort definition for which you are retrieving reports.
     * @param  {string} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['batchReportDefinitionId', 'onBehalfOfContentOwner']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/youtube/analytics/v1/batchReports',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.reports = {

    /**
     * youtubeAnalytics.reports.query
     *
     * @desc Retrieve your YouTube Analytics reports.
     *
     * @alias youtubeAnalytics.reports.query
     * @memberOf! youtubeAnalytics(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.dimensions - A comma-separated list of YouTube Analytics dimensions, such as views or ageGroup,gender. See the Available Reports document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the Dimensions document for definitions of those dimensions.
     * @param  {string} params.end-date - The end date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
     * @param  {string=} params.filters - A list of filters that should be applied when retrieving YouTube Analytics data. The Available Reports document identifies the dimensions that can be used to filter each report, and the Dimensions document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (;), and the returned result table will satisfy both filters. For example, a filters parameter value of video==dMH0bHeiRNg;country==IT restricts the result set to include data for the given video in Italy.
     * @param  {string} params.ids - Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data. - To request data for a YouTube user, set the ids parameter value to channel==CHANNEL_ID, where CHANNEL_ID specifies the unique YouTube channel ID. - To request data for a YouTube CMS content owner, set the ids parameter value to contentOwner==OWNER_NAME, where OWNER_NAME is the CMS name of the content owner.
     * @param  {integer=} params.max-results - The maximum number of rows to include in the response.
     * @param  {string} params.metrics - A comma-separated list of YouTube Analytics metrics, such as views or likes,dislikes. See the Available Reports document for a list of the reports that you can retrieve and the metrics available in each report, and see the Metrics document for definitions of those metrics.
     * @param  {string=} params.sort - A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '-' prefix causes descending sort order.
     * @param  {string} params.start-date - The start date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
     * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    query: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['ids', 'start-date', 'end-date', 'metrics']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/youtube/analytics/v1/reports',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Youtubeanalytics object
 * @type Youtubeanalytics
 */
module.exports = Youtubeanalytics;