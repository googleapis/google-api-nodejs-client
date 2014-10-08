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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}',
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
     * adsensehost.accounts.list
     *
     * @desc List hosted accounts associated with this AdSense account by ad client id.
     *
     * @alias adsensehost.accounts.list
     * @memberOf! adsensehost(v4.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.filterAdClientId - Ad clients to list accounts for.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/accounts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['filterAdClientId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    adclients: {

      /**
       * adsensehost.accounts.adclients.get
       *
       * @desc Get information about one of the ad clients in the specified publisher's AdSense account.
       *
       * @alias adsensehost.accounts.adclients.get
       * @memberOf! adsensehost(v4.1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account which contains the ad client.
       * @param  {string} params.adClientId - Ad client to get.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId'],
          pathParams: ['accountId', 'adClientId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adsensehost.accounts.adclients.list
       *
       * @desc List all hosted ad clients in the specified hosted account.
       *
       * @alias adsensehost.accounts.adclients.list
       * @memberOf! adsensehost(v4.1)
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
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/adclients',
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
       * adsensehost.accounts.adunits.delete
       *
       * @desc Delete the specified ad unit from the specified publisher AdSense account.
       *
       * @alias adsensehost.accounts.adunits.delete
       * @memberOf! adsensehost(v4.1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account which contains the ad unit.
       * @param  {string} params.adClientId - Ad client for which to get ad unit.
       * @param  {string} params.adUnitId - Ad unit to delete.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId', 'adUnitId'],
          pathParams: ['accountId', 'adClientId', 'adUnitId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adsensehost.accounts.adunits.get
       *
       * @desc Get the specified host ad unit in this AdSense account.
       *
       * @alias adsensehost.accounts.adunits.get
       * @memberOf! adsensehost(v4.1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account which contains the ad unit.
       * @param  {string} params.adClientId - Ad client for which to get ad unit.
       * @param  {string} params.adUnitId - Ad unit to get.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}',
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
       * adsensehost.accounts.adunits.getAdCode
       *
       * @desc Get ad code for the specified ad unit, attaching the specified host custom channels.
       *
       * @alias adsensehost.accounts.adunits.getAdCode
       * @memberOf! adsensehost(v4.1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account which contains the ad client.
       * @param  {string} params.adClientId - Ad client with contains the ad unit.
       * @param  {string} params.adUnitId - Ad unit to get the code for.
       * @param  {string=} params.hostCustomChannelId - Host custom channel to attach to the ad code.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      getAdCode: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode',
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
       * adsensehost.accounts.adunits.insert
       *
       * @desc Insert the supplied ad unit into the specified publisher AdSense account.
       *
       * @alias adsensehost.accounts.adunits.insert
       * @memberOf! adsensehost(v4.1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account which will contain the ad unit.
       * @param  {string} params.adClientId - Ad client into which to insert the ad unit.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId'],
          pathParams: ['accountId', 'adClientId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adsensehost.accounts.adunits.list
       *
       * @desc List all ad units in the specified publisher's AdSense account.
       *
       * @alias adsensehost.accounts.adunits.list
       * @memberOf! adsensehost(v4.1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account which contains the ad client.
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
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId'],
          pathParams: ['accountId', 'adClientId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adsensehost.accounts.adunits.patch
       *
       * @desc Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
       *
       * @alias adsensehost.accounts.adunits.patch
       * @memberOf! adsensehost(v4.1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account which contains the ad client.
       * @param  {string} params.adClientId - Ad client which contains the ad unit.
       * @param  {string} params.adUnitId - Ad unit to get.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId', 'adUnitId'],
          pathParams: ['accountId', 'adClientId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adsensehost.accounts.adunits.update
       *
       * @desc Update the supplied ad unit in the specified publisher AdSense account.
       *
       * @alias adsensehost.accounts.adunits.update
       * @memberOf! adsensehost(v4.1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Account which contains the ad client.
       * @param  {string} params.adClientId - Ad client which contains the ad unit.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'adClientId'],
          pathParams: ['accountId', 'adClientId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    reports: {

      /**
       * adsensehost.accounts.reports.generate
       *
       * @desc Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
       *
       * @alias adsensehost.accounts.reports.generate
       * @memberOf! adsensehost(v4.1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Hosted account upon which to report.
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
            url: 'https://www.googleapis.com/adsensehost/v4.1/accounts/{accountId}/reports',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'startDate', 'endDate'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    start: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/associationsessions/start',
          method: 'GET'
        },
        params: params,
        requiredParams: ['productCode', 'websiteUrl'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    verify: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/associationsessions/verify',
          method: 'GET'
        },
        params: params,
        requiredParams: ['token'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId', 'customChannelId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}/customchannels',
          method: 'POST'
        },
        params: params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}/customchannels',
          method: 'GET'
        },
        params: params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}/customchannels',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}/customchannels',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    generate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/reports',
          method: 'GET'
        },
        params: params,
        requiredParams: ['startDate', 'endDate'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}/urlchannels/{urlChannelId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['adClientId', 'urlChannelId'],
        pathParams: ['adClientId', 'urlChannelId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}/urlchannels',
          method: 'POST'
        },
        params: params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adsensehost/v4.1/adclients/{adClientId}/urlchannels',
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
 * Exports Adsensehost object
 * @type Adsensehost
 */
module.exports = Adsensehost;