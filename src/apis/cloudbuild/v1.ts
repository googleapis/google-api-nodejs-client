/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudbuild_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
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
   * Cloud Build API
   *
   * Creates and manages builds on Google Cloud Platform.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudbuild = google.cloudbuild('v1');
   *
   * @namespace cloudbuild
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Cloudbuild
   */
  export class Cloudbuild {
    context: APIRequestContext;
    operations: Resource$Operations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.operations = new Resource$Operations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
   */
  export interface Schema$ArtifactObjects {
    /**
     * Cloud Storage bucket and optional object path, in the form &quot;gs://bucket/path/to/somewhere/&quot;. (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).  Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.
     */
    location?: string | null;
    /**
     * Path globs used to match files in the build&#39;s workspace.
     */
    paths?: string[] | null;
    /**
     * Output only. Stores timing information for pushing all artifact objects.
     */
    timing?: Schema$TimeSpan;
  }
  /**
   * An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file.
   */
  export interface Schema$ArtifactResult {
    /**
     * The file hash of the artifact.
     */
    fileHash?: Schema$FileHashes[];
    /**
     * The path of an artifact in a Google Cloud Storage bucket, with the generation number. For example, `gs://mybucket/path/to/output.jar#generation`.
     */
    location?: string | null;
  }
  /**
   * Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
   */
  export interface Schema$Artifacts {
    /**
     * A list of images to be pushed upon the successful completion of all build steps.  The images will be pushed using the builder service account&#39;s credentials.  The digests of the pushed images will be stored in the Build resource&#39;s results field.  If any of the images fail to be pushed, the build is marked FAILURE.
     */
    images?: string[] | null;
    /**
     * A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.  Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account&#39;s credentials.  The location and generation of the uploaded objects will be stored in the Build resource&#39;s results field.  If any objects fail to be pushed, the build is marked FAILURE.
     */
    objects?: Schema$ArtifactObjects;
  }
  /**
   * A build resource in the Cloud Build API.  At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts.  Fields can include the following variables, which will be expanded when the build is created:  - $PROJECT_ID: the project ID of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or   resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
   */
  export interface Schema$Build {
    /**
     * Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
     */
    artifacts?: Schema$Artifacts;
    /**
     * Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.
     */
    buildTriggerId?: string | null;
    /**
     * Output only. Time at which the request to create the build was received.
     */
    createTime?: string | null;
    /**
     * Output only. Time at which execution of the build was finished.  The difference between finish_time and start_time is the duration of the build&#39;s execution.
     */
    finishTime?: string | null;
    /**
     * Output only. Unique identifier of the build.
     */
    id?: string | null;
    /**
     * A list of images to be pushed upon the successful completion of all build steps.  The images are pushed using the builder service account&#39;s credentials.  The digests of the pushed images will be stored in the `Build` resource&#39;s results field.  If any of the images fail to be pushed, the build status is marked `FAILURE`.
     */
    images?: string[] | null;
    /**
     * Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
     */
    logsBucket?: string | null;
    /**
     * Output only. URL to logs for this build in Google Cloud Console.
     */
    logUrl?: string | null;
    /**
     * Special options for this build.
     */
    options?: Schema$BuildOptions;
    /**
     * Output only. ID of the project.
     */
    projectId?: string | null;
    /**
     * Output only. Results of the build.
     */
    results?: Schema$Results;
    /**
     * Secrets to decrypt using Cloud Key Management Service.
     */
    secrets?: Schema$Secret[];
    /**
     * The location of the source files to build.
     */
    source?: Schema$Source;
    /**
     * Output only. A permanent fixed identifier for source.
     */
    sourceProvenance?: Schema$SourceProvenance;
    /**
     * Output only. Time at which execution of the build was started.
     */
    startTime?: string | null;
    /**
     * Output only. Status of the build.
     */
    status?: string | null;
    /**
     * Output only. Customer-readable message about the current status.
     */
    statusDetail?: string | null;
    /**
     * Required. The operations to be performed on the workspace.
     */
    steps?: Schema$BuildStep[];
    /**
     * Substitutions data for `Build` resource.
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Tags for annotation of a `Build`. These are not docker tags.
     */
    tags?: string[] | null;
    /**
     * Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`.  Default time is ten minutes.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for phases of the build. Valid keys are:  * BUILD: time to execute all build steps * PUSH: time to push all specified images. * FETCHSOURCE: time to fetch source.  If the build does not specify source or images, these keys will not be included.
     */
    timing?: {[key: string]: Schema$TimeSpan} | null;
  }
  /**
   * Metadata for build operations.
   */
  export interface Schema$BuildOperationMetadata {
    /**
     * The build that the operation is tracking.
     */
    build?: Schema$Build;
  }
  /**
   * Optional arguments to enable specific features of builds.
   */
  export interface Schema$BuildOptions {
    /**
     * Requested disk size for the VM that runs the build. Note that this is *NOT* &quot;disk free&quot;; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 1000GB; builds that request more than the maximum are rejected with an error.
     */
    diskSizeGb?: string | null;
    /**
     * A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value.  The elements are of the form &quot;KEY=VALUE&quot; for the environment variable &quot;KEY&quot; being given the value &quot;VALUE&quot;.
     */
    env?: string[] | null;
    /**
     * Option to specify the logging mode, which determines where the logs are stored.
     */
    logging?: string | null;
    /**
     * Option to define build log streaming behavior to Google Cloud Storage.
     */
    logStreamingOption?: string | null;
    /**
     * Compute Engine machine type on which to run the build.
     */
    machineType?: string | null;
    /**
     * Requested verifiability options.
     */
    requestedVerifyOption?: string | null;
    /**
     * A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build&#39;s `Secret`. These variables will be available to all build steps in this build.
     */
    secretEnv?: string[] | null;
    /**
     * Requested hash for SourceProvenance.
     */
    sourceProvenanceHash?: string[] | null;
    /**
     * Option to specify behavior when there is an error in the substitution checks.
     */
    substitutionOption?: string | null;
    /**
     * Global list of volumes to mount for ALL build steps  Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step.  Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$Volume[];
    /**
     * Option to specify a `WorkerPool` for the build. User specifies the pool with the format &quot;[WORKERPOOL_PROJECT_ID]/[WORKERPOOL_NAME]&quot;. This is an experimental field.
     */
    workerPool?: string | null;
  }
  /**
   * A step in the build pipeline.
   */
  export interface Schema$BuildStep {
    /**
     * A list of arguments that will be presented to the step when it is started.  If the image used to run the step&#39;s container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.
     */
    args?: string[] | null;
    /**
     * Working directory to use when running this step&#39;s container.  If this value is a relative path, it is relative to the build&#39;s working directory. If this value is absolute, it may be outside the build&#39;s working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified.  If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step&#39;s execution.
     */
    dir?: string | null;
    /**
     * Entrypoint to be used instead of the build step image&#39;s default entrypoint. If unset, the image&#39;s default entrypoint is used.
     */
    entrypoint?: string | null;
    /**
     * A list of environment variable definitions to be used when running a step.  The elements are of the form &quot;KEY=VALUE&quot; for the environment variable &quot;KEY&quot; being given the value &quot;VALUE&quot;.
     */
    env?: string[] | null;
    /**
     * Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.
     */
    id?: string | null;
    /**
     * Required. The name of the container image that will run this particular build step.  If the image is available in the host&#39;s Docker daemon&#39;s cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account&#39;s credentials if necessary.  The Docker daemon&#39;s cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like &quot;ubuntu&quot;, &quot;debian&quot;, but they will be refreshed at the time you attempt to use them.  If you built an image in a previous build step, it will be stored in the host&#39;s Docker daemon&#39;s cache and is available to use as the name for a later build step.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pulling this build step&#39;s builder image only.
     */
    pullTiming?: Schema$TimeSpan;
    /**
     * A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build&#39;s `Secret`.
     */
    secretEnv?: string[] | null;
    /**
     * Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.
     */
    status?: string | null;
    /**
     * Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for executing this build step.
     */
    timing?: Schema$TimeSpan;
    /**
     * List of volumes to mount into the build step.  Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded.  Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$Volume[];
    /**
     * The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.
     */
    waitFor?: string[] | null;
  }
  /**
   * Configuration for an automated build in response to source repository changes.
   */
  export interface Schema$BuildTrigger {
    /**
     * Contents of the build template.
     */
    build?: Schema$Build;
    /**
     * Output only. Time when the trigger was created.
     */
    createTime?: string | null;
    /**
     * Human-readable description of this trigger.
     */
    description?: string | null;
    /**
     * If true, the trigger will never result in a build.
     */
    disabled?: boolean | null;
    /**
     * Path, from the source root, to a file whose contents is used for the template.
     */
    filename?: string | null;
    /**
     * GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received.
     */
    github?: Schema$GitHubEventsConfig;
    /**
     * Output only. Unique identifier of the trigger.
     */
    id?: string | null;
    /**
     * ignored_files and included_files are file glob matches using http://godoc/pkg/path/filepath#Match extended with support for &quot;**&quot;.  If ignored_files and changed files are both empty, then they are not used to determine whether or not to trigger a build.  If ignored_files is not empty, then we ignore any files that match any of the ignored_file globs. If the change has no files that are outside of the ignored_files globs, then we do not trigger a build.
     */
    ignoredFiles?: string[] | null;
    /**
     * If any of the files altered in the commit pass the ignored_files filter and included_files is empty, then as far as this filter is concerned, we should trigger the build.  If any of the files altered in the commit pass the ignored_files filter and included_files is not empty, then we make sure that at least one of those files matches a included_files glob. If not, then we do not trigger a build.
     */
    includedFiles?: string[] | null;
    /**
     * User assigned name of the trigger. Must be unique within the project.
     */
    name?: string | null;
    /**
     * Substitutions data for Build resource.
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Tags for annotation of a `BuildTrigger`
     */
    tags?: string[] | null;
    /**
     * Template describing the types of source changes to trigger a build.  Branch and tag names in trigger templates are interpreted as regular expressions. Any branch or tag change that matches that regular expression will trigger a build.
     */
    triggerTemplate?: Schema$RepoSource;
  }
  /**
   * An image built by the pipeline.
   */
  export interface Schema$BuiltImage {
    /**
     * Docker Registry 2.0 digest.
     */
    digest?: string | null;
    /**
     * Name used to push the container image to Google Container Registry, as presented to `docker push`.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pushing the specified image.
     */
    pushTiming?: Schema$TimeSpan;
  }
  /**
   * Request to cancel an ongoing build.
   */
  export interface Schema$CancelBuildRequest {}
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.
   */
  export interface Schema$FileHashes {
    /**
     * Collection of file hashes.
     */
    fileHash?: Schema$Hash[];
  }
  /**
   * GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received.  This message is experimental.
   */
  export interface Schema$GitHubEventsConfig {
    /**
     * The installationID that emits the GitHub event.
     */
    installationId?: string | null;
    /**
     * Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is &quot;cloud-builders&quot;.
     */
    name?: string | null;
    /**
     * Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is &quot;googlecloudplatform&quot;.
     */
    owner?: string | null;
    /**
     * filter to match changes in pull requests.
     */
    pullRequest?: Schema$PullRequestFilter;
    /**
     * filter to match changes in refs like branches, tags.
     */
    push?: Schema$PushFilter;
  }
  /**
   * Container message for hash values.
   */
  export interface Schema$Hash {
    /**
     * The type of hash that was performed.
     */
    type?: string | null;
    /**
     * The hash value.
     */
    value?: string | null;
  }
  /**
   * Response including listed builds.
   */
  export interface Schema$ListBuildsResponse {
    /**
     * Builds will be sorted by `create_time`, descending.
     */
    builds?: Schema$Build[];
    /**
     * Token to receive the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response containing existing `BuildTriggers`.
   */
  export interface Schema$ListBuildTriggersResponse {
    /**
     * Token to receive the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * `BuildTriggers` for the project, sorted by `create_time` descending.
     */
    triggers?: Schema$BuildTrigger[];
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
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * PullRequestFilter contains filter properties for matching GitHub Pull Requests.
   */
  export interface Schema$PullRequestFilter {
    /**
     * Regex of branches to match.  The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branch?: string | null;
    /**
     * Whether to block builds on a &quot;/gcbrun&quot; comment from a repository owner or collaborator.
     */
    commentControl?: string | null;
  }
  /**
   * Push contains filter properties for matching GitHub git pushes.
   */
  export interface Schema$PushFilter {
    /**
     * Regexes matching branches to build.  The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branch?: string | null;
    /**
     * Regexes matching tags to build.  The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    tag?: string | null;
  }
  /**
   * Location of the source in a Google Cloud Source Repository.
   */
  export interface Schema$RepoSource {
    /**
     * Regex matching branches to build.  The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branchName?: string | null;
    /**
     * Explicit commit SHA to build.
     */
    commitSha?: string | null;
    /**
     * Directory, relative to the source root, in which to run the build.  This must be a relative path. If a step&#39;s `dir` is specified and is an absolute path, this value is ignored for that step&#39;s execution.
     */
    dir?: string | null;
    /**
     * ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.
     */
    projectId?: string | null;
    /**
     * Name of the Cloud Source Repository. If omitted, the name &quot;default&quot; is assumed.
     */
    repoName?: string | null;
    /**
     * Regex matching tags to build.  The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    tagName?: string | null;
  }
  /**
   * Artifacts created by the build pipeline.
   */
  export interface Schema$Results {
    /**
     * Path to the artifact manifest. Only populated when artifacts are uploaded.
     */
    artifactManifest?: string | null;
    /**
     * Time to push all non-container artifacts.
     */
    artifactTiming?: Schema$TimeSpan;
    /**
     * List of build step digests, in the order corresponding to build step indices.
     */
    buildStepImages?: string[] | null;
    /**
     * List of build step outputs, produced by builder images, in the order corresponding to build step indices.  [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored.
     */
    buildStepOutputs?: string[] | null;
    /**
     * Container images that were built as a part of the build.
     */
    images?: Schema$BuiltImage[];
    /**
     * Number of artifacts uploaded. Only populated when artifacts are uploaded.
     */
    numArtifacts?: string | null;
  }
  /**
   * Specifies a build to retry.
   */
  export interface Schema$RetryBuildRequest {}
  /**
   * Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value.
   */
  export interface Schema$Secret {
    /**
     * Cloud KMS key name to use to decrypt these envs.
     */
    kmsKeyName?: string | null;
    /**
     * Map of environment variable name to its encrypted value.  Secret environment variables must be unique across all of a build&#39;s secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build&#39;s secrets.
     */
    secretEnv?: {[key: string]: string} | null;
  }
  /**
   * Location of the source in a supported storage service.
   */
  export interface Schema$Source {
    /**
     * If provided, get the source from this location in a Cloud Source Repository.
     */
    repoSource?: Schema$RepoSource;
    /**
     * If provided, get the source from this location in Google Cloud Storage.
     */
    storageSource?: Schema$StorageSource;
  }
  /**
   * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
   */
  export interface Schema$SourceProvenance {
    /**
     * Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`.  The keys to this map are file paths used as build source and the values contain the hash values for those files.  If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.
     */
    fileHashes?: {[key: string]: Schema$FileHashes} | null;
    /**
     * A copy of the build&#39;s `source.repo_source`, if exists, with any revisions resolved.
     */
    resolvedRepoSource?: Schema$RepoSource;
    /**
     * A copy of the build&#39;s `source.storage_source`, if exists, with any generations resolved.
     */
    resolvedStorageSource?: Schema$StorageSource;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Location of the source in an archive file in Google Cloud Storage.
   */
  export interface Schema$StorageSource {
    /**
     * Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string | null;
    /**
     * Google Cloud Storage object containing the source.  This object must be a gzipped archive file (`.tar.gz`) containing source to build.
     */
    object?: string | null;
  }
  /**
   * Start and end times for a build execution phase.
   */
  export interface Schema$TimeSpan {
    /**
     * End of time span.
     */
    endTime?: string | null;
    /**
     * Start of time span.
     */
    startTime?: string | null;
  }
  /**
   * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
   */
  export interface Schema$Volume {
    /**
     * Name of the volume to mount.  Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.
     */
    name?: string | null;
    /**
     * Path at which to mount the volume.  Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.
     */
    path?: string | null;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudbuild.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias cloudbuild.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * cloudbuild.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias cloudbuild.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudbuild.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias cloudbuild.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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

  export class Resource$Projects {
    context: APIRequestContext;
    builds: Resource$Projects$Builds;
    triggers: Resource$Projects$Triggers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.builds = new Resource$Projects$Builds(this.context);
      this.triggers = new Resource$Projects$Triggers(this.context);
    }
  }

  export class Resource$Projects$Builds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudbuild.projects.builds.cancel
     * @desc Cancels a build in progress.
     * @alias cloudbuild.projects.builds.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id ID of the build.
     * @param {string} params.projectId ID of the project.
     * @param {().CancelBuildRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Builds$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    cancel(
      params: Params$Resource$Projects$Builds$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    cancel(
      params: Params$Resource$Projects$Builds$Cancel,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Build>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$Cancel
        | BodyResponseCallback<Schema$Build>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback?: BodyResponseCallback<Schema$Build>
    ): void | GaxiosPromise<Schema$Build> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Builds$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/builds/{id}:cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'id'],
        pathParams: ['id', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Build>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * cloudbuild.projects.builds.create
     * @desc Starts a build with the specified configuration.  This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
     * @alias cloudbuild.projects.builds.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId ID of the project.
     * @param {().Build} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Builds$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Builds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Builds$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Builds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/builds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * cloudbuild.projects.builds.get
     * @desc Returns information about a previously requested build.  The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
     * @alias cloudbuild.projects.builds.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id ID of the build.
     * @param {string} params.projectId ID of the project.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Builds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    get(
      params: Params$Resource$Projects$Builds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(
      params: Params$Resource$Projects$Builds$Get,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(callback: BodyResponseCallback<Schema$Build>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$Get
        | BodyResponseCallback<Schema$Build>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback?: BodyResponseCallback<Schema$Build>
    ): void | GaxiosPromise<Schema$Build> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Builds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/builds/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'id'],
        pathParams: ['id', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Build>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * cloudbuild.projects.builds.list
     * @desc Lists previously requested builds.  Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
     * @alias cloudbuild.projects.builds.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The raw filter text to constrain the results.
     * @param {integer=} params.pageSize Number of results to return in the list.
     * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
     * @param {string} params.projectId ID of the project.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Builds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildsResponse>;
    list(
      params: Params$Resource$Projects$Builds$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListBuildsResponse>,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Builds$List,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBuildsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$List
        | BodyResponseCallback<Schema$ListBuildsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBuildsResponse>,
      callback?: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void | GaxiosPromise<Schema$ListBuildsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Builds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/builds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListBuildsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListBuildsResponse>(parameters);
      }
    }

    /**
     * cloudbuild.projects.builds.retry
     * @desc Creates a new build based on the specified build.  This method creates a new build using the original build request, which may or may not result in an identical build.  For triggered builds:  * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision.  For non-triggered builds that specify `RepoSource`:  * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source.  For builds that specify `StorageSource`:  * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
     * @alias cloudbuild.projects.builds.retry
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Build ID of the original build.
     * @param {string} params.projectId ID of the project.
     * @param {().RetryBuildRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    retry(
      params?: Params$Resource$Projects$Builds$Retry,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    retry(
      params: Params$Resource$Projects$Builds$Retry,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(
      params: Params$Resource$Projects$Builds$Retry,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(callback: BodyResponseCallback<Schema$Operation>): void;
    retry(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$Retry
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Builds$Retry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$Retry;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/builds/{id}:retry'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'id'],
        pathParams: ['id', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Builds$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the build.
     */
    id?: string;
    /**
     * ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelBuildRequest;
  }
  export interface Params$Resource$Projects$Builds$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Build;
  }
  export interface Params$Resource$Projects$Builds$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the build.
     */
    id?: string;
    /**
     * ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Builds$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The raw filter text to constrain the results.
     */
    filter?: string;
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Builds$Retry
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Build ID of the original build.
     */
    id?: string;
    /**
     * ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetryBuildRequest;
  }

  export class Resource$Projects$Triggers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudbuild.projects.triggers.create
     * @desc Creates a new `BuildTrigger`.  This API is experimental.
     * @alias cloudbuild.projects.triggers.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId ID of the project for which to configure automatic builds.
     * @param {().BuildTrigger} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Triggers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    create(
      params: Params$Resource$Projects$Triggers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    create(
      params: Params$Resource$Projects$Triggers$Create,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    create(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Create
        | BodyResponseCallback<Schema$BuildTrigger>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>,
      callback?: BodyResponseCallback<Schema$BuildTrigger>
    ): void | GaxiosPromise<Schema$BuildTrigger> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/triggers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildTrigger>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * cloudbuild.projects.triggers.delete
     * @desc Deletes a `BuildTrigger` by its project ID and trigger ID.  This API is experimental.
     * @alias cloudbuild.projects.triggers.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId ID of the project that owns the trigger.
     * @param {string} params.triggerId ID of the `BuildTrigger` to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Triggers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Triggers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Triggers$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'triggerId'],
        pathParams: ['projectId', 'triggerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * cloudbuild.projects.triggers.get
     * @desc Returns information about a `BuildTrigger`.  This API is experimental.
     * @alias cloudbuild.projects.triggers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId ID of the project that owns the trigger.
     * @param {string} params.triggerId ID of the `BuildTrigger` to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Triggers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    get(
      params: Params$Resource$Projects$Triggers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    get(
      params: Params$Resource$Projects$Triggers$Get,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    get(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Get
        | BodyResponseCallback<Schema$BuildTrigger>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>,
      callback?: BodyResponseCallback<Schema$BuildTrigger>
    ): void | GaxiosPromise<Schema$BuildTrigger> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'triggerId'],
        pathParams: ['projectId', 'triggerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildTrigger>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * cloudbuild.projects.triggers.list
     * @desc Lists existing `BuildTrigger`s.  This API is experimental.
     * @alias cloudbuild.projects.triggers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Number of results to return in the list.
     * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
     * @param {string} params.projectId ID of the project for which to list BuildTriggers.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Triggers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildTriggersResponse>;
    list(
      params: Params$Resource$Projects$Triggers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>,
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Triggers$List,
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$List
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>,
      callback?: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void | GaxiosPromise<Schema$ListBuildTriggersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/triggers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListBuildTriggersResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListBuildTriggersResponse>(parameters);
      }
    }

    /**
     * cloudbuild.projects.triggers.patch
     * @desc Updates a `BuildTrigger` by its project ID and trigger ID.  This API is experimental.
     * @alias cloudbuild.projects.triggers.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId ID of the project that owns the trigger.
     * @param {string} params.triggerId ID of the `BuildTrigger` to update.
     * @param {().BuildTrigger} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Triggers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    patch(
      params: Params$Resource$Projects$Triggers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    patch(
      params: Params$Resource$Projects$Triggers$Patch,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    patch(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Patch
        | BodyResponseCallback<Schema$BuildTrigger>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>,
      callback?: BodyResponseCallback<Schema$BuildTrigger>
    ): void | GaxiosPromise<Schema$BuildTrigger> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'triggerId'],
        pathParams: ['projectId', 'triggerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildTrigger>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * cloudbuild.projects.triggers.run
     * @desc Runs a `BuildTrigger` at a particular source revision.
     * @alias cloudbuild.projects.triggers.run
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId ID of the project.
     * @param {string} params.triggerId ID of the trigger.
     * @param {().RepoSource} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    run(
      params?: Params$Resource$Projects$Triggers$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    run(
      params: Params$Resource$Projects$Triggers$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Projects$Triggers$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Run
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}:run'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'triggerId'],
        pathParams: ['projectId', 'triggerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Triggers$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the project for which to configure automatic builds.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildTrigger;
  }
  export interface Params$Resource$Projects$Triggers$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * ID of the `BuildTrigger` to delete.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Triggers$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * ID of the `BuildTrigger` to get.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Triggers$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * ID of the project for which to list BuildTriggers.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Triggers$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * ID of the `BuildTrigger` to update.
     */
    triggerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildTrigger;
  }
  export interface Params$Resource$Projects$Triggers$Run
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the project.
     */
    projectId?: string;
    /**
     * ID of the trigger.
     */
    triggerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RepoSource;
  }
}
