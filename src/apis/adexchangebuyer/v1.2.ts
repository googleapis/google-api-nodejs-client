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

export namespace adexchangebuyer_v1_2 {
  export interface Options extends GlobalOptions {
    version: 'v1.2';
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
   * Ad Exchange Buyer API
   *
   * Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const adexchangebuyer = google.adexchangebuyer('v1.2');
   * ```
   */
  export class Adexchangebuyer {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    creatives: Resource$Creatives;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.creatives = new Resource$Creatives(this.context);
    }
  }

  /**
   * Configuration data for an Ad Exchange buyer account.
   */
  export interface Schema$Account {
    /**
     * Your bidder locations that have distinct URLs.
     */
    bidderLocation?: Array<{
      maximumQps?: number;
      region?: string;
      url?: string;
    }> | null;
    /**
     * The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.
     */
    cookieMatchingNid?: string | null;
    /**
     * The base URL used in cookie match requests.
     */
    cookieMatchingUrl?: string | null;
    /**
     * Account id.
     */
    id?: number | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.
     */
    maximumActiveCreatives?: number | null;
    /**
     * The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
     */
    maximumTotalQps?: number | null;
    /**
     * The number of creatives that this account inserted or bid with in the last 30 days.
     */
    numberActiveCreatives?: number | null;
  }
  /**
   * An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
   */
  export interface Schema$AccountsList {
    /**
     * A list of accounts.
     */
    items?: Schema$Account[];
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  /**
   * A creative and its classification data.
   */
  export interface Schema$Creative {
    /**
     * Account id.
     */
    accountId?: number | null;
    /**
     * Detected advertiser id, if any. Read-only. This field should not be set in requests.
     */
    advertiserId?: string[] | null;
    /**
     * The name of the company being advertised in the creative.
     */
    advertiserName?: string | null;
    /**
     * The agency id for this creative.
     */
    agencyId?: string | null;
    /**
     * The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).
     */
    apiUploadTimestamp?: string | null;
    /**
     * All attributes for the ads that may be shown from this snippet.
     */
    attribute?: number[] | null;
    /**
     * A buyer-specific id identifying the creative in this ad.
     */
    buyerCreativeId?: string | null;
    /**
     * The set of destination urls for the snippet.
     */
    clickThroughUrl?: string[] | null;
    /**
     * Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.
     */
    corrections?: Array<{details?: string[]; reason?: string}> | null;
    /**
     * The reasons for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests.
     */
    disapprovalReasons?: Array<{details?: string[]; reason?: string}> | null;
    /**
     * The filtering reasons for the creative. Read-only. This field should not be set in requests.
     */
    filteringReasons?: {
      date?: string;
      reasons?: Array<{filteringCount?: string; filteringStatus?: number}>;
    } | null;
    /**
     * Ad height.
     */
    height?: number | null;
    /**
     * The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set.
     */
    HTMLSnippet?: string | null;
    /**
     * The set of urls to be called to record an impression.
     */
    impressionTrackingUrl?: string[] | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Detected product categories, if any. Read-only. This field should not be set in requests.
     */
    productCategories?: number[] | null;
    /**
     * All restricted categories for the ads that may be shown from this snippet.
     */
    restrictedCategories?: number[] | null;
    /**
     * Detected sensitive categories, if any. Read-only. This field should not be set in requests.
     */
    sensitiveCategories?: number[] | null;
    /**
     * Creative serving status. Read-only. This field should not be set in requests.
     */
    status?: string | null;
    /**
     * All vendor types for the ads that may be shown from this snippet.
     */
    vendorType?: number[] | null;
    /**
     * The version for this creative. Read-only. This field should not be set in requests.
     */
    version?: number | null;
    /**
     * The url to fetch a video ad. If set, HTMLSnippet should not be set.
     */
    videoURL?: string | null;
    /**
     * Ad width.
     */
    width?: number | null;
  }
  /**
   * The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
   */
  export interface Schema$CreativesList {
    /**
     * A list of creatives.
     */
    items?: Schema$Creative[];
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets one account by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('v1.2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.accounts.get({
     *     // The account id
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bidderLocation": [],
     *   //   "cookieMatchingNid": "my_cookieMatchingNid",
     *   //   "cookieMatchingUrl": "my_cookieMatchingUrl",
     *   //   "id": 0,
     *   //   "kind": "my_kind",
     *   //   "maximumActiveCreatives": 0,
     *   //   "maximumTotalQps": 0,
     *   //   "numberActiveCreatives": 0
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
            url: (rootUrl + '/adexchangebuyer/v1.2/accounts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
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
     * Retrieves the authenticated user's list of accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('v1.2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.accounts.list({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
    ): GaxiosPromise<Schema$AccountsList>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options: MethodOptions | BodyResponseCallback<Schema$AccountsList>,
      callback: BodyResponseCallback<Schema$AccountsList>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$AccountsList>
    ): void;
    list(callback: BodyResponseCallback<Schema$AccountsList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$AccountsList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountsList> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/adexchangebuyer/v1.2/accounts').replace(
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
        createAPIRequest<Schema$AccountsList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountsList>(parameters);
      }
    }

    /**
     * Updates an existing account. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('v1.2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.accounts.patch({
     *     // The account id
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bidderLocation": [],
     *       //   "cookieMatchingNid": "my_cookieMatchingNid",
     *       //   "cookieMatchingUrl": "my_cookieMatchingUrl",
     *       //   "id": 0,
     *       //   "kind": "my_kind",
     *       //   "maximumActiveCreatives": 0,
     *       //   "maximumTotalQps": 0,
     *       //   "numberActiveCreatives": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bidderLocation": [],
     *   //   "cookieMatchingNid": "my_cookieMatchingNid",
     *   //   "cookieMatchingUrl": "my_cookieMatchingUrl",
     *   //   "id": 0,
     *   //   "kind": "my_kind",
     *   //   "maximumActiveCreatives": 0,
     *   //   "maximumTotalQps": 0,
     *   //   "numberActiveCreatives": 0
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
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Account>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Patch
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
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Patch;
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
            url: (rootUrl + '/adexchangebuyer/v1.2/accounts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
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
     * Updates an existing account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('v1.2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.accounts.update({
     *     // The account id
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bidderLocation": [],
     *       //   "cookieMatchingNid": "my_cookieMatchingNid",
     *       //   "cookieMatchingUrl": "my_cookieMatchingUrl",
     *       //   "id": 0,
     *       //   "kind": "my_kind",
     *       //   "maximumActiveCreatives": 0,
     *       //   "maximumTotalQps": 0,
     *       //   "numberActiveCreatives": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bidderLocation": [],
     *   //   "cookieMatchingNid": "my_cookieMatchingNid",
     *   //   "cookieMatchingUrl": "my_cookieMatchingUrl",
     *   //   "id": 0,
     *   //   "kind": "my_kind",
     *   //   "maximumActiveCreatives": 0,
     *   //   "maximumTotalQps": 0,
     *   //   "numberActiveCreatives": 0
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
      params: Params$Resource$Accounts$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Accounts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    update(
      params: Params$Resource$Accounts$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Accounts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(
      params: Params$Resource$Accounts$Update,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(callback: BodyResponseCallback<Schema$Account>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Update
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
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Update;
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
            url: (rootUrl + '/adexchangebuyer/v1.2/accounts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
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
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * The account id
     */
    id?: number;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {}
  export interface Params$Resource$Accounts$Patch extends StandardParameters {
    /**
     * The account id
     */
    id?: number;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }
  export interface Params$Resource$Accounts$Update extends StandardParameters {
    /**
     * The account id
     */
    id?: number;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }

  export class Resource$Creatives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('v1.2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.creatives.get({
     *     // The id for the account that will serve this creative.
     *     accountId: 'placeholder-value',
     *     // The buyer-specific id for this creative.
     *     buyerCreativeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "HTMLSnippet": "my_HTMLSnippet",
     *   //   "accountId": 0,
     *   //   "advertiserId": [],
     *   //   "advertiserName": "my_advertiserName",
     *   //   "agencyId": "my_agencyId",
     *   //   "apiUploadTimestamp": "my_apiUploadTimestamp",
     *   //   "attribute": [],
     *   //   "buyerCreativeId": "my_buyerCreativeId",
     *   //   "clickThroughUrl": [],
     *   //   "corrections": [],
     *   //   "disapprovalReasons": [],
     *   //   "filteringReasons": {},
     *   //   "height": 0,
     *   //   "impressionTrackingUrl": [],
     *   //   "kind": "my_kind",
     *   //   "productCategories": [],
     *   //   "restrictedCategories": [],
     *   //   "sensitiveCategories": [],
     *   //   "status": "my_status",
     *   //   "vendorType": [],
     *   //   "version": 0,
     *   //   "videoURL": "my_videoURL",
     *   //   "width": 0
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
      params: Params$Resource$Creatives$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Creatives$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
    get(
      params: Params$Resource$Creatives$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Creatives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    get(
      params: Params$Resource$Creatives$Get,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    get(callback: BodyResponseCallback<Schema$Creative>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Creatives$Get
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Creative> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Get;
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
              '/adexchangebuyer/v1.2/creatives/{accountId}/{buyerCreativeId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'buyerCreativeId'],
        pathParams: ['accountId', 'buyerCreativeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * Submit a new creative.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('v1.2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.creatives.insert({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "HTMLSnippet": "my_HTMLSnippet",
     *       //   "accountId": 0,
     *       //   "advertiserId": [],
     *       //   "advertiserName": "my_advertiserName",
     *       //   "agencyId": "my_agencyId",
     *       //   "apiUploadTimestamp": "my_apiUploadTimestamp",
     *       //   "attribute": [],
     *       //   "buyerCreativeId": "my_buyerCreativeId",
     *       //   "clickThroughUrl": [],
     *       //   "corrections": [],
     *       //   "disapprovalReasons": [],
     *       //   "filteringReasons": {},
     *       //   "height": 0,
     *       //   "impressionTrackingUrl": [],
     *       //   "kind": "my_kind",
     *       //   "productCategories": [],
     *       //   "restrictedCategories": [],
     *       //   "sensitiveCategories": [],
     *       //   "status": "my_status",
     *       //   "vendorType": [],
     *       //   "version": 0,
     *       //   "videoURL": "my_videoURL",
     *       //   "width": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "HTMLSnippet": "my_HTMLSnippet",
     *   //   "accountId": 0,
     *   //   "advertiserId": [],
     *   //   "advertiserName": "my_advertiserName",
     *   //   "agencyId": "my_agencyId",
     *   //   "apiUploadTimestamp": "my_apiUploadTimestamp",
     *   //   "attribute": [],
     *   //   "buyerCreativeId": "my_buyerCreativeId",
     *   //   "clickThroughUrl": [],
     *   //   "corrections": [],
     *   //   "disapprovalReasons": [],
     *   //   "filteringReasons": {},
     *   //   "height": 0,
     *   //   "impressionTrackingUrl": [],
     *   //   "kind": "my_kind",
     *   //   "productCategories": [],
     *   //   "restrictedCategories": [],
     *   //   "sensitiveCategories": [],
     *   //   "status": "my_status",
     *   //   "vendorType": [],
     *   //   "version": 0,
     *   //   "videoURL": "my_videoURL",
     *   //   "width": 0
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
      params: Params$Resource$Creatives$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Creatives$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
    insert(
      params: Params$Resource$Creatives$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Creatives$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    insert(
      params: Params$Resource$Creatives$Insert,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Creative>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Creatives$Insert
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Creative>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Creative> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Insert;
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
            url: (rootUrl + '/adexchangebuyer/v1.2/creatives').replace(
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
        createAPIRequest<Schema$Creative>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('v1.2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.creatives.list({
     *     // Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     *     maxResults: 'placeholder-value',
     *     // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     *     pageToken: 'placeholder-value',
     *     // When specified, only creatives having the given status are returned.
     *     statusFilter: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Creatives$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Creatives$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativesList>;
    list(
      params: Params$Resource$Creatives$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Creatives$List,
      options: MethodOptions | BodyResponseCallback<Schema$CreativesList>,
      callback: BodyResponseCallback<Schema$CreativesList>
    ): void;
    list(
      params: Params$Resource$Creatives$List,
      callback: BodyResponseCallback<Schema$CreativesList>
    ): void;
    list(callback: BodyResponseCallback<Schema$CreativesList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Creatives$List
        | BodyResponseCallback<Schema$CreativesList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreativesList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreativesList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CreativesList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$List;
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
            url: (rootUrl + '/adexchangebuyer/v1.2/creatives').replace(
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
        createAPIRequest<Schema$CreativesList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CreativesList>(parameters);
      }
    }
  }

  export interface Params$Resource$Creatives$Get extends StandardParameters {
    /**
     * The id for the account that will serve this creative.
     */
    accountId?: number;
    /**
     * The buyer-specific id for this creative.
     */
    buyerCreativeId?: string;
  }
  export interface Params$Resource$Creatives$Insert extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }
  export interface Params$Resource$Creatives$List extends StandardParameters {
    /**
     * Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     */
    maxResults?: number;
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     */
    pageToken?: string;
    /**
     * When specified, only creatives having the given status are returned.
     */
    statusFilter?: string;
  }
}
