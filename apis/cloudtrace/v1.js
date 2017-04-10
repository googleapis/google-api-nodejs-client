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
var utils = require('../../lib/utils');

/**
 * Stackdriver Trace API
 *
 * Send and retrieve trace data from Stackdriver Trace. Data is generated and available by default for all App Engine applications. Data from other applications can be written to Stackdriver Trace for display, reporting, and analysis.

 *
 * @example
 * var google = require('googleapis');
 * var cloudtrace = google.cloudtrace('v1');
 *
 * @namespace cloudtrace
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudtrace
 */
function Cloudtrace(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    /**
     * cloudtrace.projects.patchTraces
     *
     * @desc Sends new traces to Stackdriver Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Trace API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudtrace
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
     * var cloudTrace = google.cloudtrace('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // ID of the Cloud project where the trace data is stored.
     *     projectId: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudTrace.projects.patchTraces(request, function(err) {
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
     * @alias cloudtrace.projects.patchTraces
     * @memberOf! cloudtrace(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId ID of the Cloud project where the trace data is stored.
     * @param {cloudtrace(v1).Traces} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patchTraces: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://cloudtrace.googleapis.com/v1/projects/{projectId}/traces',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    traces: {

      /**
       * cloudtrace.projects.traces.list
       *
       * @desc Returns of a list of traces that match the specified filter conditions.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Trace API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/cloudtrace
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
       * var cloudTrace = google.cloudtrace('v1');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     // ID of the Cloud project where the trace data is stored.
       *     projectId: '',  // TODO: Update placeholder value.
       *
       *     auth: authClient
       *   };
       *
       *   var handlePage = function(err, response) {
       *     if (err) {
       *       console.log(err);
       *       return;
       *     }
       *
       *     var tracesPage = response['traces'];
       *     if (!tracesPage) {
       *       return;
       *     }
       *     for (var i = 0; i < tracesPage.length; i++) {
       *       // TODO: Change code below to process each resource in `tracesPage`:
       *       console.log(JSON.stringify(tracesPage[i], null, 2));
       *     }
       *
       *     if (response.nextPageToken) {
       *       request.pageToken = response.nextPageToken;
       *       cloudTrace.projects.traces.list(request, handlePage);
       *     }
       *   };
       *
       *   cloudTrace.projects.traces.list(request, handlePage);
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
       * @alias cloudtrace.projects.traces.list
       * @memberOf! cloudtrace(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.view Type of data returned for traces in the list. Optional. Default is `MINIMAL`.
       * @param {string=} params.orderBy Field used to sort the returned traces. Optional. Can be one of the following:  *   `trace_id` *   `name` (`name` field of root span in the trace) *   `duration` (difference between `end_time` and `start_time` fields of      the root span) *   `start` (`start_time` field of the root span)  Descending order can be specified by appending `desc` to the sort field (for example, `name desc`).  Only one sort field is permitted.
       * @param {string} params.projectId ID of the Cloud project where the trace data is stored.
       * @param {string=} params.filter An optional filter for the request.
       * @param {string=} params.endTime Start of the time interval (inclusive) during which the trace data was collected from the application.
       * @param {string=} params.startTime End of the time interval (inclusive) during which the trace data was collected from the application.
       * @param {string=} params.pageToken Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request. Optional.
       * @param {integer=} params.pageSize Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value.  The implementation may return fewer traces than the requested page size. Optional.
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

        var parameters = {
          options: utils.extend({
            url: 'https://cloudtrace.googleapis.com/v1/projects/{projectId}/traces',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * cloudtrace.projects.traces.get
       *
       * @desc Gets a single trace by its ID.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Trace API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/cloudtrace
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
       * var cloudTrace = google.cloudtrace('v1');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     // ID of the Cloud project where the trace data is stored.
       *     projectId: '',  // TODO: Update placeholder value.
       *
       *     // ID of the trace to return.
       *     traceId: '',  // TODO: Update placeholder value.
       *
       *     auth: authClient
       *   };
       *
       *   cloudTrace.projects.traces.get(request, function(err, response) {
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
       * @alias cloudtrace.projects.traces.get
       * @memberOf! cloudtrace(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId ID of the Cloud project where the trace data is stored.
       * @param {string} params.traceId ID of the trace to return.
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

        var parameters = {
          options: utils.extend({
            url: 'https://cloudtrace.googleapis.com/v1/projects/{projectId}/traces/{traceId}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['projectId', 'traceId'],
          pathParams: ['projectId', 'traceId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef TraceSpan
 * @memberOf! cloudtrace(v1)
 * @type object
* @property {string} spanId Identifier for the span. Must be a 64-bit integer other than 0 and
unique within a trace.
* @property {string} parentSpanId ID of the parent span, if any. Optional.
* @property {string} endTime End time of the span in nanoseconds from the UNIX epoch.
* @property {string} startTime Start time of the span in nanoseconds from the UNIX epoch.
* @property {string} kind Distinguishes between spans generated in a particular context. For example,
two spans with the same name may be distinguished using `RPC_CLIENT`
and `RPC_SERVER` to identify queueing latency associated with the span.
* @property {object} labels Collection of labels associated with the span. Label keys must be less than
128 bytes. Label values must be less than 16 kilobytes.
* @property {string} name Name of the span. Must be less than 128 bytes. The span name is sanitized
and displayed in the Stackdriver Trace tool in the
{% dynamic print site_values.console_name %}.
The name may be a method name or some other per-call site name.
For the same executable and the same call point, a best practice is
to use a consistent name, which makes it easier to correlate
cross-trace spans.
*/
/**
 * @typedef ListTracesResponse
 * @memberOf! cloudtrace(v1)
 * @type object
* @property {cloudtrace(v1).Trace[]} traces List of trace records returned.
* @property {string} nextPageToken If defined, indicates that there are more traces that match the request
and that this value should be passed to the next request to continue
retrieving additional traces.
*/
/**
 * @typedef Empty
 * @memberOf! cloudtrace(v1)
 * @type object
 */
/**
 * @typedef Trace
 * @memberOf! cloudtrace(v1)
 * @type object
* @property {string} projectId Project ID of the Cloud project where the trace data is stored.
* @property {cloudtrace(v1).TraceSpan[]} spans Collection of spans in the trace.
* @property {string} traceId Globally unique identifier for the trace. This identifier is a 128-bit
numeric value formatted as a 32-byte hex string.
*/
/**
 * @typedef Traces
 * @memberOf! cloudtrace(v1)
 * @type object
 * @property {cloudtrace(v1).Trace[]} traces List of traces.
 */
module.exports = Cloudtrace;
