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
import {
  validateSingleSegment,
  validateMultiSegment,
  encodeWithSlashes,
  encodeWithoutSlashes,
} from '../../transcoding';

export namespace androiddeveloperidstatus_v1 {
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
   * Android Developer ID Status API
   *
   * Android Developer ID Status API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const androiddeveloperidstatus = google.androiddeveloperidstatus('v1');
   * ```
   */
  export class Androiddeveloperidstatus {
    context: APIRequestContext;
    packages: Resource$Packages;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.packages = new Resource$Packages(this.context);
    }
  }

  /**
   * Resource message PackageRegistrationStatus.
   */
  export interface Schema$PackageRegistrationStatus {
    /**
     * Output only. The SHA-256 fingerprint of the public certificate represented as a 64-character lowercase hexadecimal string without any colons or separators (e.g., `d6ac89ed1d0a805aad4b087d06d5f41645b814480b133fbc867ef7498d069e06`).
     */
    certificateFingerprint?: string | null;
    /**
     * Identifier. The name of the package registration status resource. Format: packages/{package\}/packageRegistrationStatus `{package\}` must follow the specific format: The fully-qualified Android package name with dots ('.') replaced by hyphens ('-') (e.g., `com-example-app` instead of `com.example.app`).
     */
    name?: string | null;
    /**
     * Output only. Registration state of the package, or pair.
     */
    state?: string | null;
  }

  export class Resource$Packages {
    context: APIRequestContext;
    packageRegistrationStatus: Resource$Packages$Packageregistrationstatus;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.packageRegistrationStatus =
        new Resource$Packages$Packageregistrationstatus(this.context);
    }
  }

  export class Resource$Packages$Packageregistrationstatus {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the Android Developer ID registration status for a given package.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeveloperidstatus.googleapis.com
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
     * const androiddeveloperidstatus = google.androiddeveloperidstatus('v1');
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
     *     await androiddeveloperidstatus.packages.packageRegistrationStatus.check({
     *       // Optional. The SHA-256 fingerprint of the public certificate represented as a 64-character lowercase hexadecimal string without any colons or separators (e.g., `d6ac89ed1d0a805aad4b087d06d5f41645b814480b133fbc867ef7498d069e06`).
     *       certificateFingerprint: 'placeholder-value',
     *       // Required. The name of the package registration status resource. Format: packages/{package\}/packageRegistrationStatus `{package\}` must follow the specific format: The fully-qualified Android package name with dots ('.') replaced by hyphens ('-') (e.g., `com-example-app` instead of `com.example.app`).
     *       name: 'packages/my-package/packageRegistrationStatus',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certificateFingerprint": "my_certificateFingerprint",
     *   //   "name": "my_name",
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
    check(
      params: Params$Resource$Packages$Packageregistrationstatus$Check,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    check(
      params?: Params$Resource$Packages$Packageregistrationstatus$Check,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PackageRegistrationStatus>>;
    check(
      params: Params$Resource$Packages$Packageregistrationstatus$Check,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    check(
      params: Params$Resource$Packages$Packageregistrationstatus$Check,
      options:
        MethodOptions | BodyResponseCallback<Schema$PackageRegistrationStatus>,
      callback: BodyResponseCallback<Schema$PackageRegistrationStatus>
    ): void;
    check(
      params: Params$Resource$Packages$Packageregistrationstatus$Check,
      callback: BodyResponseCallback<Schema$PackageRegistrationStatus>
    ): void;
    check(
      callback: BodyResponseCallback<Schema$PackageRegistrationStatus>
    ): void;
    check(
      paramsOrCallback?:
        | Params$Resource$Packages$Packageregistrationstatus$Check
        | BodyResponseCallback<Schema$PackageRegistrationStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PackageRegistrationStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PackageRegistrationStatus>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PackageRegistrationStatus>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Packages$Packageregistrationstatus$Check;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Packages$Packageregistrationstatus$Check;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeveloperidstatus.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:check')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$PackageRegistrationStatus>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PackageRegistrationStatus>(parameters);
      }
    }
  }

  export interface Params$Resource$Packages$Packageregistrationstatus$Check extends StandardParameters {
    /**
     * Optional. The SHA-256 fingerprint of the public certificate represented as a 64-character lowercase hexadecimal string without any colons or separators (e.g., `d6ac89ed1d0a805aad4b087d06d5f41645b814480b133fbc867ef7498d069e06`).
     */
    certificateFingerprint?: string;
    /**
     * Required. The name of the package registration status resource. Format: packages/{package\}/packageRegistrationStatus `{package\}` must follow the specific format: The fully-qualified Android package name with dots ('.') replaced by hyphens ('-') (e.g., `com-example-app` instead of `com.example.app`).
     */
    name?: string;
  }
}
