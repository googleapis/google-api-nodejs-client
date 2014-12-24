/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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
 *
 *
 * @classdesc Google Dataflow API.
 * @namespace dataflow
 * @version  v1beta3
 * @variation v1beta3
 * @this Dataflow
 * @param {object=} options Options for Dataflow
 */
function Dataflow(options) {

  var self = this;
  this._options = options || {};

  this.v1b3 = {

    projects: {

      jobs: {

        /**
         * dataflow.v1b3.projects.jobs.create
         *
         * @desc Creates a dataflow job.
         *
         * @alias dataflow.v1b3.projects.jobs.create
         * @memberOf! dataflow(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId -
         * @param  {string=} params.view -
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/dataflow/v1b3/projects/{projectId}/jobs',
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
         * dataflow.v1b3.projects.jobs.get
         *
         * @desc Gets the state of the specified dataflow job.
         *
         * @alias dataflow.v1b3.projects.jobs.get
         * @memberOf! dataflow(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.jobId -
         * @param  {string} params.projectId -
         * @param  {string=} params.view -
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/dataflow/v1b3/projects/{projectId}/jobs/{jobId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'jobId'],
            pathParams: ['jobId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataflow.v1b3.projects.jobs.getMetrics
         *
         * @desc Request the job status.
         *
         * @alias dataflow.v1b3.projects.jobs.getMetrics
         * @memberOf! dataflow(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.jobId -
         * @param  {string} params.projectId -
         * @param  {string=} params.startTime -
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        getMetrics: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/dataflow/v1b3/projects/{projectId}/jobs/{jobId}/metrics',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'jobId'],
            pathParams: ['jobId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataflow.v1b3.projects.jobs.list
         *
         * @desc List the jobs of a project
         *
         * @alias dataflow.v1b3.projects.jobs.list
         * @memberOf! dataflow(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {integer=} params.pageSize -
         * @param  {string=} params.pageToken -
         * @param  {string} params.projectId -
         * @param  {string=} params.view -
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/dataflow/v1b3/projects/{projectId}/jobs',
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
         * dataflow.v1b3.projects.jobs.patch
         *
         * @desc Updates the state of an existing dataflow job. This method supports patch semantics.
         *
         * @alias dataflow.v1b3.projects.jobs.patch
         * @memberOf! dataflow(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.jobId -
         * @param  {string} params.projectId -
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        patch: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/dataflow/v1b3/projects/{projectId}/jobs/{jobId}',
              method: 'PATCH'
            },
            params: params,
            requiredParams: ['projectId', 'jobId'],
            pathParams: ['jobId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataflow.v1b3.projects.jobs.update
         *
         * @desc Updates the state of an existing dataflow job.
         *
         * @alias dataflow.v1b3.projects.jobs.update
         * @memberOf! dataflow(v1beta3)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.jobId -
         * @param  {string} params.projectId -
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        update: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/dataflow/v1b3/projects/{projectId}/jobs/{jobId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['projectId', 'jobId'],
            pathParams: ['jobId', 'projectId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        messages: {

          /**
           * dataflow.v1b3.projects.jobs.messages.list
           *
           * @desc Request the job status.
           *
           * @alias dataflow.v1b3.projects.jobs.messages.list
           * @memberOf! dataflow(v1beta3)
           *
           * @param  {object} params - Parameters for request
           * @param  {string=} params.endTime -
           * @param  {string} params.jobId -
           * @param  {string=} params.minimumImportance -
           * @param  {integer=} params.pageSize -
           * @param  {string=} params.pageToken -
           * @param  {string} params.projectId -
           * @param  {string=} params.startTime -
           * @param  {callback} callback - The callback that handles the response.
           * @return {object} Request object
           */
          list: function(params, callback) {
            var parameters = {
              options: {
                url: 'https://www.googleapis.com/dataflow/v1b3/projects/{projectId}/jobs/{jobId}/messages',
                method: 'GET'
              },
              params: params,
              requiredParams: ['projectId', 'jobId'],
              pathParams: ['jobId', 'projectId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        },

        workItems: {

          /**
           * dataflow.v1b3.projects.jobs.workItems.lease
           *
           * @desc Leases a dataflow WorkItem to run.
           *
           * @alias dataflow.v1b3.projects.jobs.workItems.lease
           * @memberOf! dataflow(v1beta3)
           *
           * @param  {object} params - Parameters for request
           * @param  {string} params.jobId -
           * @param  {string} params.projectId -
           * @param  {object} params.resource - Request body data
           * @param  {callback} callback - The callback that handles the response.
           * @return {object} Request object
           */
          lease: function(params, callback) {
            var parameters = {
              options: {
                url: 'https://www.googleapis.com/dataflow/v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease',
                method: 'POST'
              },
              params: params,
              requiredParams: ['projectId', 'jobId'],
              pathParams: ['jobId', 'projectId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * dataflow.v1b3.projects.jobs.workItems.reportStatus
           *
           * @desc Reports the status of dataflow WorkItems leased by a worker.
           *
           * @alias dataflow.v1b3.projects.jobs.workItems.reportStatus
           * @memberOf! dataflow(v1beta3)
           *
           * @param  {object} params - Parameters for request
           * @param  {string} params.jobId -
           * @param  {string} params.projectId -
           * @param  {object} params.resource - Request body data
           * @param  {callback} callback - The callback that handles the response.
           * @return {object} Request object
           */
          reportStatus: function(params, callback) {
            var parameters = {
              options: {
                url: 'https://www.googleapis.com/dataflow/v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus',
                method: 'POST'
              },
              params: params,
              requiredParams: ['projectId', 'jobId'],
              pathParams: ['jobId', 'projectId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      }
    }
  };
}

/**
 * Exports Dataflow object
 * @type Dataflow
 */
module.exports = Dataflow;