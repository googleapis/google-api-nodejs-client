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
       * @desc Updates the config resource object. RuntimeConfig object must already exist.
       *
       * @alias runtimeconfig.projects.configs.update
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the config resource to update. Required. Must be a valid config resource.
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
       * @desc Gets the config resource object.
       *
       * @alias runtimeconfig.projects.configs.get
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the RuntimeConfig resource object to retrieve.
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
       * @desc CreateConfig creates a new config resource object. The configuration name must be unique within project.
       *
       * @alias runtimeconfig.projects.configs.create
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The cloud project to which configuration belongs. Required. Must be a valid GCP project.
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
       * @desc Lists all the config objects within project.
       *
       * @alias runtimeconfig.projects.configs.list
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize List pagination support. The size of the page to return. We may return fewer elements.
       * @param {string} params.parent The cloud project, whose configuration resources we want to list. Required. Must be a valid GCP project.
       * @param {string=} params.pageToken The token for pagination.
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
       * @desc Deletes the config object.
       *
       * @alias runtimeconfig.projects.configs.delete
       * @memberOf! runtimeconfig(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The configuration resource object to delete. Required. Must be a valid GCP project.
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
         * @desc WatchVariable watches for a variable to change and then returns the new value or times out. If variable is deleted while being watched, VariableState will be DELETED and the Value will contain the last known value. If the operation deadline is set to a larger value than internal timeout existing, current variable value will be returned and Variable state will be VARIABLE_STATE_UNSPECIFIED.
         *
         * @alias runtimeconfig.projects.configs.variables.watch
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the variable to retrieve.
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
         * @desc Lists variables within given RuntimeConfig object, matching optionally provided filter. List contains only variable metadata, but not values.
         *
         * @alias runtimeconfig.projects.configs.variables.list
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize List pagination support. The size of the page to return. We may return fewer elements.
         * @param {string=} params.filter List only variables matching filter prefix exactly. e.g. `projects/{project_id}/config/{config_id}/variables/{variable/id}`.
         * @param {string} params.parent Which RuntimeConfig object to list for variables.
         * @param {string=} params.pageToken The token for pagination.
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
         * @desc Gets the variable resource object.
         *
         * @alias runtimeconfig.projects.configs.variables.get
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name What variable to return.
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
         * @desc Creates a variable within the given configuration. Create variable will create all required intermediate path elements. It is a FAILED_PRECONDITION error to create a variable with a name that is a prefix of an existing variable name, or that has an existing variable name as a prefix.
         *
         * @alias runtimeconfig.projects.configs.variables.create
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The configuration parent, that will own the variable. Required, must a valid configuration name within project_id.
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
         * @param {string} params.name The name of the variable to update. In the format of: "projects/{project_id}/configs/{config_id}/variables/{variable_id}"
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
         * @desc Deletes variable or variables. If name denotes a variable, that variable is deleted. If name is a prefix and recursive is true, then all variables with that prefix are deleted, it's a FAILED_PRECONDITION to delete a prefix without recursive being true.
         *
         * @alias runtimeconfig.projects.configs.variables.delete
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.recursive If recursive is false and name is a prefix of other variables, then the request will fail.
         * @param {string} params.name The name of the variable to delete.
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
         * @desc Gets the Waiter resource with the specified name.
         *
         * @alias runtimeconfig.projects.configs.waiters.get
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The fully-qualified name of the Waiter resource object to retrieve.
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
         * @desc Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a Waiter with the given name will exist (and can be retrieved) prior to the resultant Operation completing. If the resultant Operation indicates a failure, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
         *
         * @alias runtimeconfig.projects.configs.waiters.create
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The fully-qualified name of the configuration that will own the waiter. Required. Must be a valid configuration name.
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
         * @desc List Waiters within the given RuntimeConfig resource.
         *
         * @alias runtimeconfig.projects.configs.waiters.list
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize List pagination support. The size of the page to return. We may return fewer elements.
         * @param {string} params.parent The fully-qualified name of the configuration to list. Required. Must be a valid configuration name.
         * @param {string=} params.pageToken The token for pagination.
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
         * @desc Deletes the Waiter with the specified name.
         *
         * @alias runtimeconfig.projects.configs.waiters.delete
         * @memberOf! runtimeconfig(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The Waiter resource to delete.
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
