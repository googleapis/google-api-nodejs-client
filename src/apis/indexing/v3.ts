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

export namespace indexing_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
   * Indexing API
   *
   * Notifies Google when your web pages change.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const indexing = google.indexing('v3');
   * ```
   */
  export class Indexing {
    context: APIRequestContext;
    urlNotifications: Resource$Urlnotifications;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.urlNotifications = new Resource$Urlnotifications(this.context);
    }
  }

  /**
   * Output for PublishUrlNotification
   */
  export interface Schema$PublishUrlNotificationResponse {
    /**
     * Description of the notification events received for this URL.
     */
    urlNotificationMetadata?: Schema$UrlNotificationMetadata;
  }
  /**
   * `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
   */
  export interface Schema$UrlNotification {
    /**
     * Creation timestamp for this notification. Users should _not_ specify it, the field is ignored at the request time.
     */
    notifyTime?: string | null;
    /**
     * The URL life cycle event that Google is being notified about.
     */
    type?: string | null;
    /**
     * The object of this notification. The URL must be owned by the publisher of this notification and, in case of `URL_UPDATED` notifications, it _must_ be crawlable by Google.
     */
    url?: string | null;
  }
  /**
   * Summary of the most recent Indexing API notifications successfully received, for a given URL.
   */
  export interface Schema$UrlNotificationMetadata {
    /**
     * Latest notification received with type `URL_REMOVED`.
     */
    latestRemove?: Schema$UrlNotification;
    /**
     * Latest notification received with type `URL_UPDATED`.
     */
    latestUpdate?: Schema$UrlNotification;
    /**
     * URL to which this metadata refers.
     */
    url?: string | null;
  }

  export class Resource$Urlnotifications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getMetadata(
      params: Params$Resource$Urlnotifications$Getmetadata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getMetadata(
      params?: Params$Resource$Urlnotifications$Getmetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UrlNotificationMetadata>;
    getMetadata(
      params: Params$Resource$Urlnotifications$Getmetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMetadata(
      params: Params$Resource$Urlnotifications$Getmetadata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UrlNotificationMetadata>,
      callback: BodyResponseCallback<Schema$UrlNotificationMetadata>
    ): void;
    getMetadata(
      params: Params$Resource$Urlnotifications$Getmetadata,
      callback: BodyResponseCallback<Schema$UrlNotificationMetadata>
    ): void;
    getMetadata(
      callback: BodyResponseCallback<Schema$UrlNotificationMetadata>
    ): void;
    getMetadata(
      paramsOrCallback?:
        | Params$Resource$Urlnotifications$Getmetadata
        | BodyResponseCallback<Schema$UrlNotificationMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UrlNotificationMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UrlNotificationMetadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UrlNotificationMetadata>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Urlnotifications$Getmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlnotifications$Getmetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://indexing.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3/urlNotifications/metadata').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UrlNotificationMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UrlNotificationMetadata>(parameters);
      }
    }

    /**
     * Notifies that a URL has been updated or deleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    publish(
      params: Params$Resource$Urlnotifications$Publish,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    publish(
      params?: Params$Resource$Urlnotifications$Publish,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PublishUrlNotificationResponse>;
    publish(
      params: Params$Resource$Urlnotifications$Publish,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    publish(
      params: Params$Resource$Urlnotifications$Publish,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PublishUrlNotificationResponse>,
      callback: BodyResponseCallback<Schema$PublishUrlNotificationResponse>
    ): void;
    publish(
      params: Params$Resource$Urlnotifications$Publish,
      callback: BodyResponseCallback<Schema$PublishUrlNotificationResponse>
    ): void;
    publish(
      callback: BodyResponseCallback<Schema$PublishUrlNotificationResponse>
    ): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Urlnotifications$Publish
        | BodyResponseCallback<Schema$PublishUrlNotificationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PublishUrlNotificationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PublishUrlNotificationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PublishUrlNotificationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Urlnotifications$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlnotifications$Publish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://indexing.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3/urlNotifications:publish').replace(
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
        createAPIRequest<Schema$PublishUrlNotificationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PublishUrlNotificationResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Urlnotifications$Getmetadata
    extends StandardParameters {
    /**
     * URL that is being queried.
     */
    url?: string;
  }
  export interface Params$Resource$Urlnotifications$Publish
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$UrlNotification;
  }
}
