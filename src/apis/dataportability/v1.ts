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

export namespace dataportability_v1 {
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
   * Data Portability API
   *
   * The Data Portability API lets you build applications that request authorization from a user to move a copy of data from Google services into your application. This enables data portability and facilitates switching services.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const dataportability = google.dataportability('v1');
   * ```
   */
  export class Dataportability {
    context: APIRequestContext;
    accessType: Resource$Accesstype;
    archiveJobs: Resource$Archivejobs;
    authorization: Resource$Authorization;
    portabilityArchive: Resource$Portabilityarchive;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accessType = new Resource$Accesstype(this.context);
      this.archiveJobs = new Resource$Archivejobs(this.context);
      this.authorization = new Resource$Authorization(this.context);
      this.portabilityArchive = new Resource$Portabilityarchive(this.context);
    }
  }

  /**
   * Request to cancel a Portability Archive job.
   */
  export interface Schema$CancelPortabilityArchiveRequest {}
  /**
   * Response to canceling a Data Portability Archive job.
   */
  export interface Schema$CancelPortabilityArchiveResponse {}
  /**
   * Request to check the token's access type. All required information is derived from the attached OAuth token.
   */
  export interface Schema$CheckAccessTypeRequest {}
  /**
   * Response to checking the token's access type.
   */
  export interface Schema$CheckAccessTypeResponse {
    /**
     * Jobs initiated with this token will be one-time if any requested resources have one-time access.
     */
    oneTimeResources?: string[] | null;
    /**
     * Jobs initiated with this token will be time-based if all requested resources have time-based access.
     */
    timeBasedResources?: string[] | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Request to kick off an Archive job.
   */
  export interface Schema$InitiatePortabilityArchiveRequest {
    /**
     * Optional. The timestamp that represents the end point for the data you are exporting. If the end_time is not specified in the InitiatePortabilityArchiveRequest, this field is set to the latest available data.
     */
    endTime?: string | null;
    /**
     * The resources from which you're exporting data. These values have a 1:1 correspondence with the OAuth scopes.
     */
    resources?: string[] | null;
    /**
     * Optional. The timestamp that represents the starting point for the data you are exporting. If the start_time is not specified in the InitiatePortabilityArchiveRequest, the field is set to the earliest available data.
     */
    startTime?: string | null;
  }
  /**
   * Response from initiating an Archive job.
   */
  export interface Schema$InitiatePortabilityArchiveResponse {
    /**
     * The access type of the Archive job initiated by the API.
     */
    accessType?: string | null;
    /**
     * The archive job ID that is initiated in the API. This can be used to get the state of the job.
     */
    archiveJobId?: string | null;
  }
  /**
   * Resource that contains the state of an Archive job.
   */
  export interface Schema$PortabilityArchiveState {
    /**
     * The timestamp that represents the end point for the data you are exporting. If the end_time value is set in the InitiatePortabilityArchiveRequest, this field is set to that value. If end_time is not set, this value is set to the time the export was requested.
     */
    exportTime?: string | null;
    /**
     * The resource name of ArchiveJob's PortabilityArchiveState singleton. The format is: archiveJobs/{archive_job\}/portabilityArchiveState. archive_job is the job ID provided in the request.
     */
    name?: string | null;
    /**
     * The timestamp that represents the starting point for the data you are exporting. This field is set only if the start_time field is specified in the InitiatePortabilityArchiveRequest.
     */
    startTime?: string | null;
    /**
     * Resource that represents the state of the Archive job.
     */
    state?: string | null;
    /**
     * If the state is complete, this method returns the signed URLs of the objects in the Cloud Storage bucket.
     */
    urls?: string[] | null;
  }
  /**
   * Request to reset exhausted OAuth scopes.
   */
  export interface Schema$ResetAuthorizationRequest {}
  /**
   * Request to retry a failed Portability Archive job.
   */
  export interface Schema$RetryPortabilityArchiveRequest {}
  /**
   * Response from retrying a Portability Archive.
   */
  export interface Schema$RetryPortabilityArchiveResponse {
    /**
     * The archive job ID that is initiated by the retry endpoint. This can be used to get the state of the new job.
     */
    archiveJobId?: string | null;
  }

  export class Resource$Accesstype {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the access type of the token.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataportability.googleapis.com
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
     * const dataportability = google.dataportability('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/dataportability.alerts.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.autofill',
     *       'https://www.googleapis.com/auth/dataportability.chrome.bookmarks',
     *       'https://www.googleapis.com/auth/dataportability.chrome.dictionary',
     *       'https://www.googleapis.com/auth/dataportability.chrome.extensions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.history',
     *       'https://www.googleapis.com/auth/dataportability.chrome.reading_list',
     *       'https://www.googleapis.com/auth/dataportability.chrome.settings',
     *       'https://www.googleapis.com/auth/dataportability.discover.follows',
     *       'https://www.googleapis.com/auth/dataportability.discover.likes',
     *       'https://www.googleapis.com/auth/dataportability.discover.not_interested',
     *       'https://www.googleapis.com/auth/dataportability.maps.aliased_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_routes',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_settings',
     *       'https://www.googleapis.com/auth/dataportability.maps.ev_profile',
     *       'https://www.googleapis.com/auth/dataportability.maps.factual_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.offering_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.photos_videos',
     *       'https://www.googleapis.com/auth/dataportability.maps.questions_answers',
     *       'https://www.googleapis.com/auth/dataportability.maps.reviews',
     *       'https://www.googleapis.com/auth/dataportability.maps.starred_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.vehicle_profile',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.maps',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.myadcenter',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.play',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.search',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.shopping',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.youtube',
     *       'https://www.googleapis.com/auth/dataportability.mymaps.maps',
     *       'https://www.googleapis.com/auth/dataportability.order_reserve.purchases_reservations',
     *       'https://www.googleapis.com/auth/dataportability.play.devices',
     *       'https://www.googleapis.com/auth/dataportability.play.grouping',
     *       'https://www.googleapis.com/auth/dataportability.play.installs',
     *       'https://www.googleapis.com/auth/dataportability.play.library',
     *       'https://www.googleapis.com/auth/dataportability.play.playpoints',
     *       'https://www.googleapis.com/auth/dataportability.play.promotions',
     *       'https://www.googleapis.com/auth/dataportability.play.purchases',
     *       'https://www.googleapis.com/auth/dataportability.play.redemptions',
     *       'https://www.googleapis.com/auth/dataportability.play.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.play.usersettings',
     *       'https://www.googleapis.com/auth/dataportability.saved.collections',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.comments',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.reviews_and_stars',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.streaming_video_providers',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.thumbs',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.watched',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.settings',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.shopping.addresses',
     *       'https://www.googleapis.com/auth/dataportability.shopping.reviews',
     *       'https://www.googleapis.com/auth/dataportability.streetview.imagery',
     *       'https://www.googleapis.com/auth/dataportability.youtube.channel',
     *       'https://www.googleapis.com/auth/dataportability.youtube.clips',
     *       'https://www.googleapis.com/auth/dataportability.youtube.comments',
     *       'https://www.googleapis.com/auth/dataportability.youtube.live_chat',
     *       'https://www.googleapis.com/auth/dataportability.youtube.music',
     *       'https://www.googleapis.com/auth/dataportability.youtube.playable',
     *       'https://www.googleapis.com/auth/dataportability.youtube.posts',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.shopping',
     *       'https://www.googleapis.com/auth/dataportability.youtube.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_videos',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataportability.accessType.check({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "oneTimeResources": [],
     *   //   "timeBasedResources": []
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
    check(
      params: Params$Resource$Accesstype$Check,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    check(
      params?: Params$Resource$Accesstype$Check,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckAccessTypeResponse>>;
    check(
      params: Params$Resource$Accesstype$Check,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    check(
      params: Params$Resource$Accesstype$Check,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckAccessTypeResponse>,
      callback: BodyResponseCallback<Schema$CheckAccessTypeResponse>
    ): void;
    check(
      params: Params$Resource$Accesstype$Check,
      callback: BodyResponseCallback<Schema$CheckAccessTypeResponse>
    ): void;
    check(callback: BodyResponseCallback<Schema$CheckAccessTypeResponse>): void;
    check(
      paramsOrCallback?:
        | Params$Resource$Accesstype$Check
        | BodyResponseCallback<Schema$CheckAccessTypeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckAccessTypeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckAccessTypeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckAccessTypeResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accesstype$Check;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accesstype$Check;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dataportability.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/accessType:check').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckAccessTypeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckAccessTypeResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accesstype$Check extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckAccessTypeRequest;
  }

  export class Resource$Archivejobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels a Portability Archive job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataportability.googleapis.com
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
     * const dataportability = google.dataportability('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/dataportability.alerts.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.autofill',
     *       'https://www.googleapis.com/auth/dataportability.chrome.bookmarks',
     *       'https://www.googleapis.com/auth/dataportability.chrome.dictionary',
     *       'https://www.googleapis.com/auth/dataportability.chrome.extensions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.history',
     *       'https://www.googleapis.com/auth/dataportability.chrome.reading_list',
     *       'https://www.googleapis.com/auth/dataportability.chrome.settings',
     *       'https://www.googleapis.com/auth/dataportability.discover.follows',
     *       'https://www.googleapis.com/auth/dataportability.discover.likes',
     *       'https://www.googleapis.com/auth/dataportability.discover.not_interested',
     *       'https://www.googleapis.com/auth/dataportability.maps.aliased_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_routes',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_settings',
     *       'https://www.googleapis.com/auth/dataportability.maps.ev_profile',
     *       'https://www.googleapis.com/auth/dataportability.maps.factual_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.offering_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.photos_videos',
     *       'https://www.googleapis.com/auth/dataportability.maps.questions_answers',
     *       'https://www.googleapis.com/auth/dataportability.maps.reviews',
     *       'https://www.googleapis.com/auth/dataportability.maps.starred_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.vehicle_profile',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.maps',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.myadcenter',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.play',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.search',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.shopping',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.youtube',
     *       'https://www.googleapis.com/auth/dataportability.mymaps.maps',
     *       'https://www.googleapis.com/auth/dataportability.order_reserve.purchases_reservations',
     *       'https://www.googleapis.com/auth/dataportability.play.devices',
     *       'https://www.googleapis.com/auth/dataportability.play.grouping',
     *       'https://www.googleapis.com/auth/dataportability.play.installs',
     *       'https://www.googleapis.com/auth/dataportability.play.library',
     *       'https://www.googleapis.com/auth/dataportability.play.playpoints',
     *       'https://www.googleapis.com/auth/dataportability.play.promotions',
     *       'https://www.googleapis.com/auth/dataportability.play.purchases',
     *       'https://www.googleapis.com/auth/dataportability.play.redemptions',
     *       'https://www.googleapis.com/auth/dataportability.play.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.play.usersettings',
     *       'https://www.googleapis.com/auth/dataportability.saved.collections',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.comments',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.reviews_and_stars',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.streaming_video_providers',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.thumbs',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.watched',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.settings',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.shopping.addresses',
     *       'https://www.googleapis.com/auth/dataportability.shopping.reviews',
     *       'https://www.googleapis.com/auth/dataportability.streetview.imagery',
     *       'https://www.googleapis.com/auth/dataportability.youtube.channel',
     *       'https://www.googleapis.com/auth/dataportability.youtube.clips',
     *       'https://www.googleapis.com/auth/dataportability.youtube.comments',
     *       'https://www.googleapis.com/auth/dataportability.youtube.live_chat',
     *       'https://www.googleapis.com/auth/dataportability.youtube.music',
     *       'https://www.googleapis.com/auth/dataportability.youtube.playable',
     *       'https://www.googleapis.com/auth/dataportability.youtube.posts',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.shopping',
     *       'https://www.googleapis.com/auth/dataportability.youtube.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_videos',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataportability.archiveJobs.cancel({
     *     // Required. The Archive job ID you're canceling. This is returned by the InitiatePortabilityArchive response. The format is: archiveJobs/{archive_job\}. Canceling is only executed if the job is in progress.
     *     name: 'archiveJobs/my-archiveJob',
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
      params: Params$Resource$Archivejobs$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Archivejobs$Cancel,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$CancelPortabilityArchiveResponse>
    >;
    cancel(
      params: Params$Resource$Archivejobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Archivejobs$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CancelPortabilityArchiveResponse>,
      callback: BodyResponseCallback<Schema$CancelPortabilityArchiveResponse>
    ): void;
    cancel(
      params: Params$Resource$Archivejobs$Cancel,
      callback: BodyResponseCallback<Schema$CancelPortabilityArchiveResponse>
    ): void;
    cancel(
      callback: BodyResponseCallback<Schema$CancelPortabilityArchiveResponse>
    ): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Archivejobs$Cancel
        | BodyResponseCallback<Schema$CancelPortabilityArchiveResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CancelPortabilityArchiveResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CancelPortabilityArchiveResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$CancelPortabilityArchiveResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Archivejobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Archivejobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dataportability.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CancelPortabilityArchiveResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CancelPortabilityArchiveResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves the state of an Archive job for the Portability API.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataportability.googleapis.com
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
     * const dataportability = google.dataportability('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/dataportability.alerts.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.autofill',
     *       'https://www.googleapis.com/auth/dataportability.chrome.bookmarks',
     *       'https://www.googleapis.com/auth/dataportability.chrome.dictionary',
     *       'https://www.googleapis.com/auth/dataportability.chrome.extensions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.history',
     *       'https://www.googleapis.com/auth/dataportability.chrome.reading_list',
     *       'https://www.googleapis.com/auth/dataportability.chrome.settings',
     *       'https://www.googleapis.com/auth/dataportability.discover.follows',
     *       'https://www.googleapis.com/auth/dataportability.discover.likes',
     *       'https://www.googleapis.com/auth/dataportability.discover.not_interested',
     *       'https://www.googleapis.com/auth/dataportability.maps.aliased_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_routes',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_settings',
     *       'https://www.googleapis.com/auth/dataportability.maps.ev_profile',
     *       'https://www.googleapis.com/auth/dataportability.maps.factual_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.offering_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.photos_videos',
     *       'https://www.googleapis.com/auth/dataportability.maps.questions_answers',
     *       'https://www.googleapis.com/auth/dataportability.maps.reviews',
     *       'https://www.googleapis.com/auth/dataportability.maps.starred_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.vehicle_profile',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.maps',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.myadcenter',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.play',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.search',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.shopping',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.youtube',
     *       'https://www.googleapis.com/auth/dataportability.mymaps.maps',
     *       'https://www.googleapis.com/auth/dataportability.order_reserve.purchases_reservations',
     *       'https://www.googleapis.com/auth/dataportability.play.devices',
     *       'https://www.googleapis.com/auth/dataportability.play.grouping',
     *       'https://www.googleapis.com/auth/dataportability.play.installs',
     *       'https://www.googleapis.com/auth/dataportability.play.library',
     *       'https://www.googleapis.com/auth/dataportability.play.playpoints',
     *       'https://www.googleapis.com/auth/dataportability.play.promotions',
     *       'https://www.googleapis.com/auth/dataportability.play.purchases',
     *       'https://www.googleapis.com/auth/dataportability.play.redemptions',
     *       'https://www.googleapis.com/auth/dataportability.play.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.play.usersettings',
     *       'https://www.googleapis.com/auth/dataportability.saved.collections',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.comments',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.reviews_and_stars',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.streaming_video_providers',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.thumbs',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.watched',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.settings',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.shopping.addresses',
     *       'https://www.googleapis.com/auth/dataportability.shopping.reviews',
     *       'https://www.googleapis.com/auth/dataportability.streetview.imagery',
     *       'https://www.googleapis.com/auth/dataportability.youtube.channel',
     *       'https://www.googleapis.com/auth/dataportability.youtube.clips',
     *       'https://www.googleapis.com/auth/dataportability.youtube.comments',
     *       'https://www.googleapis.com/auth/dataportability.youtube.live_chat',
     *       'https://www.googleapis.com/auth/dataportability.youtube.music',
     *       'https://www.googleapis.com/auth/dataportability.youtube.playable',
     *       'https://www.googleapis.com/auth/dataportability.youtube.posts',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.shopping',
     *       'https://www.googleapis.com/auth/dataportability.youtube.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_videos',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataportability.archiveJobs.getPortabilityArchiveState({
     *     // Required. The archive job ID that is returned when you request the state of the job. The format is: archiveJobs/{archive_job\}/portabilityArchiveState. archive_job is the job ID returned by the InitiatePortabilityArchiveResponse.
     *     name: 'archiveJobs/my-archiveJob/portabilityArchiveState',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "exportTime": "my_exportTime",
     *   //   "name": "my_name",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "urls": []
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
    getPortabilityArchiveState(
      params: Params$Resource$Archivejobs$Getportabilityarchivestate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getPortabilityArchiveState(
      params?: Params$Resource$Archivejobs$Getportabilityarchivestate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PortabilityArchiveState>>;
    getPortabilityArchiveState(
      params: Params$Resource$Archivejobs$Getportabilityarchivestate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getPortabilityArchiveState(
      params: Params$Resource$Archivejobs$Getportabilityarchivestate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PortabilityArchiveState>,
      callback: BodyResponseCallback<Schema$PortabilityArchiveState>
    ): void;
    getPortabilityArchiveState(
      params: Params$Resource$Archivejobs$Getportabilityarchivestate,
      callback: BodyResponseCallback<Schema$PortabilityArchiveState>
    ): void;
    getPortabilityArchiveState(
      callback: BodyResponseCallback<Schema$PortabilityArchiveState>
    ): void;
    getPortabilityArchiveState(
      paramsOrCallback?:
        | Params$Resource$Archivejobs$Getportabilityarchivestate
        | BodyResponseCallback<Schema$PortabilityArchiveState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PortabilityArchiveState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PortabilityArchiveState>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PortabilityArchiveState>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Archivejobs$Getportabilityarchivestate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Archivejobs$Getportabilityarchivestate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dataportability.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PortabilityArchiveState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PortabilityArchiveState>(parameters);
      }
    }

    /**
     * Retries a failed Portability Archive job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataportability.googleapis.com
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
     * const dataportability = google.dataportability('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/dataportability.alerts.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.autofill',
     *       'https://www.googleapis.com/auth/dataportability.chrome.bookmarks',
     *       'https://www.googleapis.com/auth/dataportability.chrome.dictionary',
     *       'https://www.googleapis.com/auth/dataportability.chrome.extensions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.history',
     *       'https://www.googleapis.com/auth/dataportability.chrome.reading_list',
     *       'https://www.googleapis.com/auth/dataportability.chrome.settings',
     *       'https://www.googleapis.com/auth/dataportability.discover.follows',
     *       'https://www.googleapis.com/auth/dataportability.discover.likes',
     *       'https://www.googleapis.com/auth/dataportability.discover.not_interested',
     *       'https://www.googleapis.com/auth/dataportability.maps.aliased_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_routes',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_settings',
     *       'https://www.googleapis.com/auth/dataportability.maps.ev_profile',
     *       'https://www.googleapis.com/auth/dataportability.maps.factual_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.offering_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.photos_videos',
     *       'https://www.googleapis.com/auth/dataportability.maps.questions_answers',
     *       'https://www.googleapis.com/auth/dataportability.maps.reviews',
     *       'https://www.googleapis.com/auth/dataportability.maps.starred_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.vehicle_profile',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.maps',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.myadcenter',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.play',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.search',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.shopping',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.youtube',
     *       'https://www.googleapis.com/auth/dataportability.mymaps.maps',
     *       'https://www.googleapis.com/auth/dataportability.order_reserve.purchases_reservations',
     *       'https://www.googleapis.com/auth/dataportability.play.devices',
     *       'https://www.googleapis.com/auth/dataportability.play.grouping',
     *       'https://www.googleapis.com/auth/dataportability.play.installs',
     *       'https://www.googleapis.com/auth/dataportability.play.library',
     *       'https://www.googleapis.com/auth/dataportability.play.playpoints',
     *       'https://www.googleapis.com/auth/dataportability.play.promotions',
     *       'https://www.googleapis.com/auth/dataportability.play.purchases',
     *       'https://www.googleapis.com/auth/dataportability.play.redemptions',
     *       'https://www.googleapis.com/auth/dataportability.play.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.play.usersettings',
     *       'https://www.googleapis.com/auth/dataportability.saved.collections',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.comments',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.reviews_and_stars',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.streaming_video_providers',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.thumbs',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.watched',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.settings',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.shopping.addresses',
     *       'https://www.googleapis.com/auth/dataportability.shopping.reviews',
     *       'https://www.googleapis.com/auth/dataportability.streetview.imagery',
     *       'https://www.googleapis.com/auth/dataportability.youtube.channel',
     *       'https://www.googleapis.com/auth/dataportability.youtube.clips',
     *       'https://www.googleapis.com/auth/dataportability.youtube.comments',
     *       'https://www.googleapis.com/auth/dataportability.youtube.live_chat',
     *       'https://www.googleapis.com/auth/dataportability.youtube.music',
     *       'https://www.googleapis.com/auth/dataportability.youtube.playable',
     *       'https://www.googleapis.com/auth/dataportability.youtube.posts',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.shopping',
     *       'https://www.googleapis.com/auth/dataportability.youtube.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_videos',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataportability.archiveJobs.retry({
     *     // Required. The Archive job ID you're retrying. This is returned by the InitiatePortabilityArchiveResponse. Retrying is only executed if the initial job failed.
     *     name: 'archiveJobs/my-archiveJob',
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
     *   // {
     *   //   "archiveJobId": "my_archiveJobId"
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
    retry(
      params: Params$Resource$Archivejobs$Retry,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retry(
      params?: Params$Resource$Archivejobs$Retry,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RetryPortabilityArchiveResponse>>;
    retry(
      params: Params$Resource$Archivejobs$Retry,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retry(
      params: Params$Resource$Archivejobs$Retry,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>,
      callback: BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>
    ): void;
    retry(
      params: Params$Resource$Archivejobs$Retry,
      callback: BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>
    ): void;
    retry(
      callback: BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>
    ): void;
    retry(
      paramsOrCallback?:
        | Params$Resource$Archivejobs$Retry
        | BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RetryPortabilityArchiveResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Archivejobs$Retry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Archivejobs$Retry;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dataportability.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:retry').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RetryPortabilityArchiveResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RetryPortabilityArchiveResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Archivejobs$Cancel
    extends StandardParameters {
    /**
     * Required. The Archive job ID you're canceling. This is returned by the InitiatePortabilityArchive response. The format is: archiveJobs/{archive_job\}. Canceling is only executed if the job is in progress.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelPortabilityArchiveRequest;
  }
  export interface Params$Resource$Archivejobs$Getportabilityarchivestate
    extends StandardParameters {
    /**
     * Required. The archive job ID that is returned when you request the state of the job. The format is: archiveJobs/{archive_job\}/portabilityArchiveState. archive_job is the job ID returned by the InitiatePortabilityArchiveResponse.
     */
    name?: string;
  }
  export interface Params$Resource$Archivejobs$Retry
    extends StandardParameters {
    /**
     * Required. The Archive job ID you're retrying. This is returned by the InitiatePortabilityArchiveResponse. Retrying is only executed if the initial job failed.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetryPortabilityArchiveRequest;
  }

  export class Resource$Authorization {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Revokes OAuth tokens and resets exhausted scopes for a user/project pair. This method allows you to initiate a request after a new consent is granted. This method also indicates that previous archives can be garbage collected. You should call this method when all jobs are complete and all archives are downloaded. Do not call it only when you start a new job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataportability.googleapis.com
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
     * const dataportability = google.dataportability('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/dataportability.alerts.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.autofill',
     *       'https://www.googleapis.com/auth/dataportability.chrome.bookmarks',
     *       'https://www.googleapis.com/auth/dataportability.chrome.dictionary',
     *       'https://www.googleapis.com/auth/dataportability.chrome.extensions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.history',
     *       'https://www.googleapis.com/auth/dataportability.chrome.reading_list',
     *       'https://www.googleapis.com/auth/dataportability.chrome.settings',
     *       'https://www.googleapis.com/auth/dataportability.discover.follows',
     *       'https://www.googleapis.com/auth/dataportability.discover.likes',
     *       'https://www.googleapis.com/auth/dataportability.discover.not_interested',
     *       'https://www.googleapis.com/auth/dataportability.maps.aliased_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_routes',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_settings',
     *       'https://www.googleapis.com/auth/dataportability.maps.ev_profile',
     *       'https://www.googleapis.com/auth/dataportability.maps.factual_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.offering_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.photos_videos',
     *       'https://www.googleapis.com/auth/dataportability.maps.questions_answers',
     *       'https://www.googleapis.com/auth/dataportability.maps.reviews',
     *       'https://www.googleapis.com/auth/dataportability.maps.starred_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.vehicle_profile',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.maps',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.myadcenter',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.play',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.search',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.shopping',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.youtube',
     *       'https://www.googleapis.com/auth/dataportability.mymaps.maps',
     *       'https://www.googleapis.com/auth/dataportability.order_reserve.purchases_reservations',
     *       'https://www.googleapis.com/auth/dataportability.play.devices',
     *       'https://www.googleapis.com/auth/dataportability.play.grouping',
     *       'https://www.googleapis.com/auth/dataportability.play.installs',
     *       'https://www.googleapis.com/auth/dataportability.play.library',
     *       'https://www.googleapis.com/auth/dataportability.play.playpoints',
     *       'https://www.googleapis.com/auth/dataportability.play.promotions',
     *       'https://www.googleapis.com/auth/dataportability.play.purchases',
     *       'https://www.googleapis.com/auth/dataportability.play.redemptions',
     *       'https://www.googleapis.com/auth/dataportability.play.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.play.usersettings',
     *       'https://www.googleapis.com/auth/dataportability.saved.collections',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.comments',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.reviews_and_stars',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.streaming_video_providers',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.thumbs',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.watched',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.settings',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.shopping.addresses',
     *       'https://www.googleapis.com/auth/dataportability.shopping.reviews',
     *       'https://www.googleapis.com/auth/dataportability.streetview.imagery',
     *       'https://www.googleapis.com/auth/dataportability.youtube.channel',
     *       'https://www.googleapis.com/auth/dataportability.youtube.clips',
     *       'https://www.googleapis.com/auth/dataportability.youtube.comments',
     *       'https://www.googleapis.com/auth/dataportability.youtube.live_chat',
     *       'https://www.googleapis.com/auth/dataportability.youtube.music',
     *       'https://www.googleapis.com/auth/dataportability.youtube.playable',
     *       'https://www.googleapis.com/auth/dataportability.youtube.posts',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.shopping',
     *       'https://www.googleapis.com/auth/dataportability.youtube.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_videos',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataportability.authorization.reset({
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
    reset(
      params: Params$Resource$Authorization$Reset,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reset(
      params?: Params$Resource$Authorization$Reset,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    reset(
      params: Params$Resource$Authorization$Reset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reset(
      params: Params$Resource$Authorization$Reset,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reset(
      params: Params$Resource$Authorization$Reset,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reset(callback: BodyResponseCallback<Schema$Empty>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Authorization$Reset
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Authorization$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Authorization$Reset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dataportability.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/authorization:reset').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Authorization$Reset
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetAuthorizationRequest;
  }

  export class Resource$Portabilityarchive {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Initiates a new Archive job for the Portability API.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataportability.googleapis.com
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
     * const dataportability = google.dataportability('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/dataportability.alerts.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.autofill',
     *       'https://www.googleapis.com/auth/dataportability.chrome.bookmarks',
     *       'https://www.googleapis.com/auth/dataportability.chrome.dictionary',
     *       'https://www.googleapis.com/auth/dataportability.chrome.extensions',
     *       'https://www.googleapis.com/auth/dataportability.chrome.history',
     *       'https://www.googleapis.com/auth/dataportability.chrome.reading_list',
     *       'https://www.googleapis.com/auth/dataportability.chrome.settings',
     *       'https://www.googleapis.com/auth/dataportability.discover.follows',
     *       'https://www.googleapis.com/auth/dataportability.discover.likes',
     *       'https://www.googleapis.com/auth/dataportability.discover.not_interested',
     *       'https://www.googleapis.com/auth/dataportability.maps.aliased_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_routes',
     *       'https://www.googleapis.com/auth/dataportability.maps.commute_settings',
     *       'https://www.googleapis.com/auth/dataportability.maps.ev_profile',
     *       'https://www.googleapis.com/auth/dataportability.maps.factual_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.offering_contributions',
     *       'https://www.googleapis.com/auth/dataportability.maps.photos_videos',
     *       'https://www.googleapis.com/auth/dataportability.maps.questions_answers',
     *       'https://www.googleapis.com/auth/dataportability.maps.reviews',
     *       'https://www.googleapis.com/auth/dataportability.maps.starred_places',
     *       'https://www.googleapis.com/auth/dataportability.maps.vehicle_profile',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.maps',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.myadcenter',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.play',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.search',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.shopping',
     *       'https://www.googleapis.com/auth/dataportability.myactivity.youtube',
     *       'https://www.googleapis.com/auth/dataportability.mymaps.maps',
     *       'https://www.googleapis.com/auth/dataportability.order_reserve.purchases_reservations',
     *       'https://www.googleapis.com/auth/dataportability.play.devices',
     *       'https://www.googleapis.com/auth/dataportability.play.grouping',
     *       'https://www.googleapis.com/auth/dataportability.play.installs',
     *       'https://www.googleapis.com/auth/dataportability.play.library',
     *       'https://www.googleapis.com/auth/dataportability.play.playpoints',
     *       'https://www.googleapis.com/auth/dataportability.play.promotions',
     *       'https://www.googleapis.com/auth/dataportability.play.purchases',
     *       'https://www.googleapis.com/auth/dataportability.play.redemptions',
     *       'https://www.googleapis.com/auth/dataportability.play.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.play.usersettings',
     *       'https://www.googleapis.com/auth/dataportability.saved.collections',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.comments',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.reviews_and_stars',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.streaming_video_providers',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.thumbs',
     *       'https://www.googleapis.com/auth/dataportability.search_ugc.media.watched',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.settings',
     *       'https://www.googleapis.com/auth/dataportability.searchnotifications.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.shopping.addresses',
     *       'https://www.googleapis.com/auth/dataportability.shopping.reviews',
     *       'https://www.googleapis.com/auth/dataportability.streetview.imagery',
     *       'https://www.googleapis.com/auth/dataportability.youtube.channel',
     *       'https://www.googleapis.com/auth/dataportability.youtube.clips',
     *       'https://www.googleapis.com/auth/dataportability.youtube.comments',
     *       'https://www.googleapis.com/auth/dataportability.youtube.live_chat',
     *       'https://www.googleapis.com/auth/dataportability.youtube.music',
     *       'https://www.googleapis.com/auth/dataportability.youtube.playable',
     *       'https://www.googleapis.com/auth/dataportability.youtube.posts',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.private_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.public_videos',
     *       'https://www.googleapis.com/auth/dataportability.youtube.shopping',
     *       'https://www.googleapis.com/auth/dataportability.youtube.subscriptions',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_playlists',
     *       'https://www.googleapis.com/auth/dataportability.youtube.unlisted_videos',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataportability.portabilityArchive.initiate({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "endTime": "my_endTime",
     *       //   "resources": [],
     *       //   "startTime": "my_startTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessType": "my_accessType",
     *   //   "archiveJobId": "my_archiveJobId"
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
    initiate(
      params: Params$Resource$Portabilityarchive$Initiate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    initiate(
      params?: Params$Resource$Portabilityarchive$Initiate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$InitiatePortabilityArchiveResponse>
    >;
    initiate(
      params: Params$Resource$Portabilityarchive$Initiate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    initiate(
      params: Params$Resource$Portabilityarchive$Initiate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>,
      callback: BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>
    ): void;
    initiate(
      params: Params$Resource$Portabilityarchive$Initiate,
      callback: BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>
    ): void;
    initiate(
      callback: BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>
    ): void;
    initiate(
      paramsOrCallback?:
        | Params$Resource$Portabilityarchive$Initiate
        | BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$InitiatePortabilityArchiveResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Portabilityarchive$Initiate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Portabilityarchive$Initiate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://dataportability.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/portabilityArchive:initiate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InitiatePortabilityArchiveResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InitiatePortabilityArchiveResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Portabilityarchive$Initiate
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$InitiatePortabilityArchiveRequest;
  }
}
