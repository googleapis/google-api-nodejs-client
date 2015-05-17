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
 * Google Cloud Deployment Manager API V2
 *
 * @classdesc The Deployment Manager API allows users to declaratively configure, deploy and run complex solutions on the Google Cloud Platform.
 * @namespace deploymentmanager
 * @version  v2beta2
 * @variation v2beta2
 * @this Deploymentmanager
 * @param {object=} options Options for Deploymentmanager
 */
function Deploymentmanager(options) {

  var self = this;
  this._options = options || {};

  this.deployments = {

    /**
     * deploymentmanager.deployments.delete
     *
     * @desc Deletes a deployment and all of the resources in the deployment.
     *
     * @alias deploymentmanager.deployments.delete
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deployment - The name of the deployment for this request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments/{deployment}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.get
     *
     * @desc Gets information about a specific deployment.
     *
     * @alias deploymentmanager.deployments.get
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deployment - The name of the deployment for this request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments/{deployment}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.insert
     *
     * @desc Creates a deployment and all of the resources described by the deployment manifest.
     *
     * @alias deploymentmanager.deployments.insert
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project ID for this request.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.list
     *
     * @desc Lists all deployments for a given project.
     *
     * @alias deploymentmanager.deployments.list
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.patch
     *
     * @desc Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.
     *
     * @alias deploymentmanager.deployments.patch
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.createPolicy -
     * @param  {string=} params.deletePolicy -
     * @param  {string} params.deployment - The name of the deployment for this request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {string=} params.updatePolicy -
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments/{deployment}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.update
     *
     * @desc Updates a deployment and all of the resources described by the deployment manifest.
     *
     * @alias deploymentmanager.deployments.update
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.createPolicy -
     * @param  {string=} params.deletePolicy -
     * @param  {string} params.deployment - The name of the deployment for this request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {string=} params.updatePolicy -
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments/{deployment}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.manifests = {

    /**
     * deploymentmanager.manifests.get
     *
     * @desc Gets information about a specific manifest.
     *
     * @alias deploymentmanager.manifests.get
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deployment - The name of the deployment for this request.
     * @param  {string} params.manifest - The name of the manifest for this request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments/{deployment}/manifests/{manifest}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'deployment', 'manifest'],
        pathParams: ['deployment', 'manifest', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.manifests.list
     *
     * @desc Lists all manifests for a given deployment.
     *
     * @alias deploymentmanager.manifests.list
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deployment - The name of the deployment for this request.
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments/{deployment}/manifests',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.operations = {

    /**
     * deploymentmanager.operations.get
     *
     * @desc Gets information about a specific Operation.
     *
     * @alias deploymentmanager.operations.get
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - The name of the operation for this request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.operations.list
     *
     * @desc Lists all Operations for a project.
     *
     * @alias deploymentmanager.operations.list
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.resources = {

    /**
     * deploymentmanager.resources.get
     *
     * @desc Gets information about a single resource.
     *
     * @alias deploymentmanager.resources.get
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deployment - The name of the deployment for this request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {string} params.resource - The name of the resource for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments/{deployment}/resources/{resource}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'deployment', 'resource'],
        pathParams: ['deployment', 'project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.resources.list
     *
     * @desc Lists all resources in a given deployment.
     *
     * @alias deploymentmanager.resources.list
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deployment - The name of the deployment for this request.
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/deployments/{deployment}/resources',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.types = {

    /**
     * deploymentmanager.types.list
     *
     * @desc Lists all resource types for Deployment Manager.
     *
     * @alias deploymentmanager.types.list
     * @memberOf! deploymentmanager(v2beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - The project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2beta2/projects/{project}/global/types',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Deploymentmanager object
 * @type Deploymentmanager
 */
module.exports = Deploymentmanager;