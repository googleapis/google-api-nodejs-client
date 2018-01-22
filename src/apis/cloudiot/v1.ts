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
 * Google Cloud IoT API
 *
 * Registers and manages IoT (Internet of Things) devices that connect to the
 * Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const cloudiot = google.cloudiot('v1');
 *
 * @namespace cloudiot
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudiot
 */
function Cloudiot(options) {
  const self = this;
  self._options = options || {};
  self.projects = {
    locations:
        {
          registries:
              {
                /**
                 * cloudiot.projects.locations.registries.create
                 * @desc Creates a device registry that contains devices.
                 * @alias cloudiot.projects.locations.registries.create
                 * @memberOf! cloudiot(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The project and cloud region where this device registry must be created. For example, `projects/example-project/locations/us-central1`.
                 * @param {cloudiot(v1).DeviceRegistry} params.resource Request body data
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
                      options.rootUrl || 'https://cloudiot.googleapis.com/';
                  const parameters = {
                    options: Object.assign(
                        {
                          url: (rootUrl + '/v1/{parent}/registries')
                                   .replace(/([^:]\/)\/+/g, '$1'),
                          method: 'POST'
                        },
                        options),
                    params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                  };
                  return createAPIRequest(parameters, callback);
                }, /**
                    * cloudiot.projects.locations.registries.delete
                    * @desc Deletes a device registry configuration.
                    * @alias cloudiot.projects.locations.registries.delete
                    * @memberOf! cloudiot(v1)
                    *
                    * @param {object} params Parameters for request
                    * @param {string} params.name The name of the device registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
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
                      options.rootUrl || 'https://cloudiot.googleapis.com/';
                  const parameters = {
                    options: Object.assign(
                        {
                          url: (rootUrl + '/v1/{name}')
                                   .replace(/([^:]\/)\/+/g, '$1'),
                          method: 'DELETE'
                        },
                        options),
                    params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                  };
                  return createAPIRequest(parameters, callback);
                }, /**
                    * cloudiot.projects.locations.registries.get
                    * @desc Gets a device registry configuration.
                    * @alias cloudiot.projects.locations.registries.get
                    * @memberOf! cloudiot(v1)
                    *
                    * @param {object} params Parameters for request
                    * @param {string} params.name The name of the device registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
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
                      options.rootUrl || 'https://cloudiot.googleapis.com/';
                  const parameters = {
                    options: Object.assign(
                        {
                          url: (rootUrl + '/v1/{name}')
                                   .replace(/([^:]\/)\/+/g, '$1'),
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
                    * cloudiot.projects.locations.registries.getIamPolicy
                    * @desc Gets the access control policy for a resource.
                    * Returns an empty policy if the resource exists and does
                    * not have a policy set.
                    * @alias cloudiot.projects.locations.registries.getIamPolicy
                    * @memberOf! cloudiot(v1)
                    *
                    * @param {object} params Parameters for request
                    * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
                    * @param {cloudiot(v1).GetIamPolicyRequest} params.resource Request body data
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
                      options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                    * cloudiot.projects.locations.registries.list
                    * @desc Lists device registries.
                    * @alias cloudiot.projects.locations.registries.list
                    * @memberOf! cloudiot(v1)
                    *
                    * @param {object} params Parameters for request
                    * @param {integer=} params.pageSize The maximum number of registries to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested, but if there is a non-empty `page_token`, it indicates that more entries are available.
                    * @param {string=} params.pageToken The value returned by the last `ListDeviceRegistriesResponse`; indicates that this is a continuation of a prior `ListDeviceRegistries` call, and that the system should return the next page of data.
                    * @param {string} params.parent The project and cloud region path. For example, `projects/example-project/locations/us-central1`.
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
                      options.rootUrl || 'https://cloudiot.googleapis.com/';
                  const parameters = {
                    options: Object.assign(
                        {
                          url: (rootUrl + '/v1/{parent}/registries')
                                   .replace(/([^:]\/)\/+/g, '$1'),
                          method: 'GET'
                        },
                        options),
                    params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                  };
                  return createAPIRequest(parameters, callback);
                }, /**
                    * cloudiot.projects.locations.registries.patch
                    * @desc Updates a device registry configuration.
                    * @alias cloudiot.projects.locations.registries.patch
                    * @memberOf! cloudiot(v1)
                    *
                    * @param {object} params Parameters for request
                    * @param {string} params.name The resource path name. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
                    * @param {string=} params.updateMask Only updates the `device_registry` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `event_notification_config`, `http_config`, `mqtt_config`, and `state_notification_config`.
                    * @param {cloudiot(v1).DeviceRegistry} params.resource Request body data
                    * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                    * @param {callback} callback The callback that handles the response.
                    * @return {object} Request object
                    */
                patch(params, options, callback) {
                  if (typeof options === 'function') {
                    callback = options;
                    options = {};
                  }
                  options = options || {};
                  const rootUrl =
                      options.rootUrl || 'https://cloudiot.googleapis.com/';
                  const parameters = {
                    options: Object.assign(
                        {
                          url: (rootUrl + '/v1/{name}')
                                   .replace(/([^:]\/)\/+/g, '$1'),
                          method: 'PATCH'
                        },
                        options),
                    params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                  };
                  return createAPIRequest(parameters, callback);
                }, /**
                    * cloudiot.projects.locations.registries.setIamPolicy
                    * @desc Sets the access control policy on the specified
                    * resource. Replaces any existing policy.
                    * @alias cloudiot.projects.locations.registries.setIamPolicy
                    * @memberOf! cloudiot(v1)
                    *
                    * @param {object} params Parameters for request
                    * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
                    * @param {cloudiot(v1).SetIamPolicyRequest} params.resource Request body data
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
                      options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                    * cloudiot.projects.locations.registries.testIamPermissions
                    * @desc Returns permissions that a caller has on the
                    * specified resource. If the resource does not exist, this
                    * will return an empty set of permissions, not a NOT_FOUND
                    * error.
                    * @alias
                    * cloudiot.projects.locations.registries.testIamPermissions
                    * @memberOf! cloudiot(v1)
                    *
                    * @param {object} params Parameters for request
                    * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
                    * @param {cloudiot(v1).TestIamPermissionsRequest} params.resource Request body data
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
                      options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                },
                devices: {
                  /**
                   * cloudiot.projects.locations.registries.devices.create
                   * @desc Creates a device in a device registry.
                   * @alias
                   * cloudiot.projects.locations.registries.devices.create
                   * @memberOf! cloudiot(v1)
                   *
                   * @param {object} params Parameters for request
                   * @param {string} params.parent The name of the device registry where this device should be created. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
                   * @param {cloudiot(v1).Device} params.resource Request body data
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
                        options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl + '/v1/{parent}/devices')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                          },
                          options),
                      params,
                      requiredParams: ['parent'],
                      pathParams: ['parent'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }, /**
                      * cloudiot.projects.locations.registries.devices.delete
                      * @desc Deletes a device.
                      * @alias
                      * cloudiot.projects.locations.registries.devices.delete
                      * @memberOf! cloudiot(v1)
                      *
                      * @param {object} params Parameters for request
                      * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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
                        options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl + '/v1/{name}')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                          },
                          options),
                      params,
                      requiredParams: ['name'],
                      pathParams: ['name'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }, /**
                      * cloudiot.projects.locations.registries.devices.get
                      * @desc Gets details about a device.
                      * @alias
                      * cloudiot.projects.locations.registries.devices.get
                      * @memberOf! cloudiot(v1)
                      *
                      * @param {object} params Parameters for request
                      * @param {string=} params.fieldMask The fields of the `Device` resource to be returned in the response. If the field mask is unset or empty, all fields are returned.
                      * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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
                        options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl + '/v1/{name}')
                                     .replace(/([^:]\/)\/+/g, '$1'),
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
                      * cloudiot.projects.locations.registries.devices.list
                      * @desc List devices in a device registry.
                      * @alias
                      * cloudiot.projects.locations.registries.devices.list
                      * @memberOf! cloudiot(v1)
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
                  list(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl =
                        options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl + '/v1/{parent}/devices')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                          },
                          options),
                      params,
                      requiredParams: ['parent'],
                      pathParams: ['parent'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }, /**
                      * cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig
                      * @desc Modifies the configuration for the device, which
                      * is eventually sent from the Cloud IoT Core servers.
                      * Returns the modified configuration version and its
                      * metadata.
                      * @alias
                      * cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig
                      * @memberOf! cloudiot(v1)
                      *
                      * @param {object} params Parameters for request
                      * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
                      * @param {cloudiot(v1).ModifyCloudToDeviceConfigRequest} params.resource Request body data
                      * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                      * @param {callback} callback The callback that handles the response.
                      * @return {object} Request object
                      */
                  modifyCloudToDeviceConfig(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl =
                        options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl +
                                  '/v1/{name}:modifyCloudToDeviceConfig')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                          },
                          options),
                      params,
                      requiredParams: ['name'],
                      pathParams: ['name'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  }, /**
                      * cloudiot.projects.locations.registries.devices.patch
                      * @desc Updates a device.
                      * @alias
                      * cloudiot.projects.locations.registries.devices.patch
                      * @memberOf! cloudiot(v1)
                      *
                      * @param {object} params Parameters for request
                      * @param {string} params.name The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.
                      * @param {string=} params.updateMask Only updates the `device` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `credentials`, `enabled_state`, and `metadata`
                      * @param {cloudiot(v1).Device} params.resource Request body data
                      * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                      * @param {callback} callback The callback that handles the response.
                      * @return {object} Request object
                      */
                  patch(params, options, callback) {
                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }
                    options = options || {};
                    const rootUrl =
                        options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                      options: Object.assign(
                          {
                            url: (rootUrl + '/v1/{name}')
                                     .replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                          },
                          options),
                      params,
                      requiredParams: ['name'],
                      pathParams: ['name'],
                      context: self
                    };
                    return createAPIRequest(parameters, callback);
                  },
                  configVersions: {
                    /**
                     * cloudiot.projects.locations.registries.devices.configVersions.list
                     * @desc Lists the last few versions of the device
                     * configuration in descending order (i.e.: newest first).
                     * @alias
                     * cloudiot.projects.locations.registries.devices.configVersions.list
                     * @memberOf! cloudiot(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
                     * @param {integer=} params.numVersions The number of versions to list. Versions are listed in decreasing order of the version number. The maximum number of versions retained is 10. If this value is zero, it will return all the versions available.
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
                          options.rootUrl || 'https://cloudiot.googleapis.com/';
                      const parameters = {
                        options: Object.assign(
                            {
                              url: (rootUrl + '/v1/{name}/configVersions')
                                       .replace(/([^:]\/)\/+/g, '$1'),
                              method: 'GET'
                            },
                            options),
                        params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                      };
                      return createAPIRequest(parameters, callback);
                    }

                  },
                  states: {
                    /**
                     * cloudiot.projects.locations.registries.devices.states.list
                     * @desc Lists the last few versions of the device state in
                     * descending order (i.e.: newest first).
                     * @alias
                     * cloudiot.projects.locations.registries.devices.states.list
                     * @memberOf! cloudiot(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
                     * @param {integer=} params.numStates The number of states to list. States are listed in descending order of update time. The maximum number of states retained is 10. If this value is zero, it will return all the states available.
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
                          options.rootUrl || 'https://cloudiot.googleapis.com/';
                      const parameters = {
                        options: Object.assign(
                            {
                              url: (rootUrl + '/v1/{name}/states')
                                       .replace(/([^:]\/)\/+/g, '$1'),
                              method: 'GET'
                            },
                            options),
                        params,
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
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission. Next ID: 4
 * @property {string[]} exemptedMembers
 * @property {string} service Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
 */
/**
 * @typedef AuditLogConfig
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
 * @property {string} logType The log type that this config enables.
 */
/**
 * @typedef Binding
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).Expr} condition The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently. This field is GOOGLE_INTERNAL.
 * @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@gmail.com` or `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that represents all the    users of that domain. For example, `google.com` or `example.com`.
 * @property {string} role Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
 */
/**
 * @typedef Device
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {boolean} blocked If a device is blocked, connections or requests from this device will fail. Can be used to temporarily prevent the device from connecting if, for example, the sensor is generating bad data and needs maintenance.
 * @property {cloudiot(v1).DeviceConfig} config The most recent device configuration, which is eventually sent from Cloud IoT Core to the device. If not present on creation, the configuration will be initialized with an empty payload and version value of `1`. To update this field after creation, use the `DeviceManager.ModifyCloudToDeviceConfig` method.
 * @property {cloudiot(v1).DeviceCredential[]} credentials The credentials used to authenticate this device. To allow credential rotation without interruption, multiple device credentials can be bound to this device. No more than 3 credentials can be bound to a single device at a time. When new credentials are added to a device, they are verified against the registry credentials. For details, see the description of the `DeviceRegistry.credentials` field.
 * @property {string} id The user-defined device identifier. The device ID must be unique within a device registry.
 * @property {string} lastConfigAckTime [Output only] The last time a cloud-to-device config version acknowledgment was received from the device. This field is only for configurations sent through MQTT.
 * @property {string} lastConfigSendTime [Output only] The last time a cloud-to-device config version was sent to the device.
 * @property {cloudiot(v1).Status} lastErrorStatus [Output only] The error message of the most recent error, such as a failure to publish to Cloud Pub/Sub. &#39;last_error_time&#39; is the timestamp of this field. If no errors have occurred, this field has an empty message and the status code 0 == OK. Otherwise, this field is expected to have a status code other than OK.
 * @property {string} lastErrorTime [Output only] The time the most recent error occurred, such as a failure to publish to Cloud Pub/Sub. This field is the timestamp of &#39;last_error_status&#39;.
 * @property {string} lastEventTime [Output only] The last time a telemetry event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.
 * @property {string} lastHeartbeatTime [Output only] The last time a heartbeat was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes. This field is only for devices connecting through MQTT.
 * @property {string} lastStateTime [Output only] The last time a state event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.
 * @property {object} metadata The metadata key-value pairs assigned to the device. This metadata is not interpreted or indexed by Cloud IoT Core. It can be used to add contextual information for the device.  Keys must conform to the regular expression [a-zA-Z0-9-_]+ and be less than 128 bytes in length.  Values are free-form strings. Each value must be less than or equal to 32 KB in size.  The total size of all keys and values must be less than 256 KB, and the maximum number of key-value pairs is 500.
 * @property {string} name The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.
 * @property {string} numId [Output only] A server-defined unique numeric ID for the device. This is a more compact way to identify devices, and it is globally unique.
 * @property {cloudiot(v1).DeviceState} state [Output only] The state most recently received from the device. If no state has been reported, this field is not present.
 */
/**
 * @typedef DeviceConfig
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} binaryData The device configuration data.
 * @property {string} cloudUpdateTime [Output only] The time at which this configuration version was updated in Cloud IoT Core. This timestamp is set by the server.
 * @property {string} deviceAckTime [Output only] The time at which Cloud IoT Core received the acknowledgment from the device, indicating that the device has received this configuration version. If this field is not present, the device has not yet acknowledged that it received this version. Note that when the config was sent to the device, many config versions may have been available in Cloud IoT Core while the device was disconnected, and on connection, only the latest version is sent to the device. Some versions may never be sent to the device, and therefore are never acknowledged. This timestamp is set by Cloud IoT Core.
 * @property {string} version [Output only] The version of this update. The version number is assigned by the server, and is always greater than 0 after device creation. The version must be 0 on the `CreateDevice` request if a `config` is specified; the response of `CreateDevice` will always have a value of 1.
 */
/**
 * @typedef DeviceCredential
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} expirationTime [Optional] The time at which this credential becomes invalid. This credential will be ignored for new client authentication requests after this timestamp; however, it will not be automatically deleted.
 * @property {cloudiot(v1).PublicKeyCredential} publicKey A public key used to verify the signature of JSON Web Tokens (JWTs). When adding a new device credential, either via device creation or via modifications, this public key credential may be required to be signed by one of the registry level certificates. More specifically, if the registry contains at least one certificate, any new device credential must be signed by one of the registry certificates. As a result, when the registry contains certificates, only X.509 certificates are accepted as device credentials. However, if the registry does not contain a certificate, self-signed certificates and public keys will be accepted. New device credentials must be different from every registry-level certificate.
 */
/**
 * @typedef DeviceRegistry
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).RegistryCredential[]} credentials The credentials used to verify the device credentials. No more than 10 credentials can be bound to a single registry at a time. The verification process occurs at the time of device creation or update. If this field is empty, no verification is performed. Otherwise, the credentials of a newly created device or added credentials of an updated device should be signed with one of these registry credentials.  Note, however, that existing devices will never be affected by modifications to this list of credentials: after a device has been successfully created in a registry, it should be able to connect even if its registry credentials are revoked, deleted, or modified.
 * @property {cloudiot(v1).EventNotificationConfig[]} eventNotificationConfigs The configuration for notification of telemetry events received from the device. All telemetry events that were successfully published by the device and acknowledged by Cloud IoT Core are guaranteed to be delivered to Cloud Pub/Sub. Only the first configuration is used. If you try to publish a device telemetry event using MQTT without specifying a Cloud Pub/Sub topic for the device&#39;s registry, the connection closes automatically. If you try to do so using an HTTP connection, an error is returned.
 * @property {cloudiot(v1).HttpConfig} httpConfig The DeviceService (HTTP) configuration for this device registry.
 * @property {string} id The identifier of this device registry. For example, `myRegistry`.
 * @property {cloudiot(v1).MqttConfig} mqttConfig The MQTT configuration for this device registry.
 * @property {string} name The resource path name. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
 * @property {cloudiot(v1).StateNotificationConfig} stateNotificationConfig The configuration for notification of new states received from the device. State updates are guaranteed to be stored in the state history, but notifications to Cloud Pub/Sub are not guaranteed. For example, if permissions are misconfigured or the specified topic doesn&#39;t exist, no notification will be published but the state will still be stored in Cloud IoT Core.
 */
/**
 * @typedef DeviceState
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} binaryData The device state data.
 * @property {string} updateTime [Output only] The time at which this state version was updated in Cloud IoT Core.
 */
/**
 * @typedef Empty
 * @memberOf! cloudiot(v1)
 * @type object
 */
/**
 * @typedef EventNotificationConfig
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} pubsubTopicName A Cloud Pub/Sub topic name. For example, `projects/myProject/topics/deviceEvents`.
 */
/**
 * @typedef Expr
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} description An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
 * @property {string} expression Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
 * @property {string} location An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
 * @property {string} title An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
 */
/**
 * @typedef GetIamPolicyRequest
 * @memberOf! cloudiot(v1)
 * @type object
 */
/**
 * @typedef HttpConfig
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} httpEnabledState If enabled, allows devices to use DeviceService via the HTTP protocol. Otherwise, any requests to DeviceService will fail for this registry.
 */
/**
 * @typedef ListDeviceConfigVersionsResponse
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).DeviceConfig[]} deviceConfigs The device configuration for the last few versions. Versions are listed in decreasing order, starting from the most recent one.
 */
/**
 * @typedef ListDeviceRegistriesResponse
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).DeviceRegistry[]} deviceRegistries The registries that matched the query.
 * @property {string} nextPageToken If not empty, indicates that there may be more registries that match the request; this value should be passed in a new `ListDeviceRegistriesRequest`.
 */
/**
 * @typedef ListDevicesResponse
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).Device[]} devices The devices that match the request.
 * @property {string} nextPageToken If not empty, indicates that there may be more devices that match the request; this value should be passed in a new `ListDevicesRequest`.
 */
/**
 * @typedef ListDeviceStatesResponse
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).DeviceState[]} deviceStates The last few device states. States are listed in descending order of server update time, starting from the most recent one.
 */
/**
 * @typedef ModifyCloudToDeviceConfigRequest
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} binaryData The configuration data for the device.
 * @property {string} versionToUpdate The version number to update. If this value is zero, it will not check the version number of the server and will always update the current version; otherwise, this update will fail if the version number found on the server does not match this version number. This is used to support multiple simultaneous updates without losing data.
 */
/**
 * @typedef MqttConfig
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} mqttEnabledState If enabled, allows connections using the MQTT protocol. Otherwise, MQTT connections to this registry will fail.
 */
/**
 * @typedef Policy
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
 * @property {cloudiot(v1).Binding[]} bindings Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
 * @property {boolean} iamOwned
 * @property {integer} version Deprecated.
 */
/**
 * @typedef PublicKeyCertificate
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} certificate The certificate data.
 * @property {string} format The certificate format.
 * @property {cloudiot(v1).X509CertificateDetails} x509Details [Output only] The certificate details. Used only for X.509 certificates.
 */
/**
 * @typedef PublicKeyCredential
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} format The format of the key.
 * @property {string} key The key data.
 */
/**
 * @typedef RegistryCredential
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).PublicKeyCertificate} publicKeyCertificate A public key certificate used to verify the device credentials.
 */
/**
 * @typedef SetIamPolicyRequest
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {cloudiot(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
 * @property {string} updateMask OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
 */
/**
 * @typedef StateNotificationConfig
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} pubsubTopicName A Cloud Pub/Sub topic name. For example, `projects/myProject/topics/deviceEvents`.
 */
/**
 * @typedef Status
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 */
/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
 */
/**
 * @typedef X509CertificateDetails
 * @memberOf! cloudiot(v1)
 * @type object
 * @property {string} expiryTime The time the certificate becomes invalid.
 * @property {string} issuer The entity that signed the certificate.
 * @property {string} publicKeyType The type of public key in the certificate.
 * @property {string} signatureAlgorithm The algorithm used to sign the certificate.
 * @property {string} startTime The time the certificate becomes valid.
 * @property {string} subject The entity the certificate and public key belong to.
 */

export = Cloudiot;
