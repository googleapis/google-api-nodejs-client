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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Service Management API
 *
 * Google Service Management allows service producers to publish their services
 * on Google Cloud Platform so that they can be discovered and used by service
 * consumers.
 *
 * @example
 * const google = require('googleapis');
 * const servicemanagement = google.servicemanagement('v1');
 *
 * @namespace servicemanagement
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Servicemanagement
 */
function Servicemanagement(options) {
  const self = this;
  self._options = options || {};
  self.operations = {
    /**
     * servicemanagement.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias servicemanagement.operations.get
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.operations.list
        * @desc Lists service operations that match the specified filter in the
        * request.
        * @alias servicemanagement.operations.list
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string=} params.filter A string for filtering Operations.   The following filter fields are supported&#58;    * serviceName&#58; Required. Only `=` operator is allowed.   * startTime&#58; The time this job was started, in ISO 8601 format.     Allowed operators are `>=`,  `>`, `<=`, and `<`.   * status&#58; Can be `done`, `in_progress`, or `failed`. Allowed     operators are `=`, and `!=`.    Filter expression supports conjunction (AND) and disjunction (OR)   logical operators. However, the serviceName restriction must be at the   top-level and can only be combined with other restrictions via the AND   logical operator.    Examples&#58;    * `serviceName={some-service}.googleapis.com`   * `serviceName={some-service}.googleapis.com AND startTime>="2017-02-01"`   * `serviceName={some-service}.googleapis.com AND status=done`   * `serviceName={some-service}.googleapis.com AND (status=done OR startTime>="2017-02-01")`
        * @param {string=} params.name Not used.
        * @param {integer=} params.pageSize The maximum number of operations to return. If unspecified, defaults to 50. The maximum value is 100.
        * @param {string=} params.pageToken The standard list page token.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/operations').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.services = {
    /**
     * servicemanagement.services.create
     * @desc Creates a new managed service. Please note one producer project can
     * own no more than 20 services.  Operation<response: ManagedService>
     * @alias servicemanagement.services.create
     * @memberOf! servicemanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {servicemanagement(v1).ManagedService} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.delete
        * @desc Deletes a managed service. This method will change the service
        * to the `Soft-Delete` state for 30 days. Within this period, service
        * producers may call UndeleteService to restore the service. After 30
        * days, the service will be permanently deleted.  Operation<response:
        * google.protobuf.Empty>
        * @alias servicemanagement.services.delete
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services/{serviceName}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.disable
        * @desc Disables a service for a project, so it can no longer be be used
        * for the project. It prevents accidental usage that may cause
        * unexpected billing charges or security leaks.  Operation<response:
        * DisableServiceResponse>
        * @alias servicemanagement.services.disable
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.serviceName Name of the service to disable. Specifying an unknown service name will cause the request to fail.
        * @param {servicemanagement(v1).DisableServiceRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    disable(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services/{serviceName}:disable')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.enable
        * @desc Enables a service for a project, so it can be used for the
        * project. See [Cloud Auth
        * Guide](https://cloud.google.com/docs/authentication) for more
        * information.  Operation<response: EnableServiceResponse>
        * @alias servicemanagement.services.enable
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.serviceName Name of the service to enable. Specifying an unknown service name will cause the request to fail.
        * @param {servicemanagement(v1).EnableServiceRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    enable(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services/{serviceName}:enable')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.generateConfigReport
        * @desc Generates and returns a report (errors, warnings and changes
        * from existing configurations) associated with
        * GenerateConfigReportRequest.new_value  If
        * GenerateConfigReportRequest.old_value is specified,
        * GenerateConfigReportRequest will contain a single ChangeReport based
        * on the comparison between GenerateConfigReportRequest.new_value and
        * GenerateConfigReportRequest.old_value. If
        * GenerateConfigReportRequest.old_value is not specified, this method
        * will compare GenerateConfigReportRequest.new_value with the last
        * pushed service configuration.
        * @alias servicemanagement.services.generateConfigReport
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {servicemanagement(v1).GenerateConfigReportRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    generateConfigReport(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services:generateConfigReport')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.get
        * @desc Gets a managed service. Authentication is required unless the
        * service is public.
        * @alias servicemanagement.services.get
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services/{serviceName}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.getConfig
        * @desc Gets a service configuration (version) for a managed service.
        * @alias servicemanagement.services.getConfig
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string=} params.configId The id of the service configuration resource.
        * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
        * @param {string=} params.view Specifies which parts of the Service Config should be returned in the response.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    getConfig(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services/{serviceName}/config')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.getIamPolicy
        * @desc Gets the access control policy for a resource. Returns an empty
        * policy if the resource exists and does not have a policy set.
        * @alias servicemanagement.services.getIamPolicy
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
        * @param {servicemanagement(v1).GetIamPolicyRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    getIamPolicy(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.list
        * @desc Lists managed services.  Returns all public services. For
        * authenticated users, also returns all services the calling user has
        * "servicemanagement.services.get" permission for.  **BETA:** If the
        * caller specifies the `consumer_id`, it returns only the services
        * enabled on the consumer. The `consumer_id` must have the format of
        * "project:{PROJECT-ID}".
        * @alias servicemanagement.services.list
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string=} params.consumerId Include services consumed by the specified consumer.  The Google Service Management implementation accepts the following forms: - project:<project_id>
        * @param {integer=} params.pageSize Requested size of the next page of data.
        * @param {string=} params.pageToken Token identifying which result to start with; returned by a previous list call.
        * @param {string=} params.producerProjectId Include services produced by the specified project.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.setIamPolicy
        * @desc Sets the access control policy on the specified resource.
        * Replaces any existing policy.
        * @alias servicemanagement.services.setIamPolicy
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
        * @param {servicemanagement(v1).SetIamPolicyRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    setIamPolicy(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.testIamPermissions
        * @desc Returns permissions that a caller has on the specified resource.
        * If the resource does not exist, this will return an empty set of
        * permissions, not a NOT_FOUND error.  Note: This operation is designed
        * to be used for building permission-aware UIs and command-line tools,
        * not for authorization checking. This operation may "fail open" without
        * warning.
        * @alias servicemanagement.services.testIamPermissions
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
        * @param {servicemanagement(v1).TestIamPermissionsRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    testIamPermissions(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * servicemanagement.services.undelete
        * @desc Revives a previously deleted managed service. The method
        * restores the service using the configuration at the time the service
        * was deleted. The target service must exist and must have been deleted
        * within the last 30 days.  Operation<response: UndeleteServiceResponse>
        * @alias servicemanagement.services.undelete
        * @memberOf! servicemanagement(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.serviceName The name of the service. See the [overview](/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    undelete(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://servicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services/{serviceName}:undelete')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },
    configs: {
      /**
       * servicemanagement.services.configs.create
       * @desc Creates a new service configuration (version) for a managed
       * service. This method only stores the service configuration. To roll out
       * the service configuration to backend systems please call
       * CreateServiceRollout.
       * @alias servicemanagement.services.configs.create
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
       * @param {servicemanagement(v1).Service} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/services/{serviceName}/configs')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * servicemanagement.services.configs.get
          * @desc Gets a service configuration (version) for a managed service.
          * @alias servicemanagement.services.configs.get
          * @memberOf! servicemanagement(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.configId The id of the service configuration resource.
          * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
          * @param {string=} params.view Specifies which parts of the Service Config should be returned in the response.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/services/{serviceName}/configs/{configId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['serviceName', 'configId'],
          pathParams: ['configId', 'serviceName'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * servicemanagement.services.configs.list
          * @desc Lists the history of the service configuration for a managed
          * service, from the newest to the oldest.
          * @alias servicemanagement.services.configs.list
          * @memberOf! servicemanagement(v1)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize The max number of items to include in the response list.
          * @param {string=} params.pageToken The token of the page to retrieve.
          * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/services/{serviceName}/configs')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * servicemanagement.services.configs.submit
          * @desc Creates a new service configuration (version) for a managed
          * service based on user-supplied configuration source files (for
          * example: OpenAPI Specification). This method stores the source
          * configurations as well as the generated service configuration. To
          * rollout the service configuration to other services, please call
          * CreateServiceRollout.  Operation<response:
          * SubmitConfigSourceResponse>
          * @alias servicemanagement.services.configs.submit
          * @memberOf! servicemanagement(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
          * @param {servicemanagement(v1).SubmitConfigSourceRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      submit(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/services/{serviceName}/configs:submit')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    consumers: {
      /**
       * servicemanagement.services.consumers.getIamPolicy
       * @desc Gets the access control policy for a resource. Returns an empty
       * policy if the resource exists and does not have a policy set.
       * @alias servicemanagement.services.consumers.getIamPolicy
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
       * @param {servicemanagement(v1).GetIamPolicyRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getIamPolicy(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:getIamPolicy')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * servicemanagement.services.consumers.setIamPolicy
          * @desc Sets the access control policy on the specified resource.
          * Replaces any existing policy.
          * @alias servicemanagement.services.consumers.setIamPolicy
          * @memberOf! servicemanagement(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
          * @param {servicemanagement(v1).SetIamPolicyRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      setIamPolicy(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:setIamPolicy')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * servicemanagement.services.consumers.testIamPermissions
          * @desc Returns permissions that a caller has on the specified
          * resource. If the resource does not exist, this will return an empty
          * set of permissions, not a NOT_FOUND error.  Note: This operation is
          * designed to be used for building permission-aware UIs and
          * command-line tools, not for authorization checking. This operation
          * may "fail open" without warning.
          * @alias servicemanagement.services.consumers.testIamPermissions
          * @memberOf! servicemanagement(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
          * @param {servicemanagement(v1).TestIamPermissionsRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      testIamPermissions(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:testIamPermissions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    rollouts: {
      /**
       * servicemanagement.services.rollouts.create
       * @desc Creates a new service configuration rollout. Based on rollout,
       * the Google Service Management will roll out the service configurations
       * to different backend services. For example, the logging configuration
       * will be pushed to Google Cloud Logging.  Please note that any previous
       * pending and running Rollouts and associated Operations will be
       * automatically cancelled so that the latest Rollout will not be blocked
       * by previous Rollouts.  Operation<response: Rollout>
       * @alias servicemanagement.services.rollouts.create
       * @memberOf! servicemanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
       * @param {servicemanagement(v1).Rollout} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/services/{serviceName}/rollouts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * servicemanagement.services.rollouts.get
          * @desc Gets a service configuration rollout.
          * @alias servicemanagement.services.rollouts.get
          * @memberOf! servicemanagement(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.rolloutId The id of the rollout resource.
          * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/v1/services/{serviceName}/rollouts/{rolloutId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['serviceName', 'rolloutId'],
          pathParams: ['rolloutId', 'serviceName'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * servicemanagement.services.rollouts.list
          * @desc Lists the history of the service configuration rollouts for a
          * managed service, from the newest to the oldest.
          * @alias servicemanagement.services.rollouts.list
          * @memberOf! servicemanagement(v1)
          *
          * @param {object} params Parameters for request
          * @param {string=} params.filter Use `filter` to return subset of rollouts. The following filters are supported:   -- To limit the results to only those in      [status](google.api.servicemanagement.v1.RolloutStatus) 'SUCCESS',      use filter='status=SUCCESS'   -- To limit the results to those in      [status](google.api.servicemanagement.v1.RolloutStatus) 'CANCELLED'      or 'FAILED', use filter='status=CANCELLED OR status=FAILED'
          * @param {integer=} params.pageSize The max number of items to include in the response list.
          * @param {string=} params.pageToken The token of the page to retrieve.
          * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://servicemanagement.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/services/{serviceName}/rollouts')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['serviceName'],
          pathParams: ['serviceName'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
}
/**
 * @typedef Advice
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} description Useful description for why this advice was applied and what actions should be taken to mitigate any implied risks.
 */
/**
 * @typedef Api
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).Method[]} methods The methods of this interface, in unspecified order.
 * @property {servicemanagement(v1).Mixin[]} mixins Included interfaces. See Mixin.
 * @property {string} name The fully qualified name of this interface, including package name followed by the interface&#39;s simple name.
 * @property {servicemanagement(v1).Option[]} options Any metadata attached to the interface.
 * @property {servicemanagement(v1).SourceContext} sourceContext Source context for the protocol buffer service represented by this message.
 * @property {string} syntax The source syntax of the service.
 * @property {string} version A version string for this interface. If specified, must have the form `major-version.minor-version`, as in `1.10`. If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here.  The versioning schema uses [semantic versioning](http://semver.org) where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan.  The major version is also reflected in the package name of the interface, which must end in `v&lt;major-version&gt;`, as in `google.feature.v1`. For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces.
 */
/**
 * @typedef AuditConfig
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission. Next ID: 4
 * @property {string[]} exemptedMembers
 * @property {string} service Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
 */
/**
 * @typedef AuditLogConfig
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
 * @property {string} logType The log type that this config enables.
 */
/**
 * @typedef Authentication
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).AuthProvider[]} providers Defines a set of authentication providers that a service supports.
 * @property {servicemanagement(v1).AuthenticationRule[]} rules A list of authentication rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
 */
/**
 * @typedef AuthenticationRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {boolean} allowWithoutCredential Whether to allow requests without a credential. The credential can be an OAuth token, Google cookies (first-party auth) or EndUserCreds.  For requests without credentials, if the service control environment is specified, each incoming request **must** be associated with a service consumer. This can be done by passing an API key that belongs to a consumer project.
 * @property {servicemanagement(v1).CustomAuthRequirements} customAuth Configuration for custom authentication.
 * @property {servicemanagement(v1).OAuthRequirements} oauth The requirements for OAuth credentials.
 * @property {servicemanagement(v1).AuthRequirement[]} requirements Requirements for additional authentication providers.
 * @property {string} selector Selects the methods to which this rule applies.  Refer to selector for syntax details.
 */
/**
 * @typedef AuthorizationConfig
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} provider The name of the authorization provider, such as firebaserules.googleapis.com.
 */
/**
 * @typedef AuthProvider
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} audiences The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience &quot;https://Service_name/API_name&quot; will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience &quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService&quot;.  Example:      audiences: bookstore_android.apps.googleusercontent.com,                bookstore_web.apps.googleusercontent.com
 * @property {string} authorizationUrl Redirect URL if JWT token is required but no present or is expired. Implement authorizationUrl of securityDefinitions in OpenAPI spec.
 * @property {string} id The unique identifier of the auth provider. It will be referred to by `AuthRequirement.provider_id`.  Example: &quot;bookstore_auth&quot;.
 * @property {string} issuer Identifies the principal that issued the JWT. See https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1 Usually a URL or an email address.  Example: https://securetoken.google.com Example: 1234567-compute@developer.gserviceaccount.com
 * @property {string} jwksUri URL of the provider&#39;s public key set to validate signature of the JWT. See [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). Optional if the key set document:  - can be retrieved from    [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html    of the issuer.  - can be inferred from the email domain of the issuer (e.g. a Google service account).  Example: https://www.googleapis.com/oauth2/v1/certs
 */
/**
 * @typedef AuthRequirement
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} audiences NOTE: This will be deprecated soon, once AuthProvider.audiences is implemented and accepted in all the runtime components.  The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience &quot;https://Service_name/API_name&quot; will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience &quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService&quot;.  Example:      audiences: bookstore_android.apps.googleusercontent.com,                bookstore_web.apps.googleusercontent.com
 * @property {string} providerId id from authentication provider.  Example:      provider_id: bookstore_auth
 */
/**
 * @typedef Backend
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).BackendRule[]} rules A list of API backend rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
 */
/**
 * @typedef BackendRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} address The address of the API backend.
 * @property {number} deadline The number of seconds to wait for a response from a request.  The default deadline for gRPC is infinite (no deadline) and HTTP requests is 5 seconds.
 * @property {number} minDeadline Minimum deadline in seconds needed for this method. Calls having deadline value lower than this will be rejected.
 * @property {string} selector Selects the methods to which this rule applies.  Refer to selector for syntax details.
 */
/**
 * @typedef Billing
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).BillingDestination[]} consumerDestinations Billing configurations for sending metrics to the consumer project. There can be multiple consumer destinations per service, each one must have a different monitored resource type. A metric can be used in at most one consumer destination.
 */
/**
 * @typedef BillingDestination
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string[]} metrics Names of the metrics to report to this billing destination. Each name must be defined in Service.metrics section.
 * @property {string} monitoredResource The monitored resource type. The type must be defined in Service.monitored_resources section.
 */
/**
 * @typedef Binding
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).Expr} condition The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently. This field is GOOGLE_INTERNAL.
 * @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@gmail.com` or `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that represents all the    users of that domain. For example, `google.com` or `example.com`.
 * @property {string} role Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
 */
/**
 * @typedef ChangeReport
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).ConfigChange[]} configChanges List of changes between two service configurations. The changes will be alphabetically sorted based on the identifier of each change. A ConfigChange identifier is a dot separated path to the configuration. Example: visibility.rules[selector=&#39;LibraryService.CreateBook&#39;].restriction
 */
/**
 * @typedef ConfigChange
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).Advice[]} advices Collection of advice provided for this change, useful for determining the possible impact of this change.
 * @property {string} changeType The type for this change, either ADDED, REMOVED, or MODIFIED.
 * @property {string} element Object hierarchy path to the change, with levels separated by a &#39;.&#39; character. For repeated fields, an applicable unique identifier field is used for the index (usually selector, name, or id). For maps, the term &#39;key&#39; is used. If the field has no unique identifier, the numeric index is used. Examples: - visibility.rules[selector==&quot;google.LibraryService.CreateBook&quot;].restriction - quota.metric_rules[selector==&quot;google&quot;].metric_costs[key==&quot;reads&quot;].value - logging.producer_destinations[0]
 * @property {string} newValue Value of the changed object in the new Service configuration, in JSON format. This field will not be populated if ChangeType == REMOVED.
 * @property {string} oldValue Value of the changed object in the old Service configuration, in JSON format. This field will not be populated if ChangeType == ADDED.
 */
/**
 * @typedef ConfigFile
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} fileContents The bytes that constitute the file.
 * @property {string} filePath The file name of the configuration file (full or relative path).
 * @property {string} fileType The type of configuration file this represents.
 */
/**
 * @typedef ConfigRef
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} name Resource name of a service config. It must have the following format: &quot;services/{service name}/configs/{config id}&quot;.
 */
/**
 * @typedef ConfigSource
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).ConfigFile[]} files Set of source configuration files that are used to generate a service configuration (`google.api.Service`).
 * @property {string} id A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. If empty, the server may choose to generate one instead.
 */
/**
 * @typedef Context
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).ContextRule[]} rules A list of RPC context rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
 */
/**
 * @typedef ContextRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string[]} provided A list of full type names of provided contexts.
 * @property {string[]} requested A list of full type names of requested contexts.
 * @property {string} selector Selects the methods to which this rule applies.  Refer to selector for syntax details.
 */
/**
 * @typedef Control
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} environment The service control environment to use. If empty, no control plane feature (like quota and billing) will be enabled.
 */
/**
 * @typedef CustomAuthRequirements
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} provider A configuration string containing connection information for the authentication provider, typically formatted as a SmartService string (go/smartservice).
 */
/**
 * @typedef CustomError
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).CustomErrorRule[]} rules The list of custom error rules that apply to individual API messages.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
 * @property {string[]} types The list of custom error detail types, e.g. &#39;google.foo.v1.CustomError&#39;.
 */
/**
 * @typedef CustomErrorRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {boolean} isErrorType Mark this message as possible payload in error response.  Otherwise, objects of this type will be filtered when they appear in error payload.
 * @property {string} selector Selects messages to which this rule applies.  Refer to selector for syntax details.
 */
/**
 * @typedef CustomHttpPattern
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} kind The name of this custom HTTP verb.
 * @property {string} path The path matched by this custom verb.
 */
/**
 * @typedef DeleteServiceStrategy
 * @memberOf! servicemanagement(v1)
 * @type object
 */
/**
 * @typedef Diagnostic
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} kind The kind of diagnostic information provided.
 * @property {string} location File name and line number of the error or warning.
 * @property {string} message Message describing the error or warning.
 */
/**
 * @typedef DisableServiceRequest
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} consumerId The identity of consumer resource which service disablement will be applied to.  The Google Service Management implementation accepts the following forms: - &quot;project:&lt;project_id&gt;&quot;  Note: this is made compatible with google.api.servicecontrol.v1.Operation.consumer_id.
 */
/**
 * @typedef Documentation
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} documentationRootUrl The URL to the root of documentation.
 * @property {string} overview Declares a single overview page. For example: &lt;pre&gt;&lt;code&gt;documentation:   summary: ...   overview: &amp;#40;== include overview.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; This is a shortcut for the following declaration (using pages style): &lt;pre&gt;&lt;code&gt;documentation:   summary: ...   pages:   - name: Overview     content: &amp;#40;== include overview.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; Note: you cannot specify both `overview` field and `pages` field.
 * @property {servicemanagement(v1).Page[]} pages The top level pages for the documentation set.
 * @property {servicemanagement(v1).DocumentationRule[]} rules A list of documentation rules that apply to individual API elements.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
 * @property {string} summary A short summary of what the service does. Can only be provided by plain text.
 */
/**
 * @typedef DocumentationRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} deprecationDescription Deprecation description of the selected element(s). It can be provided if an element is marked as `deprecated`.
 * @property {string} description Description of the selected API(s).
 * @property {string} selector The selector is a comma-separated list of patterns. Each pattern is a qualified name of the element which may end in &quot;*&quot;, indicating a wildcard. Wildcards are only allowed at the end and for a whole component of the qualified name, i.e. &quot;foo.*&quot; is ok, but not &quot;foo.b*&quot; or &quot;foo.*.bar&quot;. To specify a default for all applicable elements, the whole pattern &quot;*&quot; is used.
 */
/**
 * @typedef EnableServiceRequest
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} consumerId The identity of consumer resource which service enablement will be applied to.  The Google Service Management implementation accepts the following forms: - &quot;project:&lt;project_id&gt;&quot;  Note: this is made compatible with google.api.servicecontrol.v1.Operation.consumer_id.
 */
/**
 * @typedef Endpoint
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string[]} aliases DEPRECATED: This field is no longer supported. Instead of using aliases, please specify multiple google.api.Endpoint for each of the intended aliases.  Additional names that this endpoint will be hosted on.
 * @property {boolean} allowCors Allowing [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka cross-domain traffic, would allow the backends served from this endpoint to receive and respond to HTTP OPTIONS requests. The response will be used by the browser to determine whether the subsequent cross-origin request is allowed to proceed.
 * @property {string[]} features The list of features enabled on this endpoint.
 * @property {string} name The canonical name of this endpoint.
 * @property {string} target The specification of an Internet routable address of API frontend that will handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary). It should be either a valid IPv4 address or a fully-qualified domain name. For example, &quot;8.8.8.8&quot; or &quot;myservice.appspot.com&quot;.
 */
/**
 * @typedef Enum
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).EnumValue[]} enumvalue Enum value definitions.
 * @property {string} name Enum type name.
 * @property {servicemanagement(v1).Option[]} options Protocol buffer options.
 * @property {servicemanagement(v1).SourceContext} sourceContext The source context.
 * @property {string} syntax The source syntax.
 */
/**
 * @typedef EnumValue
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} name Enum value name.
 * @property {integer} number Enum value number.
 * @property {servicemanagement(v1).Option[]} options Protocol buffer options.
 */
/**
 * @typedef Experimental
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).AuthorizationConfig} authorization Authorization configuration.
 */
/**
 * @typedef Expr
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} description An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
 * @property {string} expression Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
 * @property {string} location An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
 * @property {string} title An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
 */
/**
 * @typedef Field
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} cardinality The field cardinality.
 * @property {string} defaultValue The string value of the default value of this field. Proto2 syntax only.
 * @property {string} jsonName The field JSON name.
 * @property {string} kind The field type.
 * @property {string} name The field name.
 * @property {integer} number The field number.
 * @property {integer} oneofIndex The index of the field type in `Type.oneofs`, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
 * @property {servicemanagement(v1).Option[]} options The protocol buffer options.
 * @property {boolean} packed Whether to use alternative packed wire representation.
 * @property {string} typeUrl The field type URL, without the scheme, for message or enumeration types. Example: `&quot;type.googleapis.com/google.protobuf.Timestamp&quot;`.
 */
/**
 * @typedef FlowOperationMetadata
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} cancelState The state of the operation with respect to cancellation.
 * @property {string} deadline Deadline for the flow to complete, to prevent orphaned Operations.  If the flow has not completed by this time, it may be terminated by the engine, or force-failed by Operation lookup.  Note that this is not a hard deadline after which the Flow will definitely be failed, rather it is a deadline after which it is reasonable to suspect a problem and other parts of the system may kill operation to ensure we don&#39;t have orphans. see also: go/prevent-orphaned-operations
 * @property {string} flowName The name of the top-level flow corresponding to this operation. Must be equal to the &quot;name&quot; field for a FlowName enum.
 * @property {integer} operationType Operation type which is a flow type and subtype info as that is missing in our datastore otherwise. This maps to the ordinal value of the enum: jcg/api/tenant/operations/OperationNamespace.java
 * @property {string[]} resourceNames The full name of the resources that this flow is directly associated with.
 * @property {string} startTime The start time of the operation.
 * @property {string} surface
 */
/**
 * @typedef GenerateConfigReportRequest
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {object} newConfig Service configuration for which we want to generate the report. For this version of API, the supported types are google.api.servicemanagement.v1.ConfigRef, google.api.servicemanagement.v1.ConfigSource, and google.api.Service
 * @property {object} oldConfig Service configuration against which the comparison will be done. For this version of API, the supported types are google.api.servicemanagement.v1.ConfigRef, google.api.servicemanagement.v1.ConfigSource, and google.api.Service
 */
/**
 * @typedef GenerateConfigReportResponse
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).ChangeReport[]} changeReports list of ChangeReport, each corresponding to comparison between two service configurations.
 * @property {servicemanagement(v1).Diagnostic[]} diagnostics Errors / Linter warnings associated with the service definition this report belongs to.
 * @property {string} id ID of the service configuration this report belongs to.
 * @property {string} serviceName Name of the service this report belongs to.
 */
/**
 * @typedef GetIamPolicyRequest
 * @memberOf! servicemanagement(v1)
 * @type object
 */
/**
 * @typedef Http
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {boolean} fullyDecodeReservedExpansion When set to true, URL path parmeters will be fully URI-decoded except in cases of single segment matches in reserved expansion, where &quot;%2F&quot; will be left encoded.  The default behavior is to not decode RFC 6570 reserved characters in multi segment matches.
 * @property {servicemanagement(v1).HttpRule[]} rules A list of HTTP configuration rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
 */
/**
 * @typedef HttpRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).HttpRule[]} additionalBindings Additional HTTP bindings for the selector. Nested bindings must not contain an `additional_bindings` field themselves (that is, the nesting may only be one level deep).
 * @property {string} body The name of the request field whose value is mapped to the HTTP body, or `*` for mapping all fields not captured by the path pattern to the HTTP body. NOTE: the referred field must not be a repeated field and must be present at the top-level of request message type.
 * @property {servicemanagement(v1).CustomHttpPattern} custom The custom pattern is used for specifying an HTTP method that is not included in the `pattern` field, such as HEAD, or &quot;*&quot; to leave the HTTP method unspecified for this rule. The wild-card rule is useful for services that provide content to Web (HTML) clients.
 * @property {string} delete Used for deleting a resource.
 * @property {string} get Used for listing and getting information about resources.
 * @property {servicemanagement(v1).MediaDownload} mediaDownload Use this only for Scotty Requests. Do not use this for bytestream methods. For media support, add instead [][google.bytestream.RestByteStream] as an API to your configuration.
 * @property {servicemanagement(v1).MediaUpload} mediaUpload Use this only for Scotty Requests. Do not use this for media support using Bytestream, add instead [][google.bytestream.RestByteStream] as an API to your configuration for Bytestream methods.
 * @property {string} patch Used for updating a resource.
 * @property {string} post Used for creating a resource.
 * @property {string} put Used for updating a resource.
 * @property {string} responseBody The name of the response field whose value is mapped to the HTTP body of response. Other response fields are ignored. This field is optional. When not set, the response message will be used as HTTP body of response. NOTE: the referred field must be not a repeated field and must be present at the top-level of response message type.
 * @property {string} selector Selects methods to which this rule applies.  Refer to selector for syntax details.
 */
/**
 * @typedef LabelDescriptor
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} description A human-readable description for the label.
 * @property {string} key The label key.
 * @property {string} valueType The type of data that can be assigned to the label.
 */
/**
 * @typedef ListOperationsResponse
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {servicemanagement(v1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */
/**
 * @typedef ListServiceConfigsResponse
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} nextPageToken The token of the next page of results.
 * @property {servicemanagement(v1).Service[]} serviceConfigs The list of service configuration resources.
 */
/**
 * @typedef ListServiceRolloutsResponse
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} nextPageToken The token of the next page of results.
 * @property {servicemanagement(v1).Rollout[]} rollouts The list of rollout resources.
 */
/**
 * @typedef ListServicesResponse
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} nextPageToken Token that can be passed to `ListServices` to resume a paginated query.
 * @property {servicemanagement(v1).ManagedService[]} services The returned services will only have the name field set.
 */
/**
 * @typedef LogDescriptor
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} description A human-readable description of this log. This information appears in the documentation and can contain details.
 * @property {string} displayName The human-readable name for this log. This information appears on the user interface and should be concise.
 * @property {servicemanagement(v1).LabelDescriptor[]} labels The set of labels that are available to describe a specific log entry. Runtime requests that contain labels not specified here are considered invalid.
 * @property {string} name The name of the log. It must be less than 512 characters long and can include the following characters: upper- and lower-case alphanumeric characters [A-Za-z0-9], and punctuation characters including slash, underscore, hyphen, period [/_-.].
 */
/**
 * @typedef Logging
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).LoggingDestination[]} consumerDestinations Logging configurations for sending logs to the consumer project. There can be multiple consumer destinations, each one must have a different monitored resource type. A log can be used in at most one consumer destination.
 * @property {servicemanagement(v1).LoggingDestination[]} producerDestinations Logging configurations for sending logs to the producer project. There can be multiple producer destinations, each one must have a different monitored resource type. A log can be used in at most one producer destination.
 */
/**
 * @typedef LoggingDestination
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string[]} logs Names of the logs to be sent to this destination. Each name must be defined in the Service.logs section. If the log name is not a domain scoped name, it will be automatically prefixed with the service name followed by &quot;/&quot;.
 * @property {string} monitoredResource The monitored resource type. The type must be defined in the Service.monitored_resources section.
 */
/**
 * @typedef ManagedService
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} producerProjectId ID of the project that produces and owns this service.
 * @property {string} serviceName The name of the service. See the [overview](/service-management/overview) for naming requirements.
 */
/**
 * @typedef MediaDownload
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {boolean} completeNotification A boolean that determines whether a notification for the completion of a download should be sent to the backend.
 * @property {string} downloadService DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.  Specify name of the download service if one is used for download.
 * @property {string} dropzone Name of the Scotty dropzone to use for the current API.
 * @property {boolean} enabled Whether download is enabled.
 * @property {string} maxDirectDownloadSize Optional maximum acceptable size for direct download. The size is specified in bytes.
 * @property {boolean} useDirectDownload A boolean that determines if direct download from ESF should be used for download of this media.
 */
/**
 * @typedef MediaUpload
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {boolean} completeNotification A boolean that determines whether a notification for the completion of an upload should be sent to the backend. These notifications will not be seen by the client and will not consume quota.
 * @property {string} dropzone Name of the Scotty dropzone to use for the current API.
 * @property {boolean} enabled Whether upload is enabled.
 * @property {string} maxSize Optional maximum acceptable size for an upload. The size is specified in bytes.
 * @property {string[]} mimeTypes An array of mimetype patterns. Esf will only accept uploads that match one of the given patterns.
 * @property {boolean} progressNotification Whether to receive a notification for progress changes of media upload.
 * @property {boolean} startNotification Whether to receive a notification on the start of media upload.
 * @property {string} uploadService DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.  Specify name of the upload service if one is used for upload.
 */
/**
 * @typedef Method
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} name The simple name of this method.
 * @property {servicemanagement(v1).Option[]} options Any metadata attached to the method.
 * @property {boolean} requestStreaming If true, the request is streamed.
 * @property {string} requestTypeUrl A URL of the input message type.
 * @property {boolean} responseStreaming If true, the response is streamed.
 * @property {string} responseTypeUrl The URL of the output message type.
 * @property {string} syntax The source syntax of this method.
 */
/**
 * @typedef MetricDescriptor
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} description A detailed description of the metric, which can be used in documentation.
 * @property {string} displayName A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example &quot;Request count&quot;. This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
 * @property {servicemanagement(v1).LabelDescriptor[]} labels The set of labels that can be used to describe a specific instance of this metric type. For example, the `appengine.googleapis.com/http/server/response_latencies` metric type has a label for the HTTP response code, `response_code`, so you can look at latencies for successful responses or just for responses that failed.
 * @property {string} metricKind Whether the metric records instantaneous values, changes to a value, etc. Some combinations of `metric_kind` and `value_type` might not be supported.
 * @property {string} name The resource name of the metric descriptor.
 * @property {string} type The metric type, including its DNS name prefix. The type is not URL-encoded.  All user-defined custom metric types have the DNS name `custom.googleapis.com`.  Metric types should use a natural hierarchical grouping. For example:      &quot;custom.googleapis.com/invoice/paid/amount&quot;     &quot;appengine.googleapis.com/http/server/response_latencies&quot;
 * @property {string} unit The unit in which the metric value is reported. It is only applicable if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The supported units are a subset of [The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard:  **Basic units (UNIT)**  * `bit`   bit * `By`    byte * `s`     second * `min`   minute * `h`     hour * `d`     day  **Prefixes (PREFIX)**  * `k`     kilo    (10**3) * `M`     mega    (10**6) * `G`     giga    (10**9) * `T`     tera    (10**12) * `P`     peta    (10**15) * `E`     exa     (10**18) * `Z`     zetta   (10**21) * `Y`     yotta   (10**24) * `m`     milli   (10**-3) * `u`     micro   (10**-6) * `n`     nano    (10**-9) * `p`     pico    (10**-12) * `f`     femto   (10**-15) * `a`     atto    (10**-18) * `z`     zepto   (10**-21) * `y`     yocto   (10**-24) * `Ki`    kibi    (2**10) * `Mi`    mebi    (2**20) * `Gi`    gibi    (2**30) * `Ti`    tebi    (2**40)  **Grammar**  The grammar includes the dimensionless unit `1`, such as `1/s`.  The grammar also includes these connectors:  * `/`    division (as an infix operator, e.g. `1/s`). * `.`    multiplication (as an infix operator, e.g. `GBy.d`)  The grammar for a unit is as follows:      Expression = Component { &quot;.&quot; Component } { &quot;/&quot; Component } ;      Component = [ PREFIX ] UNIT [ Annotation ]               | Annotation               | &quot;1&quot;               ;      Annotation = &quot;{&quot; NAME &quot;}&quot; ;  Notes:  * `Annotation` is just a comment if it follows a `UNIT` and is    equivalent to `1` if it is used alone. For examples,    `{requests}/s == 1/s`, `By{transmitted}/s == By/s`. * `NAME` is a sequence of non-blank printable ASCII characters not    containing &#39;{&#39; or &#39;}&#39;.
 * @property {string} valueType Whether the measurement is an integer, a floating-point number, etc. Some combinations of `metric_kind` and `value_type` might not be supported.
 */
/**
 * @typedef MetricRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {object} metricCosts Metrics to update when the selected methods are called, and the associated cost applied to each metric.  The key of the map is the metric name, and the values are the amount increased for the metric against which the quota limits are defined. The value must not be negative.
 * @property {string} selector Selects the methods to which this rule applies.  Refer to selector for syntax details.
 */
/**
 * @typedef Mixin
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} name The fully qualified name of the interface which is included.
 * @property {string} root If non-empty specifies a path under which inherited HTTP paths are rooted.
 */
/**
 * @typedef MonitoredResourceDescriptor
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} description Optional. A detailed description of the monitored resource type that might be used in documentation.
 * @property {string} displayName Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, `&quot;Google Cloud SQL Database&quot;`.
 * @property {servicemanagement(v1).LabelDescriptor[]} labels Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels `&quot;database_id&quot;` and `&quot;zone&quot;`.
 * @property {string} name Optional. The resource name of the monitored resource descriptor: `&quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot;` where {type} is the value of the `type` field in this object and {project_id} is a project ID that provides API-specific context for accessing the type.  APIs that do not use project information can use the resource name format `&quot;monitoredResourceDescriptors/{type}&quot;`.
 * @property {string} type Required. The monitored resource type. For example, the type `&quot;cloudsql_database&quot;` represents databases in Google Cloud SQL. The maximum length of this value is 256 characters.
 */
/**
 * @typedef Monitoring
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).MonitoringDestination[]} consumerDestinations Monitoring configurations for sending metrics to the consumer project. There can be multiple consumer destinations, each one must have a different monitored resource type. A metric can be used in at most one consumer destination.
 * @property {servicemanagement(v1).MonitoringDestination[]} producerDestinations Monitoring configurations for sending metrics to the producer project. There can be multiple producer destinations, each one must have a different monitored resource type. A metric can be used in at most one producer destination.
 */
/**
 * @typedef MonitoringDestination
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string[]} metrics Names of the metrics to report to this monitoring destination. Each name must be defined in Service.metrics section.
 * @property {string} monitoredResource The monitored resource type. The type must be defined in Service.monitored_resources section.
 */
/**
 * @typedef OAuthRequirements
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} canonicalScopes The list of publicly documented OAuth scopes that are allowed access. An OAuth token containing any of these scopes will be accepted.  Example:       canonical_scopes: https://www.googleapis.com/auth/calendar,                        https://www.googleapis.com/auth/calendar.read
 */
/**
 * @typedef Operation
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {servicemanagement(v1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
 * @property {object} response The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
 */
/**
 * @typedef OperationMetadata
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {integer} progressPercentage Percentage of completion of this operation, ranging from 0 to 100.
 * @property {string[]} resourceNames The full name of the resources that this operation is directly associated with.
 * @property {string} startTime The start time of the operation.
 * @property {servicemanagement(v1).Step[]} steps Detailed status information for each step. The order is undetermined.
 */
/**
 * @typedef Option
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} name The option&#39;s name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, `&quot;map_entry&quot;`. For custom options, it should be the fully-qualified name. For example, `&quot;google.api.http&quot;`.
 * @property {object} value The option&#39;s value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.
 */
/**
 * @typedef Page
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} content The Markdown content of the page. You can use &lt;code&gt;&amp;#40;== include {path} ==&amp;#41;&lt;/code&gt; to include content from a Markdown file.
 * @property {string} name The name of the page. It will be used as an identity of the page to generate URI of the page, text of the link to this page in navigation, etc. The full page name (start from the root page name to this page concatenated with `.`) can be used as reference to the page in your documentation. For example: &lt;pre&gt;&lt;code&gt;pages: - name: Tutorial   content: &amp;#40;== include tutorial.md ==&amp;#41;   subpages:   - name: Java     content: &amp;#40;== include tutorial_java.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; You can reference `Java` page using Markdown reference link syntax: `Java`.
 * @property {servicemanagement(v1).Page[]} subpages Subpages of this page. The order of subpages specified here will be honored in the generated docset.
 */
/**
 * @typedef Policy
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
 * @property {servicemanagement(v1).Binding[]} bindings Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
 * @property {boolean} iamOwned
 * @property {integer} version Deprecated.
 */
/**
 * @typedef Quota
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).QuotaLimit[]} limits List of `QuotaLimit` definitions for the service.
 * @property {servicemanagement(v1).MetricRule[]} metricRules List of `MetricRule` definitions, each one mapping a selected method to one or more metrics.
 */
/**
 * @typedef QuotaLimit
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} defaultLimit Default number of tokens that can be consumed during the specified duration. This is the number of tokens assigned when a client application developer activates the service for his/her project.  Specifying a value of 0 will block all requests. This can be used if you are provisioning quota to selected consumers and blocking others. Similarly, a value of -1 will indicate an unlimited quota. No other negative values are allowed.  Used by group-based quotas only.
 * @property {string} description Optional. User-visible, extended description for this quota limit. Should be used only when more context is needed to understand this limit than provided by the limit&#39;s display name (see: `display_name`).
 * @property {string} displayName User-visible display name for this limit. Optional. If not set, the UI will provide a default display name based on the quota configuration. This field can be used to override the default display name generated from the configuration.
 * @property {string} duration Duration of this limit in textual notation. Example: &quot;100s&quot;, &quot;24h&quot;, &quot;1d&quot;. For duration longer than a day, only multiple of days is supported. We support only &quot;100s&quot; and &quot;1d&quot; for now. Additional support will be added in the future. &quot;0&quot; indicates indefinite duration.  Used by group-based quotas only.
 * @property {string} freeTier Free tier value displayed in the Developers Console for this limit. The free tier is the number of tokens that will be subtracted from the billed amount when billing is enabled. This field can only be set on a limit with duration &quot;1d&quot;, in a billable group; it is invalid on any other limit. If this field is not set, it defaults to 0, indicating that there is no free tier for this service.  Used by group-based quotas only.
 * @property {string} maxLimit Maximum number of tokens that can be consumed during the specified duration. Client application developers can override the default limit up to this maximum. If specified, this value cannot be set to a value less than the default limit. If not specified, it is set to the default limit.  To allow clients to apply overrides with no upper bound, set this to -1, indicating unlimited maximum quota.  Used by group-based quotas only.
 * @property {string} metric The name of the metric this quota limit applies to. The quota limits with the same metric will be checked together during runtime. The metric must be defined within the service config.
 * @property {string} name Name of the quota limit.  The name must be provided, and it must be unique within the service. The name can only include alphanumeric characters as well as &#39;-&#39;.  The maximum length of the limit name is 64 characters.
 * @property {string} unit Specify the unit of the quota limit. It uses the same syntax as Metric.unit. The supported unit kinds are determined by the quota backend system.  Here are some examples: * &quot;1/min/{project}&quot; for quota per minute per project.  Note: the order of unit components is insignificant. The &quot;1&quot; at the beginning is required to follow the metric unit syntax.
 * @property {object} values Tiered limit values. You must specify this as a key:value pair, with an integer value that is the maximum number of requests allowed for the specified unit. Currently only STANDARD is supported.
 */
/**
 * @typedef Rollout
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} createdBy The user who created the Rollout. Readonly.
 * @property {string} createTime Creation time of the rollout. Readonly.
 * @property {servicemanagement(v1).DeleteServiceStrategy} deleteServiceStrategy The strategy associated with a rollout to delete a `ManagedService`. Readonly.
 * @property {string} rolloutId Optional unique identifier of this Rollout. Only lower case letters, digits  and &#39;-&#39; are allowed.  If not specified by client, the server will generate one. The generated id will have the form of &lt;date&gt;&lt;revision number&gt;, where &quot;date&quot; is the create date in ISO 8601 format.  &quot;revision number&quot; is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout_id is &#39;2016-02-16r1&#39;
 * @property {string} serviceName The name of the service associated with this Rollout.
 * @property {string} status The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.
 * @property {servicemanagement(v1).TrafficPercentStrategy} trafficPercentStrategy Google Service Control selects service configurations based on traffic percentage.
 */
/**
 * @typedef Service
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).Api[]} apis A list of API interfaces exported by this service. Only the `name` field of the google.protobuf.Api needs to be provided by the configuration author, as the remaining fields will be derived from the IDL during the normalization process. It is an error to specify an API interface here which cannot be resolved against the associated IDL files.
 * @property {servicemanagement(v1).Authentication} authentication Auth configuration.
 * @property {servicemanagement(v1).Backend} backend API backend configuration.
 * @property {servicemanagement(v1).Billing} billing Billing configuration.
 * @property {integer} configVersion The semantic version of the service configuration. The config version affects the interpretation of the service configuration. For example, certain features are enabled by default for certain config versions. The latest config version is `3`.
 * @property {servicemanagement(v1).Context} context Context configuration.
 * @property {servicemanagement(v1).Control} control Configuration for the service control plane.
 * @property {servicemanagement(v1).CustomError} customError Custom error configuration.
 * @property {servicemanagement(v1).Documentation} documentation Additional API documentation.
 * @property {servicemanagement(v1).Endpoint[]} endpoints Configuration for network endpoints.  If this is empty, then an endpoint with the same name as the service is automatically generated to service all defined APIs.
 * @property {servicemanagement(v1).Enum[]} enums A list of all enum types included in this API service.  Enums referenced directly or indirectly by the `apis` are automatically included.  Enums which are not referenced but shall be included should be listed here by name. Example:      enums:     - name: google.someapi.v1.SomeEnum
 * @property {servicemanagement(v1).Experimental} experimental Experimental configuration.
 * @property {servicemanagement(v1).Http} http HTTP configuration.
 * @property {string} id A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. If empty, the server may choose to generate one instead.
 * @property {servicemanagement(v1).Logging} logging Logging configuration.
 * @property {servicemanagement(v1).LogDescriptor[]} logs Defines the logs used by this service.
 * @property {servicemanagement(v1).MetricDescriptor[]} metrics Defines the metrics used by this service.
 * @property {servicemanagement(v1).MonitoredResourceDescriptor[]} monitoredResources Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations.
 * @property {servicemanagement(v1).Monitoring} monitoring Monitoring configuration.
 * @property {string} name The DNS address at which this service is available, e.g. `calendar.googleapis.com`.
 * @property {string} producerProjectId The Google project that owns this service.
 * @property {servicemanagement(v1).Quota} quota Quota configuration.
 * @property {servicemanagement(v1).SourceInfo} sourceInfo Output only. The source information for this configuration if available.
 * @property {servicemanagement(v1).SystemParameters} systemParameters System parameter configuration.
 * @property {servicemanagement(v1).Type[]} systemTypes A list of all proto message types included in this API service. It serves similar purpose as [google.api.Service.types], except that these types are not needed by user-defined APIs. Therefore, they will not show up in the generated discovery doc. This field should only be used to define system APIs in ESF.
 * @property {string} title The product title for this service.
 * @property {servicemanagement(v1).Type[]} types A list of all proto message types included in this API service. Types referenced directly or indirectly by the `apis` are automatically included.  Messages which are not referenced but shall be included, such as types used by the `google.protobuf.Any` type, should be listed here by name. Example:      types:     - name: google.protobuf.Int32
 * @property {servicemanagement(v1).Usage} usage Configuration controlling usage of this service.
 * @property {servicemanagement(v1).Visibility} visibility API visibility configuration.
 */
/**
 * @typedef SetIamPolicyRequest
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
 * @property {string} updateMask OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
 */
/**
 * @typedef SourceContext
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} fileName The path-qualified name of the .proto file that contained the associated protobuf element.  For example: `&quot;google/protobuf/source_context.proto&quot;`.
 */
/**
 * @typedef SourceInfo
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {object[]} sourceFiles All files used during config generation.
 */
/**
 * @typedef Status
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef Step
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} description The short description of the step.
 * @property {string} status The status code.
 */
/**
 * @typedef SubmitConfigSourceRequest
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).ConfigSource} configSource The source configuration for the service.
 * @property {boolean} validateOnly Optional. If set, this will result in the generation of a `google.api.Service` configuration based on the `ConfigSource` provided, but the generated config and the sources will NOT be persisted.
 */
/**
 * @typedef SubmitConfigSourceResponse
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).Service} serviceConfig The generated service configuration.
 */
/**
 * @typedef SystemParameter
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} httpHeader Define the HTTP header name to use for the parameter. It is case insensitive.
 * @property {string} name Define the name of the parameter, such as &quot;api_key&quot; . It is case sensitive.
 * @property {string} urlQueryParameter Define the URL query parameter name to use for the parameter. It is case sensitive.
 */
/**
 * @typedef SystemParameterRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).SystemParameter[]} parameters Define parameters. Multiple names may be defined for a parameter. For a given method call, only one of them should be used. If multiple names are used the behavior is implementation-dependent. If none of the specified names are present the behavior is parameter-dependent.
 * @property {string} selector Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all methods in all APIs.  Refer to selector for syntax details.
 */
/**
 * @typedef SystemParameters
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).SystemParameterRule[]} rules Define system parameters.  The parameters defined here will override the default parameters implemented by the system. If this field is missing from the service config, default system parameters will be used. Default system parameters and names is implementation-dependent.  Example: define api key for all methods      system_parameters       rules:         - selector: &quot;*&quot;           parameters:             - name: api_key               url_query_parameter: api_key   Example: define 2 api key names for a specific method.      system_parameters       rules:         - selector: &quot;/ListShelves&quot;           parameters:             - name: api_key               http_header: Api-Key1             - name: api_key               http_header: Api-Key2  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
 */
/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 */
/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
 */
/**
 * @typedef TrafficPercentStrategy
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {object} percentages Maps service configuration IDs to their corresponding traffic percentage. Key is the service configuration ID, Value is the traffic percentage which must be greater than 0.0 and the sum must equal to 100.0.
 */
/**
 * @typedef Type
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).Field[]} fields The list of fields.
 * @property {string} name The fully qualified message name.
 * @property {string[]} oneofs The list of types appearing in `oneof` definitions in this type.
 * @property {servicemanagement(v1).Option[]} options The protocol buffer options.
 * @property {servicemanagement(v1).SourceContext} sourceContext The source context.
 * @property {string} syntax The source syntax.
 */
/**
 * @typedef UndeleteServiceResponse
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).ManagedService} service Revived service resource.
 */
/**
 * @typedef Usage
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} producerNotificationChannel The full resource name of a channel used for sending notifications to the service producer.  Google Service Management currently only supports [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification channel. To use Google Cloud Pub/Sub as the channel, this must be the name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format documented in https://cloud.google.com/pubsub/docs/overview.
 * @property {string[]} requirements Requirements that must be satisfied before a consumer project can use the service. Each requirement is of the form &lt;service.name&gt;/&lt;requirement-id&gt;; for example &#39;serviceusage.googleapis.com/billing-enabled&#39;.
 * @property {servicemanagement(v1).UsageRule[]} rules A list of usage rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
 */
/**
 * @typedef UsageRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {boolean} allowUnregisteredCalls If true, the selected method allows unregistered calls, e.g. calls that don&#39;t identify any user or application.
 * @property {string} selector Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all methods in all APIs.  Refer to selector for syntax details.
 * @property {boolean} skipServiceControl If true, the selected method should skip service control and the control plane features, such as quota and billing, will not be available. This flag is used by Google Cloud Endpoints to bypass checks for internal methods, such as service health check methods.
 */
/**
 * @typedef Visibility
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {servicemanagement(v1).VisibilityRule[]} rules A list of visibility rules that apply to individual API elements.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
 */
/**
 * @typedef VisibilityRule
 * @memberOf! servicemanagement(v1)
 * @type object
 * @property {string} restriction A comma-separated list of visibility labels that apply to the `selector`. Any of the listed labels can be used to grant the visibility.  If a rule has multiple labels, removing one of the labels but not all of them can break clients.  Example:      visibility:       rules:       - selector: google.calendar.Calendar.EnhancedSearch         restriction: GOOGLE_INTERNAL, TRUSTED_TESTER  Removing GOOGLE_INTERNAL from this restriction will break clients that rely on this method and only had access to it through GOOGLE_INTERNAL.
 * @property {string} selector Selects methods, messages, fields, enums, etc. to which this rule applies.  Refer to selector for syntax details.
 */

export = Servicemanagement;
