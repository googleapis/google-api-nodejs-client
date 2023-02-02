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

export namespace iam_v1 {
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
   * Identity and Access Management (IAM) API
   *
   * Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const iam = google.iam('v1');
   * ```
   */
  export class Iam {
    context: APIRequestContext;
    iamPolicies: Resource$Iampolicies;
    locations: Resource$Locations;
    organizations: Resource$Organizations;
    permissions: Resource$Permissions;
    projects: Resource$Projects;
    roles: Resource$Roles;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.iamPolicies = new Resource$Iampolicies(this.context);
      this.locations = new Resource$Locations(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.permissions = new Resource$Permissions(this.context);
      this.projects = new Resource$Projects(this.context);
      this.roles = new Resource$Roles(this.context);
    }
  }

  /**
   * Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.
   */
  export interface Schema$AdminAuditData {
    /**
     * The permission_delta when when creating or updating a Role.
     */
    permissionDelta?: Schema$PermissionDelta;
  }
  /**
   * Contains information about an auditable service.
   */
  export interface Schema$AuditableService {
    /**
     * Public name of the service. For example, the service name for Cloud IAM is 'iam.googleapis.com'.
     */
    name?: string | null;
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
   * Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.
   */
  export interface Schema$AuditData {
    /**
     * Policy delta between the original policy and the newly set policy.
     */
    policyDelta?: Schema$PolicyDelta;
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
   * Represents an Amazon Web Services identity provider.
   */
  export interface Schema$Aws {
    /**
     * Required. The AWS account ID.
     */
    accountId?: string | null;
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
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * One delta entry for Binding. Each individual change (only one member in each entry) to a binding will be a separate entry.
   */
  export interface Schema$BindingDelta {
    /**
     * The action that was performed on a Binding. Required
     */
    action?: string | null;
    /**
     * The condition that is associated with this binding.
     */
    condition?: Schema$Expr;
    /**
     * A single identity requesting access for a Google Cloud resource. Follows the same format of Binding.members. Required
     */
    member?: string | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
     */
    role?: string | null;
  }
  /**
   * The request to create a new role.
   */
  export interface Schema$CreateRoleRequest {
    /**
     * The Role resource to create.
     */
    role?: Schema$Role;
    /**
     * The role ID to use for this role. A role ID may contain alphanumeric characters, underscores (`_`), and periods (`.`). It must contain a minimum of 3 characters and a maximum of 64 characters.
     */
    roleId?: string | null;
  }
  /**
   * The service account key create request.
   */
  export interface Schema$CreateServiceAccountKeyRequest {
    /**
     * Which type of key and algorithm to use for the key. The default is currently a 2K RSA key. However this may change in the future.
     */
    keyAlgorithm?: string | null;
    /**
     * The output format of the private key. The default value is `TYPE_GOOGLE_CREDENTIALS_FILE`, which is the Google Credentials File format.
     */
    privateKeyType?: string | null;
  }
  /**
   * The service account create request.
   */
  export interface Schema$CreateServiceAccountRequest {
    /**
     * Required. The account id that is used to generate the service account email address and a stable unique id. It is unique within a project, must be 6-30 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])` to comply with RFC1035.
     */
    accountId?: string | null;
    /**
     * The ServiceAccount resource to create. Currently, only the following values are user assignable: `display_name` and `description`.
     */
    serviceAccount?: Schema$ServiceAccount;
  }
  /**
   * The service account key disable request.
   */
  export interface Schema$DisableServiceAccountKeyRequest {}
  /**
   * The service account disable request.
   */
  export interface Schema$DisableServiceAccountRequest {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * The service account key enable request.
   */
  export interface Schema$EnableServiceAccountKeyRequest {}
  /**
   * The service account enable request.
   */
  export interface Schema$EnableServiceAccountRequest {}
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
   * The request to lint a Cloud IAM policy object.
   */
  export interface Schema$LintPolicyRequest {
    /**
     * google.iam.v1.Binding.condition object to be linted.
     */
    condition?: Schema$Expr;
    /**
     * The full resource name of the policy this lint request is about. The name follows the Google Cloud format for full resource names. For example, a Cloud project with ID `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`. The resource name is not used to read a policy from IAM. Only the data in the request object is linted.
     */
    fullResourceName?: string | null;
  }
  /**
   * The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found.
   */
  export interface Schema$LintPolicyResponse {
    /**
     * List of lint results sorted by `severity` in descending order.
     */
    lintResults?: Schema$LintResult[];
  }
  /**
   * Structured response of a single validation unit.
   */
  export interface Schema$LintResult {
    /**
     * Human readable debug message associated with the issue.
     */
    debugMessage?: string | null;
    /**
     * The name of the field for which this lint result is about. For nested messages `field_name` consists of names of the embedded fields separated by period character. The top-level qualifier is the input object to lint in the request. For example, the `field_name` value `condition.expression` identifies a lint result for the `expression` field of the provided condition.
     */
    fieldName?: string | null;
    /**
     * The validation unit level.
     */
    level?: string | null;
    /**
     * 0-based character position of problematic construct within the object identified by `field_name`. Currently, this is populated only for condition expression.
     */
    locationOffset?: number | null;
    /**
     * The validation unit severity.
     */
    severity?: string | null;
    /**
     * The validation unit name, for instance "lintValidationUnits/ConditionComplexityCheck".
     */
    validationUnitName?: string | null;
  }
  /**
   * The response containing the roles defined under a resource.
   */
  export interface Schema$ListRolesResponse {
    /**
     * To retrieve the next page of results, set `ListRolesRequest.page_token` to this value.
     */
    nextPageToken?: string | null;
    /**
     * The Roles defined on this resource.
     */
    roles?: Schema$Role[];
  }
  /**
   * The service account keys list response.
   */
  export interface Schema$ListServiceAccountKeysResponse {
    /**
     * The public keys for the service account.
     */
    keys?: Schema$ServiceAccountKey[];
  }
  /**
   * The service account list response.
   */
  export interface Schema$ListServiceAccountsResponse {
    /**
     * The list of matching service accounts.
     */
    accounts?: Schema$ServiceAccount[];
    /**
     * To retrieve the next page of results, set ListServiceAccountsRequest.page_token to this value.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListWorkloadIdentityPoolProviders.
   */
  export interface Schema$ListWorkloadIdentityPoolProvidersResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of providers.
     */
    workloadIdentityPoolProviders?: Schema$WorkloadIdentityPoolProvider[];
  }
  /**
   * Response message for ListWorkloadIdentityPools.
   */
  export interface Schema$ListWorkloadIdentityPoolsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of pools.
     */
    workloadIdentityPools?: Schema$WorkloadIdentityPool[];
  }
  /**
   * Represents an OpenId Connect 1.0 identity provider.
   */
  export interface Schema$Oidc {
    /**
     * Acceptable values for the `aud` field (audience) in the OIDC token. Token exchange requests are rejected if the token audience does not match one of the configured values. Each audience may be at most 256 characters. A maximum of 10 audiences may be configured. If this list is empty, the OIDC token audience must be equal to the full canonical resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix. For example: ``` //iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ ```
     */
    allowedAudiences?: string[] | null;
    /**
     * Required. The OIDC issuer URL. Must be an HTTPS endpoint.
     */
    issuerUri?: string | null;
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
   * The service account patch request. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response.
   */
  export interface Schema$PatchServiceAccountRequest {
    serviceAccount?: Schema$ServiceAccount;
    updateMask?: string | null;
  }
  /**
   * A permission which can be included by a role.
   */
  export interface Schema$Permission {
    /**
     * The service API associated with the permission is not enabled.
     */
    apiDisabled?: boolean | null;
    /**
     * The current custom role support level.
     */
    customRolesSupportLevel?: string | null;
    /**
     * A brief description of what this Permission is used for. This permission can ONLY be used in predefined roles.
     */
    description?: string | null;
    /**
     * The name of this Permission.
     */
    name?: string | null;
    onlyInPredefinedRoles?: boolean | null;
    /**
     * The preferred name for this permission. If present, then this permission is an alias of, and equivalent to, the listed primary_permission.
     */
    primaryPermission?: string | null;
    /**
     * The current launch stage of the permission.
     */
    stage?: string | null;
    /**
     * The title of this Permission.
     */
    title?: string | null;
  }
  /**
   * A PermissionDelta message to record the added_permissions and removed_permissions inside a role.
   */
  export interface Schema$PermissionDelta {
    /**
     * Added permissions.
     */
    addedPermissions?: string[] | null;
    /**
     * Removed permissions.
     */
    removedPermissions?: string[] | null;
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
   * The difference delta between two policies.
   */
  export interface Schema$PolicyDelta {
    /**
     * The delta for Bindings between two policies.
     */
    bindingDeltas?: Schema$BindingDelta[];
  }
  /**
   * A request to get the list of auditable services for a resource.
   */
  export interface Schema$QueryAuditableServicesRequest {
    /**
     * Required. The full resource name to query from the list of auditable services. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`.
     */
    fullResourceName?: string | null;
  }
  /**
   * A response containing a list of auditable services for a resource.
   */
  export interface Schema$QueryAuditableServicesResponse {
    /**
     * The auditable services for a resource.
     */
    services?: Schema$AuditableService[];
  }
  /**
   * The grantable role query request.
   */
  export interface Schema$QueryGrantableRolesRequest {
    /**
     * Required. The full resource name to query from the list of grantable roles. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`.
     */
    fullResourceName?: string | null;
    /**
     * Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     */
    pageSize?: number | null;
    /**
     * Optional pagination token returned in an earlier QueryGrantableRolesResponse.
     */
    pageToken?: string | null;
    view?: string | null;
  }
  /**
   * The grantable role query response.
   */
  export interface Schema$QueryGrantableRolesResponse {
    /**
     * To retrieve the next page of results, set `QueryGrantableRolesRequest.page_token` to this value.
     */
    nextPageToken?: string | null;
    /**
     * The list of matching roles.
     */
    roles?: Schema$Role[];
  }
  /**
   * A request to get permissions which can be tested on a resource.
   */
  export interface Schema$QueryTestablePermissionsRequest {
    /**
     * Required. The full resource name to query from the list of testable permissions. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`.
     */
    fullResourceName?: string | null;
    /**
     * Optional limit on the number of permissions to include in the response. The default is 100, and the maximum is 1,000.
     */
    pageSize?: number | null;
    /**
     * Optional pagination token returned in an earlier QueryTestablePermissionsRequest.
     */
    pageToken?: string | null;
  }
  /**
   * The response containing permissions which can be tested on a resource.
   */
  export interface Schema$QueryTestablePermissionsResponse {
    /**
     * To retrieve the next page of results, set `QueryTestableRolesRequest.page_token` to this value.
     */
    nextPageToken?: string | null;
    /**
     * The Permissions testable on the requested resource.
     */
    permissions?: Schema$Permission[];
  }
  /**
   * A role in the Identity and Access Management API.
   */
  export interface Schema$Role {
    /**
     * The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole.
     */
    deleted?: boolean | null;
    /**
     * Optional. A human-readable description for the role.
     */
    description?: string | null;
    /**
     * Used to perform a consistent read-modify-write.
     */
    etag?: string | null;
    /**
     * The names of the permissions this role grants when bound in an IAM policy.
     */
    includedPermissions?: string[] | null;
    /**
     * The name of the role. When Role is used in CreateRole, the role name must not be set. When Role is used in output and other input such as UpdateRole, the role name is the complete path, e.g., roles/logging.viewer for predefined roles and organizations/{ORGANIZATION_ID\}/roles/logging.viewer for custom roles.
     */
    name?: string | null;
    /**
     * The current launch stage of the role. If the `ALPHA` launch stage has been selected for a role, the `stage` field will not be included in the returned definition for the role.
     */
    stage?: string | null;
    /**
     * Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes.
     */
    title?: string | null;
  }
  /**
   * Represents an SAML 2.0 identity provider.
   */
  export interface Schema$Saml {
    /**
     * Required. SAML Identity provider configuration metadata xml doc. The xml document should comply with [SAML 2.0 specification](https://www.oasis-open.org/committees/download.php/56785/sstc-saml-metadata-errata-2.0-wd-05.pdf). The max size of the acceptable xml document will be bounded to 128k characters. The metadata xml document should satisfy the following constraints: 1) Must contain an Identity Provider Entity ID. 2) Must contain at least one non-expired signing key certificate. 3) For each signing key: a) Valid from should be no more than 7 days from now. b) Valid to should be no more than 14 years in the future. 4) Upto 3 IdP signing keys are allowed in the metadata xml. When updating the provider's metadata xml, at lease one non-expired signing key must overlap with the existing metadata. This requirement is skipped if there are no non-expired signing keys present in the existing metadata
     */
    idpMetadataXml?: string | null;
  }
  /**
   * An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service //
   */
  export interface Schema$ServiceAccount {
    /**
     * Optional. A user-specified, human-readable description of the service account. The maximum length is 256 UTF-8 bytes.
     */
    description?: string | null;
    /**
     * Output only. Whether the service account is disabled.
     */
    disabled?: boolean | null;
    /**
     * Optional. A user-specified, human-readable name for the service account. The maximum length is 100 UTF-8 bytes.
     */
    displayName?: string | null;
    /**
     * Output only. The email address of the service account.
     */
    email?: string | null;
    /**
     * Deprecated. Do not use.
     */
    etag?: string | null;
    /**
     * The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string | null;
    /**
     * Output only. The OAuth 2.0 client ID for the service account.
     */
    oauth2ClientId?: string | null;
    /**
     * Output only. The ID of the project that owns the service account.
     */
    projectId?: string | null;
    /**
     * Output only. The unique, stable numeric ID for the service account. Each service account retains its unique ID even if you delete the service account. For example, if you delete a service account, then create a new service account with the same name, the new service account has a different unique ID than the deleted service account.
     */
    uniqueId?: string | null;
  }
  /**
   * Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API.
   */
  export interface Schema$ServiceAccountKey {
    /**
     * The key status.
     */
    disabled?: boolean | null;
    /**
     * Specifies the algorithm (and possibly key size) for the key.
     */
    keyAlgorithm?: string | null;
    /**
     * The key origin.
     */
    keyOrigin?: string | null;
    /**
     * The key type.
     */
    keyType?: string | null;
    /**
     * The resource name of the service account key in the following format `projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}/keys/{key\}`.
     */
    name?: string | null;
    /**
     * The private key data. Only provided in `CreateServiceAccountKey` responses. Make sure to keep the private key data secure because it allows for the assertion of the service account identity. When base64 decoded, the private key data can be used to authenticate with Google API client libraries and with gcloud auth activate-service-account.
     */
    privateKeyData?: string | null;
    /**
     * The output format for the private key. Only provided in `CreateServiceAccountKey` responses, not in `GetServiceAccountKey` or `ListServiceAccountKey` responses. Google never exposes system-managed private keys, and never retains user-managed private keys.
     */
    privateKeyType?: string | null;
    /**
     * The public key data. Only provided in `GetServiceAccountKey` responses.
     */
    publicKeyData?: string | null;
    /**
     * The key can be used after this timestamp.
     */
    validAfterTime?: string | null;
    /**
     * The key can be used before this timestamp. For system-managed key pairs, this timestamp is the end time for the private key signing operation. The public key could still be used for verification for a few hours after this time.
     */
    validBeforeTime?: string | null;
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
   * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob request.
   */
  export interface Schema$SignBlobRequest {
    /**
     * Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The bytes to sign.
     */
    bytesToSign?: string | null;
  }
  /**
   * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob response.
   */
  export interface Schema$SignBlobResponse {
    /**
     * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The id of the key used to sign the blob.
     */
    keyId?: string | null;
    /**
     * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The signed blob.
     */
    signature?: string | null;
  }
  /**
   * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT request.
   */
  export interface Schema$SignJwtRequest {
    /**
     * Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The JWT payload to sign. Must be a serialized JSON object that contains a JWT Claims Set. For example: `{"sub": "user@example.com", "iat": 313435\}` If the JWT Claims Set contains an expiration time (`exp`) claim, it must be an integer timestamp that is not in the past and no more than 12 hours in the future. If the JWT Claims Set does not contain an expiration time (`exp`) claim, this claim is added automatically, with a timestamp that is 1 hour in the future.
     */
    payload?: string | null;
  }
  /**
   * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response.
   */
  export interface Schema$SignJwtResponse {
    /**
     * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The id of the key used to sign the JWT.
     */
    keyId?: string | null;
    /**
     * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The signed JWT.
     */
    signedJwt?: string | null;
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
   * The request to undelete an existing role.
   */
  export interface Schema$UndeleteRoleRequest {
    /**
     * Used to perform a consistent read-modify-write.
     */
    etag?: string | null;
  }
  /**
   * The service account undelete request.
   */
  export interface Schema$UndeleteServiceAccountRequest {}
  export interface Schema$UndeleteServiceAccountResponse {
    /**
     * Metadata for the restored service account.
     */
    restoredAccount?: Schema$ServiceAccount;
  }
  /**
   * Request message for UndeleteWorkloadIdentityPoolProvider.
   */
  export interface Schema$UndeleteWorkloadIdentityPoolProviderRequest {}
  /**
   * Request message for UndeleteWorkloadIdentityPool.
   */
  export interface Schema$UndeleteWorkloadIdentityPoolRequest {}
  /**
   * The service account key upload request.
   */
  export interface Schema$UploadServiceAccountKeyRequest {
    /**
     * The public key to associate with the service account. Must be an RSA public key that is wrapped in an X.509 v3 certificate. Include the first line, `-----BEGIN CERTIFICATE-----`, and the last line, `-----END CERTIFICATE-----`.
     */
    publicKeyData?: string | null;
  }
  /**
   * Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.
   */
  export interface Schema$WorkloadIdentityPool {
    /**
     * A description of the pool. Cannot exceed 256 characters.
     */
    description?: string | null;
    /**
     * Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.
     */
    disabled?: boolean | null;
    /**
     * A display name for the pool. Cannot exceed 32 characters.
     */
    displayName?: string | null;
    /**
     * Output only. The resource name of the pool.
     */
    name?: string | null;
    /**
     * Output only. The state of the pool.
     */
    state?: string | null;
  }
  /**
   * Metadata for long-running WorkloadIdentityPool operations.
   */
  export interface Schema$WorkloadIdentityPoolOperationMetadata {}
  /**
   * A configuration for an external identity provider.
   */
  export interface Schema$WorkloadIdentityPoolProvider {
    /**
     * [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * `assertion`: JSON representing the authentication credential issued by the provider. * `google`: The Google attributes mapped from the assertion in the `attribute_mappings`. * `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credential are accepted. The following example shows how to only allow credentials with a mapped `google.groups` value of `admins`: ``` "'admins' in google.groups" ```
     */
    attributeCondition?: string | null;
    /**
     * Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. Cannot exceed 127 bytes. * `google.groups`: Groups the external identity belongs to. You can grant groups access to resources using an IAM `principalSet` binding; access applies to all members of the group. You can also provide custom attributes by specifying `attribute.{custom_attribute\}`, where `{custom_attribute\}` is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workload to Google Cloud resources. For example: * `google.subject`: `principal://iam.googleapis.com/projects/{project\}/locations/{location\}/workloadIdentityPools/{pool\}/subject/{value\}` * `google.groups`: `principalSet://iam.googleapis.com/projects/{project\}/locations/{location\}/workloadIdentityPools/{pool\}/group/{value\}` * `attribute.{custom_attribute\}`: `principalSet://iam.googleapis.com/projects/{project\}/locations/{location\}/workloadIdentityPools/{pool\}/attribute.{custom_attribute\}/{value\}` Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the `assertion` keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 8KB. For AWS providers, if no attribute mapping is defined, the following default mapping applies: ``` { "google.subject":"assertion.arn", "attribute.aws_role": "assertion.arn.contains('assumed-role')" " ? assertion.arn.extract('{account_arn\}assumed-role/')" " + 'assumed-role/'" " + assertion.arn.extract('assumed-role/{role_name\}/')" " : assertion.arn", \} ``` If any custom attribute mappings are defined, they must include a mapping to the `google.subject` attribute. For OIDC providers, you must supply a custom mapping, which must include the `google.subject` attribute. For example, the following maps the `sub` claim of the incoming credential to the `subject` attribute on a Google token: ``` {"google.subject": "assertion.sub"\} ```
     */
    attributeMapping?: {[key: string]: string} | null;
    /**
     * An Amazon Web Services identity provider.
     */
    aws?: Schema$Aws;
    /**
     * A description for the provider. Cannot exceed 256 characters.
     */
    description?: string | null;
    /**
     * Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.
     */
    disabled?: boolean | null;
    /**
     * A display name for the provider. Cannot exceed 32 characters.
     */
    displayName?: string | null;
    /**
     * Output only. The resource name of the provider.
     */
    name?: string | null;
    /**
     * An OpenId Connect 1.0 identity provider.
     */
    oidc?: Schema$Oidc;
    /**
     * An SAML 2.0 identity provider.
     */
    saml?: Schema$Saml;
    /**
     * Output only. The state of the provider.
     */
    state?: string | null;
  }

  export class Resource$Iampolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lints, or validates, an IAM policy. Currently checks the google.iam.v1.Binding.condition field, which contains a condition expression for a role binding. Successful calls to this method always return an HTTP `200 OK` status code, even if the linter detects an issue in the IAM policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.iamPolicies.lintPolicy({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "condition": {},
     *       //   "fullResourceName": "my_fullResourceName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lintResults": []
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
    lintPolicy(
      params: Params$Resource$Iampolicies$Lintpolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lintPolicy(
      params?: Params$Resource$Iampolicies$Lintpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LintPolicyResponse>;
    lintPolicy(
      params: Params$Resource$Iampolicies$Lintpolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lintPolicy(
      params: Params$Resource$Iampolicies$Lintpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$LintPolicyResponse>,
      callback: BodyResponseCallback<Schema$LintPolicyResponse>
    ): void;
    lintPolicy(
      params: Params$Resource$Iampolicies$Lintpolicy,
      callback: BodyResponseCallback<Schema$LintPolicyResponse>
    ): void;
    lintPolicy(callback: BodyResponseCallback<Schema$LintPolicyResponse>): void;
    lintPolicy(
      paramsOrCallback?:
        | Params$Resource$Iampolicies$Lintpolicy
        | BodyResponseCallback<Schema$LintPolicyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LintPolicyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LintPolicyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LintPolicyResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Iampolicies$Lintpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Iampolicies$Lintpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/iamPolicies:lintPolicy').replace(
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
        createAPIRequest<Schema$LintPolicyResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LintPolicyResponse>(parameters);
      }
    }

    /**
     * Returns a list of services that allow you to opt into audit logs that are not generated by default. To learn more about audit logs, see the [Logging documentation](https://cloud.google.com/logging/docs/audit).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.iamPolicies.queryAuditableServices({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "fullResourceName": "my_fullResourceName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "services": []
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
    queryAuditableServices(
      params: Params$Resource$Iampolicies$Queryauditableservices,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    queryAuditableServices(
      params?: Params$Resource$Iampolicies$Queryauditableservices,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryAuditableServicesResponse>;
    queryAuditableServices(
      params: Params$Resource$Iampolicies$Queryauditableservices,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryAuditableServices(
      params: Params$Resource$Iampolicies$Queryauditableservices,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryAuditableServicesResponse>,
      callback: BodyResponseCallback<Schema$QueryAuditableServicesResponse>
    ): void;
    queryAuditableServices(
      params: Params$Resource$Iampolicies$Queryauditableservices,
      callback: BodyResponseCallback<Schema$QueryAuditableServicesResponse>
    ): void;
    queryAuditableServices(
      callback: BodyResponseCallback<Schema$QueryAuditableServicesResponse>
    ): void;
    queryAuditableServices(
      paramsOrCallback?:
        | Params$Resource$Iampolicies$Queryauditableservices
        | BodyResponseCallback<Schema$QueryAuditableServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryAuditableServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryAuditableServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryAuditableServicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Iampolicies$Queryauditableservices;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Iampolicies$Queryauditableservices;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/iamPolicies:queryAuditableServices').replace(
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
        createAPIRequest<Schema$QueryAuditableServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryAuditableServicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Iampolicies$Lintpolicy
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$LintPolicyRequest;
  }
  export interface Params$Resource$Iampolicies$Queryauditableservices
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryAuditableServicesRequest;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    workforcePools: Resource$Locations$Workforcepools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.workforcePools = new Resource$Locations$Workforcepools(this.context);
    }
  }

  export class Resource$Locations$Workforcepools {
    context: APIRequestContext;
    operations: Resource$Locations$Workforcepools$Operations;
    providers: Resource$Locations$Workforcepools$Providers;
    subjects: Resource$Locations$Workforcepools$Subjects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Locations$Workforcepools$Operations(
        this.context
      );
      this.providers = new Resource$Locations$Workforcepools$Providers(
        this.context
      );
      this.subjects = new Resource$Locations$Workforcepools$Subjects(
        this.context
      );
    }
  }

  export class Resource$Locations$Workforcepools$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.locations.workforcePools.operations.get({
     *     // The name of the operation resource.
     *     name: 'locations/my-location/workforcePools/my-workforcePool/operations/my-operation',
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
      params: Params$Resource$Locations$Workforcepools$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Locations$Workforcepools$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Locations$Workforcepools$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Locations$Workforcepools$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Locations$Workforcepools$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Locations$Workforcepools$Operations$Get
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
        {}) as Params$Resource$Locations$Workforcepools$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Workforcepools$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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

  export interface Params$Resource$Locations$Workforcepools$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Locations$Workforcepools$Providers {
    context: APIRequestContext;
    keys: Resource$Locations$Workforcepools$Providers$Keys;
    operations: Resource$Locations$Workforcepools$Providers$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.keys = new Resource$Locations$Workforcepools$Providers$Keys(
        this.context
      );
      this.operations =
        new Resource$Locations$Workforcepools$Providers$Operations(
          this.context
        );
    }
  }

  export class Resource$Locations$Workforcepools$Providers$Keys {
    context: APIRequestContext;
    operations: Resource$Locations$Workforcepools$Providers$Keys$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Locations$Workforcepools$Providers$Keys$Operations(
          this.context
        );
    }
  }

  export class Resource$Locations$Workforcepools$Providers$Keys$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.locations.workforcePools.providers.keys.operations.get({
     *     // The name of the operation resource.
     *     name: 'locations/my-location/workforcePools/my-workforcePool/providers/my-provider/keys/my-key/operations/my-operation',
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
      params: Params$Resource$Locations$Workforcepools$Providers$Keys$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Locations$Workforcepools$Providers$Keys$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Locations$Workforcepools$Providers$Keys$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Locations$Workforcepools$Providers$Keys$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Locations$Workforcepools$Providers$Keys$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Locations$Workforcepools$Providers$Keys$Operations$Get
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
        {}) as Params$Resource$Locations$Workforcepools$Providers$Keys$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Locations$Workforcepools$Providers$Keys$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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

  export interface Params$Resource$Locations$Workforcepools$Providers$Keys$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Locations$Workforcepools$Providers$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.locations.workforcePools.providers.operations.get({
     *     // The name of the operation resource.
     *     name: 'locations/my-location/workforcePools/my-workforcePool/providers/my-provider/operations/my-operation',
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
      params: Params$Resource$Locations$Workforcepools$Providers$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Locations$Workforcepools$Providers$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Locations$Workforcepools$Providers$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Locations$Workforcepools$Providers$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Locations$Workforcepools$Providers$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Locations$Workforcepools$Providers$Operations$Get
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
        {}) as Params$Resource$Locations$Workforcepools$Providers$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Locations$Workforcepools$Providers$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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

  export interface Params$Resource$Locations$Workforcepools$Providers$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Locations$Workforcepools$Subjects {
    context: APIRequestContext;
    operations: Resource$Locations$Workforcepools$Subjects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Locations$Workforcepools$Subjects$Operations(this.context);
    }
  }

  export class Resource$Locations$Workforcepools$Subjects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.locations.workforcePools.subjects.operations.get({
     *     // The name of the operation resource.
     *     name: 'locations/my-location/workforcePools/my-workforcePool/subjects/my-subject/operations/my-operation',
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
      params: Params$Resource$Locations$Workforcepools$Subjects$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Locations$Workforcepools$Subjects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Locations$Workforcepools$Subjects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Locations$Workforcepools$Subjects$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Locations$Workforcepools$Subjects$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Locations$Workforcepools$Subjects$Operations$Get
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
        {}) as Params$Resource$Locations$Workforcepools$Subjects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Locations$Workforcepools$Subjects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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

  export interface Params$Resource$Locations$Workforcepools$Subjects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    roles: Resource$Organizations$Roles;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.roles = new Resource$Organizations$Roles(this.context);
    }
  }

  export class Resource$Organizations$Roles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new custom Role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.organizations.roles.create({
     *     // The `parent` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`projects.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID\}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID\}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     parent: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "role": {},
     *       //   "roleId": "my_roleId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
      params: Params$Resource$Organizations$Roles$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Roles$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    create(
      params: Params$Resource$Organizations$Roles$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Roles$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    create(
      params: Params$Resource$Organizations$Roles$Create,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    create(callback: BodyResponseCallback<Schema$Role>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Roles$Create
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Roles$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Roles$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/roles').replace(
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.organizations.roles.delete({
     *     // Used to perform a consistent read-modify-write.
     *     etag: 'placeholder-value',
     *     // The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.delete()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.delete()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     name: 'organizations/my-organization/roles/my-role',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
      params: Params$Resource$Organizations$Roles$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Roles$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    delete(
      params: Params$Resource$Organizations$Roles$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Roles$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    delete(
      params: Params$Resource$Organizations$Roles$Delete,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Role>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Roles$Delete
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Roles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Roles$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Gets the definition of a Role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.organizations.roles.get({
     *     // The `name` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`roles.get()`](https://cloud.google.com/iam/reference/rest/v1/roles/get): `roles/{ROLE_NAME\}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME\}` * [`projects.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     name: 'organizations/my-organization/roles/my-role',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
      params: Params$Resource$Organizations$Roles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Roles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    get(
      params: Params$Resource$Organizations$Roles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Roles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    get(
      params: Params$Resource$Organizations$Roles$Get,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    get(callback: BodyResponseCallback<Schema$Role>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Roles$Get
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Roles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Roles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.organizations.roles.list({
     *     // Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     *     pageSize: 'placeholder-value',
     *     // Optional pagination token returned in an earlier ListRolesResponse.
     *     pageToken: 'placeholder-value',
     *     // The `parent` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`roles.list()`](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [`projects.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID\}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID\}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     parent: 'organizations/my-organization',
     *     // Include Roles that have been deleted.
     *     showDeleted: 'placeholder-value',
     *     // Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "roles": []
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
      params: Params$Resource$Organizations$Roles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Roles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRolesResponse>;
    list(
      params: Params$Resource$Organizations$Roles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Roles$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRolesResponse>,
      callback: BodyResponseCallback<Schema$ListRolesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Roles$List,
      callback: BodyResponseCallback<Schema$ListRolesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRolesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Roles$List
        | BodyResponseCallback<Schema$ListRolesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRolesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRolesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRolesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Roles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Roles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/roles').replace(
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
        createAPIRequest<Schema$ListRolesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRolesResponse>(parameters);
      }
    }

    /**
     * Updates the definition of a custom Role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.organizations.roles.patch({
     *     // The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.patch()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.patch()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     name: 'organizations/my-organization/roles/my-role',
     *     // A mask describing which fields in the Role have changed.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deleted": false,
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "includedPermissions": [],
     *       //   "name": "my_name",
     *       //   "stage": "my_stage",
     *       //   "title": "my_title"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
      params: Params$Resource$Organizations$Roles$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Roles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    patch(
      params: Params$Resource$Organizations$Roles$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Roles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    patch(
      params: Params$Resource$Organizations$Roles$Patch,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Role>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Roles$Patch
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Roles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Roles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Undeletes a custom Role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.organizations.roles.undelete({
     *     // The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.undelete()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.undelete()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     name: 'organizations/my-organization/roles/my-role',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
    undelete(
      params: Params$Resource$Organizations$Roles$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Organizations$Roles$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    undelete(
      params: Params$Resource$Organizations$Roles$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Organizations$Roles$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    undelete(
      params: Params$Resource$Organizations$Roles$Undelete,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Role>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Roles$Undelete
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Roles$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Roles$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undelete').replace(
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Roles$Create
    extends StandardParameters {
    /**
     * The `parent` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`projects.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID\}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID\}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateRoleRequest;
  }
  export interface Params$Resource$Organizations$Roles$Delete
    extends StandardParameters {
    /**
     * Used to perform a consistent read-modify-write.
     */
    etag?: string;
    /**
     * The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.delete()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.delete()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Roles$Get
    extends StandardParameters {
    /**
     * The `name` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`roles.get()`](https://cloud.google.com/iam/reference/rest/v1/roles/get): `roles/{ROLE_NAME\}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME\}` * [`projects.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Roles$List
    extends StandardParameters {
    /**
     * Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     */
    pageSize?: number;
    /**
     * Optional pagination token returned in an earlier ListRolesResponse.
     */
    pageToken?: string;
    /**
     * The `parent` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`roles.list()`](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [`projects.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID\}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID\}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    parent?: string;
    /**
     * Include Roles that have been deleted.
     */
    showDeleted?: boolean;
    /**
     * Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     */
    view?: string;
  }
  export interface Params$Resource$Organizations$Roles$Patch
    extends StandardParameters {
    /**
     * The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.patch()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.patch()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    name?: string;
    /**
     * A mask describing which fields in the Role have changed.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Role;
  }
  export interface Params$Resource$Organizations$Roles$Undelete
    extends StandardParameters {
    /**
     * The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.undelete()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.undelete()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteRoleRequest;
  }

  export class Resource$Permissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists every permission that you can test on a resource. A permission is testable if you can check whether a principal has that permission on the resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.permissions.queryTestablePermissions({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "fullResourceName": "my_fullResourceName",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
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
    queryTestablePermissions(
      params: Params$Resource$Permissions$Querytestablepermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    queryTestablePermissions(
      params?: Params$Resource$Permissions$Querytestablepermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryTestablePermissionsResponse>;
    queryTestablePermissions(
      params: Params$Resource$Permissions$Querytestablepermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryTestablePermissions(
      params: Params$Resource$Permissions$Querytestablepermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryTestablePermissionsResponse>,
      callback: BodyResponseCallback<Schema$QueryTestablePermissionsResponse>
    ): void;
    queryTestablePermissions(
      params: Params$Resource$Permissions$Querytestablepermissions,
      callback: BodyResponseCallback<Schema$QueryTestablePermissionsResponse>
    ): void;
    queryTestablePermissions(
      callback: BodyResponseCallback<Schema$QueryTestablePermissionsResponse>
    ): void;
    queryTestablePermissions(
      paramsOrCallback?:
        | Params$Resource$Permissions$Querytestablepermissions
        | BodyResponseCallback<Schema$QueryTestablePermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryTestablePermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryTestablePermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryTestablePermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Querytestablepermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Querytestablepermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/permissions:queryTestablePermissions').replace(
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
        createAPIRequest<Schema$QueryTestablePermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryTestablePermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Permissions$Querytestablepermissions
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryTestablePermissionsRequest;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    roles: Resource$Projects$Roles;
    serviceAccounts: Resource$Projects$Serviceaccounts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
      this.roles = new Resource$Projects$Roles(this.context);
      this.serviceAccounts = new Resource$Projects$Serviceaccounts(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    workloadIdentityPools: Resource$Projects$Locations$Workloadidentitypools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.workloadIdentityPools =
        new Resource$Projects$Locations$Workloadidentitypools(this.context);
    }
  }

  export class Resource$Projects$Locations$Workloadidentitypools {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Workloadidentitypools$Operations;
    providers: Resource$Projects$Locations$Workloadidentitypools$Providers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Workloadidentitypools$Operations(
          this.context
        );
      this.providers =
        new Resource$Projects$Locations$Workloadidentitypools$Providers(
          this.context
        );
    }

    /**
     * Creates a new WorkloadIdentityPool. You cannot reuse the name of a deleted pool until 30 days after deletion.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.locations.workloadIdentityPools.create({
     *     // Required. The parent resource to create the pool in. The only supported location is `global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. The ID to use for the pool, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     *     workloadIdentityPoolId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Create
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/workloadIdentityPools').replace(
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
     * Deletes a WorkloadIdentityPool. You cannot use a deleted pool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.locations.workloadIdentityPools.delete({
     *     // Required. The name of the pool to delete.
     *     name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool',
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
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Delete
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
     * Gets an individual WorkloadIdentityPool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.locations.workloadIdentityPools.get({
     *     // Required. The name of the pool to retrieve.
     *     name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
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
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkloadIdentityPool>;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkloadIdentityPool>,
      callback: BodyResponseCallback<Schema$WorkloadIdentityPool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Get,
      callback: BodyResponseCallback<Schema$WorkloadIdentityPool>
    ): void;
    get(callback: BodyResponseCallback<Schema$WorkloadIdentityPool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Get
        | BodyResponseCallback<Schema$WorkloadIdentityPool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkloadIdentityPool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkloadIdentityPool>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$WorkloadIdentityPool>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$WorkloadIdentityPool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkloadIdentityPool>(parameters);
      }
    }

    /**
     * Lists all non-deleted WorkloadIdentityPools in a project. If `show_deleted` is set to `true`, then deleted pools are also listed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.locations.workloadIdentityPools.list({
     *     // The maximum number of pools to return. If unspecified, at most 50 pools are returned. The maximum value is 1000; values above are 1000 truncated to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListWorkloadIdentityPools` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource to list pools for.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Whether to return soft-deleted pools.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "workloadIdentityPools": []
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
      params: Params$Resource$Projects$Locations$Workloadidentitypools$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkloadIdentityPoolsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkloadIdentityPoolsResponse>,
      callback: BodyResponseCallback<Schema$ListWorkloadIdentityPoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$List,
      callback: BodyResponseCallback<Schema$ListWorkloadIdentityPoolsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListWorkloadIdentityPoolsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$List
        | BodyResponseCallback<Schema$ListWorkloadIdentityPoolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkloadIdentityPoolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkloadIdentityPoolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkloadIdentityPoolsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/workloadIdentityPools').replace(
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
        createAPIRequest<Schema$ListWorkloadIdentityPoolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkloadIdentityPoolsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing WorkloadIdentityPool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.locations.workloadIdentityPools.patch({
     *     // Output only. The resource name of the pool.
     *     name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool',
     *     // Required. The list of fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Patch
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
     * Undeletes a WorkloadIdentityPool, as long as it was deleted fewer than 30 days ago.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.locations.workloadIdentityPools.undelete({
     *     // Required. The name of the pool to undelete.
     *     name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool',
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
    undelete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    undelete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undelete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Undelete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Operation>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Undelete
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undelete').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Create
    extends StandardParameters {
    /**
     * Required. The parent resource to create the pool in. The only supported location is `global`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the pool, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     */
    workloadIdentityPoolId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkloadIdentityPool;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Delete
    extends StandardParameters {
    /**
     * Required. The name of the pool to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Get
    extends StandardParameters {
    /**
     * Required. The name of the pool to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$List
    extends StandardParameters {
    /**
     * The maximum number of pools to return. If unspecified, at most 50 pools are returned. The maximum value is 1000; values above are 1000 truncated to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListWorkloadIdentityPools` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent resource to list pools for.
     */
    parent?: string;
    /**
     * Whether to return soft-deleted pools.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the pool.
     */
    name?: string;
    /**
     * Required. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkloadIdentityPool;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Undelete
    extends StandardParameters {
    /**
     * Required. The name of the pool to undelete.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteWorkloadIdentityPoolRequest;
  }

  export class Resource$Projects$Locations$Workloadidentitypools$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.locations.workloadIdentityPools.operations.get(
     *     {
     *       // The name of the operation resource.
     *       name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool/operations/my-operation',
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
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Workloadidentitypools$Providers {
    context: APIRequestContext;
    keys: Resource$Projects$Locations$Workloadidentitypools$Providers$Keys;
    operations: Resource$Projects$Locations$Workloadidentitypools$Providers$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.keys =
        new Resource$Projects$Locations$Workloadidentitypools$Providers$Keys(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Workloadidentitypools$Providers$Operations(
          this.context
        );
    }

    /**
     * Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool. You cannot reuse the name of a deleted provider until 30 days after deletion.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *     await iam.projects.locations.workloadIdentityPools.providers.create({
     *       // Required. The pool to create this provider in.
     *       parent:
     *         'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool',
     *       // Required. The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     *       workloadIdentityPoolProviderId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "attributeCondition": "my_attributeCondition",
     *         //   "attributeMapping": {},
     *         //   "aws": {},
     *         //   "description": "my_description",
     *         //   "disabled": false,
     *         //   "displayName": "my_displayName",
     *         //   "name": "my_name",
     *         //   "oidc": {},
     *         //   "saml": {},
     *         //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Create
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/providers').replace(
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
     * Deletes a WorkloadIdentityPoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *     await iam.projects.locations.workloadIdentityPools.providers.delete({
     *       // Required. The name of the provider to delete.
     *       name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool/providers/my-provider',
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
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Delete
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
     * Gets an individual WorkloadIdentityPoolProvider.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.locations.workloadIdentityPools.providers.get({
     *     // Required. The name of the provider to retrieve.
     *     name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool/providers/my-provider',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributeCondition": "my_attributeCondition",
     *   //   "attributeMapping": {},
     *   //   "aws": {},
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "oidc": {},
     *   //   "saml": {},
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
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkloadIdentityPoolProvider>;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkloadIdentityPoolProvider>,
      callback: BodyResponseCallback<Schema$WorkloadIdentityPoolProvider>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Get,
      callback: BodyResponseCallback<Schema$WorkloadIdentityPoolProvider>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$WorkloadIdentityPoolProvider>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Get
        | BodyResponseCallback<Schema$WorkloadIdentityPoolProvider>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkloadIdentityPoolProvider>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkloadIdentityPoolProvider>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$WorkloadIdentityPoolProvider>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$WorkloadIdentityPoolProvider>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkloadIdentityPoolProvider>(
          parameters
        );
      }
    }

    /**
     * Lists all non-deleted WorkloadIdentityPoolProviders in a WorkloadIdentityPool. If `show_deleted` is set to `true`, then deleted providers are also listed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.locations.workloadIdentityPools.providers.list(
     *     {
     *       // The maximum number of providers to return. If unspecified, at most 50 providers are returned. The maximum value is 100; values above 100 are truncated to 100.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListWorkloadIdentityPoolProviders` call. Provide this to retrieve the subsequent page.
     *       pageToken: 'placeholder-value',
     *       // Required. The pool to list providers for.
     *       parent:
     *         'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool',
     *       // Whether to return soft-deleted providers.
     *       showDeleted: 'placeholder-value',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "workloadIdentityPoolProviders": []
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
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkloadIdentityPoolProvidersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkloadIdentityPoolProvidersResponse>,
      callback: BodyResponseCallback<Schema$ListWorkloadIdentityPoolProvidersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$List,
      callback: BodyResponseCallback<Schema$ListWorkloadIdentityPoolProvidersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListWorkloadIdentityPoolProvidersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Providers$List
        | BodyResponseCallback<Schema$ListWorkloadIdentityPoolProvidersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkloadIdentityPoolProvidersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkloadIdentityPoolProvidersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkloadIdentityPoolProvidersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/providers').replace(
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
        createAPIRequest<Schema$ListWorkloadIdentityPoolProvidersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkloadIdentityPoolProvidersResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing WorkloadIdentityPoolProvider.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *     await iam.projects.locations.workloadIdentityPools.providers.patch({
     *       // Output only. The resource name of the provider.
     *       name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool/providers/my-provider',
     *       // Required. The list of fields to update.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "attributeCondition": "my_attributeCondition",
     *         //   "attributeMapping": {},
     *         //   "aws": {},
     *         //   "description": "my_description",
     *         //   "disabled": false,
     *         //   "displayName": "my_displayName",
     *         //   "name": "my_name",
     *         //   "oidc": {},
     *         //   "saml": {},
     *         //   "state": "my_state"
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
    patch(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Patch
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
     * Undeletes a WorkloadIdentityPoolProvider, as long as it was deleted fewer than 30 days ago.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *     await iam.projects.locations.workloadIdentityPools.providers.undelete({
     *       // Required. The name of the provider to undelete.
     *       name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool/providers/my-provider',
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
    undelete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    undelete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undelete(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Undelete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Operation>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Undelete
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undelete').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Create
    extends StandardParameters {
    /**
     * Required. The pool to create this provider in.
     */
    parent?: string;
    /**
     * Required. The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
     */
    workloadIdentityPoolProviderId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkloadIdentityPoolProvider;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Delete
    extends StandardParameters {
    /**
     * Required. The name of the provider to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Get
    extends StandardParameters {
    /**
     * Required. The name of the provider to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Providers$List
    extends StandardParameters {
    /**
     * The maximum number of providers to return. If unspecified, at most 50 providers are returned. The maximum value is 100; values above 100 are truncated to 100.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListWorkloadIdentityPoolProviders` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The pool to list providers for.
     */
    parent?: string;
    /**
     * Whether to return soft-deleted providers.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the provider.
     */
    name?: string;
    /**
     * Required. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkloadIdentityPoolProvider;
  }
  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Undelete
    extends StandardParameters {
    /**
     * Required. The name of the provider to undelete.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteWorkloadIdentityPoolProviderRequest;
  }

  export class Resource$Projects$Locations$Workloadidentitypools$Providers$Keys {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *     await iam.projects.locations.workloadIdentityPools.providers.keys.operations.get(
     *       {
     *         // The name of the operation resource.
     *         name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool/providers/my-provider/keys/my-key/operations/my-operation',
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
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Keys$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Workloadidentitypools$Providers$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *     await iam.projects.locations.workloadIdentityPools.providers.operations.get(
     *       {
     *         // The name of the operation resource.
     *         name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool/providers/my-provider/operations/my-operation',
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
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Providers$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Roles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new custom Role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.roles.create({
     *     // The `parent` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`projects.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID\}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID\}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "role": {},
     *       //   "roleId": "my_roleId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
      params: Params$Resource$Projects$Roles$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Roles$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    create(
      params: Params$Resource$Projects$Roles$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Roles$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    create(
      params: Params$Resource$Projects$Roles$Create,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    create(callback: BodyResponseCallback<Schema$Role>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Roles$Create
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Roles$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Roles$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/roles').replace(
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.roles.delete({
     *     // Used to perform a consistent read-modify-write.
     *     etag: 'placeholder-value',
     *     // The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.delete()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.delete()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     name: 'projects/my-project/roles/my-role',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
      params: Params$Resource$Projects$Roles$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Roles$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    delete(
      params: Params$Resource$Projects$Roles$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Roles$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    delete(
      params: Params$Resource$Projects$Roles$Delete,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Role>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Roles$Delete
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Roles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Roles$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Gets the definition of a Role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.roles.get({
     *     // The `name` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`roles.get()`](https://cloud.google.com/iam/reference/rest/v1/roles/get): `roles/{ROLE_NAME\}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME\}` * [`projects.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     name: 'projects/my-project/roles/my-role',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
      params: Params$Resource$Projects$Roles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Roles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    get(
      params: Params$Resource$Projects$Roles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Roles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    get(
      params: Params$Resource$Projects$Roles$Get,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    get(callback: BodyResponseCallback<Schema$Role>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Roles$Get
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Roles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Roles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.roles.list({
     *     // Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     *     pageSize: 'placeholder-value',
     *     // Optional pagination token returned in an earlier ListRolesResponse.
     *     pageToken: 'placeholder-value',
     *     // The `parent` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`roles.list()`](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [`projects.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID\}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID\}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     parent: 'projects/my-project',
     *     // Include Roles that have been deleted.
     *     showDeleted: 'placeholder-value',
     *     // Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "roles": []
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
      params: Params$Resource$Projects$Roles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Roles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRolesResponse>;
    list(
      params: Params$Resource$Projects$Roles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Roles$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRolesResponse>,
      callback: BodyResponseCallback<Schema$ListRolesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Roles$List,
      callback: BodyResponseCallback<Schema$ListRolesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRolesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Roles$List
        | BodyResponseCallback<Schema$ListRolesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRolesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRolesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRolesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Roles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Roles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/roles').replace(
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
        createAPIRequest<Schema$ListRolesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRolesResponse>(parameters);
      }
    }

    /**
     * Updates the definition of a custom Role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.roles.patch({
     *     // The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.patch()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.patch()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     name: 'projects/my-project/roles/my-role',
     *     // A mask describing which fields in the Role have changed.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deleted": false,
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "includedPermissions": [],
     *       //   "name": "my_name",
     *       //   "stage": "my_stage",
     *       //   "title": "my_title"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
      params: Params$Resource$Projects$Roles$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Roles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    patch(
      params: Params$Resource$Projects$Roles$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Roles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    patch(
      params: Params$Resource$Projects$Roles$Patch,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Role>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Roles$Patch
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Roles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Roles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Undeletes a custom Role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.roles.undelete({
     *     // The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.undelete()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.undelete()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     name: 'projects/my-project/roles/my-role',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
    undelete(
      params: Params$Resource$Projects$Roles$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Projects$Roles$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    undelete(
      params: Params$Resource$Projects$Roles$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Projects$Roles$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    undelete(
      params: Params$Resource$Projects$Roles$Undelete,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Role>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Roles$Undelete
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Roles$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Roles$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undelete').replace(
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Roles$Create
    extends StandardParameters {
    /**
     * The `parent` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`projects.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID\}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID\}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateRoleRequest;
  }
  export interface Params$Resource$Projects$Roles$Delete
    extends StandardParameters {
    /**
     * Used to perform a consistent read-modify-write.
     */
    etag?: string;
    /**
     * The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.delete()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/delete): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.delete()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/delete): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method deletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Roles$Get
    extends StandardParameters {
    /**
     * The `name` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`roles.get()`](https://cloud.google.com/iam/reference/rest/v1/roles/get): `roles/{ROLE_NAME\}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME\}` * [`projects.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Roles$List
    extends StandardParameters {
    /**
     * Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     */
    pageSize?: number;
    /**
     * Optional pagination token returned in an earlier ListRolesResponse.
     */
    pageToken?: string;
    /**
     * The `parent` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`roles.list()`](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [`projects.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID\}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID\}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    parent?: string;
    /**
     * Include Roles that have been deleted.
     */
    showDeleted?: boolean;
    /**
     * Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Roles$Patch
    extends StandardParameters {
    /**
     * The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.patch()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/patch): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.patch()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/patch): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method updates only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    name?: string;
    /**
     * A mask describing which fields in the Role have changed.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Role;
  }
  export interface Params$Resource$Projects$Roles$Undelete
    extends StandardParameters {
    /**
     * The `name` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`projects.roles.undelete()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/undelete): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.undelete()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/undelete): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method undeletes only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteRoleRequest;
  }

  export class Resource$Projects$Serviceaccounts {
    context: APIRequestContext;
    keys: Resource$Projects$Serviceaccounts$Keys;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.keys = new Resource$Projects$Serviceaccounts$Keys(this.context);
    }

    /**
     * Creates a ServiceAccount.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.create({
     *     // Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
     *     name: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "serviceAccount": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "oauth2ClientId": "my_oauth2ClientId",
     *   //   "projectId": "my_projectId",
     *   //   "uniqueId": "my_uniqueId"
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
      params: Params$Resource$Projects$Serviceaccounts$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Serviceaccounts$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServiceAccount>;
    create(
      params: Params$Resource$Projects$Serviceaccounts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Serviceaccounts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceAccount>,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    create(
      params: Params$Resource$Projects$Serviceaccounts$Create,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    create(callback: BodyResponseCallback<Schema$ServiceAccount>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Create
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ServiceAccount> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/serviceAccounts').replace(
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
        createAPIRequest<Schema$ServiceAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceAccount>(parameters);
      }
    }

    /**
     * Deletes a ServiceAccount. **Warning:** After you delete a service account, you might not be able to undelete it. If you know that you need to re-enable the service account in the future, use DisableServiceAccount instead. If you delete a service account, IAM permanently removes the service account 30 days later. Google Cloud cannot recover the service account after it is permanently removed, even if you file a support request. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use DisableServiceAccount to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.delete({
     *     // Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
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
      params: Params$Resource$Projects$Serviceaccounts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Serviceaccounts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Serviceaccounts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Serviceaccounts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Serviceaccounts$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Delete
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
        {}) as Params$Resource$Projects$Serviceaccounts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
     * Disables a ServiceAccount immediately. If an application uses the service account to authenticate, that application can no longer call Google APIs or access Google Cloud resources. Existing access tokens for the service account are rejected, and requests for new access tokens will fail. To re-enable the service account, use EnableServiceAccount. After you re-enable the service account, its existing access tokens will be accepted, and you can request new access tokens. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use this method to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account with DeleteServiceAccount.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.disable({
     *     // The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
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
    disable(
      params: Params$Resource$Projects$Serviceaccounts$Disable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disable(
      params?: Params$Resource$Projects$Serviceaccounts$Disable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    disable(
      params: Params$Resource$Projects$Serviceaccounts$Disable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disable(
      params: Params$Resource$Projects$Serviceaccounts$Disable,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    disable(
      params: Params$Resource$Projects$Serviceaccounts$Disable,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    disable(callback: BodyResponseCallback<Schema$Empty>): void;
    disable(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Disable
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
        {}) as Params$Resource$Projects$Serviceaccounts$Disable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Disable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:disable').replace(
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
     * Enables a ServiceAccount that was disabled by DisableServiceAccount. If the service account is already enabled, then this method has no effect. If the service account was disabled by other means—for example, if Google disabled the service account because it was compromised—you cannot use this method to enable the service account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.enable({
     *     // The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
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
    enable(
      params: Params$Resource$Projects$Serviceaccounts$Enable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enable(
      params?: Params$Resource$Projects$Serviceaccounts$Enable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    enable(
      params: Params$Resource$Projects$Serviceaccounts$Enable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enable(
      params: Params$Resource$Projects$Serviceaccounts$Enable,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    enable(
      params: Params$Resource$Projects$Serviceaccounts$Enable,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    enable(callback: BodyResponseCallback<Schema$Empty>): void;
    enable(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Enable
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
        {}) as Params$Resource$Projects$Serviceaccounts$Enable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Enable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:enable').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a ServiceAccount.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.get({
     *     // Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "oauth2ClientId": "my_oauth2ClientId",
     *   //   "projectId": "my_projectId",
     *   //   "uniqueId": "my_uniqueId"
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
      params: Params$Resource$Projects$Serviceaccounts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Serviceaccounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServiceAccount>;
    get(
      params: Params$Resource$Projects$Serviceaccounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Serviceaccounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceAccount>,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    get(
      params: Params$Resource$Projects$Serviceaccounts$Get,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    get(callback: BodyResponseCallback<Schema$ServiceAccount>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Get
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ServiceAccount> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$ServiceAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceAccount>(parameters);
      }
    }

    /**
     * Gets the IAM policy that is attached to a ServiceAccount. This IAM policy specifies which principals have access to the service account. This method does not tell you whether the service account has been granted any roles on other resources. To check whether a service account has role grants on a resource, use the `getIamPolicy` method for that resource. For example, to view the role grants for a project, call the Resource Manager API's [`projects.getIamPolicy`](https://cloud.google.com/resource-manager/reference/rest/v1/projects/getIamPolicy) method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *   });
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
      params: Params$Resource$Projects$Serviceaccounts$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Serviceaccounts$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Serviceaccounts$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Serviceaccounts$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Serviceaccounts$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Getiampolicy
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
        {}) as Params$Resource$Projects$Serviceaccounts$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
     * Lists every ServiceAccount that belongs to a specific project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.list({
     *     // Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
     *     name: 'projects/my-project',
     *     // Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the ListServiceAccountsResponse.next_page_token in a subsequent request. The default is 20, and the maximum is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional pagination token returned in an earlier ListServiceAccountsResponse.next_page_token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
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
      params: Params$Resource$Projects$Serviceaccounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Serviceaccounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListServiceAccountsResponse>;
    list(
      params: Params$Resource$Projects$Serviceaccounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Serviceaccounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServiceAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListServiceAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Serviceaccounts$List,
      callback: BodyResponseCallback<Schema$ListServiceAccountsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListServiceAccountsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$List
        | BodyResponseCallback<Schema$ListServiceAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListServiceAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListServiceAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListServiceAccountsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/serviceAccounts').replace(
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
        createAPIRequest<Schema$ListServiceAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListServiceAccountsResponse>(parameters);
      }
    }

    /**
     * Patches a ServiceAccount.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.patch({
     *     // The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "serviceAccount": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "oauth2ClientId": "my_oauth2ClientId",
     *   //   "projectId": "my_projectId",
     *   //   "uniqueId": "my_uniqueId"
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
      params: Params$Resource$Projects$Serviceaccounts$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Serviceaccounts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServiceAccount>;
    patch(
      params: Params$Resource$Projects$Serviceaccounts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Serviceaccounts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceAccount>,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    patch(
      params: Params$Resource$Projects$Serviceaccounts$Patch,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ServiceAccount>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Patch
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ServiceAccount> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$ServiceAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceAccount>(parameters);
      }
    }

    /**
     * Sets the IAM policy that is attached to a ServiceAccount. Use this method to grant or revoke access to the service account. For example, you could grant a principal the ability to impersonate the service account. This method does not enable the service account to access other resources. To grant roles to a service account on a resource, follow these steps: 1. Call the resource's `getIamPolicy` method to get its current IAM policy. 2. Edit the policy so that it binds the service account to an IAM role for the resource. 3. Call the resource's `setIamPolicy` method to update its IAM policy. For detailed instructions, see [Manage access to project, folders, and organizations](https://cloud.google.com/iam/help/service-accounts/granting-access-to-service-accounts) or [Manage access to other resources](https://cloud.google.com/iam/help/access/manage-other-resources).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
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
      params: Params$Resource$Projects$Serviceaccounts$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Serviceaccounts$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Serviceaccounts$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Serviceaccounts$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Serviceaccounts$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Setiampolicy
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
        {}) as Params$Resource$Projects$Serviceaccounts$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
     * **Note:** This method is deprecated. Use the [`signBlob`](https://cloud.google.com/iam/help/rest-credentials/v1/projects.serviceAccounts/signBlob) method in the IAM Service Account Credentials API instead. If you currently use this method, see the [migration guide](https://cloud.google.com/iam/help/credentials/migrate-api) for instructions. Signs a blob using the system-managed private key for a ServiceAccount.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.signBlob({
     *     // Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bytesToSign": "my_bytesToSign"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keyId": "my_keyId",
     *   //   "signature": "my_signature"
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
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    signBlob(
      params?: Params$Resource$Projects$Serviceaccounts$Signblob,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SignBlobResponse>;
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      options: MethodOptions | BodyResponseCallback<Schema$SignBlobResponse>,
      callback: BodyResponseCallback<Schema$SignBlobResponse>
    ): void;
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      callback: BodyResponseCallback<Schema$SignBlobResponse>
    ): void;
    signBlob(callback: BodyResponseCallback<Schema$SignBlobResponse>): void;
    signBlob(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Signblob
        | BodyResponseCallback<Schema$SignBlobResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SignBlobResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SignBlobResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SignBlobResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Signblob;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Signblob;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:signBlob').replace(
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
        createAPIRequest<Schema$SignBlobResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SignBlobResponse>(parameters);
      }
    }

    /**
     * **Note:** This method is deprecated. Use the [`signJwt`](https://cloud.google.com/iam/help/rest-credentials/v1/projects.serviceAccounts/signJwt) method in the IAM Service Account Credentials API instead. If you currently use this method, see the [migration guide](https://cloud.google.com/iam/help/credentials/migrate-api) for instructions. Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.signJwt({
     *     // Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "payload": "my_payload"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keyId": "my_keyId",
     *   //   "signedJwt": "my_signedJwt"
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
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    signJwt(
      params?: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SignJwtResponse>;
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options: MethodOptions | BodyResponseCallback<Schema$SignJwtResponse>,
      callback: BodyResponseCallback<Schema$SignJwtResponse>
    ): void;
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      callback: BodyResponseCallback<Schema$SignJwtResponse>
    ): void;
    signJwt(callback: BodyResponseCallback<Schema$SignJwtResponse>): void;
    signJwt(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Signjwt
        | BodyResponseCallback<Schema$SignJwtResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SignJwtResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SignJwtResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SignJwtResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Signjwt;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Signjwt;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:signJwt').replace(
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
        createAPIRequest<Schema$SignJwtResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SignJwtResponse>(parameters);
      }
    }

    /**
     * Tests whether the caller has the specified permissions on a ServiceAccount.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
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
      params: Params$Resource$Projects$Serviceaccounts$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Serviceaccounts$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Serviceaccounts$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Serviceaccounts$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Serviceaccounts$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Testiampermissions
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
        {}) as Params$Resource$Projects$Serviceaccounts$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Serviceaccounts$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
     * Restores a deleted ServiceAccount. **Important:** It is not always possible to restore a deleted service account. Use this method only as a last resort. After you delete a service account, IAM permanently removes the service account 30 days later. There is no way to restore a deleted service account that has been permanently removed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.undelete({
     *     // The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
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
     *   // {
     *   //   "restoredAccount": {}
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
    undelete(
      params: Params$Resource$Projects$Serviceaccounts$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Projects$Serviceaccounts$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UndeleteServiceAccountResponse>;
    undelete(
      params: Params$Resource$Projects$Serviceaccounts$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Projects$Serviceaccounts$Undelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UndeleteServiceAccountResponse>,
      callback: BodyResponseCallback<Schema$UndeleteServiceAccountResponse>
    ): void;
    undelete(
      params: Params$Resource$Projects$Serviceaccounts$Undelete,
      callback: BodyResponseCallback<Schema$UndeleteServiceAccountResponse>
    ): void;
    undelete(
      callback: BodyResponseCallback<Schema$UndeleteServiceAccountResponse>
    ): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Undelete
        | BodyResponseCallback<Schema$UndeleteServiceAccountResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UndeleteServiceAccountResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UndeleteServiceAccountResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UndeleteServiceAccountResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undelete').replace(
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
        createAPIRequest<Schema$UndeleteServiceAccountResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UndeleteServiceAccountResponse>(
          parameters
        );
      }
    }

    /**
     * **Note:** We are in the process of deprecating this method. Use PatchServiceAccount instead. Updates a ServiceAccount. You can update only the `display_name` field.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.update({
     *     // The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "displayName": "my_displayName",
     *       //   "email": "my_email",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "oauth2ClientId": "my_oauth2ClientId",
     *       //   "projectId": "my_projectId",
     *       //   "uniqueId": "my_uniqueId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "email": "my_email",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "oauth2ClientId": "my_oauth2ClientId",
     *   //   "projectId": "my_projectId",
     *   //   "uniqueId": "my_uniqueId"
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
    update(
      params: Params$Resource$Projects$Serviceaccounts$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Serviceaccounts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServiceAccount>;
    update(
      params: Params$Resource$Projects$Serviceaccounts$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Serviceaccounts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceAccount>,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    update(
      params: Params$Resource$Projects$Serviceaccounts$Update,
      callback: BodyResponseCallback<Schema$ServiceAccount>
    ): void;
    update(callback: BodyResponseCallback<Schema$ServiceAccount>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Update
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceAccount>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ServiceAccount> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$ServiceAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceAccount>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Serviceaccounts$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateServiceAccountRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Disable
    extends StandardParameters {
    /**
     * The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DisableServiceAccountRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Enable
    extends StandardParameters {
    /**
     * The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnableServiceAccountRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Getiampolicy
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
  export interface Params$Resource$Projects$Serviceaccounts$List
    extends StandardParameters {
    /**
     * Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
     */
    name?: string;
    /**
     * Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the ListServiceAccountsResponse.next_page_token in a subsequent request. The default is 20, and the maximum is 100.
     */
    pageSize?: number;
    /**
     * Optional pagination token returned in an earlier ListServiceAccountsResponse.next_page_token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Patch
    extends StandardParameters {
    /**
     * The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PatchServiceAccountRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Setiampolicy
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
  export interface Params$Resource$Projects$Serviceaccounts$Signblob
    extends StandardParameters {
    /**
     * Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SignBlobRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Signjwt
    extends StandardParameters {
    /**
     * Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SignJwtRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Testiampermissions
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
  export interface Params$Resource$Projects$Serviceaccounts$Undelete
    extends StandardParameters {
    /**
     * The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteServiceAccountRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Update
    extends StandardParameters {
    /**
     * The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ServiceAccount;
  }

  export class Resource$Projects$Serviceaccounts$Keys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a ServiceAccountKey.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.keys.create({
     *     // Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "keyAlgorithm": "my_keyAlgorithm",
     *       //   "privateKeyType": "my_privateKeyType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disabled": false,
     *   //   "keyAlgorithm": "my_keyAlgorithm",
     *   //   "keyOrigin": "my_keyOrigin",
     *   //   "keyType": "my_keyType",
     *   //   "name": "my_name",
     *   //   "privateKeyData": "my_privateKeyData",
     *   //   "privateKeyType": "my_privateKeyType",
     *   //   "publicKeyData": "my_publicKeyData",
     *   //   "validAfterTime": "my_validAfterTime",
     *   //   "validBeforeTime": "my_validBeforeTime"
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
      params: Params$Resource$Projects$Serviceaccounts$Keys$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Serviceaccounts$Keys$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServiceAccountKey>;
    create(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceAccountKey>,
      callback: BodyResponseCallback<Schema$ServiceAccountKey>
    ): void;
    create(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Create,
      callback: BodyResponseCallback<Schema$ServiceAccountKey>
    ): void;
    create(callback: BodyResponseCallback<Schema$ServiceAccountKey>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Keys$Create
        | BodyResponseCallback<Schema$ServiceAccountKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceAccountKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceAccountKey>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ServiceAccountKey>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Keys$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Keys$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/keys').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ServiceAccountKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceAccountKey>(parameters);
      }
    }

    /**
     * Deletes a ServiceAccountKey. Deleting a service account key does not revoke short-lived credentials that have been issued based on the service account key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.keys.delete({
     *     // Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount/keys/my-key',
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
      params: Params$Resource$Projects$Serviceaccounts$Keys$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Serviceaccounts$Keys$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Keys$Delete
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
        {}) as Params$Resource$Projects$Serviceaccounts$Keys$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Keys$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
     * Disable a ServiceAccountKey. A disabled service account key can be re-enabled with EnableServiceAccountKey.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.keys.disable({
     *     // Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount/keys/my-key',
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
    disable(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Disable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disable(
      params?: Params$Resource$Projects$Serviceaccounts$Keys$Disable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    disable(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Disable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disable(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Disable,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    disable(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Disable,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    disable(callback: BodyResponseCallback<Schema$Empty>): void;
    disable(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Keys$Disable
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
        {}) as Params$Resource$Projects$Serviceaccounts$Keys$Disable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Keys$Disable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:disable').replace(
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
     * Enable a ServiceAccountKey.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.keys.enable({
     *     // Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount/keys/my-key',
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
    enable(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Enable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enable(
      params?: Params$Resource$Projects$Serviceaccounts$Keys$Enable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    enable(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Enable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enable(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Enable,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    enable(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Enable,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    enable(callback: BodyResponseCallback<Schema$Empty>): void;
    enable(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Keys$Enable
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
        {}) as Params$Resource$Projects$Serviceaccounts$Keys$Enable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Keys$Enable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:enable').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a ServiceAccountKey.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.keys.get({
     *     // Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount/keys/my-key',
     *     // Optional. The output format of the public key. The default is `TYPE_NONE`, which means that the public key is not returned.
     *     publicKeyType: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disabled": false,
     *   //   "keyAlgorithm": "my_keyAlgorithm",
     *   //   "keyOrigin": "my_keyOrigin",
     *   //   "keyType": "my_keyType",
     *   //   "name": "my_name",
     *   //   "privateKeyData": "my_privateKeyData",
     *   //   "privateKeyType": "my_privateKeyType",
     *   //   "publicKeyData": "my_publicKeyData",
     *   //   "validAfterTime": "my_validAfterTime",
     *   //   "validBeforeTime": "my_validBeforeTime"
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
      params: Params$Resource$Projects$Serviceaccounts$Keys$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Serviceaccounts$Keys$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServiceAccountKey>;
    get(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceAccountKey>,
      callback: BodyResponseCallback<Schema$ServiceAccountKey>
    ): void;
    get(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Get,
      callback: BodyResponseCallback<Schema$ServiceAccountKey>
    ): void;
    get(callback: BodyResponseCallback<Schema$ServiceAccountKey>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Keys$Get
        | BodyResponseCallback<Schema$ServiceAccountKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceAccountKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceAccountKey>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ServiceAccountKey>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Keys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Keys$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$ServiceAccountKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceAccountKey>(parameters);
      }
    }

    /**
     * Lists every ServiceAccountKey for a service account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.keys.list({
     *     // Filters the types of keys the user wants to include in the list response. Duplicate key types are not allowed. If no key type is provided, all keys are returned.
     *     keyTypes: 'placeholder-value',
     *     // Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keys": []
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
      params: Params$Resource$Projects$Serviceaccounts$Keys$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Serviceaccounts$Keys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListServiceAccountKeysResponse>;
    list(
      params: Params$Resource$Projects$Serviceaccounts$Keys$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Serviceaccounts$Keys$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServiceAccountKeysResponse>,
      callback: BodyResponseCallback<Schema$ListServiceAccountKeysResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Serviceaccounts$Keys$List,
      callback: BodyResponseCallback<Schema$ListServiceAccountKeysResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListServiceAccountKeysResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Keys$List
        | BodyResponseCallback<Schema$ListServiceAccountKeysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListServiceAccountKeysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListServiceAccountKeysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListServiceAccountKeysResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Keys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Keys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/keys').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListServiceAccountKeysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListServiceAccountKeysResponse>(
          parameters
        );
      }
    }

    /**
     * Uploads the public key portion of a key pair that you manage, and associates the public key with a ServiceAccount. After you upload the public key, you can use the private key from the key pair as a service account key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.projects.serviceAccounts.keys.upload({
     *     // The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "publicKeyData": "my_publicKeyData"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disabled": false,
     *   //   "keyAlgorithm": "my_keyAlgorithm",
     *   //   "keyOrigin": "my_keyOrigin",
     *   //   "keyType": "my_keyType",
     *   //   "name": "my_name",
     *   //   "privateKeyData": "my_privateKeyData",
     *   //   "privateKeyType": "my_privateKeyType",
     *   //   "publicKeyData": "my_publicKeyData",
     *   //   "validAfterTime": "my_validAfterTime",
     *   //   "validBeforeTime": "my_validBeforeTime"
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
    upload(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Projects$Serviceaccounts$Keys$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServiceAccountKey>;
    upload(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceAccountKey>,
      callback: BodyResponseCallback<Schema$ServiceAccountKey>
    ): void;
    upload(
      params: Params$Resource$Projects$Serviceaccounts$Keys$Upload,
      callback: BodyResponseCallback<Schema$ServiceAccountKey>
    ): void;
    upload(callback: BodyResponseCallback<Schema$ServiceAccountKey>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Keys$Upload
        | BodyResponseCallback<Schema$ServiceAccountKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceAccountKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceAccountKey>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ServiceAccountKey>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Keys$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Keys$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/keys:upload').replace(
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
        createAPIRequest<Schema$ServiceAccountKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceAccountKey>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Serviceaccounts$Keys$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateServiceAccountKeyRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Keys$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Keys$Disable
    extends StandardParameters {
    /**
     * Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DisableServiceAccountKeyRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Keys$Enable
    extends StandardParameters {
    /**
     * Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnableServiceAccountKeyRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Keys$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}/keys/{KEY_ID\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}/keys/{KEY_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;
    /**
     * Optional. The output format of the public key. The default is `TYPE_NONE`, which means that the public key is not returned.
     */
    publicKeyType?: string;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Keys$List
    extends StandardParameters {
    /**
     * Filters the types of keys the user wants to include in the list response. Duplicate key types are not allowed. If no key type is provided, all keys are returned.
     */
    keyTypes?: string[];
    /**
     * Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Keys$Upload
    extends StandardParameters {
    /**
     * The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID\}/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/{PROJECT_ID\}/serviceAccounts/{UNIQUE_ID\}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS\}` * `projects/-/serviceAccounts/{UNIQUE_ID\}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadServiceAccountKeyRequest;
  }

  export class Resource$Roles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the definition of a Role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.roles.get({
     *     // The `name` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`roles.get()`](https://cloud.google.com/iam/reference/rest/v1/roles/get): `roles/{ROLE_NAME\}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME\}` * [`projects.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     name: 'roles/my-role',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "includedPermissions": [],
     *   //   "name": "my_name",
     *   //   "stage": "my_stage",
     *   //   "title": "my_title"
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
      params: Params$Resource$Roles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Roles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Role>;
    get(
      params: Params$Resource$Roles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Roles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Role>,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    get(
      params: Params$Resource$Roles$Get,
      callback: BodyResponseCallback<Schema$Role>
    ): void;
    get(callback: BodyResponseCallback<Schema$Role>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Roles$Get
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Role>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Role> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Roles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
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
        createAPIRequest<Schema$Role>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Role>(parameters);
      }
    }

    /**
     * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.roles.list({
     *     // Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     *     pageSize: 'placeholder-value',
     *     // Optional pagination token returned in an earlier ListRolesResponse.
     *     pageToken: 'placeholder-value',
     *     // The `parent` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`roles.list()`](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [`projects.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID\}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID\}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     *     parent: 'placeholder-value',
     *     // Include Roles that have been deleted.
     *     showDeleted: 'placeholder-value',
     *     // Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "roles": []
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
      params: Params$Resource$Roles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Roles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRolesResponse>;
    list(
      params: Params$Resource$Roles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Roles$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRolesResponse>,
      callback: BodyResponseCallback<Schema$ListRolesResponse>
    ): void;
    list(
      params: Params$Resource$Roles$List,
      callback: BodyResponseCallback<Schema$ListRolesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRolesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Roles$List
        | BodyResponseCallback<Schema$ListRolesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRolesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRolesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRolesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Roles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/roles').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRolesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRolesResponse>(parameters);
      }
    }

    /**
     * Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iam.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const iam = google.iam('v1');
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
     *   const res = await iam.roles.queryGrantableRoles({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "fullResourceName": "my_fullResourceName",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "view": "my_view"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "roles": []
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
    queryGrantableRoles(
      params: Params$Resource$Roles$Querygrantableroles,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    queryGrantableRoles(
      params?: Params$Resource$Roles$Querygrantableroles,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryGrantableRolesResponse>;
    queryGrantableRoles(
      params: Params$Resource$Roles$Querygrantableroles,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryGrantableRoles(
      params: Params$Resource$Roles$Querygrantableroles,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryGrantableRolesResponse>,
      callback: BodyResponseCallback<Schema$QueryGrantableRolesResponse>
    ): void;
    queryGrantableRoles(
      params: Params$Resource$Roles$Querygrantableroles,
      callback: BodyResponseCallback<Schema$QueryGrantableRolesResponse>
    ): void;
    queryGrantableRoles(
      callback: BodyResponseCallback<Schema$QueryGrantableRolesResponse>
    ): void;
    queryGrantableRoles(
      paramsOrCallback?:
        | Params$Resource$Roles$Querygrantableroles
        | BodyResponseCallback<Schema$QueryGrantableRolesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryGrantableRolesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryGrantableRolesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryGrantableRolesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Roles$Querygrantableroles;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Roles$Querygrantableroles;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/roles:queryGrantableRoles').replace(
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
        createAPIRequest<Schema$QueryGrantableRolesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryGrantableRolesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Roles$Get extends StandardParameters {
    /**
     * The `name` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`roles.get()`](https://cloud.google.com/iam/reference/rest/v1/roles/get): `roles/{ROLE_NAME\}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME\}` * [`projects.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles/{CUSTOM_ROLE_ID\}` * [`organizations.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles/{CUSTOM_ROLE_ID\}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    name?: string;
  }
  export interface Params$Resource$Roles$List extends StandardParameters {
    /**
     * Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
     */
    pageSize?: number;
    /**
     * Optional pagination token returned in an earlier ListRolesResponse.
     */
    pageToken?: string;
    /**
     * The `parent` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`roles.list()`](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [`projects.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID\}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID\}/roles` * [`organizations.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID\}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID\}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
     */
    parent?: string;
    /**
     * Include Roles that have been deleted.
     */
    showDeleted?: boolean;
    /**
     * Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
     */
    view?: string;
  }
  export interface Params$Resource$Roles$Querygrantableroles
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryGrantableRolesRequest;
  }
}
