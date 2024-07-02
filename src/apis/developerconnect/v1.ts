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

export namespace developerconnect_v1 {
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
   * Developer Connect API
   *
   * Connect third-party source code management to Google
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const developerconnect = google.developerconnect('v1');
   * ```
   */
  export class Developerconnect {
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
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Message describing Connection object
   */
  export interface Schema$Connection {
    /**
     * Optional. Allows clients to store small amounts of arbitrary data.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. [Output only] Create timestamp
     */
    createTime?: string | null;
    /**
     * Output only. [Output only] Delete timestamp
     */
    deleteTime?: string | null;
    /**
     * Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
     */
    disabled?: boolean | null;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Configuration for connections to github.com.
     */
    githubConfig?: Schema$GitHubConfig;
    /**
     * Output only. Installation state of the Connection.
     */
    installationState?: Schema$InstallationState;
    /**
     * Optional. Labels as key value pairs
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name of the connection, in the format `projects/{project\}/locations/{location\}/connections/{connection_id\}`.
     */
    name?: string | null;
    /**
     * Output only. Set to true when the connection is being set up or updated in the background.
     */
    reconciling?: boolean | null;
    /**
     * Output only. A system-assigned unique identifier for a the GitRepositoryLink.
     */
    uid?: string | null;
    /**
     * Output only. [Output only] Update timestamp
     */
    updateTime?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Response of fetching github installations.
   */
  export interface Schema$FetchGitHubInstallationsResponse {
    /**
     * List of installations available to the OAuth user (for github.com) or all the installations (for GitHub enterprise).
     */
    installations?: Schema$Installation[];
  }
  /**
   * Response for fetching git refs.
   */
  export interface Schema$FetchGitRefsResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Name of the refs fetched.
     */
    refNames?: string[] | null;
  }
  /**
   * Response message for FetchLinkableGitRepositories.
   */
  export interface Schema$FetchLinkableGitRepositoriesResponse {
    /**
     * The git repositories that can be linked to the connection.
     */
    linkableGitRepositories?: Schema$LinkableGitRepository[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * Message for fetching SCM read token.
   */
  export interface Schema$FetchReadTokenRequest {}
  /**
   * Message for responding to get read token.
   */
  export interface Schema$FetchReadTokenResponse {
    /**
     * Expiration timestamp. Can be empty if unknown or non-expiring.
     */
    expirationTime?: string | null;
    /**
     * The git_username to specify when making a git clone with the token. For example, for GitHub GitRepositoryLinks, this would be "x-access-token"
     */
    gitUsername?: string | null;
    /**
     * The token content.
     */
    token?: string | null;
  }
  /**
   * Message for fetching SCM read/write token.
   */
  export interface Schema$FetchReadWriteTokenRequest {}
  /**
   * Message for responding to get read/write token.
   */
  export interface Schema$FetchReadWriteTokenResponse {
    /**
     * Expiration timestamp. Can be empty if unknown or non-expiring.
     */
    expirationTime?: string | null;
    /**
     * The git_username to specify when making a git clone with the token. For example, for GitHub GitRepositoryLinks, this would be "x-access-token"
     */
    gitUsername?: string | null;
    /**
     * The token content.
     */
    token?: string | null;
  }
  /**
   * Configuration for connections to github.com.
   */
  export interface Schema$GitHubConfig {
    /**
     * Optional. GitHub App installation id.
     */
    appInstallationId?: string | null;
    /**
     * Optional. OAuth credential of the account that authorized the GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the GitHub App of this config.
     */
    authorizerCredential?: Schema$OAuthCredential;
    /**
     * Required. Immutable. The GitHub Application that was installed to the GitHub user or organization.
     */
    githubApp?: string | null;
    /**
     * Output only. The URI to navigate to in order to manage the installation associated with this GitHubConfig.
     */
    installationUri?: string | null;
  }
  /**
   * Message describing the GitRepositoryLink object
   */
  export interface Schema$GitRepositoryLink {
    /**
     * Optional. Allows clients to store small amounts of arbitrary data.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Required. Git Clone URI.
     */
    cloneUri?: string | null;
    /**
     * Output only. [Output only] Create timestamp
     */
    createTime?: string | null;
    /**
     * Output only. [Output only] Delete timestamp
     */
    deleteTime?: string | null;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Optional. Labels as key value pairs
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Resource name of the repository, in the format `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    name?: string | null;
    /**
     * Output only. Set to true when the connection is being set up or updated in the background.
     */
    reconciling?: boolean | null;
    /**
     * Output only. A system-assigned unique identifier for a the GitRepositoryLink.
     */
    uid?: string | null;
    /**
     * Output only. [Output only] Update timestamp
     */
    updateTime?: string | null;
  }
  /**
   * Represents an installation of the GitHub App.
   */
  export interface Schema$Installation {
    /**
     * ID of the installation in GitHub.
     */
    id?: string | null;
    /**
     * Name of the GitHub user or organization that owns this installation.
     */
    name?: string | null;
    /**
     * Either "user" or "organization".
     */
    type?: string | null;
  }
  /**
   * Describes stage and necessary actions to be taken by the user to complete the installation. Used for GitHub and GitHub Enterprise based connections.
   */
  export interface Schema$InstallationState {
    /**
     * Output only. Link to follow for next action. Empty string if the installation is already complete.
     */
    actionUri?: string | null;
    /**
     * Output only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete.
     */
    message?: string | null;
    /**
     * Output only. Current step of the installation process.
     */
    stage?: string | null;
  }
  /**
   * LinkableGitRepository represents a git repository that can be linked to a connection.
   */
  export interface Schema$LinkableGitRepository {
    /**
     * The clone uri of the repository.
     */
    cloneUri?: string | null;
  }
  /**
   * Message for response to listing Connections
   */
  export interface Schema$ListConnectionsResponse {
    /**
     * The list of Connection
     */
    connections?: Schema$Connection[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Message for response to listing GitRepositoryLinks
   */
  export interface Schema$ListGitRepositoryLinksResponse {
    /**
     * The list of GitRepositoryLinks
     */
    gitRepositoryLinks?: Schema$GitRepositoryLink[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Represents an OAuth token of the account that authorized the Connection, and associated metadata.
   */
  export interface Schema$OAuthCredential {
    /**
     * Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: `projects/x/secrets/x/versions/x`.
     */
    oauthTokenSecretVersion?: string | null;
    /**
     * Output only. The username associated with this token.
     */
    username?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
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
    connections: Resource$Projects$Locations$Connections;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connections = new Resource$Projects$Locations$Connections(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Connections {
    context: APIRequestContext;
    gitRepositoryLinks: Resource$Projects$Locations$Connections$Gitrepositorylinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.gitRepositoryLinks =
        new Resource$Projects$Locations$Connections$Gitrepositorylinks(
          this.context
        );
    }

    /**
     * Creates a new Connection in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Connections$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Connections$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connections').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single Connection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Connections$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * FetchGitHubInstallations returns the list of GitHub Installations that are available to be added to a Connection. For github.com, only installations accessible to the authorizer token are returned. For GitHub Enterprise, all installations are returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchGitHubInstallations(
      params: Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchGitHubInstallations(
      params?: Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchGitHubInstallationsResponse>;
    fetchGitHubInstallations(
      params: Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchGitHubInstallations(
      params: Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchGitHubInstallationsResponse>,
      callback: BodyResponseCallback<Schema$FetchGitHubInstallationsResponse>
    ): void;
    fetchGitHubInstallations(
      params: Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations,
      callback: BodyResponseCallback<Schema$FetchGitHubInstallationsResponse>
    ): void;
    fetchGitHubInstallations(
      callback: BodyResponseCallback<Schema$FetchGitHubInstallationsResponse>
    ): void;
    fetchGitHubInstallations(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations
        | BodyResponseCallback<Schema$FetchGitHubInstallationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchGitHubInstallationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchGitHubInstallationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchGitHubInstallationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+connection}:fetchGitHubInstallations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['connection'],
        pathParams: ['connection'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchGitHubInstallationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchGitHubInstallationsResponse>(
          parameters
        );
      }
    }

    /**
     * FetchLinkableGitRepositories returns a list of git repositories from an SCM that are available to be added to a Connection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchLinkableGitRepositories(
      params: Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchLinkableGitRepositories(
      params?: Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchLinkableGitRepositoriesResponse>;
    fetchLinkableGitRepositories(
      params: Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchLinkableGitRepositories(
      params: Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchLinkableGitRepositoriesResponse>,
      callback: BodyResponseCallback<Schema$FetchLinkableGitRepositoriesResponse>
    ): void;
    fetchLinkableGitRepositories(
      params: Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories,
      callback: BodyResponseCallback<Schema$FetchLinkableGitRepositoriesResponse>
    ): void;
    fetchLinkableGitRepositories(
      callback: BodyResponseCallback<Schema$FetchLinkableGitRepositoriesResponse>
    ): void;
    fetchLinkableGitRepositories(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories
        | BodyResponseCallback<Schema$FetchLinkableGitRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchLinkableGitRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchLinkableGitRepositoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchLinkableGitRepositoriesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+connection}:fetchLinkableGitRepositories'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['connection'],
        pathParams: ['connection'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchLinkableGitRepositoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchLinkableGitRepositoriesResponse>(
          parameters
        );
      }
    }

    /**
     * Gets details of a single Connection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Connections$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Connection>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Connection>,
      callback: BodyResponseCallback<Schema$Connection>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Get,
      callback: BodyResponseCallback<Schema$Connection>
    ): void;
    get(callback: BodyResponseCallback<Schema$Connection>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Get
        | BodyResponseCallback<Schema$Connection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Connection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Connection>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Connection> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
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
        createAPIRequest<Schema$Connection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Connection>(parameters);
      }
    }

    /**
     * Lists Connections in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Connections$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConnectionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Connections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectionsResponse>,
      callback: BodyResponseCallback<Schema$ListConnectionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$List,
      callback: BodyResponseCallback<Schema$ListConnectionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListConnectionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$List
        | BodyResponseCallback<Schema$ListConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConnectionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$ListConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConnectionsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single Connection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Connections$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Connections$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Create
    extends StandardParameters {
    /**
     * Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC
     */
    connectionId?: string;
    /**
     * Required. Value for parent.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validate the request, but do not actually post it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Connection;
  }
  export interface Params$Resource$Projects$Locations$Connections$Delete
    extends StandardParameters {
    /**
     * Optional. The current etag of the Connection. If an etag is provided and does not match the current etag of the Connection, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. Name of the resource
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validate the request, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations
    extends StandardParameters {
    /**
     * Required. The resource name of the connection in the format `projects/x/locations/x/connections/x`.
     */
    connection?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories
    extends StandardParameters {
    /**
     * Required. The name of the Connection. Format: `projects/x/locations/x/connections/x`.
     */
    connection?: string;
    /**
     * Optional. Number of results to return in the list. Defaults to 20.
     */
    pageSize?: number;
    /**
     * Optional. Page start.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$List
    extends StandardParameters {
    /**
     * Optional. Filtering results
     */
    filter?: string;
    /**
     * Optional. Hint for how to order the results
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListConnectionsRequest
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
     */
    allowMissing?: boolean;
    /**
     * Identifier. The resource name of the connection, in the format `projects/{project\}/locations/{location\}/connections/{connection_id\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the Connection resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;
    /**
     * Optional. If set, validate the request, but do not actually post it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Connection;
  }

  export class Resource$Projects$Locations$Connections$Gitrepositorylinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a GitRepositoryLink. Upon linking a Git Repository, Developer Connect will configure the Git Repository to send webhook events to Developer Connect. Connections that use Firebase GitHub Application will have events forwarded to the Firebase service. All other Connections will have events forwarded to Cloud Build.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/gitRepositoryLinks').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single GitRepositoryLink.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Fetch the list of branches or tags for a given repository.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchGitRefs(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchGitRefs(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchGitRefsResponse>;
    fetchGitRefs(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchGitRefs(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchGitRefsResponse>,
      callback: BodyResponseCallback<Schema$FetchGitRefsResponse>
    ): void;
    fetchGitRefs(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs,
      callback: BodyResponseCallback<Schema$FetchGitRefsResponse>
    ): void;
    fetchGitRefs(
      callback: BodyResponseCallback<Schema$FetchGitRefsResponse>
    ): void;
    fetchGitRefs(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs
        | BodyResponseCallback<Schema$FetchGitRefsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchGitRefsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchGitRefsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchGitRefsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+gitRepositoryLink}:fetchGitRefs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['gitRepositoryLink'],
        pathParams: ['gitRepositoryLink'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchGitRefsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchGitRefsResponse>(parameters);
      }
    }

    /**
     * Fetches read token of a given gitRepositoryLink.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchReadToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchReadToken(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchReadTokenResponse>;
    fetchReadToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchReadToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchReadTokenResponse>,
      callback: BodyResponseCallback<Schema$FetchReadTokenResponse>
    ): void;
    fetchReadToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken,
      callback: BodyResponseCallback<Schema$FetchReadTokenResponse>
    ): void;
    fetchReadToken(
      callback: BodyResponseCallback<Schema$FetchReadTokenResponse>
    ): void;
    fetchReadToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken
        | BodyResponseCallback<Schema$FetchReadTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchReadTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchReadTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchReadTokenResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+gitRepositoryLink}:fetchReadToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['gitRepositoryLink'],
        pathParams: ['gitRepositoryLink'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchReadTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchReadTokenResponse>(parameters);
      }
    }

    /**
     * Fetches read/write token of a given gitRepositoryLink.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchReadWriteToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchReadWriteToken(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchReadWriteTokenResponse>;
    fetchReadWriteToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchReadWriteToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchReadWriteTokenResponse>,
      callback: BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
    ): void;
    fetchReadWriteToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken,
      callback: BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
    ): void;
    fetchReadWriteToken(
      callback: BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
    ): void;
    fetchReadWriteToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken
        | BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchReadWriteTokenResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+gitRepositoryLink}:fetchReadWriteToken'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['gitRepositoryLink'],
        pathParams: ['gitRepositoryLink'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchReadWriteTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchReadWriteTokenResponse>(parameters);
      }
    }

    /**
     * Gets details of a single GitRepositoryLink.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GitRepositoryLink>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GitRepositoryLink>,
      callback: BodyResponseCallback<Schema$GitRepositoryLink>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get,
      callback: BodyResponseCallback<Schema$GitRepositoryLink>
    ): void;
    get(callback: BodyResponseCallback<Schema$GitRepositoryLink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get
        | BodyResponseCallback<Schema$GitRepositoryLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GitRepositoryLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GitRepositoryLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GitRepositoryLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
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
        createAPIRequest<Schema$GitRepositoryLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GitRepositoryLink>(parameters);
      }
    }

    /**
     * Lists GitRepositoryLinks in a given project, location, and connection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGitRepositoryLinksResponse>;
    list(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGitRepositoryLinksResponse>,
      callback: BodyResponseCallback<Schema$ListGitRepositoryLinksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List,
      callback: BodyResponseCallback<Schema$ListGitRepositoryLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGitRepositoryLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List
        | BodyResponseCallback<Schema$ListGitRepositoryLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGitRepositoryLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGitRepositoryLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGitRepositoryLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/gitRepositoryLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$ListGitRepositoryLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGitRepositoryLinksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     */
    gitRepositoryLinkId?: string;
    /**
     * Required. Value for parent.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validate the request, but do not actually post it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GitRepositoryLink;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete
    extends StandardParameters {
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Required. Name of the resource
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validate the request, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs
    extends StandardParameters {
    /**
     * Required. The resource name of GitRepositoryLink in the format `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    gitRepositoryLink?: string;
    /**
     * Optional. Number of results to return in the list. Default to 20.
     */
    pageSize?: number;
    /**
     * Optional. Page start.
     */
    pageToken?: string;
    /**
     * Required. Type of refs to fetch.
     */
    refType?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken
    extends StandardParameters {
    /**
     * Required. The resource name of the gitRepositoryLink in the format `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    gitRepositoryLink?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchReadTokenRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken
    extends StandardParameters {
    /**
     * Required. The resource name of the gitRepositoryLink in the format `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    gitRepositoryLink?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchReadWriteTokenRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List
    extends StandardParameters {
    /**
     * Optional. Filtering results
     */
    filter?: string;
    /**
     * Optional. Hint for how to order the results
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListGitRepositoryLinksRequest
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerconnect.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
