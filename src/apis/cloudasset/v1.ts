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
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
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

export namespace cloudasset_v1 {
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
   * Cloud Asset API
   *
   * The cloud asset API manages the history and inventory of cloud resources.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudasset = google.cloudasset('v1');
   *
   * @namespace cloudasset
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Cloudasset
   */
  export class Cloudasset {
    context: APIRequestContext;
    feeds: Resource$Feeds;
    operations: Resource$Operations;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.feeds = new Resource$Feeds(this.context);
      this.operations = new Resource$Operations(this.context);
      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a Cloud IAM policy.
   */
  export interface Schema$Asset {
    accessLevel?: Schema$GoogleIdentityAccesscontextmanagerV1AccessLevel;
    accessPolicy?: Schema$GoogleIdentityAccesscontextmanagerV1AccessPolicy;
    /**
     * The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself.  Example: `[&quot;projects/123456789&quot;, &quot;folders/5432&quot;, &quot;organizations/1234&quot;]`
     */
    ancestors?: string[] | null;
    /**
     * The type of the asset. Example: `compute.googleapis.com/Disk`  See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
     */
    assetType?: string | null;
    /**
     * A representation of the Cloud IAM policy set on a Google Cloud resource. There can be a maximum of one Cloud IAM policy set on any given resource. In addition, Cloud IAM policies inherit their granted access scope from any policies set on parent resources in the resource hierarchy. Therefore, the effectively policy is the union of both the policy set on this resource and each policy set on all of the resource&#39;s ancestry resource levels in the hierarchy. See [this topic](https://cloud.google.com/iam/docs/policies#inheritance) for more information.
     */
    iamPolicy?: Schema$Policy;
    /**
     * The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`  See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.
     */
    name?: string | null;
    /**
     * A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource.
     */
    orgPolicy?: Schema$GoogleCloudOrgpolicyV1Policy[];
    /**
     * A representation of the resource.
     */
    resource?: Schema$Resource;
    servicePerimeter?: Schema$GoogleIdentityAccesscontextmanagerV1ServicePerimeter;
    /**
     * The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed.
     */
    updateTime?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;,           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;,           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
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
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
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
   * Batch get assets history response.
   */
  export interface Schema$BatchGetAssetsHistoryResponse {
    /**
     * A list of assets with valid time windows.
     */
    assets?: Schema$TemporalAsset[];
  }
  /**
   * A BigQuery destination for exporting assets to.
   */
  export interface Schema$BigQueryDestination {
    /**
     * Required. The BigQuery dataset in format &quot;projects/projectId/datasets/datasetId&quot;, to which the snapshot result should be exported. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.
     */
    dataset?: string | null;
    /**
     * If the destination table already exists and this flag is `TRUE`, the table will be overwritten by the contents of assets snapshot. If the flag is `FALSE` or unset and the destination table already exists, the export call returns an INVALID_ARGUMEMT error.
     */
    force?: boolean | null;
    /**
     * Required. The BigQuery table to which the snapshot result should be written. If this table does not exist, a new table with the given name will be created.
     */
    table?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding.  If the condition evaluates to `true`, then this binding applies to the current request.  If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the members in this binding.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.  * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a user that has been recently deleted. For    example, `alice@example.com?uid=123456789012345678901`. If the user is    recovered, this value reverts to `user:{emailid}` and the recovered user    retains the role in the binding.  * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus    unique identifier) representing a service account that has been recently    deleted. For example,    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.    If the service account is undeleted, this value reverts to    `serviceAccount:{emailid}` and the undeleted service account retains the    role in the binding.  * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a Google group that has been recently    deleted. For example, `admins@example.com?uid=123456789012345678901`. If    the group is recovered, this value reverts to `group:{emailid}` and the    recovered group retains the role in the binding.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Create asset feed request.
   */
  export interface Schema$CreateFeedRequest {
    /**
     * Required. The feed details. The field `name` must be empty and it will be generated in the format of: projects/project_number/feeds/feed_id folders/folder_number/feeds/feed_id organizations/organization_number/feeds/feed_id
     */
    feed?: Schema$Feed;
    /**
     * Required. This is the client-assigned asset feed identifier and it needs to be unique under a specific parent project/folder/organization.
     */
    feedId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Export asset request.
   */
  export interface Schema$ExportAssetsRequest {
    /**
     * A list of asset types of which to take a snapshot for. Example: &quot;compute.googleapis.com/Disk&quot;. If specified, only matching assets will be returned. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types.
     */
    assetTypes?: string[] | null;
    /**
     * Asset content type. If not specified, no content but the asset name will be returned.
     */
    contentType?: string | null;
    /**
     * Required. Output configuration indicating where the results will be output to.
     */
    outputConfig?: Schema$OutputConfig;
    /**
     * Timestamp to take an asset snapshot. This can only be set to a timestamp between the current time and the current time minus 35 days (inclusive). If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results.
     */
    readTime?: string | null;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.  Example (Comparison):      title: &quot;Summary size limit&quot;     description: &quot;Determines if a summary is less than 100 chars&quot;     expression: &quot;document.summary.size() &lt; 100&quot;  Example (Equality):      title: &quot;Requestor is owner&quot;     description: &quot;Determines if requestor is the document owner&quot;     expression: &quot;document.owner == request.auth.claims.email&quot;  Example (Logic):      title: &quot;Public documents&quot;     description: &quot;Determine whether the document should be publicly visible&quot;     expression: &quot;document.type != &#39;private&#39; &amp;&amp; document.type != &#39;internal&#39;&quot;  Example (Data Manipulation):      title: &quot;Notification string&quot;     description: &quot;Create a notification string with a timestamp.&quot;     expression: &quot;&#39;New message received at &#39; + string(document.create_time)&quot;  The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
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
   * An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.
   */
  export interface Schema$Feed {
    /**
     * A list of the full names of the assets to receive updates. You must specify either or both of asset_names and asset_types. Only asset updates matching specified asset_names or asset_types are exported to the feed. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info.
     */
    assetNames?: string[] | null;
    /**
     * A list of types of the assets to receive updates. You must specify either or both of asset_names and asset_types. Only asset updates matching specified asset_names or asset_types are exported to the feed. Example: `&quot;compute.googleapis.com/Disk&quot;`  See [this topic](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for a list of all supported asset types.
     */
    assetTypes?: string[] | null;
    /**
     * Asset content type. If not specified, no content but the asset name and type will be returned.
     */
    contentType?: string | null;
    /**
     * Required. Feed output configuration defining where the asset updates are published to.
     */
    feedOutputConfig?: Schema$FeedOutputConfig;
    /**
     * Required. The format will be projects/{project_number}/feeds/{client-assigned_feed_identifier} or folders/{folder_number}/feeds/{client-assigned_feed_identifier} or organizations/{organization_number}/feeds/{client-assigned_feed_identifier}  The client-assigned feed identifier must be unique within the parent project/folder/organization.
     */
    name?: string | null;
  }
  /**
   * Output configuration for asset feed destination.
   */
  export interface Schema$FeedOutputConfig {
    /**
     * Destination on Pub/Sub.
     */
    pubsubDestination?: Schema$PubsubDestination;
  }
  /**
   * A Cloud Storage location.
   */
  export interface Schema$GcsDestination {
    /**
     * The uri of the Cloud Storage object. It&#39;s the same uri that is used by gsutil. Example: &quot;gs://bucket_name/object_name&quot;. See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information.
     */
    uri?: string | null;
    /**
     * The uri prefix of all generated Cloud Storage objects. Example: &quot;gs://bucket_name/object_name_prefix&quot;. Each object uri is in format: &quot;gs://bucket_name/object_name_prefix/&lt;asset type&gt;/&lt;shard number&gt; and only contains assets for that type. &lt;shard number&gt; starts from 0. Example: &quot;gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0&quot; is the first shard of output objects containing all compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be returned if file with the same name &quot;gs://bucket_name/object_name_prefix&quot; already exists.
     */
    uriPrefix?: string | null;
  }
  /**
   * Used in `policy_type` to specify how `boolean_policy` will behave at this resource.
   */
  export interface Schema$GoogleCloudOrgpolicyV1BooleanPolicy {
    /**
     * If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable.  Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior:   - If the `Policy` at this resource has enforced set to `false`, serial     port connection attempts will be allowed.   - If the `Policy` at this resource has enforced set to `true`, serial     port connection attempts will be refused.   - If the `Policy` at this resource is `RestoreDefault`, serial port     connection attempts will be allowed.   - If no `Policy` is set at this resource or anywhere higher in the     resource hierarchy, serial port connection attempts will be allowed.   - If no `Policy` is set at this resource, but one exists higher in the     resource hierarchy, the behavior is as if the`Policy` were set at     this resource.  The following examples demonstrate the different possible layerings:  Example 1 (nearest `Constraint` wins):   `organizations/foo` has a `Policy` with:     {enforced: false}   `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced.  Example 2 (enforcement gets replaced):   `organizations/foo` has a `Policy` with:     {enforced: false}   `projects/bar` has a `Policy` with:     {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced.  Example 3 (RestoreDefault):   `organizations/foo` has a `Policy` with:     {enforced: true}   `projects/bar` has a `Policy` with:     {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`.
     */
    enforced?: boolean | null;
  }
  /**
   * Used in `policy_type` to specify how `list_policy` behaves at this resource.  `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a &quot;:&quot;. Values prefixed with &quot;is:&quot; are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats:     - &quot;projects/&lt;project-id&gt;&quot;, e.g. &quot;projects/tokyo-rain-123&quot;     - &quot;folders/&lt;folder-id&gt;&quot;, e.g. &quot;folders/1234&quot;     - &quot;organizations/&lt;organization-id&gt;&quot;, e.g. &quot;organizations/1234&quot; The `supports_under` field of the associated `Constraint`  defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset.
   */
  export interface Schema$GoogleCloudOrgpolicyV1ListPolicy {
    /**
     * List of values allowed  at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`.
     */
    allowedValues?: string[] | null;
    /**
     * The policy all_values state.
     */
    allValues?: string | null;
    /**
     * List of values denied at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`.
     */
    deniedValues?: string[] | null;
    /**
     * Determines the inheritance behavior for this `Policy`.  By default, a `ListPolicy` set at a resource supercedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy.  Setting `Policy` hierarchies that inherit both allowed values and denied values isn&#39;t recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`.  For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied.  The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`:  Example 1 (no inherited values):   `organizations/foo` has a `Policy` with values:     {allowed_values: &quot;E1&quot; allowed_values:&quot;E2&quot;}   `projects/bar` has `inherit_from_parent` `false` and values:     {allowed_values: &quot;E3&quot; allowed_values: &quot;E4&quot;} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`.  Example 2 (inherited values):   `organizations/foo` has a `Policy` with values:     {allowed_values: &quot;E1&quot; allowed_values:&quot;E2&quot;}   `projects/bar` has a `Policy` with values:     {value: &quot;E3&quot; value: &quot;E4&quot; inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`.  Example 3 (inheriting both allowed and denied values):   `organizations/foo` has a `Policy` with values:     {allowed_values: &quot;E1&quot; allowed_values: &quot;E2&quot;}   `projects/bar` has a `Policy` with:     {denied_values: &quot;E1&quot;} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`.  Example 4 (RestoreDefault):   `organizations/foo` has a `Policy` with values:     {allowed_values: &quot;E1&quot; allowed_values:&quot;E2&quot;}   `projects/bar` has a `Policy` with values:     {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none).  Example 5 (no policy inherits parent policy):   `organizations/foo` has no `Policy` set.   `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none).  Example 6 (ListConstraint allowing all):   `organizations/foo` has a `Policy` with values:     {allowed_values: &quot;E1&quot; allowed_values: &quot;E2&quot;}   `projects/bar` has a `Policy` with:     {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`.  Example 7 (ListConstraint allowing none):   `organizations/foo` has a `Policy` with values:     {allowed_values: &quot;E1&quot; allowed_values: &quot;E2&quot;}   `projects/bar` has a `Policy` with:     {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`.  Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy   O1-&gt;{F1, F2}; F1-&gt;{P1}; F2-&gt;{P2, P3},   `organizations/foo` has a `Policy` with values:     {allowed_values: &quot;under:organizations/O1&quot;}   `projects/bar` has a `Policy` with:     {allowed_values: &quot;under:projects/P3&quot;}     {denied_values: &quot;under:folders/F2&quot;} The accepted values at `organizations/foo` are `organizations/O1`,   `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`,   `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`,   `folders/F1`, `projects/P1`.
     */
    inheritFromParent?: boolean | null;
    /**
     * Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`.
     */
    suggestedValue?: string | null;
  }
  /**
   * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
   */
  export interface Schema$GoogleCloudOrgpolicyV1Policy {
    /**
     * For boolean `Constraints`, whether to enforce the `Constraint` or not.
     */
    booleanPolicy?: Schema$GoogleCloudOrgpolicyV1BooleanPolicy;
    /**
     * The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`.  Immutable after creation.
     */
    constraint?: string | null;
    /**
     * An opaque tag indicating the current version of the `Policy`, used for concurrency control.  When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop.  When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset.  When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`.
     */
    etag?: string | null;
    /**
     * List of values either allowed or disallowed.
     */
    listPolicy?: Schema$GoogleCloudOrgpolicyV1ListPolicy;
    /**
     * Restores the default behavior of the constraint; independent of `Constraint` type.
     */
    restoreDefault?: Schema$GoogleCloudOrgpolicyV1RestoreDefault;
    /**
     * The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored.
     */
    updateTime?: string | null;
    /**
     * Version of the `Policy`. Default version is 0;
     */
    version?: number | null;
  }
  /**
   * Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource.  Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated.
   */
  export interface Schema$GoogleCloudOrgpolicyV1RestoreDefault {}
  /**
   * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1AccessLevel {
    /**
     * A `BasicLevel` composed of `Conditions`.
     */
    basic?: Schema$GoogleIdentityAccesscontextmanagerV1BasicLevel;
    /**
     * A `CustomLevel` written in the Common Expression Language.
     */
    custom?: Schema$GoogleIdentityAccesscontextmanagerV1CustomLevel;
    /**
     * Description of the `AccessLevel` and its use. Does not affect behavior.
     */
    description?: string | null;
    /**
     * Required. Resource name for the Access Level. The `short_name` component must begin with a letter and only include alphanumeric and &#39;_&#39;. Format: `accessPolicies/{policy_id}/accessLevels/{short_name}`. The maximum length of the `short_name` component is 50 characters.
     */
    name?: string | null;
    /**
     * Human readable title. Must be unique within the Policy.
     */
    title?: string | null;
  }
  /**
   * `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization.
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1AccessPolicy {
    /**
     * Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format.
     */
    etag?: string | null;
    /**
     * Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{policy_id}`
     */
    name?: string | null;
    /**
     * Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}`
     */
    parent?: string | null;
    /**
     * Required. Human readable title. Does not affect behavior.
     */
    title?: string | null;
  }
  /**
   * `BasicLevel` is an `AccessLevel` using a set of recommended features.
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1BasicLevel {
    /**
     * How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND.
     */
    combiningFunction?: string | null;
    /**
     * Required. A list of requirements for the `AccessLevel` to be granted.
     */
    conditions?: Schema$GoogleIdentityAccesscontextmanagerV1Condition[];
  }
  /**
   * A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1Condition {
    /**
     * Device specific restrictions, all restrictions must hold for the Condition to be true. If not specified, all devices are allowed.
     */
    devicePolicy?: Schema$GoogleIdentityAccesscontextmanagerV1DevicePolicy;
    /**
     * CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, &quot;192.0.2.0/24&quot; is accepted but &quot;192.0.2.1/24&quot; is not. Similarly, for IPv6, &quot;2001:db8::/32&quot; is accepted whereas &quot;2001:db8::1/32&quot; is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed.
     */
    ipSubnetworks?: string[] | null;
    /**
     * The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: `user:{emailid}` `serviceAccount:{emailid}` If not specified, a request may come from any user.
     */
    members?: string[] | null;
    /**
     * Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields, each field must be false for the Condition overall to be satisfied. Defaults to false.
     */
    negate?: boolean | null;
    /**
     * The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes.
     */
    regions?: string[] | null;
    /**
     * A list of other access levels defined in the same `Policy`, referenced by resource name. Referencing an `AccessLevel` which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: &quot;`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME&quot;`
     */
    requiredAccessLevels?: string[] | null;
  }
  /**
   * `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1CustomLevel {
    /**
     * Required. A Cloud CEL expression evaluating to a boolean.
     */
    expr?: Schema$Expr;
  }
  /**
   * `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1DevicePolicy {
    /**
     * Allowed device management levels, an empty list allows all management levels.
     */
    allowedDeviceManagementLevels?: string[] | null;
    /**
     * Allowed encryptions statuses, an empty list allows all statuses.
     */
    allowedEncryptionStatuses?: string[] | null;
    /**
     * Allowed OS versions, an empty list allows all types and all versions.
     */
    osConstraints?: Schema$GoogleIdentityAccesscontextmanagerV1OsConstraint[];
    /**
     * Whether the device needs to be approved by the customer admin.
     */
    requireAdminApproval?: boolean | null;
    /**
     * Whether the device needs to be corp owned.
     */
    requireCorpOwned?: boolean | null;
    /**
     * Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`.
     */
    requireScreenlock?: boolean | null;
  }
  /**
   * A restriction on the OS type and version of devices making requests.
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1OsConstraint {
    /**
     * The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `&quot;major.minor.patch&quot;`. Examples: `&quot;10.5.301&quot;`, `&quot;9.2.1&quot;`.
     */
    minimumVersion?: string | null;
    /**
     * Required. The allowed OS type.
     */
    osType?: string | null;
    /**
     * Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request.
     */
    requireVerifiedChromeOs?: boolean | null;
  }
  /**
   * `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1ServicePerimeter {
    /**
     * Description of the `ServicePerimeter` and its use. Does not affect behavior.
     */
    description?: string | null;
    /**
     * Required. Resource name for the ServicePerimeter.  The `short_name` component must begin with a letter and only include alphanumeric and &#39;_&#39;. Format: `accessPolicies/{policy_id}/servicePerimeters/{short_name}`
     */
    name?: string | null;
    /**
     * Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty.
     */
    perimeterType?: string | null;
    /**
     * Proposed (or dry run) ServicePerimeter configuration. This configuration allows to specify and test ServicePerimeter configuration without enforcing actual access restrictions. Only allowed to be set when the &quot;use_explicit_dry_run_spec&quot; flag is set.
     */
    spec?: Schema$GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;
    /**
     * Current ServicePerimeter configuration. Specifies sets of resources, restricted services and access levels that determine perimeter content and boundaries.
     */
    status?: Schema$GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;
    /**
     * Human readable title. Must be unique within the Policy.
     */
    title?: string | null;
    /**
     * Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists  for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration (&quot;spec&quot;) to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config (&quot;status&quot;) without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values.
     */
    useExplicitDryRunSpec?: boolean | null;
  }
  /**
   * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig {
    /**
     * A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `&quot;accessPolicies/MY_POLICY/accessLevels/MY_LEVEL&quot;`. For Service Perimeter Bridge, must be empty.
     */
    accessLevels?: string[] | null;
    /**
     * A list of Google Cloud resources that are inside of the service perimeter. Currently only projects are allowed. Format: `projects/{project_number}`
     */
    resources?: string[] | null;
    /**
     * Google Cloud services that are subject to the Service Perimeter restrictions. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter&#39;s access restrictions.
     */
    restrictedServices?: string[] | null;
    /**
     * Configuration for APIs allowed within Perimeter.
     */
    vpcAccessibleServices?: Schema$GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
  }
  /**
   * Specifies how APIs are allowed to communicate within the Service Perimeter.
   */
  export interface Schema$GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices {
    /**
     * The list of APIs usable within the Service Perimeter. Must be empty unless &#39;enable_restriction&#39; is True.
     */
    allowedServices?: string[] | null;
    /**
     * Whether to restrict API calls within the Service Perimeter to the list of APIs specified in &#39;allowed_services&#39;.
     */
    enableRestriction?: boolean | null;
  }
  export interface Schema$ListFeedsResponse {
    /**
     * A list of feeds.
     */
    feeds?: Schema$Feed[];
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
   * Output configuration for export assets destination.
   */
  export interface Schema$OutputConfig {
    /**
     * Destination on BigQuery. The output table stores the fields in asset proto as columns in BigQuery.
     */
    bigqueryDestination?: Schema$BigQueryDestination;
    /**
     * Destination on Cloud Storage.
     */
    gcsDestination?: Schema$GcsDestination;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [             &quot;user:eve@example.com&quot;           ],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * A Pub/Sub destination.
   */
  export interface Schema$PubsubDestination {
    /**
     * The name of the Pub/Sub topic to publish to. Example: `projects/PROJECT_ID/topics/TOPIC_ID`.
     */
    topic?: string | null;
  }
  /**
   * A representation of a Google Cloud resource.
   */
  export interface Schema$Resource {
    /**
     * The content of the resource, in which some sensitive fields are removed and may not be present.
     */
    data?: {[key: string]: any} | null;
    /**
     * The URL of the discovery document containing the resource&#39;s JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest`  This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable.
     */
    discoveryDocumentUri?: string | null;
    /**
     * The JSON schema name listed in the discovery document. Example: `Project`  This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable.
     */
    discoveryName?: string | null;
    /**
     * The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/.
     */
    location?: string | null;
    /**
     * The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.  For Google Cloud assets, this value is the parent resource defined in the [Cloud IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123`  For third-party assets, this field may be set differently.
     */
    parent?: string | null;
    /**
     * The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123`  This value is unspecified for resources without a REST API.
     */
    resourceUrl?: string | null;
    /**
     * The API version. Example: `v1`
     */
    version?: string | null;
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
   * An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
   */
  export interface Schema$TemporalAsset {
    /**
     * An asset in Google Cloud.
     */
    asset?: Schema$Asset;
    /**
     * Whether the asset has been deleted or not.
     */
    deleted?: boolean | null;
    /**
     * The time window when the asset data and state was observed.
     */
    window?: Schema$TimeWindow;
  }
  /**
   * A time window specified by its `start_time` and `end_time`.
   */
  export interface Schema$TimeWindow {
    /**
     * End time of the time window (inclusive). If not specified, the current timestamp is used instead.
     */
    endTime?: string | null;
    /**
     * Start time of the time window (exclusive).
     */
    startTime?: string | null;
  }
  /**
   * Update asset feed request.
   */
  export interface Schema$UpdateFeedRequest {
    /**
     * Required. The new values of feed details. It must match an existing feed and the field `name` must be in the format of: projects/project_number/feeds/feed_id or folders/folder_number/feeds/feed_id or organizations/organization_number/feeds/feed_id.
     */
    feed?: Schema$Feed;
    /**
     * Required. Only updates the `feed` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server.
     */
    updateMask?: string | null;
  }

  export class Resource$Feeds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudasset.feeds.create
     * @desc Creates a feed in a parent project/folder/organization to listen to its asset updates.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudasset.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudasset = google.cloudasset('v1');
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
     *   const res = await cloudasset.feeds.create({
     *     // Required. The name of the project/folder/organization where this feed
     *     // should be created in. It can only be an organization number (such as
     *     // "organizations/123"), a folder number (such as "folders/123"), a project ID
     *     // (such as "projects/my-project-id")", or a project number (such as
     *     // "projects/12345").
     *     parent: '[^/]+/[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "feed": {},
     *       //   "feedId": "my_feedId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetNames": [],
     *   //   "assetTypes": [],
     *   //   "contentType": "my_contentType",
     *   //   "feedOutputConfig": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudasset.feeds.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the project/folder/organization where this feed should be created in. It can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
     * @param {().CreateFeedRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Feeds$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Feeds$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Feed>;
    create(
      params: Params$Resource$Feeds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Feeds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Feed>,
      callback: BodyResponseCallback<Schema$Feed>
    ): void;
    create(
      params: Params$Resource$Feeds$Create,
      callback: BodyResponseCallback<Schema$Feed>
    ): void;
    create(callback: BodyResponseCallback<Schema$Feed>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Feeds$Create
        | BodyResponseCallback<Schema$Feed>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Feed>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Feed>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Feed> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Feeds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Feeds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/feeds').replace(
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
        createAPIRequest<Schema$Feed>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Feed>(parameters);
      }
    }

    /**
     * cloudasset.feeds.delete
     * @desc Deletes an asset feed.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudasset.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudasset = google.cloudasset('v1');
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
     *   const res = await cloudasset.feeds.delete({
     *     // Required. The name of the feed and it must be in the format of:
     *     // projects/project_number/feeds/feed_id
     *     // folders/folder_number/feeds/feed_id
     *     // organizations/organization_number/feeds/feed_id
     *     name: '[^/]+/[^/]+/feeds/my-feed',
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
     * @alias cloudasset.feeds.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the feed and it must be in the format of: projects/project_number/feeds/feed_id folders/folder_number/feeds/feed_id organizations/organization_number/feeds/feed_id
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Feeds$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Feeds$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Feeds$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Feeds$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Feeds$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Feeds$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Feeds$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Feeds$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * cloudasset.feeds.get
     * @desc Gets details about an asset feed.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudasset.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudasset = google.cloudasset('v1');
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
     *   const res = await cloudasset.feeds.get({
     *     // Required. The name of the Feed and it must be in the format of:
     *     // projects/project_number/feeds/feed_id
     *     // folders/folder_number/feeds/feed_id
     *     // organizations/organization_number/feeds/feed_id
     *     name: '[^/]+/[^/]+/feeds/my-feed',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetNames": [],
     *   //   "assetTypes": [],
     *   //   "contentType": "my_contentType",
     *   //   "feedOutputConfig": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudasset.feeds.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Feed and it must be in the format of: projects/project_number/feeds/feed_id folders/folder_number/feeds/feed_id organizations/organization_number/feeds/feed_id
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Feeds$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Feeds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Feed>;
    get(
      params: Params$Resource$Feeds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Feeds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Feed>,
      callback: BodyResponseCallback<Schema$Feed>
    ): void;
    get(
      params: Params$Resource$Feeds$Get,
      callback: BodyResponseCallback<Schema$Feed>
    ): void;
    get(callback: BodyResponseCallback<Schema$Feed>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Feeds$Get
        | BodyResponseCallback<Schema$Feed>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Feed>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Feed>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Feed> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Feeds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Feeds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
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
        createAPIRequest<Schema$Feed>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Feed>(parameters);
      }
    }

    /**
     * cloudasset.feeds.list
     * @desc Lists all asset feeds in a parent project/folder/organization.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudasset.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudasset = google.cloudasset('v1');
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
     *   const res = await cloudasset.feeds.list({
     *     // Required. The parent project/folder/organization whose feeds are to be
     *     // listed. It can only be using project/folder/organization number (such as
     *     // "folders/12345")", or a project ID (such as "projects/my-project-id").
     *     parent: '[^/]+/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "feeds": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudasset.feeds.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent project/folder/organization whose feeds are to be listed. It can only be using project/folder/organization number (such as "folders/12345")", or a project ID (such as "projects/my-project-id").
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Feeds$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Feeds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFeedsResponse>;
    list(
      params: Params$Resource$Feeds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Feeds$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListFeedsResponse>,
      callback: BodyResponseCallback<Schema$ListFeedsResponse>
    ): void;
    list(
      params: Params$Resource$Feeds$List,
      callback: BodyResponseCallback<Schema$ListFeedsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFeedsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Feeds$List
        | BodyResponseCallback<Schema$ListFeedsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFeedsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFeedsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFeedsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Feeds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Feeds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/feeds').replace(
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
        createAPIRequest<Schema$ListFeedsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListFeedsResponse>(parameters);
      }
    }

    /**
     * cloudasset.feeds.patch
     * @desc Updates an asset feed configuration.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudasset.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudasset = google.cloudasset('v1');
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
     *   const res = await cloudasset.feeds.patch({
     *     // Required. The format will be
     *     // projects/{project_number}/feeds/{client-assigned_feed_identifier} or
     *     // folders/{folder_number}/feeds/{client-assigned_feed_identifier} or
     *     // organizations/{organization_number}/feeds/{client-assigned_feed_identifier}
     *     //
     *     // The client-assigned feed identifier must be unique within the parent
     *     // project/folder/organization.
     *     name: '[^/]+/[^/]+/feeds/my-feed',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "feed": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetNames": [],
     *   //   "assetTypes": [],
     *   //   "contentType": "my_contentType",
     *   //   "feedOutputConfig": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudasset.feeds.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The format will be projects/{project_number}/feeds/{client-assigned_feed_identifier} or folders/{folder_number}/feeds/{client-assigned_feed_identifier} or organizations/{organization_number}/feeds/{client-assigned_feed_identifier}  The client-assigned feed identifier must be unique within the parent project/folder/organization.
     * @param {().UpdateFeedRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Feeds$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Feeds$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Feed>;
    patch(
      params: Params$Resource$Feeds$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Feeds$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Feed>,
      callback: BodyResponseCallback<Schema$Feed>
    ): void;
    patch(
      params: Params$Resource$Feeds$Patch,
      callback: BodyResponseCallback<Schema$Feed>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Feed>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Feeds$Patch
        | BodyResponseCallback<Schema$Feed>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Feed>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Feed>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Feed> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Feeds$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Feeds$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
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
        createAPIRequest<Schema$Feed>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Feed>(parameters);
      }
    }
  }

  export interface Params$Resource$Feeds$Create extends StandardParameters {
    /**
     * Required. The name of the project/folder/organization where this feed should be created in. It can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateFeedRequest;
  }
  export interface Params$Resource$Feeds$Delete extends StandardParameters {
    /**
     * Required. The name of the feed and it must be in the format of: projects/project_number/feeds/feed_id folders/folder_number/feeds/feed_id organizations/organization_number/feeds/feed_id
     */
    name?: string;
  }
  export interface Params$Resource$Feeds$Get extends StandardParameters {
    /**
     * Required. The name of the Feed and it must be in the format of: projects/project_number/feeds/feed_id folders/folder_number/feeds/feed_id organizations/organization_number/feeds/feed_id
     */
    name?: string;
  }
  export interface Params$Resource$Feeds$List extends StandardParameters {
    /**
     * Required. The parent project/folder/organization whose feeds are to be listed. It can only be using project/folder/organization number (such as "folders/12345")", or a project ID (such as "projects/my-project-id").
     */
    parent?: string;
  }
  export interface Params$Resource$Feeds$Patch extends StandardParameters {
    /**
     * Required. The format will be projects/{project_number}/feeds/{client-assigned_feed_identifier} or folders/{folder_number}/feeds/{client-assigned_feed_identifier} or organizations/{organization_number}/feeds/{client-assigned_feed_identifier}  The client-assigned feed identifier must be unique within the parent project/folder/organization.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateFeedRequest;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudasset.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudasset.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudasset = google.cloudasset('v1');
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
     *   const res = await cloudasset.operations.get({
     *     // The name of the operation resource.
     *     name: '[^/]+/[^/]+/operations/my-operation/.*',
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
     * @alias cloudasset.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudasset.batchGetAssetsHistory
     * @desc Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudasset.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudasset = google.cloudasset('v1');
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
     *   const res = await cloudasset.batchGetAssetsHistory({
     *     // A list of the full names of the assets.
     *     // See: https://cloud.google.com/asset-inventory/docs/resource-name-format
     *     // Example:
     *     //
     *     // `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
     *     //
     *     // The request becomes a no-op if the asset name list is empty, and the max
     *     // size of the asset name list is 100 in one request.
     *     assetNames: 'placeholder-value',
     *     // Optional. The content type.
     *     contentType: 'placeholder-value',
     *     // Required. The relative name of the root asset. It can only be an
     *     // organization number (such as "organizations/123"), a project ID (such as
     *     // "projects/my-project-id")", or a project number (such as "projects/12345").
     *     parent: '[^/]+/[^/]+',
     *     // End time of the time window (inclusive). If not specified, the current
     *     // timestamp is used instead.
     *     'readTimeWindow.endTime': 'placeholder-value',
     *     // Start time of the time window (exclusive).
     *     'readTimeWindow.startTime': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assets": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudasset.batchGetAssetsHistory
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.assetNames A list of the full names of the assets. See: https://cloud.google.com/asset-inventory/docs/resource-name-format Example:  `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.  The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.
     * @param {string=} params.contentType Optional. The content type.
     * @param {string} params.parent Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
     * @param {string=} params.readTimeWindow.endTime End time of the time window (inclusive). If not specified, the current timestamp is used instead.
     * @param {string=} params.readTimeWindow.startTime Start time of the time window (exclusive).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGetAssetsHistory(
      params: Params$Resource$V1$Batchgetassetshistory,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGetAssetsHistory(
      params?: Params$Resource$V1$Batchgetassetshistory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchGetAssetsHistoryResponse>;
    batchGetAssetsHistory(
      params: Params$Resource$V1$Batchgetassetshistory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGetAssetsHistory(
      params: Params$Resource$V1$Batchgetassetshistory,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>,
      callback: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>
    ): void;
    batchGetAssetsHistory(
      params: Params$Resource$V1$Batchgetassetshistory,
      callback: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>
    ): void;
    batchGetAssetsHistory(
      callback: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>
    ): void;
    batchGetAssetsHistory(
      paramsOrCallback?:
        | Params$Resource$V1$Batchgetassetshistory
        | BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchGetAssetsHistoryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Batchgetassetshistory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Batchgetassetshistory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:batchGetAssetsHistory').replace(
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
        createAPIRequest<Schema$BatchGetAssetsHistoryResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$BatchGetAssetsHistoryResponse>(
          parameters
        );
      }
    }

    /**
     * cloudasset.exportAssets
     * @desc Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudasset.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudasset = google.cloudasset('v1');
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
     *   const res = await cloudasset.exportAssets({
     *     // Required. The relative name of the root asset. This can only be an
     *     // organization number (such as "organizations/123"), a project ID (such as
     *     // "projects/my-project-id"), or a project number (such as "projects/12345"),
     *     // or a folder number (such as "folders/123").
     *     parent: '[^/]+/[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetTypes": [],
     *       //   "contentType": "my_contentType",
     *       //   "outputConfig": {},
     *       //   "readTime": "my_readTime"
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
     * @alias cloudasset.exportAssets
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"), or a folder number (such as "folders/123").
     * @param {().ExportAssetsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    exportAssets(
      params: Params$Resource$V1$Exportassets,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    exportAssets(
      params?: Params$Resource$V1$Exportassets,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    exportAssets(
      params: Params$Resource$V1$Exportassets,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportAssets(
      params: Params$Resource$V1$Exportassets,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    exportAssets(
      params: Params$Resource$V1$Exportassets,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    exportAssets(callback: BodyResponseCallback<Schema$Operation>): void;
    exportAssets(
      paramsOrCallback?:
        | Params$Resource$V1$Exportassets
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
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Exportassets;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Exportassets;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:exportAssets').replace(
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$V1$Batchgetassetshistory
    extends StandardParameters {
    /**
     * A list of the full names of the assets. See: https://cloud.google.com/asset-inventory/docs/resource-name-format Example:  `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.  The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.
     */
    assetNames?: string[];
    /**
     * Optional. The content type.
     */
    contentType?: string;
    /**
     * Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
     */
    parent?: string;
    /**
     * End time of the time window (inclusive). If not specified, the current timestamp is used instead.
     */
    'readTimeWindow.endTime'?: string;
    /**
     * Start time of the time window (exclusive).
     */
    'readTimeWindow.startTime'?: string;
  }
  export interface Params$Resource$V1$Exportassets extends StandardParameters {
    /**
     * Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"), or a folder number (such as "folders/123").
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportAssetsRequest;
  }
}
