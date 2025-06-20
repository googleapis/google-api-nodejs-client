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

export namespace oslogin_v1 {
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
   * Cloud OS Login API
   *
   * You can use OS Login to manage access to your VM instances using IAM roles.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const oslogin = google.oslogin('v1');
   * ```
   */
  export class Oslogin {
    context: APIRequestContext;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.users = new Resource$Users(this.context);
    }
  }

  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A response message for importing an SSH public key.
   */
  export interface Schema$ImportSshPublicKeyResponse {
    /**
     * Detailed information about import results.
     */
    details?: string | null;
    /**
     * The login profile information for the user.
     */
    loginProfile?: Schema$LoginProfile;
  }
  /**
   * The user profile information used for logging in to a virtual machine on Google Compute Engine.
   */
  export interface Schema$LoginProfile {
    /**
     * Required. A unique user ID.
     */
    name?: string | null;
    /**
     * The list of POSIX accounts associated with the user.
     */
    posixAccounts?: Schema$PosixAccount[];
    /**
     * A map from SSH public key fingerprint to the associated key object.
     */
    sshPublicKeys?: {[key: string]: Schema$SshPublicKey} | null;
  }
  /**
   * The POSIX account information associated with a Google account.
   */
  export interface Schema$PosixAccount {
    /**
     * Output only. A POSIX account identifier.
     */
    accountId?: string | null;
    /**
     * The GECOS (user information) entry for this account.
     */
    gecos?: string | null;
    /**
     * The default group ID.
     */
    gid?: string | null;
    /**
     * The path to the home directory for this account.
     */
    homeDirectory?: string | null;
    /**
     * Output only. The canonical resource name.
     */
    name?: string | null;
    /**
     * The operating system type where this account applies.
     */
    operatingSystemType?: string | null;
    /**
     * Only one POSIX account can be marked as primary.
     */
    primary?: boolean | null;
    /**
     * The path to the logic shell for this account.
     */
    shell?: string | null;
    /**
     * System identifier for which account the username or uid applies to. By default, the empty value is used.
     */
    systemId?: string | null;
    /**
     * The user ID.
     */
    uid?: string | null;
    /**
     * The username of the POSIX account.
     */
    username?: string | null;
  }
  /**
   * The SSH public key information associated with a Google account.
   */
  export interface Schema$SshPublicKey {
    /**
     * An expiration time in microseconds since epoch.
     */
    expirationTimeUsec?: string | null;
    /**
     * Output only. The SHA-256 fingerprint of the SSH public key.
     */
    fingerprint?: string | null;
    /**
     * Required. Public key text in SSH format, defined by [RFC4253](https://www.ietf.org/rfc/rfc4253.txt) section 6.6.
     */
    key?: string | null;
    /**
     * Output only. The canonical resource name.
     */
    name?: string | null;
  }

  export class Resource$Users {
    context: APIRequestContext;
    projects: Resource$Users$Projects;
    sshPublicKeys: Resource$Users$Sshpublickeys;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.projects = new Resource$Users$Projects(this.context);
      this.sshPublicKeys = new Resource$Users$Sshpublickeys(this.context);
    }

    /**
     * Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oslogin.googleapis.com
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
     * const oslogin = google.oslogin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/compute',
     *       'https://www.googleapis.com/auth/compute.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await oslogin.users.getLoginProfile({
     *     // Required. The unique ID for the user in format `users/{user\}`.
     *     name: 'users/my-user',
     *     // Required. The project ID of the Google Cloud Platform project.
     *     projectId: 'placeholder-value',
     *     // Optional. A system ID for filtering the results of the request.
     *     systemId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "posixAccounts": [],
     *   //   "sshPublicKeys": {}
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
    getLoginProfile(
      params: Params$Resource$Users$Getloginprofile,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getLoginProfile(
      params?: Params$Resource$Users$Getloginprofile,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LoginProfile>>;
    getLoginProfile(
      params: Params$Resource$Users$Getloginprofile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getLoginProfile(
      params: Params$Resource$Users$Getloginprofile,
      options: MethodOptions | BodyResponseCallback<Schema$LoginProfile>,
      callback: BodyResponseCallback<Schema$LoginProfile>
    ): void;
    getLoginProfile(
      params: Params$Resource$Users$Getloginprofile,
      callback: BodyResponseCallback<Schema$LoginProfile>
    ): void;
    getLoginProfile(callback: BodyResponseCallback<Schema$LoginProfile>): void;
    getLoginProfile(
      paramsOrCallback?:
        | Params$Resource$Users$Getloginprofile
        | BodyResponseCallback<Schema$LoginProfile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoginProfile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoginProfile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LoginProfile>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Getloginprofile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Getloginprofile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/loginProfile').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$LoginProfile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoginProfile>(parameters);
      }
    }

    /**
     * Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oslogin.googleapis.com
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
     * const oslogin = google.oslogin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/compute',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await oslogin.users.importSshPublicKey({
     *     // Required. The unique ID for the user in format `users/{user\}`.
     *     parent: 'users/my-user',
     *     // The project ID of the Google Cloud Platform project.
     *     projectId: 'placeholder-value',
     *     // Optional. The regions to which to assert that the key was written. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region.
     *     regions: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "expirationTimeUsec": "my_expirationTimeUsec",
     *       //   "fingerprint": "my_fingerprint",
     *       //   "key": "my_key",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "details": "my_details",
     *   //   "loginProfile": {}
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
    importSshPublicKey(
      params: Params$Resource$Users$Importsshpublickey,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    importSshPublicKey(
      params?: Params$Resource$Users$Importsshpublickey,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ImportSshPublicKeyResponse>>;
    importSshPublicKey(
      params: Params$Resource$Users$Importsshpublickey,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    importSshPublicKey(
      params: Params$Resource$Users$Importsshpublickey,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ImportSshPublicKeyResponse>,
      callback: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>
    ): void;
    importSshPublicKey(
      params: Params$Resource$Users$Importsshpublickey,
      callback: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>
    ): void;
    importSshPublicKey(
      callback: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>
    ): void;
    importSshPublicKey(
      paramsOrCallback?:
        | Params$Resource$Users$Importsshpublickey
        | BodyResponseCallback<Schema$ImportSshPublicKeyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ImportSshPublicKeyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ImportSshPublicKeyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ImportSshPublicKeyResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Importsshpublickey;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Importsshpublickey;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:importSshPublicKey').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ImportSshPublicKeyResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ImportSshPublicKeyResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Getloginprofile
    extends StandardParameters {
    /**
     * Required. The unique ID for the user in format `users/{user\}`.
     */
    name?: string;
    /**
     * Required. The project ID of the Google Cloud Platform project.
     */
    projectId?: string;
    /**
     * Optional. A system ID for filtering the results of the request.
     */
    systemId?: string;
  }
  export interface Params$Resource$Users$Importsshpublickey
    extends StandardParameters {
    /**
     * Required. The unique ID for the user in format `users/{user\}`.
     */
    parent?: string;
    /**
     * The project ID of the Google Cloud Platform project.
     */
    projectId?: string;
    /**
     * Optional. The regions to which to assert that the key was written. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region.
     */
    regions?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$SshPublicKey;
  }

  export class Resource$Users$Projects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a POSIX account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oslogin.googleapis.com
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
     * const oslogin = google.oslogin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/compute',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await oslogin.users.projects.delete({
     *     // Required. A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user\}/projects/{project\}`.
     *     name: 'users/my-user/projects/my-project',
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
    delete(
      params: Params$Resource$Users$Projects$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Users$Projects$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Users$Projects$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Projects$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Users$Projects$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Projects$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Projects$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Projects$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Projects$Delete
    extends StandardParameters {
    /**
     * Required. A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user\}/projects/{project\}`.
     */
    name?: string;
  }

  export class Resource$Users$Sshpublickeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an SSH public key
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oslogin.googleapis.com
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
     * const oslogin = google.oslogin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/compute',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await oslogin.users.sshPublicKeys.create({
     *     // Required. The unique ID for the user in format `users/{user\}`.
     *     parent: 'users/my-user',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "expirationTimeUsec": "my_expirationTimeUsec",
     *       //   "fingerprint": "my_fingerprint",
     *       //   "key": "my_key",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expirationTimeUsec": "my_expirationTimeUsec",
     *   //   "fingerprint": "my_fingerprint",
     *   //   "key": "my_key",
     *   //   "name": "my_name"
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
    create(
      params: Params$Resource$Users$Sshpublickeys$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Users$Sshpublickeys$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SshPublicKey>>;
    create(
      params: Params$Resource$Users$Sshpublickeys$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Sshpublickeys$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SshPublicKey>,
      callback: BodyResponseCallback<Schema$SshPublicKey>
    ): void;
    create(
      params: Params$Resource$Users$Sshpublickeys$Create,
      callback: BodyResponseCallback<Schema$SshPublicKey>
    ): void;
    create(callback: BodyResponseCallback<Schema$SshPublicKey>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Sshpublickeys$Create
        | BodyResponseCallback<Schema$SshPublicKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SshPublicKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SshPublicKey>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SshPublicKey>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sshpublickeys$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sshpublickeys$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/sshPublicKeys').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SshPublicKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SshPublicKey>(parameters);
      }
    }

    /**
     * Deletes an SSH public key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oslogin.googleapis.com
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
     * const oslogin = google.oslogin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/compute',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await oslogin.users.sshPublicKeys.delete({
     *     // Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user\}/sshPublicKeys/{fingerprint\}`.
     *     name: 'users/my-user/sshPublicKeys/my-sshPublicKey',
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
    delete(
      params: Params$Resource$Users$Sshpublickeys$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Users$Sshpublickeys$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Users$Sshpublickeys$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Sshpublickeys$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Users$Sshpublickeys$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Sshpublickeys$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sshpublickeys$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sshpublickeys$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Retrieves an SSH public key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oslogin.googleapis.com
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
     * const oslogin = google.oslogin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/compute',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await oslogin.users.sshPublicKeys.get({
     *     // Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user\}/sshPublicKeys/{fingerprint\}`.
     *     name: 'users/my-user/sshPublicKeys/my-sshPublicKey',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expirationTimeUsec": "my_expirationTimeUsec",
     *   //   "fingerprint": "my_fingerprint",
     *   //   "key": "my_key",
     *   //   "name": "my_name"
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
    get(
      params: Params$Resource$Users$Sshpublickeys$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Users$Sshpublickeys$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SshPublicKey>>;
    get(
      params: Params$Resource$Users$Sshpublickeys$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Sshpublickeys$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SshPublicKey>,
      callback: BodyResponseCallback<Schema$SshPublicKey>
    ): void;
    get(
      params: Params$Resource$Users$Sshpublickeys$Get,
      callback: BodyResponseCallback<Schema$SshPublicKey>
    ): void;
    get(callback: BodyResponseCallback<Schema$SshPublicKey>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Sshpublickeys$Get
        | BodyResponseCallback<Schema$SshPublicKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SshPublicKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SshPublicKey>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SshPublicKey>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sshpublickeys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sshpublickeys$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SshPublicKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SshPublicKey>(parameters);
      }
    }

    /**
     * Updates an SSH public key and returns the profile information. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oslogin.googleapis.com
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
     * const oslogin = google.oslogin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/compute',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await oslogin.users.sshPublicKeys.patch({
     *     // Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user\}/sshPublicKeys/{fingerprint\}`.
     *     name: 'users/my-user/sshPublicKeys/my-sshPublicKey',
     *     // Optional. Mask to control which fields get updated. Updates all if not present.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "expirationTimeUsec": "my_expirationTimeUsec",
     *       //   "fingerprint": "my_fingerprint",
     *       //   "key": "my_key",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expirationTimeUsec": "my_expirationTimeUsec",
     *   //   "fingerprint": "my_fingerprint",
     *   //   "key": "my_key",
     *   //   "name": "my_name"
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
    patch(
      params: Params$Resource$Users$Sshpublickeys$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Users$Sshpublickeys$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SshPublicKey>>;
    patch(
      params: Params$Resource$Users$Sshpublickeys$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Users$Sshpublickeys$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SshPublicKey>,
      callback: BodyResponseCallback<Schema$SshPublicKey>
    ): void;
    patch(
      params: Params$Resource$Users$Sshpublickeys$Patch,
      callback: BodyResponseCallback<Schema$SshPublicKey>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SshPublicKey>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Sshpublickeys$Patch
        | BodyResponseCallback<Schema$SshPublicKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SshPublicKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SshPublicKey>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SshPublicKey>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sshpublickeys$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sshpublickeys$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$SshPublicKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SshPublicKey>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Sshpublickeys$Create
    extends StandardParameters {
    /**
     * Required. The unique ID for the user in format `users/{user\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SshPublicKey;
  }
  export interface Params$Resource$Users$Sshpublickeys$Delete
    extends StandardParameters {
    /**
     * Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user\}/sshPublicKeys/{fingerprint\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Users$Sshpublickeys$Get
    extends StandardParameters {
    /**
     * Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user\}/sshPublicKeys/{fingerprint\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Users$Sshpublickeys$Patch
    extends StandardParameters {
    /**
     * Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user\}/sshPublicKeys/{fingerprint\}`.
     */
    name?: string;
    /**
     * Optional. Mask to control which fields get updated. Updates all if not present.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SshPublicKey;
  }
}
