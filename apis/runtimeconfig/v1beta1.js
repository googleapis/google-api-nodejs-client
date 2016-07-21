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
 * Google Cloud RuntimeConfig API
 *
 * Provides capabilities for dynamic configuration and coordination for applications running on Google Cloud Platform.

 *
 * @example
 * var google = require('googleapis');
 * var runtimeconfig = google.runtimeconfig('v1beta1');
 *
 * @namespace runtimeconfig
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Runtimeconfig
 */
function Runtimeconfig(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    configs: {

      /**
       * runtimeconfig.projects.configs.update
       *
       * @desc Updates a RuntimeConfig resource. The configuration must exist beforehand.
       *
       * @alias runtimeconfig.projects.configs.update
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the RuntimeConfig resource to update, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * runtimeconfig.projects.configs.get
       *
       * @desc Gets information about a RuntimeConfig resource.
       *
       * @alias runtimeconfig.projects.configs.get
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the RuntimeConfig resource to retrieve, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * runtimeconfig.projects.configs.create
       *
       * @desc Creates a new RuntimeConfig resource. The configuration name must be unique within project.
       *
       * @alias runtimeconfig.projects.configs.create
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The [project ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848) for this request, in the format `projects/[PROJECT_ID]`.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://runtimeconfig.googleapis.com/v1beta1/{parent}/configs',
            method: 'POST'
          },
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * runtimeconfig.projects.configs.list
       *
       * @desc Lists all the RuntimeConfig resources within project.
       *
       * @alias runtimeconfig.projects.configs.list
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements.
       * @param {string} params.parent The [project ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848) for this request, in the format `projects/[PROJECT_ID]`.
       * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://runtimeconfig.googleapis.com/v1beta1/{parent}/configs',
            method: 'GET'
          },
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * runtimeconfig.projects.configs.delete
       *
       * @desc Deletes a RuntimeConfig resource.
       *
       * @alias runtimeconfig.projects.configs.delete
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The RuntimeConfig resource to delete, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      variables: {

        /**
         * runtimeconfig.projects.configs.variables.watch
         *
         * @desc Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out.  If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`.  If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`.  To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
         *
         * @alias runtimeconfig.projects.configs.variables.watch
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the variable to watch, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        watch: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}:watch',
              method: 'POST'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * runtimeconfig.projects.configs.variables.list
         *
         * @desc Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values.
         *
         * @alias runtimeconfig.projects.configs.variables.list
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements.
         * @param {string=} params.filter Filters variables by matching the specified filter. For example:  `projects/example-project/config/[CONFIG_NAME]/variables/example-variable`.
         * @param {string} params.parent The path to the RuntimeConfig resource for which you want to list variables. The configuration must exist beforehand; the path must by in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
         * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{parent}/variables',
              method: 'GET'
            },
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * runtimeconfig.projects.configs.variables.get
         *
         * @desc Gets information about a single variable.
         *
         * @alias runtimeconfig.projects.configs.variables.get
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the variable to return, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIBLE_NAME]`
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * runtimeconfig.projects.configs.variables.create
         *
         * @desc Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix.  To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
         *
         * @alias runtimeconfig.projects.configs.variables.create
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The path to the RutimeConfig resource that this variable should belong to. The configuration must exist beforehand; the path must by in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{parent}/variables',
              method: 'POST'
            },
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * runtimeconfig.projects.configs.variables.update
         *
         * @desc Updates an existing variable with a new value.
         *
         * @alias runtimeconfig.projects.configs.variables.update
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the variable to update, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * runtimeconfig.projects.configs.variables.delete
         *
         * @desc Deletes a variable or multiple variables.  If you specify a variable name, then that variable is deleted. If you specify a prefix and `recursive` is true, then all variables with that prefix are deleted. You must set a `recursive` to true if you delete variables by prefix.
         *
         * @alias runtimeconfig.projects.configs.variables.delete
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.recursive Set to `true` to recursively delete multiple variables with the same prefix.
         * @param {string} params.name The name of the variable to delete, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      waiters: {

        /**
         * runtimeconfig.projects.configs.waiters.get
         *
         * @desc Gets information about a single waiter.
         *
         * @alias runtimeconfig.projects.configs.waiters.get
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The fully-qualified name of the Waiter resource object to retrieve, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * runtimeconfig.projects.configs.waiters.create
         *
         * @desc Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
         *
         * @alias runtimeconfig.projects.configs.waiters.create
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The path to the configuration that will own the waiter. The configuration must exist beforehand; the path must by in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{parent}/waiters',
              method: 'POST'
            },
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * runtimeconfig.projects.configs.waiters.list
         *
         * @desc List waiters within the given configuration.
         *
         * @alias runtimeconfig.projects.configs.waiters.list
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements.
         * @param {string} params.parent The path to the configuration for which you want to get a list of waiters. The configuration must exist beforehand; the path must by in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
         * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{parent}/waiters',
              method: 'GET'
            },
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * runtimeconfig.projects.configs.waiters.delete
         *
         * @desc Deletes the waiter with the specified name.
         *
         * @alias runtimeconfig.projects.configs.waiters.delete
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The Waiter resource to delete, in the format:   `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      operations: {

        /**
         * runtimeconfig.projects.configs.operations.get
         *
         * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @alias runtimeconfig.projects.configs.operations.get
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://runtimeconfig.googleapis.com/v1beta1/{name}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

module.exports = Runtimeconfig;
