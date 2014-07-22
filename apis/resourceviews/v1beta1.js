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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addresources: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'region', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/regions/' + params.region + '/resourceViews/' + params.resourceViewName + '/addResources',
        method: 'POST'
      };

      delete params.projectName;
      delete params.region;
      delete params.resourceViewName;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'region', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/regions/' + params.region + '/resourceViews/' + params.resourceViewName,
        method: 'DELETE'
      };

      delete params.projectName;
      delete params.region;
      delete params.resourceViewName;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'region', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/regions/' + params.region + '/resourceViews/' + params.resourceViewName,
        method: 'GET'
      };

      delete params.projectName;
      delete params.region;
      delete params.resourceViewName;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/regions/' + params.region + '/resourceViews',
        method: 'POST'
      };

      delete params.projectName;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 500, inclusive. (Default: 50)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.region - The region name of the resource view.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/regions/' + params.region + '/resourceViews',
        method: 'GET'
      };

      delete params.projectName;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 500, inclusive. (Default: 50)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.region - The region name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listresources: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'region', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/regions/' + params.region + '/resourceViews/' + params.resourceViewName + '/resources',
        method: 'POST'
      };

      delete params.projectName;
      delete params.region;
      delete params.resourceViewName;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeresources: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'region', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/regions/' + params.region + '/resourceViews/' + params.resourceViewName + '/removeResources',
        method: 'POST'
      };

      delete params.projectName;
      delete params.region;
      delete params.resourceViewName;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addresources: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'zone', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/zones/' + params.zone + '/resourceViews/' + params.resourceViewName + '/addResources',
        method: 'POST'
      };

      delete params.projectName;
      delete params.resourceViewName;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'zone', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/zones/' + params.zone + '/resourceViews/' + params.resourceViewName,
        method: 'DELETE'
      };

      delete params.projectName;
      delete params.resourceViewName;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'zone', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/zones/' + params.zone + '/resourceViews/' + params.resourceViewName,
        method: 'GET'
      };

      delete params.projectName;
      delete params.resourceViewName;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/zones/' + params.zone + '/resourceViews',
        method: 'POST'
      };

      delete params.projectName;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 500, inclusive. (Default: 50)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/zones/' + params.zone + '/resourceViews',
        method: 'GET'
      };

      delete params.projectName;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 0 to 500, inclusive. (Default: 50)
     * @param  {string=} params.pageToken - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
     * @param  {string} params.projectName - The project name of the resource view.
     * @param  {string} params.resourceViewName - The name of the resource view.
     * @param  {string} params.zone - The zone name of the resource view.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listresources: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'zone', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/zones/' + params.zone + '/resourceViews/' + params.resourceViewName + '/resources',
        method: 'POST'
      };

      delete params.projectName;
      delete params.resourceViewName;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeresources: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['projectName', 'zone', 'resourceViewName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/resourceviews/v1beta1/projects/' + params.projectName + '/zones/' + params.zone + '/resourceViews/' + params.resourceViewName + '/removeResources',
        method: 'POST'
      };

      delete params.projectName;
      delete params.resourceViewName;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Resourceviews object
 * @type Resourceviews
 */
module.exports = Resourceviews;