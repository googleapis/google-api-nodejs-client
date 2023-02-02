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

export namespace cloudbuild_v1 {
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
   * Cloud Build API
   *
   * Creates and manages builds on Google Cloud Platform.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudbuild = google.cloudbuild('v1');
   * ```
   */
  export class Cloudbuild {
    context: APIRequestContext;
    githubDotComWebhook: Resource$Githubdotcomwebhook;
    locations: Resource$Locations;
    operations: Resource$Operations;
    projects: Resource$Projects;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.githubDotComWebhook = new Resource$Githubdotcomwebhook(this.context);
      this.locations = new Resource$Locations(this.context);
      this.operations = new Resource$Operations(this.context);
      this.projects = new Resource$Projects(this.context);
      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * ApprovalConfig describes configuration for manual approval of a build.
   */
  export interface Schema$ApprovalConfig {
    /**
     * Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.
     */
    approvalRequired?: boolean | null;
  }
  /**
   * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
   */
  export interface Schema$ApprovalResult {
    /**
     * Output only. The time when the approval decision was made.
     */
    approvalTime?: string | null;
    /**
     * Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called.
     */
    approverAccount?: string | null;
    /**
     * Optional. An optional comment for this manual approval result.
     */
    comment?: string | null;
    /**
     * Required. The decision of this manual approval.
     */
    decision?: string | null;
    /**
     * Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build.
     */
    url?: string | null;
  }
  /**
   * Request to approve or reject a pending build.
   */
  export interface Schema$ApproveBuildRequest {
    /**
     * Approval decision and metadata.
     */
    approvalResult?: Schema$ApprovalResult;
  }
  /**
   * Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
   */
  export interface Schema$ArtifactObjects {
    /**
     * Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.
     */
    location?: string | null;
    /**
     * Path globs used to match files in the build's workspace.
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
     * A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE.
     */
    images?: string[] | null;
    /**
     * A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE.
     */
    mavenArtifacts?: Schema$MavenArtifact[];
    /**
     * A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE.
     */
    objects?: Schema$ArtifactObjects;
    /**
     * A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE.
     */
    pythonPackages?: Schema$PythonPackage[];
  }
  /**
   * RPC request object accepted by BatchCreateBitbucketServerConnectedRepositories RPC method.
   */
  export interface Schema$BatchCreateBitbucketServerConnectedRepositoriesRequest {
    /**
     * Required. Requests to connect Bitbucket Server repositories.
     */
    requests?: Schema$CreateBitbucketServerConnectedRepositoryRequest[];
  }
  /**
   * Response of BatchCreateBitbucketServerConnectedRepositories RPC method including all successfully connected Bitbucket Server repositories.
   */
  export interface Schema$BatchCreateBitbucketServerConnectedRepositoriesResponse {
    /**
     * The connected Bitbucket Server repositories.
     */
    bitbucketServerConnectedRepositories?: Schema$BitbucketServerConnectedRepository[];
  }
  /**
   * Metadata for `BatchCreateBitbucketServerConnectedRepositories` operation.
   */
  export interface Schema$BatchCreateBitbucketServerConnectedRepositoriesResponseMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * The name of the `BitbucketServerConfig` that added connected repositories. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{config\}`
     */
    config?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
  }
  /**
   * RPC request object accepted by BatchCreateGitLabConnectedRepositories RPC method.
   */
  export interface Schema$BatchCreateGitLabConnectedRepositoriesRequest {
    /**
     * Required. Requests to connect GitLab repositories.
     */
    requests?: Schema$CreateGitLabConnectedRepositoryRequest[];
  }
  /**
   * Response of BatchCreateGitLabConnectedRepositories RPC method.
   */
  export interface Schema$BatchCreateGitLabConnectedRepositoriesResponse {
    /**
     * The GitLab connected repository requests' responses.
     */
    gitlabConnectedRepositories?: Schema$GitLabConnectedRepository[];
  }
  /**
   * Metadata for `BatchCreateGitLabConnectedRepositories` operation.
   */
  export interface Schema$BatchCreateGitLabConnectedRepositoriesResponseMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * The name of the `GitLabConfig` that added connected repositories. Format: `projects/{project\}/locations/{location\}/gitLabConfigs/{config\}`
     */
    config?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
  }
  /**
   * BitbucketServerConfig represents the configuration for a Bitbucket Server.
   */
  export interface Schema$BitbucketServerConfig {
    /**
     * Required. Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed. If you need to change it, please create another BitbucketServerConfig.
     */
    apiKey?: string | null;
    /**
     * Output only. Connected Bitbucket Server repositories for this config.
     */
    connectedRepositories?: Schema$BitbucketServerRepositoryId[];
    /**
     * Time when the config was created.
     */
    createTime?: string | null;
    /**
     * Required. Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed. If you need to change it, please create another BitbucketServerConfig.
     */
    hostUri?: string | null;
    /**
     * The resource name for the config.
     */
    name?: string | null;
    /**
     * Optional. The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection. This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty, no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format `projects/{project\}/global/networks/{network\}`, where {project\} is a project number or id and {network\} is the name of a VPC network in the project.
     */
    peeredNetwork?: string | null;
    /**
     * Required. Secret Manager secrets needed by the config.
     */
    secrets?: Schema$BitbucketServerSecrets;
    /**
     * Optional. SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.
     */
    sslCa?: string | null;
    /**
     * Username of the account Cloud Build will use on Bitbucket Server.
     */
    username?: string | null;
    /**
     * Output only. UUID included in webhook requests. The UUID is used to look up the corresponding config.
     */
    webhookKey?: string | null;
  }
  /**
   * / BitbucketServerConnectedRepository represents a connected Bitbucket Server / repository.
   */
  export interface Schema$BitbucketServerConnectedRepository {
    /**
     * The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{config\}`
     */
    parent?: string | null;
    /**
     * The Bitbucket Server repositories to connect.
     */
    repo?: Schema$BitbucketServerRepositoryId;
    /**
     * Output only. The status of the repo connection request.
     */
    status?: Schema$Status;
  }
  /**
   * BitbucketServerRepository represents a repository hosted on a Bitbucket Server.
   */
  export interface Schema$BitbucketServerRepository {
    /**
     * Link to the browse repo page on the Bitbucket Server instance.
     */
    browseUri?: string | null;
    /**
     * Description of the repository.
     */
    description?: string | null;
    /**
     * Display name of the repository.
     */
    displayName?: string | null;
    /**
     * The resource name of the repository.
     */
    name?: string | null;
    /**
     * Identifier for a repository hosted on a Bitbucket Server.
     */
    repoId?: Schema$BitbucketServerRepositoryId;
  }
  /**
   * BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
   */
  export interface Schema$BitbucketServerRepositoryId {
    /**
     * Required. Identifier for the project storing the repository.
     */
    projectKey?: string | null;
    /**
     * Required. Identifier for the repository.
     */
    repoSlug?: string | null;
    /**
     * Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.
     */
    webhookId?: number | null;
  }
  /**
   * BitbucketServerSecrets represents the secrets in Secret Manager for a Bitbucket Server.
   */
  export interface Schema$BitbucketServerSecrets {
    /**
     * Required. The resource name for the admin access token's secret version.
     */
    adminAccessTokenVersionName?: string | null;
    /**
     * Required. The resource name for the read access token's secret version.
     */
    readAccessTokenVersionName?: string | null;
    /**
     * Required. Immutable. The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed. If you need to change it, please create another BitbucketServerConfig.
     */
    webhookSecretVersionName?: string | null;
  }
  /**
   * BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
   */
  export interface Schema$BitbucketServerTriggerConfig {
    /**
     * Output only. The BitbucketServerConfig specified in the bitbucket_server_config_resource field.
     */
    bitbucketServerConfig?: Schema$BitbucketServerConfig;
    /**
     * Required. The Bitbucket server config resource that this trigger config maps to.
     */
    bitbucketServerConfigResource?: string | null;
    /**
     * Required. Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".
     */
    projectKey?: string | null;
    /**
     * Filter to match changes in pull requests.
     */
    pullRequest?: Schema$PullRequestFilter;
    /**
     * Filter to match changes in refs like branches, tags.
     */
    push?: Schema$PushFilter;
    /**
     * Required. Slug of the repository. A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL. For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.
     */
    repoSlug?: string | null;
  }
  /**
   * A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
   */
  export interface Schema$Build {
    /**
     * Output only. Describes this build's approval configuration, status, and result.
     */
    approval?: Schema$BuildApproval;
    /**
     * Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
     */
    artifacts?: Schema$Artifacts;
    /**
     * Secrets and secret environment variables.
     */
    availableSecrets?: Schema$Secrets;
    /**
     * Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.
     */
    buildTriggerId?: string | null;
    /**
     * Output only. Time at which the request to create the build was received.
     */
    createTime?: string | null;
    /**
     * Output only. Contains information about the build when status=FAILURE.
     */
    failureInfo?: Schema$FailureInfo;
    /**
     * Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution.
     */
    finishTime?: string | null;
    /**
     * Output only. Unique identifier of the build.
     */
    id?: string | null;
    /**
     * A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`.
     */
    images?: string[] | null;
    /**
     * Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket\}/log-${build_id\}.txt`.
     */
    logsBucket?: string | null;
    /**
     * Output only. URL to logs for this build in Google Cloud Console.
     */
    logUrl?: string | null;
    /**
     * Output only. The 'Build' name with format: `projects/{project\}/locations/{location\}/builds/{build\}`, where {build\} is a unique identifier generated by the service.
     */
    name?: string | null;
    /**
     * Special options for this build.
     */
    options?: Schema$BuildOptions;
    /**
     * Output only. ID of the project.
     */
    projectId?: string | null;
    /**
     * TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time.
     */
    queueTtl?: string | null;
    /**
     * Output only. Results of the build.
     */
    results?: Schema$Results;
    /**
     * Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets
     */
    secrets?: Schema$Secret[];
    /**
     * IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}`. ACCOUNT can be email address or uniqueId of the service account.
     */
    serviceAccount?: string | null;
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
     * Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included.
     */
    timing?: {[key: string]: Schema$TimeSpan} | null;
    /**
     * Output only. Non-fatal problems encountered during the execution of the build.
     */
    warnings?: Schema$Warning[];
  }
  /**
   * BuildApproval describes a build's approval configuration, state, and result.
   */
  export interface Schema$BuildApproval {
    /**
     * Output only. Configuration for manual approval of this build.
     */
    config?: Schema$ApprovalConfig;
    /**
     * Output only. Result of manual approval for this Build.
     */
    result?: Schema$ApprovalResult;
    /**
     * Output only. The state of this build's approval.
     */
    state?: string | null;
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
     * Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error.
     */
    diskSizeGb?: string | null;
    /**
     * Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file.
     */
    dynamicSubstitutions?: boolean | null;
    /**
     * A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
     */
    env?: string[] | null;
    /**
     * Option to specify the logging mode, which determines if and where build logs are stored.
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
     * Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.
     */
    pool?: Schema$PoolOption;
    /**
     * Requested verifiability options.
     */
    requestedVerifyOption?: string | null;
    /**
     * A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build.
     */
    secretEnv?: string[] | null;
    /**
     * Requested hash for SourceProvenance.
     */
    sourceProvenanceHash?: string[] | null;
    /**
     * Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file.
     */
    substitutionOption?: string | null;
    /**
     * Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$Volume[];
    /**
     * This field deprecated; please use `pool.name` instead.
     */
    workerPool?: string | null;
  }
  /**
   * A step in the build pipeline.
   */
  export interface Schema$BuildStep {
    /**
     * Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.
     */
    allowExitCodes?: number[] | null;
    /**
     * Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.
     */
    allowFailure?: boolean | null;
    /**
     * A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.
     */
    args?: string[] | null;
    /**
     * Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.
     */
    dir?: string | null;
    /**
     * Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.
     */
    entrypoint?: string | null;
    /**
     * A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
     */
    env?: string[] | null;
    /**
     * Output only. Return code from running the step.
     */
    exitCode?: number | null;
    /**
     * Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.
     */
    id?: string | null;
    /**
     * Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pulling this build step's builder image only.
     */
    pullTiming?: Schema$TimeSpan;
    /**
     * A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.
     */
    script?: string | null;
    /**
     * A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.
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
     * List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.
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
     * Configuration for manual approval to start a build invocation of this BuildTrigger.
     */
    approvalConfig?: Schema$ApprovalConfig;
    /**
     * Autodetect build configuration. The following precedence is used (case insensitive): 1. cloudbuild.yaml 2. cloudbuild.yml 3. cloudbuild.json 4. Dockerfile Currently only available for GitHub App Triggers.
     */
    autodetect?: boolean | null;
    /**
     * BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
     */
    bitbucketServerTriggerConfig?: Schema$BitbucketServerTriggerConfig;
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
     * If true, the trigger will never automatically execute a build.
     */
    disabled?: boolean | null;
    /**
     * EventType allows the user to explicitly set the type of event to which this BuildTrigger should respond. This field will be validated against the rest of the configuration if it is set.
     */
    eventType?: string | null;
    /**
     * Path, from the source root, to the build configuration file (i.e. cloudbuild.yaml).
     */
    filename?: string | null;
    /**
     * A Common Expression Language string.
     */
    filter?: string | null;
    /**
     * The file source describing the local or remote Build template.
     */
    gitFileSource?: Schema$GitFileSource;
    /**
     * GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received. Mutually exclusive with `trigger_template`.
     */
    github?: Schema$GitHubEventsConfig;
    /**
     * GitLabEnterpriseEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab Enterprise event is received.
     */
    gitlabEnterpriseEventsConfig?: Schema$GitLabEventsConfig;
    /**
     * Output only. Unique identifier of the trigger.
     */
    id?: string | null;
    /**
     * ignored_files and included_files are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for "**". If ignored_files and changed files are both empty, then they are not used to determine whether or not to trigger a build. If ignored_files is not empty, then we ignore any files that match any of the ignored_file globs. If the change has no files that are outside of the ignored_files globs, then we do not trigger a build.
     */
    ignoredFiles?: string[] | null;
    /**
     * If set to INCLUDE_BUILD_LOGS_WITH_STATUS, log url will be shown on GitHub page when build status is final. Setting this field to INCLUDE_BUILD_LOGS_WITH_STATUS for non GitHub triggers results in INVALID_ARGUMENT error.
     */
    includeBuildLogs?: string | null;
    /**
     * If any of the files altered in the commit pass the ignored_files filter and included_files is empty, then as far as this filter is concerned, we should trigger the build. If any of the files altered in the commit pass the ignored_files filter and included_files is not empty, then we make sure that at least one of those files matches a included_files glob. If not, then we do not trigger a build.
     */
    includedFiles?: string[] | null;
    /**
     * User-assigned name of the trigger. Must be unique within the project. Trigger names must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character.
     */
    name?: string | null;
    /**
     * PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
     */
    pubsubConfig?: Schema$PubsubConfig;
    /**
     * The configuration of a trigger that creates a build whenever an event from Repo API is received.
     */
    repositoryEventConfig?: Schema$RepositoryEventConfig;
    /**
     * The `Trigger` name with format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`, where {trigger\} is a unique identifier generated by the service.
     */
    resourceName?: string | null;
    /**
     * The service account used for all user-controlled operations including UpdateBuildTrigger, RunBuildTrigger, CreateBuild, and CancelBuild. If no service account is set, then the standard Cloud Build service account ([PROJECT_NUM]@system.gserviceaccount.com) will be used instead. Format: `projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL\}`
     */
    serviceAccount?: string | null;
    /**
     * The repo and ref of the repository from which to build. This field is used only for those triggers that do not respond to SCM events. Triggers that respond to such events build source at whatever commit caused the event. This field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.
     */
    sourceToBuild?: Schema$GitRepoSource;
    /**
     * Substitutions for Build resource. The keys must match the following regular expression: `^_[A-Z0-9_]+$`.
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Tags for annotation of a `BuildTrigger`
     */
    tags?: string[] | null;
    /**
     * Template describing the types of source changes to trigger a build. Branch and tag names in trigger templates are interpreted as regular expressions. Any branch or tag change that matches that regular expression will trigger a build. Mutually exclusive with `github`.
     */
    triggerTemplate?: Schema$RepoSource;
    /**
     * WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL.
     */
    webhookConfig?: Schema$WebhookConfig;
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
  export interface Schema$CancelBuildRequest {
    /**
     * Required. ID of the build.
     */
    id?: string | null;
    /**
     * The name of the `Build` to cancel. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string | null;
    /**
     * Required. ID of the project.
     */
    projectId?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Metadata for `CreateBitbucketServerConfig` operation.
   */
  export interface Schema$CreateBitbucketServerConfigOperationMetadata {
    /**
     * The resource name of the BitbucketServerConfig to be created. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{id\}`.
     */
    bitbucketServerConfig?: string | null;
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
  }
  /**
   * Request to connect a repository from a connected Bitbucket Server host.
   */
  export interface Schema$CreateBitbucketServerConnectedRepositoryRequest {
    /**
     * Required. The Bitbucket Server repository to connect.
     */
    bitbucketServerConnectedRepository?: Schema$BitbucketServerConnectedRepository;
    /**
     * Required. The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{config\}`
     */
    parent?: string | null;
  }
  /**
   * Metadata for `CreateGithubEnterpriseConfig` operation.
   */
  export interface Schema$CreateGitHubEnterpriseConfigOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the GitHubEnterprise to be created. Format: `projects/{project\}/locations/{location\}/githubEnterpriseConfigs/{id\}`.
     */
    githubEnterpriseConfig?: string | null;
  }
  /**
   * Metadata for `CreateGitLabConfig` operation.
   */
  export interface Schema$CreateGitLabConfigOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the GitLabConfig to be created. Format: `projects/{project\}/locations/{location\}/gitlabConfigs/{id\}`.
     */
    gitlabConfig?: string | null;
  }
  /**
   * Request to connect a repository from a connected GitLab host.
   */
  export interface Schema$CreateGitLabConnectedRepositoryRequest {
    /**
     * Required. The GitLab repository to connect.
     */
    gitlabConnectedRepository?: Schema$GitLabConnectedRepository;
    /**
     * Required. The name of the `GitLabConfig` that adds connected repository. Format: `projects/{project\}/locations/{location\}/gitLabConfigs/{config\}`
     */
    parent?: string | null;
  }
  /**
   * Metadata for the `CreateWorkerPool` operation.
   */
  export interface Schema$CreateWorkerPoolOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the `WorkerPool` to create. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`.
     */
    workerPool?: string | null;
  }
  /**
   * Metadata for `DeleteBitbucketServerConfig` operation.
   */
  export interface Schema$DeleteBitbucketServerConfigOperationMetadata {
    /**
     * The resource name of the BitbucketServerConfig to be deleted. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{id\}`.
     */
    bitbucketServerConfig?: string | null;
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
  }
  /**
   * Metadata for `DeleteGitHubEnterpriseConfig` operation.
   */
  export interface Schema$DeleteGitHubEnterpriseConfigOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the GitHubEnterprise to be deleted. Format: `projects/{project\}/locations/{location\}/githubEnterpriseConfigs/{id\}`.
     */
    githubEnterpriseConfig?: string | null;
  }
  /**
   * Metadata for `DeleteGitLabConfig` operation.
   */
  export interface Schema$DeleteGitLabConfigOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the GitLabConfig to be created. Format: `projects/{project\}/locations/{location\}/gitlabConfigs/{id\}`.
     */
    gitlabConfig?: string | null;
  }
  /**
   * Metadata for the `DeleteWorkerPool` operation.
   */
  export interface Schema$DeleteWorkerPoolOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the `WorkerPool` being deleted. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`.
     */
    workerPool?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A fatal problem encountered during the execution of the build.
   */
  export interface Schema$FailureInfo {
    /**
     * Explains the failure issue in more detail using hard-coded text.
     */
    detail?: string | null;
    /**
     * The name of the failure.
     */
    type?: string | null;
  }
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
   * GitFileSource describes a file within a (possibly remote) code repository.
   */
  export interface Schema$GitFileSource {
    /**
     * The full resource name of the bitbucket server config. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{id\}`.
     */
    bitbucketServerConfig?: string | null;
    /**
     * The full resource name of the github enterprise config. Format: `projects/{project\}/locations/{location\}/githubEnterpriseConfigs/{id\}`. `projects/{project\}/githubEnterpriseConfigs/{id\}`.
     */
    githubEnterpriseConfig?: string | null;
    /**
     * The path of the file, with the repo root as the root of the path.
     */
    path?: string | null;
    /**
     * See RepoType above.
     */
    repoType?: string | null;
    /**
     * The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the filename (optional). This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.
     */
    revision?: string | null;
    /**
     * The URI of the repo. Either uri or repository can be specified. If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path.
     */
    uri?: string | null;
  }
  /**
   * GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
   */
  export interface Schema$GitHubEnterpriseConfig {
    /**
     * Required. The GitHub app id of the Cloud Build app on the GitHub Enterprise server.
     */
    appId?: string | null;
    /**
     * Output only. Time when the installation was associated with the project.
     */
    createTime?: string | null;
    /**
     * Name to display for this config.
     */
    displayName?: string | null;
    /**
     * The URL of the github enterprise host the configuration is for.
     */
    hostUrl?: string | null;
    /**
     * Optional. The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     */
    name?: string | null;
    /**
     * Optional. The network to be used when reaching out to the GitHub Enterprise server. The VPC network must be enabled for private service connection. This should be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, no network peering will occur and calls to the GitHub Enterprise server will be made over the public internet. Must be in the format `projects/{project\}/global/networks/{network\}`, where {project\} is a project number or id and {network\} is the name of a VPC network in the project.
     */
    peeredNetwork?: string | null;
    /**
     * Names of secrets in Secret Manager.
     */
    secrets?: Schema$GitHubEnterpriseSecrets;
    /**
     * Optional. SSL certificate to use for requests to GitHub Enterprise.
     */
    sslCa?: string | null;
    /**
     * The key that should be attached to webhook calls to the ReceiveWebhook endpoint.
     */
    webhookKey?: string | null;
  }
  /**
   * GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/.
   */
  export interface Schema$GitHubEnterpriseSecrets {
    /**
     * The resource name for the OAuth client ID secret in Secret Manager.
     */
    oauthClientIdName?: string | null;
    /**
     * The resource name for the OAuth client ID secret version in Secret Manager.
     */
    oauthClientIdVersionName?: string | null;
    /**
     * The resource name for the OAuth secret in Secret Manager.
     */
    oauthSecretName?: string | null;
    /**
     * The resource name for the OAuth secret secret version in Secret Manager.
     */
    oauthSecretVersionName?: string | null;
    /**
     * The resource name for the private key secret.
     */
    privateKeyName?: string | null;
    /**
     * The resource name for the private key secret version.
     */
    privateKeyVersionName?: string | null;
    /**
     * The resource name for the webhook secret in Secret Manager.
     */
    webhookSecretName?: string | null;
    /**
     * The resource name for the webhook secret secret version in Secret Manager.
     */
    webhookSecretVersionName?: string | null;
  }
  /**
   * GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received.
   */
  export interface Schema$GitHubEventsConfig {
    /**
     * Optional. The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     */
    enterpriseConfigResourceName?: string | null;
    /**
     * The installationID that emits the GitHub event.
     */
    installationId?: string | null;
    /**
     * Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
     */
    name?: string | null;
    /**
     * Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".
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
   * GitLabConfig represents the configuration for a GitLab integration.
   */
  export interface Schema$GitLabConfig {
    /**
     * Connected GitLab.com or GitLabEnterprise repositories for this config.
     */
    connectedRepositories?: Schema$GitLabRepositoryId[];
    /**
     * Output only. Time when the config was created.
     */
    createTime?: string | null;
    /**
     * Optional. GitLabEnterprise config.
     */
    enterpriseConfig?: Schema$GitLabEnterpriseConfig;
    /**
     * The resource name for the config.
     */
    name?: string | null;
    /**
     * Required. Secret Manager secrets needed by the config.
     */
    secrets?: Schema$GitLabSecrets;
    /**
     * Username of the GitLab.com or GitLab Enterprise account Cloud Build will use.
     */
    username?: string | null;
    /**
     * Output only. UUID included in webhook requests. The UUID is used to look up the corresponding config.
     */
    webhookKey?: string | null;
  }
  /**
   * GitLabConnectedRepository represents a GitLab connected repository request response.
   */
  export interface Schema$GitLabConnectedRepository {
    /**
     * The name of the `GitLabConfig` that added connected repository. Format: `projects/{project\}/locations/{location\}/gitLabConfigs/{config\}`
     */
    parent?: string | null;
    /**
     * The GitLab repositories to connect.
     */
    repo?: Schema$GitLabRepositoryId;
    /**
     * Output only. The status of the repo connection request.
     */
    status?: Schema$Status;
  }
  /**
   * GitLabEnterpriseConfig represents the configuration for a GitLabEnterprise integration.
   */
  export interface Schema$GitLabEnterpriseConfig {
    /**
     * Immutable. The URI of the GitlabEnterprise host.
     */
    hostUri?: string | null;
    /**
     * The Service Directory configuration to be used when reaching out to the GitLab Enterprise instance.
     */
    serviceDirectoryConfig?: Schema$ServiceDirectoryConfig;
    /**
     * The SSL certificate to use in requests to GitLab Enterprise instances.
     */
    sslCa?: string | null;
  }
  /**
   * GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
   */
  export interface Schema$GitLabEventsConfig {
    /**
     * Output only. The GitLabConfig specified in the gitlab_config_resource field.
     */
    gitlabConfig?: Schema$GitLabConfig;
    /**
     * The GitLab config resource that this trigger config maps to.
     */
    gitlabConfigResource?: string | null;
    /**
     * Namespace of the GitLab project.
     */
    projectNamespace?: string | null;
    /**
     * Filter to match changes in pull requests.
     */
    pullRequest?: Schema$PullRequestFilter;
    /**
     * Filter to match changes in refs like branches, tags.
     */
    push?: Schema$PushFilter;
  }
  /**
   * Proto Representing a GitLabRepository
   */
  export interface Schema$GitLabRepository {
    /**
     * Link to the browse repo page on the GitLab instance
     */
    browseUri?: string | null;
    /**
     * Description of the repository
     */
    description?: string | null;
    /**
     * Display name of the repository
     */
    displayName?: string | null;
    /**
     * The resource name of the repository
     */
    name?: string | null;
    /**
     * Identifier for a repository
     */
    repositoryId?: Schema$GitLabRepositoryId;
  }
  /**
   * GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise
   */
  export interface Schema$GitLabRepositoryId {
    /**
     * Required. Identifier for the repository. example: "namespace/project-slug", namespace is usually the username or group ID
     */
    id?: string | null;
    /**
     * Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.
     */
    webhookId?: number | null;
  }
  /**
   * GitLabSecrets represents the secrets in Secret Manager for a GitLab integration.
   */
  export interface Schema$GitLabSecrets {
    /**
     * Required. The resource name for the api access token’s secret version
     */
    apiAccessTokenVersion?: string | null;
    /**
     * Required. Immutable. API Key that will be attached to webhook requests from GitLab to Cloud Build.
     */
    apiKeyVersion?: string | null;
    /**
     * Required. The resource name for the read access token’s secret version
     */
    readAccessTokenVersion?: string | null;
    /**
     * Required. Immutable. The resource name for the webhook secret’s secret version. Once this field has been set, it cannot be changed. If you need to change it, please create another GitLabConfig.
     */
    webhookSecretVersion?: string | null;
  }
  /**
   * GitRepoSource describes a repo and ref of a code repository.
   */
  export interface Schema$GitRepoSource {
    /**
     * The full resource name of the bitbucket server config. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{id\}`.
     */
    bitbucketServerConfig?: string | null;
    /**
     * The full resource name of the github enterprise config. Format: `projects/{project\}/locations/{location\}/githubEnterpriseConfigs/{id\}`. `projects/{project\}/githubEnterpriseConfigs/{id\}`.
     */
    githubEnterpriseConfig?: string | null;
    /**
     * The branch or tag to use. Must start with "refs/" (required).
     */
    ref?: string | null;
    /**
     * See RepoType below.
     */
    repoType?: string | null;
    /**
     * The URI of the repo. Either uri or repository can be specified and is required.
     */
    uri?: string | null;
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
   * Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.
   */
  export interface Schema$InlineSecret {
    /**
     * Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.
     */
    envMap?: {[key: string]: string} | null;
    /**
     * Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/x/locations/x/keyRings/x/cryptoKeys/x
     */
    kmsKeyName?: string | null;
  }
  /**
   * RPC response object returned by ListBitbucketServerConfigs RPC method.
   */
  export interface Schema$ListBitbucketServerConfigsResponse {
    /**
     * A list of BitbucketServerConfigs
     */
    bitbucketServerConfigs?: Schema$BitbucketServerConfig[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * RPC response object returned by the ListBitbucketServerRepositories RPC method.
   */
  export interface Schema$ListBitbucketServerRepositoriesResponse {
    /**
     * List of Bitbucket Server repositories.
     */
    bitbucketServerRepositories?: Schema$BitbucketServerRepository[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
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
     * Token to receive the next page of results. This will be absent if the end of the response list has been reached.
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
   * RPC response object returned by ListGithubEnterpriseConfigs RPC method.
   */
  export interface Schema$ListGithubEnterpriseConfigsResponse {
    /**
     * A list of GitHubEnterpriseConfigs
     */
    configs?: Schema$GitHubEnterpriseConfig[];
  }
  /**
   * RPC response object returned by ListGitLabConfigs RPC method.
   */
  export interface Schema$ListGitLabConfigsResponse {
    /**
     * A list of GitLabConfigs
     */
    gitlabConfigs?: Schema$GitLabConfig[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * RPC response object returned by the ListGitLabRepositories RPC method.
   */
  export interface Schema$ListGitLabRepositoriesResponse {
    /**
     * List of GitLab repositories
     */
    gitlabRepositories?: Schema$GitLabRepository[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response containing existing `WorkerPools`.
   */
  export interface Schema$ListWorkerPoolsResponse {
    /**
     * Continuation token used to page through large result sets. Provide this value in a subsequent ListWorkerPoolsRequest to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * `WorkerPools` for the specified project.
     */
    workerPools?: Schema$WorkerPool[];
  }
  /**
   * A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
   */
  export interface Schema$MavenArtifact {
    /**
     * Maven `artifactId` value used when uploading the artifact to Artifact Registry.
     */
    artifactId?: string | null;
    /**
     * Maven `groupId` value used when uploading the artifact to Artifact Registry.
     */
    groupId?: string | null;
    /**
     * Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.
     */
    path?: string | null;
    /**
     * Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.
     */
    repository?: string | null;
    /**
     * Maven `version` value used when uploading the artifact to Artifact Registry.
     */
    version?: string | null;
  }
  /**
   * Defines the network configuration for the pool.
   */
  export interface Schema$NetworkConfig {
    /**
     * Option to configure network egress for the workers.
     */
    egressOption?: string | null;
    /**
     * Required. Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project\}/global/networks/{network\}`, where `{project\}` is a project number, such as `12345`, and `{network\}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/build/docs/private-pools/set-up-private-pool-environment)
     */
    peeredNetwork?: string | null;
    /**
     * Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used.
     */
    peeredNetworkIpRange?: string | null;
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
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
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
   * Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.
   */
  export interface Schema$PoolOption {
    /**
     * The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project\}/locations/{location\}/workerPools/{workerPoolId\}
     */
    name?: string | null;
  }
  /**
   * Configuration for a V1 `PrivatePool`.
   */
  export interface Schema$PrivatePoolV1Config {
    /**
     * Network configuration for the pool.
     */
    networkConfig?: Schema$NetworkConfig;
    /**
     * Machine configuration for the workers in the pool.
     */
    workerConfig?: Schema$WorkerConfig;
  }
  /**
   * Metadata for `ProcessAppManifestCallback` operation.
   */
  export interface Schema$ProcessAppManifestCallbackOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the GitHubEnterprise to be created. Format: `projects/{project\}/locations/{location\}/githubEnterpriseConfigs/{id\}`.
     */
    githubEnterpriseConfig?: string | null;
  }
  /**
   * PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
   */
  export interface Schema$PubsubConfig {
    /**
     * Service account that will make the push request.
     */
    serviceAccountEmail?: string | null;
    /**
     * Potential issues with the underlying Pub/Sub subscription configuration. Only populated on get requests.
     */
    state?: string | null;
    /**
     * Output only. Name of the subscription. Format is `projects/{project\}/subscriptions/{subscription\}`.
     */
    subscription?: string | null;
    /**
     * The name of the topic from which this subscription is receiving messages. Format is `projects/{project\}/topics/{topic\}`.
     */
    topic?: string | null;
  }
  /**
   * PullRequestFilter contains filter properties for matching GitHub Pull Requests.
   */
  export interface Schema$PullRequestFilter {
    /**
     * Regex of branches to match. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branch?: string | null;
    /**
     * Configure builds to run whether a repository owner or collaborator need to comment `/gcbrun`.
     */
    commentControl?: string | null;
    /**
     * If true, branches that do NOT match the git_ref will trigger a build.
     */
    invertRegex?: boolean | null;
  }
  /**
   * Push contains filter properties for matching GitHub git pushes.
   */
  export interface Schema$PushFilter {
    /**
     * Regexes matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branch?: string | null;
    /**
     * When true, only trigger a build if the revision regex does NOT match the git_ref regex.
     */
    invertRegex?: boolean | null;
    /**
     * Regexes matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    tag?: string | null;
  }
  /**
   * Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
   */
  export interface Schema$PythonPackage {
    /**
     * Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/x`, and sometimes additionally an `.asc` file.
     */
    paths?: string[] | null;
    /**
     * Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.
     */
    repository?: string | null;
  }
  /**
   * ReceiveTriggerWebhookResponse [Experimental] is the response object for the ReceiveTriggerWebhook method.
   */
  export interface Schema$ReceiveTriggerWebhookResponse {}
  /**
   * RPC request object accepted by RemoveBitbucketServerConnectedRepository RPC method.
   */
  export interface Schema$RemoveBitbucketServerConnectedRepositoryRequest {
    /**
     * The connected repository to remove.
     */
    connectedRepository?: Schema$BitbucketServerRepositoryId;
  }
  /**
   * RPC request object accepted by RemoveGitLabConnectedRepository RPC method.
   */
  export interface Schema$RemoveGitLabConnectedRepositoryRequest {
    /**
     * The connected repository to remove.
     */
    connectedRepository?: Schema$GitLabRepositoryId;
  }
  /**
   * The configuration of a trigger that creates a build whenever an event from Repo API is received.
   */
  export interface Schema$RepositoryEventConfig {
    /**
     * Filter to match changes in pull requests.
     */
    pullRequest?: Schema$PullRequestFilter;
    /**
     * Filter to match changes in refs like branches, tags.
     */
    push?: Schema$PushFilter;
    /**
     * The resource name of the Repo API resource.
     */
    repository?: string | null;
    /**
     * Output only. The type of the SCM vendor the repository points to.
     */
    repositoryType?: string | null;
  }
  /**
   * Location of the source in a Google Cloud Source Repository.
   */
  export interface Schema$RepoSource {
    /**
     * Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branchName?: string | null;
    /**
     * Explicit commit SHA to build.
     */
    commitSha?: string | null;
    /**
     * Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.
     */
    dir?: string | null;
    /**
     * Only trigger a build if the revision regex does NOT match the revision regex.
     */
    invertRegex?: boolean | null;
    /**
     * ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.
     */
    projectId?: string | null;
    /**
     * Name of the Cloud Source Repository.
     */
    repoName?: string | null;
    /**
     * Substitutions to use in a triggered build. Should only be used with RunBuildTrigger
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    tagName?: string | null;
  }
  /**
   * Artifacts created by the build pipeline.
   */
  export interface Schema$Results {
    /**
     * Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.
     */
    artifactManifest?: string | null;
    /**
     * Time to push all non-container artifacts to Cloud Storage.
     */
    artifactTiming?: Schema$TimeSpan;
    /**
     * List of build step digests, in the order corresponding to build step indices.
     */
    buildStepImages?: string[] | null;
    /**
     * List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored.
     */
    buildStepOutputs?: string[] | null;
    /**
     * Container images that were built as a part of the build.
     */
    images?: Schema$BuiltImage[];
    /**
     * Maven artifacts uploaded to Artifact Registry at the end of the build.
     */
    mavenArtifacts?: Schema$UploadedMavenArtifact[];
    /**
     * Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.
     */
    numArtifacts?: string | null;
    /**
     * Python artifacts uploaded to Artifact Registry at the end of the build.
     */
    pythonPackages?: Schema$UploadedPythonPackage[];
  }
  /**
   * Specifies a build to retry.
   */
  export interface Schema$RetryBuildRequest {
    /**
     * Required. Build ID of the original build.
     */
    id?: string | null;
    /**
     * The name of the `Build` to retry. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string | null;
    /**
     * Required. ID of the project.
     */
    projectId?: string | null;
  }
  /**
   * Specifies a build trigger to run and the source to use.
   */
  export interface Schema$RunBuildTriggerRequest {
    /**
     * Required. ID of the project.
     */
    projectId?: string | null;
    /**
     * Source to build against this trigger. Branch and tag names cannot consist of regular expressions.
     */
    source?: Schema$RepoSource;
    /**
     * Required. ID of the trigger.
     */
    triggerId?: string | null;
  }
  /**
   * Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.
   */
  export interface Schema$Secret {
    /**
     * Cloud KMS key name to use to decrypt these envs.
     */
    kmsKeyName?: string | null;
    /**
     * Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.
     */
    secretEnv?: {[key: string]: string} | null;
  }
  /**
   * Pairs a secret environment variable with a SecretVersion in Secret Manager.
   */
  export interface Schema$SecretManagerSecret {
    /**
     * Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step.
     */
    env?: string | null;
    /**
     * Resource name of the SecretVersion. In format: projects/x/secrets/x/versions/x
     */
    versionName?: string | null;
  }
  /**
   * Secrets and secret environment variables.
   */
  export interface Schema$Secrets {
    /**
     * Secrets encrypted with KMS key and the associated secret environment variable.
     */
    inline?: Schema$InlineSecret[];
    /**
     * Secrets in Secret Manager and associated secret environment variable.
     */
    secretManager?: Schema$SecretManagerSecret[];
  }
  /**
   * ServiceDirectoryConfig represents Service Directory configuration for a SCM host connection.
   */
  export interface Schema$ServiceDirectoryConfig {
    /**
     * The Service Directory service name. Format: projects/{project\}/locations/{location\}/namespaces/{namespace\}/services/{service\}.
     */
    service?: string | null;
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
    /**
     * If provided, get the source from this manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
     */
    storageSourceManifest?: Schema$StorageSourceManifest;
  }
  /**
   * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
   */
  export interface Schema$SourceProvenance {
    /**
     * Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.
     */
    fileHashes?: {[key: string]: Schema$FileHashes} | null;
    /**
     * A copy of the build's `source.repo_source`, if exists, with any revisions resolved.
     */
    resolvedRepoSource?: Schema$RepoSource;
    /**
     * A copy of the build's `source.storage_source`, if exists, with any generations resolved.
     */
    resolvedStorageSource?: Schema$StorageSource;
    /**
     * A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview.
     */
    resolvedStorageSourceManifest?: Schema$StorageSourceManifest;
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
     * Google Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build.
     */
    object?: string | null;
  }
  /**
   * Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
   */
  export interface Schema$StorageSourceManifest {
    /**
     * Google Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string | null;
    /**
     * Google Cloud Storage object containing the source manifest. This object must be a JSON file.
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
   * Metadata for `UpdateBitbucketServerConfig` operation.
   */
  export interface Schema$UpdateBitbucketServerConfigOperationMetadata {
    /**
     * The resource name of the BitbucketServerConfig to be updated. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{id\}`.
     */
    bitbucketServerConfig?: string | null;
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
  }
  /**
   * Metadata for `UpdateGitHubEnterpriseConfig` operation.
   */
  export interface Schema$UpdateGitHubEnterpriseConfigOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the GitHubEnterprise to be updated. Format: `projects/{project\}/locations/{location\}/githubEnterpriseConfigs/{id\}`.
     */
    githubEnterpriseConfig?: string | null;
  }
  /**
   * Metadata for `UpdateGitLabConfig` operation.
   */
  export interface Schema$UpdateGitLabConfigOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the GitLabConfig to be created. Format: `projects/{project\}/locations/{location\}/gitlabConfigs/{id\}`.
     */
    gitlabConfig?: string | null;
  }
  /**
   * Metadata for the `UpdateWorkerPool` operation.
   */
  export interface Schema$UpdateWorkerPoolOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the `WorkerPool` being updated. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`.
     */
    workerPool?: string | null;
  }
  /**
   * A Maven artifact uploaded using the MavenArtifact directive.
   */
  export interface Schema$UploadedMavenArtifact {
    /**
     * Hash types and values of the Maven Artifact.
     */
    fileHashes?: Schema$FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$TimeSpan;
    /**
     * URI of the uploaded artifact.
     */
    uri?: string | null;
  }
  /**
   * Artifact uploaded using the PythonPackage directive.
   */
  export interface Schema$UploadedPythonPackage {
    /**
     * Hash types and values of the Python Artifact.
     */
    fileHashes?: Schema$FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$TimeSpan;
    /**
     * URI of the uploaded artifact.
     */
    uri?: string | null;
  }
  /**
   * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
   */
  export interface Schema$Volume {
    /**
     * Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.
     */
    name?: string | null;
    /**
     * Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.
     */
    path?: string | null;
  }
  /**
   * A non-fatal problem encountered during the execution of the build.
   */
  export interface Schema$Warning {
    /**
     * The priority for this warning.
     */
    priority?: string | null;
    /**
     * Explanation of the warning generated.
     */
    text?: string | null;
  }
  /**
   * WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL.
   */
  export interface Schema$WebhookConfig {
    /**
     * Required. Resource name for the secret required as a URL parameter.
     */
    secret?: string | null;
    /**
     * Potential issues with the underlying Pub/Sub subscription configuration. Only populated on get requests.
     */
    state?: string | null;
  }
  /**
   * Defines the configuration to be used for creating workers in the pool.
   */
  export interface Schema$WorkerConfig {
    /**
     * Size of the disk attached to the worker, in GB. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). Specify a value of up to 2000. If `0` is specified, Cloud Build will use a standard disk size.
     */
    diskSizeGb?: string | null;
    /**
     * Machine type of a worker, such as `e2-medium`. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). If left blank, Cloud Build will use a sensible default.
     */
    machineType?: string | null;
  }
  /**
   * Configuration for a `WorkerPool`. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Private `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview).
   */
  export interface Schema$WorkerPool {
    /**
     * User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Time at which the request to create the `WorkerPool` was received.
     */
    createTime?: string | null;
    /**
     * Output only. Time at which the request to delete the `WorkerPool` was received.
     */
    deleteTime?: string | null;
    /**
     * A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
     */
    displayName?: string | null;
    /**
     * Output only. Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Output only. The resource name of the `WorkerPool`, with format `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`. The value of `{worker_pool\}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location\}` is determined by the endpoint accessed.
     */
    name?: string | null;
    /**
     * Legacy Private Pool configuration.
     */
    privatePoolV1Config?: Schema$PrivatePoolV1Config;
    /**
     * Output only. `WorkerPool` state.
     */
    state?: string | null;
    /**
     * Output only. A unique identifier for the `WorkerPool`.
     */
    uid?: string | null;
    /**
     * Output only. Time at which the request to update the `WorkerPool` was received.
     */
    updateTime?: string | null;
  }

  export class Resource$Githubdotcomwebhook {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.githubDotComWebhook.receive({
     *     // For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     *     webhookKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentType": "my_contentType",
     *       //   "data": "my_data",
     *       //   "extensions": []
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
    receive(
      params: Params$Resource$Githubdotcomwebhook$Receive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    receive(
      params?: Params$Resource$Githubdotcomwebhook$Receive,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    receive(
      params: Params$Resource$Githubdotcomwebhook$Receive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    receive(
      params: Params$Resource$Githubdotcomwebhook$Receive,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    receive(
      params: Params$Resource$Githubdotcomwebhook$Receive,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    receive(callback: BodyResponseCallback<Schema$Empty>): void;
    receive(
      paramsOrCallback?:
        | Params$Resource$Githubdotcomwebhook$Receive
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
        {}) as Params$Resource$Githubdotcomwebhook$Receive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Githubdotcomwebhook$Receive;
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
            url: (rootUrl + '/v1/githubDotComWebhook:receive').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Githubdotcomwebhook$Receive
    extends StandardParameters {
    /**
     * For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     */
    webhookKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.locations.regionalWebhook({
     *     // Required. The location where the webhook should be sent.
     *     location: 'locations/my-location',
     *     // For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     *     webhookKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentType": "my_contentType",
     *       //   "data": "my_data",
     *       //   "extensions": []
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
    regionalWebhook(
      params: Params$Resource$Locations$Regionalwebhook,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    regionalWebhook(
      params?: Params$Resource$Locations$Regionalwebhook,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    regionalWebhook(
      params: Params$Resource$Locations$Regionalwebhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    regionalWebhook(
      params: Params$Resource$Locations$Regionalwebhook,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    regionalWebhook(
      params: Params$Resource$Locations$Regionalwebhook,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    regionalWebhook(callback: BodyResponseCallback<Schema$Empty>): void;
    regionalWebhook(
      paramsOrCallback?:
        | Params$Resource$Locations$Regionalwebhook
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
        {}) as Params$Resource$Locations$Regionalwebhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Regionalwebhook;
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
            url: (rootUrl + '/v1/{+location}/regionalWebhook').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['location'],
        pathParams: ['location'],
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

  export interface Params$Resource$Locations$Regionalwebhook
    extends StandardParameters {
    /**
     * Required. The location where the webhook should be sent.
     */
    location?: string;
    /**
     * For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     */
    webhookKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/.*',
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
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.operations.get({
     *     // The name of the operation resource.
     *     name: 'operations/.*',
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
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
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
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    builds: Resource$Projects$Builds;
    githubEnterpriseConfigs: Resource$Projects$Githubenterpriseconfigs;
    locations: Resource$Projects$Locations;
    triggers: Resource$Projects$Triggers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.builds = new Resource$Projects$Builds(this.context);
      this.githubEnterpriseConfigs =
        new Resource$Projects$Githubenterpriseconfigs(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.triggers = new Resource$Projects$Triggers(this.context);
    }
  }

  export class Resource$Projects$Builds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.approve({
     *     // Required. Name of the target build. For example: "projects/{$project_id\}/builds/{$build_id\}"
     *     name: 'projects/my-project/builds/my-build',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approvalResult": {}
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
    approve(
      params: Params$Resource$Projects$Builds$Approve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    approve(
      params?: Params$Resource$Projects$Builds$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    approve(
      params: Params$Resource$Projects$Builds$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Projects$Builds$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    approve(
      params: Params$Resource$Projects$Builds$Approve,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    approve(callback: BodyResponseCallback<Schema$Operation>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$Approve
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
        {}) as Params$Resource$Projects$Builds$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$Approve;
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
            url: (rootUrl + '/v1/{+name}:approve').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Cancels a build in progress.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.cancel({
     *     // Required. ID of the build.
     *     id: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approval": {},
     *   //   "artifacts": {},
     *   //   "availableSecrets": {},
     *   //   "buildTriggerId": "my_buildTriggerId",
     *   //   "createTime": "my_createTime",
     *   //   "failureInfo": {},
     *   //   "finishTime": "my_finishTime",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "logUrl": "my_logUrl",
     *   //   "logsBucket": "my_logsBucket",
     *   //   "name": "my_name",
     *   //   "options": {},
     *   //   "projectId": "my_projectId",
     *   //   "queueTtl": "my_queueTtl",
     *   //   "results": {},
     *   //   "secrets": [],
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "source": {},
     *   //   "sourceProvenance": {},
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusDetail": "my_statusDetail",
     *   //   "steps": [],
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "timeout": "my_timeout",
     *   //   "timing": {},
     *   //   "warnings": []
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
    cancel(
      params: Params$Resource$Projects$Builds$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Builds$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    cancel(
      params: Params$Resource$Projects$Builds$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Build> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Build>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.create({
     *     // The parent resource where this build will be created. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approval": {},
     *       //   "artifacts": {},
     *       //   "availableSecrets": {},
     *       //   "buildTriggerId": "my_buildTriggerId",
     *       //   "createTime": "my_createTime",
     *       //   "failureInfo": {},
     *       //   "finishTime": "my_finishTime",
     *       //   "id": "my_id",
     *       //   "images": [],
     *       //   "logUrl": "my_logUrl",
     *       //   "logsBucket": "my_logsBucket",
     *       //   "name": "my_name",
     *       //   "options": {},
     *       //   "projectId": "my_projectId",
     *       //   "queueTtl": "my_queueTtl",
     *       //   "results": {},
     *       //   "secrets": [],
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "source": {},
     *       //   "sourceProvenance": {},
     *       //   "startTime": "my_startTime",
     *       //   "status": "my_status",
     *       //   "statusDetail": "my_statusDetail",
     *       //   "steps": [],
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "timeout": "my_timeout",
     *       //   "timing": {},
     *       //   "warnings": []
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
      params: Params$Resource$Projects$Builds$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Builds$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Builds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.get({
     *     // Required. ID of the build.
     *     id: 'placeholder-value',
     *     // The name of the `Build` to retrieve. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     *     name: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approval": {},
     *   //   "artifacts": {},
     *   //   "availableSecrets": {},
     *   //   "buildTriggerId": "my_buildTriggerId",
     *   //   "createTime": "my_createTime",
     *   //   "failureInfo": {},
     *   //   "finishTime": "my_finishTime",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "logUrl": "my_logUrl",
     *   //   "logsBucket": "my_logsBucket",
     *   //   "name": "my_name",
     *   //   "options": {},
     *   //   "projectId": "my_projectId",
     *   //   "queueTtl": "my_queueTtl",
     *   //   "results": {},
     *   //   "secrets": [],
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "source": {},
     *   //   "sourceProvenance": {},
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusDetail": "my_statusDetail",
     *   //   "steps": [],
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "timeout": "my_timeout",
     *   //   "timing": {},
     *   //   "warnings": []
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
      params: Params$Resource$Projects$Builds$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Builds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    get(
      params: Params$Resource$Projects$Builds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Build> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Build>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.list({
     *     // The raw filter text to constrain the results.
     *     filter: 'placeholder-value',
     *     // Number of results to return in the list.
     *     pageSize: 'placeholder-value',
     *     // The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     *     pageToken: 'placeholder-value',
     *     // The parent of the collection of `Builds`. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "builds": [],
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
      params: Params$Resource$Projects$Builds$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Builds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildsResponse>;
    list(
      params: Params$Resource$Projects$Builds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBuildsResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ListBuildsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuildsResponse>(parameters);
      }
    }

    /**
     * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.retry({
     *     // Required. Build ID of the original build.
     *     id: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
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
    retry(
      params: Params$Resource$Projects$Builds$Retry,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retry(
      params?: Params$Resource$Projects$Builds$Retry,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    retry(
      params: Params$Resource$Projects$Builds$Retry,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Builds$Approve
    extends StandardParameters {
    /**
     * Required. Name of the target build. For example: "projects/{$project_id\}/builds/{$build_id\}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveBuildRequest;
  }
  export interface Params$Resource$Projects$Builds$Cancel
    extends StandardParameters {
    /**
     * Required. ID of the build.
     */
    id?: string;
    /**
     * Required. ID of the project.
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
     * The parent resource where this build will be created. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project.
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
     * Required. ID of the build.
     */
    id?: string;
    /**
     * The name of the `Build` to retrieve. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Builds$List
    extends StandardParameters {
    /**
     * The raw filter text to constrain the results.
     */
    filter?: string;
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     */
    pageToken?: string;
    /**
     * The parent of the collection of `Builds`. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Builds$Retry
    extends StandardParameters {
    /**
     * Required. Build ID of the original build.
     */
    id?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetryBuildRequest;
  }

  export class Resource$Projects$Githubenterpriseconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an association between a GCP project and a GitHub Enterprise server.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.githubEnterpriseConfigs.create({
     *     // Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     *     gheConfigId: 'placeholder-value',
     *     // Name of the parent project. For example: projects/{$project_number\} or projects/{$project_id\}
     *     parent: 'projects/my-project',
     *     // ID of the project.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "hostUrl": "my_hostUrl",
     *       //   "name": "my_name",
     *       //   "peeredNetwork": "my_peeredNetwork",
     *       //   "secrets": {},
     *       //   "sslCa": "my_sslCa",
     *       //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Githubenterpriseconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Githubenterpriseconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Githubenterpriseconfigs$Create
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
        {}) as Params$Resource$Projects$Githubenterpriseconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Githubenterpriseconfigs$Create;
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
            url: (rootUrl + '/v1/{+parent}/githubEnterpriseConfigs').replace(
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
     * Delete an association between a GCP project and a GitHub Enterprise server.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.githubEnterpriseConfigs.delete({
     *     // Unique identifier of the `GitHubEnterpriseConfig`
     *     configId: 'placeholder-value',
     *     // This field should contain the name of the enterprise config resource. For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     *     name: 'projects/my-project/githubEnterpriseConfigs/my-githubEnterpriseConfig',
     *     // ID of the project
     *     projectId: 'placeholder-value',
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
      params: Params$Resource$Projects$Githubenterpriseconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Githubenterpriseconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Githubenterpriseconfigs$Delete
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
        {}) as Params$Resource$Projects$Githubenterpriseconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Githubenterpriseconfigs$Delete;
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
     * Retrieve a GitHubEnterpriseConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.githubEnterpriseConfigs.get({
     *     // Unique identifier of the `GitHubEnterpriseConfig`
     *     configId: 'placeholder-value',
     *     // This field should contain the name of the enterprise config resource. For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     *     name: 'projects/my-project/githubEnterpriseConfigs/my-githubEnterpriseConfig',
     *     // ID of the project
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "hostUrl": "my_hostUrl",
     *   //   "name": "my_name",
     *   //   "peeredNetwork": "my_peeredNetwork",
     *   //   "secrets": {},
     *   //   "sslCa": "my_sslCa",
     *   //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Githubenterpriseconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Githubenterpriseconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GitHubEnterpriseConfig>;
    get(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GitHubEnterpriseConfig>,
      callback: BodyResponseCallback<Schema$GitHubEnterpriseConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Get,
      callback: BodyResponseCallback<Schema$GitHubEnterpriseConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$GitHubEnterpriseConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Githubenterpriseconfigs$Get
        | BodyResponseCallback<Schema$GitHubEnterpriseConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GitHubEnterpriseConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GitHubEnterpriseConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GitHubEnterpriseConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Githubenterpriseconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Githubenterpriseconfigs$Get;
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
        createAPIRequest<Schema$GitHubEnterpriseConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GitHubEnterpriseConfig>(parameters);
      }
    }

    /**
     * List all GitHubEnterpriseConfigs for a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.githubEnterpriseConfigs.list({
     *     // Name of the parent project. For example: projects/{$project_number\} or projects/{$project_id\}
     *     parent: 'projects/my-project',
     *     // ID of the project
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": []
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
      params: Params$Resource$Projects$Githubenterpriseconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Githubenterpriseconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGithubEnterpriseConfigsResponse>;
    list(
      params: Params$Resource$Projects$Githubenterpriseconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Githubenterpriseconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Githubenterpriseconfigs$List,
      callback: BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Githubenterpriseconfigs$List
        | BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGithubEnterpriseConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Githubenterpriseconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Githubenterpriseconfigs$List;
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
            url: (rootUrl + '/v1/{+parent}/githubEnterpriseConfigs').replace(
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
        createAPIRequest<Schema$ListGithubEnterpriseConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGithubEnterpriseConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an association between a GCP project and a GitHub Enterprise server.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.githubEnterpriseConfigs.patch({
     *     // Optional. The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     *     name: 'projects/my-project/githubEnterpriseConfigs/my-githubEnterpriseConfig',
     *     // Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "hostUrl": "my_hostUrl",
     *       //   "name": "my_name",
     *       //   "peeredNetwork": "my_peeredNetwork",
     *       //   "secrets": {},
     *       //   "sslCa": "my_sslCa",
     *       //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Githubenterpriseconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Githubenterpriseconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Githubenterpriseconfigs$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Githubenterpriseconfigs$Patch
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
        {}) as Params$Resource$Projects$Githubenterpriseconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Githubenterpriseconfigs$Patch;
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Githubenterpriseconfigs$Create
    extends StandardParameters {
    /**
     * Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     */
    gheConfigId?: string;
    /**
     * Name of the parent project. For example: projects/{$project_number\} or projects/{$project_id\}
     */
    parent?: string;
    /**
     * ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GitHubEnterpriseConfig;
  }
  export interface Params$Resource$Projects$Githubenterpriseconfigs$Delete
    extends StandardParameters {
    /**
     * Unique identifier of the `GitHubEnterpriseConfig`
     */
    configId?: string;
    /**
     * This field should contain the name of the enterprise config resource. For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     */
    name?: string;
    /**
     * ID of the project
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Githubenterpriseconfigs$Get
    extends StandardParameters {
    /**
     * Unique identifier of the `GitHubEnterpriseConfig`
     */
    configId?: string;
    /**
     * This field should contain the name of the enterprise config resource. For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     */
    name?: string;
    /**
     * ID of the project
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Githubenterpriseconfigs$List
    extends StandardParameters {
    /**
     * Name of the parent project. For example: projects/{$project_number\} or projects/{$project_id\}
     */
    parent?: string;
    /**
     * ID of the project
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Githubenterpriseconfigs$Patch
    extends StandardParameters {
    /**
     * Optional. The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     */
    name?: string;
    /**
     * Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GitHubEnterpriseConfig;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    bitbucketServerConfigs: Resource$Projects$Locations$Bitbucketserverconfigs;
    builds: Resource$Projects$Locations$Builds;
    githubEnterpriseConfigs: Resource$Projects$Locations$Githubenterpriseconfigs;
    gitLabConfigs: Resource$Projects$Locations$Gitlabconfigs;
    operations: Resource$Projects$Locations$Operations;
    triggers: Resource$Projects$Locations$Triggers;
    workerPools: Resource$Projects$Locations$Workerpools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.bitbucketServerConfigs =
        new Resource$Projects$Locations$Bitbucketserverconfigs(this.context);
      this.builds = new Resource$Projects$Locations$Builds(this.context);
      this.githubEnterpriseConfigs =
        new Resource$Projects$Locations$Githubenterpriseconfigs(this.context);
      this.gitLabConfigs = new Resource$Projects$Locations$Gitlabconfigs(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.triggers = new Resource$Projects$Locations$Triggers(this.context);
      this.workerPools = new Resource$Projects$Locations$Workerpools(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Bitbucketserverconfigs {
    context: APIRequestContext;
    connectedRepositories: Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories;
    repos: Resource$Projects$Locations$Bitbucketserverconfigs$Repos;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connectedRepositories =
        new Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories(
          this.context
        );
      this.repos = new Resource$Projects$Locations$Bitbucketserverconfigs$Repos(
        this.context
      );
    }

    /**
     * Creates a new `BitbucketServerConfig`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.bitbucketServerConfigs.create(
     *     {
     *       // Optional. The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. bitbucket_server_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character.
     *       bitbucketServerConfigId: 'placeholder-value',
     *       // Required. Name of the parent resource.
     *       parent: 'projects/my-project/locations/my-location',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "apiKey": "my_apiKey",
     *         //   "connectedRepositories": [],
     *         //   "createTime": "my_createTime",
     *         //   "hostUri": "my_hostUri",
     *         //   "name": "my_name",
     *         //   "peeredNetwork": "my_peeredNetwork",
     *         //   "secrets": {},
     *         //   "sslCa": "my_sslCa",
     *         //   "username": "my_username",
     *         //   "webhookKey": "my_webhookKey"
     *         // }
     *       },
     *     }
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
    create(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Bitbucketserverconfigs$Create
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
        {}) as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Create;
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
            url: (rootUrl + '/v1/{+parent}/bitbucketServerConfigs').replace(
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
     * Delete a `BitbucketServerConfig`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.bitbucketServerConfigs.delete(
     *     {
     *       // Required. The config resource name.
     *       name: 'projects/my-project/locations/my-location/bitbucketServerConfigs/my-bitbucketServerConfig',
     *     }
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
    delete(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Bitbucketserverconfigs$Delete
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
        {}) as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Delete;
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
     * Retrieve a `BitbucketServerConfig`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.bitbucketServerConfigs.get({
     *     // Required. The config resource name.
     *     name: 'projects/my-project/locations/my-location/bitbucketServerConfigs/my-bitbucketServerConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiKey": "my_apiKey",
     *   //   "connectedRepositories": [],
     *   //   "createTime": "my_createTime",
     *   //   "hostUri": "my_hostUri",
     *   //   "name": "my_name",
     *   //   "peeredNetwork": "my_peeredNetwork",
     *   //   "secrets": {},
     *   //   "sslCa": "my_sslCa",
     *   //   "username": "my_username",
     *   //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BitbucketServerConfig>;
    get(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BitbucketServerConfig>,
      callback: BodyResponseCallback<Schema$BitbucketServerConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Get,
      callback: BodyResponseCallback<Schema$BitbucketServerConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$BitbucketServerConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Bitbucketserverconfigs$Get
        | BodyResponseCallback<Schema$BitbucketServerConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BitbucketServerConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BitbucketServerConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BitbucketServerConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Get;
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
        createAPIRequest<Schema$BitbucketServerConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BitbucketServerConfig>(parameters);
      }
    }

    /**
     * List all `BitbucketServerConfigs` for a given project. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.bitbucketServerConfigs.list({
     *     // The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListBitbucketServerConfigsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent resource.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bitbucketServerConfigs": [],
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
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Bitbucketserverconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBitbucketServerConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBitbucketServerConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListBitbucketServerConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$List,
      callback: BodyResponseCallback<Schema$ListBitbucketServerConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBitbucketServerConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Bitbucketserverconfigs$List
        | BodyResponseCallback<Schema$ListBitbucketServerConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBitbucketServerConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBitbucketServerConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBitbucketServerConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Bitbucketserverconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Bitbucketserverconfigs$List;
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
            url: (rootUrl + '/v1/{+parent}/bitbucketServerConfigs').replace(
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
        createAPIRequest<Schema$ListBitbucketServerConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBitbucketServerConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing `BitbucketServerConfig`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.bitbucketServerConfigs.patch({
     *     // The resource name for the config.
     *     name: 'projects/my-project/locations/my-location/bitbucketServerConfigs/my-bitbucketServerConfig',
     *     // Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiKey": "my_apiKey",
     *       //   "connectedRepositories": [],
     *       //   "createTime": "my_createTime",
     *       //   "hostUri": "my_hostUri",
     *       //   "name": "my_name",
     *       //   "peeredNetwork": "my_peeredNetwork",
     *       //   "secrets": {},
     *       //   "sslCa": "my_sslCa",
     *       //   "username": "my_username",
     *       //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Bitbucketserverconfigs$Patch
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
        {}) as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Patch;
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *     await cloudbuild.projects.locations.bitbucketServerConfigs.removeBitbucketServerConnectedRepository(
     *       {
     *         // Required. The name of the `BitbucketServerConfig` to remove a connected repository. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{config\}`
     *         config:
     *           'projects/my-project/locations/my-location/bitbucketServerConfigs/my-bitbucketServerConfig',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "connectedRepository": {}
     *           // }
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
    removeBitbucketServerConnectedRepository(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Removebitbucketserverconnectedrepository,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeBitbucketServerConnectedRepository(
      params?: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Removebitbucketserverconnectedrepository,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    removeBitbucketServerConnectedRepository(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Removebitbucketserverconnectedrepository,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeBitbucketServerConnectedRepository(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Removebitbucketserverconnectedrepository,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeBitbucketServerConnectedRepository(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Removebitbucketserverconnectedrepository,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeBitbucketServerConnectedRepository(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeBitbucketServerConnectedRepository(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Bitbucketserverconfigs$Removebitbucketserverconnectedrepository
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
        {}) as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Removebitbucketserverconnectedrepository;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Removebitbucketserverconnectedrepository;
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
              rootUrl + '/v1/{+config}:removeBitbucketServerConnectedRepository'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['config'],
        pathParams: ['config'],
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

  export interface Params$Resource$Projects$Locations$Bitbucketserverconfigs$Create
    extends StandardParameters {
    /**
     * Optional. The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. bitbucket_server_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character.
     */
    bitbucketServerConfigId?: string;
    /**
     * Required. Name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BitbucketServerConfig;
  }
  export interface Params$Resource$Projects$Locations$Bitbucketserverconfigs$Delete
    extends StandardParameters {
    /**
     * Required. The config resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Bitbucketserverconfigs$Get
    extends StandardParameters {
    /**
     * Required. The config resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Bitbucketserverconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListBitbucketServerConfigsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent resource.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Bitbucketserverconfigs$Patch
    extends StandardParameters {
    /**
     * The resource name for the config.
     */
    name?: string;
    /**
     * Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BitbucketServerConfig;
  }
  export interface Params$Resource$Projects$Locations$Bitbucketserverconfigs$Removebitbucketserverconnectedrepository
    extends StandardParameters {
    /**
     * Required. The name of the `BitbucketServerConfig` to remove a connected repository. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{config\}`
     */
    config?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveBitbucketServerConnectedRepositoryRequest;
  }

  export class Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Batch connecting Bitbucket Server repositories to Cloud Build.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *     await cloudbuild.projects.locations.bitbucketServerConfigs.connectedRepositories.batchCreate(
     *       {
     *         // The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{config\}`
     *         parent:
     *           'projects/my-project/locations/my-location/bitbucketServerConfigs/my-bitbucketServerConfig',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "requests": []
     *           // }
     *         },
     *       }
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
    batchCreate(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    batchCreate(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories$Batchcreate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories$Batchcreate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchCreate(callback: BodyResponseCallback<Schema$Operation>): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories$Batchcreate
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
        {}) as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories$Batchcreate;
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
              rootUrl + '/v1/{+parent}/connectedRepositories:batchCreate'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
  }

  export interface Params$Resource$Projects$Locations$Bitbucketserverconfigs$Connectedrepositories$Batchcreate
    extends StandardParameters {
    /**
     * The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project\}/locations/{location\}/bitbucketServerConfigs/{config\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateBitbucketServerConnectedRepositoriesRequest;
  }

  export class Resource$Projects$Locations$Bitbucketserverconfigs$Repos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all repositories for a given `BitbucketServerConfig`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *     await cloudbuild.projects.locations.bitbucketServerConfigs.repos.list({
     *       // The maximum number of configs to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListBitbucketServerRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Name of the parent resource.
     *       parent:
     *         'projects/my-project/locations/my-location/bitbucketServerConfigs/my-bitbucketServerConfig',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bitbucketServerRepositories": [],
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
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Repos$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Repos$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBitbucketServerRepositoriesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Repos$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Repos$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBitbucketServerRepositoriesResponse>,
      callback: BodyResponseCallback<Schema$ListBitbucketServerRepositoriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Bitbucketserverconfigs$Repos$List,
      callback: BodyResponseCallback<Schema$ListBitbucketServerRepositoriesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBitbucketServerRepositoriesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Bitbucketserverconfigs$Repos$List
        | BodyResponseCallback<Schema$ListBitbucketServerRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBitbucketServerRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBitbucketServerRepositoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBitbucketServerRepositoriesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Repos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Bitbucketserverconfigs$Repos$List;
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
            url: (rootUrl + '/v1/{+parent}/repos').replace(
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
        createAPIRequest<Schema$ListBitbucketServerRepositoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBitbucketServerRepositoriesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Bitbucketserverconfigs$Repos$List
    extends StandardParameters {
    /**
     * The maximum number of configs to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListBitbucketServerRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent resource.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Builds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.approve({
     *     // Required. Name of the target build. For example: "projects/{$project_id\}/builds/{$build_id\}"
     *     name: 'projects/my-project/locations/my-location/builds/my-build',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approvalResult": {}
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
    approve(
      params: Params$Resource$Projects$Locations$Builds$Approve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    approve(
      params?: Params$Resource$Projects$Locations$Builds$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    approve(
      params: Params$Resource$Projects$Locations$Builds$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Projects$Locations$Builds$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    approve(
      params: Params$Resource$Projects$Locations$Builds$Approve,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    approve(callback: BodyResponseCallback<Schema$Operation>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Approve
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
        {}) as Params$Resource$Projects$Locations$Builds$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Approve;
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
            url: (rootUrl + '/v1/{+name}:approve').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Cancels a build in progress.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.cancel({
     *     // The name of the `Build` to cancel. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     *     name: 'projects/my-project/locations/my-location/builds/my-build',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approval": {},
     *   //   "artifacts": {},
     *   //   "availableSecrets": {},
     *   //   "buildTriggerId": "my_buildTriggerId",
     *   //   "createTime": "my_createTime",
     *   //   "failureInfo": {},
     *   //   "finishTime": "my_finishTime",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "logUrl": "my_logUrl",
     *   //   "logsBucket": "my_logsBucket",
     *   //   "name": "my_name",
     *   //   "options": {},
     *   //   "projectId": "my_projectId",
     *   //   "queueTtl": "my_queueTtl",
     *   //   "results": {},
     *   //   "secrets": [],
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "source": {},
     *   //   "sourceProvenance": {},
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusDetail": "my_statusDetail",
     *   //   "steps": [],
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "timeout": "my_timeout",
     *   //   "timing": {},
     *   //   "warnings": []
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
    cancel(
      params: Params$Resource$Projects$Locations$Builds$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Builds$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    cancel(
      params: Params$Resource$Projects$Locations$Builds$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Builds$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Builds$Cancel,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Build>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Cancel
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Build> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Builds$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Cancel;
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
        createAPIRequest<Schema$Build>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.create({
     *     // The parent resource where this build will be created. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approval": {},
     *       //   "artifacts": {},
     *       //   "availableSecrets": {},
     *       //   "buildTriggerId": "my_buildTriggerId",
     *       //   "createTime": "my_createTime",
     *       //   "failureInfo": {},
     *       //   "finishTime": "my_finishTime",
     *       //   "id": "my_id",
     *       //   "images": [],
     *       //   "logUrl": "my_logUrl",
     *       //   "logsBucket": "my_logsBucket",
     *       //   "name": "my_name",
     *       //   "options": {},
     *       //   "projectId": "my_projectId",
     *       //   "queueTtl": "my_queueTtl",
     *       //   "results": {},
     *       //   "secrets": [],
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "source": {},
     *       //   "sourceProvenance": {},
     *       //   "startTime": "my_startTime",
     *       //   "status": "my_status",
     *       //   "statusDetail": "my_statusDetail",
     *       //   "steps": [],
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "timeout": "my_timeout",
     *       //   "timing": {},
     *       //   "warnings": []
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
      params: Params$Resource$Projects$Locations$Builds$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Builds$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Builds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Builds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Builds$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Create
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
        {}) as Params$Resource$Projects$Locations$Builds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Create;
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
            url: (rootUrl + '/v1/{+parent}/builds').replace(
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
     * Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.get({
     *     // Required. ID of the build.
     *     id: 'placeholder-value',
     *     // The name of the `Build` to retrieve. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     *     name: 'projects/my-project/locations/my-location/builds/my-build',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approval": {},
     *   //   "artifacts": {},
     *   //   "availableSecrets": {},
     *   //   "buildTriggerId": "my_buildTriggerId",
     *   //   "createTime": "my_createTime",
     *   //   "failureInfo": {},
     *   //   "finishTime": "my_finishTime",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "logUrl": "my_logUrl",
     *   //   "logsBucket": "my_logsBucket",
     *   //   "name": "my_name",
     *   //   "options": {},
     *   //   "projectId": "my_projectId",
     *   //   "queueTtl": "my_queueTtl",
     *   //   "results": {},
     *   //   "secrets": [],
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "source": {},
     *   //   "sourceProvenance": {},
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusDetail": "my_statusDetail",
     *   //   "steps": [],
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "timeout": "my_timeout",
     *   //   "timing": {},
     *   //   "warnings": []
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
      params: Params$Resource$Projects$Locations$Builds$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Builds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    get(
      params: Params$Resource$Projects$Locations$Builds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Builds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Builds$Get,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(callback: BodyResponseCallback<Schema$Build>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Get
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Build> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Builds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Get;
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
        createAPIRequest<Schema$Build>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.list({
     *     // The raw filter text to constrain the results.
     *     filter: 'placeholder-value',
     *     // Number of results to return in the list.
     *     pageSize: 'placeholder-value',
     *     // The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     *     pageToken: 'placeholder-value',
     *     // The parent of the collection of `Builds`. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "builds": [],
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
      params: Params$Resource$Projects$Locations$Builds$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Builds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Builds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Builds$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListBuildsResponse>,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Builds$List,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBuildsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$List
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBuildsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Builds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$List;
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
            url: (rootUrl + '/v1/{+parent}/builds').replace(
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
        createAPIRequest<Schema$ListBuildsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuildsResponse>(parameters);
      }
    }

    /**
     * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.retry({
     *     // The name of the `Build` to retry. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     *     name: 'projects/my-project/locations/my-location/builds/my-build',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
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
    retry(
      params: Params$Resource$Projects$Locations$Builds$Retry,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retry(
      params?: Params$Resource$Projects$Locations$Builds$Retry,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    retry(
      params: Params$Resource$Projects$Locations$Builds$Retry,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retry(
      params: Params$Resource$Projects$Locations$Builds$Retry,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(
      params: Params$Resource$Projects$Locations$Builds$Retry,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(callback: BodyResponseCallback<Schema$Operation>): void;
    retry(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Retry
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
        {}) as Params$Resource$Projects$Locations$Builds$Retry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Retry;
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
            url: (rootUrl + '/v1/{+name}:retry').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Builds$Approve
    extends StandardParameters {
    /**
     * Required. Name of the target build. For example: "projects/{$project_id\}/builds/{$build_id\}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveBuildRequest;
  }
  export interface Params$Resource$Projects$Locations$Builds$Cancel
    extends StandardParameters {
    /**
     * The name of the `Build` to cancel. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelBuildRequest;
  }
  export interface Params$Resource$Projects$Locations$Builds$Create
    extends StandardParameters {
    /**
     * The parent resource where this build will be created. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Build;
  }
  export interface Params$Resource$Projects$Locations$Builds$Get
    extends StandardParameters {
    /**
     * Required. ID of the build.
     */
    id?: string;
    /**
     * The name of the `Build` to retrieve. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Locations$Builds$List
    extends StandardParameters {
    /**
     * The raw filter text to constrain the results.
     */
    filter?: string;
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     */
    pageToken?: string;
    /**
     * The parent of the collection of `Builds`. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Locations$Builds$Retry
    extends StandardParameters {
    /**
     * The name of the `Build` to retry. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetryBuildRequest;
  }

  export class Resource$Projects$Locations$Githubenterpriseconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an association between a GCP project and a GitHub Enterprise server.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *     await cloudbuild.projects.locations.githubEnterpriseConfigs.create({
     *       // Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     *       gheConfigId: 'placeholder-value',
     *       // Name of the parent project. For example: projects/{$project_number\} or projects/{$project_id\}
     *       parent: 'projects/my-project/locations/my-location',
     *       // ID of the project.
     *       projectId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "appId": "my_appId",
     *         //   "createTime": "my_createTime",
     *         //   "displayName": "my_displayName",
     *         //   "hostUrl": "my_hostUrl",
     *         //   "name": "my_name",
     *         //   "peeredNetwork": "my_peeredNetwork",
     *         //   "secrets": {},
     *         //   "sslCa": "my_sslCa",
     *         //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Githubenterpriseconfigs$Create
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
        {}) as Params$Resource$Projects$Locations$Githubenterpriseconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Githubenterpriseconfigs$Create;
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
            url: (rootUrl + '/v1/{+parent}/githubEnterpriseConfigs').replace(
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
     * Delete an association between a GCP project and a GitHub Enterprise server.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *     await cloudbuild.projects.locations.githubEnterpriseConfigs.delete({
     *       // Unique identifier of the `GitHubEnterpriseConfig`
     *       configId: 'placeholder-value',
     *       // This field should contain the name of the enterprise config resource. For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     *       name: 'projects/my-project/locations/my-location/githubEnterpriseConfigs/my-githubEnterpriseConfig',
     *       // ID of the project
     *       projectId: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Githubenterpriseconfigs$Delete
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
        {}) as Params$Resource$Projects$Locations$Githubenterpriseconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Githubenterpriseconfigs$Delete;
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
     * Retrieve a GitHubEnterpriseConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.githubEnterpriseConfigs.get({
     *     // Unique identifier of the `GitHubEnterpriseConfig`
     *     configId: 'placeholder-value',
     *     // This field should contain the name of the enterprise config resource. For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     *     name: 'projects/my-project/locations/my-location/githubEnterpriseConfigs/my-githubEnterpriseConfig',
     *     // ID of the project
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "hostUrl": "my_hostUrl",
     *   //   "name": "my_name",
     *   //   "peeredNetwork": "my_peeredNetwork",
     *   //   "secrets": {},
     *   //   "sslCa": "my_sslCa",
     *   //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GitHubEnterpriseConfig>;
    get(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GitHubEnterpriseConfig>,
      callback: BodyResponseCallback<Schema$GitHubEnterpriseConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Get,
      callback: BodyResponseCallback<Schema$GitHubEnterpriseConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$GitHubEnterpriseConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Githubenterpriseconfigs$Get
        | BodyResponseCallback<Schema$GitHubEnterpriseConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GitHubEnterpriseConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GitHubEnterpriseConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GitHubEnterpriseConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Githubenterpriseconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Githubenterpriseconfigs$Get;
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
        createAPIRequest<Schema$GitHubEnterpriseConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GitHubEnterpriseConfig>(parameters);
      }
    }

    /**
     * List all GitHubEnterpriseConfigs for a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.githubEnterpriseConfigs.list({
     *     // Name of the parent project. For example: projects/{$project_number\} or projects/{$project_id\}
     *     parent: 'projects/my-project/locations/my-location',
     *     // ID of the project
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": []
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
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Githubenterpriseconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGithubEnterpriseConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$List,
      callback: BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Githubenterpriseconfigs$List
        | BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGithubEnterpriseConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGithubEnterpriseConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Githubenterpriseconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Githubenterpriseconfigs$List;
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
            url: (rootUrl + '/v1/{+parent}/githubEnterpriseConfigs').replace(
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
        createAPIRequest<Schema$ListGithubEnterpriseConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGithubEnterpriseConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an association between a GCP project and a GitHub Enterprise server.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.githubEnterpriseConfigs.patch(
     *     {
     *       // Optional. The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     *       name: 'projects/my-project/locations/my-location/githubEnterpriseConfigs/my-githubEnterpriseConfig',
     *       // Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "appId": "my_appId",
     *         //   "createTime": "my_createTime",
     *         //   "displayName": "my_displayName",
     *         //   "hostUrl": "my_hostUrl",
     *         //   "name": "my_name",
     *         //   "peeredNetwork": "my_peeredNetwork",
     *         //   "secrets": {},
     *         //   "sslCa": "my_sslCa",
     *         //   "webhookKey": "my_webhookKey"
     *         // }
     *       },
     *     }
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
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Githubenterpriseconfigs$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Githubenterpriseconfigs$Patch
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
        {}) as Params$Resource$Projects$Locations$Githubenterpriseconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Githubenterpriseconfigs$Patch;
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Githubenterpriseconfigs$Create
    extends StandardParameters {
    /**
     * Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     */
    gheConfigId?: string;
    /**
     * Name of the parent project. For example: projects/{$project_number\} or projects/{$project_id\}
     */
    parent?: string;
    /**
     * ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GitHubEnterpriseConfig;
  }
  export interface Params$Resource$Projects$Locations$Githubenterpriseconfigs$Delete
    extends StandardParameters {
    /**
     * Unique identifier of the `GitHubEnterpriseConfig`
     */
    configId?: string;
    /**
     * This field should contain the name of the enterprise config resource. For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     */
    name?: string;
    /**
     * ID of the project
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Locations$Githubenterpriseconfigs$Get
    extends StandardParameters {
    /**
     * Unique identifier of the `GitHubEnterpriseConfig`
     */
    configId?: string;
    /**
     * This field should contain the name of the enterprise config resource. For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     */
    name?: string;
    /**
     * ID of the project
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Locations$Githubenterpriseconfigs$List
    extends StandardParameters {
    /**
     * Name of the parent project. For example: projects/{$project_number\} or projects/{$project_id\}
     */
    parent?: string;
    /**
     * ID of the project
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Locations$Githubenterpriseconfigs$Patch
    extends StandardParameters {
    /**
     * Optional. The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id\}/locations/{$location_id\}/githubEnterpriseConfigs/{$config_id\}"
     */
    name?: string;
    /**
     * Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GitHubEnterpriseConfig;
  }

  export class Resource$Projects$Locations$Gitlabconfigs {
    context: APIRequestContext;
    connectedRepositories: Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories;
    repos: Resource$Projects$Locations$Gitlabconfigs$Repos;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connectedRepositories =
        new Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories(
          this.context
        );
      this.repos = new Resource$Projects$Locations$Gitlabconfigs$Repos(
        this.context
      );
    }

    /**
     * Creates a new `GitLabConfig`. This API is experimental
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.gitLabConfigs.create({
     *     // Optional. The ID to use for the GitLabConfig, which will become the final component of the GitLabConfig’s resource name. gitlab_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     *     gitlabConfigId: 'placeholder-value',
     *     // Required. Name of the parent resource.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectedRepositories": [],
     *       //   "createTime": "my_createTime",
     *       //   "enterpriseConfig": {},
     *       //   "name": "my_name",
     *       //   "secrets": {},
     *       //   "username": "my_username",
     *       //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Gitlabconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gitlabconfigs$Create
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
        {}) as Params$Resource$Projects$Locations$Gitlabconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gitlabconfigs$Create;
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
            url: (rootUrl + '/v1/{+parent}/gitLabConfigs').replace(
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
     * Delete a `GitLabConfig`. This API is experimental
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.gitLabConfigs.delete({
     *     // Required. The config resource name.
     *     name: 'projects/my-project/locations/my-location/gitLabConfigs/my-gitLabConfig',
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
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Gitlabconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gitlabconfigs$Delete
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
        {}) as Params$Resource$Projects$Locations$Gitlabconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gitlabconfigs$Delete;
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
     * Retrieves a `GitLabConfig`. This API is experimental
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.gitLabConfigs.get({
     *     // Required. The config resource name.
     *     name: 'projects/my-project/locations/my-location/gitLabConfigs/my-gitLabConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectedRepositories": [],
     *   //   "createTime": "my_createTime",
     *   //   "enterpriseConfig": {},
     *   //   "name": "my_name",
     *   //   "secrets": {},
     *   //   "username": "my_username",
     *   //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Gitlabconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GitLabConfig>;
    get(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GitLabConfig>,
      callback: BodyResponseCallback<Schema$GitLabConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Get,
      callback: BodyResponseCallback<Schema$GitLabConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$GitLabConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gitlabconfigs$Get
        | BodyResponseCallback<Schema$GitLabConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GitLabConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GitLabConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GitLabConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gitlabconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gitlabconfigs$Get;
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
        createAPIRequest<Schema$GitLabConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GitLabConfig>(parameters);
      }
    }

    /**
     * List all `GitLabConfigs` for a given project. This API is experimental
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.gitLabConfigs.list({
     *     // The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000;, values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous ‘ListGitlabConfigsRequest’ call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ‘ListGitlabConfigsRequest’ must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent resource
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gitlabConfigs": [],
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
      params: Params$Resource$Projects$Locations$Gitlabconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Gitlabconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGitLabConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGitLabConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListGitLabConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$List,
      callback: BodyResponseCallback<Schema$ListGitLabConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGitLabConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gitlabconfigs$List
        | BodyResponseCallback<Schema$ListGitLabConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGitLabConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGitLabConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGitLabConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gitlabconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gitlabconfigs$List;
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
            url: (rootUrl + '/v1/{+parent}/gitLabConfigs').replace(
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
        createAPIRequest<Schema$ListGitLabConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGitLabConfigsResponse>(parameters);
      }
    }

    /**
     * Updates an existing `GitLabConfig`. This API is experimental
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.gitLabConfigs.patch({
     *     // The resource name for the config.
     *     name: 'projects/my-project/locations/my-location/gitLabConfigs/my-gitLabConfig',
     *     // Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectedRepositories": [],
     *       //   "createTime": "my_createTime",
     *       //   "enterpriseConfig": {},
     *       //   "name": "my_name",
     *       //   "secrets": {},
     *       //   "username": "my_username",
     *       //   "webhookKey": "my_webhookKey"
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
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Gitlabconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gitlabconfigs$Patch
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
        {}) as Params$Resource$Projects$Locations$Gitlabconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gitlabconfigs$Patch;
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *     await cloudbuild.projects.locations.gitLabConfigs.removeGitLabConnectedRepository(
     *       {
     *         // Required. The name of the `GitLabConfig` to remove a connected repository. Format: `projects/{project\}/locations/{location\}/gitLabConfigs/{config\}`
     *         config:
     *           'projects/my-project/locations/my-location/gitLabConfigs/my-gitLabConfig',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "connectedRepository": {}
     *           // }
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
    removeGitLabConnectedRepository(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Removegitlabconnectedrepository,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeGitLabConnectedRepository(
      params?: Params$Resource$Projects$Locations$Gitlabconfigs$Removegitlabconnectedrepository,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    removeGitLabConnectedRepository(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Removegitlabconnectedrepository,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeGitLabConnectedRepository(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Removegitlabconnectedrepository,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeGitLabConnectedRepository(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Removegitlabconnectedrepository,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeGitLabConnectedRepository(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeGitLabConnectedRepository(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gitlabconfigs$Removegitlabconnectedrepository
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
        {}) as Params$Resource$Projects$Locations$Gitlabconfigs$Removegitlabconnectedrepository;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gitlabconfigs$Removegitlabconnectedrepository;
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
              rootUrl + '/v1/{+config}:removeGitLabConnectedRepository'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['config'],
        pathParams: ['config'],
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

  export interface Params$Resource$Projects$Locations$Gitlabconfigs$Create
    extends StandardParameters {
    /**
     * Optional. The ID to use for the GitLabConfig, which will become the final component of the GitLabConfig’s resource name. gitlab_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     */
    gitlabConfigId?: string;
    /**
     * Required. Name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GitLabConfig;
  }
  export interface Params$Resource$Projects$Locations$Gitlabconfigs$Delete
    extends StandardParameters {
    /**
     * Required. The config resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gitlabconfigs$Get
    extends StandardParameters {
    /**
     * Required. The config resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gitlabconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000;, values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous ‘ListGitlabConfigsRequest’ call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ‘ListGitlabConfigsRequest’ must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent resource
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Gitlabconfigs$Patch
    extends StandardParameters {
    /**
     * The resource name for the config.
     */
    name?: string;
    /**
     * Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GitLabConfig;
  }
  export interface Params$Resource$Projects$Locations$Gitlabconfigs$Removegitlabconnectedrepository
    extends StandardParameters {
    /**
     * Required. The name of the `GitLabConfig` to remove a connected repository. Format: `projects/{project\}/locations/{location\}/gitLabConfigs/{config\}`
     */
    config?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveGitLabConnectedRepositoryRequest;
  }

  export class Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Batch connecting GitLab repositories to Cloud Build. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *     await cloudbuild.projects.locations.gitLabConfigs.connectedRepositories.batchCreate(
     *       {
     *         // The name of the `GitLabConfig` that adds connected repositories. Format: `projects/{project\}/locations/{location\}/gitLabConfigs/{config\}`
     *         parent:
     *           'projects/my-project/locations/my-location/gitLabConfigs/my-gitLabConfig',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "requests": []
     *           // }
     *         },
     *       }
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
    batchCreate(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    batchCreate(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories$Batchcreate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories$Batchcreate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchCreate(callback: BodyResponseCallback<Schema$Operation>): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories$Batchcreate
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
        {}) as Params$Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories$Batchcreate;
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
              rootUrl + '/v1/{+parent}/connectedRepositories:batchCreate'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
  }

  export interface Params$Resource$Projects$Locations$Gitlabconfigs$Connectedrepositories$Batchcreate
    extends StandardParameters {
    /**
     * The name of the `GitLabConfig` that adds connected repositories. Format: `projects/{project\}/locations/{location\}/gitLabConfigs/{config\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateGitLabConnectedRepositoriesRequest;
  }

  export class Resource$Projects$Locations$Gitlabconfigs$Repos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all repositories for a given `GitLabConfig`. This API is experimental
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.gitLabConfigs.repos.list({
     *     // The maximum number of repositories to return. The service may return fewer than this value.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous ListGitLabRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGitLabRepositoriesRequest` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the parent resource.
     *     parent:
     *       'projects/my-project/locations/my-location/gitLabConfigs/my-gitLabConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gitlabRepositories": [],
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
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Repos$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Gitlabconfigs$Repos$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGitLabRepositoriesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Repos$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Repos$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGitLabRepositoriesResponse>,
      callback: BodyResponseCallback<Schema$ListGitLabRepositoriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gitlabconfigs$Repos$List,
      callback: BodyResponseCallback<Schema$ListGitLabRepositoriesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGitLabRepositoriesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gitlabconfigs$Repos$List
        | BodyResponseCallback<Schema$ListGitLabRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGitLabRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGitLabRepositoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGitLabRepositoriesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gitlabconfigs$Repos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gitlabconfigs$Repos$List;
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
            url: (rootUrl + '/v1/{+parent}/repos').replace(
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
        createAPIRequest<Schema$ListGitLabRepositoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGitLabRepositoriesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Gitlabconfigs$Repos$List
    extends StandardParameters {
    /**
     * The maximum number of repositories to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous ListGitLabRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGitLabRepositoriesRequest` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent resource.
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.operations.cancel({
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
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.operations.get({
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
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
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Triggers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `BuildTrigger`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.create({
     *     // The parent resource where this trigger will be created. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. ID of the project for which to configure automatic builds.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approvalConfig": {},
     *       //   "autodetect": false,
     *       //   "bitbucketServerTriggerConfig": {},
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "eventType": "my_eventType",
     *       //   "filename": "my_filename",
     *       //   "filter": "my_filter",
     *       //   "gitFileSource": {},
     *       //   "github": {},
     *       //   "gitlabEnterpriseEventsConfig": {},
     *       //   "id": "my_id",
     *       //   "ignoredFiles": [],
     *       //   "includeBuildLogs": "my_includeBuildLogs",
     *       //   "includedFiles": [],
     *       //   "name": "my_name",
     *       //   "pubsubConfig": {},
     *       //   "repositoryEventConfig": {},
     *       //   "resourceName": "my_resourceName",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "sourceToBuild": {},
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "triggerTemplate": {},
     *       //   "webhookConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approvalConfig": {},
     *   //   "autodetect": false,
     *   //   "bitbucketServerTriggerConfig": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "eventType": "my_eventType",
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "gitFileSource": {},
     *   //   "github": {},
     *   //   "gitlabEnterpriseEventsConfig": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includeBuildLogs": "my_includeBuildLogs",
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "repositoryEventConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "sourceToBuild": {},
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
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
      params: Params$Resource$Projects$Locations$Triggers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Triggers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    create(
      params: Params$Resource$Projects$Locations$Triggers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Triggers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Triggers$Create,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    create(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Create
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Create;
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
            url: (rootUrl + '/v1/{+parent}/triggers').replace(
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
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.delete({
     *     // The name of the `Trigger` to delete. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'projects/my-project/locations/my-location/triggers/my-trigger',
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. ID of the `BuildTrigger` to delete.
     *     triggerId: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Triggers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Triggers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Triggers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Triggers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Triggers$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Delete
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
        {}) as Params$Resource$Projects$Locations$Triggers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Delete;
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
     * Returns information about a `BuildTrigger`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.get({
     *     // The name of the `Trigger` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'projects/my-project/locations/my-location/triggers/my-trigger',
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     *     triggerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approvalConfig": {},
     *   //   "autodetect": false,
     *   //   "bitbucketServerTriggerConfig": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "eventType": "my_eventType",
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "gitFileSource": {},
     *   //   "github": {},
     *   //   "gitlabEnterpriseEventsConfig": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includeBuildLogs": "my_includeBuildLogs",
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "repositoryEventConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "sourceToBuild": {},
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
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
      params: Params$Resource$Projects$Locations$Triggers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Triggers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    get(
      params: Params$Resource$Projects$Locations$Triggers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Triggers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Triggers$Get,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    get(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Get
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Get;
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
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Lists existing `BuildTrigger`s. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.list({
     *     // Number of results to return in the list.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // The parent of the collection of `Triggers`. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. ID of the project for which to list BuildTriggers.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "triggers": []
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
      params: Params$Resource$Projects$Locations$Triggers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Triggers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildTriggersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Triggers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Triggers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>,
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Triggers$List,
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$List
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBuildTriggersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$List;
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
            url: (rootUrl + '/v1/{+parent}/triggers').replace(
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
        createAPIRequest<Schema$ListBuildTriggersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuildTriggersResponse>(parameters);
      }
    }

    /**
     * Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.patch({
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // The `Trigger` name with format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`, where {trigger\} is a unique identifier generated by the service.
     *     resourceName:
     *       'projects/my-project/locations/my-location/triggers/my-trigger',
     *     // Required. ID of the `BuildTrigger` to update.
     *     triggerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approvalConfig": {},
     *       //   "autodetect": false,
     *       //   "bitbucketServerTriggerConfig": {},
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "eventType": "my_eventType",
     *       //   "filename": "my_filename",
     *       //   "filter": "my_filter",
     *       //   "gitFileSource": {},
     *       //   "github": {},
     *       //   "gitlabEnterpriseEventsConfig": {},
     *       //   "id": "my_id",
     *       //   "ignoredFiles": [],
     *       //   "includeBuildLogs": "my_includeBuildLogs",
     *       //   "includedFiles": [],
     *       //   "name": "my_name",
     *       //   "pubsubConfig": {},
     *       //   "repositoryEventConfig": {},
     *       //   "resourceName": "my_resourceName",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "sourceToBuild": {},
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "triggerTemplate": {},
     *       //   "webhookConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approvalConfig": {},
     *   //   "autodetect": false,
     *   //   "bitbucketServerTriggerConfig": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "eventType": "my_eventType",
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "gitFileSource": {},
     *   //   "github": {},
     *   //   "gitlabEnterpriseEventsConfig": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includeBuildLogs": "my_includeBuildLogs",
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "repositoryEventConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "sourceToBuild": {},
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
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
      params: Params$Resource$Projects$Locations$Triggers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Triggers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    patch(
      params: Params$Resource$Projects$Locations$Triggers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Triggers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Triggers$Patch,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    patch(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Patch
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Patch;
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
            url: (rootUrl + '/v1/{+resourceName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId\}/locations/{region\}/triggers/{triggerId\}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.run({
     *     // The name of the `Trigger` to run. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'projects/my-project/locations/my-location/triggers/my-trigger',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "projectId": "my_projectId",
     *       //   "source": {},
     *       //   "triggerId": "my_triggerId"
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
    run(
      params: Params$Resource$Projects$Locations$Triggers$Run,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    run(
      params?: Params$Resource$Projects$Locations$Triggers$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    run(
      params: Params$Resource$Projects$Locations$Triggers$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Triggers$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Triggers$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Run
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
        {}) as Params$Resource$Projects$Locations$Triggers$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Run;
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
            url: (rootUrl + '/v1/{+name}:run').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.webhook({
     *     // The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'projects/my-project/locations/my-location/triggers/my-trigger',
     *     // Project in which the specified trigger lives
     *     projectId: 'placeholder-value',
     *     // Secret token used for authorization if an OAuth token isn't provided.
     *     secret: 'placeholder-value',
     *     // Name of the trigger to run the payload against
     *     trigger: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentType": "my_contentType",
     *       //   "data": "my_data",
     *       //   "extensions": []
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
    webhook(
      params: Params$Resource$Projects$Locations$Triggers$Webhook,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    webhook(
      params?: Params$Resource$Projects$Locations$Triggers$Webhook,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReceiveTriggerWebhookResponse>;
    webhook(
      params: Params$Resource$Projects$Locations$Triggers$Webhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    webhook(
      params: Params$Resource$Projects$Locations$Triggers$Webhook,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>,
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      params: Params$Resource$Projects$Locations$Triggers$Webhook,
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Webhook
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReceiveTriggerWebhookResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$Webhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Webhook;
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
            url: (rootUrl + '/v1/{+name}:webhook').replace(
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
        createAPIRequest<Schema$ReceiveTriggerWebhookResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReceiveTriggerWebhookResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Triggers$Create
    extends StandardParameters {
    /**
     * The parent resource where this trigger will be created. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project for which to configure automatic builds.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildTrigger;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Delete
    extends StandardParameters {
    /**
     * The name of the `Trigger` to delete. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. ID of the `BuildTrigger` to delete.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Get
    extends StandardParameters {
    /**
     * The name of the `Trigger` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Locations$Triggers$List
    extends StandardParameters {
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * The parent of the collection of `Triggers`. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project for which to list BuildTriggers.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Patch
    extends StandardParameters {
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * The `Trigger` name with format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`, where {trigger\} is a unique identifier generated by the service.
     */
    resourceName?: string;
    /**
     * Required. ID of the `BuildTrigger` to update.
     */
    triggerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildTrigger;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Run
    extends StandardParameters {
    /**
     * The name of the `Trigger` to run. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunBuildTriggerRequest;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Webhook
    extends StandardParameters {
    /**
     * The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Project in which the specified trigger lives
     */
    projectId?: string;
    /**
     * Secret token used for authorization if an OAuth token isn't provided.
     */
    secret?: string;
    /**
     * Name of the trigger to run the payload against
     */
    trigger?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }

  export class Resource$Projects$Locations$Workerpools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a `WorkerPool`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.create({
     *     // Required. The parent resource where this worker pool will be created. Format: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // If set, validate the request and preview the response, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *     // Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.
     *     workerPoolId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "privatePoolV1Config": {},
     *       //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Workerpools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Create
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
        {}) as Params$Resource$Projects$Locations$Workerpools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Create;
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
            url: (rootUrl + '/v1/{+parent}/workerPools').replace(
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
     * Deletes a `WorkerPool`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.delete({
     *     // If set to true, and the `WorkerPool` is not found, the request will succeed but no action will be taken on the server.
     *     allowMissing: 'placeholder-value',
     *     // Optional. If provided, it must match the server's etag on the workerpool for the request to be processed.
     *     etag: 'placeholder-value',
     *     // Required. The name of the `WorkerPool` to delete. Format: `projects/{project\}/locations/{location\}/workerPools/{workerPool\}`.
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *     // If set, validate the request and preview the response, but do not actually post it.
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
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Workerpools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Delete
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
        {}) as Params$Resource$Projects$Locations$Workerpools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Delete;
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
     * Returns details of a `WorkerPool`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.get({
     *     // Required. The name of the `WorkerPool` to retrieve. Format: `projects/{project\}/locations/{location\}/workerPools/{workerPool\}`.
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "privatePoolV1Config": {},
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workerpools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkerPool>;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WorkerPool>,
      callback: BodyResponseCallback<Schema$WorkerPool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      callback: BodyResponseCallback<Schema$WorkerPool>
    ): void;
    get(callback: BodyResponseCallback<Schema$WorkerPool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Get
        | BodyResponseCallback<Schema$WorkerPool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkerPool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkerPool>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WorkerPool> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Get;
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
        createAPIRequest<Schema$WorkerPool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkerPool>(parameters);
      }
    }

    /**
     * Lists `WorkerPool`s.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.list({
     *     // The maximum number of `WorkerPool`s to return. The service may return fewer than this value. If omitted, the server will use a sensible default.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListWorkerPools` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the collection of `WorkerPools`. Format: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "workerPools": []
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
      params: Params$Resource$Projects$Locations$Workerpools$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Workerpools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkerPoolsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkerPoolsResponse>,
      callback: BodyResponseCallback<Schema$ListWorkerPoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$List,
      callback: BodyResponseCallback<Schema$ListWorkerPoolsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWorkerPoolsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$List
        | BodyResponseCallback<Schema$ListWorkerPoolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkerPoolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkerPoolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkerPoolsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$List;
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
            url: (rootUrl + '/v1/{+parent}/workerPools').replace(
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
        createAPIRequest<Schema$ListWorkerPoolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkerPoolsResponse>(parameters);
      }
    }

    /**
     * Updates a `WorkerPool`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.patch({
     *     // Output only. The resource name of the `WorkerPool`, with format `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`. The value of `{worker_pool\}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location\}` is determined by the endpoint accessed.
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *     // A mask specifying which fields in `worker_pool` to update.
     *     updateMask: 'placeholder-value',
     *     // If set, validate the request and preview the response, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "privatePoolV1Config": {},
     *       //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Workerpools$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Patch
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
        {}) as Params$Resource$Projects$Locations$Workerpools$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Patch;
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workerpools$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this worker pool will be created. Format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * If set, validate the request and preview the response, but do not actually post it.
     */
    validateOnly?: boolean;
    /**
     * Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.
     */
    workerPoolId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkerPool;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Delete
    extends StandardParameters {
    /**
     * If set to true, and the `WorkerPool` is not found, the request will succeed but no action will be taken on the server.
     */
    allowMissing?: boolean;
    /**
     * Optional. If provided, it must match the server's etag on the workerpool for the request to be processed.
     */
    etag?: string;
    /**
     * Required. The name of the `WorkerPool` to delete. Format: `projects/{project\}/locations/{location\}/workerPools/{workerPool\}`.
     */
    name?: string;
    /**
     * If set, validate the request and preview the response, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Get
    extends StandardParameters {
    /**
     * Required. The name of the `WorkerPool` to retrieve. Format: `projects/{project\}/locations/{location\}/workerPools/{workerPool\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$List
    extends StandardParameters {
    /**
     * The maximum number of `WorkerPool`s to return. The service may return fewer than this value. If omitted, the server will use a sensible default.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListWorkerPools` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the collection of `WorkerPools`. Format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the `WorkerPool`, with format `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`. The value of `{worker_pool\}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location\}` is determined by the endpoint accessed.
     */
    name?: string;
    /**
     * A mask specifying which fields in `worker_pool` to update.
     */
    updateMask?: string;
    /**
     * If set, validate the request and preview the response, but do not actually post it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkerPool;
  }

  export class Resource$Projects$Triggers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `BuildTrigger`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.create({
     *     // The parent resource where this trigger will be created. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'placeholder-value',
     *     // Required. ID of the project for which to configure automatic builds.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approvalConfig": {},
     *       //   "autodetect": false,
     *       //   "bitbucketServerTriggerConfig": {},
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "eventType": "my_eventType",
     *       //   "filename": "my_filename",
     *       //   "filter": "my_filter",
     *       //   "gitFileSource": {},
     *       //   "github": {},
     *       //   "gitlabEnterpriseEventsConfig": {},
     *       //   "id": "my_id",
     *       //   "ignoredFiles": [],
     *       //   "includeBuildLogs": "my_includeBuildLogs",
     *       //   "includedFiles": [],
     *       //   "name": "my_name",
     *       //   "pubsubConfig": {},
     *       //   "repositoryEventConfig": {},
     *       //   "resourceName": "my_resourceName",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "sourceToBuild": {},
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "triggerTemplate": {},
     *       //   "webhookConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approvalConfig": {},
     *   //   "autodetect": false,
     *   //   "bitbucketServerTriggerConfig": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "eventType": "my_eventType",
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "gitFileSource": {},
     *   //   "github": {},
     *   //   "gitlabEnterpriseEventsConfig": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includeBuildLogs": "my_includeBuildLogs",
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "repositoryEventConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "sourceToBuild": {},
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
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
      params: Params$Resource$Projects$Triggers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Triggers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    create(
      params: Params$Resource$Projects$Triggers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.delete({
     *     // The name of the `Trigger` to delete. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'placeholder-value',
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. ID of the `BuildTrigger` to delete.
     *     triggerId: 'placeholder-value',
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
      params: Params$Resource$Projects$Triggers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Triggers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Triggers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns information about a `BuildTrigger`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.get({
     *     // The name of the `Trigger` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'placeholder-value',
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     *     triggerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approvalConfig": {},
     *   //   "autodetect": false,
     *   //   "bitbucketServerTriggerConfig": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "eventType": "my_eventType",
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "gitFileSource": {},
     *   //   "github": {},
     *   //   "gitlabEnterpriseEventsConfig": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includeBuildLogs": "my_includeBuildLogs",
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "repositoryEventConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "sourceToBuild": {},
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
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
      params: Params$Resource$Projects$Triggers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Triggers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    get(
      params: Params$Resource$Projects$Triggers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Lists existing `BuildTrigger`s. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.list({
     *     // Number of results to return in the list.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // The parent of the collection of `Triggers`. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'placeholder-value',
     *     // Required. ID of the project for which to list BuildTriggers.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "triggers": []
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
      params: Params$Resource$Projects$Triggers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Triggers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildTriggersResponse>;
    list(
      params: Params$Resource$Projects$Triggers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBuildTriggersResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuildTriggersResponse>(parameters);
      }
    }

    /**
     * Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.patch({
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. ID of the `BuildTrigger` to update.
     *     triggerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "approvalConfig": {},
     *       //   "autodetect": false,
     *       //   "bitbucketServerTriggerConfig": {},
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "eventType": "my_eventType",
     *       //   "filename": "my_filename",
     *       //   "filter": "my_filter",
     *       //   "gitFileSource": {},
     *       //   "github": {},
     *       //   "gitlabEnterpriseEventsConfig": {},
     *       //   "id": "my_id",
     *       //   "ignoredFiles": [],
     *       //   "includeBuildLogs": "my_includeBuildLogs",
     *       //   "includedFiles": [],
     *       //   "name": "my_name",
     *       //   "pubsubConfig": {},
     *       //   "repositoryEventConfig": {},
     *       //   "resourceName": "my_resourceName",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "sourceToBuild": {},
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "triggerTemplate": {},
     *       //   "webhookConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "approvalConfig": {},
     *   //   "autodetect": false,
     *   //   "bitbucketServerTriggerConfig": {},
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "eventType": "my_eventType",
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "gitFileSource": {},
     *   //   "github": {},
     *   //   "gitlabEnterpriseEventsConfig": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includeBuildLogs": "my_includeBuildLogs",
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "repositoryEventConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "sourceToBuild": {},
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
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
      params: Params$Resource$Projects$Triggers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Triggers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    patch(
      params: Params$Resource$Projects$Triggers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId\}/locations/{region\}/triggers/{triggerId\}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.run({
     *     // The name of the `Trigger` to run. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *     // Required. ID of the trigger.
     *     triggerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "branchName": "my_branchName",
     *       //   "commitSha": "my_commitSha",
     *       //   "dir": "my_dir",
     *       //   "invertRegex": false,
     *       //   "projectId": "my_projectId",
     *       //   "repoName": "my_repoName",
     *       //   "substitutions": {},
     *       //   "tagName": "my_tagName"
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
    run(
      params: Params$Resource$Projects$Triggers$Run,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    run(
      params?: Params$Resource$Projects$Triggers$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    run(
      params: Params$Resource$Projects$Triggers$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.webhook({
     *     // The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'placeholder-value',
     *     // Project in which the specified trigger lives
     *     projectId: 'placeholder-value',
     *     // Secret token used for authorization if an OAuth token isn't provided.
     *     secret: 'placeholder-value',
     *     // Name of the trigger to run the payload against
     *     trigger: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentType": "my_contentType",
     *       //   "data": "my_data",
     *       //   "extensions": []
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
    webhook(
      params: Params$Resource$Projects$Triggers$Webhook,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    webhook(
      params?: Params$Resource$Projects$Triggers$Webhook,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReceiveTriggerWebhookResponse>;
    webhook(
      params: Params$Resource$Projects$Triggers$Webhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    webhook(
      params: Params$Resource$Projects$Triggers$Webhook,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>,
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      params: Params$Resource$Projects$Triggers$Webhook,
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Webhook
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReceiveTriggerWebhookResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Webhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Webhook;
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
              rootUrl + '/v1/projects/{projectId}/triggers/{trigger}:webhook'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'trigger'],
        pathParams: ['projectId', 'trigger'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReceiveTriggerWebhookResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReceiveTriggerWebhookResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Triggers$Create
    extends StandardParameters {
    /**
     * The parent resource where this trigger will be created. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project for which to configure automatic builds.
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
     * The name of the `Trigger` to delete. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. ID of the `BuildTrigger` to delete.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Triggers$Get
    extends StandardParameters {
    /**
     * The name of the `Trigger` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Triggers$List
    extends StandardParameters {
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * The parent of the collection of `Triggers`. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project for which to list BuildTriggers.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Triggers$Patch
    extends StandardParameters {
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. ID of the `BuildTrigger` to update.
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
     * The name of the `Trigger` to run. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
    /**
     * Required. ID of the trigger.
     */
    triggerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RepoSource;
  }
  export interface Params$Resource$Projects$Triggers$Webhook
    extends StandardParameters {
    /**
     * The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Project in which the specified trigger lives
     */
    projectId?: string;
    /**
     * Secret token used for authorization if an OAuth token isn't provided.
     */
    secret?: string;
    /**
     * Name of the trigger to run the payload against
     */
    trigger?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ReceiveWebhook is called when the API receives a GitHub webhook.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.webhook({
     *     // For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     *     webhookKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentType": "my_contentType",
     *       //   "data": "my_data",
     *       //   "extensions": []
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
    webhook(
      params: Params$Resource$V1$Webhook,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    webhook(
      params?: Params$Resource$V1$Webhook,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    webhook(
      params: Params$Resource$V1$Webhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    webhook(
      params: Params$Resource$V1$Webhook,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    webhook(
      params: Params$Resource$V1$Webhook,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    webhook(callback: BodyResponseCallback<Schema$Empty>): void;
    webhook(
      paramsOrCallback?:
        | Params$Resource$V1$Webhook
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
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Webhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Webhook;
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
            url: (rootUrl + '/v1/webhook').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$V1$Webhook extends StandardParameters {
    /**
     * For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     */
    webhookKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
}
