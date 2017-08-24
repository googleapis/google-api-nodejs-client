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

import createAPIRequest from '../../lib/apirequest';

/**
 * Google Vault API
 *
 * 
 *
 * @example
 * const google = require('googleapis');
 * const vault = google.vault('v1');
 *
 * @namespace vault
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Vault
 */
function Vault(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.matters = {

    /**
     * vault.matters.addPermissions
     *
     * @desc Adds an account as a matter collaborator.
     *
     * @alias vault.matters.addPermissions
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {vault(v1).AddMatterPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addPermissions: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters/{matterId}:addPermissions').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * vault.matters.close
     *
     * @desc Closes the specified matter. Returns matter with updated state.
     *
     * @alias vault.matters.close
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {vault(v1).CloseMatterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    close: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters/{matterId}:close').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * vault.matters.create
     *
     * @desc Creates a new matter. Returns created matter with default view.
     *
     * @alias vault.matters.create
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {vault(v1).Matter} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * vault.matters.delete
     *
     * @desc Deletes the specified matter. Returns matter with updated state.
     *
     * @alias vault.matters.delete
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters/{matterId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * vault.matters.get
     *
     * @desc Gets the specified matter.
     *
     * @alias vault.matters.get
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {string=} params.view Specifies which parts of the Matter to return in the response.
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

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters/{matterId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * vault.matters.list
     *
     * @desc Lists matters the user has access to.
     *
     * @alias vault.matters.list
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The number of matters to return in the response. Default and maximum are 100.
     * @param {string=} params.pageToken The pagination token as returned in the response.
     * @param {string=} params.view Specifies which parts of the matter to return in response.
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

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * vault.matters.removePermissions
     *
     * @desc Removes an account as a matter collaborator.
     *
     * @alias vault.matters.removePermissions
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {vault(v1).RemoveMatterPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removePermissions: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters/{matterId}:removePermissions').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * vault.matters.reopen
     *
     * @desc Reopens the specified matter. Returns matter with updated state.
     *
     * @alias vault.matters.reopen
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {vault(v1).ReopenMatterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reopen: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters/{matterId}:reopen').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * vault.matters.undelete
     *
     * @desc Undeletes the specified matter. Returns matter with updated state.
     *
     * @alias vault.matters.undelete
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {vault(v1).UndeleteMatterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters/{matterId}:undelete').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * vault.matters.update
     *
     * @desc Updates the specified matter. This updates only the name and description of the matter, identified by matter id. Changes to any other fields are ignored. Returns the default view of the matter.
     *
     * @alias vault.matters.update
     * @memberOf! vault(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.matterId The matter ID.
     * @param {vault(v1).Matter} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/matters/{matterId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['matterId'],
        pathParams: ['matterId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },
    holds: {

      /**
       * vault.matters.holds.create
       *
       * @desc Creates a hold in the given matter.
       *
       * @alias vault.matters.holds.create
       * @memberOf! vault(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.matterId The matter ID.
       * @param {vault(v1).Hold} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/matters/{matterId}/holds').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['matterId'],
          pathParams: ['matterId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * vault.matters.holds.delete
       *
       * @desc Removes a hold by ID. This will release any HeldAccounts on this Hold.
       *
       * @alias vault.matters.holds.delete
       * @memberOf! vault(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.holdId The hold ID.
       * @param {string} params.matterId The matter ID.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['matterId', 'holdId'],
          pathParams: ['holdId', 'matterId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * vault.matters.holds.get
       *
       * @desc Gets a hold by ID.
       *
       * @alias vault.matters.holds.get
       * @memberOf! vault(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.holdId The hold ID.
       * @param {string} params.matterId The matter ID.
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

        const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['matterId', 'holdId'],
          pathParams: ['holdId', 'matterId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * vault.matters.holds.list
       *
       * @desc Lists holds within a matter. An empty page token in ListHoldsResponse denotes no more holds to list.
       *
       * @alias vault.matters.holds.list
       * @memberOf! vault(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.matterId The matter ID.
       * @param {integer=} params.pageSize The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as page_size = 100.
       * @param {string=} params.pageToken The pagination token as returned in the response. An empty token means start from the beginning.
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

        const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/matters/{matterId}/holds').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['matterId'],
          pathParams: ['matterId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * vault.matters.holds.update
       *
       * @desc Updates the OU and/or query parameters of a hold. You cannot add accounts to a hold that covers an OU, nor can you add OUs to a hold that covers individual accounts. Accounts listed in the hold will be ignored.
       *
       * @alias vault.matters.holds.update
       * @memberOf! vault(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.holdId The ID of the hold.
       * @param {string} params.matterId The matter ID.
       * @param {vault(v1).Hold} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['matterId', 'holdId'],
          pathParams: ['holdId', 'matterId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      accounts: {

        /**
         * vault.matters.holds.accounts.create
         *
         * @desc Adds a HeldAccount to a hold. Accounts can only be added to a hold that has no held_org_unit set. Attempting to add an account to an OU-based hold will result in an error.
         *
         * @alias vault.matters.holds.accounts.create
         * @memberOf! vault(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.holdId The hold ID.
         * @param {string} params.matterId The matter ID.
         * @param {vault(v1).HeldAccount} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['matterId', 'holdId'],
            pathParams: ['holdId', 'matterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * vault.matters.holds.accounts.delete
         *
         * @desc Removes a HeldAccount from a hold. If this request leaves the hold with no held accounts, the hold will not apply to any accounts.
         *
         * @alias vault.matters.holds.accounts.delete
         * @memberOf! vault(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account to remove from the hold.
         * @param {string} params.holdId The hold ID.
         * @param {string} params.matterId The matter ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['matterId', 'holdId', 'accountId'],
            pathParams: ['accountId', 'holdId', 'matterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * vault.matters.holds.accounts.list
         *
         * @desc Lists HeldAccounts for a hold. This will only list individually specified held accounts. If the hold is on an OU, then use <a href="https://developers.google.com/admin-sdk/">Admin SDK</a> to enumerate its members.
         *
         * @alias vault.matters.holds.accounts.list
         * @memberOf! vault(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.holdId The hold ID.
         * @param {string} params.matterId The matter ID.
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

          const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['matterId', 'holdId'],
            pathParams: ['holdId', 'matterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * @typedef AddMatterPermissionsRequest
 * @memberOf! vault(v1)
 * @type object
* @property {boolean} ccMe Only relevant if send_emails is true.
True to CC requestor in the email message.
False to not CC requestor.
* @property {vault(v1).MatterPermission} matterPermission The MatterPermission to add.
* @property {boolean} sendEmails True to send notification email to the added account.
False to not send notification email.
*/

/**
 * @typedef CloseMatterRequest
 * @memberOf! vault(v1)
 * @type object
 */

/**
 * @typedef CloseMatterResponse
 * @memberOf! vault(v1)
 * @type object
 * @property {vault(v1).Matter} matter The updated matter, with state CLOSED.
 */

/**
 * @typedef CorpusQuery
 * @memberOf! vault(v1)
 * @type object
 * @property {vault(v1).HeldDriveQuery} driveQuery Details pertaining to Drive holds. If set, corpus must be Drive.
 * @property {vault(v1).HeldGroupsQuery} groupsQuery Details pertaining to Groups holds. If set, corpus must be Groups.
 * @property {vault(v1).HeldMailQuery} mailQuery Details pertaining to mail holds. If set, corpus must be mail.
 */

/**
 * @typedef Empty
 * @memberOf! vault(v1)
 * @type object
 */

/**
 * @typedef HeldAccount
 * @memberOf! vault(v1)
 * @type object
* @property {string} accountId The account&#39;s ID as provided by the
&lt;a href=&quot;https://developers.google.com/admin-sdk/&quot;&gt;Admin SDK&lt;/a&gt;.
* @property {string} holdTime When the account was put on hold.
*/

/**
 * @typedef HeldDriveQuery
 * @memberOf! vault(v1)
 * @type object
 * @property {boolean} includeTeamDriveFiles If true, include files in Team Drives in the hold.
 */

/**
 * @typedef HeldGroupsQuery
 * @memberOf! vault(v1)
 * @type object
* @property {string} endTime The end date range for the search query. These timestamps are in GMT and
rounded down to the start of the given date.
* @property {string} startTime The start date range for the search query. These timestamps are in GMT and
rounded down to the start of the given date.
* @property {string} terms The search terms for the hold.
*/

/**
 * @typedef HeldMailQuery
 * @memberOf! vault(v1)
 * @type object
* @property {string} endTime The end date range for the search query. These timestamps are in GMT and
rounded down to the start of the given date.
* @property {string} startTime The start date range for the search query. These timestamps are in GMT and
rounded down to the start of the given date.
* @property {string} terms The search terms for the hold.
*/

/**
 * @typedef HeldOrgUnit
 * @memberOf! vault(v1)
 * @type object
 * @property {string} holdTime When the org unit was put on hold. This property is immutable.
 * @property {string} orgUnitId The org unit&#39;s immutable ID as provided by the admin SDK.
 */

/**
 * @typedef Hold
 * @memberOf! vault(v1)
 * @type object
* @property {vault(v1).HeldAccount[]} accounts If set, the hold applies to the enumerated accounts and org_unit must be
empty.
* @property {string} corpus The corpus to be searched.
* @property {string} holdId The unique immutable ID of the hold. Assigned during creation.
* @property {string} name The name of the hold.
* @property {vault(v1).HeldOrgUnit} orgUnit If set, the hold applies to all members of the organizational unit and
accounts must be empty. This property is mutable. For groups holds,
set the accounts field.
* @property {vault(v1).CorpusQuery} query The corpus-specific query. If set, the corpusQuery must match corpus
type.
* @property {string} updateTime The last time this hold was modified.
*/

/**
 * @typedef ListHeldAccountsResponse
 * @memberOf! vault(v1)
 * @type object
 * @property {vault(v1).HeldAccount[]} accounts The held accounts on a hold.
 */

/**
 * @typedef ListHoldsResponse
 * @memberOf! vault(v1)
 * @type object
* @property {vault(v1).Hold[]} holds The list of holds.
* @property {string} nextPageToken Page token to retrieve the next page of results in the list.
If this is empty, then there are no more holds to list.
*/

/**
 * @typedef ListMattersResponse
 * @memberOf! vault(v1)
 * @type object
 * @property {vault(v1).Matter[]} matters List of matters.
 * @property {string} nextPageToken Page token to retrieve the next page of results in the list.
 */

/**
 * @typedef Matter
 * @memberOf! vault(v1)
 * @type object
* @property {string} description The description of the matter.
* @property {string} matterId The matter ID which is generated by the server.
Should be blank when creating a new matter.
* @property {vault(v1).MatterPermission[]} matterPermissions List of users and access to the matter. Currently there is no programmer
defined limit on the number of permissions a matter can have.
* @property {string} name The name of the matter.
* @property {string} state The state of the matter.
*/

/**
 * @typedef MatterPermission
 * @memberOf! vault(v1)
 * @type object
 * @property {string} accountId The account id, as provided by &lt;a href=&quot;https://developers.google.com/admin-sdk/&quot;&gt;Admin SDK&lt;/a&gt;.
 * @property {string} role The user&#39;s role in this matter.
 */

/**
 * @typedef RemoveMatterPermissionsRequest
 * @memberOf! vault(v1)
 * @type object
 * @property {string} accountId The account ID.
 */

/**
 * @typedef ReopenMatterRequest
 * @memberOf! vault(v1)
 * @type object
 */

/**
 * @typedef ReopenMatterResponse
 * @memberOf! vault(v1)
 * @type object
 * @property {vault(v1).Matter} matter The updated matter, with state OPEN.
 */

/**
 * @typedef UndeleteMatterRequest
 * @memberOf! vault(v1)
 * @type object
 */
export = Vault;
