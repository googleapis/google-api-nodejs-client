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

export namespace bigqueryreservation_v1 {
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
   * BigQuery Reservation API
   *
   * A service to modify your BigQuery reservations.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const bigqueryreservation = google.bigqueryreservation('v1');
   * ```
   */
  export class Bigqueryreservation {
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
   * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
   */
  export interface Schema$Assignment {
    /**
     * Optional. The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.
     */
    assignee?: string | null;
    /**
     * Optional. This field controls if "Gemini in BigQuery" (https://cloud.google.com/gemini/docs/bigquery/overview) features should be enabled for this reservation assignment, which is not on by default. "Gemini in BigQuery" has a distinct compliance posture from BigQuery. If this field is set to true, the assignment job type is QUERY, and the parent reservation edition is ENTERPRISE_PLUS, then the assignment will give the grantee project/organization access to "Gemini in BigQuery" features.
     */
    enableGeminiInBigquery?: boolean | null;
    /**
     * Optional. Which type of jobs will use the reservation.
     */
    jobType?: string | null;
    /**
     * Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.
     */
    name?: string | null;
    /**
     * Output only. State of the assignment.
     */
    state?: string | null;
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
   * Auto scaling settings.
   */
  export interface Schema$Autoscale {
    /**
     * Output only. The slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots]. Note: after users reduce max_slots, it may take a while before it can be propagated, so current_slots may stay in the original value and could be larger than max_slots for that brief period (less than one minute)
     */
    currentSlots?: string | null;
    /**
     * Optional. Number of slots to be scaled when needed.
     */
    maxSlots?: string | null;
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
   * Represents a BI Reservation.
   */
  export interface Schema$BiReservation {
    /**
     * Identifier. The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id\}/locations/{location_id\}/biReservation`.
     */
    name?: string | null;
    /**
     * Optional. Preferred tables to use BI capacity for.
     */
    preferredTables?: Schema$TableReference[];
    /**
     * Optional. Size of a reservation, in bytes.
     */
    size?: string | null;
    /**
     * Output only. The last update timestamp of a reservation.
     */
    updateTime?: string | null;
  }
  /**
   * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
   */
  export interface Schema$CapacityCommitment {
    /**
     * Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments. Note after renewal, commitment_end_time is the time the renewed commitment expires. So itwould be at a time after commitment_start_time + committed period, because we don't change commitment_start_time ,
     */
    commitmentEndTime?: string | null;
    /**
     * Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments. Note after the commitment is renewed, commitment_start_time won't be changed. It refers to the start time of the original commitment.
     */
    commitmentStartTime?: string | null;
    /**
     * Optional. Edition of the capacity commitment.
     */
    edition?: string | null;
    /**
     * Output only. For FAILED commitment plan, provides the reason of failure.
     */
    failureStatus?: Schema$Status;
    /**
     * Output only. If true, the commitment is a flat-rate commitment, otherwise, it's an edition commitment.
     */
    isFlatRate?: boolean | null;
    /**
     * Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.
     */
    multiRegionAuxiliary?: boolean | null;
    /**
     * Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    name?: string | null;
    /**
     * Optional. Capacity commitment commitment plan.
     */
    plan?: string | null;
    /**
     * Optional. The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL and TRIAL commitments.
     */
    renewalPlan?: string | null;
    /**
     * Optional. Number of slots in this commitment.
     */
    slotCount?: string | null;
    /**
     * Output only. State of the commitment.
     */
    state?: string | null;
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
   * The request for ReservationService.FailoverReservation.
   */
  export interface Schema$FailoverReservationRequest {
    /**
     * Optional. failover mode for the failover operation.
     */
    failoverMode?: string | null;
  }
  /**
   * The response for ReservationService.ListAssignments.
   */
  export interface Schema$ListAssignmentsResponse {
    /**
     * List of assignments visible to the user.
     */
    assignments?: Schema$Assignment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for ReservationService.ListCapacityCommitments.
   */
  export interface Schema$ListCapacityCommitmentsResponse {
    /**
     * List of capacity commitments visible to the user.
     */
    capacityCommitments?: Schema$CapacityCommitment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for ReservationService.ListReservationGroups.
   */
  export interface Schema$ListReservationGroupsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of reservations visible to the user.
     */
    reservationGroups?: Schema$ReservationGroup[];
  }
  /**
   * The response for ReservationService.ListReservations.
   */
  export interface Schema$ListReservationsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of reservations visible to the user.
     */
    reservations?: Schema$Reservation[];
  }
  /**
   * The request for ReservationService.MergeCapacityCommitments.
   */
  export interface Schema$MergeCapacityCommitmentsRequest {
    /**
     * Optional. The optional resulting capacity commitment ID. Capacity commitment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character cannot be a dash. Max length is 64 characters.
     */
    capacityCommitmentId?: string | null;
    /**
     * Ids of capacity commitments to merge. These capacity commitments must exist under admin project and location specified in the parent. ID is the last portion of capacity commitment name e.g., 'abc' for projects/myproject/locations/US/capacityCommitments/abc
     */
    capacityCommitmentIds?: string[] | null;
  }
  /**
   * The request for ReservationService.MoveAssignment. **Note**: "bigquery.reservationAssignments.create" permission is required on the destination_id. **Note**: "bigquery.reservationAssignments.create" and "bigquery.reservationAssignments.delete" permission are required on the related assignee.
   */
  export interface Schema$MoveAssignmentRequest {
    /**
     * The optional assignment ID. A new assignment name is generated if this field is empty. This field can contain only lowercase alphanumeric characters or dashes. Max length is 64 characters.
     */
    assignmentId?: string | null;
    /**
     * The new reservation ID, e.g.: `projects/myotherproject/locations/US/reservations/team2-prod`
     */
    destinationId?: string | null;
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
   * Disaster Recovery(DR) replication status of the reservation.
   */
  export interface Schema$ReplicationStatus {
    /**
     * Output only. The last error encountered while trying to replicate changes from the primary to the secondary. This field is only available if the replication has not succeeded since.
     */
    error?: Schema$Status;
    /**
     * Output only. The time at which the last error was encountered while trying to replicate changes from the primary to the secondary. This field is only available if the replication has not succeeded since.
     */
    lastErrorTime?: string | null;
    /**
     * Output only. A timestamp corresponding to the last change on the primary that was successfully replicated to the secondary.
     */
    lastReplicationTime?: string | null;
    /**
     * Output only. The time at which a soft failover for the reservation and its associated datasets was initiated. After this field is set, all subsequent changes to the reservation will be rejected unless a hard failover overrides this operation. This field will be cleared once the failover is complete.
     */
    softFailoverStartTime?: string | null;
  }
  /**
   * A reservation is a mechanism used to guarantee slots to users.
   */
  export interface Schema$Reservation {
    /**
     * Optional. The configuration parameters for the auto scaling feature.
     */
    autoscale?: Schema$Autoscale;
    /**
     * Optional. Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as target job concurrency in the Information Schema, DDL and BigQuery CLI.
     */
    concurrency?: string | null;
    /**
     * Output only. Creation time of the reservation.
     */
    creationTime?: string | null;
    /**
     * Optional. Edition of the reservation.
     */
    edition?: string | null;
    /**
     * Optional. If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most.
     */
    ignoreIdleSlots?: boolean | null;
    /**
     * Optional. The labels associated with this reservation. You can use these to organize and group your reservations. You can set this property when you create or update a reservation.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The overall max slots for the reservation, covering slot_capacity (baseline), idle slots (if ignore_idle_slots is false) and scaled slots. If present, the reservation won't use more than the specified number of slots, even if there is demand and supply (from idle slots). NOTE: capping a reservation's idle slot usage is best effort and its usage may exceed the max_slots value. However, in terms of autoscale.current_slots (which accounts for the additional added slots), it will never exceed the max_slots - baseline. This field must be set together with the scaling_mode enum value, otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. If the max_slots and scaling_mode are set, the autoscale or autoscale.max_slots field must be unset. Otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. However, the autoscale field may still be in the output. The autopscale.max_slots will always show as 0 and the autoscaler.current_slots will represent the current slots from autoscaler excluding idle slots. For example, if the max_slots is 1000 and scaling_mode is AUTOSCALE_ONLY, then in the output, the autoscaler.max_slots will be 0 and the autoscaler.current_slots may be any value between 0 and 1000. If the max_slots is 1000, scaling_mode is ALL_SLOTS, the baseline is 100 and idle slots usage is 200, then in the output, the autoscaler.max_slots will be 0 and the autoscaler.current_slots will not be higher than 700. If the max_slots is 1000, scaling_mode is IDLE_SLOTS_ONLY, then in the output, the autoscaler field will be null. If the max_slots and scaling_mode are set, then the ignore_idle_slots field must be aligned with the scaling_mode enum value.(See details in ScalingMode comments). Otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. Please note, the max_slots is for user to manage the part of slots greater than the baseline. Therefore, we don't allow users to set max_slots smaller or equal to the baseline as it will not be meaningful. If the field is present and slot_capacity\>=max_slots, requests will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. Please note that if max_slots is set to 0, we will treat it as unset. Customers can set max_slots to 0 and set scaling_mode to SCALING_MODE_UNSPECIFIED to disable the max_slots feature.
     */
    maxSlots?: string | null;
    /**
     * Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.
     */
    multiRegionAuxiliary?: boolean | null;
    /**
     * Identifier. The resource name of the reservation, e.g., `projects/x/locations/x/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    name?: string | null;
    /**
     * Output only. The location where the reservation was originally created. This is set only during the failover reservation's creation. All billing charges for the failover reservation will be applied to this location.
     */
    originalPrimaryLocation?: string | null;
    /**
     * Output only. The current location of the reservation's primary replica. This field is only set for reservations using the managed disaster recovery feature.
     */
    primaryLocation?: string | null;
    /**
     * Output only. The Disaster Recovery(DR) replication status of the reservation. This is only available for the primary replicas of DR/failover reservations and provides information about the both the staleness of the secondary and the last error encountered while trying to replicate changes from the primary to the secondary. If this field is blank, it means that the reservation is either not a DR reservation or the reservation is a DR secondary or that any replication operations on the reservation have succeeded.
     */
    replicationStatus?: Schema$ReplicationStatus;
    /**
     * Optional. The reservation group that this reservation belongs to. You can set this property when you create or update a reservation. Reservations do not need to belong to a reservation group. Format: projects/{project\}/locations/{location\}/reservationGroups/{reservation_group\} or just {reservation_group\}
     */
    reservationGroup?: string | null;
    /**
     * Optional. The scaling mode for the reservation. If the field is present but max_slots is not present, requests will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`.
     */
    scalingMode?: string | null;
    /**
     * Optional. The current location of the reservation's secondary replica. This field is only set for reservations using the managed disaster recovery feature. Users can set this in create reservation calls to create a failover reservation or in update reservation calls to convert a non-failover reservation to a failover reservation(or vice versa).
     */
    secondaryLocation?: string | null;
    /**
     * Optional. Baseline slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false, or autoscaling is enabled. The total slot_capacity of the reservation and its siblings may exceed the total slot_count of capacity commitments. In that case, the exceeding slots will be charged with the autoscale SKU. You can increase the number of baseline slots in a reservation every few minutes. If you want to decrease your baseline slots, you are limited to once an hour if you have recently changed your baseline slot capacity and your baseline slots exceed your committed slots. Otherwise, you can decrease your baseline slots every few minutes.
     */
    slotCapacity?: string | null;
    /**
     * Output only. Last update time of the reservation.
     */
    updateTime?: string | null;
  }
  /**
   * A reservation group is a container for reservations.
   */
  export interface Schema$ReservationGroup {
    /**
     * Identifier. The resource name of the reservation group, e.g., `projects/x/locations/x/reservationGroups/team1-prod`. The reservation_group_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    name?: string | null;
  }
  /**
   * The response for ReservationService.SearchAllAssignments.
   */
  export interface Schema$SearchAllAssignmentsResponse {
    /**
     * List of assignments visible to the user.
     */
    assignments?: Schema$Assignment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for ReservationService.SearchAssignments.
   */
  export interface Schema$SearchAssignmentsResponse {
    /**
     * List of assignments visible to the user.
     */
    assignments?: Schema$Assignment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
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
   * The request for ReservationService.SplitCapacityCommitment.
   */
  export interface Schema$SplitCapacityCommitmentRequest {
    /**
     * Number of slots in the capacity commitment after the split.
     */
    slotCount?: string | null;
  }
  /**
   * The response for ReservationService.SplitCapacityCommitment.
   */
  export interface Schema$SplitCapacityCommitmentResponse {
    /**
     * First capacity commitment, result of a split.
     */
    first?: Schema$CapacityCommitment;
    /**
     * Second capacity commitment, result of a split.
     */
    second?: Schema$CapacityCommitment;
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
   * Fully qualified reference to BigQuery table. Internally stored as google.cloud.bi.v1.BqTableReference.
   */
  export interface Schema$TableReference {
    /**
     * Optional. The ID of the dataset in the above project.
     */
    datasetId?: string | null;
    /**
     * Optional. The assigned project ID of the project.
     */
    projectId?: string | null;
    /**
     * Optional. The ID of the table in the above dataset.
     */
    tableId?: string | null;
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
    capacityCommitments: Resource$Projects$Locations$Capacitycommitments;
    reservationGroups: Resource$Projects$Locations$Reservationgroups;
    reservations: Resource$Projects$Locations$Reservations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.capacityCommitments =
        new Resource$Projects$Locations$Capacitycommitments(this.context);
      this.reservationGroups =
        new Resource$Projects$Locations$Reservationgroups(this.context);
      this.reservations = new Resource$Projects$Locations$Reservations(
        this.context
      );
    }

    /**
     * Retrieves a BI reservation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigqueryreservation.projects.locations.getBiReservation({
     *     // Required. Name of the requested reservation, for example: `projects/{project_id\}/locations/{location_id\}/biReservation`
     *     name: 'projects/my-project/locations/my-location/biReservation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "preferredTables": [],
     *   //   "size": "my_size",
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
    getBiReservation(
      params: Params$Resource$Projects$Locations$Getbireservation,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getBiReservation(
      params?: Params$Resource$Projects$Locations$Getbireservation,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BiReservation>>;
    getBiReservation(
      params: Params$Resource$Projects$Locations$Getbireservation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getBiReservation(
      params: Params$Resource$Projects$Locations$Getbireservation,
      options: MethodOptions | BodyResponseCallback<Schema$BiReservation>,
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    getBiReservation(
      params: Params$Resource$Projects$Locations$Getbireservation,
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    getBiReservation(
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    getBiReservation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getbireservation
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BiReservation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getbireservation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getbireservation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
        createAPIRequest<Schema$BiReservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BiReservation>(parameters);
      }
    }

    /**
     * Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project-\>folder-\>organization) happens in this API. 3. Parent here is `projects/x/locations/x`, instead of `projects/x/locations/xreservations/x`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigqueryreservation.projects.locations.searchAllAssignments(
     *     {
     *       // The maximum number of items to return per page.
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from a previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name with location (project name could be the wildcard '-'), e.g.: `projects/-/locations/US`.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
     *       query: 'placeholder-value',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignments": [],
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
    searchAllAssignments(
      params: Params$Resource$Projects$Locations$Searchallassignments,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    searchAllAssignments(
      params?: Params$Resource$Projects$Locations$Searchallassignments,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchAllAssignmentsResponse>>;
    searchAllAssignments(
      params: Params$Resource$Projects$Locations$Searchallassignments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchAllAssignments(
      params: Params$Resource$Projects$Locations$Searchallassignments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchAllAssignmentsResponse>,
      callback: BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
    ): void;
    searchAllAssignments(
      params: Params$Resource$Projects$Locations$Searchallassignments,
      callback: BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
    ): void;
    searchAllAssignments(
      callback: BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
    ): void;
    searchAllAssignments(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Searchallassignments
        | BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchAllAssignmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchAllAssignmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Searchallassignments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Searchallassignments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:searchAllAssignments').replace(
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
        createAPIRequest<Schema$SearchAllAssignmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchAllAssignmentsResponse>(
          parameters
        );
      }
    }

    /**
     * Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project-\>folder-\>organization) happens in this API. 3. Parent here is `projects/x/locations/x`, instead of `projects/x/locations/xreservations/x`. **Note** "-" cannot be used for projects nor locations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigqueryreservation.projects.locations.searchAssignments({
     *     // The maximum number of items to return per page.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the admin project(containing project and location), e.g.: `projects/myproject/locations/US`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignments": [],
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
    searchAssignments(
      params: Params$Resource$Projects$Locations$Searchassignments,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    searchAssignments(
      params?: Params$Resource$Projects$Locations$Searchassignments,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchAssignmentsResponse>>;
    searchAssignments(
      params: Params$Resource$Projects$Locations$Searchassignments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchAssignments(
      params: Params$Resource$Projects$Locations$Searchassignments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>,
      callback: BodyResponseCallback<Schema$SearchAssignmentsResponse>
    ): void;
    searchAssignments(
      params: Params$Resource$Projects$Locations$Searchassignments,
      callback: BodyResponseCallback<Schema$SearchAssignmentsResponse>
    ): void;
    searchAssignments(
      callback: BodyResponseCallback<Schema$SearchAssignmentsResponse>
    ): void;
    searchAssignments(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Searchassignments
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchAssignmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchAssignmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Searchassignments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Searchassignments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:searchAssignments').replace(
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
        createAPIRequest<Schema$SearchAssignmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchAssignmentsResponse>(parameters);
      }
    }

    /**
     * Updates a BI reservation. Only fields specified in the `field_mask` are updated. A singleton BI reservation always exists with default size 0. In order to reserve BI capacity it needs to be updated to an amount greater than 0. In order to release BI capacity reservation size must be set to 0.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigqueryreservation.projects.locations.updateBiReservation({
     *     // Identifier. The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id\}/locations/{location_id\}/biReservation`.
     *     name: 'projects/my-project/locations/my-location/biReservation',
     *     // A list of fields to be updated in this request.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "preferredTables": [],
     *       //   "size": "my_size",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "preferredTables": [],
     *   //   "size": "my_size",
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
    updateBiReservation(
      params: Params$Resource$Projects$Locations$Updatebireservation,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateBiReservation(
      params?: Params$Resource$Projects$Locations$Updatebireservation,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BiReservation>>;
    updateBiReservation(
      params: Params$Resource$Projects$Locations$Updatebireservation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateBiReservation(
      params: Params$Resource$Projects$Locations$Updatebireservation,
      options: MethodOptions | BodyResponseCallback<Schema$BiReservation>,
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    updateBiReservation(
      params: Params$Resource$Projects$Locations$Updatebireservation,
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    updateBiReservation(
      callback: BodyResponseCallback<Schema$BiReservation>
    ): void;
    updateBiReservation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Updatebireservation
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BiReservation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BiReservation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Updatebireservation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Updatebireservation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
        createAPIRequest<Schema$BiReservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BiReservation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Getbireservation
    extends StandardParameters {
    /**
     * Required. Name of the requested reservation, for example: `projects/{project_id\}/locations/{location_id\}/biReservation`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Searchallassignments
    extends StandardParameters {
    /**
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name with location (project name could be the wildcard '-'), e.g.: `projects/-/locations/US`.
     */
    parent?: string;
    /**
     * Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
     */
    query?: string;
  }
  export interface Params$Resource$Projects$Locations$Searchassignments
    extends StandardParameters {
    /**
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the admin project(containing project and location), e.g.: `projects/myproject/locations/US`.
     */
    parent?: string;
    /**
     * Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
     */
    query?: string;
  }
  export interface Params$Resource$Projects$Locations$Updatebireservation
    extends StandardParameters {
    /**
     * Identifier. The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id\}/locations/{location_id\}/biReservation`.
     */
    name?: string;
    /**
     * A list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BiReservation;
  }

  export class Resource$Projects$Locations$Capacitycommitments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new capacity commitment resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.capacityCommitments.create({
     *       // The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split or merged.
     *       capacityCommitmentId: 'placeholder-value',
     *       // If true, fail the request if another project in the organization has a capacity commitment.
     *       enforceSingleAdminProjectPerOrg: 'placeholder-value',
     *       // Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
     *       parent: 'projects/my-project/locations/my-location',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "commitmentEndTime": "my_commitmentEndTime",
     *         //   "commitmentStartTime": "my_commitmentStartTime",
     *         //   "edition": "my_edition",
     *         //   "failureStatus": {},
     *         //   "isFlatRate": false,
     *         //   "multiRegionAuxiliary": false,
     *         //   "name": "my_name",
     *         //   "plan": "my_plan",
     *         //   "renewalPlan": "my_renewalPlan",
     *         //   "slotCount": "my_slotCount",
     *         //   "state": "my_state"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commitmentEndTime": "my_commitmentEndTime",
     *   //   "commitmentStartTime": "my_commitmentStartTime",
     *   //   "edition": "my_edition",
     *   //   "failureStatus": {},
     *   //   "isFlatRate": false,
     *   //   "multiRegionAuxiliary": false,
     *   //   "name": "my_name",
     *   //   "plan": "my_plan",
     *   //   "renewalPlan": "my_renewalPlan",
     *   //   "slotCount": "my_slotCount",
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CapacityCommitment>>;
    create(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CapacityCommitment>,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Create,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    create(callback: BodyResponseCallback<Schema$CapacityCommitment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Create
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CapacityCommitment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/capacityCommitments').replace(
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
        createAPIRequest<Schema$CapacityCommitment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * Deletes a capacity commitment. Attempting to delete capacity commitment before its commitment_end_time will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.capacityCommitments.delete({
     *       // Can be used to force delete commitments even if assignments exist. Deleting commitments with assignments may cause queries to fail if they no longer have access to slots.
     *       force: 'placeholder-value',
     *       // Required. Resource name of the capacity commitment to delete. E.g., `projects/myproject/locations/US/capacityCommitments/123`
     *       name: 'projects/my-project/locations/my-location/capacityCommitments/my-capacityCommitment',
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
      params: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Delete
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
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
     * Returns information about the capacity commitment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.capacityCommitments.get({
     *       // Required. Resource name of the capacity commitment to retrieve. E.g., `projects/myproject/locations/US/capacityCommitments/123`
     *       name: 'projects/my-project/locations/my-location/capacityCommitments/my-capacityCommitment',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commitmentEndTime": "my_commitmentEndTime",
     *   //   "commitmentStartTime": "my_commitmentStartTime",
     *   //   "edition": "my_edition",
     *   //   "failureStatus": {},
     *   //   "isFlatRate": false,
     *   //   "multiRegionAuxiliary": false,
     *   //   "name": "my_name",
     *   //   "plan": "my_plan",
     *   //   "renewalPlan": "my_renewalPlan",
     *   //   "slotCount": "my_slotCount",
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CapacityCommitment>>;
    get(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CapacityCommitment>,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Get,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    get(callback: BodyResponseCallback<Schema$CapacityCommitment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Get
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CapacityCommitment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
        createAPIRequest<Schema$CapacityCommitment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * Lists all the capacity commitments for the admin project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.capacityCommitments.list({
     *       // The maximum number of items to return.
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from a previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "capacityCommitments": [],
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
      params: Params$Resource$Projects$Locations$Capacitycommitments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCapacityCommitmentsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Capacitycommitments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Capacitycommitments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>,
      callback: BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Capacitycommitments$List,
      callback: BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$List
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCapacityCommitmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCapacityCommitmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/capacityCommitments').replace(
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
        createAPIRequest<Schema$ListCapacityCommitmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCapacityCommitmentsResponse>(
          parameters
        );
      }
    }

    /**
     * Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.capacityCommitments.merge({
     *       // Parent resource that identifies admin project and location e.g., `projects/myproject/locations/us`
     *       parent: 'projects/my-project/locations/my-location',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "capacityCommitmentId": "my_capacityCommitmentId",
     *         //   "capacityCommitmentIds": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commitmentEndTime": "my_commitmentEndTime",
     *   //   "commitmentStartTime": "my_commitmentStartTime",
     *   //   "edition": "my_edition",
     *   //   "failureStatus": {},
     *   //   "isFlatRate": false,
     *   //   "multiRegionAuxiliary": false,
     *   //   "name": "my_name",
     *   //   "plan": "my_plan",
     *   //   "renewalPlan": "my_renewalPlan",
     *   //   "slotCount": "my_slotCount",
     *   //   "state": "my_state"
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
    merge(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    merge(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CapacityCommitment>>;
    merge(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    merge(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      options: MethodOptions | BodyResponseCallback<Schema$CapacityCommitment>,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    merge(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Merge,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    merge(callback: BodyResponseCallback<Schema$CapacityCommitment>): void;
    merge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Merge
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CapacityCommitment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Merge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Merge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/capacityCommitments:merge').replace(
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
        createAPIRequest<Schema$CapacityCommitment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * Updates an existing capacity commitment. Only `plan` and `renewal_plan` fields can be updated. Plan can only be changed to a plan of a longer commitment period. Attempting to change to a plan with shorter commitment period will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.capacityCommitments.patch({
     *       // Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     *       name: 'projects/my-project/locations/my-location/capacityCommitments/my-capacityCommitment',
     *       // Standard field mask for the set of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "commitmentEndTime": "my_commitmentEndTime",
     *         //   "commitmentStartTime": "my_commitmentStartTime",
     *         //   "edition": "my_edition",
     *         //   "failureStatus": {},
     *         //   "isFlatRate": false,
     *         //   "multiRegionAuxiliary": false,
     *         //   "name": "my_name",
     *         //   "plan": "my_plan",
     *         //   "renewalPlan": "my_renewalPlan",
     *         //   "slotCount": "my_slotCount",
     *         //   "state": "my_state"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commitmentEndTime": "my_commitmentEndTime",
     *   //   "commitmentStartTime": "my_commitmentStartTime",
     *   //   "edition": "my_edition",
     *   //   "failureStatus": {},
     *   //   "isFlatRate": false,
     *   //   "multiRegionAuxiliary": false,
     *   //   "name": "my_name",
     *   //   "plan": "my_plan",
     *   //   "renewalPlan": "my_renewalPlan",
     *   //   "slotCount": "my_slotCount",
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CapacityCommitment>>;
    patch(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CapacityCommitment>,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Patch,
      callback: BodyResponseCallback<Schema$CapacityCommitment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CapacityCommitment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Patch
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CapacityCommitment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CapacityCommitment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
        createAPIRequest<Schema$CapacityCommitment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CapacityCommitment>(parameters);
      }
    }

    /**
     * Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.capacityCommitments.split({
     *       // Required. The resource name e.g.,: `projects/myproject/locations/US/capacityCommitments/123`
     *       name: 'projects/my-project/locations/my-location/capacityCommitments/my-capacityCommitment',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "slotCount": "my_slotCount"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "first": {},
     *   //   "second": {}
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
    split(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    split(
      params?: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SplitCapacityCommitmentResponse>>;
    split(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    split(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>,
      callback: BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
    ): void;
    split(
      params: Params$Resource$Projects$Locations$Capacitycommitments$Split,
      callback: BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
    ): void;
    split(
      callback: BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
    ): void;
    split(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Capacitycommitments$Split
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SplitCapacityCommitmentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SplitCapacityCommitmentResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Capacitycommitments$Split;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Capacitycommitments$Split;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:split').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SplitCapacityCommitmentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SplitCapacityCommitmentResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Capacitycommitments$Create
    extends StandardParameters {
    /**
     * The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split or merged.
     */
    capacityCommitmentId?: string;
    /**
     * If true, fail the request if another project in the organization has a capacity commitment.
     */
    enforceSingleAdminProjectPerOrg?: boolean;
    /**
     * Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CapacityCommitment;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Delete
    extends StandardParameters {
    /**
     * Can be used to force delete commitments even if assignments exist. Deleting commitments with assignments may cause queries to fail if they no longer have access to slots.
     */
    force?: boolean;
    /**
     * Required. Resource name of the capacity commitment to delete. E.g., `projects/myproject/locations/US/capacityCommitments/123`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the capacity commitment to retrieve. E.g., `projects/myproject/locations/US/capacityCommitments/123`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Merge
    extends StandardParameters {
    /**
     * Parent resource that identifies admin project and location e.g., `projects/myproject/locations/us`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MergeCapacityCommitmentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    name?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CapacityCommitment;
  }
  export interface Params$Resource$Projects$Locations$Capacitycommitments$Split
    extends StandardParameters {
    /**
     * Required. The resource name e.g.,: `projects/myproject/locations/US/capacityCommitments/123`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SplitCapacityCommitmentRequest;
  }

  export class Resource$Projects$Locations$Reservationgroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new reservation group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservationGroups.create({
     *       // Required. Project, location. E.g., `projects/myproject/locations/US`
     *       parent: 'projects/my-project/locations/my-location',
     *       // Required. The reservation group ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     *       reservationGroupId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Reservationgroups$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Reservationgroups$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReservationGroup>>;
    create(
      params: Params$Resource$Projects$Locations$Reservationgroups$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reservationgroups$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ReservationGroup>,
      callback: BodyResponseCallback<Schema$ReservationGroup>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reservationgroups$Create,
      callback: BodyResponseCallback<Schema$ReservationGroup>
    ): void;
    create(callback: BodyResponseCallback<Schema$ReservationGroup>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservationgroups$Create
        | BodyResponseCallback<Schema$ReservationGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReservationGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReservationGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReservationGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservationgroups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservationgroups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/reservationGroups').replace(
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
        createAPIRequest<Schema$ReservationGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReservationGroup>(parameters);
      }
    }

    /**
     * Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservationGroups.delete({
     *       // Required. Resource name of the reservation group to retrieve. E.g., `projects/myproject/locations/US/reservationGroups/team1-prod`
     *       name: 'projects/my-project/locations/my-location/reservationGroups/my-reservationGroup',
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
      params: Params$Resource$Projects$Locations$Reservationgroups$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Reservationgroups$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Reservationgroups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservationgroups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservationgroups$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservationgroups$Delete
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
        {}) as Params$Resource$Projects$Locations$Reservationgroups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservationgroups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
     * Returns information about the reservation group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservationGroups.get({
     *       // Required. Resource name of the reservation group to retrieve. E.g., `projects/myproject/locations/US/reservationGroups/team1-prod`
     *       name: 'projects/my-project/locations/my-location/reservationGroups/my-reservationGroup',
     *     });
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
      params: Params$Resource$Projects$Locations$Reservationgroups$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Reservationgroups$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReservationGroup>>;
    get(
      params: Params$Resource$Projects$Locations$Reservationgroups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reservationgroups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReservationGroup>,
      callback: BodyResponseCallback<Schema$ReservationGroup>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reservationgroups$Get,
      callback: BodyResponseCallback<Schema$ReservationGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReservationGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservationgroups$Get
        | BodyResponseCallback<Schema$ReservationGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReservationGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReservationGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReservationGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservationgroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservationgroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
        createAPIRequest<Schema$ReservationGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReservationGroup>(parameters);
      }
    }

    /**
     * Lists all the reservation groups for the project in the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservationGroups.list({
     *       // The maximum number of items to return per page.
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from a previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reservationGroups": []
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
      params: Params$Resource$Projects$Locations$Reservationgroups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Reservationgroups$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReservationGroupsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Reservationgroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservationgroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReservationGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListReservationGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservationgroups$List,
      callback: BodyResponseCallback<Schema$ListReservationGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListReservationGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservationgroups$List
        | BodyResponseCallback<Schema$ListReservationGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReservationGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReservationGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReservationGroupsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservationgroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservationgroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/reservationGroups').replace(
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
        createAPIRequest<Schema$ListReservationGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReservationGroupsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reservationgroups$Create
    extends StandardParameters {
    /**
     * Required. Project, location. E.g., `projects/myproject/locations/US`
     */
    parent?: string;
    /**
     * Required. The reservation group ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    reservationGroupId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReservationGroup;
  }
  export interface Params$Resource$Projects$Locations$Reservationgroups$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the reservation group to retrieve. E.g., `projects/myproject/locations/US/reservationGroups/team1-prod`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservationgroups$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the reservation group to retrieve. E.g., `projects/myproject/locations/US/reservationGroups/team1-prod`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservationgroups$List
    extends StandardParameters {
    /**
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Reservations {
    context: APIRequestContext;
    assignments: Resource$Projects$Locations$Reservations$Assignments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assignments =
        new Resource$Projects$Locations$Reservations$Assignments(this.context);
    }

    /**
     * Creates a new reservation resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigqueryreservation.projects.locations.reservations.create({
     *     // Required. Project, location. E.g., `projects/myproject/locations/US`
     *     parent: 'projects/my-project/locations/my-location',
     *     // The reservation ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     *     reservationId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoscale": {},
     *       //   "concurrency": "my_concurrency",
     *       //   "creationTime": "my_creationTime",
     *       //   "edition": "my_edition",
     *       //   "ignoreIdleSlots": false,
     *       //   "labels": {},
     *       //   "maxSlots": "my_maxSlots",
     *       //   "multiRegionAuxiliary": false,
     *       //   "name": "my_name",
     *       //   "originalPrimaryLocation": "my_originalPrimaryLocation",
     *       //   "primaryLocation": "my_primaryLocation",
     *       //   "replicationStatus": {},
     *       //   "reservationGroup": "my_reservationGroup",
     *       //   "scalingMode": "my_scalingMode",
     *       //   "secondaryLocation": "my_secondaryLocation",
     *       //   "slotCapacity": "my_slotCapacity",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoscale": {},
     *   //   "concurrency": "my_concurrency",
     *   //   "creationTime": "my_creationTime",
     *   //   "edition": "my_edition",
     *   //   "ignoreIdleSlots": false,
     *   //   "labels": {},
     *   //   "maxSlots": "my_maxSlots",
     *   //   "multiRegionAuxiliary": false,
     *   //   "name": "my_name",
     *   //   "originalPrimaryLocation": "my_originalPrimaryLocation",
     *   //   "primaryLocation": "my_primaryLocation",
     *   //   "replicationStatus": {},
     *   //   "reservationGroup": "my_reservationGroup",
     *   //   "scalingMode": "my_scalingMode",
     *   //   "secondaryLocation": "my_secondaryLocation",
     *   //   "slotCapacity": "my_slotCapacity",
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
    create(
      params: Params$Resource$Projects$Locations$Reservations$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Reservations$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Reservation>>;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Reservation>,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Create,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Reservation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Create
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Reservation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/reservations').replace(
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
        createAPIRequest<Schema$Reservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }

    /**
     * Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigqueryreservation.projects.locations.reservations.delete({
     *     // Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     *     name: 'projects/my-project/locations/my-location/reservations/my-reservation',
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
      params: Params$Resource$Projects$Locations$Reservations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Reservations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Delete
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
        {}) as Params$Resource$Projects$Locations$Reservations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
     * Fail over a reservation to the secondary location. The operation should be done in the current secondary location, which will be promoted to the new primary location for the reservation. Attempting to failover a reservation in the current primary location will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.failoverReservation(
     *       {
     *         // Required. Resource name of the reservation to failover. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     *         name: 'projects/my-project/locations/my-location/reservations/my-reservation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "failoverMode": "my_failoverMode"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoscale": {},
     *   //   "concurrency": "my_concurrency",
     *   //   "creationTime": "my_creationTime",
     *   //   "edition": "my_edition",
     *   //   "ignoreIdleSlots": false,
     *   //   "labels": {},
     *   //   "maxSlots": "my_maxSlots",
     *   //   "multiRegionAuxiliary": false,
     *   //   "name": "my_name",
     *   //   "originalPrimaryLocation": "my_originalPrimaryLocation",
     *   //   "primaryLocation": "my_primaryLocation",
     *   //   "replicationStatus": {},
     *   //   "reservationGroup": "my_reservationGroup",
     *   //   "scalingMode": "my_scalingMode",
     *   //   "secondaryLocation": "my_secondaryLocation",
     *   //   "slotCapacity": "my_slotCapacity",
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
    failoverReservation(
      params: Params$Resource$Projects$Locations$Reservations$Failoverreservation,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    failoverReservation(
      params?: Params$Resource$Projects$Locations$Reservations$Failoverreservation,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Reservation>>;
    failoverReservation(
      params: Params$Resource$Projects$Locations$Reservations$Failoverreservation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    failoverReservation(
      params: Params$Resource$Projects$Locations$Reservations$Failoverreservation,
      options: MethodOptions | BodyResponseCallback<Schema$Reservation>,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    failoverReservation(
      params: Params$Resource$Projects$Locations$Reservations$Failoverreservation,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    failoverReservation(
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    failoverReservation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Failoverreservation
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Reservation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Failoverreservation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Failoverreservation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:failoverReservation').replace(
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
        createAPIRequest<Schema$Reservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }

    /**
     * Returns information about the reservation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigqueryreservation.projects.locations.reservations.get({
     *     // Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     *     name: 'projects/my-project/locations/my-location/reservations/my-reservation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoscale": {},
     *   //   "concurrency": "my_concurrency",
     *   //   "creationTime": "my_creationTime",
     *   //   "edition": "my_edition",
     *   //   "ignoreIdleSlots": false,
     *   //   "labels": {},
     *   //   "maxSlots": "my_maxSlots",
     *   //   "multiRegionAuxiliary": false,
     *   //   "name": "my_name",
     *   //   "originalPrimaryLocation": "my_originalPrimaryLocation",
     *   //   "primaryLocation": "my_primaryLocation",
     *   //   "replicationStatus": {},
     *   //   "reservationGroup": "my_reservationGroup",
     *   //   "scalingMode": "my_scalingMode",
     *   //   "secondaryLocation": "my_secondaryLocation",
     *   //   "slotCapacity": "my_slotCapacity",
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
      params: Params$Resource$Projects$Locations$Reservations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Reservations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Reservation>>;
    get(
      params: Params$Resource$Projects$Locations$Reservations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reservations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Reservation>,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reservations$Get,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Reservation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Get
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Reservation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
        createAPIRequest<Schema$Reservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Reservations - ReservationAssignments To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.getIamPolicy` to get policies on reservations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.getIamPolicy({
     *       // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/reservations/my-reservation',
     *     });
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
      params: Params$Resource$Projects$Locations$Reservations$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Reservations$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Getiampolicy
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
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
     * Lists all the reservations for the project in the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigqueryreservation.projects.locations.reservations.list({
     *     // The maximum number of items to return per page.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reservations": []
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
      params: Params$Resource$Projects$Locations$Reservations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Reservations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReservationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReservationsResponse>,
      callback: BodyResponseCallback<Schema$ListReservationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      callback: BodyResponseCallback<Schema$ListReservationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReservationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$List
        | BodyResponseCallback<Schema$ListReservationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReservationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReservationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReservationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/reservations').replace(
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
        createAPIRequest<Schema$ListReservationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReservationsResponse>(parameters);
      }
    }

    /**
     * Updates an existing reservation resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigqueryreservation.projects.locations.reservations.patch({
     *     // Identifier. The resource name of the reservation, e.g., `projects/x/locations/x/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     *     name: 'projects/my-project/locations/my-location/reservations/my-reservation',
     *     // Standard field mask for the set of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoscale": {},
     *       //   "concurrency": "my_concurrency",
     *       //   "creationTime": "my_creationTime",
     *       //   "edition": "my_edition",
     *       //   "ignoreIdleSlots": false,
     *       //   "labels": {},
     *       //   "maxSlots": "my_maxSlots",
     *       //   "multiRegionAuxiliary": false,
     *       //   "name": "my_name",
     *       //   "originalPrimaryLocation": "my_originalPrimaryLocation",
     *       //   "primaryLocation": "my_primaryLocation",
     *       //   "replicationStatus": {},
     *       //   "reservationGroup": "my_reservationGroup",
     *       //   "scalingMode": "my_scalingMode",
     *       //   "secondaryLocation": "my_secondaryLocation",
     *       //   "slotCapacity": "my_slotCapacity",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoscale": {},
     *   //   "concurrency": "my_concurrency",
     *   //   "creationTime": "my_creationTime",
     *   //   "edition": "my_edition",
     *   //   "ignoreIdleSlots": false,
     *   //   "labels": {},
     *   //   "maxSlots": "my_maxSlots",
     *   //   "multiRegionAuxiliary": false,
     *   //   "name": "my_name",
     *   //   "originalPrimaryLocation": "my_originalPrimaryLocation",
     *   //   "primaryLocation": "my_primaryLocation",
     *   //   "replicationStatus": {},
     *   //   "reservationGroup": "my_reservationGroup",
     *   //   "scalingMode": "my_scalingMode",
     *   //   "secondaryLocation": "my_secondaryLocation",
     *   //   "slotCapacity": "my_slotCapacity",
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
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Reservations$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Reservation>>;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Reservation>,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Patch,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Reservation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Patch
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reservation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Reservation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
        createAPIRequest<Schema$Reservation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }

    /**
     * Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Reservations To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.setIamPolicy` to set policies on reservations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/reservations/my-reservation',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Reservations$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Reservations$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Setiampolicy
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
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
     * Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Reservations No Google IAM permissions are required to call this method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/reservations/my-reservation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "permissions": []
     *           // }
     *         },
     *       },
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
      params: Params$Resource$Projects$Locations$Reservations$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Reservations$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Reservations$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Reservations$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Reservations$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Testiampermissions
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
      | Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
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

  export interface Params$Resource$Projects$Locations$Reservations$Create
    extends StandardParameters {
    /**
     * Required. Project, location. E.g., `projects/myproject/locations/US`
     */
    parent?: string;
    /**
     * The reservation ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    reservationId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reservation;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Failoverreservation
    extends StandardParameters {
    /**
     * Required. Resource name of the reservation to failover. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FailoverReservationRequest;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Reservations$List
    extends StandardParameters {
    /**
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name of the reservation, e.g., `projects/x/locations/x/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    name?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reservation;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Reservations$Testiampermissions
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

  export class Resource$Projects$Locations$Reservations$Assignments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.assignments.create(
     *       {
     *         // The optional assignment ID. Assignment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. Max length is 64 characters.
     *         assignmentId: 'placeholder-value',
     *         // Required. The parent resource name of the assignment E.g. `projects/myproject/locations/US/reservations/team1-prod`
     *         parent:
     *           'projects/my-project/locations/my-location/reservations/my-reservation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "assignee": "my_assignee",
     *           //   "enableGeminiInBigquery": false,
     *           //   "jobType": "my_jobType",
     *           //   "name": "my_name",
     *           //   "state": "my_state"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignee": "my_assignee",
     *   //   "enableGeminiInBigquery": false,
     *   //   "jobType": "my_jobType",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Assignment>>;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Assignment>,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Create,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Assignment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Create
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Assignment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assignments').replace(
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
        createAPIRequest<Schema$Assignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Assignment>(parameters);
      }
    }

    /**
     * Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.assignments.delete(
     *       {
     *         // Required. Name of the resource, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
     *         name: 'projects/my-project/locations/my-location/reservations/my-reservation/assignments/my-assignment',
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
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Delete
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
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
     * Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Reservations - ReservationAssignments To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.getIamPolicy` to get policies on reservations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.assignments.getIamPolicy(
     *       {
     *         // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *         'options.requestedPolicyVersion': 'placeholder-value',
     *         // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/reservations/my-reservation/assignments/my-assignment',
     *       },
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
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Getiampolicy
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
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
     * Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.assignments.list({
     *       // The maximum number of items to return per page.
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from a previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource name e.g.: `projects/myproject/locations/US/reservations/team1-prod` Or: `projects/myproject/locations/US/reservations/-`
     *       parent:
     *         'projects/my-project/locations/my-location/reservations/my-reservation',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignments": [],
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
      params: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAssignmentsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAssignmentsResponse>,
      callback: BodyResponseCallback<Schema$ListAssignmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$List,
      callback: BodyResponseCallback<Schema$ListAssignmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAssignmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$List
        | BodyResponseCallback<Schema$ListAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAssignmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAssignmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assignments').replace(
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
        createAPIRequest<Schema$ListAssignmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAssignmentsResponse>(parameters);
      }
    }

    /**
     * Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.assignments.move({
     *       // Required. The resource name of the assignment, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
     *       name: 'projects/my-project/locations/my-location/reservations/my-reservation/assignments/my-assignment',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "assignmentId": "my_assignmentId",
     *         //   "destinationId": "my_destinationId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignee": "my_assignee",
     *   //   "enableGeminiInBigquery": false,
     *   //   "jobType": "my_jobType",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
    move(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    move(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Assignment>>;
    move(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    move(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      options: MethodOptions | BodyResponseCallback<Schema$Assignment>,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    move(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Move,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    move(callback: BodyResponseCallback<Schema$Assignment>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Move
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Assignment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Move;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:move').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Assignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Assignment>(parameters);
      }
    }

    /**
     * Updates an existing assignment. Only the `priority` field can be updated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.assignments.patch(
     *       {
     *         // Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.
     *         name: 'projects/my-project/locations/my-location/reservations/my-reservation/assignments/my-assignment',
     *         // Standard field mask for the set of fields to be updated.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "assignee": "my_assignee",
     *           //   "enableGeminiInBigquery": false,
     *           //   "jobType": "my_jobType",
     *           //   "name": "my_name",
     *           //   "state": "my_state"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignee": "my_assignee",
     *   //   "enableGeminiInBigquery": false,
     *   //   "jobType": "my_jobType",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Assignment>>;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Assignment>,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Patch,
      callback: BodyResponseCallback<Schema$Assignment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Assignment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Patch
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Assignment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Assignment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
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
        createAPIRequest<Schema$Assignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Assignment>(parameters);
      }
    }

    /**
     * Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Reservations To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.setIamPolicy` to set policies on reservations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.assignments.setIamPolicy(
     *       {
     *         // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/reservations/my-reservation/assignments/my-assignment',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "policy": {},
     *           //   "updateMask": "my_updateMask"
     *           // }
     *         },
     *       },
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
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Setiampolicy
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
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
     * Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Reservations No Google IAM permissions are required to call this method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigqueryreservation.googleapis.com
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
     * const bigqueryreservation = google.bigqueryreservation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await bigqueryreservation.projects.locations.reservations.assignments.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/reservations/my-reservation/assignments/my-assignment',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "permissions": []
     *           // }
     *         },
     *       },
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
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Reservations$Assignments$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Reservations$Assignments$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Assignments$Testiampermissions
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
      | Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Assignments$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reservations$Assignments$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
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

  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Create
    extends StandardParameters {
    /**
     * The optional assignment ID. Assignment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. Max length is 64 characters.
     */
    assignmentId?: string;
    /**
     * Required. The parent resource name of the assignment E.g. `projects/myproject/locations/US/reservations/team1-prod`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Assignment;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Delete
    extends StandardParameters {
    /**
     * Required. Name of the resource, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$List
    extends StandardParameters {
    /**
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name e.g.: `projects/myproject/locations/US/reservations/team1-prod` Or: `projects/myproject/locations/US/reservations/-`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Move
    extends StandardParameters {
    /**
     * Required. The resource name of the assignment, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MoveAssignmentRequest;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Patch
    extends StandardParameters {
    /**
     * Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.
     */
    name?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Assignment;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Reservations$Assignments$Testiampermissions
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
