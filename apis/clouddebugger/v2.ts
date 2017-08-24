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

import createAPIRequest from '../../lib/apirequest';

/**
 * Stackdriver Debugger API
 *
 * Examines the call stack and variables of a running application without stopping or slowing it down.

 *
 * @example
 * const google = require('googleapis');
 * const clouddebugger = google.clouddebugger('v2');
 *
 * @namespace clouddebugger
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Clouddebugger
 */
function Clouddebugger(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.controller = {
    debuggees: {

      /**
       * clouddebugger.controller.debuggees.register
       *
       * @desc Registers the debuggee with the controller service.  All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method.  This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Stackdriver Debugger API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/clouddebugger
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk and run
       * //    `gcloud beta auth application-default login`.
       * //    For more information, see
       * //    https://developers.google.com/identity/protocols/application-default-credentials
       * // 3. Install the Node.js client library by running
       * //    `npm install googleapis --save`
       *
       * var google = require('googleapis');
       * var cloudDebugger = google.clouddebugger('v2');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     resource: {
       *       // TODO: Add desired properties to the request body.
       *     },
       *
       *     auth: authClient
       *   };
       *
       *   cloudDebugger.controller.debuggees.register(request, function(err, response) {
       *     if (err) {
       *       console.log(err);
       *       return;
       *     }
       *
       *     // TODO: Change code below to process the `response` object:
       *     console.log(JSON.stringify(response, null, 2));
       *   });
       * });
       *
       * function authorize(callback) {
       *   google.auth.getApplicationDefault(function(err, authClient)) {
       *     if (err) {
       *       console.log('authentication failed: ', err);
       *       return;
       *     }
       *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *       authClient = authClient.createScoped(scopes);
       *     }
       *     callback(authClient);
       *   });
       * }
       *
       * @alias clouddebugger.controller.debuggees.register
       * @memberOf! clouddebugger(v2)
       *
       * @param {object} params Parameters for request
       * @param {clouddebugger(v2).RegisterDebuggeeRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      register: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2/controller/debuggees/register').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      breakpoints: {

        /**
         * clouddebugger.controller.debuggees.breakpoints.list
         *
         * @desc Returns the list of all active breakpoints for the debuggee.  The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics.  This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Stackdriver Debugger API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouddebugger
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudDebugger = google.clouddebugger('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the debuggee.
         *     debuggeeId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudDebugger.controller.debuggees.breakpoints.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouddebugger.controller.debuggees.breakpoints.list
         * @memberOf! clouddebugger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.debuggeeId Identifies the debuggee.
         * @param {boolean=} params.successOnTimeout If set to `true` (recommended), returns `google.rpc.Code.OK` status and sets the `wait_expired` response field to `true` when the server-selected timeout has expired.  If set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status when the server-selected timeout has expired.
         * @param {string=} params.waitToken A token that, if specified, blocks the method call until the list of active breakpoints has changed, or a server-selected timeout has expired. The value should be set from the `next_wait_token` field in the last response. The initial value should be set to `"init"`.
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

          const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2/controller/debuggees/{debuggeeId}/breakpoints').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['debuggeeId'],
            pathParams: ['debuggeeId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * clouddebugger.controller.debuggees.breakpoints.update
         *
         * @desc Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service.  Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Stackdriver Debugger API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouddebugger
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudDebugger = google.clouddebugger('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the debuggee being debugged.
         *     debuggeeId: '',  // TODO: Update placeholder value.
         *
         *     // Breakpoint identifier, unique in the scope of the debuggee.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudDebugger.controller.debuggees.breakpoints.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouddebugger.controller.debuggees.breakpoints.update
         * @memberOf! clouddebugger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.debuggeeId Identifies the debuggee being debugged.
         * @param {string} params.id Breakpoint identifier, unique in the scope of the debuggee.
         * @param {clouddebugger(v2).UpdateActiveBreakpointRequest} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2/controller/debuggees/{debuggeeId}/breakpoints/{id}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['debuggeeId', 'id'],
            pathParams: ['debuggeeId', 'id'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };

  self.debugger = {
    debuggees: {

      /**
       * clouddebugger.debugger.debuggees.list
       *
       * @desc Lists all the debuggees that the user has access to.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Stackdriver Debugger API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/clouddebugger
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk and run
       * //    `gcloud beta auth application-default login`.
       * //    For more information, see
       * //    https://developers.google.com/identity/protocols/application-default-credentials
       * // 3. Install the Node.js client library by running
       * //    `npm install googleapis --save`
       *
       * var google = require('googleapis');
       * var cloudDebugger = google.clouddebugger('v2');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     auth: authClient
       *   };
       *
       *   cloudDebugger.debugger.debuggees.list(request, function(err, response) {
       *     if (err) {
       *       console.log(err);
       *       return;
       *     }
       *
       *     // TODO: Change code below to process the `response` object:
       *     console.log(JSON.stringify(response, null, 2));
       *   });
       * });
       *
       * function authorize(callback) {
       *   google.auth.getApplicationDefault(function(err, authClient)) {
       *     if (err) {
       *       console.log('authentication failed: ', err);
       *       return;
       *     }
       *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *       authClient = authClient.createScoped(scopes);
       *     }
       *     callback(authClient);
       *   });
       * }
       *
       * @alias clouddebugger.debugger.debuggees.list
       * @memberOf! clouddebugger(v2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
       * @param {boolean=} params.includeInactive When set to `true`, the result includes all debuggees. Otherwise, the result includes only debuggees that are active.
       * @param {string=} params.project Project number of a Google Cloud project whose debuggees to list.
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

        const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2/debugger/debuggees').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      breakpoints: {

        /**
         * clouddebugger.debugger.debuggees.breakpoints.delete
         *
         * @desc Deletes the breakpoint from the debuggee.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Stackdriver Debugger API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouddebugger
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudDebugger = google.clouddebugger('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // ID of the debuggee whose breakpoint to delete.
         *     debuggeeId: '',  // TODO: Update placeholder value.
         *
         *     // ID of the breakpoint to delete.
         *     breakpointId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudDebugger.debugger.debuggees.breakpoints.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouddebugger.debugger.debuggees.breakpoints.delete
         * @memberOf! clouddebugger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.breakpointId ID of the breakpoint to delete.
         * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
         * @param {string} params.debuggeeId ID of the debuggee whose breakpoint to delete.
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

          const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['debuggeeId', 'breakpointId'],
            pathParams: ['breakpointId', 'debuggeeId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * clouddebugger.debugger.debuggees.breakpoints.get
         *
         * @desc Gets breakpoint information.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Stackdriver Debugger API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouddebugger
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudDebugger = google.clouddebugger('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // ID of the debuggee whose breakpoint to get.
         *     debuggeeId: '',  // TODO: Update placeholder value.
         *
         *     // ID of the breakpoint to get.
         *     breakpointId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudDebugger.debugger.debuggees.breakpoints.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouddebugger.debugger.debuggees.breakpoints.get
         * @memberOf! clouddebugger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.breakpointId ID of the breakpoint to get.
         * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
         * @param {string} params.debuggeeId ID of the debuggee whose breakpoint to get.
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

          const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['debuggeeId', 'breakpointId'],
            pathParams: ['breakpointId', 'debuggeeId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * clouddebugger.debugger.debuggees.breakpoints.list
         *
         * @desc Lists all breakpoints for the debuggee.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Stackdriver Debugger API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouddebugger
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudDebugger = google.clouddebugger('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // ID of the debuggee whose breakpoints to list.
         *     debuggeeId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudDebugger.debugger.debuggees.breakpoints.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouddebugger.debugger.debuggees.breakpoints.list
         * @memberOf! clouddebugger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.action.value Only breakpoints with the specified action will pass the filter.
         * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
         * @param {string} params.debuggeeId ID of the debuggee whose breakpoints to list.
         * @param {boolean=} params.includeAllUsers When set to `true`, the response includes the list of breakpoints set by any user. Otherwise, it includes only breakpoints set by the caller.
         * @param {boolean=} params.includeInactive When set to `true`, the response includes active and inactive breakpoints. Otherwise, it includes only active breakpoints.
         * @param {boolean=} params.stripResults This field is deprecated. The following fields are always stripped out of the result: `stack_frames`, `evaluated_expressions` and `variable_table`.
         * @param {string=} params.waitToken A wait token that, if specified, blocks the call until the breakpoints list has changed, or a server selected timeout has expired.  The value should be set from the last response. The error code `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which should be called again with the same `wait_token`.
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

          const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['debuggeeId'],
            pathParams: ['debuggeeId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * clouddebugger.debugger.debuggees.breakpoints.set
         *
         * @desc Sets the breakpoint to the debuggee.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Stackdriver Debugger API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouddebugger
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudDebugger = google.clouddebugger('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // ID of the debuggee where the breakpoint is to be set.
         *     debuggeeId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudDebugger.debugger.debuggees.breakpoints.set(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouddebugger.debugger.debuggees.breakpoints.set
         * @memberOf! clouddebugger(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
         * @param {string} params.debuggeeId ID of the debuggee where the breakpoint is to be set.
         * @param {clouddebugger(v2).Breakpoint} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        set: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints/set').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['debuggeeId'],
            pathParams: ['debuggeeId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * @typedef AliasContext
 * @memberOf! clouddebugger(v2)
 * @type object
 * @property {string} kind The alias kind.
 * @property {string} name The alias name.
 */

/**
 * @typedef Breakpoint
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {string} action Action that the agent should perform when the code at the
breakpoint location is hit.
* @property {string} condition Condition that triggers the breakpoint.
The condition is a compound boolean expression composed using expressions
in a programming language at the source location.
* @property {string} createTime Time this breakpoint was created by the server in seconds resolution.
* @property {clouddebugger(v2).Variable[]} evaluatedExpressions Values of evaluated expressions at breakpoint time.
The evaluated expressions appear in exactly the same order they
are listed in the `expressions` field.
The `name` field holds the original expression text, the `value` or
`members` field holds the result of the evaluated expression.
If the expression cannot be evaluated, the `status` inside the `Variable`
will indicate an error and contain the error text.
* @property {string[]} expressions List of read-only expressions to evaluate at the breakpoint location.
The expressions are composed using expressions in the programming language
at the source location. If the breakpoint action is `LOG`, the evaluated
expressions are included in log statements.
* @property {string} finalTime Time this breakpoint was finalized as seen by the server in seconds
resolution.
* @property {string} id Breakpoint identifier, unique in the scope of the debuggee.
* @property {boolean} isFinalState When true, indicates that this is a final result and the
breakpoint state will not change from here on.
* @property {object} labels A set of custom breakpoint properties, populated by the agent, to be
displayed to the user.
* @property {clouddebugger(v2).SourceLocation} location Breakpoint source location.
* @property {string} logLevel Indicates the severity of the log. Only relevant when action is `LOG`.
* @property {string} logMessageFormat Only relevant when action is `LOG`. Defines the message to log when
the breakpoint hits. The message may include parameter placeholders `$0`,
`$1`, etc. These placeholders are replaced with the evaluated value
of the appropriate expression. Expressions not referenced in
`log_message_format` are not logged.

Example: `Message received, id = $0, count = $1` with
`expressions` = `[ message.id, message.count ]`.
* @property {clouddebugger(v2).StackFrame[]} stackFrames The stack at breakpoint time.
* @property {clouddebugger(v2).StatusMessage} status Breakpoint status.

The status includes an error flag and a human readable message.
This field is usually unset. The message can be either
informational or an error message. Regardless, clients should always
display the text message back to the user.

Error status indicates complete failure of the breakpoint.

Example (non-final state): `Still loading symbols...`

Examples (final state):

*   `Invalid line number` referring to location
*   `Field f not found in class C` referring to condition
* @property {string} userEmail E-mail address of the user that created this breakpoint
* @property {clouddebugger(v2).Variable[]} variableTable The `variable_table` exists to aid with computation, memory and network
traffic optimization.  It enables storing a variable once and reference
it from multiple variables, including variables stored in the
`variable_table` itself.
For example, the same `this` object, which may appear at many levels of
the stack, can have all of its data stored once in this table.  The
stack frame variables then would hold only a reference to it.

The variable `var_table_index` field is an index into this repeated field.
The stored objects are nameless and get their name from the referencing
variable. The effective variable is a merge of the referencing variable
and the referenced variable.
*/

/**
 * @typedef CloudRepoSourceContext
 * @memberOf! clouddebugger(v2)
 * @type object
 * @property {clouddebugger(v2).AliasContext} aliasContext An alias, which may be a branch or tag.
 * @property {string} aliasName The name of an alias (branch, tag, etc.).
 * @property {clouddebugger(v2).RepoId} repoId The ID of the repo.
 * @property {string} revisionId A revision ID.
 */

/**
 * @typedef CloudWorkspaceId
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {string} name The unique name of the workspace within the repo.  This is the name
chosen by the client in the Source API&#39;s CreateWorkspace method.
* @property {clouddebugger(v2).RepoId} repoId The ID of the repo containing the workspace.
*/

/**
 * @typedef CloudWorkspaceSourceContext
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {string} snapshotId The ID of the snapshot.
An empty snapshot_id refers to the most recent snapshot.
* @property {clouddebugger(v2).CloudWorkspaceId} workspaceId The ID of the workspace.
*/

/**
 * @typedef Debuggee
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {string} agentVersion Version ID of the agent.
Schema: `domain/language-platform/vmajor.minor` (for example
`google.com/java-gcp/v1.1`).
* @property {string} description Human readable description of the debuggee.
Including a human-readable project name, environment name and version
information is recommended.
* @property {clouddebugger(v2).ExtendedSourceContext[]} extSourceContexts References to the locations and revisions of the source code used in the
deployed application.

NOTE: this field is experimental and can be ignored.
* @property {string} id Unique identifier for the debuggee generated by the controller service.
* @property {boolean} isDisabled If set to `true`, indicates that the agent should disable itself and
detach from the debuggee.
* @property {boolean} isInactive If set to `true`, indicates that Controller service does not detect any
activity from the debuggee agents and the application is possibly stopped.
* @property {object} labels A set of custom debuggee properties, populated by the agent, to be
displayed to the user.
* @property {string} project Project the debuggee is associated with.
Use project number or id when registering a Google Cloud Platform project.
* @property {clouddebugger(v2).SourceContext[]} sourceContexts References to the locations and revisions of the source code used in the
deployed application.
* @property {clouddebugger(v2).StatusMessage} status Human readable message to be displayed to the user about this debuggee.
Absence of this field indicates no status. The message can be either
informational or an error status.
* @property {string} uniquifier Uniquifier to further distiguish the application.
It is possible that different applications might have identical values in
the debuggee message, thus, incorrectly identified as a single application
by the Controller service. This field adds salt to further distiguish the
application. Agents should consider seeding this field with value that
identifies the code, binary, configuration and environment.
*/

/**
 * @typedef Empty
 * @memberOf! clouddebugger(v2)
 * @type object
 */

/**
 * @typedef ExtendedSourceContext
 * @memberOf! clouddebugger(v2)
 * @type object
 * @property {clouddebugger(v2).SourceContext} context Any source context.
 * @property {object} labels Labels with user defined metadata.
 */

/**
 * @typedef FormatMessage
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {string} format Format template for the message. The `format` uses placeholders `$0`,
`$1`, etc. to reference parameters. `$$` can be used to denote the `$`
character.

Examples:

*   `Failed to load &#39;$0&#39; which helps debug $1 the first time it
    is loaded.  Again, $0 is very important.`
*   `Please pay $$10 to use $0 instead of $1.`
* @property {string[]} parameters Optional parameters to be embedded into the message.
*/

/**
 * @typedef GerritSourceContext
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).AliasContext} aliasContext An alias, which may be a branch or tag.
* @property {string} aliasName The name of an alias (branch, tag, etc.).
* @property {string} gerritProject The full project name within the host. Projects may be nested, so
&quot;project/subproject&quot; is a valid project name.
The &quot;repo name&quot; is hostURI/project.
* @property {string} hostUri The URI of a running Gerrit instance.
* @property {string} revisionId A revision (commit) ID.
*/

/**
 * @typedef GetBreakpointResponse
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Breakpoint} breakpoint Complete breakpoint state.
The fields `id` and `location` are guaranteed to be set.
*/

/**
 * @typedef GitSourceContext
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {string} revisionId Git commit hash.
required.
* @property {string} url Git repository URL.
*/

/**
 * @typedef ListActiveBreakpointsResponse
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Breakpoint[]} breakpoints List of all active breakpoints.
The fields `id` and `location` are guaranteed to be set on each breakpoint.
* @property {string} nextWaitToken A token that can be used in the next method call to block until
the list of breakpoints changes.
* @property {boolean} waitExpired If set to `true`, indicates that there is no change to the
list of active breakpoints and the server-selected timeout has expired.
The `breakpoints` field would be empty and should be ignored.
*/

/**
 * @typedef ListBreakpointsResponse
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Breakpoint[]} breakpoints List of breakpoints matching the request.
The fields `id` and `location` are guaranteed to be set on each breakpoint.
The fields: `stack_frames`, `evaluated_expressions` and `variable_table`
are cleared on each breakpoint regardless of its status.
* @property {string} nextWaitToken A wait token that can be used in the next call to `list` (REST) or
`ListBreakpoints` (RPC) to block until the list of breakpoints has changes.
*/

/**
 * @typedef ListDebuggeesResponse
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Debuggee[]} debuggees List of debuggees accessible to the calling user.
The fields `debuggee.id` and `description` are guaranteed to be set.
The `description` field is a human readable field provided by agents and
can be displayed to users.
*/

/**
 * @typedef ProjectRepoId
 * @memberOf! clouddebugger(v2)
 * @type object
 * @property {string} projectId The ID of the project.
 * @property {string} repoName The name of the repo. Leave empty for the default repo.
 */

/**
 * @typedef RegisterDebuggeeRequest
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Debuggee} debuggee Debuggee information to register.
The fields `project`, `uniquifier`, `description` and `agent_version`
of the debuggee must be set.
*/

/**
 * @typedef RegisterDebuggeeResponse
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Debuggee} debuggee Debuggee resource.
The field `id` is guranteed to be set (in addition to the echoed fields).
If the field `is_disabled` is set to `true`, the agent should disable
itself by removing all breakpoints and detaching from the application.
It should however continue to poll `RegisterDebuggee` until reenabled.
*/

/**
 * @typedef RepoId
 * @memberOf! clouddebugger(v2)
 * @type object
 * @property {clouddebugger(v2).ProjectRepoId} projectRepoId A combination of a project ID and a repo name.
 * @property {string} uid A server-assigned, globally unique identifier.
 */

/**
 * @typedef SetBreakpointResponse
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Breakpoint} breakpoint Breakpoint resource.
The field `id` is guaranteed to be set (in addition to the echoed fileds).
*/

/**
 * @typedef SourceContext
 * @memberOf! clouddebugger(v2)
 * @type object
 * @property {clouddebugger(v2).CloudRepoSourceContext} cloudRepo A SourceContext referring to a revision in a cloud repo.
 * @property {clouddebugger(v2).CloudWorkspaceSourceContext} cloudWorkspace A SourceContext referring to a snapshot in a cloud workspace.
 * @property {clouddebugger(v2).GerritSourceContext} gerrit A SourceContext referring to a Gerrit project.
 * @property {clouddebugger(v2).GitSourceContext} git A SourceContext referring to any third party Git repo (e.g. GitHub).
 */

/**
 * @typedef SourceLocation
 * @memberOf! clouddebugger(v2)
 * @type object
 * @property {integer} line Line inside the file. The first line in the file has the value `1`.
 * @property {string} path Path to the source file within the source context of the target binary.
 */

/**
 * @typedef StackFrame
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Variable[]} arguments Set of arguments passed to this function.
Note that this might not be populated for all stack frames.
* @property {string} function Demangled function name at the call site.
* @property {clouddebugger(v2).Variable[]} locals Set of local variables at the stack frame location.
Note that this might not be populated for all stack frames.
* @property {clouddebugger(v2).SourceLocation} location Source location of the call site.
*/

/**
 * @typedef StatusMessage
 * @memberOf! clouddebugger(v2)
 * @type object
 * @property {clouddebugger(v2).FormatMessage} description Status message text.
 * @property {boolean} isError Distinguishes errors from informational messages.
 * @property {string} refersTo Reference to which the message applies.
 */

/**
 * @typedef UpdateActiveBreakpointRequest
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Breakpoint} breakpoint Updated breakpoint information.
The field `id` must be set.
The agent must echo all Breakpoint specification fields in the update.
*/

/**
 * @typedef UpdateActiveBreakpointResponse
 * @memberOf! clouddebugger(v2)
 * @type object
 */

/**
 * @typedef Variable
 * @memberOf! clouddebugger(v2)
 * @type object
* @property {clouddebugger(v2).Variable[]} members Members contained or pointed to by the variable.
* @property {string} name Name of the variable, if any.
* @property {clouddebugger(v2).StatusMessage} status Status associated with the variable. This field will usually stay
unset. A status of a single variable only applies to that variable or
expression. The rest of breakpoint data still remains valid. Variables
might be reported in error state even when breakpoint is not in final
state.

The message may refer to variable name with `refers_to` set to
`VARIABLE_NAME`. Alternatively `refers_to` will be set to `VARIABLE_VALUE`.
In either case variable value and members will be unset.

Example of error message applied to name: `Invalid expression syntax`.

Example of information message applied to value: `Not captured`.

Examples of error message applied to value:

*   `Malformed string`,
*   `Field f not found in class C`
*   `Null pointer dereference`
* @property {string} type Variable type (e.g. `MyClass`). If the variable is split with
`var_table_index`, `type` goes next to `value`. The interpretation of
a type is agent specific. It is recommended to include the dynamic type
rather than a static type of an object.
* @property {string} value Simple value of the variable.
* @property {integer} varTableIndex Reference to a variable in the shared variable table. More than
one variable can reference the same variable in the table. The
`var_table_index` field is an index into `variable_table` in Breakpoint.
*/
export = Clouddebugger;
