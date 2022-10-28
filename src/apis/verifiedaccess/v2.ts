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

export namespace verifiedaccess_v2 {
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
   * Chrome Verified Access API
   *
   * API for Verified Access chrome extension to provide credential verification for chrome devices connecting to an enterprise network
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const verifiedaccess = google.verifiedaccess('v2');
   * ```
   */
  export class Verifiedaccess {
    context: APIRequestContext;
    challenge: Resource$Challenge;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.challenge = new Resource$Challenge(this.context);
    }
  }

  /**
   * Result message for VerifiedAccess.GenerateChallenge.
   */
  export interface Schema$Challenge {
    /**
     * Challenge generated with the old signing key, the bytes representation of SignedData (this will only be present during key rotation).
     */
    alternativeChallenge?: string | null;
    /**
     * Generated challenge, the bytes representation of SignedData.
     */
    challenge?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Signed ChallengeResponse.
   */
  export interface Schema$VerifyChallengeResponseRequest {
    /**
     * Required. The generated response to the challenge, the bytes representation of SignedData.
     */
    challengeResponse?: string | null;
    /**
     * Optional. Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match.
     */
    expectedIdentity?: string | null;
  }
  /**
   * Result message for VerifiedAccess.VerifyChallengeResponse.
   */
  export interface Schema$VerifyChallengeResponseResult {
    /**
     * Unique customer id that this device belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers
     */
    customerId?: string | null;
    /**
     * Device permanent id is returned in this field (for the machine response only).
     */
    devicePermanentId?: string | null;
    /**
     * Device signal in json string representation.
     */
    deviceSignal?: string | null;
    /**
     * Device attested key trust level.
     */
    keyTrustLevel?: string | null;
    /**
     * Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses)
     */
    signedPublicKeyAndChallenge?: string | null;
    /**
     * Virtual device id of the device. The definition of virtual device id is platform-specific.
     */
    virtualDeviceId?: string | null;
  }

  export class Resource$Challenge {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates a new challenge.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/verifiedaccess.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const verifiedaccess = google.verifiedaccess('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/verifiedaccess'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await verifiedaccess.challenge.generate({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternativeChallenge": "my_alternativeChallenge",
     *   //   "challenge": "my_challenge"
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
    generate(
      params: Params$Resource$Challenge$Generate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generate(
      params?: Params$Resource$Challenge$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Challenge>;
    generate(
      params: Params$Resource$Challenge$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Challenge$Generate,
      options: MethodOptions | BodyResponseCallback<Schema$Challenge>,
      callback: BodyResponseCallback<Schema$Challenge>
    ): void;
    generate(
      params: Params$Resource$Challenge$Generate,
      callback: BodyResponseCallback<Schema$Challenge>
    ): void;
    generate(callback: BodyResponseCallback<Schema$Challenge>): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Challenge$Generate
        | BodyResponseCallback<Schema$Challenge>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Challenge>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Challenge>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Challenge> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Challenge$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Challenge$Generate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://verifiedaccess.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/challenge:generate').replace(
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
        createAPIRequest<Schema$Challenge>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Challenge>(parameters);
      }
    }

    /**
     * Verifies the challenge response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/verifiedaccess.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const verifiedaccess = google.verifiedaccess('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/verifiedaccess'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await verifiedaccess.challenge.verify({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "challengeResponse": "my_challengeResponse",
     *       //   "expectedIdentity": "my_expectedIdentity"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customerId": "my_customerId",
     *   //   "devicePermanentId": "my_devicePermanentId",
     *   //   "deviceSignal": "my_deviceSignal",
     *   //   "keyTrustLevel": "my_keyTrustLevel",
     *   //   "signedPublicKeyAndChallenge": "my_signedPublicKeyAndChallenge",
     *   //   "virtualDeviceId": "my_virtualDeviceId"
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
    verify(
      params: Params$Resource$Challenge$Verify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    verify(
      params?: Params$Resource$Challenge$Verify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VerifyChallengeResponseResult>;
    verify(
      params: Params$Resource$Challenge$Verify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verify(
      params: Params$Resource$Challenge$Verify,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyChallengeResponseResult>,
      callback: BodyResponseCallback<Schema$VerifyChallengeResponseResult>
    ): void;
    verify(
      params: Params$Resource$Challenge$Verify,
      callback: BodyResponseCallback<Schema$VerifyChallengeResponseResult>
    ): void;
    verify(
      callback: BodyResponseCallback<Schema$VerifyChallengeResponseResult>
    ): void;
    verify(
      paramsOrCallback?:
        | Params$Resource$Challenge$Verify
        | BodyResponseCallback<Schema$VerifyChallengeResponseResult>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VerifyChallengeResponseResult>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VerifyChallengeResponseResult>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VerifyChallengeResponseResult>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Challenge$Verify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Challenge$Verify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://verifiedaccess.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/challenge:verify').replace(
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
        createAPIRequest<Schema$VerifyChallengeResponseResult>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VerifyChallengeResponseResult>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Challenge$Generate
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Empty;
  }
  export interface Params$Resource$Challenge$Verify extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$VerifyChallengeResponseRequest;
  }
}
