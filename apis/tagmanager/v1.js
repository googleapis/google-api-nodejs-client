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
 * Tag Manager API
 *
 * @classdesc Accesses Tag Manager accounts and containers.
 * @namespace tagmanager
 * @version  v1
 * @variation v1
 * @this Tagmanager
 * @param {object=} options Options for Tagmanager
 */
function Tagmanager(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    /**
     * tagmanager.accounts.get
     *
     * @desc Gets a GTM Account.
     *
     * @alias tagmanager.accounts.get
     * @memberOf! tagmanager(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The GTM Account ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}',
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
     * tagmanager.accounts.list
     *
     * @desc Lists all GTM Accounts that a user has access to.
     *
     * @alias tagmanager.accounts.list
     * @memberOf! tagmanager(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/tagmanager/v1/accounts',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * tagmanager.accounts.update
     *
     * @desc Updates a GTM Account.
     *
     * @alias tagmanager.accounts.update
     * @memberOf! tagmanager(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The GTM Account ID.
     * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the account in storage.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    containers: {

      /**
       * tagmanager.accounts.containers.create
       *
       * @desc Creates a Container.
       *
       * @alias tagmanager.accounts.containers.create
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers',
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
       * tagmanager.accounts.containers.delete
       *
       * @desc Deletes a Container.
       *
       * @alias tagmanager.accounts.containers.delete
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID.
       * @param  {string} params.containerId - The GTM Container ID.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tagmanager.accounts.containers.get
       *
       * @desc Gets a Container.
       *
       * @alias tagmanager.accounts.containers.get
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID.
       * @param  {string} params.containerId - The GTM Container ID.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tagmanager.accounts.containers.list
       *
       * @desc Lists all Containers that belongs to a GTM Account.
       *
       * @alias tagmanager.accounts.containers.list
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers',
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
       * tagmanager.accounts.containers.update
       *
       * @desc Updates a Container.
       *
       * @alias tagmanager.accounts.containers.update
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID.
       * @param  {string} params.containerId - The GTM Container ID.
       * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the container in storage.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'containerId'],
          pathParams: ['accountId', 'containerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      environments: {

        /**
         * tagmanager.accounts.containers.environments.create
         *
         * @desc Creates a GTM Environment.
         *
         * @alias tagmanager.accounts.containers.environments.create
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.environments.delete
         *
         * @desc Deletes a GTM Environment.
         *
         * @alias tagmanager.accounts.containers.environments.delete
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.environmentId - The GTM Environment ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'environmentId'],
            pathParams: ['accountId', 'containerId', 'environmentId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.environments.get
         *
         * @desc Gets a GTM Environment.
         *
         * @alias tagmanager.accounts.containers.environments.get
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.environmentId - The GTM Environment ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'environmentId'],
            pathParams: ['accountId', 'containerId', 'environmentId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.environments.list
         *
         * @desc Lists all GTM Environments of a GTM Container.
         *
         * @alias tagmanager.accounts.containers.environments.list
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.environments.patch
         *
         * @desc Updates a GTM Environment. This method supports patch semantics.
         *
         * @alias tagmanager.accounts.containers.environments.patch
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.environmentId - The GTM Environment ID.
         * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the environment in storage.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        patch: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}',
              method: 'PATCH'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'environmentId'],
            pathParams: ['accountId', 'containerId', 'environmentId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.environments.update
         *
         * @desc Updates a GTM Environment.
         *
         * @alias tagmanager.accounts.containers.environments.update
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.environmentId - The GTM Environment ID.
         * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the environment in storage.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'environmentId'],
            pathParams: ['accountId', 'containerId', 'environmentId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      folders: {

        /**
         * tagmanager.accounts.containers.folders.create
         *
         * @desc Creates a GTM Folder.
         *
         * @alias tagmanager.accounts.containers.folders.create
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.folders.delete
         *
         * @desc Deletes a GTM Folder.
         *
         * @alias tagmanager.accounts.containers.folders.delete
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.folderId - The GTM Folder ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'folderId'],
            pathParams: ['accountId', 'containerId', 'folderId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.folders.get
         *
         * @desc Gets a GTM Folder.
         *
         * @alias tagmanager.accounts.containers.folders.get
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.folderId - The GTM Folder ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'folderId'],
            pathParams: ['accountId', 'containerId', 'folderId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.folders.list
         *
         * @desc Lists all GTM Folders of a Container.
         *
         * @alias tagmanager.accounts.containers.folders.list
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.folders.update
         *
         * @desc Updates a GTM Folder.
         *
         * @alias tagmanager.accounts.containers.folders.update
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the folder in storage.
         * @param  {string} params.folderId - The GTM Folder ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'folderId'],
            pathParams: ['accountId', 'containerId', 'folderId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        entities: {

          /**
           * tagmanager.accounts.containers.folders.entities.list
           *
           * @desc List all entities in a GTM Folder.
           *
           * @alias tagmanager.accounts.containers.folders.entities.list
           * @memberOf! tagmanager(v1)
           *
           * @param  {object} params - Parameters for request
           * @param  {string} params.accountId - The GTM Account ID.
           * @param  {string} params.containerId - The GTM Container ID.
           * @param  {string} params.folderId - The GTM Folder ID.
           * @param  {callback} callback - The callback that handles the response.
           * @return {object} Request object
           */
          list: function(params, callback) {
            var parameters = {
              options: {
                url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities',
                method: 'GET'
              },
              params: params,
              requiredParams: ['accountId', 'containerId', 'folderId'],
              pathParams: ['accountId', 'containerId', 'folderId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      },

      move_folders: {

        /**
         * tagmanager.accounts.containers.move_folders.update
         *
         * @desc Moves entities to a GTM Folder.
         *
         * @alias tagmanager.accounts.containers.move_folders.update
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.folderId - The GTM Folder ID.
         * @param  {string=} params.tagId - The tags to be moved to the folder.
         * @param  {string=} params.triggerId - The triggers to be moved to the folder.
         * @param  {string=} params.variableId - The variables to be moved to the folder.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/move_folders/{folderId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'folderId'],
            pathParams: ['accountId', 'containerId', 'folderId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      reauthorize_environments: {

        /**
         * tagmanager.accounts.containers.reauthorize_environments.update
         *
         * @desc Re-generates the authorization code for a GTM Environment.
         *
         * @alias tagmanager.accounts.containers.reauthorize_environments.update
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.environmentId - The GTM Environment ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'environmentId'],
            pathParams: ['accountId', 'containerId', 'environmentId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      tags: {

        /**
         * tagmanager.accounts.containers.tags.create
         *
         * @desc Creates a GTM Tag.
         *
         * @alias tagmanager.accounts.containers.tags.create
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.tags.delete
         *
         * @desc Deletes a GTM Tag.
         *
         * @alias tagmanager.accounts.containers.tags.delete
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.tagId - The GTM Tag ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'tagId'],
            pathParams: ['accountId', 'containerId', 'tagId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.tags.get
         *
         * @desc Gets a GTM Tag.
         *
         * @alias tagmanager.accounts.containers.tags.get
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.tagId - The GTM Tag ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'tagId'],
            pathParams: ['accountId', 'containerId', 'tagId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.tags.list
         *
         * @desc Lists all GTM Tags of a Container.
         *
         * @alias tagmanager.accounts.containers.tags.list
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.tags.update
         *
         * @desc Updates a GTM Tag.
         *
         * @alias tagmanager.accounts.containers.tags.update
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the tag in storage.
         * @param  {string} params.tagId - The GTM Tag ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'tagId'],
            pathParams: ['accountId', 'containerId', 'tagId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      triggers: {

        /**
         * tagmanager.accounts.containers.triggers.create
         *
         * @desc Creates a GTM Trigger.
         *
         * @alias tagmanager.accounts.containers.triggers.create
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.triggers.delete
         *
         * @desc Deletes a GTM Trigger.
         *
         * @alias tagmanager.accounts.containers.triggers.delete
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.triggerId - The GTM Trigger ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'triggerId'],
            pathParams: ['accountId', 'containerId', 'triggerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.triggers.get
         *
         * @desc Gets a GTM Trigger.
         *
         * @alias tagmanager.accounts.containers.triggers.get
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.triggerId - The GTM Trigger ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'triggerId'],
            pathParams: ['accountId', 'containerId', 'triggerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.triggers.list
         *
         * @desc Lists all GTM Triggers of a Container.
         *
         * @alias tagmanager.accounts.containers.triggers.list
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.triggers.update
         *
         * @desc Updates a GTM Trigger.
         *
         * @alias tagmanager.accounts.containers.triggers.update
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the trigger in storage.
         * @param  {string} params.triggerId - The GTM Trigger ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'triggerId'],
            pathParams: ['accountId', 'containerId', 'triggerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      variables: {

        /**
         * tagmanager.accounts.containers.variables.create
         *
         * @desc Creates a GTM Variable.
         *
         * @alias tagmanager.accounts.containers.variables.create
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.variables.delete
         *
         * @desc Deletes a GTM Variable.
         *
         * @alias tagmanager.accounts.containers.variables.delete
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.variableId - The GTM Variable ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'variableId'],
            pathParams: ['accountId', 'containerId', 'variableId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.variables.get
         *
         * @desc Gets a GTM Variable.
         *
         * @alias tagmanager.accounts.containers.variables.get
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.variableId - The GTM Variable ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'variableId'],
            pathParams: ['accountId', 'containerId', 'variableId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.variables.list
         *
         * @desc Lists all GTM Variables of a Container.
         *
         * @alias tagmanager.accounts.containers.variables.list
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.variables.update
         *
         * @desc Updates a GTM Variable.
         *
         * @alias tagmanager.accounts.containers.variables.update
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the variable in storage.
         * @param  {string} params.variableId - The GTM Variable ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'variableId'],
            pathParams: ['accountId', 'containerId', 'variableId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      versions: {

        /**
         * tagmanager.accounts.containers.versions.create
         *
         * @desc Creates a Container Version.
         *
         * @alias tagmanager.accounts.containers.versions.create
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.versions.delete
         *
         * @desc Deletes a Container Version.
         *
         * @alias tagmanager.accounts.containers.versions.delete
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.containerVersionId - The GTM Container Version ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
            pathParams: ['accountId', 'containerId', 'containerVersionId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.versions.get
         *
         * @desc Gets a Container Version.
         *
         * @alias tagmanager.accounts.containers.versions.get
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.containerVersionId - The GTM Container Version ID. Specify published to retrieve the currently published version.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
            pathParams: ['accountId', 'containerId', 'containerVersionId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.versions.list
         *
         * @desc Lists all Container Versions of a GTM Container.
         *
         * @alias tagmanager.accounts.containers.versions.list
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {boolean=} params.headers - Retrieve headers only when true.
         * @param  {boolean=} params.includeDeleted - Also retrieve deleted (archived) versions when true.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions',
              method: 'GET'
            },
            params: params,
            requiredParams: ['accountId', 'containerId'],
            pathParams: ['accountId', 'containerId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.versions.publish
         *
         * @desc Publishes a Container Version.
         *
         * @alias tagmanager.accounts.containers.versions.publish
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.containerVersionId - The GTM Container Version ID.
         * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the container version in storage.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        publish: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
            pathParams: ['accountId', 'containerId', 'containerVersionId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.versions.restore
         *
         * @desc Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
         *
         * @alias tagmanager.accounts.containers.versions.restore
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.containerVersionId - The GTM Container Version ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        restore: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
            pathParams: ['accountId', 'containerId', 'containerVersionId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.versions.undelete
         *
         * @desc Undeletes a Container Version.
         *
         * @alias tagmanager.accounts.containers.versions.undelete
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.containerVersionId - The GTM Container Version ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        undelete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete',
              method: 'POST'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
            pathParams: ['accountId', 'containerId', 'containerVersionId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.versions.update
         *
         * @desc Updates a Container Version.
         *
         * @alias tagmanager.accounts.containers.versions.update
         * @memberOf! tagmanager(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.accountId - The GTM Account ID.
         * @param  {string} params.containerId - The GTM Container ID.
         * @param  {string} params.containerVersionId - The GTM Container Version ID.
         * @param  {string=} params.fingerprint - When provided, this fingerprint must match the fingerprint of the container version in storage.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['accountId', 'containerId', 'containerVersionId'],
            pathParams: ['accountId', 'containerId', 'containerVersionId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    permissions: {

      /**
       * tagmanager.accounts.permissions.create
       *
       * @desc Creates a user's Account & Container Permissions.
       *
       * @alias tagmanager.accounts.permissions.create
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/permissions',
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
       * tagmanager.accounts.permissions.delete
       *
       * @desc Removes a user from the account, revoking access to it and all of its containers.
       *
       * @alias tagmanager.accounts.permissions.delete
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID.
       * @param  {string} params.permissionId - The GTM User ID.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['accountId', 'permissionId'],
          pathParams: ['accountId', 'permissionId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tagmanager.accounts.permissions.get
       *
       * @desc Gets a user's Account & Container Permissions.
       *
       * @alias tagmanager.accounts.permissions.get
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID.
       * @param  {string} params.permissionId - The GTM User ID.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['accountId', 'permissionId'],
          pathParams: ['accountId', 'permissionId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tagmanager.accounts.permissions.list
       *
       * @desc List all users that have access to the account along with Account and Container Permissions granted to each of them.
       *
       * @alias tagmanager.accounts.permissions.list
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID. @required tagmanager.accounts.permissions.list
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/permissions',
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
       * tagmanager.accounts.permissions.update
       *
       * @desc Updates a user's Account & Container Permissions.
       *
       * @alias tagmanager.accounts.permissions.update
       * @memberOf! tagmanager(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.accountId - The GTM Account ID.
       * @param  {string} params.permissionId - The GTM User ID.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/tagmanager/v1/accounts/{accountId}/permissions/{permissionId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['accountId', 'permissionId'],
          pathParams: ['accountId', 'permissionId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Tagmanager object
 * @type Tagmanager
 */
module.exports = Tagmanager;