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
 * Tag Manager API
 *
 * Accesses Tag Manager accounts and containers.
 *
 * @example
 * const google = require('googleapis');
 * const tagmanager = google.tagmanager('v2');
 *
 * @namespace tagmanager
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Tagmanager
 */
function Tagmanager(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.accounts = {

    /**
     * tagmanager.accounts.get
     *
     * @desc Gets a GTM Account.
     *
     * @alias tagmanager.accounts.get
     * @memberOf! tagmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.path GTM Accounts's API relative path. Example: accounts/{account_id}
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['path'],
        pathParams: ['path'],
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
     * @memberOf! tagmanager(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/tagmanager/v2/accounts').replace(/([^:]\/)\/+/g, '$1'),
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
     * tagmanager.accounts.update
     *
     * @desc Updates a GTM Account.
     *
     * @alias tagmanager.accounts.update
     * @memberOf! tagmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the account in storage.
     * @param {string} params.path GTM Accounts's API relative path. Example: accounts/{account_id}
     * @param {tagmanager(v2).Account} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['path'],
        pathParams: ['path'],
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
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent GTM Account's API relative path. Example: accounts/{account_id}.
       * @param {tagmanager(v2).Container} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{parent}/containers').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
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
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['path'],
          pathParams: ['path'],
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
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['path'],
          pathParams: ['path'],
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
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken Continuation token for fetching the next page of results.
       * @param {string} params.parent GTM Accounts's API relative path. Example: accounts/{account_id}.
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{parent}/containers').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
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
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container in storage.
       * @param {string} params.path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       * @param {tagmanager(v2).Container} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['path'],
          pathParams: ['path'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
         * @param {tagmanager(v2).Environment} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{parent}/environments').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.pageToken Continuation token for fetching the next page of results.
         * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{parent}/environments').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the environment in storage.
         * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
         * @param {tagmanager(v2).Environment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.environments.reauthorize
         *
         * @desc Re-generates the authorization code for a GTM Environment.
         *
         * @alias tagmanager.accounts.containers.environments.reauthorize
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
         * @param {tagmanager(v2).Environment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reauthorize: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}:reauthorize').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the environment in storage.
         * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
         * @param {tagmanager(v2).Environment} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },
      version_headers: {

        /**
         * tagmanager.accounts.containers.version_headers.latest
         *
         * @desc Gets the latest container version header
         *
         * @alias tagmanager.accounts.containers.version_headers.latest
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        latest: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{parent}/version_headers:latest').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.version_headers.list
         *
         * @desc Lists all Container Versions of a GTM Container.
         *
         * @alias tagmanager.accounts.containers.version_headers.list
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeDeleted Also retrieve deleted (archived) versions when true.
         * @param {string=} params.pageToken Continuation token for fetching the next page of results.
         * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{parent}/version_headers').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },
      versions: {

        /**
         * tagmanager.accounts.containers.versions.delete
         *
         * @desc Deletes a Container Version.
         *
         * @alias tagmanager.accounts.containers.versions.delete
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.containerVersionId The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
         * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.versions.live
         *
         * @desc Gets the live (i.e. published) container version
         *
         * @alias tagmanager.accounts.containers.versions.live
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        live: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{parent}/versions:live').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
         * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        publish: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}:publish').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.versions.set_latest
         *
         * @desc Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
         *
         * @alias tagmanager.accounts.containers.versions.set_latest
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        set_latest: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}:set_latest').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}:undelete').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
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
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
         * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
         * @param {tagmanager(v2).ContainerVersion} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },
      workspaces: {

        /**
         * tagmanager.accounts.containers.workspaces.create
         *
         * @desc Creates a Workspace.
         *
         * @alias tagmanager.accounts.containers.workspaces.create
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
         * @param {tagmanager(v2).Workspace} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{parent}/workspaces').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.create_version
         *
         * @desc Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
         *
         * @alias tagmanager.accounts.containers.workspaces.create_version
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
         * @param {tagmanager(v2).CreateContainerVersionRequestVersionOptions} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create_version: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}:create_version').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.delete
         *
         * @desc Deletes a Workspace.
         *
         * @alias tagmanager.accounts.containers.workspaces.delete
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.get
         *
         * @desc Gets a Workspace.
         *
         * @alias tagmanager.accounts.containers.workspaces.get
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.getProposal
         *
         * @desc Gets a GTM Workspace Proposal.
         *
         * @alias tagmanager.accounts.containers.workspaces.getProposal
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getProposal: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.getStatus
         *
         * @desc Finds conflicting and modified entities in the workspace.
         *
         * @alias tagmanager.accounts.containers.workspaces.getStatus
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getStatus: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}/status').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.list
         *
         * @desc Lists all Workspaces that belong to a GTM Container.
         *
         * @alias tagmanager.accounts.containers.workspaces.list
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.pageToken Continuation token for fetching the next page of results.
         * @param {string} params.parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{parent}/workspaces').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.quick_preview
         *
         * @desc Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
         *
         * @alias tagmanager.accounts.containers.workspaces.quick_preview
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        quick_preview: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}:quick_preview').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.resolve_conflict
         *
         * @desc Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
         *
         * @alias tagmanager.accounts.containers.workspaces.resolve_conflict
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
         * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
         * @param {tagmanager(v2).Entity} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resolve_conflict: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}:resolve_conflict').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.sync
         *
         * @desc Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
         *
         * @alias tagmanager.accounts.containers.workspaces.sync
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sync: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}:sync').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.update
         *
         * @desc Updates a Workspace.
         *
         * @alias tagmanager.accounts.containers.workspaces.update
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the workspace in storage.
         * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
         * @param {tagmanager(v2).Workspace} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * tagmanager.accounts.containers.workspaces.updateProposal
         *
         * @desc Updates a GTM Workspace Proposal.
         *
         * @alias tagmanager.accounts.containers.workspaces.updateProposal
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
         * @param {tagmanager(v2).UpdateWorkspaceProposalRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateProposal: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['path'],
            pathParams: ['path'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },
        built_in_variables: {

          /**
           * tagmanager.accounts.containers.workspaces.built_in_variables.create
           *
           * @desc Creates one or more GTM Built-In Variables.
           *
           * @alias tagmanager.accounts.containers.workspaces.built_in_variables.create
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
           * @param {string=} params.type The types of built-in variables to enable.
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/built_in_variables').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.built_in_variables.delete
           *
           * @desc Deletes one or more GTM Built-In Variables.
           *
           * @alias tagmanager.accounts.containers.workspaces.built_in_variables.delete
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
           * @param {string=} params.type The types of built-in variables to delete.
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.built_in_variables.list
           *
           * @desc Lists all the enabled Built-In Variables of a GTM Container.
           *
           * @alias tagmanager.accounts.containers.workspaces.built_in_variables.list
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.pageToken Continuation token for fetching the next page of results.
           * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/built_in_variables').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.built_in_variables.revert
           *
           * @desc Reverts changes to a GTM Built-In Variables in a GTM Workspace.
           *
           * @alias tagmanager.accounts.containers.workspaces.built_in_variables.revert
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
           * @param {string=} params.type The type of built-in variable to revert.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          revert: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}/built_in_variables:revert').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        },
        folders: {

          /**
           * tagmanager.accounts.containers.workspaces.folders.create
           *
           * @desc Creates a GTM Folder.
           *
           * @alias tagmanager.accounts.containers.workspaces.folders.create
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
           * @param {tagmanager(v2).Folder} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/folders').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.folders.delete
           *
           * @desc Deletes a GTM Folder.
           *
           * @alias tagmanager.accounts.containers.workspaces.folders.delete
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.folders.entities
           *
           * @desc List all entities in a GTM Folder.
           *
           * @alias tagmanager.accounts.containers.workspaces.folders.entities
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.pageToken Continuation token for fetching the next page of results.
           * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          entities: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}:entities').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.folders.get
           *
           * @desc Gets a GTM Folder.
           *
           * @alias tagmanager.accounts.containers.workspaces.folders.get
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.folders.list
           *
           * @desc Lists all GTM Folders of a Container.
           *
           * @alias tagmanager.accounts.containers.workspaces.folders.list
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.pageToken Continuation token for fetching the next page of results.
           * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/folders').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder
           *
           * @desc Moves entities to a GTM Folder.
           *
           * @alias tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
           * @param {string=} params.tagId The tags to be moved to the folder.
           * @param {string=} params.triggerId The triggers to be moved to the folder.
           * @param {string=} params.variableId The variables to be moved to the folder.
           * @param {tagmanager(v2).Folder} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          move_entities_to_folder: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}:move_entities_to_folder').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.folders.revert
           *
           * @desc Reverts changes to a GTM Folder in a GTM Workspace.
           *
           * @alias tagmanager.accounts.containers.workspaces.folders.revert
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the tag in storage.
           * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          revert: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}:revert').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.folders.update
           *
           * @desc Updates a GTM Folder.
           *
           * @alias tagmanager.accounts.containers.workspaces.folders.update
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the folder in storage.
           * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
           * @param {tagmanager(v2).Folder} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        },
        proposal: {

          /**
           * tagmanager.accounts.containers.workspaces.proposal.create
           *
           * @desc Creates a GTM Workspace Proposal.
           *
           * @alias tagmanager.accounts.containers.workspaces.proposal.create
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{aid}/containers/{cid}/workspace/{wid}
           * @param {tagmanager(v2).CreateWorkspaceProposalRequest} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/proposal').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.proposal.delete
           *
           * @desc Deletes a GTM Workspace Proposal.
           *
           * @alias tagmanager.accounts.containers.workspaces.proposal.delete
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        },
        tags: {

          /**
           * tagmanager.accounts.containers.workspaces.tags.create
           *
           * @desc Creates a GTM Tag.
           *
           * @alias tagmanager.accounts.containers.workspaces.tags.create
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
           * @param {tagmanager(v2).Tag} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/tags').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.tags.delete
           *
           * @desc Deletes a GTM Tag.
           *
           * @alias tagmanager.accounts.containers.workspaces.tags.delete
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.tags.get
           *
           * @desc Gets a GTM Tag.
           *
           * @alias tagmanager.accounts.containers.workspaces.tags.get
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.tags.list
           *
           * @desc Lists all GTM Tags of a Container.
           *
           * @alias tagmanager.accounts.containers.workspaces.tags.list
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.pageToken Continuation token for fetching the next page of results.
           * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/tags').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.tags.revert
           *
           * @desc Reverts changes to a GTM Tag in a GTM Workspace.
           *
           * @alias tagmanager.accounts.containers.workspaces.tags.revert
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of thetag in storage.
           * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          revert: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}:revert').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.tags.update
           *
           * @desc Updates a GTM Tag.
           *
           * @alias tagmanager.accounts.containers.workspaces.tags.update
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the tag in storage.
           * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
           * @param {tagmanager(v2).Tag} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        },
        triggers: {

          /**
           * tagmanager.accounts.containers.workspaces.triggers.create
           *
           * @desc Creates a GTM Trigger.
           *
           * @alias tagmanager.accounts.containers.workspaces.triggers.create
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
           * @param {tagmanager(v2).Trigger} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/triggers').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.triggers.delete
           *
           * @desc Deletes a GTM Trigger.
           *
           * @alias tagmanager.accounts.containers.workspaces.triggers.delete
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.triggers.get
           *
           * @desc Gets a GTM Trigger.
           *
           * @alias tagmanager.accounts.containers.workspaces.triggers.get
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.triggers.list
           *
           * @desc Lists all GTM Triggers of a Container.
           *
           * @alias tagmanager.accounts.containers.workspaces.triggers.list
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.pageToken Continuation token for fetching the next page of results.
           * @param {string} params.parent GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/triggers').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.triggers.revert
           *
           * @desc Reverts changes to a GTM Trigger in a GTM Workspace.
           *
           * @alias tagmanager.accounts.containers.workspaces.triggers.revert
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the trigger in storage.
           * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          revert: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}:revert').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.triggers.update
           *
           * @desc Updates a GTM Trigger.
           *
           * @alias tagmanager.accounts.containers.workspaces.triggers.update
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the trigger in storage.
           * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
           * @param {tagmanager(v2).Trigger} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        },
        variables: {

          /**
           * tagmanager.accounts.containers.workspaces.variables.create
           *
           * @desc Creates a GTM Variable.
           *
           * @alias tagmanager.accounts.containers.workspaces.variables.create
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
           * @param {tagmanager(v2).Variable} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/variables').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.variables.delete
           *
           * @desc Deletes a GTM Variable.
           *
           * @alias tagmanager.accounts.containers.workspaces.variables.delete
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.variables.get
           *
           * @desc Gets a GTM Variable.
           *
           * @alias tagmanager.accounts.containers.workspaces.variables.get
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.variables.list
           *
           * @desc Lists all GTM Variables of a Container.
           *
           * @alias tagmanager.accounts.containers.workspaces.variables.list
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.pageToken Continuation token for fetching the next page of results.
           * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{parent}/variables').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.variables.revert
           *
           * @desc Reverts changes to a GTM Variable in a GTM Workspace.
           *
           * @alias tagmanager.accounts.containers.workspaces.variables.revert
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the variable in storage.
           * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          revert: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}:revert').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * tagmanager.accounts.containers.workspaces.variables.update
           *
           * @desc Updates a GTM Variable.
           *
           * @alias tagmanager.accounts.containers.workspaces.variables.update
           * @memberOf! tagmanager(v2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the variable in storage.
           * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
           * @param {tagmanager(v2).Variable} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              }, options),
              params: params,
              requiredParams: ['path'],
              pathParams: ['path'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      }
    },
    user_permissions: {

      /**
       * tagmanager.accounts.user_permissions.create
       *
       * @desc Creates a user's Account & Container access.
       *
       * @alias tagmanager.accounts.user_permissions.create
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent GTM Account's API relative path. Example: accounts/{account_id}
       * @param {tagmanager(v2).UserPermission} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{parent}/user_permissions').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tagmanager.accounts.user_permissions.delete
       *
       * @desc Removes a user from the account, revoking access to it and all of its containers.
       *
       * @alias tagmanager.accounts.user_permissions.delete
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['path'],
          pathParams: ['path'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tagmanager.accounts.user_permissions.get
       *
       * @desc Gets a user's Account & Container access.
       *
       * @alias tagmanager.accounts.user_permissions.get
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['path'],
          pathParams: ['path'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tagmanager.accounts.user_permissions.list
       *
       * @desc List all users that have access to the account along with Account and Container user access granted to each of them.
       *
       * @alias tagmanager.accounts.user_permissions.list
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken Continuation token for fetching the next page of results.
       * @param {string} params.parent GTM Accounts's API relative path. Example: accounts/{account_id}
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{parent}/user_permissions').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tagmanager.accounts.user_permissions.update
       *
       * @desc Updates a user's Account & Container access.
       *
       * @alias tagmanager.accounts.user_permissions.update
       * @memberOf! tagmanager(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
       * @param {tagmanager(v2).UserPermission} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['path'],
          pathParams: ['path'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef Account
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId The Account ID uniquely identifies the GTM Account.
 * @property {string} fingerprint The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
 * @property {string} name Account display name.
 * @property {string} path GTM Account&#39;s API relative path.
 * @property {boolean} shareData Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 */

/**
 * @typedef AccountAccess
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} permission Whether the user has no access, user access, or admin access to an account.
 */

/**
 * @typedef BuiltInVariable
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {string} containerId GTM Container ID.
 * @property {string} name Name of the built-in variable to be used to refer to the built-in variable.
 * @property {string} path GTM BuiltInVariable&#39;s API relative path.
 * @property {string} type Type of built-in variable.
 * @property {string} workspaceId GTM Workspace ID.
 */

/**
 * @typedef Condition
 * @memberOf! tagmanager(v2)
 * @type object
* @property {tagmanager(v2).Parameter[]} parameter A list of named parameters (key/value), depending on the condition&#39;s type. Notes: 
- For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. 
- At this time, the left operand (arg0) must be a reference to a variable. 
- For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. 
- To negate an operator, include a boolean parameter named negate boolean parameter that is set to true.
* @property {string} type The type of operator for this condition.
*/

/**
 * @typedef Container
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {string} containerId The Container ID uniquely identifies the GTM Container.
 * @property {string[]} domainName List of domain names associated with the Container.
 * @property {string} fingerprint The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
 * @property {string} name Container display name.
 * @property {string} notes Container Notes.
 * @property {string} path GTM Container&#39;s API relative path.
 * @property {string} publicId Container Public ID.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 * @property {string[]} usageContext List of Usage Contexts for the Container. Valid values include: web, android, or ios.
 */

/**
 * @typedef ContainerAccess
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} containerId GTM Container ID.
 * @property {string} permission List of Container permissions.
 */

/**
 * @typedef ContainerVersion
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {tagmanager(v2).BuiltInVariable[]} builtInVariable The built-in variables in the container that this version was taken from.
 * @property {tagmanager(v2).Container} container The container that this version was taken from.
 * @property {string} containerId GTM Container ID.
 * @property {string} containerVersionId The Container Version ID uniquely identifies the GTM Container Version.
 * @property {boolean} deleted A value of true indicates this container version has been deleted.
 * @property {string} description Container version description.
 * @property {string} fingerprint The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
 * @property {tagmanager(v2).Folder[]} folder The folders in the container that this version was taken from.
 * @property {string} name Container version display name.
 * @property {string} path GTM ContainerVersions&#39;s API relative path.
 * @property {tagmanager(v2).Tag[]} tag The tags in the container that this version was taken from.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 * @property {tagmanager(v2).Trigger[]} trigger The triggers in the container that this version was taken from.
 * @property {tagmanager(v2).Variable[]} variable The variables in the container that this version was taken from.
 * @property {tagmanager(v2).Zone[]} zone The zones in the container that this version was taken from.
 */

/**
 * @typedef ContainerVersionHeader
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {string} containerId GTM Container ID.
 * @property {string} containerVersionId The Container Version ID uniquely identifies the GTM Container Version.
 * @property {boolean} deleted A value of true indicates this container version has been deleted.
 * @property {string} name Container version display name.
 * @property {string} numMacros Number of macros in the container version.
 * @property {string} numRules Number of rules in the container version.
 * @property {string} numTags Number of tags in the container version.
 * @property {string} numTriggers Number of triggers in the container version.
 * @property {string} numVariables Number of variables in the container version.
 * @property {string} numZones Number of zones in the container version.
 * @property {string} path GTM Container Versions&#39;s API relative path.
 */

/**
 * @typedef CreateBuiltInVariableResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).BuiltInVariable[]} builtInVariable List of created built-in variables.
 */

/**
 * @typedef CreateContainerVersionRequestVersionOptions
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} name The name of the container version to be created.
 * @property {string} notes The notes of the container version to be created.
 */

/**
 * @typedef CreateContainerVersionResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {boolean} compilerError Compiler errors or not.
 * @property {tagmanager(v2).ContainerVersion} containerVersion The container version created.
 * @property {string} newWorkspacePath Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview.
 * @property {tagmanager(v2).SyncStatus} syncStatus Whether version creation failed when syncing the workspace to the latest container version.
 */

/**
 * @typedef CreateWorkspaceProposalRequest
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).WorkspaceProposalHistoryComment} initialComment If present, an initial comment to associate with the workspace proposal.
 * @property {tagmanager(v2).WorkspaceProposalUser[]} reviewers List of users to review the workspace proposal.
 */

/**
 * @typedef Entity
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} changeStatus Represents how the entity has been changed in the workspace.
 * @property {tagmanager(v2).Folder} folder The Folder being represented by the entity.
 * @property {tagmanager(v2).Tag} tag The tag being represented by the entity.
 * @property {tagmanager(v2).Trigger} trigger The trigger being represented by the entity.
 * @property {tagmanager(v2).Variable} variable The variable being represented by the entity.
 */

/**
 * @typedef Environment
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {string} authorizationCode The environment authorization code.
 * @property {tagmanager(v2).Timestamp} authorizationTimestamp The last update time-stamp for the authorization code.
 * @property {string} containerId GTM Container ID.
 * @property {string} containerVersionId Represents a link to a container version.
 * @property {string} description The environment description. Can be set or changed only on USER type environments.
 * @property {boolean} enableDebug Whether or not to enable debug by default for the environment.
 * @property {string} environmentId GTM Environment ID uniquely identifies the GTM Environment.
 * @property {string} fingerprint The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.
 * @property {string} name The environment display name. Can be set or changed only on USER type environments.
 * @property {string} path GTM Environment&#39;s API relative path.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 * @property {string} type The type of this environment.
 * @property {string} url Default preview page url for the environment.
 * @property {string} workspaceId Represents a link to a quick preview of a workspace.
 */

/**
 * @typedef Folder
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {string} containerId GTM Container ID.
 * @property {string} fingerprint The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
 * @property {string} folderId The Folder ID uniquely identifies the GTM Folder.
 * @property {string} name Folder display name.
 * @property {string} notes User notes on how to apply this folder in the container.
 * @property {string} path GTM Folder&#39;s API relative path.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 * @property {string} workspaceId GTM Workspace ID.
 */

/**
 * @typedef FolderEntities
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {tagmanager(v2).Tag[]} tag The list of tags inside the folder.
 * @property {tagmanager(v2).Trigger[]} trigger The list of triggers inside the folder.
 * @property {tagmanager(v2).Variable[]} variable The list of variables inside the folder.
 */

/**
 * @typedef GetWorkspaceStatusResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).MergeConflict[]} mergeConflict The merge conflict after sync.
 * @property {tagmanager(v2).Entity[]} workspaceChange Entities that have been changed in the workspace.
 */

/**
 * @typedef ListAccountsResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Account[]} account List of GTM Accounts that a user has access to.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */

/**
 * @typedef ListContainerVersionsResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).ContainerVersionHeader[]} containerVersionHeader All container version headers of a GTM Container.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */

/**
 * @typedef ListContainersResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Container[]} container All Containers of a GTM Account.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */

/**
 * @typedef ListEnabledBuiltInVariablesResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).BuiltInVariable[]} builtInVariable All GTM BuiltInVariables of a GTM container.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */

/**
 * @typedef ListEnvironmentsResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Environment[]} environment All Environments of a GTM Container.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */

/**
 * @typedef ListFoldersResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Folder[]} folder All GTM Folders of a GTM Container.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */

/**
 * @typedef ListTagsResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {tagmanager(v2).Tag[]} tag All GTM Tags of a GTM Container.
 */

/**
 * @typedef ListTriggersResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {tagmanager(v2).Trigger[]} trigger All GTM Triggers of a GTM Container.
 */

/**
 * @typedef ListUserPermissionsResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {tagmanager(v2).UserPermission[]} userPermission All GTM UserPermissions of a GTM Account.
 */

/**
 * @typedef ListVariablesResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {tagmanager(v2).Variable[]} variable All GTM Variables of a GTM Container.
 */

/**
 * @typedef ListWorkspacesResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {tagmanager(v2).Workspace[]} workspace All Workspaces of a GTM Container.
 */

/**
 * @typedef MergeConflict
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Entity} entityInBaseVersion The base version entity (since the latest sync operation) that has conflicting changes compared to the workspace. If this field is missing, it means the workspace entity is deleted from the base version.
 * @property {tagmanager(v2).Entity} entityInWorkspace The workspace entity that has conflicting changes compared to the base version. If an entity is deleted in a workspace, it will still appear with a deleted change status.
 */

/**
 * @typedef Parameter
 * @memberOf! tagmanager(v2)
 * @type object
* @property {string} key The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values.
* @property {tagmanager(v2).Parameter[]} list This list parameter&#39;s parameters (keys will be ignored).
* @property {tagmanager(v2).Parameter[]} map This map parameter&#39;s parameters (must have keys; keys must be unique).
* @property {string} type The parameter type. Valid values are: 
- boolean: The value represents a boolean, represented as &#39;true&#39; or &#39;false&#39; 
- integer: The value represents a 64-bit signed integer value, in base 10 
- list: A list of parameters should be specified 
- map: A map of parameters should be specified 
- template: The value represents any text; this can include variable references (even variable references that might return non-string types)
* @property {string} value A parameter&#39;s value (may contain variable references such as &quot;{{myVariable}}&quot;) as appropriate to the specified type.
*/

/**
 * @typedef PublishContainerVersionResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {boolean} compilerError Compiler errors or not.
 * @property {tagmanager(v2).ContainerVersion} containerVersion The container version created.
 */

/**
 * @typedef QuickPreviewResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {boolean} compilerError Were there compiler errors or not.
 * @property {tagmanager(v2).ContainerVersion} containerVersion The quick previewed container version.
 * @property {tagmanager(v2).SyncStatus} syncStatus Whether quick previewing failed when syncing the workspace to the latest container version.
 */

/**
 * @typedef RevertBuiltInVariableResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {boolean} enabled Whether the built-in variable is enabled after reversion.
 */

/**
 * @typedef RevertFolderResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Folder} folder Folder as it appears in the latest container version since the last workspace synchronization operation. If no folder is present, that means the folder was deleted in the latest container version.
 */

/**
 * @typedef RevertTagResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Tag} tag Tag as it appears in the latest container version since the last workspace synchronization operation. If no tag is present, that means the tag was deleted in the latest container version.
 */

/**
 * @typedef RevertTriggerResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Trigger} trigger Trigger as it appears in the latest container version since the last workspace synchronization operation. If no trigger is present, that means the trigger was deleted in the latest container version.
 */

/**
 * @typedef RevertVariableResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Variable} variable Variable as it appears in the latest container version since the last workspace synchronization operation. If no variable is present, that means the variable was deleted in the latest container version.
 */

/**
 * @typedef SetupTag
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {boolean} stopOnSetupFailure If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.
 * @property {string} tagName The name of the setup tag.
 */

/**
 * @typedef SyncStatus
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {boolean} mergeConflict Synchornization operation detected a merge conflict.
 * @property {boolean} syncError An error occurred during the synchronization operation.
 */

/**
 * @typedef SyncWorkspaceResponse
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).MergeConflict[]} mergeConflict The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved.
 * @property {tagmanager(v2).SyncStatus} syncStatus Indicates whether synchronization caused a merge conflict or sync error.
 */

/**
 * @typedef Tag
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {string[]} blockingRuleId Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire.
 * @property {string[]} blockingTriggerId Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire.
 * @property {string} containerId GTM Container ID.
 * @property {string} fingerprint The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
 * @property {string[]} firingRuleId Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false.
 * @property {string[]} firingTriggerId Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false.
 * @property {boolean} liveOnly If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode).
 * @property {string} name Tag display name.
 * @property {string} notes User notes on how to apply this tag in the container.
 * @property {tagmanager(v2).Parameter[]} parameter The tag&#39;s parameters.
 * @property {string} parentFolderId Parent folder id.
 * @property {string} path GTM Tag&#39;s API relative path.
 * @property {tagmanager(v2).Parameter} priority User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag&#39;s priority can be a positive or negative value. The default value is 0.
 * @property {string} scheduleEndMs The end timestamp in milliseconds to schedule a tag.
 * @property {string} scheduleStartMs The start timestamp in milliseconds to schedule a tag.
 * @property {tagmanager(v2).SetupTag[]} setupTag The list of setup tags. Currently we only allow one.
 * @property {string} tagFiringOption Option to fire this tag.
 * @property {string} tagId The Tag ID uniquely identifies the GTM Tag.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 * @property {tagmanager(v2).TeardownTag[]} teardownTag The list of teardown tags. Currently we only allow one.
 * @property {string} type GTM Tag Type.
 * @property {string} workspaceId GTM Workspace ID.
 */

/**
 * @typedef TeardownTag
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {boolean} stopTeardownOnFailure If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.
 * @property {string} tagName The name of the teardown tag.
 */

/**
 * @typedef Timestamp
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {integer} nanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
 * @property {string} seconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
 */

/**
 * @typedef Trigger
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {tagmanager(v2).Condition[]} autoEventFilter Used in the case of auto event tracking.
 * @property {tagmanager(v2).Parameter} checkValidation Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers.
 * @property {string} containerId GTM Container ID.
 * @property {tagmanager(v2).Parameter} continuousTimeMinMilliseconds A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger.
 * @property {tagmanager(v2).Condition[]} customEventFilter Used in the case of custom event, which is fired iff all Conditions are true.
 * @property {tagmanager(v2).Parameter} eventName Name of the GTM event that is fired. Only valid for Timer triggers.
 * @property {tagmanager(v2).Condition[]} filter The trigger will only fire iff all Conditions are true.
 * @property {string} fingerprint The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.
 * @property {tagmanager(v2).Parameter} horizontalScrollPercentageList List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers.
 * @property {tagmanager(v2).Parameter} interval Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers.
 * @property {tagmanager(v2).Parameter} intervalSeconds Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger.
 * @property {tagmanager(v2).Parameter} limit Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers.
 * @property {tagmanager(v2).Parameter} maxTimerLengthSeconds Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger.
 * @property {string} name Trigger display name.
 * @property {string} notes User notes on how to apply this trigger in the container.
 * @property {tagmanager(v2).Parameter[]} parameter Additional parameters.
 * @property {string} parentFolderId Parent folder id.
 * @property {string} path GTM Trigger&#39;s API relative path.
 * @property {tagmanager(v2).Parameter} selector A click trigger CSS selector (i.e. &quot;a&quot;, &quot;button&quot; etc.). Only valid for AMP Click trigger.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 * @property {tagmanager(v2).Parameter} totalTimeMinMilliseconds A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger.
 * @property {string} triggerId The Trigger ID uniquely identifies the GTM Trigger.
 * @property {string} type Defines the data layer event that causes this trigger.
 * @property {tagmanager(v2).Parameter} uniqueTriggerId Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don&#39;t exist until then. Only valid for Form Submit, Link Click and Timer triggers.
 * @property {tagmanager(v2).Parameter} verticalScrollPercentageList List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers.
 * @property {tagmanager(v2).Parameter} visibilitySelector A visibility trigger CSS selector (i.e. &quot;#id&quot;). Only valid for AMP Visibility trigger.
 * @property {tagmanager(v2).Parameter} visiblePercentageMax A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger.
 * @property {tagmanager(v2).Parameter} visiblePercentageMin A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger.
 * @property {tagmanager(v2).Parameter} waitForTags Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers.
 * @property {tagmanager(v2).Parameter} waitForTagsTimeout How long to wait (in milliseconds) for tags to fire when &#39;waits_for_tags&#39; above evaluates to true. Only valid for Form Submission and Link Click triggers.
 * @property {string} workspaceId GTM Workspace ID.
 */

/**
 * @typedef UpdateWorkspaceProposalRequest
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} fingerprint When provided, this fingerprint must match the fingerprint of the proposal in storage.
 * @property {tagmanager(v2).WorkspaceProposalHistoryComment} newComment If present, a new comment is added to the workspace proposal history.
 * @property {tagmanager(v2).WorkspaceProposalUser[]} reviewers If present, the list of reviewers of the workspace proposal is updated.
 * @property {string} status If present, the status of the workspace proposal is updated.
 */

/**
 * @typedef UserPermission
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).AccountAccess} accountAccess GTM Account access permissions.
 * @property {string} accountId The Account ID uniquely identifies the GTM Account.
 * @property {tagmanager(v2).ContainerAccess[]} containerAccess GTM Container access permissions.
 * @property {string} emailAddress User&#39;s email address.
 * @property {string} path GTM UserPermission&#39;s API relative path.
 */

/**
 * @typedef Variable
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {string} containerId GTM Container ID.
 * @property {string[]} disablingTriggerId For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set.
 * @property {string[]} enablingTriggerId For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set.
 * @property {string} fingerprint The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.
 * @property {string} name Variable display name.
 * @property {string} notes User notes on how to apply this variable in the container.
 * @property {tagmanager(v2).Parameter[]} parameter The variable&#39;s parameters.
 * @property {string} parentFolderId Parent folder id.
 * @property {string} path GTM Variable&#39;s API relative path.
 * @property {string} scheduleEndMs The end timestamp in milliseconds to schedule a variable.
 * @property {string} scheduleStartMs The start timestamp in milliseconds to schedule a variable.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 * @property {string} type GTM Variable Type.
 * @property {string} variableId The Variable ID uniquely identifies the GTM Variable.
 * @property {string} workspaceId GTM Workspace ID.
 */

/**
 * @typedef Workspace
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {string} containerId GTM Container ID.
 * @property {string} description Workspace description.
 * @property {string} fingerprint The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.
 * @property {string} name Workspace display name.
 * @property {string} path GTM Workspace&#39;s API relative path.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 * @property {string} workspaceId The Workspace ID uniquely identifies the GTM Workspace.
 */

/**
 * @typedef WorkspaceProposal
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).WorkspaceProposalUser[]} authors List of authors for the workspace proposal.
 * @property {string} fingerprint The fingerprint of the GTM workspace proposal as computed at storage time. This value is recomputed whenever the proposal is modified.
 * @property {tagmanager(v2).WorkspaceProposalHistory[]} history Records the history of comments and status changes.
 * @property {string} path GTM workspace proposal&#39;s relative path.
 * @property {tagmanager(v2).WorkspaceProposalUser[]} reviewers Lists of reviewers for the workspace proposal.
 * @property {string} status The status of the workspace proposal as it goes through review.
 */

/**
 * @typedef WorkspaceProposalHistory
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).WorkspaceProposalHistoryComment} comment A user or reviewer comment.
 * @property {tagmanager(v2).WorkspaceProposalUser} createdBy The party responsible for the change in history.
 * @property {tagmanager(v2).Timestamp} createdTimestamp When this history event was added to the workspace proposal.
 * @property {tagmanager(v2).WorkspaceProposalHistoryStatusChange} statusChange A change in the proposal&#39;s status.
 * @property {string} type The history type distinguishing between comments and status changes.
 */

/**
 * @typedef WorkspaceProposalHistoryComment
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} content The contents of the reviewer or author comment.
 */

/**
 * @typedef WorkspaceProposalHistoryStatusChange
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} newStatus The new proposal status after that status change.
 * @property {string} oldStatus The old proposal status before the status change.
 */

/**
 * @typedef WorkspaceProposalUser
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} gaiaId Gaia id associated with a user, absent for the Google Tag Manager system.
 * @property {string} type User type distinguishes between a user and the Google Tag Manager system.
 */

/**
 * @typedef Zone
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} accountId GTM Account ID.
 * @property {tagmanager(v2).ZoneBoundary} boundary This Zone&#39;s boundary.
 * @property {tagmanager(v2).ZoneChildContainer[]} childContainer Containers that are children of this Zone.
 * @property {string} containerId GTM Container ID.
 * @property {string} fingerprint The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.
 * @property {string} name Zone display name.
 * @property {string} notes User notes on how to apply this zone in the container.
 * @property {string} path GTM Zone&#39;s API relative path.
 * @property {string} tagManagerUrl Auto generated link to the tag manager UI
 * @property {tagmanager(v2).ZoneTypeRestriction} typeRestriction This Zone&#39;s type restrictions.
 * @property {string} workspaceId GTM Workspace ID.
 * @property {string} zoneId The Zone ID uniquely identifies the GTM Zone.
 */

/**
 * @typedef ZoneBoundary
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {tagmanager(v2).Condition[]} condition The conditions that, when conjoined, make up the boundary.
 * @property {string[]} customEvaluationTriggerId Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.
 */

/**
 * @typedef ZoneChildContainer
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {string} nickname The zone&#39;s nickname for the child container.
 * @property {string} publicId The child container&#39;s public id.
 */

/**
 * @typedef ZoneTypeRestriction
 * @memberOf! tagmanager(v2)
 * @type object
 * @property {boolean} enable True if type restrictions have been enabled for this Zone.
 * @property {string[]} whitelistedTypeId List of type public ids that have been whitelisted for use in this Zone.
 */
export = Tagmanager;
