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
 * Deployment Manager API
 *
 * @classdesc The Deployment Manager API allows users to declaratively configure, deploy and run complex solutions on the Google Cloud Platform.
 * @namespace manager
 * @version  v1beta2
 * @variation v1beta2
 * @this Manager
 * @param {object=} options Options for Manager
 */
function Manager(options) {

  var self = this;
  this._options = options || {};

  this.deployments = {

    /**
     * manager.deployments.delete
     *
     *
     *
     * @alias manager.deployments.delete
     * @memberOf! manager(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deploymentName -
     * @param  {string} params.projectId -
     * @param  {string} params.region -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/manager/v1beta2/projects/{projectId}/regions/{region}/deployments/{deploymentName}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['projectId', 'region', 'deploymentName'],
        pathParams: ['deploymentName', 'projectId', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * manager.deployments.get
     *
     *
     *
     * @alias manager.deployments.get
     * @memberOf! manager(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deploymentName -
     * @param  {string} params.projectId -
     * @param  {string} params.region -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/manager/v1beta2/projects/{projectId}/regions/{region}/deployments/{deploymentName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId', 'region', 'deploymentName'],
        pathParams: ['deploymentName', 'projectId', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * manager.deployments.insert
     *
     *
     *
     * @alias manager.deployments.insert
     * @memberOf! manager(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId -
     * @param  {string} params.region -
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/manager/v1beta2/projects/{projectId}/regions/{region}/deployments',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId', 'region'],
        pathParams: ['projectId', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * manager.deployments.list
     *
     *
     *
     * @alias manager.deployments.list
     * @memberOf! manager(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectId -
     * @param  {string} params.region -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/manager/v1beta2/projects/{projectId}/regions/{region}/deployments',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId', 'region'],
        pathParams: ['projectId', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.templates = {

    /**
     * manager.templates.delete
     *
     *
     *
     * @alias manager.templates.delete
     * @memberOf! manager(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId -
     * @param  {string} params.templateName -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/manager/v1beta2/projects/{projectId}/templates/{templateName}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['projectId', 'templateName'],
        pathParams: ['projectId', 'templateName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * manager.templates.get
     *
     *
     *
     * @alias manager.templates.get
     * @memberOf! manager(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId -
     * @param  {string} params.templateName -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/manager/v1beta2/projects/{projectId}/templates/{templateName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId', 'templateName'],
        pathParams: ['projectId', 'templateName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * manager.templates.insert
     *
     *
     *
     * @alias manager.templates.insert
     * @memberOf! manager(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId -
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/manager/v1beta2/projects/{projectId}/templates',
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
     * manager.templates.list
     *
     *
     *
     * @alias manager.templates.list
     * @memberOf! manager(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectId -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/manager/v1beta2/projects/{projectId}/templates',
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
}

/**
 * Exports Manager object
 * @type Manager
 */
module.exports = Manager;