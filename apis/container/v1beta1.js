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
 * Google Container Engine API
 *
 * @classdesc The Google Container Engine API is used for building and managing container based applications, powered by the open source Kubernetes technology.
 * @namespace container
 * @version  v1beta1
 * @variation v1beta1
 * @this Container
 * @param {object=} options Options for Container
 */
function Container(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    clusters: {

      /**
       * container.projects.clusters.list
       *
       * @desc Lists all clusters owned by a project across all zones.
       *
       * @alias container.projects.clusters.list
       * @memberOf! container(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - The Google Developers Console project ID or  project number.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/container/v1beta1/projects/{projectId}/clusters',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    operations: {

      /**
       * container.projects.operations.list
       *
       * @desc Lists all operations in a project, across all zones.
       *
       * @alias container.projects.operations.list
       * @memberOf! container(v1beta1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.projectId - The Google Developers Console project ID or  project number.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/container/v1beta1/projects/{projectId}/operations',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    zones: {

      clusters: {

        /**
         * container.projects.zones.clusters.create
         *
         * @desc Creates a cluster, consisting of the specified number and type of Google Compute Engine instances, plus a Kubernetes master instance.  The cluster is created in the project's default network.  A firewall is added that allows traffic into port 443 on the master, which enables HTTPS. A firewall and a route is added for each node to allow the containers on that node to communicate with all other instances in the cluster.  Finally, a route named k8s-iproute-10-xx-0-0 is created to track that the cluster's 10.xx.0.0/16 CIDR has been assigned.
         *
         * @alias container.projects.zones.clusters.create
         * @memberOf! container(v1beta1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The Google Developers Console project ID or  project number.
         * @param  {string} params.zoneId - The name of the Google Compute Engine zone in which the cluster resides.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/container/v1beta1/projects/{projectId}/zones/{zoneId}/clusters',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'zoneId'],
            pathParams: ['projectId', 'zoneId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.delete
         *
         * @desc Deletes the cluster, including the Kubernetes master and all worker nodes.  Firewalls and routes that were configured at cluster creation are also deleted.
         *
         * @alias container.projects.zones.clusters.delete
         * @memberOf! container(v1beta1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.clusterId - The name of the cluster to delete.
         * @param  {string} params.projectId - The Google Developers Console project ID or  project number.
         * @param  {string} params.zoneId - The name of the Google Compute Engine zone in which the cluster resides.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/container/v1beta1/projects/{projectId}/zones/{zoneId}/clusters/{clusterId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['projectId', 'zoneId', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zoneId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.get
         *
         * @desc Gets a specific cluster.
         *
         * @alias container.projects.zones.clusters.get
         * @memberOf! container(v1beta1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.clusterId - The name of the cluster to retrieve.
         * @param  {string} params.projectId - The Google Developers Console project ID or  project number.
         * @param  {string} params.zoneId - The name of the Google Compute Engine zone in which the cluster resides.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/container/v1beta1/projects/{projectId}/zones/{zoneId}/clusters/{clusterId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'zoneId', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zoneId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.list
         *
         * @desc Lists all clusters owned by a project in the specified zone.
         *
         * @alias container.projects.zones.clusters.list
         * @memberOf! container(v1beta1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The Google Developers Console project ID or  project number.
         * @param  {string} params.zoneId - The name of the Google Compute Engine zone in which the cluster resides.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/container/v1beta1/projects/{projectId}/zones/{zoneId}/clusters',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'zoneId'],
            pathParams: ['projectId', 'zoneId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      operations: {

        /**
         * container.projects.zones.operations.get
         *
         * @desc Gets the specified operation.
         *
         * @alias container.projects.zones.operations.get
         * @memberOf! container(v1beta1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.operationId - The server-assigned name of the operation.
         * @param  {string} params.projectId - The Google Developers Console project ID or  project number.
         * @param  {string} params.zoneId - The name of the Google Compute Engine zone in which the operation resides. This is always the same zone as the cluster with which the operation is associated.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/container/v1beta1/projects/{projectId}/zones/{zoneId}/operations/{operationId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'zoneId', 'operationId'],
            pathParams: ['operationId', 'projectId', 'zoneId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.operations.list
         *
         * @desc Lists all operations in a project in a specific zone.
         *
         * @alias container.projects.zones.operations.list
         * @memberOf! container(v1beta1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.projectId - The Google Developers Console project ID or  project number.
         * @param  {string} params.zoneId - The name of the Google Compute Engine zone to return operations for.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/container/v1beta1/projects/{projectId}/zones/{zoneId}/operations',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'zoneId'],
            pathParams: ['projectId', 'zoneId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * Exports Container object
 * @type Container
 */
module.exports = Container;