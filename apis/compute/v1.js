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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/addresses',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/addresses/' + params.address,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'address'],
        pathParams: ['address', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/addresses/' + params.address,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'address'],
        pathParams: ['address', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/addresses',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/addresses',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getHealth: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService + '/getHealth',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/backendServices/' + params.backendService,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/diskTypes',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/diskTypes/' + params.diskType,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'diskType'],
        pathParams: ['diskType', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/diskTypes',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/disks',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    createSnapshot: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks/' + params.disk + '/createSnapshot',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks/' + params.disk,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks/' + params.disk,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/disks',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls/' + params.firewall,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls/' + params.firewall,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls/' + params.firewall,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/firewalls/' + params.firewall,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/forwardingRules',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules/' + params.forwardingRule,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules/' + params.forwardingRule,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setTarget: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/forwardingRules/' + params.forwardingRule + '/setTarget',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/addresses/' + params.address,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'address'],
        pathParams: ['address', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/addresses/' + params.address,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'address'],
        pathParams: ['address', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/addresses',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/addresses',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules/' + params.forwardingRule,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules/' + params.forwardingRule,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setTarget: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/forwardingRules/' + params.forwardingRule + '/setTarget',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/operations',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/operations/' + params.operation,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/operations/' + params.operation,
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/operations',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks/' + params.httpHealthCheck,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks/' + params.httpHealthCheck,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks/' + params.httpHealthCheck,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/httpHealthChecks/' + params.httpHealthCheck,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images/' + params.image,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'image'],
        pathParams: ['image', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    deprecate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images/' + params.image + '/deprecate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'image'],
        pathParams: ['image', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images/' + params.image,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'image'],
        pathParams: ['image', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/images',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addAccessConfig: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/addAccessConfig',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'networkInterface'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/instances',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    attachDisk: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/attachDisk',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    deleteAccessConfig: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/deleteAccessConfig',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'accessConfig', 'networkInterface'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    detachDisk: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/detachDisk',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'deviceName'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getSerialPortOutput: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/serialPort',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reset: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/reset',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setDiskAutoDelete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/setDiskAutoDelete',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'autoDelete', 'deviceName'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setMetadata: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/setMetadata',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setScheduling: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/setScheduling',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setTags: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/instances/' + params.instance + '/setTags',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/licenses/' + params.license,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'license'],
        pathParams: ['license', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/machineTypes',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/machineTypes/' + params.machineType,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'machineType'],
        pathParams: ['machineType', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/machineTypes',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/networks/' + params.network,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'network'],
        pathParams: ['network', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/networks/' + params.network,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'network'],
        pathParams: ['network', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/networks',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/networks',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project,
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setCommonInstanceMetadata: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/setCommonInstanceMetadata',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setUsageExportBucket: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/setUsageExportBucket',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/operations/' + params.operation,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'operation'],
        pathParams: ['operation', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/operations/' + params.operation,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'operation'],
        pathParams: ['operation', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/routes/' + params.route,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'route'],
        pathParams: ['project', 'route'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/routes/' + params.route,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'route'],
        pathParams: ['project', 'route'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/routes',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/routes',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/snapshots/' + params.snapshot,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'snapshot'],
        pathParams: ['project', 'snapshot'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/snapshots/' + params.snapshot,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'snapshot'],
        pathParams: ['project', 'snapshot'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/snapshots',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/targetHttpProxies/' + params.targetHttpProxy,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'targetHttpProxy'],
        pathParams: ['project', 'targetHttpProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/targetHttpProxies/' + params.targetHttpProxy,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'targetHttpProxy'],
        pathParams: ['project', 'targetHttpProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/targetHttpProxies',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/targetHttpProxies',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setUrlMap: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/targetHttpProxies/' + params.targetHttpProxy + '/setUrlMap',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetHttpProxy'],
        pathParams: ['project', 'targetHttpProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/targetInstances',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/targetInstances/' + params.targetInstance,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'targetInstance'],
        pathParams: ['project', 'targetInstance', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/targetInstances/' + params.targetInstance,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'targetInstance'],
        pathParams: ['project', 'targetInstance', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/targetInstances',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/targetInstances',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addHealthCheck: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/addHealthCheck',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addInstance: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/addInstance',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/aggregated/targetPools',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getHealth: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/getHealth',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeHealthCheck: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/removeHealthCheck',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeInstance: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/removeInstance',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setBackup: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/regions/' + params.region + '/targetPools/' + params.targetPool + '/setBackup',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap,
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    validate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/global/urlMaps/' + params.urlMap + '/validate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/operations/' + params.operation,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/operations/' + params.operation,
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone + '/operations',
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones/' + params.zone,
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/' + params.project + '/zones',
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
 * Exports Compute object
 * @type Compute
 */
module.exports = Compute;