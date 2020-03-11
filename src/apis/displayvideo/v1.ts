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

export namespace displayvideo_v1 {
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
   * Display &amp; Video 360 API
   *
   * Display &amp; Video 360 API allows users to manage and create campaigns and reports.
   *
   * @example
   * const {google} = require('googleapis');
   * const displayvideo = google.displayvideo('v1');
   *
   * @namespace displayvideo
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Displayvideo
   */
  export class Displayvideo {
    context: APIRequestContext;
    media: Resource$Media;
    sdfdownloadtasks: Resource$Sdfdownloadtasks;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.media = new Resource$Media(this.context);
      this.sdfdownloadtasks = new Resource$Sdfdownloadtasks(this.context);
    }
  }

  /**
   * Request message for [SdfDownloadTaskService.CreateSdfDownloadTask].
   */
  export interface Schema$CreateSdfDownloadTaskRequest {
    /**
     * The ID of the advertiser to download SDF for.
     */
    advertiserId?: string | null;
    /**
     * Filters on entities by their entity IDs.
     */
    idFilter?: Schema$IdFilter;
    /**
     * Filters on Inventory Sources by their IDs.
     */
    inventorySourceFilter?: Schema$InventorySourceFilter;
    /**
     * Filters on selected file types. The entities in each file are filtered  by a chosen set of filter entities. The filter entities must be the same  type as, or a parent type of, the selected file types.
     */
    parentEntityFilter?: Schema$ParentEntityFilter;
    /**
     * The ID of the partner to download SDF for.
     */
    partnerId?: string | null;
    /**
     * Required. The SDF version of the downloaded file. If set to `SDF_VERSION_UNSPECIFIED`, this will default to the version specified by the advertiser or partner identified by `root_id`. An advertiser inherits its SDF version from its partner unless configured otherwise.
     */
    version?: string | null;
  }
  /**
   * Media resource.
   */
  export interface Schema$GoogleBytestreamMedia {
    /**
     * Name of the media resource.
     */
    resourceName?: string | null;
  }
  /**
   * A filtering option that filters entities by their entity IDs.
   */
  export interface Schema$IdFilter {
    /**
     * TrueView Ads to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    adGroupAdIds?: string[] | null;
    /**
     * TrueView Ad Groups to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    adGroupIds?: string[] | null;
    /**
     * Campaigns to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    campaignIds?: string[] | null;
    /**
     * Insertion Orders to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    insertionOrderIds?: string[] | null;
    /**
     * Line Items to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    lineItemIds?: string[] | null;
    /**
     * Media Products to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    mediaProductIds?: string[] | null;
  }
  /**
   * A filtering option for filtering on Inventory Source entities.
   */
  export interface Schema$InventorySourceFilter {
    /**
     * Inventory Sources to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. Leave empty to download all Inventory Sources for the selected Advertiser or Partner.
     */
    inventorySourceIds?: string[] | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A filtering option that filters on selected file types belonging to a chosen set of filter entities.
   */
  export interface Schema$ParentEntityFilter {
    /**
     * Required. File types that will be returned.
     */
    fileType?: string[] | null;
    /**
     * The IDs of the specified filter type. This is used to filter entities to fetch. If filter type is not `FILTER_TYPE_NONE`, at least one ID must be specified.
     */
    filterIds?: string[] | null;
    /**
     * Required. Filter type used to filter fetched entities.
     */
    filterType?: string | null;
  }
  /**
   * Type for the response returned by [SdfDownloadTaskService.CreateSdfDownloadTask].
   */
  export interface Schema$SdfDownloadTask {
    /**
     * A resource name to be used in media.download to Download the prepared files. Resource names have the format `download/sdfdownloadtasks/media/{media_id}`. `media_id` will be made available by the long running operation service once the task status is done.
     */
    resourceName?: string | null;
  }
  /**
   * Type for the metadata returned by [SdfDownloadTaskService.CreateSdfDownloadTask].
   */
  export interface Schema$SdfDownloadTaskMetadata {
    /**
     * The time when the operation was created.
     */
    createTime?: string | null;
    /**
     * The time when execution was completed.
     */
    endTime?: string | null;
    /**
     * The SDF version used to execute this download task.
     */
    version?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * displayvideo.media.download
     * @desc Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.`  **Note**: Download requests will not be successful without including `alt=media` query string.
     * @alias displayvideo.media.download
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resourceName Name of the media that is being downloaded.  See ReadRequest.resource_name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    download(
      params?: Params$Resource$Media$Download,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleBytestreamMedia>;
    download(
      params: Params$Resource$Media$Download,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleBytestreamMedia>,
      callback: BodyResponseCallback<Schema$GoogleBytestreamMedia>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      callback: BodyResponseCallback<Schema$GoogleBytestreamMedia>
    ): void;
    download(
      callback: BodyResponseCallback<Schema$GoogleBytestreamMedia>
    ): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Media$Download
        | BodyResponseCallback<Schema$GoogleBytestreamMedia>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleBytestreamMedia>,
      callback?: BodyResponseCallback<Schema$GoogleBytestreamMedia>
    ): void | GaxiosPromise<Schema$GoogleBytestreamMedia> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://displayvideo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/download/{+resourceName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleBytestreamMedia>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleBytestreamMedia>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Download extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the media that is being downloaded.  See ReadRequest.resource_name.
     */
    resourceName?: string;
  }

  export class Resource$Sdfdownloadtasks {
    context: APIRequestContext;
    operations: Resource$Sdfdownloadtasks$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Sdfdownloadtasks$Operations(this.context);
    }

    /**
     * displayvideo.sdfdownloadtasks.create
     * @desc Creates an SDF Download Task. Returns an Operation.  An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get.  Any errors can be found in the error.message. Note that error.details is expected to be empty.
     * @alias displayvideo.sdfdownloadtasks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().CreateSdfDownloadTaskRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Sdfdownloadtasks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Sdfdownloadtasks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Sdfdownloadtasks$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sdfdownloadtasks$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sdfdownloadtasks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sdfdownloadtasks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://displayvideo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/sdfdownloadtasks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Sdfdownloadtasks$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateSdfDownloadTaskRequest;
  }

  export class Resource$Sdfdownloadtasks$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * displayvideo.sdfdownloadtasks.operations.get
     * @desc Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.
     * @alias displayvideo.sdfdownloadtasks.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Sdfdownloadtasks$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Sdfdownloadtasks$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Sdfdownloadtasks$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sdfdownloadtasks$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sdfdownloadtasks$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sdfdownloadtasks$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://displayvideo.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Sdfdownloadtasks$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
}
