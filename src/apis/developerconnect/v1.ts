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
   * AccountConnector encapsulates what a platform administrator needs to configure for users to connect to the service providers, which includes, among other fields, the OAuth client ID, client secret, and authorization and token endpoints.
   */
  export interface Schema$AccountConnector {
    /**
     * Optional. Allows users to store small amounts of arbitrary data.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The timestamp when the accountConnector was created.
     */
    createTime?: string | null;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Optional. Labels as key value pairs
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name of the accountConnector, in the format `projects/{project\}/locations/{location\}/accountConnectors/{account_connector_id\}`.
     */
    name?: string | null;
    /**
     * Output only. Start OAuth flow by clicking on this URL.
     */
    oauthStartUri?: string | null;
    /**
     * Provider OAuth config.
     */
    providerOauthConfig?: Schema$ProviderOAuthConfig;
    /**
     * Output only. The timestamp when the accountConnector was updated.
     */
    updateTime?: string | null;
  }
  /**
   * AppHubService represents the App Hub Service.
   */
  export interface Schema$AppHubService {
    /**
     * Required. Output only. Immutable. The name of the App Hub Service. Format: `projects/{project\}/locations/{location\}/applications/{application\}/services/{service\}`.
     */
    apphubService?: string | null;
    /**
     * Output only. The criticality of the App Hub Service.
     */
    criticality?: string | null;
    /**
     * Output only. The environment of the App Hub Service.
     */
    environment?: string | null;
  }
  /**
   * AppHubWorkload represents the App Hub Workload.
   */
  export interface Schema$AppHubWorkload {
    /**
     * Output only. The criticality of the App Hub Workload.
     */
    criticality?: string | null;
    /**
     * Output only. The environment of the App Hub Workload.
     */
    environment?: string | null;
    /**
     * Required. Output only. Immutable. The name of the App Hub Workload. Format: `projects/{project\}/locations/{location\}/applications/{application\}/workloads/{workload\}`.
     */
    workload?: string | null;
  }
  /**
   * The artifact config of the artifact that is deployed.
   */
  export interface Schema$ArtifactConfig {
    /**
     * Optional. Set if the artifact metadata is stored in Artifact analysis.
     */
    googleArtifactAnalysis?: Schema$GoogleArtifactAnalysis;
    /**
     * Optional. Set if the artifact is stored in Artifact registry.
     */
    googleArtifactRegistry?: Schema$GoogleArtifactRegistry;
    /**
     * Required. Immutable. The URI of the artifact that is deployed. e.g. `us-docker.pkg.dev/my-project/my-repo/image`. The URI does not include the tag / digest because it captures a lineage of artifacts.
     */
    uri?: string | null;
  }
  /**
   * Configuration for connections to an instance of Bitbucket Cloud.
   */
  export interface Schema$BitbucketCloudConfig {
    /**
     * Required. An access token with the minimum `repository`, `pullrequest` and `webhook` scope access. It can either be a workspace, project or repository access token. This is needed to create webhooks. It's recommended to use a system account to generate these credentials.
     */
    authorizerCredential?: Schema$UserCredential;
    /**
     * Required. An access token with the minimum `repository` access. It can either be a workspace, project or repository access token. It's recommended to use a system account to generate the credentials.
     */
    readAuthorizerCredential?: Schema$UserCredential;
    /**
     * Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/x/secrets/x/versions/x`. This is used to validate and create webhooks.
     */
    webhookSecretSecretVersion?: string | null;
    /**
     * Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.
     */
    workspace?: string | null;
  }
  /**
   * Configuration for connections to an instance of Bitbucket Data Center.
   */
  export interface Schema$BitbucketDataCenterConfig {
    /**
     * Required. An http access token with the minimum `Repository admin` scope access. This is needed to create webhooks. It's recommended to use a system account to generate these credentials.
     */
    authorizerCredential?: Schema$UserCredential;
    /**
     * Required. The URI of the Bitbucket Data Center host this connection is for.
     */
    hostUri?: string | null;
    /**
     * Required. An http access token with the minimum `Repository read` access. It's recommended to use a system account to generate the credentials.
     */
    readAuthorizerCredential?: Schema$UserCredential;
    /**
     * Output only. Version of the Bitbucket Data Center server running on the `host_uri`.
     */
    serverVersion?: string | null;
    /**
     * Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data Center instance. This should only be set if the Bitbucket Data Center is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the Bitbucket Data Center will be made over the public internet.
     */
    serviceDirectoryConfig?: Schema$ServiceDirectoryConfig;
    /**
     * Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center.
     */
    sslCaCertificate?: string | null;
    /**
     * Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/x/secrets/x/versions/x`. This is used to validate webhooks.
     */
    webhookSecretSecretVersion?: string | null;
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
     * Configuration for connections to an instance of Bitbucket Clouds.
     */
    bitbucketCloudConfig?: Schema$BitbucketCloudConfig;
    /**
     * Configuration for connections to an instance of Bitbucket Data Center.
     */
    bitbucketDataCenterConfig?: Schema$BitbucketDataCenterConfig;
    /**
     * Output only. [Output only] Create timestamp
     */
    createTime?: string | null;
    /**
     * Optional. The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature.
     */
    cryptoKeyConfig?: Schema$CryptoKeyConfig;
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
     * Configuration for connections to an instance of GitHub Enterprise.
     */
    githubEnterpriseConfig?: Schema$GitHubEnterpriseConfig;
    /**
     * Configuration for connections to gitlab.com.
     */
    gitlabConfig?: Schema$GitLabConfig;
    /**
     * Configuration for connections to an instance of GitLab Enterprise.
     */
    gitlabEnterpriseConfig?: Schema$GitLabEnterpriseConfig;
    /**
     * Optional. Configuration for the git proxy feature. Enabling the git proxy allows clients to perform git operations on the repositories linked in the connection.
     */
    gitProxyConfig?: Schema$GitProxyConfig;
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
     * Output only. A system-assigned unique identifier for the Connection.
     */
    uid?: string | null;
    /**
     * Output only. [Output only] Update timestamp
     */
    updateTime?: string | null;
  }
  /**
   * The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.
   */
  export interface Schema$CryptoKeyConfig {
    /**
     * Required. The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
     */
    keyReference?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Message for representing an error from exchanging OAuth tokens.
   */
  export interface Schema$ExchangeError {
    /**
     * https://datatracker.ietf.org/doc/html/rfc6749#section-5.2 - error
     */
    code?: string | null;
    /**
     * https://datatracker.ietf.org/doc/html/rfc6749#section-5.2 - error_description
     */
    description?: string | null;
  }
  /**
   * Message for fetching an OAuth access token.
   */
  export interface Schema$FetchAccessTokenRequest {}
  /**
   * Message for responding to getting an OAuth access token.
   */
  export interface Schema$FetchAccessTokenResponse {
    /**
     * The error resulted from exchanging OAuth tokens from the service provider.
     */
    exchangeError?: Schema$ExchangeError;
    /**
     * Expiration timestamp. Can be empty if unknown or non-expiring.
     */
    expirationTime?: string | null;
    /**
     * The scopes of the access token.
     */
    scopes?: string[] | null;
    /**
     * The token content.
     */
    token?: string | null;
  }
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
   * Configuration for connections to an instance of GitHub Enterprise.
   */
  export interface Schema$GitHubEnterpriseConfig {
    /**
     * Optional. ID of the GitHub App created from the manifest.
     */
    appId?: string | null;
    /**
     * Optional. ID of the installation of the GitHub App.
     */
    appInstallationId?: string | null;
    /**
     * Output only. The URL-friendly name of the GitHub App.
     */
    appSlug?: string | null;
    /**
     * Required. The URI of the GitHub Enterprise host this connection is for.
     */
    hostUri?: string | null;
    /**
     * Output only. The URI to navigate to in order to manage the installation associated with this GitHubEnterpriseConfig.
     */
    installationUri?: string | null;
    /**
     * Optional. SecretManager resource containing the private key of the GitHub App, formatted as `projects/x/secrets/x/versions/x`.
     */
    privateKeySecretVersion?: string | null;
    /**
     * Output only. GitHub Enterprise version installed at the host_uri.
     */
    serverVersion?: string | null;
    /**
     * Optional. Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet.
     */
    serviceDirectoryConfig?: Schema$ServiceDirectoryConfig;
    /**
     * Optional. SSL certificate to use for requests to GitHub Enterprise.
     */
    sslCaCertificate?: string | null;
    /**
     * Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/x/secrets/x/versions/x`.
     */
    webhookSecretSecretVersion?: string | null;
  }
  /**
   * Configuration for connections to gitlab.com.
   */
  export interface Schema$GitLabConfig {
    /**
     * Required. A GitLab personal access token with the minimum `api` scope access and a minimum role of `maintainer`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to.
     */
    authorizerCredential?: Schema$UserCredential;
    /**
     * Required. A GitLab personal access token with the minimum `read_api` scope access and a minimum role of `reporter`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to.
     */
    readAuthorizerCredential?: Schema$UserCredential;
    /**
     * Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project, formatted as `projects/x/secrets/x/versions/x`. This is used to validate webhooks.
     */
    webhookSecretSecretVersion?: string | null;
  }
  /**
   * Configuration for connections to an instance of GitLab Enterprise.
   */
  export interface Schema$GitLabEnterpriseConfig {
    /**
     * Required. A GitLab personal access token with the minimum `api` scope access and a minimum role of `maintainer`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to.
     */
    authorizerCredential?: Schema$UserCredential;
    /**
     * Required. The URI of the GitLab Enterprise host this connection is for.
     */
    hostUri?: string | null;
    /**
     * Required. A GitLab personal access token with the minimum `read_api` scope access and a minimum role of `reporter`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to.
     */
    readAuthorizerCredential?: Schema$UserCredential;
    /**
     * Output only. Version of the GitLab Enterprise server running on the `host_uri`.
     */
    serverVersion?: string | null;
    /**
     * Optional. Configuration for using Service Directory to privately connect to a GitLab Enterprise instance. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet.
     */
    serviceDirectoryConfig?: Schema$ServiceDirectoryConfig;
    /**
     * Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance.
     */
    sslCaCertificate?: string | null;
    /**
     * Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project, formatted as `projects/x/secrets/x/versions/x`. This is used to validate webhooks.
     */
    webhookSecretSecretVersion?: string | null;
  }
  /**
   * The git proxy configuration.
   */
  export interface Schema$GitProxyConfig {
    /**
     * Optional. Setting this to true allows the git proxy to be used for performing git operations on the repositories linked in the connection.
     */
    enabled?: boolean | null;
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
     * Output only. URI to access the linked repository through the Git Proxy. This field is only populated if the git proxy is enabled for the connection.
     */
    gitProxyUri?: string | null;
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
     * Output only. A system-assigned unique identifier for the GitRepositoryLink.
     */
    uid?: string | null;
    /**
     * Output only. [Output only] Update timestamp
     */
    updateTime?: string | null;
    /**
     * Output only. External ID of the webhook created for the repository.
     */
    webhookId?: string | null;
  }
  /**
   * GKEWorkload represents the Google Kubernetes Engine runtime.
   */
  export interface Schema$GKEWorkload {
    /**
     * Required. Immutable. The name of the GKE cluster. Format: `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    cluster?: string | null;
    /**
     * Output only. The name of the GKE deployment. Format: `projects/{project\}/locations/{location\}/clusters/{cluster\}/namespaces/{namespace\}/deployments/{deployment\}`.
     */
    deployment?: string | null;
  }
  /**
   * Google Artifact Analysis configurations.
   */
  export interface Schema$GoogleArtifactAnalysis {
    /**
     * Required. The project id of the project where the provenance is stored.
     */
    projectId?: string | null;
  }
  /**
   * Google Artifact Registry configurations.
   */
  export interface Schema$GoogleArtifactRegistry {
    /**
     * Required. Immutable. The name of the artifact registry package.
     */
    artifactRegistryPackage?: string | null;
    /**
     * Required. The host project of Artifact Registry.
     */
    projectId?: string | null;
  }
  /**
   * GoogleCloudRun represents the Cloud Run runtime.
   */
  export interface Schema$GoogleCloudRun {
    /**
     * Required. Immutable. The name of the Cloud Run service. Format: `projects/{project\}/locations/{location\}/services/{service\}`.
     */
    serviceUri?: string | null;
  }
  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * The InsightsConfig resource is the core configuration object to capture events from your Software Development Lifecycle. It acts as the central hub for managing how Developer connect understands your application, its runtime environments, and the artifacts deployed within them.
   */
  export interface Schema$InsightsConfig {
    /**
     * Optional. User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. The name of the App Hub Application. Format: projects/{project\}/locations/{location\}/applications/{application\}
     */
    appHubApplication?: string | null;
    /**
     * Optional. The artifact configurations of the artifacts that are deployed.
     */
    artifactConfigs?: Schema$ArtifactConfig[];
    /**
     * Output only. Create timestamp.
     */
    createTime?: string | null;
    /**
     * Output only. Any errors that occurred while setting up the InsightsConfig. Each error will be in the format: `field_name: error_message`, e.g. GetAppHubApplication: Permission denied while getting App Hub application. Please grant permissions to the P4SA.
     */
    errors?: Schema$Status[];
    /**
     * Optional. Set of labels associated with an InsightsConfig.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the InsightsConfig. Format: projects/{project\}/locations/{location\}/insightsConfigs/{insightsConfig\}
     */
    name?: string | null;
    /**
     * Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of InsightsConfig does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.
     */
    reconciling?: boolean | null;
    /**
     * Output only. The runtime configurations where the application is deployed.
     */
    runtimeConfigs?: Schema$RuntimeConfig[];
    /**
     * Optional. Output only. The state of the InsightsConfig.
     */
    state?: string | null;
    /**
     * Output only. Update timestamp.
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
   * Message for response to listing AccountConnectors
   */
  export interface Schema$ListAccountConnectorsResponse {
    /**
     * The list of AccountConnectors
     */
    accountConnectors?: Schema$AccountConnector[];
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
   * Request for response to listing InsightsConfigs.
   */
  export interface Schema$ListInsightsConfigsResponse {
    /**
     * The list of InsightsConfigs.
     */
    insightsConfigs?: Schema$InsightsConfig[];
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
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Message for response to listing Users
   */
  export interface Schema$ListUsersResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * The list of Users
     */
    users?: Schema$User[];
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * RPC request object accepted by the ProcessBitbucketCloudWebhook RPC method.
   */
  export interface Schema$ProcessBitbucketCloudWebhookRequest {
    /**
     * Required. HTTP request body.
     */
    body?: Schema$HttpBody;
  }
  /**
   * RPC request object accepted by the ProcessBitbucketDataCenterWebhook RPC method.
   */
  export interface Schema$ProcessBitbucketDataCenterWebhookRequest {
    /**
     * Required. HTTP request body.
     */
    body?: Schema$HttpBody;
  }
  /**
   * RPC request object accepted by the ProcessGitHubEnterpriseWebhook RPC method.
   */
  export interface Schema$ProcessGitHubEnterpriseWebhookRequest {
    /**
     * Required. HTTP request body.
     */
    body?: Schema$HttpBody;
  }
  /**
   * RPC request object accepted by the ProcessGitLabEnterpriseWebhook RPC method.
   */
  export interface Schema$ProcessGitLabEnterpriseWebhookRequest {
    /**
     * Required. HTTP request body.
     */
    body?: Schema$HttpBody;
  }
  /**
   * RPC request object accepted by the ProcessGitLabWebhook RPC method.
   */
  export interface Schema$ProcessGitLabWebhookRequest {
    /**
     * Required. HTTP request body.
     */
    body?: Schema$HttpBody;
  }
  /**
   * ProviderOAuthConfig is the OAuth config for a provider.
   */
  export interface Schema$ProviderOAuthConfig {
    /**
     * Required. User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again.
     */
    scopes?: string[] | null;
    /**
     * Immutable. Developer Connect provided OAuth.
     */
    systemProviderId?: string | null;
  }
  /**
   * RuntimeConfig represents the runtimes where the application is deployed.
   */
  export interface Schema$RuntimeConfig {
    /**
     * Output only. App Hub Service.
     */
    appHubService?: Schema$AppHubService;
    /**
     * Output only. App Hub Workload.
     */
    appHubWorkload?: Schema$AppHubWorkload;
    /**
     * Output only. Google Kubernetes Engine runtime.
     */
    gkeWorkload?: Schema$GKEWorkload;
    /**
     * Output only. Cloud Run runtime.
     */
    googleCloudRun?: Schema$GoogleCloudRun;
    /**
     * Output only. The state of the Runtime.
     */
    state?: string | null;
    /**
     * Required. Immutable. The URI of the runtime configuration. For GKE, this is the cluster name. For Cloud Run, this is the service name.
     */
    uri?: string | null;
  }
  /**
   * ServiceDirectoryConfig represents Service Directory configuration for a connection.
   */
  export interface Schema$ServiceDirectoryConfig {
    /**
     * Required. The Service Directory service name. Format: projects/{project\}/locations/{location\}/namespaces/{namespace\}/services/{service\}.
     */
    service?: string | null;
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
  /**
   * User represents a user connected to the service providers through a AccountConnector.
   */
  export interface Schema$User {
    /**
     * Output only. The timestamp when the user was created.
     */
    createTime?: string | null;
    /**
     * Output only. Developer Connect automatically converts user identity to some human readable description, e.g., email address.
     */
    displayName?: string | null;
    /**
     * Output only. The timestamp when the token was last requested.
     */
    lastTokenRequestTime?: string | null;
    /**
     * Identifier. Resource name of the user, in the format `projects/x/locations/x/accountConnectors/x/users/x`.
     */
    name?: string | null;
  }
  /**
   * Represents a personal access token that authorized the Connection, and associated metadata.
   */
  export interface Schema$UserCredential {
    /**
     * Output only. The username associated with this token.
     */
    username?: string | null;
    /**
     * Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: `projects/x/secrets/x/versions/x`.
     */
    userTokenSecretVersion?: string | null;
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
    accountConnectors: Resource$Projects$Locations$Accountconnectors;
    connections: Resource$Projects$Locations$Connections;
    insightsConfigs: Resource$Projects$Locations$Insightsconfigs;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accountConnectors =
        new Resource$Projects$Locations$Accountconnectors(this.context);
      this.connections = new Resource$Projects$Locations$Connections(
        this.context
      );
      this.insightsConfigs = new Resource$Projects$Locations$Insightsconfigs(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Location>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.list({
     *     // Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

  export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends StandardParameters {
    /**
     * Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     */
    extraLocationTypes?: string[];
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

  export class Resource$Projects$Locations$Accountconnectors {
    context: APIRequestContext;
    users: Resource$Projects$Locations$Accountconnectors$Users;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.users = new Resource$Projects$Locations$Accountconnectors$Users(
        this.context
      );
    }

    /**
     * Creates a new AccountConnector in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.accountConnectors.create({
     *       // Required. The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. Its format should adhere to https://google.aip.dev/122#resource-id-segments Names must be unique per-project per-location.
     *       accountConnectorId: 'placeholder-value',
     *       // Required. Location resource name as the account_connector’s parent.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. If set, validate the request, but do not actually post it.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "createTime": "my_createTime",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "oauthStartUri": "my_oauthStartUri",
     *         //   "providerOauthConfig": {},
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Accountconnectors$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Accountconnectors$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Accountconnectors$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Accountconnectors$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Accountconnectors$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$Create
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Accountconnectors$Create;
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
            url: (rootUrl + '/v1/{+parent}/accountConnectors').replace(
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
     * Deletes a single AccountConnector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.accountConnectors.delete({
     *       // Optional. The current etag of the AccountConnectorn. If an etag is provided and does not match the current etag of the AccountConnector, deletion will be blocked and an ABORTED error will be returned.
     *       etag: 'placeholder-value',
     *       // Optional. If set to true, any Users from this AccountConnector will also be deleted. (Otherwise, the request will only work if the AccountConnector has no Users.)
     *       force: 'placeholder-value',
     *       // Required. Name of the resource
     *       name: 'projects/my-project/locations/my-location/accountConnectors/my-accountConnector',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. If set, validate the request, but do not actually post it.
     *       validateOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Accountconnectors$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Accountconnectors$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Accountconnectors$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Accountconnectors$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Accountconnectors$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Accountconnectors$Delete;
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
     * Gets details of a single AccountConnector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.accountConnectors.get({
     *     // Required. Name of the resource
     *     name: 'projects/my-project/locations/my-location/accountConnectors/my-accountConnector',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "oauthStartUri": "my_oauthStartUri",
     *   //   "providerOauthConfig": {},
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Accountconnectors$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Accountconnectors$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AccountConnector>>;
    get(
      params: Params$Resource$Projects$Locations$Accountconnectors$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Accountconnectors$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccountConnector>,
      callback: BodyResponseCallback<Schema$AccountConnector>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Accountconnectors$Get,
      callback: BodyResponseCallback<Schema$AccountConnector>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountConnector>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$Get
        | BodyResponseCallback<Schema$AccountConnector>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountConnector>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountConnector>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AccountConnector>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Accountconnectors$Get;
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
        createAPIRequest<Schema$AccountConnector>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountConnector>(parameters);
      }
    }

    /**
     * Lists AccountConnectors in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.accountConnectors.list({
     *     // Optional. Filtering results
     *     filter: 'placeholder-value',
     *     // Optional. Hint for how to order the results
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListAccountConnectorsRequest
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountConnectors": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Accountconnectors$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Accountconnectors$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAccountConnectorsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Accountconnectors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Accountconnectors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountConnectorsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountConnectorsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Accountconnectors$List,
      callback: BodyResponseCallback<Schema$ListAccountConnectorsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAccountConnectorsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$List
        | BodyResponseCallback<Schema$ListAccountConnectorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountConnectorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountConnectorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAccountConnectorsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Accountconnectors$List;
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
            url: (rootUrl + '/v1/{+parent}/accountConnectors').replace(
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
        createAPIRequest<Schema$ListAccountConnectorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountConnectorsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single AccountConnector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.accountConnectors.patch(
     *     {
     *       // Optional. If set to true, and the accountConnector is not found a new accountConnector will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input accountConnector has all the necessary
     *       allowMissing: 'placeholder-value',
     *       // Identifier. The resource name of the accountConnector, in the format `projects/{project\}/locations/{location\}/accountConnectors/{account_connector_id\}`.
     *       name: 'projects/my-project/locations/my-location/accountConnectors/my-accountConnector',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *       // Optional. If set, validate the request, but do not actually post it.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "createTime": "my_createTime",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "oauthStartUri": "my_oauthStartUri",
     *         //   "providerOauthConfig": {},
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Accountconnectors$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Accountconnectors$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Accountconnectors$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Accountconnectors$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Accountconnectors$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$Patch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Accountconnectors$Patch;
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

  export interface Params$Resource$Projects$Locations$Accountconnectors$Create extends StandardParameters {
    /**
     * Required. The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. Its format should adhere to https://google.aip.dev/122#resource-id-segments Names must be unique per-project per-location.
     */
    accountConnectorId?: string;
    /**
     * Required. Location resource name as the account_connector’s parent.
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
    requestBody?: Schema$AccountConnector;
  }
  export interface Params$Resource$Projects$Locations$Accountconnectors$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the AccountConnectorn. If an etag is provided and does not match the current etag of the AccountConnector, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Optional. If set to true, any Users from this AccountConnector will also be deleted. (Otherwise, the request will only work if the AccountConnector has no Users.)
     */
    force?: boolean;
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
  export interface Params$Resource$Projects$Locations$Accountconnectors$Get extends StandardParameters {
    /**
     * Required. Name of the resource
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Accountconnectors$List extends StandardParameters {
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
     * Required. Parent value for ListAccountConnectorsRequest
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Accountconnectors$Patch extends StandardParameters {
    /**
     * Optional. If set to true, and the accountConnector is not found a new accountConnector will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input accountConnector has all the necessary
     */
    allowMissing?: boolean;
    /**
     * Identifier. The resource name of the accountConnector, in the format `projects/{project\}/locations/{location\}/accountConnectors/{account_connector_id\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. The list of fields to be updated.
     */
    updateMask?: string;
    /**
     * Optional. If set, validate the request, but do not actually post it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountConnector;
  }

  export class Resource$Projects$Locations$Accountconnectors$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a single User.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.accountConnectors.users.delete({
     *       // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     *       etag: 'placeholder-value',
     *       // Required. Name of the resource
     *       name: 'projects/my-project/locations/my-location/accountConnectors/my-accountConnector/users/my-user',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. If set, validate the request, but do not actually post it.
     *       validateOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Accountconnectors$Users$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$Users$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$Users$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Accountconnectors$Users$Delete;
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
     * Delete the User based on the user credentials.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.accountConnectors.users.deleteSelf(
     *       {
     *         // Required. Name of the AccountConnector resource
     *         name: 'projects/my-project/locations/my-location/accountConnectors/my-accountConnector',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    deleteSelf(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Deleteself,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deleteSelf(
      params?: Params$Resource$Projects$Locations$Accountconnectors$Users$Deleteself,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    deleteSelf(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Deleteself,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteSelf(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Deleteself,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteSelf(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Deleteself,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteSelf(callback: BodyResponseCallback<Schema$Operation>): void;
    deleteSelf(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$Users$Deleteself
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$Users$Deleteself;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Accountconnectors$Users$Deleteself;
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
            url: (rootUrl + '/v1/{+name}/users:deleteSelf').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * Fetches OAuth access token based on end user credentials.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.accountConnectors.users.fetchAccessToken(
     *       {
     *         // Required. The resource name of the AccountConnector in the format `projects/x/locations/x/accountConnectors/x`.
     *         accountConnector:
     *           'projects/my-project/locations/my-location/accountConnectors/my-accountConnector',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "exchangeError": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "scopes": [],
     *   //   "token": "my_token"
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
    fetchAccessToken(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchaccesstoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchAccessToken(
      params?: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchaccesstoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchAccessTokenResponse>>;
    fetchAccessToken(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchaccesstoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchAccessToken(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchaccesstoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchAccessTokenResponse>,
      callback: BodyResponseCallback<Schema$FetchAccessTokenResponse>
    ): void;
    fetchAccessToken(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchaccesstoken,
      callback: BodyResponseCallback<Schema$FetchAccessTokenResponse>
    ): void;
    fetchAccessToken(
      callback: BodyResponseCallback<Schema$FetchAccessTokenResponse>
    ): void;
    fetchAccessToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchaccesstoken
        | BodyResponseCallback<Schema$FetchAccessTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchAccessTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchAccessTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchAccessTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchaccesstoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchaccesstoken;
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
              rootUrl + '/v1/{+accountConnector}/users:fetchAccessToken'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountConnector'],
        pathParams: ['accountConnector'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchAccessTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchAccessTokenResponse>(parameters);
      }
    }

    /**
     * Fetch the User based on the user credentials.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.accountConnectors.users.fetchSelf(
     *       {
     *         // Required. Name of the AccountConnector resource
     *         name: 'projects/my-project/locations/my-location/accountConnectors/my-accountConnector',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "lastTokenRequestTime": "my_lastTokenRequestTime",
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
    fetchSelf(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchself,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchSelf(
      params?: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchself,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$User>>;
    fetchSelf(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchself,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchSelf(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchself,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    fetchSelf(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchself,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    fetchSelf(callback: BodyResponseCallback<Schema$User>): void;
    fetchSelf(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchself
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$User>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchself;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchself;
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
            url: (rootUrl + '/v1/{+name}/users:fetchSelf').replace(
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
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }

    /**
     * Lists Users in a given project, location, and account_connector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.accountConnectors.users.list({
     *       // Optional. Filtering results
     *       filter: 'placeholder-value',
     *       // Optional. Hint for how to order the results
     *       orderBy: 'placeholder-value',
     *       // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. Parent value for ListUsersRequest
     *       parent:
     *         'projects/my-project/locations/my-location/accountConnectors/my-accountConnector',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "users": []
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
    list(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Accountconnectors$Users$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListUsersResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListUsersResponse>,
      callback: BodyResponseCallback<Schema$ListUsersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Accountconnectors$Users$List,
      callback: BodyResponseCallback<Schema$ListUsersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListUsersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Accountconnectors$Users$List
        | BodyResponseCallback<Schema$ListUsersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUsersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUsersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListUsersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Accountconnectors$Users$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Accountconnectors$Users$List;
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
            url: (rootUrl + '/v1/{+parent}/users').replace(
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
        createAPIRequest<Schema$ListUsersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUsersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Accountconnectors$Users$Delete extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Accountconnectors$Users$Deleteself extends StandardParameters {
    /**
     * Required. Name of the AccountConnector resource
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchaccesstoken extends StandardParameters {
    /**
     * Required. The resource name of the AccountConnector in the format `projects/x/locations/x/accountConnectors/x`.
     */
    accountConnector?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchAccessTokenRequest;
  }
  export interface Params$Resource$Projects$Locations$Accountconnectors$Users$Fetchself extends StandardParameters {
    /**
     * Required. Name of the AccountConnector resource
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Accountconnectors$Users$List extends StandardParameters {
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
     * Required. Parent value for ListUsersRequest
     */
    parent?: string;
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.connections.create({
     *     // Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC
     *     connectionId: 'placeholder-value',
     *     // Required. Value for parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set, validate the request, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "bitbucketCloudConfig": {},
     *       //   "bitbucketDataCenterConfig": {},
     *       //   "createTime": "my_createTime",
     *       //   "cryptoKeyConfig": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "disabled": false,
     *       //   "etag": "my_etag",
     *       //   "gitProxyConfig": {},
     *       //   "githubConfig": {},
     *       //   "githubEnterpriseConfig": {},
     *       //   "gitlabConfig": {},
     *       //   "gitlabEnterpriseConfig": {},
     *       //   "installationState": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "reconciling": false,
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Connections$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.connections.delete({
     *     // Optional. The current etag of the Connection. If an etag is provided and does not match the current etag of the Connection, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Required. Name of the resource
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set, validate the request, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Connections$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.fetchGitHubInstallations(
     *       {
     *         // Required. The resource name of the connection in the format `projects/x/locations/x/connections/x`.
     *         connection:
     *           'projects/my-project/locations/my-location/connections/my-connection',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "installations": []
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
    fetchGitHubInstallations(
      params: Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchGitHubInstallations(
      params?: Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$FetchGitHubInstallationsResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$FetchGitHubInstallationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.fetchLinkableGitRepositories(
     *       {
     *         // Required. The name of the Connection. Format: `projects/x/locations/x/connections/x`.
     *         connection:
     *           'projects/my-project/locations/my-location/connections/my-connection',
     *         // Optional. Number of results to return in the list. Defaults to 20.
     *         pageSize: 'placeholder-value',
     *         // Optional. Page start.
     *         pageToken: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "linkableGitRepositories": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    fetchLinkableGitRepositories(
      params: Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchLinkableGitRepositories(
      params?: Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$FetchLinkableGitRepositoriesResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$FetchLinkableGitRepositoriesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.connections.get({
     *     // Required. Name of the resource
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "bitbucketCloudConfig": {},
     *   //   "bitbucketDataCenterConfig": {},
     *   //   "createTime": "my_createTime",
     *   //   "cryptoKeyConfig": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "disabled": false,
     *   //   "etag": "my_etag",
     *   //   "gitProxyConfig": {},
     *   //   "githubConfig": {},
     *   //   "githubEnterpriseConfig": {},
     *   //   "gitlabConfig": {},
     *   //   "gitlabEnterpriseConfig": {},
     *   //   "installationState": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "reconciling": false,
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Connections$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Connection>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Connection>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.connections.list({
     *     // Optional. Filtering results
     *     filter: 'placeholder-value',
     *     // Optional. Hint for how to order the results
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListConnectionsRequest
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connections": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Connections$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConnectionsResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConnectionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.connections.patch({
     *     // Optional. If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
     *     allowMissing: 'placeholder-value',
     *     // Identifier. The resource name of the connection, in the format `projects/{project\}/locations/{location\}/connections/{connection_id\}`.
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the Connection resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // Optional. If set, validate the request, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "bitbucketCloudConfig": {},
     *       //   "bitbucketDataCenterConfig": {},
     *       //   "createTime": "my_createTime",
     *       //   "cryptoKeyConfig": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "disabled": false,
     *       //   "etag": "my_etag",
     *       //   "gitProxyConfig": {},
     *       //   "githubConfig": {},
     *       //   "githubEnterpriseConfig": {},
     *       //   "gitlabConfig": {},
     *       //   "gitlabEnterpriseConfig": {},
     *       //   "installationState": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "reconciling": false,
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Connections$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Connections$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

    /**
     * ProcessGitHubEnterpriseWebhook is called by the external GitHub Enterprise instances for notifying events.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.processGitHubEnterpriseWebhook(
     *       {
     *         // Required. Project and location where the webhook will be received. Format: `projects/x/locations/x`.
     *         parent: 'projects/my-project/locations/my-location',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "body": {}
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
    processGitHubEnterpriseWebhook(
      params: Params$Resource$Projects$Locations$Connections$Processgithubenterprisewebhook,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    processGitHubEnterpriseWebhook(
      params?: Params$Resource$Projects$Locations$Connections$Processgithubenterprisewebhook,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    processGitHubEnterpriseWebhook(
      params: Params$Resource$Projects$Locations$Connections$Processgithubenterprisewebhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    processGitHubEnterpriseWebhook(
      params: Params$Resource$Projects$Locations$Connections$Processgithubenterprisewebhook,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processGitHubEnterpriseWebhook(
      params: Params$Resource$Projects$Locations$Connections$Processgithubenterprisewebhook,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processGitHubEnterpriseWebhook(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processGitHubEnterpriseWebhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Processgithubenterprisewebhook
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
        {}) as Params$Resource$Projects$Locations$Connections$Processgithubenterprisewebhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Processgithubenterprisewebhook;
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
              rootUrl +
              '/v1/{+parent}/connections:processGitHubEnterpriseWebhook'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Create extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connections$Delete extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connections$Fetchgithubinstallations extends StandardParameters {
    /**
     * Required. The resource name of the connection in the format `projects/x/locations/x/connections/x`.
     */
    connection?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Fetchlinkablegitrepositories extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connections$Get extends StandardParameters {
    /**
     * Required. Name of the resource
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$List extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connections$Patch extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connections$Processgithubenterprisewebhook extends StandardParameters {
    /**
     * Required. Project and location where the webhook will be received. Format: `projects/x/locations/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProcessGitHubEnterpriseWebhookRequest;
  }

  export class Resource$Projects$Locations$Connections$Gitrepositorylinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a GitRepositoryLink. Upon linking a Git Repository, Developer Connect will configure the Git Repository to send webhook events to Developer Connect. Connections that use Firebase GitHub Application will have events forwarded to the Firebase service. Connections that use Gemini Code Assist will have events forwarded to Gemini Code Assist service. All other Connections will have events forwarded to Cloud Build.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.create(
     *       {
     *         // Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     *         gitRepositoryLinkId: 'placeholder-value',
     *         // Required. Value for parent.
     *         parent:
     *           'projects/my-project/locations/my-location/connections/my-connection',
     *         // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *         requestId: 'placeholder-value',
     *         // Optional. If set, validate the request, but do not actually post it.
     *         validateOnly: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "annotations": {},
     *           //   "cloneUri": "my_cloneUri",
     *           //   "createTime": "my_createTime",
     *           //   "deleteTime": "my_deleteTime",
     *           //   "etag": "my_etag",
     *           //   "gitProxyUri": "my_gitProxyUri",
     *           //   "labels": {},
     *           //   "name": "my_name",
     *           //   "reconciling": false,
     *           //   "uid": "my_uid",
     *           //   "updateTime": "my_updateTime",
     *           //   "webhookId": "my_webhookId"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.delete(
     *       {
     *         // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     *         etag: 'placeholder-value',
     *         // Required. Name of the resource
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/gitRepositoryLinks/my-gitRepositoryLink',
     *         // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *         requestId: 'placeholder-value',
     *         // Optional. If set, validate the request, but do not actually post it.
     *         validateOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.fetchGitRefs(
     *       {
     *         // Required. The resource name of GitRepositoryLink in the format `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     *         gitRepositoryLink:
     *           'projects/my-project/locations/my-location/connections/my-connection/gitRepositoryLinks/my-gitRepositoryLink',
     *         // Optional. Number of results to return in the list. Default to 20.
     *         pageSize: 'placeholder-value',
     *         // Optional. Page start.
     *         pageToken: 'placeholder-value',
     *         // Required. Type of refs to fetch.
     *         refType: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "refNames": []
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
    fetchGitRefs(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchGitRefs(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchGitRefsResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchGitRefsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.fetchReadToken(
     *       {
     *         // Required. The resource name of the gitRepositoryLink in the format `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     *         gitRepositoryLink:
     *           'projects/my-project/locations/my-location/connections/my-connection/gitRepositoryLinks/my-gitRepositoryLink',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expirationTime": "my_expirationTime",
     *   //   "gitUsername": "my_gitUsername",
     *   //   "token": "my_token"
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
    fetchReadToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchReadToken(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchReadTokenResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchReadTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.fetchReadWriteToken(
     *       {
     *         // Required. The resource name of the gitRepositoryLink in the format `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     *         gitRepositoryLink:
     *           'projects/my-project/locations/my-location/connections/my-connection/gitRepositoryLinks/my-gitRepositoryLink',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expirationTime": "my_expirationTime",
     *   //   "gitUsername": "my_gitUsername",
     *   //   "token": "my_token"
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
    fetchReadWriteToken(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchReadWriteToken(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchReadWriteTokenResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchReadWriteTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.get(
     *       {
     *         // Required. Name of the resource
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/gitRepositoryLinks/my-gitRepositoryLink',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "cloneUri": "my_cloneUri",
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "etag": "my_etag",
     *   //   "gitProxyUri": "my_gitProxyUri",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "reconciling": false,
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime",
     *   //   "webhookId": "my_webhookId"
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
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GitRepositoryLink>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GitRepositoryLink>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.list(
     *       {
     *         // Optional. Filtering results
     *         filter: 'placeholder-value',
     *         // Optional. Hint for how to order the results
     *         orderBy: 'placeholder-value',
     *         // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token identifying a page of results the server should return.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent value for ListGitRepositoryLinksRequest
     *         parent:
     *           'projects/my-project/locations/my-location/connections/my-connection',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gitRepositoryLinks": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListGitRepositoryLinksResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListGitRepositoryLinksResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

    /**
     * ProcessBitbucketCloudWebhook is called by the external Bitbucket Cloud instances for notifying events.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.processBitbucketCloudWebhook(
     *       {
     *         // Required. The GitRepositoryLink where the webhook will be received. Format: `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/gitRepositoryLinks/my-gitRepositoryLink',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "body": {}
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
    processBitbucketCloudWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketcloudwebhook,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    processBitbucketCloudWebhook(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketcloudwebhook,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    processBitbucketCloudWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketcloudwebhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    processBitbucketCloudWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketcloudwebhook,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processBitbucketCloudWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketcloudwebhook,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processBitbucketCloudWebhook(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processBitbucketCloudWebhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketcloudwebhook
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
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketcloudwebhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketcloudwebhook;
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
            url: (rootUrl + '/v1/{+name}:processBitbucketCloudWebhook').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * ProcessBitbucketDataCenterWebhook is called by the external Bitbucket Data Center instances for notifying events.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.processBitbucketDataCenterWebhook(
     *       {
     *         // Required. The GitRepositoryLink where the webhook will be received. Format: `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/gitRepositoryLinks/my-gitRepositoryLink',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "body": {}
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
    processBitbucketDataCenterWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketdatacenterwebhook,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    processBitbucketDataCenterWebhook(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketdatacenterwebhook,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    processBitbucketDataCenterWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketdatacenterwebhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    processBitbucketDataCenterWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketdatacenterwebhook,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processBitbucketDataCenterWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketdatacenterwebhook,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processBitbucketDataCenterWebhook(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processBitbucketDataCenterWebhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketdatacenterwebhook
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
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketdatacenterwebhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketdatacenterwebhook;
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
              rootUrl + '/v1/{+name}:processBitbucketDataCenterWebhook'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
     * ProcessGitLabEnterpriseWebhook is called by the external GitLab Enterprise instances for notifying events.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.processGitLabEnterpriseWebhook(
     *       {
     *         // Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/gitRepositoryLinks/my-gitRepositoryLink',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "body": {}
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
    processGitLabEnterpriseWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabenterprisewebhook,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    processGitLabEnterpriseWebhook(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabenterprisewebhook,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    processGitLabEnterpriseWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabenterprisewebhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    processGitLabEnterpriseWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabenterprisewebhook,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processGitLabEnterpriseWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabenterprisewebhook,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processGitLabEnterpriseWebhook(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processGitLabEnterpriseWebhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabenterprisewebhook
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
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabenterprisewebhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabenterprisewebhook;
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
              rootUrl + '/v1/{+name}:processGitLabEnterpriseWebhook'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
     * ProcessGitLabWebhook is called by the GitLab.com for notifying events.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *     await developerconnect.projects.locations.connections.gitRepositoryLinks.processGitLabWebhook(
     *       {
     *         // Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/gitRepositoryLinks/my-gitRepositoryLink',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "body": {}
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
    processGitLabWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabwebhook,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    processGitLabWebhook(
      params?: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabwebhook,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    processGitLabWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabwebhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    processGitLabWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabwebhook,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processGitLabWebhook(
      params: Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabwebhook,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processGitLabWebhook(callback: BodyResponseCallback<Schema$Empty>): void;
    processGitLabWebhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabwebhook
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
        {}) as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabwebhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabwebhook;
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
            url: (rootUrl + '/v1/{+name}:processGitLabWebhook').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
  }

  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Create extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Delete extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchgitrefs extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadtoken extends StandardParameters {
    /**
     * Required. The resource name of the gitRepositoryLink in the format `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    gitRepositoryLink?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchReadTokenRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Fetchreadwritetoken extends StandardParameters {
    /**
     * Required. The resource name of the gitRepositoryLink in the format `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    gitRepositoryLink?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchReadWriteTokenRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Get extends StandardParameters {
    /**
     * Required. Name of the resource
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$List extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketcloudwebhook extends StandardParameters {
    /**
     * Required. The GitRepositoryLink where the webhook will be received. Format: `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProcessBitbucketCloudWebhookRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processbitbucketdatacenterwebhook extends StandardParameters {
    /**
     * Required. The GitRepositoryLink where the webhook will be received. Format: `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProcessBitbucketDataCenterWebhookRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabenterprisewebhook extends StandardParameters {
    /**
     * Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProcessGitLabEnterpriseWebhookRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Gitrepositorylinks$Processgitlabwebhook extends StandardParameters {
    /**
     * Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/x/locations/x/connections/x/gitRepositoryLinks/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProcessGitLabWebhookRequest;
  }

  export class Resource$Projects$Locations$Insightsconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new InsightsConfig in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.insightsConfigs.create({
     *     // Required. ID of the requesting InsightsConfig.
     *     insightsConfigId: 'placeholder-value',
     *     // Required. Value for parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. If set, validate the request, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "appHubApplication": "my_appHubApplication",
     *       //   "artifactConfigs": [],
     *       //   "createTime": "my_createTime",
     *       //   "errors": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "reconciling": false,
     *       //   "runtimeConfigs": [],
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Insightsconfigs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Insightsconfigs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insightsconfigs$Create
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insightsconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Insightsconfigs$Create;
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
            url: (rootUrl + '/v1/{+parent}/insightsConfigs').replace(
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
     * Deletes a single Insight.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.insightsConfigs.delete({
     *     // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     *     etag: 'placeholder-value',
     *     // Required. Value for parent.
     *     name: 'projects/my-project/locations/my-location/insightsConfigs/my-insightsConfig',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set, validate the request, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Insightsconfigs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insightsconfigs$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insightsconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Insightsconfigs$Delete;
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
     * Gets details of a single Insight.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.insightsConfigs.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/insightsConfigs/my-insightsConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "appHubApplication": "my_appHubApplication",
     *   //   "artifactConfigs": [],
     *   //   "createTime": "my_createTime",
     *   //   "errors": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "reconciling": false,
     *   //   "runtimeConfigs": [],
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Insightsconfigs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Insightsconfigs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$InsightsConfig>>;
    get(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$InsightsConfig>,
      callback: BodyResponseCallback<Schema$InsightsConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Get,
      callback: BodyResponseCallback<Schema$InsightsConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$InsightsConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insightsconfigs$Get
        | BodyResponseCallback<Schema$InsightsConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InsightsConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InsightsConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$InsightsConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insightsconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Insightsconfigs$Get;
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
        createAPIRequest<Schema$InsightsConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InsightsConfig>(parameters);
      }
    }

    /**
     * Lists InsightsConfigs in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.insightsConfigs.list({
     *     // Optional. Filtering results. See https://google.aip.dev/160 for more details. Filter string, adhering to the rules in https://google.aip.dev/160. List only InsightsConfigs matching the filter. If filter is empty, all InsightsConfigs are listed.
     *     filter: 'placeholder-value',
     *     // Optional. Hint for how to order the results.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListInsightsConfigsRequest.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "insightsConfigs": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Insightsconfigs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Insightsconfigs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListInsightsConfigsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Insightsconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Insightsconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInsightsConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListInsightsConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Insightsconfigs$List,
      callback: BodyResponseCallback<Schema$ListInsightsConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListInsightsConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insightsconfigs$List
        | BodyResponseCallback<Schema$ListInsightsConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListInsightsConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListInsightsConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListInsightsConfigsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insightsconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Insightsconfigs$List;
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
            url: (rootUrl + '/v1/{+parent}/insightsConfigs').replace(
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
        createAPIRequest<Schema$ListInsightsConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListInsightsConfigsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single InsightsConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.insightsConfigs.patch({
     *     // Optional. If set to true, and the insightsConfig is not found a new insightsConfig will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input insightsConfig has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
     *     allowMissing: 'placeholder-value',
     *     // Identifier. The name of the InsightsConfig. Format: projects/{project\}/locations/{location\}/insightsConfigs/{insightsConfig\}
     *     name: 'projects/my-project/locations/my-location/insightsConfigs/my-insightsConfig',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set, validate the request, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "appHubApplication": "my_appHubApplication",
     *       //   "artifactConfigs": [],
     *       //   "createTime": "my_createTime",
     *       //   "errors": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "reconciling": false,
     *       //   "runtimeConfigs": [],
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Insightsconfigs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Insightsconfigs$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Insightsconfigs$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insightsconfigs$Patch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insightsconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Insightsconfigs$Patch;
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

  export interface Params$Resource$Projects$Locations$Insightsconfigs$Create extends StandardParameters {
    /**
     * Required. ID of the requesting InsightsConfig.
     */
    insightsConfigId?: string;
    /**
     * Required. Value for parent.
     */
    parent?: string;
    /**
     * Optional. If set, validate the request, but do not actually post it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InsightsConfig;
  }
  export interface Params$Resource$Projects$Locations$Insightsconfigs$Delete extends StandardParameters {
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Required. Value for parent.
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
  export interface Params$Resource$Projects$Locations$Insightsconfigs$Get extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Insightsconfigs$List extends StandardParameters {
    /**
     * Optional. Filtering results. See https://google.aip.dev/160 for more details. Filter string, adhering to the rules in https://google.aip.dev/160. List only InsightsConfigs matching the filter. If filter is empty, all InsightsConfigs are listed.
     */
    filter?: string;
    /**
     * Optional. Hint for how to order the results.
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
     * Required. Parent value for ListInsightsConfigsRequest.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Insightsconfigs$Patch extends StandardParameters {
    /**
     * Optional. If set to true, and the insightsConfig is not found a new insightsConfig will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input insightsConfig has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
     */
    allowMissing?: boolean;
    /**
     * Identifier. The name of the InsightsConfig. Format: projects/{project\}/locations/{location\}/insightsConfigs/{insightsConfig\}
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

    /**
     * Request body metadata
     */
    requestBody?: Schema$InsightsConfig;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
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
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerconnect.googleapis.com
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
     * const developerconnect = google.developerconnect('v1');
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
     *   const res = await developerconnect.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *     // When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": [],
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

  export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
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
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     */
    returnPartialSuccess?: boolean;
  }
}
