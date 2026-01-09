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

export namespace appsmarket_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Google Workspace Marketplace API
   *
   * Lets your Google Workspace Marketplace applications integrate with Google&#39;s installtion and licensing services.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const appsmarket = google.appsmarket('v2');
   * ```
   */
  export class Appsmarket {
    context: APIRequestContext;
    customerLicense: Resource$Customerlicense;
    userLicense: Resource$Userlicense;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.customerLicense = new Resource$Customerlicense(this.context);
      this.userLicense = new Resource$Userlicense(this.context);
    }
  }

  export interface Schema$CustomerLicense {
    /**
     * The ID of the application corresponding to this license query.
     */
    applicationId?: string | null;
    /**
     * The domain name of the customer.
     */
    customerId?: string | null;
    /**
     * (Deprecated)
     */
    editions?: Schema$Editions[];
    /**
     * The ID of the customer license.
     */
    id?: string | null;
    /**
     * The type of API resource. This is always appsmarket#customerLicense.
     */
    kind?: string | null;
    /**
     * The customer's license status. One of: - `ACTIVE`: The customer has a valid license. - `UNLICENSED`: There is no license: either this customer has never installed your application, or else has deleted it.
     */
    state?: string | null;
  }
  export interface Schema$Editions {
    /**
     * (Deprecated)
     */
    assignedSeats?: number | null;
    /**
     * (Deprecated)
     */
    editionId?: string | null;
    /**
     * (Deprecated)
     */
    seatCount?: number | null;
  }
  export interface Schema$UserLicense {
    /**
     * The ID of the application corresponding to the license query.
     */
    applicationId?: string | null;
    /**
     * The domain name of the user.
     */
    customerId?: string | null;
    /**
     * (Deprecated)
     */
    editionId?: string | null;
    /**
     * The domain administrator has activated the application for this domain.
     */
    enabled?: boolean | null;
    /**
     * The ID of user license.
     */
    id?: string | null;
    /**
     * The type of API resource. This is always appsmarket#userLicense.
     */
    kind?: string | null;
    /**
     * The user's licensing status. One of: - `ACTIVE`: The user has a valid license and should be permitted to use the application. - `UNLICENSED`: The administrator of this user's domain never assigned a seat for the application to this user. - `EXPIRED`: The administrator assigned a seat to this user, but the license is expired.
     */
    state?: string | null;
    /**
     * The email address of the user.
     */
    userId?: string | null;
  }

  export class Resource$Customerlicense {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the status of a license for a customer to determine if they have access for a given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/appsmarket.googleapis.com
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
     * const appsmarket = google.appsmarket('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/appsmarketplace.license'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await appsmarket.customerLicense.get({
     *     // Application Id
     *     applicationId: 'placeholder-value',
     *     // Customer Id
     *     customerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "applicationId": "my_applicationId",
     *   //   "customerId": "my_customerId",
     *   //   "editions": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "state": "my_state"
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
      params: Params$Resource$Customerlicense$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customerlicense$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomerLicense>>;
    get(
      params: Params$Resource$Customerlicense$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customerlicense$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomerLicense>,
      callback: BodyResponseCallback<Schema$CustomerLicense>
    ): void;
    get(
      params: Params$Resource$Customerlicense$Get,
      callback: BodyResponseCallback<Schema$CustomerLicense>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomerLicense>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customerlicense$Get
        | BodyResponseCallback<Schema$CustomerLicense>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomerLicense>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomerLicense>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CustomerLicense>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customerlicense$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customerlicense$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appsmarket.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/appsmarket/v2/customerLicense/{applicationId}/{customerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['applicationId', 'customerId'],
        pathParams: ['applicationId', 'customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomerLicense>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomerLicense>(parameters);
      }
    }
  }

  export interface Params$Resource$Customerlicense$Get extends StandardParameters {
    /**
     * Application Id
     */
    applicationId?: string;
    /**
     * Customer Id
     */
    customerId?: string;
  }

  export class Resource$Userlicense {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the user's licensing status for their permission to use a given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/appsmarket.googleapis.com
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
     * const appsmarket = google.appsmarket('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/appsmarketplace.license'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await appsmarket.userLicense.get({
     *     // Application Id
     *     applicationId: 'placeholder-value',
     *     // User Id
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "applicationId": "my_applicationId",
     *   //   "customerId": "my_customerId",
     *   //   "editionId": "my_editionId",
     *   //   "enabled": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "state": "my_state",
     *   //   "userId": "my_userId"
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
      params: Params$Resource$Userlicense$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Userlicense$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserLicense>>;
    get(
      params: Params$Resource$Userlicense$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Userlicense$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserLicense>,
      callback: BodyResponseCallback<Schema$UserLicense>
    ): void;
    get(
      params: Params$Resource$Userlicense$Get,
      callback: BodyResponseCallback<Schema$UserLicense>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserLicense>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userlicense$Get
        | BodyResponseCallback<Schema$UserLicense>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserLicense>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserLicense>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserLicense>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userlicense$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userlicense$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appsmarket.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/appsmarket/v2/userLicense/{applicationId}/{userId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['applicationId', 'userId'],
        pathParams: ['applicationId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserLicense>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserLicense>(parameters);
      }
    }
  }

  export interface Params$Resource$Userlicense$Get extends StandardParameters {
    /**
     * Application Id
     */
    applicationId?: string;
    /**
     * User Id
     */
    userId?: string;
  }
}
