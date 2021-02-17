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

export namespace sts_v1beta {
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
   * ```js
   * const {google} = require('googleapis');
   * const sts = google.sts('v1beta');
   * ```
   */
  export class Sts {
    context: APIRequestContext;
    v1beta: Resource$V1beta;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.v1beta = new Resource$V1beta(this.context);
    }
  }

  /**
   * Request message for ExchangeToken.
   */
  export interface Schema$GoogleIdentityStsV1betaExchangeTokenRequest {
    /**
     * The full resource name of the identity provider. For example, `//iam.googleapis.com/projects//workloadIdentityPools//providers/`. Required when exchanging an external credential for a Google access token.
     */
    audience?: string | null;
    /**
     * Required. The grant type. Must be `urn:ietf:params:oauth:grant-type:token-exchange`, which indicates a token exchange.
     */
    grantType?: string | null;
    /**
     * A set of features that Security Token Service supports, in addition to the standard OAuth 2.0 token exchange, formatted as a serialized JSON object of Options.
     */
    options?: string | null;
    /**
     * Required. The type of security token. Must be `urn:ietf:params:oauth:token-type:access_token`, which indicates an OAuth 2.0 access token.
     */
    requestedTokenType?: string | null;
    /**
     * The OAuth 2.0 scopes to include on the resulting access token, formatted as a list of space-delimited, case-sensitive strings. Required when exchanging an external credential for a Google access token.
     */
    scope?: string | null;
    /**
     * Required. The input token. This token is a either an external credential issued by a workload identity pool provider, or a short-lived access token issued by Google. If the token is an OIDC JWT, it must use the JWT format defined in [RFC 7523](https://tools.ietf.org/html/rfc7523), and the `subject_token_type` must be `urn:ietf:params:oauth:token-type:jwt`. The following headers are required: - `kid`: The identifier of the signing key securing the JWT. - `alg`: The cryptographic algorithm securing the JWT. Must be `RS256`. The following payload fields are required. For more information, see [RFC 7523, Section 3](https://tools.ietf.org/html/rfc7523#section-3): - `iss`: The issuer of the token. The issuer must provide a discovery document at the URL `/.well-known/openid-configuration`, where `` is the value of this field. The document must be formatted according to section 4.2 of the [OIDC 1.0 Discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse). - `iat`: The issue time, in seconds, since the Unix epoch. Must be in the past. - `exp`: The expiration time, in seconds, since the Unix epoch. Must be less than 48 hours after `iat`. Shorter expiration times are more secure. If possible, we recommend setting an expiration time less than 6 hours. - `sub`: The identity asserted in the JWT. - `aud`: Configured by the mapper policy. The default value is the service account's unique ID. Example header: ``` { "alg": "RS256", "kid": "us-east-11" \} ``` Example payload: ``` { "iss": "https://accounts.google.com", "iat": 1517963104, "exp": 1517966704, "aud": "113475438248934895348", "sub": "113475438248934895348", "my_claims": { "additional_claim": "value" \} \} ``` If `subject_token` is an AWS token, it must be a serialized, [signed](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) request to the AWS [`GetCallerIdentity()`](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity) method. Format the request as URL-encoded JSON, and set the `subject_token_type` parameter to `urn:ietf:params:aws:token-type:aws4_request`. The following parameters are required: - `url`: The URL of the AWS STS endpoint for `GetCallerIdentity()`, such as `https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15`. Regional endpoints are also supported. - `method`: The HTTP request method: `POST`. - `headers`: The HTTP request headers, which must include: - `Authorization`: The request signature. - `x-amz-date`: The time you will send the request, formatted as an [ISO8601 Basic](https://docs.aws.amazon.com/general/latest/gr/sigv4_elements.html#sigv4_elements_date) string. This is typically set to the current time and used to prevent replay attacks. - `host`: The hostname of the `url` field; for example, `sts.amazonaws.com`. - `x-goog-cloud-target-resource`: The full, canonical resource name of the workload identity pool provider, with or without an `https:` prefix. To help ensure data integrity, we recommend including this header in the `SignedHeaders` field of the signed request. For example: //iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ If you are using temporary security credentials provided by AWS, you must also include the header `x-amz-security-token`, with the value ``. The following example shows a signed, serialized request: ``` { "headers":[ {"key": "x-amz-date", "value": "20200815T015049Z"\}, {"key": "Authorization", "value": "AWS4-HMAC-SHA256+Credential=$credential,+SignedHeaders=host;x-amz-date;x-goog-cloud-target-resource,+Signature=$signature"\}, {"key": "x-goog-cloud-target-resource", "value": "//iam.googleapis.com/projects//locations//workloadIdentityPools//providers/"\}, {"key": "host", "value": "sts.amazonaws.com"\} . ], "method":"POST", "url":"https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15" \} ``` You can also use a Google-issued OAuth 2.0 access token with this field to obtain an access token with new security attributes applied, such as a Credential Access Boundary. In this case, set `subject_token_type` to `urn:ietf:params:oauth:token-type:access_token`. If an access token already contains security attributes, you cannot apply additional security attributes.
     */
    subjectToken?: string | null;
    /**
     * Required. `urn:ietf:params:oauth:token-type:access_token`.
     */
    subjectTokenType?: string | null;
  }
  /**
   * Response message for ExchangeToken.
   */
  export interface Schema$GoogleIdentityStsV1betaExchangeTokenResponse {
    /**
     * An OAuth 2.0 security token, issued by Google, in response to the token exchange request. Tokens can vary in size, depending in part on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time.
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

  export class Resource$V1beta {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sts.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const sts = google.sts('v1beta');
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
     *       //   "audience": "my_audience",
     *       //   "grantType": "my_grantType",
     *       //   "options": "my_options",
     *       //   "requestedTokenType": "my_requestedTokenType",
     *       //   "scope": "my_scope",
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    token(
      params: Params$Resource$V1beta$Token,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    token(
      params?: Params$Resource$V1beta$Token,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>;
    token(
      params: Params$Resource$V1beta$Token,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    token(
      params: Params$Resource$V1beta$Token,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>,
      callback: BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
    ): void;
    token(
      params: Params$Resource$V1beta$Token,
      callback: BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
    ): void;
    token(
      callback: BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
    ): void;
    token(
      paramsOrCallback?:
        | Params$Resource$V1beta$Token
        | BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$V1beta$Token;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Token;
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
            url: (rootUrl + '/v1beta/token').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$V1beta$Token extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIdentityStsV1betaExchangeTokenRequest;
  }
}
