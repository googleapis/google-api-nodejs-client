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
 * Google App Engine Admin API
 *
 * Provisions and manages App Engine applications.
 *
 * @example
 * var google = require('googleapis');
 * var appengine = google.appengine('v1beta4');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1beta4
 * @variation v1beta4
 * @param {object=} options Options for Appengine
 */
function Appengine(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.apps = {

    /**
     * appengine.apps.get
     *
     * @desc Gets information about an application.
     *
     * @alias appengine.apps.get
     * @memberOf! appengine(v1beta4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the application to get. For example: "apps/myapp".
     * @param {boolean=} params.ensureResourcesExist Certain resources associated with an application are created on-demand. Controls whether these resources should be created when performing the `GET` operation. If specified and any resources could not be created, the request will fail with an error code. Additionally, this parameter can cause the request to take longer to complete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    modules: {

      /**
       * appengine.apps.modules.delete
       *
       * @desc Deletes a module and all enclosed versions.
       *
       * @alias appengine.apps.modules.delete
       * @memberOf! appengine(v1beta4)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/modules/default".
       * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules/{modulesId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['appsId', 'modulesId'],
          pathParams: ['appsId', 'modulesId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.modules.get
       *
       * @desc Gets the current configuration of the module.
       *
       * @alias appengine.apps.modules.get
       * @memberOf! appengine(v1beta4)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/modules/default".
       * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules/{modulesId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['appsId', 'modulesId'],
          pathParams: ['appsId', 'modulesId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.modules.list
       *
       * @desc Lists all the modules in the application.
       *
       * @alias appengine.apps.modules.list
       * @memberOf! appengine(v1beta4)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp".
       * @param {integer=} params.pageSize Maximum results to return per page.
       * @param {string=} params.pageToken Continuation token for fetching the next page of results.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules',
            method: 'GET'
          },
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.modules.patch
       *
       * @desc Updates the configuration of the specified module.
       *
       * @alias appengine.apps.modules.patch
       * @memberOf! appengine(v1beta4)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Name of the resource to update. For example: "apps/myapp/modules/default".
       * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
       * @param {string=} params.mask Standard field mask for the set of fields to be updated.
       * @param {boolean=} params.migrateTraffic Whether to use Traffic Migration to shift traffic gradually. Traffic can only be migrated from a single version to another single version.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      patch: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules/{modulesId}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['appsId', 'modulesId'],
          pathParams: ['appsId', 'modulesId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      versions: {

        /**
         * appengine.apps.modules.versions.create
         *
         * @desc Deploys new code and resource files to a version.
         *
         * @alias appengine.apps.modules.versions.create
         * @memberOf! appengine(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `name`. Name of the resource to update. For example: "apps/myapp/modules/default".
         * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules/{modulesId}/versions',
              method: 'POST'
            },
            params: params,
            requiredParams: ['appsId', 'modulesId'],
            pathParams: ['appsId', 'modulesId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * appengine.apps.modules.versions.delete
         *
         * @desc Deletes an existing version.
         *
         * @alias appengine.apps.modules.versions.delete
         * @memberOf! appengine(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/modules/default/versions/v1".
         * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
         * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['appsId', 'modulesId', 'versionsId'],
            pathParams: ['appsId', 'modulesId', 'versionsId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * appengine.apps.modules.versions.get
         *
         * @desc Gets application deployment information.
         *
         * @alias appengine.apps.modules.versions.get
         * @memberOf! appengine(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/modules/default/versions/v1".
         * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
         * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
         * @param {string=} params.view Controls the set of fields returned in the `Get` response.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['appsId', 'modulesId', 'versionsId'],
            pathParams: ['appsId', 'modulesId', 'versionsId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * appengine.apps.modules.versions.list
         *
         * @desc Lists the versions of a module.
         *
         * @alias appengine.apps.modules.versions.list
         * @memberOf! appengine(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/modules/default".
         * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
         * @param {string=} params.view Controls the set of fields returned in the `List` response.
         * @param {integer=} params.pageSize Maximum results to return per page.
         * @param {string=} params.pageToken Continuation token for fetching the next page of results.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules/{modulesId}/versions',
              method: 'GET'
            },
            params: params,
            requiredParams: ['appsId', 'modulesId'],
            pathParams: ['appsId', 'modulesId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * appengine.apps.modules.versions.patch
         *
         * @desc Updates an existing version. Note: UNIMPLEMENTED.
         *
         * @alias appengine.apps.modules.versions.patch
         * @memberOf! appengine(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `name`. Name of the resource to update. For example: "apps/myapp/modules/default/versions/1".
         * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
         * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
         * @param {string=} params.mask Standard field mask for the set of fields to be updated.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}',
              method: 'PATCH'
            },
            params: params,
            requiredParams: ['appsId', 'modulesId', 'versionsId'],
            pathParams: ['appsId', 'modulesId', 'versionsId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        instances: {

          /**
           * appengine.apps.modules.versions.instances.list
           *
           * @desc Lists the instances of a version.
           *
           * @alias appengine.apps.modules.versions.instances.list
           * @memberOf! appengine(v1beta4)
           *
           * @param {object} params Parameters for request
           * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/modules/default/versions/v1".
           * @param {string} params.modulesId Part of `name`. See documentation of `appsId`.
           * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
           * @param {integer=} params.pageSize Maximum results to return per page.
           * @param {string=} params.pageToken Continuation token for fetching the next page of results.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list: function (params, callback) {
            var parameters = {
              options: {
                url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/modules/{modulesId}/versions/{versionsId}/instances',
                method: 'GET'
              },
              params: params,
              requiredParams: ['appsId', 'modulesId', 'versionsId'],
              pathParams: ['appsId', 'modulesId', 'versionsId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      }
    },

    operations: {

      /**
       * appengine.apps.operations.get
       *
       * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
       *
       * @alias appengine.apps.operations.get
       * @memberOf! appengine(v1beta4)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. The name of the operation resource.
       * @param {string} params.operationsId Part of `name`. See documentation of `appsId`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/operations/{operationsId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['appsId', 'operationsId'],
          pathParams: ['appsId', 'operationsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.operations.list
       *
       * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
       *
       * @alias appengine.apps.operations.list
       * @memberOf! appengine(v1beta4)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. The name of the operation collection.
       * @param {string=} params.filter The standard list filter.
       * @param {integer=} params.pageSize The standard list page size.
       * @param {string=} params.pageToken The standard list page token.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1beta4/apps/{appsId}/operations',
            method: 'GET'
          },
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

module.exports = Appengine;
