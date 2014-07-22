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
 * Compute Engine API
 *
 * @classdesc API for the Google Compute Engine service.
 * @namespace compute
 * @version  v1
 * @variation v1
 * @this Compute
 * @param {object=} options Options for Compute
 */
function Compute(options) {

  var self = this;
  this._options = options || {};

  this.addresses = {

    /**
     * compute.addresses.aggregatedList
     *
     * @desc Retrieves the list of addresses grouped by scope.
     *
     * @alias compute.addresses.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/addresses',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.addresses.delete
     *
     * @desc Deletes the specified address resource.
     *
     * @alias compute.addresses.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.address - Name of the address resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'address']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/addresses/' + params.address,
        method: 'DELETE'
      };

      delete params.address;
      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.addresses.get
     *
     * @desc Returns the specified address resource.
     *
     * @alias compute.addresses.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.address - Name of the address resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'address']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/addresses/' + params.address,
        method: 'GET'
      };

      delete params.address;
      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.addresses.insert
     *
     * @desc Creates an address resource in the specified project using the data included in the request.
     *
     * @alias compute.addresses.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/addresses',
        method: 'POST'
      };

      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.addresses.list
     *
     * @desc Retrieves the list of address resources contained within the specified region.
     *
     * @alias compute.addresses.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/addresses',
        method: 'GET'
      };

      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.backendServices = {

    /**
     * compute.backendServices.delete
     *
     * @desc Deletes the specified BackendService resource.
     *
     * @alias compute.backendServices.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.backendService - Name of the BackendService resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'backendService']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService,
        method: 'DELETE'
      };

      delete params.backendService;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.backendServices.get
     *
     * @desc Returns the specified BackendService resource.
     *
     * @alias compute.backendServices.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.backendService - Name of the BackendService resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'backendService']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService,
        method: 'GET'
      };

      delete params.backendService;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.backendServices.getHealth
     *
     * @desc Gets the most recent health check results for this BackendService.
     *
     * @alias compute.backendServices.getHealth
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.backendService - Name of the BackendService resource to which the queried instance belongs.
     * @param  {string} params.project -
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getHealth: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'backendService']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService + '/getHealth',
        method: 'POST'
      };

      delete params.backendService;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.backendServices.insert
     *
     * @desc Creates a BackendService resource in the specified project using the data included in the request.
     *
     * @alias compute.backendServices.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.backendServices.list
     *
     * @desc Retrieves the list of BackendService resources available to the specified project.
     *
     * @alias compute.backendServices.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.backendServices.patch
     *
     * @desc Update the entire content of the BackendService resource. This method supports patch semantics.
     *
     * @alias compute.backendServices.patch
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.backendService - Name of the BackendService resource to update.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'backendService']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService,
        method: 'PATCH'
      };

      delete params.backendService;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.backendServices.update
     *
     * @desc Update the entire content of the BackendService resource.
     *
     * @alias compute.backendServices.update
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.backendService - Name of the BackendService resource to update.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'backendService']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService,
        method: 'PUT'
      };

      delete params.backendService;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.diskTypes = {

    /**
     * compute.diskTypes.aggregatedList
     *
     * @desc Retrieves the list of disk type resources grouped by scope.
     *
     * @alias compute.diskTypes.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/diskTypes',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.diskTypes.get
     *
     * @desc Returns the specified disk type resource.
     *
     * @alias compute.diskTypes.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.diskType - Name of the disk type resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'diskType']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/diskTypes/' + params.diskType,
        method: 'GET'
      };

      delete params.diskType;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.diskTypes.list
     *
     * @desc Retrieves the list of disk type resources available to the specified project.
     *
     * @alias compute.diskTypes.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/diskTypes',
        method: 'GET'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.disks = {

    /**
     * compute.disks.aggregatedList
     *
     * @desc Retrieves the list of disks grouped by scope.
     *
     * @alias compute.disks.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/disks',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.disks.createSnapshot
     *
     *
     *
     * @alias compute.disks.createSnapshot
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.disk - Name of the persistent disk resource to snapshot.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    createSnapshot: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'disk']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks/' + params.disk + '/createSnapshot',
        method: 'POST'
      };

      delete params.disk;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.disks.delete
     *
     * @desc Deletes the specified persistent disk resource.
     *
     * @alias compute.disks.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.disk - Name of the persistent disk resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'disk']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks/' + params.disk,
        method: 'DELETE'
      };

      delete params.disk;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.disks.get
     *
     * @desc Returns the specified persistent disk resource.
     *
     * @alias compute.disks.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.disk - Name of the persistent disk resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'disk']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks/' + params.disk,
        method: 'GET'
      };

      delete params.disk;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.disks.insert
     *
     * @desc Creates a persistent disk resource in the specified project using the data included in the request.
     *
     * @alias compute.disks.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string=} params.sourceImage - Optional. Source image to restore onto a disk.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks',
        method: 'POST'
      };

      delete params.project;

      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.disks.list
     *
     * @desc Retrieves the list of persistent disk resources contained within the specified zone.
     *
     * @alias compute.disks.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks',
        method: 'GET'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.firewalls = {

    /**
     * compute.firewalls.delete
     *
     * @desc Deletes the specified firewall resource.
     *
     * @alias compute.firewalls.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.firewall - Name of the firewall resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'firewall']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls/' + params.firewall,
        method: 'DELETE'
      };

      delete params.firewall;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.firewalls.get
     *
     * @desc Returns the specified firewall resource.
     *
     * @alias compute.firewalls.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.firewall - Name of the firewall resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'firewall']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls/' + params.firewall,
        method: 'GET'
      };

      delete params.firewall;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.firewalls.insert
     *
     * @desc Creates a firewall resource in the specified project using the data included in the request.
     *
     * @alias compute.firewalls.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.firewalls.list
     *
     * @desc Retrieves the list of firewall resources available to the specified project.
     *
     * @alias compute.firewalls.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.firewalls.patch
     *
     * @desc Updates the specified firewall resource with the data included in the request. This method supports patch semantics.
     *
     * @alias compute.firewalls.patch
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.firewall - Name of the firewall resource to update.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'firewall']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls/' + params.firewall,
        method: 'PATCH'
      };

      delete params.firewall;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.firewalls.update
     *
     * @desc Updates the specified firewall resource with the data included in the request.
     *
     * @alias compute.firewalls.update
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.firewall - Name of the firewall resource to update.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'firewall']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls/' + params.firewall,
        method: 'PUT'
      };

      delete params.firewall;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.forwardingRules = {

    /**
     * compute.forwardingRules.aggregatedList
     *
     * @desc Retrieves the list of forwarding rules grouped by scope.
     *
     * @alias compute.forwardingRules.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/forwardingRules',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.forwardingRules.delete
     *
     * @desc Deletes the specified ForwardingRule resource.
     *
     * @alias compute.forwardingRules.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.forwardingRule - Name of the ForwardingRule resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'forwardingRule']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules/' + params.forwardingRule,
        method: 'DELETE'
      };

      delete params.forwardingRule;
      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.forwardingRules.get
     *
     * @desc Returns the specified ForwardingRule resource.
     *
     * @alias compute.forwardingRules.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.forwardingRule - Name of the ForwardingRule resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'forwardingRule']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules/' + params.forwardingRule,
        method: 'GET'
      };

      delete params.forwardingRule;
      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.forwardingRules.insert
     *
     * @desc Creates a ForwardingRule resource in the specified project and region using the data included in the request.
     *
     * @alias compute.forwardingRules.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules',
        method: 'POST'
      };

      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.forwardingRules.list
     *
     * @desc Retrieves the list of ForwardingRule resources available to the specified project and region.
     *
     * @alias compute.forwardingRules.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules',
        method: 'GET'
      };

      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.forwardingRules.setTarget
     *
     * @desc Changes target url for forwarding rule.
     *
     * @alias compute.forwardingRules.setTarget
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.forwardingRule - Name of the ForwardingRule resource in which target is to be set.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setTarget: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'forwardingRule']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules/' + params.forwardingRule + '/setTarget',
        method: 'POST'
      };

      delete params.forwardingRule;
      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.globalAddresses = {

    /**
     * compute.globalAddresses.delete
     *
     * @desc Deletes the specified address resource.
     *
     * @alias compute.globalAddresses.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.address - Name of the address resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'address']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/addresses/' + params.address,
        method: 'DELETE'
      };

      delete params.address;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalAddresses.get
     *
     * @desc Returns the specified address resource.
     *
     * @alias compute.globalAddresses.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.address - Name of the address resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'address']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/addresses/' + params.address,
        method: 'GET'
      };

      delete params.address;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalAddresses.insert
     *
     * @desc Creates an address resource in the specified project using the data included in the request.
     *
     * @alias compute.globalAddresses.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/addresses',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalAddresses.list
     *
     * @desc Retrieves the list of global address resources.
     *
     * @alias compute.globalAddresses.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/addresses',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.globalForwardingRules = {

    /**
     * compute.globalForwardingRules.delete
     *
     * @desc Deletes the specified ForwardingRule resource.
     *
     * @alias compute.globalForwardingRules.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.forwardingRule - Name of the ForwardingRule resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'forwardingRule']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules/' + params.forwardingRule,
        method: 'DELETE'
      };

      delete params.forwardingRule;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalForwardingRules.get
     *
     * @desc Returns the specified ForwardingRule resource.
     *
     * @alias compute.globalForwardingRules.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.forwardingRule - Name of the ForwardingRule resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'forwardingRule']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules/' + params.forwardingRule,
        method: 'GET'
      };

      delete params.forwardingRule;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalForwardingRules.insert
     *
     * @desc Creates a ForwardingRule resource in the specified project and region using the data included in the request.
     *
     * @alias compute.globalForwardingRules.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalForwardingRules.list
     *
     * @desc Retrieves the list of ForwardingRule resources available to the specified project.
     *
     * @alias compute.globalForwardingRules.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalForwardingRules.setTarget
     *
     * @desc Changes target url for forwarding rule.
     *
     * @alias compute.globalForwardingRules.setTarget
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.forwardingRule - Name of the ForwardingRule resource in which target is to be set.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setTarget: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'forwardingRule']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules/' + params.forwardingRule + '/setTarget',
        method: 'POST'
      };

      delete params.forwardingRule;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.globalOperations = {

    /**
     * compute.globalOperations.aggregatedList
     *
     * @desc Retrieves the list of all operations grouped by scope.
     *
     * @alias compute.globalOperations.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/operations',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalOperations.delete
     *
     * @desc Deletes the specified operation resource.
     *
     * @alias compute.globalOperations.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - Name of the operation resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'operation']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/operations/' + params.operation,
        method: 'DELETE'
      };

      delete params.operation;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalOperations.get
     *
     * @desc Retrieves the specified operation resource.
     *
     * @alias compute.globalOperations.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - Name of the operation resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'operation']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/operations/' + params.operation,
        method: 'GET'
      };

      delete params.operation;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.globalOperations.list
     *
     * @desc Retrieves the list of operation resources contained within the specified project.
     *
     * @alias compute.globalOperations.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/operations',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.httpHealthChecks = {

    /**
     * compute.httpHealthChecks.delete
     *
     * @desc Deletes the specified HttpHealthCheck resource.
     *
     * @alias compute.httpHealthChecks.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.httpHealthCheck - Name of the HttpHealthCheck resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'httpHealthCheck']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks/' + params.httpHealthCheck,
        method: 'DELETE'
      };

      delete params.httpHealthCheck;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.httpHealthChecks.get
     *
     * @desc Returns the specified HttpHealthCheck resource.
     *
     * @alias compute.httpHealthChecks.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.httpHealthCheck - Name of the HttpHealthCheck resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'httpHealthCheck']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks/' + params.httpHealthCheck,
        method: 'GET'
      };

      delete params.httpHealthCheck;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.httpHealthChecks.insert
     *
     * @desc Creates a HttpHealthCheck resource in the specified project using the data included in the request.
     *
     * @alias compute.httpHealthChecks.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.httpHealthChecks.list
     *
     * @desc Retrieves the list of HttpHealthCheck resources available to the specified project.
     *
     * @alias compute.httpHealthChecks.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.httpHealthChecks.patch
     *
     * @desc Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
     *
     * @alias compute.httpHealthChecks.patch
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.httpHealthCheck - Name of the HttpHealthCheck resource to update.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'httpHealthCheck']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks/' + params.httpHealthCheck,
        method: 'PATCH'
      };

      delete params.httpHealthCheck;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.httpHealthChecks.update
     *
     * @desc Updates a HttpHealthCheck resource in the specified project using the data included in the request.
     *
     * @alias compute.httpHealthChecks.update
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.httpHealthCheck - Name of the HttpHealthCheck resource to update.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'httpHealthCheck']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks/' + params.httpHealthCheck,
        method: 'PUT'
      };

      delete params.httpHealthCheck;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.images = {

    /**
     * compute.images.delete
     *
     * @desc Deletes the specified image resource.
     *
     * @alias compute.images.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.image - Name of the image resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'image']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images/' + params.image,
        method: 'DELETE'
      };

      delete params.image;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.images.deprecate
     *
     * @desc Sets the deprecation status of an image. If no message body is given, clears the deprecation status instead.
     *
     * @alias compute.images.deprecate
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.image - Image name.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    deprecate: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'image']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images/' + params.image + '/deprecate',
        method: 'POST'
      };

      delete params.image;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.images.get
     *
     * @desc Returns the specified image resource.
     *
     * @alias compute.images.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.image - Name of the image resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'image']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images/' + params.image,
        method: 'GET'
      };

      delete params.image;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.images.insert
     *
     * @desc Creates an image resource in the specified project using the data included in the request.
     *
     * @alias compute.images.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.images.list
     *
     * @desc Retrieves the list of image resources available to the specified project.
     *
     * @alias compute.images.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.instances = {

    /**
     * compute.instances.addAccessConfig
     *
     * @desc Adds an access config to an instance's network interface.
     *
     * @alias compute.instances.addAccessConfig
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Instance name.
     * @param  {string} params.networkInterface - Network interface name.
     * @param  {string} params.project - Project name.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addAccessConfig: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance', 'networkInterface']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/addAccessConfig',
        method: 'POST'
      };

      delete params.instance;

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.aggregatedList
     *
     *
     *
     * @alias compute.instances.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/instances',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.attachDisk
     *
     * @desc Attaches a disk resource to an instance.
     *
     * @alias compute.instances.attachDisk
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Instance name.
     * @param  {string} params.project - Project name.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    attachDisk: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/attachDisk',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.delete
     *
     * @desc Deletes the specified instance resource.
     *
     * @alias compute.instances.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Name of the instance resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance,
        method: 'DELETE'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.deleteAccessConfig
     *
     * @desc Deletes an access config from an instance's network interface.
     *
     * @alias compute.instances.deleteAccessConfig
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accessConfig - Access config name.
     * @param  {string} params.instance - Instance name.
     * @param  {string} params.networkInterface - Network interface name.
     * @param  {string} params.project - Project name.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    deleteAccessConfig: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance', 'accessConfig', 'networkInterface']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/deleteAccessConfig',
        method: 'POST'
      };

      delete params.instance;

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.detachDisk
     *
     * @desc Detaches a disk from an instance.
     *
     * @alias compute.instances.detachDisk
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deviceName - Disk device name to detach.
     * @param  {string} params.instance - Instance name.
     * @param  {string} params.project - Project name.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    detachDisk: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance', 'deviceName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/detachDisk',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.get
     *
     * @desc Returns the specified instance resource.
     *
     * @alias compute.instances.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Name of the instance resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance,
        method: 'GET'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.getSerialPortOutput
     *
     * @desc Returns the specified instance's serial port output.
     *
     * @alias compute.instances.getSerialPortOutput
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Name of the instance scoping this request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getSerialPortOutput: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/serialPort',
        method: 'GET'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.insert
     *
     * @desc Creates an instance resource in the specified project using the data included in the request.
     *
     * @alias compute.instances.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances',
        method: 'POST'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.list
     *
     * @desc Retrieves the list of instance resources contained within the specified zone.
     *
     * @alias compute.instances.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances',
        method: 'GET'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.reset
     *
     * @desc Performs a hard reset on the instance.
     *
     * @alias compute.instances.reset
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Name of the instance scoping this request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reset: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/reset',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.setDiskAutoDelete
     *
     * @desc Sets the auto-delete flag for a disk attached to an instance
     *
     * @alias compute.instances.setDiskAutoDelete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean} params.autoDelete - Whether to auto-delete the disk when the instance is deleted.
     * @param  {string} params.deviceName - Disk device name to modify.
     * @param  {string} params.instance - Instance name.
     * @param  {string} params.project - Project name.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setDiskAutoDelete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance', 'autoDelete', 'deviceName']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/setDiskAutoDelete',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.setMetadata
     *
     * @desc Sets metadata for the specified instance to the data included in the request.
     *
     * @alias compute.instances.setMetadata
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Name of the instance scoping this request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setMetadata: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/setMetadata',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.setScheduling
     *
     * @desc Sets an instance's scheduling options.
     *
     * @alias compute.instances.setScheduling
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Instance name.
     * @param  {string} params.project - Project name.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setScheduling: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/setScheduling',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.instances.setTags
     *
     * @desc Sets tags for the specified instance to the data included in the request.
     *
     * @alias compute.instances.setTags
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - Name of the instance scoping this request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setTags: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'instance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/setTags',
        method: 'POST'
      };

      delete params.instance;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.licenses = {

    /**
     * compute.licenses.get
     *
     * @desc Returns the specified license resource.
     *
     * @alias compute.licenses.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.license - Name of the license resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'license']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/licenses/' + params.license,
        method: 'GET'
      };

      delete params.license;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.machineTypes = {

    /**
     * compute.machineTypes.aggregatedList
     *
     * @desc Retrieves the list of machine type resources grouped by scope.
     *
     * @alias compute.machineTypes.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/machineTypes',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.machineTypes.get
     *
     * @desc Returns the specified machine type resource.
     *
     * @alias compute.machineTypes.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.machineType - Name of the machine type resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'machineType']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/machineTypes/' + params.machineType,
        method: 'GET'
      };

      delete params.machineType;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.machineTypes.list
     *
     * @desc Retrieves the list of machine type resources available to the specified project.
     *
     * @alias compute.machineTypes.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/machineTypes',
        method: 'GET'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.networks = {

    /**
     * compute.networks.delete
     *
     * @desc Deletes the specified network resource.
     *
     * @alias compute.networks.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.network - Name of the network resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'network']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/networks/' + params.network,
        method: 'DELETE'
      };

      delete params.network;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.networks.get
     *
     * @desc Returns the specified network resource.
     *
     * @alias compute.networks.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.network - Name of the network resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'network']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/networks/' + params.network,
        method: 'GET'
      };

      delete params.network;
      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.networks.insert
     *
     * @desc Creates a network resource in the specified project using the data included in the request.
     *
     * @alias compute.networks.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/networks',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.networks.list
     *
     * @desc Retrieves the list of network resources available to the specified project.
     *
     * @alias compute.networks.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/networks',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.projects = {

    /**
     * compute.projects.get
     *
     * @desc Returns the specified project resource.
     *
     * @alias compute.projects.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project resource to retrieve.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project,
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.projects.setCommonInstanceMetadata
     *
     * @desc Sets metadata common to all instances within the specified project using the data included in the request.
     *
     * @alias compute.projects.setCommonInstanceMetadata
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setCommonInstanceMetadata: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/setCommonInstanceMetadata',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.projects.setUsageExportBucket
     *
     * @desc Sets usage export location
     *
     * @alias compute.projects.setUsageExportBucket
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setUsageExportBucket: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/setUsageExportBucket',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.regionOperations = {

    /**
     * compute.regionOperations.delete
     *
     * @desc Deletes the specified region-specific operation resource.
     *
     * @alias compute.regionOperations.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - Name of the operation resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'operation']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/operations/' + params.operation,
        method: 'DELETE'
      };

      delete params.operation;
      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.regionOperations.get
     *
     * @desc Retrieves the specified region-specific operation resource.
     *
     * @alias compute.regionOperations.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - Name of the operation resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'operation']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/operations/' + params.operation,
        method: 'GET'
      };

      delete params.operation;
      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.regionOperations.list
     *
     * @desc Retrieves the list of operation resources contained within the specified region.
     *
     * @alias compute.regionOperations.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/operations',
        method: 'GET'
      };

      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.regions = {

    /**
     * compute.regions.get
     *
     * @desc Returns the specified region resource.
     *
     * @alias compute.regions.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region resource to return.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region,
        method: 'GET'
      };

      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.regions.list
     *
     * @desc Retrieves the list of region resources available to the specified project.
     *
     * @alias compute.regions.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.routes = {

    /**
     * compute.routes.delete
     *
     * @desc Deletes the specified route resource.
     *
     * @alias compute.routes.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.route - Name of the route resource to delete.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'route']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/routes/' + params.route,
        method: 'DELETE'
      };

      delete params.project;
      delete params.route;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.routes.get
     *
     * @desc Returns the specified route resource.
     *
     * @alias compute.routes.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.route - Name of the route resource to return.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'route']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/routes/' + params.route,
        method: 'GET'
      };

      delete params.project;
      delete params.route;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.routes.insert
     *
     * @desc Creates a route resource in the specified project using the data included in the request.
     *
     * @alias compute.routes.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/routes',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.routes.list
     *
     * @desc Retrieves the list of route resources available to the specified project.
     *
     * @alias compute.routes.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/routes',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.snapshots = {

    /**
     * compute.snapshots.delete
     *
     * @desc Deletes the specified persistent disk snapshot resource.
     *
     * @alias compute.snapshots.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.snapshot - Name of the persistent disk snapshot resource to delete.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'snapshot']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/snapshots/' + params.snapshot,
        method: 'DELETE'
      };

      delete params.project;
      delete params.snapshot;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.snapshots.get
     *
     * @desc Returns the specified persistent disk snapshot resource.
     *
     * @alias compute.snapshots.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.snapshot - Name of the persistent disk snapshot resource to return.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'snapshot']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/snapshots/' + params.snapshot,
        method: 'GET'
      };

      delete params.project;
      delete params.snapshot;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.snapshots.list
     *
     * @desc Retrieves the list of persistent disk snapshot resources contained within the specified project.
     *
     * @alias compute.snapshots.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/snapshots',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.targetHttpProxies = {

    /**
     * compute.targetHttpProxies.delete
     *
     * @desc Deletes the specified TargetHttpProxy resource.
     *
     * @alias compute.targetHttpProxies.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.targetHttpProxy - Name of the TargetHttpProxy resource to delete.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'targetHttpProxy']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/targetHttpProxies/' + params.targetHttpProxy,
        method: 'DELETE'
      };

      delete params.project;
      delete params.targetHttpProxy;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetHttpProxies.get
     *
     * @desc Returns the specified TargetHttpProxy resource.
     *
     * @alias compute.targetHttpProxies.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.targetHttpProxy - Name of the TargetHttpProxy resource to return.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'targetHttpProxy']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/targetHttpProxies/' + params.targetHttpProxy,
        method: 'GET'
      };

      delete params.project;
      delete params.targetHttpProxy;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetHttpProxies.insert
     *
     * @desc Creates a TargetHttpProxy resource in the specified project using the data included in the request.
     *
     * @alias compute.targetHttpProxies.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/targetHttpProxies',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetHttpProxies.list
     *
     * @desc Retrieves the list of TargetHttpProxy resources available to the specified project.
     *
     * @alias compute.targetHttpProxies.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/targetHttpProxies',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetHttpProxies.setUrlMap
     *
     * @desc Changes the URL map for TargetHttpProxy.
     *
     * @alias compute.targetHttpProxies.setUrlMap
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.targetHttpProxy - Name of the TargetHttpProxy resource whose URL map is to be set.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setUrlMap: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'targetHttpProxy']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/targetHttpProxies/' + params.targetHttpProxy + '/setUrlMap',
        method: 'POST'
      };

      delete params.project;
      delete params.targetHttpProxy;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.targetInstances = {

    /**
     * compute.targetInstances.aggregatedList
     *
     * @desc Retrieves the list of target instances grouped by scope.
     *
     * @alias compute.targetInstances.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/targetInstances',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetInstances.delete
     *
     * @desc Deletes the specified TargetInstance resource.
     *
     * @alias compute.targetInstances.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.targetInstance - Name of the TargetInstance resource to delete.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'targetInstance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/targetInstances/' + params.targetInstance,
        method: 'DELETE'
      };

      delete params.project;
      delete params.targetInstance;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetInstances.get
     *
     * @desc Returns the specified TargetInstance resource.
     *
     * @alias compute.targetInstances.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.targetInstance - Name of the TargetInstance resource to return.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'targetInstance']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/targetInstances/' + params.targetInstance,
        method: 'GET'
      };

      delete params.project;
      delete params.targetInstance;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetInstances.insert
     *
     * @desc Creates a TargetInstance resource in the specified project and zone using the data included in the request.
     *
     * @alias compute.targetInstances.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/targetInstances',
        method: 'POST'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetInstances.list
     *
     * @desc Retrieves the list of TargetInstance resources available to the specified project and zone.
     *
     * @alias compute.targetInstances.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/targetInstances',
        method: 'GET'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.targetPools = {

    /**
     * compute.targetPools.addHealthCheck
     *
     * @desc Adds health check URL to targetPool.
     *
     * @alias compute.targetPools.addHealthCheck
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project -
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {string} params.targetPool - Name of the TargetPool resource to which health_check_url is to be added.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addHealthCheck: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'targetPool']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/addHealthCheck',
        method: 'POST'
      };

      delete params.project;
      delete params.region;
      delete params.targetPool;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.addInstance
     *
     * @desc Adds instance url to targetPool.
     *
     * @alias compute.targetPools.addInstance
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project -
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {string} params.targetPool - Name of the TargetPool resource to which instance_url is to be added.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addInstance: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'targetPool']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/addInstance',
        method: 'POST'
      };

      delete params.project;
      delete params.region;
      delete params.targetPool;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.aggregatedList
     *
     * @desc Retrieves the list of target pools grouped by scope.
     *
     * @alias compute.targetPools.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/targetPools',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.delete
     *
     * @desc Deletes the specified TargetPool resource.
     *
     * @alias compute.targetPools.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {string} params.targetPool - Name of the TargetPool resource to delete.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'targetPool']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool,
        method: 'DELETE'
      };

      delete params.project;
      delete params.region;
      delete params.targetPool;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.get
     *
     * @desc Returns the specified TargetPool resource.
     *
     * @alias compute.targetPools.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {string} params.targetPool - Name of the TargetPool resource to return.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'targetPool']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool,
        method: 'GET'
      };

      delete params.project;
      delete params.region;
      delete params.targetPool;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.getHealth
     *
     * @desc Gets the most recent health check results for each IP for the given instance that is referenced by given TargetPool.
     *
     * @alias compute.targetPools.getHealth
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project -
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {string} params.targetPool - Name of the TargetPool resource to which the queried instance belongs.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getHealth: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'targetPool']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/getHealth',
        method: 'POST'
      };

      delete params.project;
      delete params.region;
      delete params.targetPool;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.insert
     *
     * @desc Creates a TargetPool resource in the specified project and region using the data included in the request.
     *
     * @alias compute.targetPools.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools',
        method: 'POST'
      };

      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.list
     *
     * @desc Retrieves the list of TargetPool resources available to the specified project and region.
     *
     * @alias compute.targetPools.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools',
        method: 'GET'
      };

      delete params.project;
      delete params.region;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.removeHealthCheck
     *
     * @desc Removes health check URL from targetPool.
     *
     * @alias compute.targetPools.removeHealthCheck
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project -
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {string} params.targetPool - Name of the TargetPool resource to which health_check_url is to be removed.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeHealthCheck: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'targetPool']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/removeHealthCheck',
        method: 'POST'
      };

      delete params.project;
      delete params.region;
      delete params.targetPool;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.removeInstance
     *
     * @desc Removes instance URL from targetPool.
     *
     * @alias compute.targetPools.removeInstance
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project -
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {string} params.targetPool - Name of the TargetPool resource to which instance_url is to be removed.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeInstance: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'targetPool']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/removeInstance',
        method: 'POST'
      };

      delete params.project;
      delete params.region;
      delete params.targetPool;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.targetPools.setBackup
     *
     * @desc Changes backup pool configurations.
     *
     * @alias compute.targetPools.setBackup
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {number=} params.failoverRatio - New failoverRatio value for the containing target pool.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.region - Name of the region scoping this request.
     * @param  {string} params.targetPool - Name of the TargetPool resource for which the backup is to be set.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setBackup: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'region', 'targetPool']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/setBackup',
        method: 'POST'
      };

      delete params.project;
      delete params.region;
      delete params.targetPool;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.urlMaps = {

    /**
     * compute.urlMaps.delete
     *
     * @desc Deletes the specified UrlMap resource.
     *
     * @alias compute.urlMaps.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.urlMap - Name of the UrlMap resource to delete.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'urlMap']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap,
        method: 'DELETE'
      };

      delete params.project;
      delete params.urlMap;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.urlMaps.get
     *
     * @desc Returns the specified UrlMap resource.
     *
     * @alias compute.urlMaps.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.urlMap - Name of the UrlMap resource to return.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'urlMap']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap,
        method: 'GET'
      };

      delete params.project;
      delete params.urlMap;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.urlMaps.insert
     *
     * @desc Creates a UrlMap resource in the specified project using the data included in the request.
     *
     * @alias compute.urlMaps.insert
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps',
        method: 'POST'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.urlMaps.list
     *
     * @desc Retrieves the list of UrlMap resources available to the specified project.
     *
     * @alias compute.urlMaps.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.urlMaps.patch
     *
     * @desc Update the entire content of the UrlMap resource. This method supports patch semantics.
     *
     * @alias compute.urlMaps.patch
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.urlMap - Name of the UrlMap resource to update.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'urlMap']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap,
        method: 'PATCH'
      };

      delete params.project;
      delete params.urlMap;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.urlMaps.update
     *
     * @desc Update the entire content of the UrlMap resource.
     *
     * @alias compute.urlMaps.update
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.urlMap - Name of the UrlMap resource to update.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'urlMap']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap,
        method: 'PUT'
      };

      delete params.project;
      delete params.urlMap;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.urlMaps.validate
     *
     * @desc Run static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
     *
     * @alias compute.urlMaps.validate
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.urlMap - Name of the UrlMap resource to be validated as.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    validate: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'urlMap']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap + '/validate',
        method: 'POST'
      };

      delete params.project;
      delete params.urlMap;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.zoneOperations = {

    /**
     * compute.zoneOperations.delete
     *
     * @desc Deletes the specified zone-specific operation resource.
     *
     * @alias compute.zoneOperations.delete
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - Name of the operation resource to delete.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'operation']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/operations/' + params.operation,
        method: 'DELETE'
      };

      delete params.operation;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.zoneOperations.get
     *
     * @desc Retrieves the specified zone-specific operation resource.
     *
     * @alias compute.zoneOperations.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - Name of the operation resource to return.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone', 'operation']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/operations/' + params.operation,
        method: 'GET'
      };

      delete params.operation;
      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.zoneOperations.list
     *
     * @desc Retrieves the list of operation resources contained within the specified zone.
     *
     * @alias compute.zoneOperations.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/operations',
        method: 'GET'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.zones = {

    /**
     * compute.zones.get
     *
     * @desc Returns the specified zone resource.
     *
     * @alias compute.zones.get
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Name of the project scoping this request.
     * @param  {string} params.zone - Name of the zone resource to return.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'zone']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone,
        method: 'GET'
      };

      delete params.project;
      delete params.zone;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * compute.zones.list
     *
     * @desc Retrieves the list of zone resources available to the specified project.
     *
     * @alias compute.zones.list
     * @memberOf! compute(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Name of the project scoping this request.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones',
        method: 'GET'
      };

      delete params.project;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Compute object
 * @type Compute
 */
module.exports = Compute;