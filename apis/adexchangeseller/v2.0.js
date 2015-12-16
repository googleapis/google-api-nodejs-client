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
 * Ad Exchange Seller API
 *
 * @classdesc Gives Ad Exchange seller users access to their inventory and the ability to generate reports
 * @namespace adexchangeseller
 * @version  v2.0
 * @variation v2.0
 * @this Adexchangeseller
 * @param {object=} options Options for Adexchangeseller
 */
function Adexchangeseller(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    /**
     * adexchangeseller.accounts.get
     *
     * @desc Get information about the selected Ad Exchange account.
     *
     * @alias adexchangeseller.accounts.get
     * @memberOf! adexchangeseller(v2.0)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - Account to get information about. Tip: 'myaccount' is a valid ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangeseller.accounts.list
     *
     * @desc List all accounts available to this Ad Exchange account.
     *
     * @alias adexchangeseller.accounts.list
     * @memberOf! adexchangeseller(v2.0)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of accounts to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    adclients: {

      /**
       * adexchangeseller.accounts.adclients.list
       *
       * @desc List all ad clients in this Ad Exchange account.
       *
       * @alias adexchangeseller.accounts.adclients.list
       * @memberOf! adexchangeseller(v2.0)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account to which the ad client belongs.
       * @param  {integer=} params.maxResults - The maximum number of ad clients to include in the response, used for paging.
       * @param  {string=} params.pageToken - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/adclients',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    alerts: {

      /**
       * adexchangeseller.accounts.alerts.list
       *
       * @desc List the alerts for this Ad Exchange account.
       *
       * @alias adexchangeseller.accounts.alerts.list
       * @memberOf! adexchangeseller(v2.0)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account owning the alerts.
       * @param  {string=} params.locale - The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/alerts',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    customchannels: {

      /**
       * adexchangeseller.accounts.customchannels.get
       *
       * @desc Get the specified custom channel from the specified ad client.
       *
       * @alias adexchangeseller.accounts.customchannels.get
       * @memberOf! adexchangeseller(v2.0)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account to which the ad client belongs.
       * @param  {string} params.adClientId - Ad client which contains the custom channel.
       * @param  {string} params.customChannelId - Custom channel to retrieve.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId', 'customChannelId'],
          pathParams: ['accountId', 'adClientId', 'customChannelId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangeseller.accounts.customchannels.list
       *
       * @desc List all custom channels in the specified ad client for this Ad Exchange account.
       *
       * @alias adexchangeseller.accounts.customchannels.list
       * @memberOf! adexchangeseller(v2.0)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account to which the ad client belongs.
       * @param  {string} params.adClientId - Ad client for which to list custom channels.
       * @param  {integer=} params.maxResults - The maximum number of custom channels to include in the response, used for paging.
       * @param  {string=} params.pageToken - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/adclients/{adClientId}/customchannels',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId'],
          pathParams: ['accountId', 'adClientId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    metadata: {

      dimensions: {

        /**
         * adexchangeseller.accounts.metadata.dimensions.list
         *
         * @desc List the metadata for the dimensions available to this AdExchange account.
         *
         * @alias adexchangeseller.accounts.metadata.dimensions.list
         * @memberOf! adexchangeseller(v2.0)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - Account with visibility to the dimensions.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/metadata/dimensions',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId'],
            pathParams: ['accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      metrics: {

        /**
         * adexchangeseller.accounts.metadata.metrics.list
         *
         * @desc List the metadata for the metrics available to this AdExchange account.
         *
         * @alias adexchangeseller.accounts.metadata.metrics.list
         * @memberOf! adexchangeseller(v2.0)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - Account with visibility to the metrics.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/metadata/metrics',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId'],
            pathParams: ['accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    preferreddeals: {

      /**
       * adexchangeseller.accounts.preferreddeals.get
       *
       * @desc Get information about the selected Ad Exchange Preferred Deal.
       *
       * @alias adexchangeseller.accounts.preferreddeals.get
       * @memberOf! adexchangeseller(v2.0)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account owning the deal.
       * @param  {string} params.dealId - Preferred deal to get information about.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/preferreddeals/{dealId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'dealId'],
          pathParams: ['accountId', 'dealId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangeseller.accounts.preferreddeals.list
       *
       * @desc List the preferred deals for this Ad Exchange account.
       *
       * @alias adexchangeseller.accounts.preferreddeals.list
       * @memberOf! adexchangeseller(v2.0)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account owning the deals.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/preferreddeals',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    reports: {

      /**
       * adexchangeseller.accounts.reports.generate
       *
       * @desc Generate an Ad Exchange report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
       *
       * @alias adexchangeseller.accounts.reports.generate
       * @memberOf! adexchangeseller(v2.0)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account which owns the generated report.
       * @param  {string=} params.dimension - Dimensions to base the report on.
       * @param  {string} params.endDate - End of the date range to report on in "YYYY-MM-DD" format, inclusive.
       * @param  {string=} params.filter - Filters to be run on the report.
       * @param  {string=} params.locale - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
       * @param  {integer=} params.maxResults - The maximum number of rows of report data to return.
       * @param  {string=} params.metric - Numeric columns to include in the report.
       * @param  {string=} params.sort - The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
       * @param  {string} params.startDate - Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
       * @param  {integer=} params.startIndex - Index of the first row of report data to return.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      generate: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/reports',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'startDate', 'endDate'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      saved: {

        /**
         * adexchangeseller.accounts.reports.saved.generate
         *
         * @desc Generate an Ad Exchange report based on the saved report ID sent in the query parameters.
         *
         * @alias adexchangeseller.accounts.reports.saved.generate
         * @memberOf! adexchangeseller(v2.0)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - Account owning the saved report.
         * @param  {string=} params.locale - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
         * @param  {integer=} params.maxResults - The maximum number of rows of report data to return.
         * @param  {string} params.savedReportId - The saved report to retrieve.
         * @param  {integer=} params.startIndex - Index of the first row of report data to return.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        generate: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/reports/{savedReportId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'savedReportId'],
            pathParams: ['accountId', 'savedReportId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * adexchangeseller.accounts.reports.saved.list
         *
         * @desc List all saved reports in this Ad Exchange account.
         *
         * @alias adexchangeseller.accounts.reports.saved.list
         * @memberOf! adexchangeseller(v2.0)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - Account owning the saved reports.
         * @param  {integer=} params.maxResults - The maximum number of saved reports to include in the response, used for paging.
         * @param  {string=} params.pageToken - A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/reports/saved',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId'],
            pathParams: ['accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    urlchannels: {

      /**
       * adexchangeseller.accounts.urlchannels.list
       *
       * @desc List all URL channels in the specified ad client for this Ad Exchange account.
       *
       * @alias adexchangeseller.accounts.urlchannels.list
       * @memberOf! adexchangeseller(v2.0)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account to which the ad client belongs.
       * @param  {string} params.adClientId - Ad client for which to list URL channels.
       * @param  {integer=} params.maxResults - The maximum number of URL channels to include in the response, used for paging.
       * @param  {string=} params.pageToken - A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adexchangeseller/v2.0/accounts/{accountId}/adclients/{adClientId}/urlchannels',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId'],
          pathParams: ['accountId', 'adClientId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Adexchangeseller object
 * @type Adexchangeseller
 */
module.exports = Adexchangeseller;