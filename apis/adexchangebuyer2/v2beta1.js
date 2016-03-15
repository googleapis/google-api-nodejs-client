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
 * @classdesc The Ad Exchange Buyer API II lets you access the latest features for managing Ad Exchange accounts and Real-Time Bidding configurations.
 * @namespace adexchangebuyer2
 * @version  v2beta1
 * @variation v2beta1
 * @this Adexchangebuyer2
 * @param {object=} options Options for Adexchangebuyer2
 */
function Adexchangebuyer2(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    clients: {

      /**
       * adexchangebuyer2.accounts.clients.update
       *
       * @desc Updates an existing client buyer.
       *
       * @alias adexchangebuyer2.accounts.clients.update
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.clientAccountId - Unique numerical account ID of the client to update. (required)
       * @param  {string} params.accountId - Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
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
       * adexchangebuyer2.accounts.clients.create
       *
       * @desc Creates a new client buyer.
       *
       * @alias adexchangebuyer2.accounts.clients.create
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
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
       * adexchangebuyer2.accounts.clients.get
       *
       * @desc Gets a client buyer with a given client account ID.
       *
       * @alias adexchangebuyer2.accounts.clients.get
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.clientAccountId - Numerical account ID of the client buyer to retrieve. (required)
       * @param  {string} params.accountId - Numerical account ID of the client's sponsor buyer. (required)
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
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
       * adexchangebuyer2.accounts.clients.list
       *
       * @desc Lists all the clients for the current sponsor buyer.
       *
       * @alias adexchangebuyer2.accounts.clients.list
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer=} params.pageSize - Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
       * @param  {string=} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
       * @param  {string} params.accountId - Unique numerical account ID of the sponsor buyer to list the clients for.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
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
         * @param  {object} params - Parameters for request
         * @param  {string} params.clientAccountId - Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
         * @param  {string} params.userId - Numerical identifier of the user to retrieve. (required)
         * @param  {string} params.accountId - Numerical account ID of the client's sponsor buyer. (required)
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
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
         * @param  {object} params - Parameters for request
         * @param  {string} params.clientAccountId - Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
         * @param  {string} params.userId - Numerical identifier of the user to retrieve. (required)
         * @param  {string} params.accountId - Numerical account ID of the client's sponsor buyer. (required)
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
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
         * @param  {object} params - Parameters for request
         * @param  {integer=} params.pageSize - Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
         * @param  {string} params.clientAccountId - The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
         * @param  {string=} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
         * @param  {string} params.accountId - Numerical account ID of the sponsor buyer of the client to list users for. (required)
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
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
         * adexchangebuyer2.accounts.clients.invitations.get
         *
         * @desc Retrieves an existing client user invitation.
         *
         * @alias adexchangebuyer2.accounts.clients.invitations.get
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.clientAccountId - Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
         * @param  {string} params.invitationId - Numerical identifier of the user invitation to retrieve. (required)
         * @param  {string} params.accountId - Numerical account ID of the client's sponsor buyer. (required)
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
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
         * adexchangebuyer2.accounts.clients.invitations.create
         *
         * @desc Creates and sends out an email invitation to access an Ad Exchange client buyer account.
         *
         * @alias adexchangebuyer2.accounts.clients.invitations.create
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.clientAccountId - Numerical account ID of the client buyer that the user should be associated with. (required)
         * @param  {string} params.accountId - Numerical account ID of the client's sponsor buyer. (required)
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
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
         * adexchangebuyer2.accounts.clients.invitations.list
         *
         * @desc Lists all the client users invitations for a client with a given account ID.
         *
         * @alias adexchangebuyer2.accounts.clients.invitations.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param  {object} params - Parameters for request
         * @param  {integer=} params.pageSize - Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
         * @param  {string} params.clientAccountId - Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
         * @param  {string=} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
         * @param  {string} params.accountId - Numerical account ID of the client's sponsor buyer. (required)
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
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

/**
 * Exports Adexchangebuyer2 object
 * @type Adexchangebuyer2
 */
module.exports = Adexchangebuyer2;