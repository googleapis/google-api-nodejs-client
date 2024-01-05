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

export namespace playintegrity_v1 {
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
   * Google Play Integrity API
   *
   * The Play Integrity API helps you check that you&#39;re interacting with your genuine app on a genuine Android device powered by Google Play services. The Play Integrity API has replaced SafetyNet Attestation and Android Device Verification.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const playintegrity = google.playintegrity('v1');
   * ```
   */
  export class Playintegrity {
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
   * (Restricted Access) Contains a signal helping apps differentiating between likely genuine and likely non-genuine user traffic.
   */
  export interface Schema$AccountActivity {
    /**
     * Required. Indicates the activity level of the account.
     */
    activityLevel?: string | null;
  }
  /**
   * Contains the account information such as the licensing status for the user in the scope.
   */
  export interface Schema$AccountDetails {
    /**
     * (Restricted Access) Details about the account activity for the user in the scope.
     */
    accountActivity?: Schema$AccountActivity;
    /**
     * Required. Details about the licensing status of the user for the app in the scope.
     */
    appLicensingVerdict?: string | null;
  }
  /**
   * Contains signals about others apps on the device which could be used to access or control the requesting app.
   */
  export interface Schema$AppAccessRiskVerdict {
    /**
     * Required. App access risk verdict related to apps that are not installed by Google Play, and are not preloaded on the system image by the device manufacturer.
     */
    otherApps?: string | null;
    /**
     * Required. App access risk verdict related to apps that are not installed by the Google Play Store, and are not preloaded on the system image by the device manufacturer.
     */
    playOrSystemApps?: string | null;
  }
  /**
   * Contains the application integrity information.
   */
  export interface Schema$AppIntegrity {
    /**
     * Required. Details about the app recognition verdict
     */
    appRecognitionVerdict?: string | null;
    /**
     * The SHA256 hash of the requesting app's signing certificates (base64 web-safe encoded). Set iff app_recognition_verdict != UNEVALUATED.
     */
    certificateSha256Digest?: string[] | null;
    /**
     * Package name of the application under attestation. Set iff app_recognition_verdict != UNEVALUATED.
     */
    packageName?: string | null;
    /**
     * Version code of the application. Set iff app_recognition_verdict != UNEVALUATED.
     */
    versionCode?: string | null;
  }
  /**
   * Request to decode the integrity token.
   */
  export interface Schema$DecodeIntegrityTokenRequest {
    /**
     * Encoded integrity token.
     */
    integrityToken?: string | null;
  }
  /**
   * Response containing the decoded integrity payload.
   */
  export interface Schema$DecodeIntegrityTokenResponse {
    /**
     * Plain token payload generated from the decoded integrity token.
     */
    tokenPayloadExternal?: Schema$TokenPayloadExternal;
  }
  /**
   * Contains the device attestation information.
   */
  export interface Schema$DeviceIntegrity {
    /**
     * Details about the integrity of the device the app is running on.
     */
    deviceRecognitionVerdict?: string[] | null;
    /**
     * Details about the device activity of the device the app is running on.
     */
    recentDeviceActivity?: Schema$RecentDeviceActivity;
  }
  /**
   * Contains information about the environment Play Integrity API runs in, e.g. Play Protect verdict.
   */
  export interface Schema$EnvironmentDetails {
    /**
     * The evaluation of the App Access Risk verdicts.
     */
    appAccessRiskVerdict?: Schema$AppAccessRiskVerdict;
    /**
     * The evaluation of Play Protect verdict.
     */
    playProtectVerdict?: string | null;
  }
  /**
   * Recent device activity can help developers identify devices that have exhibited hyperactive attestation activity, which could be a sign of an attack or token farming.
   */
  export interface Schema$RecentDeviceActivity {
    /**
     * Required. Indicates the activity level of the device.
     */
    deviceActivityLevel?: string | null;
  }
  /**
   * Contains the integrity request information.
   */
  export interface Schema$RequestDetails {
    /**
     * Nonce that was provided in the request (which is base64 web-safe no-wrap).
     */
    nonce?: string | null;
    /**
     * Request hash that was provided in the request.
     */
    requestHash?: string | null;
    /**
     * Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity. For details on application integrity, check application_integrity.
     */
    requestPackageName?: string | null;
    /**
     * Required. Timestamp, in milliseconds, of the integrity application request.
     */
    timestampMillis?: string | null;
  }
  /**
   * Contains additional information generated for testing responses.
   */
  export interface Schema$TestingDetails {
    /**
     * Required. Indicates that the information contained in this payload is a testing response that is statically overridden for a tester.
     */
    isTestingResponse?: boolean | null;
  }
  /**
   * Contains basic app information and integrity signals like device attestation and licensing details.
   */
  export interface Schema$TokenPayloadExternal {
    /**
     * Required. Details about the Play Store account.
     */
    accountDetails?: Schema$AccountDetails;
    /**
     * Required. Details about the application integrity.
     */
    appIntegrity?: Schema$AppIntegrity;
    /**
     * Required. Details about the device integrity.
     */
    deviceIntegrity?: Schema$DeviceIntegrity;
    /**
     * Details of the environment Play Integrity API runs in.
     */
    environmentDetails?: Schema$EnvironmentDetails;
    /**
     * Required. Details about the integrity request.
     */
    requestDetails?: Schema$RequestDetails;
    /**
     * Indicates that this payload is generated for testing purposes and contains any additional data that is linked with testing status.
     */
    testingDetails?: Schema$TestingDetails;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Decodes the integrity token and returns the token payload.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    decodeIntegrityToken(
      params: Params$Resource$V1$Decodeintegritytoken,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    decodeIntegrityToken(
      params?: Params$Resource$V1$Decodeintegritytoken,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DecodeIntegrityTokenResponse>;
    decodeIntegrityToken(
      params: Params$Resource$V1$Decodeintegritytoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    decodeIntegrityToken(
      params: Params$Resource$V1$Decodeintegritytoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DecodeIntegrityTokenResponse>,
      callback: BodyResponseCallback<Schema$DecodeIntegrityTokenResponse>
    ): void;
    decodeIntegrityToken(
      params: Params$Resource$V1$Decodeintegritytoken,
      callback: BodyResponseCallback<Schema$DecodeIntegrityTokenResponse>
    ): void;
    decodeIntegrityToken(
      callback: BodyResponseCallback<Schema$DecodeIntegrityTokenResponse>
    ): void;
    decodeIntegrityToken(
      paramsOrCallback?:
        | Params$Resource$V1$Decodeintegritytoken
        | BodyResponseCallback<Schema$DecodeIntegrityTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DecodeIntegrityTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DecodeIntegrityTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DecodeIntegrityTokenResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Decodeintegritytoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Decodeintegritytoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://playintegrity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+packageName}:decodeIntegrityToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DecodeIntegrityTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DecodeIntegrityTokenResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$V1$Decodeintegritytoken
    extends StandardParameters {
    /**
     *  Package name of the app the attached integrity token belongs to.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DecodeIntegrityTokenRequest;
  }
}
