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
 * Google Container Engine API
 *
 * Builds and manages clusters that run container-based applications, powered by open source Kubernetes technology.
 *
 * @example
 * var google = require('googleapis');
 * var container = google.container('v1');
 *
 * @namespace container
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Container
 */
function Container(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    zones: {

      /**
       * container.projects.zones.getServerconfig
       *
       * @desc Returns configuration info about the Container Engine service.
       *
       * @alias container.projects.zones.getServerconfig
       * @memberOf! container(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
       * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getServerconfig: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/serverconfig',
            method: 'GET'
          },
          params: params,
          requiredParams: ['projectId', 'zone'],
          pathParams: ['projectId', 'zone'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      clusters: {

        /**
         * container.projects.zones.clusters.list
         *
         * @desc Lists all clusters owned by a project in either the specified zone or all zones.
         *
         * @alias container.projects.zones.clusters.list
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'zone'],
            pathParams: ['projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.get
         *
         * @desc Gets the details of a specific cluster.
         *
         * @alias container.projects.zones.clusters.get
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster to retrieve.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['projectId', 'zone', 'clusterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.create
         *
         * @desc Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the cluster creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range is being used by the cluster.
         *
         * @alias container.projects.zones.clusters.create
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'zone'],
            pathParams: ['projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.update
         *
         * @desc Updates the settings of a specific cluster.
         *
         * @alias container.projects.zones.clusters.update
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster to upgrade.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}',
              method: 'PUT'
            },
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['projectId', 'zone', 'clusterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.delete
         *
         * @desc Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster (e.g. load balancer resources) will not be deleted if they weren't present at the initial create time.
         *
         * @alias container.projects.zones.clusters.delete
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.clusterId The name of the cluster to delete.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['projectId', 'zone', 'clusterId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        nodePools: {

          /**
           * container.projects.zones.clusters.nodePools.list
           *
           * @desc Lists the node pools for a cluster.
           *
           * @alias container.projects.zones.clusters.nodePools.list
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {string} params.clusterId The name of the cluster.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list: function (params, callback) {
            var parameters = {
              options: {
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools',
                method: 'GET'
              },
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId'],
              pathParams: ['projectId', 'zone', 'clusterId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.get
           *
           * @desc Retrieves the node pool requested.
           *
           * @alias container.projects.zones.clusters.nodePools.get
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {string} params.clusterId The name of the cluster.
           * @param {string} params.nodePoolId The name of the node pool.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          get: function (params, callback) {
            var parameters = {
              options: {
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}',
                method: 'GET'
              },
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.create
           *
           * @desc Creates a node pool for a cluster.
           *
           * @alias container.projects.zones.clusters.nodePools.create
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {string} params.clusterId The name of the cluster.
           * @param {object} params.resource Request body data
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          create: function (params, callback) {
            var parameters = {
              options: {
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools',
                method: 'POST'
              },
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId'],
              pathParams: ['projectId', 'zone', 'clusterId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.delete
           *
           * @desc Deletes a node pool from a cluster.
           *
           * @alias container.projects.zones.clusters.nodePools.delete
           * @memberOf! container(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
           * @param {string} params.clusterId The name of the cluster.
           * @param {string} params.nodePoolId The name of the node pool to delete.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          delete: function (params, callback) {
            var parameters = {
              options: {
                url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}',
                method: 'DELETE'
              },
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      },

      operations: {

        /**
         * container.projects.zones.operations.list
         *
         * @desc Lists all operations in a project in a specific zone or all zones.
         *
         * @alias container.projects.zones.operations.list
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/operations',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'zone'],
            pathParams: ['projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.operations.get
         *
         * @desc Gets the specified operation.
         *
         * @alias container.projects.zones.operations.get
         * @memberOf! container(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {string} params.operationId The server-assigned `name` of the operation.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://container.googleapis.com/v1/projects/{projectId}/zones/{zone}/operations/{operationId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'zone', 'operationId'],
            pathParams: ['projectId', 'zone', 'operationId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

module.exports = Container;
