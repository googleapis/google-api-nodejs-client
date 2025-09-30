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
    deviceRecall: Resource$Devicerecall;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.deviceRecall = new Resource$Devicerecall(this.context);
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
     * List of detected app types signalled for App Access Risk.
     */
    appsDetected?: string[] | null;
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
   * Request to decode the PC integrity token.
   */
  export interface Schema$DecodePcIntegrityTokenRequest {
    /**
     * Encoded integrity token.
     */
    integrityToken?: string | null;
  }
  /**
   * Response containing the decoded PC integrity payload.
   */
  export interface Schema$DecodePcIntegrityTokenResponse {
    /**
     * Plain token payload generated from the decoded integrity token.
     */
    tokenPayloadExternal?: Schema$PcTokenPayloadExternal;
  }
  /**
   * Contains information about the device for which the integrity token was generated, e.g. Android SDK version.
   */
  export interface Schema$DeviceAttributes {
    /**
     * Android SDK version of the device, as defined in the public Android documentation: https://developer.android.com/reference/android/os/Build.VERSION_CODES. It won't be set if a necessary requirement was missed. For example DeviceIntegrity did not meet the minimum bar.
     */
    sdkVersion?: number | null;
  }
  /**
   * Contains the device attestation information.
   */
  export interface Schema$DeviceIntegrity {
    /**
     * Attributes of the device where the integrity token was generated.
     */
    deviceAttributes?: Schema$DeviceAttributes;
    /**
     * Details about the device recall bits set by the developer.
     */
    deviceRecall?: Schema$DeviceRecall;
    /**
     * Details about the integrity of the device the app is running on.
     */
    deviceRecognitionVerdict?: string[] | null;
    /**
     * Contains legacy details about the integrity of the device the app is running on. Only for devices with Android version T or higher and only for apps opted in to the new verdicts. Only available during the transition period to the new verdicts system and will be removed afterwards.
     */
    legacyDeviceRecognitionVerdict?: string[] | null;
    /**
     * Details about the device activity of the device the app is running on.
     */
    recentDeviceActivity?: Schema$RecentDeviceActivity;
  }
  /**
   * Contains the recall bits per device set by the developer.
   */
  export interface Schema$DeviceRecall {
    /**
     * Required. Contains the recall bits values.
     */
    values?: Schema$Values;
    /**
     * Required. Contains the recall bits write dates.
     */
    writeDates?: Schema$WriteDates;
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
   * Contains the account information such as the licensing status for the user in the scope.
   */
  export interface Schema$PcAccountDetails {
    /**
     * Required. Details about the licensing status of the user for the app in the scope.
     */
    appLicensingVerdict?: string | null;
  }
  /**
   * Contains the device attestation information.
   */
  export interface Schema$PcDeviceIntegrity {
    /**
     * Details about the integrity of the device the app is running on.
     */
    deviceRecognitionVerdict?: string[] | null;
  }
  /**
   * Contains the integrity request information.
   */
  export interface Schema$PcRequestDetails {
    /**
     * Request hash that was provided in the request.
     */
    requestHash?: string | null;
    /**
     * Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity.
     */
    requestPackageName?: string | null;
    /**
     * Required. Timestamp, of the integrity application request.
     */
    requestTime?: string | null;
  }
  /**
   * Contains additional information generated for testing responses.
   */
  export interface Schema$PcTestingDetails {
    /**
     * Indicates that the information contained in this payload is a testing response that is statically overridden for a tester.
     */
    isTestingResponse?: boolean | null;
  }
  /**
   * Contains PC device attestation details.
   */
  export interface Schema$PcTokenPayloadExternal {
    /**
     * Details about the account information such as the licensing status.
     */
    accountDetails?: Schema$PcAccountDetails;
    /**
     * Required. Details about the device integrity.
     */
    deviceIntegrity?: Schema$PcDeviceIntegrity;
    /**
     * Required. Details about the integrity request.
     */
    requestDetails?: Schema$PcRequestDetails;
    /**
     * Indicates that this payload is generated for testing purposes and contains any additional data that is linked with testing status.
     */
    testingDetails?: Schema$PcTestingDetails;
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
  /**
   * Contains the recall bits values.
   */
  export interface Schema$Values {
    /**
     * Required. First recall bit value.
     */
    bitFirst?: boolean | null;
    /**
     * Required. Second recall bit value.
     */
    bitSecond?: boolean | null;
    /**
     * Required. Third recall bit value.
     */
    bitThird?: boolean | null;
  }
  /**
   * Contains the recall bits write dates.
   */
  export interface Schema$WriteDates {
    /**
     * Optional. Write time in YYYYMM format (in UTC, e.g. 202402) for the first bit. Note that this value won't be set if the first bit is false.
     */
    yyyymmFirst?: number | null;
    /**
     * Optional. Write time in YYYYMM format (in UTC, e.g. 202402) for the second bit. Note that this value won't be set if the second bit is false.
     */
    yyyymmSecond?: number | null;
    /**
     * Optional. Write time in YYYYMM format (in UTC, e.g. 202402) for the third bit. Note that this value won't be set if the third bit is false.
     */
    yyyymmThird?: number | null;
  }
  /**
   * Request to write device recall bits.
   */
  export interface Schema$WriteDeviceRecallRequest {
    /**
     * Required. Integrity token obtained from calling Play Integrity API.
     */
    integrityToken?: string | null;
    /**
     * Required. The new values for the device recall bits to be written.
     */
    newValues?: Schema$Values;
  }
  /**
   * Response for the Write Device Recall action. Currently empty.
   */
  export interface Schema$WriteDeviceRecallResponse {}

  export class Resource$Devicerecall {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Writes recall bits for the device where Play Integrity API token is obtained. The endpoint is available to select Play partners in an early access program (EAP).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playintegrity.googleapis.com
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
     * const playintegrity = google.playintegrity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playintegrity'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playintegrity.deviceRecall.write({
     *     // Required. Package name of the app the attached integrity token belongs to.
     *     packageName: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "integrityToken": "my_integrityToken",
     *       //   "newValues": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    write(
      params: Params$Resource$Devicerecall$Write,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    write(
      params?: Params$Resource$Devicerecall$Write,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WriteDeviceRecallResponse>>;
    write(
      params: Params$Resource$Devicerecall$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Devicerecall$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WriteDeviceRecallResponse>,
      callback: BodyResponseCallback<Schema$WriteDeviceRecallResponse>
    ): void;
    write(
      params: Params$Resource$Devicerecall$Write,
      callback: BodyResponseCallback<Schema$WriteDeviceRecallResponse>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$WriteDeviceRecallResponse>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Devicerecall$Write
        | BodyResponseCallback<Schema$WriteDeviceRecallResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WriteDeviceRecallResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WriteDeviceRecallResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WriteDeviceRecallResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devicerecall$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devicerecall$Write;
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
            url: (rootUrl + '/v1/{+packageName}/deviceRecall:write').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WriteDeviceRecallResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WriteDeviceRecallResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Devicerecall$Write
    extends StandardParameters {
    /**
     * Required. Package name of the app the attached integrity token belongs to.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WriteDeviceRecallRequest;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Decodes the integrity token and returns the token payload.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playintegrity.googleapis.com
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
     * const playintegrity = google.playintegrity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playintegrity'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playintegrity.decodeIntegrityToken({
     *     //  Package name of the app the attached integrity token belongs to.
     *     packageName: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "integrityToken": "my_integrityToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "tokenPayloadExternal": {}
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
    decodeIntegrityToken(
      params: Params$Resource$V1$Decodeintegritytoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    decodeIntegrityToken(
      params?: Params$Resource$V1$Decodeintegritytoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DecodeIntegrityTokenResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$DecodeIntegrityTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            apiVersion: '',
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

    /**
     * Decodes the PC integrity token and returns the PC token payload.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/playintegrity.googleapis.com
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
     * const playintegrity = google.playintegrity('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/playintegrity'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await playintegrity.decodePcIntegrityToken({
     *     // Package name of the app the attached integrity token belongs to.
     *     packageName: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "integrityToken": "my_integrityToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "tokenPayloadExternal": {}
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
    decodePcIntegrityToken(
      params: Params$Resource$V1$Decodepcintegritytoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    decodePcIntegrityToken(
      params?: Params$Resource$V1$Decodepcintegritytoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DecodePcIntegrityTokenResponse>>;
    decodePcIntegrityToken(
      params: Params$Resource$V1$Decodepcintegritytoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    decodePcIntegrityToken(
      params: Params$Resource$V1$Decodepcintegritytoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DecodePcIntegrityTokenResponse>,
      callback: BodyResponseCallback<Schema$DecodePcIntegrityTokenResponse>
    ): void;
    decodePcIntegrityToken(
      params: Params$Resource$V1$Decodepcintegritytoken,
      callback: BodyResponseCallback<Schema$DecodePcIntegrityTokenResponse>
    ): void;
    decodePcIntegrityToken(
      callback: BodyResponseCallback<Schema$DecodePcIntegrityTokenResponse>
    ): void;
    decodePcIntegrityToken(
      paramsOrCallback?:
        | Params$Resource$V1$Decodepcintegritytoken
        | BodyResponseCallback<Schema$DecodePcIntegrityTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DecodePcIntegrityTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DecodePcIntegrityTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DecodePcIntegrityTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Decodepcintegritytoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Decodepcintegritytoken;
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
            url: (
              rootUrl + '/v1/{+packageName}:decodePcIntegrityToken'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DecodePcIntegrityTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DecodePcIntegrityTokenResponse>(
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
  export interface Params$Resource$V1$Decodepcintegritytoken
    extends StandardParameters {
    /**
     * Package name of the app the attached integrity token belongs to.
     */
    packageName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DecodePcIntegrityTokenRequest;
  }
}
