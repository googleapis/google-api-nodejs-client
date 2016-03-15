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
 * Google Cloud Dataproc API
 *
 * @classdesc An API for managing Hadoop-based clusters and jobs on Google Cloud Platform.
 * @namespace dataproc
 * @version  v1beta1
 * @variation v1beta1
 * @this Dataproc
 * @param {object=} options Options for Dataproc
 */
function Dataproc(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    clusters: {

      /**
       * dataproc.projects.clusters.create
       *
       * @desc Creates a cluster in a project.
       *
       * @alias dataproc.projects.clusters.create
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters',
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
       * dataproc.projects.clusters.patch
       *
       * @desc Updates a cluster in a project.
       *
       * @alias dataproc.projects.clusters.patch
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project the cluster belongs to.
       * @param  {string} params.clusterName - [Required] The cluster name.
       * @param  {string=} params.updateMask - [Required] Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as configuration.worker_configuration.num_instances, and the `PATCH` request body would specify the new value, as follows: { "configuration":{ "workerConfiguration":{ "numInstances":"5" } } } Note: Currently, configuration.worker_configuration.num_instances is the only field that can be updated.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['projectId', 'clusterName'],
          pathParams: ['projectId', 'clusterName'],
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
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
       * @param  {string} params.clusterName - [Required] The cluster name.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}',
            method: 'DELETE'
          },
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
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
       * @param  {string} params.clusterName - [Required] The cluster name.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}',
            method: 'GET'
          },
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
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
       * @param  {integer=} params.pageSize - The standard List page size.
       * @param  {string=} params.pageToken - The standard List page token.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters',
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
       * dataproc.projects.clusters.diagnose
       *
       * @desc Gets cluster diagnostic information. After the operation completes, the Operation.response field contains `DiagnoseClusterOutputLocation`.
       *
       * @alias dataproc.projects.clusters.diagnose
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
       * @param  {string} params.clusterName - [Required] The cluster name.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      diagnose: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}:diagnose',
            method: 'POST'
          },
          params: params,
          requiredParams: ['projectId', 'clusterName'],
          pathParams: ['projectId', 'clusterName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.clusters.setIamPolicy
       *
       * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
       *
       * @alias dataproc.projects.clusters.setIamPolicy
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resource_ - REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      setIamPolicy: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/{resource}:setIamPolicy',
            method: 'POST'
          },
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.clusters.getIamPolicy
       *
       * @desc Gets the access control policy for a `resource`. Returns an empty policy if the resource exists and does not have a policy set.
       *
       * @alias dataproc.projects.clusters.getIamPolicy
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resource_ - REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      getIamPolicy: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/{resource}:getIamPolicy',
            method: 'GET'
          },
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.clusters.testIamPermissions
       *
       * @desc Returns permissions that a caller has on the specified resource.
       *
       * @alias dataproc.projects.clusters.testIamPermissions
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resource_ - REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      testIamPermissions: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/{resource}:testIamPermissions',
            method: 'POST'
          },
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    jobs: {

      /**
       * dataproc.projects.jobs.submit
       *
       * @desc Submits a job to a cluster.
       *
       * @alias dataproc.projects.jobs.submit
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the job belongs to.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      submit: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs:submit',
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
       * dataproc.projects.jobs.get
       *
       * @desc Gets the resource representation for a job in a project.
       *
       * @alias dataproc.projects.jobs.get
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the job belongs to.
       * @param  {string} params.jobId - [Required] The job ID.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}',
            method: 'GET'
          },
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
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the job belongs to.
       * @param  {integer=} params.pageSize - [Optional] The number of results to return in each response.
       * @param  {string=} params.pageToken - [Optional] The page token, returned by a previous call, to request the next page of results.
       * @param  {string=} params.clusterName - [Optional] If set, the returned jobs list includes only jobs that were submitted to the named cluster.
       * @param  {string=} params.jobStateMatcher - [Optional] Specifies enumerated categories of jobs to list.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs',
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
       * dataproc.projects.jobs.cancel
       *
       * @desc Starts a job cancellation request. To access the job resource after cancellation, call [jobs.list](/dataproc/reference/rest/v1beta1/projects.jobs/list) or [jobs.get](/dataproc/reference/rest/v1beta1/projects.jobs/get).
       *
       * @alias dataproc.projects.jobs.cancel
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the job belongs to.
       * @param  {string} params.jobId - [Required] The job ID.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      cancel: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}:cancel',
            method: 'POST'
          },
          params: params,
          requiredParams: ['projectId', 'jobId'],
          pathParams: ['projectId', 'jobId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.jobs.delete
       *
       * @desc Deletes the job from the project. If the job is active, the delete fails, and the response returns `FAILED_PRECONDITION`.
       *
       * @alias dataproc.projects.jobs.delete
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project that the job belongs to.
       * @param  {string} params.jobId - [Required] The job ID.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['projectId', 'jobId'],
          pathParams: ['projectId', 'jobId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.jobs.setIamPolicy
       *
       * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
       *
       * @alias dataproc.projects.jobs.setIamPolicy
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resource_ - REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      setIamPolicy: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/{resource}:setIamPolicy',
            method: 'POST'
          },
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.jobs.getIamPolicy
       *
       * @desc Gets the access control policy for a `resource`. Returns an empty policy if the resource exists and does not have a policy set.
       *
       * @alias dataproc.projects.jobs.getIamPolicy
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resource_ - REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      getIamPolicy: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/{resource}:getIamPolicy',
            method: 'GET'
          },
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataproc.projects.jobs.testIamPermissions
       *
       * @desc Returns permissions that a caller has on the specified resource.
       *
       * @alias dataproc.projects.jobs.testIamPermissions
       * @memberOf! dataproc(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resource_ - REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      testIamPermissions: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1beta1/{resource}:testIamPermissions',
            method: 'POST'
          },
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.operations = {

    /**
     * dataproc.operations.get
     *
     * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias dataproc.operations.get
     * @memberOf! dataproc(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://dataproc.googleapis.com/v1beta1/{name}',
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
     * dataproc.operations.list
     *
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
     *
     * @alias dataproc.operations.list
     * @memberOf! dataproc(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation collection.
     * @param  {string=} params.filter - The standard list filter.
     * @param  {integer=} params.pageSize - The standard list page size.
     * @param  {string=} params.pageToken - The standard list page token.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://dataproc.googleapis.com/v1beta1/{name}',
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
     * dataproc.operations.cancel
     *
     * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use [operations.get](/dataproc/reference/rest/v1beta1/operations/get) or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation.
     *
     * @alias dataproc.operations.cancel
     * @memberOf! dataproc(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource to be cancelled.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://dataproc.googleapis.com/v1beta1/{name}:cancel',
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
     * dataproc.operations.delete
     *
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @alias dataproc.operations.delete
     * @memberOf! dataproc(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://dataproc.googleapis.com/v1beta1/{name}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Dataproc object
 * @type Dataproc
 */
module.exports = Dataproc;