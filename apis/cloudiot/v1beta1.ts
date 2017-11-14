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
 * Google Cloud IoT API
 *
 * Registers and manages IoT (Internet of Things) devices that connect to the Google Cloud Platform.

 *
 * @example
 * const google = require('googleapis');
 * const cloudiot = google.cloudiot('v1beta1');
 *
 * @namespace cloudiot
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Cloudiot
 */
function Cloudiot(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {
    locations: {
      registries: {

        /**
         * cloudiot.projects.locations.registries.create
         *
         * @desc Creates a device registry that contains devices.
         *
         * @alias cloudiot.projects.locations.registries.create
         * @memberOf! cloudiot(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The project and cloud region where this device registry must be created. For example, `projects/example-project/locations/us-central1`.
         * @param {cloudiot(v1beta1).DeviceRegistry} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}/registries').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudiot.projects.locations.registries.delete
         *
         * @desc Deletes a device registry configuration.
         *
         * @alias cloudiot.projects.locations.registries.delete
         * @memberOf! cloudiot(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
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

          const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

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
         * cloudiot.projects.locations.registries.get
         *
         * @desc Gets a device registry configuration.
         *
         * @alias cloudiot.projects.locations.registries.get
         * @memberOf! cloudiot(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
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

          const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

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
         * cloudiot.projects.locations.registries.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @alias cloudiot.projects.locations.registries.getIamPolicy
         * @memberOf! cloudiot(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudiot(v1beta1).GetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['resource'],
            pathParams: ['resource'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudiot.projects.locations.registries.list
         *
         * @desc Lists device registries.
         *
         * @alias cloudiot.projects.locations.registries.list
         * @memberOf! cloudiot(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of registries to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested, but if there is a non-empty `page_token`, it indicates that more entries are available.
         * @param {string=} params.pageToken The value returned by the last `ListDeviceRegistriesResponse`; indicates that this is a continuation of a prior `ListDeviceRegistries` call, and that the system should return the next page of data.
         * @param {string} params.parent The project and cloud region path. For example, `projects/example-project/locations/us-central1`.
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

          const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{parent}/registries').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudiot.projects.locations.registries.patch
         *
         * @desc Updates a device registry configuration.
         *
         * @alias cloudiot.projects.locations.registries.patch
         * @memberOf! cloudiot(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource path name. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
         * @param {string=} params.updateMask Only updates the `device_registry` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `event_notification_config` and `mqtt_config`
         * @param {cloudiot(v1beta1).DeviceRegistry} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudiot.projects.locations.registries.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @alias cloudiot.projects.locations.registries.setIamPolicy
         * @memberOf! cloudiot(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {cloudiot(v1beta1).SetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['resource'],
            pathParams: ['resource'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudiot.projects.locations.registries.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
         *
         * @alias cloudiot.projects.locations.registries.testIamPermissions
         * @memberOf! cloudiot(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudiot(v1beta1).TestIamPermissionsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1beta1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['resource'],
            pathParams: ['resource'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },
        devices: {

          /**
           * cloudiot.projects.locations.registries.devices.create
           *
           * @desc Creates a device in a device registry.
           *
           * @alias cloudiot.projects.locations.registries.devices.create
           * @memberOf! cloudiot(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent The name of the device registry where this device should be created. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
           * @param {cloudiot(v1beta1).Device} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{parent}/devices').replace(/([^:]\/)\/+/g, '$1'),
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
           * cloudiot.projects.locations.registries.devices.delete
           *
           * @desc Deletes a device.
           *
           * @alias cloudiot.projects.locations.registries.devices.delete
           * @memberOf! cloudiot(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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

            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

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
           * cloudiot.projects.locations.registries.devices.get
           *
           * @desc Gets details about a device.
           *
           * @alias cloudiot.projects.locations.registries.devices.get
           * @memberOf! cloudiot(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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

            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

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
           * cloudiot.projects.locations.registries.devices.getConfig
           *
           * @desc Gets the configuration of a device.
           *
           * @alias cloudiot.projects.locations.registries.devices.getConfig
           * @memberOf! cloudiot(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.localVersion If zero, returns the current device configuration from Cloud IoT Core. If nonzero, specifies the local version of the configuration on the device. The server returns config data only if a higher (newer) version is available from Cloud IoT Core. If this value is higher than the latest version available in Cloud IoT Core, returns an `OUT_OF_RANGE` error.
           * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0`.
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          getConfig: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}/config').replace(/([^:]\/)\/+/g, '$1'),
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
           * cloudiot.projects.locations.registries.devices.list
           *
           * @desc List devices in a device registry.
           *
           * @alias cloudiot.projects.locations.registries.devices.list
           * @memberOf! cloudiot(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.deviceIds A list of device string identifiers. If empty, it will ignore this field. For example, `['device0', 'device12']`. This field cannot hold more than 10,000 entries.
           * @param {string=} params.deviceNumIds A list of device numerical ids. If empty, it will ignore this field. This field cannot hold more than 10,000 entries.
           * @param {string=} params.fieldMask The fields of the `Device` resource to be returned in the response. The fields `id`, and `num_id` are always returned by default, along with any other fields specified.
           * @param {integer=} params.pageSize The maximum number of devices to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested, but if there is a non-empty `page_token`, it indicates that more entries are available.
           * @param {string=} params.pageToken The value returned by the last `ListDevicesResponse`; indicates that this is a continuation of a prior `ListDevices` call, and that the system should return the next page of data.
           * @param {string} params.parent The device registry path. Required. For example, `projects/my-project/locations/us-central1/registries/my-registry`.
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

            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{parent}/devices').replace(/([^:]\/)\/+/g, '$1'),
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
           * cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig
           *
           * @desc Modifies the configuration for the device, which is eventually sent from the Cloud IoT servers. Returns the modified configuration version and its meta-data.
           *
           * @alias cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig
           * @memberOf! cloudiot(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
           * @param {cloudiot(v1beta1).ModifyCloudToDeviceConfigRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          modifyCloudToDeviceConfig: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}:modifyCloudToDeviceConfig').replace(/([^:]\/)\/+/g, '$1'),
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
           * cloudiot.projects.locations.registries.devices.patch
           *
           * @desc Updates a device.
           *
           * @alias cloudiot.projects.locations.registries.devices.patch
           * @memberOf! cloudiot(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.
           * @param {string=} params.updateMask Only updates the `device` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `credentials` and `enabled_state`
           * @param {cloudiot(v1beta1).Device} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          patch: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * cloudiot.projects.locations.registries.devices.publishEvent
           *
           * @desc Publishes a telemetry event for a device.
           *
           * @alias cloudiot.projects.locations.registries.devices.publishEvent
           * @memberOf! cloudiot(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0`.
           * @param {cloudiot(v1beta1).HttpPublishEventRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          publishEvent: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}:publishEvent').replace(/([^:]\/)\/+/g, '$1'),
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
           * cloudiot.projects.locations.registries.devices.setState
           *
           * @desc Sets the state of a device.
           *
           * @alias cloudiot.projects.locations.registries.devices.setState
           * @memberOf! cloudiot(v1beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0`.
           * @param {cloudiot(v1beta1).HttpSetDeviceStateRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          setState: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1beta1/{name}:setState').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },
          configVersions: {

            /**
             * cloudiot.projects.locations.registries.devices.configVersions.list
             *
             * @desc Lists the last few versions of the device configuration in descending order (i.e.: newest first).
             *
             * @alias cloudiot.projects.locations.registries.devices.configVersions.list
             * @memberOf! cloudiot(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
             * @param {integer=} params.numVersions The number of versions to list. Versions are listed in decreasing order of the version number. The maximum number of versions retained is 10. If this value is zero, it will return all the versions available.
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

              const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';

              const parameters = {
                options: Object.assign({
                  url: (rootUrl + '/v1beta1/{name}/configVersions').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                }, options),
                params: params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: self
              };

              return createAPIRequest(parameters, callback);
            }
          }
        }
      }
    }
  };
}

/**
 * @typedef AuditConfig
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission.
Next ID: 4
* @property {string[]} exemptedMembers 
* @property {string} service Specifies a service that will be enabled for audit logging.
For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
`allServices` is a special value that covers all services.
*/

/**
 * @typedef AuditLogConfig
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of
permission.
Follows the same format of Binding.members.
* @property {string} logType The log type that this config enables.
*/

/**
 * @typedef Binding
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).Expr} condition The condition that is associated with this binding.
NOTE: an unsatisfied condition will not allow user access via current
binding. Different bindings, including their conditions, are examined
independently.
This field is GOOGLE_INTERNAL.
* @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource.
`members` can have the following values:

* `allUsers`: A special identifier that represents anyone who is
   on the internet; with or without a Google account.

* `allAuthenticatedUsers`: A special identifier that represents anyone
   who is authenticated with a Google account or a service account.

* `user:{emailid}`: An email address that represents a specific Google
   account. For example, `alice@gmail.com` or `joe@example.com`.


* `serviceAccount:{emailid}`: An email address that represents a service
   account. For example, `my-other-app@appspot.gserviceaccount.com`.

* `group:{emailid}`: An email address that represents a Google group.
   For example, `admins@example.com`.


* `domain:{domain}`: A Google Apps domain name that represents all the
   users of that domain. For example, `google.com` or `example.com`.


* @property {string} role Role that is assigned to `members`.
For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
Required
*/

/**
 * @typedef Device
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).DeviceConfig} config The most recent device configuration, which is eventually sent from the
Cloud IoT Core service to the device. If not present on creation, the
configuration will be initialized with an empty payload and version value
of `1`. To update this field after creation, use the
`DeviceManager.ModifyCloudToDeviceConfig` method.
* @property {cloudiot(v1beta1).DeviceCredential[]} credentials The credentials used to authenticate this device. To allow credential
rotation without interruption, multiple device credentials can be bound to
this device. No more than 3 credentials can be bound to a single device at
a time.
* @property {string} enabledState If a device is disabled, communication from it will be blocked. Can be used
to temporarily prevent the device from connecting if, for example, the
sensor is generating bad data and needs maintenance.
* @property {string} id The user-defined device identifier. The device ID must be unique
within a device registry.
* @property {string} lastConfigAckTime [Output only] The last time a cloud-to-device config version acknowledgment
was received from the device.
* @property {cloudiot(v1beta1).Status} lastErrorStatus [Output only] The error message of the last error, e.g., failed to publish
to Cloud Pub/Sub. &#39;last_error_time&#39; is the timestamp of this field. If no
errors are present, this will have an empty message (whose status code is
0 == OK), otherwise this field is expected to have a not-OK status code.
* @property {string} lastErrorTime [Output only] The last time an error happened, e.g., failed to publish to
Cloud Pub/Sub. This field is the timestamp of &#39;last_error_status&#39;.
* @property {string} lastEventTime [Output only] The last time an event was received. Timestamps are
periodically collected and written to storage; they may be stale by a few
minutes.
* @property {string} lastHeartbeatTime [Output only] The last time a heartbeat was received. Timestamps are
periodically collected and written to storage; they may be stale by a few
minutes.
* @property {string} name The resource path name. For example,
`projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
`projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
When `name` is populated as a response from the service, it always ends
in the device numeric ID.
* @property {string} numId [Output only] A server-defined unique numeric ID for the device. This is a
more compact way to identify devices, and it is globally unique.
*/

/**
 * @typedef DeviceConfig
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {string} cloudUpdateTime [Output only] The time when this version state was updated in the Cloud IoT
Core service. This timestamp is set by the server.
* @property {cloudiot(v1beta1).DeviceConfigData} data The device configuration data.
* @property {string} deviceAckTime [Output only] The time when the Cloud IoT Core server received the
acknowledgment from the device, indicating that the device has received
this configuration version. If this field is not present, the device has
not yet acknowledged that it received this version. Note that when sending
the config to the device, there may have been many config versions on the
Cloud IoT Core service while the device was disconnected; and on
connection, only the latest version is sent to the device. Some of the
versions may never be sent to the device, and therefore are never
acknowledged. This timestamp is set by the Cloud IoT Core service.
* @property {string} version [Output only] The version of this update. The version number is assigned by
the server, and is always greater than zero after device creation. The
version must be zero on the `CreateDevice` request if a `config` is
specified; the response of `CreateDevice` will always have a value of one.
*/

/**
 * @typedef DeviceConfigData
 * @memberOf! cloudiot(v1beta1)
 * @type object
 * @property {string} binaryData The configuration sent to the device, as bytes.
 */

/**
 * @typedef DeviceCredential
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {string} expirationTime [Optional] The time at which this credential becomes invalid. This
credential will be ignored for new client authentication requests after
this timestamp; however, it will not be automatically deleted.
* @property {cloudiot(v1beta1).PublicKeyCredential} publicKey A public key used to verify the signature of JSON Web Tokens (JWTs).
*/

/**
 * @typedef DeviceRegistry
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).NotificationConfig} eventNotificationConfig Configuration to notify events received from the device.
* @property {string} id The identifier of this device registry. For example, `myRegistry`.
* @property {cloudiot(v1beta1).MqttConfig} mqttConfig The configuration of the MQTT broker associated with this device registry,
including enablement, payload data format type, etc.
* @property {string} name The resource path name. For example,
`projects/example-project/locations/us-central1/registries/my-registry`.
*/

/**
 * @typedef Empty
 * @memberOf! cloudiot(v1beta1)
 * @type object
 */

/**
 * @typedef Expr
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {string} description An optional description of the expression. This is a longer text which
describes the expression, e.g. when hovered over it in a UI.
* @property {string} expression Textual representation of an expression in
Common Expression Language syntax.

The application context of the containing message determines which
well-known feature set of CEL is supported.
* @property {string} location An optional string indicating the location of the expression for error
reporting, e.g. a file name and a position in the file.
* @property {string} title An optional title for the expression, i.e. a short string describing
its purpose. This can be used e.g. in UIs which allow to enter the
expression.
*/

/**
 * @typedef GetIamPolicyRequest
 * @memberOf! cloudiot(v1beta1)
 * @type object
 */

/**
 * @typedef HttpDeviceConfig
 * @memberOf! cloudiot(v1beta1)
 * @type object
 * @property {string} binaryData Data in binary format.
 * @property {string} version The version of the configuration in Cloud IoT Core.
 */

/**
 * @typedef HttpDeviceState
 * @memberOf! cloudiot(v1beta1)
 * @type object
 * @property {string} binaryData Data in binary format.
 */

/**
 * @typedef HttpPublishEventRequest
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {string} binaryData Payload data in binary format.
* @property {string} subFolder Optional subfolder for the telemetry event. This can be used to classify
types of events, and is included in the Pub/Sub message attributes.
*/

/**
 * @typedef HttpPublishEventResponse
 * @memberOf! cloudiot(v1beta1)
 * @type object
 */

/**
 * @typedef HttpSetDeviceStateRequest
 * @memberOf! cloudiot(v1beta1)
 * @type object
 * @property {cloudiot(v1beta1).HttpDeviceState} state The device state.
 */

/**
 * @typedef ListDeviceConfigVersionsResponse
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).DeviceConfig[]} deviceConfigs The device configuration for the last few versions. Versions are listed
in decreasing order, starting from the most recent one.
*/

/**
 * @typedef ListDeviceRegistriesResponse
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).DeviceRegistry[]} deviceRegistries The registries that matched the query.
* @property {string} nextPageToken If not empty, indicates that there may be more registries that match the
request; this value should be passed in a new
`ListDeviceRegistriesRequest`.
*/

/**
 * @typedef ListDevicesResponse
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).Device[]} devices The devices that match the request.
* @property {string} nextPageToken If not empty, indicates that there may be more devices that match the
request; this value should be passed in a new `ListDevicesRequest`.
*/

/**
 * @typedef ModifyCloudToDeviceConfigRequest
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).DeviceConfigData} data The configuration data for the device.
* @property {string} versionToUpdate The version number to update. If this value is zero, it will not check the
version number of the server and will always update the current version;
otherwise, this update will fail if the version number found on the server
does not match this version number. This is used to support multiple
simultaneous updates without losing data.
*/

/**
 * @typedef MqttConfig
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {string} mqttConfigState If enabled, allows connections using the MQTT protocol. Otherwise any MQTT
connection to this registry will fail.
*/

/**
 * @typedef NotificationConfig
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {string} pubsubTopicName A Cloud Pub/Sub topic name. For example,
`projects/myProject/topics/deviceEvents`.
*/

/**
 * @typedef Policy
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
* @property {cloudiot(v1beta1).Binding[]} bindings Associates a list of `members` to a `role`.
`bindings` with no members will result in an error.
* @property {string} etag `etag` is used for optimistic concurrency control as a way to help
prevent simultaneous updates of a policy from overwriting each other.
It is strongly suggested that systems make use of the `etag` in the
read-modify-write cycle to perform policy updates in order to avoid race
conditions: An `etag` is returned in the response to `getIamPolicy`, and
systems are expected to put that etag in the request to `setIamPolicy` to
ensure that their change will be applied to the same version of the policy.

If no `etag` is provided in the call to `setIamPolicy`, then the existing
policy is overwritten blindly.
* @property {boolean} iamOwned 
* @property {integer} version Version of the `Policy`. The default version is 0.
*/

/**
 * @typedef PublicKeyCredential
 * @memberOf! cloudiot(v1beta1)
 * @type object
 * @property {string} format The format of the key.
 * @property {string} key The key data.
 */

/**
 * @typedef SetIamPolicyRequest
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {cloudiot(v1beta1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of
the policy is limited to a few 10s of KB. An empty policy is a
valid policy but certain Cloud Platform services (such as Projects)
might reject them.
* @property {string} updateMask OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
the fields in the mask will be modified. If no mask is provided, the
following default mask is used:
paths: &quot;bindings, etag&quot;
This field is only used by Cloud IAM.
*/

/**
 * @typedef Status
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/

/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with
wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more
information see
[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
*/

/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! cloudiot(v1beta1)
 * @type object
* @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is
allowed.
*/
export = Cloudiot;
