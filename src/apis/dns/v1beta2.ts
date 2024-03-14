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

export namespace dns_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
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
   * Cloud DNS API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const dns = google.dns('v1beta2');
   * ```
   */
  export class Dns {
    context: APIRequestContext;
    changes: Resource$Changes;
    dnsKeys: Resource$Dnskeys;
    managedZoneOperations: Resource$Managedzoneoperations;
    managedZones: Resource$Managedzones;
    policies: Resource$Policies;
    projects: Resource$Projects;
    resourceRecordSets: Resource$Resourcerecordsets;
    responsePolicies: Resource$Responsepolicies;
    responsePolicyRules: Resource$Responsepolicyrules;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.changes = new Resource$Changes(this.context);
      this.dnsKeys = new Resource$Dnskeys(this.context);
      this.managedZoneOperations = new Resource$Managedzoneoperations(
        this.context
      );
      this.managedZones = new Resource$Managedzones(this.context);
      this.policies = new Resource$Policies(this.context);
      this.projects = new Resource$Projects(this.context);
      this.resourceRecordSets = new Resource$Resourcerecordsets(this.context);
      this.responsePolicies = new Resource$Responsepolicies(this.context);
      this.responsePolicyRules = new Resource$Responsepolicyrules(this.context);
    }
  }

  /**
   * A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.
   */
  export interface Schema$Change {
    /**
     * Which ResourceRecordSets to add?
     */
    additions?: Schema$ResourceRecordSet[];
    /**
     * Which ResourceRecordSets to remove? Must match existing data exactly.
     */
    deletions?: Schema$ResourceRecordSet[];
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string | null;
    /**
     * If the DNS queries for the zone will be served.
     */
    isServing?: boolean | null;
    kind?: string | null;
    /**
     * The time that this operation was started by the server (output only). This is in RFC3339 text format.
     */
    startTime?: string | null;
    /**
     * Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.
     */
    status?: string | null;
  }
  /**
   * The response to a request to enumerate Changes to a ResourceRecordSets collection.
   */
  export interface Schema$ChangesListResponse {
    /**
     * The requested changes.
     */
    changes?: Schema$Change[];
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a "snapshot" of collections larger than the maximum page size.
     */
    nextPageToken?: string | null;
  }
  /**
   * A DNSSEC key pair.
   */
  export interface Schema$DnsKey {
    /**
     * String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time.
     */
    algorithm?: string | null;
    /**
     * The time that this resource was created in the control plane. This is in RFC3339 text format. Output only.
     */
    creationTime?: string | null;
    /**
     * A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the resource's function.
     */
    description?: string | null;
    /**
     * Cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Output only.
     */
    digests?: Schema$DnsKeyDigest[];
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string | null;
    /**
     * Active keys are used to sign subsequent changes to the ManagedZone. Inactive keys are still present as DNSKEY Resource Records for the use of resolvers validating existing signatures.
     */
    isActive?: boolean | null;
    /**
     * Length of the key in bits. Specified at creation time, and then immutable.
     */
    keyLength?: number | null;
    /**
     * The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only.
     */
    keyTag?: number | null;
    kind?: string | null;
    /**
     * Base64 encoded public half of this key. Output only.
     */
    publicKey?: string | null;
    /**
     * One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, are used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag is cleared, and this key is used to sign only resource record sets of other types. Immutable after creation time.
     */
    type?: string | null;
  }
  export interface Schema$DnsKeyDigest {
    /**
     * The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
     */
    digest?: string | null;
    /**
     * Specifies the algorithm used to calculate this digest.
     */
    type?: string | null;
  }
  /**
   * The response to a request to enumerate DnsKeys in a ManagedZone.
   */
  export interface Schema$DnsKeysListResponse {
    /**
     * The requested resources.
     */
    dnsKeys?: Schema$DnsKey[];
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.
     */
    nextPageToken?: string | null;
  }
  /**
   * Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
   */
  export interface Schema$DnsKeySpec {
    /**
     * String mnemonic specifying the DNSSEC algorithm of this key.
     */
    algorithm?: string | null;
    /**
     * Length of the keys in bits.
     */
    keyLength?: number | null;
    /**
     * Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, are only used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and are used to sign all other types of resource record sets.
     */
    keyType?: string | null;
    kind?: string | null;
  }
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
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$GoogleIamV1AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$GoogleIamV1AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$GoogleIamV1AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$GoogleIamV1Binding {
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
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.
     */
    options?: Schema$GoogleIamV1GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GoogleIamV1GetPolicyOptions {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$GoogleIamV1Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$GoogleIamV1Binding[];
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
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$GoogleIamV1Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
   */
  export interface Schema$ManagedZone {
    cloudLoggingConfig?: Schema$ManagedZoneCloudLoggingConfig;
    /**
     * The time that this resource was created on the server. This is in RFC3339 text format. Output only.
     */
    creationTime?: string | null;
    /**
     * A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.
     */
    description?: string | null;
    /**
     * The DNS name of this managed zone, for instance "example.com.".
     */
    dnsName?: string | null;
    /**
     * DNSSEC configuration.
     */
    dnssecConfig?: Schema$ManagedZoneDnsSecConfig;
    /**
     * The presence for this field indicates that outbound forwarding is enabled for this zone. The value of this field contains the set of destinations to forward to.
     */
    forwardingConfig?: Schema$ManagedZoneForwardingConfig;
    /**
     * Unique identifier for the resource; defined by the server (output only)
     */
    id?: string | null;
    kind?: string | null;
    /**
     * User labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
     */
    name?: string | null;
    /**
     * Delegate your managed_zone to these virtual name servers; defined by the server (output only)
     */
    nameServers?: string[] | null;
    /**
     * Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.
     */
    nameServerSet?: string | null;
    /**
     * The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with.
     */
    peeringConfig?: Schema$ManagedZonePeeringConfig;
    /**
     * For privately visible zones, the set of Virtual Private Cloud resources that the zone is visible from.
     */
    privateVisibilityConfig?: Schema$ManagedZonePrivateVisibilityConfig;
    /**
     * The presence of this field indicates that this is a managed reverse lookup zone and Cloud DNS resolves reverse lookup queries using automatically configured records for VPC resources. This only applies to networks listed under private_visibility_config.
     */
    reverseLookupConfig?: Schema$ManagedZoneReverseLookupConfig;
    /**
     * This field links to the associated service directory namespace. Do not set this field for public zones or forwarding zones.
     */
    serviceDirectoryConfig?: Schema$ManagedZoneServiceDirectoryConfig;
    /**
     * The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.
     */
    visibility?: string | null;
  }
  /**
   * Cloud Logging configurations for publicly visible zones.
   */
  export interface Schema$ManagedZoneCloudLoggingConfig {
    /**
     * If set, enable query logging for this ManagedZone. False by default, making logging opt-in.
     */
    enableLogging?: boolean | null;
    kind?: string | null;
  }
  export interface Schema$ManagedZoneDnsSecConfig {
    /**
     * Specifies parameters for generating initial DnsKeys for this ManagedZone. Can only be changed while the state is OFF.
     */
    defaultKeySpecs?: Schema$DnsKeySpec[];
    kind?: string | null;
    /**
     * Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF.
     */
    nonExistence?: string | null;
    /**
     * Specifies whether DNSSEC is enabled, and what mode it is in.
     */
    state?: string | null;
  }
  export interface Schema$ManagedZoneForwardingConfig {
    kind?: string | null;
    /**
     * List of target name servers to forward to. Cloud DNS selects the best available name server if more than one target is given.
     */
    targetNameServers?: Schema$ManagedZoneForwardingConfigNameServerTarget[];
  }
  export interface Schema$ManagedZoneForwardingConfigNameServerTarget {
    /**
     * Forwarding path for this NameServerTarget. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on IP address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.
     */
    forwardingPath?: string | null;
    /**
     * IPv4 address of a target name server.
     */
    ipv4Address?: string | null;
    /**
     * IPv6 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022.
     */
    ipv6Address?: string | null;
    kind?: string | null;
  }
  export interface Schema$ManagedZoneOperationsListResponse {
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.
     */
    nextPageToken?: string | null;
    /**
     * The operation resources.
     */
    operations?: Schema$Operation[];
  }
  export interface Schema$ManagedZonePeeringConfig {
    kind?: string | null;
    /**
     * The network with which to peer.
     */
    targetNetwork?: Schema$ManagedZonePeeringConfigTargetNetwork;
  }
  export interface Schema$ManagedZonePeeringConfigTargetNetwork {
    /**
     * The time at which the zone was deactivated, in RFC 3339 date-time format. An empty string indicates that the peering connection is active. The producer network can deactivate a zone. The zone is automatically deactivated if the producer network that the zone targeted is deleted. Output only.
     */
    deactivateTime?: string | null;
    kind?: string | null;
    /**
     * The fully qualified URL of the VPC network to forward queries to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project\}/global/networks/{network\}
     */
    networkUrl?: string | null;
  }
  export interface Schema$ManagedZonePrivateVisibilityConfig {
    /**
     * The list of Google Kubernetes Engine clusters that can see this zone.
     */
    gkeClusters?: Schema$ManagedZonePrivateVisibilityConfigGKECluster[];
    kind?: string | null;
    /**
     * The list of VPC networks that can see this zone.
     */
    networks?: Schema$ManagedZonePrivateVisibilityConfigNetwork[];
  }
  export interface Schema$ManagedZonePrivateVisibilityConfigGKECluster {
    /**
     * The resource name of the cluster to bind this ManagedZone to. This should be specified in the format like: projects/x/locations/x/clusters/x. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get
     */
    gkeClusterName?: string | null;
    kind?: string | null;
  }
  export interface Schema$ManagedZonePrivateVisibilityConfigNetwork {
    kind?: string | null;
    /**
     * The fully qualified URL of the VPC network to bind to. Format this URL like https://www.googleapis.com/compute/v1/projects/{project\}/global/networks/{network\}
     */
    networkUrl?: string | null;
  }
  export interface Schema$ManagedZoneReverseLookupConfig {
    kind?: string | null;
  }
  /**
   * Contains information about Service Directory-backed zones.
   */
  export interface Schema$ManagedZoneServiceDirectoryConfig {
    kind?: string | null;
    /**
     * Contains information about the namespace associated with the zone.
     */
    namespace?: Schema$ManagedZoneServiceDirectoryConfigNamespace;
  }
  export interface Schema$ManagedZoneServiceDirectoryConfigNamespace {
    /**
     * The time that the namespace backing this zone was deleted; an empty string if it still exists. This is in RFC3339 text format. Output only.
     */
    deletionTime?: string | null;
    kind?: string | null;
    /**
     * The fully qualified URL of the namespace associated with the zone. Format must be https://servicedirectory.googleapis.com/v1/projects/{project\}/locations/{location\}/namespaces/{namespace\}
     */
    namespaceUrl?: string | null;
  }
  export interface Schema$ManagedZonesListResponse {
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    /**
     * The managed zone resources.
     */
    managedZones?: Schema$ManagedZone[];
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.
     */
    nextPageToken?: string | null;
  }
  /**
   * An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.
   */
  export interface Schema$Operation {
    /**
     * Only populated if the operation targeted a DnsKey (output only).
     */
    dnsKeyContext?: Schema$OperationDnsKeyContext;
    /**
     * Unique identifier for the resource. This is the client_operation_id if the client specified it when the mutation was initiated, otherwise, it is generated by the server. The name must be 1-63 characters long and match the regular expression [-a-z0-9]? (output only)
     */
    id?: string | null;
    kind?: string | null;
    /**
     * The time that this operation was started by the server. This is in RFC3339 text format (output only).
     */
    startTime?: string | null;
    /**
     * Status of the operation. Can be one of the following: "PENDING" or "DONE" (output only). A status of "DONE" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.
     */
    status?: string | null;
    /**
     * Type of the operation. Operations include insert, update, and delete (output only).
     */
    type?: string | null;
    /**
     * User who requested the operation, for example: user@example.com. cloud-dns-system for operations automatically done by the system. (output only)
     */
    user?: string | null;
    /**
     * Only populated if the operation targeted a ManagedZone (output only).
     */
    zoneContext?: Schema$OperationManagedZoneContext;
  }
  export interface Schema$OperationDnsKeyContext {
    /**
     * The post-operation DnsKey resource.
     */
    newValue?: Schema$DnsKey;
    /**
     * The pre-operation DnsKey resource.
     */
    oldValue?: Schema$DnsKey;
  }
  export interface Schema$OperationManagedZoneContext {
    /**
     * The post-operation ManagedZone resource.
     */
    newValue?: Schema$ManagedZone;
    /**
     * The pre-operation ManagedZone resource.
     */
    oldValue?: Schema$ManagedZone;
  }
  export interface Schema$PoliciesListResponse {
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.
     */
    nextPageToken?: string | null;
    /**
     * The policy resources.
     */
    policies?: Schema$Policy[];
  }
  export interface Schema$PoliciesPatchResponse {
    header?: Schema$ResponseHeader;
    policy?: Schema$Policy;
  }
  export interface Schema$PoliciesUpdateResponse {
    header?: Schema$ResponseHeader;
    policy?: Schema$Policy;
  }
  /**
   * A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
   */
  export interface Schema$Policy {
    /**
     * Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.
     */
    alternativeNameServerConfig?: Schema$PolicyAlternativeNameServerConfig;
    /**
     * A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.
     */
    description?: string | null;
    /**
     * Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy.
     */
    enableInboundForwarding?: boolean | null;
    /**
     * Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.
     */
    enableLogging?: boolean | null;
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string | null;
    kind?: string | null;
    /**
     * User-assigned name for this policy.
     */
    name?: string | null;
    /**
     * List of network names specifying networks to which this policy is applied.
     */
    networks?: Schema$PolicyNetwork[];
  }
  export interface Schema$PolicyAlternativeNameServerConfig {
    kind?: string | null;
    /**
     * Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.
     */
    targetNameServers?: Schema$PolicyAlternativeNameServerConfigTargetNameServer[];
  }
  export interface Schema$PolicyAlternativeNameServerConfigTargetNameServer {
    /**
     * Forwarding path for this TargetNameServer. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.
     */
    forwardingPath?: string | null;
    /**
     * IPv4 address to forward queries to.
     */
    ipv4Address?: string | null;
    /**
     * IPv6 address to forward to. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022.
     */
    ipv6Address?: string | null;
    kind?: string | null;
  }
  export interface Schema$PolicyNetwork {
    kind?: string | null;
    /**
     * The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project\}/global/networks/{network\}
     */
    networkUrl?: string | null;
  }
  /**
   * A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7.
   */
  export interface Schema$Project {
    /**
     * User assigned unique identifier for the resource (output only).
     */
    id?: string | null;
    kind?: string | null;
    /**
     * Unique numeric identifier for the resource; defined by the server (output only).
     */
    number?: string | null;
    /**
     * Quotas assigned to this project (output only).
     */
    quota?: Schema$Quota;
  }
  /**
   * Limits associated with a Project.
   */
  export interface Schema$Quota {
    /**
     * Maximum allowed number of DnsKeys per ManagedZone.
     */
    dnsKeysPerManagedZone?: number | null;
    /**
     * Maximum allowed number of GKE clusters to which a privately scoped zone can be attached.
     */
    gkeClustersPerManagedZone?: number | null;
    /**
     * Maximum allowed number of GKE clusters per policy.
     */
    gkeClustersPerPolicy?: number | null;
    /**
     * Maximum allowed number of GKE clusters per response policy.
     */
    gkeClustersPerResponsePolicy?: number | null;
    /**
     * Maximum allowed number of items per routing policy.
     */
    itemsPerRoutingPolicy?: number | null;
    kind?: string | null;
    /**
     * Maximum allowed number of managed zones in the project.
     */
    managedZones?: number | null;
    /**
     * Maximum allowed number of managed zones which can be attached to a GKE cluster.
     */
    managedZonesPerGkeCluster?: number | null;
    /**
     * Maximum allowed number of managed zones which can be attached to a network.
     */
    managedZonesPerNetwork?: number | null;
    /**
     * Maximum number of nameservers per delegation, meant to prevent abuse
     */
    nameserversPerDelegation?: number | null;
    /**
     * Maximum allowed number of networks to which a privately scoped zone can be attached.
     */
    networksPerManagedZone?: number | null;
    /**
     * Maximum allowed number of networks per policy.
     */
    networksPerPolicy?: number | null;
    /**
     * Maximum allowed number of networks per response policy.
     */
    networksPerResponsePolicy?: number | null;
    /**
     * Maximum allowed number of consumer peering zones per target network owned by this producer project
     */
    peeringZonesPerTargetNetwork?: number | null;
    /**
     * Maximum allowed number of policies per project.
     */
    policies?: number | null;
    /**
     * Maximum allowed number of ResourceRecords per ResourceRecordSet.
     */
    resourceRecordsPerRrset?: number | null;
    /**
     * Maximum allowed number of response policies per project.
     */
    responsePolicies?: number | null;
    /**
     * Maximum allowed number of rules per response policy.
     */
    responsePolicyRulesPerResponsePolicy?: number | null;
    /**
     * Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
     */
    rrsetAdditionsPerChange?: number | null;
    /**
     * Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
     */
    rrsetDeletionsPerChange?: number | null;
    /**
     * Maximum allowed number of ResourceRecordSets per zone in the project.
     */
    rrsetsPerManagedZone?: number | null;
    /**
     * Maximum allowed number of target name servers per managed forwarding zone.
     */
    targetNameServersPerManagedZone?: number | null;
    /**
     * Maximum allowed number of alternative target name servers per policy.
     */
    targetNameServersPerPolicy?: number | null;
    /**
     * Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
     */
    totalRrdataSizePerChange?: number | null;
    /**
     * DNSSEC algorithm and key length types that can be used for DnsKeys.
     */
    whitelistedKeySpecs?: Schema$DnsKeySpec[];
  }
  /**
   * A unit of data that is returned by the DNS servers.
   */
  export interface Schema$ResourceRecordSet {
    kind?: string | null;
    /**
     * For example, www.example.com.
     */
    name?: string | null;
    /**
     * Configures dynamic query responses based on either the geo location of the querying user or a weighted round robin based routing policy. A valid ResourceRecordSet contains only rrdata (for static resolution) or a routing_policy (for dynamic resolution).
     */
    routingPolicy?: Schema$RRSetRoutingPolicy;
    /**
     * As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.
     */
    rrdatas?: string[] | null;
    /**
     * As defined in RFC 4034 (section 3.2).
     */
    signatureRrdatas?: string[] | null;
    /**
     * Number of seconds that this ResourceRecordSet can be cached by resolvers.
     */
    ttl?: number | null;
    /**
     * The identifier of a supported record type. See the list of Supported DNS record types.
     */
    type?: string | null;
  }
  export interface Schema$ResourceRecordSetsListResponse {
    header?: Schema$ResponseHeader;
    /**
     * Type of resource.
     */
    kind?: string | null;
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even larger collections, one page at a time. However, if the collection changes between paginated list requests, the set of elements returned is an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.
     */
    nextPageToken?: string | null;
    /**
     * The resource record set resources.
     */
    rrsets?: Schema$ResourceRecordSet[];
  }
  /**
   * Elements common to every response.
   */
  export interface Schema$ResponseHeader {
    /**
     * For mutating operation requests that completed successfully. This is the client_operation_id if the client specified it, otherwise it is generated by the server (output only).
     */
    operationId?: string | null;
  }
  export interface Schema$ResponsePoliciesListResponse {
    header?: Schema$ResponseHeader;
    /**
     * The presence of this field indicates that more results exist following your last page of results in pagination order. To fetch them, make another list request by using this value as your page token. This lets you view the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.
     */
    nextPageToken?: string | null;
    /**
     * The Response Policy resources.
     */
    responsePolicies?: Schema$ResponsePolicy[];
  }
  export interface Schema$ResponsePoliciesPatchResponse {
    header?: Schema$ResponseHeader;
    responsePolicy?: Schema$ResponsePolicy;
  }
  export interface Schema$ResponsePoliciesUpdateResponse {
    header?: Schema$ResponseHeader;
    responsePolicy?: Schema$ResponsePolicy;
  }
  /**
   * A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
   */
  export interface Schema$ResponsePolicy {
    /**
     * User-provided description for this Response Policy.
     */
    description?: string | null;
    /**
     * The list of Google Kubernetes Engine clusters to which this response policy is applied.
     */
    gkeClusters?: Schema$ResponsePolicyGKECluster[];
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string | null;
    kind?: string | null;
    /**
     * User labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * List of network names specifying networks to which this policy is applied.
     */
    networks?: Schema$ResponsePolicyNetwork[];
    /**
     * User assigned name for this Response Policy.
     */
    responsePolicyName?: string | null;
  }
  export interface Schema$ResponsePolicyGKECluster {
    /**
     * The resource name of the cluster to bind this response policy to. This should be specified in the format like: projects/x/locations/x/clusters/x. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get
     */
    gkeClusterName?: string | null;
    kind?: string | null;
  }
  export interface Schema$ResponsePolicyNetwork {
    kind?: string | null;
    /**
     * The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project\}/global/networks/{network\}
     */
    networkUrl?: string | null;
  }
  /**
   * A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
   */
  export interface Schema$ResponsePolicyRule {
    /**
     * Answer this query with a behavior rather than DNS data.
     */
    behavior?: string | null;
    /**
     * The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.
     */
    dnsName?: string | null;
    kind?: string | null;
    /**
     * Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name; in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.
     */
    localData?: Schema$ResponsePolicyRuleLocalData;
    /**
     * An identifier for this rule. Must be unique with the ResponsePolicy.
     */
    ruleName?: string | null;
  }
  export interface Schema$ResponsePolicyRuleLocalData {
    /**
     * All resource record sets for this selector, one per resource record type. The name must match the dns_name.
     */
    localDatas?: Schema$ResourceRecordSet[];
  }
  export interface Schema$ResponsePolicyRulesListResponse {
    header?: Schema$ResponseHeader;
    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.
     */
    nextPageToken?: string | null;
    /**
     * The Response Policy Rule resources.
     */
    responsePolicyRules?: Schema$ResponsePolicyRule[];
  }
  export interface Schema$ResponsePolicyRulesPatchResponse {
    header?: Schema$ResponseHeader;
    responsePolicyRule?: Schema$ResponsePolicyRule;
  }
  export interface Schema$ResponsePolicyRulesUpdateResponse {
    header?: Schema$ResponseHeader;
    responsePolicyRule?: Schema$ResponsePolicyRule;
  }
  /**
   * A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
   */
  export interface Schema$RRSetRoutingPolicy {
    geo?: Schema$RRSetRoutingPolicyGeoPolicy;
    geoPolicy?: Schema$RRSetRoutingPolicyGeoPolicy;
    /**
     * The selfLink attribute of the HealthCheck resource to use for this RRSetRoutingPolicy. https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks
     */
    healthCheck?: string | null;
    kind?: string | null;
    primaryBackup?: Schema$RRSetRoutingPolicyPrimaryBackupPolicy;
    wrr?: Schema$RRSetRoutingPolicyWrrPolicy;
    wrrPolicy?: Schema$RRSetRoutingPolicyWrrPolicy;
  }
  /**
   * Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
   */
  export interface Schema$RRSetRoutingPolicyGeoPolicy {
    /**
     * Without fencing, if health check fails for all configured items in the current geo bucket, we failover to the next nearest geo bucket. With fencing, if health checking is enabled, as long as some targets in the current geo bucket are healthy, we return only the healthy targets. However, if all targets are unhealthy, we don't failover to the next nearest bucket; instead, we return all the items in the current bucket even when all targets are unhealthy.
     */
    enableFencing?: boolean | null;
    /**
     * The primary geo routing configuration. If there are multiple items with the same location, an error is returned instead.
     */
    items?: Schema$RRSetRoutingPolicyGeoPolicyGeoPolicyItem[];
    kind?: string | null;
  }
  /**
   * ResourceRecordSet data for one geo location.
   */
  export interface Schema$RRSetRoutingPolicyGeoPolicyGeoPolicyItem {
    /**
     * For A and AAAA types only. Endpoints to return in the query result only if they are healthy. These can be specified along with rrdata within this item.
     */
    healthCheckedTargets?: Schema$RRSetRoutingPolicyHealthCheckTargets;
    kind?: string | null;
    /**
     * The geo-location granularity is a GCP region. This location string should correspond to a GCP region. e.g. "us-east1", "southamerica-east1", "asia-east1", etc.
     */
    location?: string | null;
    rrdatas?: string[] | null;
    /**
     * DNSSEC generated signatures for all the rrdata within this item. If health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 IP address per item.
     */
    signatureRrdatas?: string[] | null;
  }
  /**
   * HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response. Only one of internal_load_balancer and external_endpoints should be set.
   */
  export interface Schema$RRSetRoutingPolicyHealthCheckTargets {
    /**
     * The Internet IP addresses to be health checked. The format matches the format of ResourceRecordSet.rrdata as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)
     */
    externalEndpoints?: string[] | null;
    /**
     * Configuration for internal load balancers to be health checked.
     */
    internalLoadBalancers?: Schema$RRSetRoutingPolicyLoadBalancerTarget[];
  }
  /**
   * The configuration for an individual load balancer to health check.
   */
  export interface Schema$RRSetRoutingPolicyLoadBalancerTarget {
    /**
     * The frontend IP address of the load balancer to health check.
     */
    ipAddress?: string | null;
    /**
     * The protocol of the load balancer to health check.
     */
    ipProtocol?: string | null;
    kind?: string | null;
    /**
     * The type of load balancer specified by this target. This value must match the configuration of the load balancer located at the LoadBalancerTarget's IP address, port, and region. Use the following: - *regionalL4ilb*: for a regional internal passthrough Network Load Balancer. - *regionalL7ilb*: for a regional internal Application Load Balancer. - *globalL7ilb*: for a global internal Application Load Balancer.
     */
    loadBalancerType?: string | null;
    /**
     * The fully qualified URL of the network that the load balancer is attached to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project\}/global/networks/{network\} .
     */
    networkUrl?: string | null;
    /**
     * The configured port of the load balancer.
     */
    port?: string | null;
    /**
     * The project ID in which the load balancer is located.
     */
    project?: string | null;
    /**
     * The region in which the load balancer is located.
     */
    region?: string | null;
  }
  /**
   * Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.
   */
  export interface Schema$RRSetRoutingPolicyPrimaryBackupPolicy {
    /**
     * Backup targets provide a regional failover policy for the otherwise global primary targets. If serving state is set to BACKUP, this policy essentially becomes a geo routing policy.
     */
    backupGeoTargets?: Schema$RRSetRoutingPolicyGeoPolicy;
    kind?: string | null;
    /**
     * Endpoints that are health checked before making the routing decision. Unhealthy endpoints are omitted from the results. If all endpoints are unhealthy, we serve a response based on the backup_geo_targets.
     */
    primaryTargets?: Schema$RRSetRoutingPolicyHealthCheckTargets;
    /**
     * When serving state is PRIMARY, this field provides the option of sending a small percentage of the traffic to the backup targets.
     */
    trickleTraffic?: number | null;
  }
  /**
   * Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.
   */
  export interface Schema$RRSetRoutingPolicyWrrPolicy {
    items?: Schema$RRSetRoutingPolicyWrrPolicyWrrPolicyItem[];
    kind?: string | null;
  }
  /**
   * A routing block which contains the routing information for one WRR item.
   */
  export interface Schema$RRSetRoutingPolicyWrrPolicyWrrPolicyItem {
    /**
     * Endpoints that are health checked before making the routing decision. The unhealthy endpoints are omitted from the result. If all endpoints within a bucket are unhealthy, we choose a different bucket (sampled with respect to its weight) for responding. If DNSSEC is enabled for this zone, only one of rrdata or health_checked_targets can be set.
     */
    healthCheckedTargets?: Schema$RRSetRoutingPolicyHealthCheckTargets;
    kind?: string | null;
    rrdatas?: string[] | null;
    /**
     * DNSSEC generated signatures for all the rrdata within this item. Note that if health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 IP address per item.
     */
    signatureRrdatas?: string[] | null;
    /**
     * The weight corresponding to this WrrPolicyItem object. When multiple WrrPolicyItem objects are configured, the probability of returning an WrrPolicyItem object's data is proportional to its weight relative to the sum of weights configured for all items. This weight must be non-negative.
     */
    weight?: number | null;
  }

  export class Resource$Changes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Atomically updates the ResourceRecordSet collection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Changes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Changes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Change>;
    create(
      params: Params$Resource$Changes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Changes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Change>,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    create(
      params: Params$Resource$Changes$Create,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    create(callback: BodyResponseCallback<Schema$Change>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Changes$Create
        | BodyResponseCallback<Schema$Change>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Change>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Change>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Change> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Change>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Change>(parameters);
      }
    }

    /**
     * Fetches the representation of an existing Change.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Changes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Changes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Change>;
    get(
      params: Params$Resource$Changes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Changes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Change>,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    get(
      params: Params$Resource$Changes$Get,
      callback: BodyResponseCallback<Schema$Change>
    ): void;
    get(callback: BodyResponseCallback<Schema$Change>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Changes$Get
        | BodyResponseCallback<Schema$Change>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Change>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Change>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Change> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes/{changeId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone', 'changeId'],
        pathParams: ['changeId', 'managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Change>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Change>(parameters);
      }
    }

    /**
     * Enumerates Changes to a ResourceRecordSet collection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Changes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Changes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChangesListResponse>;
    list(
      params: Params$Resource$Changes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Changes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ChangesListResponse>,
      callback: BodyResponseCallback<Schema$ChangesListResponse>
    ): void;
    list(
      params: Params$Resource$Changes$List,
      callback: BodyResponseCallback<Schema$ChangesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChangesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Changes$List
        | BodyResponseCallback<Schema$ChangesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChangesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChangesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ChangesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChangesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChangesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Changes$Create extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Change;
  }
  export interface Params$Resource$Changes$Get extends StandardParameters {
    /**
     * The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
     */
    changeId?: string;
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Changes$List extends StandardParameters {
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     */
    maxResults?: number;
    /**
     * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     */
    pageToken?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * Sorting criterion. The only supported value is change sequence.
     */
    sortBy?: string;
    /**
     * Sorting order direction: 'ascending' or 'descending'.
     */
    sortOrder?: string;
  }

  export class Resource$Dnskeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Fetches the representation of an existing DnsKey.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Dnskeys$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Dnskeys$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DnsKey>;
    get(
      params: Params$Resource$Dnskeys$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Dnskeys$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DnsKey>,
      callback: BodyResponseCallback<Schema$DnsKey>
    ): void;
    get(
      params: Params$Resource$Dnskeys$Get,
      callback: BodyResponseCallback<Schema$DnsKey>
    ): void;
    get(callback: BodyResponseCallback<Schema$DnsKey>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Dnskeys$Get
        | BodyResponseCallback<Schema$DnsKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DnsKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DnsKey>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DnsKey> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Dnskeys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dnskeys$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone', 'dnsKeyId'],
        pathParams: ['dnsKeyId', 'managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DnsKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DnsKey>(parameters);
      }
    }

    /**
     * Enumerates DnsKeys to a ResourceRecordSet collection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Dnskeys$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Dnskeys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DnsKeysListResponse>;
    list(
      params: Params$Resource$Dnskeys$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Dnskeys$List,
      options: MethodOptions | BodyResponseCallback<Schema$DnsKeysListResponse>,
      callback: BodyResponseCallback<Schema$DnsKeysListResponse>
    ): void;
    list(
      params: Params$Resource$Dnskeys$List,
      callback: BodyResponseCallback<Schema$DnsKeysListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$DnsKeysListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Dnskeys$List
        | BodyResponseCallback<Schema$DnsKeysListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DnsKeysListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DnsKeysListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DnsKeysListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Dnskeys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dnskeys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/dnsKeys'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DnsKeysListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DnsKeysListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Dnskeys$Get extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.
     */
    digestType?: string;
    /**
     * The identifier of the requested DnsKey.
     */
    dnsKeyId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Dnskeys$List extends StandardParameters {
    /**
     * An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.
     */
    digestType?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     */
    maxResults?: number;
    /**
     * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     */
    pageToken?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }

  export class Resource$Managedzoneoperations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Fetches the representation of an existing Operation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Managedzoneoperations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Managedzoneoperations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Managedzoneoperations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Managedzoneoperations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Managedzoneoperations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Managedzoneoperations$Get
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
        {}) as Params$Resource$Managedzoneoperations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzoneoperations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/operations/{operation}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone', 'operation'],
        pathParams: ['managedZone', 'operation', 'project'],
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
     * Enumerates Operations for the given ManagedZone.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Managedzoneoperations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Managedzoneoperations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedZoneOperationsListResponse>;
    list(
      params: Params$Resource$Managedzoneoperations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Managedzoneoperations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>,
      callback: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
    ): void;
    list(
      params: Params$Resource$Managedzoneoperations$List,
      callback: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Managedzoneoperations$List
        | BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManagedZoneOperationsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ManagedZoneOperationsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzoneoperations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzoneoperations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/operations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManagedZoneOperationsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManagedZoneOperationsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Managedzoneoperations$Get
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request.
     */
    managedZone?: string;
    /**
     * Identifies the operation addressed by this request (ID of the operation).
     */
    operation?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Managedzoneoperations$List
    extends StandardParameters {
    /**
     * Identifies the managed zone addressed by this request.
     */
    managedZone?: string;
    /**
     * Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     */
    maxResults?: number;
    /**
     * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     */
    pageToken?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * Sorting criterion. The only supported values are START_TIME and ID.
     */
    sortBy?: string;
  }

  export class Resource$Managedzones {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new ManagedZone.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Managedzones$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Managedzones$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedZone>;
    create(
      params: Params$Resource$Managedzones$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Managedzones$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ManagedZone>,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    create(
      params: Params$Resource$Managedzones$Create,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    create(callback: BodyResponseCallback<Schema$ManagedZone>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Create
        | BodyResponseCallback<Schema$ManagedZone>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManagedZone>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManagedZone>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ManagedZone> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/managedZones'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManagedZone>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManagedZone>(parameters);
      }
    }

    /**
     * Deletes a previously created ManagedZone.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Managedzones$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Managedzones$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Managedzones$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Managedzones$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Managedzones$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Fetches the representation of an existing ManagedZone.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Managedzones$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Managedzones$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedZone>;
    get(
      params: Params$Resource$Managedzones$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Managedzones$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ManagedZone>,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    get(
      params: Params$Resource$Managedzones$Get,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    get(callback: BodyResponseCallback<Schema$ManagedZone>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Get
        | BodyResponseCallback<Schema$ManagedZone>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManagedZone>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManagedZone>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ManagedZone> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Managedzones$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManagedZone>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManagedZone>(parameters);
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
      params: Params$Resource$Managedzones$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Managedzones$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Managedzones$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Managedzones$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Managedzones$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/dns/v1beta2/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Enumerates ManagedZones that have been created but not yet deleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Managedzones$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Managedzones$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagedZonesListResponse>;
    list(
      params: Params$Resource$Managedzones$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Managedzones$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ManagedZonesListResponse>,
      callback: BodyResponseCallback<Schema$ManagedZonesListResponse>
    ): void;
    list(
      params: Params$Resource$Managedzones$List,
      callback: BodyResponseCallback<Schema$ManagedZonesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ManagedZonesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Managedzones$List
        | BodyResponseCallback<Schema$ManagedZonesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManagedZonesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManagedZonesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ManagedZonesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/managedZones'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManagedZonesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManagedZonesListResponse>(parameters);
      }
    }

    /**
     * Applies a partial update to an existing ManagedZone.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Managedzones$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Managedzones$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Managedzones$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Managedzones$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Managedzones$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Patch
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
        {}) as Params$Resource$Managedzones$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
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
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Managedzones$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Managedzones$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Managedzones$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Managedzones$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Managedzones$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/dns/v1beta2/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Managedzones$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Managedzones$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Managedzones$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Managedzones$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Managedzones$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedzones$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/{+resource}:testIamPermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing ManagedZone.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Managedzones$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Managedzones$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Managedzones$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Managedzones$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Managedzones$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Managedzones$Update
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
        {}) as Params$Resource$Managedzones$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedzones$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
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

  export interface Params$Resource$Managedzones$Create
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagedZone;
  }
  export interface Params$Resource$Managedzones$Delete
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Managedzones$Get extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Managedzones$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1GetIamPolicyRequest;
  }
  export interface Params$Resource$Managedzones$List
    extends StandardParameters {
    /**
     * Restricts the list to return only zones with this domain name.
     */
    dnsName?: string;
    /**
     * Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     */
    maxResults?: number;
    /**
     * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     */
    pageToken?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Managedzones$Patch
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagedZone;
  }
  export interface Params$Resource$Managedzones$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Managedzones$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }
  export interface Params$Resource$Managedzones$Update
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagedZone;
  }

  export class Resource$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Policies$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Policies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    create(
      params: Params$Resource$Policies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Policies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    create(
      params: Params$Resource$Policies$Create,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    create(callback: BodyResponseCallback<Schema$Policy>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Policies$Create
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
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/dns/v1beta2/projects/{project}/policies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
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
     * Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Policies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Policies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Policies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Policies$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Policies$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Policies$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/policies/{policy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'policy'],
        pathParams: ['policy', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Fetches the representation of an existing Policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Policies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    get(
      params: Params$Resource$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Policies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(
      params: Params$Resource$Policies$Get,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(callback: BodyResponseCallback<Schema$Policy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Policies$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/policies/{policy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'policy'],
        pathParams: ['policy', 'project'],
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
     * Enumerates all Policies associated with a project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Policies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Policies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PoliciesListResponse>;
    list(
      params: Params$Resource$Policies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Policies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PoliciesListResponse>,
      callback: BodyResponseCallback<Schema$PoliciesListResponse>
    ): void;
    list(
      params: Params$Resource$Policies$List,
      callback: BodyResponseCallback<Schema$PoliciesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PoliciesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Policies$List
        | BodyResponseCallback<Schema$PoliciesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PoliciesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PoliciesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PoliciesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/dns/v1beta2/projects/{project}/policies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PoliciesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PoliciesListResponse>(parameters);
      }
    }

    /**
     * Applies a partial update to an existing Policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Policies$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Policies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PoliciesPatchResponse>;
    patch(
      params: Params$Resource$Policies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Policies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PoliciesPatchResponse>,
      callback: BodyResponseCallback<Schema$PoliciesPatchResponse>
    ): void;
    patch(
      params: Params$Resource$Policies$Patch,
      callback: BodyResponseCallback<Schema$PoliciesPatchResponse>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PoliciesPatchResponse>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Policies$Patch
        | BodyResponseCallback<Schema$PoliciesPatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PoliciesPatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PoliciesPatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PoliciesPatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/policies/{policy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'policy'],
        pathParams: ['policy', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PoliciesPatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PoliciesPatchResponse>(parameters);
      }
    }

    /**
     * Updates an existing Policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Policies$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Policies$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PoliciesUpdateResponse>;
    update(
      params: Params$Resource$Policies$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Policies$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PoliciesUpdateResponse>,
      callback: BodyResponseCallback<Schema$PoliciesUpdateResponse>
    ): void;
    update(
      params: Params$Resource$Policies$Update,
      callback: BodyResponseCallback<Schema$PoliciesUpdateResponse>
    ): void;
    update(callback: BodyResponseCallback<Schema$PoliciesUpdateResponse>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Policies$Update
        | BodyResponseCallback<Schema$PoliciesUpdateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PoliciesUpdateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PoliciesUpdateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PoliciesUpdateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/policies/{policy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'policy'],
        pathParams: ['policy', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PoliciesUpdateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PoliciesUpdateResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Policies$Create extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Policies$Delete extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * User given friendly name of the policy addressed by this request.
     */
    policy?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Policies$Get extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * User given friendly name of the policy addressed by this request.
     */
    policy?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Policies$List extends StandardParameters {
    /**
     * Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     */
    maxResults?: number;
    /**
     * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     */
    pageToken?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Policies$Patch extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * User given friendly name of the policy addressed by this request.
     */
    policy?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Policies$Update extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * User given friendly name of the policy addressed by this request.
     */
    policy?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Fetches the representation of an existing Project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Project>;
    get(
      params: Params$Resource$Projects$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(
      params: Params$Resource$Projects$Get,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(callback: BodyResponseCallback<Schema$Project>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Get
        | BodyResponseCallback<Schema$Project>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Project>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Project>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Project> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/dns/v1beta2/projects/{project}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Project>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Get extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }

  export class Resource$Resourcerecordsets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new ResourceRecordSet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Resourcerecordsets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Resourcerecordsets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResourceRecordSet>;
    create(
      params: Params$Resource$Resourcerecordsets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Resourcerecordsets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ResourceRecordSet>,
      callback: BodyResponseCallback<Schema$ResourceRecordSet>
    ): void;
    create(
      params: Params$Resource$Resourcerecordsets$Create,
      callback: BodyResponseCallback<Schema$ResourceRecordSet>
    ): void;
    create(callback: BodyResponseCallback<Schema$ResourceRecordSet>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Resourcerecordsets$Create
        | BodyResponseCallback<Schema$ResourceRecordSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResourceRecordSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResourceRecordSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResourceRecordSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resourcerecordsets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resourcerecordsets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResourceRecordSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResourceRecordSet>(parameters);
      }
    }

    /**
     * Deletes a previously created ResourceRecordSet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Resourcerecordsets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Resourcerecordsets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Resourcerecordsets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Resourcerecordsets$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Resourcerecordsets$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Resourcerecordsets$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resourcerecordsets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resourcerecordsets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone', 'name', 'type'],
        pathParams: ['managedZone', 'name', 'project', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Fetches the representation of an existing ResourceRecordSet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Resourcerecordsets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Resourcerecordsets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResourceRecordSet>;
    get(
      params: Params$Resource$Resourcerecordsets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Resourcerecordsets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ResourceRecordSet>,
      callback: BodyResponseCallback<Schema$ResourceRecordSet>
    ): void;
    get(
      params: Params$Resource$Resourcerecordsets$Get,
      callback: BodyResponseCallback<Schema$ResourceRecordSet>
    ): void;
    get(callback: BodyResponseCallback<Schema$ResourceRecordSet>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Resourcerecordsets$Get
        | BodyResponseCallback<Schema$ResourceRecordSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResourceRecordSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResourceRecordSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResourceRecordSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resourcerecordsets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resourcerecordsets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone', 'name', 'type'],
        pathParams: ['managedZone', 'name', 'project', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResourceRecordSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResourceRecordSet>(parameters);
      }
    }

    /**
     * Enumerates ResourceRecordSets that you have created but not yet deleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Resourcerecordsets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Resourcerecordsets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResourceRecordSetsListResponse>;
    list(
      params: Params$Resource$Resourcerecordsets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Resourcerecordsets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResourceRecordSetsListResponse>,
      callback: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
    ): void;
    list(
      params: Params$Resource$Resourcerecordsets$List,
      callback: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Resourcerecordsets$List
        | BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResourceRecordSetsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResourceRecordSetsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resourcerecordsets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resourcerecordsets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResourceRecordSetsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResourceRecordSetsListResponse>(
          parameters
        );
      }
    }

    /**
     * Applies a partial update to an existing ResourceRecordSet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Resourcerecordsets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Resourcerecordsets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResourceRecordSet>;
    patch(
      params: Params$Resource$Resourcerecordsets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Resourcerecordsets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ResourceRecordSet>,
      callback: BodyResponseCallback<Schema$ResourceRecordSet>
    ): void;
    patch(
      params: Params$Resource$Resourcerecordsets$Patch,
      callback: BodyResponseCallback<Schema$ResourceRecordSet>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ResourceRecordSet>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Resourcerecordsets$Patch
        | BodyResponseCallback<Schema$ResourceRecordSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResourceRecordSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResourceRecordSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResourceRecordSet>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resourcerecordsets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resourcerecordsets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'managedZone', 'name', 'type'],
        pathParams: ['managedZone', 'name', 'project', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResourceRecordSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResourceRecordSet>(parameters);
      }
    }
  }

  export interface Params$Resource$Resourcerecordsets$Create
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResourceRecordSet;
  }
  export interface Params$Resource$Resourcerecordsets$Delete
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Fully qualified domain name.
     */
    name?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * RRSet type.
     */
    type?: string;
  }
  export interface Params$Resource$Resourcerecordsets$Get
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Fully qualified domain name.
     */
    name?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * RRSet type.
     */
    type?: string;
  }
  export interface Params$Resource$Resourcerecordsets$List
    extends StandardParameters {
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     */
    maxResults?: number;
    /**
     * Restricts the list to return only records with this fully qualified domain name.
     */
    name?: string;
    /**
     * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     */
    pageToken?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
     */
    type?: string;
  }
  export interface Params$Resource$Resourcerecordsets$Patch
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone?: string;
    /**
     * Fully qualified domain name.
     */
    name?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * RRSet type.
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResourceRecordSet;
  }

  export class Resource$Responsepolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Response Policy
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Responsepolicies$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Responsepolicies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePolicy>;
    create(
      params: Params$Resource$Responsepolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Responsepolicies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ResponsePolicy>,
      callback: BodyResponseCallback<Schema$ResponsePolicy>
    ): void;
    create(
      params: Params$Resource$Responsepolicies$Create,
      callback: BodyResponseCallback<Schema$ResponsePolicy>
    ): void;
    create(callback: BodyResponseCallback<Schema$ResponsePolicy>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Responsepolicies$Create
        | BodyResponseCallback<Schema$ResponsePolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ResponsePolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/responsePolicies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePolicy>(parameters);
      }
    }

    /**
     * Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Responsepolicies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Responsepolicies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Responsepolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Responsepolicies$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Responsepolicies$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Responsepolicies$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy'],
        pathParams: ['project', 'responsePolicy'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Fetches the representation of an existing Response Policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Responsepolicies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Responsepolicies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePolicy>;
    get(
      params: Params$Resource$Responsepolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Responsepolicies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ResponsePolicy>,
      callback: BodyResponseCallback<Schema$ResponsePolicy>
    ): void;
    get(
      params: Params$Resource$Responsepolicies$Get,
      callback: BodyResponseCallback<Schema$ResponsePolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$ResponsePolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Responsepolicies$Get
        | BodyResponseCallback<Schema$ResponsePolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ResponsePolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy'],
        pathParams: ['project', 'responsePolicy'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePolicy>(parameters);
      }
    }

    /**
     * Enumerates all Response Policies associated with a project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Responsepolicies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Responsepolicies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePoliciesListResponse>;
    list(
      params: Params$Resource$Responsepolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Responsepolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResponsePoliciesListResponse>,
      callback: BodyResponseCallback<Schema$ResponsePoliciesListResponse>
    ): void;
    list(
      params: Params$Resource$Responsepolicies$List,
      callback: BodyResponseCallback<Schema$ResponsePoliciesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ResponsePoliciesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Responsepolicies$List
        | BodyResponseCallback<Schema$ResponsePoliciesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePoliciesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePoliciesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResponsePoliciesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dns/v1beta2/projects/{project}/responsePolicies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePoliciesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePoliciesListResponse>(
          parameters
        );
      }
    }

    /**
     * Applies a partial update to an existing Response Policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Responsepolicies$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Responsepolicies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePoliciesPatchResponse>;
    patch(
      params: Params$Resource$Responsepolicies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Responsepolicies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResponsePoliciesPatchResponse>,
      callback: BodyResponseCallback<Schema$ResponsePoliciesPatchResponse>
    ): void;
    patch(
      params: Params$Resource$Responsepolicies$Patch,
      callback: BodyResponseCallback<Schema$ResponsePoliciesPatchResponse>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$ResponsePoliciesPatchResponse>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Responsepolicies$Patch
        | BodyResponseCallback<Schema$ResponsePoliciesPatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePoliciesPatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePoliciesPatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResponsePoliciesPatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy'],
        pathParams: ['project', 'responsePolicy'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePoliciesPatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePoliciesPatchResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing Response Policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Responsepolicies$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Responsepolicies$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePoliciesUpdateResponse>;
    update(
      params: Params$Resource$Responsepolicies$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Responsepolicies$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResponsePoliciesUpdateResponse>,
      callback: BodyResponseCallback<Schema$ResponsePoliciesUpdateResponse>
    ): void;
    update(
      params: Params$Resource$Responsepolicies$Update,
      callback: BodyResponseCallback<Schema$ResponsePoliciesUpdateResponse>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$ResponsePoliciesUpdateResponse>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Responsepolicies$Update
        | BodyResponseCallback<Schema$ResponsePoliciesUpdateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePoliciesUpdateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePoliciesUpdateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResponsePoliciesUpdateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy'],
        pathParams: ['project', 'responsePolicy'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePoliciesUpdateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePoliciesUpdateResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Responsepolicies$Create
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResponsePolicy;
  }
  export interface Params$Resource$Responsepolicies$Delete
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the Response Policy addressed by this request.
     */
    responsePolicy?: string;
  }
  export interface Params$Resource$Responsepolicies$Get
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the Response Policy addressed by this request.
     */
    responsePolicy?: string;
  }
  export interface Params$Resource$Responsepolicies$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     */
    maxResults?: number;
    /**
     * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     */
    pageToken?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
  }
  export interface Params$Resource$Responsepolicies$Patch
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the response policy addressed by this request.
     */
    responsePolicy?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResponsePolicy;
  }
  export interface Params$Resource$Responsepolicies$Update
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the Response Policy addressed by this request.
     */
    responsePolicy?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResponsePolicy;
  }

  export class Resource$Responsepolicyrules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Response Policy Rule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Responsepolicyrules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Responsepolicyrules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePolicyRule>;
    create(
      params: Params$Resource$Responsepolicyrules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Responsepolicyrules$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ResponsePolicyRule>,
      callback: BodyResponseCallback<Schema$ResponsePolicyRule>
    ): void;
    create(
      params: Params$Resource$Responsepolicyrules$Create,
      callback: BodyResponseCallback<Schema$ResponsePolicyRule>
    ): void;
    create(callback: BodyResponseCallback<Schema$ResponsePolicyRule>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Responsepolicyrules$Create
        | BodyResponseCallback<Schema$ResponsePolicyRule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePolicyRule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePolicyRule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResponsePolicyRule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicyrules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicyrules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy'],
        pathParams: ['project', 'responsePolicy'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePolicyRule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePolicyRule>(parameters);
      }
    }

    /**
     * Deletes a previously created Response Policy Rule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Responsepolicyrules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Responsepolicyrules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Responsepolicyrules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Responsepolicyrules$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Responsepolicyrules$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Responsepolicyrules$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicyrules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicyrules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy', 'responsePolicyRule'],
        pathParams: ['project', 'responsePolicy', 'responsePolicyRule'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Fetches the representation of an existing Response Policy Rule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Responsepolicyrules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Responsepolicyrules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePolicyRule>;
    get(
      params: Params$Resource$Responsepolicyrules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Responsepolicyrules$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ResponsePolicyRule>,
      callback: BodyResponseCallback<Schema$ResponsePolicyRule>
    ): void;
    get(
      params: Params$Resource$Responsepolicyrules$Get,
      callback: BodyResponseCallback<Schema$ResponsePolicyRule>
    ): void;
    get(callback: BodyResponseCallback<Schema$ResponsePolicyRule>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Responsepolicyrules$Get
        | BodyResponseCallback<Schema$ResponsePolicyRule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePolicyRule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePolicyRule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResponsePolicyRule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicyrules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicyrules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy', 'responsePolicyRule'],
        pathParams: ['project', 'responsePolicy', 'responsePolicyRule'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePolicyRule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePolicyRule>(parameters);
      }
    }

    /**
     * Enumerates all Response Policy Rules associated with a project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Responsepolicyrules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Responsepolicyrules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePolicyRulesListResponse>;
    list(
      params: Params$Resource$Responsepolicyrules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Responsepolicyrules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResponsePolicyRulesListResponse>,
      callback: BodyResponseCallback<Schema$ResponsePolicyRulesListResponse>
    ): void;
    list(
      params: Params$Resource$Responsepolicyrules$List,
      callback: BodyResponseCallback<Schema$ResponsePolicyRulesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ResponsePolicyRulesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Responsepolicyrules$List
        | BodyResponseCallback<Schema$ResponsePolicyRulesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePolicyRulesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePolicyRulesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResponsePolicyRulesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicyrules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicyrules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy'],
        pathParams: ['project', 'responsePolicy'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePolicyRulesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePolicyRulesListResponse>(
          parameters
        );
      }
    }

    /**
     * Applies a partial update to an existing Response Policy Rule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Responsepolicyrules$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Responsepolicyrules$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePolicyRulesPatchResponse>;
    patch(
      params: Params$Resource$Responsepolicyrules$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Responsepolicyrules$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResponsePolicyRulesPatchResponse>,
      callback: BodyResponseCallback<Schema$ResponsePolicyRulesPatchResponse>
    ): void;
    patch(
      params: Params$Resource$Responsepolicyrules$Patch,
      callback: BodyResponseCallback<Schema$ResponsePolicyRulesPatchResponse>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$ResponsePolicyRulesPatchResponse>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Responsepolicyrules$Patch
        | BodyResponseCallback<Schema$ResponsePolicyRulesPatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePolicyRulesPatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePolicyRulesPatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResponsePolicyRulesPatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicyrules$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicyrules$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy', 'responsePolicyRule'],
        pathParams: ['project', 'responsePolicy', 'responsePolicyRule'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePolicyRulesPatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePolicyRulesPatchResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing Response Policy Rule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Responsepolicyrules$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Responsepolicyrules$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResponsePolicyRulesUpdateResponse>;
    update(
      params: Params$Resource$Responsepolicyrules$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Responsepolicyrules$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResponsePolicyRulesUpdateResponse>,
      callback: BodyResponseCallback<Schema$ResponsePolicyRulesUpdateResponse>
    ): void;
    update(
      params: Params$Resource$Responsepolicyrules$Update,
      callback: BodyResponseCallback<Schema$ResponsePolicyRulesUpdateResponse>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$ResponsePolicyRulesUpdateResponse>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Responsepolicyrules$Update
        | BodyResponseCallback<Schema$ResponsePolicyRulesUpdateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResponsePolicyRulesUpdateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResponsePolicyRulesUpdateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ResponsePolicyRulesUpdateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Responsepolicyrules$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Responsepolicyrules$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dns.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dns/v1beta2/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'responsePolicy', 'responsePolicyRule'],
        pathParams: ['project', 'responsePolicy', 'responsePolicyRule'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResponsePolicyRulesUpdateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResponsePolicyRulesUpdateResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Responsepolicyrules$Create
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the Response Policy containing the Response Policy Rule.
     */
    responsePolicy?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResponsePolicyRule;
  }
  export interface Params$Resource$Responsepolicyrules$Delete
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the Response Policy containing the Response Policy Rule.
     */
    responsePolicy?: string;
    /**
     * User assigned name of the Response Policy Rule addressed by this request.
     */
    responsePolicyRule?: string;
  }
  export interface Params$Resource$Responsepolicyrules$Get
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the Response Policy containing the Response Policy Rule.
     */
    responsePolicy?: string;
    /**
     * User assigned name of the Response Policy Rule addressed by this request.
     */
    responsePolicyRule?: string;
  }
  export interface Params$Resource$Responsepolicyrules$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     */
    maxResults?: number;
    /**
     * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     */
    pageToken?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the Response Policy to list.
     */
    responsePolicy?: string;
  }
  export interface Params$Resource$Responsepolicyrules$Patch
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the Response Policy containing the Response Policy Rule.
     */
    responsePolicy?: string;
    /**
     * User assigned name of the Response Policy Rule addressed by this request.
     */
    responsePolicyRule?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResponsePolicyRule;
  }
  export interface Params$Resource$Responsepolicyrules$Update
    extends StandardParameters {
    /**
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
    /**
     * Identifies the project addressed by this request.
     */
    project?: string;
    /**
     * User assigned name of the Response Policy containing the Response Policy Rule.
     */
    responsePolicy?: string;
    /**
     * User assigned name of the Response Policy Rule addressed by this request.
     */
    responsePolicyRule?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResponsePolicyRule;
  }
}
