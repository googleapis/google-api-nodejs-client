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

export namespace workstations_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Cloud Workstations API
   *
   * Allows administrators to create managed developer environments in the cloud.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const workstations = google.workstations('v1beta');
   * ```
   */
  export class Workstations {
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
   * An accelerator card attached to the instance.
   */
  export interface Schema$Accelerator {
    /**
     * Number of accelerator cards exposed to the instance.
     */
    count?: number | null;
    /**
     * Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".
     */
    type?: string | null;
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
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * A Docker container.
   */
  export interface Schema$Container {
    /**
     * Arguments passed to the entrypoint.
     */
    args?: string[] | null;
    /**
     * If set, overrides the default ENTRYPOINT specified by the image.
     */
    command?: string[] | null;
    /**
     * Environment variables passed to the container's entrypoint.
     */
    env?: {[key: string]: string} | null;
    /**
     * A Docker container image that defines a custom environment. Cloud Workstations provides a number of [preconfigured images](https://cloud.google.com/workstations/docs/preconfigured-base-images), but you can create your own [custom container images](https://cloud.google.com/workstations/docs/custom-container-images). If using a private image, the `host.gceInstance.serviceAccount` field must be specified in the workstation configuration and must have permission to pull the specified image. Otherwise, the image must be publicly accessible.
     */
    image?: string | null;
    /**
     * If set, overrides the USER specified in the image with the given uid.
     */
    runAsUser?: number | null;
    /**
     * If set, overrides the default DIR specified by the image.
     */
    workingDir?: string | null;
  }
  /**
   * A customer-managed encryption key (CMEK) for the Compute Engine resources of the associated workstation configuration. Specify the name of your Cloud KMS encryption key and the default service account. We recommend that you use a separate service account and follow [Cloud KMS best practices](https://cloud.google.com/kms/docs/separation-of-duties).
   */
  export interface Schema$CustomerEncryptionKey {
    /**
     * Immutable. The name of the Google Cloud KMS encryption key. For example, `projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME`. The key must be in the same region as the workstation configuration.
     */
    kmsKey?: string | null;
    /**
     * Immutable. The service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see [Separation of duties](https://cloud.google.com/kms/docs/separation-of-duties) and `gcloud kms keys add-iam-policy-binding` [`--member`](https://cloud.google.com/sdk/gcloud/reference/kms/keys/add-iam-policy-binding#--member).
     */
    kmsKeyServiceAccount?: string | null;
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
   * A set of Compute Engine Confidential VM instance options.
   */
  export interface Schema$GceConfidentialInstanceConfig {
    /**
     * Whether the instance has confidential compute enabled.
     */
    enableConfidentialCompute?: boolean | null;
  }
  /**
   * A runtime using a Compute Engine instance.
   */
  export interface Schema$GceInstance {
    /**
     * A list of the type and count of accelerator cards attached to the instance.
     */
    accelerators?: Schema$Accelerator[];
    /**
     * The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is `30` GB. Defaults to `50` GB.
     */
    bootDiskSizeGb?: number | null;
    /**
     * A set of Compute Engine Confidential VM instance options.
     */
    confidentialInstanceConfig?: Schema$GceConfidentialInstanceConfig;
    /**
     * When set to true, disables public IP addresses for VMs. If you disable public IP addresses, you must set up Private Google Access or Cloud NAT on your network. If you use Private Google Access and you use `private.googleapis.com` or `restricted.googleapis.com` for Container Registry and Artifact Registry, make sure that you set up DNS records for domains `*.gcr.io` and `*.pkg.dev`. Defaults to false (VMs have public IP addresses).
     */
    disablePublicIpAddresses?: boolean | null;
    /**
     * Whether to enable nested virtualization on instances.
     */
    enableNestedVirtualization?: boolean | null;
    /**
     * The type of machine to use for VM instances—for example, `e2-standard-4`. For more information about machine types that Cloud Workstations supports, see the list of [available machine types](https://cloud.google.com/workstations/docs/available-machine-types).
     */
    machineType?: string | null;
    /**
     * Output only. Number of instances currently available in the pool for faster workstation startup.
     */
    pooledInstances?: number | null;
    /**
     * The number of VMs that the system should keep idle so that new workstations can be started quickly for new users. Defaults to `0` in the API.
     */
    poolSize?: number | null;
    /**
     * The email address of the service account for Cloud Workstations VMs created with this configuration. When specified, be sure that the service account has `logginglogEntries.create` permission on the project so it can write logs out to Cloud Logging. If using a custom container image, the service account must have permissions to pull the specified image. If you as the administrator want to be able to `ssh` into the underlying VM, you need to set this value to a service account for which you have the `iam.serviceAccounts.actAs` permission. Conversely, if you don't want anyone to be able to `ssh` into the underlying VM, use a service account where no one has that permission. If not set, VMs run with a service account provided by the Cloud Workstations service, and the image must be publicly accessible.
     */
    serviceAccount?: string | null;
    /**
     * A set of Compute Engine Shielded instance options.
     */
    shieldedInstanceConfig?: Schema$GceShieldedInstanceConfig;
    /**
     * Network tags to add to the Compute Engine machines backing the workstations. This option applies [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags) to VMs created with this configuration. These network tags enable the creation of [firewall rules](https://cloud.google.com/workstations/docs/configure-firewall-rules).
     */
    tags?: string[] | null;
  }
  /**
   * A PersistentDirectory backed by a Compute Engine regional persistent disk. The `persistentDirectories[]` field is repeated, but it may contain only one entry. It creates a [persistent disk](https://cloud.google.com/compute/docs/disks/persistent-disks) that mounts to the workstation VM at `/home` when the session starts and detaches when the session ends. If this field is empty, workstations created with this configuration do not have a persistent home directory.
   */
  export interface Schema$GceRegionalPersistentDisk {
    /**
     * The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `pd-standard`.
     */
    diskType?: string | null;
    /**
     * Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source_snapshot is set. Defaults to `ext4`.
     */
    fsType?: string | null;
    /**
     * Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.
     */
    reclaimPolicy?: string | null;
    /**
     * The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if `source_snapshot` is set. Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the `diskType` must be `pd-balanced` or `pd-ssd`.
     */
    sizeGb?: number | null;
    /**
     * Name of the snapshot to use as the source for the disk. If set, size_gb and fs_type must be empty.
     */
    sourceSnapshot?: string | null;
  }
  /**
   * A set of Compute Engine Shielded instance options.
   */
  export interface Schema$GceShieldedInstanceConfig {
    /**
     * Whether the instance has integrity monitoring enabled.
     */
    enableIntegrityMonitoring?: boolean | null;
    /**
     * Whether the instance has Secure Boot enabled.
     */
    enableSecureBoot?: boolean | null;
    /**
     * Whether the instance has the vTPM enabled.
     */
    enableVtpm?: boolean | null;
  }
  /**
   * Request message for GenerateAccessToken.
   */
  export interface Schema$GenerateAccessTokenRequest {
    /**
     * Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token's expiration time will be set to a default value of 1 hour in the future.
     */
    expireTime?: string | null;
    /**
     * Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token's lifetime will be set to a default value of 1 hour.
     */
    ttl?: string | null;
  }
  /**
   * Response message for GenerateAccessToken.
   */
  export interface Schema$GenerateAccessTokenResponse {
    /**
     * The generated bearer access token. To use this token, include it in an Authorization header of an HTTP request sent to the associated workstation's hostname—for example, `Authorization: Bearer `.
     */
    accessToken?: string | null;
    /**
     * Time at which the generated token will expire.
     */
    expireTime?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * Runtime host for a workstation.
   */
  export interface Schema$Host {
    /**
     * Specifies a Compute Engine instance as the host.
     */
    gceInstance?: Schema$GceInstance;
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
   * Response message for ListUsableWorkstationConfigs.
   */
  export interface Schema$ListUsableWorkstationConfigsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources.
     */
    unreachable?: string[] | null;
    /**
     * The requested configs.
     */
    workstationConfigs?: Schema$WorkstationConfig[];
  }
  /**
   * Response message for ListUsableWorkstations.
   */
  export interface Schema$ListUsableWorkstationsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources.
     */
    unreachable?: string[] | null;
    /**
     * The requested workstations.
     */
    workstations?: Schema$Workstation[];
  }
  /**
   * Response message for ListWorkstationClusters.
   */
  export interface Schema$ListWorkstationClustersResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources.
     */
    unreachable?: string[] | null;
    /**
     * The requested workstation clusters.
     */
    workstationClusters?: Schema$WorkstationCluster[];
  }
  /**
   * Response message for ListWorkstationConfigs.
   */
  export interface Schema$ListWorkstationConfigsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources.
     */
    unreachable?: string[] | null;
    /**
     * The requested configs.
     */
    workstationConfigs?: Schema$WorkstationConfig[];
  }
  /**
   * Response message for ListWorkstations.
   */
  export interface Schema$ListWorkstationsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources.
     */
    unreachable?: string[] | null;
    /**
     * The requested workstations.
     */
    workstations?: Schema$Workstation[];
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
   * Metadata for long-running operations.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. Time that the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. Time that the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation.
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
   * A directory to persist across workstation sessions.
   */
  export interface Schema$PersistentDirectory {
    /**
     * A PersistentDirectory backed by a Compute Engine persistent disk.
     */
    gcePd?: Schema$GceRegionalPersistentDisk;
    /**
     * Location of this directory in the running workstation.
     */
    mountPath?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
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
   * Configuration options for private clusters.
   */
  export interface Schema$PrivateClusterConfig {
    /**
     * Additional projects that are allowed to attach to the workstation cluster's service attachment. By default, the workstation cluster's project and the VPC host project (if different) are allowed.
     */
    allowedProjects?: string[] | null;
    /**
     * Output only. Hostname for the workstation cluster. This field will be populated only when private endpoint is enabled. To access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.
     */
    clusterHostname?: string | null;
    /**
     * Immutable. Whether Workstations endpoint is private.
     */
    enablePrivateEndpoint?: boolean | null;
    /**
     * Output only. Service attachment URI for the workstation cluster. The service attachemnt is created when private endpoint is enabled. To access workstations in the cluster, configure access to the managed service using [Private Service Connect](https://cloud.google.com/vpc/docs/configure-private-service-connect-services).
     */
    serviceAttachmentUri?: string | null;
  }
  /**
   * A readiness check to be performed on a workstation.
   */
  export interface Schema$ReadinessCheck {
    /**
     * Path to which the request should be sent.
     */
    path?: string | null;
    /**
     * Port to which the request should be sent.
     */
    port?: number | null;
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
   * Request message for StartWorkstation.
   */
  export interface Schema$StartWorkstationRequest {
    /**
     * If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag.
     */
    etag?: string | null;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean | null;
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
   * Request message for StopWorkstation.
   */
  export interface Schema$StopWorkstationRequest {
    /**
     * If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag.
     */
    etag?: string | null;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean | null;
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
   * A single instance of a developer workstation with its own persistent storage.
   */
  export interface Schema$Workstation {
    /**
     * Client-specified annotations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Time when this resource was created.
     */
    createTime?: string | null;
    /**
     * Output only. Time when this resource was soft-deleted.
     */
    deleteTime?: string | null;
    /**
     * Human-readable name for this resource.
     */
    displayName?: string | null;
    /**
     * Environment variables passed to the workstation container's entrypoint.
     */
    env?: {[key: string]: string} | null;
    /**
     * Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `{port\}-{host\}`.
     */
    host?: string | null;
    /**
     * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Full name of this resource.
     */
    name?: string | null;
    /**
     * Output only. Indicates whether this resource is currently being updated to match its intended state.
     */
    reconciling?: boolean | null;
    /**
     * Output only. Current state of the workstation.
     */
    state?: string | null;
    /**
     * Output only. A system-assigned unique identifier for this resource.
     */
    uid?: string | null;
    /**
     * Output only. Time when this resource was most recently updated.
     */
    updateTime?: string | null;
  }
  /**
   * A grouping of workstation configurations and the associated workstations in that region.
   */
  export interface Schema$WorkstationCluster {
    /**
     * Client-specified annotations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Status conditions describing the current resource state.
     */
    conditions?: Schema$Status[];
    /**
     * Output only. The private IP address of the control plane for this cluster. Workstation VMs need access to this IP address to work with the service, so make sure that your firewall rules allow egress from the workstation VMs to this address.
     */
    controlPlaneIp?: string | null;
    /**
     * Output only. Time when this resource was created.
     */
    createTime?: string | null;
    /**
     * Output only. Whether this resource is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in the `conditions` field.
     */
    degraded?: boolean | null;
    /**
     * Output only. Time when this resource was soft-deleted.
     */
    deleteTime?: string | null;
    /**
     * Human-readable name for this resource.
     */
    displayName?: string | null;
    /**
     * Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Full name of this resource.
     */
    name?: string | null;
    /**
     * Immutable. Name of the Compute Engine network in which instances associated with this cluster will be created.
     */
    network?: string | null;
    /**
     * Configuration for private cluster.
     */
    privateClusterConfig?: Schema$PrivateClusterConfig;
    /**
     * Output only. Indicates whether this resource is currently being updated to match its intended state.
     */
    reconciling?: boolean | null;
    /**
     * Immutable. Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. Must be part of the subnetwork specified for this cluster.
     */
    subnetwork?: string | null;
    /**
     * Output only. A system-assigned unique identifier for this resource.
     */
    uid?: string | null;
    /**
     * Output only. Time when this resource was most recently updated.
     */
    updateTime?: string | null;
  }
  /**
   * A set of configuration options that describe how a workstation runs. Workstation configurations are intended to be shared across multiple workstations.
   */
  export interface Schema$WorkstationConfig {
    /**
     * Client-specified annotations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Status conditions describing the current resource state.
     */
    conditions?: Schema$Status[];
    /**
     * Container that runs upon startup for each workstation using this workstation configuration.
     */
    container?: Schema$Container;
    /**
     * Output only. Time when this resource was created.
     */
    createTime?: string | null;
    /**
     * Output only. Whether this resource is degraded, in which case it may require user action to restore full functionality. See also the `conditions` field.
     */
    degraded?: boolean | null;
    /**
     * Output only. Time when this resource was soft-deleted.
     */
    deleteTime?: string | null;
    /**
     * Human-readable name for this resource.
     */
    displayName?: string | null;
    /**
     * Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project. Operating system audit logging is distinct from [Cloud Audit Logs](https://cloud.google.com/workstations/docs/audit-logging).
     */
    enableAuditAgent?: boolean | null;
    /**
     * Immutable. Encrypts resources of this workstation configuration using a customer-managed encryption key (CMEK). If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata. If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk might be lost. If the encryption key is revoked, the workstation session automatically stops within 7 hours. Immutable after the workstation configuration is created.
     */
    encryptionKey?: Schema$CustomerEncryptionKey;
    /**
     * Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Runtime host for the workstation.
     */
    host?: Schema$Host;
    /**
     * Number of seconds to wait before automatically stopping a workstation after it last received user traffic. A value of `0s` indicates that Cloud Workstations VMs created with this configuration should never time out due to idleness. Provide [duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration) terminated by `s` for seconds—for example, `7200s` (2 hours). The default is `1200s` (20 minutes).
     */
    idleTimeout?: string | null;
    /**
     * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Full name of this resource.
     */
    name?: string | null;
    /**
     * Directories to persist across workstation sessions.
     */
    persistentDirectories?: Schema$PersistentDirectory[];
    /**
     * Readiness checks to perform when starting a workstation using this workstation configuration. Mark a workstation as running only after all specified readiness checks return 200 status codes.
     */
    readinessChecks?: Schema$ReadinessCheck[];
    /**
     * Output only. Indicates whether this resource is currently being updated to match its intended state.
     */
    reconciling?: boolean | null;
    /**
     * Number of seconds that a workstation can run until it is automatically shut down. We recommend that workstations be shut down daily to reduce costs and so that security updates can be applied upon restart. The `idleTimeout` and `runningTimeout` parameters are independent of each other. Note that the `runningTimeout` parameter shuts down VMs after the specified time, regardless of whether or not the VMs are idle. Provide duration terminated by `s` for seconds—for example, `54000s` (15 hours). Defaults to `43200s` (12 hours). A value of `0` indicates that workstations using this configuration should never time out. If `encryption_key` is set, it must be greater than `0` and less than `86400s` (24 hours). Warning: A value of `0s` indicates that Cloud Workstations VMs created with this configuration have no maximum running time. This is strongly discouraged because you incur costs and will not pick up security updates.
     */
    runningTimeout?: string | null;
    /**
     * Output only. A system-assigned unique identifier for this resource.
     */
    uid?: string | null;
    /**
     * Output only. Time when this resource was most recently updated.
     */
    updateTime?: string | null;
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
    operations: Resource$Projects$Locations$Operations;
    workstationClusters: Resource$Projects$Locations$Workstationclusters;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.workstationClusters =
        new Resource$Projects$Locations$Workstationclusters(this.context);
    }
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
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *   const res = await workstations.projects.locations.operations.cancel({
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
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:cancel').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *   const res = await workstations.projects.locations.operations.delete({
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
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *   const res = await workstations.projects.locations.operations.get({
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

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *   const res = await workstations.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
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

  export class Resource$Projects$Locations$Workstationclusters {
    context: APIRequestContext;
    workstationConfigs: Resource$Projects$Locations$Workstationclusters$Workstationconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.workstationConfigs =
        new Resource$Projects$Locations$Workstationclusters$Workstationconfigs(
          this.context
        );
    }

    /**
     * Creates a new workstation cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *   const res = await workstations.projects.locations.workstationClusters.create({
     *     // Required. Parent resource name.
     *     parent: 'projects/my-project/locations/my-location',
     *     // If set, validate the request and preview the review, but do not actually apply it.
     *     validateOnly: 'placeholder-value',
     *     // Required. ID to use for the workstation cluster.
     *     workstationClusterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "conditions": [],
     *       //   "controlPlaneIp": "my_controlPlaneIp",
     *       //   "createTime": "my_createTime",
     *       //   "degraded": false,
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "network": "my_network",
     *       //   "privateClusterConfig": {},
     *       //   "reconciling": false,
     *       //   "subnetwork": "my_subnetwork",
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Create
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/workstationClusters').replace(
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
     * Deletes the specified workstation cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *   const res = await workstations.projects.locations.workstationClusters.delete({
     *     // If set, the request will be rejected if the latest version of the workstation cluster on the server does not have this ETag.
     *     etag: 'placeholder-value',
     *     // If set, any workstation configurations and workstations in the workstation cluster are also deleted. Otherwise, the request only works if the workstation cluster has no configurations or workstations.
     *     force: 'placeholder-value',
     *     // Required. Name of the workstation cluster to delete.
     *     name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster',
     *     // If set, validate the request and preview the review, but do not apply it.
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Delete
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns the requested workstation cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *   const res = await workstations.projects.locations.workstationClusters.get({
     *     // Required. Name of the requested resource.
     *     name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "conditions": [],
     *   //   "controlPlaneIp": "my_controlPlaneIp",
     *   //   "createTime": "my_createTime",
     *   //   "degraded": false,
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "network": "my_network",
     *   //   "privateClusterConfig": {},
     *   //   "reconciling": false,
     *   //   "subnetwork": "my_subnetwork",
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkstationCluster>;
    get(
      params: Params$Resource$Projects$Locations$Workstationclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workstationclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WorkstationCluster>,
      callback: BodyResponseCallback<Schema$WorkstationCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workstationclusters$Get,
      callback: BodyResponseCallback<Schema$WorkstationCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$WorkstationCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Get
        | BodyResponseCallback<Schema$WorkstationCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkstationCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkstationCluster>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$WorkstationCluster>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WorkstationCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkstationCluster>(parameters);
      }
    }

    /**
     * Returns all workstation clusters in the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *   const res = await workstations.projects.locations.workstationClusters.list({
     *     // Maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource name.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "workstationClusters": []
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
      params: Params$Resource$Projects$Locations$Workstationclusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Workstationclusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkstationClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Workstationclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workstationclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkstationClustersResponse>,
      callback: BodyResponseCallback<Schema$ListWorkstationClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workstationclusters$List,
      callback: BodyResponseCallback<Schema$ListWorkstationClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListWorkstationClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$List
        | BodyResponseCallback<Schema$ListWorkstationClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkstationClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkstationClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkstationClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workstationclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/workstationClusters').replace(
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
        createAPIRequest<Schema$ListWorkstationClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkstationClustersResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing workstation cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *   const res = await workstations.projects.locations.workstationClusters.patch({
     *     // If set, and the workstation cluster is not found, a new workstation cluster will be created. In this situation, update_mask is ignored.
     *     allowMissing: 'placeholder-value',
     *     // Full name of this resource.
     *     name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster',
     *     // Required. Mask that specifies which fields in the workstation cluster should be updated.
     *     updateMask: 'placeholder-value',
     *     // If set, validate the request and preview the review, but do not actually apply it.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "conditions": [],
     *       //   "controlPlaneIp": "my_controlPlaneIp",
     *       //   "createTime": "my_createTime",
     *       //   "degraded": false,
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "network": "my_network",
     *       //   "privateClusterConfig": {},
     *       //   "reconciling": false,
     *       //   "subnetwork": "my_subnetwork",
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Patch
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Workstationclusters$Create
    extends StandardParameters {
    /**
     * Required. Parent resource name.
     */
    parent?: string;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean;
    /**
     * Required. ID to use for the workstation cluster.
     */
    workstationClusterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkstationCluster;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Delete
    extends StandardParameters {
    /**
     * If set, the request will be rejected if the latest version of the workstation cluster on the server does not have this ETag.
     */
    etag?: string;
    /**
     * If set, any workstation configurations and workstations in the workstation cluster are also deleted. Otherwise, the request only works if the workstation cluster has no configurations or workstations.
     */
    force?: boolean;
    /**
     * Required. Name of the workstation cluster to delete.
     */
    name?: string;
    /**
     * If set, validate the request and preview the review, but do not apply it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Get
    extends StandardParameters {
    /**
     * Required. Name of the requested resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$List
    extends StandardParameters {
    /**
     * Maximum number of items to return.
     */
    pageSize?: number;
    /**
     * next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Patch
    extends StandardParameters {
    /**
     * If set, and the workstation cluster is not found, a new workstation cluster will be created. In this situation, update_mask is ignored.
     */
    allowMissing?: boolean;
    /**
     * Full name of this resource.
     */
    name?: string;
    /**
     * Required. Mask that specifies which fields in the workstation cluster should be updated.
     */
    updateMask?: string;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkstationCluster;
  }

  export class Resource$Projects$Locations$Workstationclusters$Workstationconfigs {
    context: APIRequestContext;
    workstations: Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.workstations =
        new Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations(
          this.context
        );
    }

    /**
     * Creates a new workstation configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.create(
     *       {
     *         // Required. Parent resource name.
     *         parent:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster',
     *         // If set, validate the request and preview the review, but do not actually apply it.
     *         validateOnly: 'placeholder-value',
     *         // Required. ID to use for the workstation configuration.
     *         workstationConfigId: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "annotations": {},
     *           //   "conditions": [],
     *           //   "container": {},
     *           //   "createTime": "my_createTime",
     *           //   "degraded": false,
     *           //   "deleteTime": "my_deleteTime",
     *           //   "displayName": "my_displayName",
     *           //   "enableAuditAgent": false,
     *           //   "encryptionKey": {},
     *           //   "etag": "my_etag",
     *           //   "host": {},
     *           //   "idleTimeout": "my_idleTimeout",
     *           //   "labels": {},
     *           //   "name": "my_name",
     *           //   "persistentDirectories": [],
     *           //   "readinessChecks": [],
     *           //   "reconciling": false,
     *           //   "runningTimeout": "my_runningTimeout",
     *           //   "uid": "my_uid",
     *           //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Create
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/workstationConfigs').replace(
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
     * Deletes the specified workstation configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.delete(
     *       {
     *         // If set, the request is rejected if the latest version of the workstation configuration on the server does not have this ETag.
     *         etag: 'placeholder-value',
     *         // If set, any workstations in the workstation configuration are also deleted. Otherwise, the request works only if the workstation configuration has no workstations.
     *         force: 'placeholder-value',
     *         // Required. Name of the workstation configuration to delete.
     *         name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig',
     *         // If set, validate the request and preview the review, but do not actually apply it.
     *         validateOnly: 'placeholder-value',
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
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Delete
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns the requested workstation configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.get(
     *       {
     *         // Required. Name of the requested resource.
     *         name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "conditions": [],
     *   //   "container": {},
     *   //   "createTime": "my_createTime",
     *   //   "degraded": false,
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "enableAuditAgent": false,
     *   //   "encryptionKey": {},
     *   //   "etag": "my_etag",
     *   //   "host": {},
     *   //   "idleTimeout": "my_idleTimeout",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "persistentDirectories": [],
     *   //   "readinessChecks": [],
     *   //   "reconciling": false,
     *   //   "runningTimeout": "my_runningTimeout",
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkstationConfig>;
    get(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WorkstationConfig>,
      callback: BodyResponseCallback<Schema$WorkstationConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Get,
      callback: BodyResponseCallback<Schema$WorkstationConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$WorkstationConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Get
        | BodyResponseCallback<Schema$WorkstationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkstationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkstationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$WorkstationConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WorkstationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkstationConfig>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.getIamPolicy(
     *       {
     *         // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *         'options.requestedPolicyVersion': 'placeholder-value',
     *         // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:getIamPolicy').replace(
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
     * Returns all workstation configurations in the specified cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.list(
     *       {
     *         // Maximum number of items to return.
     *         pageSize: 'placeholder-value',
     *         // next_page_token value returned from a previous List request, if any.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent resource name.
     *         parent:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "workstationConfigs": []
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkstationConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkstationConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListWorkstationConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$List,
      callback: BodyResponseCallback<Schema$ListWorkstationConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListWorkstationConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$List
        | BodyResponseCallback<Schema$ListWorkstationConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkstationConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkstationConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkstationConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/workstationConfigs').replace(
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
        createAPIRequest<Schema$ListWorkstationConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkstationConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.listUsable(
     *       {
     *         // Maximum number of items to return.
     *         pageSize: 'placeholder-value',
     *         // next_page_token value returned from a previous List request, if any.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent resource name.
     *         parent:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "workstationConfigs": []
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
    listUsable(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Listusable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listUsable(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Listusable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUsableWorkstationConfigsResponse>;
    listUsable(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Listusable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listUsable(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Listusable,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUsableWorkstationConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListUsableWorkstationConfigsResponse>
    ): void;
    listUsable(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Listusable,
      callback: BodyResponseCallback<Schema$ListUsableWorkstationConfigsResponse>
    ): void;
    listUsable(
      callback: BodyResponseCallback<Schema$ListUsableWorkstationConfigsResponse>
    ): void;
    listUsable(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Listusable
        | BodyResponseCallback<Schema$ListUsableWorkstationConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUsableWorkstationConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUsableWorkstationConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUsableWorkstationConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Listusable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Listusable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/workstationConfigs:listUsable'
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
        createAPIRequest<Schema$ListUsableWorkstationConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUsableWorkstationConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing workstation configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.patch(
     *       {
     *         // If set and the workstation configuration is not found, a new workstation configuration will be created. In this situation, update_mask is ignored.
     *         allowMissing: 'placeholder-value',
     *         // Full name of this resource.
     *         name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig',
     *         // Required. Mask specifying which fields in the workstation configuration should be updated.
     *         updateMask: 'placeholder-value',
     *         // If set, validate the request and preview the review, but do not actually apply it.
     *         validateOnly: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "annotations": {},
     *           //   "conditions": [],
     *           //   "container": {},
     *           //   "createTime": "my_createTime",
     *           //   "degraded": false,
     *           //   "deleteTime": "my_deleteTime",
     *           //   "displayName": "my_displayName",
     *           //   "enableAuditAgent": false,
     *           //   "encryptionKey": {},
     *           //   "etag": "my_etag",
     *           //   "host": {},
     *           //   "idleTimeout": "my_idleTimeout",
     *           //   "labels": {},
     *           //   "name": "my_name",
     *           //   "persistentDirectories": [],
     *           //   "readinessChecks": [],
     *           //   "reconciling": false,
     *           //   "runningTimeout": "my_runningTimeout",
     *           //   "uid": "my_uid",
     *           //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Patch
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.setIamPolicy(
     *       {
     *         // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "policy": {},
     *           //   "updateMask": "my_updateMask"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:setIamPolicy').replace(
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
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig',
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Create
    extends StandardParameters {
    /**
     * Required. Parent resource name.
     */
    parent?: string;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean;
    /**
     * Required. ID to use for the workstation configuration.
     */
    workstationConfigId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkstationConfig;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Delete
    extends StandardParameters {
    /**
     * If set, the request is rejected if the latest version of the workstation configuration on the server does not have this ETag.
     */
    etag?: string;
    /**
     * If set, any workstations in the workstation configuration are also deleted. Otherwise, the request works only if the workstation configuration has no workstations.
     */
    force?: boolean;
    /**
     * Required. Name of the workstation configuration to delete.
     */
    name?: string;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the requested resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$List
    extends StandardParameters {
    /**
     * Maximum number of items to return.
     */
    pageSize?: number;
    /**
     * next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Listusable
    extends StandardParameters {
    /**
     * Maximum number of items to return.
     */
    pageSize?: number;
    /**
     * next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Patch
    extends StandardParameters {
    /**
     * If set and the workstation configuration is not found, a new workstation configuration will be created. In this situation, update_mask is ignored.
     */
    allowMissing?: boolean;
    /**
     * Full name of this resource.
     */
    name?: string;
    /**
     * Required. Mask specifying which fields in the workstation configuration should be updated.
     */
    updateMask?: string;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkstationConfig;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Testiampermissions
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

  export class Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new workstation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.create(
     *       {
     *         // Required. Parent resource name.
     *         parent:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig',
     *         // If set, validate the request and preview the review, but do not actually apply it.
     *         validateOnly: 'placeholder-value',
     *         // Required. ID to use for the workstation.
     *         workstationId: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "annotations": {},
     *           //   "createTime": "my_createTime",
     *           //   "deleteTime": "my_deleteTime",
     *           //   "displayName": "my_displayName",
     *           //   "env": {},
     *           //   "etag": "my_etag",
     *           //   "host": "my_host",
     *           //   "labels": {},
     *           //   "name": "my_name",
     *           //   "reconciling": false,
     *           //   "state": "my_state",
     *           //   "uid": "my_uid",
     *           //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Create
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/workstations').replace(
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
     * Deletes the specified workstation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.delete(
     *       {
     *         // If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag.
     *         etag: 'placeholder-value',
     *         // Required. Name of the workstation to delete.
     *         name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig/workstations/my-workstation',
     *         // If set, validate the request and preview the review, but do not actually apply it.
     *         validateOnly: 'placeholder-value',
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
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Delete
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.generateAccessToken(
     *       {
     *         // Required. Name of the workstation for which the access token should be generated.
     *         workstation:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig/workstations/my-workstation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "expireTime": "my_expireTime",
     *           //   "ttl": "my_ttl"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessToken": "my_accessToken",
     *   //   "expireTime": "my_expireTime"
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
    generateAccessToken(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Generateaccesstoken,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateAccessToken(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Generateaccesstoken,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateAccessTokenResponse>;
    generateAccessToken(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Generateaccesstoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateAccessToken(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Generateaccesstoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>,
      callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void;
    generateAccessToken(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Generateaccesstoken,
      callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void;
    generateAccessToken(
      callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void;
    generateAccessToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Generateaccesstoken
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateAccessTokenResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Generateaccesstoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Generateaccesstoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+workstation}:generateAccessToken'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['workstation'],
        pathParams: ['workstation'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateAccessTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateAccessTokenResponse>(parameters);
      }
    }

    /**
     * Returns the requested workstation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.get(
     *       {
     *         // Required. Name of the requested resource.
     *         name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig/workstations/my-workstation',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "env": {},
     *   //   "etag": "my_etag",
     *   //   "host": "my_host",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "reconciling": false,
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Workstation>;
    get(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Workstation>,
      callback: BodyResponseCallback<Schema$Workstation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Get,
      callback: BodyResponseCallback<Schema$Workstation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Workstation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Get
        | BodyResponseCallback<Schema$Workstation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Workstation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Workstation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Workstation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Workstation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Workstation>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.getIamPolicy(
     *       {
     *         // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *         'options.requestedPolicyVersion': 'placeholder-value',
     *         // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig/workstations/my-workstation',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:getIamPolicy').replace(
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
     * Returns all Workstations using the specified workstation configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.list(
     *       {
     *         // Maximum number of items to return.
     *         pageSize: 'placeholder-value',
     *         // next_page_token value returned from a previous List request, if any.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent resource name.
     *         parent:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "workstations": []
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkstationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkstationsResponse>,
      callback: BodyResponseCallback<Schema$ListWorkstationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$List,
      callback: BodyResponseCallback<Schema$ListWorkstationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWorkstationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$List
        | BodyResponseCallback<Schema$ListWorkstationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkstationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkstationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkstationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/workstations').replace(
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
        createAPIRequest<Schema$ListWorkstationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkstationsResponse>(parameters);
      }
    }

    /**
     * Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.listUsable(
     *       {
     *         // Maximum number of items to return.
     *         pageSize: 'placeholder-value',
     *         // next_page_token value returned from a previous List request, if any.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent resource name.
     *         parent:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "workstations": []
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
    listUsable(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Listusable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listUsable(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Listusable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUsableWorkstationsResponse>;
    listUsable(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Listusable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listUsable(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Listusable,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUsableWorkstationsResponse>,
      callback: BodyResponseCallback<Schema$ListUsableWorkstationsResponse>
    ): void;
    listUsable(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Listusable,
      callback: BodyResponseCallback<Schema$ListUsableWorkstationsResponse>
    ): void;
    listUsable(
      callback: BodyResponseCallback<Schema$ListUsableWorkstationsResponse>
    ): void;
    listUsable(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Listusable
        | BodyResponseCallback<Schema$ListUsableWorkstationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUsableWorkstationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUsableWorkstationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUsableWorkstationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Listusable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Listusable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/workstations:listUsable'
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
        createAPIRequest<Schema$ListUsableWorkstationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUsableWorkstationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing workstation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.patch(
     *       {
     *         // If set and the workstation configuration is not found, a new workstation configuration is created. In this situation, update_mask is ignored.
     *         allowMissing: 'placeholder-value',
     *         // Full name of this resource.
     *         name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig/workstations/my-workstation',
     *         // Required. Mask specifying which fields in the workstation configuration should be updated.
     *         updateMask: 'placeholder-value',
     *         // If set, validate the request and preview the review, but do not actually apply it.
     *         validateOnly: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "annotations": {},
     *           //   "createTime": "my_createTime",
     *           //   "deleteTime": "my_deleteTime",
     *           //   "displayName": "my_displayName",
     *           //   "env": {},
     *           //   "etag": "my_etag",
     *           //   "host": "my_host",
     *           //   "labels": {},
     *           //   "name": "my_name",
     *           //   "reconciling": false,
     *           //   "state": "my_state",
     *           //   "uid": "my_uid",
     *           //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Patch
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.setIamPolicy(
     *       {
     *         // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig/workstations/my-workstation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "policy": {},
     *           //   "updateMask": "my_updateMask"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:setIamPolicy').replace(
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
     * Starts running a workstation so that users can connect to it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.start(
     *       {
     *         // Required. Name of the workstation to start.
     *         name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig/workstations/my-workstation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "validateOnly": false
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
    start(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Start,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    start(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    start(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Start,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Start,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(callback: BodyResponseCallback<Schema$Operation>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Start
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:start').replace(
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
     * Stops running a workstation, reducing costs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.stop(
     *       {
     *         // Required. Name of the workstation to stop.
     *         name: 'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig/workstations/my-workstation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "validateOnly": false
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
    stop(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    stop(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Stop,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Stop,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(callback: BodyResponseCallback<Schema$Operation>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Stop
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:stop').replace(
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workstations.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workstations = google.workstations('v1beta');
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
     *     await workstations.projects.locations.workstationClusters.workstationConfigs.workstations.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/workstationClusters/my-workstationCluster/workstationConfigs/my-workstationConfig/workstations/my-workstation',
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
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://workstations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Create
    extends StandardParameters {
    /**
     * Required. Parent resource name.
     */
    parent?: string;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean;
    /**
     * Required. ID to use for the workstation.
     */
    workstationId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Workstation;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Delete
    extends StandardParameters {
    /**
     * If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag.
     */
    etag?: string;
    /**
     * Required. Name of the workstation to delete.
     */
    name?: string;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Generateaccesstoken
    extends StandardParameters {
    /**
     * Required. Name of the workstation for which the access token should be generated.
     */
    workstation?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateAccessTokenRequest;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Get
    extends StandardParameters {
    /**
     * Required. Name of the requested resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$List
    extends StandardParameters {
    /**
     * Maximum number of items to return.
     */
    pageSize?: number;
    /**
     * next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Listusable
    extends StandardParameters {
    /**
     * Maximum number of items to return.
     */
    pageSize?: number;
    /**
     * next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Patch
    extends StandardParameters {
    /**
     * If set and the workstation configuration is not found, a new workstation configuration is created. In this situation, update_mask is ignored.
     */
    allowMissing?: boolean;
    /**
     * Full name of this resource.
     */
    name?: string;
    /**
     * Required. Mask specifying which fields in the workstation configuration should be updated.
     */
    updateMask?: string;
    /**
     * If set, validate the request and preview the review, but do not actually apply it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Workstation;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Start
    extends StandardParameters {
    /**
     * Required. Name of the workstation to start.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartWorkstationRequest;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Stop
    extends StandardParameters {
    /**
     * Required. Name of the workstation to stop.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopWorkstationRequest;
  }
  export interface Params$Resource$Projects$Locations$Workstationclusters$Workstationconfigs$Workstations$Testiampermissions
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
}
