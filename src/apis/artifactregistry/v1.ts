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

export namespace artifactregistry_v1 {
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
   * Artifact Registry API
   *
   * Store and manage build artifacts in a scalable and integrated service built on Google infrastructure.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const artifactregistry = google.artifactregistry('v1');
   * ```
   */
  export class Artifactregistry {
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
   * A detailed representation of an Apt artifact. Information in the record is derived from the archive's control file. See https://www.debian.org/doc/debian-policy/ch-controlfields.html
   */
  export interface Schema$AptArtifact {
    /**
     * Output only. Operating system architecture of the artifact.
     */
    architecture?: string | null;
    /**
     * Output only. Repository component of the artifact.
     */
    component?: string | null;
    /**
     * Output only. Contents of the artifact's control metadata file.
     */
    controlFile?: string | null;
    /**
     * Output only. The Artifact Registry resource name of the artifact.
     */
    name?: string | null;
    /**
     * Output only. The Apt package name of the artifact.
     */
    packageName?: string | null;
    /**
     * Output only. An artifact is a binary or source package.
     */
    packageType?: string | null;
  }
  /**
   * Configuration for an Apt remote repository.
   */
  export interface Schema$AptRepository {
    /**
     * One of the publicly available Apt repositories supported by Artifact Registry.
     */
    publicRepository?: Schema$GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository;
  }
  /**
   * The metadata of an LRO from deleting multiple versions.
   */
  export interface Schema$BatchDeleteVersionsMetadata {
    /**
     * The versions the operation failed to delete.
     */
    failedVersions?: string[] | null;
  }
  /**
   * The request to delete multiple versions across a repository.
   */
  export interface Schema$BatchDeleteVersionsRequest {
    /**
     * Required. The names of the versions to delete. A maximum of 10000 versions can be deleted in a batch.
     */
    names?: string[] | null;
    /**
     * If true, the request is performed without deleting data, following AIP-163.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
     */
    role?: string | null;
  }
  /**
   * Artifact policy configuration for repository cleanup policies.
   */
  export interface Schema$CleanupPolicy {
    /**
     * Policy action.
     */
    action?: string | null;
    /**
     * Policy condition for matching versions.
     */
    condition?: Schema$CleanupPolicyCondition;
    /**
     * The user-provided ID of the cleanup policy.
     */
    id?: string | null;
    /**
     * Policy condition for retaining a minimum number of versions. May only be specified with a Keep action.
     */
    mostRecentVersions?: Schema$CleanupPolicyMostRecentVersions;
  }
  /**
   * CleanupPolicyCondition is a set of conditions attached to a CleanupPolicy. If multiple entries are set, all must be satisfied for the condition to be satisfied.
   */
  export interface Schema$CleanupPolicyCondition {
    /**
     * Match versions newer than a duration.
     */
    newerThan?: string | null;
    /**
     * Match versions older than a duration.
     */
    olderThan?: string | null;
    /**
     * Match versions by package prefix. Applied on any prefix match.
     */
    packageNamePrefixes?: string[] | null;
    /**
     * Match versions by tag prefix. Applied on any prefix match.
     */
    tagPrefixes?: string[] | null;
    /**
     * Match versions by tag status.
     */
    tagState?: string | null;
    /**
     * Match versions by version name prefix. Applied on any prefix match.
     */
    versionNamePrefixes?: string[] | null;
  }
  /**
   * CleanupPolicyMostRecentVersions is an alternate condition of a CleanupPolicy for retaining a minimum number of versions.
   */
  export interface Schema$CleanupPolicyMostRecentVersions {
    /**
     * Minimum number of versions to keep.
     */
    keepCount?: number | null;
    /**
     * List of package name prefixes that will apply this rule.
     */
    packageNamePrefixes?: string[] | null;
  }
  /**
   * DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime
   */
  export interface Schema$DockerImage {
    /**
     * The time this image was built. This field is returned as the 'metadata.buildTime' field in the Version resource. The build time is returned to the client as an RFC 3339 string, which can be easily used with the JavaScript Date constructor.
     */
    buildTime?: string | null;
    /**
     * Calculated size of the image. This field is returned as the 'metadata.imageSizeBytes' field in the Version resource.
     */
    imageSizeBytes?: string | null;
    /**
     * Media type of this image, e.g. "application/vnd.docker.distribution.manifest.v2+json". This field is returned as the 'metadata.mediaType' field in the Version resource.
     */
    mediaType?: string | null;
    /**
     * Required. registry_location, project_id, repository_name and image id forms a unique image name:`projects//locations//repository//dockerImages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/dockerImages/ nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" is the image's digest.
     */
    name?: string | null;
    /**
     * Tags attached to this image.
     */
    tags?: string[] | null;
    /**
     * Output only. The time when the docker image was last updated.
     */
    updateTime?: string | null;
    /**
     * Time the image was uploaded.
     */
    uploadTime?: string | null;
    /**
     * Required. URL to access the image. Example: us-west4-docker.pkg.dev/test-project/test-repo/nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf
     */
    uri?: string | null;
  }
  /**
   * Configuration for a Docker remote repository.
   */
  export interface Schema$DockerRepository {
    /**
     * One of the publicly available Docker repositories supported by Artifact Registry.
     */
    publicRepository?: string | null;
  }
  /**
   * DockerRepositoryConfig is docker related repository details. Provides additional configuration details for repositories of the docker format type.
   */
  export interface Schema$DockerRepositoryConfig {
    /**
     * The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
     */
    immutableTags?: boolean | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * GoModule represents a Go module.
   */
  export interface Schema$GoModule {
    /**
     * Output only. The time when the Go module is created.
     */
    createTime?: string | null;
    /**
     * The resource name of a Go module.
     */
    name?: string | null;
    /**
     * Output only. The time when the Go module is updated.
     */
    updateTime?: string | null;
    /**
     * The version of the Go module. Must be a valid canonical version as defined in https://go.dev/ref/mod#glos-canonical-version.
     */
    version?: string | null;
  }
  /**
   * A detailed representation of a GooGet artifact.
   */
  export interface Schema$GoogetArtifact {
    /**
     * Output only. Operating system architecture of the artifact.
     */
    architecture?: string | null;
    /**
     * Output only. The Artifact Registry resource name of the artifact.
     */
    name?: string | null;
    /**
     * Output only. The GooGet package name of the artifact.
     */
    packageName?: string | null;
  }
  /**
   * Files store content that is potentially associated with Packages or Versions.
   */
  export interface Schema$GoogleDevtoolsArtifactregistryV1File {
    /**
     * Output only. The time when the File was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time when the last attempt to refresh the file's data was made. Only set when the repository is remote.
     */
    fetchTime?: string | null;
    /**
     * The hashes of the file content.
     */
    hashes?: Schema$Hash[];
    /**
     * The name of the file, for example: "projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt". If the file ID part contains slashes, they are escaped.
     */
    name?: string | null;
    /**
     * The name of the Package or Version that owns this file, if any.
     */
    owner?: string | null;
    /**
     * The size of the File in bytes.
     */
    sizeBytes?: string | null;
    /**
     * Output only. The time when the File was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Publicly available Apt repositories constructed from a common repository base and a custom repository path.
   */
  export interface Schema$GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository {
    /**
     * A common public repository base for Apt.
     */
    repositoryBase?: string | null;
    /**
     * A custom field to define a path to a specific repository from the base.
     */
    repositoryPath?: string | null;
  }
  /**
   * Publicly available Yum repositories constructed from a common repository base and a custom repository path.
   */
  export interface Schema$GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository {
    /**
     * A common public repository base for Yum.
     */
    repositoryBase?: string | null;
    /**
     * A custom field to define a path to a specific repository from the base.
     */
    repositoryPath?: string | null;
  }
  /**
   * A hash of file content.
   */
  export interface Schema$Hash {
    /**
     * The algorithm used to compute the hash value.
     */
    type?: string | null;
    /**
     * The hash value.
     */
    value?: string | null;
  }
  /**
   * Error information explaining why a package was not imported.
   */
  export interface Schema$ImportAptArtifactsErrorInfo {
    /**
     * The detailed error status.
     */
    error?: Schema$Status;
    /**
     * Google Cloud Storage location requested.
     */
    gcsSource?: Schema$ImportAptArtifactsGcsSource;
  }
  /**
   * Google Cloud Storage location where the artifacts currently reside.
   */
  export interface Schema$ImportAptArtifactsGcsSource {
    /**
     * Cloud Storage paths URI (e.g., gs://my_bucket//my_object).
     */
    uris?: string[] | null;
    /**
     * Supports URI wildcards for matching multiple objects from a single URI.
     */
    useWildcards?: boolean | null;
  }
  /**
   * The operation metadata for importing artifacts.
   */
  export interface Schema$ImportAptArtifactsMetadata {}
  /**
   * The request to import new apt artifacts.
   */
  export interface Schema$ImportAptArtifactsRequest {
    /**
     * Google Cloud Storage location where input content is located.
     */
    gcsSource?: Schema$ImportAptArtifactsGcsSource;
  }
  /**
   * The response message from importing APT artifacts.
   */
  export interface Schema$ImportAptArtifactsResponse {
    /**
     * The Apt artifacts imported.
     */
    aptArtifacts?: Schema$AptArtifact[];
    /**
     * Detailed error info for packages that were not imported.
     */
    errors?: Schema$ImportAptArtifactsErrorInfo[];
  }
  /**
   * Error information explaining why a package was not imported.
   */
  export interface Schema$ImportGoogetArtifactsErrorInfo {
    /**
     * The detailed error status.
     */
    error?: Schema$Status;
    /**
     * Google Cloud Storage location requested.
     */
    gcsSource?: Schema$ImportGoogetArtifactsGcsSource;
  }
  /**
   * Google Cloud Storage location where the artifacts currently reside.
   */
  export interface Schema$ImportGoogetArtifactsGcsSource {
    /**
     * Cloud Storage paths URI (e.g., `gs://my_bucket/my_object`).
     */
    uris?: string[] | null;
    /**
     * Supports URI wildcards for matching multiple objects from a single URI.
     */
    useWildcards?: boolean | null;
  }
  /**
   * The operation metadata for importing artifacts.
   */
  export interface Schema$ImportGoogetArtifactsMetadata {}
  /**
   * The request to import new googet artifacts.
   */
  export interface Schema$ImportGoogetArtifactsRequest {
    /**
     * Google Cloud Storage location where input content is located.
     */
    gcsSource?: Schema$ImportGoogetArtifactsGcsSource;
  }
  /**
   * The response message from importing artifacts.
   */
  export interface Schema$ImportGoogetArtifactsResponse {
    /**
     * Detailed error info for packages that were not imported.
     */
    errors?: Schema$ImportGoogetArtifactsErrorInfo[];
    /**
     * The GooGet artifacts updated.
     */
    googetArtifacts?: Schema$GoogetArtifact[];
  }
  /**
   * Error information explaining why a package was not imported.
   */
  export interface Schema$ImportYumArtifactsErrorInfo {
    /**
     * The detailed error status.
     */
    error?: Schema$Status;
    /**
     * Google Cloud Storage location requested.
     */
    gcsSource?: Schema$ImportYumArtifactsGcsSource;
  }
  /**
   * Google Cloud Storage location where the artifacts currently reside.
   */
  export interface Schema$ImportYumArtifactsGcsSource {
    /**
     * Cloud Storage paths URI (e.g., gs://my_bucket//my_object).
     */
    uris?: string[] | null;
    /**
     * Supports URI wildcards for matching multiple objects from a single URI.
     */
    useWildcards?: boolean | null;
  }
  /**
   * The operation metadata for importing artifacts.
   */
  export interface Schema$ImportYumArtifactsMetadata {}
  /**
   * The request to import new yum artifacts.
   */
  export interface Schema$ImportYumArtifactsRequest {
    /**
     * Google Cloud Storage location where input content is located.
     */
    gcsSource?: Schema$ImportYumArtifactsGcsSource;
  }
  /**
   * The response message from importing YUM artifacts.
   */
  export interface Schema$ImportYumArtifactsResponse {
    /**
     * Detailed error info for packages that were not imported.
     */
    errors?: Schema$ImportYumArtifactsErrorInfo[];
    /**
     * The yum artifacts imported.
     */
    yumArtifacts?: Schema$YumArtifact[];
  }
  /**
   * A detailed representation of a KFP artifact.
   */
  export interface Schema$KfpArtifact {
    /**
     * Output only. Resource name of the KFP artifact. Since users don't directly interact with this resource, the name will be derived from the associated version. For example, when version = ".../versions/sha256:abcdef...", the name will be ".../kfpArtifacts/sha256:abcdef...".
     */
    name?: string | null;
    /**
     * The version associated with the KFP artifact. Must follow the Semantic Versioning standard.
     */
    version?: string | null;
  }
  /**
   * The response from listing docker images.
   */
  export interface Schema$ListDockerImagesResponse {
    /**
     * The docker images returned.
     */
    dockerImages?: Schema$DockerImage[];
    /**
     * The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response from listing files.
   */
  export interface Schema$ListFilesResponse {
    /**
     * The files returned.
     */
    files?: Schema$GoogleDevtoolsArtifactregistryV1File[];
    /**
     * The token to retrieve the next page of files, or empty if there are no more files to return.
     */
    nextPageToken?: string | null;
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
   * The response from listing maven artifacts.
   */
  export interface Schema$ListMavenArtifactsResponse {
    /**
     * The maven artifacts returned.
     */
    mavenArtifacts?: Schema$MavenArtifact[];
    /**
     * The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response from listing npm packages.
   */
  export interface Schema$ListNpmPackagesResponse {
    /**
     * The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return.
     */
    nextPageToken?: string | null;
    /**
     * The npm packages returned.
     */
    npmPackages?: Schema$NpmPackage[];
  }
  /**
   * The response from listing packages.
   */
  export interface Schema$ListPackagesResponse {
    /**
     * The token to retrieve the next page of packages, or empty if there are no more packages to return.
     */
    nextPageToken?: string | null;
    /**
     * The packages returned.
     */
    packages?: Schema$Package[];
  }
  /**
   * The response from listing python packages.
   */
  export interface Schema$ListPythonPackagesResponse {
    /**
     * The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return.
     */
    nextPageToken?: string | null;
    /**
     * The python packages returned.
     */
    pythonPackages?: Schema$PythonPackage[];
  }
  /**
   * The response from listing repositories.
   */
  export interface Schema$ListRepositoriesResponse {
    /**
     * The token to retrieve the next page of repositories, or empty if there are no more repositories to return.
     */
    nextPageToken?: string | null;
    /**
     * The repositories returned.
     */
    repositories?: Schema$Repository[];
  }
  /**
   * The response from listing tags.
   */
  export interface Schema$ListTagsResponse {
    /**
     * The token to retrieve the next page of tags, or empty if there are no more tags to return.
     */
    nextPageToken?: string | null;
    /**
     * The tags returned.
     */
    tags?: Schema$Tag[];
  }
  /**
   * The response from listing versions.
   */
  export interface Schema$ListVersionsResponse {
    /**
     * The token to retrieve the next page of versions, or empty if there are no more versions to return.
     */
    nextPageToken?: string | null;
    /**
     * The versions returned.
     */
    versions?: Schema$Version[];
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
   * MavenArtifact represents a maven artifact.
   */
  export interface Schema$MavenArtifact {
    /**
     * Artifact ID for the artifact.
     */
    artifactId?: string | null;
    /**
     * Output only. Time the artifact was created.
     */
    createTime?: string | null;
    /**
     * Group ID for the artifact. Example: com.google.guava
     */
    groupId?: string | null;
    /**
     * Required. registry_location, project_id, repository_name and maven_artifact forms a unique artifact For example, "projects/test-project/locations/us-west4/repositories/test-repo/mavenArtifacts/ com.google.guava:guava:31.0-jre", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "com.google.guava:guava:31.0-jre" is the maven artifact.
     */
    name?: string | null;
    /**
     * Required. URL to access the pom file of the artifact. Example: us-west4-maven.pkg.dev/test-project/test-repo/com/google/guava/guava/31.0/guava-31.0.pom
     */
    pomUri?: string | null;
    /**
     * Output only. Time the artifact was updated.
     */
    updateTime?: string | null;
    /**
     * Version of this artifact.
     */
    version?: string | null;
  }
  /**
   * Configuration for a Maven remote repository.
   */
  export interface Schema$MavenRepository {
    /**
     * One of the publicly available Maven repositories supported by Artifact Registry.
     */
    publicRepository?: string | null;
  }
  /**
   * MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
   */
  export interface Schema$MavenRepositoryConfig {
    /**
     * The repository with this flag will allow publishing the same snapshot versions.
     */
    allowSnapshotOverwrites?: boolean | null;
    /**
     * Version policy defines the versions that the registry will accept.
     */
    versionPolicy?: string | null;
  }
  /**
   * NpmPackage represents an npm artifact.
   */
  export interface Schema$NpmPackage {
    /**
     * Output only. Time the package was created.
     */
    createTime?: string | null;
    /**
     * Required. registry_location, project_id, repository_name and npm_package forms a unique package For example, "projects/test-project/locations/us-west4/repositories/test-repo/npmPackages/ npm_test:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and npm_test:1.0.0" is the npm package.
     */
    name?: string | null;
    /**
     * Package for the artifact.
     */
    packageName?: string | null;
    /**
     * Tags attached to this package.
     */
    tags?: string[] | null;
    /**
     * Output only. Time the package was updated.
     */
    updateTime?: string | null;
    /**
     * Version of this package.
     */
    version?: string | null;
  }
  /**
   * Configuration for a Npm remote repository.
   */
  export interface Schema$NpmRepository {
    /**
     * One of the publicly available Npm repositories supported by Artifact Registry.
     */
    publicRepository?: string | null;
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
   * Metadata type for longrunning-operations, currently empty.
   */
  export interface Schema$OperationMetadata {}
  /**
   * Packages are named collections of versions.
   */
  export interface Schema$Package {
    /**
     * The time when the package was created.
     */
    createTime?: string | null;
    /**
     * The display name of the package.
     */
    displayName?: string | null;
    /**
     * The name of the package, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`. If the package ID part contains slashes, the slashes are escaped.
     */
    name?: string | null;
    /**
     * The time when the package was last updated. This includes publishing a new version of the package.
     */
    updateTime?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * The Artifact Registry settings that apply to a Project.
   */
  export interface Schema$ProjectSettings {
    /**
     * The redirection state of the legacy repositories in this project.
     */
    legacyRedirectionState?: string | null;
    /**
     * The name of the project's settings. Always of the form: projects/{project-id\}/projectSettings In update request: never set In response: always set
     */
    name?: string | null;
  }
  /**
   * PythonPackage represents a python artifact.
   */
  export interface Schema$PythonPackage {
    /**
     * Output only. Time the package was created.
     */
    createTime?: string | null;
    /**
     * Required. registry_location, project_id, repository_name and python_package forms a unique package name:`projects//locations//repository//pythonPackages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/pythonPackages/ python_package:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and python_package:1.0.0" is the python package.
     */
    name?: string | null;
    /**
     * Package for the artifact.
     */
    packageName?: string | null;
    /**
     * Output only. Time the package was updated.
     */
    updateTime?: string | null;
    /**
     * Required. URL to access the package. Example: us-west4-python.pkg.dev/test-project/test-repo/python_package/file-name-1.0.0.tar.gz
     */
    uri?: string | null;
    /**
     * Version of this package.
     */
    version?: string | null;
  }
  /**
   * Configuration for a Python remote repository.
   */
  export interface Schema$PythonRepository {
    /**
     * One of the publicly available Python repositories supported by Artifact Registry.
     */
    publicRepository?: string | null;
  }
  /**
   * Remote repository configuration.
   */
  export interface Schema$RemoteRepositoryConfig {
    /**
     * Specific settings for an Apt remote repository.
     */
    aptRepository?: Schema$AptRepository;
    /**
     * The description of the remote source.
     */
    description?: string | null;
    /**
     * Specific settings for a Docker remote repository.
     */
    dockerRepository?: Schema$DockerRepository;
    /**
     * Specific settings for a Maven remote repository.
     */
    mavenRepository?: Schema$MavenRepository;
    /**
     * Specific settings for an Npm remote repository.
     */
    npmRepository?: Schema$NpmRepository;
    /**
     * Specific settings for a Python remote repository.
     */
    pythonRepository?: Schema$PythonRepository;
    /**
     * Optional. The credentials used to access the remote repository.
     */
    upstreamCredentials?: Schema$UpstreamCredentials;
    /**
     * Specific settings for a Yum remote repository.
     */
    yumRepository?: Schema$YumRepository;
  }
  /**
   * A Repository for storing artifacts with a specific format.
   */
  export interface Schema$Repository {
    /**
     * Optional. Cleanup policies for this repository. Cleanup policies indicate when certain package versions can be automatically deleted. Map keys are policy IDs supplied by users during policy creation. They must unique within a repository and be under 128 characters in length.
     */
    cleanupPolicies?: {[key: string]: Schema$CleanupPolicy} | null;
    /**
     * Optional. If true, the cleanup pipeline is prevented from deleting versions in this repository.
     */
    cleanupPolicyDryRun?: boolean | null;
    /**
     * Output only. The time when the repository was created.
     */
    createTime?: string | null;
    /**
     * The user-provided description of the repository.
     */
    description?: string | null;
    disallowUnspecifiedMode?: boolean | null;
    /**
     * Docker repository config contains repository level configuration for the repositories of docker type.
     */
    dockerConfig?: Schema$DockerRepositoryConfig;
    /**
     * Optional. The format of packages that are stored in the repository.
     */
    format?: string | null;
    /**
     * The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.
     */
    kmsKeyName?: string | null;
    /**
     * Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Maven repository config contains repository level configuration for the repositories of maven type.
     */
    mavenConfig?: Schema$MavenRepositoryConfig;
    /**
     * Optional. The mode of the repository.
     */
    mode?: string | null;
    /**
     * The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`.
     */
    name?: string | null;
    /**
     * Configuration specific for a Remote Repository.
     */
    remoteRepositoryConfig?: Schema$RemoteRepositoryConfig;
    /**
     * Output only. If set, the repository satisfies physical zone separation.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Output only. The size, in bytes, of all artifact storage in this repository. Repositories that are generally available or in public preview use this to calculate storage costs.
     */
    sizeBytes?: string | null;
    /**
     * Output only. The time when the repository was last updated.
     */
    updateTime?: string | null;
    /**
     * Configuration specific for a Virtual Repository.
     */
    virtualRepositoryConfig?: Schema$VirtualRepositoryConfig;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
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
   * Tags point to a version and represent an alternative name that can be used to access the version.
   */
  export interface Schema$Tag {
    /**
     * The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded.
     */
    name?: string | null;
    /**
     * The name of the version the tag refers to, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811" If the package or version ID parts contain slashes, the slashes are escaped.
     */
    version?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * The response to upload an artifact.
   */
  export interface Schema$UploadAptArtifactMediaResponse {
    /**
     * Operation to be returned to the user.
     */
    operation?: Schema$Operation;
  }
  /**
   * The operation metadata for uploading artifacts.
   */
  export interface Schema$UploadAptArtifactMetadata {}
  /**
   * The request to upload an artifact.
   */
  export interface Schema$UploadAptArtifactRequest {}
  /**
   * The response of the completed artifact upload operation. This response is contained in the Operation and available to users.
   */
  export interface Schema$UploadAptArtifactResponse {
    /**
     * The Apt artifacts updated.
     */
    aptArtifacts?: Schema$AptArtifact[];
  }
  /**
   * The response to upload a Go module.
   */
  export interface Schema$UploadGoModuleMediaResponse {
    /**
     * Operation to be returned to the user.
     */
    operation?: Schema$Operation;
  }
  /**
   * The operation metadata for uploading go modules.
   */
  export interface Schema$UploadGoModuleMetadata {}
  /**
   * The request to upload a Go module.
   */
  export interface Schema$UploadGoModuleRequest {}
  /**
   * The response to upload an artifact.
   */
  export interface Schema$UploadGoogetArtifactMediaResponse {
    /**
     * Operation to be returned to the user.
     */
    operation?: Schema$Operation;
  }
  /**
   * The operation metadata for uploading artifacts.
   */
  export interface Schema$UploadGoogetArtifactMetadata {}
  /**
   * The request to upload an artifact.
   */
  export interface Schema$UploadGoogetArtifactRequest {}
  /**
   * The response of the completed artifact upload operation. This response is contained in the Operation and available to users.
   */
  export interface Schema$UploadGoogetArtifactResponse {
    /**
     * The GooGet artifacts updated.
     */
    googetArtifacts?: Schema$GoogetArtifact[];
  }
  /**
   * The response to upload an artifact.
   */
  export interface Schema$UploadKfpArtifactMediaResponse {
    /**
     * Operation that will be returned to the user.
     */
    operation?: Schema$Operation;
  }
  /**
   * The operation metadata for uploading KFP artifacts.
   */
  export interface Schema$UploadKfpArtifactMetadata {}
  /**
   * The request to upload an artifact.
   */
  export interface Schema$UploadKfpArtifactRequest {
    /**
     * Description of the package version.
     */
    description?: string | null;
    /**
     * Tags to be created with the version.
     */
    tags?: string[] | null;
  }
  /**
   * The response to upload an artifact.
   */
  export interface Schema$UploadYumArtifactMediaResponse {
    /**
     * Operation to be returned to the user.
     */
    operation?: Schema$Operation;
  }
  /**
   * The operation metadata for uploading artifacts.
   */
  export interface Schema$UploadYumArtifactMetadata {}
  /**
   * The request to upload an artifact.
   */
  export interface Schema$UploadYumArtifactRequest {}
  /**
   * The response of the completed artifact upload operation. This response is contained in the Operation and available to users.
   */
  export interface Schema$UploadYumArtifactResponse {
    /**
     * The Yum artifacts updated.
     */
    yumArtifacts?: Schema$YumArtifact[];
  }
  /**
   * The credentials to access the remote repository.
   */
  export interface Schema$UpstreamCredentials {
    /**
     * Use username and password to access the remote repository.
     */
    usernamePasswordCredentials?: Schema$UsernamePasswordCredentials;
  }
  /**
   * Artifact policy configuration for the repository contents.
   */
  export interface Schema$UpstreamPolicy {
    /**
     * The user-provided ID of the upstream policy.
     */
    id?: string | null;
    /**
     * Entries with a greater priority value take precedence in the pull order.
     */
    priority?: number | null;
    /**
     * A reference to the repository resource, for example: `projects/p1/locations/us-central1/repositories/repo1`.
     */
    repository?: string | null;
  }
  /**
   * Username and password credentials.
   */
  export interface Schema$UsernamePasswordCredentials {
    /**
     * The Secret Manager key version that holds the password to access the remote repository. Must be in the format of `projects/{project\}/secrets/{secret\}/versions/{version\}`.
     */
    passwordSecretVersion?: string | null;
    /**
     * The username to access the remote repository.
     */
    username?: string | null;
  }
  /**
   * The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.
   */
  export interface Schema$Version {
    /**
     * The time when the version was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the version, as specified in its metadata.
     */
    description?: string | null;
    /**
     * Output only. Repository-specific Metadata stored against this version. The fields returned are defined by the underlying repository-specific resource. Currently, the resources could be: DockerImage MavenArtifact
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The name of the version, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1". If the package or version ID parts contain slashes, the slashes are escaped.
     */
    name?: string | null;
    /**
     * Output only. A list of related tags. Will contain up to 100 tags that reference this version.
     */
    relatedTags?: Schema$Tag[];
    /**
     * The time when the version was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Virtual repository configuration.
   */
  export interface Schema$VirtualRepositoryConfig {
    /**
     * Policies that configure the upstream artifacts distributed by the Virtual Repository. Upstream policies cannot be set on a standard repository.
     */
    upstreamPolicies?: Schema$UpstreamPolicy[];
  }
  /**
   * The Artifact Registry VPC SC config that apply to a Project.
   */
  export interface Schema$VPCSCConfig {
    /**
     * The name of the project's VPC SC Config. Always of the form: projects/{projectID\}/locations/{location\}/vpcscConfig In update request: never set In response: always set
     */
    name?: string | null;
    /**
     * The project per location VPC SC policy that defines the VPC SC behavior for the Remote Repository (Allow/Deny).
     */
    vpcscPolicy?: string | null;
  }
  /**
   * A detailed representation of a Yum artifact.
   */
  export interface Schema$YumArtifact {
    /**
     * Output only. Operating system architecture of the artifact.
     */
    architecture?: string | null;
    /**
     * Output only. The Artifact Registry resource name of the artifact.
     */
    name?: string | null;
    /**
     * Output only. The yum package name of the artifact.
     */
    packageName?: string | null;
    /**
     * Output only. An artifact is a binary or source package.
     */
    packageType?: string | null;
  }
  /**
   * Configuration for a Yum remote repository.
   */
  export interface Schema$YumRepository {
    /**
     * One of the publicly available Yum repositories supported by Artifact Registry.
     */
    publicRepository?: Schema$GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }

    /**
     * Retrieves the Settings for the Project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getProjectSettings(
      params: Params$Resource$Projects$Getprojectsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getProjectSettings(
      params?: Params$Resource$Projects$Getprojectsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProjectSettings>;
    getProjectSettings(
      params: Params$Resource$Projects$Getprojectsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getProjectSettings(
      params: Params$Resource$Projects$Getprojectsettings,
      options: MethodOptions | BodyResponseCallback<Schema$ProjectSettings>,
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    getProjectSettings(
      params: Params$Resource$Projects$Getprojectsettings,
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    getProjectSettings(
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    getProjectSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getprojectsettings
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ProjectSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getprojectsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getprojectsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProjectSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProjectSettings>(parameters);
      }
    }

    /**
     * Updates the Settings for the Project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateProjectSettings(
      params: Params$Resource$Projects$Updateprojectsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateProjectSettings(
      params?: Params$Resource$Projects$Updateprojectsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProjectSettings>;
    updateProjectSettings(
      params: Params$Resource$Projects$Updateprojectsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateProjectSettings(
      params: Params$Resource$Projects$Updateprojectsettings,
      options: MethodOptions | BodyResponseCallback<Schema$ProjectSettings>,
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    updateProjectSettings(
      params: Params$Resource$Projects$Updateprojectsettings,
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    updateProjectSettings(
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    updateProjectSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updateprojectsettings
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ProjectSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updateprojectsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Updateprojectsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProjectSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProjectSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getprojectsettings
    extends StandardParameters {
    /**
     * Required. The name of the projectSettings resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updateprojectsettings
    extends StandardParameters {
    /**
     * The name of the project's settings. Always of the form: projects/{project-id\}/projectSettings In update request: never set In response: always set
     */
    name?: string;
    /**
     * Field mask to support partial updates.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProjectSettings;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Operations;
    repositories: Resource$Projects$Locations$Repositories;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.repositories = new Resource$Projects$Locations$Repositories(
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
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
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
     * Retrieves the VPCSC Config for the Project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getVpcscConfig(
      params: Params$Resource$Projects$Locations$Getvpcscconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getVpcscConfig(
      params?: Params$Resource$Projects$Locations$Getvpcscconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VPCSCConfig>;
    getVpcscConfig(
      params: Params$Resource$Projects$Locations$Getvpcscconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVpcscConfig(
      params: Params$Resource$Projects$Locations$Getvpcscconfig,
      options: MethodOptions | BodyResponseCallback<Schema$VPCSCConfig>,
      callback: BodyResponseCallback<Schema$VPCSCConfig>
    ): void;
    getVpcscConfig(
      params: Params$Resource$Projects$Locations$Getvpcscconfig,
      callback: BodyResponseCallback<Schema$VPCSCConfig>
    ): void;
    getVpcscConfig(callback: BodyResponseCallback<Schema$VPCSCConfig>): void;
    getVpcscConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getvpcscconfig
        | BodyResponseCallback<Schema$VPCSCConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VPCSCConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VPCSCConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$VPCSCConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getvpcscconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getvpcscconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VPCSCConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VPCSCConfig>(parameters);
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
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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

    /**
     * Updates the VPCSC Config for the Project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateVpcscConfig(
      params: Params$Resource$Projects$Locations$Updatevpcscconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateVpcscConfig(
      params?: Params$Resource$Projects$Locations$Updatevpcscconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VPCSCConfig>;
    updateVpcscConfig(
      params: Params$Resource$Projects$Locations$Updatevpcscconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateVpcscConfig(
      params: Params$Resource$Projects$Locations$Updatevpcscconfig,
      options: MethodOptions | BodyResponseCallback<Schema$VPCSCConfig>,
      callback: BodyResponseCallback<Schema$VPCSCConfig>
    ): void;
    updateVpcscConfig(
      params: Params$Resource$Projects$Locations$Updatevpcscconfig,
      callback: BodyResponseCallback<Schema$VPCSCConfig>
    ): void;
    updateVpcscConfig(callback: BodyResponseCallback<Schema$VPCSCConfig>): void;
    updateVpcscConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Updatevpcscconfig
        | BodyResponseCallback<Schema$VPCSCConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VPCSCConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VPCSCConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$VPCSCConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Updatevpcscconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Updatevpcscconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VPCSCConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VPCSCConfig>(parameters);
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
  export interface Params$Resource$Projects$Locations$Getvpcscconfig
    extends StandardParameters {
    /**
     * Required. The name of the VPCSCConfig resource.
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
  export interface Params$Resource$Projects$Locations$Updatevpcscconfig
    extends StandardParameters {
    /**
     * The name of the project's VPC SC Config. Always of the form: projects/{projectID\}/locations/{location\}/vpcscConfig In update request: never set In response: always set
     */
    name?: string;
    /**
     * Field mask to support partial updates.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VPCSCConfig;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
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

  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Repositories {
    context: APIRequestContext;
    aptArtifacts: Resource$Projects$Locations$Repositories$Aptartifacts;
    dockerImages: Resource$Projects$Locations$Repositories$Dockerimages;
    files: Resource$Projects$Locations$Repositories$Files;
    goModules: Resource$Projects$Locations$Repositories$Gomodules;
    googetArtifacts: Resource$Projects$Locations$Repositories$Googetartifacts;
    kfpArtifacts: Resource$Projects$Locations$Repositories$Kfpartifacts;
    mavenArtifacts: Resource$Projects$Locations$Repositories$Mavenartifacts;
    npmPackages: Resource$Projects$Locations$Repositories$Npmpackages;
    packages: Resource$Projects$Locations$Repositories$Packages;
    pythonPackages: Resource$Projects$Locations$Repositories$Pythonpackages;
    yumArtifacts: Resource$Projects$Locations$Repositories$Yumartifacts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.aptArtifacts =
        new Resource$Projects$Locations$Repositories$Aptartifacts(this.context);
      this.dockerImages =
        new Resource$Projects$Locations$Repositories$Dockerimages(this.context);
      this.files = new Resource$Projects$Locations$Repositories$Files(
        this.context
      );
      this.goModules = new Resource$Projects$Locations$Repositories$Gomodules(
        this.context
      );
      this.googetArtifacts =
        new Resource$Projects$Locations$Repositories$Googetartifacts(
          this.context
        );
      this.kfpArtifacts =
        new Resource$Projects$Locations$Repositories$Kfpartifacts(this.context);
      this.mavenArtifacts =
        new Resource$Projects$Locations$Repositories$Mavenartifacts(
          this.context
        );
      this.npmPackages =
        new Resource$Projects$Locations$Repositories$Npmpackages(this.context);
      this.packages = new Resource$Projects$Locations$Repositories$Packages(
        this.context
      );
      this.pythonPackages =
        new Resource$Projects$Locations$Repositories$Pythonpackages(
          this.context
        );
      this.yumArtifacts =
        new Resource$Projects$Locations$Repositories$Yumartifacts(this.context);
    }

    /**
     * Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Repositories$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Repositories$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Create
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
        {}) as Params$Resource$Projects$Locations$Repositories$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Repositories$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/repositories').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Deletes a repository and all of its contents. The returned Operation will finish once the repository has been deleted. It will not have any Operation metadata and will return a google.protobuf.Empty response.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Repositories$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Delete
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
        {}) as Params$Resource$Projects$Locations$Repositories$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Repositories$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
     * Gets a repository.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Repositories$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Repository>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Repository>,
      callback: BodyResponseCallback<Schema$Repository>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Get,
      callback: BodyResponseCallback<Schema$Repository>
    ): void;
    get(callback: BodyResponseCallback<Schema$Repository>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Get
        | BodyResponseCallback<Schema$Repository>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Repository>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Repository>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Repository> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Repositories$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Repository>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Repository>(parameters);
      }
    }

    /**
     * Gets the IAM policy for a given resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Repositories$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists repositories.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Repositories$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRepositoriesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRepositoriesResponse>,
      callback: BodyResponseCallback<Schema$ListRepositoriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$List,
      callback: BodyResponseCallback<Schema$ListRepositoriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRepositoriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$List
        | BodyResponseCallback<Schema$ListRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRepositoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRepositoriesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Repositories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/repositories').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRepositoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRepositoriesResponse>(parameters);
      }
    }

    /**
     * Updates a repository.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Repositories$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Repository>;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Repository>,
      callback: BodyResponseCallback<Schema$Repository>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Patch,
      callback: BodyResponseCallback<Schema$Repository>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Repository>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Patch
        | BodyResponseCallback<Schema$Repository>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Repository>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Repository>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Repository> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Repositories$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Repository>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Repository>(parameters);
      }
    }

    /**
     * Updates the IAM policy for a given resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Repositories$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Tests if the caller has a list of permissions on a resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Repositories$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Repositories$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Repositories$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Repositories$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Repositories$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Create
    extends StandardParameters {
    /**
     * Required. The name of the parent resource where the repository will be created.
     */
    parent?: string;
    /**
     * Required. The repository id to use for this repository.
     */
    repositoryId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Repository;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Delete
    extends StandardParameters {
    /**
     * Required. The name of the repository to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Get
    extends StandardParameters {
    /**
     * Required. The name of the repository to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$List
    extends StandardParameters {
    /**
     * The maximum number of repositories to return. Maximum page size is 1,000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource whose repositories will be listed.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Patch
    extends StandardParameters {
    /**
     * The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Repository;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Repositories$Aptartifacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Aptartifacts$Import
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
        {}) as Params$Resource$Projects$Locations$Repositories$Aptartifacts$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Aptartifacts$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/aptArtifacts:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadAptArtifactMediaResponse>;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadAptArtifactMediaResponse>,
      callback: BodyResponseCallback<Schema$UploadAptArtifactMediaResponse>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Aptartifacts$Upload,
      callback: BodyResponseCallback<Schema$UploadAptArtifactMediaResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$UploadAptArtifactMediaResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Aptartifacts$Upload
        | BodyResponseCallback<Schema$UploadAptArtifactMediaResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadAptArtifactMediaResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadAptArtifactMediaResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UploadAptArtifactMediaResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Aptartifacts$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Aptartifacts$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/aptArtifacts:create').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/v1/{+parent}/aptArtifacts:create'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadAptArtifactMediaResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadAptArtifactMediaResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Aptartifacts$Import
    extends StandardParameters {
    /**
     * The name of the parent resource where the artifacts will be imported.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportAptArtifactsRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Aptartifacts$Upload
    extends StandardParameters {
    /**
     * The name of the parent resource where the artifacts will be uploaded.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadAptArtifactRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Projects$Locations$Repositories$Dockerimages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a docker image.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Repositories$Dockerimages$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Dockerimages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DockerImage>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Dockerimages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Dockerimages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DockerImage>,
      callback: BodyResponseCallback<Schema$DockerImage>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Dockerimages$Get,
      callback: BodyResponseCallback<Schema$DockerImage>
    ): void;
    get(callback: BodyResponseCallback<Schema$DockerImage>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Dockerimages$Get
        | BodyResponseCallback<Schema$DockerImage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DockerImage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DockerImage>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DockerImage> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Dockerimages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Dockerimages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DockerImage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DockerImage>(parameters);
      }
    }

    /**
     * Lists docker images.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Repositories$Dockerimages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Dockerimages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDockerImagesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Dockerimages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Dockerimages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDockerImagesResponse>,
      callback: BodyResponseCallback<Schema$ListDockerImagesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Dockerimages$List,
      callback: BodyResponseCallback<Schema$ListDockerImagesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDockerImagesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Dockerimages$List
        | BodyResponseCallback<Schema$ListDockerImagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDockerImagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDockerImagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDockerImagesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Dockerimages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Dockerimages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dockerImages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDockerImagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDockerImagesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Dockerimages$Get
    extends StandardParameters {
    /**
     * Required. The name of the docker images.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Dockerimages$List
    extends StandardParameters {
    /**
     * The field to order the results by.
     */
    orderBy?: string;
    /**
     * The maximum number of artifacts to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource whose docker images will be listed.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Repositories$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a file.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Repositories$Files$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Files$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleDevtoolsArtifactregistryV1File>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Files$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Files$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleDevtoolsArtifactregistryV1File>,
      callback: BodyResponseCallback<Schema$GoogleDevtoolsArtifactregistryV1File>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Files$Get,
      callback: BodyResponseCallback<Schema$GoogleDevtoolsArtifactregistryV1File>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleDevtoolsArtifactregistryV1File>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Files$Get
        | BodyResponseCallback<Schema$GoogleDevtoolsArtifactregistryV1File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleDevtoolsArtifactregistryV1File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleDevtoolsArtifactregistryV1File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleDevtoolsArtifactregistryV1File>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Files$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Files$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleDevtoolsArtifactregistryV1File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleDevtoolsArtifactregistryV1File>(
          parameters
        );
      }
    }

    /**
     * Lists files.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Repositories$Files$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Files$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFilesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Files$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Files$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListFilesResponse>,
      callback: BodyResponseCallback<Schema$ListFilesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Files$List,
      callback: BodyResponseCallback<Schema$ListFilesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFilesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Files$List
        | BodyResponseCallback<Schema$ListFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFilesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Files$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/files').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListFilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFilesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Files$Get
    extends StandardParameters {
    /**
     * Required. The name of the file to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Files$List
    extends StandardParameters {
    /**
     * An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `owner` An example of using a filter: * `name="projects/p1/locations/us-central1/repositories/repo1/files/a/b/x"` --\> Files with an ID starting with "a/b/". * `owner="projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/1.0"` --\> Files owned by the version `1.0` in package `pkg1`.
     */
    filter?: string;
    /**
     * The field to order the results by.
     */
    orderBy?: string;
    /**
     * The maximum number of files to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the repository whose files will be listed. For example: "projects/p1/locations/us-central1/repositories/repo1
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Repositories$Gomodules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Directly uploads a Go module. The returned Operation will complete once the Go module is uploaded. Package, Version, and File resources are created based on the uploaded Go module.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Gomodules$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Projects$Locations$Repositories$Gomodules$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadGoModuleMediaResponse>;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Gomodules$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Gomodules$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadGoModuleMediaResponse>,
      callback: BodyResponseCallback<Schema$UploadGoModuleMediaResponse>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Gomodules$Upload,
      callback: BodyResponseCallback<Schema$UploadGoModuleMediaResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$UploadGoModuleMediaResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Gomodules$Upload
        | BodyResponseCallback<Schema$UploadGoModuleMediaResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadGoModuleMediaResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadGoModuleMediaResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UploadGoModuleMediaResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Gomodules$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Gomodules$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/goModules:create').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/v1/{+parent}/goModules:create').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadGoModuleMediaResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadGoModuleMediaResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Gomodules$Upload
    extends StandardParameters {
    /**
     * The resource name of the repository where the Go module will be uploaded.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadGoModuleRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Projects$Locations$Repositories$Googetartifacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Googetartifacts$Import
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
        {}) as Params$Resource$Projects$Locations$Repositories$Googetartifacts$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Googetartifacts$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/googetArtifacts:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadGoogetArtifactMediaResponse>;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadGoogetArtifactMediaResponse>,
      callback: BodyResponseCallback<Schema$UploadGoogetArtifactMediaResponse>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Googetartifacts$Upload,
      callback: BodyResponseCallback<Schema$UploadGoogetArtifactMediaResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$UploadGoogetArtifactMediaResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Googetartifacts$Upload
        | BodyResponseCallback<Schema$UploadGoogetArtifactMediaResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadGoogetArtifactMediaResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadGoogetArtifactMediaResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UploadGoogetArtifactMediaResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Googetartifacts$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Googetartifacts$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/googetArtifacts:create').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/v1/{+parent}/googetArtifacts:create'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadGoogetArtifactMediaResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadGoogetArtifactMediaResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Googetartifacts$Import
    extends StandardParameters {
    /**
     * The name of the parent resource where the artifacts will be imported.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportGoogetArtifactsRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Googetartifacts$Upload
    extends StandardParameters {
    /**
     * The name of the parent resource where the artifacts will be uploaded.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadGoogetArtifactRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Projects$Locations$Repositories$Kfpartifacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Kfpartifacts$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Projects$Locations$Repositories$Kfpartifacts$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadKfpArtifactMediaResponse>;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Kfpartifacts$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Kfpartifacts$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadKfpArtifactMediaResponse>,
      callback: BodyResponseCallback<Schema$UploadKfpArtifactMediaResponse>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Kfpartifacts$Upload,
      callback: BodyResponseCallback<Schema$UploadKfpArtifactMediaResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$UploadKfpArtifactMediaResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Kfpartifacts$Upload
        | BodyResponseCallback<Schema$UploadKfpArtifactMediaResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadKfpArtifactMediaResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadKfpArtifactMediaResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UploadKfpArtifactMediaResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Kfpartifacts$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Kfpartifacts$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/kfpArtifacts:create').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/v1/{+parent}/kfpArtifacts:create'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadKfpArtifactMediaResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadKfpArtifactMediaResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Kfpartifacts$Upload
    extends StandardParameters {
    /**
     * The resource name of the repository where the KFP artifact will be uploaded.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadKfpArtifactRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Projects$Locations$Repositories$Mavenartifacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a maven artifact.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MavenArtifact>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MavenArtifact>,
      callback: BodyResponseCallback<Schema$MavenArtifact>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$Get,
      callback: BodyResponseCallback<Schema$MavenArtifact>
    ): void;
    get(callback: BodyResponseCallback<Schema$MavenArtifact>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Mavenartifacts$Get
        | BodyResponseCallback<Schema$MavenArtifact>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MavenArtifact>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MavenArtifact>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MavenArtifact> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Mavenartifacts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Mavenartifacts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MavenArtifact>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MavenArtifact>(parameters);
      }
    }

    /**
     * Lists maven artifacts.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMavenArtifactsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMavenArtifactsResponse>,
      callback: BodyResponseCallback<Schema$ListMavenArtifactsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Mavenartifacts$List,
      callback: BodyResponseCallback<Schema$ListMavenArtifactsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMavenArtifactsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Mavenartifacts$List
        | BodyResponseCallback<Schema$ListMavenArtifactsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMavenArtifactsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMavenArtifactsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMavenArtifactsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Mavenartifacts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Mavenartifacts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/mavenArtifacts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListMavenArtifactsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMavenArtifactsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Mavenartifacts$Get
    extends StandardParameters {
    /**
     * Required. The name of the maven artifact.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Mavenartifacts$List
    extends StandardParameters {
    /**
     * The maximum number of artifacts to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource whose maven artifacts will be listed.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Repositories$Npmpackages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a npm package.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Repositories$Npmpackages$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Npmpackages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NpmPackage>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Npmpackages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Npmpackages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NpmPackage>,
      callback: BodyResponseCallback<Schema$NpmPackage>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Npmpackages$Get,
      callback: BodyResponseCallback<Schema$NpmPackage>
    ): void;
    get(callback: BodyResponseCallback<Schema$NpmPackage>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Npmpackages$Get
        | BodyResponseCallback<Schema$NpmPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NpmPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NpmPackage>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NpmPackage> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Npmpackages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Npmpackages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$NpmPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NpmPackage>(parameters);
      }
    }

    /**
     * Lists npm packages.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Repositories$Npmpackages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Npmpackages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNpmPackagesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Npmpackages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Npmpackages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNpmPackagesResponse>,
      callback: BodyResponseCallback<Schema$ListNpmPackagesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Npmpackages$List,
      callback: BodyResponseCallback<Schema$ListNpmPackagesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNpmPackagesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Npmpackages$List
        | BodyResponseCallback<Schema$ListNpmPackagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNpmPackagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNpmPackagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNpmPackagesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Npmpackages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Npmpackages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/npmPackages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListNpmPackagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNpmPackagesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Npmpackages$Get
    extends StandardParameters {
    /**
     * Required. The name of the npm package.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Npmpackages$List
    extends StandardParameters {
    /**
     * The maximum number of artifacts to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource whose npm packages will be listed.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Repositories$Packages {
    context: APIRequestContext;
    tags: Resource$Projects$Locations$Repositories$Packages$Tags;
    versions: Resource$Projects$Locations$Repositories$Packages$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.tags = new Resource$Projects$Locations$Repositories$Packages$Tags(
        this.context
      );
      this.versions =
        new Resource$Projects$Locations$Repositories$Packages$Versions(
          this.context
        );
    }

    /**
     * Deletes a package and all of its versions and tags. The returned operation will complete once the package has been deleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Delete
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
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
     * Gets a package.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Package>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Package>,
      callback: BodyResponseCallback<Schema$Package>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Get,
      callback: BodyResponseCallback<Schema$Package>
    ): void;
    get(callback: BodyResponseCallback<Schema$Package>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Get
        | BodyResponseCallback<Schema$Package>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Package>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Package>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Package> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Package>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Package>(parameters);
      }
    }

    /**
     * Lists packages.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPackagesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPackagesResponse>,
      callback: BodyResponseCallback<Schema$ListPackagesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$List,
      callback: BodyResponseCallback<Schema$ListPackagesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPackagesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$List
        | BodyResponseCallback<Schema$ListPackagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPackagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPackagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPackagesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/packages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPackagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPackagesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Packages$Delete
    extends StandardParameters {
    /**
     * Required. The name of the package to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Packages$Get
    extends StandardParameters {
    /**
     * Required. The name of the package to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Packages$List
    extends StandardParameters {
    /**
     * The maximum number of packages to return. Maximum page size is 1,000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource whose packages will be listed.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Repositories$Packages$Tags {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a tag.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Tag>;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Tag>,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Create,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    create(callback: BodyResponseCallback<Schema$Tag>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Tags$Create
        | BodyResponseCallback<Schema$Tag>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tag>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tag>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Tag> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Tags$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Tags$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tags').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Tag>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tag>(parameters);
      }
    }

    /**
     * Deletes a tag.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Tags$Delete
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
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Tags$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Tags$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
     * Gets a tag.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Tag>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Tag>,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Get,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    get(callback: BodyResponseCallback<Schema$Tag>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Tags$Get
        | BodyResponseCallback<Schema$Tag>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tag>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tag>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Tag> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Tags$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Tags$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Tag>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tag>(parameters);
      }
    }

    /**
     * Lists tags.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Tags$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTagsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTagsResponse>,
      callback: BodyResponseCallback<Schema$ListTagsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$List,
      callback: BodyResponseCallback<Schema$ListTagsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Tags$List
        | BodyResponseCallback<Schema$ListTagsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTagsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTagsResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ListTagsResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Tags$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Tags$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tags').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTagsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTagsResponse>(parameters);
      }
    }

    /**
     * Updates a tag.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Tag>;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Tag>,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Tags$Patch,
      callback: BodyResponseCallback<Schema$Tag>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Tag>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Tags$Patch
        | BodyResponseCallback<Schema$Tag>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tag>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tag>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Tag> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Tags$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Tags$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Tag>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tag>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Packages$Tags$Create
    extends StandardParameters {
    /**
     * The name of the parent resource where the tag will be created.
     */
    parent?: string;
    /**
     * The tag id to use for this repository.
     */
    tagId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tag;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Packages$Tags$Delete
    extends StandardParameters {
    /**
     * The name of the tag to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Packages$Tags$Get
    extends StandardParameters {
    /**
     * The name of the tag to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Packages$Tags$List
    extends StandardParameters {
    /**
     * An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `version` An example of using a filter: * `version="projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/1.0"` --\> Tags that are applied to the version `1.0` in package `pkg1`.
     */
    filter?: string;
    /**
     * The maximum number of tags to return. Maximum page size is 10,000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * The name of the parent package whose tags will be listed. For example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Packages$Tags$Patch
    extends StandardParameters {
    /**
     * The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded.
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tag;
  }

  export class Resource$Projects$Locations$Repositories$Packages$Versions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes multiple versions across a repository. The returned operation will complete once the versions have been deleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDelete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    batchDelete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Batchdelete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchDelete(callback: BodyResponseCallback<Schema$Operation>): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Versions$Batchdelete
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
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Versions$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Versions$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Versions$Delete
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
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
     * Gets a version
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Version>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$Get,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    get(callback: BodyResponseCallback<Schema$Version>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Versions$Get
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Version> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * Lists versions.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Packages$Versions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVersionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Packages$Versions$List,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Packages$Versions$List
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Packages$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Packages$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVersionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Packages$Versions$Batchdelete
    extends StandardParameters {
    /**
     * The name of the repository holding all requested versions.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteVersionsRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Packages$Versions$Delete
    extends StandardParameters {
    /**
     * By default, a version that is tagged may not be deleted. If force=true, the version and any tags pointing to the version are deleted.
     */
    force?: boolean;
    /**
     * The name of the version to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Packages$Versions$Get
    extends StandardParameters {
    /**
     * The name of the version to retrieve.
     */
    name?: string;
    /**
     * The view that should be returned in the response.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Packages$Versions$List
    extends StandardParameters {
    /**
     * Optional. The field to order the results by.
     */
    orderBy?: string;
    /**
     * The maximum number of versions to return. Maximum page size is 1,000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * The name of the parent resource whose versions will be listed.
     */
    parent?: string;
    /**
     * The view that should be returned in the response.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Repositories$Pythonpackages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a python package.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Repositories$Pythonpackages$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Pythonpackages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PythonPackage>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Pythonpackages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Pythonpackages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PythonPackage>,
      callback: BodyResponseCallback<Schema$PythonPackage>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Pythonpackages$Get,
      callback: BodyResponseCallback<Schema$PythonPackage>
    ): void;
    get(callback: BodyResponseCallback<Schema$PythonPackage>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Pythonpackages$Get
        | BodyResponseCallback<Schema$PythonPackage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PythonPackage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PythonPackage>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PythonPackage> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Pythonpackages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Pythonpackages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PythonPackage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PythonPackage>(parameters);
      }
    }

    /**
     * Lists python packages.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Repositories$Pythonpackages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Pythonpackages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPythonPackagesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Pythonpackages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Pythonpackages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPythonPackagesResponse>,
      callback: BodyResponseCallback<Schema$ListPythonPackagesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Pythonpackages$List,
      callback: BodyResponseCallback<Schema$ListPythonPackagesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPythonPackagesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Pythonpackages$List
        | BodyResponseCallback<Schema$ListPythonPackagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPythonPackagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPythonPackagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPythonPackagesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Pythonpackages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Pythonpackages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/pythonPackages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPythonPackagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPythonPackagesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Pythonpackages$Get
    extends StandardParameters {
    /**
     * Required. The name of the python package.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Pythonpackages$List
    extends StandardParameters {
    /**
     * The maximum number of artifacts to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource whose python packages will be listed.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Repositories$Yumartifacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Yumartifacts$Import
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
        {}) as Params$Resource$Projects$Locations$Repositories$Yumartifacts$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Yumartifacts$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/yumArtifacts:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadYumArtifactMediaResponse>;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadYumArtifactMediaResponse>,
      callback: BodyResponseCallback<Schema$UploadYumArtifactMediaResponse>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Repositories$Yumartifacts$Upload,
      callback: BodyResponseCallback<Schema$UploadYumArtifactMediaResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$UploadYumArtifactMediaResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Yumartifacts$Upload
        | BodyResponseCallback<Schema$UploadYumArtifactMediaResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadYumArtifactMediaResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadYumArtifactMediaResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UploadYumArtifactMediaResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Yumartifacts$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Yumartifacts$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://artifactregistry.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/yumArtifacts:create').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/v1/{+parent}/yumArtifacts:create'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadYumArtifactMediaResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadYumArtifactMediaResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Yumartifacts$Import
    extends StandardParameters {
    /**
     * The name of the parent resource where the artifacts will be imported.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportYumArtifactsRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Yumartifacts$Upload
    extends StandardParameters {
    /**
     * The name of the parent resource where the artifacts will be uploaded.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadYumArtifactRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
}
