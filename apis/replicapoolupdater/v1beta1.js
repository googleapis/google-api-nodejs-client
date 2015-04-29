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
 * Google Compute Engine Instance Group Updater API
 *
 * @classdesc The Google Compute Engine Instance Group Updater API provides services for updating groups of Compute Engine Instances.
 * @namespace replicapoolupdater
 * @version  v1beta1
 * @variation v1beta1
 * @this Replicapoolupdater
 * @param {object=} options Options for Replicapoolupdater
 */
function Replicapoolupdater(options) {

  var self = this;
  this._options = options || {};

  this.rollingUpdates = {

    /**
     * replicapoolupdater.rollingUpdates.cancel
     *
     * @desc Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED.
     *
     * @alias replicapoolupdater.rollingUpdates.cancel
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.rollingUpdate - The name of the update.
     * @param  {string} params.zone - The name of the zone in which the update's target resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/cancel',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'rollingUpdate'],
        pathParams: ['project', 'rollingUpdate', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapoolupdater.rollingUpdates.get
     *
     * @desc Returns information about an update.
     *
     * @alias replicapoolupdater.rollingUpdates.get
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.rollingUpdate - The name of the update.
     * @param  {string} params.zone - The name of the zone in which the update's target resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'rollingUpdate'],
        pathParams: ['project', 'rollingUpdate', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapoolupdater.rollingUpdates.insert
     *
     * @desc Inserts and starts a new update.
     *
     * @alias replicapoolupdater.rollingUpdates.insert
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the update's target resides.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates',
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
     * replicapoolupdater.rollingUpdates.list
     *
     * @desc Lists recent updates for a given managed instance group, in reverse chronological order and paginated format.
     *
     * @alias replicapoolupdater.rollingUpdates.list
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {string=} params.instanceGroupManager - The name of the instance group manager. Use this parameter to return only updates to instances that are part of a specific instance group.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.zone - The name of the zone in which the update's target resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates',
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
     * replicapoolupdater.rollingUpdates.listInstanceUpdates
     *
     * @desc Lists the current status for each instance within a given update.
     *
     * @alias replicapoolupdater.rollingUpdates.listInstanceUpdates
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.rollingUpdate - The name of the update.
     * @param  {string} params.zone - The name of the zone in which the update's target resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listInstanceUpdates: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/instanceUpdates',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'rollingUpdate'],
        pathParams: ['project', 'rollingUpdate', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapoolupdater.rollingUpdates.pause
     *
     * @desc Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED.
     *
     * @alias replicapoolupdater.rollingUpdates.pause
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.rollingUpdate - The name of the update.
     * @param  {string} params.zone - The name of the zone in which the update's target resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    pause: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/pause',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'rollingUpdate'],
        pathParams: ['project', 'rollingUpdate', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapoolupdater.rollingUpdates.resume
     *
     * @desc Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT.
     *
     * @alias replicapoolupdater.rollingUpdates.resume
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.rollingUpdate - The name of the update.
     * @param  {string} params.zone - The name of the zone in which the update's target resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    resume: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/resume',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'rollingUpdate'],
        pathParams: ['project', 'rollingUpdate', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapoolupdater.rollingUpdates.rollback
     *
     * @desc Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK.
     *
     * @alias replicapoolupdater.rollingUpdates.rollback
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The Google Developers Console project name.
     * @param  {string} params.rollingUpdate - The name of the update.
     * @param  {string} params.zone - The name of the zone in which the update's target resides.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    rollback: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/rollback',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'rollingUpdate'],
        pathParams: ['project', 'rollingUpdate', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.zoneOperations = {

    /**
     * replicapoolupdater.zoneOperations.get
     *
     * @desc Retrieves the specified zone-specific operation resource.
     *
     * @alias replicapoolupdater.zoneOperations.get
     * @memberOf! replicapoolupdater(v1beta1)
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
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Replicapoolupdater object
 * @type Replicapoolupdater
 */
module.exports = Replicapoolupdater;