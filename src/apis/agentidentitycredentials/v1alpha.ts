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

export namespace agentidentitycredentials_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
   * Agent Identity Credentials API
   *
   * agentidentitycredentials.googleapis.com API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const agentidentitycredentials = google.agentidentitycredentials('v1alpha');
   * ```
   */
  export class Agentidentitycredentials {
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

  /**
   * Indicates the user has rejected the permission delegation or cancelled the request.
   */
  export interface Schema$GoogleCloudAgentidentitycredentialsV1alpha_ConsentRejected {}
  /**
   * Request message for FinalizeCredentials.
   */
  export interface Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsRequest {
    /**
     * Required. The same consent_nonce value that was provided during redirect in the UriConsentRequired metadata.
     */
    consentNonce?: string | null;
    /**
     * Required. The identity of the end user.
     */
    userId?: string | null;
    /**
     * Required. The encrypted state passed back from the consent flow.
     */
    userIdValidationState?: string | null;
  }
  /**
   * Response message for FinalizeCredentials. Intentionally empty
   */
  export interface Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse {}
  /**
   * Indicates that the credential retrieval is pending. The caller should retry the RetrieveCredentials request after some time.
   */
  export interface Schema$GoogleCloudAgentidentitycredentialsV1alpha_Pending {}
  /**
   * Request message for RetrieveCredentials.
   */
  export interface Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsRequest {
    /**
     * Optional. The URI to redirect the user to after consent is completed. This field is required for authproviders using the 3-legged OAuth flow. For other authprovider types, this field is unused but not rejected.
     */
    continueUri?: string | null;
    /**
     * Optional. Input only. Set this field only if the previous token was expired or invalid. This value must be the full, previously returned token string. Will trigger a refresh of the access token with a stored refresh token, if possible, or a new consent flow.
     */
    forceRefreshToken?: string | null;
    /**
     * Optional. The OAuth scopes required for this access.
     */
    scopes?: string[] | null;
    /**
     * Required. The identity of the end user.
     */
    userId?: string | null;
  }
  /**
   * Response message for RetrieveCredentials. Contains the access tokens and related artifacts.
   */
  export interface Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse {
    /**
     * Message indicating consent was rejected.
     */
    consentRejected?: Schema$GoogleCloudAgentidentitycredentialsV1alpha_ConsentRejected;
    /**
     * Message indicating credential retrieval is pending.
     */
    pending?: Schema$GoogleCloudAgentidentitycredentialsV1alpha_Pending;
    /**
     * Message indicating credentials were successfully retrieved.
     */
    success?: Schema$GoogleCloudAgentidentitycredentialsV1alpha_Success;
    /**
     * Message indicating uri based consent is required.
     */
    uriConsentRequired?: Schema$GoogleCloudAgentidentitycredentialsV1alpha_UriConsentRequired;
  }
  /**
   * Message indicating successful retrieval of credentials.
   */
  export interface Schema$GoogleCloudAgentidentitycredentialsV1alpha_Success {
    /**
     * The expiration time of the token. This does not guarantee that the token will be valid until this time, since the token could be revoked earlier. There could also be clock skew between the auth provider and the client so it may expire slightly earlier. If not set, the token might be permanent or it may be that the service does not (or cannot) know when it will expire.
     */
    expireTime?: string | null;
    /**
     * The HTTP header name where the token should be placed.
     */
    header?: string | null;
    /**
     * The scopes actually associated with the retrieved token. End users may have rejected some requested scopes, or the third-party authorization servers can return a different set of scopes than what was asked for. Callers should verify that all required scopes for their intended use are included in this list.
     */
    scopes?: string[] | null;
    /**
     * The retrieved access token or credential for the end user. On MCPTool call, for an invalid token OAuth spec says this should return 401 or 403, but MCPServers may implement this differently. If you get any flavor of `PERMISSION_DENIED`, retry your original request to RetrieveCredentials with force_refresh_token set to the expired/invalid token string, which will fetch a new token or initiate a new consent flow.
     */
    token?: string | null;
  }
  /**
   * Indicates that the user must visit the provided URI to consent to delegate permission to the agent to act on their behalf. The caller can either poll the `RetrieveCredentials` method, or await the /ValidateUserId callback
   */
  export interface Schema$GoogleCloudAgentidentitycredentialsV1alpha_UriConsentRequired {
    /**
     * Output only. The URL where the user should be redirected to grant consent. This will always be present.
     */
    authorizationUri?: string | null;
    /**
     * Output only. A one-time, randomly generated value that validates the entire consent flow is handled by a single user, avoiding CSRF attacks. It must be submitted with the FinalizeCredentials request to complete the OAuth exchange. This will always be present. Implemented per https://www.rfc-editor.org/rfc/rfc6819#section-5.3.5
     */
    consentNonce?: string | null;
    /**
     * Output only. The unique ID of the credentials retrieval operation.
     */
    uid?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    authProviders: Resource$Projects$Locations$Authproviders;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.authProviders = new Resource$Projects$Locations$Authproviders(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Authproviders {
    context: APIRequestContext;
    credentials: Resource$Projects$Locations$Authproviders$Credentials;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.credentials =
        new Resource$Projects$Locations$Authproviders$Credentials(this.context);
    }
  }

  export class Resource$Projects$Locations$Authproviders$Credentials {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Finalizes the credentials after a successful consent flow.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/agentidentitycredentials.googleapis.com
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
     * const agentidentitycredentials = google.agentidentitycredentials('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await agentidentitycredentials.projects.locations.authProviders.credentials.finalize(
     *       {
     *         // Required. The resource name of the AuthProvider. Format: `projects/{project\}/locations/{location\}/authProviders/{auth_provider\}`
     *         authProvider:
     *           'projects/my-project/locations/my-location/authProviders/my-authProvider',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "consentNonce": "my_consentNonce",
     *           //   "userId": "my_userId",
     *           //   "userIdValidationState": "my_userIdValidationState"
     *           // }
     *         },
     *       },
     *     );
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
    finalize(
      params: Params$Resource$Projects$Locations$Authproviders$Credentials$Finalize,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    finalize(
      params?: Params$Resource$Projects$Locations$Authproviders$Credentials$Finalize,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>
    >;
    finalize(
      params: Params$Resource$Projects$Locations$Authproviders$Credentials$Finalize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    finalize(
      params: Params$Resource$Projects$Locations$Authproviders$Credentials$Finalize,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>
    ): void;
    finalize(
      params: Params$Resource$Projects$Locations$Authproviders$Credentials$Finalize,
      callback: BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>
    ): void;
    finalize(
      callback: BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>
    ): void;
    finalize(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authproviders$Credentials$Finalize
        | BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Authproviders$Credentials$Finalize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Authproviders$Credentials$Finalize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agentidentitycredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+authProvider}/credentials:finalize'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['authProvider'],
        pathParams: ['authProvider'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves authorization credentials for an authprovider, or indicates what action needs to be taken to obtain credentials. If the `token` field in the response is populated, credential retrieval was successful. If one of the fields in the `status` oneof is populated, further action is required to obtain credentials, such as redirecting the user for consent. View comments on `RetrieveCredentialsResponse` for more information.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/agentidentitycredentials.googleapis.com
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
     * const agentidentitycredentials = google.agentidentitycredentials('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await agentidentitycredentials.projects.locations.authProviders.credentials.retrieve(
     *       {
     *         // Required. The parent resource name of the AuthProvider. Format: `projects/{project\}/locations/{location\}/authProviders/{auth_provider\}`
     *         authProvider:
     *           'projects/my-project/locations/my-location/authProviders/my-authProvider',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "continueUri": "my_continueUri",
     *           //   "forceRefreshToken": "my_forceRefreshToken",
     *           //   "scopes": [],
     *           //   "userId": "my_userId"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "consentRejected": {},
     *   //   "pending": {},
     *   //   "success": {},
     *   //   "uriConsentRequired": {}
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
    retrieve(
      params: Params$Resource$Projects$Locations$Authproviders$Credentials$Retrieve,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retrieve(
      params?: Params$Resource$Projects$Locations$Authproviders$Credentials$Retrieve,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>
    >;
    retrieve(
      params: Params$Resource$Projects$Locations$Authproviders$Credentials$Retrieve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieve(
      params: Params$Resource$Projects$Locations$Authproviders$Credentials$Retrieve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>
    ): void;
    retrieve(
      params: Params$Resource$Projects$Locations$Authproviders$Credentials$Retrieve,
      callback: BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>
    ): void;
    retrieve(
      callback: BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>
    ): void;
    retrieve(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authproviders$Credentials$Retrieve
        | BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Authproviders$Credentials$Retrieve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Authproviders$Credentials$Retrieve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://agentidentitycredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+authProvider}/credentials:retrieve'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['authProvider'],
        pathParams: ['authProvider'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Authproviders$Credentials$Finalize extends StandardParameters {
    /**
     * Required. The resource name of the AuthProvider. Format: `projects/{project\}/locations/{location\}/authProviders/{auth_provider\}`
     */
    authProvider?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAgentidentitycredentialsV1alpha_FinalizeCredentialsRequest;
  }
  export interface Params$Resource$Projects$Locations$Authproviders$Credentials$Retrieve extends StandardParameters {
    /**
     * Required. The parent resource name of the AuthProvider. Format: `projects/{project\}/locations/{location\}/authProviders/{auth_provider\}`
     */
    authProvider?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAgentidentitycredentialsV1alpha_RetrieveCredentialsRequest;
  }
}
