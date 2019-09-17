/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace iamcredentials_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
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
   * IAM Service Account Credentials API
   *
   * Creates short-lived, limited-privilege credentials for IAM service accounts.
   *
   * @example
   * const {google} = require('googleapis');
   * const iamcredentials = google.iamcredentials('v1');
   *
   * @namespace iamcredentials
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Iamcredentials
   */
  export class Iamcredentials {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  export interface Schema$GenerateAccessTokenRequest {
    /**
     * The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.  The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    delegates?: string[] | null;
    /**
     * The desired lifetime duration of the access token in seconds. Must be set to a value less than or equal to 3600 (1 hour). If a value is not specified, the token&#39;s lifetime will be set to a default value of one hour.
     */
    lifetime?: string | null;
    /**
     * Code to identify the scopes to be included in the OAuth 2.0 access token. See https://developers.google.com/identity/protocols/googlescopes for more information. At least one value required.
     */
    scope?: string[] | null;
  }
  export interface Schema$GenerateAccessTokenResponse {
    /**
     * The OAuth 2.0 access token.
     */
    accessToken?: string | null;
    /**
     * Token expiration time. The expiration time is always set.
     */
    expireTime?: string | null;
  }
  export interface Schema$GenerateIdTokenRequest {
    /**
     * The audience for the token, such as the API or account that this token grants access to.
     */
    audience?: string | null;
    /**
     * The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.  The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    delegates?: string[] | null;
    /**
     * Include the service account email in the token. If set to `true`, the token will contain `email` and `email_verified` claims.
     */
    includeEmail?: boolean | null;
  }
  export interface Schema$GenerateIdTokenResponse {
    /**
     * The OpenId Connect ID token.
     */
    token?: string | null;
  }
  export interface Schema$SignBlobRequest {
    /**
     * The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.  The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    delegates?: string[] | null;
    /**
     * The bytes to sign.
     */
    payload?: string | null;
  }
  export interface Schema$SignBlobResponse {
    /**
     * The ID of the key used to sign the blob.
     */
    keyId?: string | null;
    /**
     * The signed blob.
     */
    signedBlob?: string | null;
  }
  export interface Schema$SignJwtRequest {
    /**
     * The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request.  The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    delegates?: string[] | null;
    /**
     * The JWT payload to sign: a JSON object that contains a JWT Claims Set.
     */
    payload?: string | null;
  }
  export interface Schema$SignJwtResponse {
    /**
     * The ID of the key used to sign the JWT.
     */
    keyId?: string | null;
    /**
     * The signed JWT.
     */
    signedJwt?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    serviceAccounts: Resource$Projects$Serviceaccounts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.serviceAccounts = new Resource$Projects$Serviceaccounts(
        this.context
      );
    }
  }

  export class Resource$Projects$Serviceaccounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * iamcredentials.projects.serviceAccounts.generateAccessToken
     * @desc Generates an OAuth 2.0 access token for a service account.
     * @alias iamcredentials.projects.serviceAccounts.generateAccessToken
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     * @param {().GenerateAccessTokenRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateAccessToken(
      params?: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateAccessTokenResponse>;
    generateAccessToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>,
      callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void;
    generateAccessToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
      callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void;
    generateAccessToken(
      callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void;
    generateAccessToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Generateaccesstoken
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>,
      callback?: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void | GaxiosPromise<Schema$GenerateAccessTokenResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Generateaccesstoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Generateaccesstoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:generateAccessToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateAccessTokenResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GenerateAccessTokenResponse>(parameters);
      }
    }

    /**
     * iamcredentials.projects.serviceAccounts.generateIdToken
     * @desc Generates an OpenID Connect ID token for a service account.
     * @alias iamcredentials.projects.serviceAccounts.generateIdToken
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     * @param {().GenerateIdTokenRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateIdToken(
      params?: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateIdTokenResponse>;
    generateIdToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateIdTokenResponse>,
      callback: BodyResponseCallback<Schema$GenerateIdTokenResponse>
    ): void;
    generateIdToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
      callback: BodyResponseCallback<Schema$GenerateIdTokenResponse>
    ): void;
    generateIdToken(
      callback: BodyResponseCallback<Schema$GenerateIdTokenResponse>
    ): void;
    generateIdToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Generateidtoken
        | BodyResponseCallback<Schema$GenerateIdTokenResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateIdTokenResponse>,
      callback?: BodyResponseCallback<Schema$GenerateIdTokenResponse>
    ): void | GaxiosPromise<Schema$GenerateIdTokenResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Generateidtoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Generateidtoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:generateIdToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateIdTokenResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GenerateIdTokenResponse>(parameters);
      }
    }

    /**
     * iamcredentials.projects.serviceAccounts.signBlob
     * @desc Signs a blob using a service account's system-managed private key.
     * @alias iamcredentials.projects.serviceAccounts.signBlob
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     * @param {().SignBlobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    signBlob(
      params?: Params$Resource$Projects$Serviceaccounts$Signblob,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SignBlobResponse>;
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      options: MethodOptions | BodyResponseCallback<Schema$SignBlobResponse>,
      callback: BodyResponseCallback<Schema$SignBlobResponse>
    ): void;
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      callback: BodyResponseCallback<Schema$SignBlobResponse>
    ): void;
    signBlob(callback: BodyResponseCallback<Schema$SignBlobResponse>): void;
    signBlob(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Signblob
        | BodyResponseCallback<Schema$SignBlobResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SignBlobResponse>,
      callback?: BodyResponseCallback<Schema$SignBlobResponse>
    ): void | GaxiosPromise<Schema$SignBlobResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Signblob;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Signblob;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:signBlob').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SignBlobResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SignBlobResponse>(parameters);
      }
    }

    /**
     * iamcredentials.projects.serviceAccounts.signJwt
     * @desc Signs a JWT using a service account's system-managed private key.
     * @alias iamcredentials.projects.serviceAccounts.signJwt
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     * @param {().SignJwtRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    signJwt(
      params?: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SignJwtResponse>;
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options: MethodOptions | BodyResponseCallback<Schema$SignJwtResponse>,
      callback: BodyResponseCallback<Schema$SignJwtResponse>
    ): void;
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      callback: BodyResponseCallback<Schema$SignJwtResponse>
    ): void;
    signJwt(callback: BodyResponseCallback<Schema$SignJwtResponse>): void;
    signJwt(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Signjwt
        | BodyResponseCallback<Schema$SignJwtResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SignJwtResponse>,
      callback?: BodyResponseCallback<Schema$SignJwtResponse>
    ): void | GaxiosPromise<Schema$SignJwtResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Signjwt;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Signjwt;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:signJwt').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SignJwtResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SignJwtResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Serviceaccounts$Generateaccesstoken
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateAccessTokenRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Generateidtoken
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateIdTokenRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Signblob
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SignBlobRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Signjwt
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SignJwtRequest;
  }
}
