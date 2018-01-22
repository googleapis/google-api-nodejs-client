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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Ad Exchange Buyer API II
 *
 * Accesses the latest features for managing Ad Exchange accounts, Real-Time
 * Bidding configurations and auction metrics, and Marketplace programmatic
 * deals.
 *
 * @example
 * const google = require('googleapis');
 * const adexchangebuyer2 = google.adexchangebuyer2('v2beta1');
 *
 * @namespace adexchangebuyer2
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Adexchangebuyer2
 */
function Adexchangebuyer2(options) {
  const self = this;
  self._options = options || {};
  self.accounts =
      {
        clients: {
          /**
           * adexchangebuyer2.accounts.clients.create
           * @desc Creates a new client buyer.
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
          create(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['accountId'],
              pathParams: ['accountId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * adexchangebuyer2.accounts.clients.get
              * @desc Gets a client buyer with a given client account ID.
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
          get(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['accountId', 'clientAccountId'],
              pathParams: ['accountId', 'clientAccountId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * adexchangebuyer2.accounts.clients.list
              * @desc Lists all the clients for the current sponsor buyer.
              * @alias adexchangebuyer2.accounts.clients.list
              * @memberOf! adexchangebuyer2(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.accountId Unique numerical account ID of the sponsor buyer to list the clients for.
              * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
              * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
              * @param {string=} params.partnerClientId Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response.
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          list(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['accountId'],
              pathParams: ['accountId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * adexchangebuyer2.accounts.clients.update
              * @desc Updates an existing client buyer.
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
          update(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                  },
                  options),
              params,
              requiredParams: ['accountId', 'clientAccountId'],
              pathParams: ['accountId', 'clientAccountId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          },
          invitations: {
            /**
             * adexchangebuyer2.accounts.clients.invitations.create
             * @desc Creates and sends out an email invitation to access an Ad
             * Exchange client buyer account.
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
            create(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'POST'
                    },
                    options),
                params,
                requiredParams: ['accountId', 'clientAccountId'],
                pathParams: ['accountId', 'clientAccountId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * adexchangebuyer2.accounts.clients.invitations.get
                * @desc Retrieves an existing client user invitation.
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
            get(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams:
                    ['accountId', 'clientAccountId', 'invitationId'],
                pathParams: ['accountId', 'clientAccountId', 'invitationId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * adexchangebuyer2.accounts.clients.invitations.list
                * @desc Lists all the client users invitations for a client with
                * a given account ID.
                * @alias adexchangebuyer2.accounts.clients.invitations.list
                * @memberOf! adexchangebuyer2(v2beta1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                * @param {string} params.clientAccountId Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
                * @param {integer=} params.pageSize Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
                * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
                * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                * @param {callback} callback The callback that handles the response.
                * @return {object} Request object
                */
            list(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['accountId', 'clientAccountId'],
                pathParams: ['accountId', 'clientAccountId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }

          },
          users: {
            /**
             * adexchangebuyer2.accounts.clients.users.get
             * @desc Retrieves an existing client user.
             * @alias adexchangebuyer2.accounts.clients.users.get
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
             * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
             * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            get(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['accountId', 'clientAccountId', 'userId'],
                pathParams: ['accountId', 'clientAccountId', 'userId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * adexchangebuyer2.accounts.clients.users.list
                * @desc Lists all the known client users for a specified sponsor
                * buyer account ID.
                * @alias adexchangebuyer2.accounts.clients.users.list
                * @memberOf! adexchangebuyer2(v2beta1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.accountId Numerical account ID of the sponsor buyer of the client to list users for. (required)
                * @param {string} params.clientAccountId The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
                * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
                * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
                * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                * @param {callback} callback The callback that handles the response.
                * @return {object} Request object
                */
            list(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['accountId', 'clientAccountId'],
                pathParams: ['accountId', 'clientAccountId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * adexchangebuyer2.accounts.clients.users.update
                * @desc Updates an existing client user. Only the user status
                * can be changed on update.
                * @alias adexchangebuyer2.accounts.clients.users.update
                * @memberOf! adexchangebuyer2(v2beta1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
                * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
                * @param {adexchangebuyer2(v2beta1).ClientUser} params.resource Request body data
                * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                * @param {callback} callback The callback that handles the response.
                * @return {object} Request object
                */
            update(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'PUT'
                    },
                    options),
                params,
                requiredParams: ['accountId', 'clientAccountId', 'userId'],
                pathParams: ['accountId', 'clientAccountId', 'userId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }

          }
        },
        creatives: {
          /**
           * adexchangebuyer2.accounts.creatives.create
           * @desc Creates a creative.
           * @alias adexchangebuyer2.accounts.creatives.create
           * @memberOf! adexchangebuyer2(v2beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
           * @param {string=} params.accountId1 The account the creative belongs to.
           * @param {string=} params.duplicateIdMode Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
           * @param {adexchangebuyer2(v2beta1).Creative} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          create(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['accountId'],
              pathParams: ['accountId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * adexchangebuyer2.accounts.creatives.get
              * @desc Gets a creative.
              * @alias adexchangebuyer2.accounts.creatives.get
              * @memberOf! adexchangebuyer2(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.accountId The account the creative belongs to.
              * @param {string} params.creativeId The ID of the creative to retrieve.
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          get(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['accountId', 'creativeId'],
              pathParams: ['accountId', 'creativeId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * adexchangebuyer2.accounts.creatives.list
              * @desc Lists creatives.
              * @alias adexchangebuyer2.accounts.creatives.list
              * @memberOf! adexchangebuyer2(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.accountId The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
              * @param {integer=} params.pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
              * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
              * @param {string=} params.query An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsStatus: {approved, conditionally_approved, disapproved,                    not_checked} <li>openAuctionStatus: {approved, conditionally_approved, disapproved,                           not_checked} <li>attribute: {a numeric attribute from the list of attributes} <li>disapprovalReason: {a reason from DisapprovalReason} </ul> Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          list(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['accountId'],
              pathParams: ['accountId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * adexchangebuyer2.accounts.creatives.stopWatching
              * @desc Stops watching a creative. Will stop push notifications
              * being sent to the topics when the creative changes status.
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
          stopWatching(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['accountId', 'creativeId'],
              pathParams: ['accountId', 'creativeId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * adexchangebuyer2.accounts.creatives.update
              * @desc Updates a creative.
              * @alias adexchangebuyer2.accounts.creatives.update
              * @memberOf! adexchangebuyer2(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
              * @param {string=} params.accountId1 The account the creative belongs to.
              * @param {string} params.creativeId The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
              * @param {adexchangebuyer2(v2beta1).Creative} params.resource Request body data
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          update(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                  },
                  options),
              params,
              requiredParams: ['accountId', 'creativeId'],
              pathParams: ['accountId', 'creativeId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * adexchangebuyer2.accounts.creatives.watch
              * @desc Watches a creative. Will result in push notifications
              * being sent to the topic when the creative changes status.
              * @alias adexchangebuyer2.accounts.creatives.watch
              * @memberOf! adexchangebuyer2(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.accountId The account of the creative to watch.
              * @param {string} params.creativeId The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
              * @param {adexchangebuyer2(v2beta1).WatchCreativeRequest} params.resource Request body data
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          watch(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['accountId', 'creativeId'],
              pathParams: ['accountId', 'creativeId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          },
          dealAssociations: {
            /**
             * adexchangebuyer2.accounts.creatives.dealAssociations.add
             * @desc Associate an existing deal with a creative.
             * @alias adexchangebuyer2.accounts.creatives.dealAssociations.add
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account the creative belongs to.
             * @param {string} params.creativeId The ID of the creative associated with the deal.
             * @param {adexchangebuyer2(v2beta1).AddDealAssociationRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            add(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'POST'
                    },
                    options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * adexchangebuyer2.accounts.creatives.dealAssociations.list
                * @desc List all creative-deal associations.
                * @alias
                * adexchangebuyer2.accounts.creatives.dealAssociations.list
                * @memberOf! adexchangebuyer2(v2beta1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.accountId The account to list the associations from. Specify "-" to list all creatives the current user has access to.
                * @param {string} params.creativeId The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
                * @param {integer=} params.pageSize Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
                * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
                * @param {string=} params.query An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsId=<i>deals_id_string</i> <li>dealsStatus:{approved, conditionally_approved, disapproved,                   not_checked} <li>openAuctionStatus:{approved, conditionally_approved, disapproved,                          not_checked} </ul> Example: 'dealsId=12345 AND dealsStatus:disapproved'
                * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                * @param {callback} callback The callback that handles the response.
                * @return {object} Request object
                */
            list(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * adexchangebuyer2.accounts.creatives.dealAssociations.remove
                * @desc Remove the association between a deal and a creative.
                * @alias
                * adexchangebuyer2.accounts.creatives.dealAssociations.remove
                * @memberOf! adexchangebuyer2(v2beta1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.accountId The account the creative belongs to.
                * @param {string} params.creativeId The ID of the creative associated with the deal.
                * @param {adexchangebuyer2(v2beta1).RemoveDealAssociationRequest} params.resource Request body data
                * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                * @param {callback} callback The callback that handles the response.
                * @return {object} Request object
                */
            remove(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'POST'
                    },
                    options),
                params,
                requiredParams: ['accountId', 'creativeId'],
                pathParams: ['accountId', 'creativeId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }

          }
        }
      };
  self.bidders = {
    accounts:
        {
          filterSets:
              {
                /**
                 * adexchangebuyer2.bidders.accounts.filterSets.create
                 * @desc Creates the specified filter set for the account with
                 * the given account ID.
                 * @alias adexchangebuyer2.bidders.accounts.filterSets.create
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
                 * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
                 * @param {adexchangebuyer2(v2beta1).FilterSet} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                create(params, options, callback) {
                  if (typeof options === 'function') {
                    callback = options;
                    options = {};
                  }
                  options = options || {};
                  const rootUrl = options.rootUrl ||
                      'https://adexchangebuyer.googleapis.com/';
                  const parameters = {
                    options: Object.assign(
                        {
                          url: (rootUrl + '/v2beta1/{ownerName}/filterSets')
                                   .replace(/([^:]\/)\/+/g, '$1'),
                          method: 'POST'
                        },
                        options),
                    params,
                    requiredParams: ['ownerName'],
                    pathParams: ['ownerName'],
                    context: self
                  };
                  return createAPIRequest(parameters, callback);
                }, /**
                    * adexchangebuyer2.bidders.accounts.filterSets.delete
                    * @desc Deletes the requested filter set from the account
                    * with the given account ID.
                    * @alias adexchangebuyer2.bidders.accounts.filterSets.delete
                    * @memberOf! adexchangebuyer2(v2beta1)
                    *
                    * @param {object} params Parameters for request
                    * @param {string} params.name Full name of the resource to delete. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                    * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                    * @param {callback} callback The callback that handles the response.
                    * @return {object} Request object
                    */
                delete (params, options, callback) {
                  if (typeof options === 'function') {
                    callback = options;
                    options = {};
                  }
                  options = options || {};
                  const rootUrl = options.rootUrl ||
                      'https://adexchangebuyer.googleapis.com/';
                  const parameters = {
                    options: Object.assign(
                        {
                          url: (rootUrl + '/v2beta1/{name}')
                                   .replace(/([^:]\/)\/+/g, '$1'),
                          method: 'DELETE'
                        },
                        options),
                    params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                  };
                  return createAPIRequest(parameters, callback);
                }, /**
                    * adexchangebuyer2.bidders.accounts.filterSets.get
                    * @desc Retrieves the requested filter set for the account
                    * with the given account ID.
                    * @alias adexchangebuyer2.bidders.accounts.filterSets.get
                    * @memberOf! adexchangebuyer2(v2beta1)
                    *
                    * @param {object} params Parameters for request
                    * @param {string} params.name Full name of the resource being requested. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                    * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                    * @param {callback} callback The callback that handles the response.
                    * @return {object} Request object
                    */
                get(params, options, callback) {
                  if (typeof options === 'function') {
                    callback = options;
                    options = {};
                  }
                  options = options || {};
                  const rootUrl = options.rootUrl ||
                      'https://adexchangebuyer.googleapis.com/';
                  const parameters = {
                    options: Object.assign(
                        {
                          url: (rootUrl + '/v2beta1/{name}')
                                   .replace(/([^:]\/)\/+/g, '$1'),
                          method: 'GET'
                        },
                        options),
                    params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                  };
                  return createAPIRequest(parameters, callback);
                }, /**
                    * adexchangebuyer2.bidders.accounts.filterSets.list
                    * @desc Lists all filter sets for the account with the given
                    * account ID.
                    * @alias adexchangebuyer2.bidders.accounts.filterSets.list
                    * @memberOf! adexchangebuyer2(v2beta1)
                    *
                    * @param {object} params Parameters for request
                    * @param {string} params.ownerName Name of the owner (bidder or account) of the filter sets to be listed. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
                    * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                    * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
                    * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                    * @param {callback} callback The callback that handles the response.
                    * @return {object} Request object
                    */
                list(params, options, callback) {
                  if (typeof options === 'function') {
                    callback = options;
                    options = {};
                  }
                  options = options || {};
                  const rootUrl = options.rootUrl ||
                      'https://adexchangebuyer.googleapis.com/';
                  const parameters = {
                    options: Object.assign(
                        {
                          url: (rootUrl + '/v2beta1/{ownerName}/filterSets')
                                   .replace(/([^:]\/)\/+/g, '$1'),
                          method: 'GET'
                        },
                        options),
                    params,
                    requiredParams: ['ownerName'],
                    pathParams: ['ownerName'],
                    context: self
                  };
                  return createAPIRequest(parameters, callback);
                },
                bidMetrics: {
                  /**
                   * adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
                   * @desc Lists all metrics that are measured in terms of
                   * number of bids.
                   * @alias
                   * adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
                   * @memberOf! adexchangebuyer2(v2beta1)
                   *
                   * @param {object} params Parameters for request
                   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
                   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                   * @param {callback} callback The callback that handles the response.
                   * @return {object} Request object
                   */
                  list(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl +
                                  '/v2beta1/{filterSetName}/bidMetrics')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                          },
                          options),
                      params,
                      requiredParams: ['filterSetName'],
                      pathParams: ['filterSetName'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }

                },
                bidResponseErrors: {
                  /**
                   * adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
                   * @desc List all errors that occurred in bid responses, with
                   * the number of bid responses affected for each reason.
                   * @alias
                   * adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
                   * @memberOf! adexchangebuyer2(v2beta1)
                   *
                   * @param {object} params Parameters for request
                   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
                   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                   * @param {callback} callback The callback that handles the response.
                   * @return {object} Request object
                   */
                  list(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl +
                                  '/v2beta1/{filterSetName}/bidResponseErrors')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                          },
                          options),
                      params,
                      requiredParams: ['filterSetName'],
                      pathParams: ['filterSetName'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }

                },
                bidResponsesWithoutBids: {
                  /**
                   * adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
                   * @desc List all reasons for which bid responses were
                   * considered to have no applicable bids, with the number of
                   * bid responses affected for each reason.
                   * @alias
                   * adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
                   * @memberOf! adexchangebuyer2(v2beta1)
                   *
                   * @param {object} params Parameters for request
                   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
                   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                   * @param {callback} callback The callback that handles the response.
                   * @return {object} Request object
                   */
                  list(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url:
                                (rootUrl +
                                 '/v2beta1/{filterSetName}/bidResponsesWithoutBids')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                          },
                          options),
                      params,
                      requiredParams: ['filterSetName'],
                      pathParams: ['filterSetName'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }

                },
                filteredBidRequests: {
                  /**
                   * adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
                   * @desc List all reasons that caused a bid request not to be
                   * sent for an impression, with the number of bid requests not
                   * sent for each reason.
                   * @alias
                   * adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
                   * @memberOf! adexchangebuyer2(v2beta1)
                   *
                   * @param {object} params Parameters for request
                   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
                   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                   * @param {callback} callback The callback that handles the response.
                   * @return {object} Request object
                   */
                  list(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url:
                                (rootUrl +
                                 '/v2beta1/{filterSetName}/filteredBidRequests')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                          },
                          options),
                      params,
                      requiredParams: ['filterSetName'],
                      pathParams: ['filterSetName'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }

                },
                filteredBids: {
                  /**
                   * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
                   * @desc List all reasons for which bids were filtered, with
                   * the number of bids filtered for each reason.
                   * @alias
                   * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
                   * @memberOf! adexchangebuyer2(v2beta1)
                   *
                   * @param {object} params Parameters for request
                   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
                   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                   * @param {callback} callback The callback that handles the response.
                   * @return {object} Request object
                   */
                  list(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl +
                                  '/v2beta1/{filterSetName}/filteredBids')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                          },
                          options),
                      params,
                      requiredParams: ['filterSetName'],
                      pathParams: ['filterSetName'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  },
                  creatives: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
                     * @desc List all creatives associated with a specific
                     * reason for which bids were filtered, with the number of
                     * bids filtered for each creative.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    list(params, options, callback) {
                      if (typeof options === 'function') {
                        callback = options;
                        options = {};
                      }
                      options = options || {};
                      const rootUrl = options.rootUrl ||
                          'https://adexchangebuyer.googleapis.com/';
                      const parameters = {
                        options: Object.assign(
                            {
                              url:
                                  (rootUrl +
                                   '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives')
                                      .replace(/([^:]\/)\/+/g, '$1'),
                              method: 'GET'
                            },
                            options),
                        params,
                        requiredParams: ['filterSetName', 'creativeStatusId'],
                        pathParams: ['creativeStatusId', 'filterSetName'],
                        context: self
                      };
                      return createAPIRequest(parameters, callback);
                    }

                  },
                  details: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
                     * @desc List all details associated with a specific reason
                     * for which bids were filtered, with the number of bids
                     * filtered for each detail.
                     * @alias
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    list(params, options, callback) {
                      if (typeof options === 'function') {
                        callback = options;
                        options = {};
                      }
                      options = options || {};
                      const rootUrl = options.rootUrl ||
                          'https://adexchangebuyer.googleapis.com/';
                      const parameters = {
                        options: Object.assign(
                            {
                              url:
                                  (rootUrl +
                                   '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details')
                                      .replace(/([^:]\/)\/+/g, '$1'),
                              method: 'GET'
                            },
                            options),
                        params,
                        requiredParams: ['filterSetName', 'creativeStatusId'],
                        pathParams: ['creativeStatusId', 'filterSetName'],
                        context: self
                      };
                      return createAPIRequest(parameters, callback);
                    }

                  }
                },
                impressionMetrics: {
                  /**
                   * adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
                   * @desc Lists all metrics that are measured in terms of
                   * number of impressions.
                   * @alias
                   * adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
                   * @memberOf! adexchangebuyer2(v2beta1)
                   *
                   * @param {object} params Parameters for request
                   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
                   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                   * @param {callback} callback The callback that handles the response.
                   * @return {object} Request object
                   */
                  list(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl +
                                  '/v2beta1/{filterSetName}/impressionMetrics')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                          },
                          options),
                      params,
                      requiredParams: ['filterSetName'],
                      pathParams: ['filterSetName'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }

                },
                losingBids: {
                  /**
                   * adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
                   * @desc List all reasons for which bids lost in the auction,
                   * with the number of bids that lost for each reason.
                   * @alias
                   * adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
                   * @memberOf! adexchangebuyer2(v2beta1)
                   *
                   * @param {object} params Parameters for request
                   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
                   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                   * @param {callback} callback The callback that handles the response.
                   * @return {object} Request object
                   */
                  list(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl +
                                  '/v2beta1/{filterSetName}/losingBids')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                          },
                          options),
                      params,
                      requiredParams: ['filterSetName'],
                      pathParams: ['filterSetName'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }

                },
                nonBillableWinningBids: {
                  /**
                   * adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
                   * @desc List all reasons for which winning bids were not
                   * billable, with the number of bids not billed for each
                   * reason.
                   * @alias
                   * adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
                   * @memberOf! adexchangebuyer2(v2beta1)
                   *
                   * @param {object} params Parameters for request
                   * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
                   * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                   * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
                   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                   * @param {callback} callback The callback that handles the response.
                   * @return {object} Request object
                   */
                  list(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl = options.rootUrl ||
                        'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url:
                                (rootUrl +
                                 '/v2beta1/{filterSetName}/nonBillableWinningBids')
                                    .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                          },
                          options),
                      params,
                      requiredParams: ['filterSetName'],
                      pathParams: ['filterSetName'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }

                }
              }
        },
    filterSets: {
      /**
       * adexchangebuyer2.bidders.filterSets.create
       * @desc Creates the specified filter set for the account with the given
       * account ID.
       * @alias adexchangebuyer2.bidders.filterSets.create
       * @memberOf! adexchangebuyer2(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
       * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
       * @param {adexchangebuyer2(v2beta1).FilterSet} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{ownerName}/filterSets')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['ownerName'],
          pathParams: ['ownerName'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * adexchangebuyer2.bidders.filterSets.delete
          * @desc Deletes the requested filter set from the account with the
          * given account ID.
          * @alias adexchangebuyer2.bidders.filterSets.delete
          * @memberOf! adexchangebuyer2(v2beta1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Full name of the resource to delete. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      delete (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * adexchangebuyer2.bidders.filterSets.get
          * @desc Retrieves the requested filter set for the account with the
          * given account ID.
          * @alias adexchangebuyer2.bidders.filterSets.get
          * @memberOf! adexchangebuyer2(v2beta1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Full name of the resource being requested. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * adexchangebuyer2.bidders.filterSets.list
          * @desc Lists all filter sets for the account with the given account
          * ID.
          * @alias adexchangebuyer2.bidders.filterSets.list
          * @memberOf! adexchangebuyer2(v2beta1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.ownerName Name of the owner (bidder or account) of the filter sets to be listed. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
          * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
          * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{ownerName}/filterSets')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['ownerName'],
          pathParams: ['ownerName'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      },
      bidMetrics: {
        /**
         * adexchangebuyer2.bidders.filterSets.bidMetrics.list
         * @desc Lists all metrics that are measured in terms of number of bids.
         * @alias adexchangebuyer2.bidders.filterSets.bidMetrics.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{filterSetName}/bidMetrics')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['filterSetName'],
            pathParams: ['filterSetName'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      },
      bidResponseErrors: {
        /**
         * adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
         * @desc List all errors that occurred in bid responses, with the number
         * of bid responses affected for each reason.
         * @alias adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{filterSetName}/bidResponseErrors')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['filterSetName'],
            pathParams: ['filterSetName'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      },
      bidResponsesWithoutBids: {
        /**
         * adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
         * @desc List all reasons for which bid responses were considered to
         * have no applicable bids, with the number of bid responses affected
         * for each reason.
         * @alias
         * adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl +
                        '/v2beta1/{filterSetName}/bidResponsesWithoutBids')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['filterSetName'],
            pathParams: ['filterSetName'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      },
      filteredBidRequests: {
        /**
         * adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
         * @desc List all reasons that caused a bid request not to be sent for
         * an impression, with the number of bid requests not sent for each
         * reason.
         * @alias adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl + '/v2beta1/{filterSetName}/filteredBidRequests')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['filterSetName'],
            pathParams: ['filterSetName'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      },
      filteredBids: {
        /**
         * adexchangebuyer2.bidders.filterSets.filteredBids.list
         * @desc List all reasons for which bids were filtered, with the number
         * of bids filtered for each reason.
         * @alias adexchangebuyer2.bidders.filterSets.filteredBids.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{filterSetName}/filteredBids')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['filterSetName'],
            pathParams: ['filterSetName'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        },
        creatives: {
          /**
           * adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
           * @desc List all creatives associated with a specific reason for
           * which bids were filtered, with the number of bids filtered for each
           * creative.
           * @alias
           * adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
           * @memberOf! adexchangebuyer2(v2beta1)
           *
           * @param {object} params Parameters for request
           * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
           * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
           * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
           * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['filterSetName', 'creativeStatusId'],
              pathParams: ['creativeStatusId', 'filterSetName'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        },
        details: {
          /**
           * adexchangebuyer2.bidders.filterSets.filteredBids.details.list
           * @desc List all details associated with a specific reason for which
           * bids were filtered, with the number of bids filtered for each
           * detail.
           * @alias
           * adexchangebuyer2.bidders.filterSets.filteredBids.details.list
           * @memberOf! adexchangebuyer2(v2beta1)
           *
           * @param {object} params Parameters for request
           * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
           * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
           * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
           * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['filterSetName', 'creativeStatusId'],
              pathParams: ['creativeStatusId', 'filterSetName'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        }
      },
      impressionMetrics: {
        /**
         * adexchangebuyer2.bidders.filterSets.impressionMetrics.list
         * @desc Lists all metrics that are measured in terms of number of
         * impressions.
         * @alias adexchangebuyer2.bidders.filterSets.impressionMetrics.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{filterSetName}/impressionMetrics')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['filterSetName'],
            pathParams: ['filterSetName'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      },
      losingBids: {
        /**
         * adexchangebuyer2.bidders.filterSets.losingBids.list
         * @desc List all reasons for which bids lost in the auction, with the
         * number of bids that lost for each reason.
         * @alias adexchangebuyer2.bidders.filterSets.losingBids.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{filterSetName}/losingBids')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['filterSetName'],
            pathParams: ['filterSetName'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      },
      nonBillableWinningBids: {
        /**
         * adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
         * @desc List all reasons for which winning bids were not billable, with
         * the number of bids not billed for each reason.
         * @alias
         * adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
         * @memberOf! adexchangebuyer2(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl +
                        '/v2beta1/{filterSetName}/nonBillableWinningBids')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['filterSetName'],
            pathParams: ['filterSetName'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      }
    }
  };
}
/**
 * @typedef AbsoluteDateRange
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).Date} endDate The end date of the range (inclusive). Must be within the 30 days leading up to current date, and must be equal to or after start_date.
 * @property {adexchangebuyer2(v2beta1).Date} startDate The start date of the range (inclusive). Must be within the 30 days leading up to current date, and must be equal to or before end_date.
 */
/**
 * @typedef AddDealAssociationRequest
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).CreativeDealAssociation} association The association between a creative and a deal that should be added.
 */
/**
 * @typedef AppContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} appTypes The app types this restriction applies to.
 */
/**
 * @typedef AuctionContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} auctionTypes The auction types this restriction applies to.
 */
/**
 * @typedef BidMetricsRow
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).MetricValue} bids The number of bids that Ad Exchange received from the buyer.
 * @property {adexchangebuyer2(v2beta1).MetricValue} bidsInAuction The number of bids that were permitted to compete in the auction.
 * @property {adexchangebuyer2(v2beta1).MetricValue} billedImpressions The number of bids for which the buyer was billed.
 * @property {adexchangebuyer2(v2beta1).MetricValue} impressionsWon The number of bids that won an impression.
 * @property {adexchangebuyer2(v2beta1).MetricValue} measurableImpressions The number of bids for which the corresponding impression was measurable for viewability (as defined by Active View).
 * @property {adexchangebuyer2(v2beta1).RowDimensions} rowDimensions The values of all dimensions associated with metric values in this row.
 * @property {adexchangebuyer2(v2beta1).MetricValue} viewableImpressions The number of bids for which the corresponding impression was viewable (as defined by Active View).
 */
/**
 * @typedef BidResponseWithoutBidsStatusRow
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).MetricValue} impressionCount The number of impressions for which there was a bid response with the specified status.
 * @property {adexchangebuyer2(v2beta1).RowDimensions} rowDimensions The values of all dimensions associated with metric values in this row.
 * @property {string} status The status specifying why the bid responses were considered to have no applicable bids.
 */
/**
 * @typedef CalloutStatusRow
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {integer} calloutStatusId The ID of the callout status. See [callout-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/callout-status-codes).
 * @property {adexchangebuyer2(v2beta1).MetricValue} impressionCount The number of impressions for which there was a bid request or bid response with the specified callout status.
 * @property {adexchangebuyer2(v2beta1).RowDimensions} rowDimensions The values of all dimensions associated with metric values in this row.
 */
/**
 * @typedef Client
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} clientAccountId The globally-unique numerical ID of the client. The value of this field is ignored in create and update operations.
 * @property {string} clientName Name used to represent this client to publishers. You may have multiple clients that map to the same entity, but for each client the combination of `clientName` and entity must be unique. You can specify this field as empty.
 * @property {string} entityId Numerical identifier of the client entity. The entity can be an advertiser, a brand, or an agency. This identifier is unique among all the entities with the same type.  A list of all known advertisers with their identifiers is available in the [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt) file.  A list of all known brands with their identifiers is available in the [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt) file.  A list of all known agencies with their identifiers is available in the [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt) file.
 * @property {string} entityName The name of the entity. This field is automatically fetched based on the type and ID. The value of this field is ignored in create and update operations.
 * @property {string} entityType The type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.
 * @property {string} partnerClientId Optional arbitrary unique identifier of this client buyer from the standpoint of its Ad Exchange sponsor buyer.  This field can be used to associate a client buyer with the identifier in the namespace of its sponsor buyer, lookup client buyers by that identifier and verify whether an Ad Exchange counterpart of a given client buyer already exists.  If present, must be unique among all the client buyers for its Ad Exchange sponsor buyer.
 * @property {string} role The role which is assigned to the client buyer. Each role implies a set of permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`, `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.
 * @property {string} status The status of the client buyer.
 * @property {boolean} visibleToSeller Whether the client buyer will be visible to sellers.
 */
/**
 * @typedef ClientUser
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} clientAccountId Numerical account ID of the client buyer with which the user is associated; the buyer must be a client of the current sponsor buyer. The value of this field is ignored in an update operation.
 * @property {string} email User&#39;s email address. The value of this field is ignored in an update operation.
 * @property {string} status The status of the client user.
 * @property {string} userId The unique numerical ID of the client user that has accepted an invitation. The value of this field is ignored in an update operation.
 */
/**
 * @typedef ClientUserInvitation
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} clientAccountId Numerical account ID of the client buyer that the invited user is associated with. The value of this field is ignored in create operations.
 * @property {string} email The email address to which the invitation is sent. Email addresses should be unique among all client users under each sponsor buyer.
 * @property {string} invitationId The unique numerical ID of the invitation that is sent to the user. The value of this field is ignored in create operations.
 */
/**
 * @typedef Correction
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).ServingContext[]} contexts The contexts for the correction.
 * @property {string[]} details Additional details about what was corrected.
 * @property {string} type The type of correction that was applied to the creative.
 */
/**
 * @typedef Creative
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
 * @property {string} adChoicesDestinationUrl The link to AdChoices destination page.
 * @property {string} advertiserName The name of the company being advertised in the creative.
 * @property {string} agencyId The agency ID for this creative.
 * @property {string} apiUpdateTime @OutputOnly The last update timestamp of the creative via API.
 * @property {string[]} attributes All attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.
 * @property {string[]} clickThroughUrls The set of destination URLs for the creative.
 * @property {adexchangebuyer2(v2beta1).Correction[]} corrections @OutputOnly Shows any corrections that were applied to this creative.
 * @property {string} creativeId The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
 * @property {string} dealsStatus @OutputOnly The top-level deals status of this creative. If disapproved, an entry for &#39;auctionType=DIRECT_DEALS&#39; (or &#39;ALL&#39;) in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.
 * @property {string[]} detectedAdvertiserIds @OutputOnly Detected advertiser IDs, if any.
 * @property {string[]} detectedDomains @OutputOnly The detected domains for this creative.
 * @property {string[]} detectedLanguages @OutputOnly The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes.
 * @property {integer[]} detectedProductCategories @OutputOnly Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs.
 * @property {integer[]} detectedSensitiveCategories @OutputOnly Detected sensitive categories, if any. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.
 * @property {adexchangebuyer2(v2beta1).FilteringStats} filteringStats @OutputOnly The filtering stats for this creative.
 * @property {adexchangebuyer2(v2beta1).HtmlContent} html An HTML creative.
 * @property {string[]} impressionTrackingUrls The set of URLs to be called to record an impression.
 * @property {adexchangebuyer2(v2beta1).NativeContent} native A native creative.
 * @property {string} openAuctionStatus @OutputOnly The top-level open auction status of this creative. If disapproved, an entry for &#39;auctionType = OPEN_AUCTION&#39; (or &#39;ALL&#39;) in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.
 * @property {string[]} restrictedCategories All restricted categories for the ads that may be shown from this creative.
 * @property {adexchangebuyer2(v2beta1).ServingRestriction[]} servingRestrictions @OutputOnly The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction).
 * @property {integer[]} vendorIds All vendor IDs for the ads that may be shown from this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values.
 * @property {integer} version @OutputOnly The version of this creative.
 * @property {adexchangebuyer2(v2beta1).VideoContent} video A video creative.
 */
/**
 * @typedef CreativeDealAssociation
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} accountId The account the creative belongs to.
 * @property {string} creativeId The ID of the creative associated with the deal.
 * @property {string} dealsId The externalDealId for the deal associated with the creative.
 */
/**
 * @typedef CreativeStatusRow
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).MetricValue} bidCount The number of bids with the specified status.
 * @property {integer} creativeStatusId The ID of the creative status. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
 * @property {adexchangebuyer2(v2beta1).RowDimensions} rowDimensions The values of all dimensions associated with metric values in this row.
 */
/**
 * @typedef Date
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {integer} day Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year/month where the day is not significant.
 * @property {integer} month Month of year. Must be from 1 to 12.
 * @property {integer} year Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
 */
/**
 * @typedef Disapproval
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} details Additional details about the reason for disapproval.
 * @property {string} reason The categorized reason for disapproval.
 */
/**
 * @typedef Empty
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 */
/**
 * @typedef FilteredBidCreativeRow
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).MetricValue} bidCount The number of bids with the specified creative.
 * @property {string} creativeId The ID of the creative.
 * @property {adexchangebuyer2(v2beta1).RowDimensions} rowDimensions The values of all dimensions associated with metric values in this row.
 */
/**
 * @typedef FilteredBidDetailRow
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).MetricValue} bidCount The number of bids with the specified detail.
 * @property {integer} detailId The ID of the detail. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message.
 * @property {adexchangebuyer2(v2beta1).RowDimensions} rowDimensions The values of all dimensions associated with metric values in this row.
 */
/**
 * @typedef FilteringStats
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).Date} date The day during which the data was collected. The data is collected from 00:00:00 to 23:59:59 PT. During switches from PST to PDT and back, the day may contain 23 or 25 hours of data instead of the usual 24.
 * @property {adexchangebuyer2(v2beta1).Reason[]} reasons The set of filtering reasons for this date.
 */
/**
 * @typedef FilterSet
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).AbsoluteDateRange} absoluteDateRange An absolute date range, defined by a start date and an end date. Interpreted relative to Pacific time zone.
 * @property {string} creativeId The ID of the creative on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, i.e. one whose name matches the `bidders/x/accounts/x/filterSets/x pattern.
 * @property {string} dealId The ID of the deal on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, i.e. one whose name matches the `bidders/x/accounts/x/filterSets/x pattern.
 * @property {string} environment The environment on which to filter; optional.
 * @property {string} format DEPRECATED: use repeated formats field instead. The format on which to filter; optional.
 * @property {string[]} formats The list of formats on which to filter; may be empty. The filters represented by multiple formats are ORed together (i.e. if non-empty, results must match any one of the formats).
 * @property {string} name A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns:  - `bidders/x/filterSets/x (for accessing bidder-level troubleshooting data) - `bidders/x/accounts/x/filterSets/x (for accessing account-level troubleshooting data)  This field is required in create operations.
 * @property {string[]} platforms The list of platforms on which to filter; may be empty. The filters represented by multiple platforms are ORed together (i.e. if non-empty, results must match any one of the platforms).
 * @property {adexchangebuyer2(v2beta1).RealtimeTimeRange} realtimeTimeRange An open-ended realtime time range, defined by the aggregation start timestamp.
 * @property {adexchangebuyer2(v2beta1).RelativeDateRange} relativeDateRange A relative date range, defined by an offset from today and a duration. Interpreted relative to Pacific time zone.
 * @property {integer[]} sellerNetworkIds The list of IDs of the seller (publisher) networks on which to filter; may be empty. The filters represented by multiple seller network IDs are ORed together (i.e. if non-empty, results must match any one of the publisher networks). See [seller-network-ids](https://developers.google.com/ad-exchange/rtb/downloads/seller-network-ids) file for the set of existing seller network IDs.
 * @property {string} timeSeriesGranularity The granularity of time intervals if a time series breakdown is desired; optional.
 */
/**
 * @typedef HtmlContent
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {integer} height The height of the HTML snippet in pixels.
 * @property {string} snippet The HTML snippet that displays the ad when inserted in the web page.
 * @property {integer} width The width of the HTML snippet in pixels.
 */
/**
 * @typedef Image
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {integer} height Image height in pixels.
 * @property {string} url The URL of the image.
 * @property {integer} width Image width in pixels.
 */
/**
 * @typedef ImpressionMetricsRow
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).MetricValue} availableImpressions The number of impressions available to the buyer on Ad Exchange. In some cases this value may be unavailable.
 * @property {adexchangebuyer2(v2beta1).MetricValue} bidRequests The number of impressions for which Ad Exchange sent the buyer a bid request.
 * @property {adexchangebuyer2(v2beta1).MetricValue} inventoryMatches The number of impressions that match the buyer&#39;s inventory pretargeting.
 * @property {adexchangebuyer2(v2beta1).MetricValue} responsesWithBids The number of impressions for which Ad Exchange received a response from the buyer that contained at least one applicable bid.
 * @property {adexchangebuyer2(v2beta1).RowDimensions} rowDimensions The values of all dimensions associated with metric values in this row.
 * @property {adexchangebuyer2(v2beta1).MetricValue} successfulResponses The number of impressions for which the buyer successfully sent a response to Ad Exchange.
 */
/**
 * @typedef ListBidMetricsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).BidMetricsRow[]} bidMetricsRows List of rows, each containing a set of bid metrics.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListBidMetricsRequest.pageToken field in the subsequent call to the bidMetrics.list method to retrieve the next page of results.
 */
/**
 * @typedef ListBidResponseErrorsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).CalloutStatusRow[]} calloutStatusRows List of rows, with counts of bid responses aggregated by callout status.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListBidResponseErrorsRequest.pageToken field in the subsequent call to the bidResponseErrors.list method to retrieve the next page of results.
 */
/**
 * @typedef ListBidResponsesWithoutBidsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).BidResponseWithoutBidsStatusRow[]} bidResponseWithoutBidsStatusRows List of rows, with counts of bid responses without bids aggregated by status.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call to the bidResponsesWithoutBids.list method to retrieve the next page of results.
 */
/**
 * @typedef ListClientsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).Client[]} clients The returned list of clients.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the accounts.clients.list method to retrieve the next page of results.
 */
/**
 * @typedef ListClientUserInvitationsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).ClientUserInvitation[]} invitations The returned list of client users.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListClientUserInvitationsRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.
 */
/**
 * @typedef ListClientUsersResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.
 * @property {adexchangebuyer2(v2beta1).ClientUser[]} users The returned list of client users.
 */
/**
 * @typedef ListCreativesResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).Creative[]} creatives The list of creatives.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.page_token field in the subsequent call to `ListCreatives` method to retrieve the next page of results.
 */
/**
 * @typedef ListCreativeStatusBreakdownByCreativeResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).FilteredBidCreativeRow[]} filteredBidCreativeRows List of rows, with counts of bids with a given creative status aggregated by creative.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the subsequent call to the filteredBids.creatives.list method to retrieve the next page of results.
 */
/**
 * @typedef ListCreativeStatusBreakdownByDetailResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} detailType The type of detail that the detail IDs represent.
 * @property {adexchangebuyer2(v2beta1).FilteredBidDetailRow[]} filteredBidDetailRows List of rows, with counts of bids with a given creative status aggregated by detail.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByDetailRequest.pageToken field in the subsequent call to the filteredBids.details.list method to retrieve the next page of results.
 */
/**
 * @typedef ListDealAssociationsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).CreativeDealAssociation[]} associations The list of associations.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListDealAssociationsRequest.page_token field in the subsequent call to &#39;ListDealAssociation&#39; method to retrieve the next page of results.
 */
/**
 * @typedef ListFilteredBidRequestsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).CalloutStatusRow[]} calloutStatusRows List of rows, with counts of filtered bid requests aggregated by callout status.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListFilteredBidRequestsRequest.pageToken field in the subsequent call to the filteredBidRequests.list method to retrieve the next page of results.
 */
/**
 * @typedef ListFilteredBidsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).CreativeStatusRow[]} creativeStatusRows List of rows, with counts of filtered bids aggregated by filtering reason (i.e. creative status).
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListFilteredBidsRequest.pageToken field in the subsequent call to the filteredBids.list method to retrieve the next page of results.
 */
/**
 * @typedef ListFilterSetsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).FilterSet[]} filterSets The filter sets belonging to the buyer.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListFilterSetsRequest.pageToken field in the subsequent call to the accounts.filterSets.list method to retrieve the next page of results.
 */
/**
 * @typedef ListImpressionMetricsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).ImpressionMetricsRow[]} impressionMetricsRows List of rows, each containing a set of impression metrics.
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListImpressionMetricsRequest.pageToken field in the subsequent call to the impressionMetrics.list method to retrieve the next page of results.
 */
/**
 * @typedef ListLosingBidsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).CreativeStatusRow[]} creativeStatusRows List of rows, with counts of losing bids aggregated by loss reason (i.e. creative status).
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListLosingBidsRequest.pageToken field in the subsequent call to the losingBids.list method to retrieve the next page of results.
 */
/**
 * @typedef ListNonBillableWinningBidsResponse
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} nextPageToken A token to retrieve the next page of results. Pass this value in the ListNonBillableWinningBidsRequest.pageToken field in the subsequent call to the nonBillableWinningBids.list method to retrieve the next page of results.
 * @property {adexchangebuyer2(v2beta1).NonBillableWinningBidStatusRow[]} nonBillableWinningBidStatusRows List of rows, with counts of bids not billed aggregated by reason.
 */
/**
 * @typedef LocationContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {integer[]} geoCriteriaIds IDs representing the geo location for this context. Please refer to the [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv) file for different geo criteria IDs.
 */
/**
 * @typedef MetricValue
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} value The expected value of the metric.
 * @property {string} variance The variance (i.e. square of the standard deviation) of the metric value. If value is exact, variance is 0. Can be used to calculate margin of error as a percentage of value, using the following formula, where Z is the standard constant that depends on the desired size of the confidence interval (e.g. for 90% confidence interval, use Z = 1.645):    marginOfError = 100 * Z * sqrt(variance) / value
 */
/**
 * @typedef NativeContent
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} advertiserName The name of the advertiser or sponsor, to be displayed in the ad creative.
 * @property {adexchangebuyer2(v2beta1).Image} appIcon The app icon, for app download ads.
 * @property {string} body A long description of the ad.
 * @property {string} callToAction A label for the button that the user is supposed to click.
 * @property {string} clickLinkUrl The URL that the browser/SDK will load when the user clicks the ad.
 * @property {string} clickTrackingUrl The URL to use for click tracking.
 * @property {string} headline A short title for the ad.
 * @property {adexchangebuyer2(v2beta1).Image} image A large image.
 * @property {adexchangebuyer2(v2beta1).Image} logo A smaller image, for the advertiser&#39;s logo.
 * @property {string} priceDisplayText The price of the promoted app including currency info.
 * @property {number} starRating The app rating in the app store. Must be in the range [0-5].
 * @property {string} storeUrl The URL to the app store to purchase/download the promoted app.
 * @property {string} videoUrl The URL to fetch a native video ad.
 */
/**
 * @typedef NonBillableWinningBidStatusRow
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).MetricValue} bidCount The number of bids with the specified status.
 * @property {adexchangebuyer2(v2beta1).RowDimensions} rowDimensions The values of all dimensions associated with metric values in this row.
 * @property {string} status The status specifying why the winning bids were not billed.
 */
/**
 * @typedef PlatformContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} platforms The platforms this restriction applies to.
 */
/**
 * @typedef RealtimeTimeRange
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} startTimestamp The start timestamp of the real-time RTB metrics aggregation.
 */
/**
 * @typedef Reason
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} count The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange.
 * @property {integer} status The filtering status code. Please refer to the [creative-status-codes.txt](https://storage.googleapis.com/adx-rtb-dictionaries/creative-status-codes.txt) file for different statuses.
 */
/**
 * @typedef RelativeDateRange
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {integer} durationDays The number of days in the requested date range. E.g. for a range spanning today, 1. For a range spanning the last 7 days, 7.
 * @property {integer} offsetDays The end date of the filter set, specified as the number of days before today. E.g. for a range where the last date is today, 0.
 */
/**
 * @typedef RemoveDealAssociationRequest
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).CreativeDealAssociation} association The association between a creative and a deal that should be removed.
 */
/**
 * @typedef RowDimensions
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).TimeInterval} timeInterval The time interval that this row represents.
 */
/**
 * @typedef SecurityContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string[]} securities The security types in this context.
 */
/**
 * @typedef ServingContext
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} all Matches all contexts.
 * @property {adexchangebuyer2(v2beta1).AppContext} appType Matches impressions for a particular app type.
 * @property {adexchangebuyer2(v2beta1).AuctionContext} auctionType Matches impressions for a particular auction type.
 * @property {adexchangebuyer2(v2beta1).LocationContext} location Matches impressions coming from users *or* publishers in a specific location.
 * @property {adexchangebuyer2(v2beta1).PlatformContext} platform Matches impressions coming from a particular platform.
 * @property {adexchangebuyer2(v2beta1).SecurityContext} securityType Matches impressions for a particular security type.
 */
/**
 * @typedef ServingRestriction
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {adexchangebuyer2(v2beta1).ServingContext[]} contexts The contexts for the restriction.
 * @property {adexchangebuyer2(v2beta1).Disapproval[]} disapprovalReasons Any disapprovals bound to this restriction. Only present if status=DISAPPROVED. Can be used to filter the response of the creatives.list method.
 * @property {string} status The status of the creative in this context (for example, it has been explicitly disapproved or is pending review).
 */
/**
 * @typedef StopWatchingCreativeRequest
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 */
/**
 * @typedef TimeInterval
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} endTime The timestamp marking the end of the range (exclusive) for which data is included.
 * @property {string} startTime The timestamp marking the start of the range (inclusive) for which data is included.
 */
/**
 * @typedef VideoContent
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} videoUrl The URL to fetch a video ad.
 */
/**
 * @typedef WatchCreativeRequest
 * @memberOf! adexchangebuyer2(v2beta1)
 * @type object
 * @property {string} topic The Pub/Sub topic to publish notifications to. This topic must already exist and must give permission to ad-exchange-buyside-reports@google.com to write to the topic. This should be the full resource name in &quot;projects/{project_id}/topics/{topic_id}&quot; format.
 */

export = Adexchangebuyer2;
