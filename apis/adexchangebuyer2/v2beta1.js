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
var utils = require('../../lib/utils');

/**
 * Ad Exchange Buyer API II
 *
 * Accesses the latest features for managing Ad Exchange accounts, Real-Time Bidding configurations and auction metrics, and Marketplace programmatic deals.
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
       * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
       * @param {string} params.clientAccountId Unique numerical account ID of the client to update. (required)
       * @param {adexchangebuyer2(v2beta1).Client} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['accountId', 'clientAccountId'],
          pathParams: ['accountId', 'clientAccountId'],
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
       * @param {adexchangebuyer2(v2beta1).Client} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
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
       * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
       * @param {string} params.clientAccountId Numerical account ID of the client buyer to retrieve. (required)
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['accountId', 'clientAccountId'],
          pathParams: ['accountId', 'clientAccountId'],
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
       * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
       * @param {string} params.accountId Unique numerical account ID of the sponsor buyer to list the clients for.
       * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
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
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user should be associated with. (required)
         * @param {adexchangebuyer2(v2beta1).ClientUserInvitation} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['accountId', 'clientAccountId'],
            pathParams: ['accountId', 'clientAccountId'],
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
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
         * @param {string} params.invitationId Numerical identifier of the user invitation to retrieve. (required)
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['accountId', 'clientAccountId', 'invitationId'],
            pathParams: ['accountId', 'clientAccountId', 'invitationId'],
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
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {integer=} params.pageSize Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
         * @param {string} params.clientAccountId Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['accountId', 'clientAccountId'],
            pathParams: ['accountId', 'clientAccountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
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
         * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
         * @param {adexchangebuyer2(v2beta1).ClientUser} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}',
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['accountId', 'clientAccountId', 'userId'],
            pathParams: ['userId', 'accountId', 'clientAccountId'],
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
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
         * @param {string} params.accountId Numerical account ID of the sponsor buyer of the client to list users for. (required)
         * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
         * @param {string} params.clientAccountId The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['accountId', 'clientAccountId'],
            pathParams: ['accountId', 'clientAccountId'],
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
         * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
         * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
         * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['accountId', 'clientAccountId', 'userId'],
            pathParams: ['userId', 'accountId', 'clientAccountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    creatives: {

      /**
       * adexchangebuyer2.accounts.creatives.create
       *
       * @desc Creates a creative.
       *
       * @alias adexchangebuyer2.accounts.creatives.create
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.duplicateIdMode Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
       * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
       * @param {adexchangebuyer2(v2beta1).Creative} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.creatives.stopWatching
       *
       * @desc Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
       *
       * @alias adexchangebuyer2.accounts.creatives.stopWatching
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.accountId The account of the creative to stop notifications for.
       * @param {string} params.creativeId The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.
       * @param {adexchangebuyer2(v2beta1).StopWatchingCreativeRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      stopWatching: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['accountId', 'creativeId'],
          pathParams: ['accountId', 'creativeId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.creatives.get
       *
       * @desc Gets a creative.
       *
       * @alias adexchangebuyer2.accounts.creatives.get
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.creativeId The ID of the creative to retrieve.
       * @param {string} params.accountId The account the creative belongs to.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['accountId', 'creativeId'],
          pathParams: ['creativeId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.creatives.watch
       *
       * @desc Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
       *
       * @alias adexchangebuyer2.accounts.creatives.watch
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.creativeId The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
       * @param {string} params.accountId The account of the creative to watch.
       * @param {adexchangebuyer2(v2beta1).WatchCreativeRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      watch: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['accountId', 'creativeId'],
          pathParams: ['creativeId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.creatives.update
       *
       * @desc Updates a creative.
       *
       * @alias adexchangebuyer2.accounts.creatives.update
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
       * @param {string} params.creativeId The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
       * @param {adexchangebuyer2(v2beta1).Creative} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['accountId', 'creativeId'],
          pathParams: ['accountId', 'creativeId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * adexchangebuyer2.accounts.creatives.list
       *
       * @desc Lists creatives.
       *
       * @alias adexchangebuyer2.accounts.creatives.list
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
       * @param {string} params.accountId The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
       * @param {integer=} params.pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
       * @param {string=} params.query An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsStatus: {approved, conditionally_approved, disapproved,                    not_checked} <li>openAuctionStatus: {approved, conditionally_approved, disapproved,                           not_checked} <li>attribute: {a numeric attribute from the list of attributes} <li>disapprovalReason: {a reason from DisapprovalReason </ul> Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      dealAssociations: {

        /**
         * adexchangebuyer2.accounts.creatives.dealAssociations.list
         *
         * @desc List all creative-deal associations.
         *
         * @alias adexchangebuyer2.accounts.creatives.dealAssociations.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeId The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
         * @param {string} params.accountId The account to list the associations from. Specify "-" to list all creatives the current user has access to.
         * @param {integer=} params.pageSize Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
         * @param {string=} params.query An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsId=<i>deals_id_string</i> <li>dealsStatus:{approved, conditionally_approved, disapproved,                   not_checked} <li>openAuctionStatus:{approved, conditionally_approved, disapproved,                          not_checked} </ul> Example: 'dealsId=12345 AND dealsStatus:disapproved'
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['accountId', 'creativeId'],
            pathParams: ['creativeId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * adexchangebuyer2.accounts.creatives.dealAssociations.add
         *
         * @desc Associate an existing deal with a creative.
         *
         * @alias adexchangebuyer2.accounts.creatives.dealAssociations.add
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeId The ID of the creative associated with the deal.
         * @param {string} params.accountId The account the creative belongs to.
         * @param {adexchangebuyer2(v2beta1).AddDealAssociationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        add: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['accountId', 'creativeId'],
            pathParams: ['creativeId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * adexchangebuyer2.accounts.creatives.dealAssociations.remove
         *
         * @desc Remove the association between a deal and a creative.
         *
         * @alias adexchangebuyer2.accounts.creatives.dealAssociations.remove
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeId The ID of the creative associated with the deal.
         * @param {string} params.accountId The account the creative belongs to.
         * @param {adexchangebuyer2(v2beta1).RemoveDealAssociationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        remove: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['accountId', 'creativeId'],
            pathParams: ['creativeId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * @typedef AuctionContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} auctionTypes The auction types this restriction applies to.
 */
/**
 * @typedef ListClientUserInvitationsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {string} nextPageToken A token to retrieve the next page of results.
Pass this value in the
ListClientUserInvitationsRequest.pageToken
field in the subsequent call to the
clients.invitations.list
method to retrieve the next
page of results.
* @property {adexchangebuyer2(v2beta1).ClientUserInvitation[]} invitations The returned list of client users.
*/
/**
 * @typedef ListClientUsersResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {string} nextPageToken A token to retrieve the next page of results.
Pass this value in the
ListClientUsersRequest.pageToken
field in the subsequent call to the
clients.invitations.list
method to retrieve the next
page of results.
* @property {adexchangebuyer2(v2beta1).ClientUser[]} users The returned list of client users.
*/
/**
 * @typedef LocationContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {integer[]} geoCriteriaIds IDs representing the geo location for this context.
Please refer to the
[geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv)
file for different geo criteria IDs.
*/
/**
 * @typedef PlatformContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} platforms The platforms this restriction applies to.
 */
/**
 * @typedef ClientUser
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {string} userId The unique numerical ID of the client user
that has accepted an invitation.
The value of this field is ignored in an update operation.
* @property {string} email User&#39;s email address. The value of this field
is ignored in an update operation.
* @property {string} clientAccountId Numerical account ID of the client buyer
with which the user is associated; the
buyer must be a client of the current sponsor buyer.
The value of this field is ignored in an update operation.
* @property {string} status The status of the client user.
*/
/**
 * @typedef CreativeDealAssociation
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} creativeId The ID of the creative associated with the deal.
 * @property {string} dealsId The externalDealId for the deal associated with the creative.
 * @property {string} accountId The account the creative belongs to.
 */
/**
 * @typedef Creative
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {adexchangebuyer2(v2beta1).NativeContent} native A native creative.
* @property {adexchangebuyer2(v2beta1).VideoContent} video A video creative.
* @property {adexchangebuyer2(v2beta1).ServingRestriction[]} servingRestrictions @OutputOnly The granular status of this ad in specific contexts.
A context here relates to where something ultimately serves (for example,
a physical location, a platform, an HTTPS vs HTTP request, or the type
of auction).
* @property {string} agencyId The agency ID for this creative.
* @property {string[]} clickThroughUrls The set of destination URLs for the creative.
* @property {integer[]} detectedSensitiveCategories @OutputOnly Detected sensitive categories, if any.
See the ad-sensitive-categories.txt file in the technical documentation for
a list of IDs. You should use these IDs along with the
excluded-sensitive-category field in the bid request to filter your bids.
* @property {string} adChoicesDestinationUrl The link to AdChoices destination page.
* @property {string[]} restrictedCategories All restricted categories for the ads that may be shown from this creative.
* @property {adexchangebuyer2(v2beta1).Correction[]} corrections @OutputOnly Shows any corrections that were applied to this creative.
* @property {integer} version @OutputOnly The version of this creative.
* @property {integer[]} vendorIds All vendor IDs for the ads that may be shown from this creative.
See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt
for possible values.
* @property {string[]} impressionTrackingUrls The set of URLs to be called to record an impression.
* @property {adexchangebuyer2(v2beta1).HtmlContent} html An HTML creative.
* @property {string} dealsStatus @OutputOnly The top-level deals status of this creative.
If disapproved, an entry for &#39;auctionType=DIRECT_DEALS&#39; (or &#39;ALL&#39;) in
serving_restrictions will also exist. Note
that this may be nuanced with other contextual restrictions, in which case,
it may be preferable to read from serving_restrictions directly.
Can be used to filter the response of the
creatives.list
method.
* @property {integer[]} detectedProductCategories @OutputOnly Detected product categories, if any.
See the ad-product-categories.txt file in the technical documentation
for a list of IDs.
* @property {string} openAuctionStatus @OutputOnly The top-level open auction status of this creative.
If disapproved, an entry for &#39;auctionType = OPEN_AUCTION&#39; (or &#39;ALL&#39;) in
serving_restrictions will also exist. Note
that this may be nuanced with other contextual restrictions, in which case,
it may be preferable to read from serving_restrictions directly.
Can be used to filter the response of the
creatives.list
method.
* @property {string} advertiserName The name of the company being advertised in the creative.
* @property {string[]} detectedAdvertiserIds @OutputOnly Detected advertiser IDs, if any.
* @property {string[]} detectedDomains @OutputOnly
The detected domains for this creative.
* @property {adexchangebuyer2(v2beta1).FilteringStats} filteringStats @OutputOnly The filtering stats for this creative.
* @property {string[]} attributes All attributes for the ads that may be shown from this creative.
Can be used to filter the response of the
creatives.list
method.
* @property {string} apiUpdateTime @OutputOnly The last update timestamp of the creative via API.
* @property {string[]} detectedLanguages @OutputOnly
The detected languages for this creative. The order is arbitrary. The codes
are 2 or 5 characters and are documented at
https://developers.google.com/adwords/api/docs/appendix/languagecodes.
* @property {string} creativeId The buyer-defined creative ID of this creative.
Can be used to filter the response of the
creatives.list
method.
* @property {string} accountId The account that this creative belongs to.
Can be used to filter the response of the
creatives.list
method.
*/
/**
 * @typedef FilteringStats
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {adexchangebuyer2(v2beta1).Reason[]} reasons The set of filtering reasons for this date.
* @property {adexchangebuyer2(v2beta1).Date} date The day during which the data was collected.
The data is collected from 00:00:00 to 23:59:59 PT.
During switches from PST to PDT and back, the day may
contain 23 or 25 hours of data instead of the usual 24.
*/
/**
 * @typedef RemoveDealAssociationRequest
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).CreativeDealAssociation} association The association between a creative and a deal that should be removed.
 */
/**
 * @typedef Client
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {boolean} visibleToSeller Whether the client buyer will be visible to sellers.
* @property {string} entityId Numerical identifier of the client entity.
The entity can be an advertiser, a brand, or an agency.
This identifier is unique among all the entities with the same type.

A list of all known advertisers with their identifiers is available in the
[advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt)
file.

A list of all known brands with their identifiers is available in the
[brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt)
file.

A list of all known agencies with their identifiers is available in the
[agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt)
file.
* @property {string} clientAccountId The globally-unique numerical ID of the client.
The value of this field is ignored in create and update operations.
* @property {string} entityName The name of the entity. This field is automatically fetched based on
the type and ID.
The value of this field is ignored in create and update operations.
* @property {string} status The status of the client buyer.
* @property {string} entityType The type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.
* @property {string} clientName Name used to represent this client to publishers.
You may have multiple clients that map to the same entity,
but for each client the combination of `clientName` and entity
must be unique.
You can specify this field as empty.
* @property {string} role The role which is assigned to the client buyer. Each role implies a set of
permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`,
`CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.
*/
/**
 * @typedef Correction
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} details Additional details about what was corrected.
 * @property {string} type The type of correction that was applied to the creative.
 * @property {adexchangebuyer2(v2beta1).ServingContext[]} contexts The contexts for the correction.
 */
/**
 * @typedef ListDealAssociationsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {string} nextPageToken A token to retrieve the next page of results.
Pass this value in the
ListDealAssociationsRequest.page_token
field in the subsequent call to &#39;ListDealAssociation&#39; method to retrieve
the next page of results.
* @property {adexchangebuyer2(v2beta1).CreativeDealAssociation[]} associations The list of associations.
*/
/**
 * @typedef AddDealAssociationRequest
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).CreativeDealAssociation} association The association between a creative and a deal that should be added.
 */
/**
 * @typedef StopWatchingCreativeRequest
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 */
/**
 * @typedef Disapproval
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} details Additional details about the reason for disapproval.
 * @property {string} reason The categorized reason for disapproval.
 */
/**
 * @typedef ServingRestriction
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {adexchangebuyer2(v2beta1).ServingContext[]} contexts The contexts for the restriction.
* @property {string} status The status of the creative in this context (for example, it has been
explicitly disapproved or is pending review).
* @property {adexchangebuyer2(v2beta1).Disapproval[]} disapprovalReasons Any disapprovals bound to this restriction.
Only present if status=DISAPPROVED.
Can be used to filter the response of the
creatives.list
method.
*/
/**
 * @typedef Date
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {integer} month Month of year. Must be from 1 to 12.
* @property {integer} year Year of date. Must be from 1 to 9999, or 0 if specifying a date without
a year.
* @property {integer} day Day of month. Must be from 1 to 31 and valid for the year and month, or 0
if specifying a year/month where the day is not significant.
*/
/**
 * @typedef Empty
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 */
/**
 * @typedef WatchCreativeRequest
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {string} topic The Pub/Sub topic to publish notifications to.
This topic must already exist and must give permission to
ad-exchange-buyside-reports@google.com to write to the topic.
This should be the full resource name in
&quot;projects/{project_id}/topics/{topic_id}&quot; format.
*/
/**
 * @typedef AppContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} appTypes The app types this restriction applies to.
 */
/**
 * @typedef ListClientsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {string} nextPageToken A token to retrieve the next page of results.
Pass this value in the
ListClientsRequest.pageToken
field in the subsequent call to the
accounts.clients.list method
to retrieve the next page of results.
* @property {adexchangebuyer2(v2beta1).Client[]} clients The returned list of clients.
*/
/**
 * @typedef NativeContent
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).Image} image A large image.
 * @property {string} clickTrackingUrl The URL to use for click tracking.
 * @property {string} advertiserName The name of the advertiser or sponsor, to be displayed in the ad creative.
 * @property {string} storeUrl The URL to the app store to purchase/download the promoted app.
 * @property {string} headline A short title for the ad.
 * @property {adexchangebuyer2(v2beta1).Image} appIcon The app icon, for app download ads.
 * @property {string} callToAction A label for the button that the user is supposed to click.
 * @property {string} body A long description of the ad.
 * @property {number} starRating The app rating in the app store. Must be in the range [0-5].
 * @property {string} videoUrl The URL to fetch a native video ad.
 * @property {adexchangebuyer2(v2beta1).Image} logo A smaller image, for the advertiser&#39;s logo.
 * @property {string} clickLinkUrl The URL that the browser/SDK will load when the user clicks the ad.
 * @property {string} priceDisplayText The price of the promoted app including currency info.
 */
/**
 * @typedef SecurityContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} securities The security types in this context.
 */
/**
 * @typedef HtmlContent
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {integer} width The width of the HTML snippet in pixels.
 * @property {string} snippet The HTML snippet that displays the ad when inserted in the web page.
 * @property {integer} height The height of the HTML snippet in pixels.
 */
/**
 * @typedef ListCreativesResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {string} nextPageToken A token to retrieve the next page of results.
Pass this value in the
ListCreativesRequest.page_token
field in the subsequent call to `ListCreatives` method to retrieve the next
page of results.
* @property {adexchangebuyer2(v2beta1).Creative[]} creatives The list of creatives.
*/
/**
 * @typedef ServingContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {adexchangebuyer2(v2beta1).AuctionContext} auctionType Matches impressions for a particular auction type.
* @property {string} all Matches all contexts.
* @property {adexchangebuyer2(v2beta1).AppContext} appType Matches impressions for a particular app type.
* @property {adexchangebuyer2(v2beta1).SecurityContext} securityType Matches impressions for a particular security type.
* @property {adexchangebuyer2(v2beta1).PlatformContext} platform Matches impressions coming from a particular platform.
* @property {adexchangebuyer2(v2beta1).LocationContext} location Matches impressions coming from users *or* publishers in a specific
location.
*/
/**
 * @typedef Image
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {integer} width Image width in pixels.
 * @property {string} url The URL of the image.
 * @property {integer} height Image height in pixels.
 */
/**
 * @typedef Reason
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {integer} status The filtering status code. Please refer to the
[creative-status-codes.txt](https://storage.googleapis.com/adx-rtb-dictionaries/creative-status-codes.txt)
file for different statuses.
* @property {string} count The number of times the creative was filtered for the status. The
count is aggregated across all publishers on the exchange.
*/
/**
 * @typedef VideoContent
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} videoUrl The URL to fetch a video ad.
 */
/**
 * @typedef ClientUserInvitation
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
* @property {string} invitationId The unique numerical ID of the invitation that is sent to the user.
The value of this field is ignored in create operations.
* @property {string} email The email address to which the invitation is sent. Email
addresses should be unique among all client users under each sponsor
buyer.
* @property {string} clientAccountId Numerical account ID of the client buyer
that the invited user is associated with.
The value of this field is ignored in create operations.
*/
module.exports = Adexchangebuyer2;
