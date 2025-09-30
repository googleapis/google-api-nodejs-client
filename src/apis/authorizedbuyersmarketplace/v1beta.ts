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

export namespace authorizedbuyersmarketplace_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Authorized Buyers Marketplace API
   *
   * The Authorized Buyers Marketplace API lets buyers programmatically discover inventory; propose, retrieve and negotiate deals with publishers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const authorizedbuyersmarketplace = google.authorizedbuyersmarketplace('v1beta');
   * ```
   */
  export class Authorizedbuyersmarketplace {
    context: APIRequestContext;
    curators: Resource$Curators;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.curators = new Resource$Curators(this.context);
    }
  }

  /**
   * Request message for activating a data segment
   */
  export interface Schema$ActivateDataSegmentRequest {}
  /**
   * Defines an identifier for a segment of inventory that can be targeted by curators or media planners in the deals or auction packages UI. Curation of inventory is done by curators on external platforms.
   */
  export interface Schema$DataSegment {
    /**
     * Optional. A fixed fee charged per thousand impressions. Once set, the currency code cannot be changed.
     */
    cpmFee?: Schema$Money;
    /**
     * Output only. Time the data segment was created.
     */
    createTime?: string | null;
    /**
     * Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{curatorAccountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string | null;
    /**
     * Output only. The state of the data segment.
     */
    state?: string | null;
    /**
     * Output only. Time the data segment was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for deactivating a data segment
   */
  export interface Schema$DeactivateDataSegmentRequest {}
  /**
   * Response message for listing data segments.
   */
  export interface Schema$ListDataSegmentsResponse {
    /**
     * The list of data segments.
     */
    dataSegments?: Schema$DataSegment[];
    /**
     * Continuation token for fetching the next page of results. Pass this value in the ListDataSegmentsRequest.pageToken field in the subsequent call to the `ListDataSegments` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }

  export class Resource$Curators {
    context: APIRequestContext;
    dataSegments: Resource$Curators$Datasegments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataSegments = new Resource$Curators$Datasegments(this.context);
    }
  }

  export class Resource$Curators$Datasegments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates a data segment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.activate({
     *     // Required. Name of data segment to activate. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
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
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    activate(
      params?: Params$Resource$Curators$Datasegments$Activate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    activate(
      params: Params$Resource$Curators$Datasegments$Activate,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    activate(callback: BodyResponseCallback<Schema$DataSegment>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Activate
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:activate').replace(
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * Creates a data segment owned by the listed curator. The data segment will be created in the `ACTIVE` state, meaning it will be immediately available for buyers to use in preferred deals, private auction deals, and auction packages.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.create({
     *     // Required. The parent resource where this data segment will be created. v1alpha format: `buyers/{accountId\}` v1beta format: `curators/{accountId\}`
     *     parent: 'curators/my-curator',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cpmFee": {},
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Curators$Datasegments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Curators$Datasegments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    create(
      params: Params$Resource$Curators$Datasegments$Create,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    create(callback: BodyResponseCallback<Schema$DataSegment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Create
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/dataSegments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * Deactivates a data segment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await authorizedbuyersmarketplace.curators.dataSegments.deactivate({
     *       // Required. Name of data segment to deactivate. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     *       name: 'curators/my-curator/dataSegments/my-dataSegment',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deactivate(
      params?: Params$Resource$Curators$Datasegments$Deactivate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    deactivate(
      params: Params$Resource$Curators$Datasegments$Deactivate,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    deactivate(callback: BodyResponseCallback<Schema$DataSegment>): void;
    deactivate(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Deactivate
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Deactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Deactivate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:deactivate').replace(
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * Gets a data segment given its name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.get({
     *     // Required. Name of data segment to get. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Curators$Datasegments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Curators$Datasegments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    get(
      params: Params$Resource$Curators$Datasegments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Curators$Datasegments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    get(
      params: Params$Resource$Curators$Datasegments$Get,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSegment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Get
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }

    /**
     * List the data segments owned by a curator.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.list({
     *     // Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent curator that can access the data segment. v1alpha format: `buyers/{accountId\}` v1beta format: `curators/{accountId\}`
     *     parent: 'curators/my-curator',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSegments": [],
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
      params: Params$Resource$Curators$Datasegments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Curators$Datasegments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDataSegmentsResponse>>;
    list(
      params: Params$Resource$Curators$Datasegments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Curators$Datasegments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>,
      callback: BodyResponseCallback<Schema$ListDataSegmentsResponse>
    ): void;
    list(
      params: Params$Resource$Curators$Datasegments$List,
      callback: BodyResponseCallback<Schema$ListDataSegmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSegmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$List
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataSegmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDataSegmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/dataSegments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDataSegmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataSegmentsResponse>(parameters);
      }
    }

    /**
     * Updates a data segment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/authorizedbuyersmarketplace.googleapis.com
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
     * const authorizedbuyersmarketplace =
     *   google.authorizedbuyersmarketplace('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await authorizedbuyersmarketplace.curators.dataSegments.patch({
     *     // Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{curatorAccountId\}/dataSegments/{curatorDataSegmentId\}`
     *     name: 'curators/my-curator/dataSegments/my-dataSegment',
     *     // Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cpmFee": {},
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cpmFee": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Curators$Datasegments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Curators$Datasegments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>;
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$DataSegment>,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    patch(
      params: Params$Resource$Curators$Datasegments$Patch,
      callback: BodyResponseCallback<Schema$DataSegment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$DataSegment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Curators$Datasegments$Patch
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSegment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSegment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Curators$Datasegments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Curators$Datasegments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://authorizedbuyersmarketplace.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$DataSegment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSegment>(parameters);
      }
    }
  }

  export interface Params$Resource$Curators$Datasegments$Activate
    extends StandardParameters {
    /**
     * Required. Name of data segment to activate. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateDataSegmentRequest;
  }
  export interface Params$Resource$Curators$Datasegments$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this data segment will be created. v1alpha format: `buyers/{accountId\}` v1beta format: `curators/{accountId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSegment;
  }
  export interface Params$Resource$Curators$Datasegments$Deactivate
    extends StandardParameters {
    /**
     * Required. Name of data segment to deactivate. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeactivateDataSegmentRequest;
  }
  export interface Params$Resource$Curators$Datasegments$Get
    extends StandardParameters {
    /**
     * Required. Name of data segment to get. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{accountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Curators$Datasegments$List
    extends StandardParameters {
    /**
     * Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     */
    pageSize?: number;
    /**
     * Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken
     */
    pageToken?: string;
    /**
     * Required. Name of the parent curator that can access the data segment. v1alpha format: `buyers/{accountId\}` v1beta format: `curators/{accountId\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Curators$Datasegments$Patch
    extends StandardParameters {
    /**
     * Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId\}/dataSegments/{curatorDataSegmentId\}` v1beta format: `curators/{curatorAccountId\}/dataSegments/{curatorDataSegmentId\}`
     */
    name?: string;
    /**
     * Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSegment;
  }
}
