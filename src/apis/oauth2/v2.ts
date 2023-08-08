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

export namespace oauth2_v2 {
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
   * Google OAuth2 API
   *
   * Obtains end-user authorization grants for use with other Google APIs.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const oauth2 = google.oauth2('v2');
   * ```
   */
  export class Oauth2 {
    context: APIRequestContext;
    userinfo: Resource$Userinfo;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.userinfo = new Resource$Userinfo(this.context);
    }

    /**
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    tokeninfo(
      params: Params$$Tokeninfo,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    tokeninfo(
      params?: Params$$Tokeninfo,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Tokeninfo>;
    tokeninfo(
      params: Params$$Tokeninfo,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    tokeninfo(
      params: Params$$Tokeninfo,
      options: MethodOptions | BodyResponseCallback<Schema$Tokeninfo>,
      callback: BodyResponseCallback<Schema$Tokeninfo>
    ): void;
    tokeninfo(
      params: Params$$Tokeninfo,
      callback: BodyResponseCallback<Schema$Tokeninfo>
    ): void;
    tokeninfo(callback: BodyResponseCallback<Schema$Tokeninfo>): void;
    tokeninfo(
      paramsOrCallback?:
        | Params$$Tokeninfo
        | BodyResponseCallback<Schema$Tokeninfo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tokeninfo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tokeninfo>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Tokeninfo> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$$Tokeninfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$$Tokeninfo;
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
            url: (rootUrl + '/oauth2/v2/tokeninfo').replace(
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
        createAPIRequest<Schema$Tokeninfo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tokeninfo>(parameters);
      }
    }
  }

  export interface Schema$Tokeninfo {
    /**
     * Who is the intended audience for this token. In general the same as issued_to.
     */
    audience?: string | null;
    /**
     * The email address of the user. Present only if the email scope is present in the request.
     */
    email?: string | null;
    /**
     * The expiry time of the token, as number of seconds left until expiry.
     */
    expires_in?: number | null;
    /**
     * To whom was the token issued to. In general the same as audience.
     */
    issued_to?: string | null;
    /**
     * The space separated list of scopes granted to this token.
     */
    scope?: string | null;
    /**
     * The obfuscated user id.
     */
    user_id?: string | null;
    /**
     * Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.
     */
    verified_email?: boolean | null;
  }
  export interface Schema$Userinfo {
    /**
     * The user's email address.
     */
    email?: string | null;
    /**
     * The user's last name.
     */
    family_name?: string | null;
    /**
     * The user's gender.
     */
    gender?: string | null;
    /**
     * The user's first name.
     */
    given_name?: string | null;
    /**
     * The hosted domain e.g. example.com if the user is Google apps user.
     */
    hd?: string | null;
    /**
     * The obfuscated ID of the user.
     */
    id?: string | null;
    /**
     * URL of the profile page.
     */
    link?: string | null;
    /**
     * The user's preferred locale.
     */
    locale?: string | null;
    /**
     * The user's full name.
     */
    name?: string | null;
    /**
     * URL of the user's picture image.
     */
    picture?: string | null;
    /**
     * Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address.
     */
    verified_email?: boolean | null;
  }

  export interface Params$$Tokeninfo extends StandardParameters {
    /**
     *
     */
    access_token?: string;
    /**
     *
     */
    id_token?: string;
  }

  export class Resource$Userinfo {
    context: APIRequestContext;
    v2: Resource$Userinfo$V2;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.v2 = new Resource$Userinfo$V2(this.context);
    }

    /**
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Userinfo$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Userinfo$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Userinfo>;
    get(
      params: Params$Resource$Userinfo$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Userinfo$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Userinfo>,
      callback: BodyResponseCallback<Schema$Userinfo>
    ): void;
    get(
      params: Params$Resource$Userinfo$Get,
      callback: BodyResponseCallback<Schema$Userinfo>
    ): void;
    get(callback: BodyResponseCallback<Schema$Userinfo>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userinfo$Get
        | BodyResponseCallback<Schema$Userinfo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Userinfo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Userinfo>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Userinfo> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userinfo$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userinfo$Get;
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
            url: (rootUrl + '/oauth2/v2/userinfo').replace(
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
        createAPIRequest<Schema$Userinfo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Userinfo>(parameters);
      }
    }
  }

  export interface Params$Resource$Userinfo$Get extends StandardParameters {}

  export class Resource$Userinfo$V2 {
    context: APIRequestContext;
    me: Resource$Userinfo$V2$Me;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.me = new Resource$Userinfo$V2$Me(this.context);
    }
  }

  export class Resource$Userinfo$V2$Me {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Userinfo$V2$Me$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Userinfo$V2$Me$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Userinfo>;
    get(
      params: Params$Resource$Userinfo$V2$Me$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Userinfo$V2$Me$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Userinfo>,
      callback: BodyResponseCallback<Schema$Userinfo>
    ): void;
    get(
      params: Params$Resource$Userinfo$V2$Me$Get,
      callback: BodyResponseCallback<Schema$Userinfo>
    ): void;
    get(callback: BodyResponseCallback<Schema$Userinfo>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userinfo$V2$Me$Get
        | BodyResponseCallback<Schema$Userinfo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Userinfo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Userinfo>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Userinfo> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userinfo$V2$Me$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userinfo$V2$Me$Get;
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
            url: (rootUrl + '/userinfo/v2/me').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Userinfo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Userinfo>(parameters);
      }
    }
  }

  export interface Params$Resource$Userinfo$V2$Me$Get
    extends StandardParameters {}
}
