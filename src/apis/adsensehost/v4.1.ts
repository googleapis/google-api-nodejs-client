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

export namespace adsensehost_v4_1 {
  export interface Options extends GlobalOptions {
    version: 'v4.1';
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
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * AdSense Host API
   *
   * Generates performance reports, generates ad codes, and provides publisher management capabilities for AdSense Hosts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const adsensehost = google.adsensehost('v4.1');
   * ```
   */
  export class Adsensehost {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    adclients: Resource$Adclients;
    associationsessions: Resource$Associationsessions;
    customchannels: Resource$Customchannels;
    reports: Resource$Reports;
    urlchannels: Resource$Urlchannels;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.adclients = new Resource$Adclients(this.context);
      this.associationsessions = new Resource$Associationsessions(this.context);
      this.customchannels = new Resource$Customchannels(this.context);
      this.reports = new Resource$Reports(this.context);
      this.urlchannels = new Resource$Urlchannels(this.context);
    }
  }

  export interface Schema$Account {
    /**
     * Unique identifier of this account.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#account.
     */
    kind?: string | null;
    /**
     * Name of this account.
     */
    name?: string | null;
    /**
     * Approval status of this account. One of: PENDING, APPROVED, DISABLED.
     */
    status?: string | null;
  }
  export interface Schema$Accounts {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The accounts returned in this list response.
     */
    items?: Schema$Account[];
    /**
     * Kind of list this is, in this case adsensehost#accounts.
     */
    kind?: string | null;
  }
  export interface Schema$AdClient {
    /**
     * Whether this ad client is opted in to ARC.
     */
    arcOptIn?: boolean | null;
    /**
     * Unique identifier of this ad client.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#adClient.
     */
    kind?: string | null;
    /**
     * This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
     */
    productCode?: string | null;
    /**
     * Whether this ad client supports being reported on.
     */
    supportsReporting?: boolean | null;
  }
  export interface Schema$AdClients {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The ad clients returned in this list response.
     */
    items?: Schema$AdClient[];
    /**
     * Kind of list this is, in this case adsensehost#adClients.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$AdCode {
    /**
     * The ad code snippet.
     */
    adCode?: string | null;
    /**
     * Kind this is, in this case adsensehost#adCode.
     */
    kind?: string | null;
  }
  export interface Schema$AdStyle {
    /**
     * The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
     */
    colors?: {
      background?: string;
      border?: string;
      text?: string;
      title?: string;
      url?: string;
    } | null;
    /**
     * The style of the corners in the ad (deprecated: never populated, ignored).
     */
    corners?: string | null;
    /**
     * The font which is included in the style.
     */
    font?: {family?: string; size?: string} | null;
    /**
     * Kind this is, in this case adsensehost#adStyle.
     */
    kind?: string | null;
  }
  export interface Schema$AdUnit {
    /**
     * Identity code of this ad unit, not necessarily unique across ad clients.
     */
    code?: string | null;
    /**
     * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
     */
    contentAdsSettings?: {
      backupOption?: {color?: string; type?: string; url?: string};
      size?: string;
      type?: string;
    } | null;
    /**
     * Custom style information specific to this ad unit.
     */
    customStyle?: Schema$AdStyle;
    /**
     * Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#adUnit.
     */
    kind?: string | null;
    /**
     * Settings specific to WAP mobile content ads (AFMC - deprecated).
     */
    mobileContentAdsSettings?: {
      markupLanguage?: string;
      scriptingLanguage?: string;
      size?: string;
      type?: string;
    } | null;
    /**
     * Name of this ad unit.
     */
    name?: string | null;
    /**
     * Status of this ad unit. Possible values are:
     * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
     *
     * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
     *
     * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
     */
    status?: string | null;
  }
  export interface Schema$AdUnits {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The ad units returned in this list response.
     */
    items?: Schema$AdUnit[];
    /**
     * Kind of list this is, in this case adsensehost#adUnits.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$AssociationSession {
    /**
     * Hosted account id of the associated publisher after association. Present if status is ACCEPTED.
     */
    accountId?: string | null;
    /**
     * Unique identifier of this association session.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#associationSession.
     */
    kind?: string | null;
    /**
     * The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated)
     */
    productCodes?: string[] | null;
    /**
     * Redirect URL of this association session. Used to redirect users into the AdSense association flow.
     */
    redirectUrl?: string | null;
    /**
     * Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR.
     */
    status?: string | null;
    /**
     * The preferred locale of the user themselves when going through the AdSense association flow.
     */
    userLocale?: string | null;
    /**
     * The locale of the user's hosted website.
     */
    websiteLocale?: string | null;
    /**
     * The URL of the user's hosted website.
     */
    websiteUrl?: string | null;
  }
  export interface Schema$CustomChannel {
    /**
     * Code of this custom channel, not necessarily unique across ad clients.
     */
    code?: string | null;
    /**
     * Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#customChannel.
     */
    kind?: string | null;
    /**
     * Name of this custom channel.
     */
    name?: string | null;
  }
  export interface Schema$CustomChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The custom channels returned in this list response.
     */
    items?: Schema$CustomChannel[];
    /**
     * Kind of list this is, in this case adsensehost#customChannels.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$Report {
    /**
     * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    averages?: string[] | null;
    /**
     * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
     */
    headers?: Array<{currency?: string; name?: string; type?: string}> | null;
    /**
     * Kind this is, in this case adsensehost#report.
     */
    kind?: string | null;
    /**
     * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
     */
    rows?: string[][] | null;
    /**
     * The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
     */
    totalMatchedRows?: string | null;
    /**
     * The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    totals?: string[] | null;
    /**
     * Any warnings associated with generation of the report.
     */
    warnings?: string[] | null;
  }
  export interface Schema$UrlChannel {
    /**
     * Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string | null;
    /**
     * Kind of resource this is, in this case adsensehost#urlChannel.
     */
    kind?: string | null;
    /**
     * URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
     */
    urlPattern?: string | null;
  }
  export interface Schema$UrlChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The URL channels returned in this list response.
     */
    items?: Schema$UrlChannel[];
    /**
     * Kind of list this is, in this case adsensehost#urlChannels.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    adclients: Resource$Accounts$Adclients;
    adunits: Resource$Accounts$Adunits;
    reports: Resource$Accounts$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adclients = new Resource$Accounts$Adclients(this.context);
      this.adunits = new Resource$Accounts$Adunits(this.context);
      this.reports = new Resource$Accounts$Reports(this.context);
    }

    /**
     * Get information about the selected associated AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.get({
     *     // Account to get information about.
     *     accountId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "status": "my_status"
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
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/adsensehost/v4.1/accounts/{accountId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * List hosted accounts associated with this AdSense account by ad client id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.list({
     *     // Ad clients to list accounts for.
     *     filterAdClientId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind"
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
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Accounts>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options: MethodOptions | BodyResponseCallback<Schema$Accounts>,
      callback: BodyResponseCallback<Schema$Accounts>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$Accounts>
    ): void;
    list(callback: BodyResponseCallback<Schema$Accounts>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$Accounts>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Accounts>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Accounts>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Accounts> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/adsensehost/v4.1/accounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['filterAdClientId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Accounts>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Accounts>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Account to get information about.
     */
    accountId?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * Ad clients to list accounts for.
     */
    filterAdClientId?: string[];
  }

  export class Resource$Accounts$Adclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get information about one of the ad clients in the specified publisher's AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.adclients.get({
     *     // Account which contains the ad client.
     *     accountId: 'placeholder-value',
     *     // Ad client to get.
     *     adClientId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "arcOptIn": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "productCode": "my_productCode",
     *   //   "supportsReporting": false
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
      params: Params$Resource$Accounts$Adclients$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Adclients$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdClient>;
    get(
      params: Params$Resource$Accounts$Adclients$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Adclients$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdClient>,
      callback: BodyResponseCallback<Schema$AdClient>
    ): void;
    get(
      params: Params$Resource$Accounts$Adclients$Get,
      callback: BodyResponseCallback<Schema$AdClient>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdClient>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$Get
        | BodyResponseCallback<Schema$AdClient>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdClient>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdClient>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdClient> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdClient>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdClient>(parameters);
      }
    }

    /**
     * List all hosted ad clients in the specified hosted account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.adclients.list({
     *     // Account for which to list ad clients.
     *     accountId: 'placeholder-value',
     *     // The maximum number of ad clients to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
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
      params: Params$Resource$Accounts$Adclients$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Adclients$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdClients>;
    list(
      params: Params$Resource$Accounts$Adclients$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdClients>,
      callback: BodyResponseCallback<Schema$AdClients>
    ): void;
    list(
      params: Params$Resource$Accounts$Adclients$List,
      callback: BodyResponseCallback<Schema$AdClients>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdClients>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adclients$List
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdClients> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adclients$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adclients$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/adsensehost/v4.1/accounts/{accountId}/adclients'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdClients>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdClients>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adclients$Get
    extends StandardParameters {
    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client to get.
     */
    adClientId?: string;
  }
  export interface Params$Resource$Accounts$Adclients$List
    extends StandardParameters {
    /**
     * Account for which to list ad clients.
     */
    accountId?: string;
    /**
     * The maximum number of ad clients to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Accounts$Adunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete the specified ad unit from the specified publisher AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.adunits.delete({
     *     // Account which contains the ad unit.
     *     accountId: 'placeholder-value',
     *     // Ad client for which to get ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit to delete.
     *     adUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "contentAdsSettings": {},
     *   //   "customStyle": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mobileContentAdsSettings": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status"
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
      params: Params$Resource$Accounts$Adunits$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Adunits$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    delete(
      params: Params$Resource$Accounts$Adunits$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Adunits$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    delete(
      params: Params$Resource$Accounts$Adunits$Delete,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    delete(callback: BodyResponseCallback<Schema$AdUnit>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Delete
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'adUnitId'],
        pathParams: ['accountId', 'adClientId', 'adUnitId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * Get the specified host ad unit in this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.adunits.get({
     *     // Account which contains the ad unit.
     *     accountId: 'placeholder-value',
     *     // Ad client for which to get ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit to get.
     *     adUnitId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "contentAdsSettings": {},
     *   //   "customStyle": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mobileContentAdsSettings": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status"
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
      params: Params$Resource$Accounts$Adunits$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Adunits$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    get(
      params: Params$Resource$Accounts$Adunits$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Adunits$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    get(
      params: Params$Resource$Accounts$Adunits$Get,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdUnit>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Get
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'adUnitId'],
        pathParams: ['accountId', 'adClientId', 'adUnitId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * Get ad code for the specified ad unit, attaching the specified host custom channels.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.adunits.getAdCode({
     *     // Account which contains the ad client.
     *     accountId: 'placeholder-value',
     *     // Ad client with contains the ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit to get the code for.
     *     adUnitId: 'placeholder-value',
     *     // Host custom channel to attach to the ad code.
     *     hostCustomChannelId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adCode": "my_adCode",
     *   //   "kind": "my_kind"
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
    getAdCode(
      params: Params$Resource$Accounts$Adunits$Getadcode,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAdCode(
      params?: Params$Resource$Accounts$Adunits$Getadcode,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdCode>;
    getAdCode(
      params: Params$Resource$Accounts$Adunits$Getadcode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAdCode(
      params: Params$Resource$Accounts$Adunits$Getadcode,
      options: MethodOptions | BodyResponseCallback<Schema$AdCode>,
      callback: BodyResponseCallback<Schema$AdCode>
    ): void;
    getAdCode(
      params: Params$Resource$Accounts$Adunits$Getadcode,
      callback: BodyResponseCallback<Schema$AdCode>
    ): void;
    getAdCode(callback: BodyResponseCallback<Schema$AdCode>): void;
    getAdCode(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Getadcode
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdCode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdCode> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Getadcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Getadcode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'adUnitId'],
        pathParams: ['accountId', 'adClientId', 'adUnitId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdCode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdCode>(parameters);
      }
    }

    /**
     * Insert the supplied ad unit into the specified publisher AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.adunits.insert({
     *     // Account which will contain the ad unit.
     *     accountId: 'placeholder-value',
     *     // Ad client into which to insert the ad unit.
     *     adClientId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "code": "my_code",
     *       //   "contentAdsSettings": {},
     *       //   "customStyle": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "mobileContentAdsSettings": {},
     *       //   "name": "my_name",
     *       //   "status": "my_status"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "contentAdsSettings": {},
     *   //   "customStyle": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mobileContentAdsSettings": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status"
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
    insert(
      params: Params$Resource$Accounts$Adunits$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Accounts$Adunits$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    insert(
      params: Params$Resource$Accounts$Adunits$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Adunits$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    insert(
      params: Params$Resource$Accounts$Adunits$Insert,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AdUnit>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Insert
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * List all ad units in the specified publisher's AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.adunits.list({
     *     // Account which contains the ad client.
     *     accountId: 'placeholder-value',
     *     // Ad client for which to list ad units.
     *     adClientId: 'placeholder-value',
     *     // Whether to include inactive ad units. Default: true.
     *     includeInactive: 'placeholder-value',
     *     // The maximum number of ad units to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
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
      params: Params$Resource$Accounts$Adunits$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Adunits$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnits>;
    list(
      params: Params$Resource$Accounts$Adunits$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Adunits$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnits>,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(
      params: Params$Resource$Accounts$Adunits$List,
      callback: BodyResponseCallback<Schema$AdUnits>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$List
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnits>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdUnits> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnits>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnits>(parameters);
      }
    }

    /**
     * Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.adunits.patch({
     *     // Account which contains the ad client.
     *     accountId: 'placeholder-value',
     *     // Ad client which contains the ad unit.
     *     adClientId: 'placeholder-value',
     *     // Ad unit to get.
     *     adUnitId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "code": "my_code",
     *       //   "contentAdsSettings": {},
     *       //   "customStyle": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "mobileContentAdsSettings": {},
     *       //   "name": "my_name",
     *       //   "status": "my_status"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "contentAdsSettings": {},
     *   //   "customStyle": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mobileContentAdsSettings": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status"
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
      params: Params$Resource$Accounts$Adunits$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Adunits$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    patch(
      params: Params$Resource$Accounts$Adunits$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Adunits$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    patch(
      params: Params$Resource$Accounts$Adunits$Patch,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AdUnit>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Patch
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId', 'adUnitId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }

    /**
     * Update the supplied ad unit in the specified publisher AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.adunits.update({
     *     // Account which contains the ad client.
     *     accountId: 'placeholder-value',
     *     // Ad client which contains the ad unit.
     *     adClientId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "code": "my_code",
     *       //   "contentAdsSettings": {},
     *       //   "customStyle": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "mobileContentAdsSettings": {},
     *       //   "name": "my_name",
     *       //   "status": "my_status"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "contentAdsSettings": {},
     *   //   "customStyle": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "mobileContentAdsSettings": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status"
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
    update(
      params: Params$Resource$Accounts$Adunits$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Accounts$Adunits$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdUnit>;
    update(
      params: Params$Resource$Accounts$Adunits$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Accounts$Adunits$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AdUnit>,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    update(
      params: Params$Resource$Accounts$Adunits$Update,
      callback: BodyResponseCallback<Schema$AdUnit>
    ): void;
    update(callback: BodyResponseCallback<Schema$AdUnit>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Adunits$Update
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Adunits$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Adunits$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/accounts/{accountId}/adclients/{adClientId}/adunits'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'adClientId'],
        pathParams: ['accountId', 'adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdUnit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdUnit>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Adunits$Delete
    extends StandardParameters {
    /**
     * Account which contains the ad unit.
     */
    accountId?: string;
    /**
     * Ad client for which to get ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to delete.
     */
    adUnitId?: string;
  }
  export interface Params$Resource$Accounts$Adunits$Get
    extends StandardParameters {
    /**
     * Account which contains the ad unit.
     */
    accountId?: string;
    /**
     * Ad client for which to get ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to get.
     */
    adUnitId?: string;
  }
  export interface Params$Resource$Accounts$Adunits$Getadcode
    extends StandardParameters {
    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client with contains the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to get the code for.
     */
    adUnitId?: string;
    /**
     * Host custom channel to attach to the ad code.
     */
    hostCustomChannelId?: string[];
  }
  export interface Params$Resource$Accounts$Adunits$Insert
    extends StandardParameters {
    /**
     * Account which will contain the ad unit.
     */
    accountId?: string;
    /**
     * Ad client into which to insert the ad unit.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdUnit;
  }
  export interface Params$Resource$Accounts$Adunits$List
    extends StandardParameters {
    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client for which to list ad units.
     */
    adClientId?: string;
    /**
     * Whether to include inactive ad units. Default: true.
     */
    includeInactive?: boolean;
    /**
     * The maximum number of ad units to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Adunits$Patch
    extends StandardParameters {
    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client which contains the ad unit.
     */
    adClientId?: string;
    /**
     * Ad unit to get.
     */
    adUnitId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdUnit;
  }
  export interface Params$Resource$Accounts$Adunits$Update
    extends StandardParameters {
    /**
     * Account which contains the ad client.
     */
    accountId?: string;
    /**
     * Ad client which contains the ad unit.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdUnit;
  }

  export class Resource$Accounts$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.accounts.reports.generate({
     *     // Hosted account upon which to report.
     *     accountId: 'placeholder-value',
     *     // Dimensions to base the report on.
     *     dimension: '[a-zA-Z_]+',
     *     // End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     *     endDate:
     *       '&#92;d{4}-&#92;d{2}-&#92;d{2}|(today|startOfMonth|startOfYear)(([&#92;-&#92;+]&#92;d+[dwmy]){0,3}?)',
     *     // Filters to be run on the report.
     *     filter: '[a-zA-Z_]+(==|=@).+',
     *     // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     *     locale: '[a-zA-Z_]+',
     *     // The maximum number of rows of report data to return.
     *     maxResults: 'placeholder-value',
     *     // Numeric columns to include in the report.
     *     metric: '[a-zA-Z_]+',
     *     // The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     *     sort: '(&#92;+|-)?[a-zA-Z_]+',
     *     // Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     *     startDate:
     *       '&#92;d{4}-&#92;d{2}-&#92;d{2}|(today|startOfMonth|startOfYear)(([&#92;-&#92;+]&#92;d+[dwmy]){0,3}?)',
     *     // Index of the first row of report data to return.
     *     startIndex: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averages": [],
     *   //   "headers": [],
     *   //   "kind": "my_kind",
     *   //   "rows": [],
     *   //   "totalMatchedRows": "my_totalMatchedRows",
     *   //   "totals": [],
     *   //   "warnings": []
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
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generate(
      params?: Params$Resource$Accounts$Reports$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    generate(
      params: Params$Resource$Accounts$Reports$Generate,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    generate(callback: BodyResponseCallback<Schema$Report>): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Generate
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Report> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Reports$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Reports$Generate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/adsensehost/v4.1/accounts/{accountId}/reports'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'startDate', 'endDate'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Reports$Generate
    extends StandardParameters {
    /**
     * Hosted account upon which to report.
     */
    accountId?: string;
    /**
     * Dimensions to base the report on.
     */
    dimension?: string[];
    /**
     * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    endDate?: string;
    /**
     * Filters to be run on the report.
     */
    filter?: string[];
    /**
     * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     */
    locale?: string;
    /**
     * The maximum number of rows of report data to return.
     */
    maxResults?: number;
    /**
     * Numeric columns to include in the report.
     */
    metric?: string[];
    /**
     * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     */
    sort?: string[];
    /**
     * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    startDate?: string;
    /**
     * Index of the first row of report data to return.
     */
    startIndex?: number;
  }

  export class Resource$Adclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get information about one of the ad clients in the Host AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.adclients.get({
     *     // Ad client to get.
     *     adClientId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "arcOptIn": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "productCode": "my_productCode",
     *   //   "supportsReporting": false
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
      params: Params$Resource$Adclients$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Adclients$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdClient>;
    get(
      params: Params$Resource$Adclients$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Adclients$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdClient>,
      callback: BodyResponseCallback<Schema$AdClient>
    ): void;
    get(
      params: Params$Resource$Adclients$Get,
      callback: BodyResponseCallback<Schema$AdClient>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdClient>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Adclients$Get
        | BodyResponseCallback<Schema$AdClient>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdClient>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdClient>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdClient> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Adclients$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Adclients$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/adsensehost/v4.1/adclients/{adClientId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdClient>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdClient>(parameters);
      }
    }

    /**
     * List all host ad clients in this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.adclients.list({
     *     // The maximum number of ad clients to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
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
      params: Params$Resource$Adclients$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Adclients$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdClients>;
    list(
      params: Params$Resource$Adclients$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Adclients$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdClients>,
      callback: BodyResponseCallback<Schema$AdClients>
    ): void;
    list(
      params: Params$Resource$Adclients$List,
      callback: BodyResponseCallback<Schema$AdClients>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdClients>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Adclients$List
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdClients>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdClients> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Adclients$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Adclients$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/adsensehost/v4.1/adclients').replace(
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
        createAPIRequest<Schema$AdClients>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdClients>(parameters);
      }
    }
  }

  export interface Params$Resource$Adclients$Get extends StandardParameters {
    /**
     * Ad client to get.
     */
    adClientId?: string;
  }
  export interface Params$Resource$Adclients$List extends StandardParameters {
    /**
     * The maximum number of ad clients to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }

  export class Resource$Associationsessions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an association session for initiating an association with an AdSense user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.associationsessions.start({
     *     // The URL to redirect the user to once association is completed. It receives a token parameter that can then be used to retrieve the associated account.
     *     callbackUrl: 'placeholder-value',
     *     // Products to associate with the user.
     *     productCode: 'placeholder-value',
     *     // The preferred locale of the user.
     *     userLocale: 'placeholder-value',
     *     // The locale of the user's hosted website.
     *     websiteLocale: 'placeholder-value',
     *     // The URL of the user's hosted website.
     *     websiteUrl: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "productCodes": [],
     *   //   "redirectUrl": "my_redirectUrl",
     *   //   "status": "my_status",
     *   //   "userLocale": "my_userLocale",
     *   //   "websiteLocale": "my_websiteLocale",
     *   //   "websiteUrl": "my_websiteUrl"
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
    start(
      params: Params$Resource$Associationsessions$Start,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    start(
      params?: Params$Resource$Associationsessions$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssociationSession>;
    start(
      params: Params$Resource$Associationsessions$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Associationsessions$Start,
      options: MethodOptions | BodyResponseCallback<Schema$AssociationSession>,
      callback: BodyResponseCallback<Schema$AssociationSession>
    ): void;
    start(
      params: Params$Resource$Associationsessions$Start,
      callback: BodyResponseCallback<Schema$AssociationSession>
    ): void;
    start(callback: BodyResponseCallback<Schema$AssociationSession>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Associationsessions$Start
        | BodyResponseCallback<Schema$AssociationSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssociationSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssociationSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AssociationSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Associationsessions$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Associationsessions$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/adsensehost/v4.1/associationsessions/start'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['productCode', 'websiteUrl'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssociationSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssociationSession>(parameters);
      }
    }

    /**
     * Verify an association session after the association callback returns from AdSense signup.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.associationsessions.verify({
     *     // The token returned to the association callback URL.
     *     token: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "productCodes": [],
     *   //   "redirectUrl": "my_redirectUrl",
     *   //   "status": "my_status",
     *   //   "userLocale": "my_userLocale",
     *   //   "websiteLocale": "my_websiteLocale",
     *   //   "websiteUrl": "my_websiteUrl"
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
    verify(
      params: Params$Resource$Associationsessions$Verify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    verify(
      params?: Params$Resource$Associationsessions$Verify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssociationSession>;
    verify(
      params: Params$Resource$Associationsessions$Verify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verify(
      params: Params$Resource$Associationsessions$Verify,
      options: MethodOptions | BodyResponseCallback<Schema$AssociationSession>,
      callback: BodyResponseCallback<Schema$AssociationSession>
    ): void;
    verify(
      params: Params$Resource$Associationsessions$Verify,
      callback: BodyResponseCallback<Schema$AssociationSession>
    ): void;
    verify(callback: BodyResponseCallback<Schema$AssociationSession>): void;
    verify(
      paramsOrCallback?:
        | Params$Resource$Associationsessions$Verify
        | BodyResponseCallback<Schema$AssociationSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssociationSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssociationSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AssociationSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Associationsessions$Verify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Associationsessions$Verify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/adsensehost/v4.1/associationsessions/verify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['token'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssociationSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssociationSession>(parameters);
      }
    }
  }

  export interface Params$Resource$Associationsessions$Start
    extends StandardParameters {
    /**
     * The URL to redirect the user to once association is completed. It receives a token parameter that can then be used to retrieve the associated account.
     */
    callbackUrl?: string;
    /**
     * Products to associate with the user.
     */
    productCode?: string[];
    /**
     * The preferred locale of the user.
     */
    userLocale?: string;
    /**
     * The locale of the user's hosted website.
     */
    websiteLocale?: string;
    /**
     * The URL of the user's hosted website.
     */
    websiteUrl?: string;
  }
  export interface Params$Resource$Associationsessions$Verify
    extends StandardParameters {
    /**
     * The token returned to the association callback URL.
     */
    token?: string;
  }

  export class Resource$Customchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete a specific custom channel from the host AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.customchannels.delete({
     *     // Ad client from which to delete the custom channel.
     *     adClientId: 'placeholder-value',
     *     // Custom channel to delete.
     *     customChannelId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
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
      params: Params$Resource$Customchannels$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Customchannels$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    delete(
      params: Params$Resource$Customchannels$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Customchannels$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    delete(
      params: Params$Resource$Customchannels$Delete,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    delete(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Delete
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomChannel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId', 'customChannelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * Get a specific custom channel from the host AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.customchannels.get({
     *     // Ad client from which to get the custom channel.
     *     adClientId: 'placeholder-value',
     *     // Custom channel to get.
     *     customChannelId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
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
      params: Params$Resource$Customchannels$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customchannels$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    get(
      params: Params$Resource$Customchannels$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customchannels$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    get(
      params: Params$Resource$Customchannels$Get,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Get
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomChannel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels/{customChannelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId', 'customChannelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * Add a new custom channel to the host AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.customchannels.insert({
     *     // Ad client to which the new custom channel will be added.
     *     adClientId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "code": "my_code",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
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
    insert(
      params: Params$Resource$Customchannels$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Customchannels$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    insert(
      params: Params$Resource$Customchannels$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Customchannels$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    insert(
      params: Params$Resource$Customchannels$Insert,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Insert
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomChannel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * List all host custom channels in this AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.customchannels.list({
     *     // Ad client for which to list custom channels.
     *     adClientId: 'placeholder-value',
     *     // The maximum number of custom channels to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
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
      params: Params$Resource$Customchannels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customchannels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannels>;
    list(
      params: Params$Resource$Customchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customchannels$List,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(
      params: Params$Resource$Customchannels$List,
      callback: BodyResponseCallback<Schema$CustomChannels>
    ): void;
    list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customchannels$List
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannels>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomChannels> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannels>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannels>(parameters);
      }
    }

    /**
     * Update a custom channel in the host AdSense account. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.customchannels.patch({
     *     // Ad client in which the custom channel will be updated.
     *     adClientId: 'placeholder-value',
     *     // Custom channel to get.
     *     customChannelId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "code": "my_code",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
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
      params: Params$Resource$Customchannels$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Customchannels$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    patch(
      params: Params$Resource$Customchannels$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Customchannels$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    patch(
      params: Params$Resource$Customchannels$Patch,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Patch
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomChannel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'customChannelId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }

    /**
     * Update a custom channel in the host AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.customchannels.update({
     *     // Ad client in which the custom channel will be updated.
     *     adClientId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "code": "my_code",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": "my_code",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
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
    update(
      params: Params$Resource$Customchannels$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Customchannels$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomChannel>;
    update(
      params: Params$Resource$Customchannels$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Customchannels$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    update(
      params: Params$Resource$Customchannels$Update,
      callback: BodyResponseCallback<Schema$CustomChannel>
    ): void;
    update(callback: BodyResponseCallback<Schema$CustomChannel>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Customchannels$Update
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomChannel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomChannel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customchannels$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customchannels$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/customchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomChannel>(parameters);
      }
    }
  }

  export interface Params$Resource$Customchannels$Delete
    extends StandardParameters {
    /**
     * Ad client from which to delete the custom channel.
     */
    adClientId?: string;
    /**
     * Custom channel to delete.
     */
    customChannelId?: string;
  }
  export interface Params$Resource$Customchannels$Get
    extends StandardParameters {
    /**
     * Ad client from which to get the custom channel.
     */
    adClientId?: string;
    /**
     * Custom channel to get.
     */
    customChannelId?: string;
  }
  export interface Params$Resource$Customchannels$Insert
    extends StandardParameters {
    /**
     * Ad client to which the new custom channel will be added.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomChannel;
  }
  export interface Params$Resource$Customchannels$List
    extends StandardParameters {
    /**
     * Ad client for which to list custom channels.
     */
    adClientId?: string;
    /**
     * The maximum number of custom channels to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Customchannels$Patch
    extends StandardParameters {
    /**
     * Ad client in which the custom channel will be updated.
     */
    adClientId?: string;
    /**
     * Custom channel to get.
     */
    customChannelId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomChannel;
  }
  export interface Params$Resource$Customchannels$Update
    extends StandardParameters {
    /**
     * Ad client in which the custom channel will be updated.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomChannel;
  }

  export class Resource$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.reports.generate({
     *     // Dimensions to base the report on.
     *     dimension: '[a-zA-Z_]+',
     *     // End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     *     endDate:
     *       '&#92;d{4}-&#92;d{2}-&#92;d{2}|(today|startOfMonth|startOfYear)(([&#92;-&#92;+]&#92;d+[dwmy]){0,3}?)',
     *     // Filters to be run on the report.
     *     filter: '[a-zA-Z_]+(==|=@).+',
     *     // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     *     locale: '[a-zA-Z_]+',
     *     // The maximum number of rows of report data to return.
     *     maxResults: 'placeholder-value',
     *     // Numeric columns to include in the report.
     *     metric: '[a-zA-Z_]+',
     *     // The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     *     sort: '(&#92;+|-)?[a-zA-Z_]+',
     *     // Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     *     startDate:
     *       '&#92;d{4}-&#92;d{2}-&#92;d{2}|(today|startOfMonth|startOfYear)(([&#92;-&#92;+]&#92;d+[dwmy]){0,3}?)',
     *     // Index of the first row of report data to return.
     *     startIndex: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averages": [],
     *   //   "headers": [],
     *   //   "kind": "my_kind",
     *   //   "rows": [],
     *   //   "totalMatchedRows": "my_totalMatchedRows",
     *   //   "totals": [],
     *   //   "warnings": []
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
    generate(
      params: Params$Resource$Reports$Generate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generate(
      params?: Params$Resource$Reports$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
    generate(
      params: Params$Resource$Reports$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Reports$Generate,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    generate(
      params: Params$Resource$Reports$Generate,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    generate(callback: BodyResponseCallback<Schema$Report>): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Reports$Generate
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Report> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Generate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/adsensehost/v4.1/reports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['startDate', 'endDate'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Generate extends StandardParameters {
    /**
     * Dimensions to base the report on.
     */
    dimension?: string[];
    /**
     * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    endDate?: string;
    /**
     * Filters to be run on the report.
     */
    filter?: string[];
    /**
     * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     */
    locale?: string;
    /**
     * The maximum number of rows of report data to return.
     */
    maxResults?: number;
    /**
     * Numeric columns to include in the report.
     */
    metric?: string[];
    /**
     * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     */
    sort?: string[];
    /**
     * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    startDate?: string;
    /**
     * Index of the first row of report data to return.
     */
    startIndex?: number;
  }

  export class Resource$Urlchannels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete a URL channel from the host AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.urlchannels.delete({
     *     // Ad client from which to delete the URL channel.
     *     adClientId: 'placeholder-value',
     *     // URL channel to delete.
     *     urlChannelId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "urlPattern": "my_urlPattern"
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
      params: Params$Resource$Urlchannels$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Urlchannels$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UrlChannel>;
    delete(
      params: Params$Resource$Urlchannels$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Urlchannels$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$UrlChannel>,
      callback: BodyResponseCallback<Schema$UrlChannel>
    ): void;
    delete(
      params: Params$Resource$Urlchannels$Delete,
      callback: BodyResponseCallback<Schema$UrlChannel>
    ): void;
    delete(callback: BodyResponseCallback<Schema$UrlChannel>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Urlchannels$Delete
        | BodyResponseCallback<Schema$UrlChannel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UrlChannel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UrlChannel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UrlChannel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Urlchannels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlchannels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/adsensehost/v4.1/adclients/{adClientId}/urlchannels/{urlChannelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['adClientId', 'urlChannelId'],
        pathParams: ['adClientId', 'urlChannelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UrlChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UrlChannel>(parameters);
      }
    }

    /**
     * Add a new URL channel to the host AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.urlchannels.insert({
     *     // Ad client to which the new URL channel will be added.
     *     adClientId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "urlPattern": "my_urlPattern"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "urlPattern": "my_urlPattern"
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
    insert(
      params: Params$Resource$Urlchannels$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Urlchannels$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UrlChannel>;
    insert(
      params: Params$Resource$Urlchannels$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Urlchannels$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$UrlChannel>,
      callback: BodyResponseCallback<Schema$UrlChannel>
    ): void;
    insert(
      params: Params$Resource$Urlchannels$Insert,
      callback: BodyResponseCallback<Schema$UrlChannel>
    ): void;
    insert(callback: BodyResponseCallback<Schema$UrlChannel>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Urlchannels$Insert
        | BodyResponseCallback<Schema$UrlChannel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UrlChannel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UrlChannel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UrlChannel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Urlchannels$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlchannels$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/adsensehost/v4.1/adclients/{adClientId}/urlchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UrlChannel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UrlChannel>(parameters);
      }
    }

    /**
     * List all host URL channels in the host AdSense account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsensehost.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adsensehost = google.adsensehost('v4.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsensehost'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsensehost.urlchannels.list({
     *     // Ad client for which to list URL channels.
     *     adClientId: 'placeholder-value',
     *     // The maximum number of URL channels to include in the response, used for paging.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
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
      params: Params$Resource$Urlchannels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Urlchannels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UrlChannels>;
    list(
      params: Params$Resource$Urlchannels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Urlchannels$List,
      options: MethodOptions | BodyResponseCallback<Schema$UrlChannels>,
      callback: BodyResponseCallback<Schema$UrlChannels>
    ): void;
    list(
      params: Params$Resource$Urlchannels$List,
      callback: BodyResponseCallback<Schema$UrlChannels>
    ): void;
    list(callback: BodyResponseCallback<Schema$UrlChannels>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Urlchannels$List
        | BodyResponseCallback<Schema$UrlChannels>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UrlChannels>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UrlChannels>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UrlChannels> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Urlchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Urlchannels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/adsensehost/v4.1/adclients/{adClientId}/urlchannels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['adClientId'],
        pathParams: ['adClientId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UrlChannels>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UrlChannels>(parameters);
      }
    }
  }

  export interface Params$Resource$Urlchannels$Delete
    extends StandardParameters {
    /**
     * Ad client from which to delete the URL channel.
     */
    adClientId?: string;
    /**
     * URL channel to delete.
     */
    urlChannelId?: string;
  }
  export interface Params$Resource$Urlchannels$Insert
    extends StandardParameters {
    /**
     * Ad client to which the new URL channel will be added.
     */
    adClientId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UrlChannel;
  }
  export interface Params$Resource$Urlchannels$List extends StandardParameters {
    /**
     * Ad client for which to list URL channels.
     */
    adClientId?: string;
    /**
     * The maximum number of URL channels to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
}
