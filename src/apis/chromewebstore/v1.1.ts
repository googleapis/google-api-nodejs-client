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

export namespace chromewebstore_v1_1 {
  export interface Options extends GlobalOptions {
    version: 'v1.1';
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
   * const chromewebstore = google.chromewebstore('v1.1');
   * ```
   */
  export class Chromewebstore {
    context: APIRequestContext;
    items: Resource$Items;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.items = new Resource$Items(this.context);
    }
  }

  export interface Schema$Item {
    /**
     * The CRX version of the item. If the projection is draft, then it is the draft's CRX version.
     */
    crxVersion?: string | null;
    /**
     * Unique ID of the item.
     */
    id?: string | null;
    /**
     * Detail human-readable status of the operation, in English only. Same error messages are displayed when you upload your app to the Chrome Web Store.
     */
    itemError?: Schema$ItemError[];
    /**
     * Identifies this resource as an Item. Value: the fixed string "chromewebstore#item".
     */
    kind?: string | null;
    /**
     * Public key of this item.
     */
    publicKey?: string | null;
    /**
     * Status of the operation. Possible values are: - \"FAILURE\" - \"IN_PROGRESS\" - \"NOT_FOUND\" - \"SUCCESS\"
     */
    uploadState?: string | null;
  }
  export interface Schema$Item2 {
    /**
     * The ID of this item.
     */
    item_id?: string | null;
    /**
     * Static string value is always "chromewebstore#item".
     */
    kind?: string | null;
    /**
     * The status code of this publish operation. It may contain multiple elements from the following list: NOT_AUTHORIZED, INVALID_DEVELOPER, DEVELOPER_NO_OWNERSHIP, DEVELOPER_SUSPENDED, ITEM_NOT_FOUND, ITEM_PENDING_REVIEW, ITEM_TAKEN_DOWN, PUBLISHER_SUSPENDED.
     */
    status?: string[] | null;
    /**
     * Detailed human-comprehensible explanation of the status code above.
     */
    statusDetail?: string[] | null;
  }
  /**
   * Error of the item
   */
  export interface Schema$ItemError {
    /**
     * The error code.
     */
    error_code?: string | null;
    /**
     * The human-readable detail message of the error.
     */
    error_detail?: string | null;
  }
  export interface Schema$PublishRequest {
    /**
     * The target deploy percentage of the item. It's only useful for items with big user base.
     */
    deployPercentage?: number | null;
    /**
     * Optional. The caller request to exempt the review and directly publish because the update is within the list that we can automatically validate. The API will check if the exemption can be granted using real time data.
     */
    reviewExemption?: boolean | null;
    /**
     * The publish target of this publish operation. This is the same as using publishTarget as a URL query parameter. The string value can either be target="trustedTesters" or target="default". The default value, if none is supplied, is target="default". Recommended usage is to use the URL query parameter to specificy the value.
     */
    target?: string | null;
  }

  export class Resource$Items {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets your own Chrome Web Store item.
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
     * const chromewebstore = google.chromewebstore('v1.1');
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
     *   const res = await chromewebstore.items.get({
     *     // Unique identifier representing the Chrome App, Chrome Extension, or the Chrome Theme.
     *     itemId: 'placeholder-value',
     *     // Determines which subset of the item information to return.
     *     projection: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "crxVersion": "my_crxVersion",
     *   //   "id": "my_id",
     *   //   "itemError": [],
     *   //   "kind": "my_kind",
     *   //   "publicKey": "my_publicKey",
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
    get(
      params: Params$Resource$Items$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Items$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Item>>;
    get(
      params: Params$Resource$Items$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Items$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Item>,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    get(
      params: Params$Resource$Items$Get,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    get(callback: BodyResponseCallback<Schema$Item>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Items$Get
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Item>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Items$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Items$Get;
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
            url: (rootUrl + '/chromewebstore/v1.1/items/{itemId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['itemId'],
        pathParams: ['itemId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Item>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Item>(parameters);
      }
    }

    /**
     * Inserts a new item.
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
     * const chromewebstore = google.chromewebstore('v1.1');
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
     *   const res = await chromewebstore.items.insert({
     *     // The email of the publisher who owns the items. Defaults to the caller's email address.
     *     publisherEmail: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
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
     *   //   "id": "my_id",
     *   //   "itemError": [],
     *   //   "kind": "my_kind",
     *   //   "publicKey": "my_publicKey",
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
    insert(
      params: Params$Resource$Items$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Items$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Item>>;
    insert(
      params: Params$Resource$Items$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Items$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Item>,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    insert(
      params: Params$Resource$Items$Insert,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Item>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Items$Insert
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Item>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Items$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Items$Insert;
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
            url: (rootUrl + '/chromewebstore/v1.1/items').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/chromewebstore/v1.1/items').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Item>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Item>(parameters);
      }
    }

    /**
     * Publishes an item.
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
     * const chromewebstore = google.chromewebstore('v1.1');
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
     *   const res = await chromewebstore.items.publish({
     *     // The deploy percentage you want to set for your item. Valid values are [0, 100]. If set to any number less than 100, only that many percentage of users will be allowed to get the update.
     *     deployPercentage: 'placeholder-value',
     *     // The ID of the item to publish.
     *     itemId: 'placeholder-value',
     *     // Provide defined publishTarget in URL (case sensitive): publishTarget="trustedTesters" or publishTarget="default". Defaults to publishTarget="default".
     *     publishTarget: 'placeholder-value',
     *     // Optional. The caller request to exempt the review and directly publish because the update is within the list that we can automatically validate. The API will check if the exemption can be granted using real time data.
     *     reviewExemption: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deployPercentage": 0,
     *       //   "reviewExemption": false,
     *       //   "target": "my_target"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "item_id": "my_item_id",
     *   //   "kind": "my_kind",
     *   //   "status": [],
     *   //   "statusDetail": []
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
      params: Params$Resource$Items$Publish,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    publish(
      params?: Params$Resource$Items$Publish,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Item2>>;
    publish(
      params: Params$Resource$Items$Publish,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    publish(
      params: Params$Resource$Items$Publish,
      options: MethodOptions | BodyResponseCallback<Schema$Item2>,
      callback: BodyResponseCallback<Schema$Item2>
    ): void;
    publish(
      params: Params$Resource$Items$Publish,
      callback: BodyResponseCallback<Schema$Item2>
    ): void;
    publish(callback: BodyResponseCallback<Schema$Item2>): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Items$Publish
        | BodyResponseCallback<Schema$Item2>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Item2>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Item2>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Item2>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Items$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Items$Publish;
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
            url: (
              rootUrl + '/chromewebstore/v1.1/items/{itemId}/publish'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['itemId'],
        pathParams: ['itemId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Item2>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Item2>(parameters);
      }
    }

    /**
     * Updates an existing item.
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
     * const chromewebstore = google.chromewebstore('v1.1');
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
     *   const res = await chromewebstore.items.update({
     *     // The ID of the item to upload.
     *     itemId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "crxVersion": "my_crxVersion",
     *       //   "id": "my_id",
     *       //   "itemError": [],
     *       //   "kind": "my_kind",
     *       //   "publicKey": "my_publicKey",
     *       //   "uploadState": "my_uploadState"
     *       // }
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
     *   //   "id": "my_id",
     *   //   "itemError": [],
     *   //   "kind": "my_kind",
     *   //   "publicKey": "my_publicKey",
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
    update(
      params: Params$Resource$Items$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Items$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Item>>;
    update(
      params: Params$Resource$Items$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Items$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Item>,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    update(
      params: Params$Resource$Items$Update,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    update(callback: BodyResponseCallback<Schema$Item>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Items$Update
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Item>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Items$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Items$Update;
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
            url: (rootUrl + '/chromewebstore/v1.1/items/{itemId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/chromewebstore/v1.1/items/{itemId}'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['itemId'],
        pathParams: ['itemId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Item>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Item>(parameters);
      }
    }
  }

  export interface Params$Resource$Items$Get extends StandardParameters {
    /**
     * Unique identifier representing the Chrome App, Chrome Extension, or the Chrome Theme.
     */
    itemId?: string;
    /**
     * Determines which subset of the item information to return.
     */
    projection?: string;
  }
  export interface Params$Resource$Items$Insert extends StandardParameters {
    /**
     * The email of the publisher who owns the items. Defaults to the caller's email address.
     */
    publisherEmail?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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
  export interface Params$Resource$Items$Publish extends StandardParameters {
    /**
     * The deploy percentage you want to set for your item. Valid values are [0, 100]. If set to any number less than 100, only that many percentage of users will be allowed to get the update.
     */
    deployPercentage?: number;
    /**
     * The ID of the item to publish.
     */
    itemId?: string;
    /**
     * Provide defined publishTarget in URL (case sensitive): publishTarget="trustedTesters" or publishTarget="default". Defaults to publishTarget="default".
     */
    publishTarget?: string;
    /**
     * Optional. The caller request to exempt the review and directly publish because the update is within the list that we can automatically validate. The API will check if the exemption can be granted using real time data.
     */
    reviewExemption?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PublishRequest;
  }
  export interface Params$Resource$Items$Update extends StandardParameters {
    /**
     * The ID of the item to upload.
     */
    itemId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Item;

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
}
