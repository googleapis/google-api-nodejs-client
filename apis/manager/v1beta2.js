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

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'region', 'deploymentName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/manager/v1beta2/projects/' + params.projectId + '/regions/' + params.region + '/deployments/' + params.deploymentName,
        method: 'DELETE'
      };

      delete params.deploymentName;
      delete params.projectId;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'region', 'deploymentName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/manager/v1beta2/projects/' + params.projectId + '/regions/' + params.region + '/deployments/' + params.deploymentName,
        method: 'GET'
      };

      delete params.deploymentName;
      delete params.projectId;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/manager/v1beta2/projects/' + params.projectId + '/regions/' + params.region + '/deployments',
        method: 'POST'
      };

      delete params.projectId;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/manager/v1beta2/projects/' + params.projectId + '/regions/' + params.region + '/deployments',
        method: 'GET'
      };

      delete params.projectId;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'templateName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/manager/v1beta2/projects/' + params.projectId + '/templates/' + params.templateName,
        method: 'DELETE'
      };

      delete params.projectId;
      delete params.templateName;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId', 'templateName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/manager/v1beta2/projects/' + params.projectId + '/templates/' + params.templateName,
        method: 'GET'
      };

      delete params.projectId;
      delete params.templateName;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/manager/v1beta2/projects/' + params.projectId + '/templates',
        method: 'POST'
      };

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/manager/v1beta2/projects/' + params.projectId + '/templates',
        method: 'GET'
      };

      delete params.projectId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Manager object
 * @type Manager
 */
module.exports = Manager;