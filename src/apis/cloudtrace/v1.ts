/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudtrace_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Stackdriver Trace API
   *
   * Sends application trace data to Stackdriver Trace for viewing. Trace data is collected for all App Engine applications by default. Trace data from other applications can be provided using this API. This library is used to interact with the Trace API directly. If you are looking to instrument your application for Stackdriver Trace, we recommend using OpenCensus.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudtrace = google.cloudtrace('v1');
   *
   * @namespace cloudtrace
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Cloudtrace
   */
  export class Cloudtrace {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * The response message for the `ListTraces` method.
   */
  export interface Schema$ListTracesResponse {
    /**
     * If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces.
     */
    nextPageToken?: string | null;
    /**
     * List of trace records as specified by the view parameter.
     */
    traces?: Schema$Trace[];
  }
  /**
   * A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
   */
  export interface Schema$Trace {
    /**
     * Project ID of the Cloud project where the trace data is stored.
     */
    projectId?: string | null;
    /**
     * Collection of spans in the trace.
     */
    spans?: Schema$TraceSpan[];
    /**
     * Globally unique identifier for the trace. This identifier is a 128-bit numeric value formatted as a 32-byte hex string. For example, `382d4f4c6b7bb2f4a972559d9085001d`.
     */
    traceId?: string | null;
  }
  /**
   * List of new or updated traces.
   */
  export interface Schema$Traces {
    /**
     * List of traces.
     */
    traces?: Schema$Trace[];
  }
  /**
   * A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
   */
  export interface Schema$TraceSpan {
    /**
     * End time of the span in nanoseconds from the UNIX epoch.
     */
    endTime?: string | null;
    /**
     * Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `RPC_CLIENT` and `RPC_SERVER` to identify queueing latency associated with the span.
     */
    kind?: string | null;
    /**
     * Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 kilobytes (10MB for `/stacktrace` values).  Some predefined label keys exist, or you may create your own. When creating your own, we recommend the following formats:  * `/category/product/key` for agents of well-known products (e.g.   `/db/mongodb/read_size`). * `short_host/path/key` for domain-specific keys (e.g.   `foo.com/myproduct/bar`)  Predefined labels include:  *   `/agent` *   `/component` *   `/error/message` *   `/error/name` *   `/http/client_city` *   `/http/client_country` *   `/http/client_protocol` *   `/http/client_region` *   `/http/host` *   `/http/method` *   `/http/path` *   `/http/redirected_url` *   `/http/request/size` *   `/http/response/size` *   `/http/route` *   `/http/status_code` *   `/http/url` *   `/http/user_agent` *   `/pid` *   `/stacktrace` *   `/tid`
     */
    labels?: {[key: string]: string} | null;
    /**
     * Name of the span. Must be less than 128 bytes. The span name is sanitized and displayed in the Stackdriver Trace tool in the Google Cloud Platform Console. The name may be a method name or some other per-call site name. For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans.
     */
    name?: string | null;
    /**
     * ID of the parent span, if any. Optional.
     */
    parentSpanId?: string | null;
    /**
     * Identifier for the span. Must be a 64-bit integer other than 0 and unique within a trace. For example, `2205310701640571284`.
     */
    spanId?: string | null;
    /**
     * Start time of the span in nanoseconds from the UNIX epoch.
     */
    startTime?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    traces: Resource$Projects$Traces;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.traces = new Resource$Projects$Traces(this.context);
    }

    /**
     * cloudtrace.projects.patchTraces
     * @desc Sends new traces to Stackdriver Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Stackdriver Trace API
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
     * const {google} = require('googleapis');
     * var cloudTrace = google.cloudtrace('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // ID of the Cloud project where the trace data is stored.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudTrace.projects.patchTraces(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias cloudtrace.projects.patchTraces
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId ID of the Cloud project where the trace data is stored.
     * @param {().Traces} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patchTraces(
      params?: Params$Resource$Projects$Patchtraces,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    patchTraces(
      params: Params$Resource$Projects$Patchtraces,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    patchTraces(
      params: Params$Resource$Projects$Patchtraces,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    patchTraces(callback: BodyResponseCallback<Schema$Empty>): void;
    patchTraces(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchtraces
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchtraces;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchtraces;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/traces').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Patchtraces
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the Cloud project where the trace data is stored.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Traces;
  }

  export class Resource$Projects$Traces {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudtrace.projects.traces.get
     * @desc Gets a single trace by its ID.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Stackdriver Trace API
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
     * const {google} = require('googleapis');
     * var cloudTrace = google.cloudtrace('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // ID of the Cloud project where the trace data is stored.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // ID of the trace to return.
     *     traceId: 'my-trace-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudTrace.projects.traces.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias cloudtrace.projects.traces.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId ID of the Cloud project where the trace data is stored.
     * @param {string} params.traceId ID of the trace to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Traces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Trace>;
    get(
      params: Params$Resource$Projects$Traces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Trace>,
      callback: BodyResponseCallback<Schema$Trace>
    ): void;
    get(
      params: Params$Resource$Projects$Traces$Get,
      callback: BodyResponseCallback<Schema$Trace>
    ): void;
    get(callback: BodyResponseCallback<Schema$Trace>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Traces$Get
        | BodyResponseCallback<Schema$Trace>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Trace>,
      callback?: BodyResponseCallback<Schema$Trace>
    ): void | GaxiosPromise<Schema$Trace> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Traces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Traces$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/traces/{traceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'traceId'],
        pathParams: ['projectId', 'traceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Trace>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Trace>(parameters);
      }
    }

    /**
     * cloudtrace.projects.traces.list
     * @desc Returns of a list of traces that match the specified filter conditions.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Stackdriver Trace API
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
     * const {google} = require('googleapis');
     * var cloudTrace = google.cloudtrace('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // ID of the Cloud project where the trace data is stored.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias cloudtrace.projects.traces.list
     * @memberOf! ()
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
    list(
      params?: Params$Resource$Projects$Traces$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTracesResponse>;
    list(
      params: Params$Resource$Projects$Traces$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTracesResponse>,
      callback: BodyResponseCallback<Schema$ListTracesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Traces$List,
      callback: BodyResponseCallback<Schema$ListTracesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTracesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Traces$List
        | BodyResponseCallback<Schema$ListTracesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTracesResponse>,
      callback?: BodyResponseCallback<Schema$ListTracesResponse>
    ): void | GaxiosPromise<Schema$ListTracesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Traces$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Traces$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/traces').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTracesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTracesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Traces$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the Cloud project where the trace data is stored.
     */
    projectId?: string;
    /**
     * ID of the trace to return.
     */
    traceId?: string;
  }
  export interface Params$Resource$Projects$Traces$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * End of the time interval (inclusive) during which the trace data was collected from the application.
     */
    endTime?: string;
    /**
     * An optional filter against labels for the request.  By default, searches use prefix matching. To specify exact match, prepend a plus symbol (`+`) to the search term. Multiple terms are ANDed. Syntax:  *   `root:NAME_PREFIX` or `NAME_PREFIX`: Return traces where any root     span starts with `NAME_PREFIX`. *   `+root:NAME` or `+NAME`: Return traces where any root span's name is     exactly `NAME`. *   `span:NAME_PREFIX`: Return traces where any span starts with     `NAME_PREFIX`. *   `+span:NAME`: Return traces where any span's name is exactly     `NAME`. *   `latency:DURATION`: Return traces whose overall latency is     greater or equal to than `DURATION`. Accepted units are nanoseconds     (`ns`), milliseconds (`ms`), and seconds (`s`). Default is `ms`. For     example, `latency:24ms` returns traces whose overall latency     is greater than or equal to 24 milliseconds. *   `label:LABEL_KEY`: Return all traces containing the specified     label key (exact match, case-sensitive) regardless of the key:value     pair's value (including empty values). *   `LABEL_KEY:VALUE_PREFIX`: Return all traces containing the specified     label key (exact match, case-sensitive) whose value starts with     `VALUE_PREFIX`. Both a key and a value must be specified. *   `+LABEL_KEY:VALUE`: Return all traces containing a key:value pair     exactly matching the specified text. Both a key and a value must be     specified. *   `method:VALUE`: Equivalent to `/http/method:VALUE`. *   `url:VALUE`: Equivalent to `/http/url:VALUE`.
     */
    filter?: string;
    /**
     * Field used to sort the returned traces. Optional. Can be one of the following:  *   `trace_id` *   `name` (`name` field of root span in the trace) *   `duration` (difference between `end_time` and `start_time` fields of      the root span) *   `start` (`start_time` field of the root span)  Descending order can be specified by appending `desc` to the sort field (for example, `name desc`).  Only one sort field is permitted.
     */
    orderBy?: string;
    /**
     * Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value.  The implementation may return fewer traces than the requested page size. Optional.
     */
    pageSize?: number;
    /**
     * Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request. Optional.
     */
    pageToken?: string;
    /**
     * ID of the Cloud project where the trace data is stored.
     */
    projectId?: string;
    /**
     * Start of the time interval (inclusive) during which the trace data was collected from the application.
     */
    startTime?: string;
    /**
     * Type of data returned for traces in the list. Optional. Default is `MINIMAL`.
     */
    view?: string;
  }
}
