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

export namespace siteVerification_v1 {
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
   * Google Site Verification API
   *
   * Verifies ownership of websites or domains with Google.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const siteVerification = google.siteVerification('v1');
   * ```
   */
  export class Siteverification {
    context: APIRequestContext;
    webResource: Resource$Webresource;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.webResource = new Resource$Webresource(this.context);
    }
  }

  export interface Schema$SiteVerificationWebResourceGettokenRequest {
    /**
     * The site for which a verification token will be generated.
     */
    site?: {identifier?: string; type?: string} | null;
    /**
     * The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used.
     */
    verificationMethod?: string | null;
  }
  export interface Schema$SiteVerificationWebResourceGettokenResponse {
    /**
     * The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain.
     */
    method?: string | null;
    /**
     * The verification token. The token must be placed appropriately in order for verification to succeed.
     */
    token?: string | null;
  }
  export interface Schema$SiteVerificationWebResourceListResponse {
    /**
     * The list of sites that are owned by the authenticated user.
     */
    items?: Schema$SiteVerificationWebResourceResource[];
  }
  export interface Schema$SiteVerificationWebResourceResource {
    /**
     * The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.
     */
    id?: string | null;
    /**
     * The email addresses of all verified owners.
     */
    owners?: string[] | null;
    /**
     * The address and type of a site that is verified or will be verified.
     */
    site?: {identifier?: string; type?: string} | null;
  }

  export class Resource$Webresource {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Relinquish ownership of a website or domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/siteVerification.googleapis.com
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
     * const siteVerification = google.siteVerification('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/siteverification'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await siteVerification.webResource.delete({
     *     // The id of a verified site or domain.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Webresource$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Webresource$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Webresource$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Webresource$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Webresource$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Webresource$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Webresource$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Delete;
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
            url: (rootUrl + '/siteVerification/v1/webResource/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Get the most current data for a website or domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/siteVerification.googleapis.com
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
     * const siteVerification = google.siteVerification('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/siteverification'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await siteVerification.webResource.get({
     *     // The id of a verified site or domain.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "owners": [],
     *   //   "site": {}
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
      params: Params$Resource$Webresource$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Webresource$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceResource>
    >;
    get(
      params: Params$Resource$Webresource$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Webresource$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    get(
      params: Params$Resource$Webresource$Get,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Webresource$Get
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceResource>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Webresource$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Get;
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
            url: (rootUrl + '/siteVerification/v1/webResource/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters
        );
      }
    }

    /**
     * Get a verification token for placing on a website or domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/siteVerification.googleapis.com
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
     * const siteVerification = google.siteVerification('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/siteverification',
     *       'https://www.googleapis.com/auth/siteverification.verify_only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await siteVerification.webResource.getToken({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "site": {},
     *       //   "verificationMethod": "my_verificationMethod"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "method": "my_method",
     *   //   "token": "my_token"
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
    getToken(
      params: Params$Resource$Webresource$Gettoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getToken(
      params?: Params$Resource$Webresource$Gettoken,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceGettokenResponse>
    >;
    getToken(
      params: Params$Resource$Webresource$Gettoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getToken(
      params: Params$Resource$Webresource$Gettoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceGettokenResponse>,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceGettokenResponse>
    ): void;
    getToken(
      params: Params$Resource$Webresource$Gettoken,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceGettokenResponse>
    ): void;
    getToken(
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceGettokenResponse>
    ): void;
    getToken(
      paramsOrCallback?:
        | Params$Resource$Webresource$Gettoken
        | BodyResponseCallback<Schema$SiteVerificationWebResourceGettokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceGettokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteVerificationWebResourceGettokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceGettokenResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Webresource$Gettoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Gettoken;
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
            url: (rootUrl + '/siteVerification/v1/token').replace(
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
        createAPIRequest<Schema$SiteVerificationWebResourceGettokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceGettokenResponse>(
          parameters
        );
      }
    }

    /**
     * Attempt verification of a website or domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/siteVerification.googleapis.com
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
     * const siteVerification = google.siteVerification('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/siteverification',
     *       'https://www.googleapis.com/auth/siteverification.verify_only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await siteVerification.webResource.insert({
     *     // The method to use for verifying a site or domain.
     *     verificationMethod: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "owners": [],
     *       //   "site": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "owners": [],
     *   //   "site": {}
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
      params: Params$Resource$Webresource$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Webresource$Insert,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceResource>
    >;
    insert(
      params: Params$Resource$Webresource$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Webresource$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    insert(
      params: Params$Resource$Webresource$Insert,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    insert(
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Webresource$Insert
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceResource>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Webresource$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Insert;
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
            url: (rootUrl + '/siteVerification/v1/webResource').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['verificationMethod'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters
        );
      }
    }

    /**
     * Get the list of your verified websites and domains.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/siteVerification.googleapis.com
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
     * const siteVerification = google.siteVerification('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/siteverification'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await siteVerification.webResource.list({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": []
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
      params: Params$Resource$Webresource$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Webresource$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceListResponse>
    >;
    list(
      params: Params$Resource$Webresource$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Webresource$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>
    ): void;
    list(
      params: Params$Resource$Webresource$List,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Webresource$List
        | BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteVerificationWebResourceListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceListResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Webresource$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$List;
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
            url: (rootUrl + '/siteVerification/v1/webResource').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$SiteVerificationWebResourceListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceListResponse>(
          parameters
        );
      }
    }

    /**
     * Modify the list of owners for your website or domain. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/siteVerification.googleapis.com
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
     * const siteVerification = google.siteVerification('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/siteverification'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await siteVerification.webResource.patch({
     *     // The id of a verified site or domain.
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "owners": [],
     *       //   "site": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "owners": [],
     *   //   "site": {}
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
      params: Params$Resource$Webresource$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Webresource$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceResource>
    >;
    patch(
      params: Params$Resource$Webresource$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Webresource$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    patch(
      params: Params$Resource$Webresource$Patch,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Webresource$Patch
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceResource>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Webresource$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Patch;
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
            url: (rootUrl + '/siteVerification/v1/webResource/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters
        );
      }
    }

    /**
     * Modify the list of owners for your website or domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/siteVerification.googleapis.com
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
     * const siteVerification = google.siteVerification('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/siteverification'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await siteVerification.webResource.update({
     *     // The id of a verified site or domain.
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "owners": [],
     *       //   "site": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "owners": [],
     *   //   "site": {}
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
      params: Params$Resource$Webresource$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Webresource$Update,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceResource>
    >;
    update(
      params: Params$Resource$Webresource$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Webresource$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    update(
      params: Params$Resource$Webresource$Update,
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Webresource$Update
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteVerificationWebResourceResource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$SiteVerificationWebResourceResource>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Webresource$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webresource$Update;
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
            url: (rootUrl + '/siteVerification/v1/webResource/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteVerificationWebResourceResource>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Webresource$Delete
    extends StandardParameters {
    /**
     * The id of a verified site or domain.
     */
    id?: string;
  }
  export interface Params$Resource$Webresource$Get extends StandardParameters {
    /**
     * The id of a verified site or domain.
     */
    id?: string;
  }
  export interface Params$Resource$Webresource$Gettoken
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteVerificationWebResourceGettokenRequest;
  }
  export interface Params$Resource$Webresource$Insert
    extends StandardParameters {
    /**
     * The method to use for verifying a site or domain.
     */
    verificationMethod?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteVerificationWebResourceResource;
  }
  export interface Params$Resource$Webresource$List
    extends StandardParameters {}
  export interface Params$Resource$Webresource$Patch
    extends StandardParameters {
    /**
     * The id of a verified site or domain.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteVerificationWebResourceResource;
  }
  export interface Params$Resource$Webresource$Update
    extends StandardParameters {
    /**
     * The id of a verified site or domain.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteVerificationWebResourceResource;
  }
}
