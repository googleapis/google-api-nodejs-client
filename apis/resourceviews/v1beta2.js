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
 * Google Compute Engine Instance Groups API
 *
 * @classdesc The Resource View API allows users to create and manage logical sets of Google Compute Engine instances.
 * @namespace resourceviews
 * @version  v1beta2
 * @variation v1beta2
 * @this Resourceviews
 * @param {object=} options Options for Resourceviews
 */
function Resourceviews(options) {

  var self = this;
  this._options = options || {};

  this.zoneOperations = {

    /**
     * resourceviews.zoneOperations.get
     *
     * @desc Retrieves the specified zone-specific operation resource.
     *
     * @alias resourceviews.zoneOperations.get
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - Name of the operation resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneOperations.list
     *
     * @desc Retrieves the list of operation resources contained within the specified zone.
     *
     * @alias resourceviews.zoneOperations.list
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.zoneViews = {

    /**
     * resourceviews.zoneViews.addResources
     *
     * @desc Add resources to the view.
     *
     * @alias resourceviews.zoneViews.addResources
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project name of the resource view.
     * @param  {string} params.resourceView - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addResources: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/addResources',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resourceView'],
        pathParams: ['project', 'resourceView', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.delete
     *
     * @desc Delete a resource view.
     *
     * @alias resourceviews.zoneViews.delete
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project name of the resource view.
     * @param  {string} params.resourceView - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resourceView'],
        pathParams: ['project', 'resourceView', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.get
     *
     * @desc Get the information of a zonal resource view.
     *
     * @alias resourceviews.zoneViews.get
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project name of the resource view.
     * @param  {string} params.resourceView - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resourceView'],
        pathParams: ['project', 'resourceView', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.getService
     *
     * @desc Get the service information of a resource view or a resource.
     *
     * @alias resourceviews.zoneViews.getService
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project name of the resource view.
     * @param  {string=} params.resourceName - The name of the resource if user wants to get the service information of the resource.
     * @param  {string} params.resourceView - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getService: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/getService',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resourceView'],
        pathParams: ['project', 'resourceView', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.insert
     *
     * @desc Create a resource view.
     *
     * @alias resourceviews.zoneViews.insert
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.list
     *
     * @desc List resource views.
     *
     * @alias resourceviews.zoneViews.list
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.project - The project name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.listResources
     *
     * @desc List the resources of the resource view.
     *
     * @alias resourceviews.zoneViews.listResources
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.format - The requested format of the return value. It can be URL or URL_PORT. A JSON object will be included in the response based on the format. The default format is NONE, which results in no JSON in the response.
     * @param  {string=} params.listState - The state of the instance to list. By default, it lists all instances.
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.project - The project name of the resource view.
     * @param  {string} params.resourceView - The name of the resource view.
     * @param  {string=} params.serviceName - The service name to return in the response. It is optional and if it is not set, all the service end points will be returned.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listResources: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/resources',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resourceView'],
        pathParams: ['project', 'resourceView', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.removeResources
     *
     * @desc Remove resources from the view.
     *
     * @alias resourceviews.zoneViews.removeResources
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project name of the resource view.
     * @param  {string} params.resourceView - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeResources: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/removeResources',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resourceView'],
        pathParams: ['project', 'resourceView', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.setService
     *
     * @desc Update the service information of a resource view or a resource.
     *
     * @alias resourceviews.zoneViews.setService
     * @memberOf! resourceviews(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project name of the resource view.
     * @param  {string} params.resourceView - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setService: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta2/projects/{project}/zones/{zone}/resourceViews/{resourceView}/setService',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resourceView'],
        pathParams: ['project', 'resourceView', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Resourceviews object
 * @type Resourceviews
 */
module.exports = Resourceviews;