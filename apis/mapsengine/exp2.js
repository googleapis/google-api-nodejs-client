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
 * Google Maps Engine API
 *
 * @classdesc The Google Maps Engine API allows developers to store and query geospatial vector and raster data.
 * @namespace mapsengine
 * @version  exp2
 * @variation exp2
 * @this Mapsengine
 * @param {object=} options Options for Mapsengine
 */
function Mapsengine(options) {

  var self = this;
  this._options = options || {};

  this.assets = {

    /**
     * mapsengine.assets.get
     *
     * @desc Return metadata for a particular asset.
     *
     * @alias mapsengine.assets.get
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the asset.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/assets/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.assets.list
     *
     * @desc Return all assets readable by the current user.
     *
     * @alias mapsengine.assets.list
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.bbox - A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
     * @param  {string=} params.createdAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
     * @param  {string=} params.createdBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
     * @param  {string=} params.creatorEmail - An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
     * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 100.
     * @param  {string=} params.modifiedAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
     * @param  {string=} params.modifiedBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.projectId - The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
     * @param  {string=} params.role - The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
     * @param  {string=} params.search - An unstructured search string used to filter the set of results based on asset metadata.
     * @param  {string=} params.tags - A comma separated list of tags. Returned assets will contain all the tags from the list.
     * @param  {string=} params.type - A comma separated list of asset types. Returned assets will have one of the types from the provided list. Supported values are 'map', 'layer', 'rasterCollection' and 'table'.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/assets',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    parents: {

      /**
       * mapsengine.assets.parents.list
       *
       * @desc Return all parent ids of the specified asset.
       *
       * @alias mapsengine.assets.parents.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset whose parents will be listed.
       * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 50.
       * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/assets/{id}/parents',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    permissions: {

      /**
       * mapsengine.assets.permissions.list
       *
       * @desc Return all of the permissions for the specified asset.
       *
       * @alias mapsengine.assets.permissions.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset whose permissions will be listed.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/assets/{id}/permissions',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.layers = {

    /**
     * mapsengine.layers.cancelProcessing
     *
     * @desc Cancel processing on a layer asset.
     *
     * @alias mapsengine.layers.cancelProcessing
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the layer.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancelProcessing: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}/cancelProcessing',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.layers.create
     *
     * @desc Create a layer asset.
     *
     * @alias mapsengine.layers.create
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.process - Whether to queue the created layer for processing.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers',
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
     * mapsengine.layers.delete
     *
     * @desc Delete a layer.
     *
     * @alias mapsengine.layers.delete
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the layer. Only the layer creator or project owner are permitted to delete. If the layer is published, or included in a map, the request will fail. Unpublish the layer, and remove it from all maps prior to deleting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.layers.get
     *
     * @desc Return metadata for a particular layer.
     *
     * @alias mapsengine.layers.get
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the layer.
     * @param  {string=} params.version - Deprecated: The version parameter indicates which version of the layer should be returned. When version is set to published, the published version of the layer will be returned. Please use the layers.getPublished endpoint instead.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.layers.getPublished
     *
     * @desc Return the published metadata for a particular layer.
     *
     * @alias mapsengine.layers.getPublished
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the layer.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getPublished: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}/published',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.layers.list
     *
     * @desc Return all layers readable by the current user.
     *
     * @alias mapsengine.layers.list
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.bbox - A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
     * @param  {string=} params.createdAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
     * @param  {string=} params.createdBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
     * @param  {string=} params.creatorEmail - An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
     * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 100.
     * @param  {string=} params.modifiedAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
     * @param  {string=} params.modifiedBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.processingStatus - 
     * @param  {string=} params.projectId - The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
     * @param  {string=} params.role - The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
     * @param  {string=} params.search - An unstructured search string used to filter the set of results based on asset metadata.
     * @param  {string=} params.tags - A comma separated list of tags. Returned assets will contain all the tags from the list.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers',
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
     * mapsengine.layers.listPublished
     *
     * @desc Return all published layers readable by the current user.
     *
     * @alias mapsengine.layers.listPublished
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 100.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.projectId - The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
     * @param  {string=} params.search - An unstructured search string used to filter the set of results based on asset metadata.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listPublished: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers/published',
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
     * mapsengine.layers.patch
     *
     * @desc Mutate a layer asset.
     *
     * @alias mapsengine.layers.patch
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the layer.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.layers.process
     *
     * @desc Process a layer asset.
     *
     * @alias mapsengine.layers.process
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the layer.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    process: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}/process',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.layers.publish
     *
     * @desc Publish a layer asset.
     *
     * @alias mapsengine.layers.publish
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.force - If set to true, the API will allow publication of the layer even if it's out of date. If not true, you'll need to reprocess any out-of-date layer before publishing.
     * @param  {string} params.id - The ID of the layer.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    publish: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}/publish',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.layers.unpublish
     *
     * @desc Unpublish a layer asset.
     *
     * @alias mapsengine.layers.unpublish
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the layer.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    unpublish: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}/unpublish',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    parents: {

      /**
       * mapsengine.layers.parents.list
       *
       * @desc Return all parent ids of the specified layer.
       *
       * @alias mapsengine.layers.parents.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the layer whose parents will be listed.
       * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 50.
       * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}/parents',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    permissions: {

      /**
       * mapsengine.layers.permissions.batchDelete
       *
       * @desc Remove permission entries from an already existing asset.
       *
       * @alias mapsengine.layers.permissions.batchDelete
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset from which permissions will be removed.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchDelete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}/permissions/batchDelete',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.layers.permissions.batchUpdate
       *
       * @desc Add or update permission entries to an already existing asset.  An asset can hold up to 20 different permission entries. Each batchInsert request is atomic.
       *
       * @alias mapsengine.layers.permissions.batchUpdate
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset to which permissions will be added.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchUpdate: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}/permissions/batchUpdate',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.layers.permissions.list
       *
       * @desc Return all of the permissions for the specified asset.
       *
       * @alias mapsengine.layers.permissions.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset whose permissions will be listed.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/layers/{id}/permissions',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.maps = {

    /**
     * mapsengine.maps.create
     *
     * @desc Create a map asset.
     *
     * @alias mapsengine.maps.create
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/maps',
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
     * mapsengine.maps.delete
     *
     * @desc Delete a map.
     *
     * @alias mapsengine.maps.delete
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the map. Only the map creator or project owner are permitted to delete. If the map is published the request will fail. Unpublish the map prior to deleting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/maps/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.maps.get
     *
     * @desc Return metadata for a particular map.
     *
     * @alias mapsengine.maps.get
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the map.
     * @param  {string=} params.version - Deprecated: The version parameter indicates which version of the map should be returned. When version is set to published, the published version of the map will be returned. Please use the maps.getPublished endpoint instead.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/maps/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.maps.getPublished
     *
     * @desc Return the published metadata for a particular map.
     *
     * @alias mapsengine.maps.getPublished
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the map.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getPublished: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/maps/{id}/published',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.maps.list
     *
     * @desc Return all maps readable by the current user.
     *
     * @alias mapsengine.maps.list
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.bbox - A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
     * @param  {string=} params.createdAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
     * @param  {string=} params.createdBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
     * @param  {string=} params.creatorEmail - An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
     * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 100.
     * @param  {string=} params.modifiedAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
     * @param  {string=} params.modifiedBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.processingStatus - 
     * @param  {string=} params.projectId - The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
     * @param  {string=} params.role - The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
     * @param  {string=} params.search - An unstructured search string used to filter the set of results based on asset metadata.
     * @param  {string=} params.tags - A comma separated list of tags. Returned assets will contain all the tags from the list.
     * @param  {string=} params.version - Deprecated: The version parameter indicates which version of the maps should be returned. When version is set to published this parameter will filter the result set to include only maps that are published. Please use the maps.listPublished endpoint instead.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/maps',
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
     * mapsengine.maps.listPublished
     *
     * @desc Return all published maps readable by the current user.
     *
     * @alias mapsengine.maps.listPublished
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 100.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.projectId - The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
     * @param  {string=} params.search - An unstructured search string used to filter the set of results based on asset metadata.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listPublished: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/maps/published',
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
     * mapsengine.maps.patch
     *
     * @desc Mutate a map asset.
     *
     * @alias mapsengine.maps.patch
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the map.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/maps/{id}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.maps.publish
     *
     * @desc Publish a map asset.
     *
     * @alias mapsengine.maps.publish
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.force - If set to true, the API will allow publication of the map even if it's out of date. If false, the map must have a processingStatus of complete before publishing.
     * @param  {string} params.id - The ID of the map.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    publish: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/maps/{id}/publish',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.maps.unpublish
     *
     * @desc Unpublish a map asset.
     *
     * @alias mapsengine.maps.unpublish
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the map.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    unpublish: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/maps/{id}/unpublish',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    permissions: {

      /**
       * mapsengine.maps.permissions.batchDelete
       *
       * @desc Remove permission entries from an already existing asset.
       *
       * @alias mapsengine.maps.permissions.batchDelete
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset from which permissions will be removed.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchDelete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/maps/{id}/permissions/batchDelete',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.maps.permissions.batchUpdate
       *
       * @desc Add or update permission entries to an already existing asset.  An asset can hold up to 20 different permission entries. Each batchInsert request is atomic.
       *
       * @alias mapsengine.maps.permissions.batchUpdate
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset to which permissions will be added.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchUpdate: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/maps/{id}/permissions/batchUpdate',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.maps.permissions.list
       *
       * @desc Return all of the permissions for the specified asset.
       *
       * @alias mapsengine.maps.permissions.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset whose permissions will be listed.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/maps/{id}/permissions',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.projects = {

    /**
     * mapsengine.projects.list
     *
     * @desc Return all projects readable by the current user.
     *
     * @alias mapsengine.projects.list
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/projects',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    icons: {

      /**
       * mapsengine.projects.icons.create
       *
       * @desc Create an icon.
       *
       * @alias mapsengine.projects.icons.create
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - The ID of the project.
       * @param  {object} params.resource - Media resource metadata
       * @param  {object} params.media - Media object
       * @param  {string} params.media.mimeType - Media mime-type
       * @param  {string|object} params.media.body - Media body contents
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/projects/{projectId}/icons',
            method: 'POST'
          },
          params: params,
          mediaUrl: 'https://www.googleapis.com/upload/mapsengine/exp2/projects/{projectId}/icons',
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.projects.icons.get
       *
       * @desc Return an icon or its associated metadata
       *
       * @alias mapsengine.projects.icons.get
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the icon.
       * @param  {string} params.projectId - The ID of the project.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/projects/{projectId}/icons/{id}',
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
       * mapsengine.projects.icons.list
       *
       * @desc Return all icons in the current project
       *
       * @alias mapsengine.projects.icons.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 50.
       * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {string} params.projectId - The ID of the project.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/projects/{projectId}/icons',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.rasterCollections = {

    /**
     * mapsengine.rasterCollections.cancelProcessing
     *
     * @desc Cancel processing on a raster collection asset.
     *
     * @alias mapsengine.rasterCollections.cancelProcessing
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the raster collection.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancelProcessing: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}/cancelProcessing',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.rasterCollections.create
     *
     * @desc Create a raster collection asset.
     *
     * @alias mapsengine.rasterCollections.create
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections',
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
     * mapsengine.rasterCollections.delete
     *
     * @desc Delete a raster collection.
     *
     * @alias mapsengine.rasterCollections.delete
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the raster collection. Only the raster collection creator or project owner are permitted to delete. If the rastor collection is included in a layer, the request will fail. Remove the raster collection from all layers prior to deleting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.rasterCollections.get
     *
     * @desc Return metadata for a particular raster collection.
     *
     * @alias mapsengine.rasterCollections.get
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the raster collection.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.rasterCollections.list
     *
     * @desc Return all raster collections readable by the current user.
     *
     * @alias mapsengine.rasterCollections.list
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.bbox - A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
     * @param  {string=} params.createdAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
     * @param  {string=} params.createdBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
     * @param  {string=} params.creatorEmail - An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
     * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 100.
     * @param  {string=} params.modifiedAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
     * @param  {string=} params.modifiedBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.processingStatus - 
     * @param  {string=} params.projectId - The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
     * @param  {string=} params.role - The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
     * @param  {string=} params.search - An unstructured search string used to filter the set of results based on asset metadata.
     * @param  {string=} params.tags - A comma separated list of tags. Returned assets will contain all the tags from the list.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections',
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
     * mapsengine.rasterCollections.patch
     *
     * @desc Mutate a raster collection asset.
     *
     * @alias mapsengine.rasterCollections.patch
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the raster collection.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.rasterCollections.process
     *
     * @desc Process a raster collection asset.
     *
     * @alias mapsengine.rasterCollections.process
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the raster collection.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    process: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}/process',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    parents: {

      /**
       * mapsengine.rasterCollections.parents.list
       *
       * @desc Return all parent ids of the specified raster collection.
       *
       * @alias mapsengine.rasterCollections.parents.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the raster collection whose parents will be listed.
       * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 50.
       * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}/parents',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    permissions: {

      /**
       * mapsengine.rasterCollections.permissions.batchDelete
       *
       * @desc Remove permission entries from an already existing asset.
       *
       * @alias mapsengine.rasterCollections.permissions.batchDelete
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset from which permissions will be removed.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchDelete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}/permissions/batchDelete',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.rasterCollections.permissions.batchUpdate
       *
       * @desc Add or update permission entries to an already existing asset.  An asset can hold up to 20 different permission entries. Each batchInsert request is atomic.
       *
       * @alias mapsengine.rasterCollections.permissions.batchUpdate
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset to which permissions will be added.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchUpdate: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}/permissions/batchUpdate',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.rasterCollections.permissions.list
       *
       * @desc Return all of the permissions for the specified asset.
       *
       * @alias mapsengine.rasterCollections.permissions.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset whose permissions will be listed.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}/permissions',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    rasters: {

      /**
       * mapsengine.rasterCollections.rasters.batchDelete
       *
       * @desc Remove rasters from an existing raster collection.  Up to 50 rasters can be included in a single batchDelete request. Each batchDelete request is atomic.
       *
       * @alias mapsengine.rasterCollections.rasters.batchDelete
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the raster collection to which these rasters belong.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchDelete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}/rasters/batchDelete',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.rasterCollections.rasters.batchInsert
       *
       * @desc Add rasters to an existing raster collection. Rasters must be successfully processed in order to be added to a raster collection.  Up to 50 rasters can be included in a single batchInsert request. Each batchInsert request is atomic.
       *
       * @alias mapsengine.rasterCollections.rasters.batchInsert
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the raster collection to which these rasters belong.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchInsert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}/rasters/batchInsert',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.rasterCollections.rasters.list
       *
       * @desc Return all rasters within a raster collection.
       *
       * @alias mapsengine.rasterCollections.rasters.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.bbox - A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
       * @param  {string=} params.createdAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
       * @param  {string=} params.createdBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
       * @param  {string=} params.creatorEmail - An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
       * @param  {string} params.id - The ID of the raster collection to which these rasters belong.
       * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 100.
       * @param  {string=} params.modifiedAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
       * @param  {string=} params.modifiedBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
       * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {string=} params.role - The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
       * @param  {string=} params.search - An unstructured search string used to filter the set of results based on asset metadata.
       * @param  {string=} params.tags - A comma separated list of tags. Returned assets will contain all the tags from the list.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasterCollections/{id}/rasters',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.rasters = {

    /**
     * mapsengine.rasters.delete
     *
     * @desc Delete a raster.
     *
     * @alias mapsengine.rasters.delete
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the raster. Only the raster creator or project owner are permitted to delete. If the raster is included in a layer or mosaic, the request will fail. Remove it from all parents prior to deleting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasters/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.rasters.get
     *
     * @desc Return metadata for a single raster.
     *
     * @alias mapsengine.rasters.get
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the raster.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasters/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.rasters.list
     *
     * @desc Return all rasters readable by the current user.
     *
     * @alias mapsengine.rasters.list
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.bbox - A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
     * @param  {string=} params.createdAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
     * @param  {string=} params.createdBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
     * @param  {string=} params.creatorEmail - An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
     * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 100.
     * @param  {string=} params.modifiedAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
     * @param  {string=} params.modifiedBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.processingStatus - 
     * @param  {string} params.projectId - The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
     * @param  {string=} params.role - The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
     * @param  {string=} params.search - An unstructured search string used to filter the set of results based on asset metadata.
     * @param  {string=} params.tags - A comma separated list of tags. Returned assets will contain all the tags from the list.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasters',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.rasters.patch
     *
     * @desc Mutate a raster asset.
     *
     * @alias mapsengine.rasters.patch
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the raster.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasters/{id}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.rasters.process
     *
     * @desc Process a raster asset.
     *
     * @alias mapsengine.rasters.process
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the raster.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    process: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasters/{id}/process',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.rasters.upload
     *
     * @desc Create a skeleton raster asset for upload.
     *
     * @alias mapsengine.rasters.upload
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    upload: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/rasters/upload',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    files: {

      /**
       * mapsengine.rasters.files.insert
       *
       * @desc Upload a file to a raster asset.
       *
       * @alias mapsengine.rasters.files.insert
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.filename - The file name of this uploaded file.
       * @param  {string} params.id - The ID of the raster asset.
       * @param  {object} params.media - Media object
       * @param  {string} params.media.mimeType - Media mime-type
       * @param  {string|object} params.media.body - Media body contents
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasters/{id}/files',
            method: 'POST'
          },
          params: params,
          mediaUrl: 'https://www.googleapis.com/upload/mapsengine/exp2/rasters/{id}/files',
          requiredParams: ['id', 'filename'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    parents: {

      /**
       * mapsengine.rasters.parents.list
       *
       * @desc Return all parent ids of the specified rasters.
       *
       * @alias mapsengine.rasters.parents.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the rasters whose parents will be listed.
       * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 50.
       * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasters/{id}/parents',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    permissions: {

      /**
       * mapsengine.rasters.permissions.batchDelete
       *
       * @desc Remove permission entries from an already existing asset.
       *
       * @alias mapsengine.rasters.permissions.batchDelete
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset from which permissions will be removed.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchDelete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasters/{id}/permissions/batchDelete',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.rasters.permissions.batchUpdate
       *
       * @desc Add or update permission entries to an already existing asset.  An asset can hold up to 20 different permission entries. Each batchInsert request is atomic.
       *
       * @alias mapsengine.rasters.permissions.batchUpdate
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset to which permissions will be added.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchUpdate: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasters/{id}/permissions/batchUpdate',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.rasters.permissions.list
       *
       * @desc Return all of the permissions for the specified asset.
       *
       * @alias mapsengine.rasters.permissions.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset whose permissions will be listed.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/rasters/{id}/permissions',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.tables = {

    /**
     * mapsengine.tables.create
     *
     * @desc Create a table asset.
     *
     * @alias mapsengine.tables.create
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/tables',
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
     * mapsengine.tables.delete
     *
     * @desc Delete a table.
     *
     * @alias mapsengine.tables.delete
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the table. Only the table creator or project owner are permitted to delete. If the table is included in a layer, the request will fail. Remove it from all layers prior to deleting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.tables.get
     *
     * @desc Return metadata for a particular table, including the schema.
     *
     * @alias mapsengine.tables.get
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the table.
     * @param  {string=} params.version - 
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.tables.list
     *
     * @desc Return all tables readable by the current user.
     *
     * @alias mapsengine.tables.list
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.bbox - A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
     * @param  {string=} params.createdAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
     * @param  {string=} params.createdBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
     * @param  {string=} params.creatorEmail - An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
     * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 100.
     * @param  {string=} params.modifiedAfter - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
     * @param  {string=} params.modifiedBefore - An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
     * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.processingStatus - 
     * @param  {string=} params.projectId - The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
     * @param  {string=} params.role - The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
     * @param  {string=} params.search - An unstructured search string used to filter the set of results based on asset metadata.
     * @param  {string=} params.tags - A comma separated list of tags. Returned assets will contain all the tags from the list.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/tables',
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
     * mapsengine.tables.patch
     *
     * @desc Mutate a table asset.
     *
     * @alias mapsengine.tables.patch
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the table.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.tables.process
     *
     * @desc Process a table asset.
     *
     * @alias mapsengine.tables.process
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the table.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    process: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/process',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mapsengine.tables.upload
     *
     * @desc Create a placeholder table asset to which table files can be uploaded. Once the placeholder has been created, files are uploaded to the https://www.googleapis.com/upload/mapsengine/v1/tables/table_id/files endpoint. See Table Upload in the Developer's Guide or Table.files: insert in the reference documentation for more information.
     *
     * @alias mapsengine.tables.upload
     * @memberOf! mapsengine(exp2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    upload: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mapsengine/exp2/tables/upload',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    features: {

      /**
       * mapsengine.tables.features.batchDelete
       *
       * @desc Delete all features matching the given IDs.
       *
       * @alias mapsengine.tables.features.batchDelete
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the table that contains the features to be deleted.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchDelete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/features/batchDelete',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.tables.features.batchInsert
       *
       * @desc Append features to an existing table.  A single batchInsert request can create:  - Up to 50 features. - A combined total of 10 000 vertices. Feature limits are documented in the Supported data formats and limits article of the Google Maps Engine help center. Note that free and paid accounts have different limits.  For more information about inserting features, read Creating features in the Google Maps Engine developer's guide.
       *
       * @alias mapsengine.tables.features.batchInsert
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the table to append the features to.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchInsert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/features/batchInsert',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.tables.features.batchPatch
       *
       * @desc Update the supplied features.  A single batchPatch request can update:  - Up to 50 features. - A combined total of 10 000 vertices. Feature limits are documented in the Supported data formats and limits article of the Google Maps Engine help center. Note that free and paid accounts have different limits.  Feature updates use HTTP PATCH semantics:  - A supplied value replaces an existing value (if any) in that field. - Omitted fields remain unchanged. - Complex values in geometries and properties must be replaced as atomic units. For example, providing just the coordinates of a geometry is not allowed; the complete geometry, including type, must be supplied. - Setting a property's value to null deletes that property. For more information about updating features, read Updating features in the Google Maps Engine developer's guide.
       *
       * @alias mapsengine.tables.features.batchPatch
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the table containing the features to be patched.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchPatch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/features/batchPatch',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.tables.features.get
       *
       * @desc Return a single feature, given its ID.
       *
       * @alias mapsengine.tables.features.get
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the feature to get.
       * @param  {string=} params.select - A SQL-like projection clause used to specify returned properties. If this parameter is not included, all properties are returned.
       * @param  {string} params.tableId - The ID of the table.
       * @param  {string=} params.version - The table version to access. See Accessing Public Data for information.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{tableId}/features/{id}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['tableId', 'id'],
          pathParams: ['id', 'tableId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.tables.features.list
       *
       * @desc Return all features readable by the current user.
       *
       * @alias mapsengine.tables.features.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the table to which these features belong.
       * @param  {string=} params.include - A comma separated list of optional data to include. Optional data available: schema.
       * @param  {string=} params.intersects - A geometry literal that specifies the spatial restriction of the query.
       * @param  {integer=} params.limit - The total number of features to return from the query, irrespective of the number of pages.
       * @param  {integer=} params.maxResults - The maximum number of items to include in the response, used for paging. The maximum supported value is 1000.
       * @param  {string=} params.orderBy - An SQL-like order by clause used to sort results. If this parameter is not included, the order of features is undefined.
       * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {string=} params.select - A SQL-like projection clause used to specify returned properties. If this parameter is not included, all properties are returned.
       * @param  {string=} params.version - The table version to access. See Accessing Public Data for information.
       * @param  {string=} params.where - An SQL-like predicate used to filter results.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/features',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    files: {

      /**
       * mapsengine.tables.files.insert
       *
       * @desc Upload a file to a placeholder table asset. See Table Upload in the Developer's Guide for more information. Supported file types are listed in the Supported data formats and limits article of the Google Maps Engine help center.
       *
       * @alias mapsengine.tables.files.insert
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.filename - The file name of this uploaded file.
       * @param  {string} params.id - The ID of the table asset.
       * @param  {object} params.media - Media object
       * @param  {string} params.media.mimeType - Media mime-type
       * @param  {string|object} params.media.body - Media body contents
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/files',
            method: 'POST'
          },
          params: params,
          mediaUrl: 'https://www.googleapis.com/upload/mapsengine/exp2/tables/{id}/files',
          requiredParams: ['id', 'filename'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    parents: {

      /**
       * mapsengine.tables.parents.list
       *
       * @desc Return all parent ids of the specified table.
       *
       * @alias mapsengine.tables.parents.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the table whose parents will be listed.
       * @param  {integer=} params.maxResults - The maximum number of items to include in a single response page. The maximum supported value is 50.
       * @param  {string=} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/parents',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    permissions: {

      /**
       * mapsengine.tables.permissions.batchDelete
       *
       * @desc Remove permission entries from an already existing asset.
       *
       * @alias mapsengine.tables.permissions.batchDelete
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset from which permissions will be removed.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchDelete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/permissions/batchDelete',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.tables.permissions.batchUpdate
       *
       * @desc Add or update permission entries to an already existing asset.  An asset can hold up to 20 different permission entries. Each batchInsert request is atomic.
       *
       * @alias mapsengine.tables.permissions.batchUpdate
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset to which permissions will be added.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      batchUpdate: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/permissions/batchUpdate',
            method: 'POST'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mapsengine.tables.permissions.list
       *
       * @desc Return all of the permissions for the specified asset.
       *
       * @alias mapsengine.tables.permissions.list
       * @memberOf! mapsengine(exp2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.id - The ID of the asset whose permissions will be listed.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mapsengine/exp2/tables/{id}/permissions',
            method: 'GET'
          },
          params: params,
          requiredParams: ['id'],
          pathParams: ['id'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Mapsengine object
 * @type Mapsengine
 */
module.exports = Mapsengine;