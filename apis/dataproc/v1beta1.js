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
var utils = require('../../lib/utils');

/**
 * Google Cloud Dataproc API
 *
 * Manages Hadoop-based clusters and jobs on Google Cloud Platform.
 *
 * @example
 * var google = require('googleapis');
 * var dataproc = google.dataproc('v1beta1');
 *
 * @namespace dataproc
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Dataproc
 */
function Dataproc(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.operations = {

    /**
     * dataproc.operations.cancel
     *
     * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use operations.get or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation.
     *
     * @alias dataproc.operations.cancel
     * @memberOf! dataproc(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {dataproc(v1beta1).CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://dataproc.googleapis.com/v1beta1/{name}:cancel',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dataproc.operations.delete
     *
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
     *
     * @alias dataproc.operations.delete
     * @memberOf! dataproc(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
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

      var parameters = {
        options: utils.extend({
          url: 'https://dataproc.googleapis.com/v1beta1/{name}',
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dataproc.operations.get
     *
     * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias dataproc.operations.get
     * @memberOf! dataproc(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
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

      var parameters = {
        options: utils.extend({
          url: 'https://dataproc.googleapis.com/v1beta1/{name}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dataproc.operations.list
     *
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding below allows API services to override the binding to use different resource name schemes, such as users/x/operations.
     *
     * @alias dataproc.operations.list
     * @memberOf! dataproc(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation collection.
     * @param {string=} params.pageToken The standard list page token.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.filter The standard list filter.
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

      var parameters = {
        options: utils.extend({
          url: 'https://dataproc.googleapis.com/v1beta1/{name}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.projects = {

    clusters: {

      /**
       * dataproc.projects.clusters.patch
       *
       * @desc Updates a cluster in a project.
       *
       * @alias dataproc.projects.clusters.patch
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project the cluster belongs to.
       * @param {string=} params.updateMask Required Specifies the path, relative to <code>Cluster</code>, of the field to update. For example, to change the number of workers in a cluster to 5, the <code>update_mask</code> parameter would be specified as <code>configuration.worker_configuration.num_instances</code>, and the PATCH request body would specify the new value, as follows: {   "configuration":{     "workerConfiguration":{       "numInstances":"5"     }   } } Similarly, to change the number of preemptible workers in a cluster to 5, the <code>update_mask</code> parameter would be <code>config.secondary_worker_config.num_instances</code>, and the PATCH request body would be set as follows: {   "config":{     "secondaryWorkerConfig":{       "numInstances":"5"     }   } } <strong>Note:</strong> Currently, <code>config.worker_config.num_instances</code> and <code>config.secondary_worker_config.num_instances</code> are the only fields that can be updated.
       * @param {string} params.clusterName Required The cluster name.
       * @param {dataproc(v1beta1).Cluster} params.resource Request body data
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

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}',
            method: 'PATCH'
          }, options),
          params: params,
          requiredParams: ['projectId', 'clusterName'],
          pathParams: ['projectId', 'clusterName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.clusters.get
       *
       * @desc Gets the resource representation for a cluster in a project.
       *
       * @alias dataproc.projects.clusters.get
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.clusterName Required The cluster name.
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
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

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['projectId', 'clusterName'],
          pathParams: ['clusterName', 'projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.clusters.diagnose
       *
       * @desc Gets cluster diagnostic information. After the operation completes, the Operation.response field contains DiagnoseClusterOutputLocation.
       *
       * @alias dataproc.projects.clusters.diagnose
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.clusterName Required The cluster name.
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
       * @param {dataproc(v1beta1).DiagnoseClusterRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      diagnose: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}:diagnose',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['projectId', 'clusterName'],
          pathParams: ['clusterName', 'projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.clusters.delete
       *
       * @desc Deletes a cluster in a project.
       *
       * @alias dataproc.projects.clusters.delete
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
       * @param {string} params.clusterName Required The cluster name.
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

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}',
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['projectId', 'clusterName'],
          pathParams: ['projectId', 'clusterName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.clusters.list
       *
       * @desc Lists all clusters in a project.
       *
       * @alias dataproc.projects.clusters.list
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken The standard List page token.
       * @param {integer=} params.pageSize The standard List page size.
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
       * @param {string=} params.filter Optional A filter constraining which clusters to list. Valid filters contain label terms such as: labels.key1 = val1 AND (-labels.k2 = val2 OR labels.k3 = val3)
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

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters',
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
       * dataproc.projects.clusters.create
       *
       * @desc Creates a cluster in a project.
       *
       * @alias dataproc.projects.clusters.create
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
       * @param {dataproc(v1beta1).Cluster} params.resource Request body data
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

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    jobs: {

      /**
       * dataproc.projects.jobs.patch
       *
       * @desc Updates a job in a project.
       *
       * @alias dataproc.projects.jobs.patch
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
       * @param {string} params.jobId Required The job ID.
       * @param {string=} params.updateMask Required Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
       * @param {dataproc(v1beta1).Job} params.resource Request body data
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

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}',
            method: 'PATCH'
          }, options),
          params: params,
          requiredParams: ['projectId', 'jobId'],
          pathParams: ['projectId', 'jobId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.jobs.get
       *
       * @desc Gets the resource representation for a job in a project.
       *
       * @alias dataproc.projects.jobs.get
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
       * @param {string} params.jobId Required The job ID.
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

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['projectId', 'jobId'],
          pathParams: ['projectId', 'jobId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.jobs.submit
       *
       * @desc Submits a job to a cluster.
       *
       * @alias dataproc.projects.jobs.submit
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
       * @param {dataproc(v1beta1).SubmitJobRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      submit: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs:submit',
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
       * dataproc.projects.jobs.delete
       *
       * @desc Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
       *
       * @alias dataproc.projects.jobs.delete
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
       * @param {string} params.jobId Required The job ID.
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

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}',
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['projectId', 'jobId'],
          pathParams: ['projectId', 'jobId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.jobs.list
       *
       * @desc Lists jobs in a project.
       *
       * @alias dataproc.projects.jobs.list
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter Optional A filter constraining which jobs to list. Valid filters contain job state and label terms such as: labels.key1 = val1 AND (labels.k2 = val2 OR labels.k3 = val3)
       * @param {string=} params.jobStateMatcher Optional Specifies enumerated categories of jobs to list.
       * @param {string=} params.pageToken Optional The page token, returned by a previous call, to request the next page of results.
       * @param {integer=} params.pageSize Optional The number of results to return in each response.
       * @param {string=} params.clusterName Optional If set, the returned jobs list includes only jobs that were submitted to the named cluster.
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
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

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs',
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
       * dataproc.projects.jobs.cancel
       *
       * @desc Starts a job cancellation request. To access the job resource after cancellation, call jobs.list or jobs.get.
       *
       * @alias dataproc.projects.jobs.cancel
       * @memberOf! dataproc(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
       * @param {string} params.jobId Required The job ID.
       * @param {dataproc(v1beta1).CancelJobRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}:cancel',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['projectId', 'jobId'],
          pathParams: ['projectId', 'jobId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef Status
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {object[]} details A list of messages that carry the error details. There will be a common set of message types for APIs to use.
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef JobScheduling
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {integer} maxFailuresPerHour Optional Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported failed.A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window.Maximum value is 10.
 */
/**
 * @typedef NodeInitializationAction
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} executionTimeout Optional Amount of time executable has to complete. Default is 10 minutes. Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
 * @property {string} executableFile Required Google Cloud Storage URI of executable file.
 */
/**
 * @typedef ListJobsResponse
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {dataproc(v1beta1).Job[]} jobs Output-only Jobs list.
 * @property {string} nextPageToken Optional This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent &lt;code&gt;ListJobsRequest&lt;/code&gt;.
 */
/**
 * @typedef CancelJobRequest
 * @memberOf! dataproc(v1beta1)
 * @type object
 */
/**
 * @typedef SparkSqlJob
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} queryFileUri The HCFS URI of the script that contains SQL queries.
 * @property {dataproc(v1beta1).QueryList} queryList A list of queries.
 * @property {object} scriptVariables Optional Mapping of query variable names to values (equivalent to the Spark SQL command: SET name=&quot;value&quot;;).
 * @property {string[]} jarFileUris Optional HCFS URIs of jar files to be added to the Spark CLASSPATH.
 * @property {dataproc(v1beta1).LoggingConfiguration} loggingConfiguration Optional The runtime log configuration for job execution.
 * @property {object} properties Optional A mapping of property names to values, used to configure Spark SQL&#39;s SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
 */
/**
 * @typedef Cluster
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {dataproc(v1beta1).ClusterMetrics} metrics Contains cluster daemon metrics such as HDFS and YARN stats.
 * @property {dataproc(v1beta1).ClusterStatus} status Output-only Cluster status.
 * @property {dataproc(v1beta1).ClusterStatus[]} statusHistory Output-only Previous cluster statuses.
 * @property {string} clusterName Required The cluster name. Cluster names within a project must be unique. Names from deleted clusters can be reused.
 * @property {string} clusterUuid Output-only A cluster UUID (Unique Universal Identifier). Cloud Dataproc generates this value when it creates the cluster.
 * @property {string} projectId Required The Google Cloud Platform project ID that the cluster belongs to.
 * @property {dataproc(v1beta1).ClusterConfiguration} configuration Required The cluster configuration. Note that Cloud Dataproc may set default values, and values may change when clusters are updated.
 * @property {object} labels Optional The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 64 labels can be associated with a given cluster.
 */
/**
 * @typedef ListOperationsResponse
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {dataproc(v1beta1).Operation[]} operations A list of operations that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */
/**
 * @typedef OperationMetadata
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} operationType Output-only The operation type.
 * @property {string} description Output-only Short description of operation.
 * @property {string[]} warnings Output-only Errors encountered during operation execution.
 * @property {dataproc(v1beta1).OperationStatus} status Output-only Current operation status.
 * @property {dataproc(v1beta1).OperationStatus[]} statusHistory Output-only Previous operation status.
 * @property {string} clusterUuid Cluster UUId for the operation.
 * @property {string} clusterName Name of the cluster for the operation.
 */
/**
 * @typedef JobPlacement
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} clusterName Required The name of the cluster where the job will be submitted.
 * @property {string} clusterUuid Output-only A cluster UUID generated by the Dataproc service when the job is submitted.
 */
/**
 * @typedef ClusterStatus
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} state The cluster&#39;s state.
 * @property {string} stateStartTime Time when this state was entered.
 * @property {string} substate Output-only Additional state information that includes status reported by the agent.
 * @property {string} detail Optional details of cluster&#39;s state.
 */
/**
 * @typedef PigJob
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string[]} jarFileUris Optional HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
 * @property {object} scriptVariables Optional Mapping of query variable names to values (equivalent to the Pig command: name=[value]).
 * @property {dataproc(v1beta1).LoggingConfiguration} loggingConfiguration Optional The runtime log configuration for job execution.
 * @property {object} properties Optional A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
 * @property {boolean} continueOnFailure Optional Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
 * @property {string} queryFileUri The HCFS URI of the script that contains the Pig queries.
 * @property {dataproc(v1beta1).QueryList} queryList A list of queries.
 */
/**
 * @typedef AcceleratorConfiguration
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {integer} acceleratorCount The number of the accelerator cards of this type exposed to this instance.
 * @property {string} acceleratorTypeUri Full or partial URI of the accelerator type resource to expose to this instance. See Google Compute Engine AcceleratorTypes( /compute/docs/reference/beta/acceleratorTypes)
 */
/**
 * @typedef ManagedGroupConfiguration
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} instanceGroupManagerName Output-only The name of the Instance Group Manager for this group.
 * @property {string} instanceTemplateName Output-only The name of the Instance Template used for the Managed Instance Group.
 */
/**
 * @typedef ListClustersResponse
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {dataproc(v1beta1).Cluster[]} clusters Output-only The clusters in the project.
 * @property {string} nextPageToken The standard List next-page token.
 */
/**
 * @typedef SparkJob
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string[]} args Optional The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
 * @property {string[]} fileUris Optional HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
 * @property {string} mainClass The name of the driver&#39;s main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris.
 * @property {string[]} archiveUris Optional HCFS URIs of archives to be extracted in the working directory of Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
 * @property {string} mainJarFileUri The Hadoop Compatible Filesystem (HCFS) URI of the jar file that contains the main class.
 * @property {string[]} jarFileUris Optional HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
 * @property {dataproc(v1beta1).LoggingConfiguration} loggingConfiguration Optional The runtime log configuration for job execution.
 * @property {object} properties Optional A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
 */
/**
 * @typedef Job
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} driverControlFilesUri Output-only If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.
 * @property {string} submittedBy Output-only The email address of the user submitting the job. For jobs submitted on the cluster, the address is &lt;code&gt;username@hostname&lt;/code&gt;.
 * @property {dataproc(v1beta1).JobScheduling} scheduling Optional Job scheduling configuration.
 * @property {dataproc(v1beta1).PigJob} pigJob Job is a Pig job.
 * @property {dataproc(v1beta1).HiveJob} hiveJob Job is a Hive job.
 * @property {object} labels Optional The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 64 labels can be associated with a given job.
 * @property {string} driverOutputResourceUri Output-only A URI pointing to the location of the stdout of the job&#39;s driver program.
 * @property {dataproc(v1beta1).JobStatus[]} statusHistory Output-only The previous job status.
 * @property {dataproc(v1beta1).SparkSqlJob} sparkSqlJob Job is a SparkSql job.
 * @property {dataproc(v1beta1).SparkJob} sparkJob Job is a Spark job.
 * @property {dataproc(v1beta1).YarnApplication[]} yarnApplications Output-only The collection of YARN applications spun up by this job.
 * @property {dataproc(v1beta1).PySparkJob} pysparkJob Job is a Pyspark job.
 * @property {dataproc(v1beta1).JobReference} reference Optional The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a &lt;code&gt;job_id&lt;/code&gt;.
 * @property {boolean} interactive Optional If set to true, the driver&#39;s stdin will be kept open and driver_input_uri will be set to provide a path at which additional input can be sent to the driver.
 * @property {string} driverInputResourceUri Output-only A URI pointing to the location of the stdin of the job&#39;s driver program, only set if the job is interactive.
 * @property {dataproc(v1beta1).HadoopJob} hadoopJob Job is a Hadoop job.
 * @property {dataproc(v1beta1).JobStatus} status Output-only The job status. Additional application-specific status information may be contained in the &lt;code&gt;type_job&lt;/code&gt; and &lt;code&gt;yarn_applications&lt;/code&gt; fields.
 * @property {dataproc(v1beta1).JobPlacement} placement Required Job information, including how, when, and where to run the job.
 */
/**
 * @typedef DiskConfiguration
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {integer} numLocalSsds Optional Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic configuration and installed binaries.
 * @property {integer} bootDiskSizeGb Optional Size in GB of the boot disk (default is 500GB).
 */
/**
 * @typedef JobStatus
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} stateStartTime Output-only The time when this state was entered.
 * @property {string} substate Output-only Additional state information, which includes status reported by the agent.
 * @property {string} state Required A state message specifying the overall job state.
 * @property {string} details Optional Job state details, such as an error description if the state is &lt;code&gt;ERROR&lt;/code&gt;.
 */
/**
 * @typedef ClusterOperationStatus
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} state Output-only A message containing the operation state.
 * @property {string} details Output-onlyA message containing any operation metadata details.
 * @property {string} innerState Output-only A message containing the detailed operation state.
 * @property {string} stateStartTime Output-only The time this state was entered.
 */
/**
 * @typedef HadoopJob
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {dataproc(v1beta1).LoggingConfiguration} loggingConfiguration Optional The runtime log configuration for job execution.
 * @property {object} properties Optional A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code.
 * @property {string[]} args Optional The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
 * @property {string[]} fileUris Optional HCFS URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.
 * @property {string} mainClass The name of the driver&#39;s main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris.
 * @property {string[]} archiveUris Optional HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.
 * @property {string} mainJarFileUri The Hadoop Compatible Filesystem (HCFS) URI of the jar file containing the main class. Examples:  &#39;gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar&#39;  &#39;hdfs:/tmp/test-samples/custom-wordcount.jar&#39;  &#39;file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar&#39;
 * @property {string[]} jarFileUris Optional Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.
 */
/**
 * @typedef QueryList
 * @memberOf! dataproc(v1beta1)
 * @type object
* @property {string[]} queries Required The queries to execute. You do not need to terminate a query with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of an Cloud Dataproc API snippet that uses a QueryList to specify a HiveJob:
&quot;hiveJob&quot;: {
  &quot;queryList&quot;: {
    &quot;queries&quot;: [
      &quot;query1&quot;,
      &quot;query2&quot;,
      &quot;query3;query4&quot;,
    ]
  }
}

*/
/**
 * @typedef YarnApplication
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} state Required The application state.
 * @property {string} name Required The application name.
 * @property {string} trackingUrl Optional The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access.
 * @property {number} progress Required The numerical progress of the application, from 1 to 100.
 */
/**
 * @typedef DiagnoseClusterRequest
 * @memberOf! dataproc(v1beta1)
 * @type object
 */
/**
 * @typedef ClusterOperationMetadata
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {dataproc(v1beta1).ClusterOperationStatus[]} statusHistory Output-only The previous operation status.
 * @property {string} clusterUuid Output-only Cluster UUID for the operation.
 * @property {string} clusterName Output-only Name of the cluster for the operation.
 * @property {string} operationType Output-only The operation type.
 * @property {string} description Output-only Short description of operation.
 * @property {string[]} warnings Output-only Errors encountered during operation execution.
 * @property {object} labels Output-only Labels associated with the operation
 * @property {dataproc(v1beta1).ClusterOperationStatus} status Output-only Current operation status.
 */
/**
 * @typedef Empty
 * @memberOf! dataproc(v1beta1)
 * @type object
 */
/**
 * @typedef HiveJob
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {object} properties Optional A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
 * @property {boolean} continueOnFailure Optional Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
 * @property {dataproc(v1beta1).QueryList} queryList A list of queries.
 * @property {string} queryFileUri The HCFS URI of the script that contains Hive queries.
 * @property {string[]} jarFileUris Optional HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
 * @property {object} scriptVariables Optional Mapping of query variable names to values (equivalent to the Hive command: SET name=&quot;value&quot;;).
 */
/**
 * @typedef DiagnoseClusterResults
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} outputUri Output-only The Google Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics.
 */
/**
 * @typedef SoftwareConfiguration
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {object} properties Optional The properties to set on daemon configuration files.Property keys are specified in &quot;prefix:property&quot; format, such as &quot;core:fs.defaultFS&quot;. The following are supported prefixes and their mappings:  core - core-site.xml  hdfs - hdfs-site.xml  mapred - mapred-site.xml  yarn - yarn-site.xml  hive - hive-site.xml  pig - pig.properties  spark - spark-defaults.conf
 * @property {string} imageVersion Optional The version of software inside the cluster. It must match the regular expression [0-9]+\.[0-9]+. If unspecified, it defaults to the latest version (see Cloud Dataproc Versioning).
 */
/**
 * @typedef PySparkJob
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {object} properties Optional A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
 * @property {string[]} args Optional The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
 * @property {string[]} fileUris Optional HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks.
 * @property {string[]} pythonFileUris Optional HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
 * @property {string} mainPythonFileUri Required The Hadoop Compatible Filesystem (HCFS) URI of the main Python file to use as the driver. Must be a .py file.
 * @property {string[]} archiveUris Optional HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
 * @property {string[]} jarFileUris Optional HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
 * @property {dataproc(v1beta1).LoggingConfiguration} loggingConfiguration Optional The runtime log configuration for job execution.
 */
/**
 * @typedef ClusterMetrics
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {object} yarnMetrics The YARN metrics.
 * @property {object} hdfsMetrics The HDFS metrics.
 */
/**
 * @typedef ClusterConfiguration
 * @memberOf! dataproc(v1beta1)
 * @type object
* @property {dataproc(v1beta1).InstanceGroupConfiguration} secondaryWorkerConfiguration Optional The Google Compute Engine configuration settings for additional worker instances in a cluster.
* @property {dataproc(v1beta1).InstanceGroupConfiguration} workerConfiguration Optional The Google Compute Engine configuration settings for worker instances in a cluster.
* @property {dataproc(v1beta1).NodeInitializationAction[]} initializationActions Optional Commands to execute on each node after configuration is completed. By default, executables are run on master and all worker nodes. You can test a node&#39;s &lt;code&gt;role&lt;/code&gt; metadata to run an executable on a master or worker node, as shown below:
ROLE=$(/usr/share/google/get_metadata_value attributes/role)
if [[ &quot;${ROLE}&quot; == &#39;Master&#39; ]]; then
  ... master specific actions ...
else
  ... worker specific actions ...
fi

* @property {dataproc(v1beta1).SoftwareConfiguration} softwareConfiguration Optional The configuration settings for software inside the cluster.
* @property {dataproc(v1beta1).GceClusterConfiguration} gceClusterConfiguration Required The shared Google Compute Engine configuration settings for all instances in a cluster.
* @property {string} configurationBucket Optional A Google Cloud Storage staging bucket used for sharing generated SSH keys and configuration. If you do not specify a staging bucket, Cloud Dataproc will determine an appropriate Cloud Storage location (US, ASIA, or EU) for your cluster&#39;s staging bucket according to the Google Compute Engine zone where your cluster is deployed, and then it will create and manage this project-level, per-location bucket for you.
* @property {dataproc(v1beta1).InstanceGroupConfiguration} masterConfiguration Optional The Google Compute Engine configuration settings for the master instance in a cluster.
*/
/**
 * @typedef LoggingConfiguration
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {object} driverLogLevels The per-package log levels for the driver. This may include &quot;root&quot; package name to configure rootLogger. Examples:  &#39;com.google = FATAL&#39;, &#39;root = INFO&#39;, &#39;org.apache = DEBUG&#39;
 */
/**
 * @typedef InstanceGroupConfiguration
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {integer} numInstances The number of VM instances in the instance group. For master instance groups, must be set to 1.
 * @property {dataproc(v1beta1).DiskConfiguration} diskConfiguration Disk option configuration settings.
 * @property {boolean} isPreemptible Specifies that this instance group contains Preemptible Instances.
 * @property {string} imageUri Output-only The Google Compute Engine image resource used for cluster instances. Inferred from SoftwareConfiguration.image_version.
 * @property {string} machineTypeUri The Google Compute Engine machine type used for cluster instances. Example: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2.
 * @property {string[]} instanceNames The list of instance names. Dataproc derives the names from cluster_name, num_instances, and the instance group if not set by user (recommended practice is to let Dataproc derive the name).
 * @property {dataproc(v1beta1).ManagedGroupConfiguration} managedGroupConfiguration Output-only The configuration for Google Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
 * @property {dataproc(v1beta1).AcceleratorConfiguration[]} accelerators Optional The Google Compute Engine accelerator configuration for these instances.
 */
/**
 * @typedef GceClusterConfiguration
 * @memberOf! dataproc(v1beta1)
 * @type object
* @property {string} zoneUri Required The zone where the Google Compute Engine cluster will be located. Example: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone].
* @property {object} metadata The Google Compute Engine metadata entries to add to all instances.
* @property {boolean} internalIpOnly If true, all instances in the cluser will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
* @property {string[]} serviceAccountScopes The URIs of service account scopes to be included in Google Compute Engine instances. The following base set of scopes is always included: - https://www.googleapis.com/auth/cloud.useraccounts.readonly - https://www.googleapis.com/auth/devstorage.read_write - https://www.googleapis.com/auth/logging.write If no scopes are specfied, the following defaults are also provided: - https://www.googleapis.com/auth/bigquery - https://www.googleapis.com/auth/bigtable.admin.table - https://www.googleapis.com/auth/bigtable.data - https://www.googleapis.com/auth/devstorage.full_control
* @property {string[]} tags The Google Compute Engine tags to add to all instances.
* @property {string} serviceAccount Optional The service account of the instances. Defaults to the default Google Compute Engine service account. Custom service accounts need permissions equivalent to the folloing IAM roles:
roles/logging.logWriter
roles/storage.objectAdmin(see https://cloud.google.com/compute/docs/access/service-accounts#custom_service_accounts for more information). Example: [account_id]@[project_id].iam.gserviceaccount.com
* @property {string} subnetworkUri The Google Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. Example: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/sub0.
* @property {string} networkUri The Google Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the &quot;default&quot; network of the project is used, if it exists. Cannot be a &quot;Custom Subnet Network&quot; (see https://cloud.google.com/compute/docs/subnetworks for more information). Example: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default.
*/
/**
 * @typedef CancelOperationRequest
 * @memberOf! dataproc(v1beta1)
 * @type object
 */
/**
 * @typedef DiagnoseClusterOutputLocation
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} outputUri Output-only The Google Cloud Storage URI of the diagnostic output. This is a plain text file with a summary of collected diagnostics.
 */
/**
 * @typedef Operation
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {boolean} done If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
 * @property {object} response The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
 * @property {dataproc(v1beta1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
 */
/**
 * @typedef OperationStatus
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} state A message containing the operation state.
 * @property {string} details A message containing any operation metadata details.
 * @property {string} innerState A message containing the detailed operation state.
 * @property {string} stateStartTime The time this state was entered.
 */
/**
 * @typedef JobReference
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {string} projectId Required The ID of the Google Cloud Platform project that the job belongs to.
 * @property {string} jobId Required The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.
 */
/**
 * @typedef SubmitJobRequest
 * @memberOf! dataproc(v1beta1)
 * @type object
 * @property {dataproc(v1beta1).Job} job Required The job resource.
 */
module.exports = Dataproc;
