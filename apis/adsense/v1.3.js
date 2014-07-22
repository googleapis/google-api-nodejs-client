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
 * AdSense Management API
 *
 * @classdesc Gives AdSense publishers access to their inventory and the ability to generate reports
 * @namespace adsense
 * @version  v1.3
 * @variation v1.3
 * @this Adsense
 * @param {object=} options Options for Adsense
 */
function Adsense(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    /**
     * adsense.accounts.get
     *
     * @desc Get information about the selected AdSense account.
     *
     * @alias adsense.accounts.get
     * @memberOf! adsense(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - Account to get information about.
     * @param  {boolean=} params.tree - Whether the tree of sub accounts should be returned.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/accounts/' + params.accountId,
        method: 'GET'
      };

      delete params.accountId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsense.accounts.list
     *
     * @desc List all accounts available to this AdSense account.
     *
     * @alias adsense.accounts.list
     * @memberOf! adsense(v1.3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of accounts to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/accounts',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.adclients = {

    /**
     * adsense.adclients.list
     *
     * @desc List all ad clients in this AdSense account.
     *
     * @alias adsense.adclients.list
     * @memberOf! adsense(v1.3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of ad clients to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/adclients',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.adunits = {

    /**
     * adsense.adunits.get
     *
     * @desc Gets the specified ad unit in the specified ad client.
     *
     * @alias adsense.adunits.get
     * @memberOf! adsense(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to get the ad unit.
     * @param  {string} params.adUnitId - Ad unit to retrieve.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId', 'adUnitId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/adclients/' + params.adClientId + '/adunits/' + params.adUnitId,
        method: 'GET'
      };

      delete params.adClientId;
      delete params.adUnitId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsense.adunits.getAdCode
     *
     * @desc Get ad code for the specified ad unit.
     *
     * @alias adsense.adunits.getAdCode
     * @memberOf! adsense(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client with contains the ad unit.
     * @param  {string} params.adUnitId - Ad unit to get the code for.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getAdCode: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId', 'adUnitId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/adclients/' + params.adClientId + '/adunits/' + params.adUnitId + '/adcode',
        method: 'GET'
      };

      delete params.adClientId;
      delete params.adUnitId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsense.adunits.list
     *
     * @desc List all ad units in the specified ad client for this AdSense account.
     *
     * @alias adsense.adunits.list
     * @memberOf! adsense(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to list ad units.
     * @param  {boolean=} params.includeInactive - Whether to include inactive ad units. Default: true.
     * @param  {integer=} params.maxResults - The maximum number of ad units to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/adclients/' + params.adClientId + '/adunits',
        method: 'GET'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.alerts = {

    /**
     * adsense.alerts.list
     *
     * @desc List the alerts for this AdSense account.
     *
     * @alias adsense.alerts.list
     * @memberOf! adsense(v1.3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.locale - The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/alerts',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.customchannels = {

    /**
     * adsense.customchannels.get
     *
     * @desc Get the specified custom channel from the specified ad client.
     *
     * @alias adsense.customchannels.get
     * @memberOf! adsense(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client which contains the custom channel.
     * @param  {string} params.customChannelId - Custom channel to retrieve.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId', 'customChannelId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/adclients/' + params.adClientId + '/customchannels/' + params.customChannelId,
        method: 'GET'
      };

      delete params.adClientId;
      delete params.customChannelId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsense.customchannels.list
     *
     * @desc List all custom channels in the specified ad client for this AdSense account.
     *
     * @alias adsense.customchannels.list
     * @memberOf! adsense(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to list custom channels.
     * @param  {integer=} params.maxResults - The maximum number of custom channels to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/adclients/' + params.adClientId + '/customchannels',
        method: 'GET'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.metadata = {

    dimensions: {

      /**
       * adsense.metadata.dimensions.list
       *
       * @desc List the metadata for the dimensions available to this AdSense account.
       *
       * @alias adsense.metadata.dimensions.list
       * @memberOf! adsense(v1.3)
       *
       * @param  {object=} params - Parameters for request
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/adsense/v1.3/metadata/dimensions',
          method: 'GET'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    },
    metrics: {

      /**
       * adsense.metadata.metrics.list
       *
       * @desc List the metadata for the metrics available to this AdSense account.
       *
       * @alias adsense.metadata.metrics.list
       * @memberOf! adsense(v1.3)
       *
       * @param  {object=} params - Parameters for request
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/adsense/v1.3/metadata/metrics',
          method: 'GET'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    }

  };

  this.reports = {

    /**
     * adsense.reports.generate
     *
     * @desc Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     *
     * @alias adsense.reports.generate
     * @memberOf! adsense(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.accountId - Accounts upon which to report.
     * @param  {string=} params.currency - Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     * @param  {string=} params.dimension - Dimensions to base the report on.
     * @param  {string} params.endDate - End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param  {string=} params.filter - Filters to be run on the report.
     * @param  {string=} params.locale - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     * @param  {integer=} params.maxResults - The maximum number of rows of report data to return.
     * @param  {string=} params.metric - Numeric columns to include in the report.
     * @param  {string=} params.sort - The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     * @param  {string} params.startDate - Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param  {integer=} params.startIndex - Index of the first row of report data to return.
     * @param  {boolean=} params.useTimezoneReporting - Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    generate: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['startDate', 'endDate']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/reports',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.savedadstyles = {

    /**
     * adsense.savedadstyles.get
     *
     * @desc Get a specific saved ad style from the user's account.
     *
     * @alias adsense.savedadstyles.get
     * @memberOf! adsense(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.savedAdStyleId - Saved ad style to retrieve.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['savedAdStyleId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/savedadstyles/' + params.savedAdStyleId,
        method: 'GET'
      };

      delete params.savedAdStyleId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsense.savedadstyles.list
     *
     * @desc List all saved ad styles in the user's account.
     *
     * @alias adsense.savedadstyles.list
     * @memberOf! adsense(v1.3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of saved ad styles to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/savedadstyles',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.urlchannels = {

    /**
     * adsense.urlchannels.list
     *
     * @desc List all URL channels in the specified ad client for this AdSense account.
     *
     * @alias adsense.urlchannels.list
     * @memberOf! adsense(v1.3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to list URL channels.
     * @param  {integer=} params.maxResults - The maximum number of URL channels to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsense/v1.3/adclients/' + params.adClientId + '/urlchannels',
        method: 'GET'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Adsense object
 * @type Adsense
 */
module.exports = Adsense;