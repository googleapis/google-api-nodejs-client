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
 * Google Storage Transfer API
 *
 * @classdesc Transfers data from external data sources to a Google Cloud Storage bucket or between Google Cloud Storage buckets.
 * @namespace storagetransfer
 * @version  v1
 * @variation v1
 * @this Storagetransfer
 * @param {object=} options Options for Storagetransfer
 */
function Storagetransfer(options) {

  var self = this;
  this._options = options || {};

  this.googleServiceAccounts = {

    /**
     * storagetransfer.googleServiceAccounts.get
     *
     * @desc Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Developers Console project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.
     *
     * @alias storagetransfer.googleServiceAccounts.get
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - The ID of the Google Developers Console project that the Google service account is associated with. Required.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/googleServiceAccounts/{projectId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.v1 = {

    /**
     * storagetransfer.getGoogleServiceAccount
     *
     * @desc Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Developers Console project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.
     *
     * @alias storagetransfer.getGoogleServiceAccount
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.projectId - The ID of the Google Developers Console project that the Google service account is associated with. Required.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getGoogleServiceAccount: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1:getGoogleServiceAccount',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.transferJobs = {

    /**
     * storagetransfer.transferJobs.create
     *
     * @desc Creates a transfer job that runs periodically.
     *
     * @alias storagetransfer.transferJobs.create
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/transferJobs',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storagetransfer.transferJobs.patch
     *
     * @desc Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. Updating the scheduling of a job is not allowed.
     *
     * @alias storagetransfer.transferJobs.patch
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobName - The name of job to update. Required.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/{jobName}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['jobName'],
        pathParams: ['jobName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storagetransfer.transferJobs.get
     *
     * @desc Gets a transfer job.
     *
     * @alias storagetransfer.transferJobs.get
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobName - The job to get. Required.
     * @param  {string=} params.projectId - The ID of the Google Developers Console project that owns the job. Required.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/{jobName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['jobName'],
        pathParams: ['jobName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storagetransfer.transferJobs.list
     *
     * @desc Lists transfer jobs.
     *
     * @alias storagetransfer.transferJobs.list
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.filter - A list of query parameters specified as JSON text in the form of {"`project_id`":"my_project_id", "`job_names`":["jobid1","jobid2",...], "`job_statuses`":["status1","status2",...]}. Since `job_names` and `job_statuses` support multiple values, their values must be specified with array notation. `project_id` is required. `job_names` and `job_statuses` are optional. The valid values for `job_statuses` are case-insensitive: `ENABLED`, `DISABLED`, and `DELETED`.
     * @param  {integer=} params.pageSize - The list page size. The max allowed value is 256.
     * @param  {string=} params.pageToken - The list page token.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/transferJobs',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.transferOperations = {

    /**
     * storagetransfer.transferOperations.pause
     *
     * @desc Pauses a transfer operation.
     *
     * @alias storagetransfer.transferOperations.pause
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the transfer operation. Required.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    pause: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/{name}:pause',
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
     * storagetransfer.transferOperations.resume
     *
     * @desc Resumes a transfer operation that is paused.
     *
     * @alias storagetransfer.transferOperations.resume
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the transfer operation. Required.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    resume: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/{name}:resume',
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
     * storagetransfer.transferOperations.get
     *
     * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias storagetransfer.transferOperations.get
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/{name}',
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
     * storagetransfer.transferOperations.list
     *
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
     *
     * @alias storagetransfer.transferOperations.list
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The value `transferOperations`.
     * @param  {string=} params.filter - The standard list filter.
     * @param  {integer=} params.pageSize - The standard list page size.
     * @param  {string=} params.pageToken - The standard list page token.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/{name}',
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
     * storagetransfer.transferOperations.cancel
     *
     * @desc Cancels a transfer. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.
     *
     * @alias storagetransfer.transferOperations.cancel
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource to be cancelled.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/{name}:cancel',
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
     * storagetransfer.transferOperations.delete
     *
     * @desc This method is not supported and the server returns `UNIMPLEMENTED`.
     *
     * @alias storagetransfer.transferOperations.delete
     * @memberOf! storagetransfer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://storagetransfer.googleapis.com/v1/{name}',
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
 * Exports Storagetransfer object
 * @type Storagetransfer
 */
module.exports = Storagetransfer;