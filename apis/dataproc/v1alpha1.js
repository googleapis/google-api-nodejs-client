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
 * @version  v1alpha1
 * @variation v1alpha1
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
       * @desc Request to create a cluster in a project.
       *
       * @alias dataproc.projects.clusters.create
       * @memberOf! dataproc(v1alpha1)
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
            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters',
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
       * @desc Request to update a cluster in a project.
       *
       * @alias dataproc.projects.clusters.patch
       * @memberOf! dataproc(v1alpha1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - [Required] The ID of the Google Cloud Platform project the cluster belongs to.
       * @param  {string} params.clusterName - [Required] The cluster name.
       * @param  {string=} params.updateMask - [Required] Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as "configuration.worker_configuration.num_instances," and the PATCH request body would specify the new value, as follows: { "configuration":{ "workerConfiguration":{ "numInstances":"5" } } } Note: Currently, configuration.worker_configuration.num_instances is the only field that can be updated.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterName}',
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
       * @desc Request to delete a cluster in a project.
       *
       * @alias dataproc.projects.clusters.delete
       * @memberOf! dataproc(v1alpha1)
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
            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterName}',
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
       * @desc Request to get the resource representation for a cluster in a project.
       *
       * @alias dataproc.projects.clusters.get
       * @memberOf! dataproc(v1alpha1)
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
            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterName}',
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
       * @desc Request a list of all clusters in a project.
       *
       * @alias dataproc.projects.clusters.list
       * @memberOf! dataproc(v1alpha1)
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
            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      agents: {

        /**
         * dataproc.projects.clusters.agents.create
         *
         * @desc Add a new agent to Dataproc's view of a cluster. This is the first Dataproc method that an agent should invoke after starting. If an agent has already been created with the given agent_id within the same cluster, this method will return a Conflict status code and the agent is expected to call GetAgent to retrieve the last registration and subsequently call UpdateAgent, if required.
         *
         * @alias dataproc.projects.clusters.agents.create
         * @memberOf! dataproc(v1alpha1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - Project ID that this agent is associated with
         * @param  {string} params.clusterUuid - Cluster that this agent is associated with
         * @param  {string} params.agentId - [Required] Agent ID being registered.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterUuid}/agents/{agentId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['projectId', 'clusterUuid', 'agentId'],
            pathParams: ['projectId', 'clusterUuid', 'agentId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.clusters.agents.update
         *
         * @desc Update Dataproc's view of an agent. This is currently used to provide a is_healthy bit, but is expected to be extended to include daemon information and VM metrics for inclusion in cloud metrics.
         *
         * @alias dataproc.projects.clusters.agents.update
         * @memberOf! dataproc(v1alpha1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The agent's project.
         * @param  {string} params.clusterUuid - The cluster on which the agent is running.
         * @param  {string} params.agentId - [Required] ID of agent sending the update.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterUuid}/agents/{agentId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['projectId', 'clusterUuid', 'agentId'],
            pathParams: ['projectId', 'clusterUuid', 'agentId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.clusters.agents.get
         *
         * @desc Retrieve an agent.
         *
         * @alias dataproc.projects.clusters.agents.get
         * @memberOf! dataproc(v1alpha1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The agent's project ID.
         * @param  {string} params.clusterUuid - The agent's cluster.
         * @param  {string} params.agentId - The agent's ID.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterUuid}/agents/{agentId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'clusterUuid', 'agentId'],
            pathParams: ['projectId', 'clusterUuid', 'agentId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.clusters.agents.list
         *
         * @desc List all agents Dataproc is aware of within a cluster.
         *
         * @alias dataproc.projects.clusters.agents.list
         * @memberOf! dataproc(v1alpha1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The project from which to list agents.
         * @param  {string} params.clusterUuid - The cluster from which to list agents.
         * @param  {integer=} params.pageSize - Requested page size for listing.
         * @param  {string=} params.pageToken - Page continuation token.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterUuid}/agents',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'clusterUuid'],
            pathParams: ['projectId', 'clusterUuid'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.clusters.agents.delete
         *
         * @desc Delete an agent from Dataproc's view of a cluster. Deleting an agent is not required, but could be used in a shutdown sequence to indicate to Dataproc that the agent is to be considered dead and all agent-owned resources and tasks are free to be re-distributed.
         *
         * @alias dataproc.projects.clusters.agents.delete
         * @memberOf! dataproc(v1alpha1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The agent's project.
         * @param  {string} params.clusterUuid - The agent's cluster.
         * @param  {string} params.agentId - The agent.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterUuid}/agents/{agentId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['projectId', 'clusterUuid', 'agentId'],
            pathParams: ['projectId', 'clusterUuid', 'agentId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      tasks: {

        /**
         * dataproc.projects.clusters.tasks.lease
         *
         * @desc Obtain a lease on one or more tasks. Any given task may be in any state and each agent is expected to start any non-started tasks and to monitor any YarnApplications spawned by any already running tasks. It's expected that monitoring previously launched tasks will be more prevalent when drivers are run entirely within YARN containers. While there's a single lease expiration time, in the event of multiple tasks being leased to the agent in a single call, each task has a unique lease and status must be reported before the lease times out or the task can be considered orphaned. The service will determine how many tasks to lease to agents in a single call.
         *
         * @alias dataproc.projects.clusters.tasks.lease
         * @memberOf! dataproc(v1alpha1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The project id of the agent.
         * @param  {string} params.clusterUuid - The cluster id of the agent.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        lease: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterUuid}/tasks:lease',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'clusterUuid'],
            pathParams: ['projectId', 'clusterUuid'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.clusters.tasks.report
         *
         * @desc Report status for a task and extend the lease provided for the task.
         *
         * @alias dataproc.projects.clusters.tasks.report
         * @memberOf! dataproc(v1alpha1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The project id of the agent.
         * @param  {string} params.clusterUuid - The cluster id of the agent.
         * @param  {string} params.taskId - The task that is being reported on.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        report: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/clusters/{clusterUuid}/tasks/{taskId}:report',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'clusterUuid', 'taskId'],
            pathParams: ['projectId', 'clusterUuid', 'taskId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    jobs: {

      /**
       * dataproc.projects.jobs.submit
       *
       * @desc Submits a job to a cluster.
       *
       * @alias dataproc.projects.jobs.submit
       * @memberOf! dataproc(v1alpha1)
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
            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/jobs:submit',
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
       * @memberOf! dataproc(v1alpha1)
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
            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/jobs/{jobId}',
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
       * dataproc.projects.jobs.cancel
       *
       * @desc Starts a job cancellation request. To access the job resource after cancellation, call jobs:list or jobs:get.
       *
       * @alias dataproc.projects.jobs.cancel
       * @memberOf! dataproc(v1alpha1)
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
            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/jobs/{jobId}:cancel',
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
       * @memberOf! dataproc(v1alpha1)
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
            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/jobs/{jobId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['projectId', 'jobId'],
          pathParams: ['projectId', 'jobId'],
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
     * @desc Gets the latest state of a long-running operation. Clients may use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias dataproc.operations.get
     * @memberOf! dataproc(v1alpha1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The operation resource name.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://dataproc.googleapis.com/v1alpha1/{name}',
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
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @alias dataproc.operations.list
     * @memberOf! dataproc(v1alpha1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The operation collection name.
     * @param  {string=} params.filter - [Required] A JSON object that contains filters for the list operation, in the format {"key1":"value1","key2":"value2", ..., }. Possible keys include project_id, cluster_name, and operation_state_matcher. If project_id is set, requests the list of operations that belong to the specified Google Cloud Platform project ID. This key is required. If cluster_name is set, requests the list of operations that were submitted to the specified cluster name. This key is optional. If operation_state_matcher is set, requests the list of operations that match one of the following status options: ALL, ACTIVE, or NON_ACTIVE.
     * @param  {integer=} params.pageSize - The standard List page size.
     * @param  {string=} params.pageToken - The standard List page token.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://dataproc.googleapis.com/v1alpha1/{name}',
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
     * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients may use [Operations.GetOperation] or other methods to check whether the cancellation succeeded or the operation completed despite cancellation.
     *
     * @alias dataproc.operations.cancel
     * @memberOf! dataproc(v1alpha1)
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
          url: 'https://dataproc.googleapis.com/v1alpha1/{name}:cancel',
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
     * @desc Deletes a long-running operation. It indicates the client is no longer interested in the operation result. It does not cancel the operation.
     *
     * @alias dataproc.operations.delete
     * @memberOf! dataproc(v1alpha1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://dataproc.googleapis.com/v1alpha1/{name}',
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