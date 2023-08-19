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

export namespace securitycenter_v1 {
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
   * Security Command Center API
   *
   * Security Command Center API provides access to temporal views of assets and findings within an organization.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const securitycenter = google.securitycenter('v1');
   * ```
   */
  export class Securitycenter {
    context: APIRequestContext;
    folders: Resource$Folders;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.folders = new Resource$Folders(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Represents an access event.
   */
  export interface Schema$Access {
    /**
     * Caller's IP address, such as "1.1.1.1".
     */
    callerIp?: string | null;
    /**
     * The caller IP's geolocation, which identifies where the call came from.
     */
    callerIpGeo?: Schema$Geolocation;
    /**
     * The method that the service account called, e.g. "SetIamPolicy".
     */
    methodName?: string | null;
    /**
     * Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).
     */
    principalEmail?: string | null;
    /**
     * A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name\}/subject/{subject\}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name\}[{subject\}]`.
     */
    principalSubject?: string | null;
    /**
     * The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.
     */
    serviceAccountDelegationInfo?: Schema$ServiceAccountDelegationInfo[];
    /**
     * The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}/keys/{key\}".
     */
    serviceAccountKeyName?: string | null;
    /**
     * This is the API service that the service account made a call to, e.g. "iam.googleapis.com"
     */
    serviceName?: string | null;
    /**
     * The caller's user agent string associated with the finding.
     */
    userAgent?: string | null;
    /**
     * Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application.
     */
    userAgentFamily?: string | null;
    /**
     * A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username.
     */
    userName?: string | null;
  }
  /**
   * Conveys information about a Kubernetes access review (such as one returned by a [`kubectl auth can-i`](https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access) command) that was involved in a finding.
   */
  export interface Schema$AccessReview {
    /**
     * The API group of the resource. "*" means all.
     */
    group?: string | null;
    /**
     * The name of the resource being requested. Empty means all.
     */
    name?: string | null;
    /**
     * Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty).
     */
    ns?: string | null;
    /**
     * The optional resource type requested. "*" means all.
     */
    resource?: string | null;
    /**
     * The optional subresource type.
     */
    subresource?: string | null;
    /**
     * A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all.
     */
    verb?: string | null;
    /**
     * The API version of the resource. "*" means all.
     */
    version?: string | null;
  }
  /**
   * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
   */
  export interface Schema$Asset {
    /**
     * The canonical name of the resource. It's either "organizations/{organization_id\}/assets/{asset_id\}", "folders/{folder_id\}/assets/{asset_id\}" or "projects/{project_number\}/assets/{asset_id\}", depending on the closest CRM ancestor of the resource.
     */
    canonicalName?: string | null;
    /**
     * The time at which the asset was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.
     */
    iamPolicy?: Schema$IamPolicy;
    /**
     * The relative resource name of this asset. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/assets/{asset_id\}".
     */
    name?: string | null;
    /**
     * Resource managed properties. These properties are managed and defined by the Google Cloud resource and cannot be modified by the user.
     */
    resourceProperties?: {[key: string]: any} | null;
    /**
     * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
     */
    securityCenterProperties?: Schema$SecurityCenterProperties;
    /**
     * User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the asset.
     */
    securityMarks?: Schema$SecurityMarks;
    /**
     * The time at which the asset was last updated or added in Cloud SCC.
     */
    updateTime?: string | null;
  }
  /**
   * The configuration used for Asset Discovery runs.
   */
  export interface Schema$AssetDiscoveryConfig {
    /**
     * The folder ids to use for filtering asset discovery. It consists of only digits, e.g., 756619654966.
     */
    folderIds?: string[] | null;
    /**
     * The mode to use for filtering asset discovery.
     */
    inclusionMode?: string | null;
    /**
     * The project ids to use for filtering asset discovery.
     */
    projectIds?: string[] | null;
  }
  /**
   * An attack exposure contains the results of an attack path simulation run.
   */
  export interface Schema$AttackExposure {
    /**
     * The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: organizations/123/attackExposureResults/456
     */
    attackExposureResult?: string | null;
    /**
     * The number of high value resources that are exposed as a result of this finding.
     */
    exposedHighValueResourcesCount?: number | null;
    /**
     * The number of high value resources that are exposed as a result of this finding.
     */
    exposedLowValueResourcesCount?: number | null;
    /**
     * The number of medium value resources that are exposed as a result of this finding.
     */
    exposedMediumValueResourcesCount?: number | null;
    /**
     * The most recent time the attack exposure was updated on this finding.
     */
    latestCalculationTime?: string | null;
    /**
     * A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate.
     */
    score?: number | null;
    /**
     * What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not.
     */
    state?: string | null;
  }
  /**
   * A path that an attacker could take to reach an exposed resource.
   */
  export interface Schema$AttackPath {
    /**
     * A list of the edges between nodes in this attack path.
     */
    edges?: Schema$AttackPathEdge[];
    /**
     * The attack path name, for example, `organizations/12/simulation/34/valuedResources/56/attackPaths/78`
     */
    name?: string | null;
    /**
     * A list of nodes that exist in this attack path.
     */
    pathNodes?: Schema$AttackPathNode[];
  }
  /**
   * Represents a connection between a source node and a destination node in this attack path.
   */
  export interface Schema$AttackPathEdge {
    /**
     * The attack node uuid of the destination node.
     */
    destination?: string | null;
    /**
     * The attack node uuid of the source node.
     */
    source?: string | null;
  }
  /**
   * Represents one point that an attacker passes through in this attack path.
   */
  export interface Schema$AttackPathNode {
    /**
     * The findings associated with this node in the attack path.
     */
    associatedFindings?: Schema$PathNodeAssociatedFinding[];
    /**
     * A list of attack step nodes that exist in this attack path node.
     */
    attackSteps?: Schema$AttackStepNode[];
    /**
     * Human-readable name of this resource.
     */
    displayName?: string | null;
    /**
     * The name of the resource at this point in the attack path. The format of the name follows the Cloud Asset Inventory [resource name format]("https://cloud.google.com/asset-inventory/docs/resource-name-format")
     */
    resource?: string | null;
    /**
     * The [supported resource type](https://cloud.google.com/asset-inventory/docs/supported-asset-types")
     */
    resourceType?: string | null;
    /**
     * Unique id of the attack path node.
     */
    uuid?: string | null;
  }
  /**
   * Detailed steps the attack can take between path nodes.
   */
  export interface Schema$AttackStepNode {
    /**
     * Attack step description
     */
    description?: string | null;
    /**
     * User friendly name of the attack step
     */
    displayName?: string | null;
    /**
     * Attack step labels for metadata
     */
    labels?: {[key: string]: string} | null;
    /**
     * Attack step type. Can be either AND, OR or DEFENSE
     */
    type?: string | null;
    /**
     * Unique ID for one Node
     */
    uuid?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
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
   * Request message to create multiple resource value configs
   */
  export interface Schema$BatchCreateResourceValueConfigsRequest {
    /**
     * Required. The resource value configs to be created.
     */
    requests?: Schema$CreateResourceValueConfigRequest[];
  }
  /**
   * Response message for BatchCreateResourceValueConfigs
   */
  export interface Schema$BatchCreateResourceValueConfigsResponse {
    /**
     * The resource value configs created
     */
    resourceValueConfigs?: Schema$GoogleCloudSecuritycenterV1ResourceValueConfig[];
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
   * Request message for bulk findings update. Note: 1. If multiple bulk update requests match the same resource, the order in which they get executed is not defined. 2. Once a bulk operation is started, there is no way to stop it.
   */
  export interface Schema$BulkMuteFindingsRequest {
    /**
     * Expression that identifies findings that should be updated. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.
     */
    filter?: string | null;
    /**
     * This can be a mute configuration name or any identifier for mute/unmute of findings based on the filter.
     */
    muteAnnotation?: string | null;
  }
  /**
   * The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.
   */
  export interface Schema$CloudDlpDataProfile {
    /**
     * Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`.
     */
    dataProfile?: string | null;
    /**
     * The resource hierarchy level at which the data profile was generated.
     */
    parentType?: string | null;
  }
  /**
   * Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.
   */
  export interface Schema$CloudDlpInspection {
    /**
     * Whether Cloud DLP scanned the complete resource or a sampled subset.
     */
    fullScan?: boolean | null;
    /**
     * The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`.
     */
    infoType?: string | null;
    /**
     * The number of times Cloud DLP found this infoType within this job and resource.
     */
    infoTypeCount?: string | null;
    /**
     * Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`.
     */
    inspectJob?: string | null;
  }
  /**
   * Contains compliance information about a security standard indicating unmet recommendations.
   */
  export interface Schema$Compliance {
    /**
     * Policies within the standard or benchmark, for example, A.12.4.1
     */
    ids?: string[] | null;
    /**
     * Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP.
     */
    standard?: string | null;
    /**
     * Version of the standard or benchmark, for example, 1.1
     */
    version?: string | null;
  }
  /**
   * Contains information about the IP connection associated with the finding.
   */
  export interface Schema$Connection {
    /**
     * Destination IP address. Not present for sockets that are listening and not connected.
     */
    destinationIp?: string | null;
    /**
     * Destination port. Not present for sockets that are listening and not connected.
     */
    destinationPort?: number | null;
    /**
     * IANA Internet Protocol Number such as TCP(6) and UDP(17).
     */
    protocol?: string | null;
    /**
     * Source IP address.
     */
    sourceIp?: string | null;
    /**
     * Source port.
     */
    sourcePort?: number | null;
  }
  /**
   * The email address of a contact.
   */
  export interface Schema$Contact {
    /**
     * An email address. For example, "`person123@company.com`".
     */
    email?: string | null;
  }
  /**
   * Details about specific contacts
   */
  export interface Schema$ContactDetails {
    /**
     * A list of contacts
     */
    contacts?: Schema$Contact[];
  }
  /**
   * Container associated with the finding.
   */
  export interface Schema$Container {
    /**
     * The time that the container was created.
     */
    createTime?: string | null;
    /**
     * Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest.
     */
    imageId?: string | null;
    /**
     * Container labels, as provided by the container runtime.
     */
    labels?: Schema$Label[];
    /**
     * Name of the container.
     */
    name?: string | null;
    /**
     * Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags.
     */
    uri?: string | null;
  }
  /**
   * Request message to create single resource value config
   */
  export interface Schema$CreateResourceValueConfigRequest {
    /**
     * Required. Resource name of the new ResourceValueConfig's parent.
     */
    parent?: string | null;
    /**
     * Required. The resource value config being created.
     */
    resourceValueConfig?: Schema$GoogleCloudSecuritycenterV1ResourceValueConfig;
  }
  /**
   * An error encountered while validating the uploaded configuration of an Event Threat Detection Custom Module.
   */
  export interface Schema$CustomModuleValidationError {
    /**
     * A description of the error, suitable for human consumption. Required.
     */
    description?: string | null;
    /**
     * The end position of the error in the uploaded text version of the module. This field may be omitted if no specific position applies, or if one could not be computed..
     */
    end?: Schema$Position;
    /**
     * The path, in RFC 8901 JSON Pointer format, to the field that failed validation. This may be left empty if no specific field is affected.
     */
    fieldPath?: string | null;
    /**
     * The initial position of the error in the uploaded text version of the module. This field may be omitted if no specific position applies, or if one could not be computed.
     */
    start?: Schema$Position;
  }
  /**
   * A list of zero or more errors encountered while validating the uploaded configuration of an Event Threat Detection Custom Module.
   */
  export interface Schema$CustomModuleValidationErrors {
    errors?: Schema$CustomModuleValidationError[];
  }
  /**
   * CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
   */
  export interface Schema$Cve {
    /**
     * Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document
     */
    cvssv3?: Schema$Cvssv3;
    /**
     * The unique identifier for the vulnerability. e.g. CVE-2021-34527
     */
    id?: string | null;
    /**
     * Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527
     */
    references?: Schema$Reference[];
    /**
     * Whether upstream fix is available for the CVE.
     */
    upstreamFixAvailable?: boolean | null;
  }
  /**
   * Common Vulnerability Scoring System version 3.
   */
  export interface Schema$Cvssv3 {
    /**
     * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
     */
    attackComplexity?: string | null;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible.
     */
    attackVector?: string | null;
    /**
     * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
     */
    availabilityImpact?: string | null;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number | null;
    /**
     * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
     */
    confidentialityImpact?: string | null;
    /**
     * This metric measures the impact to integrity of a successfully exploited vulnerability.
     */
    integrityImpact?: string | null;
    /**
     * This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.
     */
    privilegesRequired?: string | null;
    /**
     * The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.
     */
    scope?: string | null;
    /**
     * This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.
     */
    userInteraction?: string | null;
  }
  /**
   * Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of Cloud SQL instances or Cloud Spanner instances), or the database instance itself. Some database resources might not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types, such as Cloud SQL databases, are not yet supported by Cloud Asset Inventory. In these cases only the display name is provided.
   */
  export interface Schema$Database {
    /**
     * The human-readable name of the database that the user connected to.
     */
    displayName?: string | null;
    /**
     * The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change.
     */
    grantees?: string[] | null;
    /**
     * Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory.
     */
    name?: string | null;
    /**
     * The SQL statement that is associated with the database access.
     */
    query?: string | null;
    /**
     * The username used to connect to the database. The username might not be an IAM principal and does not have a set format.
     */
    userName?: string | null;
    /**
     * The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion).
     */
    version?: string | null;
  }
  /**
   * Memory hash detection contributing to the binary family match.
   */
  export interface Schema$Detection {
    /**
     * The name of the binary associated with the memory hash signature detection.
     */
    binary?: string | null;
    /**
     * The percentage of memory page hashes in the signature that were matched.
     */
    percentPagesMatched?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A name-value pair representing an environment variable used in an operating system process.
   */
  export interface Schema$EnvironmentVariable {
    /**
     * Environment variable name as a JSON encoded string.
     */
    name?: string | null;
    /**
     * Environment variable value as a JSON encoded string.
     */
    val?: string | null;
  }
  /**
   * Represents an instance of an Event Threat Detection custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization level only.
   */
  export interface Schema$EventThreatDetectionCustomModule {
    /**
     * Config for the module. For the resident module, its config value is defined at this level. For the inherited module, its config value is inherited from the ancestor module.
     */
    config?: {[key: string]: any} | null;
    /**
     * The description for the module.
     */
    description?: string | null;
    /**
     * The human readable name to be displayed for the module.
     */
    displayName?: string | null;
    /**
     * The state of enablement for the module at the given level of the hierarchy.
     */
    enablementState?: string | null;
    /**
     * Output only. The editor the module was last updated by.
     */
    lastEditor?: string | null;
    /**
     * Immutable. The resource name of the Event Threat Detection custom module. Its format is: * "organizations/{organization\}/eventThreatDetectionSettings/customModules/{module\}". * "folders/{folder\}/eventThreatDetectionSettings/customModules/{module\}". * "projects/{project\}/eventThreatDetectionSettings/customModules/{module\}".
     */
    name?: string | null;
    /**
     * Type for the module. e.g. CONFIGURABLE_BAD_IP.
     */
    type?: string | null;
    /**
     * Output only. The time the module was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Resource where data was exfiltrated from or exfiltrated to.
   */
  export interface Schema$ExfilResource {
    /**
     * Subcomponents of the asset that was exfiltrated, like URIs used during exfiltration, table names, databases, and filenames. For example, multiple tables might have been exfiltrated from the same Cloud SQL instance, or multiple files might have been exfiltrated from the same Cloud Storage bucket.
     */
    components?: string[] | null;
    /**
     * The resource's [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name).
     */
    name?: string | null;
  }
  /**
   * Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was copied to.
   */
  export interface Schema$Exfiltration {
    /**
     * If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source.
     */
    sources?: Schema$ExfilResource[];
    /**
     * If there are multiple targets, each target would get a complete copy of the "joined" source data.
     */
    targets?: Schema$ExfilResource[];
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
   * File information about the related binary/library used by an executable, or the script used by a script interpreter
   */
  export interface Schema$File {
    /**
     * Prefix of the file contents as a JSON-encoded string.
     */
    contents?: string | null;
    /**
     * The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file.
     */
    hashedSize?: string | null;
    /**
     * True when the hash covers only a prefix of the file.
     */
    partiallyHashed?: boolean | null;
    /**
     * Absolute path of the file as a JSON encoded string.
     */
    path?: string | null;
    /**
     * SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file.
     */
    sha256?: string | null;
    /**
     * Size of the file in bytes.
     */
    size?: string | null;
  }
  /**
   * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
   */
  export interface Schema$Finding {
    /**
     * Access details associated with the finding, such as more information on the caller, which method was accessed, and from where.
     */
    access?: Schema$Access;
    /**
     * The results of an attack path simulation relevant to this finding.
     */
    attackExposure?: Schema$AttackExposure;
    /**
     * The canonical name of the finding. It's either "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}" or "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}", depending on the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string | null;
    /**
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string | null;
    /**
     * Cloud DLP data profile that is associated with the finding.
     */
    cloudDlpDataProfile?: Schema$CloudDlpDataProfile;
    /**
     * Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding.
     */
    cloudDlpInspection?: Schema$CloudDlpInspection;
    /**
     * Contains compliance information for security standards associated to the finding.
     */
    compliances?: Schema$Compliance[];
    /**
     * Contains information about the IP connection associated with the finding.
     */
    connections?: Schema$Connection[];
    /**
     * Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" \}, { "email": "person2@company.com" \} ] \} \}
     */
    contacts?: {[key: string]: Schema$ContactDetails} | null;
    /**
     * Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers.
     */
    containers?: Schema$Container[];
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * Database associated with the finding.
     */
    database?: Schema$Database;
    /**
     * Contains more details about the finding.
     */
    description?: string | null;
    /**
     * The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp.
     */
    eventTime?: string | null;
    /**
     * Represents exfiltrations associated with the finding.
     */
    exfiltration?: Schema$Exfiltration;
    /**
     * Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields.
     */
    externalSystems?: {
      [key: string]: Schema$GoogleCloudSecuritycenterV1ExternalSystem;
    } | null;
    /**
     * The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string | null;
    /**
     * File associated with the finding.
     */
    files?: Schema$File[];
    /**
     * The class of the finding.
     */
    findingClass?: string | null;
    /**
     * Represents IAM bindings associated with the finding.
     */
    iamBindings?: Schema$IamBinding[];
    /**
     * Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
     */
    indicator?: Schema$Indicator;
    /**
     * Signature of the kernel rootkit.
     */
    kernelRootkit?: Schema$KernelRootkit;
    /**
     * Kubernetes resources associated with the finding.
     */
    kubernetes?: Schema$Kubernetes;
    /**
     * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
     */
    mitreAttack?: Schema$MitreAttack;
    /**
     * Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885
     */
    moduleName?: string | null;
    /**
     * Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.
     */
    mute?: string | null;
    /**
     * Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding.
     */
    muteInitiator?: string | null;
    /**
     * Output only. The most recent time this finding was muted or unmuted.
     */
    muteUpdateTime?: string | null;
    /**
     * The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string | null;
    /**
     * Steps to address the finding.
     */
    nextSteps?: string | null;
    /**
     * The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id\}/sources/{source_id\}"
     */
    parent?: string | null;
    /**
     * Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics".
     */
    parentDisplayName?: string | null;
    /**
     * Represents operating system processes associated with the Finding.
     */
    processes?: Schema$Process[];
    /**
     * For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
     */
    resourceName?: string | null;
    /**
     * Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.
     */
    securityMarks?: Schema$SecurityMarks;
    /**
     * The severity of the finding. This field is managed by the source that writes the finding.
     */
    severity?: string | null;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: {[key: string]: any} | null;
    /**
     * The state of the finding.
     */
    state?: string | null;
    /**
     * Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)
     */
    vulnerability?: Schema$Vulnerability;
  }
  /**
   * Message that contains the resource name and display name of a folder resource.
   */
  export interface Schema$Folder {
    /**
     * Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceFolder?: string | null;
    /**
     * The user defined display name for this folder.
     */
    resourceFolderDisplayName?: string | null;
  }
  /**
   * Represents a geographical location for a given access.
   */
  export interface Schema$Geolocation {
    /**
     * A CLDR.
     */
    regionCode?: string | null;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string | null;
    /**
     * The state of an asset discovery run.
     */
    state?: string | null;
  }
  /**
   * Configures how to deliver Findings to BigQuery Instance.
   */
  export interface Schema$GoogleCloudSecuritycenterV1BigQueryExport {
    /**
     * Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.
     */
    createTime?: string | null;
    /**
     * The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).
     */
    dataset?: string | null;
    /**
     * The description of the export (max of 1024 characters).
     */
    description?: string | null;
    /**
     * Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.
     */
    filter?: string | null;
    /**
     * Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.
     */
    mostRecentEditor?: string | null;
    /**
     * The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id\}/bigQueryExports/{export_id\}" Example format: "folders/{folder_id\}/bigQueryExports/{export_id\}" Example format: "projects/{project_id\}/bigQueryExports/{export_id\}" This field is provided in responses, and is ignored when provided in create requests.
     */
    name?: string | null;
    /**
     * Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.
     */
    principal?: string | null;
    /**
     * Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.
     */
    updateTime?: string | null;
  }
  /**
   * Represents a Kubernetes RoleBinding or ClusterRoleBinding.
   */
  export interface Schema$GoogleCloudSecuritycenterV1Binding {
    /**
     * Name for the binding.
     */
    name?: string | null;
    /**
     * Namespace for the binding.
     */
    ns?: string | null;
    /**
     * The Role or ClusterRole referenced by the binding.
     */
    role?: Schema$Role;
    /**
     * Represents one or more subjects that are bound to the role. Not always available for PATCH requests.
     */
    subjects?: Schema$Subject[];
  }
  /**
   * The response to a BulkMute request. Contains the LRO information.
   */
  export interface Schema$GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}
  /**
   * Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify.
   */
  export interface Schema$GoogleCloudSecuritycenterV1CustomConfig {
    /**
     * Custom output properties.
     */
    customOutput?: Schema$GoogleCloudSecuritycenterV1CustomOutputSpec;
    /**
     * Text that describes the vulnerability or misconfiguration that the custom module detects. This explanation is returned with each finding instance to help investigators understand the detected issue. The text must be enclosed in quotation marks.
     */
    description?: string | null;
    /**
     * The CEL expression to evaluate to produce findings. When the expression evaluates to true against a resource, a finding is generated.
     */
    predicate?: Schema$Expr;
    /**
     * An explanation of the recommended steps that security teams can take to resolve the detected issue. This explanation is returned with each finding generated by this module in the `nextSteps` property of the finding JSON.
     */
    recommendation?: string | null;
    /**
     * The resource types that the custom module operates on. Each custom module can specify up to 5 resource types.
     */
    resourceSelector?: Schema$GoogleCloudSecuritycenterV1ResourceSelector;
    /**
     * The severity to assign to findings generated by the module.
     */
    severity?: string | null;
  }
  /**
   * A set of optional name-value pairs that define custom source properties to return with each finding that is generated by the custom module. The custom source properties that are defined here are included in the finding JSON under `sourceProperties`.
   */
  export interface Schema$GoogleCloudSecuritycenterV1CustomOutputSpec {
    /**
     * A list of custom output properties to add to the finding.
     */
    properties?: Schema$GoogleCloudSecuritycenterV1Property[];
  }
  /**
   * An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only.
   */
  export interface Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {
    /**
     * Output only. The user-specified configuration for the module.
     */
    customConfig?: Schema$GoogleCloudSecuritycenterV1CustomConfig;
    /**
     * Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.
     */
    displayName?: string | null;
    /**
     * Output only. The effective state of enablement for the module at the given level of the hierarchy.
     */
    enablementState?: string | null;
    /**
     * Output only. The resource name of the custom module. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", or "folders/{folder\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}"
     */
    name?: string | null;
  }
  /**
   * Representation of third party SIEM/SOAR fields within SCC.
   */
  export interface Schema$GoogleCloudSecuritycenterV1ExternalSystem {
    /**
     * References primary/secondary etc assignees in the external system.
     */
    assignees?: string[] | null;
    /**
     * The most recent time when the corresponding finding's ticket/tracker was updated in the external system.
     */
    externalSystemUpdateTime?: string | null;
    /**
     * Identifier that's used to track the given finding in the external system.
     */
    externalUid?: string | null;
    /**
     * Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     */
    name?: string | null;
    /**
     * Most recent status of the corresponding finding's ticket/tracker in the external system.
     */
    status?: string | null;
  }
  /**
   * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
   */
  export interface Schema$GoogleCloudSecuritycenterV1MuteConfig {
    /**
     * Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation.
     */
    createTime?: string | null;
    /**
     * A description of the mute config.
     */
    description?: string | null;
    /**
     * The human readable name to be displayed for the mute config.
     */
    displayName?: string | null;
    /**
     * Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:`
     */
    filter?: string | null;
    /**
     * Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update.
     */
    mostRecentEditor?: string | null;
    /**
     * This field will be ignored if provided on config creation. Format "organizations/{organization\}/muteConfigs/{mute_config\}" "folders/{folder\}/muteConfigs/{mute_config\}" "projects/{project\}/muteConfigs/{mute_config\}"
     */
    name?: string | null;
    /**
     * Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update.
     */
    updateTime?: string | null;
  }
  /**
   * Cloud SCC's Notification
   */
  export interface Schema$GoogleCloudSecuritycenterV1NotificationMessage {
    /**
     * If it's a Finding based notification config, this field will be populated.
     */
    finding?: Schema$Finding;
    /**
     * Name of the notification config that generated current notification.
     */
    notificationConfigName?: string | null;
    /**
     * The Cloud resource tied to this notification's Finding.
     */
    resource?: Schema$GoogleCloudSecuritycenterV1Resource;
  }
  /**
   * Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Finding {
    /**
     * The canonical name of the finding. It's either "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}" or "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}", depending on the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string | null;
    /**
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string | null;
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp.
     */
    eventTime?: string | null;
    /**
     * The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string | null;
    /**
     * The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}"
     */
    name?: string | null;
    /**
     * The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id\}/sources/{source_id\}"
     */
    parent?: string | null;
    /**
     * For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
     */
    resourceName?: string | null;
    /**
     * Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.
     */
    securityMarks?: Schema$GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
    /**
     * The severity of the finding. This field is managed by the source that writes the finding.
     */
    severity?: string | null;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: {[key: string]: any} | null;
    /**
     * The state of the finding.
     */
    state?: string | null;
  }
  /**
   * Message that contains the resource name and display name of a folder resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Folder {
    /**
     * Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceFolder?: string | null;
    /**
     * The user defined display name for this folder.
     */
    resourceFolderDisplayName?: string | null;
  }
  /**
   * Security Command Center's Notification
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
    /**
     * If it's a Finding based notification config, this field will be populated.
     */
    finding?: Schema$GoogleCloudSecuritycenterV1p1beta1Finding;
    /**
     * Name of the notification config that generated current notification.
     */
    notificationConfigName?: string | null;
    /**
     * The Cloud resource tied to the notification.
     */
    resource?: Schema$GoogleCloudSecuritycenterV1p1beta1Resource;
  }
  /**
   * Information related to the Google Cloud resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Resource {
    /**
     * Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Schema$GoogleCloudSecuritycenterV1p1beta1Folder[];
    /**
     * The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    name?: string | null;
    /**
     * The full resource name of resource's parent.
     */
    parent?: string | null;
    /**
     * The human readable name of resource's parent.
     */
    parentDisplayName?: string | null;
    /**
     * The full resource name of project that the resource belongs to.
     */
    project?: string | null;
    /**
     * The project id that the resource belongs to.
     */
    projectDisplayName?: string | null;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string | null;
    /**
     * The state of an asset discovery run.
     */
    state?: string | null;
  }
  /**
   * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
    /**
     * The canonical name of the marks. Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "folders/{folder_id\}/assets/{asset_id\}/securityMarks" "projects/{project_number\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}/securityMarks"
     */
    canonicalName?: string | null;
    /**
     * Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)
     */
    marks?: {[key: string]: string} | null;
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string | null;
  }
  /**
   * An individual name-value pair that defines a custom source property.
   */
  export interface Schema$GoogleCloudSecuritycenterV1Property {
    /**
     * Name of the property for the custom output.
     */
    name?: string | null;
    /**
     * The CEL expression for the custom output. A resource property can be specified to return the value of the property or a text string enclosed in quotation marks.
     */
    valueExpression?: Schema$Expr;
  }
  /**
   * Information related to the Google Cloud resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV1Resource {
    /**
     * The human readable name of the resource.
     */
    displayName?: string | null;
    /**
     * Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Schema$Folder[];
    /**
     * The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    name?: string | null;
    /**
     * The full resource name of resource's parent.
     */
    parent?: string | null;
    /**
     * The human readable name of resource's parent.
     */
    parentDisplayName?: string | null;
    /**
     * The full resource name of project that the resource belongs to.
     */
    project?: string | null;
    /**
     * The project ID that the resource belongs to.
     */
    projectDisplayName?: string | null;
    /**
     * The full resource type of the resource.
     */
    type?: string | null;
  }
  /**
   * Resource for selecting resource type.
   */
  export interface Schema$GoogleCloudSecuritycenterV1ResourceSelector {
    /**
     * The resource types to run the detector on.
     */
    resourceTypes?: string[] | null;
  }
  /**
   * A resource value config is a mapping configuration of user's tag values to resource values. Used by the attack path simulation.
   */
  export interface Schema$GoogleCloudSecuritycenterV1ResourceValueConfig {
    /**
     * Output only. Timestamp this resource value config was created.
     */
    createTime?: string | null;
    /**
     * Description of the resource value config.
     */
    description?: string | null;
    /**
     * Name for the resource value config
     */
    name?: string | null;
    /**
     * List of resource labels to search for, evaluated with AND. E.g. "resource_labels_selector": {"key": "value", "env": "prod"\} will match resources with labels "key": "value" AND "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels
     */
    resourceLabelsSelector?: {[key: string]: string} | null;
    /**
     * Apply resource_value only to resources that match resource_type. resource_type will be checked with "AND" of other resources. E.g. "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources.
     */
    resourceType?: string | null;
    /**
     * Required. Resource value level this expression represents
     */
    resourceValue?: string | null;
    /**
     * Project or folder to scope this config to. For example, "project/456" would apply this config only to resources in "project/456" scope will be checked with "AND" of other resources.
     */
    scope?: string | null;
    /**
     * Required. Tag values combined with AND to check against. Values in the form "tagValues/123" E.g. [ "tagValues/123", "tagValues/456", "tagValues/789" ] https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing
     */
    tagValues?: string[] | null;
    /**
     * Output only. Timestamp this resource value config was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string | null;
    /**
     * The state of an asset discovery run.
     */
    state?: string | null;
  }
  /**
   * Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects.
   */
  export interface Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {
    /**
     * Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited.
     */
    ancestorModule?: string | null;
    /**
     * The user specified custom configuration for the module.
     */
    customConfig?: Schema$GoogleCloudSecuritycenterV1CustomConfig;
    /**
     * The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.
     */
    displayName?: string | null;
    /**
     * The enablement state of the custom module.
     */
    enablementState?: string | null;
    /**
     * Output only. The editor that last updated the custom module.
     */
    lastEditor?: string | null;
    /**
     * Immutable. The resource name of the custom module. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}" The id {customModule\} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     */
    name?: string | null;
    /**
     * Output only. The time at which the custom module was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for grouping by assets.
   */
  export interface Schema$GroupAssetsRequest {
    /**
     * When compare_duration is set, the GroupResult's "state_change" property is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at reference_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at reference_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and reference_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time. If this field is set then `state_change` must be a specified field in `group_by`.
     */
    compareDuration?: string | null;
    /**
     * Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * update_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `\>`, `<`, `\>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     */
    filter?: string | null;
    /**
     * Required. Expression that defines what assets fields to use for grouping. The string value should follow SQL syntax: comma separated list of fields. For example: "security_center_properties.resource_project,security_center_properties.project". The following fields are supported when compare_duration is not set: * security_center_properties.resource_project * security_center_properties.resource_project_display_name * security_center_properties.resource_type * security_center_properties.resource_parent * security_center_properties.resource_parent_display_name The following fields are supported when compare_duration is set: * security_center_properties.resource_type * security_center_properties.resource_project_display_name * security_center_properties.resource_parent_display_name
     */
    groupBy?: string | null;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number | null;
    /**
     * The value returned by the last `GroupAssetsResponse`; indicates that this is a continuation of a prior `GroupAssets` call, and that the system should return the next page of data.
     */
    pageToken?: string | null;
    /**
     * Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string | null;
  }
  /**
   * Response message for grouping by assets.
   */
  export interface Schema$GroupAssetsResponse {
    /**
     * Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear.
     */
    groupByResults?: Schema$GroupResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Time used for executing the groupBy request.
     */
    readTime?: string | null;
    /**
     * The total number of results matching the query.
     */
    totalSize?: number | null;
  }
  /**
   * Request message for grouping by findings.
   */
  export interface Schema$GroupFindingsRequest {
    /**
     * When compare_duration is set, the GroupResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time. If this field is set then `state_change` must be a specified field in `group_by`.
     */
    compareDuration?: string | null;
    /**
     * Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `\>`, `<`, `\>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:`
     */
    filter?: string | null;
    /**
     * Required. Expression that defines what assets fields to use for grouping (including `state_change`). The string value should follow SQL syntax: comma separated list of fields. For example: "parent,resource_name". The following fields are supported: * resource_name * category * state * parent * severity The following fields are supported when compare_duration is set: * state_change
     */
    groupBy?: string | null;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number | null;
    /**
     * The value returned by the last `GroupFindingsResponse`; indicates that this is a continuation of a prior `GroupFindings` call, and that the system should return the next page of data.
     */
    pageToken?: string | null;
    /**
     * Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string | null;
  }
  /**
   * Response message for group by findings.
   */
  export interface Schema$GroupFindingsResponse {
    /**
     * Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear.
     */
    groupByResults?: Schema$GroupResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Time used for executing the groupBy request.
     */
    readTime?: string | null;
    /**
     * The total number of results matching the query.
     */
    totalSize?: number | null;
  }
  /**
   * Result containing the properties and count of a groupBy request.
   */
  export interface Schema$GroupResult {
    /**
     * Total count of resources for the given properties.
     */
    count?: string | null;
    /**
     * Properties matching the groupBy fields in the request.
     */
    properties?: {[key: string]: any} | null;
  }
  /**
   * Represents a particular IAM binding, which captures a member's role addition, removal, or state.
   */
  export interface Schema$IamBinding {
    /**
     * The action that was performed on a Binding.
     */
    action?: string | null;
    /**
     * A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com".
     */
    member?: string | null;
    /**
     * Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner".
     */
    role?: string | null;
  }
  /**
   * Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.
   */
  export interface Schema$IamPolicy {
    /**
     * The JSON representation of the Policy associated with the asset. See https://cloud.google.com/iam/reference/rest/v1/Policy for format details.
     */
    policyBlob?: string | null;
  }
  /**
   * Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
   */
  export interface Schema$Indicator {
    /**
     * List of domains associated to the Finding.
     */
    domains?: string[] | null;
    /**
     * The list of IP addresses that are associated with the finding.
     */
    ipAddresses?: string[] | null;
    /**
     * The list of matched signatures indicating that the given process is present in the environment.
     */
    signatures?: Schema$ProcessSignature[];
    /**
     * The list of URIs associated to the Findings.
     */
    uris?: string[] | null;
  }
  /**
   * Kernel mode rootkit signatures.
   */
  export interface Schema$KernelRootkit {
    /**
     * Rootkit name, when available.
     */
    name?: string | null;
    /**
     * True if unexpected modifications of kernel code memory are present.
     */
    unexpectedCodeModification?: boolean | null;
    /**
     * True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
     */
    unexpectedFtraceHandler?: boolean | null;
    /**
     * True if interrupt handlers that are are not in the expected kernel or module code regions are present.
     */
    unexpectedInterruptHandler?: boolean | null;
    /**
     * True if kernel code pages that are not in the expected kernel or module code regions are present.
     */
    unexpectedKernelCodePages?: boolean | null;
    /**
     * True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
     */
    unexpectedKprobeHandler?: boolean | null;
    /**
     * True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list.
     */
    unexpectedProcessesInRunqueue?: boolean | null;
    /**
     * True if unexpected modifications of kernel read-only data memory are present.
     */
    unexpectedReadOnlyDataModification?: boolean | null;
    /**
     * True if system call handlers that are are not in the expected kernel or module code regions are present.
     */
    unexpectedSystemCallHandler?: boolean | null;
  }
  /**
   * Kubernetes-related attributes.
   */
  export interface Schema$Kubernetes {
    /**
     * Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding.
     */
    accessReviews?: Schema$AccessReview[];
    /**
     * Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control).
     */
    bindings?: Schema$GoogleCloudSecuritycenterV1Binding[];
    /**
     * GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available.
     */
    nodePools?: Schema$NodePool[];
    /**
     * Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information.
     */
    nodes?: Schema$Node[];
    /**
     * Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod.
     */
    pods?: Schema$Pod[];
    /**
     * Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control).
     */
    roles?: Schema$Role[];
  }
  /**
   * Represents a generic name-value label. A label has separate name and value fields to support filtering with the `contains()` function. For more information, see [Filtering on array-type fields](https://cloud.google.com/security-command-center/docs/how-to-api-list-findings#array-contains-filtering).
   */
  export interface Schema$Label {
    /**
     * Name of the label.
     */
    name?: string | null;
    /**
     * Value that corresponds to the label's name.
     */
    value?: string | null;
  }
  /**
   * Response message for listing assets.
   */
  export interface Schema$ListAssetsResponse {
    /**
     * Assets matching the list request.
     */
    listAssetsResults?: Schema$ListAssetsResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Time used for executing the list request.
     */
    readTime?: string | null;
    /**
     * The total number of assets matching the query.
     */
    totalSize?: number | null;
  }
  /**
   * Result containing the Asset and its State.
   */
  export interface Schema$ListAssetsResult {
    /**
     * Asset matching the search request.
     */
    asset?: Schema$Asset;
    /**
     * State change of the asset between the points in time.
     */
    stateChange?: string | null;
  }
  /**
   * Response message for listing the attack paths for a given simulation or valued resource.
   */
  export interface Schema$ListAttackPathsResponse {
    /**
     * The attack paths that the attack path simulation identified.
     */
    attackPaths?: Schema$AttackPath[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing BigQuery exports.
   */
  export interface Schema$ListBigQueryExportsResponse {
    /**
     * The BigQuery exports from the specified parent.
     */
    bigQueryExports?: Schema$GoogleCloudSecuritycenterV1BigQueryExport[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing descendant Security Health Analytics custom modules.
   */
  export interface Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse {
    /**
     * If not empty, indicates that there may be more custom modules to be returned.
     */
    nextPageToken?: string | null;
    /**
     * Custom modules belonging to the requested parent and its descendants.
     */
    securityHealthAnalyticsCustomModules?: Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule[];
  }
  /**
   * Response message for listing effective Security Health Analytics custom modules.
   */
  export interface Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse {
    /**
     * Effective custom modules belonging to the requested parent.
     */
    effectiveSecurityHealthAnalyticsCustomModules?: Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule[];
    /**
     * If not empty, indicates that there may be more effective custom modules to be returned.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for listing Event Threat Detection custom modules.
   */
  export interface Schema$ListEventThreatDetectionCustomModulesResponse {
    /**
     * Custom modules belonging to the requested parent.
     */
    eventThreatDetectionCustomModules?: Schema$EventThreatDetectionCustomModule[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing findings.
   */
  export interface Schema$ListFindingsResponse {
    /**
     * Findings matching the list request.
     */
    listFindingsResults?: Schema$ListFindingsResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Time used for executing the list request.
     */
    readTime?: string | null;
    /**
     * The total number of findings matching the query.
     */
    totalSize?: number | null;
  }
  /**
   * Result containing the Finding and its StateChange.
   */
  export interface Schema$ListFindingsResult {
    /**
     * Finding matching the search request.
     */
    finding?: Schema$Finding;
    /**
     * Output only. Resource that is associated with this finding.
     */
    resource?: Schema$Resource;
    /**
     * State change of the finding between the points in time.
     */
    stateChange?: string | null;
  }
  /**
   * Response message for listing mute configs.
   */
  export interface Schema$ListMuteConfigsResponse {
    /**
     * The mute configs from the specified parent.
     */
    muteConfigs?: Schema$GoogleCloudSecuritycenterV1MuteConfig[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing notification configs.
   */
  export interface Schema$ListNotificationConfigsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Notification configs belonging to the requested parent.
     */
    notificationConfigs?: Schema$NotificationConfig[];
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
   * Response message to list resource value configs
   */
  export interface Schema$ListResourceValueConfigsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The resource value configs from the specified parent.
     */
    resourceValueConfigs?: Schema$GoogleCloudSecuritycenterV1ResourceValueConfig[];
  }
  /**
   * Response message for listing Security Health Analytics custom modules.
   */
  export interface Schema$ListSecurityHealthAnalyticsCustomModulesResponse {
    /**
     * If not empty, indicates that there may be more custom modules to be returned.
     */
    nextPageToken?: string | null;
    /**
     * Custom modules belonging to the requested parent.
     */
    securityHealthAnalyticsCustomModules?: Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule[];
  }
  /**
   * Response message for listing sources.
   */
  export interface Schema$ListSourcesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Sources belonging to the requested parent.
     */
    sources?: Schema$Source[];
  }
  /**
   * Response message for listing the valued resources for a given simulation.
   */
  export interface Schema$ListValuedResourcesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * The estimated total number of results matching the query.
     */
    totalSize?: number | null;
    /**
     * The valued resources that the attack path simulation identified.
     */
    valuedResources?: Schema$ValuedResource[];
  }
  /**
   * A signature corresponding to memory page hashes.
   */
  export interface Schema$MemoryHashSignature {
    /**
     * The binary family.
     */
    binaryFamily?: string | null;
    /**
     * The list of memory hash detections contributing to the binary family match.
     */
    detections?: Schema$Detection[];
  }
  /**
   * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
   */
  export interface Schema$MitreAttack {
    /**
     * Additional MITRE ATT&CK tactics related to this finding, if any.
     */
    additionalTactics?: string[] | null;
    /**
     * Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques.
     */
    additionalTechniques?: string[] | null;
    /**
     * The MITRE ATT&CK tactic most closely represented by this finding, if any.
     */
    primaryTactic?: string | null;
    /**
     * The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`).
     */
    primaryTechniques?: string[] | null;
    /**
     * The MITRE ATT&CK version referenced by the above fields. E.g. "8".
     */
    version?: string | null;
  }
  /**
   * Kubernetes nodes associated with the finding.
   */
  export interface Schema$Node {
    /**
     * [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node.
     */
    name?: string | null;
  }
  /**
   * Provides GKE node pool information.
   */
  export interface Schema$NodePool {
    /**
     * Kubernetes node pool name.
     */
    name?: string | null;
    /**
     * Nodes associated with the finding.
     */
    nodes?: Schema$Node[];
  }
  /**
   * Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
   */
  export interface Schema$NotificationConfig {
    /**
     * The description of the notification config (max of 1024 characters).
     */
    description?: string | null;
    /**
     * The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/notificationConfigs/notify_public_bucket", "folders/{folder_id\}/notificationConfigs/notify_public_bucket", or "projects/{project_id\}/notificationConfigs/notify_public_bucket".
     */
    name?: string | null;
    /**
     * The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".
     */
    pubsubTopic?: string | null;
    /**
     * Output only. The service account that needs "pubsub.topics.publish" permission to publish to the Pub/Sub topic.
     */
    serviceAccount?: string | null;
    /**
     * The config for triggering streaming-based notifications.
     */
    streamingConfig?: Schema$StreamingConfig;
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
   * User specified settings that are attached to the Security Command Center organization.
   */
  export interface Schema$OrganizationSettings {
    /**
     * The configuration used for Asset Discovery runs.
     */
    assetDiscoveryConfig?: Schema$AssetDiscoveryConfig;
    /**
     * A flag that indicates if Asset Discovery should be enabled. If the flag is set to `true`, then discovery of assets will occur. If it is set to `false`, all historical assets will remain, but discovery of future assets will not occur.
     */
    enableAssetDiscovery?: boolean | null;
    /**
     * The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/organizationSettings".
     */
    name?: string | null;
  }
  /**
   * A finding that is associated with this node in the attack path.
   */
  export interface Schema$PathNodeAssociatedFinding {
    /**
     * Canonical name of the associated findings. Example: organizations/123/sources/456/findings/789
     */
    canonicalFinding?: string | null;
    /**
     * The additional taxonomy group within findings from a given source.
     */
    findingCategory?: string | null;
    /**
     * Full resource name of the finding.
     */
    name?: string | null;
  }
  /**
   * A Kubernetes Pod.
   */
  export interface Schema$Pod {
    /**
     * Pod containers associated with this finding, if any.
     */
    containers?: Schema$Container[];
    /**
     * Pod labels. For Kubernetes containers, these are applied to the container.
     */
    labels?: Schema$Label[];
    /**
     * Kubernetes Pod name.
     */
    name?: string | null;
    /**
     * Kubernetes Pod namespace.
     */
    ns?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
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
   * A position in the uploaded text version of a module.
   */
  export interface Schema$Position {
    columnNumber?: number | null;
    lineNumber?: number | null;
  }
  /**
   * Represents an operating system process.
   */
  export interface Schema$Process {
    /**
     * Process arguments as JSON encoded strings.
     */
    args?: string[] | null;
    /**
     * True if `args` is incomplete.
     */
    argumentsTruncated?: boolean | null;
    /**
     * File information for the process executable.
     */
    binary?: Schema$File;
    /**
     * Process environment variables.
     */
    envVariables?: Schema$EnvironmentVariable[];
    /**
     * True if `env_variables` is incomplete.
     */
    envVariablesTruncated?: boolean | null;
    /**
     * File information for libraries loaded by the process.
     */
    libraries?: Schema$File[];
    /**
     * The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`.
     */
    name?: string | null;
    /**
     * The parent process ID.
     */
    parentPid?: string | null;
    /**
     * The process ID.
     */
    pid?: string | null;
    /**
     * When the process represents the invocation of a script, `binary` provides information about the interpreter, while `script` provides information about the script file provided to the interpreter.
     */
    script?: Schema$File;
  }
  /**
   * Indicates what signature matched this process.
   */
  export interface Schema$ProcessSignature {
    /**
     * Signature indicating that a binary family was matched.
     */
    memoryHashSignature?: Schema$MemoryHashSignature;
    /**
     * Signature indicating that a YARA rule was matched.
     */
    yaraRuleSignature?: Schema$YaraRuleSignature;
  }
  /**
   * Additional Links
   */
  export interface Schema$Reference {
    /**
     * Source of the reference e.g. NVD
     */
    source?: string | null;
    /**
     * Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527.
     */
    uri?: string | null;
  }
  /**
   * Information related to the Google Cloud resource that is associated with this finding.
   */
  export interface Schema$Resource {
    /**
     * The human readable name of the resource.
     */
    displayName?: string | null;
    /**
     * Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Schema$Folder[];
    /**
     * The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    name?: string | null;
    /**
     * The human readable name of resource's parent.
     */
    parentDisplayName?: string | null;
    /**
     * The full resource name of resource's parent.
     */
    parentName?: string | null;
    /**
     * The project ID that the resource belongs to.
     */
    projectDisplayName?: string | null;
    /**
     * The full resource name of project that the resource belongs to.
     */
    projectName?: string | null;
    /**
     * The full resource type of the resource.
     */
    type?: string | null;
  }
  /**
   * Metadata about a ResourceValueConfig. For example, id and name.
   */
  export interface Schema$ResourceValueConfigMetadata {
    /**
     * Resource value config name
     */
    name?: string | null;
  }
  /**
   * Kubernetes Role or ClusterRole.
   */
  export interface Schema$Role {
    /**
     * Role type.
     */
    kind?: string | null;
    /**
     * Role name.
     */
    name?: string | null;
    /**
     * Role namespace.
     */
    ns?: string | null;
  }
  /**
   * Request message for running asset discovery for an organization.
   */
  export interface Schema$RunAssetDiscoveryRequest {}
  /**
   * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
   */
  export interface Schema$SecurityCenterProperties {
    /**
     * Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Schema$Folder[];
    /**
     * The user defined display name for this resource.
     */
    resourceDisplayName?: string | null;
    /**
     * The full resource name of the Google Cloud resource this asset represents. This field is immutable after create time. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceName?: string | null;
    /**
     * Owners of the Google Cloud resource.
     */
    resourceOwners?: string[] | null;
    /**
     * The full resource name of the immediate parent of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceParent?: string | null;
    /**
     * The user defined display name for the parent of this resource.
     */
    resourceParentDisplayName?: string | null;
    /**
     * The full resource name of the project the resource belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceProject?: string | null;
    /**
     * The user defined display name for the project of this resource.
     */
    resourceProjectDisplayName?: string | null;
    /**
     * The type of the Google Cloud resource. Examples include: APPLICATION, PROJECT, and ORGANIZATION. This is a case insensitive field defined by Security Command Center and/or the producer of the resource and is immutable after create time.
     */
    resourceType?: string | null;
  }
  /**
   * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
   */
  export interface Schema$SecurityMarks {
    /**
     * The canonical name of the marks. Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "folders/{folder_id\}/assets/{asset_id\}/securityMarks" "projects/{project_number\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}/securityMarks"
     */
    canonicalName?: string | null;
    /**
     * Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)
     */
    marks?: {[key: string]: string} | null;
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string | null;
  }
  /**
   * Identity delegation history of an authenticated service account.
   */
  export interface Schema$ServiceAccountDelegationInfo {
    /**
     * The email address of a Google account.
     */
    principalEmail?: string | null;
    /**
     * A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name\}/subjects/{subject\}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name\}[{subject\}]`
     */
    principalSubject?: string | null;
  }
  /**
   * Request message for updating a finding's state.
   */
  export interface Schema$SetFindingStateRequest {
    /**
     * Required. The time at which the updated state takes effect.
     */
    startTime?: string | null;
    /**
     * Required. The desired State of the finding.
     */
    state?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Request message for updating a finding's mute status.
   */
  export interface Schema$SetMuteRequest {
    /**
     * Required. The desired state of the Mute.
     */
    mute?: string | null;
  }
  /**
   * Attack path simulation
   */
  export interface Schema$Simulation {
    /**
     * Output only. Time simulation was created
     */
    createTime?: string | null;
    /**
     * Full resource name of the Simulation: organizations/123/simulations/456
     */
    name?: string | null;
    /**
     * Resource value configurations' metadata used in this simulation. Maximum of 100.
     */
    resourceValueConfigsMetadata?: Schema$ResourceValueConfigMetadata[];
  }
  /**
   * Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, and other tools.
   */
  export interface Schema$Source {
    /**
     * The canonical name of the finding. It's either "organizations/{organization_id\}/sources/{source_id\}", "folders/{folder_id\}/sources/{source_id\}" or "projects/{project_number\}/sources/{source_id\}", depending on the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string | null;
    /**
     * The description of the source (max of 1024 characters). Example: "Web Security Scanner is a web security scanner for common vulnerabilities in App Engine applications. It can automatically scan and detect four common vulnerabilities, including cross-site-scripting (XSS), Flash injection, mixed content (HTTP in HTTPS), and outdated or insecure libraries."
     */
    description?: string | null;
    /**
     * The source's display name. A source's display name must be unique amongst its siblings, for example, two sources with the same parent can't share the same display name. The display name must have a length between 1 and 64 characters (inclusive).
     */
    displayName?: string | null;
    /**
     * The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/sources/{source_id\}"
     */
    name?: string | null;
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
   * The config for streaming-based notifications, which send each event as soon as it is detected.
   */
  export interface Schema$StreamingConfig {
    /**
     * Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.
     */
    filter?: string | null;
  }
  /**
   * Represents a Kubernetes subject.
   */
  export interface Schema$Subject {
    /**
     * Authentication type for the subject.
     */
    kind?: string | null;
    /**
     * Name for the subject.
     */
    name?: string | null;
    /**
     * Namespace for the subject.
     */
    ns?: string | null;
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
   * Request to validate an Event Threat Detection custom module.
   */
  export interface Schema$ValidateEventThreatDetectionCustomModuleRequest {
    /**
     * Required. The raw text of the module's contents. Used to generate error messages.
     */
    rawText?: string | null;
    /**
     * Required. The type of the module (e.g. CONFIGURABLE_BAD_IP).
     */
    type?: string | null;
  }
  /**
   * Response to validating an Event Threat Detection custom module.
   */
  export interface Schema$ValidateEventThreatDetectionCustomModuleResponse {
    /**
     * A list of errors returned by the validator. If the list is empty, there were no errors.
     */
    errors?: Schema$CustomModuleValidationErrors;
  }
  /**
   * A resource that is determined to have value to a user's system
   */
  export interface Schema$ValuedResource {
    /**
     * Human-readable name of the valued resource.
     */
    displayName?: string | null;
    /**
     * Exposed score for this valued resource. A value of 0 means no exposure was detected exposure.
     */
    exposedScore?: number | null;
    /**
     * Valued resource name, for example, e.g.: `organizations/123/simulations/456/valuedResources/789`
     */
    name?: string | null;
    /**
     * The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) of the valued resource.
     */
    resource?: string | null;
    /**
     * The [resource type](https://cloud.google.com/asset-inventory/docs/supported-asset-types) of the valued resource.
     */
    resourceType?: string | null;
    /**
     * How valuable this resource is.
     */
    resourceValue?: string | null;
    /**
     * List of resource value configurations' metadata used to determine the value of this resource. Maximum of 100.
     */
    resourceValueConfigsUsed?: Schema$ResourceValueConfigMetadata[];
  }
  /**
   * Refers to common vulnerability fields e.g. cve, cvss, cwe etc.
   */
  export interface Schema$Vulnerability {
    /**
     * CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)
     */
    cve?: Schema$Cve;
  }
  /**
   * A signature corresponding to a YARA rule.
   */
  export interface Schema$YaraRuleSignature {
    /**
     * The name of the YARA rule.
     */
    yaraRule?: string | null;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    assets: Resource$Folders$Assets;
    bigQueryExports: Resource$Folders$Bigqueryexports;
    findings: Resource$Folders$Findings;
    muteConfigs: Resource$Folders$Muteconfigs;
    notificationConfigs: Resource$Folders$Notificationconfigs;
    securityHealthAnalyticsSettings: Resource$Folders$Securityhealthanalyticssettings;
    sources: Resource$Folders$Sources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assets = new Resource$Folders$Assets(this.context);
      this.bigQueryExports = new Resource$Folders$Bigqueryexports(this.context);
      this.findings = new Resource$Folders$Findings(this.context);
      this.muteConfigs = new Resource$Folders$Muteconfigs(this.context);
      this.notificationConfigs = new Resource$Folders$Notificationconfigs(
        this.context
      );
      this.securityHealthAnalyticsSettings =
        new Resource$Folders$Securityhealthanalyticssettings(this.context);
      this.sources = new Resource$Folders$Sources(this.context);
    }
  }

  export class Resource$Folders$Assets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Filters an organization's assets and groups them by their specified properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    group(
      params: Params$Resource$Folders$Assets$Group,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    group(
      params?: Params$Resource$Folders$Assets$Group,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GroupAssetsResponse>;
    group(
      params: Params$Resource$Folders$Assets$Group,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    group(
      params: Params$Resource$Folders$Assets$Group,
      options: MethodOptions | BodyResponseCallback<Schema$GroupAssetsResponse>,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(
      params: Params$Resource$Folders$Assets$Group,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupAssetsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Folders$Assets$Group
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GroupAssetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Assets$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Assets$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assets:group').replace(
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
        createAPIRequest<Schema$GroupAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GroupAssetsResponse>(parameters);
      }
    }

    /**
     * Lists an organization's assets.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$Assets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Assets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAssetsResponse>;
    list(
      params: Params$Resource$Folders$Assets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Assets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAssetsResponse>,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Assets$List,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAssetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Assets$List
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAssetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assets').replace(
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
        createAPIRequest<Schema$ListAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAssetsResponse>(parameters);
      }
    }

    /**
     * Updates security marks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateSecurityMarks(
      params: Params$Resource$Folders$Assets$Updatesecuritymarks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSecurityMarks(
      params?: Params$Resource$Folders$Assets$Updatesecuritymarks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityMarks>;
    updateSecurityMarks(
      params: Params$Resource$Folders$Assets$Updatesecuritymarks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Folders$Assets$Updatesecuritymarks,
      options: MethodOptions | BodyResponseCallback<Schema$SecurityMarks>,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Folders$Assets$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Folders$Assets$Updatesecuritymarks
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SecurityMarks> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Assets$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Assets$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$SecurityMarks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityMarks>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Assets$Group
    extends StandardParameters {
    /**
     * Required. The name of the parent to group the assets by. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupAssetsRequest;
  }
  export interface Params$Resource$Folders$Assets$List
    extends StandardParameters {
    /**
     * When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time.
     */
    compareDuration?: string;
    /**
     * A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     */
    fieldMask?: string;
    /**
     * Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `\>`, `<`, `\>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     */
    filter?: string;
    /**
     * Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;
    /**
     * Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string;
  }
  export interface Params$Resource$Folders$Assets$Updatesecuritymarks
    extends StandardParameters {
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string;
    /**
     * The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     */
    startTime?: string;
    /**
     * The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityMarks;
  }

  export class Resource$Folders$Bigqueryexports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Folders$Bigqueryexports$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Folders$Bigqueryexports$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>;
    create(
      params: Params$Resource$Folders$Bigqueryexports$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Folders$Bigqueryexports$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    create(
      params: Params$Resource$Folders$Bigqueryexports$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Folders$Bigqueryexports$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Bigqueryexports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Bigqueryexports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bigQueryExports').replace(
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters
        );
      }
    }

    /**
     * Deletes an existing BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Folders$Bigqueryexports$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Folders$Bigqueryexports$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Folders$Bigqueryexports$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Folders$Bigqueryexports$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Folders$Bigqueryexports$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Bigqueryexports$Delete
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
        {}) as Params$Resource$Folders$Bigqueryexports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Bigqueryexports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Folders$Bigqueryexports$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Folders$Bigqueryexports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>;
    get(
      params: Params$Resource$Folders$Bigqueryexports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Bigqueryexports$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    get(
      params: Params$Resource$Folders$Bigqueryexports$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Bigqueryexports$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Bigqueryexports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Bigqueryexports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters
        );
      }
    }

    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$Bigqueryexports$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Bigqueryexports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBigQueryExportsResponse>;
    list(
      params: Params$Resource$Folders$Bigqueryexports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Bigqueryexports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>,
      callback: BodyResponseCallback<Schema$ListBigQueryExportsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Bigqueryexports$List,
      callback: BodyResponseCallback<Schema$ListBigQueryExportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBigQueryExportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Bigqueryexports$List
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBigQueryExportsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Bigqueryexports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Bigqueryexports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bigQueryExports').replace(
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
        createAPIRequest<Schema$ListBigQueryExportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBigQueryExportsResponse>(parameters);
      }
    }

    /**
     * Updates a BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Folders$Bigqueryexports$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Folders$Bigqueryexports$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>;
    patch(
      params: Params$Resource$Folders$Bigqueryexports$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Folders$Bigqueryexports$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    patch(
      params: Params$Resource$Folders$Bigqueryexports$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Bigqueryexports$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Bigqueryexports$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Bigqueryexports$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Bigqueryexports$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     */
    bigQueryExportId?: string;
    /**
     * Required. The name of the parent resource of the new BigQuery export. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1BigQueryExport;
  }
  export interface Params$Resource$Folders$Bigqueryexports$Delete
    extends StandardParameters {
    /**
     * Required. The name of the BigQuery export to delete. Its format is organizations/{organization\}/bigQueryExports/{export_id\}, folders/{folder\}/bigQueryExports/{export_id\}, or projects/{project\}/bigQueryExports/{export_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Bigqueryexports$Get
    extends StandardParameters {
    /**
     * Required. Name of the BigQuery export to retrieve. Its format is organizations/{organization\}/bigQueryExports/{export_id\}, folders/{folder\}/bigQueryExports/{export_id\}, or projects/{project\}/bigQueryExports/{export_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Bigqueryexports$List
    extends StandardParameters {
    /**
     * The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns the collection of BigQuery exports. Its format is "organizations/[organization_id]", "folders/[folder_id]", "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Bigqueryexports$Patch
    extends StandardParameters {
    /**
     * The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id\}/bigQueryExports/{export_id\}" Example format: "folders/{folder_id\}/bigQueryExports/{export_id\}" Example format: "projects/{project_id\}/bigQueryExports/{export_id\}" This field is provided in responses, and is ignored when provided in create requests.
     */
    name?: string;
    /**
     * The list of fields to be updated. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1BigQueryExport;
  }

  export class Resource$Folders$Findings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    bulkMute(
      params: Params$Resource$Folders$Findings$Bulkmute,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    bulkMute(
      params?: Params$Resource$Folders$Findings$Bulkmute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    bulkMute(
      params: Params$Resource$Folders$Findings$Bulkmute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    bulkMute(
      params: Params$Resource$Folders$Findings$Bulkmute,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    bulkMute(
      params: Params$Resource$Folders$Findings$Bulkmute,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    bulkMute(callback: BodyResponseCallback<Schema$Operation>): void;
    bulkMute(
      paramsOrCallback?:
        | Params$Resource$Folders$Findings$Bulkmute
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
        {}) as Params$Resource$Folders$Findings$Bulkmute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Findings$Bulkmute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings:bulkMute').replace(
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
  }

  export interface Params$Resource$Folders$Findings$Bulkmute
    extends StandardParameters {
    /**
     * Required. The parent, at which bulk action needs to be applied. Its format is "organizations/[organization_id]", "folders/[folder_id]", "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BulkMuteFindingsRequest;
  }

  export class Resource$Folders$Muteconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Folders$Muteconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Folders$Muteconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>;
    create(
      params: Params$Resource$Folders$Muteconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Folders$Muteconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    create(
      params: Params$Resource$Folders$Muteconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Folders$Muteconfigs$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Muteconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Muteconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/muteConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters
        );
      }
    }

    /**
     * Deletes an existing mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Folders$Muteconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Folders$Muteconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Folders$Muteconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Folders$Muteconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Folders$Muteconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Muteconfigs$Delete
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
        {}) as Params$Resource$Folders$Muteconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Muteconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Folders$Muteconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Folders$Muteconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>;
    get(
      params: Params$Resource$Folders$Muteconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Muteconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    get(
      params: Params$Resource$Folders$Muteconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Muteconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Muteconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Muteconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters
        );
      }
    }

    /**
     * Lists mute configs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$Muteconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Muteconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMuteConfigsResponse>;
    list(
      params: Params$Resource$Folders$Muteconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Muteconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListMuteConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Muteconfigs$List,
      callback: BodyResponseCallback<Schema$ListMuteConfigsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMuteConfigsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Muteconfigs$List
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMuteConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Muteconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Muteconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/muteConfigs').replace(
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
        createAPIRequest<Schema$ListMuteConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMuteConfigsResponse>(parameters);
      }
    }

    /**
     * Updates a mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Folders$Muteconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Folders$Muteconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>;
    patch(
      params: Params$Resource$Folders$Muteconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Folders$Muteconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    patch(
      params: Params$Resource$Folders$Muteconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Muteconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Muteconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Muteconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Muteconfigs$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     */
    muteConfigId?: string;
    /**
     * Required. Resource name of the new mute configs's parent. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1MuteConfig;
  }
  export interface Params$Resource$Folders$Muteconfigs$Delete
    extends StandardParameters {
    /**
     * Required. Name of the mute config to delete. Its format is organizations/{organization\}/muteConfigs/{config_id\}, folders/{folder\}/muteConfigs/{config_id\}, or projects/{project\}/muteConfigs/{config_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Muteconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the mute config to retrieve. Its format is organizations/{organization\}/muteConfigs/{config_id\}, folders/{folder\}/muteConfigs/{config_id\}, or projects/{project\}/muteConfigs/{config_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Muteconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns the collection of mute configs. Its format is "organizations/[organization_id]", "folders/[folder_id]", "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Muteconfigs$Patch
    extends StandardParameters {
    /**
     * This field will be ignored if provided on config creation. Format "organizations/{organization\}/muteConfigs/{mute_config\}" "folders/{folder\}/muteConfigs/{mute_config\}" "projects/{project\}/muteConfigs/{mute_config\}"
     */
    name?: string;
    /**
     * The list of fields to be updated. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1MuteConfig;
  }

  export class Resource$Folders$Notificationconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a notification config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Folders$Notificationconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Folders$Notificationconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationConfig>;
    create(
      params: Params$Resource$Folders$Notificationconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Folders$Notificationconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationConfig>,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    create(
      params: Params$Resource$Folders$Notificationconfigs$Create,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$NotificationConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Folders$Notificationconfigs$Create
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Notificationconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Notificationconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notificationConfigs').replace(
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
        createAPIRequest<Schema$NotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationConfig>(parameters);
      }
    }

    /**
     * Deletes a notification config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Folders$Notificationconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Folders$Notificationconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Folders$Notificationconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Folders$Notificationconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Folders$Notificationconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Notificationconfigs$Delete
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
        {}) as Params$Resource$Folders$Notificationconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Notificationconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a notification config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Folders$Notificationconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Folders$Notificationconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationConfig>;
    get(
      params: Params$Resource$Folders$Notificationconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Notificationconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationConfig>,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    get(
      params: Params$Resource$Folders$Notificationconfigs$Get,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$NotificationConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Notificationconfigs$Get
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Notificationconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Notificationconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$NotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationConfig>(parameters);
      }
    }

    /**
     * Lists notification configs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$Notificationconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Notificationconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNotificationConfigsResponse>;
    list(
      params: Params$Resource$Folders$Notificationconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Notificationconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListNotificationConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Notificationconfigs$List,
      callback: BodyResponseCallback<Schema$ListNotificationConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNotificationConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Notificationconfigs$List
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNotificationConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Notificationconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Notificationconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notificationConfigs').replace(
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
        createAPIRequest<Schema$ListNotificationConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNotificationConfigsResponse>(
          parameters
        );
      }
    }

    /**
     *  Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Folders$Notificationconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Folders$Notificationconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationConfig>;
    patch(
      params: Params$Resource$Folders$Notificationconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Folders$Notificationconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationConfig>,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    patch(
      params: Params$Resource$Folders$Notificationconfigs$Patch,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$NotificationConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Notificationconfigs$Patch
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Notificationconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Notificationconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$NotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Notificationconfigs$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only.
     */
    configId?: string;
    /**
     * Required. Resource name of the new notification config's parent. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NotificationConfig;
  }
  export interface Params$Resource$Folders$Notificationconfigs$Delete
    extends StandardParameters {
    /**
     * Required. Name of the notification config to delete. Its format is "organizations/[organization_id]/notificationConfigs/[config_id]", "folders/[folder_id]/notificationConfigs/[config_id]", or "projects/[project_id]/notificationConfigs/[config_id]".
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Notificationconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the notification config to get. Its format is "organizations/[organization_id]/notificationConfigs/[config_id]", "folders/[folder_id]/notificationConfigs/[config_id]", or "projects/[project_id]/notificationConfigs/[config_id]".
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Notificationconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Notificationconfigs$Patch
    extends StandardParameters {
    /**
     * The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/notificationConfigs/notify_public_bucket", "folders/{folder_id\}/notificationConfigs/notify_public_bucket", or "projects/{project_id\}/notificationConfigs/notify_public_bucket".
     */
    name?: string;
    /**
     * The FieldMask to use when updating the notification config. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NotificationConfig;
  }

  export class Resource$Folders$Securityhealthanalyticssettings {
    context: APIRequestContext;
    customModules: Resource$Folders$Securityhealthanalyticssettings$Custommodules;
    effectiveCustomModules: Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customModules =
        new Resource$Folders$Securityhealthanalyticssettings$Custommodules(
          this.context
        );
      this.effectiveCustomModules =
        new Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules(
          this.context
        );
    }
  }

  export class Resource$Folders$Securityhealthanalyticssettings$Custommodules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
    create(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    create(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customModules').replace(
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Delete
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
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Retrieves a SecurityHealthAnalyticsCustomModule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
    get(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }

    /**
     * Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>;
    list(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$List,
      callback: BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$List
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customModules').replace(
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
        createAPIRequest<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>(
          parameters
        );
      }
    }

    /**
     * Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listDescendant(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listDescendant(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>;
    listDescendant(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listDescendant(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    listDescendant(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      callback: BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    listDescendant(
      callback: BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    listDescendant(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Listdescendant
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Listdescendant;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Listdescendant;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/customModules:listDescendant'
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
        createAPIRequest<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
    patch(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    patch(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the new custom module's parent. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
  }
  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Delete
    extends StandardParameters {
    /**
     * Required. Name of the custom module to delete. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}"
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Get
    extends StandardParameters {
    /**
     * Required. Name of the custom module to get. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}"
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last call indicating a continuation
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list custom modules. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Listdescendant
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last call indicating a continuation
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list descendant custom modules. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Custommodules$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the custom module. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}" The id {customModule\} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     */
    name?: string;
    /**
     * The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
  }

  export class Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>;
    get(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }

    /**
     * Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>;
    list(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$List,
      callback: BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$List
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/effectiveCustomModules').replace(
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
        createAPIRequest<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$Get
    extends StandardParameters {
    /**
     * Required. Name of the effective custom module to get. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", "folders/{folder\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}"
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Effectivecustommodules$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last call indicating a continuation
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list effective custom modules. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;
  }

  export class Resource$Folders$Sources {
    context: APIRequestContext;
    findings: Resource$Folders$Sources$Findings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.findings = new Resource$Folders$Sources$Findings(this.context);
    }

    /**
     * Lists all sources belonging to an organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$Sources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Sources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSourcesResponse>;
    list(
      params: Params$Resource$Folders$Sources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Sources$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Sources$List,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Sources$List
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/sources').replace(
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
        createAPIRequest<Schema$ListSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Sources$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the parent of sources to list. Its format should be "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;
  }

  export class Resource$Folders$Sources$Findings {
    context: APIRequestContext;
    externalSystems: Resource$Folders$Sources$Findings$Externalsystems;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.externalSystems =
        new Resource$Folders$Sources$Findings$Externalsystems(this.context);
    }

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id\}/sources/-/findings, /v1/folders/{folder_id\}/sources/-/findings, /v1/projects/{project_id\}/sources/-/findings
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    group(
      params: Params$Resource$Folders$Sources$Findings$Group,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    group(
      params?: Params$Resource$Folders$Sources$Findings$Group,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GroupFindingsResponse>;
    group(
      params: Params$Resource$Folders$Sources$Findings$Group,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    group(
      params: Params$Resource$Folders$Sources$Findings$Group,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GroupFindingsResponse>,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(
      params: Params$Resource$Folders$Sources$Findings$Group,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupFindingsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Folders$Sources$Findings$Group
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GroupFindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sources$Findings$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sources$Findings$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings:group').replace(
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
        createAPIRequest<Schema$GroupFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GroupFindingsResponse>(parameters);
      }
    }

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id\}/sources/-/findings
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$Sources$Findings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Sources$Findings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFindingsResponse>;
    list(
      params: Params$Resource$Folders$Sources$Findings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Sources$Findings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Sources$Findings$List,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Sources$Findings$List
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sources$Findings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sources$Findings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings').replace(
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
        createAPIRequest<Schema$ListFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFindingsResponse>(parameters);
      }
    }

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Folders$Sources$Findings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Folders$Sources$Findings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    patch(
      params: Params$Resource$Folders$Sources$Findings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Folders$Sources$Findings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    patch(
      params: Params$Resource$Folders$Sources$Findings$Patch,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Finding>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Sources$Findings$Patch
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sources$Findings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sources$Findings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Updates the mute state of a finding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setMute(
      params: Params$Resource$Folders$Sources$Findings$Setmute,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMute(
      params?: Params$Resource$Folders$Sources$Findings$Setmute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    setMute(
      params: Params$Resource$Folders$Sources$Findings$Setmute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMute(
      params: Params$Resource$Folders$Sources$Findings$Setmute,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setMute(
      params: Params$Resource$Folders$Sources$Findings$Setmute,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setMute(callback: BodyResponseCallback<Schema$Finding>): void;
    setMute(
      paramsOrCallback?:
        | Params$Resource$Folders$Sources$Findings$Setmute
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sources$Findings$Setmute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sources$Findings$Setmute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setMute').replace(
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Updates the state of a finding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setState(
      params: Params$Resource$Folders$Sources$Findings$Setstate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setState(
      params?: Params$Resource$Folders$Sources$Findings$Setstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    setState(
      params: Params$Resource$Folders$Sources$Findings$Setstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setState(
      params: Params$Resource$Folders$Sources$Findings$Setstate,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setState(
      params: Params$Resource$Folders$Sources$Findings$Setstate,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setState(callback: BodyResponseCallback<Schema$Finding>): void;
    setState(
      paramsOrCallback?:
        | Params$Resource$Folders$Sources$Findings$Setstate
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sources$Findings$Setstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sources$Findings$Setstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setState').replace(
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Updates security marks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateSecurityMarks(
      params: Params$Resource$Folders$Sources$Findings$Updatesecuritymarks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSecurityMarks(
      params?: Params$Resource$Folders$Sources$Findings$Updatesecuritymarks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityMarks>;
    updateSecurityMarks(
      params: Params$Resource$Folders$Sources$Findings$Updatesecuritymarks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Folders$Sources$Findings$Updatesecuritymarks,
      options: MethodOptions | BodyResponseCallback<Schema$SecurityMarks>,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Folders$Sources$Findings$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Folders$Sources$Findings$Updatesecuritymarks
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SecurityMarks> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sources$Findings$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Sources$Findings$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$SecurityMarks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityMarks>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Sources$Findings$Group
    extends StandardParameters {
    /**
     * Required. Name of the source to groupBy. Its format is "organizations/[organization_id]/sources/[source_id]", folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]. To groupBy across all sources provide a source_id of `-`. For example: organizations/{organization_id\}/sources/-, folders/{folder_id\}/sources/-, or projects/{project_id\}/sources/-
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupFindingsRequest;
  }
  export interface Params$Resource$Folders$Sources$Findings$List
    extends StandardParameters {
    /**
     * When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time.
     */
    compareDuration?: string;
    /**
     * A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     */
    fieldMask?: string;
    /**
     * Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `\>`, `<`, `\>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:`
     */
    filter?: string;
    /**
     * Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of the source the findings belong to. Its format is "organizations/[organization_id]/sources/[source_id], folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]". To list across all sources provide a source_id of `-`. For example: organizations/{organization_id\}/sources/-, folders/{folder_id\}/sources/- or projects/{projects_id\}/sources/-
     */
    parent?: string;
    /**
     * Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string;
  }
  export interface Params$Resource$Folders$Sources$Findings$Patch
    extends StandardParameters {
    /**
     * The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string;
    /**
     * The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Finding;
  }
  export interface Params$Resource$Folders$Sources$Findings$Setmute
    extends StandardParameters {
    /**
     * Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMuteRequest;
  }
  export interface Params$Resource$Folders$Sources$Findings$Setstate
    extends StandardParameters {
    /**
     * Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetFindingStateRequest;
  }
  export interface Params$Resource$Folders$Sources$Findings$Updatesecuritymarks
    extends StandardParameters {
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string;
    /**
     * The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     */
    startTime?: string;
    /**
     * The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityMarks;
  }

  export class Resource$Folders$Sources$Findings$Externalsystems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Updates external system. This is for a given finding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Folders$Sources$Findings$Externalsystems$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Folders$Sources$Findings$Externalsystems$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ExternalSystem>;
    patch(
      params: Params$Resource$Folders$Sources$Findings$Externalsystems$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Folders$Sources$Findings$Externalsystems$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
    ): void;
    patch(
      params: Params$Resource$Folders$Sources$Findings$Externalsystems$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Sources$Findings$Externalsystems$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sources$Findings$Externalsystems$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Sources$Findings$Externalsystems$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1ExternalSystem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1ExternalSystem>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Sources$Findings$Externalsystems$Patch
    extends StandardParameters {
    /**
     * Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     */
    name?: string;
    /**
     * The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1ExternalSystem;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    assets: Resource$Organizations$Assets;
    bigQueryExports: Resource$Organizations$Bigqueryexports;
    eventThreatDetectionSettings: Resource$Organizations$Eventthreatdetectionsettings;
    findings: Resource$Organizations$Findings;
    muteConfigs: Resource$Organizations$Muteconfigs;
    notificationConfigs: Resource$Organizations$Notificationconfigs;
    operations: Resource$Organizations$Operations;
    resourceValueConfigs: Resource$Organizations$Resourcevalueconfigs;
    securityHealthAnalyticsSettings: Resource$Organizations$Securityhealthanalyticssettings;
    simulations: Resource$Organizations$Simulations;
    sources: Resource$Organizations$Sources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assets = new Resource$Organizations$Assets(this.context);
      this.bigQueryExports = new Resource$Organizations$Bigqueryexports(
        this.context
      );
      this.eventThreatDetectionSettings =
        new Resource$Organizations$Eventthreatdetectionsettings(this.context);
      this.findings = new Resource$Organizations$Findings(this.context);
      this.muteConfigs = new Resource$Organizations$Muteconfigs(this.context);
      this.notificationConfigs = new Resource$Organizations$Notificationconfigs(
        this.context
      );
      this.operations = new Resource$Organizations$Operations(this.context);
      this.resourceValueConfigs =
        new Resource$Organizations$Resourcevalueconfigs(this.context);
      this.securityHealthAnalyticsSettings =
        new Resource$Organizations$Securityhealthanalyticssettings(
          this.context
        );
      this.simulations = new Resource$Organizations$Simulations(this.context);
      this.sources = new Resource$Organizations$Sources(this.context);
    }

    /**
     * Gets the settings for an organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getOrganizationSettings(
      params?: Params$Resource$Organizations$Getorganizationsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrganizationSettings>;
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    getOrganizationSettings(
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    getOrganizationSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getorganizationsettings
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrganizationSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getorganizationsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getorganizationsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$OrganizationSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrganizationSettings>(parameters);
      }
    }

    /**
     * Updates an organization's settings.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateOrganizationSettings(
      params?: Params$Resource$Organizations$Updateorganizationsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrganizationSettings>;
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    updateOrganizationSettings(
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    updateOrganizationSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updateorganizationsettings
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrganizationSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updateorganizationsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Updateorganizationsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$OrganizationSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrganizationSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Getorganizationsettings
    extends StandardParameters {
    /**
     * Required. Name of the organization to get organization settings for. Its format is "organizations/[organization_id]/organizationSettings".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Updateorganizationsettings
    extends StandardParameters {
    /**
     * The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/organizationSettings".
     */
    name?: string;
    /**
     * The FieldMask to use when updating the settings resource. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrganizationSettings;
  }

  export class Resource$Organizations$Assets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Filters an organization's assets and groups them by their specified properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    group(
      params: Params$Resource$Organizations$Assets$Group,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    group(
      params?: Params$Resource$Organizations$Assets$Group,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GroupAssetsResponse>;
    group(
      params: Params$Resource$Organizations$Assets$Group,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    group(
      params: Params$Resource$Organizations$Assets$Group,
      options: MethodOptions | BodyResponseCallback<Schema$GroupAssetsResponse>,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(
      params: Params$Resource$Organizations$Assets$Group,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupAssetsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$Group
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GroupAssetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assets:group').replace(
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
        createAPIRequest<Schema$GroupAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GroupAssetsResponse>(parameters);
      }
    }

    /**
     * Lists an organization's assets.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Assets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Assets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAssetsResponse>;
    list(
      params: Params$Resource$Organizations$Assets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Assets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAssetsResponse>,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Assets$List,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAssetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$List
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAssetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assets').replace(
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
        createAPIRequest<Schema$ListAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAssetsResponse>(parameters);
      }
    }

    /**
     * Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runDiscovery(
      params?: Params$Resource$Organizations$Assets$Rundiscovery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    runDiscovery(callback: BodyResponseCallback<Schema$Operation>): void;
    runDiscovery(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$Rundiscovery
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
        {}) as Params$Resource$Organizations$Assets$Rundiscovery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$Rundiscovery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assets:runDiscovery').replace(
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
     * Updates security marks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSecurityMarks(
      params?: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityMarks>;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options: MethodOptions | BodyResponseCallback<Schema$SecurityMarks>,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$Updatesecuritymarks
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SecurityMarks> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$SecurityMarks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityMarks>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Assets$Group
    extends StandardParameters {
    /**
     * Required. The name of the parent to group the assets by. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupAssetsRequest;
  }
  export interface Params$Resource$Organizations$Assets$List
    extends StandardParameters {
    /**
     * When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time.
     */
    compareDuration?: string;
    /**
     * A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     */
    fieldMask?: string;
    /**
     * Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `\>`, `<`, `\>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     */
    filter?: string;
    /**
     * Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;
    /**
     * Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string;
  }
  export interface Params$Resource$Organizations$Assets$Rundiscovery
    extends StandardParameters {
    /**
     * Required. Name of the organization to run asset discovery for. Its format is "organizations/[organization_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunAssetDiscoveryRequest;
  }
  export interface Params$Resource$Organizations$Assets$Updatesecuritymarks
    extends StandardParameters {
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string;
    /**
     * The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     */
    startTime?: string;
    /**
     * The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityMarks;
  }

  export class Resource$Organizations$Bigqueryexports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Organizations$Bigqueryexports$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Bigqueryexports$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>;
    create(
      params: Params$Resource$Organizations$Bigqueryexports$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Bigqueryexports$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    create(
      params: Params$Resource$Organizations$Bigqueryexports$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Bigqueryexports$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Bigqueryexports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Bigqueryexports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bigQueryExports').replace(
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters
        );
      }
    }

    /**
     * Deletes an existing BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Organizations$Bigqueryexports$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Bigqueryexports$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Bigqueryexports$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Bigqueryexports$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Bigqueryexports$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Bigqueryexports$Delete
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
        {}) as Params$Resource$Organizations$Bigqueryexports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Bigqueryexports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Bigqueryexports$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Bigqueryexports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>;
    get(
      params: Params$Resource$Organizations$Bigqueryexports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Bigqueryexports$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    get(
      params: Params$Resource$Organizations$Bigqueryexports$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Bigqueryexports$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Bigqueryexports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Bigqueryexports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters
        );
      }
    }

    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Bigqueryexports$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Bigqueryexports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBigQueryExportsResponse>;
    list(
      params: Params$Resource$Organizations$Bigqueryexports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Bigqueryexports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>,
      callback: BodyResponseCallback<Schema$ListBigQueryExportsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Bigqueryexports$List,
      callback: BodyResponseCallback<Schema$ListBigQueryExportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBigQueryExportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Bigqueryexports$List
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBigQueryExportsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Bigqueryexports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Bigqueryexports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bigQueryExports').replace(
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
        createAPIRequest<Schema$ListBigQueryExportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBigQueryExportsResponse>(parameters);
      }
    }

    /**
     * Updates a BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Bigqueryexports$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Bigqueryexports$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>;
    patch(
      params: Params$Resource$Organizations$Bigqueryexports$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Bigqueryexports$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    patch(
      params: Params$Resource$Organizations$Bigqueryexports$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Bigqueryexports$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Bigqueryexports$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Bigqueryexports$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Bigqueryexports$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     */
    bigQueryExportId?: string;
    /**
     * Required. The name of the parent resource of the new BigQuery export. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1BigQueryExport;
  }
  export interface Params$Resource$Organizations$Bigqueryexports$Delete
    extends StandardParameters {
    /**
     * Required. The name of the BigQuery export to delete. Its format is organizations/{organization\}/bigQueryExports/{export_id\}, folders/{folder\}/bigQueryExports/{export_id\}, or projects/{project\}/bigQueryExports/{export_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Bigqueryexports$Get
    extends StandardParameters {
    /**
     * Required. Name of the BigQuery export to retrieve. Its format is organizations/{organization\}/bigQueryExports/{export_id\}, folders/{folder\}/bigQueryExports/{export_id\}, or projects/{project\}/bigQueryExports/{export_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Bigqueryexports$List
    extends StandardParameters {
    /**
     * The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns the collection of BigQuery exports. Its format is "organizations/[organization_id]", "folders/[folder_id]", "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Bigqueryexports$Patch
    extends StandardParameters {
    /**
     * The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id\}/bigQueryExports/{export_id\}" Example format: "folders/{folder_id\}/bigQueryExports/{export_id\}" Example format: "projects/{project_id\}/bigQueryExports/{export_id\}" This field is provided in responses, and is ignored when provided in create requests.
     */
    name?: string;
    /**
     * The list of fields to be updated. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1BigQueryExport;
  }

  export class Resource$Organizations$Eventthreatdetectionsettings {
    context: APIRequestContext;
    customModules: Resource$Organizations$Eventthreatdetectionsettings$Custommodules;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customModules =
        new Resource$Organizations$Eventthreatdetectionsettings$Custommodules(
          this.context
        );
    }

    /**
     * Validates the given Event Threat Detection custom module.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    validateCustomModule(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Validatecustommodule,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    validateCustomModule(
      params?: Params$Resource$Organizations$Eventthreatdetectionsettings$Validatecustommodule,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ValidateEventThreatDetectionCustomModuleResponse>;
    validateCustomModule(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Validatecustommodule,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validateCustomModule(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Validatecustommodule,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ValidateEventThreatDetectionCustomModuleResponse>,
      callback: BodyResponseCallback<Schema$ValidateEventThreatDetectionCustomModuleResponse>
    ): void;
    validateCustomModule(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Validatecustommodule,
      callback: BodyResponseCallback<Schema$ValidateEventThreatDetectionCustomModuleResponse>
    ): void;
    validateCustomModule(
      callback: BodyResponseCallback<Schema$ValidateEventThreatDetectionCustomModuleResponse>
    ): void;
    validateCustomModule(
      paramsOrCallback?:
        | Params$Resource$Organizations$Eventthreatdetectionsettings$Validatecustommodule
        | BodyResponseCallback<Schema$ValidateEventThreatDetectionCustomModuleResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ValidateEventThreatDetectionCustomModuleResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ValidateEventThreatDetectionCustomModuleResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ValidateEventThreatDetectionCustomModuleResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Eventthreatdetectionsettings$Validatecustommodule;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Eventthreatdetectionsettings$Validatecustommodule;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:validateCustomModule').replace(
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
        createAPIRequest<Schema$ValidateEventThreatDetectionCustomModuleResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ValidateEventThreatDetectionCustomModuleResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Eventthreatdetectionsettings$Validatecustommodule
    extends StandardParameters {
    /**
     * Required. Resource name of the parent to validate the Custom Module under. Its format is: * "organizations/{organization\}/eventThreatDetectionSettings".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ValidateEventThreatDetectionCustomModuleRequest;
  }

  export class Resource$Organizations$Eventthreatdetectionsettings$Custommodules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an Event Threat Detection custom module.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionCustomModule>;
    create(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
    ): void;
    create(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Create,
      callback: BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Create
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventThreatDetectionCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customModules').replace(
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
        createAPIRequest<Schema$EventThreatDetectionCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionCustomModule>(
          parameters
        );
      }
    }

    /**
     * Deletes an Event Threat Detection custom module.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Delete
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
        {}) as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets an Event Threat Detection custom module.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionCustomModule>;
    get(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
    ): void;
    get(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Get,
      callback: BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Get
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventThreatDetectionCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$EventThreatDetectionCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionCustomModule>(
          parameters
        );
      }
    }

    /**
     * Lists Event Threat Detection custom modules.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEventThreatDetectionCustomModulesResponse>;
    list(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEventThreatDetectionCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListEventThreatDetectionCustomModulesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$List,
      callback: BodyResponseCallback<Schema$ListEventThreatDetectionCustomModulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEventThreatDetectionCustomModulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$List
        | BodyResponseCallback<Schema$ListEventThreatDetectionCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEventThreatDetectionCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEventThreatDetectionCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEventThreatDetectionCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customModules').replace(
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
        createAPIRequest<Schema$ListEventThreatDetectionCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEventThreatDetectionCustomModulesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an Event Threat Detection custom module.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionCustomModule>;
    patch(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
    ): void;
    patch(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Patch,
      callback: BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Patch
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventThreatDetectionCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$EventThreatDetectionCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionCustomModule>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Create
    extends StandardParameters {
    /**
     * Required. The new custom module's parent. Its format is: * "organizations/{organization\}/eventThreatDetectionSettings".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventThreatDetectionCustomModule;
  }
  export interface Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Delete
    extends StandardParameters {
    /**
     * Required. Name of the custom module to delete. Its format is: * "organizations/{organization\}/eventThreatDetectionSettings/customModules/{module\}".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Get
    extends StandardParameters {
    /**
     * Required. Name of the custom module to get. Its format is: * "organizations/{organization\}/eventThreatDetectionSettings/customModules/{module\}".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$List
    extends StandardParameters {
    /**
     * The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent to list custom modules under. Its format is: * "organizations/{organization\}/eventThreatDetectionSettings".
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Eventthreatdetectionsettings$Custommodules$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the Event Threat Detection custom module. Its format is: * "organizations/{organization\}/eventThreatDetectionSettings/customModules/{module\}". * "folders/{folder\}/eventThreatDetectionSettings/customModules/{module\}". * "projects/{project\}/eventThreatDetectionSettings/customModules/{module\}".
     */
    name?: string;
    /**
     * The list of fields to be updated. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventThreatDetectionCustomModule;
  }

  export class Resource$Organizations$Findings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    bulkMute(
      params: Params$Resource$Organizations$Findings$Bulkmute,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    bulkMute(
      params?: Params$Resource$Organizations$Findings$Bulkmute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    bulkMute(
      params: Params$Resource$Organizations$Findings$Bulkmute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    bulkMute(
      params: Params$Resource$Organizations$Findings$Bulkmute,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    bulkMute(
      params: Params$Resource$Organizations$Findings$Bulkmute,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    bulkMute(callback: BodyResponseCallback<Schema$Operation>): void;
    bulkMute(
      paramsOrCallback?:
        | Params$Resource$Organizations$Findings$Bulkmute
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
        {}) as Params$Resource$Organizations$Findings$Bulkmute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Findings$Bulkmute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings:bulkMute').replace(
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
  }

  export interface Params$Resource$Organizations$Findings$Bulkmute
    extends StandardParameters {
    /**
     * Required. The parent, at which bulk action needs to be applied. Its format is "organizations/[organization_id]", "folders/[folder_id]", "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BulkMuteFindingsRequest;
  }

  export class Resource$Organizations$Muteconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Organizations$Muteconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Muteconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>;
    create(
      params: Params$Resource$Organizations$Muteconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Muteconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    create(
      params: Params$Resource$Organizations$Muteconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Muteconfigs$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Muteconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Muteconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/muteConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters
        );
      }
    }

    /**
     * Deletes an existing mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Organizations$Muteconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Muteconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Muteconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Muteconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Muteconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Muteconfigs$Delete
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
        {}) as Params$Resource$Organizations$Muteconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Muteconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Muteconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Muteconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>;
    get(
      params: Params$Resource$Organizations$Muteconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Muteconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    get(
      params: Params$Resource$Organizations$Muteconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Muteconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Muteconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Muteconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters
        );
      }
    }

    /**
     * Lists mute configs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Muteconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Muteconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMuteConfigsResponse>;
    list(
      params: Params$Resource$Organizations$Muteconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Muteconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListMuteConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Muteconfigs$List,
      callback: BodyResponseCallback<Schema$ListMuteConfigsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMuteConfigsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Muteconfigs$List
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMuteConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Muteconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Muteconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/muteConfigs').replace(
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
        createAPIRequest<Schema$ListMuteConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMuteConfigsResponse>(parameters);
      }
    }

    /**
     * Updates a mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Muteconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Muteconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>;
    patch(
      params: Params$Resource$Organizations$Muteconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Muteconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    patch(
      params: Params$Resource$Organizations$Muteconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Muteconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Muteconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Muteconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Muteconfigs$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     */
    muteConfigId?: string;
    /**
     * Required. Resource name of the new mute configs's parent. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1MuteConfig;
  }
  export interface Params$Resource$Organizations$Muteconfigs$Delete
    extends StandardParameters {
    /**
     * Required. Name of the mute config to delete. Its format is organizations/{organization\}/muteConfigs/{config_id\}, folders/{folder\}/muteConfigs/{config_id\}, or projects/{project\}/muteConfigs/{config_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Muteconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the mute config to retrieve. Its format is organizations/{organization\}/muteConfigs/{config_id\}, folders/{folder\}/muteConfigs/{config_id\}, or projects/{project\}/muteConfigs/{config_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Muteconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns the collection of mute configs. Its format is "organizations/[organization_id]", "folders/[folder_id]", "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Muteconfigs$Patch
    extends StandardParameters {
    /**
     * This field will be ignored if provided on config creation. Format "organizations/{organization\}/muteConfigs/{mute_config\}" "folders/{folder\}/muteConfigs/{mute_config\}" "projects/{project\}/muteConfigs/{mute_config\}"
     */
    name?: string;
    /**
     * The list of fields to be updated. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1MuteConfig;
  }

  export class Resource$Organizations$Notificationconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a notification config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Organizations$Notificationconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Notificationconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationConfig>;
    create(
      params: Params$Resource$Organizations$Notificationconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Notificationconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationConfig>,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    create(
      params: Params$Resource$Organizations$Notificationconfigs$Create,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$NotificationConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Notificationconfigs$Create
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Notificationconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Notificationconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notificationConfigs').replace(
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
        createAPIRequest<Schema$NotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationConfig>(parameters);
      }
    }

    /**
     * Deletes a notification config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Organizations$Notificationconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Notificationconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Notificationconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Notificationconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Notificationconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Notificationconfigs$Delete
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
        {}) as Params$Resource$Organizations$Notificationconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Notificationconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a notification config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Notificationconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Notificationconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationConfig>;
    get(
      params: Params$Resource$Organizations$Notificationconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Notificationconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationConfig>,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    get(
      params: Params$Resource$Organizations$Notificationconfigs$Get,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$NotificationConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Notificationconfigs$Get
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Notificationconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Notificationconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$NotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationConfig>(parameters);
      }
    }

    /**
     * Lists notification configs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Notificationconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Notificationconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNotificationConfigsResponse>;
    list(
      params: Params$Resource$Organizations$Notificationconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Notificationconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListNotificationConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Notificationconfigs$List,
      callback: BodyResponseCallback<Schema$ListNotificationConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNotificationConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Notificationconfigs$List
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNotificationConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Notificationconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Notificationconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notificationConfigs').replace(
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
        createAPIRequest<Schema$ListNotificationConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNotificationConfigsResponse>(
          parameters
        );
      }
    }

    /**
     *  Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Notificationconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Notificationconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationConfig>;
    patch(
      params: Params$Resource$Organizations$Notificationconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Notificationconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationConfig>,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    patch(
      params: Params$Resource$Organizations$Notificationconfigs$Patch,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$NotificationConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Notificationconfigs$Patch
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Notificationconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Notificationconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$NotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Notificationconfigs$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only.
     */
    configId?: string;
    /**
     * Required. Resource name of the new notification config's parent. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NotificationConfig;
  }
  export interface Params$Resource$Organizations$Notificationconfigs$Delete
    extends StandardParameters {
    /**
     * Required. Name of the notification config to delete. Its format is "organizations/[organization_id]/notificationConfigs/[config_id]", "folders/[folder_id]/notificationConfigs/[config_id]", or "projects/[project_id]/notificationConfigs/[config_id]".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Notificationconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the notification config to get. Its format is "organizations/[organization_id]/notificationConfigs/[config_id]", "folders/[folder_id]/notificationConfigs/[config_id]", or "projects/[project_id]/notificationConfigs/[config_id]".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Notificationconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Notificationconfigs$Patch
    extends StandardParameters {
    /**
     * The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/notificationConfigs/notify_public_bucket", "folders/{folder_id\}/notificationConfigs/notify_public_bucket", or "projects/{project_id\}/notificationConfigs/notify_public_bucket".
     */
    name?: string;
    /**
     * The FieldMask to use when updating the notification config. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NotificationConfig;
  }

  export class Resource$Organizations$Operations {
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
      params: Params$Resource$Organizations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Organizations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Organizations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Organizations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Organizations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$Cancel
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
        {}) as Params$Resource$Organizations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Organizations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$Delete
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
        {}) as Params$Resource$Organizations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Organizations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Organizations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$Get
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
        {}) as Params$Resource$Organizations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Organizations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$List
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
        {}) as Params$Resource$Organizations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Operations$List
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

  export class Resource$Organizations$Resourcevalueconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a ResourceValueConfig for an organization. Maps user's tags to difference resource values for use by the attack path simulation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchCreate(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Organizations$Resourcevalueconfigs$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchCreateResourceValueConfigsResponse>;
    batchCreate(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateResourceValueConfigsResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateResourceValueConfigsResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateResourceValueConfigsResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateResourceValueConfigsResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Resourcevalueconfigs$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateResourceValueConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateResourceValueConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateResourceValueConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchCreateResourceValueConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Resourcevalueconfigs$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Resourcevalueconfigs$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/resourceValueConfigs:batchCreate'
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
        createAPIRequest<Schema$BatchCreateResourceValueConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateResourceValueConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes a ResourceValueConfig.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Resourcevalueconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Resourcevalueconfigs$Delete
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
        {}) as Params$Resource$Organizations$Resourcevalueconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Resourcevalueconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a ResourceValueConfig.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Resourcevalueconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>;
    get(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
    ): void;
    get(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Resourcevalueconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Resourcevalueconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Resourcevalueconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>(
          parameters
        );
      }
    }

    /**
     * Lists all ResourceValueConfigs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Resourcevalueconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Resourcevalueconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListResourceValueConfigsResponse>;
    list(
      params: Params$Resource$Organizations$Resourcevalueconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Resourcevalueconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListResourceValueConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListResourceValueConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Resourcevalueconfigs$List,
      callback: BodyResponseCallback<Schema$ListResourceValueConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListResourceValueConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Resourcevalueconfigs$List
        | BodyResponseCallback<Schema$ListResourceValueConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListResourceValueConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListResourceValueConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListResourceValueConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Resourcevalueconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Resourcevalueconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/resourceValueConfigs').replace(
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
        createAPIRequest<Schema$ListResourceValueConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListResourceValueConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing ResourceValueConfigs with new rules.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Resourcevalueconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>;
    patch(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
    ): void;
    patch(
      params: Params$Resource$Organizations$Resourcevalueconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Resourcevalueconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Resourcevalueconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Resourcevalueconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1ResourceValueConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Resourcevalueconfigs$Batchcreate
    extends StandardParameters {
    /**
     * Required. Resource name of the new ResourceValueConfig's parent. The parent field in the CreateResourceValueConfigRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateResourceValueConfigsRequest;
  }
  export interface Params$Resource$Organizations$Resourcevalueconfigs$Delete
    extends StandardParameters {
    /**
     * Required. Name of the ResourceValueConfig to delete
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Resourcevalueconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource value config to retrieve. Its format is organizations/{organization\}/resourceValueConfigs/{config_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Resourcevalueconfigs$List
    extends StandardParameters {
    /**
     * The number of results to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListResourceValueConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListResourceValueConfigs` must match the call that provided the page token. page_size can be specified, and the new page_size will be used.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns the collection of resource value configs. Its format is "organizations/[organization_id]"
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Resourcevalueconfigs$Patch
    extends StandardParameters {
    /**
     * Name for the resource value config
     */
    name?: string;
    /**
     * The list of fields to be updated. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1ResourceValueConfig;
  }

  export class Resource$Organizations$Securityhealthanalyticssettings {
    context: APIRequestContext;
    customModules: Resource$Organizations$Securityhealthanalyticssettings$Custommodules;
    effectiveCustomModules: Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customModules =
        new Resource$Organizations$Securityhealthanalyticssettings$Custommodules(
          this.context
        );
      this.effectiveCustomModules =
        new Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules(
          this.context
        );
    }
  }

  export class Resource$Organizations$Securityhealthanalyticssettings$Custommodules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
    create(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    create(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customModules').replace(
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Delete
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
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Retrieves a SecurityHealthAnalyticsCustomModule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
    get(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }

    /**
     * Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>;
    list(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$List,
      callback: BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$List
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customModules').replace(
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
        createAPIRequest<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>(
          parameters
        );
      }
    }

    /**
     * Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listDescendant(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listDescendant(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>;
    listDescendant(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listDescendant(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    listDescendant(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      callback: BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    listDescendant(
      callback: BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    listDescendant(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Listdescendant
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Listdescendant;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Listdescendant;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/customModules:listDescendant'
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
        createAPIRequest<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
    patch(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    patch(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the new custom module's parent. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
  }
  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Delete
    extends StandardParameters {
    /**
     * Required. Name of the custom module to delete. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}"
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Get
    extends StandardParameters {
    /**
     * Required. Name of the custom module to get. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}"
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last call indicating a continuation
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list custom modules. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Listdescendant
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last call indicating a continuation
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list descendant custom modules. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Custommodules$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the custom module. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}" The id {customModule\} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     */
    name?: string;
    /**
     * The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
  }

  export class Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>;
    get(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }

    /**
     * Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>;
    list(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$List,
      callback: BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$List
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/effectiveCustomModules').replace(
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
        createAPIRequest<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$Get
    extends StandardParameters {
    /**
     * Required. Name of the effective custom module to get. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", "folders/{folder\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}"
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Effectivecustommodules$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last call indicating a continuation
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list effective custom modules. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;
  }

  export class Resource$Organizations$Simulations {
    context: APIRequestContext;
    attackExposureResults: Resource$Organizations$Simulations$Attackexposureresults;
    attackPaths: Resource$Organizations$Simulations$Attackpaths;
    valuedResources: Resource$Organizations$Simulations$Valuedresources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attackExposureResults =
        new Resource$Organizations$Simulations$Attackexposureresults(
          this.context
        );
      this.attackPaths = new Resource$Organizations$Simulations$Attackpaths(
        this.context
      );
      this.valuedResources =
        new Resource$Organizations$Simulations$Valuedresources(this.context);
    }

    /**
     * Get the simulation by name or the latest simulation for the given organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Simulations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Simulations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Simulation>;
    get(
      params: Params$Resource$Organizations$Simulations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Simulations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Simulation>,
      callback: BodyResponseCallback<Schema$Simulation>
    ): void;
    get(
      params: Params$Resource$Organizations$Simulations$Get,
      callback: BodyResponseCallback<Schema$Simulation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Simulation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Simulations$Get
        | BodyResponseCallback<Schema$Simulation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Simulation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Simulation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Simulation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Simulations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Simulations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$Simulation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Simulation>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Simulations$Get
    extends StandardParameters {
    /**
     * Required. The organization name or simulation name of this simulation Valid format: "organizations/{organization\}/simulations/latest" "organizations/{organization\}/simulations/{simulation\}"
     */
    name?: string;
  }

  export class Resource$Organizations$Simulations$Attackexposureresults {
    context: APIRequestContext;
    attackPaths: Resource$Organizations$Simulations$Attackexposureresults$Attackpaths;
    valuedResources: Resource$Organizations$Simulations$Attackexposureresults$Valuedresources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attackPaths =
        new Resource$Organizations$Simulations$Attackexposureresults$Attackpaths(
          this.context
        );
      this.valuedResources =
        new Resource$Organizations$Simulations$Attackexposureresults$Valuedresources(
          this.context
        );
    }
  }

  export class Resource$Organizations$Simulations$Attackexposureresults$Attackpaths {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Simulations$Attackexposureresults$Attackpaths$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Simulations$Attackexposureresults$Attackpaths$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAttackPathsResponse>;
    list(
      params: Params$Resource$Organizations$Simulations$Attackexposureresults$Attackpaths$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Attackexposureresults$Attackpaths$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttackPathsResponse>,
      callback: BodyResponseCallback<Schema$ListAttackPathsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Attackexposureresults$Attackpaths$List,
      callback: BodyResponseCallback<Schema$ListAttackPathsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAttackPathsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Simulations$Attackexposureresults$Attackpaths$List
        | BodyResponseCallback<Schema$ListAttackPathsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAttackPathsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAttackPathsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAttackPathsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Simulations$Attackexposureresults$Attackpaths$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Simulations$Attackexposureresults$Attackpaths$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/attackPaths').replace(
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
        createAPIRequest<Schema$ListAttackPathsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAttackPathsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Simulations$Attackexposureresults$Attackpaths$List
    extends StandardParameters {
    /**
     * The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     */
    filter?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list attack paths. Valid formats: "organizations/{organization\}", "organizations/{organization\}/simulations/{simulation\}" "organizations/{organization\}/simulations/{simulation\}/attackExposureResults/{attack_exposure_result_v2\}" "organizations/{organization\}/simulations/{simulation\}/valuedResources/{valued_resource\}"
     */
    parent?: string;
  }

  export class Resource$Organizations$Simulations$Attackexposureresults$Valuedresources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the valued resources for a set of simulation results and filter.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Simulations$Attackexposureresults$Valuedresources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Simulations$Attackexposureresults$Valuedresources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListValuedResourcesResponse>;
    list(
      params: Params$Resource$Organizations$Simulations$Attackexposureresults$Valuedresources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Attackexposureresults$Valuedresources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListValuedResourcesResponse>,
      callback: BodyResponseCallback<Schema$ListValuedResourcesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Attackexposureresults$Valuedresources$List,
      callback: BodyResponseCallback<Schema$ListValuedResourcesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListValuedResourcesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Simulations$Attackexposureresults$Valuedresources$List
        | BodyResponseCallback<Schema$ListValuedResourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListValuedResourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListValuedResourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListValuedResourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Simulations$Attackexposureresults$Valuedresources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Simulations$Attackexposureresults$Valuedresources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/valuedResources').replace(
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
        createAPIRequest<Schema$ListValuedResourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListValuedResourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Simulations$Attackexposureresults$Valuedresources$List
    extends StandardParameters {
    /**
     * The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports =
     */
    filter?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list valued resources. Valid formats: "organizations/{organization\}", "organizations/{organization\}/simulations/{simulation\}" "organizations/{organization\}/simulations/{simulation\}/attackExposureResults/{attack_exposure_result_v2\}"
     */
    parent?: string;
  }

  export class Resource$Organizations$Simulations$Attackpaths {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Simulations$Attackpaths$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Simulations$Attackpaths$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAttackPathsResponse>;
    list(
      params: Params$Resource$Organizations$Simulations$Attackpaths$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Attackpaths$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttackPathsResponse>,
      callback: BodyResponseCallback<Schema$ListAttackPathsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Attackpaths$List,
      callback: BodyResponseCallback<Schema$ListAttackPathsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAttackPathsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Simulations$Attackpaths$List
        | BodyResponseCallback<Schema$ListAttackPathsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAttackPathsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAttackPathsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAttackPathsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Simulations$Attackpaths$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Simulations$Attackpaths$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/attackPaths').replace(
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
        createAPIRequest<Schema$ListAttackPathsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAttackPathsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Simulations$Attackpaths$List
    extends StandardParameters {
    /**
     * The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     */
    filter?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list attack paths. Valid formats: "organizations/{organization\}", "organizations/{organization\}/simulations/{simulation\}" "organizations/{organization\}/simulations/{simulation\}/attackExposureResults/{attack_exposure_result_v2\}" "organizations/{organization\}/simulations/{simulation\}/valuedResources/{valued_resource\}"
     */
    parent?: string;
  }

  export class Resource$Organizations$Simulations$Valuedresources {
    context: APIRequestContext;
    attackPaths: Resource$Organizations$Simulations$Valuedresources$Attackpaths;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attackPaths =
        new Resource$Organizations$Simulations$Valuedresources$Attackpaths(
          this.context
        );
    }

    /**
     * Lists the valued resources for a set of simulation results and filter.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Simulations$Valuedresources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Simulations$Valuedresources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListValuedResourcesResponse>;
    list(
      params: Params$Resource$Organizations$Simulations$Valuedresources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Valuedresources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListValuedResourcesResponse>,
      callback: BodyResponseCallback<Schema$ListValuedResourcesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Valuedresources$List,
      callback: BodyResponseCallback<Schema$ListValuedResourcesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListValuedResourcesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Simulations$Valuedresources$List
        | BodyResponseCallback<Schema$ListValuedResourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListValuedResourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListValuedResourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListValuedResourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Simulations$Valuedresources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Simulations$Valuedresources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/valuedResources').replace(
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
        createAPIRequest<Schema$ListValuedResourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListValuedResourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Simulations$Valuedresources$List
    extends StandardParameters {
    /**
     * The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports =
     */
    filter?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list valued resources. Valid formats: "organizations/{organization\}", "organizations/{organization\}/simulations/{simulation\}" "organizations/{organization\}/simulations/{simulation\}/attackExposureResults/{attack_exposure_result_v2\}"
     */
    parent?: string;
  }

  export class Resource$Organizations$Simulations$Valuedresources$Attackpaths {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Simulations$Valuedresources$Attackpaths$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Simulations$Valuedresources$Attackpaths$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAttackPathsResponse>;
    list(
      params: Params$Resource$Organizations$Simulations$Valuedresources$Attackpaths$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Valuedresources$Attackpaths$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttackPathsResponse>,
      callback: BodyResponseCallback<Schema$ListAttackPathsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Simulations$Valuedresources$Attackpaths$List,
      callback: BodyResponseCallback<Schema$ListAttackPathsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAttackPathsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Simulations$Valuedresources$Attackpaths$List
        | BodyResponseCallback<Schema$ListAttackPathsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAttackPathsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAttackPathsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAttackPathsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Simulations$Valuedresources$Attackpaths$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Simulations$Valuedresources$Attackpaths$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/attackPaths').replace(
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
        createAPIRequest<Schema$ListAttackPathsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAttackPathsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Simulations$Valuedresources$Attackpaths$List
    extends StandardParameters {
    /**
     * The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     */
    filter?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list attack paths. Valid formats: "organizations/{organization\}", "organizations/{organization\}/simulations/{simulation\}" "organizations/{organization\}/simulations/{simulation\}/attackExposureResults/{attack_exposure_result_v2\}" "organizations/{organization\}/simulations/{simulation\}/valuedResources/{valued_resource\}"
     */
    parent?: string;
  }

  export class Resource$Organizations$Sources {
    context: APIRequestContext;
    findings: Resource$Organizations$Sources$Findings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.findings = new Resource$Organizations$Sources$Findings(this.context);
    }

    /**
     * Creates a source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Organizations$Sources$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Sources$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Source>;
    create(
      params: Params$Resource$Organizations$Sources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Create,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    create(callback: BodyResponseCallback<Schema$Source>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Create
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Source> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/sources').replace(
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
        createAPIRequest<Schema$Source>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * Gets a source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Sources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Sources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Source>;
    get(
      params: Params$Resource$Organizations$Sources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Sources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(
      params: Params$Resource$Organizations$Sources$Get,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(callback: BodyResponseCallback<Schema$Source>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Get
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Source> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$Source>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * Gets the access control policy on the specified Source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Organizations$Sources$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Getiampolicy
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
        {}) as Params$Resource$Organizations$Sources$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
     * Lists all sources belonging to an organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Sources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Sources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSourcesResponse>;
    list(
      params: Params$Resource$Organizations$Sources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$List,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$List
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/sources').replace(
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
        createAPIRequest<Schema$ListSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSourcesResponse>(parameters);
      }
    }

    /**
     * Updates a source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Sources$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Source>;
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Source>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Patch
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Source> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$Source>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified Source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Organizations$Sources$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Setiampolicy
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
        {}) as Params$Resource$Organizations$Sources$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Returns the permissions that a caller has on the specified source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Organizations$Sources$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Testiampermissions
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
        {}) as Params$Resource$Organizations$Sources$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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

  export interface Params$Resource$Organizations$Sources$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the new source's parent. Its format should be "organizations/[organization_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Source;
  }
  export interface Params$Resource$Organizations$Sources$Get
    extends StandardParameters {
    /**
     * Required. Relative resource name of the source. Its format is "organizations/[organization_id]/source/[source_id]".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Sources$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Sources$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the parent of sources to list. Its format should be "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Sources$Patch
    extends StandardParameters {
    /**
     * The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/sources/{source_id\}"
     */
    name?: string;
    /**
     * The FieldMask to use when updating the source resource. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Source;
  }
  export interface Params$Resource$Organizations$Sources$Setiampolicy
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
  export interface Params$Resource$Organizations$Sources$Testiampermissions
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

  export class Resource$Organizations$Sources$Findings {
    context: APIRequestContext;
    externalSystems: Resource$Organizations$Sources$Findings$Externalsystems;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.externalSystems =
        new Resource$Organizations$Sources$Findings$Externalsystems(
          this.context
        );
    }

    /**
     * Creates a finding. The corresponding source must exist for finding creation to succeed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Organizations$Sources$Findings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Sources$Findings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    create(
      params: Params$Resource$Organizations$Sources$Findings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Findings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Findings$Create,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    create(callback: BodyResponseCallback<Schema$Finding>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Create
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings').replace(
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id\}/sources/-/findings, /v1/folders/{folder_id\}/sources/-/findings, /v1/projects/{project_id\}/sources/-/findings
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    group(
      params?: Params$Resource$Organizations$Sources$Findings$Group,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GroupFindingsResponse>;
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GroupFindingsResponse>,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupFindingsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Group
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GroupFindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings:group').replace(
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
        createAPIRequest<Schema$GroupFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GroupFindingsResponse>(parameters);
      }
    }

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id\}/sources/-/findings
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Sources$Findings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Sources$Findings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFindingsResponse>;
    list(
      params: Params$Resource$Organizations$Sources$Findings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$Findings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$Findings$List,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$List
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings').replace(
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
        createAPIRequest<Schema$ListFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFindingsResponse>(parameters);
      }
    }

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Sources$Findings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Finding>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Patch
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Updates the mute state of a finding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setMute(
      params: Params$Resource$Organizations$Sources$Findings$Setmute,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMute(
      params?: Params$Resource$Organizations$Sources$Findings$Setmute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    setMute(
      params: Params$Resource$Organizations$Sources$Findings$Setmute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMute(
      params: Params$Resource$Organizations$Sources$Findings$Setmute,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setMute(
      params: Params$Resource$Organizations$Sources$Findings$Setmute,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setMute(callback: BodyResponseCallback<Schema$Finding>): void;
    setMute(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Setmute
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Setmute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Setmute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setMute').replace(
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Updates the state of a finding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setState(
      params?: Params$Resource$Organizations$Sources$Findings$Setstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setState(callback: BodyResponseCallback<Schema$Finding>): void;
    setState(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Setstate
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Setstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Setstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setState').replace(
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Updates security marks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSecurityMarks(
      params?: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityMarks>;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options: MethodOptions | BodyResponseCallback<Schema$SecurityMarks>,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SecurityMarks> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$SecurityMarks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityMarks>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Sources$Findings$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length.
     */
    findingId?: string;
    /**
     * Required. Resource name of the new finding's parent. Its format should be "organizations/[organization_id]/sources/[source_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Finding;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Group
    extends StandardParameters {
    /**
     * Required. Name of the source to groupBy. Its format is "organizations/[organization_id]/sources/[source_id]", folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]. To groupBy across all sources provide a source_id of `-`. For example: organizations/{organization_id\}/sources/-, folders/{folder_id\}/sources/-, or projects/{project_id\}/sources/-
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupFindingsRequest;
  }
  export interface Params$Resource$Organizations$Sources$Findings$List
    extends StandardParameters {
    /**
     * When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time.
     */
    compareDuration?: string;
    /**
     * A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     */
    fieldMask?: string;
    /**
     * Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `\>`, `<`, `\>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:`
     */
    filter?: string;
    /**
     * Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of the source the findings belong to. Its format is "organizations/[organization_id]/sources/[source_id], folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]". To list across all sources provide a source_id of `-`. For example: organizations/{organization_id\}/sources/-, folders/{folder_id\}/sources/- or projects/{projects_id\}/sources/-
     */
    parent?: string;
    /**
     * Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Patch
    extends StandardParameters {
    /**
     * The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string;
    /**
     * The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Finding;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Setmute
    extends StandardParameters {
    /**
     * Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMuteRequest;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Setstate
    extends StandardParameters {
    /**
     * Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetFindingStateRequest;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks
    extends StandardParameters {
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string;
    /**
     * The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     */
    startTime?: string;
    /**
     * The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityMarks;
  }

  export class Resource$Organizations$Sources$Findings$Externalsystems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Updates external system. This is for a given finding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Externalsystems$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Sources$Findings$Externalsystems$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ExternalSystem>;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Externalsystems$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Externalsystems$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Externalsystems$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Externalsystems$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Externalsystems$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Sources$Findings$Externalsystems$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1ExternalSystem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1ExternalSystem>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Sources$Findings$Externalsystems$Patch
    extends StandardParameters {
    /**
     * Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     */
    name?: string;
    /**
     * The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1ExternalSystem;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    assets: Resource$Projects$Assets;
    bigQueryExports: Resource$Projects$Bigqueryexports;
    findings: Resource$Projects$Findings;
    muteConfigs: Resource$Projects$Muteconfigs;
    notificationConfigs: Resource$Projects$Notificationconfigs;
    securityHealthAnalyticsSettings: Resource$Projects$Securityhealthanalyticssettings;
    sources: Resource$Projects$Sources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assets = new Resource$Projects$Assets(this.context);
      this.bigQueryExports = new Resource$Projects$Bigqueryexports(
        this.context
      );
      this.findings = new Resource$Projects$Findings(this.context);
      this.muteConfigs = new Resource$Projects$Muteconfigs(this.context);
      this.notificationConfigs = new Resource$Projects$Notificationconfigs(
        this.context
      );
      this.securityHealthAnalyticsSettings =
        new Resource$Projects$Securityhealthanalyticssettings(this.context);
      this.sources = new Resource$Projects$Sources(this.context);
    }
  }

  export class Resource$Projects$Assets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Filters an organization's assets and groups them by their specified properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    group(
      params: Params$Resource$Projects$Assets$Group,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    group(
      params?: Params$Resource$Projects$Assets$Group,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GroupAssetsResponse>;
    group(
      params: Params$Resource$Projects$Assets$Group,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    group(
      params: Params$Resource$Projects$Assets$Group,
      options: MethodOptions | BodyResponseCallback<Schema$GroupAssetsResponse>,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(
      params: Params$Resource$Projects$Assets$Group,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupAssetsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Projects$Assets$Group
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GroupAssetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Assets$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Assets$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assets:group').replace(
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
        createAPIRequest<Schema$GroupAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GroupAssetsResponse>(parameters);
      }
    }

    /**
     * Lists an organization's assets.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Assets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Assets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAssetsResponse>;
    list(
      params: Params$Resource$Projects$Assets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Assets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAssetsResponse>,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Assets$List,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAssetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Assets$List
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAssetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assets').replace(
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
        createAPIRequest<Schema$ListAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAssetsResponse>(parameters);
      }
    }

    /**
     * Updates security marks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateSecurityMarks(
      params: Params$Resource$Projects$Assets$Updatesecuritymarks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSecurityMarks(
      params?: Params$Resource$Projects$Assets$Updatesecuritymarks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityMarks>;
    updateSecurityMarks(
      params: Params$Resource$Projects$Assets$Updatesecuritymarks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Projects$Assets$Updatesecuritymarks,
      options: MethodOptions | BodyResponseCallback<Schema$SecurityMarks>,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Projects$Assets$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Projects$Assets$Updatesecuritymarks
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SecurityMarks> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Assets$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Assets$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$SecurityMarks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityMarks>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Assets$Group
    extends StandardParameters {
    /**
     * Required. The name of the parent to group the assets by. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupAssetsRequest;
  }
  export interface Params$Resource$Projects$Assets$List
    extends StandardParameters {
    /**
     * When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time.
     */
    compareDuration?: string;
    /**
     * A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     */
    fieldMask?: string;
    /**
     * Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `\>`, `<`, `\>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     */
    filter?: string;
    /**
     * Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;
    /**
     * Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string;
  }
  export interface Params$Resource$Projects$Assets$Updatesecuritymarks
    extends StandardParameters {
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string;
    /**
     * The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     */
    startTime?: string;
    /**
     * The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityMarks;
  }

  export class Resource$Projects$Bigqueryexports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Bigqueryexports$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Bigqueryexports$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>;
    create(
      params: Params$Resource$Projects$Bigqueryexports$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Bigqueryexports$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    create(
      params: Params$Resource$Projects$Bigqueryexports$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Bigqueryexports$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Bigqueryexports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Bigqueryexports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bigQueryExports').replace(
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters
        );
      }
    }

    /**
     * Deletes an existing BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Bigqueryexports$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Bigqueryexports$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Bigqueryexports$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Bigqueryexports$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Bigqueryexports$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Bigqueryexports$Delete
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
        {}) as Params$Resource$Projects$Bigqueryexports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Bigqueryexports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Bigqueryexports$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Bigqueryexports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>;
    get(
      params: Params$Resource$Projects$Bigqueryexports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Bigqueryexports$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    get(
      params: Params$Resource$Projects$Bigqueryexports$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Bigqueryexports$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Bigqueryexports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Bigqueryexports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters
        );
      }
    }

    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Bigqueryexports$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Bigqueryexports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBigQueryExportsResponse>;
    list(
      params: Params$Resource$Projects$Bigqueryexports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Bigqueryexports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>,
      callback: BodyResponseCallback<Schema$ListBigQueryExportsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Bigqueryexports$List,
      callback: BodyResponseCallback<Schema$ListBigQueryExportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBigQueryExportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Bigqueryexports$List
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBigQueryExportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBigQueryExportsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Bigqueryexports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Bigqueryexports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bigQueryExports').replace(
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
        createAPIRequest<Schema$ListBigQueryExportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBigQueryExportsResponse>(parameters);
      }
    }

    /**
     * Updates a BigQuery export.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Bigqueryexports$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Bigqueryexports$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>;
    patch(
      params: Params$Resource$Projects$Bigqueryexports$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Bigqueryexports$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    patch(
      params: Params$Resource$Projects$Bigqueryexports$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Bigqueryexports$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1BigQueryExport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Bigqueryexports$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Bigqueryexports$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1BigQueryExport>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Bigqueryexports$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     */
    bigQueryExportId?: string;
    /**
     * Required. The name of the parent resource of the new BigQuery export. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1BigQueryExport;
  }
  export interface Params$Resource$Projects$Bigqueryexports$Delete
    extends StandardParameters {
    /**
     * Required. The name of the BigQuery export to delete. Its format is organizations/{organization\}/bigQueryExports/{export_id\}, folders/{folder\}/bigQueryExports/{export_id\}, or projects/{project\}/bigQueryExports/{export_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Bigqueryexports$Get
    extends StandardParameters {
    /**
     * Required. Name of the BigQuery export to retrieve. Its format is organizations/{organization\}/bigQueryExports/{export_id\}, folders/{folder\}/bigQueryExports/{export_id\}, or projects/{project\}/bigQueryExports/{export_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Bigqueryexports$List
    extends StandardParameters {
    /**
     * The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns the collection of BigQuery exports. Its format is "organizations/[organization_id]", "folders/[folder_id]", "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Bigqueryexports$Patch
    extends StandardParameters {
    /**
     * The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id\}/bigQueryExports/{export_id\}" Example format: "folders/{folder_id\}/bigQueryExports/{export_id\}" Example format: "projects/{project_id\}/bigQueryExports/{export_id\}" This field is provided in responses, and is ignored when provided in create requests.
     */
    name?: string;
    /**
     * The list of fields to be updated. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1BigQueryExport;
  }

  export class Resource$Projects$Findings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    bulkMute(
      params: Params$Resource$Projects$Findings$Bulkmute,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    bulkMute(
      params?: Params$Resource$Projects$Findings$Bulkmute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    bulkMute(
      params: Params$Resource$Projects$Findings$Bulkmute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    bulkMute(
      params: Params$Resource$Projects$Findings$Bulkmute,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    bulkMute(
      params: Params$Resource$Projects$Findings$Bulkmute,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    bulkMute(callback: BodyResponseCallback<Schema$Operation>): void;
    bulkMute(
      paramsOrCallback?:
        | Params$Resource$Projects$Findings$Bulkmute
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
        {}) as Params$Resource$Projects$Findings$Bulkmute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Findings$Bulkmute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings:bulkMute').replace(
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
  }

  export interface Params$Resource$Projects$Findings$Bulkmute
    extends StandardParameters {
    /**
     * Required. The parent, at which bulk action needs to be applied. Its format is "organizations/[organization_id]", "folders/[folder_id]", "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BulkMuteFindingsRequest;
  }

  export class Resource$Projects$Muteconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Muteconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Muteconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>;
    create(
      params: Params$Resource$Projects$Muteconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Muteconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Muteconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Muteconfigs$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Muteconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Muteconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/muteConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters
        );
      }
    }

    /**
     * Deletes an existing mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Muteconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Muteconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Muteconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Muteconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Muteconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Muteconfigs$Delete
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
        {}) as Params$Resource$Projects$Muteconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Muteconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Muteconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Muteconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>;
    get(
      params: Params$Resource$Projects$Muteconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Muteconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Muteconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Muteconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Muteconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Muteconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters
        );
      }
    }

    /**
     * Lists mute configs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Muteconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Muteconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMuteConfigsResponse>;
    list(
      params: Params$Resource$Projects$Muteconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Muteconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListMuteConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Muteconfigs$List,
      callback: BodyResponseCallback<Schema$ListMuteConfigsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMuteConfigsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Muteconfigs$List
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMuteConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMuteConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Muteconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Muteconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/muteConfigs').replace(
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
        createAPIRequest<Schema$ListMuteConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMuteConfigsResponse>(parameters);
      }
    }

    /**
     * Updates a mute config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Muteconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Muteconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>;
    patch(
      params: Params$Resource$Projects$Muteconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Muteconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Muteconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Muteconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1MuteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1MuteConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Muteconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Muteconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1MuteConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Muteconfigs$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     */
    muteConfigId?: string;
    /**
     * Required. Resource name of the new mute configs's parent. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1MuteConfig;
  }
  export interface Params$Resource$Projects$Muteconfigs$Delete
    extends StandardParameters {
    /**
     * Required. Name of the mute config to delete. Its format is organizations/{organization\}/muteConfigs/{config_id\}, folders/{folder\}/muteConfigs/{config_id\}, or projects/{project\}/muteConfigs/{config_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Muteconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the mute config to retrieve. Its format is organizations/{organization\}/muteConfigs/{config_id\}, folders/{folder\}/muteConfigs/{config_id\}, or projects/{project\}/muteConfigs/{config_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Muteconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns the collection of mute configs. Its format is "organizations/[organization_id]", "folders/[folder_id]", "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Muteconfigs$Patch
    extends StandardParameters {
    /**
     * This field will be ignored if provided on config creation. Format "organizations/{organization\}/muteConfigs/{mute_config\}" "folders/{folder\}/muteConfigs/{mute_config\}" "projects/{project\}/muteConfigs/{mute_config\}"
     */
    name?: string;
    /**
     * The list of fields to be updated. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1MuteConfig;
  }

  export class Resource$Projects$Notificationconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a notification config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Notificationconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Notificationconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationConfig>;
    create(
      params: Params$Resource$Projects$Notificationconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Notificationconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationConfig>,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Notificationconfigs$Create,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$NotificationConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Notificationconfigs$Create
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notificationconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notificationConfigs').replace(
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
        createAPIRequest<Schema$NotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationConfig>(parameters);
      }
    }

    /**
     * Deletes a notification config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Notificationconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Notificationconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Notificationconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Notificationconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Notificationconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Notificationconfigs$Delete
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
        {}) as Params$Resource$Projects$Notificationconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Gets a notification config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Notificationconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Notificationconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationConfig>;
    get(
      params: Params$Resource$Projects$Notificationconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Notificationconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationConfig>,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Notificationconfigs$Get,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$NotificationConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Notificationconfigs$Get
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notificationconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$NotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationConfig>(parameters);
      }
    }

    /**
     * Lists notification configs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Notificationconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Notificationconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNotificationConfigsResponse>;
    list(
      params: Params$Resource$Projects$Notificationconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Notificationconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListNotificationConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Notificationconfigs$List,
      callback: BodyResponseCallback<Schema$ListNotificationConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNotificationConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Notificationconfigs$List
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNotificationConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNotificationConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notificationconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notificationConfigs').replace(
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
        createAPIRequest<Schema$ListNotificationConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNotificationConfigsResponse>(
          parameters
        );
      }
    }

    /**
     *  Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Notificationconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Notificationconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationConfig>;
    patch(
      params: Params$Resource$Projects$Notificationconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Notificationconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationConfig>,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Notificationconfigs$Patch,
      callback: BodyResponseCallback<Schema$NotificationConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$NotificationConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Notificationconfigs$Patch
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notificationconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$NotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Notificationconfigs$Create
    extends StandardParameters {
    /**
     * Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only.
     */
    configId?: string;
    /**
     * Required. Resource name of the new notification config's parent. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NotificationConfig;
  }
  export interface Params$Resource$Projects$Notificationconfigs$Delete
    extends StandardParameters {
    /**
     * Required. Name of the notification config to delete. Its format is "organizations/[organization_id]/notificationConfigs/[config_id]", "folders/[folder_id]/notificationConfigs/[config_id]", or "projects/[project_id]/notificationConfigs/[config_id]".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notificationconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the notification config to get. Its format is "organizations/[organization_id]/notificationConfigs/[config_id]", "folders/[folder_id]/notificationConfigs/[config_id]", or "projects/[project_id]/notificationConfigs/[config_id]".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notificationconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Notificationconfigs$Patch
    extends StandardParameters {
    /**
     * The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/notificationConfigs/notify_public_bucket", "folders/{folder_id\}/notificationConfigs/notify_public_bucket", or "projects/{project_id\}/notificationConfigs/notify_public_bucket".
     */
    name?: string;
    /**
     * The FieldMask to use when updating the notification config. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NotificationConfig;
  }

  export class Resource$Projects$Securityhealthanalyticssettings {
    context: APIRequestContext;
    customModules: Resource$Projects$Securityhealthanalyticssettings$Custommodules;
    effectiveCustomModules: Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customModules =
        new Resource$Projects$Securityhealthanalyticssettings$Custommodules(
          this.context
        );
      this.effectiveCustomModules =
        new Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules(
          this.context
        );
    }
  }

  export class Resource$Projects$Securityhealthanalyticssettings$Custommodules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
    create(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    create(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customModules').replace(
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Delete
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
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
     * Retrieves a SecurityHealthAnalyticsCustomModule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
    get(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }

    /**
     * Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>;
    list(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$List,
      callback: BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$List
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customModules').replace(
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
        createAPIRequest<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSecurityHealthAnalyticsCustomModulesResponse>(
          parameters
        );
      }
    }

    /**
     * Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listDescendant(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listDescendant(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>;
    listDescendant(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listDescendant(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    listDescendant(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Listdescendant,
      callback: BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    listDescendant(
      callback: BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    listDescendant(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Listdescendant
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Listdescendant;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Listdescendant;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/customModules:listDescendant'
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
        createAPIRequest<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDescendantSecurityHealthAnalyticsCustomModulesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
    patch(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    patch(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the new custom module's parent. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
  }
  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Delete
    extends StandardParameters {
    /**
     * Required. Name of the custom module to delete. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Get
    extends StandardParameters {
    /**
     * Required. Name of the custom module to get. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last call indicating a continuation
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list custom modules. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Listdescendant
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last call indicating a continuation
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list descendant custom modules. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Custommodules$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the custom module. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}" The id {customModule\} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     */
    name?: string;
    /**
     * The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
  }

  export class Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>;
    get(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$Get
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>(
          parameters
        );
      }
    }

    /**
     * Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>;
    list(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>,
      callback: BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$List,
      callback: BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$List
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/effectiveCustomModules').replace(
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
        createAPIRequest<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$Get
    extends StandardParameters {
    /**
     * Required. Name of the effective custom module to get. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", "folders/{folder\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Effectivecustommodules$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last call indicating a continuation
     */
    pageToken?: string;
    /**
     * Required. Name of parent to list effective custom modules. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings", "folders/{folder\}/securityHealthAnalyticsSettings", or "projects/{project\}/securityHealthAnalyticsSettings"
     */
    parent?: string;
  }

  export class Resource$Projects$Sources {
    context: APIRequestContext;
    findings: Resource$Projects$Sources$Findings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.findings = new Resource$Projects$Sources$Findings(this.context);
    }

    /**
     * Lists all sources belonging to an organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Sources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Sources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSourcesResponse>;
    list(
      params: Params$Resource$Projects$Sources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sources$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sources$List,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sources$List
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/sources').replace(
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
        createAPIRequest<Schema$ListSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sources$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the parent of sources to list. Its format should be "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     */
    parent?: string;
  }

  export class Resource$Projects$Sources$Findings {
    context: APIRequestContext;
    externalSystems: Resource$Projects$Sources$Findings$Externalsystems;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.externalSystems =
        new Resource$Projects$Sources$Findings$Externalsystems(this.context);
    }

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id\}/sources/-/findings, /v1/folders/{folder_id\}/sources/-/findings, /v1/projects/{project_id\}/sources/-/findings
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    group(
      params: Params$Resource$Projects$Sources$Findings$Group,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    group(
      params?: Params$Resource$Projects$Sources$Findings$Group,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GroupFindingsResponse>;
    group(
      params: Params$Resource$Projects$Sources$Findings$Group,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    group(
      params: Params$Resource$Projects$Sources$Findings$Group,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GroupFindingsResponse>,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(
      params: Params$Resource$Projects$Sources$Findings$Group,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupFindingsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Projects$Sources$Findings$Group
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GroupFindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sources$Findings$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sources$Findings$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings:group').replace(
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
        createAPIRequest<Schema$GroupFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GroupFindingsResponse>(parameters);
      }
    }

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id\}/sources/-/findings
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Sources$Findings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Sources$Findings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFindingsResponse>;
    list(
      params: Params$Resource$Projects$Sources$Findings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sources$Findings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sources$Findings$List,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sources$Findings$List
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sources$Findings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sources$Findings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/findings').replace(
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
        createAPIRequest<Schema$ListFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFindingsResponse>(parameters);
      }
    }

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Sources$Findings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Sources$Findings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    patch(
      params: Params$Resource$Projects$Sources$Findings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Sources$Findings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    patch(
      params: Params$Resource$Projects$Sources$Findings$Patch,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Finding>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Sources$Findings$Patch
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sources$Findings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sources$Findings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Updates the mute state of a finding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setMute(
      params: Params$Resource$Projects$Sources$Findings$Setmute,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMute(
      params?: Params$Resource$Projects$Sources$Findings$Setmute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    setMute(
      params: Params$Resource$Projects$Sources$Findings$Setmute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMute(
      params: Params$Resource$Projects$Sources$Findings$Setmute,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setMute(
      params: Params$Resource$Projects$Sources$Findings$Setmute,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setMute(callback: BodyResponseCallback<Schema$Finding>): void;
    setMute(
      paramsOrCallback?:
        | Params$Resource$Projects$Sources$Findings$Setmute
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sources$Findings$Setmute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sources$Findings$Setmute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setMute').replace(
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Updates the state of a finding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setState(
      params: Params$Resource$Projects$Sources$Findings$Setstate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setState(
      params?: Params$Resource$Projects$Sources$Findings$Setstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Finding>;
    setState(
      params: Params$Resource$Projects$Sources$Findings$Setstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setState(
      params: Params$Resource$Projects$Sources$Findings$Setstate,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setState(
      params: Params$Resource$Projects$Sources$Findings$Setstate,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    setState(callback: BodyResponseCallback<Schema$Finding>): void;
    setState(
      paramsOrCallback?:
        | Params$Resource$Projects$Sources$Findings$Setstate
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Finding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sources$Findings$Setstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sources$Findings$Setstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setState').replace(
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Updates security marks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateSecurityMarks(
      params: Params$Resource$Projects$Sources$Findings$Updatesecuritymarks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSecurityMarks(
      params?: Params$Resource$Projects$Sources$Findings$Updatesecuritymarks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityMarks>;
    updateSecurityMarks(
      params: Params$Resource$Projects$Sources$Findings$Updatesecuritymarks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Projects$Sources$Findings$Updatesecuritymarks,
      options: MethodOptions | BodyResponseCallback<Schema$SecurityMarks>,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Projects$Sources$Findings$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Projects$Sources$Findings$Updatesecuritymarks
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityMarks>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SecurityMarks> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sources$Findings$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Sources$Findings$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$SecurityMarks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityMarks>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sources$Findings$Group
    extends StandardParameters {
    /**
     * Required. Name of the source to groupBy. Its format is "organizations/[organization_id]/sources/[source_id]", folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]. To groupBy across all sources provide a source_id of `-`. For example: organizations/{organization_id\}/sources/-, folders/{folder_id\}/sources/-, or projects/{project_id\}/sources/-
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupFindingsRequest;
  }
  export interface Params$Resource$Projects$Sources$Findings$List
    extends StandardParameters {
    /**
     * When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time.
     */
    compareDuration?: string;
    /**
     * A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     */
    fieldMask?: string;
    /**
     * Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `\>`, `<`, `\>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `\>`, `<`, `\>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:`
     */
    filter?: string;
    /**
     * Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of the source the findings belong to. Its format is "organizations/[organization_id]/sources/[source_id], folders/[folder_id]/sources/[source_id], or projects/[project_id]/sources/[source_id]". To list across all sources provide a source_id of `-`. For example: organizations/{organization_id\}/sources/-, folders/{folder_id\}/sources/- or projects/{projects_id\}/sources/-
     */
    parent?: string;
    /**
     * Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     */
    readTime?: string;
  }
  export interface Params$Resource$Projects$Sources$Findings$Patch
    extends StandardParameters {
    /**
     * The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string;
    /**
     * The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Finding;
  }
  export interface Params$Resource$Projects$Sources$Findings$Setmute
    extends StandardParameters {
    /**
     * Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMuteRequest;
  }
  export interface Params$Resource$Projects$Sources$Findings$Setstate
    extends StandardParameters {
    /**
     * Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetFindingStateRequest;
  }
  export interface Params$Resource$Projects$Sources$Findings$Updatesecuritymarks
    extends StandardParameters {
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string;
    /**
     * The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     */
    startTime?: string;
    /**
     * The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityMarks;
  }

  export class Resource$Projects$Sources$Findings$Externalsystems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Updates external system. This is for a given finding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Sources$Findings$Externalsystems$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Sources$Findings$Externalsystems$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ExternalSystem>;
    patch(
      params: Params$Resource$Projects$Sources$Findings$Externalsystems$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Sources$Findings$Externalsystems$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
    ): void;
    patch(
      params: Params$Resource$Projects$Sources$Findings$Externalsystems$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Sources$Findings$Externalsystems$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudSecuritycenterV1ExternalSystem>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sources$Findings$Externalsystems$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Sources$Findings$Externalsystems$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1ExternalSystem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1ExternalSystem>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Sources$Findings$Externalsystems$Patch
    extends StandardParameters {
    /**
     * Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     */
    name?: string;
    /**
     * The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1ExternalSystem;
  }
}
