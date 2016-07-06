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
 * Ad Exchange Buyer API II
 *
 * Accesses the latest features for managing Ad Exchange accounts and Real-Time Bidding configurations and auction metrics.
 *
 * @example
 * var google = require('googleapis');
 * var adexchangebuyer2 = google.adexchangebuyer2('v2beta1');
 *
 * @namespace adexchangebuyer2
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Adexchangebuyer2
 */
function Adexchangebuyer2(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.accounts = {

    filterSets: {

      /**
       * adexchangebuyer2.accounts.filterSets.getBidMetrics
       *
       * @desc Gets all metrics that are measured in terms of number of bids.
       *
       * @alias adexchangebuyer2.accounts.filterSets.getBidMetrics
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {integer} params.filterSetId The ID of the filter set to apply.
       * @param {string} params.accountId Account ID of the buyer.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getBidMetrics: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/bidMetrics',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'filterSetId'],
          pathParams: ['filterSetId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.filterSets.list
       *
       * @desc Lists all filter sets for the account with the given account ID.
       *
       * @alias adexchangebuyer2.accounts.filterSets.list
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Requested page size. The server may return fewer than requested. If unspecified, the server will pick an appropriate default.
       * @param {string} params.accountId Account ID of the buyer.
       * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.rtbBreakout.filterSets.list method.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets',
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
       * adexchangebuyer2.accounts.filterSets.get
       *
       * @desc Retrieves the requested filter set for the account with the given account ID.
       *
       * @alias adexchangebuyer2.accounts.filterSets.get
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {integer} params.filterSetId The ID of the filter set to get.
       * @param {string} params.accountId Account ID of the buyer.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'filterSetId'],
          pathParams: ['filterSetId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.filterSets.create
       *
       * @desc Creates the specified filter set for the account with the given account ID.
       *
       * @alias adexchangebuyer2.accounts.filterSets.create
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
       * @param {string} params.accountId Account ID of the buyer.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.filterSets.getImpressionMetrics
       *
       * @desc Gets all metrics that are measured in terms of number of impressions.
       *
       * @alias adexchangebuyer2.accounts.filterSets.getImpressionMetrics
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {integer} params.filterSetId The ID of the filter set to apply.
       * @param {string} params.accountId Account ID of the buyer.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getImpressionMetrics: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/impressionMetrics',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'filterSetId'],
          pathParams: ['filterSetId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.filterSets.delete
       *
       * @desc Deletes the requested filter set from the account with the given account ID.
       *
       * @alias adexchangebuyer2.accounts.filterSets.delete
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {integer} params.filterSetId The ID of the filter set to delete.
       * @param {string} params.accountId Account ID of the buyer.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'filterSetId'],
          pathParams: ['filterSetId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      responsesWithoutBids: {

        /**
         * adexchangebuyer2.accounts.filterSets.responsesWithoutBids.list
         *
         * @desc List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
         *
         * @alias adexchangebuyer2.accounts.filterSets.responsesWithoutBids.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.filterSetId The ID of the filter set to apply.
         * @param {string} params.accountId Account ID of the buyer.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/responsesWithoutBids',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'filterSetId'],
            pathParams: ['filterSetId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      responseErrors: {

        /**
         * adexchangebuyer2.accounts.filterSets.responseErrors.list
         *
         * @desc List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
         *
         * @alias adexchangebuyer2.accounts.filterSets.responseErrors.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.filterSetId The ID of the filter set to apply.
         * @param {string} params.accountId Account ID of the buyer.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/responseErrors',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'filterSetId'],
            pathParams: ['filterSetId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      losingBids: {

        /**
         * adexchangebuyer2.accounts.filterSets.losingBids.list
         *
         * @desc List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
         *
         * @alias adexchangebuyer2.accounts.filterSets.losingBids.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.filterSetId The ID of the filter set to apply.
         * @param {string} params.accountId Account ID of the buyer.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/losingBids',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'filterSetId'],
            pathParams: ['filterSetId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      filteredBids: {

        /**
         * adexchangebuyer2.accounts.filterSets.filteredBids.list
         *
         * @desc List all reasons for which bids were filtered, with the number of bids filtered for each reason.
         *
         * @alias adexchangebuyer2.accounts.filterSets.filteredBids.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.filterSetId The ID of the filter set to apply.
         * @param {string} params.accountId Account ID of the buyer.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/filteredBids',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'filterSetId'],
            pathParams: ['filterSetId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        creatives: {

          /**
           * adexchangebuyer2.accounts.filterSets.filteredBids.creatives.list
           *
           * @desc List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
           *
           * @alias adexchangebuyer2.accounts.filterSets.filteredBids.creatives.list
           * @memberOf! adexchangebuyer2(v2beta1)
           *
           * @param {object} params Parameters for request
           * @param {integer} params.filterSetId The ID of the filter set to apply.
           * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See creative-status-codes.
           * @param {integer=} params.pageSize Requested page size. The server may return fewer than requested. If unspecified, the server will pick an appropriate default.
           * @param {string} params.accountId Account ID of the buyer.
           * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the accounts.filterSets.filteredBids.creatives.list method.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list: function (params, callback) {
            var parameters = {
              options: {
                url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/filteredBids/{creativeStatusId}/creatives',
                method: 'GET'
              },
              params: params,
              requiredParams: ['accountId', 'filterSetId', 'creativeStatusId'],
              pathParams: ['filterSetId', 'creativeStatusId', 'accountId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          details: {

            /**
             * adexchangebuyer2.accounts.filterSets.filteredBids.creatives.details.list
             *
             * @desc List all details associated with a specific reason for which bids were filtered and a specific creative that was filtered for that reason, with the number of bids filtered for each detail.
             *
             * @alias adexchangebuyer2.accounts.filterSets.filteredBids.creatives.details.list
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.filterSetId The ID of the filter set to apply.
             * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See creative-status-codes.
             * @param {string} params.creativeId The creative ID for which to retrieve a breakdown by detail.
             * @param {string} params.accountId Account ID of the buyer.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            list: function (params, callback) {
              var parameters = {
                options: {
                  url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/filteredBids/{creativeStatusId}/creatives/{creativeId}/details',
                  method: 'GET'
                },
                params: params,
                requiredParams: ['accountId', 'filterSetId', 'creativeStatusId', 'creativeId'],
                pathParams: ['filterSetId', 'creativeStatusId', 'creativeId', 'accountId'],
                context: self
              };

              return createAPIRequest(parameters, callback);
            }
          }
        },

        details: {

          /**
           * adexchangebuyer2.accounts.filterSets.filteredBids.details.list
           *
           * @desc List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
           *
           * @alias adexchangebuyer2.accounts.filterSets.filteredBids.details.list
           * @memberOf! adexchangebuyer2(v2beta1)
           *
           * @param {object} params Parameters for request
           * @param {integer} params.filterSetId The ID of the filter set to apply.
           * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See creative-status-codes.
           * @param {string} params.accountId Account ID of the buyer.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list: function (params, callback) {
            var parameters = {
              options: {
                url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/filteredBids/{creativeStatusId}/details',
                method: 'GET'
              },
              params: params,
              requiredParams: ['accountId', 'filterSetId', 'creativeStatusId'],
              pathParams: ['filterSetId', 'creativeStatusId', 'accountId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      },

      filteredImpressions: {

        /**
         * adexchangebuyer2.accounts.filterSets.filteredImpressions.list
         *
         * @desc List all reasons that caused an impression to be filtered (i.e. not considered as an inventory match), with the number of impressions that were filtered for each reason.
         *
         * @alias adexchangebuyer2.accounts.filterSets.filteredImpressions.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.filterSetId The ID of the filter set to apply.
         * @param {string} params.accountId Account ID of the buyer.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/filteredImpressions',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'filterSetId'],
            pathParams: ['filterSetId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      filteredRequests: {

        /**
         * adexchangebuyer2.accounts.filterSets.filteredRequests.list
         *
         * @desc List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
         *
         * @alias adexchangebuyer2.accounts.filterSets.filteredRequests.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.filterSetId The ID of the filter set to apply.
         * @param {string} params.accountId Account ID of the buyer.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/filterSets/{filterSetId}/filteredRequests',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'filterSetId'],
            pathParams: ['filterSetId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    clients: {

      /**
       * adexchangebuyer2.accounts.clients.update
       *
       * @desc Updates an existing client buyer.
       *
       * @alias adexchangebuyer2.accounts.clients.update
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.clientAccountId Unique numerical account ID of the client to update. (required)
       * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'clientAccountId'],
          pathParams: ['clientAccountId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.clients.get
       *
       * @desc Gets a client buyer with a given client account ID.
       *
       * @alias adexchangebuyer2.accounts.clients.get
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.clientAccountId Numerical account ID of the client buyer to retrieve. (required)
       * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'clientAccountId'],
          pathParams: ['clientAccountId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.clients.create
       *
       * @desc Creates a new client buyer.
       *
       * @alias adexchangebuyer2.accounts.clients.create
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients',
            method: 'POST'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.clients.list
       *
       * @desc Lists all the clients for the current sponsor buyer.
       *
       * @alias adexchangebuyer2.accounts.clients.list
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
       * @param {string} params.accountId Unique numerical account ID of the sponsor buyer to list the clients for.
       * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      users: {

        /**
         * adexchangebuyer2.accounts.clients.users.update
         *
         * @desc Updates an existing client user. Only the user status can be changed on update.
         *
         * @alias adexchangebuyer2.accounts.clients.users.update
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
         * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['accountId', 'clientAccountId', 'userId'],
            pathParams: ['clientAccountId', 'userId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * adexchangebuyer2.accounts.clients.users.get
         *
         * @desc Retrieves an existing client user.
         *
         * @alias adexchangebuyer2.accounts.clients.users.get
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
         * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'clientAccountId', 'userId'],
            pathParams: ['clientAccountId', 'userId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * adexchangebuyer2.accounts.clients.users.list
         *
         * @desc Lists all the known client users for a specified sponsor buyer account ID.
         *
         * @alias adexchangebuyer2.accounts.clients.users.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientAccountId The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
         * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
         * @param {string} params.accountId Numerical account ID of the sponsor buyer of the client to list users for. (required)
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'clientAccountId'],
            pathParams: ['clientAccountId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      invitations: {

        /**
         * adexchangebuyer2.accounts.clients.invitations.create
         *
         * @desc Creates and sends out an email invitation to access an Ad Exchange client buyer account.
         *
         * @alias adexchangebuyer2.accounts.clients.invitations.create
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user should be associated with. (required)
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'clientAccountId'],
            pathParams: ['clientAccountId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * adexchangebuyer2.accounts.clients.invitations.get
         *
         * @desc Retrieves an existing client user invitation.
         *
         * @alias adexchangebuyer2.accounts.clients.invitations.get
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
         * @param {string} params.invitationId Numerical identifier of the user invitation to retrieve. (required)
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'clientAccountId', 'invitationId'],
            pathParams: ['clientAccountId', 'invitationId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * adexchangebuyer2.accounts.clients.invitations.list
         *
         * @desc Lists all the client users invitations for a client with a given account ID.
         *
         * @alias adexchangebuyer2.accounts.clients.invitations.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientAccountId Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
         * @param {integer=} params.pageSize Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'clientAccountId'],
            pathParams: ['clientAccountId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

module.exports = Adexchangebuyer2;
