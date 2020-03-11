// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

export namespace cloudtrace_v2beta1 {
  export interface Options extends GlobalOptions {
    version: 'v2beta1';
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
   * Cloud Trace API
   *
   * Sends application trace data to Cloud Trace for viewing. Trace data is collected for all App Engine applications by default. Trace data from other applications can be provided using this API. This library is used to interact with the Trace API directly. If you are looking to instrument your application for Cloud Trace, we recommend using OpenCensus.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudtrace = google.cloudtrace('v2beta1');
   *
   * @namespace cloudtrace
   * @type {Function}
   * @version v2beta1
   * @variation v2beta1
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
   * Result returned from `ListTraceSinks`.
   */
  export interface Schema$ListTraceSinksResponse {
    /**
     * If there might be more results than appear in this response, then `nextPageToken` is included.  To get the next set of results, call the same method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken?: string | null;
    /**
     * A list of sinks.
     */
    sinks?: Schema$TraceSink[];
  }
  /**
   * OutputConfig contains a destination for writing trace data.
   */
  export interface Schema$OutputConfig {
    /**
     * The destination for writing trace data. Currently only BigQuery is supported. E.g.:      &quot;bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]&quot;
     */
    destination?: string | null;
  }
  /**
   * Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
   */
  export interface Schema$TraceSink {
    /**
     * Required. The canonical sink resource name, unique within the project. Must be of the form:    project/[PROJECT_NUMBER]/traceSinks/[SINK_ID].  E.g.:    `&quot;projects/12345/traceSinks/my-project-trace-sink&quot;`.  Sink identifiers are limited to 256 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods.
     */
    name?: string | null;
    /**
     * Required. The export destination.
     */
    outputConfig?: Schema$OutputConfig;
    /**
     * Output only. A service account name for exporting the data. This field is set by sinks.create and sinks.update. The service account will need to be granted write access to the destination specified in the output configuration, see [Granting access for a resource](/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). To create tables and write data this account will need the dataEditor role. Read more about roles in the [BigQuery documentation](https://cloud.google.com/bigquery/docs/access-control#permissions_and_roles). E.g.:     &quot;service-00000001@00000002.iam.gserviceaccount.com&quot;
     */
    writerIdentity?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    traceSinks: Resource$Projects$Tracesinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.traceSinks = new Resource$Projects$Tracesinks(this.context);
    }
  }

  export class Resource$Projects$Tracesinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudtrace.projects.traceSinks.create
     * @desc Creates a sink that exports trace spans to a destination.  The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination.  A sink can export traces only from the resource owning the sink (the 'parent').
     * @alias cloudtrace.projects.traceSinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The resource in which to create the sink (currently only project sinks are supported):      "projects/[PROJECT_ID]"  Examples: `"projects/my-trace-project"`, `"projects/123456789"`.
     * @param {().TraceSink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Tracesinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TraceSink>;
    create(
      params: Params$Resource$Projects$Tracesinks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TraceSink>,
      callback: BodyResponseCallback<Schema$TraceSink>
    ): void;
    create(
      params: Params$Resource$Projects$Tracesinks$Create,
      callback: BodyResponseCallback<Schema$TraceSink>
    ): void;
    create(callback: BodyResponseCallback<Schema$TraceSink>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Tracesinks$Create
        | BodyResponseCallback<Schema$TraceSink>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TraceSink>,
      callback?: BodyResponseCallback<Schema$TraceSink>
    ): void | GaxiosPromise<Schema$TraceSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tracesinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tracesinks$Create;
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
            url: (rootUrl + '/v2beta1/{+parent}/traceSinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TraceSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TraceSink>(parameters);
      }
    }

    /**
     * cloudtrace.projects.traceSinks.delete
     * @desc Deletes a sink.
     * @alias cloudtrace.projects.traceSinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:      "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]"  Example: `"projects/12345/traceSinks/my-sink-id"`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Tracesinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Tracesinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Tracesinks$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Tracesinks$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tracesinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tracesinks$Delete;
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
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * cloudtrace.projects.traceSinks.get
     * @desc Get a trace sink by name under the parent resource (GCP project).
     * @alias cloudtrace.projects.traceSinks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the sink:      "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]"  Example: `"projects/12345/traceSinks/my-sink-id"`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Tracesinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TraceSink>;
    get(
      params: Params$Resource$Projects$Tracesinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TraceSink>,
      callback: BodyResponseCallback<Schema$TraceSink>
    ): void;
    get(
      params: Params$Resource$Projects$Tracesinks$Get,
      callback: BodyResponseCallback<Schema$TraceSink>
    ): void;
    get(callback: BodyResponseCallback<Schema$TraceSink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Tracesinks$Get
        | BodyResponseCallback<Schema$TraceSink>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TraceSink>,
      callback?: BodyResponseCallback<Schema$TraceSink>
    ): void | GaxiosPromise<Schema$TraceSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tracesinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tracesinks$Get;
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
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TraceSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TraceSink>(parameters);
      }
    }

    /**
     * cloudtrace.projects.traceSinks.list
     * @desc List all sinks for the parent resource (GCP project).
     * @alias cloudtrace.projects.traceSinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored.  The presence of `nextPageToken` in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `pageToken` must be the value of `nextPageToken` from the previous response.  The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose sinks are to be listed (currently only project parent resources are supported):      "projects/[PROJECT_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Tracesinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTraceSinksResponse>;
    list(
      params: Params$Resource$Projects$Tracesinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTraceSinksResponse>,
      callback: BodyResponseCallback<Schema$ListTraceSinksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Tracesinks$List,
      callback: BodyResponseCallback<Schema$ListTraceSinksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTraceSinksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Tracesinks$List
        | BodyResponseCallback<Schema$ListTraceSinksResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTraceSinksResponse>,
      callback?: BodyResponseCallback<Schema$ListTraceSinksResponse>
    ): void | GaxiosPromise<Schema$ListTraceSinksResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tracesinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tracesinks$List;
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
            url: (rootUrl + '/v2beta1/{+parent}/traceSinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTraceSinksResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTraceSinksResponse>(parameters);
      }
    }

    /**
     * cloudtrace.projects.traceSinks.patch
     * @desc Updates a sink.  This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
     * @alias cloudtrace.projects.traceSinks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The full resource name of the sink to update, including the parent resource and the sink identifier:      "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]"  Example: `"projects/12345/traceSinks/my-sink-id"`.
     * @param {string=} params.updateMask Required. Field mask that specifies the fields in `trace_sink` that are to be updated. A sink field is overwritten if, and only if, it is in the update mask.  `name` and `writer_identity` fields cannot be updated.  An empty updateMask is considered an error.  For a detailed `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask  Example: `updateMask=output_config`.
     * @param {().TraceSink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Tracesinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TraceSink>;
    patch(
      params: Params$Resource$Projects$Tracesinks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TraceSink>,
      callback: BodyResponseCallback<Schema$TraceSink>
    ): void;
    patch(
      params: Params$Resource$Projects$Tracesinks$Patch,
      callback: BodyResponseCallback<Schema$TraceSink>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TraceSink>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Tracesinks$Patch
        | BodyResponseCallback<Schema$TraceSink>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TraceSink>,
      callback?: BodyResponseCallback<Schema$TraceSink>
    ): void | GaxiosPromise<Schema$TraceSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tracesinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tracesinks$Patch;
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
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TraceSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TraceSink>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Tracesinks$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource in which to create the sink (currently only project sinks are supported):      "projects/[PROJECT_ID]"  Examples: `"projects/my-trace-project"`, `"projects/123456789"`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TraceSink;
  }
  export interface Params$Resource$Projects$Tracesinks$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:      "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]"  Example: `"projects/12345/traceSinks/my-sink-id"`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tracesinks$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the sink:      "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]"  Example: `"projects/12345/traceSinks/my-sink-id"`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tracesinks$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored.  The presence of `nextPageToken` in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `pageToken` must be the value of `nextPageToken` from the previous response.  The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose sinks are to be listed (currently only project parent resources are supported):      "projects/[PROJECT_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Tracesinks$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier:      "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]"  Example: `"projects/12345/traceSinks/my-sink-id"`.
     */
    name?: string;
    /**
     * Required. Field mask that specifies the fields in `trace_sink` that are to be updated. A sink field is overwritten if, and only if, it is in the update mask.  `name` and `writer_identity` fields cannot be updated.  An empty updateMask is considered an error.  For a detailed `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask  Example: `updateMask=output_config`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TraceSink;
  }
}
