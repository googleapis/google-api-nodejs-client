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
 * Stackdriver Trace API
 *
 * Send and retrieve trace data from Stackdriver Trace. Data is generated and available by default for all App Engine applications. Data from other applications can be written to Stackdriver Trace for display, reporting, and analysis.

 *
 * @example
 * const google = require('googleapis');
 * const cloudtrace = google.cloudtrace('v1');
 *
 * @namespace cloudtrace
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudtrace
 */
function Cloudtrace(options) { // eslint-disable-line
  const self = this;
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

      const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects/{projectId}/traces').replace(/([^:]\/)\/+/g, '$1'),
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

        const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/projects/{projectId}/traces/{traceId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['projectId', 'traceId'],
          pathParams: ['projectId', 'traceId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

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
       * @param {string=} params.endTime End of the time interval (inclusive) during which the trace data was collected from the application.
       * @param {string=} params.filter An optional filter against labels for the request.  By default, searches use prefix matching. To specify exact match, prepend a plus symbol (`+`) to the search term. Multiple terms are ANDed. Syntax:  *   `root:NAME_PREFIX` or `NAME_PREFIX`: Return traces where any root     span starts with `NAME_PREFIX`. *   `+root:NAME` or `+NAME`: Return traces where any root span's name is     exactly `NAME`. *   `span:NAME_PREFIX`: Return traces where any span starts with     `NAME_PREFIX`. *   `+span:NAME`: Return traces where any span's name is exactly     `NAME`. *   `latency:DURATION`: Return traces whose overall latency is     greater or equal to than `DURATION`. Accepted units are nanoseconds     (`ns`), milliseconds (`ms`), and seconds (`s`). Default is `ms`. For     example, `latency:24ms` returns traces whose overall latency     is greater than or equal to 24 milliseconds. *   `label:LABEL_KEY`: Return all traces containing the specified     label key (exact match, case-sensitive) regardless of the key:value     pair's value (including empty values). *   `LABEL_KEY:VALUE_PREFIX`: Return all traces containing the specified     label key (exact match, case-sensitive) whose value starts with     `VALUE_PREFIX`. Both a key and a value must be specified. *   `+LABEL_KEY:VALUE`: Return all traces containing a key:value pair     exactly matching the specified text. Both a key and a value must be     specified. *   `method:VALUE`: Equivalent to `/http/method:VALUE`. *   `url:VALUE`: Equivalent to `/http/url:VALUE`.
       * @param {string=} params.orderBy Field used to sort the returned traces. Optional. Can be one of the following:  *   `trace_id` *   `name` (`name` field of root span in the trace) *   `duration` (difference between `end_time` and `start_time` fields of      the root span) *   `start` (`start_time` field of the root span)  Descending order can be specified by appending `desc` to the sort field (for example, `name desc`).  Only one sort field is permitted.
       * @param {integer=} params.pageSize Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value.  The implementation may return fewer traces than the requested page size. Optional.
       * @param {string=} params.pageToken Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request. Optional.
       * @param {string} params.projectId ID of the Cloud project where the trace data is stored.
       * @param {string=} params.startTime Start of the time interval (inclusive) during which the trace data was collected from the application.
       * @param {string=} params.view Type of data returned for traces in the list. Optional. Default is `MINIMAL`.
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

        const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/projects/{projectId}/traces').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['projectId'],
          pathParams: ['projectId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef Empty
 * @memberOf! cloudtrace(v1)
 * @type object
 */

/**
 * @typedef ListTracesResponse
 * @memberOf! cloudtrace(v1)
 * @type object
* @property {string} nextPageToken If defined, indicates that there are more traces that match the request
and that this value should be passed to the next request to continue
retrieving additional traces.
* @property {cloudtrace(v1).Trace[]} traces List of trace records returned.
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
 * @typedef TraceSpan
 * @memberOf! cloudtrace(v1)
 * @type object
* @property {string} endTime End time of the span in nanoseconds from the UNIX epoch.
* @property {string} kind Distinguishes between spans generated in a particular context. For example,
two spans with the same name may be distinguished using `RPC_CLIENT`
and `RPC_SERVER` to identify queueing latency associated with the span.
* @property {object} labels Collection of labels associated with the span. Label keys must be less than
128 bytes. Label values must be less than 16 kilobytes (10MB for
`/stacktrace` values).

Some predefined label keys exist, or you may create your own. When creating
your own, we recommend the following formats:

* `/category/product/key` for agents of well-known products (e.g.
  `/db/mongodb/read_size`).
* `short_host/path/key` for domain-specific keys (e.g.
  `foo.com/myproduct/bar`)

Predefined labels include:

*   `/agent`
*   `/component`
*   `/error/message`
*   `/error/name`
*   `/http/client_city`
*   `/http/client_country`
*   `/http/client_protocol`
*   `/http/client_region`
*   `/http/host`
*   `/http/method`
*   `/http/redirected_url`
*   `/http/request/size`
*   `/http/response/size`
*   `/http/status_code`
*   `/http/url`
*   `/http/user_agent`
*   `/pid`
*   `/stacktrace`
*   `/tid`
* @property {string} name Name of the span. Must be less than 128 bytes. The span name is sanitized
and displayed in the Stackdriver Trace tool in the
{% dynamic print site_values.console_name %}.
The name may be a method name or some other per-call site name.
For the same executable and the same call point, a best practice is
to use a consistent name, which makes it easier to correlate
cross-trace spans.
* @property {string} parentSpanId ID of the parent span, if any. Optional.
* @property {string} spanId Identifier for the span. Must be a 64-bit integer other than 0 and
unique within a trace.
* @property {string} startTime Start time of the span in nanoseconds from the UNIX epoch.
*/

/**
 * @typedef Traces
 * @memberOf! cloudtrace(v1)
 * @type object
 * @property {cloudtrace(v1).Trace[]} traces List of traces.
 */
export = Cloudtrace;
