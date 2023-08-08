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

export namespace analyticshub_v1 {
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
   * Analytics Hub API
   *
   * Exchange data and analytics assets securely and efficiently.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const analyticshub = google.analyticshub('v1');
   * ```
   */
  export class Analyticshub {
    context: APIRequestContext;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
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
   * A reference to a shared dataset. It is an existing BigQuery dataset with a collection of objects such as tables and views that you want to share with subscribers. When subscriber's subscribe to a listing, Analytics Hub creates a linked dataset in the subscriber's project. A Linked dataset is an opaque, read-only BigQuery dataset that serves as a _symbolic link_ to a shared dataset.
   */
  export interface Schema$BigQueryDatasetSource {
    /**
     * Resource name of the dataset source for this listing. e.g. `projects/myproject/datasets/123`
     */
    dataset?: string | null;
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
   * A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.
   */
  export interface Schema$DataExchange {
    /**
     * Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.
     */
    description?: string | null;
    /**
     * Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes.
     */
    displayName?: string | null;
    /**
     * Optional. Documentation describing the data exchange.
     */
    documentation?: string | null;
    /**
     * Optional. Base64 encoded image representing the data exchange. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.
     */
    icon?: string | null;
    /**
     * Output only. Number of listings contained in the data exchange.
     */
    listingCount?: number | null;
    /**
     * Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/US/dataExchanges/123`.
     */
    name?: string | null;
    /**
     * Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes.
     */
    primaryContact?: string | null;
    /**
     * Required. Configurable data sharing environment option for a data exchange.
     */
    sharingEnvironmentConfig?: Schema$SharingEnvironmentConfig;
  }
  /**
   * Contains details of the data provider.
   */
  export interface Schema$DataProvider {
    /**
     * Optional. Name of the data provider.
     */
    name?: string | null;
    /**
     * Optional. Email or URL of the data provider. Max Length: 1000 bytes.
     */
    primaryContact?: string | null;
  }
  /**
   * Data Clean Room (DCR), used for privacy-safe and secured data sharing.
   */
  export interface Schema$DcrExchangeConfig {}
  /**
   * Default Analytics Hub data exchange, used for secured data sharing.
   */
  export interface Schema$DefaultExchangeConfig {}
  /**
   * Defines the destination bigquery dataset.
   */
  export interface Schema$DestinationDataset {
    /**
     * Required. A reference that identifies the destination dataset.
     */
    datasetReference?: Schema$DestinationDatasetReference;
    /**
     * Optional. A user-friendly description of the dataset.
     */
    description?: string | null;
    /**
     * Optional. A descriptive name for the dataset.
     */
    friendlyName?: string | null;
    /**
     * Optional. The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See https://cloud.google.com/resource-manager/docs/creating-managing-labels for more information.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.
     */
    location?: string | null;
  }
  /**
   * Contains the reference that identifies a destination bigquery dataset.
   */
  export interface Schema$DestinationDatasetReference {
    /**
     * Required. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
     */
    datasetId?: string | null;
    /**
     * Required. The ID of the project containing this dataset.
     */
    projectId?: string | null;
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
   * Reference to a linked resource tracked by this Subscription.
   */
  export interface Schema$LinkedResource {
    /**
     * Output only. Name of the linked dataset, e.g. projects/subscriberproject/datasets/linked_dataset
     */
    linkedDataset?: string | null;
  }
  /**
   * Message for response to the list of data exchanges.
   */
  export interface Schema$ListDataExchangesResponse {
    /**
     * The list of data exchanges.
     */
    dataExchanges?: Schema$DataExchange[];
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.
   */
  export interface Schema$Listing {
    /**
     * Required. Shared dataset i.e. BigQuery dataset source.
     */
    bigqueryDataset?: Schema$BigQueryDatasetSource;
    /**
     * Optional. Categories of the listing. Up to two categories are allowed.
     */
    categories?: string[] | null;
    /**
     * Optional. Details of the data provider who owns the source data.
     */
    dataProvider?: Schema$DataProvider;
    /**
     * Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.
     */
    description?: string | null;
    /**
     * Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes.
     */
    displayName?: string | null;
    /**
     * Optional. Documentation describing the listing.
     */
    documentation?: string | null;
    /**
     * Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.
     */
    icon?: string | null;
    /**
     * Output only. The resource name of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`
     */
    name?: string | null;
    /**
     * Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes.
     */
    primaryContact?: string | null;
    /**
     * Optional. Details of the publisher who owns the listing and who can share the source data.
     */
    publisher?: Schema$Publisher;
    /**
     * Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes.
     */
    requestAccess?: string | null;
    /**
     * Optional. If set, restricted export configuration will be propagated and enforced on the linked dataset.
     */
    restrictedExportConfig?: Schema$RestrictedExportConfig;
    /**
     * Output only. Current state of the listing.
     */
    state?: string | null;
  }
  /**
   * Message for response to the list of Listings.
   */
  export interface Schema$ListListingsResponse {
    /**
     * The list of Listing.
     */
    listings?: Schema$Listing[];
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Message for response to listing data exchanges in an organization and location.
   */
  export interface Schema$ListOrgDataExchangesResponse {
    /**
     * The list of data exchanges.
     */
    dataExchanges?: Schema$DataExchange[];
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Message for response to the listing of shared resource subscriptions.
   */
  export interface Schema$ListSharedResourceSubscriptionsResponse {
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * The list of subscriptions.
     */
    sharedResourceSubscriptions?: Schema$Subscription[];
  }
  /**
   * Message for response to the listing of subscriptions.
   */
  export interface Schema$ListSubscriptionsResponse {
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * The list of subscriptions.
     */
    subscriptions?: Schema$Subscription[];
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
   * Contains details of the listing publisher.
   */
  export interface Schema$Publisher {
    /**
     * Optional. Name of the listing publisher.
     */
    name?: string | null;
    /**
     * Optional. Email or URL of the listing publisher. Max Length: 1000 bytes.
     */
    primaryContact?: string | null;
  }
  /**
   * Message for refreshing a subscription.
   */
  export interface Schema$RefreshSubscriptionRequest {}
  /**
   * Message for response when you refresh a subscription.
   */
  export interface Schema$RefreshSubscriptionResponse {
    /**
     * The refreshed subscription resource.
     */
    subscription?: Schema$Subscription;
  }
  /**
   * Restricted export config, used to configure restricted export on linked dataset.
   */
  export interface Schema$RestrictedExportConfig {
    /**
     * Optional. If true, enable restricted export.
     */
    enabled?: boolean | null;
    /**
     * Output only. If true, restrict direct table access(read api/tabledata.list) on linked table.
     */
    restrictDirectTableAccess?: boolean | null;
    /**
     * Optional. If true, restrict export of query result derived from restricted linked dataset table.
     */
    restrictQueryResult?: boolean | null;
  }
  /**
   * Message for revoking a subscription.
   */
  export interface Schema$RevokeSubscriptionRequest {}
  /**
   * Message for response when you revoke a subscription.
   */
  export interface Schema$RevokeSubscriptionResponse {}
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
   * Sharing environment is a behavior model for sharing data within a data exchange. This option is configurable for a data exchange.
   */
  export interface Schema$SharingEnvironmentConfig {
    /**
     * Data Clean Room (DCR), used for privacy-safe and secured data sharing.
     */
    dcrExchangeConfig?: Schema$DcrExchangeConfig;
    /**
     * Default Analytics Hub data exchange, used for secured data sharing.
     */
    defaultExchangeConfig?: Schema$DefaultExchangeConfig;
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
   * Message for subscribing to a Data Exchange.
   */
  export interface Schema$SubscribeDataExchangeRequest {
    /**
     * Required. The parent resource path of the Subscription. e.g. `projects/subscriberproject/locations/US`
     */
    destination?: string | null;
    /**
     * Email of the subscriber.
     */
    subscriberContact?: string | null;
    /**
     * Required. Name of the subscription to create. e.g. `subscription1`
     */
    subscription?: string | null;
  }
  /**
   * Message for response when you subscribe to a Data Exchange.
   */
  export interface Schema$SubscribeDataExchangeResponse {
    /**
     * Subscription object created from this subscribe action.
     */
    subscription?: Schema$Subscription;
  }
  /**
   * Message for subscribing to a listing.
   */
  export interface Schema$SubscribeListingRequest {
    /**
     * BigQuery destination dataset to create for the subscriber.
     */
    destinationDataset?: Schema$DestinationDataset;
  }
  /**
   * Message for response when you subscribe to a listing.
   */
  export interface Schema$SubscribeListingResponse {
    /**
     * Subscription object created from this subscribe action.
     */
    subscription?: Schema$Subscription;
  }
  /**
   * A subscription represents a subscribers' access to a particular set of published data. It contains references to associated listings, data exchanges, and linked datasets. TODO(b/267528977) Consider port the new resource to v1beta1 and dataexchange APIs.
   */
  export interface Schema$Subscription {
    /**
     * Output only. Timestamp when the subscription was created.
     */
    creationTime?: string | null;
    /**
     * Output only. Resource name of the source Data Exchange. e.g. projects/123/locations/US/dataExchanges/456
     */
    dataExchange?: string | null;
    /**
     * Output only. Timestamp when the subscription was last modified.
     */
    lastModifyTime?: string | null;
    /**
     * Output only. Map of listing resource names to associated linked resource, e.g. projects/123/locations/US/dataExchanges/456/listings/789 -\> projects/123/datasets/my_dataset For listing-level subscriptions, this is a map of size 1. Only contains values if state == STATE_ACTIVE.
     */
    linkedDatasetMap?: {[key: string]: Schema$LinkedResource} | null;
    /**
     * Output only. Resource name of the source Listing. e.g. projects/123/locations/US/dataExchanges/456/listings/789
     */
    listing?: string | null;
    /**
     * Output only. The resource name of the subscription. e.g. `projects/myproject/locations/US/subscriptions/123`.
     */
    name?: string | null;
    /**
     * Output only. Display name of the project of this subscription.
     */
    organizationDisplayName?: string | null;
    /**
     * Output only. Organization of the project this subscription belongs to.
     */
    organizationId?: string | null;
    /**
     * Output only. Current state of the subscription.
     */
    state?: string | null;
    /**
     * Output only. Email of the subscriber.
     */
    subscriberContact?: string | null;
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

  export class Resource$Organizations {
    context: APIRequestContext;
    locations: Resource$Organizations$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Organizations$Locations(this.context);
    }
  }

  export class Resource$Organizations$Locations {
    context: APIRequestContext;
    dataExchanges: Resource$Organizations$Locations$Dataexchanges;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataExchanges = new Resource$Organizations$Locations$Dataexchanges(
        this.context
      );
    }
  }

  export class Resource$Organizations$Locations$Dataexchanges {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all data exchanges from projects in a given organization and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Locations$Dataexchanges$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Locations$Dataexchanges$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOrgDataExchangesResponse>;
    list(
      params: Params$Resource$Organizations$Locations$Dataexchanges$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dataexchanges$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOrgDataExchangesResponse>,
      callback: BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dataexchanges$List,
      callback: BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Dataexchanges$List
        | BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOrgDataExchangesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Dataexchanges$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Dataexchanges$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+organization}/dataExchanges').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['organization'],
        pathParams: ['organization'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOrgDataExchangesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOrgDataExchangesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Dataexchanges$List
    extends StandardParameters {
    /**
     * Required. The organization resource path of the projects containing DataExchanges. e.g. `organizations/myorg/locations/US`.
     */
    organization?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
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
    dataExchanges: Resource$Projects$Locations$Dataexchanges;
    subscriptions: Resource$Projects$Locations$Subscriptions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataExchanges = new Resource$Projects$Locations$Dataexchanges(
        this.context
      );
      this.subscriptions = new Resource$Projects$Locations$Subscriptions(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Dataexchanges {
    context: APIRequestContext;
    listings: Resource$Projects$Locations$Dataexchanges$Listings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.listings = new Resource$Projects$Locations$Dataexchanges$Listings(
        this.context
      );
    }

    /**
     * Creates a new data exchange.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataExchange>;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DataExchange>,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Create,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    create(callback: BodyResponseCallback<Schema$DataExchange>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Create
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DataExchange> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataExchanges').replace(
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
        createAPIRequest<Schema$DataExchange>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataExchange>(parameters);
      }
    }

    /**
     * Deletes an existing data exchange.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Delete
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Gets the details of a data exchange.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataExchange>;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataExchange>,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Get,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataExchange>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Get
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DataExchange> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$DataExchange>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataExchange>(parameters);
      }
    }

    /**
     * Gets the IAM policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Lists all data exchanges in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Dataexchanges$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDataExchangesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataExchangesResponse>,
      callback: BodyResponseCallback<Schema$ListDataExchangesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$List,
      callback: BodyResponseCallback<Schema$ListDataExchangesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDataExchangesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$List
        | BodyResponseCallback<Schema$ListDataExchangesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataExchangesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataExchangesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDataExchangesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataExchanges').replace(
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
        createAPIRequest<Schema$ListDataExchangesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataExchangesResponse>(parameters);
      }
    }

    /**
     * Lists all subscriptions on a given Data Exchange or Listing.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listSubscriptions(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSharedResourceSubscriptionsResponse>;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSharedResourceSubscriptionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:listSubscriptions').replace(
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
        createAPIRequest<Schema$ListSharedResourceSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSharedResourceSubscriptionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing data exchange.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataExchange>;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$DataExchange>,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    patch(callback: BodyResponseCallback<Schema$DataExchange>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Patch
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DataExchange> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$DataExchange>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataExchange>(parameters);
      }
    }

    /**
     * Sets the IAM policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Creates a Subscription to a Data Exchange. This is a long-running operation as it will create one or more linked datasets.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    subscribe(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    subscribe(callback: BodyResponseCallback<Schema$Operation>): void;
    subscribe(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Subscribe
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Subscribe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Subscribe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:subscribe').replace(
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
     * Returns the permissions that a caller has.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Dataexchanges$Create
    extends StandardParameters {
    /**
     * Required. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces. Max length: 100 bytes.
     */
    dataExchangeId?: string;
    /**
     * Required. The parent resource path of the data exchange. e.g. `projects/myproject/locations/US`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataExchange;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Delete
    extends StandardParameters {
    /**
     * Required. The full name of the data exchange resource that you want to delete. For example, `projects/myproject/locations/US/dataExchanges/123`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the data exchange. e.g. `projects/myproject/locations/US/dataExchanges/123`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Dataexchanges$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The parent resource path of the data exchanges. e.g. `projects/myproject/locations/US`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions
    extends StandardParameters {
    /**
     * If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     */
    includeDeletedSubscriptions?: boolean;
    /**
     * The maximum number of results to return in a single response page.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/US/dataExchanges/456 OR e.g. projects/123/locations/US/dataExchanges/456/listings/789
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/US/dataExchanges/123`.
     */
    name?: string;
    /**
     * Required. Field mask specifies the fields to update in the data exchange resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataExchange;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Dataexchanges$Subscribe
    extends StandardParameters {
    /**
     * Required. Resource name of the Data Exchange. e.g. `projects/publisherproject/locations/US/dataExchanges/123`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscribeDataExchangeRequest;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions
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

  export class Resource$Projects$Locations$Dataexchanges$Listings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new listing.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Listing>;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    create(callback: BodyResponseCallback<Schema$Listing>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Create
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Listing> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/listings').replace(
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
        createAPIRequest<Schema$Listing>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * Deletes a listing.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Gets the details of a listing.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Listing>;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    get(callback: BodyResponseCallback<Schema$Listing>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Get
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Listing> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$Listing>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * Gets the IAM policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Lists all listings in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListListingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListListingsResponse>,
      callback: BodyResponseCallback<Schema$ListListingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      callback: BodyResponseCallback<Schema$ListListingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListListingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$List
        | BodyResponseCallback<Schema$ListListingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListListingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListListingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListListingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/listings').replace(
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
        createAPIRequest<Schema$ListListingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListListingsResponse>(parameters);
      }
    }

    /**
     * Lists all subscriptions on a given Data Exchange or Listing.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listSubscriptions(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSharedResourceSubscriptionsResponse>;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSharedResourceSubscriptionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:listSubscriptions').replace(
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
        createAPIRequest<Schema$ListSharedResourceSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSharedResourceSubscriptionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing listing.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Listing>;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Listing>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Listing> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$Listing>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * Sets the IAM policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    subscribe(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscribeListingResponse>;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscribeListingResponse>,
      callback: BodyResponseCallback<Schema$SubscribeListingResponse>
    ): void;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      callback: BodyResponseCallback<Schema$SubscribeListingResponse>
    ): void;
    subscribe(
      callback: BodyResponseCallback<Schema$SubscribeListingResponse>
    ): void;
    subscribe(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe
        | BodyResponseCallback<Schema$SubscribeListingResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscribeListingResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscribeListingResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscribeListingResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:subscribe').replace(
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
        createAPIRequest<Schema$SubscribeListingResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscribeListingResponse>(parameters);
      }
    }

    /**
     * Returns the permissions that a caller has.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Create
    extends StandardParameters {
    /**
     * Required. The ID of the listing to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces. Max length: 100 bytes.
     */
    listingId?: string;
    /**
     * Required. The parent resource path of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Listing;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the listing to delete. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The parent resource path of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions
    extends StandardParameters {
    /**
     * If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     */
    includeDeletedSubscriptions?: boolean;
    /**
     * The maximum number of results to return in a single response page.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/US/dataExchanges/456 OR e.g. projects/123/locations/US/dataExchanges/456/listings/789
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`
     */
    name?: string;
    /**
     * Required. Field mask specifies the fields to update in the listing resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Listing;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe
    extends StandardParameters {
    /**
     * Required. Resource name of the listing that you want to subscribe to. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscribeListingRequest;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions
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

  export class Resource$Projects$Locations$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a subscription.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Subscriptions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Subscriptions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Subscriptions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Subscriptions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Delete
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
        {}) as Params$Resource$Projects$Locations$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Gets the details of a Subscription.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Subscriptions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Subscriptions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    get(
      params: Params$Resource$Projects$Locations$Subscriptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Subscriptions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Subscriptions$Get,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(callback: BodyResponseCallback<Schema$Subscription>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Get
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Subscriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Lists all subscriptions in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Subscriptions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Subscriptions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSubscriptionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Subscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Subscriptions$List,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$List
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSubscriptionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/subscriptions').replace(
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
        createAPIRequest<Schema$ListSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubscriptionsResponse>(parameters);
      }
    }

    /**
     * Refreshes a Subscription to a Data Exchange. A Data Exchange can become stale when a publisher adds or removes data. This is a long-running operation as it may create many linked datasets.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    refresh(
      params: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    refresh(
      params?: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    refresh(
      params: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    refresh(
      params: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    refresh(
      params: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    refresh(callback: BodyResponseCallback<Schema$Operation>): void;
    refresh(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Refresh
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
        {}) as Params$Resource$Projects$Locations$Subscriptions$Refresh;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$Refresh;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:refresh').replace(
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
     * Revokes a given subscription.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    revoke(
      params: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    revoke(
      params?: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevokeSubscriptionResponse>;
    revoke(
      params: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RevokeSubscriptionResponse>,
      callback: BodyResponseCallback<Schema$RevokeSubscriptionResponse>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      callback: BodyResponseCallback<Schema$RevokeSubscriptionResponse>
    ): void;
    revoke(
      callback: BodyResponseCallback<Schema$RevokeSubscriptionResponse>
    ): void;
    revoke(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Revoke
        | BodyResponseCallback<Schema$RevokeSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RevokeSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RevokeSubscriptionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RevokeSubscriptionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Subscriptions$Revoke;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$Revoke;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:revoke').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RevokeSubscriptionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RevokeSubscriptionResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Subscriptions$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the subscription to delete. e.g. projects/123/locations/US/subscriptions/456
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the subscription. e.g. projects/123/locations/US/subscriptions/456
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$List
    extends StandardParameters {
    /**
     * The filter expression may be used to filter by Data Exchange or Listing.
     */
    filter?: string;
    /**
     * The maximum number of results to return in a single response page.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource path of the subscription. e.g. projects/myproject/locations/US
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$Refresh
    extends StandardParameters {
    /**
     * Required. Resource name of the Subscription to refresh. e.g. `projects/subscriberproject/locations/US/subscriptions/123`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RefreshSubscriptionRequest;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$Revoke
    extends StandardParameters {
    /**
     * Required. Resource name of the subscription to revoke. e.g. projects/123/locations/US/subscriptions/456
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RevokeSubscriptionRequest;
  }
}
