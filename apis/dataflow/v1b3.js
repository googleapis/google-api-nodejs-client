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
 * Google Dataflow API
 *
 * Develops and executes data processing patterns like ETL, batch computation, and continuous computation.
 *
 * @example
 * var google = require('googleapis');
 * var dataflow = google.dataflow('v1b3');
 *
 * @namespace dataflow
 * @type {Function}
 * @version v1b3
 * @variation v1b3
 * @param {object=} options Options for Dataflow
 */
function Dataflow(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    /**
     * dataflow.projects.workerMessages
     *
     * @desc Send a worker_message to the service.
     *
     * @alias dataflow.projects.workerMessages
     * @memberOf! dataflow(v1b3)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The project to send the WorkerMessages to.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    workerMessages: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/WorkerMessages',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    jobs: {

      /**
       * dataflow.projects.jobs.create
       *
       * @desc Creates a dataflow job.
       *
       * @alias dataflow.projects.jobs.create
       * @memberOf! dataflow(v1b3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId The project which owns the job.
       * @param {string=} params.view Level of information requested in response.
       * @param {string=} params.replaceJobId DEPRECATED. This field is now on the Job message.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs',
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
       * dataflow.projects.jobs.get
       *
       * @desc Gets the state of the specified dataflow job.
       *
       * @alias dataflow.projects.jobs.get
       * @memberOf! dataflow(v1b3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId The project which owns the job.
       * @param {string} params.jobId Identifies a single job.
       * @param {string=} params.view Level of information requested in response.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs/{jobId}',
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
       * dataflow.projects.jobs.update
       *
       * @desc Updates the state of an existing dataflow job.
       *
       * @alias dataflow.projects.jobs.update
       * @memberOf! dataflow(v1b3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId The project which owns the job.
       * @param {string} params.jobId Identifies a single job.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs/{jobId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['projectId', 'jobId'],
          pathParams: ['projectId', 'jobId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dataflow.projects.jobs.list
       *
       * @desc List the jobs of a project
       *
       * @alias dataflow.projects.jobs.list
       * @memberOf! dataflow(v1b3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId The project which owns the jobs.
       * @param {string=} params.filter The kind of filter to use.
       * @param {string=} params.view Level of information requested in response. Default is SUMMARY.
       * @param {integer=} params.pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
       * @param {string=} params.pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs',
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
       * dataflow.projects.jobs.getMetrics
       *
       * @desc Request the job status.
       *
       * @alias dataflow.projects.jobs.getMetrics
       * @memberOf! dataflow(v1b3)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId A project id.
       * @param {string} params.jobId The job to get messages for.
       * @param {string=} params.startTime Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getMetrics: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs/{jobId}/metrics',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId', 'jobId'],
          pathParams: ['projectId', 'jobId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      messages: {

        /**
         * dataflow.projects.jobs.messages.list
         *
         * @desc Request the job status.
         *
         * @alias dataflow.projects.jobs.messages.list
         * @memberOf! dataflow(v1b3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId A project id.
         * @param {string} params.jobId The job to get messages about.
         * @param {string=} params.minimumImportance Filter to only get messages with importance >= level
         * @param {integer=} params.pageSize If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
         * @param {string=} params.pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
         * @param {string=} params.startTime If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
         * @param {string=} params.endTime Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs/{jobId}/messages',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'jobId'],
            pathParams: ['projectId', 'jobId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      workItems: {

        /**
         * dataflow.projects.jobs.workItems.reportStatus
         *
         * @desc Reports the status of dataflow WorkItems leased by a worker.
         *
         * @alias dataflow.projects.jobs.workItems.reportStatus
         * @memberOf! dataflow(v1b3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The project which owns the WorkItem's job.
         * @param {string} params.jobId The job which the WorkItem is part of.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reportStatus: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus',
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
         * dataflow.projects.jobs.workItems.lease
         *
         * @desc Leases a dataflow WorkItem to run.
         *
         * @alias dataflow.projects.jobs.workItems.lease
         * @memberOf! dataflow(v1b3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId Identifies the project this worker belongs to.
         * @param {string} params.jobId Identifies the workflow job this worker belongs to.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        lease: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'jobId'],
            pathParams: ['projectId', 'jobId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

module.exports = Dataflow;
