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

export namespace playgrouping_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
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
   * Google Play Grouping API
   *
   * playgrouping.googleapis.com API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const playgrouping = google.playgrouping('v1alpha1');
   * ```
   */
  export class Playgrouping {
    context: APIRequestContext;
    apps: Resource$Apps;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.apps = new Resource$Apps(this.context);
    }
  }

  /**
   * Request message for CreateOrUpdateTags. VerifyToken.
   */
  export interface Schema$CreateOrUpdateTagsRequest {
    /**
     * Tags to be inserted or updated.
     */
    tags?: Schema$Tag[];
  }
  /**
   * Response message for CreateOrUpdateTags.
   */
  export interface Schema$CreateOrUpdateTagsResponse {
    /**
     * All requested tags are returned, including pre-existing ones.
     */
    tags?: Schema$Tag[];
  }
  /**
   * A tag is associated with exactly one package name and user.
   */
  export interface Schema$Tag {
    /**
     * A boolean value of the tag.
     */
    booleanValue?: boolean | null;
    /**
     * A signed 64-bit integer value of the tag.
     */
    int64Value?: string | null;
    /**
     * Required. Key for the tag.
     */
    key?: string | null;
    /**
     * A string value of the tag.
     */
    stringValue?: string | null;
    /**
     * A time value of the tag.
     */
    timeValue?: string | null;
  }
  /**
   * Request message for VerifyToken.
   */
  export interface Schema$VerifyTokenRequest {
    /**
     * Required. Persona represented by the token. Format: personas/{persona\}
     */
    persona?: string | null;
  }
  /**
   * Response message for VerifyToken.
   */
  export interface Schema$VerifyTokenResponse {}

  export class Resource$Apps {
    context: APIRequestContext;
    tokens: Resource$Apps$Tokens;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.tokens = new Resource$Apps$Tokens(this.context);
    }
  }

  export class Resource$Apps$Tokens {
    context: APIRequestContext;
    tags: Resource$Apps$Tokens$Tags;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.tags = new Resource$Apps$Tokens$Tags(this.context);
    }

    /**
     * Verify an API token by asserting the app and persona it belongs to. The verification is a protection against client-side attacks and will fail if the contents of the token don't match the provided values. A token must be verified before it can be used to manipulate user tags.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    verify(
      params: Params$Resource$Apps$Tokens$Verify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    verify(
      params?: Params$Resource$Apps$Tokens$Verify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VerifyTokenResponse>;
    verify(
      params: Params$Resource$Apps$Tokens$Verify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verify(
      params: Params$Resource$Apps$Tokens$Verify,
      options: MethodOptions | BodyResponseCallback<Schema$VerifyTokenResponse>,
      callback: BodyResponseCallback<Schema$VerifyTokenResponse>
    ): void;
    verify(
      params: Params$Resource$Apps$Tokens$Verify,
      callback: BodyResponseCallback<Schema$VerifyTokenResponse>
    ): void;
    verify(callback: BodyResponseCallback<Schema$VerifyTokenResponse>): void;
    verify(
      paramsOrCallback?:
        | Params$Resource$Apps$Tokens$Verify
        | BodyResponseCallback<Schema$VerifyTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VerifyTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VerifyTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VerifyTokenResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Apps$Tokens$Verify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Tokens$Verify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://playgrouping.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+appPackage}/{+token}:verify').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['appPackage', 'token'],
        pathParams: ['appPackage', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VerifyTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VerifyTokenResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Tokens$Verify
    extends StandardParameters {
    /**
     * Required. App the token belongs to. Format: apps/{package_name\}
     */
    appPackage?: string;
    /**
     * Required. The token to be verified. Format: tokens/{token\}
     */
    token?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VerifyTokenRequest;
  }

  export class Resource$Apps$Tokens$Tags {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create or update tags for the user and app that are represented by the given token.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    createOrUpdate(
      params: Params$Resource$Apps$Tokens$Tags$Createorupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createOrUpdate(
      params?: Params$Resource$Apps$Tokens$Tags$Createorupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreateOrUpdateTagsResponse>;
    createOrUpdate(
      params: Params$Resource$Apps$Tokens$Tags$Createorupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createOrUpdate(
      params: Params$Resource$Apps$Tokens$Tags$Createorupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateOrUpdateTagsResponse>,
      callback: BodyResponseCallback<Schema$CreateOrUpdateTagsResponse>
    ): void;
    createOrUpdate(
      params: Params$Resource$Apps$Tokens$Tags$Createorupdate,
      callback: BodyResponseCallback<Schema$CreateOrUpdateTagsResponse>
    ): void;
    createOrUpdate(
      callback: BodyResponseCallback<Schema$CreateOrUpdateTagsResponse>
    ): void;
    createOrUpdate(
      paramsOrCallback?:
        | Params$Resource$Apps$Tokens$Tags$Createorupdate
        | BodyResponseCallback<Schema$CreateOrUpdateTagsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreateOrUpdateTagsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreateOrUpdateTagsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CreateOrUpdateTagsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Apps$Tokens$Tags$Createorupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Tokens$Tags$Createorupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://playgrouping.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha1/{+appPackage}/{+token}/tags:createOrUpdate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['appPackage', 'token'],
        pathParams: ['appPackage', 'token'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreateOrUpdateTagsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CreateOrUpdateTagsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Tokens$Tags$Createorupdate
    extends StandardParameters {
    /**
     * Required. App whose tags are being manipulated. Format: apps/{package_name\}
     */
    appPackage?: string;
    /**
     * Required. Token for which the tags are being inserted or updated. Format: tokens/{token\}
     */
    token?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateOrUpdateTagsRequest;
  }
}
