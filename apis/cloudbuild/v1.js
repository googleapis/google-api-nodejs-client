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
 * Google Cloud Container Builder API
 *
 * @classdesc Builds container images in the cloud.
 * @namespace cloudbuild
 * @version  v1
 * @variation v1
 * @this Cloudbuild
 * @param {object=} options Options for Cloudbuild
 */
function Cloudbuild(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    builds: {

      /**
       * cloudbuild.projects.builds.get
       *
       * @desc Returns information about a previously requested build.  The Build that is returned includes its status (e.g., success or failure, or in-progress), and timing information.
       *
       * @alias cloudbuild.projects.builds.get
       * @memberOf! cloudbuild(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - ID of the build.
       * @param  {string} params.projectId - ID of the project.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://cloudbuild.googleapis.com/v1/projects/{projectId}/builds/{id}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId', 'id'],
          pathParams: ['id', 'projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * cloudbuild.projects.builds.create
       *
       * @desc Starts a build with the specified configuration.  The long-running Operation returned by this method will include the ID of the build, which can be passed to GetBuild to determine its status (e.g., success or failure).
       *
       * @alias cloudbuild.projects.builds.create
       * @memberOf! cloudbuild(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - ID of the project.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://cloudbuild.googleapis.com/v1/projects/{projectId}/builds',
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
       * cloudbuild.projects.builds.list
       *
       * @desc Lists previously requested builds.  Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
       *
       * @alias cloudbuild.projects.builds.list
       * @memberOf! cloudbuild(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer=} params.pageSize - Number of results to return in the list.
       * @param  {string=} params.pageToken - Token to provide to skip to a particular spot in the list.
       * @param  {string} params.projectId - ID of the project.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://cloudbuild.googleapis.com/v1/projects/{projectId}/builds',
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
       * cloudbuild.projects.builds.cancel
       *
       * @desc Cancels a requested build in progress.
       *
       * @alias cloudbuild.projects.builds.cancel
       * @memberOf! cloudbuild(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - ID of the build.
       * @param  {string} params.projectId - ID of the project.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      cancel: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://cloudbuild.googleapis.com/v1/projects/{projectId}/builds/{id}:cancel',
            method: 'POST'
          },
          params: params,
          requiredParams: ['projectId', 'id'],
          pathParams: ['id', 'projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.operations = {

    /**
     * cloudbuild.operations.get
     *
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias cloudbuild.operations.get
     * @memberOf! cloudbuild(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.name - The name of the operation resource.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudbuild.googleapis.com/v1/{name}',
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
     * cloudbuild.operations.list
     *
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
     *
     * @alias cloudbuild.operations.list
     * @memberOf! cloudbuild(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.pageSize - The standard list page size.
     * @param  {string=} params.filter - The standard list filter.
     * @param  {string=} params.pageToken - The standard list page token.
     * @param  {string} params.name - The name of the operation collection.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudbuild.googleapis.com/v1/{name}',
          method: 'GET'
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
 * Exports Cloudbuild object
 * @type Cloudbuild
 */
module.exports = Cloudbuild;