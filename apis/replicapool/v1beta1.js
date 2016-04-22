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
 * Replica Pool API
 *
 * The Replica Pool API allows users to declaratively provision and manage groups of Google Compute Engine instances based on a common template.
 *
 * @example
 * var google = require('googleapis');
 * var replicapool = google.replicapool('v1beta1');
 *
 * @namespace replicapool
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Replicapool
 */
function Replicapool(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.pools = {

    /**
     * replicapool.pools.delete
     *
     * @desc Deletes a replica pool.
     *
     * @alias replicapool.pools.delete
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The name of the replica pool for this request.
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.pools.get
     *
     * @desc Gets information about a single replica pool.
     *
     * @alias replicapool.pools.get
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The name of the replica pool for this request.
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.pools.insert
     *
     * @desc Inserts a new replica pool.
     *
     * @alias replicapool.pools.insert
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools',
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
     * replicapool.pools.list
     *
     * @desc List all replica pools.
     *
     * @alias replicapool.pools.list
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
     * @param {string=} params.pageToken Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.zone The zone for this replica pool.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools',
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
     * replicapool.pools.resize
     *
     * @desc Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
     *
     * @alias replicapool.pools.resize
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.numReplicas The desired number of replicas to resize to. If this number is larger than the existing number of replicas, new replicas will be added. If the number is smaller, then existing replicas will be deleted.
     * @param {string} params.poolName The name of the replica pool for this request.
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resize: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/resize',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.pools.updatetemplate
     *
     * @desc Update the template used by the pool.
     *
     * @alias replicapool.pools.updatetemplate
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The name of the replica pool for this request.
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updatetemplate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/updateTemplate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.replicas = {

    /**
     * replicapool.replicas.delete
     *
     * @desc Deletes a replica from the pool.
     *
     * @alias replicapool.replicas.delete
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The replica pool name for this request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.replicaName The name of the replica for this request.
     * @param {string} params.zone The zone where the replica lives.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'poolName', 'replicaName'],
        pathParams: ['poolName', 'projectName', 'replicaName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.replicas.get
     *
     * @desc Gets information about a specific replica.
     *
     * @alias replicapool.replicas.get
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The replica pool name for this request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.replicaName The name of the replica for this request.
     * @param {string} params.zone The zone where the replica lives.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'poolName', 'replicaName'],
        pathParams: ['poolName', 'projectName', 'replicaName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.replicas.list
     *
     * @desc Lists all replicas in a pool.
     *
     * @alias replicapool.replicas.list
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
     * @param {string=} params.pageToken Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
     * @param {string} params.poolName The replica pool name for this request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.zone The zone where the replica pool lives.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * replicapool.replicas.restart
     *
     * @desc Restarts a replica in a pool.
     *
     * @alias replicapool.replicas.restart
     * @memberOf! replicapool(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The replica pool name for this request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.replicaName The name of the replica for this request.
     * @param {string} params.zone The zone where the replica lives.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    restart: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}/restart',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectName', 'zone', 'poolName', 'replicaName'],
        pathParams: ['poolName', 'projectName', 'replicaName', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Replicapool;
