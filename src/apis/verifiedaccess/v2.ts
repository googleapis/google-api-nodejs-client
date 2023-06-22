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
     * Generated challenge, the bytes representation of SignedData.
     */
    challenge?: string | null;
  }
  /**
   * Properties of the CrowdStrike agent installed on a device.
   */
  export interface Schema$CrowdStrikeAgent {
    /**
     * The Agent ID of the Crowdstrike agent.
     */
    agentId?: string | null;
    /**
     * The Customer ID to which the agent belongs to.
     */
    customerId?: string | null;
  }
  /**
   * The device signals as reported by Chrome. Unless otherwise specified, signals are available on all platforms.
   */
  export interface Schema$DeviceSignals {
    /**
     * Value of the AllowScreenLock policy on the device. See https://chromeenterprise.google/policies/?policy=AllowScreenLock for more details. Available on ChromeOS only.
     */
    allowScreenLock?: boolean | null;
    /**
     * Current version of the Chrome browser which generated this set of signals. Example value: "107.0.5286.0".
     */
    browserVersion?: string | null;
    /**
     * Whether Chrome's built-in DNS client is used. The OS DNS client is otherwise used. This value may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#BuiltInDnsClientEnabled.
     */
    builtInDnsClientEnabled?: boolean | null;
    /**
     * Whether access to the Chrome Remote Desktop application is blocked via a policy.
     */
    chromeRemoteDesktopAppBlocked?: boolean | null;
    /**
     * Crowdstrike agent properties installed on the device, if any. Available on Windows and MacOS only.
     */
    crowdStrikeAgent?: Schema$CrowdStrikeAgent;
    /**
     * Affiliation IDs of the organizations that are affiliated with the organization that is currently managing the device. When the sets of device and profile affiliation IDs overlap, it means that the organizations managing the device and user are affiliated. To learn more about user affiliation, visit https://support.google.com/chrome/a/answer/12801245?ref_topic=9027936.
     */
    deviceAffiliationIds?: string[] | null;
    /**
     * Enrollment domain of the customer which is currently managing the device.
     */
    deviceEnrollmentDomain?: string | null;
    /**
     * The name of the device's manufacturer.
     */
    deviceManufacturer?: string | null;
    /**
     * The name of the device's model.
     */
    deviceModel?: string | null;
    /**
     * The encryption state of the disk. On ChromeOS, the main disk is always ENCRYPTED.
     */
    diskEncryption?: string | null;
    /**
     * The display name of the device, as defined by the user.
     */
    displayName?: string | null;
    /**
     * Hostname of the device.
     */
    hostname?: string | null;
    /**
     * International Mobile Equipment Identity (IMEI) of the device. Available on ChromeOS only.
     */
    imei?: string[] | null;
    /**
     * MAC addresses of the device.
     */
    macAddresses?: string[] | null;
    /**
     * Mobile Equipment Identifier (MEID) of the device. Available on ChromeOS only.
     */
    meid?: string[] | null;
    /**
     * The type of the Operating System currently running on the device.
     */
    operatingSystem?: string | null;
    /**
     * The state of the OS level firewall. On ChromeOS, the value will always be ENABLED on regular devices and UNKNOWN on devices in developer mode.
     */
    osFirewall?: string | null;
    /**
     * The current version of the Operating System. On Windows and linux, the value will also include the security patch information.
     */
    osVersion?: string | null;
    /**
     * Whether the Password Protection Warning feature is enabled or not. Password protection alerts users when they reuse their protected password on potentially suspicious sites. This setting is controlled by an enterprise policy: https://chromeenterprise.google/policies/#PasswordProtectionWarningTrigger. Note that the policy unset does not have the same effects as having the policy explicitly set to `PASSWORD_PROTECTION_OFF`.
     */
    passwordProtectionWarningTrigger?: string | null;
    /**
     * Affiliation IDs of the organizations that are affiliated with the organization that is currently managing the Chrome Profile’s user or ChromeOS user.
     */
    profileAffiliationIds?: string[] | null;
    /**
     * Whether Enterprise-grade (i.e. custom) unsafe URL scanning is enabled or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#EnterpriseRealTimeUrlCheckMode
     */
    realtimeUrlCheckMode?: string | null;
    /**
     * Safe Browsing Protection Level. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel.
     */
    safeBrowsingProtectionLevel?: string | null;
    /**
     * The state of the Screen Lock password protection. On ChromeOS, this value will always be ENABLED as there is not way to disable requiring a password or pin when unlocking the device.
     */
    screenLockSecured?: string | null;
    /**
     * Whether the device's startup software has its Secure Boot feature enabled. Available on Windows only.
     */
    secureBootMode?: string | null;
    /**
     * The serial number of the device. On Windows, this represents the BIOS's serial number. Not available on most Linux distributions.
     */
    serialNumber?: string | null;
    /**
     * Whether the Site Isolation (a.k.a Site Per Process) setting is enabled. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SitePerProcess
     */
    siteIsolationEnabled?: boolean | null;
    /**
     * List of the addesses of all OS level DNS servers configured in the device's network settings.
     */
    systemDnsServers?: string[] | null;
    /**
     * Whether Chrome is blocking third-party software injection or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/?policy=ThirdPartyBlockingEnabled. Available on Windows only.
     */
    thirdPartyBlockingEnabled?: boolean | null;
    /**
     * The trigger which generated this set of signals.
     */
    trigger?: string | null;
    /**
     * Windows domain that the current machine has joined. Available on Windows only.
     */
    windowsMachineDomain?: string | null;
    /**
     * Windows domain for the current OS user. Available on Windows only.
     */
    windowsUserDomain?: string | null;
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
     * Deprecated. Device signal in json string representation. Prefer using `device_signals` instead.
     */
    deviceSignal?: string | null;
    /**
     * Device signals.
     */
    deviceSignals?: Schema$DeviceSignals;
    /**
     * Device attested key trust level.
     */
    keyTrustLevel?: string | null;
    /**
     * Unique customer id that this profile belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers
     */
    profileCustomerId?: string | null;
    /**
     * Profile attested key trust level.
     */
    profileKeyTrustLevel?: string | null;
    /**
     * Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses)
     */
    signedPublicKeyAndChallenge?: string | null;
    /**
     * Virtual device id of the device. The definition of virtual device id is platform-specific.
     */
    virtualDeviceId?: string | null;
    /**
     * The ID of a profile on the device.
     */
    virtualProfileId?: string | null;
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
     *   //   "deviceSignals": {},
     *   //   "keyTrustLevel": "my_keyTrustLevel",
     *   //   "profileCustomerId": "my_profileCustomerId",
     *   //   "profileKeyTrustLevel": "my_profileKeyTrustLevel",
     *   //   "signedPublicKeyAndChallenge": "my_signedPublicKeyAndChallenge",
     *   //   "virtualDeviceId": "my_virtualDeviceId",
     *   //   "virtualProfileId": "my_virtualProfileId"
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
