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
 * AdSense Host API
 *
 * @classdesc Gives AdSense Hosts access to report generation, ad code generation, and publisher management capabilities.
 * @namespace adsensehost
 * @version  v4.1
 * @variation v4.1
 * @this Adsensehost
 * @param {object=} options Options for Adsensehost
 */
function Adsensehost(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    /**
     * adsensehost.accounts.get
     *
     * @desc Get information about the selected associated AdSense account.
     *
     * @alias adsensehost.accounts.get
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - Account to get information about.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/' + params.accountId,
        method: 'GET'
      };

      delete params.accountId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.accounts.list
     *
     * @desc List hosted accounts associated with this AdSense account by ad client id.
     *
     * @alias adsensehost.accounts.list
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.filterAdClientId - Ad clients to list accounts for.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['filterAdClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/accounts',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.adclients = {

    /**
     * adsensehost.adclients.get
     *
     * @desc Get information about one of the ad clients in the Host AdSense account.
     *
     * @alias adsensehost.adclients.get
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client to get.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId,
        method: 'GET'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.adclients.list
     *
     * @desc List all host ad clients in this AdSense account.
     *
     * @alias adsensehost.adclients.list
     * @memberOf! adsensehost(v4.1)
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
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.associationsessions = {

    /**
     * adsensehost.associationsessions.start
     *
     * @desc Create an association session for initiating an association with an AdSense user.
     *
     * @alias adsensehost.associationsessions.start
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.productCode - Products to associate with the user.
     * @param  {string=} params.userLocale - The preferred locale of the user.
     * @param  {string=} params.websiteLocale - The locale of the user's hosted website.
     * @param  {string} params.websiteUrl - The URL of the user's hosted website.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    start: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['productCode', 'websiteUrl']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/associationsessions/start',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.associationsessions.verify
     *
     * @desc Verify an association session after the association callback returns from AdSense signup.
     *
     * @alias adsensehost.associationsessions.verify
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.token - The token returned to the association callback URL.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    verify: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['token']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/associationsessions/verify',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.customchannels = {

    /**
     * adsensehost.customchannels.delete
     *
     * @desc Delete a specific custom channel from the host AdSense account.
     *
     * @alias adsensehost.customchannels.delete
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client from which to delete the custom channel.
     * @param  {string} params.customChannelId - Custom channel to delete.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId', 'customChannelId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId + '/customchannels/' + params.customChannelId,
        method: 'DELETE'
      };

      delete params.adClientId;
      delete params.customChannelId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.customchannels.get
     *
     * @desc Get a specific custom channel from the host AdSense account.
     *
     * @alias adsensehost.customchannels.get
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client from which to get the custom channel.
     * @param  {string} params.customChannelId - Custom channel to get.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId', 'customChannelId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId + '/customchannels/' + params.customChannelId,
        method: 'GET'
      };

      delete params.adClientId;
      delete params.customChannelId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.customchannels.insert
     *
     * @desc Add a new custom channel to the host AdSense account.
     *
     * @alias adsensehost.customchannels.insert
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client to which the new custom channel will be added.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId + '/customchannels',
        method: 'POST'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.customchannels.list
     *
     * @desc List all host custom channels in this AdSense account.
     *
     * @alias adsensehost.customchannels.list
     * @memberOf! adsensehost(v4.1)
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
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId + '/customchannels',
        method: 'GET'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.customchannels.patch
     *
     * @desc Update a custom channel in the host AdSense account. This method supports patch semantics.
     *
     * @alias adsensehost.customchannels.patch
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client in which the custom channel will be updated.
     * @param  {string} params.customChannelId - Custom channel to get.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId', 'customChannelId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId + '/customchannels',
        method: 'PATCH'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.customchannels.update
     *
     * @desc Update a custom channel in the host AdSense account.
     *
     * @alias adsensehost.customchannels.update
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client in which the custom channel will be updated.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId + '/customchannels',
        method: 'PUT'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.reports = {

    /**
     * adsensehost.reports.generate
     *
     * @desc Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     *
     * @alias adsensehost.reports.generate
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.dimension - Dimensions to base the report on.
     * @param  {string} params.endDate - End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param  {string=} params.filter - Filters to be run on the report.
     * @param  {string=} params.locale - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     * @param  {integer=} params.maxResults - The maximum number of rows of report data to return.
     * @param  {string=} params.metric - Numeric columns to include in the report.
     * @param  {string=} params.sort - The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     * @param  {string} params.startDate - Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param  {integer=} params.startIndex - Index of the first row of report data to return.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    generate: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['startDate', 'endDate']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/reports',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.urlchannels = {

    /**
     * adsensehost.urlchannels.delete
     *
     * @desc Delete a URL channel from the host AdSense account.
     *
     * @alias adsensehost.urlchannels.delete
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client from which to delete the URL channel.
     * @param  {string} params.urlChannelId - URL channel to delete.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId', 'urlChannelId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId + '/urlchannels/' + params.urlChannelId,
        method: 'DELETE'
      };

      delete params.adClientId;
      delete params.urlChannelId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.urlchannels.insert
     *
     * @desc Add a new URL channel to the host AdSense account.
     *
     * @alias adsensehost.urlchannels.insert
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client to which the new URL channel will be added.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId + '/urlchannels',
        method: 'POST'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adsensehost.urlchannels.list
     *
     * @desc List all host URL channels in the host AdSense account.
     *
     * @alias adsensehost.urlchannels.list
     * @memberOf! adsensehost(v4.1)
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
        url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/' + params.adClientId + '/urlchannels',
        method: 'GET'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Adsensehost object
 * @type Adsensehost
 */
module.exports = Adsensehost;