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

export namespace webcontentpublisher_v1 {
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
   * Web Content Publisher API
   *
   * webcontentpublisher.googleapis.com API, a service for web content publishers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const webcontentpublisher = google.webcontentpublisher('v1');
   * ```
   */
  export class Webcontentpublisher {
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
   * Response message for CheckFreeAccess
   */
  export interface Schema$CheckFreeAccessResponse {
    /**
     * True if free access should be allowed, false otherwise.
     */
    isAllowed?: boolean | null;
  }

  export class Resource$Publications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Checks if a user is eligible for free article access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webcontentpublisher.googleapis.com
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
     * const webcontentpublisher = google.webcontentpublisher('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webcontentpublisher.publications.checkFreeAccess({
     *     // Required. The HTTP referrer.
     *     httpReferrer: 'placeholder-value',
     *     // Required. The resource name of the publication. Format: publications/{publication_id\}
     *     name: 'publications/my-publication',
     *     // Required. The URI of the content.
     *     uri: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "isAllowed": false
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
    checkFreeAccess(
      params: Params$Resource$Publications$Checkfreeaccess,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    checkFreeAccess(
      params?: Params$Resource$Publications$Checkfreeaccess,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckFreeAccessResponse>>;
    checkFreeAccess(
      params: Params$Resource$Publications$Checkfreeaccess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkFreeAccess(
      params: Params$Resource$Publications$Checkfreeaccess,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckFreeAccessResponse>,
      callback: BodyResponseCallback<Schema$CheckFreeAccessResponse>
    ): void;
    checkFreeAccess(
      params: Params$Resource$Publications$Checkfreeaccess,
      callback: BodyResponseCallback<Schema$CheckFreeAccessResponse>
    ): void;
    checkFreeAccess(
      callback: BodyResponseCallback<Schema$CheckFreeAccessResponse>
    ): void;
    checkFreeAccess(
      paramsOrCallback?:
        | Params$Resource$Publications$Checkfreeaccess
        | BodyResponseCallback<Schema$CheckFreeAccessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckFreeAccessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckFreeAccessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckFreeAccessResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publications$Checkfreeaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publications$Checkfreeaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://webcontentpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:checkFreeAccess').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$CheckFreeAccessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckFreeAccessResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Publications$Checkfreeaccess extends StandardParameters {
    /**
     * Required. The HTTP referrer.
     */
    httpReferrer?: string;
    /**
     * Required. The resource name of the publication. Format: publications/{publication_id\}
     */
    name?: string;
    /**
     * Required. The URI of the content.
     */
    uri?: string;
  }
}
