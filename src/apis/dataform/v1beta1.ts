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

export namespace dataform_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Dataform API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const dataform = google.dataform('v1beta1');
   * ```
   */
  export class Dataform {
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
   * Represents an assertion upon a SQL query which is required return zero rows.
   */
  export interface Schema$Assertion {
    /**
     * A list of actions that this action depends on.
     */
    dependencyTargets?: Schema$Target[];
    /**
     * Whether this action is disabled (i.e. should not be run).
     */
    disabled?: boolean | null;
    /**
     * The parent action of this assertion. Only set if this assertion was automatically generated.
     */
    parentAction?: Schema$Target;
    /**
     * Descriptor for the assertion's automatically-generated view and its columns.
     */
    relationDescriptor?: Schema$RelationDescriptor;
    /**
     * The SELECT query which must return zero rows in order for this assertion to succeed.
     */
    selectQuery?: string | null;
    /**
     * Arbitrary, user-defined tags on this action.
     */
    tags?: string[] | null;
  }
  /**
   * Represents a workflow action that will run against BigQuery.
   */
  export interface Schema$BigQueryAction {
    /**
     * Output only. The generated BigQuery SQL script that will be executed.
     */
    sqlScript?: string | null;
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
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * `CancelWorkflowInvocation` request message.
   */
  export interface Schema$CancelWorkflowInvocationRequest {}
  /**
   * Configures various aspects of Dataform code compilation.
   */
  export interface Schema$CodeCompilationConfig {
    /**
     * Optional. The default schema (BigQuery dataset ID) for assertions.
     */
    assertionSchema?: string | null;
    /**
     * Optional. The suffix that should be appended to all database (Google Cloud project ID) names.
     */
    databaseSuffix?: string | null;
    /**
     * Optional. The default database (Google Cloud project ID).
     */
    defaultDatabase?: string | null;
    /**
     * Optional. The default BigQuery location to use. Defaults to "US". See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.
     */
    defaultLocation?: string | null;
    /**
     * Optional. The default schema (BigQuery dataset ID).
     */
    defaultSchema?: string | null;
    /**
     * Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.
     */
    schemaSuffix?: string | null;
    /**
     * Optional. The prefix that should be prepended to all table names.
     */
    tablePrefix?: string | null;
    /**
     * Optional. User-defined variables that are made available to project code during compilation.
     */
    vars?: {[key: string]: string} | null;
  }
  /**
   * Describes a column.
   */
  export interface Schema$ColumnDescriptor {
    /**
     * A list of BigQuery policy tags that will be applied to the column.
     */
    bigqueryPolicyTags?: string[] | null;
    /**
     * A textual description of the column.
     */
    description?: string | null;
    /**
     * The identifier for the column. Each entry in `path` represents one level of nesting.
     */
    path?: string[] | null;
  }
  /**
   * Represents the author of a Git commit.
   */
  export interface Schema$CommitAuthor {
    /**
     * Required. The commit author's email address.
     */
    emailAddress?: string | null;
    /**
     * Required. The commit author's name.
     */
    name?: string | null;
  }
  /**
   * Represents a single commit log.
   */
  export interface Schema$CommitLogEntry {
    /**
     * The commit author for this commit log entry.
     */
    author?: Schema$CommitAuthor;
    /**
     * The commit message for this commit log entry.
     */
    commitMessage?: string | null;
    /**
     * The commit SHA for this commit log entry.
     */
    commitSha?: string | null;
    /**
     * Commit timestamp.
     */
    commitTime?: string | null;
  }
  /**
   * Represents a Dataform Git commit.
   */
  export interface Schema$CommitMetadata {
    /**
     * Required. The commit's author.
     */
    author?: Schema$CommitAuthor;
    /**
     * Optional. The commit's message.
     */
    commitMessage?: string | null;
  }
  /**
   * `CommitRepositoryChanges` request message.
   */
  export interface Schema$CommitRepositoryChangesRequest {
    /**
     * Required. The changes to commit to the repository.
     */
    commitMetadata?: Schema$CommitMetadata;
    /**
     * A map to the path of the file to the operation. The path is the ull file path including filename, from repository root.
     */
    fileOperations?: {[key: string]: Schema$FileOperation} | null;
    /**
     * Optional. The commit SHA which must be the repository's current HEAD before applying this commit; otherwise this request will fail. If unset, no validation on the current HEAD commit SHA is performed.
     */
    requiredHeadCommitSha?: string | null;
  }
  /**
   * `CommitWorkspaceChanges` request message.
   */
  export interface Schema$CommitWorkspaceChangesRequest {
    /**
     * Required. The commit's author.
     */
    author?: Schema$CommitAuthor;
    /**
     * Optional. The commit's message.
     */
    commitMessage?: string | null;
    /**
     * Optional. Full file paths to commit including filename, rooted at workspace root. If left empty, all files will be committed.
     */
    paths?: string[] | null;
  }
  /**
   * An error encountered when attempting to compile a Dataform project.
   */
  export interface Schema$CompilationError {
    /**
     * Output only. The identifier of the action where this error occurred, if available.
     */
    actionTarget?: Schema$Target;
    /**
     * Output only. The error's top level message.
     */
    message?: string | null;
    /**
     * Output only. The path of the file where this error occurred, if available, relative to the project root.
     */
    path?: string | null;
    /**
     * Output only. The error's full stack trace.
     */
    stack?: string | null;
  }
  /**
   * Represents the result of compiling a Dataform project.
   */
  export interface Schema$CompilationResult {
    /**
     * Immutable. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.
     */
    codeCompilationConfig?: Schema$CodeCompilationConfig;
    /**
     * Output only. Errors encountered during project compilation.
     */
    compilationErrors?: Schema$CompilationError[];
    /**
     * Output only. The version of `@dataform/core` that was used for compilation.
     */
    dataformCoreVersion?: string | null;
    /**
     * Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`
     */
    gitCommitish?: string | null;
    /**
     * Output only. The compilation result's name.
     */
    name?: string | null;
    /**
     * Immutable. The name of the release config to compile. The release config's 'current_compilation_result' field will be updated to this compilation result. Must be in the format `projects/x/locations/x/repositories/x/releaseConfigs/x`.
     */
    releaseConfig?: string | null;
    /**
     * Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace.
     */
    resolvedGitCommitSha?: string | null;
    /**
     * Immutable. The name of the workspace to compile. Must be in the format `projects/x/locations/x/repositories/x/workspaces/x`.
     */
    workspace?: string | null;
  }
  /**
   * Represents a single Dataform action in a compilation result.
   */
  export interface Schema$CompilationResultAction {
    /**
     * The assertion executed by this action.
     */
    assertion?: Schema$Assertion;
    /**
     * The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result.
     */
    canonicalTarget?: Schema$Target;
    /**
     * The declaration declared by this action.
     */
    declaration?: Schema$Declaration;
    /**
     * The full path including filename in which this action is located, relative to the workspace root.
     */
    filePath?: string | null;
    /**
     * The database operations executed by this action.
     */
    operations?: Schema$Operations;
    /**
     * The database relation created/updated by this action.
     */
    relation?: Schema$Relation;
    /**
     * This action's identifier. Unique within the compilation result.
     */
    target?: Schema$Target;
  }
  /**
   * `ComputeRepositoryAccessTokenStatus` response message.
   */
  export interface Schema$ComputeRepositoryAccessTokenStatusResponse {
    /**
     * Indicates the status of the Git access token.
     */
    tokenStatus?: string | null;
  }
  /**
   * Represents a relation which is not managed by Dataform but which may be referenced by Dataform actions.
   */
  export interface Schema$Declaration {
    /**
     * Descriptor for the relation and its columns. Used as documentation only, i.e. values here will result in no changes to the relation's metadata.
     */
    relationDescriptor?: Schema$RelationDescriptor;
  }
  /**
   * Represents the delete file operation.
   */
  export interface Schema$DeleteFile {}
  /**
   * Represents a single entry in a directory.
   */
  export interface Schema$DirectoryEntry {
    /**
     * A child directory in the directory.
     */
    directory?: string | null;
    /**
     * A file in the directory.
     */
    file?: string | null;
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
   * `FetchFileDiff` response message.
   */
  export interface Schema$FetchFileDiffResponse {
    /**
     * The raw formatted Git diff for the file.
     */
    formattedDiff?: string | null;
  }
  /**
   * `FetchFileGitStatuses` response message.
   */
  export interface Schema$FetchFileGitStatusesResponse {
    /**
     * A list of all files which have uncommitted Git changes. There will only be a single entry for any given file.
     */
    uncommittedFileChanges?: Schema$UncommittedFileChange[];
  }
  /**
   * `FetchGitAheadBehind` response message.
   */
  export interface Schema$FetchGitAheadBehindResponse {
    /**
     * The number of commits in the remote branch that are not in the workspace.
     */
    commitsAhead?: number | null;
    /**
     * The number of commits in the workspace that are not in the remote branch.
     */
    commitsBehind?: number | null;
  }
  /**
   * `FetchRemoteBranches` response message.
   */
  export interface Schema$FetchRemoteBranchesResponse {
    /**
     * The remote repository's branch names.
     */
    branches?: string[] | null;
  }
  /**
   * `FetchRepositoryHistory` response message.
   */
  export interface Schema$FetchRepositoryHistoryResponse {
    /**
     * A list of commit logs, ordered by 'git log' default order.
     */
    commits?: Schema$CommitLogEntry[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Represents a single file operation to the repository.
   */
  export interface Schema$FileOperation {
    /**
     * Represents the delete operation.
     */
    deleteFile?: Schema$DeleteFile;
    /**
     * Represents the write operation.
     */
    writeFile?: Schema$WriteFile;
  }
  /**
   * Controls Git remote configuration for a repository.
   */
  export interface Schema$GitRemoteSettings {
    /**
     * Optional. The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format `projects/x/secrets/x/versions/x`.
     */
    authenticationTokenSecretVersion?: string | null;
    /**
     * Required. The Git remote's default branch name.
     */
    defaultBranch?: string | null;
    /**
     * Output only. Deprecated: The field does not contain any token status information. Instead use https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories/computeAccessTokenStatus
     */
    tokenStatus?: string | null;
    /**
     * Required. The Git remote's URL.
     */
    url?: string | null;
  }
  /**
   * Contains settings for relations of type `INCREMENTAL_TABLE`.
   */
  export interface Schema$IncrementalTableConfig {
    /**
     * SQL statements to be executed after inserting new rows into the relation.
     */
    incrementalPostOperations?: string[] | null;
    /**
     * SQL statements to be executed before inserting new rows into the relation.
     */
    incrementalPreOperations?: string[] | null;
    /**
     * The SELECT query which returns rows which should be inserted into the relation if it already exists and is not being refreshed.
     */
    incrementalSelectQuery?: string | null;
    /**
     * Whether this table should be protected from being refreshed.
     */
    refreshDisabled?: boolean | null;
    /**
     * A set of columns or SQL expressions used to define row uniqueness. If any duplicates are discovered (as defined by `unique_key_parts`), only the newly selected rows (as defined by `incremental_select_query`) will be included in the relation.
     */
    uniqueKeyParts?: string[] | null;
    /**
     * A SQL expression conditional used to limit the set of existing rows considered for a merge operation (see `unique_key_parts` for more information).
     */
    updatePartitionFilter?: string | null;
  }
  /**
   * `InstallNpmPackages` request message.
   */
  export interface Schema$InstallNpmPackagesRequest {}
  /**
   * `InstallNpmPackages` response message.
   */
  export interface Schema$InstallNpmPackagesResponse {}
  /**
   * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
   */
  export interface Schema$Interval {
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    endTime?: string | null;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    startTime?: string | null;
  }
  /**
   * Includes various configuration options for a workflow invocation. If both `included_targets` and `included_tags` are unset, all actions will be included.
   */
  export interface Schema$InvocationConfig {
    /**
     * Optional. When set to true, any incremental tables will be fully refreshed.
     */
    fullyRefreshIncrementalTablesEnabled?: boolean | null;
    /**
     * Optional. The set of tags to include.
     */
    includedTags?: string[] | null;
    /**
     * Optional. The set of action identifiers to include.
     */
    includedTargets?: Schema$Target[];
    /**
     * Optional. The service account to run workflow invocations under.
     */
    serviceAccount?: string | null;
    /**
     * Optional. When set to true, transitive dependencies of included actions will be executed.
     */
    transitiveDependenciesIncluded?: boolean | null;
    /**
     * Optional. When set to true, transitive dependents of included actions will be executed.
     */
    transitiveDependentsIncluded?: boolean | null;
  }
  /**
   * `ListCompilationResults` response message.
   */
  export interface Schema$ListCompilationResultsResponse {
    /**
     * List of compilation results.
     */
    compilationResults?: Schema$CompilationResult[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations which could not be reached.
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
   * `ListReleaseConfigs` response message.
   */
  export interface Schema$ListReleaseConfigsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of release configs.
     */
    releaseConfigs?: Schema$ReleaseConfig[];
    /**
     * Locations which could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * `ListRepositories` response message.
   */
  export interface Schema$ListRepositoriesResponse {
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of repositories.
     */
    repositories?: Schema$Repository[];
    /**
     * Locations which could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * `ListWorkflowConfigs` response message.
   */
  export interface Schema$ListWorkflowConfigsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations which could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * List of workflow configs.
     */
    workflowConfigs?: Schema$WorkflowConfig[];
  }
  /**
   * `ListWorkflowInvocations` response message.
   */
  export interface Schema$ListWorkflowInvocationsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations which could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * List of workflow invocations.
     */
    workflowInvocations?: Schema$WorkflowInvocation[];
  }
  /**
   * `ListWorkspaces` response message.
   */
  export interface Schema$ListWorkspacesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations which could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * List of workspaces.
     */
    workspaces?: Schema$Workspace[];
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
   * `MakeDirectory` request message.
   */
  export interface Schema$MakeDirectoryRequest {
    /**
     * Required. The directory's full path including directory name, relative to the workspace root.
     */
    path?: string | null;
  }
  /**
   * `MakeDirectory` response message.
   */
  export interface Schema$MakeDirectoryResponse {}
  /**
   * `MoveDirectory` request message.
   */
  export interface Schema$MoveDirectoryRequest {
    /**
     * Required. The new path for the directory including directory name, rooted at workspace root.
     */
    newPath?: string | null;
    /**
     * Required. The directory's full path including directory name, relative to the workspace root.
     */
    path?: string | null;
  }
  /**
   * `MoveDirectory` response message.
   */
  export interface Schema$MoveDirectoryResponse {}
  /**
   * `MoveFile` request message.
   */
  export interface Schema$MoveFileRequest {
    /**
     * Required. The file's new path including filename, relative to the workspace root.
     */
    newPath?: string | null;
    /**
     * Required. The file's full path including filename, relative to the workspace root.
     */
    path?: string | null;
  }
  /**
   * `MoveFile` response message.
   */
  export interface Schema$MoveFileResponse {}
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    cancelRequested?: boolean | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
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
   * Represents a list of arbitrary database operations.
   */
  export interface Schema$Operations {
    /**
     * A list of actions that this action depends on.
     */
    dependencyTargets?: Schema$Target[];
    /**
     * Whether this action is disabled (i.e. should not be run).
     */
    disabled?: boolean | null;
    /**
     * Whether these operations produce an output relation.
     */
    hasOutput?: boolean | null;
    /**
     * A list of arbitrary SQL statements that will be executed without alteration.
     */
    queries?: string[] | null;
    /**
     * Descriptor for any output relation and its columns. Only set if `has_output` is true.
     */
    relationDescriptor?: Schema$RelationDescriptor;
    /**
     * Arbitrary, user-defined tags on this action.
     */
    tags?: string[] | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
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
   * `PullGitCommits` request message.
   */
  export interface Schema$PullGitCommitsRequest {
    /**
     * Required. The author of any merge commit which may be created as a result of merging fetched Git commits into this workspace.
     */
    author?: Schema$CommitAuthor;
    /**
     * Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used.
     */
    remoteBranch?: string | null;
  }
  /**
   * `PushGitCommits` request message.
   */
  export interface Schema$PushGitCommitsRequest {
    /**
     * Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used.
     */
    remoteBranch?: string | null;
  }
  /**
   * `QueryCompilationResultActions` response message.
   */
  export interface Schema$QueryCompilationResultActionsResponse {
    /**
     * List of compilation result actions.
     */
    compilationResultActions?: Schema$CompilationResultAction[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * `QueryDirectoryContents` response message.
   */
  export interface Schema$QueryDirectoryContentsResponse {
    /**
     * List of entries in the directory.
     */
    directoryEntries?: Schema$DirectoryEntry[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * `QueryRepositoryDirectoryContents` response message.
   */
  export interface Schema$QueryRepositoryDirectoryContentsResponse {
    /**
     * List of entries in the directory.
     */
    directoryEntries?: Schema$DirectoryEntry[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * `QueryWorkflowInvocationActions` response message.
   */
  export interface Schema$QueryWorkflowInvocationActionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of workflow invocation actions.
     */
    workflowInvocationActions?: Schema$WorkflowInvocationAction[];
  }
  /**
   * `ReadFile` response message.
   */
  export interface Schema$ReadFileResponse {
    /**
     * The file's contents.
     */
    fileContents?: string | null;
  }
  /**
   * `ReadRepositoryFile` response message.
   */
  export interface Schema$ReadRepositoryFileResponse {
    /**
     * The file's contents.
     */
    contents?: string | null;
  }
  /**
   * Represents a database relation.
   */
  export interface Schema$Relation {
    /**
     * Additional options that will be provided as key/value pairs into the options clause of a create table/view statement. See https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language for more information on which options are supported.
     */
    additionalOptions?: {[key: string]: string} | null;
    /**
     * A list of columns or SQL expressions used to cluster the table.
     */
    clusterExpressions?: string[] | null;
    /**
     * A list of actions that this action depends on.
     */
    dependencyTargets?: Schema$Target[];
    /**
     * Whether this action is disabled (i.e. should not be run).
     */
    disabled?: boolean | null;
    /**
     * Configures `INCREMENTAL_TABLE` settings for this relation. Only set if `relation_type` is `INCREMENTAL_TABLE`.
     */
    incrementalTableConfig?: Schema$IncrementalTableConfig;
    /**
     * Sets the partition expiration in days.
     */
    partitionExpirationDays?: number | null;
    /**
     * The SQL expression used to partition the relation.
     */
    partitionExpression?: string | null;
    /**
     * SQL statements to be executed after creating the relation.
     */
    postOperations?: string[] | null;
    /**
     * SQL statements to be executed before creating the relation.
     */
    preOperations?: string[] | null;
    /**
     * Descriptor for the relation and its columns.
     */
    relationDescriptor?: Schema$RelationDescriptor;
    /**
     * The type of this relation.
     */
    relationType?: string | null;
    /**
     * Specifies whether queries on this table must include a predicate filter that filters on the partitioning column.
     */
    requirePartitionFilter?: boolean | null;
    /**
     * The SELECT query which returns rows which this relation should contain.
     */
    selectQuery?: string | null;
    /**
     * Arbitrary, user-defined tags on this action.
     */
    tags?: string[] | null;
  }
  /**
   * Describes a relation and its columns.
   */
  export interface Schema$RelationDescriptor {
    /**
     * A set of BigQuery labels that should be applied to the relation.
     */
    bigqueryLabels?: {[key: string]: string} | null;
    /**
     * A list of descriptions of columns within the relation.
     */
    columns?: Schema$ColumnDescriptor[];
    /**
     * A text description of the relation.
     */
    description?: string | null;
  }
  /**
   * Represents a Dataform release configuration.
   */
  export interface Schema$ReleaseConfig {
    /**
     * Optional. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.
     */
    codeCompilationConfig?: Schema$CodeCompilationConfig;
    /**
     * Optional. Optional schedule (in cron format) for automatic creation of compilation results.
     */
    cronSchedule?: string | null;
    /**
     * Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`
     */
    gitCommitish?: string | null;
    /**
     * Output only. The release config's name.
     */
    name?: string | null;
    /**
     * Output only. Records of the 10 most recent scheduled release attempts, ordered in in descending order of `release_time`. Updated whenever automatic creation of a compilation result is triggered by cron_schedule.
     */
    recentScheduledReleaseRecords?: Schema$ScheduledReleaseRecord[];
    /**
     * Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is created from this release config, or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/x/locations/x/repositories/x/compilationResults/x`.
     */
    releaseCompilationResult?: string | null;
    /**
     * Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
     */
    timeZone?: string | null;
  }
  /**
   * `RemoveDirectory` request message.
   */
  export interface Schema$RemoveDirectoryRequest {
    /**
     * Required. The directory's full path including directory name, relative to the workspace root.
     */
    path?: string | null;
  }
  /**
   * `RemoveFile` request message.
   */
  export interface Schema$RemoveFileRequest {
    /**
     * Required. The file's full path including filename, relative to the workspace root.
     */
    path?: string | null;
  }
  /**
   * Represents a Dataform Git repository.
   */
  export interface Schema$Repository {
    /**
     * Optional. The repository's user-friendly name.
     */
    displayName?: string | null;
    /**
     * Optional. If set, configures this repository to be linked to a Git remote.
     */
    gitRemoteSettings?: Schema$GitRemoteSettings;
    /**
     * Optional. Repository user labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The repository's name.
     */
    name?: string | null;
    /**
     * Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/x/secrets/x/versions/x`. The file itself must be in a JSON format.
     */
    npmrcEnvironmentVariablesSecretVersion?: string | null;
    /**
     * Optional. The service account to run workflow invocations under.
     */
    serviceAccount?: string | null;
    /**
     * Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. To modify access to the created repository later apply setIamPolicy from https://cloud.google.com/dataform/reference/rest#rest-resource:-v1beta1.projects.locations.repositories
     */
    setAuthenticatedUserAdmin?: boolean | null;
    /**
     * Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information.
     */
    workspaceCompilationOverrides?: Schema$WorkspaceCompilationOverrides;
  }
  /**
   * `ResetWorkspaceChanges` request message.
   */
  export interface Schema$ResetWorkspaceChangesRequest {
    /**
     * Optional. If set to true, untracked files will be deleted.
     */
    clean?: boolean | null;
    /**
     * Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset.
     */
    paths?: string[] | null;
  }
  /**
   * A record of an attempt to create a workflow invocation for this workflow config.
   */
  export interface Schema$ScheduledExecutionRecord {
    /**
     * The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.
     */
    errorStatus?: Schema$Status;
    /**
     * The timestamp of this execution attempt.
     */
    executionTime?: string | null;
    /**
     * The name of the created workflow invocation, if one was successfully created. Must be in the format `projects/x/locations/x/repositories/x/workflowInvocations/x`.
     */
    workflowInvocation?: string | null;
  }
  /**
   * A record of an attempt to create a compilation result for this release config.
   */
  export interface Schema$ScheduledReleaseRecord {
    /**
     * The name of the created compilation result, if one was successfully created. Must be in the format `projects/x/locations/x/repositories/x/compilationResults/x`.
     */
    compilationResult?: string | null;
    /**
     * The error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful.
     */
    errorStatus?: Schema$Status;
    /**
     * The timestamp of this release attempt.
     */
    releaseTime?: string | null;
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
   * Represents an action identifier. If the action writes output, the output will be written to the referenced database object.
   */
  export interface Schema$Target {
    /**
     * The action's database (Google Cloud project ID) .
     */
    database?: string | null;
    /**
     * The action's name, within `database` and `schema`.
     */
    name?: string | null;
    /**
     * The action's schema (BigQuery dataset ID), within `database`.
     */
    schema?: string | null;
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
   * Represents the Git state of a file with uncommitted changes.
   */
  export interface Schema$UncommittedFileChange {
    /**
     * The file's full path including filename, relative to the workspace root.
     */
    path?: string | null;
    /**
     * Indicates the status of the file.
     */
    state?: string | null;
  }
  /**
   * Represents a Dataform workflow configuration.
   */
  export interface Schema$WorkflowConfig {
    /**
     * Optional. Optional schedule (in cron format) for automatic execution of this workflow config.
     */
    cronSchedule?: string | null;
    /**
     * Optional. If left unset, a default InvocationConfig will be used.
     */
    invocationConfig?: Schema$InvocationConfig;
    /**
     * Output only. The workflow config's name.
     */
    name?: string | null;
    /**
     * Output only. Records of the 10 most recent scheduled execution attempts, ordered in in descending order of `execution_time`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule.
     */
    recentScheduledExecutionRecords?: Schema$ScheduledExecutionRecord[];
    /**
     * Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/x/locations/x/repositories/x/releaseConfigs/x`.
     */
    releaseConfig?: string | null;
    /**
     * Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
     */
    timeZone?: string | null;
  }
  /**
   * Represents a single invocation of a compilation result.
   */
  export interface Schema$WorkflowInvocation {
    /**
     * Immutable. The name of the compilation result to use for this invocation. Must be in the format `projects/x/locations/x/repositories/x/compilationResults/x`.
     */
    compilationResult?: string | null;
    /**
     * Immutable. If left unset, a default InvocationConfig will be used.
     */
    invocationConfig?: Schema$InvocationConfig;
    /**
     * Output only. This workflow invocation's timing details.
     */
    invocationTiming?: Schema$Interval;
    /**
     * Output only. The workflow invocation's name.
     */
    name?: string | null;
    /**
     * Output only. This workflow invocation's current state.
     */
    state?: string | null;
    /**
     * Immutable. The name of the workflow config to invoke. Must be in the format `projects/x/locations/x/repositories/x/workflowConfigs/x`.
     */
    workflowConfig?: string | null;
  }
  /**
   * Represents a single action in a workflow invocation.
   */
  export interface Schema$WorkflowInvocationAction {
    /**
     * Output only. The workflow action's bigquery action details.
     */
    bigqueryAction?: Schema$BigQueryAction;
    /**
     * Output only. The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result.
     */
    canonicalTarget?: Schema$Target;
    /**
     * Output only. If and only if action's state is FAILED a failure reason is set.
     */
    failureReason?: string | null;
    /**
     * Output only. This action's timing details. `start_time` will be set if the action is in [RUNNING, SUCCEEDED, CANCELLED, FAILED] state. `end_time` will be set if the action is in [SUCCEEDED, CANCELLED, FAILED] state.
     */
    invocationTiming?: Schema$Interval;
    /**
     * Output only. This action's current state.
     */
    state?: string | null;
    /**
     * Output only. This action's identifier. Unique within the workflow invocation.
     */
    target?: Schema$Target;
  }
  /**
   * Represents a Dataform Git workspace.
   */
  export interface Schema$Workspace {
    /**
     * Output only. The workspace's name.
     */
    name?: string | null;
  }
  /**
   * Configures workspace compilation overrides for a repository. Primarily used by the UI (`console.cloud.google.com`). `schema_suffix` and `table_prefix` can have a special expression - `${workspaceName\}`, which refers to the workspace name from which the compilation results will be created. API callers are expected to resolve the expression in these overrides and provide them explicitly in `code_compilation_config` (https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories.compilationResults#codecompilationconfig) when creating workspace-scoped compilation results.
   */
  export interface Schema$WorkspaceCompilationOverrides {
    /**
     * Optional. The default database (Google Cloud project ID).
     */
    defaultDatabase?: string | null;
    /**
     * Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.
     */
    schemaSuffix?: string | null;
    /**
     * Optional. The prefix that should be prepended to all table names.
     */
    tablePrefix?: string | null;
  }
  /**
   * Represents the write file operation (for files added or modified).
   */
  export interface Schema$WriteFile {
    /**
     * The file's contents.
     */
    contents?: string | null;
  }
  /**
   * `WriteFile` request message.
   */
  export interface Schema$WriteFileRequest {
    /**
     * Required. The file's contents.
     */
    contents?: string | null;
    /**
     * Required. The file.
     */
    path?: string | null;
  }
  /**
   * `WriteFile` response message.
   */
  export interface Schema$WriteFileResponse {}

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
    repositories: Resource$Projects$Locations$Repositories;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.repositories = new Resource$Projects$Locations$Repositories(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.get({
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.list({
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
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

  export class Resource$Projects$Locations$Repositories {
    context: APIRequestContext;
    compilationResults: Resource$Projects$Locations$Repositories$Compilationresults;
    releaseConfigs: Resource$Projects$Locations$Repositories$Releaseconfigs;
    workflowConfigs: Resource$Projects$Locations$Repositories$Workflowconfigs;
    workflowInvocations: Resource$Projects$Locations$Repositories$Workflowinvocations;
    workspaces: Resource$Projects$Locations$Repositories$Workspaces;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.compilationResults =
        new Resource$Projects$Locations$Repositories$Compilationresults(
          this.context
        );
      this.releaseConfigs =
        new Resource$Projects$Locations$Repositories$Releaseconfigs(
          this.context
        );
      this.workflowConfigs =
        new Resource$Projects$Locations$Repositories$Workflowconfigs(
          this.context
        );
      this.workflowInvocations =
        new Resource$Projects$Locations$Repositories$Workflowinvocations(
          this.context
        );
      this.workspaces = new Resource$Projects$Locations$Repositories$Workspaces(
        this.context
      );
    }

    /**
     * Applies a Git commit to a Repository. The Repository must not have a value for `git_remote_settings.url`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.commit({
     *     // Required. The repository's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "commitMetadata": {},
     *       //   "fileOperations": {},
     *       //   "requiredHeadCommitSha": "my_requiredHeadCommitSha"
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
    commit(
      params: Params$Resource$Projects$Locations$Repositories$Commit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    commit(
      params?: Params$Resource$Projects$Locations$Repositories$Commit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    commit(
      params: Params$Resource$Projects$Locations$Repositories$Commit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    commit(
      params: Params$Resource$Projects$Locations$Repositories$Commit,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    commit(
      params: Params$Resource$Projects$Locations$Repositories$Commit,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    commit(callback: BodyResponseCallback<Schema$Empty>): void;
    commit(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Commit
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
        {}) as Params$Resource$Projects$Locations$Repositories$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Repositories$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:commit').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Computes a Repository's Git access token status.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.computeAccessTokenStatus({
     *       // Required. The repository's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "tokenStatus": "my_tokenStatus"
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
    computeAccessTokenStatus(
      params: Params$Resource$Projects$Locations$Repositories$Computeaccesstokenstatus,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    computeAccessTokenStatus(
      params?: Params$Resource$Projects$Locations$Repositories$Computeaccesstokenstatus,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ComputeRepositoryAccessTokenStatusResponse>;
    computeAccessTokenStatus(
      params: Params$Resource$Projects$Locations$Repositories$Computeaccesstokenstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    computeAccessTokenStatus(
      params: Params$Resource$Projects$Locations$Repositories$Computeaccesstokenstatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ComputeRepositoryAccessTokenStatusResponse>,
      callback: BodyResponseCallback<Schema$ComputeRepositoryAccessTokenStatusResponse>
    ): void;
    computeAccessTokenStatus(
      params: Params$Resource$Projects$Locations$Repositories$Computeaccesstokenstatus,
      callback: BodyResponseCallback<Schema$ComputeRepositoryAccessTokenStatusResponse>
    ): void;
    computeAccessTokenStatus(
      callback: BodyResponseCallback<Schema$ComputeRepositoryAccessTokenStatusResponse>
    ): void;
    computeAccessTokenStatus(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Computeaccesstokenstatus
        | BodyResponseCallback<Schema$ComputeRepositoryAccessTokenStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ComputeRepositoryAccessTokenStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ComputeRepositoryAccessTokenStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ComputeRepositoryAccessTokenStatusResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Computeaccesstokenstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Computeaccesstokenstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+name}:computeAccessTokenStatus'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ComputeRepositoryAccessTokenStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ComputeRepositoryAccessTokenStatusResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a new Repository in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.create({
     *     // Required. The location in which to create the repository. Must be in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. The ID to use for the repository, which will become the final component of the repository's resource name.
     *     repositoryId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "gitRemoteSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "npmrcEnvironmentVariablesSecretVersion": "my_npmrcEnvironmentVariablesSecretVersion",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "setAuthenticatedUserAdmin": false,
     *       //   "workspaceCompilationOverrides": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "gitRemoteSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "npmrcEnvironmentVariablesSecretVersion": "my_npmrcEnvironmentVariablesSecretVersion",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "setAuthenticatedUserAdmin": false,
     *   //   "workspaceCompilationOverrides": {}
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
      params: Params$Resource$Projects$Locations$Repositories$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Repositories$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Repository>;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Repository>,
      callback: BodyResponseCallback<Schema$Repository>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Create,
      callback: BodyResponseCallback<Schema$Repository>
    ): void;
    create(callback: BodyResponseCallback<Schema$Repository>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Create
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/repositories').replace(
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
        createAPIRequest<Schema$Repository>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Repository>(parameters);
      }
    }

    /**
     * Deletes a single Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.delete({
     *     // If set to true, any child resources of this repository will also be deleted. (Otherwise, the request will only succeed if the repository has no child resources.)
     *     force: 'placeholder-value',
     *     // Required. The repository's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie',
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
      params: Params$Resource$Projects$Locations$Repositories$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Repositories$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Delete
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Fetches a Repository's history of commits. The Repository must not have a value for `git_remote_settings.url`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.fetchHistory({
     *     // Required. The repository's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     // Optional. Maximum number of commits to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous `FetchRepositoryHistory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchRepositoryHistory` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commits": [],
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
    fetchHistory(
      params: Params$Resource$Projects$Locations$Repositories$Fetchhistory,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchHistory(
      params?: Params$Resource$Projects$Locations$Repositories$Fetchhistory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchRepositoryHistoryResponse>;
    fetchHistory(
      params: Params$Resource$Projects$Locations$Repositories$Fetchhistory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchHistory(
      params: Params$Resource$Projects$Locations$Repositories$Fetchhistory,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchRepositoryHistoryResponse>,
      callback: BodyResponseCallback<Schema$FetchRepositoryHistoryResponse>
    ): void;
    fetchHistory(
      params: Params$Resource$Projects$Locations$Repositories$Fetchhistory,
      callback: BodyResponseCallback<Schema$FetchRepositoryHistoryResponse>
    ): void;
    fetchHistory(
      callback: BodyResponseCallback<Schema$FetchRepositoryHistoryResponse>
    ): void;
    fetchHistory(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Fetchhistory
        | BodyResponseCallback<Schema$FetchRepositoryHistoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchRepositoryHistoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchRepositoryHistoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchRepositoryHistoryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Fetchhistory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Fetchhistory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:fetchHistory').replace(
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
        createAPIRequest<Schema$FetchRepositoryHistoryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchRepositoryHistoryResponse>(
          parameters
        );
      }
    }

    /**
     * Fetches a Repository's remote branches.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.fetchRemoteBranches({
     *       // Required. The repository's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "branches": []
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
    fetchRemoteBranches(
      params: Params$Resource$Projects$Locations$Repositories$Fetchremotebranches,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchRemoteBranches(
      params?: Params$Resource$Projects$Locations$Repositories$Fetchremotebranches,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchRemoteBranchesResponse>;
    fetchRemoteBranches(
      params: Params$Resource$Projects$Locations$Repositories$Fetchremotebranches,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchRemoteBranches(
      params: Params$Resource$Projects$Locations$Repositories$Fetchremotebranches,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchRemoteBranchesResponse>,
      callback: BodyResponseCallback<Schema$FetchRemoteBranchesResponse>
    ): void;
    fetchRemoteBranches(
      params: Params$Resource$Projects$Locations$Repositories$Fetchremotebranches,
      callback: BodyResponseCallback<Schema$FetchRemoteBranchesResponse>
    ): void;
    fetchRemoteBranches(
      callback: BodyResponseCallback<Schema$FetchRemoteBranchesResponse>
    ): void;
    fetchRemoteBranches(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Fetchremotebranches
        | BodyResponseCallback<Schema$FetchRemoteBranchesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchRemoteBranchesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchRemoteBranchesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchRemoteBranchesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Fetchremotebranches;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Fetchremotebranches;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:fetchRemoteBranches').replace(
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
        createAPIRequest<Schema$FetchRemoteBranchesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchRemoteBranchesResponse>(parameters);
      }
    }

    /**
     * Fetches a single Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.get({
     *     // Required. The repository's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "gitRemoteSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "npmrcEnvironmentVariablesSecretVersion": "my_npmrcEnvironmentVariablesSecretVersion",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "setAuthenticatedUserAdmin": false,
     *   //   "workspaceCompilationOverrides": {}
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/repositories/my-repositorie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * Lists Repositories in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.list({
     *     // Optional. Filter for the returned list.
     *     filter: 'placeholder-value',
     *     // Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     *     orderBy: 'placeholder-value',
     *     // Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The location in which to list repositories. Must be in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "repositories": [],
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/repositories').replace(
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
     * Updates a single Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.patch({
     *     // Output only. The repository's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     // Optional. Specifies the fields to be updated in the repository. If left unset, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "gitRemoteSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "npmrcEnvironmentVariablesSecretVersion": "my_npmrcEnvironmentVariablesSecretVersion",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "setAuthenticatedUserAdmin": false,
     *       //   "workspaceCompilationOverrides": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "gitRemoteSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "npmrcEnvironmentVariablesSecretVersion": "my_npmrcEnvironmentVariablesSecretVersion",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "setAuthenticatedUserAdmin": false,
     *   //   "workspaceCompilationOverrides": {}
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.queryDirectoryContents({
     *       // Optional. The Commit SHA for the commit to query from. If unset, the directory will be queried from HEAD.
     *       commitSha: 'placeholder-value',
     *       // Required. The repository's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie',
     *       // Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous `QueryRepositoryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryRepositoryDirectoryContents` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Optional. The directory's full path including directory name, relative to root. If left unset, the root is used.
     *       path: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directoryEntries": [],
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
    queryDirectoryContents(
      params: Params$Resource$Projects$Locations$Repositories$Querydirectorycontents,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    queryDirectoryContents(
      params?: Params$Resource$Projects$Locations$Repositories$Querydirectorycontents,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryRepositoryDirectoryContentsResponse>;
    queryDirectoryContents(
      params: Params$Resource$Projects$Locations$Repositories$Querydirectorycontents,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryDirectoryContents(
      params: Params$Resource$Projects$Locations$Repositories$Querydirectorycontents,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryRepositoryDirectoryContentsResponse>,
      callback: BodyResponseCallback<Schema$QueryRepositoryDirectoryContentsResponse>
    ): void;
    queryDirectoryContents(
      params: Params$Resource$Projects$Locations$Repositories$Querydirectorycontents,
      callback: BodyResponseCallback<Schema$QueryRepositoryDirectoryContentsResponse>
    ): void;
    queryDirectoryContents(
      callback: BodyResponseCallback<Schema$QueryRepositoryDirectoryContentsResponse>
    ): void;
    queryDirectoryContents(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Querydirectorycontents
        | BodyResponseCallback<Schema$QueryRepositoryDirectoryContentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryRepositoryDirectoryContentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryRepositoryDirectoryContentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryRepositoryDirectoryContentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Querydirectorycontents;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Querydirectorycontents;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:queryDirectoryContents').replace(
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
        createAPIRequest<Schema$QueryRepositoryDirectoryContentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryRepositoryDirectoryContentsResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.readFile({
     *     // Optional. The commit SHA for the commit to read from. If unset, the file will be read from HEAD.
     *     commitSha: 'placeholder-value',
     *     // Required. The repository's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     // Required. Full file path to read including filename, from repository root.
     *     path: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contents": "my_contents"
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
    readFile(
      params: Params$Resource$Projects$Locations$Repositories$Readfile,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    readFile(
      params?: Params$Resource$Projects$Locations$Repositories$Readfile,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReadRepositoryFileResponse>;
    readFile(
      params: Params$Resource$Projects$Locations$Repositories$Readfile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    readFile(
      params: Params$Resource$Projects$Locations$Repositories$Readfile,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReadRepositoryFileResponse>,
      callback: BodyResponseCallback<Schema$ReadRepositoryFileResponse>
    ): void;
    readFile(
      params: Params$Resource$Projects$Locations$Repositories$Readfile,
      callback: BodyResponseCallback<Schema$ReadRepositoryFileResponse>
    ): void;
    readFile(
      callback: BodyResponseCallback<Schema$ReadRepositoryFileResponse>
    ): void;
    readFile(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Readfile
        | BodyResponseCallback<Schema$ReadRepositoryFileResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReadRepositoryFileResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReadRepositoryFileResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReadRepositoryFileResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Readfile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Repositories$Readfile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:readFile').replace(
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
        createAPIRequest<Schema$ReadRepositoryFileResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReadRepositoryFileResponse>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/repositories/my-repositorie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.testIamPermissions(
     *     {
     *       // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Repositories$Commit
    extends StandardParameters {
    /**
     * Required. The repository's name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommitRepositoryChangesRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Computeaccesstokenstatus
    extends StandardParameters {
    /**
     * Required. The repository's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Create
    extends StandardParameters {
    /**
     * Required. The location in which to create the repository. Must be in the format `projects/x/locations/x`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the repository, which will become the final component of the repository's resource name.
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
     * If set to true, any child resources of this repository will also be deleted. (Otherwise, the request will only succeed if the repository has no child resources.)
     */
    force?: boolean;
    /**
     * Required. The repository's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Fetchhistory
    extends StandardParameters {
    /**
     * Required. The repository's name.
     */
    name?: string;
    /**
     * Optional. Maximum number of commits to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `FetchRepositoryHistory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchRepositoryHistory` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Fetchremotebranches
    extends StandardParameters {
    /**
     * Required. The repository's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Get
    extends StandardParameters {
    /**
     * Required. The repository's name.
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
     * Optional. Filter for the returned list.
     */
    filter?: string;
    /**
     * Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The location in which to list repositories. Must be in the format `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Patch
    extends StandardParameters {
    /**
     * Output only. The repository's name.
     */
    name?: string;
    /**
     * Optional. Specifies the fields to be updated in the repository. If left unset, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Repository;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Querydirectorycontents
    extends StandardParameters {
    /**
     * Optional. The Commit SHA for the commit to query from. If unset, the directory will be queried from HEAD.
     */
    commitSha?: string;
    /**
     * Required. The repository's name.
     */
    name?: string;
    /**
     * Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `QueryRepositoryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryRepositoryDirectoryContents` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Optional. The directory's full path including directory name, relative to root. If left unset, the root is used.
     */
    path?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Readfile
    extends StandardParameters {
    /**
     * Optional. The commit SHA for the commit to read from. If unset, the file will be read from HEAD.
     */
    commitSha?: string;
    /**
     * Required. The repository's name.
     */
    name?: string;
    /**
     * Required. Full file path to read including filename, from repository root.
     */
    path?: string;
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

  export class Resource$Projects$Locations$Repositories$Compilationresults {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new CompilationResult in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.compilationResults.create({
     *       // Required. The repository in which to create the compilation result. Must be in the format `projects/x/locations/x/repositories/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "codeCompilationConfig": {},
     *         //   "compilationErrors": [],
     *         //   "dataformCoreVersion": "my_dataformCoreVersion",
     *         //   "gitCommitish": "my_gitCommitish",
     *         //   "name": "my_name",
     *         //   "releaseConfig": "my_releaseConfig",
     *         //   "resolvedGitCommitSha": "my_resolvedGitCommitSha",
     *         //   "workspace": "my_workspace"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "codeCompilationConfig": {},
     *   //   "compilationErrors": [],
     *   //   "dataformCoreVersion": "my_dataformCoreVersion",
     *   //   "gitCommitish": "my_gitCommitish",
     *   //   "name": "my_name",
     *   //   "releaseConfig": "my_releaseConfig",
     *   //   "resolvedGitCommitSha": "my_resolvedGitCommitSha",
     *   //   "workspace": "my_workspace"
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
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Repositories$Compilationresults$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CompilationResult>;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CompilationResult>,
      callback: BodyResponseCallback<Schema$CompilationResult>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Create,
      callback: BodyResponseCallback<Schema$CompilationResult>
    ): void;
    create(callback: BodyResponseCallback<Schema$CompilationResult>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Compilationresults$Create
        | BodyResponseCallback<Schema$CompilationResult>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CompilationResult>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CompilationResult>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CompilationResult>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Compilationresults$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Compilationresults$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/compilationResults').replace(
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
        createAPIRequest<Schema$CompilationResult>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CompilationResult>(parameters);
      }
    }

    /**
     * Fetches a single CompilationResult.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.compilationResults.get({
     *       // Required. The compilation result's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/compilationResults/my-compilationResult',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "codeCompilationConfig": {},
     *   //   "compilationErrors": [],
     *   //   "dataformCoreVersion": "my_dataformCoreVersion",
     *   //   "gitCommitish": "my_gitCommitish",
     *   //   "name": "my_name",
     *   //   "releaseConfig": "my_releaseConfig",
     *   //   "resolvedGitCommitSha": "my_resolvedGitCommitSha",
     *   //   "workspace": "my_workspace"
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
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Compilationresults$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CompilationResult>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CompilationResult>,
      callback: BodyResponseCallback<Schema$CompilationResult>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Get,
      callback: BodyResponseCallback<Schema$CompilationResult>
    ): void;
    get(callback: BodyResponseCallback<Schema$CompilationResult>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Compilationresults$Get
        | BodyResponseCallback<Schema$CompilationResult>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CompilationResult>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CompilationResult>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CompilationResult>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Compilationresults$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Compilationresults$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CompilationResult>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CompilationResult>(parameters);
      }
    }

    /**
     * Lists CompilationResults in a given Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.compilationResults.list({
     *       // Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The repository in which to list compilation results. Must be in the format `projects/x/locations/x/repositories/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "compilationResults": [],
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
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Compilationresults$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCompilationResultsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCompilationResultsResponse>,
      callback: BodyResponseCallback<Schema$ListCompilationResultsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$List,
      callback: BodyResponseCallback<Schema$ListCompilationResultsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCompilationResultsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Compilationresults$List
        | BodyResponseCallback<Schema$ListCompilationResultsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCompilationResultsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCompilationResultsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCompilationResultsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Compilationresults$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Compilationresults$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/compilationResults').replace(
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
        createAPIRequest<Schema$ListCompilationResultsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCompilationResultsResponse>(
          parameters
        );
      }
    }

    /**
     * Returns CompilationResultActions in a given CompilationResult.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.compilationResults.query({
     *       // Optional. Optional filter for the returned list. Filtering is only currently supported on the `file_path` field.
     *       filter: 'placeholder-value',
     *       // Required. The compilation result's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/compilationResults/my-compilationResult',
     *       // Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous `QueryCompilationResultActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryCompilationResultActions` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "compilationResultActions": [],
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
    query(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Projects$Locations$Repositories$Compilationresults$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryCompilationResultActionsResponse>;
    query(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryCompilationResultActionsResponse>,
      callback: BodyResponseCallback<Schema$QueryCompilationResultActionsResponse>
    ): void;
    query(
      params: Params$Resource$Projects$Locations$Repositories$Compilationresults$Query,
      callback: BodyResponseCallback<Schema$QueryCompilationResultActionsResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$QueryCompilationResultActionsResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Compilationresults$Query
        | BodyResponseCallback<Schema$QueryCompilationResultActionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryCompilationResultActionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryCompilationResultActionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryCompilationResultActionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Compilationresults$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Compilationresults$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:query').replace(
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
        createAPIRequest<Schema$QueryCompilationResultActionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryCompilationResultActionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Compilationresults$Create
    extends StandardParameters {
    /**
     * Required. The repository in which to create the compilation result. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompilationResult;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Compilationresults$Get
    extends StandardParameters {
    /**
     * Required. The compilation result's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Compilationresults$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The repository in which to list compilation results. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Compilationresults$Query
    extends StandardParameters {
    /**
     * Optional. Optional filter for the returned list. Filtering is only currently supported on the `file_path` field.
     */
    filter?: string;
    /**
     * Required. The compilation result's name.
     */
    name?: string;
    /**
     * Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `QueryCompilationResultActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryCompilationResultActions` must match the call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Repositories$Releaseconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new ReleaseConfig in a given Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.releaseConfigs.create({
     *       // Required. The repository in which to create the release config. Must be in the format `projects/x/locations/x/repositories/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie',
     *       // Required. The ID to use for the release config, which will become the final component of the release config's resource name.
     *       releaseConfigId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "codeCompilationConfig": {},
     *         //   "cronSchedule": "my_cronSchedule",
     *         //   "gitCommitish": "my_gitCommitish",
     *         //   "name": "my_name",
     *         //   "recentScheduledReleaseRecords": [],
     *         //   "releaseCompilationResult": "my_releaseCompilationResult",
     *         //   "timeZone": "my_timeZone"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "codeCompilationConfig": {},
     *   //   "cronSchedule": "my_cronSchedule",
     *   //   "gitCommitish": "my_gitCommitish",
     *   //   "name": "my_name",
     *   //   "recentScheduledReleaseRecords": [],
     *   //   "releaseCompilationResult": "my_releaseCompilationResult",
     *   //   "timeZone": "my_timeZone"
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
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReleaseConfig>;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ReleaseConfig>,
      callback: BodyResponseCallback<Schema$ReleaseConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Create,
      callback: BodyResponseCallback<Schema$ReleaseConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$ReleaseConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Create
        | BodyResponseCallback<Schema$ReleaseConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReleaseConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReleaseConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReleaseConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releaseConfigs').replace(
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
        createAPIRequest<Schema$ReleaseConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReleaseConfig>(parameters);
      }
    }

    /**
     * Deletes a single ReleaseConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.releaseConfigs.delete({
     *       // Required. The release config's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/releaseConfigs/my-releaseConfig',
     *     });
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
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Delete
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
        {}) as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Fetches a single ReleaseConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.releaseConfigs.get(
     *     {
     *       // Required. The release config's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/releaseConfigs/my-releaseConfig',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "codeCompilationConfig": {},
     *   //   "cronSchedule": "my_cronSchedule",
     *   //   "gitCommitish": "my_gitCommitish",
     *   //   "name": "my_name",
     *   //   "recentScheduledReleaseRecords": [],
     *   //   "releaseCompilationResult": "my_releaseCompilationResult",
     *   //   "timeZone": "my_timeZone"
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
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReleaseConfig>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReleaseConfig>,
      callback: BodyResponseCallback<Schema$ReleaseConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Get,
      callback: BodyResponseCallback<Schema$ReleaseConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReleaseConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Get
        | BodyResponseCallback<Schema$ReleaseConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReleaseConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReleaseConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReleaseConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ReleaseConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReleaseConfig>(parameters);
      }
    }

    /**
     * Lists ReleaseConfigs in a given Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.releaseConfigs.list({
     *       // Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The repository in which to list release configs. Must be in the format `projects/x/locations/x/repositories/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releaseConfigs": [],
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
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReleaseConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleaseConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListReleaseConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$List,
      callback: BodyResponseCallback<Schema$ListReleaseConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListReleaseConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Releaseconfigs$List
        | BodyResponseCallback<Schema$ListReleaseConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReleaseConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReleaseConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReleaseConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releaseConfigs').replace(
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
        createAPIRequest<Schema$ListReleaseConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReleaseConfigsResponse>(parameters);
      }
    }

    /**
     * Updates a single ReleaseConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.releaseConfigs.patch({
     *       // Output only. The release config's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/releaseConfigs/my-releaseConfig',
     *       // Optional. Specifies the fields to be updated in the release config. If left unset, all fields will be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "codeCompilationConfig": {},
     *         //   "cronSchedule": "my_cronSchedule",
     *         //   "gitCommitish": "my_gitCommitish",
     *         //   "name": "my_name",
     *         //   "recentScheduledReleaseRecords": [],
     *         //   "releaseCompilationResult": "my_releaseCompilationResult",
     *         //   "timeZone": "my_timeZone"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "codeCompilationConfig": {},
     *   //   "cronSchedule": "my_cronSchedule",
     *   //   "gitCommitish": "my_gitCommitish",
     *   //   "name": "my_name",
     *   //   "recentScheduledReleaseRecords": [],
     *   //   "releaseCompilationResult": "my_releaseCompilationResult",
     *   //   "timeZone": "my_timeZone"
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
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReleaseConfig>;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ReleaseConfig>,
      callback: BodyResponseCallback<Schema$ReleaseConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Patch,
      callback: BodyResponseCallback<Schema$ReleaseConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ReleaseConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Patch
        | BodyResponseCallback<Schema$ReleaseConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReleaseConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReleaseConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReleaseConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ReleaseConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReleaseConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Create
    extends StandardParameters {
    /**
     * Required. The repository in which to create the release config. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the release config, which will become the final component of the release config's resource name.
     */
    releaseConfigId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReleaseConfig;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Delete
    extends StandardParameters {
    /**
     * Required. The release config's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Get
    extends StandardParameters {
    /**
     * Required. The release config's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Releaseconfigs$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The repository in which to list release configs. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Releaseconfigs$Patch
    extends StandardParameters {
    /**
     * Output only. The release config's name.
     */
    name?: string;
    /**
     * Optional. Specifies the fields to be updated in the release config. If left unset, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReleaseConfig;
  }

  export class Resource$Projects$Locations$Repositories$Workflowconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new WorkflowConfig in a given Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowConfigs.create({
     *       // Required. The repository in which to create the workflow config. Must be in the format `projects/x/locations/x/repositories/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie',
     *       // Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name.
     *       workflowConfigId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "cronSchedule": "my_cronSchedule",
     *         //   "invocationConfig": {},
     *         //   "name": "my_name",
     *         //   "recentScheduledExecutionRecords": [],
     *         //   "releaseConfig": "my_releaseConfig",
     *         //   "timeZone": "my_timeZone"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cronSchedule": "my_cronSchedule",
     *   //   "invocationConfig": {},
     *   //   "name": "my_name",
     *   //   "recentScheduledExecutionRecords": [],
     *   //   "releaseConfig": "my_releaseConfig",
     *   //   "timeZone": "my_timeZone"
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowConfig>;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowConfig>,
      callback: BodyResponseCallback<Schema$WorkflowConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Create,
      callback: BodyResponseCallback<Schema$WorkflowConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$WorkflowConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Create
        | BodyResponseCallback<Schema$WorkflowConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkflowConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkflowConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WorkflowConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/workflowConfigs').replace(
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
        createAPIRequest<Schema$WorkflowConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkflowConfig>(parameters);
      }
    }

    /**
     * Deletes a single WorkflowConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowConfigs.delete({
     *       // Required. The workflow config's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workflowConfigs/my-workflowConfig',
     *     });
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Delete
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Fetches a single WorkflowConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowConfigs.get({
     *       // Required. The workflow config's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workflowConfigs/my-workflowConfig',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cronSchedule": "my_cronSchedule",
     *   //   "invocationConfig": {},
     *   //   "name": "my_name",
     *   //   "recentScheduledExecutionRecords": [],
     *   //   "releaseConfig": "my_releaseConfig",
     *   //   "timeZone": "my_timeZone"
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowConfig>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowConfig>,
      callback: BodyResponseCallback<Schema$WorkflowConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Get,
      callback: BodyResponseCallback<Schema$WorkflowConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$WorkflowConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Get
        | BodyResponseCallback<Schema$WorkflowConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkflowConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkflowConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WorkflowConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WorkflowConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkflowConfig>(parameters);
      }
    }

    /**
     * Lists WorkflowConfigs in a given Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowConfigs.list({
     *       // Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The repository in which to list workflow configs. Must be in the format `projects/x/locations/x/repositories/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "workflowConfigs": []
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkflowConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkflowConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListWorkflowConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$List,
      callback: BodyResponseCallback<Schema$ListWorkflowConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListWorkflowConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowconfigs$List
        | BodyResponseCallback<Schema$ListWorkflowConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkflowConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkflowConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkflowConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/workflowConfigs').replace(
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
        createAPIRequest<Schema$ListWorkflowConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkflowConfigsResponse>(parameters);
      }
    }

    /**
     * Updates a single WorkflowConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowConfigs.patch({
     *       // Output only. The workflow config's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workflowConfigs/my-workflowConfig',
     *       // Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "cronSchedule": "my_cronSchedule",
     *         //   "invocationConfig": {},
     *         //   "name": "my_name",
     *         //   "recentScheduledExecutionRecords": [],
     *         //   "releaseConfig": "my_releaseConfig",
     *         //   "timeZone": "my_timeZone"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cronSchedule": "my_cronSchedule",
     *   //   "invocationConfig": {},
     *   //   "name": "my_name",
     *   //   "recentScheduledExecutionRecords": [],
     *   //   "releaseConfig": "my_releaseConfig",
     *   //   "timeZone": "my_timeZone"
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowConfig>;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowConfig>,
      callback: BodyResponseCallback<Schema$WorkflowConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Patch,
      callback: BodyResponseCallback<Schema$WorkflowConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$WorkflowConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Patch
        | BodyResponseCallback<Schema$WorkflowConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkflowConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkflowConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WorkflowConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WorkflowConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkflowConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Create
    extends StandardParameters {
    /**
     * Required. The repository in which to create the workflow config. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name.
     */
    workflowConfigId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkflowConfig;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Delete
    extends StandardParameters {
    /**
     * Required. The workflow config's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Get
    extends StandardParameters {
    /**
     * Required. The workflow config's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workflowconfigs$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The repository in which to list workflow configs. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workflowconfigs$Patch
    extends StandardParameters {
    /**
     * Output only. The workflow config's name.
     */
    name?: string;
    /**
     * Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkflowConfig;
  }

  export class Resource$Projects$Locations$Repositories$Workflowinvocations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Requests cancellation of a running WorkflowInvocation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowInvocations.cancel({
     *       // Required. The workflow invocation resource's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workflowInvocations/my-workflowInvocation',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Cancel
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Creates a new WorkflowInvocation in a given Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowInvocations.create({
     *       // Required. The repository in which to create the workflow invocation. Must be in the format `projects/x/locations/x/repositories/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "compilationResult": "my_compilationResult",
     *         //   "invocationConfig": {},
     *         //   "invocationTiming": {},
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "workflowConfig": "my_workflowConfig"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "compilationResult": "my_compilationResult",
     *   //   "invocationConfig": {},
     *   //   "invocationTiming": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "workflowConfig": "my_workflowConfig"
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowInvocation>;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowInvocation>,
      callback: BodyResponseCallback<Schema$WorkflowInvocation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Create,
      callback: BodyResponseCallback<Schema$WorkflowInvocation>
    ): void;
    create(callback: BodyResponseCallback<Schema$WorkflowInvocation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Create
        | BodyResponseCallback<Schema$WorkflowInvocation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkflowInvocation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkflowInvocation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$WorkflowInvocation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/workflowInvocations').replace(
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
        createAPIRequest<Schema$WorkflowInvocation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkflowInvocation>(parameters);
      }
    }

    /**
     * Deletes a single WorkflowInvocation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowInvocations.delete({
     *       // Required. The workflow invocation resource's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workflowInvocations/my-workflowInvocation',
     *     });
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Delete
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Fetches a single WorkflowInvocation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowInvocations.get({
     *       // Required. The workflow invocation resource's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workflowInvocations/my-workflowInvocation',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "compilationResult": "my_compilationResult",
     *   //   "invocationConfig": {},
     *   //   "invocationTiming": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "workflowConfig": "my_workflowConfig"
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowInvocation>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowInvocation>,
      callback: BodyResponseCallback<Schema$WorkflowInvocation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Get,
      callback: BodyResponseCallback<Schema$WorkflowInvocation>
    ): void;
    get(callback: BodyResponseCallback<Schema$WorkflowInvocation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Get
        | BodyResponseCallback<Schema$WorkflowInvocation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkflowInvocation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkflowInvocation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$WorkflowInvocation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WorkflowInvocation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkflowInvocation>(parameters);
      }
    }

    /**
     * Lists WorkflowInvocations in a given Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowInvocations.list({
     *       // Optional. Filter for the returned list.
     *       filter: 'placeholder-value',
     *       // Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     *       orderBy: 'placeholder-value',
     *       // Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/x/locations/x/repositories/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "workflowInvocations": []
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
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkflowInvocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkflowInvocationsResponse>,
      callback: BodyResponseCallback<Schema$ListWorkflowInvocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$List,
      callback: BodyResponseCallback<Schema$ListWorkflowInvocationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListWorkflowInvocationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowinvocations$List
        | BodyResponseCallback<Schema$ListWorkflowInvocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkflowInvocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkflowInvocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkflowInvocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/workflowInvocations').replace(
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
        createAPIRequest<Schema$ListWorkflowInvocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkflowInvocationsResponse>(
          parameters
        );
      }
    }

    /**
     * Returns WorkflowInvocationActions in a given WorkflowInvocation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workflowInvocations.query({
     *       // Required. The workflow invocation's name.
     *       name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workflowInvocations/my-workflowInvocation',
     *       // Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "workflowInvocationActions": []
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
    query(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryWorkflowInvocationActionsResponse>;
    query(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryWorkflowInvocationActionsResponse>,
      callback: BodyResponseCallback<Schema$QueryWorkflowInvocationActionsResponse>
    ): void;
    query(
      params: Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Query,
      callback: BodyResponseCallback<Schema$QueryWorkflowInvocationActionsResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$QueryWorkflowInvocationActionsResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Query
        | BodyResponseCallback<Schema$QueryWorkflowInvocationActionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryWorkflowInvocationActionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryWorkflowInvocationActionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryWorkflowInvocationActionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:query').replace(
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
        createAPIRequest<Schema$QueryWorkflowInvocationActionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryWorkflowInvocationActionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Cancel
    extends StandardParameters {
    /**
     * Required. The workflow invocation resource's name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelWorkflowInvocationRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Create
    extends StandardParameters {
    /**
     * Required. The repository in which to create the workflow invocation. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkflowInvocation;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Delete
    extends StandardParameters {
    /**
     * Required. The workflow invocation resource's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Get
    extends StandardParameters {
    /**
     * Required. The workflow invocation resource's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workflowinvocations$List
    extends StandardParameters {
    /**
     * Optional. Filter for the returned list.
     */
    filter?: string;
    /**
     * Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workflowinvocations$Query
    extends StandardParameters {
    /**
     * Required. The workflow invocation's name.
     */
    name?: string;
    /**
     * Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions` must match the call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Repositories$Workspaces {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Applies a Git commit for uncommitted files in a Workspace.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.workspaces.commit({
     *     // Required. The workspace's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "author": {},
     *       //   "commitMessage": "my_commitMessage",
     *       //   "paths": []
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
    commit(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Commit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    commit(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Commit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    commit(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Commit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    commit(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Commit,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    commit(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Commit,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    commit(callback: BodyResponseCallback<Schema$Empty>): void;
    commit(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Commit
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:commit').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Creates a new Workspace in a given Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.workspaces.create({
     *     // Required. The repository in which to create the workspace. Must be in the format `projects/x/locations/x/repositories/x`.
     *     parent:
     *       'projects/my-project/locations/my-location/repositories/my-repositorie',
     *     // Required. The ID to use for the workspace, which will become the final component of the workspace's resource name.
     *     workspaceId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Workspace>;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Workspace>,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Create,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    create(callback: BodyResponseCallback<Schema$Workspace>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Create
        | BodyResponseCallback<Schema$Workspace>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Workspace>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Workspace>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Workspace> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/workspaces').replace(
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
        createAPIRequest<Schema$Workspace>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Workspace>(parameters);
      }
    }

    /**
     * Deletes a single Workspace.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.workspaces.delete({
     *     // Required. The workspace resource's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
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
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Delete
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Fetches Git diff for an uncommitted file in a Workspace.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.fetchFileDiff({
     *       // Required. The file's full path including filename, relative to the workspace root.
     *       path: 'placeholder-value',
     *       // Required. The workspace's name.
     *       workspace:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "formattedDiff": "my_formattedDiff"
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
    fetchFileDiff(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilediff,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchFileDiff(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilediff,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchFileDiffResponse>;
    fetchFileDiff(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilediff,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchFileDiff(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilediff,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchFileDiffResponse>,
      callback: BodyResponseCallback<Schema$FetchFileDiffResponse>
    ): void;
    fetchFileDiff(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilediff,
      callback: BodyResponseCallback<Schema$FetchFileDiffResponse>
    ): void;
    fetchFileDiff(
      callback: BodyResponseCallback<Schema$FetchFileDiffResponse>
    ): void;
    fetchFileDiff(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilediff
        | BodyResponseCallback<Schema$FetchFileDiffResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchFileDiffResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchFileDiffResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchFileDiffResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilediff;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilediff;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+workspace}:fetchFileDiff').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchFileDiffResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchFileDiffResponse>(parameters);
      }
    }

    /**
     * Fetches Git statuses for the files in a Workspace.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.fetchFileGitStatuses(
     *       {
     *         // Required. The workspace's name.
     *         name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "uncommittedFileChanges": []
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
    fetchFileGitStatuses(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilegitstatuses,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchFileGitStatuses(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilegitstatuses,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchFileGitStatusesResponse>;
    fetchFileGitStatuses(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilegitstatuses,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchFileGitStatuses(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilegitstatuses,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchFileGitStatusesResponse>,
      callback: BodyResponseCallback<Schema$FetchFileGitStatusesResponse>
    ): void;
    fetchFileGitStatuses(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilegitstatuses,
      callback: BodyResponseCallback<Schema$FetchFileGitStatusesResponse>
    ): void;
    fetchFileGitStatuses(
      callback: BodyResponseCallback<Schema$FetchFileGitStatusesResponse>
    ): void;
    fetchFileGitStatuses(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilegitstatuses
        | BodyResponseCallback<Schema$FetchFileGitStatusesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchFileGitStatusesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchFileGitStatusesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchFileGitStatusesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilegitstatuses;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilegitstatuses;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:fetchFileGitStatuses').replace(
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
        createAPIRequest<Schema$FetchFileGitStatusesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchFileGitStatusesResponse>(
          parameters
        );
      }
    }

    /**
     * Fetches Git ahead/behind against a remote branch.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.fetchGitAheadBehind(
     *       {
     *         // Required. The workspace's name.
     *         name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *         // Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used.
     *         remoteBranch: 'placeholder-value',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commitsAhead": 0,
     *   //   "commitsBehind": 0
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
    fetchGitAheadBehind(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchgitaheadbehind,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchGitAheadBehind(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchgitaheadbehind,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchGitAheadBehindResponse>;
    fetchGitAheadBehind(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchgitaheadbehind,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchGitAheadBehind(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchgitaheadbehind,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchGitAheadBehindResponse>,
      callback: BodyResponseCallback<Schema$FetchGitAheadBehindResponse>
    ): void;
    fetchGitAheadBehind(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchgitaheadbehind,
      callback: BodyResponseCallback<Schema$FetchGitAheadBehindResponse>
    ): void;
    fetchGitAheadBehind(
      callback: BodyResponseCallback<Schema$FetchGitAheadBehindResponse>
    ): void;
    fetchGitAheadBehind(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchgitaheadbehind
        | BodyResponseCallback<Schema$FetchGitAheadBehindResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchGitAheadBehindResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchGitAheadBehindResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchGitAheadBehindResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchgitaheadbehind;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchgitaheadbehind;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:fetchGitAheadBehind').replace(
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
        createAPIRequest<Schema$FetchGitAheadBehindResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchGitAheadBehindResponse>(parameters);
      }
    }

    /**
     * Fetches a single Workspace.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.workspaces.get({
     *     // Required. The workspace's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Workspace>;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Workspace>,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Get,
      callback: BodyResponseCallback<Schema$Workspace>
    ): void;
    get(callback: BodyResponseCallback<Schema$Workspace>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Get
        | BodyResponseCallback<Schema$Workspace>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Workspace>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Workspace>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Workspace> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Workspace>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Workspace>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.getIamPolicy({
     *       // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * Installs dependency NPM packages (inside a Workspace).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.installNpmPackages(
     *       {
     *         // Required. The workspace's name.
     *         workspace:
     *           'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       }
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
    installNpmPackages(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Installnpmpackages,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    installNpmPackages(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Installnpmpackages,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InstallNpmPackagesResponse>;
    installNpmPackages(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Installnpmpackages,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    installNpmPackages(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Installnpmpackages,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InstallNpmPackagesResponse>,
      callback: BodyResponseCallback<Schema$InstallNpmPackagesResponse>
    ): void;
    installNpmPackages(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Installnpmpackages,
      callback: BodyResponseCallback<Schema$InstallNpmPackagesResponse>
    ): void;
    installNpmPackages(
      callback: BodyResponseCallback<Schema$InstallNpmPackagesResponse>
    ): void;
    installNpmPackages(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Installnpmpackages
        | BodyResponseCallback<Schema$InstallNpmPackagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InstallNpmPackagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InstallNpmPackagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$InstallNpmPackagesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Installnpmpackages;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Installnpmpackages;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+workspace}:installNpmPackages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InstallNpmPackagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InstallNpmPackagesResponse>(parameters);
      }
    }

    /**
     * Lists Workspaces in a given Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.workspaces.list({
     *     // Optional. Filter for the returned list.
     *     filter: 'placeholder-value',
     *     // Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     *     orderBy: 'placeholder-value',
     *     // Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The repository in which to list workspaces. Must be in the format `projects/x/locations/x/repositories/x`.
     *     parent:
     *       'projects/my-project/locations/my-location/repositories/my-repositorie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "workspaces": []
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
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkspacesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkspacesResponse>,
      callback: BodyResponseCallback<Schema$ListWorkspacesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$List,
      callback: BodyResponseCallback<Schema$ListWorkspacesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$List
        | BodyResponseCallback<Schema$ListWorkspacesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkspacesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkspacesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkspacesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/workspaces').replace(
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
        createAPIRequest<Schema$ListWorkspacesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkspacesResponse>(parameters);
      }
    }

    /**
     * Creates a directory inside a Workspace.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.makeDirectory({
     *       // Required. The workspace's name.
     *       workspace:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "path": "my_path"
     *         // }
     *       },
     *     });
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
    makeDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Makedirectory,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    makeDirectory(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Makedirectory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MakeDirectoryResponse>;
    makeDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Makedirectory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    makeDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Makedirectory,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MakeDirectoryResponse>,
      callback: BodyResponseCallback<Schema$MakeDirectoryResponse>
    ): void;
    makeDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Makedirectory,
      callback: BodyResponseCallback<Schema$MakeDirectoryResponse>
    ): void;
    makeDirectory(
      callback: BodyResponseCallback<Schema$MakeDirectoryResponse>
    ): void;
    makeDirectory(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Makedirectory
        | BodyResponseCallback<Schema$MakeDirectoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MakeDirectoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MakeDirectoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$MakeDirectoryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Makedirectory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Makedirectory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+workspace}:makeDirectory').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MakeDirectoryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MakeDirectoryResponse>(parameters);
      }
    }

    /**
     * Moves a directory (inside a Workspace), and all of its contents, to a new location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.moveDirectory({
     *       // Required. The workspace's name.
     *       workspace:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "newPath": "my_newPath",
     *         //   "path": "my_path"
     *         // }
     *       },
     *     });
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
    moveDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Movedirectory,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    moveDirectory(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Movedirectory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MoveDirectoryResponse>;
    moveDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Movedirectory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    moveDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Movedirectory,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MoveDirectoryResponse>,
      callback: BodyResponseCallback<Schema$MoveDirectoryResponse>
    ): void;
    moveDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Movedirectory,
      callback: BodyResponseCallback<Schema$MoveDirectoryResponse>
    ): void;
    moveDirectory(
      callback: BodyResponseCallback<Schema$MoveDirectoryResponse>
    ): void;
    moveDirectory(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Movedirectory
        | BodyResponseCallback<Schema$MoveDirectoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MoveDirectoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MoveDirectoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$MoveDirectoryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Movedirectory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Movedirectory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+workspace}:moveDirectory').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MoveDirectoryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MoveDirectoryResponse>(parameters);
      }
    }

    /**
     * Moves a file (inside a Workspace) to a new location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.moveFile({
     *       // Required. The workspace's name.
     *       workspace:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "newPath": "my_newPath",
     *         //   "path": "my_path"
     *         // }
     *       },
     *     });
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
    moveFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Movefile,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    moveFile(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Movefile,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MoveFileResponse>;
    moveFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Movefile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    moveFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Movefile,
      options: MethodOptions | BodyResponseCallback<Schema$MoveFileResponse>,
      callback: BodyResponseCallback<Schema$MoveFileResponse>
    ): void;
    moveFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Movefile,
      callback: BodyResponseCallback<Schema$MoveFileResponse>
    ): void;
    moveFile(callback: BodyResponseCallback<Schema$MoveFileResponse>): void;
    moveFile(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Movefile
        | BodyResponseCallback<Schema$MoveFileResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MoveFileResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MoveFileResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MoveFileResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Movefile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Movefile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+workspace}:moveFile').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MoveFileResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MoveFileResponse>(parameters);
      }
    }

    /**
     * Pulls Git commits from the Repository's remote into a Workspace.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.workspaces.pull({
     *     // Required. The workspace's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "author": {},
     *       //   "remoteBranch": "my_remoteBranch"
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
    pull(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Pull,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    pull(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Pull,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    pull(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Pull,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pull(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Pull,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    pull(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Pull,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    pull(callback: BodyResponseCallback<Schema$Empty>): void;
    pull(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Pull
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Pull;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Pull;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:pull').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Pushes Git commits from a Workspace to the Repository's remote.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.workspaces.push({
     *     // Required. The workspace's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "remoteBranch": "my_remoteBranch"
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
    push(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Push,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    push(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Push,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    push(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Push,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    push(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Push,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    push(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Push,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    push(callback: BodyResponseCallback<Schema$Empty>): void;
    push(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Push
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Push;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Push;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:push').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Returns the contents of a given Workspace directory.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.queryDirectoryContents(
     *       {
     *         // Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *         pageSize: 'placeholder-value',
     *         // Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used.
     *         path: 'placeholder-value',
     *         // Required. The workspace's name.
     *         workspace:
     *           'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directoryEntries": [],
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
    queryDirectoryContents(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Querydirectorycontents,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    queryDirectoryContents(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Querydirectorycontents,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryDirectoryContentsResponse>;
    queryDirectoryContents(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Querydirectorycontents,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryDirectoryContents(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Querydirectorycontents,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryDirectoryContentsResponse>,
      callback: BodyResponseCallback<Schema$QueryDirectoryContentsResponse>
    ): void;
    queryDirectoryContents(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Querydirectorycontents,
      callback: BodyResponseCallback<Schema$QueryDirectoryContentsResponse>
    ): void;
    queryDirectoryContents(
      callback: BodyResponseCallback<Schema$QueryDirectoryContentsResponse>
    ): void;
    queryDirectoryContents(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Querydirectorycontents
        | BodyResponseCallback<Schema$QueryDirectoryContentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryDirectoryContentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryDirectoryContentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryDirectoryContentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Querydirectorycontents;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Querydirectorycontents;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+workspace}:queryDirectoryContents'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$QueryDirectoryContentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryDirectoryContentsResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the contents of a file (inside a Workspace).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.readFile({
     *       // Required. The file's full path including filename, relative to the workspace root.
     *       path: 'placeholder-value',
     *       // Required. The workspace's name.
     *       workspace:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fileContents": "my_fileContents"
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
    readFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Readfile,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    readFile(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Readfile,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReadFileResponse>;
    readFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Readfile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    readFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Readfile,
      options: MethodOptions | BodyResponseCallback<Schema$ReadFileResponse>,
      callback: BodyResponseCallback<Schema$ReadFileResponse>
    ): void;
    readFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Readfile,
      callback: BodyResponseCallback<Schema$ReadFileResponse>
    ): void;
    readFile(callback: BodyResponseCallback<Schema$ReadFileResponse>): void;
    readFile(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Readfile
        | BodyResponseCallback<Schema$ReadFileResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReadFileResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReadFileResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReadFileResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Readfile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Readfile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+workspace}:readFile').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReadFileResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReadFileResponse>(parameters);
      }
    }

    /**
     * Deletes a directory (inside a Workspace) and all of its contents.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.removeDirectory({
     *       // Required. The workspace's name.
     *       workspace:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "path": "my_path"
     *         // }
     *       },
     *     });
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
    removeDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Removedirectory,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeDirectory(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Removedirectory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    removeDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Removedirectory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Removedirectory,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeDirectory(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Removedirectory,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeDirectory(callback: BodyResponseCallback<Schema$Empty>): void;
    removeDirectory(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Removedirectory
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Removedirectory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Removedirectory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+workspace}:removeDirectory').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
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
     * Deletes a file (inside a Workspace).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.removeFile({
     *       // Required. The workspace's name.
     *       workspace:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "path": "my_path"
     *         // }
     *       },
     *     });
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
    removeFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Removefile,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeFile(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Removefile,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    removeFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Removefile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Removefile,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Removefile,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeFile(callback: BodyResponseCallback<Schema$Empty>): void;
    removeFile(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Removefile
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Removefile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Removefile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+workspace}:removeFile').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
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
     * Performs a Git reset for uncommitted files in a Workspace.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *   const res = await dataform.projects.locations.repositories.workspaces.reset({
     *     // Required. The workspace's name.
     *     name: 'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clean": false,
     *       //   "paths": []
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
    reset(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Reset,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reset(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Reset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    reset(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Reset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Reset,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Reset,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reset(callback: BodyResponseCallback<Schema$Empty>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Reset
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Reset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:reset').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "permissions": []
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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

    /**
     * Writes to a file (inside a Workspace).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataform.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataform = google.dataform('v1beta1');
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
     *     await dataform.projects.locations.repositories.workspaces.writeFile({
     *       // Required. The workspace's name.
     *       workspace:
     *         'projects/my-project/locations/my-location/repositories/my-repositorie/workspaces/my-workspace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "contents": "my_contents",
     *         //   "path": "my_path"
     *         // }
     *       },
     *     });
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
    writeFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Writefile,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    writeFile(
      params?: Params$Resource$Projects$Locations$Repositories$Workspaces$Writefile,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WriteFileResponse>;
    writeFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Writefile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    writeFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Writefile,
      options: MethodOptions | BodyResponseCallback<Schema$WriteFileResponse>,
      callback: BodyResponseCallback<Schema$WriteFileResponse>
    ): void;
    writeFile(
      params: Params$Resource$Projects$Locations$Repositories$Workspaces$Writefile,
      callback: BodyResponseCallback<Schema$WriteFileResponse>
    ): void;
    writeFile(callback: BodyResponseCallback<Schema$WriteFileResponse>): void;
    writeFile(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Repositories$Workspaces$Writefile
        | BodyResponseCallback<Schema$WriteFileResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WriteFileResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WriteFileResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$WriteFileResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Repositories$Workspaces$Writefile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Repositories$Workspaces$Writefile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+workspace}:writeFile').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['workspace'],
        pathParams: ['workspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WriteFileResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WriteFileResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Commit
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommitWorkspaceChangesRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Create
    extends StandardParameters {
    /**
     * Required. The repository in which to create the workspace. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the workspace, which will become the final component of the workspace's resource name.
     */
    workspaceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Workspace;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Delete
    extends StandardParameters {
    /**
     * Required. The workspace resource's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilediff
    extends StandardParameters {
    /**
     * Required. The file's full path including filename, relative to the workspace root.
     */
    path?: string;
    /**
     * Required. The workspace's name.
     */
    workspace?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchfilegitstatuses
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Fetchgitaheadbehind
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    name?: string;
    /**
     * Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used.
     */
    remoteBranch?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Get
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Installnpmpackages
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    workspace?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstallNpmPackagesRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$List
    extends StandardParameters {
    /**
     * Optional. Filter for the returned list.
     */
    filter?: string;
    /**
     * Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The repository in which to list workspaces. Must be in the format `projects/x/locations/x/repositories/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Makedirectory
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    workspace?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MakeDirectoryRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Movedirectory
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    workspace?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MoveDirectoryRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Movefile
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    workspace?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MoveFileRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Pull
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PullGitCommitsRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Push
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PushGitCommitsRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Querydirectorycontents
    extends StandardParameters {
    /**
     * Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used.
     */
    path?: string;
    /**
     * Required. The workspace's name.
     */
    workspace?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Readfile
    extends StandardParameters {
    /**
     * Required. The file's full path including filename, relative to the workspace root.
     */
    path?: string;
    /**
     * Required. The workspace's name.
     */
    workspace?: string;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Removedirectory
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    workspace?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveDirectoryRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Removefile
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    workspace?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveFileRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Reset
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetWorkspaceChangesRequest;
  }
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Repositories$Workspaces$Writefile
    extends StandardParameters {
    /**
     * Required. The workspace's name.
     */
    workspace?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WriteFileRequest;
  }
}
