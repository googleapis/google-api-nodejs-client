/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace iamcredentials_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * IAM Service Account Credentials API
   *
   * IAM Service Account Credentials API
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
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.projects = new Resource$Projects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$GenerateAccessTokenRequest {
    /**
     * The sequence of service accounts in a delegation chain. Each service
     * account must be granted the `roles/iam.serviceAccountTokenCreator` role
     * on its next service account in the chain. The last service account in the
     * chain must be granted the `roles/iam.serviceAccountTokenCreator` role on
     * the service account that is specified in the `name` field of the request.
     * The delegates must have the following format:
     * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`
     */
    delegates?: string[];
    /**
     * The desired lifetime duration of the access token in seconds. Must be set
     * to a value less than or equal to 3600 (1 hour). If a value is not
     * specified, the token&#39;s lifetime will be set to a default value of one
     * hour.
     */
    lifetime?: string;
    /**
     * Code to identify ApiScope (OAuth scope to be precise) to be included in
     * the OAuth token. See
     * https://developers.google.com/identity/protocols/googlescopes for more
     * information. At least one value required.
     */
    scope?: string[];
  }
  export interface Schema$GenerateAccessTokenResponse {
    /**
     * The OAuth 2.0 access token.
     */
    accessToken?: string;
    /**
     * Token expiration time.
     */
    expireTime?: string;
  }
  export interface Schema$GenerateIdTokenRequest {
    /**
     * The audience for the token, such as the API or account that this token
     * grants access to.
     */
    audience?: string;
    /**
     * The sequence of service accounts in a delegation chain. Each service
     * account must be granted the `roles/iam.serviceAccountTokenCreator` role
     * on its next service account in the chain. The last service account in the
     * chain must be granted the `roles/iam.serviceAccountTokenCreator` role on
     * the service account that is specified in the `name` field of the request.
     * The delegates must have the following format:
     * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`
     */
    delegates?: string[];
    /**
     * Include the service account email in the token. If set to `true`, the
     * token will contain `email` and `email_verified` claims.
     */
    includeEmail?: boolean;
  }
  export interface Schema$GenerateIdTokenResponse {
    /**
     * The OpenId Connect ID token.
     */
    token?: string;
  }
  export interface Schema$SignBlobRequest {
    /**
     * The sequence of service accounts in a delegation chain. Each service
     * account must be granted the `roles/iam.serviceAccountTokenCreator` role
     * on its next service account in the chain. The last service account in the
     * chain must be granted the `roles/iam.serviceAccountTokenCreator` role on
     * the service account that is specified in the `name` field of the request.
     * The delegates must have the following format:
     * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`
     */
    delegates?: string[];
    /**
     * The bytes to sign.
     */
    payload?: string;
  }
  export interface Schema$SignBlobResponse {
    /**
     * The ID of the key used to sign the blob.
     */
    keyId?: string;
    /**
     * The signed blob.
     */
    signedBlob?: string;
  }
  export interface Schema$SignJwtRequest {
    /**
     * The sequence of service accounts in a delegation chain. Each service
     * account must be granted the `roles/iam.serviceAccountTokenCreator` role
     * on its next service account in the chain. The last service account in the
     * chain must be granted the `roles/iam.serviceAccountTokenCreator` role on
     * the service account that is specified in the `name` field of the request.
     * The delegates must have the following format:
     * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`
     */
    delegates?: string[];
    /**
     * The JWT payload to sign: a JSON object that contains a JWT Claims Set.
     */
    payload?: string;
  }
  export interface Schema$SignJwtResponse {
    /**
     * The ID of the key used to sign the JWT.
     */
    keyId?: string;
    /**
     * The signed JWT.
     */
    signedJwt?: string;
  }


  export class Resource$Projects {
    root: Iamcredentials;
    serviceAccounts: Resource$Projects$Serviceaccounts;
    constructor(root: Iamcredentials) {
      this.root = root;
      this.getRoot.bind(this);
      this.serviceAccounts = new Resource$Projects$Serviceaccounts(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Serviceaccounts {
    root: Iamcredentials;
    constructor(root: Iamcredentials) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * iamcredentials.projects.serviceAccounts.generateAccessToken
     * @desc Generates an OAuth 2.0 access token for a service account.
     * @alias iamcredentials.projects.serviceAccounts.generateAccessToken
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. Using `-` as a wildcard for the project will infer the project from the account.
     * @param {().GenerateAccessTokenRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateAccessToken(
        params?: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
        options?: MethodOptions):
        AxiosPromise<Schema$GenerateAccessTokenResponse>;
    generateAccessToken(
        params: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
        options: MethodOptions|
        BodyResponseCallback<Schema$GenerateAccessTokenResponse>,
        callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>):
        void;
    generateAccessToken(
        params: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
        callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>):
        void;
    generateAccessToken(
        callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>):
        void;
    generateAccessToken(
        paramsOrCallback?:
            Params$Resource$Projects$Serviceaccounts$Generateaccesstoken|
        BodyResponseCallback<Schema$GenerateAccessTokenResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GenerateAccessTokenResponse>,
        callback?: BodyResponseCallback<Schema$GenerateAccessTokenResponse>):
        void|AxiosPromise<Schema$GenerateAccessTokenResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Serviceaccounts$Generateaccesstoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Serviceaccounts$Generateaccesstoken;
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
              url: (rootUrl + '/v1/{+name}:generateAccessToken')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GenerateAccessTokenResponse>(
            parameters, callback);
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
     * @param {string} params.name The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. Using `-` as a wildcard for the project will infer the project from the account.
     * @param {().GenerateIdTokenRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateIdToken(
        params?: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
        options?: MethodOptions): AxiosPromise<Schema$GenerateIdTokenResponse>;
    generateIdToken(
        params: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
        options: MethodOptions|
        BodyResponseCallback<Schema$GenerateIdTokenResponse>,
        callback: BodyResponseCallback<Schema$GenerateIdTokenResponse>): void;
    generateIdToken(
        params: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
        callback: BodyResponseCallback<Schema$GenerateIdTokenResponse>): void;
    generateIdToken(
        callback: BodyResponseCallback<Schema$GenerateIdTokenResponse>): void;
    generateIdToken(
        paramsOrCallback?:
            Params$Resource$Projects$Serviceaccounts$Generateidtoken|
        BodyResponseCallback<Schema$GenerateIdTokenResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GenerateIdTokenResponse>,
        callback?: BodyResponseCallback<Schema$GenerateIdTokenResponse>):
        void|AxiosPromise<Schema$GenerateIdTokenResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Serviceaccounts$Generateidtoken;
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
              url: (rootUrl + '/v1/{+name}:generateIdToken')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
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
     * @param {string} params.name The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. Using `-` as a wildcard for the project will infer the project from the account.
     * @param {().SignBlobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    signBlob(
        params?: Params$Resource$Projects$Serviceaccounts$Signblob,
        options?: MethodOptions): AxiosPromise<Schema$SignBlobResponse>;
    signBlob(
        params: Params$Resource$Projects$Serviceaccounts$Signblob,
        options: MethodOptions|BodyResponseCallback<Schema$SignBlobResponse>,
        callback: BodyResponseCallback<Schema$SignBlobResponse>): void;
    signBlob(
        params: Params$Resource$Projects$Serviceaccounts$Signblob,
        callback: BodyResponseCallback<Schema$SignBlobResponse>): void;
    signBlob(callback: BodyResponseCallback<Schema$SignBlobResponse>): void;
    signBlob(
        paramsOrCallback?: Params$Resource$Projects$Serviceaccounts$Signblob|
        BodyResponseCallback<Schema$SignBlobResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SignBlobResponse>,
        callback?: BodyResponseCallback<Schema$SignBlobResponse>):
        void|AxiosPromise<Schema$SignBlobResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Serviceaccounts$Signblob;
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
              url: (rootUrl + '/v1/{+name}:signBlob')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
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
     * @param {string} params.name The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. Using `-` as a wildcard for the project will infer the project from the account.
     * @param {().SignJwtRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    signJwt(
        params?: Params$Resource$Projects$Serviceaccounts$Signjwt,
        options?: MethodOptions): AxiosPromise<Schema$SignJwtResponse>;
    signJwt(
        params: Params$Resource$Projects$Serviceaccounts$Signjwt,
        options: MethodOptions|BodyResponseCallback<Schema$SignJwtResponse>,
        callback: BodyResponseCallback<Schema$SignJwtResponse>): void;
    signJwt(
        params: Params$Resource$Projects$Serviceaccounts$Signjwt,
        callback: BodyResponseCallback<Schema$SignJwtResponse>): void;
    signJwt(callback: BodyResponseCallback<Schema$SignJwtResponse>): void;
    signJwt(
        paramsOrCallback?: Params$Resource$Projects$Serviceaccounts$Signjwt|
        BodyResponseCallback<Schema$SignJwtResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SignJwtResponse>,
        callback?: BodyResponseCallback<Schema$SignJwtResponse>):
        void|AxiosPromise<Schema$SignJwtResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Serviceaccounts$Signjwt;
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
              url: (rootUrl + '/v1/{+name}:signJwt')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SignJwtResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SignJwtResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Serviceaccounts$Generateaccesstoken {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the service account for which the credentials are
     * requested, in the following format:
     * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. Using `-` as a
     * wildcard for the project will infer the project from the account.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateAccessTokenRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Generateidtoken {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the service account for which the credentials are
     * requested, in the following format:
     * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. Using `-` as a
     * wildcard for the project will infer the project from the account.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateIdTokenRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Signblob {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the service account for which the credentials are
     * requested, in the following format:
     * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. Using `-` as a
     * wildcard for the project will infer the project from the account.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SignBlobRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Signjwt {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the service account for which the credentials are
     * requested, in the following format:
     * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. Using `-` as a
     * wildcard for the project will infer the project from the account.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SignJwtRequest;
  }
}
