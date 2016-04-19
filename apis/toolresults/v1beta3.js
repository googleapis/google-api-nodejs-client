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
 * Cloud Tool Results API
 *
 * @classdesc Reads and publishes results from Cloud Test Lab.
 * @namespace toolresults
 * @version  v1beta3
 * @variation v1beta3
 * @this Toolresults
 * @param {object=} options Options for Toolresults
 */
function Toolresults(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    /**
     * toolresults.projects.getSettings
     *
     * @desc Gets the Tool Results settings for a project.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read from project
     *
     * @alias toolresults.projects.getSettings
     * @memberOf! toolresults(v1beta3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - A Project id.  Required.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getSettings: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/settings',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * toolresults.projects.initializeSettings
     *
     * @desc Creates resources for settings which have not yet been set.  Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in the name of the user calling. Except in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days.  The bucket is created with the project-private ACL: All project team members are given permissions to the bucket and objects created within it according to their roles. Project owners have owners rights, and so on. The default ACL on objects created in the bucket is project-private as well. See Google Cloud Storage documentation for more details.  If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deteleted, a new bucket will be created.  May return any canonical error codes, including the following:  - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
     *
     * @alias toolresults.projects.initializeSettings
     * @memberOf! toolresults(v1beta3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - A Project id.  Required.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    initializeSettings: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}:initializeSettings',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    histories: {

      /**
       * toolresults.projects.histories.create
       *
       * @desc Creates a History.  The returned History will have the id set.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
       *
       * @alias toolresults.projects.histories.create
       * @memberOf! toolresults(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - A Project id.  Required.
       * @param  {string=} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories',
            method: 'POST'
          },
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * toolresults.projects.histories.get
       *
       * @desc Gets a History.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
       *
       * @alias toolresults.projects.histories.get
       * @memberOf! toolresults(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.historyId - A History id.  Required.
       * @param  {string} params.projectId - A Project id.  Required.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId', 'historyId'],
          pathParams: ['historyId', 'projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * toolresults.projects.histories.list
       *
       * @desc Lists Histories for a given Project.  The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
       *
       * @alias toolresults.projects.histories.list
       * @memberOf! toolresults(v1beta3)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.filterByName - If set, only return histories with the given name.  Optional.
       * @param  {integer=} params.pageSize - The maximum number of Histories to fetch.  Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100.  Optional.
       * @param  {string=} params.pageToken - A continuation token to resume the query at the next item.  Optional.
       * @param  {string} params.projectId - A Project id.  Required.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      executions: {

        /**
         * toolresults.projects.histories.executions.create
         *
         * @desc Creates an Execution.  The returned Execution will have the id set.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
         *
         * @alias toolresults.projects.histories.executions.create
         * @memberOf! toolresults(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.historyId - A History id.  Required.
         * @param  {string} params.projectId - A Project id.  Required.
         * @param  {string=} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'historyId'],
            pathParams: ['historyId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * toolresults.projects.histories.executions.get
         *
         * @desc Gets an Execution.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
         *
         * @alias toolresults.projects.histories.executions.get
         * @memberOf! toolresults(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.executionId - An Execution id.  Required.
         * @param  {string} params.historyId - A History id.  Required.
         * @param  {string} params.projectId - A Project id.  Required.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'historyId', 'executionId'],
            pathParams: ['executionId', 'historyId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * toolresults.projects.histories.executions.list
         *
         * @desc Lists Histories for a given Project.  The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
         *
         * @alias toolresults.projects.histories.executions.list
         * @memberOf! toolresults(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.historyId - A History id.  Required.
         * @param  {integer=} params.pageSize - The maximum number of Executions to fetch.  Default value: 25. The server will use this default if the field is not set or has a value of 0.  Optional.
         * @param  {string=} params.pageToken - A continuation token to resume the query at the next item.  Optional.
         * @param  {string} params.projectId - A Project id.  Required.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'historyId'],
            pathParams: ['historyId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * toolresults.projects.histories.executions.patch
         *
         * @desc Updates an existing Execution with the supplied partial entity.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
         *
         * @alias toolresults.projects.histories.executions.patch
         * @memberOf! toolresults(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.executionId - Required.
         * @param  {string} params.historyId - Required.
         * @param  {string} params.projectId - A Project id. Required.
         * @param  {string=} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        patch: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}',
              method: 'PATCH'
            },
            params: params,
            requiredParams: ['projectId', 'historyId', 'executionId'],
            pathParams: ['executionId', 'historyId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        steps: {

          /**
           * toolresults.projects.histories.executions.steps.create
           *
           * @desc Creates a Step.  The returned Step will have the id set.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
           *
           * @alias toolresults.projects.histories.executions.steps.create
           * @memberOf! toolresults(v1beta3)
           *
           * @param  {object} params - Parameters for request
           * @param  {string} params.executionId - A Execution id.  Required.
           * @param  {string} params.historyId - A History id.  Required.
           * @param  {string} params.projectId - A Project id.  Required.
           * @param  {string=} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
           * @param  {object} params.resource - Request body data
           * @param  {callback} callback - The callback that handles the response.
           * @return {object} Request object
           */
          create: function(params, callback) {
            var parameters = {
              options: {
                url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps',
                method: 'POST'
              },
              params: params,
              requiredParams: ['projectId', 'historyId', 'executionId'],
              pathParams: ['executionId', 'historyId', 'projectId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * toolresults.projects.histories.executions.steps.get
           *
           * @desc Gets a Step.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
           *
           * @alias toolresults.projects.histories.executions.steps.get
           * @memberOf! toolresults(v1beta3)
           *
           * @param  {object} params - Parameters for request
           * @param  {string} params.executionId - A Execution id.  Required.
           * @param  {string} params.historyId - A History id.  Required.
           * @param  {string} params.projectId - A Project id.  Required.
           * @param  {string} params.stepId - A Step id.  Required.
           * @param  {callback} callback - The callback that handles the response.
           * @return {object} Request object
           */
          get: function(params, callback) {
            var parameters = {
              options: {
                url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}',
                method: 'GET'
              },
              params: params,
              requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
              pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * toolresults.projects.histories.executions.steps.list
           *
           * @desc Lists Steps for a given Execution.  The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
           *
           * @alias toolresults.projects.histories.executions.steps.list
           * @memberOf! toolresults(v1beta3)
           *
           * @param  {object} params - Parameters for request
           * @param  {string} params.executionId - A Execution id.  Required.
           * @param  {string} params.historyId - A History id.  Required.
           * @param  {integer=} params.pageSize - The maximum number of Steps to fetch.  Default value: 25. The server will use this default if the field is not set or has a value of 0.  Optional.
           * @param  {string=} params.pageToken - A continuation token to resume the query at the next item.  Optional.
           * @param  {string} params.projectId - A Project id.  Required.
           * @param  {callback} callback - The callback that handles the response.
           * @return {object} Request object
           */
          list: function(params, callback) {
            var parameters = {
              options: {
                url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps',
                method: 'GET'
              },
              params: params,
              requiredParams: ['projectId', 'historyId', 'executionId'],
              pathParams: ['executionId', 'historyId', 'projectId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * toolresults.projects.histories.executions.steps.patch
           *
           * @desc Updates an existing Step with the supplied partial entity.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
           *
           * @alias toolresults.projects.histories.executions.steps.patch
           * @memberOf! toolresults(v1beta3)
           *
           * @param  {object} params - Parameters for request
           * @param  {string} params.executionId - A Execution id.  Required.
           * @param  {string} params.historyId - A History id.  Required.
           * @param  {string} params.projectId - A Project id.  Required.
           * @param  {string=} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
           * @param  {string} params.stepId - A Step id.  Required.
           * @param  {object} params.resource - Request body data
           * @param  {callback} callback - The callback that handles the response.
           * @return {object} Request object
           */
          patch: function(params, callback) {
            var parameters = {
              options: {
                url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}',
                method: 'PATCH'
              },
              params: params,
              requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
              pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * toolresults.projects.histories.executions.steps.publishXunitXmlFiles
           *
           * @desc Publish xml files to an existing Step.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
           *
           * @alias toolresults.projects.histories.executions.steps.publishXunitXmlFiles
           * @memberOf! toolresults(v1beta3)
           *
           * @param  {object} params - Parameters for request
           * @param  {string} params.executionId - A Execution id.  Required.
           * @param  {string} params.historyId - A History id.  Required.
           * @param  {string} params.projectId - A Project id.  Required.
           * @param  {string} params.stepId - A Step id. Note: This step must include a TestExecutionStep.  Required.
           * @param  {object} params.resource - Request body data
           * @param  {callback} callback - The callback that handles the response.
           * @return {object} Request object
           */
          publishXunitXmlFiles: function(params, callback) {
            var parameters = {
              options: {
                url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles',
                method: 'POST'
              },
              params: params,
              requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
              pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          thumbnails: {

            /**
             * toolresults.projects.histories.executions.steps.thumbnails.list
             *
             * @desc Lists thumbnails of images attached to a step.  May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
             *
             * @alias toolresults.projects.histories.executions.steps.thumbnails.list
             * @memberOf! toolresults(v1beta3)
             *
             * @param  {object} params - Parameters for request
             * @param  {string} params.executionId - An Execution id.  Required.
             * @param  {string} params.historyId - A History id.  Required.
             * @param  {integer=} params.pageSize - The maximum number of thumbnails to fetch.  Default value: 50. The server will use this default if the field is not set or has a value of 0.  Optional.
             * @param  {string=} params.pageToken - A continuation token to resume the query at the next item.  Optional.
             * @param  {string} params.projectId - A Project id.  Required.
             * @param  {string} params.stepId - A Step id.  Required.
             * @param  {callback} callback - The callback that handles the response.
             * @return {object} Request object
             */
            list: function(params, callback) {
              var parameters = {
                options: {
                  url: 'https://www.googleapis.com/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails',
                  method: 'GET'
                },
                params: params,
                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                context: self
              };

              return createAPIRequest(parameters, callback);
            }
          }
        }
      }
    }
  };
}

/**
 * Exports Toolresults object
 * @type Toolresults
 */
module.exports = Toolresults;