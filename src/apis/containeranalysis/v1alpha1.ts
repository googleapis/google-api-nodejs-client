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

export namespace containeranalysis_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
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
   * Container Analysis API
   *
   * An implementation of the Grafeas API, which stores, and enables querying and retrieval of critical metadata about all of your software artifacts.
   *
   * @example
   * const {google} = require('googleapis');
   * const containeranalysis = google.containeranalysis('v1alpha1');
   *
   * @namespace containeranalysis
   * @type {Function}
   * @version v1alpha1
   * @variation v1alpha1
   * @param {object=} options Options for Containeranalysis
   */
  export class Containeranalysis {
    context: APIRequestContext;
    projects: Resource$Projects;
    providers: Resource$Providers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
      this.providers = new Resource$Providers(this.context);
    }
  }

  /**
   * Artifact describes a build product.
   */
  export interface Schema$Artifact {
    /**
     * Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container.
     */
    checksum?: string | null;
    /**
     * Artifact ID, if any; for container images, this will be a URL by digest like gcr.io/projectID/imagename@sha256:123456
     */
    id?: string | null;
    /**
     * Name of the artifact. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`.  This field is deprecated in favor of the plural `names` field; it continues to exist here to allow existing BuildProvenance serialized to json in google.devtools.containeranalysis.v1alpha1.BuildDetails.provenance_bytes to deserialize back into proto.
     */
    name?: string | null;
    /**
     * Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.
     */
    names?: string[] | null;
  }
  /**
   * Occurrence that represents a single &quot;attestation&quot;.  The authenticity of an Attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust.  In this circumstance, the AttestationAuthority to which this Attestation is attached is primarily useful for look-up (how to find this Attestation if you already know the Authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).
   */
  export interface Schema$Attestation {
    pgpSignedAttestation?: Schema$PgpSignedAttestation;
  }
  /**
   * Note kind that represents a logical attestation &quot;role&quot; or &quot;authority&quot;.  For example, an organization might have one `AttestationAuthority` for &quot;QA&quot; and one for &quot;build&quot;.  This Note is intended to act strictly as a grouping mechanism for the attached Occurrences (Attestations).  This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an Occurrence to a given Note.  It also provides a single point of lookup to find all attached Attestation Occurrences, even if they don&#39;t all live in the same project.
   */
  export interface Schema$AttestationAuthority {
    hint?: Schema$AttestationAuthorityHint;
  }
  /**
   * This submessage provides human-readable hints about the purpose of the AttestationAuthority.  Because the name of a Note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from &quot;readable&quot; names more suitable for debug output.  Note that these hints should NOT be used to look up AttestationAuthorities in security sensitive contexts, such as when looking up Attestations to verify.
   */
  export interface Schema$AttestationAuthorityHint {
    /**
     * The human readable name of this Attestation Authority, for example &quot;qa&quot;.
     */
    humanReadableName?: string | null;
  }
  /**
   * Basis describes the base image portion (Note) of the DockerImage relationship.  Linked occurrences are derived from this or an equivalent image via:   FROM &lt;Basis.resource_url&gt; Or an equivalent reference, e.g. a tag of the resource_url.
   */
  export interface Schema$Basis {
    /**
     * The fingerprint of the base image.
     */
    fingerprint?: Schema$Fingerprint;
    /**
     * The resource_url for the resource representing the basis of associated occurrence images.
     */
    resourceUrl?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Message encapsulating build provenance details.
   */
  export interface Schema$BuildDetails {
    /**
     * The actual provenance
     */
    provenance?: Schema$BuildProvenance;
    /**
     * Serialized JSON representation of the provenance, used in generating the `BuildSignature` in the corresponding Result. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification.  The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.
     */
    provenanceBytes?: string | null;
  }
  /**
   * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
   */
  export interface Schema$BuildProvenance {
    /**
     * Version string of the builder at the time this build was executed.
     */
    builderVersion?: string | null;
    /**
     * Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.
     */
    buildOptions?: {[key: string]: string} | null;
    /**
     * Output of the build.
     */
    builtArtifacts?: Schema$Artifact[];
    /**
     * Commands requested by the build.
     */
    commands?: Schema$Command[];
    /**
     * Time at which the build was created.
     */
    createTime?: string | null;
    /**
     * E-mail address of the user who initiated this build. Note that this was the user&#39;s e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.
     */
    creator?: string | null;
    /**
     * Time at which execution of the build was finished.
     */
    finishTime?: string | null;
    /**
     * Unique identifier of the build.
     */
    id?: string | null;
    /**
     * Google Cloud Storage bucket where logs were written.
     */
    logsBucket?: string | null;
    /**
     * ID of the project.
     */
    projectId?: string | null;
    /**
     * Details of the Source input to the build.
     */
    sourceProvenance?: Schema$Source;
    /**
     * Time at which execution of the build was started.
     */
    startTime?: string | null;
    /**
     * Trigger identifier if the build was triggered automatically; empty if not.
     */
    triggerId?: string | null;
  }
  /**
   * Message encapsulating the signature of the verified build.
   */
  export interface Schema$BuildSignature {
    /**
     * An Id for the key used to sign. This could be either an Id for the key stored in `public_key` (such as the Id or fingerprint for a PGP key, or the CN for a cert), or a reference to an external key (such as a reference to a key in Cloud Key Management Service).
     */
    keyId?: string | null;
    /**
     * The type of the key, either stored in `public_key` or referenced in `key_id`
     */
    keyType?: string | null;
    /**
     * Public key of the builder which can be used to verify that the related findings are valid and unchanged. If `key_type` is empty, this defaults to PEM encoded public keys.  This field may be empty if `key_id` references an external key.  For Cloud Build based signatures, this is a PEM encoded public key. To verify the Cloud Build signature, place the contents of this field into a file (public.pem). The signature field is base64-decoded into its binary representation in signature.bin, and the provenance bytes from `BuildDetails` are base64-decoded into a binary representation in signed.bin. OpenSSL can then verify the signature: `openssl sha256 -verify public.pem -signature signature.bin signed.bin`
     */
    publicKey?: string | null;
    /**
     * Signature of the related `BuildProvenance`, encoded in a base64 string.
     */
    signature?: string | null;
  }
  /**
   * Note holding the version of the provider&#39;s builder and the signature of the provenance message in linked BuildDetails.
   */
  export interface Schema$BuildType {
    /**
     * Version of the builder which produced this Note.
     */
    builderVersion?: string | null;
    /**
     * Signature of the build in Occurrences pointing to the Note containing this `BuilderDetails`.
     */
    signature?: Schema$BuildSignature;
  }
  /**
   * Command describes a step performed as part of the build pipeline.
   */
  export interface Schema$Command {
    /**
     * Command-line arguments used when executing this Command.
     */
    args?: string[] | null;
    /**
     * Working directory (relative to project source root) used when running this Command.
     */
    dir?: string | null;
    /**
     * Environment variables set before running this Command.
     */
    env?: string[] | null;
    /**
     * Optional unique identifier for this Command, used in wait_for to reference this Command as a dependency.
     */
    id?: string | null;
    /**
     * Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.
     */
    name?: string | null;
    /**
     * The ID(s) of the Command(s) that this Command depends on.
     */
    waitFor?: string[] | null;
  }
  /**
   * Request for creating an operation
   */
  export interface Schema$CreateOperationRequest {
    /**
     * The operation to create.
     */
    operation?: Schema$Operation;
    /**
     * The ID to use for this operation.
     */
    operationId?: string | null;
  }
  /**
   * An artifact that can be deployed in some runtime.
   */
  export interface Schema$Deployable {
    /**
     * Resource URI for the artifact being deployed.
     */
    resourceUri?: string[] | null;
  }
  /**
   * The period during which some deployable was active in a runtime.
   */
  export interface Schema$Deployment {
    /**
     * Address of the runtime element hosting this deployment.
     */
    address?: string | null;
    /**
     * Configuration used to create this deployment.
     */
    config?: string | null;
    /**
     * Beginning of the lifetime of this deployment.
     */
    deployTime?: string | null;
    /**
     * Platform hosting this deployment.
     */
    platform?: string | null;
    /**
     * Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.
     */
    resourceUri?: string[] | null;
    /**
     * End of the lifetime of this deployment.
     */
    undeployTime?: string | null;
    /**
     * Identity of the user that triggered this deployment.
     */
    userEmail?: string | null;
  }
  /**
   * Derived describes the derived image portion (Occurrence) of the DockerImage relationship.  This image would be produced from a Dockerfile with FROM &lt;DockerImage.Basis in attached Note&gt;.
   */
  export interface Schema$Derived {
    /**
     * Output only. This contains the base image URL for the derived image occurrence.
     */
    baseResourceUrl?: string | null;
    /**
     * Output only. The number of layers by which this image differs from the associated image basis.
     */
    distance?: number | null;
    /**
     * The fingerprint of the derived image.
     */
    fingerprint?: Schema$Fingerprint;
    /**
     * This contains layer-specific metadata, if populated it has length &quot;distance&quot; and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.
     */
    layerInfo?: Schema$Layer[];
  }
  /**
   * Identifies all occurrences of this vulnerability in the package for a specific distro/location For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2
   */
  export interface Schema$Detail {
    /**
     * The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability manifests.  Examples include distro or storage location for vulnerable jar. This field can be used as a filter in list requests.
     */
    cpeUri?: string | null;
    /**
     * A vendor-specific description of this note.
     */
    description?: string | null;
    /**
     * The fix for this specific package version.
     */
    fixedLocation?: Schema$VulnerabilityLocation;
    /**
     * Whether this Detail is obsolete. Occurrences are expected not to point to obsolete details.
     */
    isObsolete?: boolean | null;
    /**
     * The max version of the package in which the vulnerability exists.
     */
    maxAffectedVersion?: Schema$Version;
    /**
     * The min version of the package in which the vulnerability exists.
     */
    minAffectedVersion?: Schema$Version;
    /**
     * The name of the package where the vulnerability was found. This field can be used as a filter in list requests.
     */
    package?: string | null;
    /**
     * The type of package; whether native or non native(ruby gems, node.js packages etc)
     */
    packageType?: string | null;
    /**
     * The severity (eg: distro assigned severity) for this vulnerability.
     */
    severityName?: string | null;
  }
  /**
   * Provides information about the scan status of a discovered resource.
   */
  export interface Schema$Discovered {
    /**
     * The status of discovery for the resource.
     */
    analysisStatus?: string | null;
    /**
     * When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage output only and populated by the API.
     */
    analysisStatusError?: Schema$Status;
    /**
     * Whether the resource is continuously analyzed.
     */
    continuousAnalysis?: string | null;
    /**
     * Output only. An operation that indicates the status of the current scan. This field is deprecated, do not use.
     */
    operation?: Schema$Operation;
  }
  /**
   * A note that indicates a type of analysis a provider would perform. This note exists in a provider&#39;s project. A `Discovery` occurrence is created in a consumer&#39;s project at the start of analysis. The occurrence&#39;s operation will indicate the status of the analysis. Absence of an occurrence linked to this note for a resource indicates that analysis hasn&#39;t started.
   */
  export interface Schema$Discovery {
    /**
     * The kind of analysis that is handled by this discovery.
     */
    analysisKind?: string | null;
  }
  /**
   * This represents a particular channel of distribution for a given package. e.g. Debian&#39;s jessie-backports dpkg mirror
   */
  export interface Schema$Distribution {
    /**
     * The CPU architecture for which packages in this distribution channel were built
     */
    architecture?: string | null;
    /**
     * The cpe_uri in [cpe format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.
     */
    cpeUri?: string | null;
    /**
     * The distribution channel-specific description of this package.
     */
    description?: string | null;
    /**
     * The latest available version of this package in this distribution channel.
     */
    latestVersion?: Schema$Version;
    /**
     * A freeform string denoting the maintainer of this package.
     */
    maintainer?: string | null;
    /**
     * The distribution channel-specific homepage for this package.
     */
    url?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string | null;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Container message for hashes of byte content of files, used in Source messages to verify integrity of source input to the build.
   */
  export interface Schema$FileHashes {
    /**
     * Collection of file hashes.
     */
    fileHash?: Schema$Hash[];
  }
  /**
   * A set of properties that uniquely identify a given Docker image.
   */
  export interface Schema$Fingerprint {
    /**
     * The layer-id of the final layer in the Docker image&#39;s v1 representation. This field can be used as a filter in list requests.
     */
    v1Name?: string | null;
    /**
     * The ordered list of v2 blobs that represent a given image.
     */
    v2Blob?: string[] | null;
    /**
     * Output only. The name of the image&#39;s v2 blobs computed via:   [bottom] := v2_blobbottom := sha256(v2_blob[N] + &quot; &quot; + v2_name[N+1]) Only the name of the final blob is kept. This field can be used as a filter in list requests.
     */
    v2Name?: string | null;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The policy format version to be returned. Acceptable values are 0, 1, and 3. If the value is 0, or the field is omitted, policy format version 1 will be returned.
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * A summary of how many vulnz occurrences there are per severity type. counts by groups, or if we should have different summary messages like this.
   */
  export interface Schema$GetVulnzOccurrencesSummaryResponse {
    /**
     * A map of how many occurrences were found for each severity.
     */
    counts?: Schema$SeverityCount[];
  }
  /**
   * An alias to a repo revision.
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1AliasContext {
    /**
     * The alias kind.
     */
    kind?: string | null;
    /**
     * The alias name.
     */
    name?: string | null;
  }
  /**
   * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: Schema$GoogleDevtoolsContaineranalysisV1alpha1AliasContext;
    /**
     * The ID of the repo.
     */
    repoId?: Schema$GoogleDevtoolsContaineranalysisV1alpha1RepoId;
    /**
     * A revision ID.
     */
    revisionId?: string | null;
  }
  /**
   * A SourceContext referring to a Gerrit project.
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: Schema$GoogleDevtoolsContaineranalysisV1alpha1AliasContext;
    /**
     * The full project name within the host. Projects may be nested, so &quot;project/subproject&quot; is a valid project name. The &quot;repo name&quot; is the hostURI/project.
     */
    gerritProject?: string | null;
    /**
     * The URI of a running Gerrit instance.
     */
    hostUri?: string | null;
    /**
     * A revision (commit) ID.
     */
    revisionId?: string | null;
  }
  /**
   * A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext {
    /**
     * Required. Git commit hash.
     */
    revisionId?: string | null;
    /**
     * Git repository URL.
     */
    url?: string | null;
  }
  /**
   * Metadata for all operations used and required for all operations that created by Container Analysis Providers
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata {
    /**
     * Output only. The time this operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time that this operation was marked completed or failed.
     */
    endTime?: string | null;
  }
  /**
   * Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId {
    /**
     * The ID of the project.
     */
    projectId?: string | null;
    /**
     * The name of the repo. Leave empty for the default repo.
     */
    repoName?: string | null;
  }
  /**
   * A unique identifier for a Cloud Repo.
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1RepoId {
    /**
     * A combination of a project ID and a repo name.
     */
    projectRepoId?: Schema$GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId;
    /**
     * A server-assigned, globally unique identifier.
     */
    uid?: string | null;
  }
  /**
   * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1SourceContext {
    /**
     * A SourceContext referring to a revision in a Google Cloud Source Repo.
     */
    cloudRepo?: Schema$GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext;
    /**
     * A SourceContext referring to a Gerrit project.
     */
    gerrit?: Schema$GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext;
    /**
     * A SourceContext referring to any third party Git repo (e.g., GitHub).
     */
    git?: Schema$GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext;
    /**
     * Labels with user defined metadata.
     */
    labels?: {[key: string]: string} | null;
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
   * This represents how a particular software package may be installed on a system.
   */
  export interface Schema$Installation {
    /**
     * All of the places within the filesystem versions of this package have been found.
     */
    location?: Schema$Location[];
    /**
     * Output only. The name of the installed package.
     */
    name?: string | null;
  }
  /**
   * Layer holds metadata specific to a layer of a Docker image.
   */
  export interface Schema$Layer {
    /**
     * The recovered arguments to the Dockerfile directive.
     */
    arguments?: string | null;
    /**
     * The recovered Dockerfile directive used to construct this layer.
     */
    directive?: string | null;
  }
  /**
   * Response including listed occurrences for a note.
   */
  export interface Schema$ListNoteOccurrencesResponse {
    /**
     * Token to receive the next page of notes.
     */
    nextPageToken?: string | null;
    /**
     * The occurrences attached to the specified note.
     */
    occurrences?: Schema$Occurrence[];
  }
  /**
   * Response including listed notes.
   */
  export interface Schema$ListNotesResponse {
    /**
     * The next pagination token in the list response. It should be used as page_token for the following request. An empty value means no more result.
     */
    nextPageToken?: string | null;
    /**
     * The occurrences requested
     */
    notes?: Schema$Note[];
  }
  /**
   * Response including listed active occurrences.
   */
  export interface Schema$ListOccurrencesResponse {
    /**
     * The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string | null;
    /**
     * The occurrences requested.
     */
    occurrences?: Schema$Occurrence[];
  }
  /**
   * A list of scan configs for the project.
   */
  export interface Schema$ListScanConfigsResponse {
    /**
     * A page token to pass in order to get more scan configs.
     */
    nextPageToken?: string | null;
    /**
     * The set of scan configs.
     */
    scanConfigs?: Schema$ScanConfig[];
  }
  /**
   * An occurrence of a particular package installation found within a system&#39;s filesystem. e.g. glibc was found in /var/lib/dpkg/status
   */
  export interface Schema$Location {
    /**
     * The cpe_uri in [cpe format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.
     */
    cpeUri?: string | null;
    /**
     * The path from which we gathered that this package/version is installed.
     */
    path?: string | null;
    /**
     * The version installed at this location.
     */
    version?: Schema$Version;
  }
  /**
   * Provides a detailed description of a `Note`.
   */
  export interface Schema$Note {
    /**
     * A note describing an attestation role.
     */
    attestationAuthority?: Schema$AttestationAuthority;
    /**
     * A note describing a base image.
     */
    baseImage?: Schema$Basis;
    /**
     * Build provenance type for a verifiable build.
     */
    buildType?: Schema$BuildType;
    /**
     * Output only. The time this note was created. This field can be used as a filter in list requests.
     */
    createTime?: string | null;
    /**
     * A note describing something that can be deployed.
     */
    deployable?: Schema$Deployable;
    /**
     * A note describing a provider/analysis type.
     */
    discovery?: Schema$Discovery;
    /**
     * Time of expiration for this note, null if note does not expire.
     */
    expirationTime?: string | null;
    /**
     * Output only. This explicitly denotes which kind of note is specified. This field can be used as a filter in list requests.
     */
    kind?: string | null;
    /**
     * A detailed description of this `Note`.
     */
    longDescription?: string | null;
    /**
     * The name of the note in the form &quot;projects/{provider_project_id}/notes/{NOTE_ID}&quot;
     */
    name?: string | null;
    /**
     * A note describing a package hosted by various package managers.
     */
    package?: Schema$Package;
    /**
     * URLs associated with this note
     */
    relatedUrl?: Schema$RelatedUrl[];
    /**
     * A one sentence description of this `Note`.
     */
    shortDescription?: string | null;
    /**
     * Output only. The time this note was last updated. This field can be used as a filter in list requests.
     */
    updateTime?: string | null;
    /**
     * A note describing an upgrade.
     */
    upgrade?: Schema$UpgradeNote;
    /**
     * A package vulnerability type of note.
     */
    vulnerabilityType?: Schema$VulnerabilityType;
  }
  /**
   * `Occurrence` includes information about analysis occurrences for an image.
   */
  export interface Schema$Occurrence {
    /**
     * Describes an attestation of an artifact.
     */
    attestation?: Schema$Attestation;
    /**
     * Build details for a verifiable build.
     */
    buildDetails?: Schema$BuildDetails;
    /**
     * Output only. The time this `Occurrence` was created.
     */
    createTime?: string | null;
    /**
     * Describes the deployment of an artifact on a runtime.
     */
    deployment?: Schema$Deployment;
    /**
     * Describes how this resource derives from the basis in the associated note.
     */
    derivedImage?: Schema$Derived;
    /**
     * Describes the initial scan status for this resource.
     */
    discovered?: Schema$Discovered;
    /**
     * Describes the installation of a package on the linked resource.
     */
    installation?: Schema$Installation;
    /**
     * Output only. This explicitly denotes which of the `Occurrence` details are specified. This field can be used as a filter in list requests.
     */
    kind?: string | null;
    /**
     * Output only. The name of the `Occurrence` in the form &quot;projects/{project_id}/occurrences/{OCCURRENCE_ID}&quot;
     */
    name?: string | null;
    /**
     * An analysis note associated with this image, in the form &quot;providers/{provider_id}/notes/{NOTE_ID}&quot; This field can be used as a filter in list requests.
     */
    noteName?: string | null;
    /**
     * A description of actions that can be taken to remedy the `Note`
     */
    remediation?: string | null;
    /**
     *  The resource for which the `Occurrence` applies.
     */
    resource?: Schema$Resource;
    /**
     * The unique URL of the image or the container for which the `Occurrence` applies. For example, https://gcr.io/project/image@sha256:foo This field can be used as a filter in list requests.
     */
    resourceUrl?: string | null;
    /**
     * Output only. The time this `Occurrence` was last updated.
     */
    updateTime?: string | null;
    /**
     * Describes an upgrade.
     */
    upgrade?: Schema$UpgradeOccurrence;
    /**
     * Details of a security vulnerability note.
     */
    vulnerabilityDetails?: Schema$VulnerabilityDetails;
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
   * This represents a particular package that is distributed over various channels. e.g. glibc (aka libc6) is distributed by many, at various versions.
   */
  export interface Schema$Package {
    /**
     * The various channels by which a package is distributed.
     */
    distribution?: Schema$Distribution[];
    /**
     * The name of the package.
     */
    name?: string | null;
  }
  /**
   * This message wraps a location affected by a vulnerability and its associated fix (if one is available).
   */
  export interface Schema$PackageIssue {
    /**
     * The location of the vulnerability.
     */
    affectedLocation?: Schema$VulnerabilityLocation;
    /**
     * The location of the available fix for vulnerability.
     */
    fixedLocation?: Schema$VulnerabilityLocation;
    severityName?: string | null;
  }
  /**
   * An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.
   */
  export interface Schema$PgpSignedAttestation {
    /**
     * Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema).
     */
    contentType?: string | null;
    /**
     * The cryptographic fingerprint of the key used to generate the signature, as output by, e.g. `gpg --list-keys`. This should be the version 4, full 160-bit fingerprint, expressed as a 40 character hexadecimal string. See https://tools.ietf.org/html/rfc4880#section-12.2 for details. Implementations may choose to acknowledge &quot;LONG&quot;, &quot;SHORT&quot;, or other abbreviated key IDs, but only the full fingerprint is guaranteed to work. In gpg, the full fingerprint can be retrieved from the `fpr` field returned when calling --list-keys with --with-colons.  For example: ``` gpg --with-colons --with-fingerprint --force-v4-certs \     --list-keys attester@example.com tru::1:1513631572:0:3:1:5 pub:...&lt;SNIP&gt;... fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`.
     */
    pgpKeyId?: string | null;
    /**
     * The raw content of the signature, as output by GNU Privacy Guard (GPG) or equivalent.  Since this message only supports attached signatures, the payload that was signed must be attached. While the signature format supported is dependent on the verification implementation, currently only ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor --output=signature.gpg payload.json` will create the signature content expected in this field in `signature.gpg` for the `payload.json` attestation payload.
     */
    signature?: string | null;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-other-app@appspot.gserviceaccount.com       role: roles/owner     - members:       - user:sean@example.com       role: roles/viewer   For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten.
     */
    etag?: string | null;
    /**
     * Deprecated.
     */
    version?: number | null;
  }
  /**
   * Metadata for any related URL information
   */
  export interface Schema$RelatedUrl {
    /**
     * Label to describe usage of the URL
     */
    label?: string | null;
    /**
     * Specific URL to associate with the note
     */
    url?: string | null;
  }
  /**
   * RepoSource describes the location of the source in a Google Cloud Source Repository.
   */
  export interface Schema$RepoSource {
    /**
     * Name of the branch to build.
     */
    branchName?: string | null;
    /**
     * Explicit commit SHA to build.
     */
    commitSha?: string | null;
    /**
     * ID of the project that owns the repo.
     */
    projectId?: string | null;
    /**
     * Name of the repo.
     */
    repoName?: string | null;
    /**
     * Name of the tag to build.
     */
    tagName?: string | null;
  }
  /**
   *  Resource is an entity that can have metadata. E.g., a Docker image.
   */
  export interface Schema$Resource {
    /**
     * The hash of the resource content. E.g., the Docker digest.
     */
    contentHash?: Schema$Hash;
    /**
     * The name of the resource. E.g., the name of a Docker image - &quot;Debian&quot;.
     */
    name?: string | null;
    /**
     * The unique URI of the resource. E.g., &quot;https://gcr.io/project/image@sha256:foo&quot; for a Docker image.
     */
    uri?: string | null;
  }
  /**
   * Indicates various scans and whether they are turned on or off.
   */
  export interface Schema$ScanConfig {
    /**
     * Output only. The time this scan config was created.
     */
    createTime?: string | null;
    /**
     * Output only. A human-readable description of what the `ScanConfig` does.
     */
    description?: string | null;
    /**
     * Indicates whether the Scan is enabled.
     */
    enabled?: boolean | null;
    /**
     * Output only. The name of the ScanConfig in the form “projects/{project_id}/scanConfigs/{scan_config_id}&quot;.
     */
    name?: string | null;
    /**
     * Output only. The time this scan config was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * The number of occurrences created for a specific severity.
   */
  export interface Schema$SeverityCount {
    /**
     * The number of occurrences with the severity.
     */
    count?: string | null;
    /**
     * The severity of the occurrences.
     */
    severity?: string | null;
  }
  /**
   * Source describes the location of the source used for the build.
   */
  export interface Schema$Source {
    /**
     * If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.
     */
    additionalContexts?: Schema$GoogleDevtoolsContaineranalysisV1alpha1SourceContext[];
    /**
     * If provided, the input binary artifacts for the build came from this location.
     */
    artifactStorageSource?: Schema$StorageSource;
    /**
     * If provided, the source code used for the build came from this location.
     */
    context?: Schema$GoogleDevtoolsContaineranalysisV1alpha1SourceContext;
    /**
     * Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build.  The keys to this map are file paths used as build source and the values contain the hash values for those files.  If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.
     */
    fileHashes?: {[key: string]: Schema$FileHashes} | null;
    /**
     * If provided, get source from this location in a Cloud Repo.
     */
    repoSource?: Schema$RepoSource;
    /**
     * If provided, get the source from this location in in Google Cloud Storage.
     */
    storageSource?: Schema$StorageSource;
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
   * StorageSource describes the location of the source in an archive file in Google Cloud Storage.
   */
  export interface Schema$StorageSource {
    /**
     * Google Cloud Storage bucket containing source (see [Bucket Name Requirements] (https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Google Cloud Storage generation for the object.
     */
    generation?: string | null;
    /**
     * Google Cloud Storage object containing source.
     */
    object?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
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
   * Request for updating an existing operation
   */
  export interface Schema$UpdateOperationRequest {
    /**
     * The operation to create.
     */
    operation?: Schema$Operation;
    /**
     * The fields to update.
     */
    updateMask?: string | null;
  }
  /**
   * The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
   */
  export interface Schema$UpgradeDistribution {
    /**
     * The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed.
     */
    classification?: string | null;
    /**
     * Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/.
     */
    cpeUri?: string | null;
    /**
     * The cve that would be resolved by this upgrade.
     */
    cve?: string[] | null;
    /**
     * The severity as specified by the upstream operating system.
     */
    severity?: string | null;
  }
  /**
   * An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be a Upgrade Note.
   */
  export interface Schema$UpgradeNote {
    /**
     * Metadata about the upgrade for each specific operating system.
     */
    distributions?: Schema$UpgradeDistribution[];
    /**
     * Required - The package this Upgrade is for.
     */
    package?: string | null;
    /**
     * Required - The version of the package in machine + human readable form.
     */
    version?: Schema$Version;
  }
  /**
   * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability).
   */
  export interface Schema$UpgradeOccurrence {
    /**
     * Metadata about the upgrade for available for the specific operating system for the resource_url. This allows efficient filtering, as well as making it easier to use the occurrence.
     */
    distribution?: Schema$UpgradeDistribution;
    /**
     * Required - The package this Upgrade is for.
     */
    package?: string | null;
    /**
     * Required - The version of the package in a machine + human readable form.
     */
    parsedVersion?: Schema$Version;
  }
  /**
   * Version contains structured information about the version of the package. For a discussion of this in Debian/Ubuntu: http://serverfault.com/questions/604541/debian-packages-version-convention For a discussion of this in Redhat/Fedora/Centos: http://blog.jasonantman.com/2014/07/how-yum-and-rpm-compare-versions/
   */
  export interface Schema$Version {
    /**
     * Used to correct mistakes in the version numbering scheme.
     */
    epoch?: number | null;
    /**
     * Distinguish between sentinel MIN/MAX versions and normal versions. If kind is not NORMAL, then the other fields are ignored.
     */
    kind?: string | null;
    /**
     * The main part of the version name.
     */
    name?: string | null;
    /**
     * The iteration of the package build from the above version.
     */
    revision?: string | null;
  }
  /**
   * Used by Occurrence to point to where the vulnerability exists and how to fix it.
   */
  export interface Schema$VulnerabilityDetails {
    /**
     * Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0-10 where 0 indicates low severity and 10 indicates high severity.
     */
    cvssScore?: number | null;
    /**
     * The distro assigned severity for this vulnerability when that is available and note provider assigned severity when distro has not yet assigned a severity for this vulnerability.
     */
    effectiveSeverity?: string | null;
    /**
     * The set of affected locations and their fixes (if available) within the associated resource.
     */
    packageIssue?: Schema$PackageIssue[];
    /**
     * Output only. The note provider assigned Severity of the vulnerability.
     */
    severity?: string | null;
    /**
     * The type of package; whether native or non native(ruby gems, node.js packages etc)
     */
    type?: string | null;
  }
  /**
   * The location of the vulnerability
   */
  export interface Schema$VulnerabilityLocation {
    /**
     * The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) format. Examples include distro or storage location for vulnerable jar. This field can be used as a filter in list requests.
     */
    cpeUri?: string | null;
    /**
     * The package being described.
     */
    package?: string | null;
    /**
     * The version of the package being described. This field can be used as a filter in list requests.
     */
    version?: Schema$Version;
  }
  /**
   * VulnerabilityType provides metadata about a security vulnerability.
   */
  export interface Schema$VulnerabilityType {
    /**
     * The CVSS score for this Vulnerability.
     */
    cvssScore?: number | null;
    /**
     * All information about the package to specifically identify this vulnerability. One entry per (version range and cpe_uri) the package vulnerability has manifested in.
     */
    details?: Schema$Detail[];
    /**
     * Note provider assigned impact of the vulnerability
     */
    severity?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    notes: Resource$Projects$Notes;
    occurrences: Resource$Projects$Occurrences;
    operations: Resource$Projects$Operations;
    scanConfigs: Resource$Projects$Scanconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.notes = new Resource$Projects$Notes(this.context);
      this.occurrences = new Resource$Projects$Occurrences(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
      this.scanConfigs = new Resource$Projects$Scanconfigs(this.context);
    }
  }

  export class Resource$Projects$Notes {
    context: APIRequestContext;
    occurrences: Resource$Projects$Notes$Occurrences;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.occurrences = new Resource$Projects$Notes$Occurrences(this.context);
    }

    /**
     * containeranalysis.projects.notes.create
     * @desc Creates a new `Note`.
     * @alias containeranalysis.projects.notes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.name The name of the project. Should be of the form "providers/{provider_id}". @Deprecated
     * @param {string=} params.noteId The ID to use for this note.
     * @param {string} params.parent This field contains the project Id for example: "projects/{project_id}
     * @param {().Note} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Notes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    create(
      params: Params$Resource$Projects$Notes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(
      params: Params$Resource$Projects$Notes$Create,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(callback: BodyResponseCallback<Schema$Note>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Create
        | BodyResponseCallback<Schema$Note>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback?: BodyResponseCallback<Schema$Note>
    ): void | GaxiosPromise<Schema$Note> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/notes').replace(
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
        createAPIRequest<Schema$Note>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * containeranalysis.projects.notes.delete
     * @desc Deletes the given `Note` from the system.
     * @alias containeranalysis.projects.notes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Notes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Notes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Notes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * containeranalysis.projects.notes.get
     * @desc Returns the requested `Note`.
     * @alias containeranalysis.projects.notes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Notes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    get(
      params: Params$Resource$Projects$Notes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(
      params: Params$Resource$Projects$Notes$Get,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(callback: BodyResponseCallback<Schema$Note>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Get
        | BodyResponseCallback<Schema$Note>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback?: BodyResponseCallback<Schema$Note>
    ): void | GaxiosPromise<Schema$Note> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Note>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * containeranalysis.projects.notes.getIamPolicy
     * @desc Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
     * @alias containeranalysis.projects.notes.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Notes$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Notes$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Notes$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * containeranalysis.projects.notes.list
     * @desc Lists all `Notes` for a given project.
     * @alias containeranalysis.projects.notes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression.
     * @param {string=} params.name The name field will contain the project Id for example: "providers/{provider_id} @Deprecated
     * @param {integer=} params.pageSize Number of notes to return in the list.
     * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent This field contains the project Id for example: "projects/{PROJECT_ID}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Notes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNotesResponse>;
    list(
      params: Params$Resource$Projects$Notes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListNotesResponse>,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$List,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$List
        | BodyResponseCallback<Schema$ListNotesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNotesResponse>,
      callback?: BodyResponseCallback<Schema$ListNotesResponse>
    ): void | GaxiosPromise<Schema$ListNotesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/notes').replace(
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
        createAPIRequest<Schema$ListNotesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListNotesResponse>(parameters);
      }
    }

    /**
     * containeranalysis.projects.notes.patch
     * @desc Updates an existing `Note`.
     * @alias containeranalysis.projects.notes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}".
     * @param {string=} params.updateMask The fields to update.
     * @param {().Note} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Notes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    patch(
      params: Params$Resource$Projects$Notes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(
      params: Params$Resource$Projects$Notes$Patch,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Note>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Patch
        | BodyResponseCallback<Schema$Note>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback?: BodyResponseCallback<Schema$Note>
    ): void | GaxiosPromise<Schema$Note> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Note>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * containeranalysis.projects.notes.setIamPolicy
     * @desc Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
     * @alias containeranalysis.projects.notes.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Notes$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Notes$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Notes$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * containeranalysis.projects.notes.testIamPermissions
     * @desc Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`
     * @alias containeranalysis.projects.notes.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Notes$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Notes$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Notes$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:testIamPermissions').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Notes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the project. Should be of the form "providers/{provider_id}". @Deprecated
     */
    name?: string;
    /**
     * The ID to use for this note.
     */
    noteId?: string;
    /**
     * This field contains the project Id for example: "projects/{project_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Projects$Notes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notes$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Notes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * The name field will contain the project Id for example: "providers/{provider_id} @Deprecated
     */
    name?: string;
    /**
     * Number of notes to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * This field contains the project Id for example: "projects/{PROJECT_ID}".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Notes$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}".
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Projects$Notes$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Notes$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Notes$Occurrences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * containeranalysis.projects.notes.occurrences.list
     * @desc Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.
     * @alias containeranalysis.projects.notes.occurrences.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression.
     * @param {string} params.name The name field will contain the note name for example:   "provider/{provider_id}/notes/{note_id}"
     * @param {integer=} params.pageSize Number of notes to return in the list.
     * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Notes$Occurrences$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNoteOccurrencesResponse>;
    list(
      params: Params$Resource$Projects$Notes$Occurrences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$Occurrences$List,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Occurrences$List
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>,
      callback?: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void | GaxiosPromise<Schema$ListNoteOccurrencesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Occurrences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Occurrences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/occurrences').replace(
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
        createAPIRequest<Schema$ListNoteOccurrencesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListNoteOccurrencesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Notes$Occurrences$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * The name field will contain the note name for example:   "provider/{provider_id}/notes/{note_id}"
     */
    name?: string;
    /**
     * Number of notes to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Occurrences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * containeranalysis.projects.occurrences.create
     * @desc Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.
     * @alias containeranalysis.projects.occurrences.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.name The name of the project.  Should be of the form "projects/{project_id}". @Deprecated
     * @param {string} params.parent This field contains the project Id for example: "projects/{project_id}"
     * @param {().Occurrence} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Occurrences$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Occurrence>;
    create(
      params: Params$Resource$Projects$Occurrences$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    create(
      params: Params$Resource$Projects$Occurrences$Create,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    create(callback: BodyResponseCallback<Schema$Occurrence>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Create
        | BodyResponseCallback<Schema$Occurrence>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Occurrence>,
      callback?: BodyResponseCallback<Schema$Occurrence>
    ): void | GaxiosPromise<Schema$Occurrence> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/occurrences').replace(
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
        createAPIRequest<Schema$Occurrence>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * containeranalysis.projects.occurrences.delete
     * @desc Deletes the given `Occurrence` from the system. Use this when an `Occurrence` is no longer applicable for the given resource.
     * @alias containeranalysis.projects.occurrences.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the occurrence in the form of "projects/{project_id}/occurrences/{OCCURRENCE_ID}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Occurrences$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Occurrences$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Occurrences$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * containeranalysis.projects.occurrences.get
     * @desc Returns the requested `Occurrence`.
     * @alias containeranalysis.projects.occurrences.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the occurrence of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Occurrences$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Occurrence>;
    get(
      params: Params$Resource$Projects$Occurrences$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    get(
      params: Params$Resource$Projects$Occurrences$Get,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    get(callback: BodyResponseCallback<Schema$Occurrence>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Get
        | BodyResponseCallback<Schema$Occurrence>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Occurrence>,
      callback?: BodyResponseCallback<Schema$Occurrence>
    ): void | GaxiosPromise<Schema$Occurrence> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Occurrence>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * containeranalysis.projects.occurrences.getIamPolicy
     * @desc Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
     * @alias containeranalysis.projects.occurrences.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Occurrences$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * containeranalysis.projects.occurrences.getNotes
     * @desc Gets the `Note` attached to the given `Occurrence`.
     * @alias containeranalysis.projects.occurrences.getNotes
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the occurrence in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getNotes(
      params?: Params$Resource$Projects$Occurrences$Getnotes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    getNotes(callback: BodyResponseCallback<Schema$Note>): void;
    getNotes(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Getnotes
        | BodyResponseCallback<Schema$Note>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback?: BodyResponseCallback<Schema$Note>
    ): void | GaxiosPromise<Schema$Note> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Getnotes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Getnotes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/notes').replace(
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
        createAPIRequest<Schema$Note>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * containeranalysis.projects.occurrences.getVulnerabilitySummary
     * @desc Gets a summary of the number and severity of occurrences.
     * @alias containeranalysis.projects.occurrences.getVulnerabilitySummary
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression.
     * @param {string} params.parent This contains the project Id for example: projects/{project_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getVulnerabilitySummary(
      params?: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetVulnzOccurrencesSummaryResponse>;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetVulnzOccurrencesSummaryResponse>,
      callback: BodyResponseCallback<Schema$GetVulnzOccurrencesSummaryResponse>
    ): void;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      callback: BodyResponseCallback<Schema$GetVulnzOccurrencesSummaryResponse>
    ): void;
    getVulnerabilitySummary(
      callback: BodyResponseCallback<Schema$GetVulnzOccurrencesSummaryResponse>
    ): void;
    getVulnerabilitySummary(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Getvulnerabilitysummary
        | BodyResponseCallback<Schema$GetVulnzOccurrencesSummaryResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetVulnzOccurrencesSummaryResponse>,
      callback?: BodyResponseCallback<Schema$GetVulnzOccurrencesSummaryResponse>
    ): void | GaxiosPromise<Schema$GetVulnzOccurrencesSummaryResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Getvulnerabilitysummary;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Getvulnerabilitysummary;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha1/{+parent}/occurrences:vulnerabilitySummary'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetVulnzOccurrencesSummaryResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GetVulnzOccurrencesSummaryResponse>(
          parameters
        );
      }
    }

    /**
     * containeranalysis.projects.occurrences.list
     * @desc Lists active `Occurrences` for a given project matching the filters.
     * @alias containeranalysis.projects.occurrences.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression.
     * @param {string=} params.kind The kind of occurrences to filter on.
     * @param {string=} params.name The name field contains the project Id. For example: "projects/{project_id} @Deprecated
     * @param {integer=} params.pageSize Number of occurrences to return in the list.
     * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent This contains the project Id for example: projects/{project_id}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Occurrences$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOccurrencesResponse>;
    list(
      params: Params$Resource$Projects$Occurrences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$ListOccurrencesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Occurrences$List,
      callback: BodyResponseCallback<Schema$ListOccurrencesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOccurrencesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$List
        | BodyResponseCallback<Schema$ListOccurrencesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOccurrencesResponse>,
      callback?: BodyResponseCallback<Schema$ListOccurrencesResponse>
    ): void | GaxiosPromise<Schema$ListOccurrencesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/occurrences').replace(
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
        createAPIRequest<Schema$ListOccurrencesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOccurrencesResponse>(parameters);
      }
    }

    /**
     * containeranalysis.projects.occurrences.patch
     * @desc Updates an existing occurrence.
     * @alias containeranalysis.projects.occurrences.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the occurrence. Should be of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}".
     * @param {string=} params.updateMask The fields to update.
     * @param {().Occurrence} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Occurrences$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Occurrence>;
    patch(
      params: Params$Resource$Projects$Occurrences$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    patch(
      params: Params$Resource$Projects$Occurrences$Patch,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Occurrence>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Patch
        | BodyResponseCallback<Schema$Occurrence>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Occurrence>,
      callback?: BodyResponseCallback<Schema$Occurrence>
    ): void | GaxiosPromise<Schema$Occurrence> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Occurrence>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * containeranalysis.projects.occurrences.setIamPolicy
     * @desc Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
     * @alias containeranalysis.projects.occurrences.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Occurrences$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * containeranalysis.projects.occurrences.testIamPermissions
     * @desc Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`
     * @alias containeranalysis.projects.occurrences.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Occurrences$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:testIamPermissions').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Occurrences$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the project.  Should be of the form "projects/{project_id}". @Deprecated
     */
    name?: string;
    /**
     * This field contains the project Id for example: "projects/{project_id}"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Occurrence;
  }
  export interface Params$Resource$Projects$Occurrences$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the occurrence in the form of "projects/{project_id}/occurrences/{OCCURRENCE_ID}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the occurrence of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Occurrences$Getnotes
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the occurrence in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Getvulnerabilitysummary
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * This contains the project Id for example: projects/{project_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Occurrences$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * The kind of occurrences to filter on.
     */
    kind?: string;
    /**
     * The name field contains the project Id. For example: "projects/{project_id} @Deprecated
     */
    name?: string;
    /**
     * Number of occurrences to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * This contains the project Id for example: projects/{project_id}.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the occurrence. Should be of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}".
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Occurrence;
  }
  export interface Params$Resource$Projects$Occurrences$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Occurrences$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * containeranalysis.projects.operations.create
     * @desc Creates a new `Operation`.
     * @alias containeranalysis.projects.operations.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project Id that this operation should be created under.
     * @param {().CreateOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Operations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Operations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Operations$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/operations').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * containeranalysis.projects.operations.patch
     * @desc Updates an existing operation returns an error if operation  does not exist. The only valid operations are to update mark the done bit change the result.
     * @alias containeranalysis.projects.operations.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the Operation. Should be of the form "projects/{provider_id}/operations/{operation_id}".
     * @param {().UpdateOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Operations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Operations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Operations$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project Id that this operation should be created under.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateOperationRequest;
  }
  export interface Params$Resource$Projects$Operations$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the Operation. Should be of the form "projects/{provider_id}/operations/{operation_id}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateOperationRequest;
  }

  export class Resource$Projects$Scanconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * containeranalysis.projects.scanConfigs.get
     * @desc Gets a specific scan configuration for a project.
     * @alias containeranalysis.projects.scanConfigs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the ScanConfig in the form projects/{project_id}/scanConfigs/{scan_config_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Scanconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanConfig>;
    get(
      params: Params$Resource$Projects$Scanconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Scanconfigs$Get,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$ScanConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Get
        | BodyResponseCallback<Schema$ScanConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ScanConfig>,
      callback?: BodyResponseCallback<Schema$ScanConfig>
    ): void | GaxiosPromise<Schema$ScanConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ScanConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ScanConfig>(parameters);
      }
    }

    /**
     * containeranalysis.projects.scanConfigs.list
     * @desc Lists scan configurations for a project.
     * @alias containeranalysis.projects.scanConfigs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression.
     * @param {integer=} params.pageSize The number of items to return.
     * @param {string=} params.pageToken The page token to use for the next request.
     * @param {string} params.parent This containers the project Id i.e.: projects/{project_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Scanconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListScanConfigsResponse>;
    list(
      params: Params$Resource$Projects$Scanconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScanConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListScanConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Scanconfigs$List,
      callback: BodyResponseCallback<Schema$ListScanConfigsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListScanConfigsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$List
        | BodyResponseCallback<Schema$ListScanConfigsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScanConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListScanConfigsResponse>
    ): void | GaxiosPromise<Schema$ListScanConfigsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/scanConfigs').replace(
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
        createAPIRequest<Schema$ListScanConfigsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListScanConfigsResponse>(parameters);
      }
    }

    /**
     * containeranalysis.projects.scanConfigs.patch
     * @desc Updates the scan configuration to a new value.
     * @alias containeranalysis.projects.scanConfigs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The scan config to update of the form projects/{project_id}/scanConfigs/{scan_config_id}.
     * @param {string=} params.updateMask The fields to update.
     * @param {().ScanConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Scanconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScanConfig>;
    patch(
      params: Params$Resource$Projects$Scanconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Scanconfigs$Patch,
      callback: BodyResponseCallback<Schema$ScanConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ScanConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Scanconfigs$Patch
        | BodyResponseCallback<Schema$ScanConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ScanConfig>,
      callback?: BodyResponseCallback<Schema$ScanConfig>
    ): void | GaxiosPromise<Schema$ScanConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Scanconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Scanconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ScanConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ScanConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Scanconfigs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the ScanConfig in the form projects/{project_id}/scanConfigs/{scan_config_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * The number of items to return.
     */
    pageSize?: number;
    /**
     * The page token to use for the next request.
     */
    pageToken?: string;
    /**
     * This containers the project Id i.e.: projects/{project_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Scanconfigs$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The scan config to update of the form projects/{project_id}/scanConfigs/{scan_config_id}.
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScanConfig;
  }

  export class Resource$Providers {
    context: APIRequestContext;
    notes: Resource$Providers$Notes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.notes = new Resource$Providers$Notes(this.context);
    }
  }

  export class Resource$Providers$Notes {
    context: APIRequestContext;
    occurrences: Resource$Providers$Notes$Occurrences;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.occurrences = new Resource$Providers$Notes$Occurrences(this.context);
    }

    /**
     * containeranalysis.providers.notes.create
     * @desc Creates a new `Note`.
     * @alias containeranalysis.providers.notes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the project. Should be of the form "providers/{provider_id}". @Deprecated
     * @param {string=} params.noteId The ID to use for this note.
     * @param {string=} params.parent This field contains the project Id for example: "projects/{project_id}
     * @param {().Note} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Providers$Notes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    create(
      params: Params$Resource$Providers$Notes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(
      params: Params$Resource$Providers$Notes$Create,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(callback: BodyResponseCallback<Schema$Note>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Providers$Notes$Create
        | BodyResponseCallback<Schema$Note>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback?: BodyResponseCallback<Schema$Note>
    ): void | GaxiosPromise<Schema$Note> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Notes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Notes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/notes').replace(
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
        createAPIRequest<Schema$Note>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * containeranalysis.providers.notes.delete
     * @desc Deletes the given `Note` from the system.
     * @alias containeranalysis.providers.notes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Providers$Notes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Providers$Notes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Providers$Notes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Providers$Notes$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Notes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Notes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * containeranalysis.providers.notes.get
     * @desc Returns the requested `Note`.
     * @alias containeranalysis.providers.notes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Providers$Notes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    get(
      params: Params$Resource$Providers$Notes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(
      params: Params$Resource$Providers$Notes$Get,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(callback: BodyResponseCallback<Schema$Note>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Providers$Notes$Get
        | BodyResponseCallback<Schema$Note>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback?: BodyResponseCallback<Schema$Note>
    ): void | GaxiosPromise<Schema$Note> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Notes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Notes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Note>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * containeranalysis.providers.notes.getIamPolicy
     * @desc Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
     * @alias containeranalysis.providers.notes.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Providers$Notes$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Providers$Notes$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Providers$Notes$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Providers$Notes$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Notes$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Notes$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * containeranalysis.providers.notes.list
     * @desc Lists all `Notes` for a given project.
     * @alias containeranalysis.providers.notes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression.
     * @param {string} params.name The name field will contain the project Id for example: "providers/{provider_id} @Deprecated
     * @param {integer=} params.pageSize Number of notes to return in the list.
     * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
     * @param {string=} params.parent This field contains the project Id for example: "projects/{PROJECT_ID}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Providers$Notes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNotesResponse>;
    list(
      params: Params$Resource$Providers$Notes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListNotesResponse>,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(
      params: Params$Resource$Providers$Notes$List,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Providers$Notes$List
        | BodyResponseCallback<Schema$ListNotesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNotesResponse>,
      callback?: BodyResponseCallback<Schema$ListNotesResponse>
    ): void | GaxiosPromise<Schema$ListNotesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Notes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Notes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/notes').replace(
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
        createAPIRequest<Schema$ListNotesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListNotesResponse>(parameters);
      }
    }

    /**
     * containeranalysis.providers.notes.patch
     * @desc Updates an existing `Note`.
     * @alias containeranalysis.providers.notes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}".
     * @param {string=} params.updateMask The fields to update.
     * @param {().Note} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Providers$Notes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Note>;
    patch(
      params: Params$Resource$Providers$Notes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(
      params: Params$Resource$Providers$Notes$Patch,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Note>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Providers$Notes$Patch
        | BodyResponseCallback<Schema$Note>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback?: BodyResponseCallback<Schema$Note>
    ): void | GaxiosPromise<Schema$Note> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Notes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Notes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Note>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * containeranalysis.providers.notes.setIamPolicy
     * @desc Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
     * @alias containeranalysis.providers.notes.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Providers$Notes$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Providers$Notes$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Providers$Notes$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Providers$Notes$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Notes$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Notes$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * containeranalysis.providers.notes.testIamPermissions
     * @desc Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`
     * @alias containeranalysis.providers.notes.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Providers$Notes$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Providers$Notes$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Providers$Notes$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Providers$Notes$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Notes$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Notes$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:testIamPermissions').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Providers$Notes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the project. Should be of the form "providers/{provider_id}". @Deprecated
     */
    name?: string;
    /**
     * The ID to use for this note.
     */
    noteId?: string;
    /**
     * This field contains the project Id for example: "projects/{project_id}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Providers$Notes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     */
    name?: string;
  }
  export interface Params$Resource$Providers$Notes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     */
    name?: string;
  }
  export interface Params$Resource$Providers$Notes$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Providers$Notes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * The name field will contain the project Id for example: "providers/{provider_id} @Deprecated
     */
    name?: string;
    /**
     * Number of notes to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * This field contains the project Id for example: "projects/{PROJECT_ID}".
     */
    parent?: string;
  }
  export interface Params$Resource$Providers$Notes$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}".
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Providers$Notes$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Providers$Notes$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Providers$Notes$Occurrences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * containeranalysis.providers.notes.occurrences.list
     * @desc Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.
     * @alias containeranalysis.providers.notes.occurrences.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression.
     * @param {string} params.name The name field will contain the note name for example:   "provider/{provider_id}/notes/{note_id}"
     * @param {integer=} params.pageSize Number of notes to return in the list.
     * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Providers$Notes$Occurrences$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNoteOccurrencesResponse>;
    list(
      params: Params$Resource$Providers$Notes$Occurrences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      params: Params$Resource$Providers$Notes$Occurrences$List,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Providers$Notes$Occurrences$List
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>,
      callback?: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void | GaxiosPromise<Schema$ListNoteOccurrencesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Providers$Notes$Occurrences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Providers$Notes$Occurrences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/occurrences').replace(
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
        createAPIRequest<Schema$ListNoteOccurrencesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListNoteOccurrencesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Providers$Notes$Occurrences$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * The name field will contain the note name for example:   "provider/{provider_id}/notes/{note_id}"
     */
    name?: string;
    /**
     * Number of notes to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
  }
}
