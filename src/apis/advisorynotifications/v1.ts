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

export namespace advisorynotifications_v1 {
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
   * Advisory Notifications API
   *
   * An API for accessing Advisory Notifications in Google Cloud
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const advisorynotifications = google.advisorynotifications('v1');
   * ```
   */
  export class Advisorynotifications {
    context: APIRequestContext;
    organizations: Resource$Organizations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
    }
  }

  /**
   * Attachment with specific information about the issue.
   */
  export interface Schema$GoogleCloudAdvisorynotificationsV1Attachment {
    /**
     * A CSV file attachment. Max size is 10 MB.
     */
    csv?: Schema$GoogleCloudAdvisorynotificationsV1Csv;
    /**
     * The title of the attachment.
     */
    displayName?: string | null;
  }
  /**
   * A representation of a CSV file attachment, as a list of column headers and a list of data rows.
   */
  export interface Schema$GoogleCloudAdvisorynotificationsV1Csv {
    /**
     * The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.
     */
    dataRows?: Schema$GoogleCloudAdvisorynotificationsV1CsvCsvRow[];
    /**
     * The list of headers for data columns in a CSV file.
     */
    headers?: string[] | null;
  }
  /**
   * A representation of a single data row in a CSV file.
   */
  export interface Schema$GoogleCloudAdvisorynotificationsV1CsvCsvRow {
    /**
     * The data entries in a CSV file row, as a string array rather than a single comma-separated string.
     */
    entries?: string[] | null;
  }
  /**
   * Response of ListNotifications endpoint.
   */
  export interface Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of notifications under a given parent.
     */
    notifications?: Schema$GoogleCloudAdvisorynotificationsV1Notification[];
    /**
     * Estimation of a total number of notifications.
     */
    totalSize?: number | null;
  }
  /**
   * A message which contains notification details.
   */
  export interface Schema$GoogleCloudAdvisorynotificationsV1Message {
    /**
     * The attachments to download.
     */
    attachments?: Schema$GoogleCloudAdvisorynotificationsV1Attachment[];
    /**
     * The message content.
     */
    body?: Schema$GoogleCloudAdvisorynotificationsV1MessageBody;
    /**
     * The Message creation timestamp.
     */
    createTime?: string | null;
    /**
     * Time when Message was localized
     */
    localizationTime?: string | null;
  }
  /**
   * A message body containing text.
   */
  export interface Schema$GoogleCloudAdvisorynotificationsV1MessageBody {
    /**
     * The text content of the message body.
     */
    text?: Schema$GoogleCloudAdvisorynotificationsV1Text;
  }
  /**
   * A notification object for notifying customers about security and privacy issues.
   */
  export interface Schema$GoogleCloudAdvisorynotificationsV1Notification {
    /**
     * Output only. Time the notification was created.
     */
    createTime?: string | null;
    /**
     * A list of messages in the notification.
     */
    messages?: Schema$GoogleCloudAdvisorynotificationsV1Message[];
    /**
     * The resource name of the notification. Format: organizations/{organization\}/locations/{location\}/notifications/{notification\}.
     */
    name?: string | null;
    /**
     * Type of notification
     */
    notificationType?: string | null;
    /**
     * The subject line of the notification.
     */
    subject?: Schema$GoogleCloudAdvisorynotificationsV1Subject;
  }
  /**
   * A subject line of a notification.
   */
  export interface Schema$GoogleCloudAdvisorynotificationsV1Subject {
    /**
     * The text content.
     */
    text?: Schema$GoogleCloudAdvisorynotificationsV1Text;
  }
  /**
   * A text object containing the English text and its localized copies.
   */
  export interface Schema$GoogleCloudAdvisorynotificationsV1Text {
    /**
     * The English copy.
     */
    enText?: string | null;
    /**
     * Status of the localization.
     */
    localizationState?: string | null;
    /**
     * The requested localized copy (if applicable).
     */
    localizedText?: string | null;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    locations: Resource$Organizations$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Organizations$Locations(this.context);
    }
  }

  export class Resource$Organizations$Locations {
    context: APIRequestContext;
    notifications: Resource$Organizations$Locations$Notifications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.notifications = new Resource$Organizations$Locations$Notifications(
        this.context
      );
    }
  }

  export class Resource$Organizations$Locations$Notifications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a notification.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/advisorynotifications.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const advisorynotifications = google.advisorynotifications('v1');
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
     *     await advisorynotifications.organizations.locations.notifications.get({
     *       // ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
     *       languageCode: 'placeholder-value',
     *       // Required. A name of the notification to retrieve. Format: organizations/{organization\}/locations/{location\}/notifications/{notification\}.
     *       name: 'organizations/my-organization/locations/my-location/notifications/my-notification',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "messages": [],
     *   //   "name": "my_name",
     *   //   "notificationType": "my_notificationType",
     *   //   "subject": {}
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
      params: Params$Resource$Organizations$Locations$Notifications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Locations$Notifications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAdvisorynotificationsV1Notification>;
    get(
      params: Params$Resource$Organizations$Locations$Notifications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Notifications$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1Notification>,
      callback: BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1Notification>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Notifications$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1Notification>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1Notification>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Notifications$Get
        | BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1Notification>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1Notification>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1Notification>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAdvisorynotificationsV1Notification>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Notifications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Notifications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://advisorynotifications.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudAdvisorynotificationsV1Notification>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAdvisorynotificationsV1Notification>(
          parameters
        );
      }
    }

    /**
     * Lists notifications under a given parent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/advisorynotifications.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const advisorynotifications = google.advisorynotifications('v1');
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
     *     await advisorynotifications.organizations.locations.notifications.list({
     *       // ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
     *       languageCode: 'placeholder-value',
     *       // The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.
     *       pageSize: 'placeholder-value',
     *       // A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization\}/locations/{location\}"
     *       parent: 'organizations/my-organization/locations/my-location',
     *       // Specifies which parts of the notification resource should be returned in the response.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "notifications": [],
     *   //   "totalSize": 0
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
      params: Params$Resource$Organizations$Locations$Notifications$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Locations$Notifications$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>;
    list(
      params: Params$Resource$Organizations$Locations$Notifications$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Notifications$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Notifications$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Notifications$List
        | BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Notifications$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Notifications$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://advisorynotifications.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notifications').replace(
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
        createAPIRequest<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Notifications$Get
    extends StandardParameters {
    /**
     * ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
     */
    languageCode?: string;
    /**
     * Required. A name of the notification to retrieve. Format: organizations/{organization\}/locations/{location\}/notifications/{notification\}.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Notifications$List
    extends StandardParameters {
    /**
     * ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
     */
    languageCode?: string;
    /**
     * The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.
     */
    pageSize?: number;
    /**
     * A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization\}/locations/{location\}"
     */
    parent?: string;
    /**
     * Specifies which parts of the notification resource should be returned in the response.
     */
    view?: string;
  }
}
