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

export namespace binaryauthorization_v1 {
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
   * Binary Authorization API
   *
   * The management interface for Binary Authorization, a service that provides policy-based deployment validation and control for images deployed to Google Kubernetes Engine (GKE), Anthos Service Mesh, Anthos Clusters, and Cloud Run.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const binaryauthorization = google.binaryauthorization('v1');
   * ```
   */
  export class Binaryauthorization {
    context: APIRequestContext;
    projects: Resource$Projects;
    systempolicy: Resource$Systempolicy;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
      this.systempolicy = new Resource$Systempolicy(this.context);
    }
  }

  /**
   * An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied. Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation.
   */
  export interface Schema$AdmissionRule {
    /**
     * Required. The action when a pod creation is denied by the admission rule.
     */
    enforcementMode?: string | null;
    /**
     * Required. How this admission rule will be evaluated.
     */
    evaluationMode?: string | null;
    /**
     * Optional. The resource names of the attestors that must attest to a container image, in the format `projects/x/attestors/x`. Each attestor must exist before a policy can reference it. To add an attestor to a policy the principal issuing the policy change request must be able to read the attestor resource. Note: this field must be non-empty when the `evaluation_mode` field specifies `REQUIRE_ATTESTATION`, otherwise it must be empty.
     */
    requireAttestationsBy?: string[] | null;
  }
  /**
   * An admission allowlist pattern exempts images from checks by admission rules.
   */
  export interface Schema$AdmissionWhitelistPattern {
    /**
     * An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` wildcard, but this is allowed only in text after the `registry/` part. This also supports a trailing `**` wildcard which matches subdirectories of a given entry.
     */
    namePattern?: string | null;
  }
  /**
   * An attestation authenticator that will be used to verify attestations. Typically this is just a set of public keys. Conceptually, an authenticator can be treated as always returning either "authenticated" or "not authenticated" when presented with a signed attestation (almost always assumed to be a [DSSE](https://github.com/secure-systems-lab/dsse) attestation). The details of how an authenticator makes this decision are specific to the type of 'authenticator' that this message wraps.
   */
  export interface Schema$AttestationAuthenticator {
    /**
     * Optional. A user-provided name for this `AttestationAuthenticator`. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results.
     */
    displayName?: string | null;
    /**
     * Optional. A set of raw PKIX SubjectPublicKeyInfo format public keys. If any public key in the set validates the attestation signature, then the signature is considered authenticated (i.e. any one key is sufficient to authenticate).
     */
    pkixPublicKeySet?: Schema$PkixPublicKeySet;
  }
  /**
   * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
   */
  export interface Schema$AttestationOccurrence {
    /**
     * One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the `serialized_payload` field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the `serialized_payload` SHOULD be left empty. Each JWT SHOULD encode a claim specific to the `resource_uri` of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas.
     */
    jwts?: Schema$Jwt[];
    /**
     * Required. The serialized payload that is verified by one or more `signatures`.
     */
    serializedPayload?: string | null;
    /**
     * One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification.
     */
    signatures?: Schema$Signature[];
  }
  /**
   * Specifies the locations for fetching the provenance attestations.
   */
  export interface Schema$AttestationSource {
    /**
     * The IDs of the GCP projects storing the SLSA attestations as Container Analysis Occurrences.
     */
    containerAnalysisAttestationProjects?: string[] | null;
  }
  /**
   * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
   */
  export interface Schema$Attestor {
    /**
     * Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.
     */
    description?: string | null;
    /**
     * Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154.
     */
    etag?: string | null;
    /**
     * Required. The resource name, in the format: `projects/x/attestors/x`. This field may not be updated.
     */
    name?: string | null;
    /**
     * Output only. Time when the attestor was last updated.
     */
    updateTime?: string | null;
    /**
     * This specifies how an attestation will be read, and how it will be used during policy enforcement.
     */
    userOwnedGrafeasNote?: Schema$UserOwnedGrafeasNote;
  }
  /**
   * An attestor public key that will be used to verify attestations signed by this attestor.
   */
  export interface Schema$AttestorPublicKey {
    /**
     * ASCII-armored representation of a PGP public key, as the entire output by the command `gpg --export --armor foo@example.com` (either LF or CRLF line endings). When using this field, `id` should be left blank. The Binary Authorization API handlers will calculate the ID and fill it in automatically. Binary Authorization computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If `id` is provided by the caller, it will be overwritten by the API-calculated ID.
     */
    asciiArmoredPgpPublicKey?: string | null;
    /**
     * Optional. A descriptive comment. This field may be updated.
     */
    comment?: string | null;
    /**
     * The ID of this public key. Signatures verified by Binary Authorization must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on `public_key` cases below for details.
     */
    id?: string | null;
    /**
     * A raw PKIX SubjectPublicKeyInfo format public key. NOTE: `id` may be explicitly provided by the caller when using this type of public key, but it MUST be a valid RFC3986 URI. If `id` is left blank, a default one will be computed based on the digest of the DER encoding of the public key.
     */
    pkixPublicKey?: Schema$PkixPublicKey;
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
   * A single check to perform against a Pod. Checks are grouped into `CheckSet` objects, which are defined by the top-level policy.
   */
  export interface Schema$Check {
    /**
     * Optional. A special-case check that always denies. Note that this still only applies when the scope of the `CheckSet` applies and the image isn't exempted by an image allowlist. This check is primarily useful for testing, or to set the default behavior for all unmatched scopes to "deny".
     */
    alwaysDeny?: boolean | null;
    /**
     * Optional. A user-provided name for this check. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results.
     */
    displayName?: string | null;
    /**
     * Optional. Images exempted from this check. If any of the patterns match the image url, the check will not be evaluated.
     */
    imageAllowlist?: Schema$ImageAllowlist;
    /**
     * Optional. Require that an image is no older than a configured expiration time. Image age is determined by its upload time.
     */
    imageFreshnessCheck?: Schema$ImageFreshnessCheck;
    /**
     * Optional. Require a SimpleSigning-type attestation for every image in the deployment.
     */
    simpleSigningAttestationCheck?: Schema$SimpleSigningAttestationCheck;
    /**
     * Optional. Require that an image was built by a trusted builder (such as Google Cloud Build), meets requirements for Supply chain Levels for Software Artifacts (SLSA), and was built from a trusted source code repostitory.
     */
    slsaCheck?: Schema$SlsaCheck;
    /**
     * Optional. Require that an image lives in a trusted directory.
     */
    trustedDirectoryCheck?: Schema$TrustedDirectoryCheck;
    /**
     * Optional. Require that an image does not contain vulnerabilities that violate the configured rules, such as based on severity levels.
     */
    vulnerabilityCheck?: Schema$VulnerabilityCheck;
  }
  /**
   * A conjunction of policy checks, scoped to a particular namespace or Kubernetes service account. In order for evaluation of a `CheckSet` to return "allowed" for a given image in a given Pod, one of the following conditions must be satisfied: * The image is explicitly exempted by an entry in `image_allowlist`, OR * ALL of the `checks` evaluate to "allowed".
   */
  export interface Schema$CheckSet {
    /**
     * Optional. The checks to apply. The ultimate result of evaluating the check set will be "allow" if and only if every check in `checks` evaluates to "allow". If `checks` is empty, the default behavior is "always allow".
     */
    checks?: Schema$Check[];
    /**
     * Optional. A user-provided name for this `CheckSet`. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results.
     */
    displayName?: string | null;
    /**
     * Optional. Images exempted from this `CheckSet`. If any of the patterns match the image being evaluated, no checks in the `CheckSet` will be evaluated.
     */
    imageAllowlist?: Schema$ImageAllowlist;
    /**
     * Optional. The scope to which this `CheckSet` applies. If unset or an empty string (the default), applies to all namespaces and service accounts. See the `Scope` message documentation for details on scoping rules.
     */
    scope?: Schema$Scope;
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
   * A Binary Authorization policy for a GKE cluster. This is one type of policy that can occur as a `PlatformPolicy`.
   */
  export interface Schema$GkePolicy {
    /**
     * Optional. The `CheckSet` objects to apply, scoped by namespace or namespace and service account. Exactly one `CheckSet` will be evaluated for a given Pod (unless the list is empty, in which case the behavior is "always allow"). If multiple `CheckSet` objects have scopes that match the namespace and service account of the Pod being evaluated, only the `CheckSet` with the MOST SPECIFIC scope will match. `CheckSet` objects must be listed in order of decreasing specificity, i.e. if a scope matches a given service account (which must include the namespace), it must come before a `CheckSet` with a scope matching just that namespace. This property is enforced by server-side validation. The purpose of this restriction is to ensure that if more than one `CheckSet` matches a given Pod, the `CheckSet` that will be evaluated will always be the first in the list to match (because if any other matches, it must be less specific). If `check_sets` is empty, the default behavior is to allow all images. If `check_sets` is non-empty, the last `check_sets` entry must always be a `CheckSet` with no scope set, i.e. a catchall to handle any situation not caught by the preceding `CheckSet` objects.
     */
    checkSets?: Schema$CheckSet[];
    /**
     * Optional. Images exempted from this policy. If any of the patterns match the image being evaluated, the rest of the policy will not be evaluated.
     */
    imageAllowlist?: Schema$ImageAllowlist;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$IamPolicy {
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
   * Images that are exempted from normal checks based on name pattern only.
   */
  export interface Schema$ImageAllowlist {
    /**
     * Required. A disjunction of image patterns to allow. If any of these patterns match, then the image is considered exempted by this allowlist.
     */
    allowPattern?: string[] | null;
  }
  /**
   * An image freshness check, which rejects images that were uploaded before the set number of days ago to the supported repositories.
   */
  export interface Schema$ImageFreshnessCheck {
    /**
     * Required. The max number of days that is allowed since the image was uploaded. Must be greater than zero.
     */
    maxUploadAgeDays?: number | null;
  }
  export interface Schema$Jwt {
    /**
     * The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1
     */
    compactJwt?: string | null;
  }
  /**
   * Response message for BinauthzManagementServiceV1.ListAttestors.
   */
  export interface Schema$ListAttestorsResponse {
    /**
     * The list of attestors.
     */
    attestors?: Schema$Attestor[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListAttestorsRequest.page_token field in the subsequent call to the `ListAttestors` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for PlatformPolicyManagementService.ListPlatformPolicies.
   */
  export interface Schema$ListPlatformPoliciesResponse {
    /**
     * A token to retrieve the next page of results. Pass this value in the ListPlatformPoliciesRequest.page_token field in the subsequent call to the `ListPlatformPolicies` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of platform policies.
     */
    platformPolicies?: Schema$PlatformPolicy[];
  }
  /**
   * A public key in the PkixPublicKey [format](https://tools.ietf.org/html/rfc5280#section-4.1.2.7). Public keys of this type are typically textually encoded using the PEM format.
   */
  export interface Schema$PkixPublicKey {
    /**
     * Optional. The ID of this public key. Signatures verified by Binary Authorization must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. This may be explicitly provided by the caller, but it MUST be a valid RFC3986 URI. If `key_id` is left blank and this `PkixPublicKey` is not used in the context of a wrapper (see next paragraph), a default key ID will be computed based on the digest of the DER encoding of the public key. If this `PkixPublicKey` is used in the context of a wrapper that has its own notion of key ID (e.g. `AttestorPublicKey`), then this field can either: * Match that value exactly. * Or be left blank, in which case it behaves exactly as though it is equal to that wrapper value.
     */
    keyId?: string | null;
    /**
     * A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13
     */
    publicKeyPem?: string | null;
    /**
     * The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in `public_key_pem` (i.e. this algorithm must match that of the public key).
     */
    signatureAlgorithm?: string | null;
  }
  /**
   * A bundle of PKIX public keys, used to authenticate attestation signatures. Generally, a signature is considered to be authenticated by a `PkixPublicKeySet` if any of the public keys verify it (i.e. it is an "OR" of the keys).
   */
  export interface Schema$PkixPublicKeySet {
    /**
     * Required. `pkix_public_keys` must have at least one entry.
     */
    pkixPublicKeys?: Schema$PkixPublicKey[];
  }
  /**
   * A Binary Authorization platform policy for deployments on various platforms.
   */
  export interface Schema$PlatformPolicy {
    /**
     * Optional. A description comment about the policy.
     */
    description?: string | null;
    /**
     * Optional. GKE platform-specific policy.
     */
    gkePolicy?: Schema$GkePolicy;
    /**
     * Output only. The relative resource name of the Binary Authorization platform policy, in the form of `projects/x/platforms/x/policies/x`.
     */
    name?: string | null;
    /**
     * Output only. Time when the policy was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A policy for container image binary authorization.
   */
  export interface Schema$Policy {
    /**
     * Optional. Admission policy allowlisting. A matching admission request will always be permitted. This feature is typically used to exclude Google or third-party infrastructure images from Binary Authorization policies.
     */
    admissionWhitelistPatterns?: Schema$AdmissionWhitelistPattern[];
    /**
     * Optional. Per-cluster admission rules. Cluster spec format: `location.clusterId`. There can be at most one admission rule per cluster spec. A `location` is either a compute zone (e.g. us-central1-a) or a region (e.g. us-central1). For `clusterId` syntax restrictions see https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters.
     */
    clusterAdmissionRules?: {[key: string]: Schema$AdmissionRule} | null;
    /**
     * Required. Default admission rule for a cluster without a per-cluster, per- kubernetes-service-account, or per-istio-service-identity admission rule.
     */
    defaultAdmissionRule?: Schema$AdmissionRule;
    /**
     * Optional. A descriptive comment.
     */
    description?: string | null;
    /**
     * Optional. A checksum, returned by the server, that can be sent on update requests to ensure the policy has an up-to-date value before attempting to update it. See https://google.aip.dev/154.
     */
    etag?: string | null;
    /**
     * Optional. Controls the evaluation of a Google-maintained global admission policy for common system-level images. Images not covered by the global policy will be subject to the project admission policy. This setting has no effect when specified inside a global admission policy.
     */
    globalPolicyEvaluationMode?: string | null;
    /**
     * Optional. Per-istio-service-identity admission rules. Istio service identity spec format: `spiffe:///ns//sa/` or `/ns//sa/` e.g. `spiffe://example.com/ns/test-ns/sa/default`
     */
    istioServiceIdentityAdmissionRules?: {
      [key: string]: Schema$AdmissionRule;
    } | null;
    /**
     * Optional. Per-kubernetes-namespace admission rules. K8s namespace spec format: `[a-z.-]+`, e.g. `some-namespace`
     */
    kubernetesNamespaceAdmissionRules?: {
      [key: string]: Schema$AdmissionRule;
    } | null;
    /**
     * Optional. Per-kubernetes-service-account admission rules. Service account spec format: `namespace:serviceaccount`. e.g. `test-ns:default`
     */
    kubernetesServiceAccountAdmissionRules?: {
      [key: string]: Schema$AdmissionRule;
    } | null;
    /**
     * Output only. The resource name, in the format `projects/x/policy`. There is at most one policy per project.
     */
    name?: string | null;
    /**
     * Output only. Time when the policy was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A scope specifier for `CheckSet` objects.
   */
  export interface Schema$Scope {
    /**
     * Optional. Matches all Kubernetes service accounts in the provided namespace, unless a more specific `kubernetes_service_account` scope already matched.
     */
    kubernetesNamespace?: string | null;
    /**
     * Optional. Matches a single Kubernetes service account, e.g. `my-namespace:my-service-account`. `kubernetes_service_account` scope is always more specific than `kubernetes_namespace` scope for the same namespace.
     */
    kubernetesServiceAccount?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$IamPolicy;
  }
  /**
   * Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).
   */
  export interface Schema$Signature {
    /**
     * The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"
     */
    publicKeyId?: string | null;
    /**
     * The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.
     */
    signature?: string | null;
  }
  /**
   * Require a signed [DSSE](https://github.com/secure-systems-lab/dsse) attestation with type SimpleSigning.
   */
  export interface Schema$SimpleSigningAttestationCheck {
    /**
     * Required. The authenticators required by this check to verify an attestation. Typically this is one or more PKIX public keys for signature verification. Only one authenticator needs to consider an attestation verified in order for an attestation to be considered fully authenticated. In otherwords, this list of authenticators is an "OR" of the authenticator results. At least one authenticator is required.
     */
    attestationAuthenticators?: Schema$AttestationAuthenticator[];
    /**
     * Optional. The projects where attestations are stored as Container Analysis Occurrences. Only one attestation needs to successfully verify an image for this check to pass, so a single verified attestation found in any of `container_analysis_attestation_projects` is sufficient for the check to pass. When fetching Occurrences from Container Analysis, only 'AttestationOccurrence' kinds are considered. In the future, additional Occurrence kinds may be added to the query.
     */
    containerAnalysisAttestationProjects?: string[] | null;
  }
  /**
   * A SLSA provenance attestation check, which ensures that images are built by a trusted builder using source code from its trusted repositories only.
   */
  export interface Schema$SlsaCheck {
    /**
     * Specifies a list of verification rules for the SLSA attestations. An image is considered compliant with the SlsaCheck if any of the rules are satisfied.
     */
    rules?: Schema$VerificationRule[];
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
   * A trusted directory check, which rejects images that do not come from the set of user-configured trusted directories.
   */
  export interface Schema$TrustedDirectoryCheck {
    /**
     * Required. List of trusted directory patterns. A pattern is in the form "registry/path/to/directory". The registry domain part is defined as two or more dot-separated words, e.g., `us.pkg.dev`, or `gcr.io`. Additionally, `*` can be used in three ways as wildcards: 1. leading `*` to match varying prefixes in registry subdomain (useful for location prefixes); 2. trailing `*` after registry/ to match varying endings; 3. trailing `**` after registry/ to match "/" as well. For example: -- `gcr.io/my-project/my-repo` is valid to match a single directory -- `*-docker.pkg.dev/my-project/my-repo` or `*.gcr.io/my-project` are valid to match varying prefixes -- `gcr.io/my-project/x` will match all direct directories in `my-project` -- `gcr.io/my-project/x*` would match all directories in `my-project` -- `gcr.i*` is not allowed since the registry is not completely specified -- `sub*domain.gcr.io/nginx` is not valid because only leading `*` or trailing `*` are allowed. -- `*pkg.dev/my-project/my-repo` is not valid because leading `*` can only match subdomain -- `**-docker.pkg.dev` is not valid because one leading `*` is allowed, and that it cannot match `/`
     */
    trustedDirPatterns?: string[] | null;
  }
  /**
   * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
   */
  export interface Schema$UserOwnedGrafeasNote {
    /**
     * Output only. This field will contain the service account email address that this attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the note_reference in Container Analysis (`containeranalysis.notes.occurrences.viewer`). This email address is fixed for the lifetime of the attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern.
     */
    delegationServiceAccountEmail?: string | null;
    /**
     * Required. The Grafeas resource name of a Attestation.Authority Note, created by the user, in the format: `projects/x/notes/x`. This field may not be updated. An attestation by this attestor is stored as a Grafeas Attestation.Authority Occurrence that names a container image and that links to this Note. Grafeas is an external dependency.
     */
    noteReference?: string | null;
    /**
     * Optional. Public keys that verify attestations signed by this attestor. This field may be updated. If this field is non-empty, one of the specified public keys must verify that an attestation was signed by this attestor for the image specified in the admission request. If this field is empty, this attestor always returns that no valid attestations exist.
     */
    publicKeys?: Schema$AttestorPublicKey[];
  }
  /**
   * Request message for ValidationHelperV1.ValidateAttestationOccurrence.
   */
  export interface Schema$ValidateAttestationOccurrenceRequest {
    /**
     * Required. An AttestationOccurrence to be checked that it can be verified by the `Attestor`. It does not have to be an existing entity in Container Analysis. It must otherwise be a valid `AttestationOccurrence`.
     */
    attestation?: Schema$AttestationOccurrence;
    /**
     * Required. The resource name of the Note to which the containing Occurrence is associated.
     */
    occurrenceNote?: string | null;
    /**
     * Required. The URI of the artifact (e.g. container image) that is the subject of the containing Occurrence.
     */
    occurrenceResourceUri?: string | null;
  }
  /**
   * Response message for ValidationHelperV1.ValidateAttestationOccurrence.
   */
  export interface Schema$ValidateAttestationOccurrenceResponse {
    /**
     * The reason for denial if the Attestation couldn't be validated.
     */
    denialReason?: string | null;
    /**
     * The result of the Attestation validation.
     */
    result?: string | null;
  }
  /**
   * Specifies verification rules for evaluating the SLSA attestations including: which builders to trust, where to fetch the SLSA attestations generated by those builders, and other builder-specific evaluation rules such as which source repositories are trusted. An image is considered verified by the rule if any of the fetched SLSA attestations is verified.
   */
  export interface Schema$VerificationRule {
    /**
     * Specifies where to fetch the provenances attestations generated by the builder (group).
     */
    attestationSource?: Schema$AttestationSource;
    /**
     * If true, require the image to be built from a top-level configuration. `trusted_source_repo_patterns` specifies the repositories containing this configuration.
     */
    configBasedBuildRequired?: boolean | null;
    /**
     * Each verification rule is used for evaluation against provenances generated by a specific builder (group). For some of the builders, such as the Google Cloud Build, users don't need to explicitly specify their roots of trust in the policy since the evaluation service can automatically fetch them based on the builder (group).
     */
    trustedBuilder?: string | null;
    /**
     * List of trusted source code repository URL patterns. These patterns match the full repository URL without its scheme (e.g. `https://`). The patterns must not include schemes. For example, the pattern `source.cloud.google.com/my-project/my-repo-name` matches the following URLs: - `source.cloud.google.com/my-project/my-repo-name` - `git+ssh://source.cloud.google.com/my-project/my-repo-name` - `https://source.cloud.google.com/my-project/my-repo-name` A pattern matches a URL either exactly or with `*` wildcards. `*` can be used in only two ways: 1. trailing `*` after hosturi/ to match varying endings; 2. trailing `**` after hosturi/ to match `/` as well. `*` and `**` can only be used as wildcards and can only occur at the end of the pattern after a `/`. (So it's not possible to match a URL that contains literal `*`.) For example: - `github.com/my-project/my-repo` is valid to match a single repo - `github.com/my-project/x` will match all direct repos in `my-project` - `github.com/x*` matches all repos in GitHub
     */
    trustedSourceRepoPatterns?: string[] | null;
  }
  /**
   * An image vulnerability check, which rejects images that violate the configured vulnerability rules.
   */
  export interface Schema$VulnerabilityCheck {
    /**
     * Optional. A list of specific CVEs to ignore even if the vulnerability level violates `maximumUnfixableSeverity` or `maximumFixableSeverity`. CVEs are listed in the format of Container Analysis note id. For example: - CVE-2021-20305 - CVE-2020-10543 The CVEs are applicable regardless of note provider project, e.g., an entry of `CVE-2021-20305` will allow vulnerabilities with a note name of either `projects/goog-vulnz/notes/CVE-2021-20305` or `projects/CUSTOM-PROJECT/notes/CVE-2021-20305`.
     */
    allowedCves?: string[] | null;
    /**
     * Optional. A list of specific CVEs to always raise warnings about even if the vulnerability level meets `maximumUnfixableSeverity` or `maximumFixableSeverity`. CVEs are listed in the format of Container Analysis note id. For example: - CVE-2021-20305 - CVE-2020-10543 The CVEs are applicable regardless of note provider project, e.g., an entry of `CVE-2021-20305` will block vulnerabilities with a note name of either `projects/goog-vulnz/notes/CVE-2021-20305` or `projects/CUSTOM-PROJECT/notes/CVE-2021-20305`.
     */
    blockedCves?: string[] | null;
    /**
     * Optional. The projects where vulnerabilities are stored as Container Analysis Occurrences. Each project is expressed in the resource format of `projects/[PROJECT_ID]`, e.g., `projects/my-gcp-project`. An attempt will be made for each project to fetch vulnerabilities, and all valid vulnerabilities will be used to check against the vulnerability policy. If no valid scan is found in all projects configured here, an error will be returned for the check.
     */
    containerAnalysisVulnerabilityProjects?: string[] | null;
    /**
     * Required. The threshold for severity for which a fix is currently available. This field is required and must be set.
     */
    maximumFixableSeverity?: string | null;
    /**
     * Required. The threshold for severity for which a fix isn't currently available. This field is required and must be set.
     */
    maximumUnfixableSeverity?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    attestors: Resource$Projects$Attestors;
    platforms: Resource$Projects$Platforms;
    policy: Resource$Projects$Policy;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attestors = new Resource$Projects$Attestors(this.context);
      this.platforms = new Resource$Projects$Platforms(this.context);
      this.policy = new Resource$Projects$Policy(this.context);
    }

    /**
     * A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image. There is at most one policy per project. All image admission requests are permitted if a project has no policy. Gets the policy for this project. Returns a default policy if the project does not have one.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getPolicy(
      params: Params$Resource$Projects$Getpolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getPolicy(
      params?: Params$Resource$Projects$Getpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getPolicy(
      params: Params$Resource$Projects$Getpolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getPolicy(
      params: Params$Resource$Projects$Getpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getPolicy(
      params: Params$Resource$Projects$Getpolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Getpolicy
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
        {}) as Params$Resource$Projects$Getpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Creates or updates a project's policy, and returns a copy of the new policy. A policy is always updated as a whole, to avoid race conditions with concurrent policy enforcement (or management!) requests. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updatePolicy(
      params: Params$Resource$Projects$Updatepolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updatePolicy(
      params?: Params$Resource$Projects$Updatepolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    updatePolicy(
      params: Params$Resource$Projects$Updatepolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updatePolicy(
      params: Params$Resource$Projects$Updatepolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    updatePolicy(
      params: Params$Resource$Projects$Updatepolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    updatePolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    updatePolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatepolicy
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
        {}) as Params$Resource$Projects$Updatepolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Updatepolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
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
  }

  export interface Params$Resource$Projects$Getpolicy
    extends StandardParameters {
    /**
     * Required. The resource name of the policy to retrieve, in the format `projects/x/policy`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updatepolicy
    extends StandardParameters {
    /**
     * Output only. The resource name, in the format `projects/x/policy`. There is at most one policy per project.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }

  export class Resource$Projects$Attestors {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an attestor, and returns a copy of the new attestor. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the attestor already exists.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Attestors$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Attestors$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attestor>;
    create(
      params: Params$Resource$Projects$Attestors$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Attestors$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Attestor>,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    create(
      params: Params$Resource$Projects$Attestors$Create,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    create(callback: BodyResponseCallback<Schema$Attestor>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Create
        | BodyResponseCallback<Schema$Attestor>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attestor>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attestor>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Attestor> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/attestors').replace(
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
        createAPIRequest<Schema$Attestor>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attestor>(parameters);
      }
    }

    /**
     * Deletes an attestor. Returns `NOT_FOUND` if the attestor does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Attestors$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Attestors$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Attestors$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Attestors$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Attestors$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Delete
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
        {}) as Params$Resource$Projects$Attestors$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
     * Gets an attestor. Returns `NOT_FOUND` if the attestor does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Attestors$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Attestors$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attestor>;
    get(
      params: Params$Resource$Projects$Attestors$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Attestors$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Attestor>,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    get(
      params: Params$Resource$Projects$Attestors$Get,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    get(callback: BodyResponseCallback<Schema$Attestor>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Get
        | BodyResponseCallback<Schema$Attestor>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attestor>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attestor>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Attestor> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
        createAPIRequest<Schema$Attestor>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attestor>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Attestors$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Attestors$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IamPolicy>;
    getIamPolicy(
      params: Params$Resource$Projects$Attestors$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Attestors$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$IamPolicy>,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Attestors$Getiampolicy,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$IamPolicy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Getiampolicy
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$IamPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
        createAPIRequest<Schema$IamPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IamPolicy>(parameters);
      }
    }

    /**
     * Lists attestors. Returns `INVALID_ARGUMENT` if the project does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Attestors$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Attestors$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAttestorsResponse>;
    list(
      params: Params$Resource$Projects$Attestors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Attestors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttestorsResponse>,
      callback: BodyResponseCallback<Schema$ListAttestorsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Attestors$List,
      callback: BodyResponseCallback<Schema$ListAttestorsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAttestorsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$List
        | BodyResponseCallback<Schema$ListAttestorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAttestorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAttestorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAttestorsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/attestors').replace(
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
        createAPIRequest<Schema$ListAttestorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAttestorsResponse>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Attestors$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Attestors$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IamPolicy>;
    setIamPolicy(
      params: Params$Resource$Projects$Attestors$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Attestors$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$IamPolicy>,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Attestors$Setiampolicy,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$IamPolicy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Setiampolicy
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$IamPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
        createAPIRequest<Schema$IamPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IamPolicy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Attestors$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Attestors$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Attestors$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Attestors$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Attestors$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Testiampermissions
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
        {}) as Params$Resource$Projects$Attestors$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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

    /**
     * Updates an attestor. Returns `NOT_FOUND` if the attestor does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Projects$Attestors$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Attestors$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attestor>;
    update(
      params: Params$Resource$Projects$Attestors$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Attestors$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Attestor>,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    update(
      params: Params$Resource$Projects$Attestors$Update,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    update(callback: BodyResponseCallback<Schema$Attestor>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Update
        | BodyResponseCallback<Schema$Attestor>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attestor>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attestor>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Attestor> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Attestor>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attestor>(parameters);
      }
    }

    /**
     * Returns whether the given `Attestation` for the given image URI was signed by the given `Attestor`
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    validateAttestationOccurrence(
      params: Params$Resource$Projects$Attestors$Validateattestationoccurrence,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    validateAttestationOccurrence(
      params?: Params$Resource$Projects$Attestors$Validateattestationoccurrence,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ValidateAttestationOccurrenceResponse>;
    validateAttestationOccurrence(
      params: Params$Resource$Projects$Attestors$Validateattestationoccurrence,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validateAttestationOccurrence(
      params: Params$Resource$Projects$Attestors$Validateattestationoccurrence,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ValidateAttestationOccurrenceResponse>,
      callback: BodyResponseCallback<Schema$ValidateAttestationOccurrenceResponse>
    ): void;
    validateAttestationOccurrence(
      params: Params$Resource$Projects$Attestors$Validateattestationoccurrence,
      callback: BodyResponseCallback<Schema$ValidateAttestationOccurrenceResponse>
    ): void;
    validateAttestationOccurrence(
      callback: BodyResponseCallback<Schema$ValidateAttestationOccurrenceResponse>
    ): void;
    validateAttestationOccurrence(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Validateattestationoccurrence
        | BodyResponseCallback<Schema$ValidateAttestationOccurrenceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ValidateAttestationOccurrenceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ValidateAttestationOccurrenceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ValidateAttestationOccurrenceResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Validateattestationoccurrence;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Attestors$Validateattestationoccurrence;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+attestor}:validateAttestationOccurrence'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['attestor'],
        pathParams: ['attestor'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ValidateAttestationOccurrenceResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ValidateAttestationOccurrenceResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Attestors$Create
    extends StandardParameters {
    /**
     * Required. The attestors ID.
     */
    attestorId?: string;
    /**
     * Required. The parent of this attestor.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Attestor;
  }
  export interface Params$Resource$Projects$Attestors$Delete
    extends StandardParameters {
    /**
     * Required. The name of the attestors to delete, in the format `projects/x/attestors/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Attestors$Get
    extends StandardParameters {
    /**
     * Required. The name of the attestor to retrieve, in the format `projects/x/attestors/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Attestors$Getiampolicy
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
  export interface Params$Resource$Projects$Attestors$List
    extends StandardParameters {
    /**
     * Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListAttestorsResponse.next_page_token returned from the previous call to the `ListAttestors` method.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the project associated with the attestors, in the format `projects/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Attestors$Setiampolicy
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
  export interface Params$Resource$Projects$Attestors$Testiampermissions
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
  export interface Params$Resource$Projects$Attestors$Update
    extends StandardParameters {
    /**
     * Required. The resource name, in the format: `projects/x/attestors/x`. This field may not be updated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Attestor;
  }
  export interface Params$Resource$Projects$Attestors$Validateattestationoccurrence
    extends StandardParameters {
    /**
     * Required. The resource name of the Attestor of the occurrence, in the format `projects/x/attestors/x`.
     */
    attestor?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ValidateAttestationOccurrenceRequest;
  }

  export class Resource$Projects$Platforms {
    context: APIRequestContext;
    policies: Resource$Projects$Platforms$Policies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.policies = new Resource$Projects$Platforms$Policies(this.context);
    }
  }

  export class Resource$Projects$Platforms$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a platform policy, and returns a copy of it. Returns `NOT_FOUND` if the project or platform doesn't exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the policy already exists, and `INVALID_ARGUMENT` if the policy contains a platform-specific policy that does not match the platform value specified in the URL.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Platforms$Policies$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Platforms$Policies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlatformPolicy>;
    create(
      params: Params$Resource$Projects$Platforms$Policies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Platforms$Policies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PlatformPolicy>,
      callback: BodyResponseCallback<Schema$PlatformPolicy>
    ): void;
    create(
      params: Params$Resource$Projects$Platforms$Policies$Create,
      callback: BodyResponseCallback<Schema$PlatformPolicy>
    ): void;
    create(callback: BodyResponseCallback<Schema$PlatformPolicy>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Platforms$Policies$Create
        | BodyResponseCallback<Schema$PlatformPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlatformPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlatformPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PlatformPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Platforms$Policies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Platforms$Policies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/policies').replace(
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
        createAPIRequest<Schema$PlatformPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlatformPolicy>(parameters);
      }
    }

    /**
     * Deletes a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Platforms$Policies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Platforms$Policies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Platforms$Policies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Platforms$Policies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Platforms$Policies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Platforms$Policies$Delete
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
        {}) as Params$Resource$Projects$Platforms$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Platforms$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
     * Gets a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Platforms$Policies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Platforms$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlatformPolicy>;
    get(
      params: Params$Resource$Projects$Platforms$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Platforms$Policies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PlatformPolicy>,
      callback: BodyResponseCallback<Schema$PlatformPolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Platforms$Policies$Get,
      callback: BodyResponseCallback<Schema$PlatformPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$PlatformPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Platforms$Policies$Get
        | BodyResponseCallback<Schema$PlatformPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlatformPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlatformPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PlatformPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Platforms$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Platforms$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
        createAPIRequest<Schema$PlatformPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlatformPolicy>(parameters);
      }
    }

    /**
     * Lists platform policies owned by a project in the specified platform. Returns `INVALID_ARGUMENT` if the project or the platform doesn't exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Platforms$Policies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Platforms$Policies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPlatformPoliciesResponse>;
    list(
      params: Params$Resource$Projects$Platforms$Policies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Platforms$Policies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPlatformPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListPlatformPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Platforms$Policies$List,
      callback: BodyResponseCallback<Schema$ListPlatformPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPlatformPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Platforms$Policies$List
        | BodyResponseCallback<Schema$ListPlatformPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPlatformPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPlatformPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPlatformPoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Platforms$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Platforms$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/policies').replace(
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
        createAPIRequest<Schema$ListPlatformPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPlatformPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Replaces a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    replacePlatformPolicy(
      params: Params$Resource$Projects$Platforms$Policies$Replaceplatformpolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    replacePlatformPolicy(
      params?: Params$Resource$Projects$Platforms$Policies$Replaceplatformpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlatformPolicy>;
    replacePlatformPolicy(
      params: Params$Resource$Projects$Platforms$Policies$Replaceplatformpolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    replacePlatformPolicy(
      params: Params$Resource$Projects$Platforms$Policies$Replaceplatformpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$PlatformPolicy>,
      callback: BodyResponseCallback<Schema$PlatformPolicy>
    ): void;
    replacePlatformPolicy(
      params: Params$Resource$Projects$Platforms$Policies$Replaceplatformpolicy,
      callback: BodyResponseCallback<Schema$PlatformPolicy>
    ): void;
    replacePlatformPolicy(
      callback: BodyResponseCallback<Schema$PlatformPolicy>
    ): void;
    replacePlatformPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Platforms$Policies$Replaceplatformpolicy
        | BodyResponseCallback<Schema$PlatformPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlatformPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlatformPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PlatformPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Platforms$Policies$Replaceplatformpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Platforms$Policies$Replaceplatformpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlatformPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlatformPolicy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Platforms$Policies$Create
    extends StandardParameters {
    /**
     * Required. The parent of this platform policy.
     */
    parent?: string;
    /**
     * Required. The platform policy ID.
     */
    policyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlatformPolicy;
  }
  export interface Params$Resource$Projects$Platforms$Policies$Delete
    extends StandardParameters {
    /**
     * Required. The name of the platform policy to delete, in the format `projects/x/platforms/x/policies/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Platforms$Policies$Get
    extends StandardParameters {
    /**
     * Required. The name of the platform policy to retrieve in the format `projects/x/platforms/x/policies/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Platforms$Policies$List
    extends StandardParameters {
    /**
     * Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListPlatformPoliciesResponse.next_page_token returned from the previous call to the `ListPlatformPolicies` method.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the platform associated with the platform policies using the format `projects/x/platforms/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Platforms$Policies$Replaceplatformpolicy
    extends StandardParameters {
    /**
     * Output only. The relative resource name of the Binary Authorization platform policy, in the form of `projects/x/platforms/x/policies/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlatformPolicy;
  }

  export class Resource$Projects$Policy {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Policy$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Policy$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IamPolicy>;
    getIamPolicy(
      params: Params$Resource$Projects$Policy$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Policy$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$IamPolicy>,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Policy$Getiampolicy,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$IamPolicy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Policy$Getiampolicy
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$IamPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policy$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policy$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
        createAPIRequest<Schema$IamPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IamPolicy>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Policy$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Policy$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IamPolicy>;
    setIamPolicy(
      params: Params$Resource$Projects$Policy$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Policy$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$IamPolicy>,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Policy$Setiampolicy,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$IamPolicy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Policy$Setiampolicy
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IamPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$IamPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policy$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policy$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
        createAPIRequest<Schema$IamPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IamPolicy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Policy$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Policy$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Policy$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Policy$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Policy$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Policy$Testiampermissions
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
        {}) as Params$Resource$Projects$Policy$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policy$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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

  export interface Params$Resource$Projects$Policy$Getiampolicy
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
  export interface Params$Resource$Projects$Policy$Setiampolicy
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
  export interface Params$Resource$Projects$Policy$Testiampermissions
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

  export class Resource$Systempolicy {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the current system policy in the specified location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getPolicy(
      params: Params$Resource$Systempolicy$Getpolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getPolicy(
      params?: Params$Resource$Systempolicy$Getpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getPolicy(
      params: Params$Resource$Systempolicy$Getpolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getPolicy(
      params: Params$Resource$Systempolicy$Getpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getPolicy(
      params: Params$Resource$Systempolicy$Getpolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getPolicy(
      paramsOrCallback?:
        | Params$Resource$Systempolicy$Getpolicy
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
        {}) as Params$Resource$Systempolicy$Getpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Systempolicy$Getpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }
  }

  export interface Params$Resource$Systempolicy$Getpolicy
    extends StandardParameters {
    /**
     * Required. The resource name, in the format `locations/x/policy`. Note that the system policy is not associated with a project.
     */
    name?: string;
  }
}
