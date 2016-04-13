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
 * Genomics API
 *
 * @classdesc Stores, processes, explores and shares genomic data. This API implements the Global Alliance for Genomics and Health (GA4GH) v0.5.1 API as well as several extensions.
 * @namespace genomics
 * @version  v1alpha2
 * @variation v1alpha2
 * @this Genomics
 * @param {object=} options Options for Genomics
 */
function Genomics(options) {

  var self = this;
  this._options = options || {};

  this.operations = {

    /**
     * genomics.operations.get
     *
     * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias genomics.operations.get
     * @memberOf! genomics(v1alpha2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1alpha2/{name}',
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
     * genomics.operations.list
     *
     * @desc Lists operations that match the specified filter in the request.
     *
     * @alias genomics.operations.list
     * @memberOf! genomics(v1alpha2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation collection.
     * @param  {string=} params.filter - A string for filtering Operations. The following filter fields are supported: * projectId: Required. Corresponds to OperationMetadata.projectId. * createTime: The time this job was created, in seconds from the [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING`
     * @param  {integer=} params.pageSize - The maximum number of results to return. If unspecified, defaults to 256. The maximum value is 2048.
     * @param  {string=} params.pageToken - The standard list page token.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1alpha2/{name}',
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
     * genomics.operations.cancel
     *
     * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.
     *
     * @alias genomics.operations.cancel
     * @memberOf! genomics(v1alpha2)
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
          url: 'https://genomics.googleapis.com/v1alpha2/{name}:cancel',
          method: 'POST'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.pipelines = {

    /**
     * genomics.pipelines.create
     *
     * @desc Creates a pipeline that can be run later. Create takes a Pipeline that has all fields other than `pipelineId` populated, and then returns the same pipeline with `pipelineId` populated. This id can be used to run the pipeline. Caller must have WRITE permission to the project.
     *
     * @alias genomics.pipelines.create
     * @memberOf! genomics(v1alpha2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1alpha2/pipelines',
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
     * genomics.pipelines.run
     *
     * @desc Runs a pipeline. If `pipelineId` is specified in the request, then run a saved pipeline. If `ephemeralPipeline` is specified, then run that pipeline once without saving a copy. The caller must have READ permission to the project where the pipeline is stored and WRITE permission to the project where the pipeline will be run, as VMs will be created and storage will be used.
     *
     * @alias genomics.pipelines.run
     * @memberOf! genomics(v1alpha2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    run: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1alpha2/pipelines:run',
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
     * genomics.pipelines.get
     *
     * @desc Retrieves a pipeline based on ID. Caller must have READ permission to the project.
     *
     * @alias genomics.pipelines.get
     * @memberOf! genomics(v1alpha2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.pipelineId - Caller must have READ access to the project in which this pipeline is defined.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1alpha2/pipelines/{pipelineId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['pipelineId'],
        pathParams: ['pipelineId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.pipelines.list
     *
     * @desc Lists pipelines. Caller must have READ permission to the project.
     *
     * @alias genomics.pipelines.list
     * @memberOf! genomics(v1alpha2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.projectId - Required. The name of the project to search for pipelines. Caller must have READ access to this project.
     * @param  {string=} params.namePrefix - Pipelines with names that match this prefix should be returned. If unspecified, all pipelines in the project, up to `pageSize`, will be returned.
     * @param  {integer=} params.pageSize - Number of pipelines to return at once. Defaults to 256, and max is 2048.
     * @param  {string=} params.pageToken - Token to use to indicate where to start getting results. If unspecified, returns the first page of results.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1alpha2/pipelines',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.pipelines.delete
     *
     * @desc Deletes a pipeline based on ID. Caller must have WRITE permission to the project.
     *
     * @alias genomics.pipelines.delete
     * @memberOf! genomics(v1alpha2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.pipelineId - Caller must have WRITE access to the project in which this pipeline is defined.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1alpha2/pipelines/{pipelineId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['pipelineId'],
        pathParams: ['pipelineId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.pipelines.getControllerConfig
     *
     * @desc Gets controller configuration information. Should only be called by VMs created by the Pipelines Service and not by end users.
     *
     * @alias genomics.pipelines.getControllerConfig
     * @memberOf! genomics(v1alpha2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.operationId - The operation to retrieve controller configuration for.
     * @param  {string=} params.validationToken - 
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getControllerConfig: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1alpha2/pipelines:getControllerConfig',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.pipelines.setOperationStatus
     *
     * @desc Sets status of a given operation. All timestamps are sent on each call, and the whole series of events is replaced, in case intermediate calls are lost. Should only be called by VMs created by the Pipelines Service and not by end users.
     *
     * @alias genomics.pipelines.setOperationStatus
     * @memberOf! genomics(v1alpha2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setOperationStatus: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1alpha2/pipelines:setOperationStatus',
          method: 'PUT'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Genomics object
 * @type Genomics
 */
module.exports = Genomics;