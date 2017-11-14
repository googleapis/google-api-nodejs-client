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
 * Android Management API
 *
 * The Android Management API provides remote enterprise management of Android devices and apps.
 *
 * @example
 * const google = require('googleapis');
 * const androidmanagement = google.androidmanagement('v1');
 *
 * @namespace androidmanagement
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Androidmanagement
 */
function Androidmanagement(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.enterprises = {

    /**
     * androidmanagement.enterprises.create
     *
     * @desc Creates an enterprise by completing the enterprise signup flow.
     *
     * @alias androidmanagement.enterprises.create
     * @memberOf! androidmanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.enterpriseToken The enterprise token appended to the callback URL.
     * @param {string=} params.projectId The id of the Google Cloud Platform project which will own the enterprise.
     * @param {string=} params.signupUrlName The name of the SignupUrl used to sign up for the enterprise.
     * @param {androidmanagement(v1).Enterprise} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/enterprises').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidmanagement.enterprises.get
     *
     * @desc Gets an enterprise.
     *
     * @alias androidmanagement.enterprises.get
     * @memberOf! androidmanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the enterprise in the form enterprises/{enterpriseId}
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

      const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * androidmanagement.enterprises.patch
     *
     * @desc Updates an enterprise.
     *
     * @alias androidmanagement.enterprises.patch
     * @memberOf! androidmanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the enterprise in the form enterprises/{enterpriseId}
     * @param {string=} params.updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     * @param {androidmanagement(v1).Enterprise} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },
    applications: {

      /**
       * androidmanagement.enterprises.applications.get
       *
       * @desc Gets info about an application.
       *
       * @alias androidmanagement.enterprises.applications.get
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.languageCode The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
       * @param {string} params.name The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    devices: {

      /**
       * androidmanagement.enterprises.devices.delete
       *
       * @desc Deletes a device, which causes the device to be wiped.
       *
       * @alias androidmanagement.enterprises.devices.delete
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * androidmanagement.enterprises.devices.get
       *
       * @desc Gets a device.
       *
       * @alias androidmanagement.enterprises.devices.get
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * androidmanagement.enterprises.devices.issueCommand
       *
       * @desc Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
       *
       * @alias androidmanagement.enterprises.devices.issueCommand
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}
       * @param {androidmanagement(v1).Command} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      issueCommand: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}:issueCommand').replace(/([^:]\/)\/+/g, '$1'),
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
       * androidmanagement.enterprises.devices.list
       *
       * @desc Lists devices for a given enterprise.
       *
       * @alias androidmanagement.enterprises.devices.list
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize The requested page size. The actual page size may be fixed to a min or max value.
       * @param {string=} params.pageToken A token identifying a page of results the server should return.
       * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/devices').replace(/([^:]\/)\/+/g, '$1'),
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
       * androidmanagement.enterprises.devices.patch
       *
       * @desc Updates a device.
       *
       * @alias androidmanagement.enterprises.devices.patch
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}
       * @param {string=} params.updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
       * @param {androidmanagement(v1).Device} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      operations: {

        /**
         * androidmanagement.enterprises.devices.operations.cancel
         *
         * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
         *
         * @alias androidmanagement.enterprises.devices.operations.cancel
         * @memberOf! androidmanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
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

          const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
         * androidmanagement.enterprises.devices.operations.delete
         *
         * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
         *
         * @alias androidmanagement.enterprises.devices.operations.delete
         * @memberOf! androidmanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be deleted.
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

          const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
         * androidmanagement.enterprises.devices.operations.get
         *
         * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @alias androidmanagement.enterprises.devices.operations.get
         * @memberOf! androidmanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
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

          const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
         * androidmanagement.enterprises.devices.operations.list
         *
         * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/x/operations. To override the binding, API services can add a binding such as "/v1/{name=users/x}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
         *
         * @alias androidmanagement.enterprises.devices.operations.list
         * @memberOf! androidmanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The standard list filter.
         * @param {string} params.name The name of the operation's parent resource.
         * @param {integer=} params.pageSize The standard list page size.
         * @param {string=} params.pageToken The standard list page token.
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

          const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
    },
    enrollmentTokens: {

      /**
       * androidmanagement.enterprises.enrollmentTokens.create
       *
       * @desc Creates an enrollment token for a given enterprise.
       *
       * @alias androidmanagement.enterprises.enrollmentTokens.create
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}
       * @param {androidmanagement(v1).EnrollmentToken} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/enrollmentTokens').replace(/([^:]\/)\/+/g, '$1'),
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
       * androidmanagement.enterprises.enrollmentTokens.delete
       *
       * @desc Deletes an enrollment token, which prevents future use of the token.
       *
       * @alias androidmanagement.enterprises.enrollmentTokens.delete
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    policies: {

      /**
       * androidmanagement.enterprises.policies.delete
       *
       * @desc Deletes a policy. This operation is only permitted if no devices are currently referencing the policy.
       *
       * @alias androidmanagement.enterprises.policies.delete
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * androidmanagement.enterprises.policies.get
       *
       * @desc Gets a policy.
       *
       * @alias androidmanagement.enterprises.policies.get
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * androidmanagement.enterprises.policies.list
       *
       * @desc Lists policies for a given enterprise.
       *
       * @alias androidmanagement.enterprises.policies.list
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize The requested page size. The actual page size may be fixed to a min or max value.
       * @param {string=} params.pageToken A token identifying a page of results the server should return.
       * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/policies').replace(/([^:]\/)\/+/g, '$1'),
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
       * androidmanagement.enterprises.policies.patch
       *
       * @desc Updates or creates a policy.
       *
       * @alias androidmanagement.enterprises.policies.patch
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}
       * @param {string=} params.updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
       * @param {androidmanagement(v1).Policy} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    webTokens: {

      /**
       * androidmanagement.enterprises.webTokens.create
       *
       * @desc Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
       *
       * @alias androidmanagement.enterprises.webTokens.create
       * @memberOf! androidmanagement(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}
       * @param {androidmanagement(v1).WebToken} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/webTokens').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.signupUrls = {

    /**
     * androidmanagement.signupUrls.create
     *
     * @desc Creates an enterprise signup URL.
     *
     * @alias androidmanagement.signupUrls.create
     * @memberOf! androidmanagement(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.callbackUrl The callback URL to which the admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
     * @param {string=} params.projectId The id of the Google Cloud Platform project which will own the enterprise.
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

      const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/signupUrls').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef ApiLevelCondition
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {integer} minApiLevel The minimum desired Android Framework API level. If the device does not meet the minimum requirement, this condition is satisfied. Must be greater than zero.
 */

/**
 * @typedef Application
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {androidmanagement(v1).ManagedProperty[]} managedProperties The set of managed properties available to be pre-configured for the application.
 * @property {string} name The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}
 * @property {androidmanagement(v1).ApplicationPermission[]} permissions The permissions required by the app.
 * @property {string} title The title of the application. Localized.
 */

/**
 * @typedef ApplicationPermission
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} description A longer description of the permission, giving more details of what it affects. Localized.
 * @property {string} name The name of the permission. Localized.
 * @property {string} permissionId An opaque string uniquely identifying the permission. Not localized.
 */

/**
 * @typedef ApplicationPolicy
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} defaultPermissionPolicy The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps.
 * @property {string} installType The type of installation to perform.
 * @property {boolean} lockTaskAllowed Whether the application is allowed to lock itself in full-screen mode.
 * @property {object} managedConfiguration Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: &lt;table&gt; &lt;tr&gt;&lt;td&gt;&lt;i&gt;type&lt;/i&gt;&lt;/td&gt;&lt;td&gt;&lt;i&gt;JSON value&lt;/i&gt;&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;BOOL&lt;/td&gt;&lt;td&gt;true or false&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;string&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;INTEGER&lt;/td&gt;&lt;td&gt;number&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;CHOICE&lt;/td&gt;&lt;td&gt;string&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;MULTISELECT&lt;/td&gt;&lt;td&gt;array of strings&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;HIDDEN&lt;/td&gt;&lt;td&gt;string&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;BUNDLE_ARRAY&lt;/td&gt;&lt;td&gt;array of objects&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;
 * @property {string} packageName The package name of the app, e.g. com.google.android.youtube for the YouTube app.
 * @property {androidmanagement(v1).PermissionGrant[]} permissionGrants Explicit permission grants or denials for the app. These values override the default_permission_policy.
 */

/**
 * @typedef Command
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} createTime The timestamp at which the command was created. The timestamp is automatically generated by the server.
 * @property {string} duration The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration.
 * @property {string} newPassword For commands of type RESET_PASSWORD, optionally specifies the new password.
 * @property {string[]} resetPasswordFlags For commands of type RESET_PASSWORD, optionally specifies flags.
 * @property {string} type The type of the command.
 */

/**
 * @typedef ComplianceRule
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {androidmanagement(v1).ApiLevelCondition} apiLevelCondition A condition which is satisfied if the Android Framework API level on the device does not meet a minimum requirement.
 * @property {boolean} disableApps If set to true, the rule includes a mitigating action to disable applications so that the device is effectively disabled, but application data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed.
 * @property {androidmanagement(v1).NonComplianceDetailCondition} nonComplianceDetailCondition A condition which is satisfied if there exists any matching NonComplianceDetail for the device.
 */

/**
 * @typedef Device
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {integer} apiLevel The API level of the Android platform version running on the device.
 * @property {string} appliedPolicyName The name of the policy that is currently applied by the device.
 * @property {string} appliedPolicyVersion The version of the policy that is currently applied by the device.
 * @property {string} appliedState The state that is currently applied by the device.
 * @property {androidmanagement(v1).UserFacingMessage} disabledReason If the device state is DISABLED, an optional message that is displayed on the device indicating the reason the device is disabled. This field may be modified by an update request.
 * @property {androidmanagement(v1).Display[]} displays Displays on the device. This information is only available when displayInfoEnabled is true in the device&#39;s policy.
 * @property {string} enrollmentTime The time of device enrollment.
 * @property {string} enrollmentTokenData If this device was enrolled with an enrollment token with additional data provided, this field contains that data.
 * @property {string} enrollmentTokenName If this device was enrolled with an enrollment token, this field contains the name of the token.
 * @property {androidmanagement(v1).HardwareInfo} hardwareInfo Detailed information about the device hardware.
 * @property {androidmanagement(v1).HardwareStatus[]} hardwareStatusSamples Hardware status samples in chronological order. This information is only available when hardwareStatusEnabled is true in the device&#39;s policy.
 * @property {string} lastPolicyComplianceReportTime The last time the device sent a policy compliance report.
 * @property {string} lastPolicySyncTime The last time the device fetched its policy.
 * @property {string} lastStatusReportTime The last time the device sent a status report.
 * @property {androidmanagement(v1).MemoryEvent[]} memoryEvents Events related to memory and storage measurements in chronological order. This information is only available when memoryInfoEnabled is true in the device&#39;s policy.
 * @property {androidmanagement(v1).MemoryInfo} memoryInfo Memory information. This information is only available when memoryInfoEnabled is true in the device&#39;s policy.
 * @property {string} name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}
 * @property {androidmanagement(v1).NetworkInfo} networkInfo Device network information. This information is only available when networkInfoEnabled is true in the device&#39;s policy.
 * @property {androidmanagement(v1).NonComplianceDetail[]} nonComplianceDetails Details about policy settings for which the device is not in compliance.
 * @property {boolean} policyCompliant Whether the device is compliant with its policy.
 * @property {string} policyName The name of the policy that is intended to be applied to the device. If empty, the policy_name for the user that owns this device is applied. This field may be modified by an update request. The name of the policy is in the form enterprises/{enterpriseId}/policies/{policyId}. It is also permissible to only specify the policyId when updating this field as long as the policyId contains no slashes since the rest of the policy name can be inferred from context.
 * @property {androidmanagement(v1).PowerManagementEvent[]} powerManagementEvents Power management events on the device in chronological order. This information is only available when powerManagementEventsEnabled is true in the device&#39;s policy.
 * @property {string[]} previousDeviceNames The previous device names used for the same physical device when it has been enrolled multiple times. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order.
 * @property {androidmanagement(v1).SoftwareInfo} softwareInfo Detailed information about the device software. This information is only available when softwareInfoEnabled is true in the device&#39;s policy.
 * @property {string} state The state that is intended to be applied to the device. This field may be modified by an update request. Note that UpdateDevice only handles toggling between ACTIVE and DISABLED states. Use the delete device method to cause the device to enter the DELETED state.
 * @property {string} userName The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}.
 */

/**
 * @typedef Display
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {integer} density Display density expressed as dots-per-inch.
 * @property {integer} displayId Unique display id.
 * @property {integer} height Display height in pixels.
 * @property {string} name Name of the display.
 * @property {integer} refreshRate Refresh rate of the display in frames per second.
 * @property {string} state State of the display.
 * @property {integer} width Display width in pixels.
 */

/**
 * @typedef Empty
 * @memberOf! androidmanagement(v1)
 * @type object
 */

/**
 * @typedef EnrollmentToken
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} additionalData Optional, arbitrary data associated with the enrollment token. This could contain, for example, the id of an org unit to which the device is assigned after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail.
 * @property {string} duration The duration of the token. If not specified, the duration will be 1 hour. The allowed range is 1 minute to 30 days.
 * @property {string} expirationTimestamp The expiration time of the token. This is a read-only field generated by the server.
 * @property {string} name The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}
 * @property {string} policyName The name of the policy that will be initially applied to the enrolled device in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the user that owns the device is applied. If user_name also isn&#39;t specified, the policy defaults to enterprises/{enterpriseId}/policies/default. It is permissible to only specify the policyId when updating this field as long as the policyId contains no slashes since the rest of the policy name can be inferred from context.
 * @property {string} qrCode A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON.
 * @property {string} value The token value which is passed to the device and authorizes the device to enroll. This is a read-only field generated by the server.
 */

/**
 * @typedef Enterprise
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {boolean} appAutoApprovalEnabled Whether app auto-approval is enabled. When enabled, apps installed via policy for this enterprise have all permissions automatically approved. When enabled, it is the caller&#39;s responsibility to display the permissions required by an app to the enterprise admin before setting the app to be installed in a policy.
 * @property {string[]} enabledNotificationTypes The notification types to enable via Google Cloud Pub/Sub.
 * @property {string} enterpriseDisplayName The name of the enterprise as it will appear to users.
 * @property {androidmanagement(v1).ExternalData} logo An image displayed as a logo during device provisioning. Supported types are: image/bmp, image/gif, image/x-ico, image/jpeg, image/png, image/webp, image/vnd.wap.wbmp, image/x-adobe-dng.
 * @property {string} name The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}
 * @property {integer} primaryColor A color in RGB format indicating the predominant color to display in the device management app UI. The color components are stored as follows: (red &lt;&lt; 16) | (green &lt;&lt; 8) | blue, where each component may take a value between 0 and 255 inclusive.
 * @property {string} pubsubTopic When Cloud Pub/Sub notifications are enabled, this field is required to indicate the topic to which the notifications will be published. The format of this field is projects/{project}/topics/{topic}. You must have granted the publish permission on this topic to android-cloud-policy@system.gserviceaccount.com
 */

/**
 * @typedef ExternalData
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} sha256Hash The base-64 encoded SHA-256 hash of the content hosted at url. If the content does not match this hash, Android Device Policy will not use the data.
 * @property {string} url The absolute URL to the data, which must use either the http or https scheme. Android Device Policy does not provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL.
 */

/**
 * @typedef HardwareInfo
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {number[]} batteryShutdownTemperatures Battery shutdown temperature thresholds in Celsius for each battery on the device.
 * @property {number[]} batteryThrottlingTemperatures Battery throttling temperature thresholds in Celsius for each battery on the device.
 * @property {string} brand Brand of the device, e.g. Google.
 * @property {number[]} cpuShutdownTemperatures CPU shutdown temperature thresholds in Celsius for each CPU on the device.
 * @property {number[]} cpuThrottlingTemperatures CPU throttling temperature thresholds in Celsius for each CPU on the device.
 * @property {string} deviceBasebandVersion Baseband version, e.g. MDM9625_104662.22.05.34p.
 * @property {number[]} gpuShutdownTemperatures GPU shutdown temperature thresholds in Celsius for each GPU on the device.
 * @property {number[]} gpuThrottlingTemperatures GPU throttling temperature thresholds in Celsius for each GPU on the device.
 * @property {string} hardware Name of the hardware, e.g. Angler.
 * @property {string} manufacturer Manufacturer, e.g. Motorola.
 * @property {string} model The model of the device, e.g. Asus Nexus 7.
 * @property {string} serialNumber The device serial number.
 * @property {number[]} skinShutdownTemperatures Device skin shutdown temperature thresholds in Celsius.
 * @property {number[]} skinThrottlingTemperatures Device skin throttling temperature thresholds in Celsius.
 */

/**
 * @typedef HardwareStatus
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {number[]} batteryTemperatures Current battery temperatures in Celsius for each battery on the device.
 * @property {number[]} cpuTemperatures Current CPU temperatures in Celsius for each CPU on the device.
 * @property {number[]} cpuUsages CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system.
 * @property {string} createTime The time the measurements were taken.
 * @property {number[]} fanSpeeds Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system.
 * @property {number[]} gpuTemperatures Current GPU temperatures in Celsius for each GPU on the device.
 * @property {number[]} skinTemperatures Current device skin temperatures in Celsius.
 */

/**
 * @typedef ListDevicesResponse
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {androidmanagement(v1).Device[]} devices The list of devices.
 * @property {string} nextPageToken If there are more results, a token to retrieve next page of results.
 */

/**
 * @typedef ListOperationsResponse
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {androidmanagement(v1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */

/**
 * @typedef ListPoliciesResponse
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} nextPageToken If there are more results, a token to retrieve next page of results.
 * @property {androidmanagement(v1).Policy[]} policies The list of policies.
 */

/**
 * @typedef ManagedProperty
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {any} defaultValue The default value of the properties. BUNDLE_ARRAY properties never have a default value.
 * @property {string} description A longer description of the property, giving more detail of what it affects. Localized.
 * @property {androidmanagement(v1).ManagedPropertyEntry[]} entries For CHOICE or MULTISELECT properties, the list of possible entries.
 * @property {string} key The unique key that the application uses to identify the property, e.g. &quot;com.google.android.gm.fieldname&quot;.
 * @property {androidmanagement(v1).ManagedProperty[]} nestedProperties For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep.
 * @property {string} title The name of the property. Localized.
 * @property {string} type The type of the property.
 */

/**
 * @typedef ManagedPropertyEntry
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} name The human-readable name of the value. Localized.
 * @property {string} value The machine-readable value of the entry, which should be used in the configuration. Not localized.
 */

/**
 * @typedef MemoryEvent
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} byteCount The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium.
 * @property {string} createTime The creation time of the event.
 * @property {string} eventType Event type.
 */

/**
 * @typedef MemoryInfo
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} totalInternalStorage Total internal storage on device in bytes.
 * @property {string} totalRam Total RAM on device in bytes.
 */

/**
 * @typedef NetworkInfo
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} imei IMEI number of the GSM device, e.g. A1000031212.
 * @property {string} meid MEID number of the CDMA device, e.g. A00000292788E1.
 * @property {string} wifiMacAddress WiFi MAC address of the device, e.g. 7c:11:11:11:11:11.
 */

/**
 * @typedef NonComplianceDetail
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {any} currentValue If the policy setting could not be applied, the current value of the setting on the device.
 * @property {string} fieldPath For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a  subfield name. 2) For array-typed fields, the field name is followed by the array index  enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url
 * @property {string} installationFailureReason If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app cannot be installed or updated.
 * @property {string} nonComplianceReason The reason the device is not in compliance with the setting.
 * @property {string} packageName The package name indicating which application is out of compliance, if applicable.
 * @property {string} settingName The name of the policy setting. This is the JSON field name of a top-level Policy  field.
 */

/**
 * @typedef NonComplianceDetailCondition
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} nonComplianceReason The reason the device is not in compliance with the setting. If not set, then this condition matches any reason.
 * @property {string} packageName The package name indicating which application is out of compliance. If not set, then this condition matches any package name.
 * @property {string} settingName The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name.
 */

/**
 * @typedef Operation
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {boolean} done If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
 * @property {androidmanagement(v1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
 * @property {object} response The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
 */

/**
 * @typedef PasswordRequirements
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {integer} maximumFailedPasswordsForWipe A device will be wiped after too many incorrect device-unlock passwords have been entered. A value of 0 means there is no restriction.
 * @property {string} passwordExpirationTimeout Password expiration timeout.
 * @property {integer} passwordHistoryLength The length of the password history. After setting this, the user will not be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.
 * @property {integer} passwordMinimumLength The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.
 * @property {integer} passwordMinimumLetters Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.
 * @property {integer} passwordMinimumLowerCase Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.
 * @property {integer} passwordMinimumNonLetter Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.
 * @property {integer} passwordMinimumNumeric Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.
 * @property {integer} passwordMinimumSymbols Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.
 * @property {integer} passwordMinimumUpperCase Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.
 * @property {string} passwordQuality The required password quality.
 */

/**
 * @typedef PermissionGrant
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} permission The android permission, e.g. android.permission.READ_CALENDAR.
 * @property {string} policy The policy for granting the permission.
 */

/**
 * @typedef PersistentPreferredActivity
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string[]} actions The intent actions to match in the filter. If any actions are included in the filter, then an intent&#39;s action must be one of those values for it to match. If no actions are included, the intent action is ignored.
 * @property {string[]} categories The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent.
 * @property {string} receiverActivity The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent.
 */

/**
 * @typedef Policy
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {boolean} addUserDisabled Whether adding new users and profiles is disabled.
 * @property {boolean} adjustVolumeDisabled Whether adjusting the master volume is disabled.
 * @property {androidmanagement(v1).ApplicationPolicy[]} applications Policy applied to apps.
 * @property {boolean} autoTimeRequired Whether auto time is required, which prevents the user from manually setting the date and time.
 * @property {boolean} blockApplicationsEnabled Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled.
 * @property {boolean} cameraDisabled Whether all cameras on the device are disabled.
 * @property {androidmanagement(v1).ComplianceRule[]} complianceRules Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules.
 * @property {boolean} debuggingFeaturesAllowed Whether the user is allowed to enable debugging features.
 * @property {string} defaultPermissionPolicy The default permission policy for requests for runtime permissions.
 * @property {boolean} factoryResetDisabled Whether factory resetting from settings is disabled.
 * @property {string[]} frpAdminEmails Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device will not provide factory reset protection.
 * @property {boolean} funDisabled Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled.
 * @property {boolean} installUnknownSourcesAllowed Whether the user is allowed to enable the &quot;Unknown Sources&quot; setting, which allows installation of apps from unknown sources.
 * @property {boolean} keyguardDisabled Whether the keyguard is disabled.
 * @property {string} maximumTimeToLock Maximum time in milliseconds for user activity until the device will lock. A value of 0 means there is no restriction.
 * @property {boolean} modifyAccountsDisabled Whether adding or removing accounts is disabled.
 * @property {string} name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}
 * @property {boolean} networkEscapeHatchEnabled Whether the network escape hatch is enabled. If a network connection can&#39;t be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.
 * @property {object} openNetworkConfiguration Network configuration for the device. See configure networks for more information.
 * @property {androidmanagement(v1).PasswordRequirements} passwordRequirements Password requirements.
 * @property {androidmanagement(v1).PersistentPreferredActivity[]} persistentPreferredActivities Default intent handler activities.
 * @property {boolean} removeUserDisabled Whether removing other users is disabled.
 * @property {boolean} safeBootDisabled Whether rebooting the device into safe boot is disabled.
 * @property {boolean} screenCaptureDisabled Whether screen capture is disabled.
 * @property {boolean} statusBarDisabled Whether the status bar is disabled. This disables notifications, quick settings and other screen overlays that allow escape from full-screen mode.
 * @property {androidmanagement(v1).StatusReportingSettings} statusReportingSettings Status reporting settings
 * @property {string[]} stayOnPluggedModes The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn&#39;t lock itself while it stays on.
 * @property {androidmanagement(v1).SystemUpdate} systemUpdate The system update policy, which controls how OS updates are applied. If the update type is WINDOWED, the update window will automatically apply to Play app updates as well.
 * @property {boolean} unmuteMicrophoneDisabled Whether the microphone is muted and adjusting microphone volume is disabled.
 * @property {string} version The version of the policy. This is a read-only field. The version is incremented each time the policy is updated.
 * @property {boolean} wifiConfigDisabled Whether configuring WiFi access points is disabled.
 * @property {boolean} wifiConfigsLockdownEnabled Whether WiFi networks defined in Open Network Configuration are locked so they cannot be edited by the user.
 */

/**
 * @typedef PowerManagementEvent
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {number} batteryLevel For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.
 * @property {string} createTime The creation time of the event.
 * @property {string} eventType Event type.
 */

/**
 * @typedef SignupUrl
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} name The name of the resource. This must be included in the create enterprise request at the end of the signup flow.
 * @property {string} url A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe.
 */

/**
 * @typedef SoftwareInfo
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} androidBuildNumber Android build Id string meant for displaying to the user, e.g. shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.
 * @property {string} androidBuildTime Build time.
 * @property {string} androidVersion The user visible Android version string, e.g. 6.0.1.
 * @property {string} bootloaderVersion The system bootloader version number, e.g. 0.6.7.
 * @property {string} deviceKernelVersion Kernel version, e.g. 2.6.32.9-g103d848.
 * @property {string} securityPatchLevel Security patch level, e.g. 2016-05-01.
 */

/**
 * @typedef Status
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details. There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */

/**
 * @typedef StatusReportingSettings
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {boolean} displayInfoEnabled Whether displays reporting is enabled.
 * @property {boolean} hardwareStatusEnabled Whether hardware status reporting is enabled.
 * @property {boolean} memoryInfoEnabled Whether memory info reporting is enabled.
 * @property {boolean} networkInfoEnabled Whether network info reporting is enabled.
 * @property {boolean} powerManagementEventsEnabled Whether power management event reporting is enabled.
 * @property {boolean} softwareInfoEnabled Whether software info reporting is enabled.
 */

/**
 * @typedef SystemUpdate
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {integer} endMinutes If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.
 * @property {integer} startMinutes If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in device local time. This value must be between 0 and 1439, inclusive.
 * @property {string} type The type of system update to configure.
 */

/**
 * @typedef UserFacingMessage
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} defaultMessage The default message that gets displayed if no localized message is specified, or the user&#39;s locale does not match with any of the localized messages. A default message must be provided if any localized messages are provided.
 * @property {object} localizedMessages A map which contains &lt;locale, message&gt; pairs. The locale is a BCP 47 language code, e.g. en-US, es-ES, fr.
 */

/**
 * @typedef WebToken
 * @memberOf! androidmanagement(v1)
 * @type object
 * @property {string} name The name of the web token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/webTokens/{webTokenId}.
 * @property {string} parentFrameUrl The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme.
 * @property {string[]} permissions Permissions the admin may exercise in the embedded UI. The admin must have all of these permissions in order to view the UI.
 * @property {string} value The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server.
 */
export = Androidmanagement;
