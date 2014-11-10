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
 * Google Compute Engine Instance Group Manager API
 *
 * @classdesc The Google Compute Engine Instance Group Manager API provides groups of homogenous Compute Engine Instances.
 * @namespace replicapool
 * @version  v1beta2
 * @variation v1beta2
 * @this Replicapool
 * @param {object=} options Options for Replicapool
 */
function Replicapool(options) {

  var self = this;
  this._options = options || {};

  this.instanceGroupManagers = {

    /**
     * replicapool.instanceGroupManagers.abandonInstances
     *
     * @desc Removes the specified instances from the managed instance group, and from any target pools of which they were members, without deleting the instances.
     *
     * @alias replicapool.instanceGroupManagers.abandonInstances
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - The name of the instance group manager.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    abandonInstances: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.instanceGroupManagers.delete
     *
     * @desc Deletes the instance group manager and all instances contained within. If you'd like to delete the manager without deleting the instances, you must first abandon the instances to remove them from the group.
     *
     * @alias replicapool.instanceGroupManagers.delete
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - Name of the Instance Group Manager resource to delete.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.instanceGroupManagers.deleteInstances
     *
     * @desc Deletes the specified instances. The instances are removed from the instance group and any target pools of which they are a member, then deleted. The targetSize of the instance group manager is reduced by the number of instances deleted.
     *
     * @alias replicapool.instanceGroupManagers.deleteInstances
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - The name of the instance group manager.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    deleteInstances: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.instanceGroupManagers.get
     *
     * @desc Returns the specified Instance Group Manager resource.
     *
     * @alias replicapool.instanceGroupManagers.get
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - Name of the instance resource to return.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.instanceGroupManagers.insert
     *
     * @desc Creates an instance group manager, as well as the instance group and the specified number of instances.
     *
     * @alias replicapool.instanceGroupManagers.insert
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {integer} params.size - Number of instances that should exist.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'size'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.instanceGroupManagers.list
     *
     * @desc Retrieves the list of Instance Group Manager resources contained within the specified zone.
     *
     * @alias replicapool.instanceGroupManagers.list
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers',
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
     * replicapool.instanceGroupManagers.recreateInstances
     *
     * @desc Recreates the specified instances. The instances are deleted, then recreated using the instance group manager's current instance template.
     *
     * @alias replicapool.instanceGroupManagers.recreateInstances
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - The name of the instance group manager.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    recreateInstances: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.instanceGroupManagers.resize
     *
     * @desc Resizes the managed instance group up or down. If resized up, new instances are created using the current instance template. If resized down, instances are removed in the order outlined in Resizing a managed instance group.
     *
     * @alias replicapool.instanceGroupManagers.resize
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - The name of the instance group manager.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {integer} params.size - Number of instances that should exist in this Instance Group Manager.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    resize: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager', 'size'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.instanceGroupManagers.setInstanceTemplate
     *
     * @desc Sets the instance template to use when creating new instances in this group. Existing instances are not affected.
     *
     * @alias replicapool.instanceGroupManagers.setInstanceTemplate
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - The name of the instance group manager.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setInstanceTemplate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.instanceGroupManagers.setTargetPools
     *
     * @desc Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
     *
     * @alias replicapool.instanceGroupManagers.setTargetPools
     * @memberOf! replicapool(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - The name of the instance group manager.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the instance group manager resides.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setTargetPools: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.zoneOperations = {

    /**
     * replicapool.zoneOperations.get
     *
     * @desc Retrieves the specified zone-specific operation resource.
     *
     * @alias replicapool.zoneOperations.get
     * @memberOf! replicapool(v1beta2)
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
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/operations/{operation}',
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
     * replicapool.zoneOperations.list
     *
     * @desc Retrieves the list of operation resources contained within the specified zone.
     *
     * @alias replicapool.zoneOperations.list
     * @memberOf! replicapool(v1beta2)
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
          url: 'https://www.googleapis.com/replicapool/v1beta2/projects/{project}/zones/{zone}/operations',
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
}

/**
 * Exports Replicapool object
 * @type Replicapool
 */
module.exports = Replicapool;