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

export namespace sts_v1 {
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
   * Security Token Service API
   *
   * The Security Token Service exchanges Google or third-party credentials for a short-lived access token to Google Cloud resources.
   *
   * @example
   * const {google} = require('googleapis');
   * const sts = google.sts('v1');
   *
   * @namespace sts
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Sts
   */
  export class Sts {
    context: APIRequestContext;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * Request message for ExchangeToken.
   */
  export interface Schema$GoogleIdentityStsV1ExchangeTokenRequest {
    /**
     * Required. The grant type. Must be `urn:ietf:params:oauth:grant-type:token-exchange`, which indicates a token exchange.
     */
    grantType?: string | null;
    /**
     * A set of features that Security Token Service supports, in addition to the standard OAuth 2.0 token exchange, formatted as a serialized JSON object of Options.
     */
    options?: string | null;
    /**
     * Required. An identifier for the type of requested security token. Must be `urn:ietf:params:oauth:token-type:access_token`.
     */
    requestedTokenType?: string | null;
    /**
     * Required. The input token. You can use a Google-issued OAuth 2.0 access token with this field to obtain an access token with new security attributes applied, such as a Credential Access Boundary. If an access token already contains security attributes, you cannot apply additional security attributes.
     */
    subjectToken?: string | null;
    /**
     * Required. An identifier that indicates the type of the security token in the `subject_token` parameter. Must be `urn:ietf:params:oauth:token-type:access_token`.
     */
    subjectTokenType?: string | null;
  }
  /**
   * Response message for ExchangeToken.
   */
  export interface Schema$GoogleIdentityStsV1ExchangeTokenResponse {
    /**
     * An OAuth 2.0 security token, issued by Google, in response to the token exchange request.
     */
    access_token?: string | null;
    /**
     * The amount of time, in seconds, between the time when the `access_token` was issued and the time when the `access_token` will expire. This field is absent when the `subject_token` in the request is a Google-issued, short-lived access token. In this case, the `access_token` has the same expiration time as the `subject_token`.
     */
    expires_in?: number | null;
    /**
     * The token type. Always matches the value of `requested_token_type` from the request.
     */
    issued_token_type?: string | null;
    /**
     * The type of `access_token`. Always has the value `Bearer`.
     */
    token_type?: string | null;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * sts.token
     * @desc Exchanges a credential for a Google OAuth 2.0 access token.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sts.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const sts = google.sts('v1');
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
     *   const res = await sts.token({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "grantType": "my_grantType",
     *       //   "options": "my_options",
     *       //   "requestedTokenType": "my_requestedTokenType",
     *       //   "subjectToken": "my_subjectToken",
     *       //   "subjectTokenType": "my_subjectTokenType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "access_token": "my_access_token",
     *   //   "expires_in": 0,
     *   //   "issued_token_type": "my_issued_token_type",
     *   //   "token_type": "my_token_type"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias sts.token
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleIdentityStsV1ExchangeTokenRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    token(
      params: Params$Resource$V1$Token,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    token(
      params?: Params$Resource$V1$Token,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIdentityStsV1ExchangeTokenResponse>;
    token(
      params: Params$Resource$V1$Token,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    token(
      params: Params$Resource$V1$Token,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIdentityStsV1ExchangeTokenResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleIdentityStsV1ExchangeTokenResponse
      >
    ): void;
    token(
      params: Params$Resource$V1$Token,
      callback: BodyResponseCallback<
        Schema$GoogleIdentityStsV1ExchangeTokenResponse
      >
    ): void;
    token(
      callback: BodyResponseCallback<
        Schema$GoogleIdentityStsV1ExchangeTokenResponse
      >
    ): void;
    token(
      paramsOrCallback?:
        | Params$Resource$V1$Token
        | BodyResponseCallback<Schema$GoogleIdentityStsV1ExchangeTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIdentityStsV1ExchangeTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIdentityStsV1ExchangeTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIdentityStsV1ExchangeTokenResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Token;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Token;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/token').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleIdentityStsV1ExchangeTokenResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleIdentityStsV1ExchangeTokenResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$V1$Token extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIdentityStsV1ExchangeTokenRequest;
  }
}
