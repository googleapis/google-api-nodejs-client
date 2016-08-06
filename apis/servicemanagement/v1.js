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
 * Google Service Management API
 *
 * The service management API for Google Cloud Platform
 *
 * @example
 * var google = require('googleapis');
 * var servicemanagement = google.servicemanagement('v1');
 *
 * @namespace servicemanagement
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Servicemanagement
 */
function Servicemanagement(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.services = {

    /**
     * servicemanagement.services.getIamPolicy
     *
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @alias servicemanagement.services.getIamPolicy
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path. For example, a Project resource is specified as `projects/{project}`.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/{resource}:getIamPolicy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.disable
     *
     * @desc Disable a managed service for a project.  Operation<response: DisableServiceResponse>
     *
     * @alias servicemanagement.services.disable
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName Name of the service to disable. Specifying an unknown service name will cause the request to fail.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    disable: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}:disable',
          method: 'POST'
        },
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.generateConfigReport
     *
     * @desc Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value  If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
     *
     * @alias servicemanagement.services.generateConfigReport
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateConfigReport: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/services:generateConfigReport',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.getConfig
     *
     * @desc Gets a service configuration (version) for a managed service.
     *
     * @alias servicemanagement.services.getConfig
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.configId 
     * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}/config',
          method: 'GET'
        },
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.undelete
     *
     * @desc Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days.  Operation<response: UndeleteServiceResponse>
     *
     * @alias servicemanagement.services.undelete
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName The name of the service. See the `ServiceManager` overview for naming requirements. For example: `example.googleapis.com`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}:undelete',
          method: 'POST'
        },
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.get
     *
     * @desc Gets a managed service.
     *
     * @alias servicemanagement.services.get
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.list
     *
     * @desc Lists all managed services.
     *
     * @alias servicemanagement.services.list
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Requested size of the next page of data.
     * @param {string=} params.producerProjectId Include services produced by the specified project.
     * @param {string=} params.pageToken Token identifying which result to start with; returned by a previous list call.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/services',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.create
     *
     * @desc Creates a new managed service.  Operation<response: ManagedService>
     *
     * @alias servicemanagement.services.create
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/services',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.enable
     *
     * @desc Enable a managed service for a project with default setting.  Operation<response: EnableServiceResponse>
     *
     * @alias servicemanagement.services.enable
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName Name of the service to enable. Specifying an unknown service name will cause the request to fail.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    enable: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}:enable',
          method: 'POST'
        },
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.setIamPolicy
     *
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     *
     * @alias servicemanagement.services.setIamPolicy
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path. For example, a Project resource is specified as `projects/{project}`.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/{resource}:setIamPolicy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.delete
     *
     * @desc Deletes a managed service. This method will change the serivce in the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted.  Operation<response: google.protobuf.Empty>
     *
     * @alias servicemanagement.services.delete
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicemanagement.services.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias servicemanagement.services.testIamPermissions
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path. For example, a Project resource is specified as `projects/{project}`.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/{resource}:testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    rollouts: {

      /**
       * servicemanagement.services.rollouts.get
       *
       * @desc Gets a service configuration rollout.
       *
       * @alias servicemanagement.services.rollouts.get
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.rolloutId The id of the rollout resource.
       * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}/rollouts/{rolloutId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['serviceName', 'rolloutId'],
          pathParams: ['rolloutId', 'serviceName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * servicemanagement.services.rollouts.create
       *
       * @desc Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging.  Operation<response: Rollout>
       *
       * @alias servicemanagement.services.rollouts.create
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}/rollouts',
            method: 'POST'
          },
          params: params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * servicemanagement.services.rollouts.list
       *
       * @desc Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
       *
       * @alias servicemanagement.services.rollouts.list
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize The max number of items to include in the response list.
       * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
       * @param {string=} params.pageToken The token of the page to retrieve.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}/rollouts',
            method: 'GET'
          },
          params: params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    configs: {

      /**
       * servicemanagement.services.configs.submit
       *
       * @desc Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout.  Operation<response: SubmitConfigSourceResponse>
       *
       * @alias servicemanagement.services.configs.submit
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      submit: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}/configs:submit',
            method: 'POST'
          },
          params: params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * servicemanagement.services.configs.get
       *
       * @desc Gets a service configuration (version) for a managed service.
       *
       * @alias servicemanagement.services.configs.get
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.configId 
       * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}/configs/{configId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['serviceName', 'configId'],
          pathParams: ['configId', 'serviceName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * servicemanagement.services.configs.create
       *
       * @desc Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout.
       *
       * @alias servicemanagement.services.configs.create
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}/configs',
            method: 'POST'
          },
          params: params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * servicemanagement.services.configs.list
       *
       * @desc Lists the history of the service configuration for a managed service, from the newest to the oldest.
       *
       * @alias servicemanagement.services.configs.list
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize The max number of items to include in the response list.
       * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
       * @param {string=} params.pageToken The token of the page to retrieve.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://servicemanagement.googleapis.com/v1/services/{serviceName}/configs',
            method: 'GET'
          },
          params: params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.operations = {

    /**
     * servicemanagement.operations.get
     *
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias servicemanagement.operations.get
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicemanagement.googleapis.com/v1/{name}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Servicemanagement;
