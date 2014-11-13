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

  this.updates = {

    /**
     * replicapoolupdater.updates.cancel
     *
     * @desc Called on the particular Update endpoint. Cancels the update in state PAUSED. No-op if invoked in state CANCELLED.
     *
     * @alias replicapoolupdater.updates.cancel
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - Name of the instance group manager for this request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.update - Unique (in the context of a group) handle of an update.
     * @param  {string} params.zone - Zone for the instance group manager.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updates/{update}/cancel',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager', 'update'],
        pathParams: ['instanceGroupManager', 'project', 'update', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapoolupdater.updates.get
     *
     * @desc Called on the particular Update endpoint. Returns the Update resource.
     *
     * @alias replicapoolupdater.updates.get
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - Name of the instance group manager for this request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.update - Unique (in the context of a group) handle of an update.
     * @param  {string} params.zone - Zone for the instance group manager.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updates/{update}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager', 'update'],
        pathParams: ['instanceGroupManager', 'project', 'update', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapoolupdater.updates.insert
     *
     * @desc Called on the collection endpoint. Inserts the new Update resource and starts the update.
     *
     * @alias replicapoolupdater.updates.insert
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - Name of the instance group manager for this request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.zone - Zone for the instance group manager.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updates',
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
     * replicapoolupdater.updates.list
     *
     * @desc Called on the collection endpoint. Lists updates for a given instance group, in reverse chronological order. Pagination is supported, see ListRequestHeader.
     *
     * @alias replicapoolupdater.updates.list
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - Name of the instance group manager for this request.
     * @param  {integer=} params.maxResults - Maximum count of results to be returned. Acceptable values are 1 to 100, inclusive. (Default: 50)
     * @param  {string=} params.pageToken - Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.zone - Zone for the instance group manager.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updates',
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
     * replicapoolupdater.updates.pause
     *
     * @desc Called on the particular Update endpoint. Pauses the update in state from { ROLLING_FORWARD, ROLLING_BACK, PAUSED }. No-op if invoked in state PAUSED.
     *
     * @alias replicapoolupdater.updates.pause
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - Name of the instance group manager for this request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.update - Unique (in the context of a group) handle of an update.
     * @param  {string} params.zone - Zone for the instance group manager.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    pause: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updates/{update}/pause',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager', 'update'],
        pathParams: ['instanceGroupManager', 'project', 'update', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapoolupdater.updates.rollback
     *
     * @desc Called on the particular Update endpoint. Rolls back the update in state from { ROLLING_FORWARD, ROLLING_BACK, PAUSED }. No-op if invoked in state ROLLED_BACK.
     *
     * @alias replicapoolupdater.updates.rollback
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - Name of the instance group manager for this request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.update - Unique (in the context of a group) handle of an update.
     * @param  {string} params.zone - Zone for the instance group manager.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    rollback: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updates/{update}/rollback',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager', 'update'],
        pathParams: ['instanceGroupManager', 'project', 'update', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapoolupdater.updates.rollforward
     *
     * @desc Called on the particular Update endpoint. Rolls forward the update in state from { ROLLING_FORWARD, ROLLING_BACK, PAUSED }. No-op if invoked in state ROLLED_OUT.
     *
     * @alias replicapoolupdater.updates.rollforward
     * @memberOf! replicapoolupdater(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instanceGroupManager - Name of the instance group manager for this request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.update - Unique (in the context of a group) handle of an update.
     * @param  {string} params.zone - Zone for the instance group manager.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    rollforward: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updates/{update}/rollforward',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager', 'update'],
        pathParams: ['instanceGroupManager', 'project', 'update', 'zone'],
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