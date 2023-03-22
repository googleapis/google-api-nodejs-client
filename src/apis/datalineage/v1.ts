// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace datalineage_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

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
   * Data Lineage API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const datalineage = google.datalineage('v1');
   * ```
   */
  export class Datalineage {
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
   * Request message for BatchSearchLinkProcesses.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest {
    /**
     * Required. An array of links to check for their associated LineageProcesses. The maximum number of items in this array is 100. If the request contains more than 100 links, it returns the `INVALID_ARGUMENT` error. Format: `projects/{project\}/locations/{location\}/links/{link\}`.
     */
    links?: string[] | null;
    /**
     * The maximum number of processes to return in a single page of the response. A page may contain fewer results than this value.
     */
    pageSize?: number | null;
    /**
     * The page token received from a previous `BatchSearchLinkProcesses` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.
     */
    pageToken?: string | null;
  }
  /**
   * Response message for BatchSearchLinkProcesses.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse {
    /**
     * The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response.
     */
    nextPageToken?: string | null;
    /**
     * An array of processes associated with the specified links.
     */
    processLinks?: Schema$GoogleCloudDatacatalogLineageV1ProcessLinks[];
  }
  /**
   * The soft reference to everything you can attach a lineage event to.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1EntityReference {
    /**
     * Required. Fully Qualified Name of the entity. Useful for referencing entities that aren't represented as Google Cloud resources, for example, tables in Dataproc Metastore API. Examples: * `bigquery:dataset.project_id.dataset_id` * `bigquery:table.project_id.dataset_id.table_id` * `pubsub:project_id.topic_id` * `dataproc_metastore:projectId.locationId.instanceId.databaseId.tableId`
     */
    fullyQualifiedName?: string | null;
  }
  /**
   * A lineage between source and target entities.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1EventLink {
    /**
     * Required. Reference to the source entity
     */
    source?: Schema$GoogleCloudDatacatalogLineageV1EntityReference;
    /**
     * Required. Reference to the target entity
     */
    target?: Schema$GoogleCloudDatacatalogLineageV1EntityReference;
  }
  /**
   * A lineage event represents an operation on assets. Within the operation, the data flows from the source to the target defined in the links field.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1LineageEvent {
    /**
     * Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported.
     */
    endTime?: string | null;
    /**
     * Optional. List of source-target pairs. Can't contain more than 100 tuples.
     */
    links?: Schema$GoogleCloudDatacatalogLineageV1EventLink[];
    /**
     * Immutable. The resource name of the lineage event. Format: `projects/{project\}/locations/{location\}/processes/{process\}/runs/{run\}/lineageEvents/{lineage_event\}`. Can be specified or auto-assigned. {lineage_event\} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     */
    name?: string | null;
    /**
     * Optional. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported.
     */
    startTime?: string | null;
  }
  /**
   * Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are created when LineageEvents record data transformation between related assets.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1Link {
    /**
     * The end of the last event establishing this link.
     */
    endTime?: string | null;
    /**
     * Output only. Immutable. The name of the link. Format: `projects/{project\}/locations/{location\}/links/{link\}`.
     */
    name?: string | null;
    /**
     * The pointer to the entity that is the **source** of this link.
     */
    source?: Schema$GoogleCloudDatacatalogLineageV1EntityReference;
    /**
     * The start of the first event establishing this link.
     */
    startTime?: string | null;
    /**
     * The pointer to the entity that is the **target** of this link.
     */
    target?: Schema$GoogleCloudDatacatalogLineageV1EntityReference;
  }
  /**
   * Response message for ListLineageEvents.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse {
    /**
     * Lineage events from the specified project and location.
     */
    lineageEvents?: Schema$GoogleCloudDatacatalogLineageV1LineageEvent[];
    /**
     * The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListProcesses.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse {
    /**
     * The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The processes from the specified project and location.
     */
    processes?: Schema$GoogleCloudDatacatalogLineageV1Process[];
  }
  /**
   * Response message for ListRuns.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse {
    /**
     * The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The runs from the specified project and location.
     */
    runs?: Schema$GoogleCloudDatacatalogLineageV1Run[];
  }
  /**
   * Metadata describing the operation.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1OperationMetadata {
    /**
     * Output only. The timestamp of the operation submission to the server.
     */
    createTime?: string | null;
    /**
     * Output only. The timestamp of the operation termination, regardless of its success. This field is unset if the operation is still ongoing.
     */
    endTime?: string | null;
    /**
     * Output only. The type of the operation being performed.
     */
    operationType?: string | null;
    /**
     * Output only. The [relative name] (https://cloud.google.com//apis/design/resource_names#relative_resource_name) of the resource being operated on.
     */
    resource?: string | null;
    /**
     * Output only. The UUID of the resource being operated on.
     */
    resourceUuid?: string | null;
    /**
     * Output only. The current operation state.
     */
    state?: string | null;
  }
  /**
   * Origin of a process.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1Origin {
    /**
     * If the source_type isn't CUSTOM, the value of this field should be a Google Cloud resource name of the system, which reports lineage. The project and location parts of the resource name must match the project and location of the lineage resource being created. Examples: - `{source_type: COMPOSER, name: "projects/foo/locations/us/environments/bar"\}` - `{source_type: BIGQUERY, name: "projects/foo/locations/eu"\}` - `{source_type: CUSTOM, name: "myCustomIntegration"\}`
     */
    name?: string | null;
    /**
     * Type of the source.
     */
    sourceType?: string | null;
  }
  /**
   * A process is the definition of a data transformation operation.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1Process {
    /**
     * Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process). Up to 100 attributes are allowed.
     */
    attributes?: {[key: string]: any} | null;
    /**
     * Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`
     */
    displayName?: string | null;
    /**
     * Immutable. The resource name of the lineage process. Format: `projects/{project\}/locations/{location\}/processes/{process\}`. Can be specified or auto-assigned. {process\} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     */
    name?: string | null;
    /**
     * Optional. The origin of this process and its runs and lineage events.
     */
    origin?: Schema$GoogleCloudDatacatalogLineageV1Origin;
  }
  /**
   * Link details.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1ProcessLinkInfo {
    /**
     * The end of the last event establishing this link-process tuple.
     */
    endTime?: string | null;
    /**
     * The name of the link in the format of `projects/{project\}/locations/{location\}/links/{link\}`.
     */
    link?: string | null;
    /**
     * The start of the first event establishing this link-process tuple.
     */
    startTime?: string | null;
  }
  /**
   * Links associated with a specific process.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1ProcessLinks {
    /**
     * An array containing link details objects of the links provided in the original request. A single process can result in creating multiple links. If any of the links you provide in the request are created by the same process, they all are included in this array.
     */
    links?: Schema$GoogleCloudDatacatalogLineageV1ProcessLinkInfo[];
    /**
     * The process name in the format of `projects/{project\}/locations/{location\}/processes/{process\}`.
     */
    process?: string | null;
  }
  /**
   * A lineage run represents an execution of a process that creates lineage events.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1Run {
    /**
     * Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed.
     */
    attributes?: {[key: string]: any} | null;
    /**
     * Optional. A human-readable name you can set to display in a user interface. Must be not longer than 1024 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`
     */
    displayName?: string | null;
    /**
     * Optional. The timestamp of the end of the run.
     */
    endTime?: string | null;
    /**
     * Immutable. The resource name of the run. Format: `projects/{project\}/locations/{location\}/processes/{process\}/runs/{run\}`. Can be specified or auto-assigned. {run\} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     */
    name?: string | null;
    /**
     * Required. The timestamp of the start of the run.
     */
    startTime?: string | null;
    /**
     * Required. The state of the run.
     */
    state?: string | null;
  }
  /**
   * Request message for SearchLinks.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1SearchLinksRequest {
    /**
     * Optional. The maximum number of links to return in a single page of the response. A page may contain fewer links than this value. If unspecified, at most 10 links are returned. Maximum value is 100; values greater than 100 are reduced to 100.
     */
    pageSize?: number | null;
    /**
     * Optional. The page token received from a previous `SearchLinksRequest` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.
     */
    pageToken?: string | null;
    /**
     * Optional. Send asset information in the **source** field to retrieve all links that lead from the specified asset to downstream assets.
     */
    source?: Schema$GoogleCloudDatacatalogLineageV1EntityReference;
    /**
     * Optional. Send asset information in the **target** field to retrieve all links that lead from upstream assets to the specified asset.
     */
    target?: Schema$GoogleCloudDatacatalogLineageV1EntityReference;
  }
  /**
   * Response message for SearchLinks.
   */
  export interface Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse {
    /**
     * The list of links for a given asset. Can be empty if the asset has no relations of requested type (source or target).
     */
    links?: Schema$GoogleCloudDatacatalogLineageV1Link[];
    /**
     * The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response.
     */
    nextPageToken?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$GoogleLongrunningCancelOperationRequest {}
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Operations;
    processes: Resource$Projects$Locations$Processes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.processes = new Resource$Projects$Locations$Processes(this.context);
    }

    /**
     * Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.batchSearchLinkProcesses({
     *     // Required. The project and location where you want to search.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "links": [],
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "processLinks": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchSearchLinkProcesses(
      params: Params$Resource$Projects$Locations$Batchsearchlinkprocesses,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchSearchLinkProcesses(
      params?: Params$Resource$Projects$Locations$Batchsearchlinkprocesses,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>;
    batchSearchLinkProcesses(
      params: Params$Resource$Projects$Locations$Batchsearchlinkprocesses,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchSearchLinkProcesses(
      params: Params$Resource$Projects$Locations$Batchsearchlinkprocesses,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>
    ): void;
    batchSearchLinkProcesses(
      params: Params$Resource$Projects$Locations$Batchsearchlinkprocesses,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>
    ): void;
    batchSearchLinkProcesses(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>
    ): void;
    batchSearchLinkProcesses(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Batchsearchlinkprocesses
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Batchsearchlinkprocesses;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Batchsearchlinkprocesses;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:batchSearchLinkProcesses').replace(
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.searchLinks({
     *     // Required. The project and location you want search in.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "source": {},
     *       //   "target": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "links": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchLinks(
      params: Params$Resource$Projects$Locations$Searchlinks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchLinks(
      params?: Params$Resource$Projects$Locations$Searchlinks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>;
    searchLinks(
      params: Params$Resource$Projects$Locations$Searchlinks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchLinks(
      params: Params$Resource$Projects$Locations$Searchlinks,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>
    ): void;
    searchLinks(
      params: Params$Resource$Projects$Locations$Searchlinks,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>
    ): void;
    searchLinks(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>
    ): void;
    searchLinks(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Searchlinks
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Searchlinks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Searchlinks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:searchLinks').replace(
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1SearchLinksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Batchsearchlinkprocesses
    extends StandardParameters {
    /**
     * Required. The project and location where you want to search.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
  }
  export interface Params$Resource$Projects$Locations$Searchlinks
    extends StandardParameters {
    /**
     * Required. The project and location you want search in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogLineageV1SearchLinksRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunningCancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Processes {
    context: APIRequestContext;
    runs: Resource$Projects$Locations$Processes$Runs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.runs = new Resource$Projects$Locations$Processes$Runs(this.context);
    }

    /**
     * Creates a new process.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.create({
     *     // Required. The name of the project and its location that should own the process.
     *     parent: 'projects/my-project/locations/my-location',
     *     // A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "origin": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "origin": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Processes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Processes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Process>;
    create(
      params: Params$Resource$Projects$Locations$Processes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Processes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Processes$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Process>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/processes').replace(
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Process>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Process>(
          parameters
        );
      }
    }

    /**
     * Deletes the process with the specified name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.delete({
     *     // If set to true and the process is not found, the request succeeds but the server doesn't perform any actions.
     *     allowMissing: 'placeholder-value',
     *     // Required. The name of the process to delete.
     *     name: 'projects/my-project/locations/my-location/processes/my-processe',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Processes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Processes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Processes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processes$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processes$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets the details of the specified process.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.get({
     *     // Required. The name of the process to get.
     *     name: 'projects/my-project/locations/my-location/processes/my-processe',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "origin": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Processes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Processes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Process>;
    get(
      params: Params$Resource$Projects$Locations$Processes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processes$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Get
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Process>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Process>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Process>(
          parameters
        );
      }
    }

    /**
     * List processes in the given project and location. List order is descending by insertion time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.list({
     *     // The maximum number of processes to return. The service may return fewer than this value. If unspecified, at most 50 processes are returned. The maximum value is 100; values greater than 100 are cut to 100.
     *     pageSize: 'placeholder-value',
     *     // The page token received from a previous `ListProcesses` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project and its location that owns this collection of processes.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "processes": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Processes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Processes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Processes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processes$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$List
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/processes').replace(
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1ListProcessesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a process.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.patch({
     *     // If set to true and the process is not found, the request inserts it.
     *     allowMissing: 'placeholder-value',
     *     // Immutable. The resource name of the lineage process. Format: `projects/{project\}/locations/{location\}/processes/{process\}`. Can be specified or auto-assigned. {process\} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     *     name: 'projects/my-project/locations/my-location/processes/my-processe',
     *     // The list of fields to update. Currently not used. The whole message is updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "origin": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "origin": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Processes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Processes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Process>;
    patch(
      params: Params$Resource$Projects$Locations$Processes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Processes$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Processes$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Process>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Process>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Process>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Process>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Processes$Create
    extends StandardParameters {
    /**
     * Required. The name of the project and its location that should own the process.
     */
    parent?: string;
    /**
     * A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogLineageV1Process;
  }
  export interface Params$Resource$Projects$Locations$Processes$Delete
    extends StandardParameters {
    /**
     * If set to true and the process is not found, the request succeeds but the server doesn't perform any actions.
     */
    allowMissing?: boolean;
    /**
     * Required. The name of the process to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processes$Get
    extends StandardParameters {
    /**
     * Required. The name of the process to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processes$List
    extends StandardParameters {
    /**
     * The maximum number of processes to return. The service may return fewer than this value. If unspecified, at most 50 processes are returned. The maximum value is 100; values greater than 100 are cut to 100.
     */
    pageSize?: number;
    /**
     * The page token received from a previous `ListProcesses` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the project and its location that owns this collection of processes.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Processes$Patch
    extends StandardParameters {
    /**
     * If set to true and the process is not found, the request inserts it.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The resource name of the lineage process. Format: `projects/{project\}/locations/{location\}/processes/{process\}`. Can be specified or auto-assigned. {process\} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     */
    name?: string;
    /**
     * The list of fields to update. Currently not used. The whole message is updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogLineageV1Process;
  }

  export class Resource$Projects$Locations$Processes$Runs {
    context: APIRequestContext;
    lineageEvents: Resource$Projects$Locations$Processes$Runs$Lineageevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.lineageEvents =
        new Resource$Projects$Locations$Processes$Runs$Lineageevents(
          this.context
        );
    }

    /**
     * Creates a new run.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.runs.create({
     *     // Required. The name of the process that should own the run.
     *     parent: 'projects/my-project/locations/my-location/processes/my-processe',
     *     // A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "displayName": "my_displayName",
     *       //   "endTime": "my_endTime",
     *       //   "name": "my_name",
     *       //   "startTime": "my_startTime",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "displayName": "my_displayName",
     *   //   "endTime": "my_endTime",
     *   //   "name": "my_name",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Processes$Runs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Processes$Runs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Run>;
    create(
      params: Params$Resource$Projects$Locations$Processes$Runs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Processes$Runs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Processes$Runs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Runs$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Run>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Runs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$Runs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Run>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Run>(
          parameters
        );
      }
    }

    /**
     * Deletes the run with the specified name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.runs.delete({
     *     // If set to true and the run is not found, the request succeeds but the server doesn't perform any actions.
     *     allowMissing: 'placeholder-value',
     *     // Required. The name of the run to delete.
     *     name: 'projects/my-project/locations/my-location/processes/my-processe/runs/my-run',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Processes$Runs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Processes$Runs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Processes$Runs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processes$Runs$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processes$Runs$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Runs$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Runs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$Runs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets the details of the specified run.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.runs.get({
     *     // Required. The name of the run to get.
     *     name: 'projects/my-project/locations/my-location/processes/my-processe/runs/my-run',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "displayName": "my_displayName",
     *   //   "endTime": "my_endTime",
     *   //   "name": "my_name",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Processes$Runs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Processes$Runs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Run>;
    get(
      params: Params$Resource$Projects$Locations$Processes$Runs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processes$Runs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processes$Runs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Runs$Get
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Run>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Runs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$Runs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Run>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Run>(
          parameters
        );
      }
    }

    /**
     * Lists runs in the given project and location. List order is descending by `start_time`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.runs.list({
     *     // The maximum number of runs to return. The service may return fewer than this value. If unspecified, at most 50 runs are returned. The maximum value is 100; values greater than 100 are cut to 100.
     *     pageSize: 'placeholder-value',
     *     // The page token received from a previous `ListRuns` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of process that owns this collection of runs.
     *     parent: 'projects/my-project/locations/my-location/processes/my-processe',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "runs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Processes$Runs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Processes$Runs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Processes$Runs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processes$Runs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processes$Runs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Runs$List
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Runs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$Runs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1ListRunsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a run.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datalineage.projects.locations.processes.runs.patch({
     *     // If set to true and the run is not found, the request creates it.
     *     allowMissing: 'placeholder-value',
     *     // Immutable. The resource name of the run. Format: `projects/{project\}/locations/{location\}/processes/{process\}/runs/{run\}`. Can be specified or auto-assigned. {run\} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     *     name: 'projects/my-project/locations/my-location/processes/my-processe/runs/my-run',
     *     // The list of fields to update. Currently not used. The whole message is updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "displayName": "my_displayName",
     *       //   "endTime": "my_endTime",
     *       //   "name": "my_name",
     *       //   "startTime": "my_startTime",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "displayName": "my_displayName",
     *   //   "endTime": "my_endTime",
     *   //   "name": "my_name",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Processes$Runs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Processes$Runs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Run>;
    patch(
      params: Params$Resource$Projects$Locations$Processes$Runs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Processes$Runs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Processes$Runs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Runs$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1Run>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1Run>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Runs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processes$Runs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Run>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1Run>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Processes$Runs$Create
    extends StandardParameters {
    /**
     * Required. The name of the process that should own the run.
     */
    parent?: string;
    /**
     * A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogLineageV1Run;
  }
  export interface Params$Resource$Projects$Locations$Processes$Runs$Delete
    extends StandardParameters {
    /**
     * If set to true and the run is not found, the request succeeds but the server doesn't perform any actions.
     */
    allowMissing?: boolean;
    /**
     * Required. The name of the run to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processes$Runs$Get
    extends StandardParameters {
    /**
     * Required. The name of the run to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processes$Runs$List
    extends StandardParameters {
    /**
     * The maximum number of runs to return. The service may return fewer than this value. If unspecified, at most 50 runs are returned. The maximum value is 100; values greater than 100 are cut to 100.
     */
    pageSize?: number;
    /**
     * The page token received from a previous `ListRuns` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of process that owns this collection of runs.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Processes$Runs$Patch
    extends StandardParameters {
    /**
     * If set to true and the run is not found, the request creates it.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The resource name of the run. Format: `projects/{project\}/locations/{location\}/processes/{process\}/runs/{run\}`. Can be specified or auto-assigned. {run\} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     */
    name?: string;
    /**
     * The list of fields to update. Currently not used. The whole message is updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogLineageV1Run;
  }

  export class Resource$Projects$Locations$Processes$Runs$Lineageevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new lineage event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datalineage.projects.locations.processes.runs.lineageEvents.create({
     *       // Required. The name of the run that should own the lineage event.
     *       parent:
     *         'projects/my-project/locations/my-location/processes/my-processe/runs/my-run',
     *       // A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "endTime": "my_endTime",
     *         //   "links": [],
     *         //   "name": "my_name",
     *         //   "startTime": "my_startTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endTime": "my_endTime",
     *   //   "links": [],
     *   //   "name": "my_name",
     *   //   "startTime": "my_startTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>;
    create(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/lineageEvents').replace(
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>(
          parameters
        );
      }
    }

    /**
     * Deletes the lineage event with the specified name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datalineage.projects.locations.processes.runs.lineageEvents.delete({
     *       // If set to true and the lineage event is not found, the request succeeds but the server doesn't perform any actions.
     *       allowMissing: 'placeholder-value',
     *       // Required. The name of the lineage event to delete.
     *       name: 'projects/my-project/locations/my-location/processes/my-processe/runs/my-run/lineageEvents/my-lineageEvent',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets details of a specified lineage event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datalineage.projects.locations.processes.runs.lineageEvents.get({
     *       // Required. The name of the lineage event to get.
     *       name: 'projects/my-project/locations/my-location/processes/my-processe/runs/my-run/lineageEvents/my-lineageEvent',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endTime": "my_endTime",
     *   //   "links": [],
     *   //   "name": "my_name",
     *   //   "startTime": "my_startTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>;
    get(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Get
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1LineageEvent>(
          parameters
        );
      }
    }

    /**
     * Lists lineage events in the given project and location. The list order is not defined.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalineage.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datalineage = google.datalineage('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datalineage.projects.locations.processes.runs.lineageEvents.list({
     *       // The maximum number of lineage events to return. The service may return fewer events than this value. If unspecified, at most 50 events are returned. The maximum value is 100; values greater than 100 are cut to 100.
     *       pageSize: 'placeholder-value',
     *       // The page token received from a previous `ListLineageEvents` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The name of the run that owns the collection of lineage events to get.
     *       parent:
     *         'projects/my-project/locations/my-location/processes/my-processe/runs/my-run',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lineageEvents": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$List
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalineage.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/lineageEvents').replace(
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
        createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Create
    extends StandardParameters {
    /**
     * Required. The name of the run that should own the lineage event.
     */
    parent?: string;
    /**
     * A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogLineageV1LineageEvent;
  }
  export interface Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Delete
    extends StandardParameters {
    /**
     * If set to true and the lineage event is not found, the request succeeds but the server doesn't perform any actions.
     */
    allowMissing?: boolean;
    /**
     * Required. The name of the lineage event to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$Get
    extends StandardParameters {
    /**
     * Required. The name of the lineage event to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processes$Runs$Lineageevents$List
    extends StandardParameters {
    /**
     * The maximum number of lineage events to return. The service may return fewer events than this value. If unspecified, at most 50 events are returned. The maximum value is 100; values greater than 100 are cut to 100.
     */
    pageSize?: number;
    /**
     * The page token received from a previous `ListLineageEvents` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the run that owns the collection of lineage events to get.
     */
    parent?: string;
  }
}
