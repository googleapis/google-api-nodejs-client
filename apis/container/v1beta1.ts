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

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Google Container Engine API
 *
 * The Google Container Engine API is used for building and managing container based applications, powered by the open source Kubernetes technology.
 *
 * @example
 * const google = require('googleapis');
 * const container = google.container('v1beta1');
 *
 * @namespace container
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Container
 */
function Container(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {
    locations: {

      /**
       * container.projects.locations.getServerConfig
       *
       * @desc Returns configuration info about the Container Engine service.
       *
       * @alias container.projects.locations.getServerConfig
       * @memberOf! container(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name (project and location) of the server config to get Specified in the format 'projects/x/locations/x'.
       * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
       * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field is deprecated, use name instead.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getServerConfig: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1beta1/{name}/serverConfig').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      clusters: {

        /**
         * container.projects.locations.clusters.completeIpRotation
         *
         * @desc Completes master IP rotation.
         *
         * @alias container.projects.locations.clusters.completeIpRotation
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).CompleteIPRotationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        completeIpRotation: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:completeIpRotation').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.create
         *
         * @desc Creates a cluster, consisting of the specified number and type of Google Compute Engine instances.  By default, the cluster is created in the project's [default network](/compute/docs/networks-and-firewalls#networks).  One firewall is added for the cluster. After cluster creation, the cluster creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster.  Finally, an entry is added to the project's global metadata indicating which CIDR range is being used by the cluster.
         *
         * @alias container.projects.locations.clusters.create
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The parent (project and location) where the cluster will be created. Specified in the format 'projects/x/locations/x'.
         * @param {container(v1beta1).CreateClusterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}/clusters').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.delete
         *
         * @desc Deletes the cluster, including the Kubernetes endpoint and all worker nodes.  Firewalls and routes that were configured during cluster creation are also deleted.  Other Google Compute Engine resources that might be in use by the cluster (e.g. load balancer resources) will not be deleted if they weren't present at the initial create time.
         *
         * @alias container.projects.locations.clusters.delete
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clusterId The name of the cluster to delete. This field is deprecated, use name instead.
         * @param {string} params.name The name (project, location, cluster) of the cluster to delete. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.get
         *
         * @desc Gets the details of a specific cluster.
         *
         * @alias container.projects.locations.clusters.get
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clusterId The name of the cluster to retrieve. This field is deprecated, use name instead.
         * @param {string} params.name The name (project, location, cluster) of the cluster to retrieve. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.list
         *
         * @desc Lists all clusters owned by a project in either the specified zone or all zones.
         *
         * @alias container.projects.locations.clusters.list
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The parent (project and location) where the clusters will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
         * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
         * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field is deprecated, use parent instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}/clusters').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.setAddons
         *
         * @desc Sets the addons of a specific cluster.
         *
         * @alias container.projects.locations.clusters.setAddons
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster) of the cluster to set addons. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).SetAddonsConfigRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setAddons: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:setAddons').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.setLegacyAbac
         *
         * @desc Enables or disables the ABAC authorization mechanism on a cluster.
         *
         * @alias container.projects.locations.clusters.setLegacyAbac
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).SetLegacyAbacRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLegacyAbac: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:setLegacyAbac').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.setLocations
         *
         * @desc Sets the locations of a specific cluster.
         *
         * @alias container.projects.locations.clusters.setLocations
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster) of the cluster to set locations. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).SetLocationsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLocations: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:setLocations').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.setLogging
         *
         * @desc Sets the logging service of a specific cluster.
         *
         * @alias container.projects.locations.clusters.setLogging
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster) of the cluster to set logging. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).SetLoggingServiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLogging: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:setLogging').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.setMaintenancePolicy
         *
         * @desc Sets the maintenance policy for a cluster.
         *
         * @alias container.projects.locations.clusters.setMaintenancePolicy
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).SetMaintenancePolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMaintenancePolicy: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:setMaintenancePolicy').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.setMasterAuth
         *
         * @desc Used to set master auth materials. Currently supports :- Changing the admin password of a specific cluster. This can be either via password generation or explicitly set. Modify basic_auth.csv and reset the K8S API server.
         *
         * @alias container.projects.locations.clusters.setMasterAuth
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster) of the cluster to set auth. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).SetMasterAuthRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMasterAuth: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:setMasterAuth').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.setMonitoring
         *
         * @desc Sets the monitoring service of a specific cluster.
         *
         * @alias container.projects.locations.clusters.setMonitoring
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster) of the cluster to set monitoring. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).SetMonitoringServiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMonitoring: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:setMonitoring').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.setNetworkPolicy
         *
         * @desc Enables/Disables Network Policy for a cluster.
         *
         * @alias container.projects.locations.clusters.setNetworkPolicy
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).SetNetworkPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setNetworkPolicy: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:setNetworkPolicy').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.setResourceLabels
         *
         * @desc Sets labels on a cluster.
         *
         * @alias container.projects.locations.clusters.setResourceLabels
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster id) of the cluster to set labels. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).SetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setResourceLabels: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:setResourceLabels').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.startIpRotation
         *
         * @desc Start master IP rotation.
         *
         * @alias container.projects.locations.clusters.startIpRotation
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).StartIPRotationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startIpRotation: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:startIpRotation').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.update
         *
         * @desc Updates the settings of a specific cluster.
         *
         * @alias container.projects.locations.clusters.update
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster) of the cluster to update. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).UpdateClusterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.clusters.updateMaster
         *
         * @desc Updates the master of a specific cluster.
         *
         * @alias container.projects.locations.clusters.updateMaster
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, cluster) of the cluster to update. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {container(v1beta1).UpdateMasterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateMaster: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:updateMaster').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },
        nodePools: {

          /**
           * container.projects.locations.clusters.nodePools.create
           *
           * @desc Creates a node pool for a cluster.
           *
           * @alias container.projects.locations.clusters.nodePools.create
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent The parent (project, location, cluster id) where the node pool will be created. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
           * @param {container(v1beta1).CreateNodePoolRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          create: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{parent}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.locations.clusters.nodePools.delete
           *
           * @desc Deletes a node pool from a cluster.
           *
           * @alias container.projects.locations.clusters.nodePools.delete
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.clusterId The name of the cluster. This field is deprecated, use name instead.
           * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
           * @param {string=} params.nodePoolId The name of the node pool to delete. This field is deprecated, use name instead.
           * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
           * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          delete: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.locations.clusters.nodePools.get
           *
           * @desc Retrieves the node pool requested.
           *
           * @alias container.projects.locations.clusters.nodePools.get
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.clusterId The name of the cluster. This field is deprecated, use name instead.
           * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
           * @param {string=} params.nodePoolId The name of the node pool. This field is deprecated, use name instead.
           * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
           * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          get: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.locations.clusters.nodePools.list
           *
           * @desc Lists the node pools for a cluster.
           *
           * @alias container.projects.locations.clusters.nodePools.list
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.clusterId The name of the cluster. This field is deprecated, use parent instead.
           * @param {string} params.parent The parent (project, location, cluster id) where the node pools will be listed. Specified in the format 'projects/x/locations/x/clusters/x'.
           * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use parent instead.
           * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use parent instead.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{parent}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.locations.clusters.nodePools.rollback
           *
           * @desc Roll back the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
           *
           * @alias container.projects.locations.clusters.nodePools.rollback
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
           * @param {container(v1beta1).RollbackNodePoolUpgradeRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          rollback: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}:rollback').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.locations.clusters.nodePools.setAutoscaling
           *
           * @desc Sets the autoscaling settings of a specific node pool.
           *
           * @alias container.projects.locations.clusters.nodePools.setAutoscaling
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
           * @param {container(v1beta1).SetNodePoolAutoscalingRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          setAutoscaling: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}:setAutoscaling').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.locations.clusters.nodePools.setManagement
           *
           * @desc Sets the NodeManagement options for a node pool.
           *
           * @alias container.projects.locations.clusters.nodePools.setManagement
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
           * @param {container(v1beta1).SetNodePoolManagementRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          setManagement: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}:setManagement').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.locations.clusters.nodePools.update
           *
           * @desc Updates the version and/or iamge type of a specific node pool.
           *
           * @alias container.projects.locations.clusters.nodePools.update
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name (project, location, cluster, node pool) of the node pool to update. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
           * @param {container(v1beta1).UpdateNodePoolRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          update: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      },
      operations: {

        /**
         * container.projects.locations.operations.cancel
         *
         * @desc Cancels the specified operation.
         *
         * @alias container.projects.locations.operations.cancel
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, operation id) of the operation to cancel. Specified in the format 'projects/x/locations/x/operations/x'.
         * @param {container(v1beta1).CancelOperationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.operations.get
         *
         * @desc Gets the specified operation.
         *
         * @alias container.projects.locations.operations.get
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name (project, location, operation id) of the operation to get. Specified in the format 'projects/x/locations/x/operations/x'.
         * @param {string=} params.operationId The server-assigned `name` of the operation. This field is deprecated, use name instead.
         * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.locations.operations.list
         *
         * @desc Lists all operations in a project in a specific zone or all zones.
         *
         * @alias container.projects.locations.operations.list
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The parent (project and location) where the operations will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
         * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
         * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones. This field is deprecated, use parent instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}/operations').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },
    zones: {

      /**
       * container.projects.zones.getServerconfig
       *
       * @desc Returns configuration info about the Container Engine service.
       *
       * @alias container.projects.zones.getServerconfig
       * @memberOf! container(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.name The name (project and location) of the server config to get Specified in the format 'projects/x/locations/x'.
       * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
       * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field is deprecated, use name instead.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getServerconfig: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/serverconfig').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['projectId', 'zone'],
          pathParams: ['projectId', 'zone'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      clusters: {

        /**
         * container.projects.zones.clusters.addons
         *
         * @desc Sets the addons of a specific cluster.
         *
         * @alias container.projects.zones.clusters.addons
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).SetAddonsConfigRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addons: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.completeIpRotation
         *
         * @desc Completes master IP rotation.
         *
         * @alias container.projects.zones.clusters.completeIpRotation
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).CompleteIPRotationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        completeIpRotation: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.create
         *
         * @desc Creates a cluster, consisting of the specified number and type of Google Compute Engine instances.  By default, the cluster is created in the project's [default network](/compute/docs/networks-and-firewalls#networks).  One firewall is added for the cluster. After cluster creation, the cluster creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster.  Finally, an entry is added to the project's global metadata indicating which CIDR range is being used by the cluster.
         *
         * @alias container.projects.zones.clusters.create
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use parent instead.
         * @param {container(v1beta1).CreateClusterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone'],
            pathParams: ['projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.delete
         *
         * @desc Deletes the cluster, including the Kubernetes endpoint and all worker nodes.  Firewalls and routes that were configured during cluster creation are also deleted.  Other Google Compute Engine resources that might be in use by the cluster (e.g. load balancer resources) will not be deleted if they weren't present at the initial create time.
         *
         * @alias container.projects.zones.clusters.delete
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to delete. This field is deprecated, use name instead.
         * @param {string=} params.name The name (project, location, cluster) of the cluster to delete. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
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
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to retrieve. This field is deprecated, use name instead.
         * @param {string=} params.name The name (project, location, cluster) of the cluster to retrieve. Specified in the format 'projects/x/locations/x/clusters/x'.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.legacyAbac
         *
         * @desc Enables or disables the ABAC authorization mechanism on a cluster.
         *
         * @alias container.projects.zones.clusters.legacyAbac
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to update. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).SetLegacyAbacRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        legacyAbac: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.list
         *
         * @desc Lists all clusters owned by a project in either the specified zone or all zones.
         *
         * @alias container.projects.zones.clusters.list
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.parent The parent (project and location) where the clusters will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field is deprecated, use parent instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone'],
            pathParams: ['projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.locations
         *
         * @desc Sets the locations of a specific cluster.
         *
         * @alias container.projects.zones.clusters.locations
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).SetLocationsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        locations: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.logging
         *
         * @desc Sets the logging service of a specific cluster.
         *
         * @alias container.projects.zones.clusters.logging
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {container(v1beta1).SetLoggingServiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        logging: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.master
         *
         * @desc Updates the master of a specific cluster.
         *
         * @alias container.projects.zones.clusters.master
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).UpdateMasterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        master: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.monitoring
         *
         * @desc Sets the monitoring service of a specific cluster.
         *
         * @alias container.projects.zones.clusters.monitoring
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).SetMonitoringServiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        monitoring: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.resourceLabels
         *
         * @desc Sets labels on a cluster.
         *
         * @alias container.projects.zones.clusters.resourceLabels
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).SetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resourceLabels: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.setMaintenancePolicy
         *
         * @desc Sets the maintenance policy for a cluster.
         *
         * @alias container.projects.zones.clusters.setMaintenancePolicy
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to update.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
         * @param {container(v1beta1).SetMaintenancePolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMaintenancePolicy: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.setMasterAuth
         *
         * @desc Used to set master auth materials. Currently supports :- Changing the admin password of a specific cluster. This can be either via password generation or explicitly set. Modify basic_auth.csv and reset the K8S API server.
         *
         * @alias container.projects.zones.clusters.setMasterAuth
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).SetMasterAuthRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMasterAuth: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.setNetworkPolicy
         *
         * @desc Enables/Disables Network Policy for a cluster.
         *
         * @alias container.projects.zones.clusters.setNetworkPolicy
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).SetNetworkPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setNetworkPolicy: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.clusters.startIpRotation
         *
         * @desc Start master IP rotation.
         *
         * @alias container.projects.zones.clusters.startIpRotation
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).StartIPRotationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startIpRotation: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
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
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).UpdateClusterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'clusterId'],
            pathParams: ['clusterId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },
        nodePools: {

          /**
           * container.projects.zones.clusters.nodePools.autoscaling
           *
           * @desc Sets the autoscaling settings of a specific node pool.
           *
           * @alias container.projects.zones.clusters.nodePools.autoscaling
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
           * @param {string} params.nodePoolId The name of the node pool to upgrade. This field is deprecated, use name instead.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
           * @param {container(v1beta1).SetNodePoolAutoscalingRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          autoscaling: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId The name of the cluster. This field is deprecated, use parent instead.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use parent instead.
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use parent instead.
           * @param {container(v1beta1).CreateNodePoolRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          create: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId'],
              pathParams: ['clusterId', 'projectId', 'zone'],
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
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
           * @param {string=} params.name The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
           * @param {string} params.nodePoolId The name of the node pool to delete. This field is deprecated, use name instead.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          delete: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
           * @param {string=} params.name The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
           * @param {string} params.nodePoolId The name of the node pool. This field is deprecated, use name instead.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          get: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.list
           *
           * @desc Lists the node pools for a cluster.
           *
           * @alias container.projects.zones.clusters.nodePools.list
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId The name of the cluster. This field is deprecated, use parent instead.
           * @param {string=} params.parent The parent (project, location, cluster id) where the node pools will be listed. Specified in the format 'projects/x/locations/x/clusters/x'.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use parent instead.
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use parent instead.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId'],
              pathParams: ['clusterId', 'projectId', 'zone'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.rollback
           *
           * @desc Roll back the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
           *
           * @alias container.projects.zones.clusters.nodePools.rollback
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId The name of the cluster to rollback. This field is deprecated, use name instead.
           * @param {string} params.nodePoolId The name of the node pool to rollback. This field is deprecated, use name instead.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
           * @param {container(v1beta1).RollbackNodePoolUpgradeRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          rollback: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.setManagement
           *
           * @desc Sets the NodeManagement options for a node pool.
           *
           * @alias container.projects.zones.clusters.nodePools.setManagement
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId The name of the cluster to update. This field is deprecated, use name instead.
           * @param {string} params.nodePoolId The name of the node pool to update. This field is deprecated, use name instead.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
           * @param {container(v1beta1).SetNodePoolManagementRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          setManagement: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * container.projects.zones.clusters.nodePools.update
           *
           * @desc Updates the version and/or iamge type of a specific node pool.
           *
           * @alias container.projects.zones.clusters.nodePools.update
           * @memberOf! container(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
           * @param {string} params.nodePoolId The name of the node pool to upgrade. This field is deprecated, use name instead.
           * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
           * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
           * @param {container(v1beta1).UpdateNodePoolRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          update: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
              pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      },
      operations: {

        /**
         * container.projects.zones.operations.cancel
         *
         * @desc Cancels the specified operation.
         *
         * @alias container.projects.zones.operations.cancel
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operationId The server-assigned `name` of the operation. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation resides. This field is deprecated, use name instead.
         * @param {container(v1beta1).CancelOperationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'operationId'],
            pathParams: ['operationId', 'projectId', 'zone'],
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
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.name The name (project, location, operation id) of the operation to get. Specified in the format 'projects/x/locations/x/operations/x'.
         * @param {string} params.operationId The server-assigned `name` of the operation. This field is deprecated, use name instead.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone', 'operationId'],
            pathParams: ['operationId', 'projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * container.projects.zones.operations.list
         *
         * @desc Lists all operations in a project in a specific zone or all zones.
         *
         * @alias container.projects.zones.operations.list
         * @memberOf! container(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.parent The parent (project and location) where the operations will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
         * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
         * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones. This field is deprecated, use parent instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://container.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/operations').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['projectId', 'zone'],
            pathParams: ['projectId', 'zone'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * @typedef AcceleratorConfig
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} acceleratorCount The number of the accelerator cards exposed to an instance.
* @property {string} acceleratorType The accelerator type resource name. List of supported accelerators
[here](/compute/docs/gpus/#Introduction)
*/

/**
 * @typedef AddonsConfig
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).HorizontalPodAutoscaling} horizontalPodAutoscaling Configuration for the horizontal pod autoscaling feature, which
increases or decreases the number of replica pods a replication controller
has based on the resource usage of the existing pods.
* @property {container(v1beta1).HttpLoadBalancing} httpLoadBalancing Configuration for the HTTP (L7) load balancing controller addon, which
makes it easy to set up HTTP load balancers for services in a cluster.
* @property {container(v1beta1).KubernetesDashboard} kubernetesDashboard Configuration for the Kubernetes Dashboard.
* @property {container(v1beta1).NetworkPolicyConfig} networkPolicyConfig Configuration for NetworkPolicy. This only tracks whether the addon
is enabled or not on the Master, it does not track whether network policy
is enabled for the nodes.
*/

/**
 * @typedef AutoUpgradeOptions
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} autoUpgradeStartTime [Output only] This field is set when upgrades are about to commence
with the approximate start time for the upgrades, in
[RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* @property {string} description [Output only] This field is set when upgrades are about to commence
with the description of the upgrade.
*/

/**
 * @typedef CancelOperationRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} name The name (project, location, operation id) of the operation to cancel.
Specified in the format &#39;projects/x/locations/x/operations/*&#39;.
* @property {string} operationId The server-assigned `name` of the operation.
This field is deprecated, use name instead.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the operation resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef CidrBlock
 * @memberOf! container(v1beta1)
 * @type object
 * @property {string} cidrBlock cidr_block must be specified in CIDR notation.
 * @property {string} displayName display_name is an optional field for users to identify CIDR blocks.
 */

/**
 * @typedef ClientCertificateConfig
 * @memberOf! container(v1beta1)
 * @type object
 * @property {boolean} issueClientCertificate Issue a client certificate.
 */

/**
 * @typedef Cluster
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).AddonsConfig} addonsConfig Configurations for the various addons available to run in the cluster.
* @property {string} clusterIpv4Cidr The IP address range of the container pods in this cluster, in
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `10.96.0.0/14`). Leave blank to have
one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
* @property {string} createTime [Output only] The time the cluster was created, in
[RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* @property {string} currentMasterVersion [Output only] The current software version of the master endpoint.
* @property {integer} currentNodeCount [Output only] The number of nodes currently in the cluster.
* @property {string} currentNodeVersion [Output only] The current version of the node software components.
If they are currently at multiple versions because they&#39;re in the process
of being upgraded, this reflects the minimum version of all nodes.
* @property {string} description An optional description of this cluster.
* @property {boolean} enableKubernetesAlpha Kubernetes alpha features are enabled on this cluster. This includes alpha
API groups (e.g. v1beta1) and features that may not be production ready in
the kubernetes version of the master and nodes.
The cluster has no SLA for uptime and master/node upgrades are disabled.
Alpha enabled clusters are automatically deleted thirty days after
creation.
* @property {string} endpoint [Output only] The IP address of this cluster&#39;s master endpoint.
The endpoint can be accessed from the internet at
`https://username:password@endpoint/`.

See the `masterAuth` property of this resource for username and
password information.
* @property {string} expireTime [Output only] The time the cluster will be automatically
deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* @property {string} initialClusterVersion The initial Kubernetes version for this cluster.  Valid versions are those
found in validMasterVersions returned by getServerConfig.  The version can
be upgraded over time; such upgrades are reflected in
currentMasterVersion and currentNodeVersion.
* @property {integer} initialNodeCount The number of nodes to create in this cluster. You must ensure that your
Compute Engine &lt;a href=&quot;/compute/docs/resource-quotas&quot;&gt;resource quota&lt;/a&gt;
is sufficient for this number of instances. You must also have available
firewall and routes quota.
For requests, this field should only be used in lieu of a
&quot;node_pool&quot; object, since this configuration (along with the
&quot;node_config&quot;) will be used to create a &quot;NodePool&quot; object with an
auto-generated name. Do not use this and a node_pool at the same time.
* @property {string[]} instanceGroupUrls Deprecated. Use node_pools.instance_group_urls.
* @property {container(v1beta1).IPAllocationPolicy} ipAllocationPolicy Configuration for cluster IP allocation.
* @property {string} location [Output only] The name of the Google Compute Engine
[zone](/compute/docs/regions-zones/regions-zones#available) or
[region](/compute/docs/regions-zones/regions-zones#available) in which
the cluster resides.
* @property {string[]} locations The list of Google Compute Engine
[locations](/compute/docs/zones#available) in which the cluster&#39;s nodes
should be located.
* @property {string} loggingService The logging service the cluster should use to write logs.
Currently available options:

* `logging.googleapis.com` - the Google Cloud Logging service.
* `none` - no logs will be exported from the cluster.
* if left as an empty string,`logging.googleapis.com` will be used.
* @property {container(v1beta1).MaintenancePolicy} maintenancePolicy Configure the maintenance policy for this cluster.
* @property {container(v1beta1).MasterAuth} masterAuth The authentication information for accessing the master endpoint.
* @property {container(v1beta1).MasterAuthorizedNetworksConfig} masterAuthorizedNetworksConfig The configuration options for master authorized networks feature.
* @property {string} monitoringService The monitoring service the cluster should use to write metrics.
Currently available options:

* `monitoring.googleapis.com` - the Google Cloud Monitoring service.
* `none` - no metrics will be exported from the cluster.
* if left as an empty string, `monitoring.googleapis.com` will be used.
* @property {string} name The name of this cluster. The name must be unique within this project
and zone, and can be up to 40 characters with the following restrictions:

* Lowercase letters, numbers, and hyphens only.
* Must start with a letter.
* Must end with a number or a letter.
* @property {string} network The name of the Google Compute Engine
[network](/compute/docs/networks-and-firewalls#networks) to which the
cluster is connected. If left unspecified, the `default` network
will be used.
* @property {container(v1beta1).NetworkPolicy} networkPolicy Configuration options for the NetworkPolicy feature.
* @property {container(v1beta1).NodeConfig} nodeConfig Parameters used in creating the cluster&#39;s nodes.
See `nodeConfig` for the description of its properties.
For requests, this field should only be used in lieu of a
&quot;node_pool&quot; object, since this configuration (along with the
&quot;initial_node_count&quot;) will be used to create a &quot;NodePool&quot; object with an
auto-generated name. Do not use this and a node_pool at the same time.
For responses, this field will be populated with the node configuration of
the first node pool.

If unspecified, the defaults are used.
* @property {integer} nodeIpv4CidrSize [Output only] The size of the address space on each node for hosting
containers. This is provisioned from within the `container_ipv4_cidr`
range.
* @property {container(v1beta1).NodePool[]} nodePools The node pools associated with this cluster.
This field should not be set if &quot;node_config&quot; or &quot;initial_node_count&quot; are
specified.
* @property {container(v1beta1).PodSecurityPolicyConfig} podSecurityPolicyConfig Configuration for the PodSecurityPolicy feature.
* @property {string} selfLink [Output only] Server-defined URL for the resource.
* @property {string} servicesIpv4Cidr [Output only] The IP address range of the Kubernetes services in
this cluster, in
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `1.2.3.4/29`). Service addresses are
typically put in the last `/16` from the container CIDR.
* @property {string} status [Output only] The current status of this cluster.
* @property {string} statusMessage [Output only] Additional information about the current status of this
cluster, if available.
* @property {string} subnetwork The name of the Google Compute Engine
[subnetwork](/compute/docs/subnetworks) to which the
cluster is connected.
* @property {string} zone [Output only] The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use location instead.
*/

/**
 * @typedef ClusterUpdate
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).AddonsConfig} desiredAddonsConfig Configurations for the various addons available to run in the cluster.
* @property {string} desiredImageType The desired image type for the node pool.
NOTE: Set the &quot;desired_node_pool&quot; field as well.
* @property {string[]} desiredLocations The desired list of Google Compute Engine
[locations](/compute/docs/zones#available) in which the cluster&#39;s nodes
should be located. Changing the locations a cluster is in will result
in nodes being either created or removed from the cluster, depending on
whether locations are being added or removed.

This list must always include the cluster&#39;s primary zone.
* @property {container(v1beta1).MasterAuthorizedNetworksConfig} desiredMasterAuthorizedNetworksConfig The desired configuration options for master authorized networks feature.
* @property {string} desiredMasterVersion The Kubernetes version to change the master to. The only valid value is the
latest supported version. Use &quot;-&quot; to have the server automatically select
the latest version.
* @property {string} desiredMonitoringService The monitoring service the cluster should use to write metrics.
Currently available options:

* &quot;monitoring.googleapis.com&quot; - the Google Cloud Monitoring service
* &quot;none&quot; - no metrics will be exported from the cluster
* @property {container(v1beta1).NodePoolAutoscaling} desiredNodePoolAutoscaling Autoscaler configuration for the node pool specified in
desired_node_pool_id. If there is only one pool in the
cluster and desired_node_pool_id is not provided then
the change applies to that single node pool.
* @property {string} desiredNodePoolId The node pool to be upgraded. This field is mandatory if
&quot;desired_node_version&quot;, &quot;desired_image_family&quot; or
&quot;desired_node_pool_autoscaling&quot; is specified and there is more than one
node pool on the cluster.
* @property {string} desiredNodeVersion The Kubernetes version to change the nodes to (typically an
upgrade). Use `-` to upgrade to the latest version supported by
the server.
* @property {container(v1beta1).PodSecurityPolicyConfig} desiredPodSecurityPolicyConfig The desired configuration options for the PodSecurityPolicy feature.
*/

/**
 * @typedef CompleteIPRotationRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster.
This field is deprecated, use name instead.
* @property {string} name The name (project, location, cluster id) of the cluster to complete IP rotation.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef CreateClusterRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).Cluster} cluster A [cluster
resource](/container-engine/reference/rest/v1beta1/projects.zones.clusters)
* @property {string} parent The parent (project and location) where the cluster will be created.
Specified in the format &#39;projects/x/locations/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use parent instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use parent instead.
*/

/**
 * @typedef CreateNodePoolRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster.
This field is deprecated, use parent instead.
* @property {container(v1beta1).NodePool} nodePool The node pool to create.
* @property {string} parent The parent (project, location, cluster id) where the node pool will be created.
Specified in the format &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field is deprecated, use parent instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use parent instead.
*/

/**
 * @typedef DailyMaintenanceWindow
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} duration [Output only] Duration of the time window, automatically chosen to be
smallest possible in the given scenario.
* @property {string} startTime Time within the maintenance window to start the maintenance operations.
It must be in format &quot;HH:MM”, where HH : [00-23] and MM : [00-59] GMT.
*/

/**
 * @typedef Empty
 * @memberOf! container(v1beta1)
 * @type object
 */

/**
 * @typedef HorizontalPodAutoscaling
 * @memberOf! container(v1beta1)
 * @type object
* @property {boolean} disabled Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.
When enabled, it ensures that a Heapster pod is running in the cluster,
which is also used by the Cloud Monitoring service.
*/

/**
 * @typedef HttpLoadBalancing
 * @memberOf! container(v1beta1)
 * @type object
* @property {boolean} disabled Whether the HTTP Load Balancing controller is enabled in the cluster.
When enabled, it runs a small pod in the cluster that manages the load
balancers.
*/

/**
 * @typedef IPAllocationPolicy
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterIpv4Cidr This field is deprecated, use cluster_ipv4_cidr_block.
* @property {string} clusterIpv4CidrBlock The IP address range for the cluster pod IPs. If this field is set, then
`cluster.cluster_ipv4_cidr` must be left blank.

This field is only applicable when `use_ip_aliases` is true.

Set to blank to have a range chosen with the default size.

Set to /netmask (e.g. `/14`) to have a range chosen with a specific
netmask.

Set to a
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
to use.
* @property {string} clusterSecondaryRangeName The name of the secondary range to be used for the cluster CIDR
block.  The secondary range will be used for pod IP
addresses. This must be an existing secondary range associated
with the cluster subnetwork.

This field is only applicable with use_ip_aliases and
create_subnetwork is false.
* @property {boolean} createSubnetwork Whether a new subnetwork will be created automatically for the cluster.

This field is only applicable when `use_ip_aliases` is true.
* @property {string} nodeIpv4Cidr This field is deprecated, use node_ipv4_cidr_block.
* @property {string} nodeIpv4CidrBlock The IP address range of the instance IPs in this cluster.

This is applicable only if `create_subnetwork` is true.

Set to blank to have a range chosen with the default size.

Set to /netmask (e.g. `/14`) to have a range chosen with a specific
netmask.

Set to a
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
to use.
* @property {string} servicesIpv4Cidr This field is deprecated, use services_ipv4_cidr_block.
* @property {string} servicesIpv4CidrBlock The IP address range of the services IPs in this cluster. If blank, a range
will be automatically chosen with the default size.

This field is only applicable when `use_ip_aliases` is true.

Set to blank to have a range chosen with the default size.

Set to /netmask (e.g. `/14`) to have a range chosen with a specific
netmask.

Set to a
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
to use.
* @property {string} servicesSecondaryRangeName The name of the secondary range to be used as for the services
CIDR block.  The secondary range will be used for service
ClusterIPs. This must be an existing secondary range associated
with the cluster subnetwork.

This field is only applicable with use_ip_aliases and
create_subnetwork is false.
* @property {string} subnetworkName A custom subnetwork name to be used if `create_subnetwork` is true.  If
this field is empty, then an automatic name will be chosen for the new
subnetwork.
* @property {boolean} useIpAliases Whether alias IPs will be used for pod IPs in the cluster.
*/

/**
 * @typedef KubernetesDashboard
 * @memberOf! container(v1beta1)
 * @type object
 * @property {boolean} disabled Whether the Kubernetes Dashboard is enabled for this cluster.
 */

/**
 * @typedef ListClustersResponse
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).Cluster[]} clusters A list of clusters in the project in the specified zone, or
across all ones.
* @property {string[]} missingZones If any zones are listed here, the list of clusters returned
may be missing those zones.
*/

/**
 * @typedef ListNodePoolsResponse
 * @memberOf! container(v1beta1)
 * @type object
 * @property {container(v1beta1).NodePool[]} nodePools A list of node pools for a cluster.
 */

/**
 * @typedef ListOperationsResponse
 * @memberOf! container(v1beta1)
 * @type object
* @property {string[]} missingZones If any zones are listed here, the list of operations returned
may be missing the operations from those zones.
* @property {container(v1beta1).Operation[]} operations A list of operations in the project in the specified zone.
*/

/**
 * @typedef MaintenancePolicy
 * @memberOf! container(v1beta1)
 * @type object
 * @property {container(v1beta1).MaintenanceWindow} window Specifies the maintenance window in which maintenance may be performed.
 */

/**
 * @typedef MaintenanceWindow
 * @memberOf! container(v1beta1)
 * @type object
 * @property {container(v1beta1).DailyMaintenanceWindow} dailyMaintenanceWindow DailyMaintenanceWindow specifies a daily maintenance operation window.
 */

/**
 * @typedef MasterAuth
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clientCertificate [Output only] Base64-encoded public certificate used by clients to
authenticate to the cluster endpoint.
* @property {container(v1beta1).ClientCertificateConfig} clientCertificateConfig Configuration for client certificate authentication on the cluster.  If no
configuration is specified, a client certificate is issued.
* @property {string} clientKey [Output only] Base64-encoded private key used by clients to authenticate
to the cluster endpoint.
* @property {string} clusterCaCertificate [Output only] Base64-encoded public certificate that is the root of
trust for the cluster.
* @property {string} password The password to use for HTTP basic authentication to the master endpoint.
Because the master endpoint is open to the Internet, you should create a
strong password.  If a password is provided for cluster creation, username
must be non-empty.
* @property {string} username The username to use for HTTP basic authentication to the master endpoint.
For clusters v1.6.0 and later, you can disable basic authentication by
providing an empty username.
*/

/**
 * @typedef MasterAuthorizedNetworksConfig
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).CidrBlock[]} cidrBlocks cidr_blocks define up to 10 external networks that could access
Kubernetes master through HTTPS.
* @property {boolean} enabled Whether or not master authorized networks is enabled.
*/

/**
 * @typedef NetworkPolicy
 * @memberOf! container(v1beta1)
 * @type object
 * @property {boolean} enabled Whether network policy is enabled on the cluster.
 * @property {string} provider The selected network policy provider.
 */

/**
 * @typedef NetworkPolicyConfig
 * @memberOf! container(v1beta1)
 * @type object
 * @property {boolean} disabled Whether NetworkPolicy is enabled for this cluster.
 */

/**
 * @typedef NodeConfig
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).AcceleratorConfig[]} accelerators A list of hardware accelerators to be attached to each node.
See https://cloud.google.com/compute/docs/gpus for more information about
support for GPUs.
* @property {integer} diskSizeGb Size of the disk attached to each node, specified in GB.
The smallest allowed disk size is 10GB.

If unspecified, the default disk size is 100GB.
* @property {string} imageType The image type to use for this node. Note that for a given image type,
the latest version of it will be used.
* @property {object} labels The map of Kubernetes labels (key/value pairs) to be applied to each node.
These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it&#39;s best to assume the behavior is undefined
and conflicts should be avoided.
For more information, including usage and the valid values, see:
https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
* @property {integer} localSsdCount The number of local SSD disks to be attached to the node.

The limit for this value is dependant upon the maximum number of
disks available on a machine per zone. See:
https://cloud.google.com/compute/docs/disks/local-ssd#local_ssd_limits
for more information.
* @property {string} machineType The name of a Google Compute Engine [machine
type](/compute/docs/machine-types) (e.g.
`n1-standard-1`).

If unspecified, the default machine type is
`n1-standard-1`.
* @property {object} metadata The metadata key/value pairs assigned to instances in the cluster.

Keys must conform to the regexp [a-zA-Z0-9-_]+ and be less than 128 bytes
in length. These are reflected as part of a URL in the metadata server.
Additionally, to avoid ambiguity, keys must not conflict with any other
metadata keys for the project or be one of the four reserved keys:
&quot;instance-template&quot;, &quot;kube-env&quot;, &quot;startup-script&quot;, and &quot;user-data&quot;

Values are free-form strings, and only have meaning as interpreted by
the image running in the instance. The only restriction placed on them is
that each value&#39;s size must be less than or equal to 32 KB.

The total size of all keys and values must be less than 512 KB.
* @property {string} minCpuPlatform Minimum CPU platform to be used by this instance. The instance may be
scheduled on the specified or newer CPU platform. Applicable values are the
friendly names of CPU platforms, such as
&lt;code&gt;minCpuPlatform: &quot;Intel Haswell&quot;&lt;/code&gt; or
&lt;code&gt;minCpuPlatform: &quot;Intel Sandy Bridge&quot;&lt;/code&gt;. For more
information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
* @property {string[]} oauthScopes The set of Google API scopes to be made available on all of the
node VMs under the &quot;default&quot; service account.

The following scopes are recommended, but not required, and by default are
not included:

* `https://www.googleapis.com/auth/compute` is required for mounting
persistent storage on your nodes.
* `https://www.googleapis.com/auth/devstorage.read_only` is required for
communicating with **gcr.io**
(the [Google Container Registry](/container-registry/)).

If unspecified, no scopes are added, unless Cloud Logging or Cloud
Monitoring are enabled, in which case their required scopes will be added.
* @property {boolean} preemptible Whether the nodes are created as preemptible VM instances. See:
https://cloud.google.com/compute/docs/instances/preemptible for more
inforamtion about preemptible VM instances.
* @property {string} serviceAccount The Google Cloud Platform Service Account to be used by the node VMs. If
no Service Account is specified, the &quot;default&quot; service account is used.
* @property {string[]} tags The list of instance tags applied to all nodes. Tags are used to identify
valid sources or targets for network firewalls and are specified by
the client during cluster or node pool creation. Each tag within the list
must comply with RFC1035.
* @property {container(v1beta1).NodeTaint[]} taints List of kubernetes taints to be applied to each node.

For more information, including usage and the valid values, see:
https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
*/

/**
 * @typedef NodeManagement
 * @memberOf! container(v1beta1)
 * @type object
 * @property {boolean} autoRepair Whether the nodes will be automatically repaired.
 * @property {boolean} autoUpgrade Whether the nodes will be automatically upgraded.
 * @property {container(v1beta1).AutoUpgradeOptions} upgradeOptions Specifies the Auto Upgrade knobs for the node pool.
 */

/**
 * @typedef NodePool
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).NodePoolAutoscaling} autoscaling Autoscaler configuration for this NodePool. Autoscaler is enabled
only if a valid configuration is present.
* @property {container(v1beta1).NodeConfig} config The node configuration of the pool.
* @property {integer} initialNodeCount The initial node count for the pool. You must ensure that your
Compute Engine &lt;a href=&quot;/compute/docs/resource-quotas&quot;&gt;resource quota&lt;/a&gt;
is sufficient for this number of instances. You must also have available
firewall and routes quota.
* @property {string[]} instanceGroupUrls [Output only] The resource URLs of the [managed instance
groups](/compute/docs/instance-groups/creating-groups-of-managed-instances)
associated with this node pool.
* @property {container(v1beta1).NodeManagement} management NodeManagement configuration for this NodePool.
* @property {string} name The name of the node pool.
* @property {string} selfLink [Output only] Server-defined URL for the resource.
* @property {string} status [Output only] The status of the nodes in this pool instance.
* @property {string} statusMessage [Output only] Additional information about the current status of this
node pool instance, if available.
* @property {string} version The version of the Kubernetes of this node.
*/

/**
 * @typedef NodePoolAutoscaling
 * @memberOf! container(v1beta1)
 * @type object
* @property {boolean} enabled Is autoscaling enabled for this node pool.
* @property {integer} maxNodeCount Maximum number of nodes in the NodePool. Must be &gt;= min_node_count. There
has to enough quota to scale up the cluster.
* @property {integer} minNodeCount Minimum number of nodes in the NodePool. Must be &gt;= 1 and &lt;=
max_node_count.
*/

/**
 * @typedef NodeTaint
 * @memberOf! container(v1beta1)
 * @type object
 * @property {string} effect Effect for taint.
 * @property {string} key Key for taint.
 * @property {string} value Value for taint.
 */

/**
 * @typedef Operation
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} detail Detailed operation progress, if available.
* @property {string} endTime [Output only] The time the operation completed, in
[RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* @property {string} location [Output only] The name of the Google Compute Engine
[zone](/compute/docs/regions-zones/regions-zones#available) or
[region](/compute/docs/regions-zones/regions-zones#available) in which
the cluster resides.
* @property {string} name The server-assigned ID for the operation.
* @property {string} operationType The operation type.
* @property {string} selfLink Server-defined URL for the resource.
* @property {string} startTime [Output only] The time the operation started, in
[RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
* @property {string} status The current status of the operation.
* @property {string} statusMessage If an error has occurred, a textual description of the error.
* @property {string} targetLink Server-defined URL for the target of the operation.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the operation
is taking place.
This field is deprecated, use location instead.
*/

/**
 * @typedef PodSecurityPolicyConfig
 * @memberOf! container(v1beta1)
 * @type object
* @property {boolean} enabled Enable the PodSecurityPolicy controller for this cluster. If enabled, pods
must be valid under a PodSecurityPolicy to be created.
*/

/**
 * @typedef RollbackNodePoolUpgradeRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to rollback.
This field is deprecated, use name instead.
* @property {string} name The name (project, location, cluster, node pool id) of the node poll to
rollback upgrade.
Specified in the format &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
* @property {string} nodePoolId The name of the node pool to rollback.
This field is deprecated, use name instead.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef ServerConfig
 * @memberOf! container(v1beta1)
 * @type object
 * @property {string} defaultClusterVersion Version of Kubernetes the service deploys by default.
 * @property {string} defaultImageType Default image type.
 * @property {string[]} validImageTypes List of valid image types.
 * @property {string[]} validMasterVersions List of valid master versions.
 * @property {string[]} validNodeVersions List of valid node upgrade target versions.
 */

/**
 * @typedef SetAddonsConfigRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).AddonsConfig} addonsConfig The desired configurations for the various addons available to run in the
cluster.
* @property {string} clusterId The name of the cluster to upgrade.
This field is deprecated, use name instead.
* @property {string} name The name (project, location, cluster) of the cluster to set addons.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef SetLabelsRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster.
This field is deprecated, use name instead.
* @property {string} labelFingerprint The fingerprint of the previous set of labels for this resource,
used to detect conflicts. The fingerprint is initially generated by
Container Engine and changes after every request to modify or update
labels. You must always provide an up-to-date fingerprint hash when
updating or changing labels. Make a &lt;code&gt;get()&lt;/code&gt; request to the
resource to get the latest fingerprint.
* @property {string} name The name (project, location, cluster id) of the cluster to set labels.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field is deprecated, use name instead.
* @property {object} resourceLabels The labels to set for that cluster.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef SetLegacyAbacRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to update.
This field is deprecated, use name instead.
* @property {boolean} enabled Whether ABAC authorization will be enabled in the cluster.
* @property {string} name The name (project, location, cluster id) of the cluster to set legacy abac.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef SetLocationsRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to upgrade.
This field is deprecated, use name instead.
* @property {string[]} locations The desired list of Google Compute Engine
[locations](/compute/docs/zones#available) in which the cluster&#39;s nodes
should be located. Changing the locations a cluster is in will result
in nodes being either created or removed from the cluster, depending on
whether locations are being added or removed.

This list must always include the cluster&#39;s primary zone.
* @property {string} name The name (project, location, cluster) of the cluster to set locations.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef SetLoggingServiceRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to upgrade.
This field is deprecated, use name instead.
* @property {string} loggingService The logging service the cluster should use to write metrics.
Currently available options:

* &quot;logging.googleapis.com&quot; - the Google Cloud Logging service
* &quot;none&quot; - no metrics will be exported from the cluster
* @property {string} name The name (project, location, cluster) of the cluster to set logging.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
*/

/**
 * @typedef SetMaintenancePolicyRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to update.
* @property {container(v1beta1).MaintenancePolicy} maintenancePolicy The maintenance policy to be set for the cluster. An empty field
clears the existing maintenance policy.
* @property {string} name The name (project, location, cluster id) of the cluster to set maintenance
policy.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
*/

/**
 * @typedef SetMasterAuthRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} action The exact form of action to be taken on the master auth.
* @property {string} clusterId The name of the cluster to upgrade.
This field is deprecated, use name instead.
* @property {string} name The name (project, location, cluster) of the cluster to set auth.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {container(v1beta1).MasterAuth} update A description of the update.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef SetMonitoringServiceRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to upgrade.
This field is deprecated, use name instead.
* @property {string} monitoringService The monitoring service the cluster should use to write metrics.
Currently available options:

* &quot;monitoring.googleapis.com&quot; - the Google Cloud Monitoring service
* &quot;none&quot; - no metrics will be exported from the cluster
* @property {string} name The name (project, location, cluster) of the cluster to set monitoring.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef SetNetworkPolicyRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster.
This field is deprecated, use name instead.
* @property {string} name The name (project, location, cluster id) of the cluster to set networking policy.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {container(v1beta1).NetworkPolicy} networkPolicy Configuration options for the NetworkPolicy feature.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef SetNodePoolAutoscalingRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {container(v1beta1).NodePoolAutoscaling} autoscaling Autoscaling configuration for the node pool.
* @property {string} clusterId The name of the cluster to upgrade.
This field is deprecated, use name instead.
* @property {string} name The name (project, location, cluster, node pool) of the node pool to set
autoscaler settings. Specified in the format
&#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
* @property {string} nodePoolId The name of the node pool to upgrade.
This field is deprecated, use name instead.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef SetNodePoolManagementRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to update.
This field is deprecated, use name instead.
* @property {container(v1beta1).NodeManagement} management NodeManagement configuration for the node pool.
* @property {string} name The name (project, location, cluster, node pool id) of the node pool to set
management properties. Specified in the format
&#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
* @property {string} nodePoolId The name of the node pool to update.
This field is deprecated, use name instead.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef StartIPRotationRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster.
This field is deprecated, use name instead.
* @property {string} name The name (project, location, cluster id) of the cluster to start IP rotation.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef UpdateClusterRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to upgrade.
This field is deprecated, use name instead.
* @property {string} name The name (project, location, cluster) of the cluster to update.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {container(v1beta1).ClusterUpdate} update A description of the update.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef UpdateMasterRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to upgrade.
This field is deprecated, use name instead.
* @property {string} masterVersion The Kubernetes version to change the master to. The only valid value is the
latest supported version. Use &quot;-&quot; to have the server automatically select
the latest version.
* @property {string} name The name (project, location, cluster) of the cluster to update.
Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/

/**
 * @typedef UpdateNodePoolRequest
 * @memberOf! container(v1beta1)
 * @type object
* @property {string} clusterId The name of the cluster to upgrade.
This field is deprecated, use name instead.
* @property {string} imageType The desired image type for the node pool.
* @property {string} name The name (project, location, cluster, node pool) of the node pool to update.
Specified in the format &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
* @property {string} nodePoolId The name of the node pool to upgrade.
This field is deprecated, use name instead.
* @property {string} nodeVersion The Kubernetes version to change the nodes to (typically an
upgrade). Use `-` to upgrade to the latest version supported by
the server.
* @property {string} projectId The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field is deprecated, use name instead.
* @property {string} zone The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field is deprecated, use name instead.
*/
export = Container;
