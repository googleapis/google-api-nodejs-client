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
 * Resource Views API
 *
 * @classdesc The Resource View API allows users to create and manage logical sets of Google Compute Engine instances.
 * @namespace resourceviews
 * @version  v1beta1
 * @variation v1beta1
 * @this Resourceviews
 * @param {object=} options Options for Resourceviews
 */
function Resourceviews(options) {

  var self = this;
  this._options = options || {};

  this.regionViews = {

    /**
     * resourceviews.regionViews.addresources
     *
     * @desc Add resources to the view.
     *
     * @alias resourceviews.regionViews.addresources
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.region - The region name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addresources: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}/addResources',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.regionViews.delete
     *
     * @desc Delete a resource view.
     *
     * @alias resourceviews.regionViews.delete
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.region - The region name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.regionViews.get
     *
     * @desc Get the information of a resource view.
     *
     * @alias resourceviews.regionViews.get
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.region - The region name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.regionViews.insert
     *
     * @desc Create a resource view.
     *
     * @alias resourceviews.regionViews.insert
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.region - The region name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'region'],
        pathParams: ['projectName', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.regionViews.list
     *
     * @desc List resource views.
     *
     * @alias resourceviews.regionViews.list
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.region - The region name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectName', 'region'],
        pathParams: ['projectName', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.regionViews.listresources
     *
     * @desc List the resources in the view.
     *
     * @alias resourceviews.regionViews.listresources
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.region - The region name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listresources: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}/resources',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.regionViews.removeresources
     *
     * @desc Remove resources from the view.
     *
     * @alias resourceviews.regionViews.removeresources
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.region - The region name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeresources: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/regions/{region}/resourceViews/{resourceViewName}/removeResources',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'region', 'resourceViewName'],
        pathParams: ['projectName', 'region', 'resourceViewName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.zoneViews = {

    /**
     * resourceviews.zoneViews.addresources
     *
     * @desc Add resources to the view.
     *
     * @alias resourceviews.zoneViews.addresources
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addresources: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}/addResources',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
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
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
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
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
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
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'zone'],
        pathParams: ['projectName', 'zone'],
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
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectName', 'zone'],
        pathParams: ['projectName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.listresources
     *
     * @desc List the resources of the resource view.
     *
     * @alias resourceviews.zoneViews.listresources
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listresources: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}/resources',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * resourceviews.zoneViews.removeresources
     *
     * @desc Remove resources from the view.
     *
     * @alias resourceviews.zoneViews.removeresources
     * @memberOf! resourceviews(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeresources: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/{projectName}/zones/{zone}/resourceViews/{resourceViewName}/removeResources',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'resourceViewName'],
        pathParams: ['projectName', 'resourceViewName', 'zone'],
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