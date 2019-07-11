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

export namespace cloudasset_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
    operations: Resource$Operations;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.operations = new Resource$Operations(this.context);
      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * Cloud asset. This includes all Google Cloud Platform resources, Cloud IAM policies, and other non-GCP assets.
   */
  export interface Schema$Asset {
    /**
     * Type of the asset. Example: &quot;compute.googleapis.com/Disk&quot;.
     */
    assetType?: string;
    /**
     * Representation of the actual Cloud IAM policy set on a cloud resource. For each resource, there must be at most one Cloud IAM policy set on it.
     */
    iamPolicy?: Schema$Policy;
    /**
     * The full name of the asset. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.
     */
    name?: string;
    /**
     * Representation of the Cloud Organization Policy set on an asset. For each asset, there could be multiple Organization policies with different constraints.
     */
    orgPolicy?: Schema$GoogleCloudOrgpolicyV1Policy[];
    /**
     * Representation of the resource.
     */
    resource?: Schema$Resource;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:foo@gmail.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]         },         {           &quot;service&quot;: &quot;fooservice.googleapis.com&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:bar@gmail.com&quot;               ]             }           ]         }       ]     }  For fooservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging, and bar@gmail.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:foo@gmail.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting foo@gmail.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];
    /**
     * The log type that this config enables.
     */
    logType?: string;
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
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@gmail.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string;
  }
  /**
   * Export asset request.
   */
  export interface Schema$ExportAssetsRequest {
    /**
     * A list of asset types of which to take a snapshot for. For example: &quot;compute.googleapis.com/Disk&quot;. If specified, only matching assets will be returned. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview) for all supported asset types.
     */
    assetTypes?: string[];
    /**
     * Asset content type. If not specified, no content but the asset name will be returned.
     */
    contentType?: string;
    /**
     * Required. Output configuration indicating where the results will be output to. All results will be in newline delimited JSON format.
     */
    outputConfig?: Schema$OutputConfig;
    /**
     * Timestamp to take an asset snapshot. This can only be set to a timestamp between 2018-10-02 UTC (inclusive) and the current time. If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results.
     */
    readTime?: string;
  }
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string;
  }
  /**
   * A Cloud Storage location.
   */
  export interface Schema$GcsDestination {
    /**
     * The uri of the Cloud Storage object. It&#39;s the same uri that is used by gsutil. For example: &quot;gs://bucket_name/object_name&quot;. See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information.
     */
    uri?: string;
    /**
     * The uri prefix of all generated Cloud Storage objects. For example: &quot;gs://bucket_name/object_name_prefix&quot;. Each object uri is in format: &quot;gs://bucket_name/object_name_prefix/&lt;asset type&gt;/&lt;shard number&gt; and only contains assets for that type. &lt;shard number&gt; starts from 0. For example: &quot;gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0&quot; is the first shard of output objects containing all compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be returned if file with the same name &quot;gs://bucket_name/object_name_prefix&quot; already exists.
     */
    uriPrefix?: string;
  }
  /**
   * Used in `policy_type` to specify how `boolean_policy` will behave at this resource.
   */
  export interface Schema$GoogleCloudOrgpolicyV1BooleanPolicy {
    /**
     * If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable.  Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior:   - If the `Policy` at this resource has enforced set to `false`, serial     port connection attempts will be allowed.   - If the `Policy` at this resource has enforced set to `true`, serial     port connection attempts will be refused.   - If the `Policy` at this resource is `RestoreDefault`, serial port     connection attempts will be allowed.   - If no `Policy` is set at this resource or anywhere higher in the     resource hierarchy, serial port connection attempts will be allowed.   - If no `Policy` is set at this resource, but one exists higher in the     resource hierarchy, the behavior is as if the`Policy` were set at     this resource.  The following examples demonstrate the different possible layerings:  Example 1 (nearest `Constraint` wins):   `organizations/foo` has a `Policy` with:     {enforced: false}   `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced.  Example 2 (enforcement gets replaced):   `organizations/foo` has a `Policy` with:     {enforced: false}   `projects/bar` has a `Policy` with:     {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced.  Example 3 (RestoreDefault):   `organizations/foo` has a `Policy` with:     {enforced: true}   `projects/bar` has a `Policy` with:     {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`.
     */
    enforced?: boolean;
  }
  /**
   * Used in `policy_type` to specify how `list_policy` behaves at this resource.  `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a &quot;:&quot;. Values prefixed with &quot;is:&quot; are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats:     - “projects/&lt;project-id&gt;”, e.g. “projects/tokyo-rain-123”     - “folders/&lt;folder-id&gt;”, e.g. “folders/1234”     - “organizations/&lt;organization-id&gt;”, e.g. “organizations/1234” The `supports_under` field of the associated `Constraint`  defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset.
   */
  export interface Schema$GoogleCloudOrgpolicyV1ListPolicy {
    /**
     * List of values allowed  at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`.
     */
    allowedValues?: string[];
    /**
     * The policy all_values state.
     */
    allValues?: string;
    /**
     * List of values denied at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`.
     */
    deniedValues?: string[];
    /**
     * Determines the inheritance behavior for this `Policy`.  By default, a `ListPolicy` set at a resource supercedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy.  Setting `Policy` hierarchies that inherit both allowed values and denied values isn&#39;t recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`.  For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied.  The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`:  Example 1 (no inherited values):   `organizations/foo` has a `Policy` with values:     {allowed_values: “E1” allowed_values:”E2”}   `projects/bar` has `inherit_from_parent` `false` and values:     {allowed_values: &quot;E3&quot; allowed_values: &quot;E4&quot;} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`.  Example 2 (inherited values):   `organizations/foo` has a `Policy` with values:     {allowed_values: “E1” allowed_values:”E2”}   `projects/bar` has a `Policy` with values:     {value: “E3” value: ”E4” inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`.  Example 3 (inheriting both allowed and denied values):   `organizations/foo` has a `Policy` with values:     {allowed_values: &quot;E1&quot; allowed_values: &quot;E2&quot;}   `projects/bar` has a `Policy` with:     {denied_values: &quot;E1&quot;} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`.  Example 4 (RestoreDefault):   `organizations/foo` has a `Policy` with values:     {allowed_values: “E1” allowed_values:”E2”}   `projects/bar` has a `Policy` with values:     {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none).  Example 5 (no policy inherits parent policy):   `organizations/foo` has no `Policy` set.   `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none).  Example 6 (ListConstraint allowing all):   `organizations/foo` has a `Policy` with values:     {allowed_values: “E1” allowed_values: ”E2”}   `projects/bar` has a `Policy` with:     {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`.  Example 7 (ListConstraint allowing none):   `organizations/foo` has a `Policy` with values:     {allowed_values: “E1” allowed_values: ”E2”}   `projects/bar` has a `Policy` with:     {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`.  Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy   O1-&gt;{F1, F2}; F1-&gt;{P1}; F2-&gt;{P2, P3},   `organizations/foo` has a `Policy` with values:     {allowed_values: &quot;under:organizations/O1&quot;}   `projects/bar` has a `Policy` with:     {allowed_values: &quot;under:projects/P3&quot;}     {denied_values: &quot;under:folders/F2&quot;} The accepted values at `organizations/foo` are `organizations/O1`,   `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`,   `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`,   `folders/F1`, `projects/P1`.
     */
    inheritFromParent?: boolean;
    /**
     * Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`.
     */
    suggestedValue?: string;
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
    constraint?: string;
    /**
     * An opaque tag indicating the current version of the `Policy`, used for concurrency control.  When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop.  When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset.  When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`.
     */
    etag?: string;
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
    updateTime?: string;
    /**
     * Version of the `Policy`. Default version is 0;
     */
    version?: number;
  }
  /**
   * Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource.  Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated.
   */
  export interface Schema$GoogleCloudOrgpolicyV1RestoreDefault {}
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any};
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any};
  }
  /**
   * Output configuration for export assets destination.
   */
  export interface Schema$OutputConfig {
    /**
     * Destination on Cloud Storage.
     */
    gcsDestination?: Schema$GcsDestination;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-other-app@appspot.gserviceaccount.com       role: roles/owner     - members:       - user:sean@example.com       role: roles/viewer   For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
     */
    etag?: string;
    /**
     * Deprecated.
     */
    version?: number;
  }
  /**
   * Representation of a cloud resource.
   */
  export interface Schema$Resource {
    /**
     * The content of the resource, in which some sensitive fields are scrubbed away and may not be present.
     */
    data?: {[key: string]: any};
    /**
     * The URL of the discovery document containing the resource&#39;s JSON schema. For example: `&quot;https://www.googleapis.com/discovery/v1/apis/compute/v1/rest&quot;`. It will be left unspecified for resources without a discovery-based API, such as Cloud Bigtable.
     */
    discoveryDocumentUri?: string;
    /**
     * The JSON schema name listed in the discovery document. Example: &quot;Project&quot;. It will be left unspecified for resources (such as Cloud Bigtable) without a discovery-based API.
     */
    discoveryName?: string;
    /**
     * The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.  For GCP assets, it is the parent resource defined in the [Cloud IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). For example: `&quot;//cloudresourcemanager.googleapis.com/projects/my_project_123&quot;`.  For third-party assets, it is up to the users to define.
     */
    parent?: string;
    /**
     * The REST URL for accessing the resource. An HTTP GET operation using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123`. It will be left unspecified for resources without a REST API.
     */
    resourceUrl?: string;
    /**
     * The API version. Example: &quot;v1&quot;.
     */
    version?: string;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}>;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Temporal asset. In addition to the asset, the temporal asset includes the status of the asset and valid from and to time of it.
   */
  export interface Schema$TemporalAsset {
    /**
     * Asset.
     */
    asset?: Schema$Asset;
    /**
     * If the asset is deleted or not.
     */
    deleted?: boolean;
    /**
     * The time window when the asset data and state was observed.
     */
    window?: Schema$TimeWindow;
  }
  /**
   * A time window of (start_time, end_time].
   */
  export interface Schema$TimeWindow {
    /**
     * End time of the time window (inclusive). Current timestamp if not specified.
     */
    endTime?: string;
    /**
     * Start time of the time window (exclusive).
     */
    startTime?: string;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudasset.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
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
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * @desc Batch gets the update history of assets that overlap a time window. For RESOURCE content, this API outputs history with asset in both non-delete or deleted status. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
     * @alias cloudasset.batchGetAssetsHistory
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.assetNames A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) and [Resource Name Format](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/resource-name-format) for more info.  The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.
     * @param {string=} params.contentType Required. The content type.
     * @param {string} params.parent Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
     * @param {string=} params.readTimeWindow.endTime End time of the time window (inclusive). Current timestamp if not specified.
     * @param {string=} params.readTimeWindow.startTime Start time of the time window (exclusive).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGetAssetsHistory(
      params?: Params$Resource$V1$Batchgetassetshistory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchGetAssetsHistoryResponse>;
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
        | BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>,
      callback?: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>
    ): void | GaxiosPromise<Schema$BatchGetAssetsHistoryResponse> {
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
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchGetAssetsHistoryResponse>(
          parameters
        );
      }
    }

    /**
     * cloudasset.exportAssets
     * @desc Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export.
     * @alias cloudasset.exportAssets
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"), or a folder number (such as "folders/123").
     * @param {().ExportAssetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    exportAssets(
      params?: Params$Resource$V1$Exportassets,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$V1$Batchgetassetshistory
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) and [Resource Name Format](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/resource-name-format) for more info.  The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.
     */
    assetNames?: string[];
    /**
     * Required. The content type.
     */
    contentType?: string;
    /**
     * Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
     */
    parent?: string;
    /**
     * End time of the time window (inclusive). Current timestamp if not specified.
     */
    'readTimeWindow.endTime'?: string;
    /**
     * Start time of the time window (exclusive).
     */
    'readTimeWindow.startTime'?: string;
  }
  export interface Params$Resource$V1$Exportassets extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
