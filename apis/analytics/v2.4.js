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
 * Google Analytics API
 *
 * @classdesc View and manage your Google Analytics data
 * @namespace analytics
 * @version  v2.4
 * @variation v2.4
 * @this Analytics
 * @param {object=} options Options for Analytics
 */
function Analytics(options) {

  var self = this;
  this._options = options || {};

  this.data = {

    /**
     * analytics.data.get
     *
     * @desc Returns Analytics report data for a view (profile).
     *
     * @alias analytics.data.get
     * @memberOf! analytics(v2.4)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.dimensions - A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     * @param  {string} params.end-date - End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
     * @param  {string=} params.filters - A comma-separated list of dimension or metric filters to be applied to the report data.
     * @param  {string} params.ids - Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     * @param  {integer=} params.max-results - The maximum number of entries to include in this feed.
     * @param  {string} params.metrics - A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
     * @param  {string=} params.segment - An Analytics advanced segment to be applied to the report data.
     * @param  {string=} params.sort - A comma-separated list of dimensions or metrics that determine the sort order for the report data.
     * @param  {string} params.start-date - Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
     * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['ids', 'start-date', 'end-date', 'metrics']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/analytics/v2.4/data',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.management = {

    accounts: {

      /**
       * analytics.management.accounts.list
       *
       * @desc Lists all accounts to which the user has access.
       *
       * @alias analytics.management.accounts.list
       * @memberOf! analytics(v2.4)
       *
       * @param  {object=} params - Parameters for request
       * @param  {integer=} params.max-results - The maximum number of accounts to include in this response.
       * @param  {integer=} params.start-index - An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/analytics/v2.4/management/accounts',
          method: 'GET'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    },
    goals: {

      /**
       * analytics.management.goals.list
       *
       * @desc Lists goals to which the user has access.
       *
       * @alias analytics.management.goals.list
       * @memberOf! analytics(v2.4)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
       * @param  {integer=} params.max-results - The maximum number of goals to include in this response.
       * @param  {string} params.profileId - View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
       * @param  {integer=} params.start-index - An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['accountId', 'webPropertyId', 'profileId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/analytics/v2.4/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles/' + params.profileId + '/goals',
          method: 'GET'
        };

        delete params.accountId;

        delete params.profileId;

        delete params.webPropertyId;

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    },
    profiles: {

      /**
       * analytics.management.profiles.list
       *
       * @desc Lists views (profiles) to which the user has access.
       *
       * @alias analytics.management.profiles.list
       * @memberOf! analytics(v2.4)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID for the views (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
       * @param  {integer=} params.max-results - The maximum number of views (profiles) to include in this response.
       * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {string} params.webPropertyId - Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['accountId', 'webPropertyId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/analytics/v2.4/management/accounts/' + params.accountId + '/webproperties/' + params.webPropertyId + '/profiles',
          method: 'GET'
        };

        delete params.accountId;

        delete params.webPropertyId;

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    },
    segments: {

      /**
       * analytics.management.segments.list
       *
       * @desc Lists advanced segments to which the user has access.
       *
       * @alias analytics.management.segments.list
       * @memberOf! analytics(v2.4)
       *
       * @param  {object=} params - Parameters for request
       * @param  {integer=} params.max-results - The maximum number of advanced segments to include in this response.
       * @param  {integer=} params.start-index - An index of the first advanced segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/analytics/v2.4/management/segments',
          method: 'GET'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    },
    webproperties: {

      /**
       * analytics.management.webproperties.list
       *
       * @desc Lists web properties to which the user has access.
       *
       * @alias analytics.management.webproperties.list
       * @memberOf! analytics(v2.4)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
       * @param  {integer=} params.max-results - The maximum number of web properties to include in this response.
       * @param  {integer=} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['accountId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/analytics/v2.4/management/accounts/' + params.accountId + '/webproperties',
          method: 'GET'
        };

        delete params.accountId;

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    }

  };
}

/**
 * Exports Analytics object
 * @type Analytics
 */
module.exports = Analytics;