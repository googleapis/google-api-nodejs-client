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
  GaxiosResponseWithHTTP2,
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

export namespace chromewebstore_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Chrome Web Store API
   *
   * The Chrome Web Store API provides access to data about apps and extensions, as well as developer tools for managing them.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const chromewebstore = google.chromewebstore('v2');
   * ```
   */
  export class Chromewebstore {
    context: APIRequestContext;
    media: Resource$Media;
    publishers: Resource$Publishers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.media = new Resource$Media(this.context);
      this.publishers = new Resource$Publishers(this.context);
    }
  }

  /**
   * Info on the author of the review.
   */
  export interface Schema$AuthorInfo {
    /**
     * Display name for the author.
     */
    displayName?: string | null;
  }
  /**
   * Request message for CancelSubmission.
   */
  export interface Schema$CancelSubmissionRequest {}
  /**
   * Response message for `CancelSubmission`.
   */
  export interface Schema$CancelSubmissionResponse {}
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Deployment information for a specific release channel. Used in requests to update deployment parameters.
   */
  export interface Schema$DeployInfo {
    /**
     * Required. The current deploy percentage for the release channel (nonnegative number between 0 and 100).
     */
    deployPercentage?: number | null;
  }
  /**
   * Deployment information for a specific release channel
   */
  export interface Schema$DistributionChannel {
    /**
     * The extension version provided in the manifest of the uploaded package.
     */
    crxVersion?: string | null;
    /**
     * The current deploy percentage for the release channel (nonnegative number between 0 and 100).
     */
    deployPercentage?: number | null;
  }
  /**
   * Response message for FetchItemReviews.
   */
  export interface Schema$FetchItemReviewsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The list of reviews.
     */
    reviews?: Schema$Review[];
  }
  /**
   * Response message for `FetchItemStatus`.
   */
  export interface Schema$FetchItemStatusResponse {
    /**
     * Output only. The ID of the item.
     */
    itemId?: string | null;
    /**
     * Output only. The state of the last async upload for an item. Only set when there has been an async upload for the item in the past 24 hours.
     */
    lastAsyncUploadState?: string | null;
    /**
     * The name of the requested item.
     */
    name?: string | null;
    /**
     * The public key of the item, which may be generated by the store.
     */
    publicKey?: string | null;
    /**
     * Output only. Status of the current published revision of the item. Will be unset if the item is not published.
     */
    publishedItemRevisionStatus?: Schema$ItemRevisionStatus;
    /**
     * Status of the item revision submitted to be published. Will be unset if the item has not been submitted for publishing since the last successful publish.
     */
    submittedItemRevisionStatus?: Schema$ItemRevisionStatus;
    /**
     * If true, the item has been taken down for a policy violation. Check the developer dashboard for details.
     */
    takenDown?: boolean | null;
    /**
     * If true, the item has been warned for a policy violation and will be taken down if not resolved. Check the developer dashboard for details.
     */
    warned?: boolean | null;
  }
  /**
   * Details on the status of an item revision.
   */
  export interface Schema$ItemRevisionStatus {
    /**
     * Details on the package of the item
     */
    distributionChannels?: Schema$DistributionChannel[];
    /**
     * Output only. Current state of the item
     */
    state?: string | null;
  }
  /**
   * A single row of metrics and dimension values.
   */
  export interface Schema$MetricRow {
    /**
     * The date of the record.
     */
    date?: Schema$Date;
    /**
     * Dimension value columns for the row.
     */
    dimensionValues?: string[] | null;
    /**
     * Metric columns for the row.
     */
    metricValues?: Schema$MetricValue[];
  }
  /**
   * Represents the value of a single metric
   */
  export interface Schema$MetricValue {
    /**
     * The name of the metric
     */
    metric?: string | null;
    /**
     * The unique user count associated with the metric (if applicable).
     */
    uniqueUserCount?: string | null;
    /**
     * The value of the metric.
     */
    value?: string | null;
  }
  /**
   * Request message for PublishItem.
   */
  export interface Schema$PublishItemRequest {
    /**
     * Optional. When set to true the request will fail if there are any warnings during validation and the details will be included in the `error.details`. Otherwise warnings are treated as non-blocking and will be ignored for validation but will be included in the response for inspection. Defaults to `false` if unset.
     */
    blockOnWarnings?: boolean | null;
    /**
     * Optional. Additional deploy information including the desired initial percentage rollout. Defaults to the current value saved in the developer dashboard if unset.
     */
    deployInfos?: Schema$DeployInfo[];
    /**
     * Optional. Use this to control if the item is published immediately on approval or staged for publishing in the future. Defaults to `DEFAULT_PUBLISH` if unset.
     */
    publishType?: string | null;
    /**
     * Optional. Whether to attempt to skip item review. The API will validate if the item qualifies and return a validation error if the item requires review. Defaults to `false` if unset.
     */
    skipReview?: boolean | null;
  }
  /**
   * Response message for `PublishItem`.
   */
  export interface Schema$PublishItemResponse {
    /**
     * Output only. The ID of the item.
     */
    itemId?: string | null;
    /**
     * The name of the item that was submitted
     */
    name?: string | null;
    /**
     * Output only. The current state of the submission.
     */
    state?: string | null;
    /**
     * Output only. Non-blocking warnings encountered during the request.
     */
    warningInfo?: Schema$WarningsInfo;
  }
  /**
   * Response message for QueryItemMetrics.
   */
  export interface Schema$QueryItemMetricsResponse {
    /**
     * The metric rows.
     */
    metricRows?: Schema$MetricRow[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Singleton resource for the rating summary of an item.
   */
  export interface Schema$RatingSummary {
    /**
     * The number of five star ratings.
     */
    fiveStarRatingCount?: string | null;
    /**
     * The number of four star ratings.
     */
    fourStarRatingCount?: string | null;
    /**
     * Identifier. Item rating summary resource name Format: publishers/{publisher\}/items/{item\}/ratingSummary
     */
    name?: string | null;
    /**
     * The number of ratings with a non-empty review text.
     */
    nonEmptyReviewCount?: string | null;
    /**
     * The number of one star ratings.
     */
    oneStarRatingCount?: string | null;
    /**
     * The rating of the item as shown on the store page, expressed as a double between 1 and 5.
     */
    rating?: number | null;
    /**
     * The total number of ratings for the item.
     */
    ratingCount?: string | null;
    /**
     * The number of three star ratings.
     */
    threeStarRatingCount?: string | null;
    /**
     * The number of two star ratings.
     */
    twoStarRatingCount?: string | null;
  }
  /**
   * A review written by a user to rate an item in the Chrome Web Store.
   */
  export interface Schema$Review {
    /**
     * Info on the author of the review.
     */
    authorInfo?: Schema$AuthorInfo;
    /**
     * Content of the review.
     */
    comment?: string | null;
    /**
     * Output only. When the review was posted.
     */
    createTime?: string | null;
    /**
     * Output only. The item that this review evaluates. Format: publishers/{publisher\}/items/{item\}
     */
    item?: string | null;
    /**
     * Identifier. Review resource name. Format: reviews/{reviewId\}
     */
    name?: string | null;
    /**
     * Rating of the item, between 1 and 5.
     */
    rating?: number | null;
  }
  /**
   * Request message for RollbackItem.
   */
  export interface Schema$RollbackItemRequest {
    /**
     * Required. The new version to assign to the package being rolled back to. This effectively "rolls forward" the previous package by giving it a higher version number than the currently-published package. E.g. if the current published version is 1.1, the new version could be 1.1.1 or 1.2 but not 1.0.
     */
    newVersion?: string | null;
    /**
     * Required. The reason for the rollback that will be used for internal auditing and developer dashboard visibility.
     */
    rollbackReason?: string | null;
    /**
     * Required. The target previously published CRX version to roll back to. If unset, defaults to the last published CRX version.
     */
    targetCrxVersion?: string | null;
    /**
     * Optional. If set, validate and dry run the request but do not actually initiate the rollback
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response message for `RollbackItem`.
   */
  export interface Schema$RollbackItemResponse {}
  /**
   * Request message for SetPublishedDeployPercentage.
   */
  export interface Schema$SetPublishedDeployPercentageRequest {
    /**
     * Required. Unscaled percentage value for the publised revision (nonnegative number between 0 and 100). It must be larger than the existing target percentage.
     */
    deployPercentage?: number | null;
  }
  /**
   * Response message for `SetPublishedDeployPercentage`.
   */
  export interface Schema$SetPublishedDeployPercentageResponse {}
  /**
   * Request message for UploadItemPackage.
   */
  export interface Schema$UploadItemPackageRequest {}
  /**
   * Response message for `UploadItemPackage`.
   */
  export interface Schema$UploadItemPackageResponse {
    /**
     * The extension version provided in the manifest of the uploaded package. This will not be set if the upload is still in progress (`upload_state` is `UPLOAD_IN_PROGRESS`).
     */
    crxVersion?: string | null;
    /**
     * Output only. The ID of the item the package was uploaded to.
     */
    itemId?: string | null;
    /**
     * The name of the item the package was uploaded to.
     */
    name?: string | null;
    /**
     * Output only. The state of the upload. If `upload_state` is `UPLOAD_IN_PROGRESS`, you can poll for updates using the fetchStatus method.
     */
    uploadState?: string | null;
  }
  /**
   * Represents a single warning encountered during the request.
   */
  export interface Schema$Warning {
    /**
     * A description of the warning. Developers should use this message to understand the warning and take appropriate action to resolve the issue.
     */
    description?: string | null;
    /**
     * The reason for the warning. This is a constant value that identifies the proximate cause of the warning.
     */
    reason?: string | null;
  }
  /**
   * Message containing details on warnings encountered during PublishItem.
   */
  export interface Schema$WarningsInfo {
    /**
     * All warnings encountered during the request.
     */
    warnings?: Schema$Warning[];
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Upload a new package to an existing item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chromewebstore'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.media.upload({
     *     // Required. Name of the item to upload the new package to in the form `publishers/{publisherId\}/items/{itemId\}`
     *     name: 'publishers/my-publisher/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "crxVersion": "my_crxVersion",
     *   //   "itemId": "my_itemId",
     *   //   "name": "my_name",
     *   //   "uploadState": "my_uploadState"
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
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UploadItemPackageResponse>>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options:
        MethodOptions | BodyResponseCallback<Schema$UploadItemPackageResponse>,
      callback: BodyResponseCallback<Schema$UploadItemPackageResponse>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$UploadItemPackageResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$UploadItemPackageResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$UploadItemPackageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadItemPackageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadItemPackageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UploadItemPackageResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:upload').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/v2/{+name}:upload').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadItemPackageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadItemPackageResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Required. Name of the item to upload the new package to in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadItemPackageRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Publishers {
    context: APIRequestContext;
    items: Resource$Publishers$Items;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.items = new Resource$Publishers$Items(this.context);
    }
  }

  export class Resource$Publishers$Items {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancel the current active submission of an item if present. This can be used to cancel the review of a pending submission.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chromewebstore'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.cancelSubmission({
     *     // Required. Name of the item to cancel the submission of in the form `publishers/{publisherId\}/items/{itemId\}`
     *     name: 'publishers/my-publisher/items/my-item',
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
    cancelSubmission(
      params: Params$Resource$Publishers$Items$Cancelsubmission,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancelSubmission(
      params?: Params$Resource$Publishers$Items$Cancelsubmission,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CancelSubmissionResponse>>;
    cancelSubmission(
      params: Params$Resource$Publishers$Items$Cancelsubmission,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancelSubmission(
      params: Params$Resource$Publishers$Items$Cancelsubmission,
      options:
        MethodOptions | BodyResponseCallback<Schema$CancelSubmissionResponse>,
      callback: BodyResponseCallback<Schema$CancelSubmissionResponse>
    ): void;
    cancelSubmission(
      params: Params$Resource$Publishers$Items$Cancelsubmission,
      callback: BodyResponseCallback<Schema$CancelSubmissionResponse>
    ): void;
    cancelSubmission(
      callback: BodyResponseCallback<Schema$CancelSubmissionResponse>
    ): void;
    cancelSubmission(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Cancelsubmission
        | BodyResponseCallback<Schema$CancelSubmissionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CancelSubmissionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CancelSubmissionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CancelSubmissionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Cancelsubmission;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Cancelsubmission;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:cancelSubmission').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CancelSubmissionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CancelSubmissionResponse>(parameters);
      }
    }

    /**
     * Fetch user reviews for an item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chromewebstore',
     *       'https://www.googleapis.com/auth/chromewebstore.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.fetchReviews({
     *     // Optional. A filter to apply to the reviews. Only equality comparison on rating is supported, e.g. `rating = 5`.
     *     filter: 'placeholder-value',
     *     // Required. The item resource name whose reviews are being fetched. Format: publishers/{publisher_id\}/items/{item_id\}
     *     name: 'publishers/my-publisher/items/my-item',
     *     // Optional. An optional comma-separated list of fields by which to sort the results. The default sort order is ascending (`asc`). Supported fields are: - `rating`: Supported orders are `asc` (default) and `desc`. - `create_time`: Only `desc` (most recent first) is supported; `desc` must be explicitly specified since the default is `asc`. Example: `rating desc`, `create_time desc`, or `rating desc, create_time desc`.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of reviews to return. The service may return fewer than this value. If unspecified, at most 50 reviews will be returned. The maximum value is 200; values above 200 will be coerced to 200.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `FetchItemReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchItemReviews` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reviews": []
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
    fetchReviews(
      params: Params$Resource$Publishers$Items$Fetchreviews,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchReviews(
      params?: Params$Resource$Publishers$Items$Fetchreviews,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchItemReviewsResponse>>;
    fetchReviews(
      params: Params$Resource$Publishers$Items$Fetchreviews,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchReviews(
      params: Params$Resource$Publishers$Items$Fetchreviews,
      options:
        MethodOptions | BodyResponseCallback<Schema$FetchItemReviewsResponse>,
      callback: BodyResponseCallback<Schema$FetchItemReviewsResponse>
    ): void;
    fetchReviews(
      params: Params$Resource$Publishers$Items$Fetchreviews,
      callback: BodyResponseCallback<Schema$FetchItemReviewsResponse>
    ): void;
    fetchReviews(
      callback: BodyResponseCallback<Schema$FetchItemReviewsResponse>
    ): void;
    fetchReviews(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Fetchreviews
        | BodyResponseCallback<Schema$FetchItemReviewsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchItemReviewsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchItemReviewsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchItemReviewsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Fetchreviews;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Fetchreviews;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:fetchReviews').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchItemReviewsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchItemReviewsResponse>(parameters);
      }
    }

    /**
     * Fetch the status of an item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chromewebstore',
     *       'https://www.googleapis.com/auth/chromewebstore.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.fetchStatus({
     *     // Required. Name of the item to retrieve the status of in the form `publishers/{publisherId\}/items/{itemId\}`
     *     name: 'publishers/my-publisher/items/my-item',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "itemId": "my_itemId",
     *   //   "lastAsyncUploadState": "my_lastAsyncUploadState",
     *   //   "name": "my_name",
     *   //   "publicKey": "my_publicKey",
     *   //   "publishedItemRevisionStatus": {},
     *   //   "submittedItemRevisionStatus": {},
     *   //   "takenDown": false,
     *   //   "warned": false
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
    fetchStatus(
      params: Params$Resource$Publishers$Items$Fetchstatus,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchStatus(
      params?: Params$Resource$Publishers$Items$Fetchstatus,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchItemStatusResponse>>;
    fetchStatus(
      params: Params$Resource$Publishers$Items$Fetchstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchStatus(
      params: Params$Resource$Publishers$Items$Fetchstatus,
      options:
        MethodOptions | BodyResponseCallback<Schema$FetchItemStatusResponse>,
      callback: BodyResponseCallback<Schema$FetchItemStatusResponse>
    ): void;
    fetchStatus(
      params: Params$Resource$Publishers$Items$Fetchstatus,
      callback: BodyResponseCallback<Schema$FetchItemStatusResponse>
    ): void;
    fetchStatus(
      callback: BodyResponseCallback<Schema$FetchItemStatusResponse>
    ): void;
    fetchStatus(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Fetchstatus
        | BodyResponseCallback<Schema$FetchItemStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchItemStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchItemStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchItemStatusResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Fetchstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Fetchstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:fetchStatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchItemStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchItemStatusResponse>(parameters);
      }
    }

    /**
     * Gets the RatingSummary for the publishers item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chromewebstore',
     *       'https://www.googleapis.com/auth/chromewebstore.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.getRatingSummary({
     *     // Required. The name of the rating summary to retrieve. Format: publishers/{publisher\}/items/{item\}/ratingSummary
     *     name: 'publishers/my-publisher/items/my-item/ratingSummary',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fiveStarRatingCount": "my_fiveStarRatingCount",
     *   //   "fourStarRatingCount": "my_fourStarRatingCount",
     *   //   "name": "my_name",
     *   //   "nonEmptyReviewCount": "my_nonEmptyReviewCount",
     *   //   "oneStarRatingCount": "my_oneStarRatingCount",
     *   //   "rating": {},
     *   //   "ratingCount": "my_ratingCount",
     *   //   "threeStarRatingCount": "my_threeStarRatingCount",
     *   //   "twoStarRatingCount": "my_twoStarRatingCount"
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
    getRatingSummary(
      params: Params$Resource$Publishers$Items$Getratingsummary,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRatingSummary(
      params?: Params$Resource$Publishers$Items$Getratingsummary,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RatingSummary>>;
    getRatingSummary(
      params: Params$Resource$Publishers$Items$Getratingsummary,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRatingSummary(
      params: Params$Resource$Publishers$Items$Getratingsummary,
      options: MethodOptions | BodyResponseCallback<Schema$RatingSummary>,
      callback: BodyResponseCallback<Schema$RatingSummary>
    ): void;
    getRatingSummary(
      params: Params$Resource$Publishers$Items$Getratingsummary,
      callback: BodyResponseCallback<Schema$RatingSummary>
    ): void;
    getRatingSummary(
      callback: BodyResponseCallback<Schema$RatingSummary>
    ): void;
    getRatingSummary(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Getratingsummary
        | BodyResponseCallback<Schema$RatingSummary>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RatingSummary>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RatingSummary>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RatingSummary>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Getratingsummary;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Getratingsummary;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RatingSummary>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RatingSummary>(parameters);
      }
    }

    /**
     * Submit the item to be published in the store. The item will be submitted for review unless `skip_review` is set to true, or the item is staged from a previous submission with `publish_type` set to `STAGED_PUBLISH`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chromewebstore'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.publish({
     *     // Required. Name of the item in the form `publishers/{publisherId\}/items/{itemId\}`
     *     name: 'publishers/my-publisher/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "blockOnWarnings": false,
     *       //   "deployInfos": [],
     *       //   "publishType": "my_publishType",
     *       //   "skipReview": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "itemId": "my_itemId",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "warningInfo": {}
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
    publish(
      params: Params$Resource$Publishers$Items$Publish,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    publish(
      params?: Params$Resource$Publishers$Items$Publish,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PublishItemResponse>>;
    publish(
      params: Params$Resource$Publishers$Items$Publish,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    publish(
      params: Params$Resource$Publishers$Items$Publish,
      options: MethodOptions | BodyResponseCallback<Schema$PublishItemResponse>,
      callback: BodyResponseCallback<Schema$PublishItemResponse>
    ): void;
    publish(
      params: Params$Resource$Publishers$Items$Publish,
      callback: BodyResponseCallback<Schema$PublishItemResponse>
    ): void;
    publish(callback: BodyResponseCallback<Schema$PublishItemResponse>): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Publish
        | BodyResponseCallback<Schema$PublishItemResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PublishItemResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PublishItemResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PublishItemResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Publish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:publish').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PublishItemResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PublishItemResponse>(parameters);
      }
    }

    /**
     * Query the metrics for an item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chromewebstore',
     *       'https://www.googleapis.com/auth/chromewebstore.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.queryMetrics({
     *     // Optional. Dimensions to slice the metrics by. At most one dimension can be specified. **Supported dimensions:** - os: The operating system of the user. - app-version: The version of the item. - country: The country of the user. - install-source: The source of the install. - install-type: The type of install (from webstore, inline, or other). - language: The language of the user. - enabled: If the item is enabled or disabled. - utm-campaign: The UTM campaign of the user. - utm-content: The UTM content of the user. - utm-medium: The UTM medium of the user. - utm-source: The UTM source of the user. - utm-term: The UTM term of the user.
     *     dimensions: 'placeholder-value',
     *     // Required. The metrics to query the metric set for. **Supported metrics:** - installs: Count of item installs. - installs-7d: Count of item installs in the last 7 days. - uninstalls: Count of item uninstalls. - users: Count of daily active users of the item. - users-7d: Count of 7-day active users of the item. - impressions: Count of item impressions across the entire store front. - page-views: Count of individual views of the item's detail page.
     *     metrics: 'placeholder-value',
     *     // Required. The name of the item to query the metrics for. Format: publishers/{publisher\}/items/{item\}
     *     name: 'publishers/my-publisher/items/my-item',
     *     // Optional. The maximum number of rows to return. If unspecified, at most 100 rows will be returned. The maximum value is 1000; Values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'timeSpec.firstDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'timeSpec.firstDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'timeSpec.firstDate.year': 'placeholder-value',
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'timeSpec.lastDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'timeSpec.lastDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'timeSpec.lastDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "metricRows": [],
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
    queryMetrics(
      params: Params$Resource$Publishers$Items$Querymetrics,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    queryMetrics(
      params?: Params$Resource$Publishers$Items$Querymetrics,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$QueryItemMetricsResponse>>;
    queryMetrics(
      params: Params$Resource$Publishers$Items$Querymetrics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryMetrics(
      params: Params$Resource$Publishers$Items$Querymetrics,
      options:
        MethodOptions | BodyResponseCallback<Schema$QueryItemMetricsResponse>,
      callback: BodyResponseCallback<Schema$QueryItemMetricsResponse>
    ): void;
    queryMetrics(
      params: Params$Resource$Publishers$Items$Querymetrics,
      callback: BodyResponseCallback<Schema$QueryItemMetricsResponse>
    ): void;
    queryMetrics(
      callback: BodyResponseCallback<Schema$QueryItemMetricsResponse>
    ): void;
    queryMetrics(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Querymetrics
        | BodyResponseCallback<Schema$QueryItemMetricsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryItemMetricsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryItemMetricsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$QueryItemMetricsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Querymetrics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Querymetrics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:queryMetrics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$QueryItemMetricsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryItemMetricsResponse>(parameters);
      }
    }

    /**
     * Rolls back an item's published CRX package to a specified previously published CRX package and publishes it to all users.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chromewebstore'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.rollback({
     *     // Required. Name of the item to rollback in the form `publishers/{publisherId\}/items/{itemId\}`
     *     name: 'publishers/my-publisher/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "newVersion": "my_newVersion",
     *       //   "rollbackReason": "my_rollbackReason",
     *       //   "targetCrxVersion": "my_targetCrxVersion",
     *       //   "validateOnly": false
     *       // }
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
    rollback(
      params: Params$Resource$Publishers$Items$Rollback,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    rollback(
      params?: Params$Resource$Publishers$Items$Rollback,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RollbackItemResponse>>;
    rollback(
      params: Params$Resource$Publishers$Items$Rollback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollback(
      params: Params$Resource$Publishers$Items$Rollback,
      options:
        MethodOptions | BodyResponseCallback<Schema$RollbackItemResponse>,
      callback: BodyResponseCallback<Schema$RollbackItemResponse>
    ): void;
    rollback(
      params: Params$Resource$Publishers$Items$Rollback,
      callback: BodyResponseCallback<Schema$RollbackItemResponse>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$RollbackItemResponse>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Rollback
        | BodyResponseCallback<Schema$RollbackItemResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RollbackItemResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RollbackItemResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RollbackItemResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:rollback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RollbackItemResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RollbackItemResponse>(parameters);
      }
    }

    /**
     * Set a higher target deploy percentage for the item's published revision. This will be updated without the item being submitted for review. This is only available to items with over 10,000 seven-day active users.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chromewebstore'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await chromewebstore.publishers.items.setPublishedDeployPercentage({
     *       // Required. Name of the item to update the published revision of in the form `publishers/{publisherId\}/items/{itemId\}`
     *       name: 'publishers/my-publisher/items/my-item',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "deployPercentage": 0
     *         // }
     *       },
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
    setPublishedDeployPercentage(
      params: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setPublishedDeployPercentage(
      params?: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$SetPublishedDeployPercentageResponse>
    >;
    setPublishedDeployPercentage(
      params: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setPublishedDeployPercentage(
      params: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>,
      callback: BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
    ): void;
    setPublishedDeployPercentage(
      params: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      callback: BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
    ): void;
    setPublishedDeployPercentage(
      callback: BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
    ): void;
    setPublishedDeployPercentage(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Setpublisheddeploypercentage
        | BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$SetPublishedDeployPercentageResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Setpublisheddeploypercentage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Publishers$Items$Setpublisheddeploypercentage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:setPublishedDeployPercentage').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SetPublishedDeployPercentageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SetPublishedDeployPercentageResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Publishers$Items$Cancelsubmission extends StandardParameters {
    /**
     * Required. Name of the item to cancel the submission of in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelSubmissionRequest;
  }
  export interface Params$Resource$Publishers$Items$Fetchreviews extends StandardParameters {
    /**
     * Optional. A filter to apply to the reviews. Only equality comparison on rating is supported, e.g. `rating = 5`.
     */
    filter?: string;
    /**
     * Required. The item resource name whose reviews are being fetched. Format: publishers/{publisher_id\}/items/{item_id\}
     */
    name?: string;
    /**
     * Optional. An optional comma-separated list of fields by which to sort the results. The default sort order is ascending (`asc`). Supported fields are: - `rating`: Supported orders are `asc` (default) and `desc`. - `create_time`: Only `desc` (most recent first) is supported; `desc` must be explicitly specified since the default is `asc`. Example: `rating desc`, `create_time desc`, or `rating desc, create_time desc`.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of reviews to return. The service may return fewer than this value. If unspecified, at most 50 reviews will be returned. The maximum value is 200; values above 200 will be coerced to 200.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `FetchItemReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchItemReviews` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Publishers$Items$Fetchstatus extends StandardParameters {
    /**
     * Required. Name of the item to retrieve the status of in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Publishers$Items$Getratingsummary extends StandardParameters {
    /**
     * Required. The name of the rating summary to retrieve. Format: publishers/{publisher\}/items/{item\}/ratingSummary
     */
    name?: string;
  }
  export interface Params$Resource$Publishers$Items$Publish extends StandardParameters {
    /**
     * Required. Name of the item in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PublishItemRequest;
  }
  export interface Params$Resource$Publishers$Items$Querymetrics extends StandardParameters {
    /**
     * Optional. Dimensions to slice the metrics by. At most one dimension can be specified. **Supported dimensions:** - os: The operating system of the user. - app-version: The version of the item. - country: The country of the user. - install-source: The source of the install. - install-type: The type of install (from webstore, inline, or other). - language: The language of the user. - enabled: If the item is enabled or disabled. - utm-campaign: The UTM campaign of the user. - utm-content: The UTM content of the user. - utm-medium: The UTM medium of the user. - utm-source: The UTM source of the user. - utm-term: The UTM term of the user.
     */
    dimensions?: string[];
    /**
     * Required. The metrics to query the metric set for. **Supported metrics:** - installs: Count of item installs. - installs-7d: Count of item installs in the last 7 days. - uninstalls: Count of item uninstalls. - users: Count of daily active users of the item. - users-7d: Count of 7-day active users of the item. - impressions: Count of item impressions across the entire store front. - page-views: Count of individual views of the item's detail page.
     */
    metrics?: string[];
    /**
     * Required. The name of the item to query the metrics for. Format: publishers/{publisher\}/items/{item\}
     */
    name?: string;
    /**
     * Optional. The maximum number of rows to return. If unspecified, at most 100 rows will be returned. The maximum value is 1000; Values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'timeSpec.firstDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'timeSpec.firstDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'timeSpec.firstDate.year'?: number;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'timeSpec.lastDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'timeSpec.lastDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'timeSpec.lastDate.year'?: number;
  }
  export interface Params$Resource$Publishers$Items$Rollback extends StandardParameters {
    /**
     * Required. Name of the item to rollback in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackItemRequest;
  }
  export interface Params$Resource$Publishers$Items$Setpublisheddeploypercentage extends StandardParameters {
    /**
     * Required. Name of the item to update the published revision of in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetPublishedDeployPercentageRequest;
  }
}
