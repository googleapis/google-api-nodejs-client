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
 * AdSense Management API
 *
 * @classdesc Accesses AdSense publishers&#39; inventory and generates performance reports.
 * @namespace adsense
 * @version  v1.2
 * @variation v1.2
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
     * @memberOf! adsense(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - Account to get information about.
     * @param  {boolean=} params.tree - Whether the tree of sub accounts should be returned.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}',
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
     * adsense.accounts.list
     *
     * @desc List all accounts available to this AdSense account.
     *
     * @alias adsense.accounts.list
     * @memberOf! adsense(v1.2)
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
          url: 'https://www.googleapis.com/adsense/v1.2/accounts',
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
       * adsense.accounts.adclients.list
       *
       * @desc List all ad clients in the specified account.
       *
       * @alias adsense.accounts.adclients.list
       * @memberOf! adsense(v1.2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account for which to list ad clients.
       * @param  {integer=} params.maxResults - The maximum number of ad clients to include in the response, used for paging.
       * @param  {string=} params.pageToken - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/adclients',
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

    adunits: {

      /**
       * adsense.accounts.adunits.get
       *
       * @desc Gets the specified ad unit in the specified ad client for the specified account.
       *
       * @alias adsense.accounts.adunits.get
       * @memberOf! adsense(v1.2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account to which the ad client belongs.
       * @param  {string} params.adClientId - Ad client for which to get the ad unit.
       * @param  {string} params.adUnitId - Ad unit to retrieve.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId', 'adUnitId'],
          pathParams: ['accountId', 'adClientId', 'adUnitId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adsense.accounts.adunits.list
       *
       * @desc List all ad units in the specified ad client for the specified account.
       *
       * @alias adsense.accounts.adunits.list
       * @memberOf! adsense(v1.2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account to which the ad client belongs.
       * @param  {string} params.adClientId - Ad client for which to list ad units.
       * @param  {boolean=} params.includeInactive - Whether to include inactive ad units. Default: true.
       * @param  {integer=} params.maxResults - The maximum number of ad units to include in the response, used for paging.
       * @param  {string=} params.pageToken - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/adclients/{adClientId}/adunits',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId'],
          pathParams: ['accountId', 'adClientId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      customchannels: {

        /**
         * adsense.accounts.adunits.customchannels.list
         *
         * @desc List all custom channels which the specified ad unit belongs to.
         *
         * @alias adsense.accounts.adunits.customchannels.list
         * @memberOf! adsense(v1.2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - Account to which the ad client belongs.
         * @param  {string} params.adClientId - Ad client which contains the ad unit.
         * @param  {string} params.adUnitId - Ad unit for which to list custom channels.
         * @param  {integer=} params.maxResults - The maximum number of custom channels to include in the response, used for paging.
         * @param  {string=} params.pageToken - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/customchannels',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'adClientId', 'adUnitId'],
            pathParams: ['accountId', 'adClientId', 'adUnitId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    customchannels: {

      /**
       * adsense.accounts.customchannels.get
       *
       * @desc Get the specified custom channel from the specified ad client for the specified account.
       *
       * @alias adsense.accounts.customchannels.get
       * @memberOf! adsense(v1.2)
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
            url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}',
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
       * adsense.accounts.customchannels.list
       *
       * @desc List all custom channels in the specified ad client for the specified account.
       *
       * @alias adsense.accounts.customchannels.list
       * @memberOf! adsense(v1.2)
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
            url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/adclients/{adClientId}/customchannels',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId'],
          pathParams: ['accountId', 'adClientId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      adunits: {

        /**
         * adsense.accounts.customchannels.adunits.list
         *
         * @desc List all ad units in the specified custom channel.
         *
         * @alias adsense.accounts.customchannels.adunits.list
         * @memberOf! adsense(v1.2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - Account to which the ad client belongs.
         * @param  {string} params.adClientId - Ad client which contains the custom channel.
         * @param  {string} params.customChannelId - Custom channel for which to list ad units.
         * @param  {boolean=} params.includeInactive - Whether to include inactive ad units. Default: true.
         * @param  {integer=} params.maxResults - The maximum number of ad units to include in the response, used for paging.
         * @param  {string=} params.pageToken - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}/adunits',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'adClientId', 'customChannelId'],
            pathParams: ['accountId', 'adClientId', 'customChannelId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    reports: {

      /**
       * adsense.accounts.reports.generate
       *
       * @desc Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
       *
       * @alias adsense.accounts.reports.generate
       * @memberOf! adsense(v1.2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account upon which to report.
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
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      generate: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/reports',
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
         * adsense.accounts.reports.saved.generate
         *
         * @desc Generate an AdSense report based on the saved report ID sent in the query parameters.
         *
         * @alias adsense.accounts.reports.saved.generate
         * @memberOf! adsense(v1.2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - Account to which the saved reports belong.
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
              url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/reports/{savedReportId}',
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
         * adsense.accounts.reports.saved.list
         *
         * @desc List all saved reports in the specified AdSense account.
         *
         * @alias adsense.accounts.reports.saved.list
         * @memberOf! adsense(v1.2)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - Account to which the saved reports belong.
         * @param  {integer=} params.maxResults - The maximum number of saved reports to include in the response, used for paging.
         * @param  {string=} params.pageToken - A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/reports/saved',
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

    savedadstyles: {

      /**
       * adsense.accounts.savedadstyles.get
       *
       * @desc List a specific saved ad style for the specified account.
       *
       * @alias adsense.accounts.savedadstyles.get
       * @memberOf! adsense(v1.2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account for which to get the saved ad style.
       * @param  {string} params.savedAdStyleId - Saved ad style to retrieve.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/savedadstyles/{savedAdStyleId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'savedAdStyleId'],
          pathParams: ['accountId', 'savedAdStyleId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adsense.accounts.savedadstyles.list
       *
       * @desc List all saved ad styles in the specified account.
       *
       * @alias adsense.accounts.savedadstyles.list
       * @memberOf! adsense(v1.2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account for which to list saved ad styles.
       * @param  {integer=} params.maxResults - The maximum number of saved ad styles to include in the response, used for paging.
       * @param  {string=} params.pageToken - A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/savedadstyles',
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

    urlchannels: {

      /**
       * adsense.accounts.urlchannels.list
       *
       * @desc List all URL channels in the specified ad client for the specified account.
       *
       * @alias adsense.accounts.urlchannels.list
       * @memberOf! adsense(v1.2)
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
            url: 'https://www.googleapis.com/adsense/v1.2/accounts/{accountId}/adclients/{adClientId}/urlchannels',
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

  this.adclients = {

    /**
     * adsense.adclients.list
     *
     * @desc List all ad clients in this AdSense account.
     *
     * @alias adsense.adclients.list
     * @memberOf! adsense(v1.2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of ad clients to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/adclients',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.adunits = {

    /**
     * adsense.adunits.get
     *
     * @desc Gets the specified ad unit in the specified ad client.
     *
     * @alias adsense.adunits.get
     * @memberOf! adsense(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to get the ad unit.
     * @param  {string} params.adUnitId - Ad unit to retrieve.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/adclients/{adClientId}/adunits/{adUnitId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['adClientId', 'adUnitId'],
        pathParams: ['adClientId', 'adUnitId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adsense.adunits.list
     *
     * @desc List all ad units in the specified ad client for this AdSense account.
     *
     * @alias adsense.adunits.list
     * @memberOf! adsense(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to list ad units.
     * @param  {boolean=} params.includeInactive - Whether to include inactive ad units. Default: true.
     * @param  {integer=} params.maxResults - The maximum number of ad units to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/adclients/{adClientId}/adunits',
          method: 'GET'
        },
        params: params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    customchannels: {

      /**
       * adsense.adunits.customchannels.list
       *
       * @desc List all custom channels which the specified ad unit belongs to.
       *
       * @alias adsense.adunits.customchannels.list
       * @memberOf! adsense(v1.2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.adClientId - Ad client which contains the ad unit.
       * @param  {string} params.adUnitId - Ad unit for which to list custom channels.
       * @param  {integer=} params.maxResults - The maximum number of custom channels to include in the response, used for paging.
       * @param  {string=} params.pageToken - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsense/v1.2/adclients/{adClientId}/adunits/{adUnitId}/customchannels',
            method: 'GET'
          },
          params: params,
          requiredParams: ['adClientId', 'adUnitId'],
          pathParams: ['adClientId', 'adUnitId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.customchannels = {

    /**
     * adsense.customchannels.get
     *
     * @desc Get the specified custom channel from the specified ad client.
     *
     * @alias adsense.customchannels.get
     * @memberOf! adsense(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client which contains the custom channel.
     * @param  {string} params.customChannelId - Custom channel to retrieve.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/adclients/{adClientId}/customchannels/{customChannelId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId', 'customChannelId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adsense.customchannels.list
     *
     * @desc List all custom channels in the specified ad client for this AdSense account.
     *
     * @alias adsense.customchannels.list
     * @memberOf! adsense(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to list custom channels.
     * @param  {integer=} params.maxResults - The maximum number of custom channels to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/adclients/{adClientId}/customchannels',
          method: 'GET'
        },
        params: params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    adunits: {

      /**
       * adsense.customchannels.adunits.list
       *
       * @desc List all ad units in the specified custom channel.
       *
       * @alias adsense.customchannels.adunits.list
       * @memberOf! adsense(v1.2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.adClientId - Ad client which contains the custom channel.
       * @param  {string} params.customChannelId - Custom channel for which to list ad units.
       * @param  {boolean=} params.includeInactive - Whether to include inactive ad units. Default: true.
       * @param  {integer=} params.maxResults - The maximum number of ad units to include in the response, used for paging.
       * @param  {string=} params.pageToken - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsense/v1.2/adclients/{adClientId}/customchannels/{customChannelId}/adunits',
            method: 'GET'
          },
          params: params,
          requiredParams: ['adClientId', 'customChannelId'],
          pathParams: ['adClientId', 'customChannelId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
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
     * @memberOf! adsense(v1.2)
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    generate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/reports',
          method: 'GET'
        },
        params: params,
        requiredParams: ['startDate', 'endDate'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    saved: {

      /**
       * adsense.reports.saved.generate
       *
       * @desc Generate an AdSense report based on the saved report ID sent in the query parameters.
       *
       * @alias adsense.reports.saved.generate
       * @memberOf! adsense(v1.2)
       *
       * @param  {object} params - Parameters for request
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
            url: 'https://www.googleapis.com/adsense/v1.2/reports/{savedReportId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['savedReportId'],
          pathParams: ['savedReportId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adsense.reports.saved.list
       *
       * @desc List all saved reports in this AdSense account.
       *
       * @alias adsense.reports.saved.list
       * @memberOf! adsense(v1.2)
       *
       * @param  {object=} params - Parameters for request
       * @param  {integer=} params.maxResults - The maximum number of saved reports to include in the response, used for paging.
       * @param  {string=} params.pageToken - A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsense/v1.2/reports/saved',
            method: 'GET'
          },
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.savedadstyles = {

    /**
     * adsense.savedadstyles.get
     *
     * @desc Get a specific saved ad style from the user's account.
     *
     * @alias adsense.savedadstyles.get
     * @memberOf! adsense(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.savedAdStyleId - Saved ad style to retrieve.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/savedadstyles/{savedAdStyleId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['savedAdStyleId'],
        pathParams: ['savedAdStyleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adsense.savedadstyles.list
     *
     * @desc List all saved ad styles in the user's account.
     *
     * @alias adsense.savedadstyles.list
     * @memberOf! adsense(v1.2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of saved ad styles to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/savedadstyles',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.urlchannels = {

    /**
     * adsense.urlchannels.list
     *
     * @desc List all URL channels in the specified ad client for this AdSense account.
     *
     * @alias adsense.urlchannels.list
     * @memberOf! adsense(v1.2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to list URL channels.
     * @param  {integer=} params.maxResults - The maximum number of URL channels to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsense/v1.2/adclients/{adClientId}/urlchannels',
          method: 'GET'
        },
        params: params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Adsense object
 * @type Adsense
 */
module.exports = Adsense;