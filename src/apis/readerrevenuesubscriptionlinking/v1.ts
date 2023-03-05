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

export namespace readerrevenuesubscriptionlinking_v1 {
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
   * Reader Revenue Subscription Linking API
   *
   * readerrevenuesubscriptionlinking.googleapis.com API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const readerrevenuesubscriptionlinking = google.readerrevenuesubscriptionlinking('v1');
   * ```
   */
  export class Readerrevenuesubscriptionlinking {
    context: APIRequestContext;
    publications: Resource$Publications;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.publications = new Resource$Publications(this.context);
    }
  }

  /**
   * Response to deleting a reader of a publication.
   */
  export interface Schema$DeleteReaderResponse {}
  /**
   * A single entitlement for a publication reader
   */
  export interface Schema$Entitlement {
    /**
     * The detail field can carry a description of the SKU that corresponds to what the user has been granted access to. This description, which is opaque to Google, can be displayed in the Google user subscription console for users who linked the subscription to a Google Account. Max 80 character limit.
     */
    detail?: string | null;
    /**
     * Required. Expiration time of the entitlement. Entitlements that have expired over 30 days will be purged. Required. LINT.IfChange(expire_time) The max expire_time is 398 days from now(). LINT.ThenChange(//depot/google3/java/com/google/subscribewithgoogle/accountlinking/subscriptionlink/service/config/protoconf.pi:max_expiry_age)
     */
    expireTime?: string | null;
    /**
     * Required. The publication's product ID that the user has access to. This is the same product ID as can be found in Schema.org markup (http://schema.org/productID). E.g. "dailybugle.com:basic"
     */
    productId?: string | null;
    /**
     * A source-specific subscription token. This is an opaque string that the publisher provides to Google. This token is opaque and has no meaning to Google.
     */
    subscriptionToken?: string | null;
  }
  /**
   * A reader of a publication.
   */
  export interface Schema$Reader {
    /**
     * Output only. Time the publication reader was created and associated with a Google user.
     */
    createTime?: string | null;
    /**
     * Output only. The resource name of the reader. The last part of ppid in the resource name is the publisher provided id.
     */
    name?: string | null;
  }
  /**
   * A singleton containing all of a reader's entitlements for a publication.
   */
  export interface Schema$ReaderEntitlements {
    /**
     * All of the entitlements for a publication reader.
     */
    entitlements?: Schema$Entitlement[];
    /**
     * Output only. The resource name of the singleton.
     */
    name?: string | null;
  }

  export class Resource$Publications {
    context: APIRequestContext;
    readers: Resource$Publications$Readers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.readers = new Resource$Publications$Readers(this.context);
    }
  }

  export class Resource$Publications$Readers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/readerrevenuesubscriptionlinking.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const readerrevenuesubscriptionlinking =
     *   google.readerrevenuesubscriptionlinking('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await readerrevenuesubscriptionlinking.publications.readers.delete({
     *       // If set to true, any entitlements under the reader will also be purged.
     *       force: 'placeholder-value',
     *       // Required. The resource name of the reader. Format: publications/{publication_id\}/readers/{ppid\}
     *       name: 'publications/my-publication/readers/my-reader',
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
    delete(
      params: Params$Resource$Publications$Readers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Publications$Readers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DeleteReaderResponse>;
    delete(
      params: Params$Resource$Publications$Readers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Publications$Readers$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DeleteReaderResponse>,
      callback: BodyResponseCallback<Schema$DeleteReaderResponse>
    ): void;
    delete(
      params: Params$Resource$Publications$Readers$Delete,
      callback: BodyResponseCallback<Schema$DeleteReaderResponse>
    ): void;
    delete(callback: BodyResponseCallback<Schema$DeleteReaderResponse>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Publications$Readers$Delete
        | BodyResponseCallback<Schema$DeleteReaderResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeleteReaderResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeleteReaderResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DeleteReaderResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publications$Readers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publications$Readers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://readerrevenuesubscriptionlinking.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DeleteReaderResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeleteReaderResponse>(parameters);
      }
    }

    /**
     * Gets a reader of a publication. Returns NOT_FOUND if the reader does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/readerrevenuesubscriptionlinking.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const readerrevenuesubscriptionlinking =
     *   google.readerrevenuesubscriptionlinking('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await readerrevenuesubscriptionlinking.publications.readers.get({
     *     // Required. The resource name of the reader. Format: publications/{publication_id\}/readers/{ppid\}
     *     name: 'publications/my-publication/readers/my-reader',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
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
      params: Params$Resource$Publications$Readers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Publications$Readers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reader>;
    get(
      params: Params$Resource$Publications$Readers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Publications$Readers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Reader>,
      callback: BodyResponseCallback<Schema$Reader>
    ): void;
    get(
      params: Params$Resource$Publications$Readers$Get,
      callback: BodyResponseCallback<Schema$Reader>
    ): void;
    get(callback: BodyResponseCallback<Schema$Reader>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Publications$Readers$Get
        | BodyResponseCallback<Schema$Reader>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reader>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reader>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Reader> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publications$Readers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publications$Readers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://readerrevenuesubscriptionlinking.googleapis.com/';
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
        createAPIRequest<Schema$Reader>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reader>(parameters);
      }
    }

    /**
     * Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/readerrevenuesubscriptionlinking.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const readerrevenuesubscriptionlinking =
     *   google.readerrevenuesubscriptionlinking('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await readerrevenuesubscriptionlinking.publications.readers.getEntitlements(
     *       {
     *         // Required. The name of the reader entitlements to retrieve. Format: publications/{publication_id\}/readers/{reader_id\}/entitlements
     *         name: 'publications/my-publication/readers/my-reader/entitlements',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entitlements": [],
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
    getEntitlements(
      params: Params$Resource$Publications$Readers$Getentitlements,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getEntitlements(
      params?: Params$Resource$Publications$Readers$Getentitlements,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReaderEntitlements>;
    getEntitlements(
      params: Params$Resource$Publications$Readers$Getentitlements,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEntitlements(
      params: Params$Resource$Publications$Readers$Getentitlements,
      options: MethodOptions | BodyResponseCallback<Schema$ReaderEntitlements>,
      callback: BodyResponseCallback<Schema$ReaderEntitlements>
    ): void;
    getEntitlements(
      params: Params$Resource$Publications$Readers$Getentitlements,
      callback: BodyResponseCallback<Schema$ReaderEntitlements>
    ): void;
    getEntitlements(
      callback: BodyResponseCallback<Schema$ReaderEntitlements>
    ): void;
    getEntitlements(
      paramsOrCallback?:
        | Params$Resource$Publications$Readers$Getentitlements
        | BodyResponseCallback<Schema$ReaderEntitlements>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReaderEntitlements>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReaderEntitlements>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReaderEntitlements>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publications$Readers$Getentitlements;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publications$Readers$Getentitlements;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://readerrevenuesubscriptionlinking.googleapis.com/';
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
        createAPIRequest<Schema$ReaderEntitlements>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReaderEntitlements>(parameters);
      }
    }

    /**
     * Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/readerrevenuesubscriptionlinking.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const readerrevenuesubscriptionlinking =
     *   google.readerrevenuesubscriptionlinking('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await readerrevenuesubscriptionlinking.publications.readers.updateEntitlements(
     *       {
     *         // Output only. The resource name of the singleton.
     *         name: 'publications/my-publication/readers/my-reader/entitlements',
     *         // Optional. The list of fields to update. Defaults to all fields.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "entitlements": [],
     *           //   "name": "my_name"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entitlements": [],
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
    updateEntitlements(
      params: Params$Resource$Publications$Readers$Updateentitlements,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateEntitlements(
      params?: Params$Resource$Publications$Readers$Updateentitlements,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReaderEntitlements>;
    updateEntitlements(
      params: Params$Resource$Publications$Readers$Updateentitlements,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEntitlements(
      params: Params$Resource$Publications$Readers$Updateentitlements,
      options: MethodOptions | BodyResponseCallback<Schema$ReaderEntitlements>,
      callback: BodyResponseCallback<Schema$ReaderEntitlements>
    ): void;
    updateEntitlements(
      params: Params$Resource$Publications$Readers$Updateentitlements,
      callback: BodyResponseCallback<Schema$ReaderEntitlements>
    ): void;
    updateEntitlements(
      callback: BodyResponseCallback<Schema$ReaderEntitlements>
    ): void;
    updateEntitlements(
      paramsOrCallback?:
        | Params$Resource$Publications$Readers$Updateentitlements
        | BodyResponseCallback<Schema$ReaderEntitlements>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReaderEntitlements>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReaderEntitlements>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReaderEntitlements>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publications$Readers$Updateentitlements;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publications$Readers$Updateentitlements;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://readerrevenuesubscriptionlinking.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReaderEntitlements>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReaderEntitlements>(parameters);
      }
    }
  }

  export interface Params$Resource$Publications$Readers$Delete
    extends StandardParameters {
    /**
     * If set to true, any entitlements under the reader will also be purged.
     */
    force?: boolean;
    /**
     * Required. The resource name of the reader. Format: publications/{publication_id\}/readers/{ppid\}
     */
    name?: string;
  }
  export interface Params$Resource$Publications$Readers$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the reader. Format: publications/{publication_id\}/readers/{ppid\}
     */
    name?: string;
  }
  export interface Params$Resource$Publications$Readers$Getentitlements
    extends StandardParameters {
    /**
     * Required. The name of the reader entitlements to retrieve. Format: publications/{publication_id\}/readers/{reader_id\}/entitlements
     */
    name?: string;
  }
  export interface Params$Resource$Publications$Readers$Updateentitlements
    extends StandardParameters {
    /**
     * Output only. The resource name of the singleton.
     */
    name?: string;
    /**
     * Optional. The list of fields to update. Defaults to all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReaderEntitlements;
  }
}
