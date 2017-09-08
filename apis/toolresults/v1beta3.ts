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
 * Cloud Tool Results API
 *
 * Reads and publishes results from Firebase Test Lab.
 *
 * @example
 * const google = require('googleapis');
 * const toolresults = google.toolresults('v1beta3');
 *
 * @namespace toolresults
 * @type {Function}
 * @version v1beta3
 * @variation v1beta3
 * @param {object=} options Options for Toolresults
 */
function Toolresults(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {

    /**
     * toolresults.projects.getSettings
     *
     * @desc Gets the Tool Results settings for a project.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read from project
     *
     * @alias toolresults.projects.getSettings
     * @memberOf! toolresults(v1beta3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId A Project id.  Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSettings: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/settings').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
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
     * @desc Creates resources for settings which have not yet been set.  Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days.  The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details.  If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created.  May return any canonical error codes, including the following:  - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
     *
     * @alias toolresults.projects.initializeSettings
     * @memberOf! toolresults(v1beta3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId A Project id.  Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    initializeSettings: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}:initializeSettings').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.projectId A Project id.  Required.
       * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
       * @param {toolresults(v1beta3).History} params.resource Request body data
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
            url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.historyId A History id.  Required.
       * @param {string} params.projectId A Project id.  Required.
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
            url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string=} params.filterByName If set, only return histories with the given name.  Optional.
       * @param {integer=} params.pageSize The maximum number of Histories to fetch.  Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100.  Optional.
       * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
       * @param {string} params.projectId A Project id.  Required.
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
            url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
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
         * @param {object} params Parameters for request
         * @param {string} params.historyId A History id.  Required.
         * @param {string} params.projectId A Project id.  Required.
         * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
         * @param {toolresults(v1beta3).Execution} params.resource Request body data
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
              url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
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
         * @param {object} params Parameters for request
         * @param {string} params.executionId An Execution id.  Required.
         * @param {string} params.historyId A History id.  Required.
         * @param {string} params.projectId A Project id.  Required.
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
              url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
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
         * @param {object} params Parameters for request
         * @param {string} params.historyId A History id.  Required.
         * @param {integer=} params.pageSize The maximum number of Executions to fetch.  Default value: 25. The server will use this default if the field is not set or has a value of 0.  Optional.
         * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
         * @param {string} params.projectId A Project id.  Required.
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
              url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
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
         * @param {object} params Parameters for request
         * @param {string} params.executionId Required.
         * @param {string} params.historyId Required.
         * @param {string} params.projectId A Project id. Required.
         * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
         * @param {toolresults(v1beta3).Execution} params.resource Request body data
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
              url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            }, options),
            params: params,
            requiredParams: ['projectId', 'historyId', 'executionId'],
            pathParams: ['executionId', 'historyId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },
        clusters: {

          /**
           * toolresults.projects.histories.executions.clusters.get
           *
           * @desc Retrieves a single screenshot cluster by its ID
           *
           * @alias toolresults.projects.histories.executions.clusters.get
           * @memberOf! toolresults(v1beta3)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId A Cluster id  Required.
           * @param {string} params.executionId An Execution id.  Required.
           * @param {string} params.historyId A History id.  Required.
           * @param {string} params.projectId A Project id.  Required.
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
                url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['projectId', 'historyId', 'executionId', 'clusterId'],
              pathParams: ['clusterId', 'executionId', 'historyId', 'projectId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * toolresults.projects.histories.executions.clusters.list
           *
           * @desc Lists Screenshot Clusters  Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
           *
           * @alias toolresults.projects.histories.executions.clusters.list
           * @memberOf! toolresults(v1beta3)
           *
           * @param {object} params Parameters for request
           * @param {string} params.executionId An Execution id.  Required.
           * @param {string} params.historyId A History id.  Required.
           * @param {string} params.projectId A Project id.  Required.
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
                url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['projectId', 'historyId', 'executionId'],
              pathParams: ['executionId', 'historyId', 'projectId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
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
           * @param {object} params Parameters for request
           * @param {string} params.executionId A Execution id.  Required.
           * @param {string} params.historyId A History id.  Required.
           * @param {string} params.projectId A Project id.  Required.
           * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
           * @param {toolresults(v1beta3).Step} params.resource Request body data
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
                url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
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
           * @param {object} params Parameters for request
           * @param {string} params.executionId A Execution id.  Required.
           * @param {string} params.historyId A History id.  Required.
           * @param {string} params.projectId A Project id.  Required.
           * @param {string} params.stepId A Step id.  Required.
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
                url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
              pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * toolresults.projects.histories.executions.steps.getPerfMetricsSummary
           *
           * @desc Retrieves a PerfMetricsSummary.  May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
           *
           * @alias toolresults.projects.histories.executions.steps.getPerfMetricsSummary
           * @memberOf! toolresults(v1beta3)
           *
           * @param {object} params Parameters for request
           * @param {string} params.executionId A tool results execution ID.
           * @param {string} params.historyId A tool results history ID.
           * @param {string} params.projectId The cloud project
           * @param {string} params.stepId A tool results step ID.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          getPerfMetricsSummary: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
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
           * @param {object} params Parameters for request
           * @param {string} params.executionId A Execution id.  Required.
           * @param {string} params.historyId A History id.  Required.
           * @param {integer=} params.pageSize The maximum number of Steps to fetch.  Default value: 25. The server will use this default if the field is not set or has a value of 0.  Optional.
           * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
           * @param {string} params.projectId A Project id.  Required.
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
                url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
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
           * @param {object} params Parameters for request
           * @param {string} params.executionId A Execution id.  Required.
           * @param {string} params.historyId A History id.  Required.
           * @param {string} params.projectId A Project id.  Required.
           * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
           * @param {string} params.stepId A Step id.  Required.
           * @param {toolresults(v1beta3).Step} params.resource Request body data
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
                url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              }, options),
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
           * @param {object} params Parameters for request
           * @param {string} params.executionId A Execution id.  Required.
           * @param {string} params.historyId A History id.  Required.
           * @param {string} params.projectId A Project id.  Required.
           * @param {string} params.stepId A Step id. Note: This step must include a TestExecutionStep.  Required.
           * @param {toolresults(v1beta3).PublishXunitXmlFilesRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          publishXunitXmlFiles: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
              pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },
          perfMetricsSummary: {

            /**
             * toolresults.projects.histories.executions.steps.perfMetricsSummary.create
             *
             * @desc Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created.  May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
             *
             * @alias toolresults.projects.histories.executions.steps.perfMetricsSummary.create
             * @memberOf! toolresults(v1beta3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.executionId A tool results execution ID.
             * @param {string} params.historyId A tool results history ID.
             * @param {string} params.projectId The cloud project
             * @param {string} params.stepId A tool results step ID.
             * @param {toolresults(v1beta3).PerfMetricsSummary} params.resource Request body data
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
                  url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                context: self
              };

              return createAPIRequest(parameters, callback);
            }
          },
          perfSampleSeries: {

            /**
             * toolresults.projects.histories.executions.steps.perfSampleSeries.create
             *
             * @desc Creates a PerfSampleSeries.  May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
             *
             * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.create
             * @memberOf! toolresults(v1beta3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.executionId A tool results execution ID.
             * @param {string} params.historyId A tool results history ID.
             * @param {string} params.projectId The cloud project
             * @param {string} params.stepId A tool results step ID.
             * @param {toolresults(v1beta3).PerfSampleSeries} params.resource Request body data
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
                  url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                context: self
              };

              return createAPIRequest(parameters, callback);
            },

            /**
             * toolresults.projects.histories.executions.steps.perfSampleSeries.get
             *
             * @desc Gets a PerfSampleSeries.  May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
             *
             * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.get
             * @memberOf! toolresults(v1beta3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.executionId A tool results execution ID.
             * @param {string} params.historyId A tool results history ID.
             * @param {string} params.projectId The cloud project
             * @param {string} params.sampleSeriesId A sample series id
             * @param {string} params.stepId A tool results step ID.
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
                  url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId', 'sampleSeriesId'],
                pathParams: ['executionId', 'historyId', 'projectId', 'sampleSeriesId', 'stepId'],
                context: self
              };

              return createAPIRequest(parameters, callback);
            },

            /**
             * toolresults.projects.histories.executions.steps.perfSampleSeries.list
             *
             * @desc Lists PerfSampleSeries for a given Step.  The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids.  May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
             *
             * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.list
             * @memberOf! toolresults(v1beta3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.executionId A tool results execution ID.
             * @param {string=} params.filter Specify one or more PerfMetricType values such as CPU to filter the result
             * @param {string} params.historyId A tool results history ID.
             * @param {string} params.projectId The cloud project
             * @param {string} params.stepId A tool results step ID.
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
                  url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                context: self
              };

              return createAPIRequest(parameters, callback);
            },
            samples: {

              /**
               * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
               *
               * @desc Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database).  May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
               *
               * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
               * @memberOf! toolresults(v1beta3)
               *
               * @param {object} params Parameters for request
               * @param {string} params.executionId A tool results execution ID.
               * @param {string} params.historyId A tool results history ID.
               * @param {string} params.projectId The cloud project
               * @param {string} params.sampleSeriesId A sample series id
               * @param {string} params.stepId A tool results step ID.
               * @param {toolresults(v1beta3).BatchCreatePerfSamplesRequest} params.resource Request body data
               * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
               * @param {callback} callback The callback that handles the response.
               * @return {object} Request object
               */
              batchCreate: function (params, options, callback) {
                if (typeof options === 'function') {
                  callback = options;
                  options = {};
                }
                options || (options = {});

                const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

                const parameters = {
                  options: Object.assign({
                    url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  }, options),
                  params: params,
                  requiredParams: ['projectId', 'historyId', 'executionId', 'stepId', 'sampleSeriesId'],
                  pathParams: ['executionId', 'historyId', 'projectId', 'sampleSeriesId', 'stepId'],
                  context: self
                };

                return createAPIRequest(parameters, callback);
              },

              /**
               * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list
               *
               * @desc Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit  May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
               *
               * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list
               * @memberOf! toolresults(v1beta3)
               *
               * @param {object} params Parameters for request
               * @param {string} params.executionId A tool results execution ID.
               * @param {string} params.historyId A tool results history ID.
               * @param {integer=} params.pageSize The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
               * @param {string=} params.pageToken Optional, the next_page_token returned in the previous response
               * @param {string} params.projectId The cloud project
               * @param {string} params.sampleSeriesId A sample series id
               * @param {string} params.stepId A tool results step ID.
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
                    url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  }, options),
                  params: params,
                  requiredParams: ['projectId', 'historyId', 'executionId', 'stepId', 'sampleSeriesId'],
                  pathParams: ['executionId', 'historyId', 'projectId', 'sampleSeriesId', 'stepId'],
                  context: self
                };

                return createAPIRequest(parameters, callback);
              }
            }
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
             * @param {object} params Parameters for request
             * @param {string} params.executionId An Execution id.  Required.
             * @param {string} params.historyId A History id.  Required.
             * @param {integer=} params.pageSize The maximum number of thumbnails to fetch.  Default value: 50. The server will use this default if the field is not set or has a value of 0.  Optional.
             * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
             * @param {string} params.projectId A Project id.  Required.
             * @param {string} params.stepId A Step id.  Required.
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
                  url: (rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                }, options),
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
 * @typedef AndroidAppInfo
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} name The name of the app. Optional
 * @property {string} packageName The package name of the app. Required.
 * @property {string} versionCode The internal version code of the app. Optional.
 * @property {string} versionName The version name of the app. Optional.
 */

/**
 * @typedef AndroidInstrumentationTest
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} testPackageId The java package for the test to be executed. Required
* @property {string} testRunnerClass The InstrumentationTestRunner class. Required
* @property {string[]} testTargets Each target must be fully qualified with the package name or class name, in one of these formats: - &quot;package package_name&quot; - &quot;class package_name.class_name&quot; - &quot;class package_name.class_name#method_name&quot;

If empty, all targets in the module will be run.
* @property {boolean} useOrchestrator The flag indicates whether Android Test Orchestrator will be used to run test or not. Test orchestrator is used if either: - orchestrator_option field is USE_ORCHESTRATOR, and test runner is compatible with orchestrator. Or - orchestrator_option field is unspecified or ORCHESTRATOR_OPTION_UNSPECIFIED, and test runner is compatible with orchestrator.
*/

/**
 * @typedef AndroidRoboTest
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} appInitialActivity The initial activity that should be used to start the app. Optional
 * @property {string} bootstrapPackageId The java package for the bootstrap. Optional
 * @property {string} bootstrapRunnerClass The runner class for the bootstrap. Optional
 * @property {integer} maxDepth The max depth of the traversal stack Robo can explore. Optional
 * @property {integer} maxSteps The max number of steps/actions Robo can execute. Default is no limit (0). Optional
 */

/**
 * @typedef AndroidTest
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).AndroidAppInfo} androidAppInfo Infomation about the application under test.
 * @property {toolresults(v1beta3).AndroidInstrumentationTest} androidInstrumentationTest An Android instrumentation test.
 * @property {toolresults(v1beta3).AndroidRoboTest} androidRoboTest An Android robo test.
 * @property {toolresults(v1beta3).Duration} testTimeout Max time a test is allowed to run before it is automatically cancelled.
 */

/**
 * @typedef Any
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} typeUrl A URL/resource name whose content describes the type of the serialized protocol buffer message.

For URLs which use the scheme `http`, `https`, or no scheme, the following restrictions and interpretations apply:

* If no scheme is provided, `https` is assumed. * The last segment of the URL&#39;s path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading &quot;.&quot; is not accepted). * An HTTP GET on the URL must yield a [google.protobuf.Type][] value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.)

Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.
* @property {string} value Must be a valid serialized protocol buffer of the above specified type.
*/

/**
 * @typedef AppStartTime
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).Duration} fullyDrawnTime Optional. The time from app start to reaching the developer-reported &quot;fully drawn&quot; time. This is only stored if the app includes a call to Activity.reportFullyDrawn(). See https://developer.android.com/topic/performance/launch-time.html#time-full
 * @property {toolresults(v1beta3).Duration} initialDisplayTime The time from app start to the first displayed activity being drawn, as reported in Logcat. See https://developer.android.com/topic/performance/launch-time.html#time-initial
 */

/**
 * @typedef BasicPerfSampleSeries
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} perfMetricType 
 * @property {string} perfUnit 
 * @property {string} sampleSeriesLabel 
 */

/**
 * @typedef BatchCreatePerfSamplesRequest
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).PerfSample[]} perfSamples The set of PerfSamples to create should not include existing timestamps
 */

/**
 * @typedef BatchCreatePerfSamplesResponse
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).PerfSample[]} perfSamples 
 */

/**
 * @typedef CPUInfo
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} cpuProcessor description of the device processor ie &#39;1.8 GHz hexa core 64-bit ARMv8-A&#39;
 * @property {number} cpuSpeedInGhz the CPU clock speed in GHz
 * @property {integer} numberOfCores the number of CPU cores
 */

/**
 * @typedef Duration
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {integer} nanos Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.
 * @property {string} seconds Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
 */

/**
 * @typedef Execution
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).Timestamp} completionTime The time when the Execution status transitioned to COMPLETE.

This value will be set automatically when state transitions to COMPLETE.

- In response: set if the execution state is COMPLETE. - In create/update request: never set
* @property {toolresults(v1beta3).Timestamp} creationTime The time when the Execution was created.

This value will be set automatically when CreateExecution is called.

- In response: always set - In create/update request: never set
* @property {string} executionId A unique identifier within a History for this Execution.

Returns INVALID_ARGUMENT if this field is set or overwritten by the caller.

- In response always set - In create/update request: never set
* @property {toolresults(v1beta3).Outcome} outcome Classify the result, for example into SUCCESS or FAILURE

- In response: present if set by create/update request - In create/update request: optional
* @property {toolresults(v1beta3).Specification} specification Lightweight information about execution request.

- In response: present if set by create - In create: optional - In update: optional
* @property {string} state The initial state is IN_PROGRESS.

The only legal state transitions is from IN_PROGRESS to COMPLETE.

A PRECONDITION_FAILED will be returned if an invalid transition is requested.

The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times.

If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE.

- In response always set - In create/update request: optional
* @property {string} testExecutionMatrixId TestExecution Matrix ID that the TestExecutionService uses.

- In response: present if set by create - In create: optional - In update: never set
*/

/**
 * @typedef FailureDetail
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {boolean} crashed If the failure was severe because the system under test crashed.
 * @property {boolean} notInstalled If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform.
 * @property {boolean} otherNativeCrash If a native process other than the app crashed.
 * @property {boolean} timedOut If the test overran some time limit, and that is why it failed.
 * @property {boolean} unableToCrawl If the robo was unable to crawl the app; perhaps because the app did not start.
 */

/**
 * @typedef FileReference
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} fileUri The URI of a file stored in Google Cloud Storage.

For example: http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil format: gs://mybucket/path/to/test.xml with version-specific info, gs://mybucket/path/to/test.xml#1360383693690000

An INVALID_ARGUMENT error will be returned if the URI format is not supported.

- In response: always set - In create/update request: always set
*/

/**
 * @typedef History
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} displayName A short human-readable (plain text) name to display in the UI. Maximum of 100 characters.

- In response: present if set during create. - In create request: optional
* @property {string} historyId A unique identifier within a project for this History.

Returns INVALID_ARGUMENT if this field is set or overwritten by the caller.

- In response always set - In create request: never set
* @property {string} name A name to uniquely identify a history within a project. Maximum of 100 characters.

- In response always set - In create request: always set
*/

/**
 * @typedef Image
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).Status} error An error explaining why the thumbnail could not be rendered.
* @property {toolresults(v1beta3).ToolOutputReference} sourceImage A reference to the full-size, original image.

This is the same as the tool_outputs entry for the image under its Step.

Always set.
* @property {string} stepId The step to which the image is attached.

Always set.
* @property {toolresults(v1beta3).Thumbnail} thumbnail The thumbnail.
*/

/**
 * @typedef InconclusiveDetail
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {boolean} abortedByUser If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running.
* @property {boolean} infrastructureFailure If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed.

For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail.
*/

/**
 * @typedef ListExecutionsResponse
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).Execution[]} executions Executions.

Always set.
* @property {string} nextPageToken A continuation token to resume the query at the next item.

Will only be set if there are more Executions to fetch.
*/

/**
 * @typedef ListHistoriesResponse
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).History[]} histories Histories.
* @property {string} nextPageToken A continuation token to resume the query at the next item.

Will only be set if there are more histories to fetch.

Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes.
*/

/**
 * @typedef ListPerfSampleSeriesResponse
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).PerfSampleSeries[]} perfSampleSeries The resulting PerfSampleSeries sorted by id
 */

/**
 * @typedef ListPerfSamplesResponse
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} nextPageToken Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request
 * @property {toolresults(v1beta3).PerfSample[]} perfSamples 
 */

/**
 * @typedef ListScreenshotClustersResponse
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).ScreenshotCluster[]} clusters The set of clustres associated with an execution Always set
 */

/**
 * @typedef ListStepThumbnailsResponse
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} nextPageToken A continuation token to resume the query at the next item.

If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field.
* @property {toolresults(v1beta3).Image[]} thumbnails A list of image data.

Images are returned in a deterministic order; they are ordered by these factors, in order of importance: * First, by their associated test case. Images without a test case are considered greater than images with one. * Second, by their creation time. Images without a creation time are greater than images with one. * Third, by the order in which they were added to the step (by calls to CreateStep or UpdateStep).
*/

/**
 * @typedef ListStepsResponse
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} nextPageToken A continuation token to resume the query at the next item.

If set, indicates that there are more steps to read, by calling list again with this value in the page_token field.
* @property {toolresults(v1beta3).Step[]} steps Steps.
*/

/**
 * @typedef MemoryInfo
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} memoryCapInKibibyte Maximum memory that can be allocated to the process in KiB
 * @property {string} memoryTotalInKibibyte Total memory available on the device in KiB
 */

/**
 * @typedef Outcome
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).FailureDetail} failureDetail More information about a FAILURE outcome.

Returns INVALID_ARGUMENT if this field is set but the summary is not FAILURE.

Optional
* @property {toolresults(v1beta3).InconclusiveDetail} inconclusiveDetail More information about an INCONCLUSIVE outcome.

Returns INVALID_ARGUMENT if this field is set but the summary is not INCONCLUSIVE.

Optional
* @property {toolresults(v1beta3).SkippedDetail} skippedDetail More information about a SKIPPED outcome.

Returns INVALID_ARGUMENT if this field is set but the summary is not SKIPPED.

Optional
* @property {toolresults(v1beta3).SuccessDetail} successDetail More information about a SUCCESS outcome.

Returns INVALID_ARGUMENT if this field is set but the summary is not SUCCESS.

Optional
* @property {string} summary The simplest way to interpret a result.

Required
*/

/**
 * @typedef PerfEnvironment
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).CPUInfo} cpuInfo CPU related environment info
 * @property {toolresults(v1beta3).MemoryInfo} memoryInfo Memory related environment info
 */

/**
 * @typedef PerfMetricsSummary
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).AppStartTime} appStartTime 
 * @property {string} executionId A tool results execution ID.
 * @property {string} historyId A tool results history ID.
 * @property {toolresults(v1beta3).PerfEnvironment} perfEnvironment Describes the environment in which the performance metrics were collected
 * @property {string[]} perfMetrics Set of resource collected
 * @property {string} projectId The cloud project
 * @property {string} stepId A tool results step ID.
 */

/**
 * @typedef PerfSample
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).Timestamp} sampleTime Timestamp of collection
 * @property {number} value Value observed
 */

/**
 * @typedef PerfSampleSeries
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).BasicPerfSampleSeries} basicPerfSampleSeries Basic series represented by a line chart
 * @property {string} executionId A tool results execution ID.
 * @property {string} historyId A tool results history ID.
 * @property {string} projectId The cloud project
 * @property {string} sampleSeriesId A sample series id
 * @property {string} stepId A tool results step ID.
 */

/**
 * @typedef ProjectSettings
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} defaultBucket The name of the Google Cloud Storage bucket to which results are written.

By default, this is unset.

In update request: optional In response: optional
* @property {string} name The name of the project&#39;s settings.

Always of the form: projects/{project-id}/settings

In update request: never set In response: always set
*/

/**
 * @typedef PublishXunitXmlFilesRequest
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).FileReference[]} xunitXmlFiles URI of the Xunit XML files to publish.

The maximum size of the file this reference is pointing to is 50MB.

Required.
*/

/**
 * @typedef Screen
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} fileReference File reference of the png file. Required.
 * @property {string} locale Locale of the device that the screenshot was taken on. Required.
 * @property {string} model Model of the device that the screenshot was taken on. Required.
 * @property {string} version OS version of the device that the screenshot was taken on. Required.
 */

/**
 * @typedef ScreenshotCluster
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} activity A string that describes the activity of every screen in the cluster.
 * @property {string} clusterId A unique identifier for the cluster.
 * @property {toolresults(v1beta3).Screen} keyScreen A singular screen that represents the cluster as a whole. This screen will act as the &quot;cover&quot; of the entire cluster. When users look at the clusters, only the key screen from each cluster will be shown. Which screen is the key screen is determined by the ClusteringAlgorithm
 * @property {toolresults(v1beta3).Screen[]} screens Full list of screens.
 */

/**
 * @typedef SkippedDetail
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {boolean} incompatibleAppVersion If the App doesn&#39;t support the specific API level.
 * @property {boolean} incompatibleArchitecture If the App doesn&#39;t run on the specific architecture, for example, x86.
 * @property {boolean} incompatibleDevice If the requested OS version doesn&#39;t run on the specific device model.
 */

/**
 * @typedef Specification
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {toolresults(v1beta3).AndroidTest} androidTest An Android mobile test execution specification.
 */

/**
 * @typedef StackTrace
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} clusterId Exception cluster ID
* @property {string} exception The stack trace message.

Required
* @property {string} reportId Exception report ID
*/

/**
 * @typedef Status
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {integer} code The status code, which should be an enum value of [google.rpc.Code][].
 * @property {toolresults(v1beta3).Any[]} details A list of messages that carry the error details. There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][] field, or localized by the client.
 */

/**
 * @typedef Step
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).Timestamp} completionTime The time when the step status was set to complete.

This value will be set automatically when state transitions to COMPLETE.

- In response: set if the execution state is COMPLETE. - In create/update request: never set
* @property {toolresults(v1beta3).Timestamp} creationTime The time when the step was created.

- In response: always set - In create/update request: never set
* @property {string} description A description of this tool For example: mvn clean package -D skipTests=true

- In response: present if set by create/update request - In create/update request: optional
* @property {toolresults(v1beta3).Duration} deviceUsageDuration How much the device resource is used to perform the test.

This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won&#39;t be charged for device usage.

PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set.

- In response: present if previously set. - In create request: optional - In update request: optional
* @property {toolresults(v1beta3).StepDimensionValueEntry[]} dimensionValue If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions.

The keys must exactly match the dimension_definition of the execution.

For example, if the execution has `dimension_definition = [&#39;attempt&#39;, &#39;device&#39;]` then a step must define values for those dimensions, eg. `dimension_value = [&#39;attempt&#39;: &#39;1&#39;, &#39;device&#39;: &#39;Nexus 6&#39;]`

If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = [&#39;attempt&#39;: &#39;&#39;, &#39;device&#39;: &#39;Nexus 6&#39;]`

If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset.

A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution.

A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different.

A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys.

- In response: present if set by create - In create request: optional - In update request: never set
* @property {boolean} hasImages Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails.

- In response: always set - In create/update request: never set
* @property {toolresults(v1beta3).StepLabelsEntry[]} labels Arbitrary user-supplied key/value pairs that are associated with the step.

Users are responsible for managing the key namespace such that keys don&#39;t accidentally collide.

An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters.

- In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key&#39;s value
* @property {string} name A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build

A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name.

- In response: always set - In create request: always set - In update request: never set
* @property {toolresults(v1beta3).Outcome} outcome Classification of the result, for example into SUCCESS or FAILURE

- In response: present if set by create/update request - In create/update request: optional
* @property {toolresults(v1beta3).Duration} runDuration How long it took for this step to run.

If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration.

PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set.

- In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional
* @property {string} state The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -&gt; COMPLETE

A PRECONDITION_FAILED will be returned if an invalid transition is requested.

It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times.

- In response: always set - In create/update request: optional
* @property {string} stepId A unique identifier within a Execution for this Step.

Returns INVALID_ARGUMENT if this field is set or overwritten by the caller.

- In response: always set - In create/update request: never set
* @property {toolresults(v1beta3).TestExecutionStep} testExecutionStep An execution of a test runner.
* @property {toolresults(v1beta3).ToolExecutionStep} toolExecutionStep An execution of a tool (used for steps we don&#39;t explicitly support).
*/

/**
 * @typedef StepDimensionValueEntry
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} key 
 * @property {string} value 
 */

/**
 * @typedef StepLabelsEntry
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} key 
 * @property {string} value 
 */

/**
 * @typedef SuccessDetail
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {boolean} otherNativeCrash If a native process other than the app crashed.
 */

/**
 * @typedef TestCaseReference
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} className The name of the class.
* @property {string} name The name of the test case.

Required.
* @property {string} testSuiteName The name of the test suite to which this test case belongs.
*/

/**
 * @typedef TestExecutionStep
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).TestIssue[]} testIssues Issues observed during the test execution.

For example, if the mobile app under test crashed during the test, the error message and the stack trace content can be recorded here to assist debugging.

- In response: present if set by create or update - In create/update request: optional
* @property {toolresults(v1beta3).TestSuiteOverview[]} testSuiteOverviews List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded.

The maximum allowed number of test suite overviews per step is 1000.

- In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead)
* @property {toolresults(v1beta3).TestTiming} testTiming The timing break down of the test execution.

- In response: present if set by create or update - In create/update request: optional
* @property {toolresults(v1beta3).ToolExecution} toolExecution Represents the execution of the test runner.

The exit code of this tool will be used to determine if the test passed.

- In response: always set - In create/update request: optional
*/

/**
 * @typedef TestIssue
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {string} errorMessage A brief human-readable message describing the issue. Required.
 * @property {string} severity Severity of issue. Required.
 * @property {toolresults(v1beta3).StackTrace} stackTrace Deprecated in favor of stack trace fields inside specific warnings.
 * @property {string} type Type of issue. Required.
 * @property {toolresults(v1beta3).Any} warning Warning message with additional details of the issue. Should always be a message from com.google.devtools.toolresults.v1.warnings Required.
 */

/**
 * @typedef TestSuiteOverview
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {integer} errorCount Number of test cases in error, typically set by the service by parsing the xml_source.

- In create/response: always set - In update request: never
* @property {integer} failureCount Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user.

- In create/response: always set - In update request: never
* @property {string} name The name of the test suite.

- In create/response: always set - In update request: never
* @property {integer} skippedCount Number of test cases not run, typically set by the service by parsing the xml_source.

- In create/response: always set - In update request: never
* @property {integer} totalCount Number of test cases, typically set by the service by parsing the xml_source.

- In create/response: always set - In update request: never
* @property {toolresults(v1beta3).FileReference} xmlSource If this test suite was parsed from XML, this is the URI where the original XML file is stored.

Note: Multiple test suites can share the same xml_source

Returns INVALID_ARGUMENT if the uri format is not supported.

- In create/response: optional - In update request: never
*/

/**
 * @typedef TestTiming
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).Duration} testProcessDuration How long it took to run the test process.

- In response: present if previously set. - In create/update request: optional
*/

/**
 * @typedef Thumbnail
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string} contentType The thumbnail&#39;s content type, i.e. &quot;image/png&quot;.

Always set.
* @property {string} data The thumbnail file itself.

That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.)

Always set.
* @property {integer} heightPx The height of the thumbnail, in pixels.

Always set.
* @property {integer} widthPx The width of the thumbnail, in pixels.

Always set.
*/

/**
 * @typedef Timestamp
 * @memberOf! toolresults(v1beta3)
 * @type object
 * @property {integer} nanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
 * @property {string} seconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
 */

/**
 * @typedef ToolExecution
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {string[]} commandLineArguments The full tokenized command line including the program name (equivalent to argv in a C program).

- In response: present if set by create request - In create request: optional - In update request: never set
* @property {toolresults(v1beta3).ToolExitCode} exitCode Tool execution exit code. This field will be set once the tool has exited.

- In response: present if set by create/update request - In create request: optional - In update request: optional, a FAILED_PRECONDITION error will be returned if an exit_code is already set.
* @property {toolresults(v1beta3).FileReference[]} toolLogs References to any plain text logs output the tool execution.

This field can be set before the tool has exited in order to be able to have access to a live view of the logs while the tool is running.

The maximum allowed number of tool logs per step is 1000.

- In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list
* @property {toolresults(v1beta3).ToolOutputReference[]} toolOutputs References to opaque files of any format output by the tool execution.

The maximum allowed number of tool outputs per step is 1000.

- In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list
*/

/**
 * @typedef ToolExecutionStep
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).ToolExecution} toolExecution A Tool execution.

- In response: present if set by create/update request - In create/update request: optional
*/

/**
 * @typedef ToolExitCode
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {integer} number Tool execution exit code. A value of 0 means that the execution was successful.

- In response: always set - In create/update request: always set
*/

/**
 * @typedef ToolOutputReference
 * @memberOf! toolresults(v1beta3)
 * @type object
* @property {toolresults(v1beta3).Timestamp} creationTime The creation time of the file.

- In response: present if set by create/update request - In create/update request: optional
* @property {toolresults(v1beta3).FileReference} output A FileReference to an output file.

- In response: always set - In create/update request: always set
* @property {toolresults(v1beta3).TestCaseReference} testCase The test case to which this output file belongs.

- In response: present if set by create/update request - In create/update request: optional
*/
export = Toolresults;
