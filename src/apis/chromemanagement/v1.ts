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
/* eslint-disable @typescript-eslint/class-name-casing */
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

export namespace chromemanagement_v1 {
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
   * Chrome Management API
   *
   * The Chrome Management API is a suite of services that allows Chrome administrators to view, manage and gain insights on their Chrome OS and Chrome Browser devices.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const chromemanagement = google.chromemanagement('v1');
   * ```
   */
  export class Chromemanagement {
    context: APIRequestContext;
    customers: Resource$Customers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.customers = new Resource$Customers(this.context);
    }
  }

  /**
   * Android app information.
   */
  export interface Schema$GoogleChromeManagementV1AndroidAppInfo {
    /**
     * Output only. Permissions requested by an Android app.
     */
    permissions?: Schema$GoogleChromeManagementV1AndroidAppPermission[];
  }
  /**
   * Permission requested by an Android app.
   */
  export interface Schema$GoogleChromeManagementV1AndroidAppPermission {
    /**
     * Output only. The type of the permission.
     */
    type?: string | null;
  }
  /**
   * Resource representing app details.
   */
  export interface Schema$GoogleChromeManagementV1AppDetails {
    /**
     * Output only. Android app information.
     */
    androidAppInfo?: Schema$GoogleChromeManagementV1AndroidAppInfo;
    /**
     * Output only. Unique store identifier for the item. Examples: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension, "com.google.android.apps.docs" for the Google Drive Android app.
     */
    appId?: string | null;
    /**
     * Output only. Chrome Web Store app information.
     */
    chromeAppInfo?: Schema$GoogleChromeManagementV1ChromeAppInfo;
    /**
     * Output only. App's description.
     */
    description?: string | null;
    /**
     * Output only. The uri for the detail page of the item.
     */
    detailUri?: string | null;
    /**
     * Output only. App's display name.
     */
    displayName?: string | null;
    /**
     * Output only. First published time.
     */
    firstPublishTime?: string | null;
    /**
     * Output only. Home page or Website uri.
     */
    homepageUri?: string | null;
    /**
     * Output only. A link to an image that can be used as an icon for the product.
     */
    iconUri?: string | null;
    /**
     * Output only. Indicates if the app has to be paid for OR has paid content.
     */
    isPaidApp?: boolean | null;
    /**
     * Output only. Latest published time.
     */
    latestPublishTime?: string | null;
    /**
     * Output only. Format: name=customers/{customer_id\}/apps/{chrome|android|web\}/{app_id\}@{version\}
     */
    name?: string | null;
    /**
     * Output only. The URI pointing to the privacy policy of the app, if it was provided by the developer. Version-specific field that will only be set when the requested app version is found.
     */
    privacyPolicyUri?: string | null;
    /**
     * Output only. The publisher of the item.
     */
    publisher?: string | null;
    /**
     * Output only. Number of reviews received. Chrome Web Store review information will always be for the latest version of an app.
     */
    reviewNumber?: string | null;
    /**
     * Output only. The rating of the app (on 5 stars). Chrome Web Store review information will always be for the latest version of an app.
     */
    reviewRating?: number | null;
    /**
     * Output only. App version. A new revision is committed whenever a new version of the app is published.
     */
    revisionId?: string | null;
    /**
     * Output only. Information about a partial service error if applicable.
     */
    serviceError?: Schema$GoogleRpcStatus;
    /**
     * Output only. App type.
     */
    type?: string | null;
  }
  /**
   * Describes a browser version and its install count.
   */
  export interface Schema$GoogleChromeManagementV1BrowserVersion {
    /**
     * Output only. The release channel of the installed browser.
     */
    channel?: string | null;
    /**
     * Output only. Count grouped by device_system and major version
     */
    count?: string | null;
    /**
     * Output only. Version of the system-specified operating system.
     */
    deviceOsVersion?: string | null;
    /**
     * Output only. The device operating system.
     */
    system?: string | null;
    /**
     * Output only. The full version of the installed browser.
     */
    version?: string | null;
  }
  /**
   * Chrome Web Store app information.
   */
  export interface Schema$GoogleChromeManagementV1ChromeAppInfo {
    /**
     * Output only. Whether the app or extension is built and maintained by Google. Version-specific field that will only be set when the requested app version is found.
     */
    googleOwned?: boolean | null;
    /**
     * Output only. Whether the app or extension is in a published state in the Chrome Web Store.
     */
    isCwsHosted?: boolean | null;
    /**
     * Output only. Whether the app or extension is a theme.
     */
    isTheme?: boolean | null;
    /**
     * Output only. The minimum number of users using this app.
     */
    minUserCount?: number | null;
    /**
     * Output only. Every custom permission requested by the app. Version-specific field that will only be set when the requested app version is found.
     */
    permissions?: Schema$GoogleChromeManagementV1ChromeAppPermission[];
    /**
     * Output only. Every permission giving access to domains or broad host patterns. ( e.g. www.google.com). This includes the matches from content scripts as well as hosts in the permissions node of the manifest. Version-specific field that will only be set when the requested app version is found.
     */
    siteAccess?: Schema$GoogleChromeManagementV1ChromeAppSiteAccess[];
    /**
     * Output only. The app developer has enabled support for their app. Version-specific field that will only be set when the requested app version is found.
     */
    supportEnabled?: boolean | null;
  }
  /**
   * Permission requested by a Chrome app or extension.
   */
  export interface Schema$GoogleChromeManagementV1ChromeAppPermission {
    /**
     * Output only. If available, whether this permissions grants the app/extension access to user data.
     */
    accessUserData?: boolean | null;
    /**
     * Output only. If available, a URI to a page that has documentation for the current permission.
     */
    documentationUri?: string | null;
    /**
     * Output only. The type of the permission.
     */
    type?: string | null;
  }
  /**
   * Represent one host permission.
   */
  export interface Schema$GoogleChromeManagementV1ChromeAppSiteAccess {
    /**
     * Output only. This can contain very specific hosts, or patterns like "*.com" for instance.
     */
    hostMatch?: string | null;
  }
  /**
   * Response containing requested browser versions details and counts.
   */
  export interface Schema$GoogleChromeManagementV1CountChromeVersionsResponse {
    /**
     * List of all browser versions and their install counts.
     */
    browserVersions?: Schema$GoogleChromeManagementV1BrowserVersion[];
    /**
     * Token to specify the next page of the request.
     */
    nextPageToken?: string | null;
    /**
     * Total number browser versions matching request.
     */
    totalSize?: number | null;
  }
  /**
   * Response containing details of queried installed apps.
   */
  export interface Schema$GoogleChromeManagementV1CountInstalledAppsResponse {
    /**
     * List of installed apps matching request.
     */
    installedApps?: Schema$GoogleChromeManagementV1InstalledApp[];
    /**
     * Token to specify the next page of the request.
     */
    nextPageToken?: string | null;
    /**
     * Total number of installed apps matching request.
     */
    totalSize?: number | null;
  }
  /**
   * Describes a device reporting Chrome browser information.
   */
  export interface Schema$GoogleChromeManagementV1Device {
    /**
     * Output only. The ID of the device that reported this Chrome browser information.
     */
    deviceId?: string | null;
    /**
     * Output only. The name of the machine within its local network.
     */
    machine?: string | null;
  }
  /**
   * Response containing a list of devices with queried app installed.
   */
  export interface Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse {
    /**
     * A list of devices which have the app installed. Sorted in ascending alphabetical order on the Device.machine field.
     */
    devices?: Schema$GoogleChromeManagementV1Device[];
    /**
     * Token to specify the next page of the request.
     */
    nextPageToken?: string | null;
    /**
     * Total number of devices matching request.
     */
    totalSize?: number | null;
  }
  /**
   * Describes an installed app.
   */
  export interface Schema$GoogleChromeManagementV1InstalledApp {
    /**
     * Output only. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     */
    appId?: string | null;
    /**
     * Output only. How the app was installed.
     */
    appInstallType?: string | null;
    /**
     * Output only. Source of the installed app.
     */
    appSource?: string | null;
    /**
     * Output only. Type of the app.
     */
    appType?: string | null;
    /**
     * Output only. Count of browser devices with this app installed.
     */
    browserDeviceCount?: string | null;
    /**
     * Output only. Description of the installed app.
     */
    description?: string | null;
    /**
     * Output only. Whether the app is disabled.
     */
    disabled?: boolean | null;
    /**
     * Output only. Name of the installed app.
     */
    displayName?: string | null;
    /**
     * Output only. Homepage uri of the installed app.
     */
    homepageUri?: string | null;
    /**
     * Output only. Count of ChromeOS users with this app installed.
     */
    osUserCount?: string | null;
    /**
     * Output only. Permissions of the installed app.
     */
    permissions?: string[] | null;
  }
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

  export class Resource$Customers {
    context: APIRequestContext;
    apps: Resource$Customers$Apps;
    reports: Resource$Customers$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apps = new Resource$Customers$Apps(this.context);
      this.reports = new Resource$Customers$Reports(this.context);
    }
  }

  export class Resource$Customers$Apps {
    context: APIRequestContext;
    android: Resource$Customers$Apps$Android;
    chrome: Resource$Customers$Apps$Chrome;
    web: Resource$Customers$Apps$Web;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.android = new Resource$Customers$Apps$Android(this.context);
      this.chrome = new Resource$Customers$Apps$Chrome(this.context);
      this.web = new Resource$Customers$Apps$Web(this.context);
    }
  }

  export class Resource$Customers$Apps$Android {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a specific app for a customer by its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.appdetails.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.apps.android.get({
     *     // Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     *     name: 'customers/my-customer/apps/android/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppInfo": {},
     *   //   "appId": "my_appId",
     *   //   "chromeAppInfo": {},
     *   //   "description": "my_description",
     *   //   "detailUri": "my_detailUri",
     *   //   "displayName": "my_displayName",
     *   //   "firstPublishTime": "my_firstPublishTime",
     *   //   "homepageUri": "my_homepageUri",
     *   //   "iconUri": "my_iconUri",
     *   //   "isPaidApp": false,
     *   //   "latestPublishTime": "my_latestPublishTime",
     *   //   "name": "my_name",
     *   //   "privacyPolicyUri": "my_privacyPolicyUri",
     *   //   "publisher": "my_publisher",
     *   //   "reviewNumber": "my_reviewNumber",
     *   //   "reviewRating": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "serviceError": {},
     *   //   "type": "my_type"
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
      params: Params$Resource$Customers$Apps$Android$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Apps$Android$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>;
    get(
      params: Params$Resource$Customers$Apps$Android$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Android$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Android$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Apps$Android$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Apps$Android$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Apps$Android$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
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
        createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Apps$Android$Get
    extends StandardParameters {
    /**
     * Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     */
    name?: string;
  }

  export class Resource$Customers$Apps$Chrome {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a specific app for a customer by its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.appdetails.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.apps.chrome.get({
     *     // Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     *     name: 'customers/my-customer/apps/chrome/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppInfo": {},
     *   //   "appId": "my_appId",
     *   //   "chromeAppInfo": {},
     *   //   "description": "my_description",
     *   //   "detailUri": "my_detailUri",
     *   //   "displayName": "my_displayName",
     *   //   "firstPublishTime": "my_firstPublishTime",
     *   //   "homepageUri": "my_homepageUri",
     *   //   "iconUri": "my_iconUri",
     *   //   "isPaidApp": false,
     *   //   "latestPublishTime": "my_latestPublishTime",
     *   //   "name": "my_name",
     *   //   "privacyPolicyUri": "my_privacyPolicyUri",
     *   //   "publisher": "my_publisher",
     *   //   "reviewNumber": "my_reviewNumber",
     *   //   "reviewRating": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "serviceError": {},
     *   //   "type": "my_type"
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
      params: Params$Resource$Customers$Apps$Chrome$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Apps$Chrome$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>;
    get(
      params: Params$Resource$Customers$Apps$Chrome$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Chrome$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Chrome$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Apps$Chrome$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Apps$Chrome$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Apps$Chrome$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
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
        createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Apps$Chrome$Get
    extends StandardParameters {
    /**
     * Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     */
    name?: string;
  }

  export class Resource$Customers$Apps$Web {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a specific app for a customer by its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.appdetails.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.apps.web.get({
     *     // Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     *     name: 'customers/my-customer/apps/web/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppInfo": {},
     *   //   "appId": "my_appId",
     *   //   "chromeAppInfo": {},
     *   //   "description": "my_description",
     *   //   "detailUri": "my_detailUri",
     *   //   "displayName": "my_displayName",
     *   //   "firstPublishTime": "my_firstPublishTime",
     *   //   "homepageUri": "my_homepageUri",
     *   //   "iconUri": "my_iconUri",
     *   //   "isPaidApp": false,
     *   //   "latestPublishTime": "my_latestPublishTime",
     *   //   "name": "my_name",
     *   //   "privacyPolicyUri": "my_privacyPolicyUri",
     *   //   "publisher": "my_publisher",
     *   //   "reviewNumber": "my_reviewNumber",
     *   //   "reviewRating": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "serviceError": {},
     *   //   "type": "my_type"
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
      params: Params$Resource$Customers$Apps$Web$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Apps$Web$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>;
    get(
      params: Params$Resource$Customers$Apps$Web$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Web$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      params: Params$Resource$Customers$Apps$Web$Get,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Apps$Web$Get
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1AppDetails>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1AppDetails>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Apps$Web$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Apps$Web$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
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
        createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1AppDetails>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Apps$Web$Get
    extends StandardParameters {
    /**
     * Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     */
    name?: string;
  }

  export class Resource$Customers$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generate report of installed Chrome versions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.reports.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.reports.countChromeVersions({
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     *     filter: 'placeholder-value',
     *     // The ID of the organizational unit.
     *     orgUnitId: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 100.
     *     pageSize: 'placeholder-value',
     *     // Token to specify the page of the request to be returned.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "browserVersions": [],
     *   //   "nextPageToken": "my_nextPageToken",
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
    countChromeVersions(
      params: Params$Resource$Customers$Reports$Countchromeversions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    countChromeVersions(
      params?: Params$Resource$Customers$Reports$Countchromeversions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>;
    countChromeVersions(
      params: Params$Resource$Customers$Reports$Countchromeversions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countChromeVersions(
      params: Params$Resource$Customers$Reports$Countchromeversions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
    ): void;
    countChromeVersions(
      params: Params$Resource$Customers$Reports$Countchromeversions,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
    ): void;
    countChromeVersions(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
    ): void;
    countChromeVersions(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countchromeversions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countchromeversions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Reports$Countchromeversions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/reports:countChromeVersions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountChromeVersionsResponse>(
          parameters
        );
      }
    }

    /**
     * Generate report of app installations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.reports.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.reports.countInstalledApps({
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name
     *     filter: 'placeholder-value',
     *     // Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count
     *     orderBy: 'placeholder-value',
     *     // The ID of the organizational unit.
     *     orgUnitId: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 100.
     *     pageSize: 'placeholder-value',
     *     // Token to specify the page of the request to be returned.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "installedApps": [],
     *   //   "nextPageToken": "my_nextPageToken",
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
    countInstalledApps(
      params: Params$Resource$Customers$Reports$Countinstalledapps,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    countInstalledApps(
      params?: Params$Resource$Customers$Reports$Countinstalledapps,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>;
    countInstalledApps(
      params: Params$Resource$Customers$Reports$Countinstalledapps,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countInstalledApps(
      params: Params$Resource$Customers$Reports$Countinstalledapps,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
    ): void;
    countInstalledApps(
      params: Params$Resource$Customers$Reports$Countinstalledapps,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
    ): void;
    countInstalledApps(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
    ): void;
    countInstalledApps(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Countinstalledapps
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Countinstalledapps;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Reports$Countinstalledapps;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/reports:countInstalledApps'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1CountInstalledAppsResponse>(
          parameters
        );
      }
    }

    /**
     * Generate report of devices that have a specified app installed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromemanagement = google.chromemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.reports.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromemanagement.customers.reports.findInstalledAppDevices({
     *     // Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     *     appId: 'placeholder-value',
     *     // Type of the app.
     *     appType: 'placeholder-value',
     *     // Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     *     customer: 'customers/my-customer',
     *     // Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     *     filter: 'placeholder-value',
     *     // Field used to order results. Supported order by fields: * machine * device_id
     *     orderBy: 'placeholder-value',
     *     // The ID of the organizational unit.
     *     orgUnitId: 'placeholder-value',
     *     // Maximum number of results to return. Maximum and default are 100.
     *     pageSize: 'placeholder-value',
     *     // Token to specify the page of the request to be returned.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
     *   //   "nextPageToken": "my_nextPageToken",
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
    findInstalledAppDevices(
      params: Params$Resource$Customers$Reports$Findinstalledappdevices,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    findInstalledAppDevices(
      params?: Params$Resource$Customers$Reports$Findinstalledappdevices,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>;
    findInstalledAppDevices(
      params: Params$Resource$Customers$Reports$Findinstalledappdevices,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    findInstalledAppDevices(
      params: Params$Resource$Customers$Reports$Findinstalledappdevices,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
    ): void;
    findInstalledAppDevices(
      params: Params$Resource$Customers$Reports$Findinstalledappdevices,
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
    ): void;
    findInstalledAppDevices(
      callback: BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
    ): void;
    findInstalledAppDevices(
      paramsOrCallback?:
        | Params$Resource$Customers$Reports$Findinstalledappdevices
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Reports$Findinstalledappdevices;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Reports$Findinstalledappdevices;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/reports:findInstalledAppDevices'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromeManagementV1FindInstalledAppDevicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Reports$Countchromeversions
    extends StandardParameters {
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     */
    filter?: string;
    /**
     * The ID of the organizational unit.
     */
    orgUnitId?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the request to be returned.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Customers$Reports$Countinstalledapps
    extends StandardParameters {
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name
     */
    filter?: string;
    /**
     * Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count
     */
    orderBy?: string;
    /**
     * The ID of the organizational unit.
     */
    orgUnitId?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the request to be returned.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Customers$Reports$Findinstalledappdevices
    extends StandardParameters {
    /**
     * Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     */
    appId?: string;
    /**
     * Type of the app.
     */
    appType?: string;
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    customer?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     */
    filter?: string;
    /**
     * Field used to order results. Supported order by fields: * machine * device_id
     */
    orderBy?: string;
    /**
     * The ID of the organizational unit.
     */
    orgUnitId?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the request to be returned.
     */
    pageToken?: string;
  }
}
