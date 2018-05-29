/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudresourcemanager_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Cloud Resource Manager API
   *
   * The Google Cloud Resource Manager API provides methods for creating,
   * reading, and updating project metadata.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudresourcemanager = google.cloudresourcemanager('v1');
   *
   * @namespace cloudresourcemanager
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Cloudresourcemanager
   */
  export class Cloudresourcemanager {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    folders: Resource$Folders;
    liens: Resource$Liens;
    operations: Resource$Operations;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.folders = new Resource$Folders(this);
      this.liens = new Resource$Liens(this);
      this.operations = new Resource$Operations(this);
      this.organizations = new Resource$Organizations(this);
      this.projects = new Resource$Projects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Identifying information for a single ancestor of a project.
   */
  export interface Schema$Ancestor {
    /**
     * Resource id of the ancestor.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Specifies the audit configuration for a service. The configuration
   * determines which permission types are logged, and what identities, if any,
   * are exempted from logging. An AuditConfig must have one or more
   * AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a
   * specific service, the union of the two AuditConfigs is used for that
   * service: the log_types specified in each AuditConfig are enabled, and the
   * exempted_members in each AuditLogConfig are exempted.  Example Policy with
   * multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {
   * &quot;service&quot;: &quot;allServices&quot; &quot;audit_log_configs&quot;:
   * [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,
   * &quot;exempted_members&quot;: [ &quot;user:foo@gmail.com&quot; ] }, {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
   * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ] },
   * {           &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
   * &quot;audit_log_configs&quot;: [             { &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,             },             { &quot;log_type&quot;:
   * &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [
   * &quot;user:bar@gmail.com&quot;               ]             }           ] }
   * ]     }  For fooservice, this policy enables DATA_READ, DATA_WRITE and
   * ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging,
   * and bar@gmail.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example,
     * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
     * special value that covers all services.
     */
    service?: string;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: {
   * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
   * &quot;user:foo@gmail.com&quot;           ]         },         {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
   * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while
   * exempting foo@gmail.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of
     * permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];
    /**
     * The log type that this config enables.
     */
    logType?: string;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:  * `allUsers`: A special
     * identifier that represents anyone who is    on the internet; with or
     * without a Google account.  * `allAuthenticatedUsers`: A special
     * identifier that represents anyone    who is authenticated with a Google
     * account or a service account.  * `user:{emailid}`: An email address that
     * represents a specific Google    account. For example, `alice@gmail.com` .
     * * `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
     * `group:{emailid}`: An email address that represents a Google group. For
     * example, `admins@example.com`.   * `domain:{domain}`: A Google Apps
     * domain name that represents all the    users of that domain. For example,
     * `google.com` or `example.com`.
     */
    members?: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`,
     * `roles/editor`, or `roles/owner`. Required
     */
    role?: string;
  }
  /**
   * A `Constraint` that is either enforced or not.  For example a constraint
   * `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM
   * instance, serial port connections will not be opened to that instance.
   */
  export interface Schema$BooleanConstraint {}
  /**
   * Used in `policy_type` to specify how `boolean_policy` will behave at this
   * resource.
   */
  export interface Schema$BooleanPolicy {
    /**
     * If `true`, then the `Policy` is enforced. If `false`, then any
     * configuration is acceptable.  Suppose you have a `Constraint`
     * `constraints/compute.disableSerialPortAccess` with `constraint_default`
     * set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following
     * behavior:   - If the `Policy` at this resource has enforced set to
     * `false`, serial     port connection attempts will be allowed.   - If the
     * `Policy` at this resource has enforced set to `true`, serial     port
     * connection attempts will be refused.   - If the `Policy` at this resource
     * is `RestoreDefault`, serial port     connection attempts will be allowed.
     * - If no `Policy` is set at this resource or anywhere higher in the
     * resource hierarchy, serial port connection attempts will be allowed.   -
     * If no `Policy` is set at this resource, but one exists higher in the
     * resource hierarchy, the behavior is as if the`Policy` were set at this
     * resource.  The following examples demonstrate the different possible
     * layerings:  Example 1 (nearest `Constraint` wins):   `organizations/foo`
     * has a `Policy` with:     {enforced: false}   `projects/bar` has no
     * `Policy` set. The constraint at `projects/bar` and `organizations/foo`
     * will not be enforced.  Example 2 (enforcement gets replaced):
     * `organizations/foo` has a `Policy` with:     {enforced: false}
     * `projects/bar` has a `Policy` with:     {enforced: true} The constraint
     * at `organizations/foo` is not enforced. The constraint at `projects/bar`
     * is enforced.  Example 3 (RestoreDefault):   `organizations/foo` has a
     * `Policy` with:     {enforced: true}   `projects/bar` has a `Policy` with:
     * {RestoreDefault: {}} The constraint at `organizations/foo` is enforced.
     * The constraint at `projects/bar` is not enforced, because
     * `constraint_default` for the `Constraint` is `ALLOW`.
     */
    enforced?: boolean;
  }
  /**
   * The request sent to the ClearOrgPolicy method.
   */
  export interface Schema$ClearOrgPolicyRequest {
    /**
     * Name of the `Constraint` of the `Policy` to clear.
     */
    constraint?: string;
    /**
     * The current version, for concurrency control. Not sending an `etag` will
     * cause the `Policy` to be cleared blindly.
     */
    etag?: string;
  }
  /**
   * A `Constraint` describes a way in which a resource&#39;s configuration can
   * be restricted. For example, it controls which cloud services can be
   * activated across an organization, or whether a Compute Engine instance can
   * have serial port connections established. `Constraints` can be configured
   * by the organization&#39;s policy adminstrator to fit the needs of the
   * organzation by setting Policies for `Constraints` at different locations in
   * the organization&#39;s resource hierarchy. Policies are inherited down the
   * resource hierarchy from higher levels, but can also be overridden. For
   * details about the inheritance rules please read about Policies.
   * `Constraints` have a default behavior determined by the
   * `constraint_default` field, which is the enforcement behavior that is used
   * in the absence of a `Policy` being defined or inherited for the resource in
   * question.
   */
  export interface Schema$Constraint {
    /**
     * Defines this constraint as being a BooleanConstraint.
     */
    booleanConstraint?: Schema$BooleanConstraint;
    /**
     * The evaluation behavior of this constraint in the absense of
     * &#39;Policy&#39;.
     */
    constraintDefault?: string;
    /**
     * Detailed description of what this `Constraint` controls as well as how
     * and where it is enforced.  Mutable.
     */
    description?: string;
    /**
     * The human readable name.  Mutable.
     */
    displayName?: string;
    /**
     * Defines this constraint as being a ListConstraint.
     */
    listConstraint?: Schema$ListConstraint;
    /**
     * Immutable value, required to globally be unique. For example,
     * `constraints/serviceuser.services`
     */
    name?: string;
    /**
     * Version of the `Constraint`. Default version is 0;
     */
    version?: number;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Metadata describing a long running folder operation
   */
  export interface Schema$FolderOperation {
    /**
     * The resource name of the folder or organization we are either creating
     * the folder under or moving the folder to.
     */
    destinationParent?: string;
    /**
     * The display name of the folder.
     */
    displayName?: string;
    /**
     * The type of this operation.
     */
    operationType?: string;
    /**
     * The resource name of the folder&#39;s parent. Only applicable when the
     * operation_type is MOVE.
     */
    sourceParent?: string;
  }
  /**
   * A classification of the Folder Operation error.
   */
  export interface Schema$FolderOperationError {
    /**
     * The type of operation error experienced.
     */
    errorMessageId?: string;
  }
  /**
   * The request sent to the GetAncestry method.
   */
  export interface Schema$GetAncestryRequest {}
  /**
   * Response from the GetAncestry method.
   */
  export interface Schema$GetAncestryResponse {
    /**
     * Ancestors are ordered from bottom to top of the resource hierarchy. The
     * first ancestor is the project itself, followed by the project&#39;s
     * parent, etc..
     */
    ancestor?: Schema$Ancestor[];
  }
  /**
   * The request sent to the GetEffectiveOrgPolicy method.
   */
  export interface Schema$GetEffectiveOrgPolicyRequest {
    /**
     * The name of the `Constraint` to compute the effective `Policy`.
     */
    constraint?: string;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {}
  /**
   * The request sent to the GetOrgPolicy method.
   */
  export interface Schema$GetOrgPolicyRequest {
    /**
     * Name of the `Constraint` to get the `Policy`.
     */
    constraint?: string;
  }
  /**
   * A Lien represents an encumbrance on the actions that can be performed on a
   * resource.
   */
  export interface Schema$Lien {
    /**
     * The creation time of this Lien.
     */
    createTime?: string;
    /**
     * A system-generated unique identifier for this Lien.  Example:
     * `liens/1234abcd`
     */
    name?: string;
    /**
     * A stable, user-visible/meaningful string identifying the origin of the
     * Lien, intended to be inspected programmatically. Maximum length of 200
     * characters.  Example: &#39;compute.googleapis.com&#39;
     */
    origin?: string;
    /**
     * A reference to the resource this Lien is attached to. The server will
     * validate the parent against those for which Liens are supported. Example:
     * `projects/1234`
     */
    parent?: string;
    /**
     * Concise user-visible strings indicating why an action cannot be performed
     * on a resource. Maximum length of 200 characters.  Example: &#39;Holds
     * production API key&#39;
     */
    reason?: string;
    /**
     * The types of operations which should be blocked as a result of this Lien.
     * Each value should correspond to an IAM permission. The server will
     * validate the permissions against those for which Liens are supported.  An
     * empty list is meaningless and will be rejected.  Example:
     * [&#39;resourcemanager.projects.delete&#39;]
     */
    restrictions?: string[];
  }
  /**
   * The request sent to the [ListAvailableOrgPolicyConstraints]
   * google.cloud.OrgPolicy.v1.ListAvailableOrgPolicyConstraints] method.
   */
  export interface Schema$ListAvailableOrgPolicyConstraintsRequest {
    /**
     * Size of the pages to be returned. This is currently unsupported and will
     * be ignored. The server may at any point start using this field to limit
     * page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported
     * and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
  }
  /**
   * The response returned from the ListAvailableOrgPolicyConstraints method.
   * Returns all `Constraints` that could be set at this level of the hierarchy
   * (contrast with the response from `ListPolicies`, which returns all policies
   * which are set).
   */
  export interface Schema$ListAvailableOrgPolicyConstraintsResponse {
    /**
     * The collection of constraints that are settable on the request resource.
     */
    constraints?: Schema$Constraint[];
    /**
     * Page token used to retrieve the next page. This is currently not used.
     */
    nextPageToken?: string;
  }
  /**
   * A `Constraint` that allows or disallows a list of string values, which are
   * configured by an Organization&#39;s policy administrator with a `Policy`.
   */
  export interface Schema$ListConstraint {
    /**
     * Optional. The Google Cloud Console will try to default to a configuration
     * that matches the value specified in this `Constraint`.
     */
    suggestedValue?: string;
  }
  /**
   * The response message for Liens.ListLiens.
   */
  export interface Schema$ListLiensResponse {
    /**
     * A list of Liens.
     */
    liens?: Schema$Lien[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The request sent to the ListOrgPolicies method.
   */
  export interface Schema$ListOrgPoliciesRequest {
    /**
     * Size of the pages to be returned. This is currently unsupported and will
     * be ignored. The server may at any point start using this field to limit
     * page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported
     * and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
  }
  /**
   * The response returned from the ListOrgPolicies method. It will be empty if
   * no `Policies` are set on the resource.
   */
  export interface Schema$ListOrgPoliciesResponse {
    /**
     * Page token used to retrieve the next page. This is currently not used,
     * but the server may at any point start supplying a valid token.
     */
    nextPageToken?: string;
    /**
     * The `Policies` that are set on the resource. It will be empty if no
     * `Policies` are set.
     */
    policies?: Schema$OrgPolicy[];
  }
  /**
   * Used in `policy_type` to specify how `list_policy` behaves at this
   * resource.  A `ListPolicy` can define specific values that are allowed or
   * denied by setting either the `allowed_values` or `denied_values` fields. It
   * can also be used to allow or deny all values, by setting the `all_values`
   * field. If `all_values` is `ALL_VALUES_UNSPECIFIED`, exactly one of
   * `allowed_values` or `denied_values` must be set (attempting to set both or
   * neither will result in a failed request). If `all_values` is set to either
   * `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset.
   */
  export interface Schema$ListPolicy {
    /**
     * List of values allowed  at this resource. Can only be set if no values
     * are set for `denied_values` and `all_values` is set to
     * `ALL_VALUES_UNSPECIFIED`.
     */
    allowedValues?: string[];
    /**
     * The policy all_values state.
     */
    allValues?: string;
    /**
     * List of values denied at this resource. Can only be set if no values are
     * set for `allowed_values` and `all_values` is set to
     * `ALL_VALUES_UNSPECIFIED`.
     */
    deniedValues?: string[];
    /**
     * Determines the inheritance behavior for this `Policy`.  By default, a
     * `ListPolicy` set at a resource supercedes any `Policy` set anywhere up
     * the resource hierarchy. However, if `inherit_from_parent` is set to
     * `true`, then the values from the effective `Policy` of the parent
     * resource are inherited, meaning the values set in this `Policy` are added
     * to the values inherited up the hierarchy.  Setting `Policy` hierarchies
     * that inherit both allowed values and denied values isn&#39;t recommended
     * in most circumstances to keep the configuration simple and
     * understandable. However, it is possible to set a `Policy` with
     * `allowed_values` set that inherits a `Policy` with `denied_values` set.
     * In this case, the values that are allowed must be in `allowed_values` and
     * not present in `denied_values`.  For example, suppose you have a
     * `Constraint` `constraints/serviceuser.services`, which has a
     * `constraint_type` of `list_constraint`, and with `constraint_default` set
     * to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied
     * that restricts the allowed API activations to {`E1`, `E2`}. Then, if a
     * `Policy` is applied to a project below the Organization that has
     * `inherit_from_parent` set to `false` and field all_values set to DENY,
     * then an attempt to activate any API will be denied.  The following
     * examples demonstrate different possible layerings:  Example 1 (no
     * inherited values):   `organizations/foo` has a `Policy` with values:
     * {allowed_values: “E1” allowed_values:”E2”}   ``projects/bar`` has
     * `inherit_from_parent` `false` and values:     {allowed_values:
     * &quot;E3&quot; allowed_values: &quot;E4&quot;} The accepted values at
     * `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar`
     * are `E3`, and `E4`.  Example 2 (inherited values):   `organizations/foo`
     * has a `Policy` with values:     {allowed_values: “E1”
     * allowed_values:”E2”}   `projects/bar` has a `Policy` with values: {value:
     * “E3” value: ”E4” inherit_from_parent: true} The accepted values at
     * `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar`
     * are `E1`, `E2`, `E3`, and `E4`.  Example 3 (inheriting both allowed and
     * denied values):   `organizations/foo` has a `Policy` with values:
     * {allowed_values: &quot;E1&quot; allowed_values: &quot;E2&quot;}
     * `projects/bar` has a `Policy` with:     {denied_values: &quot;E1&quot;}
     * The accepted values at `organizations/foo` are `E1`, `E2`. The value
     * accepted at `projects/bar` is `E2`.  Example 4 (RestoreDefault):
     * `organizations/foo` has a `Policy` with values:     {allowed_values: “E1”
     * allowed_values:”E2”}   `projects/bar` has a `Policy` with values:
     * {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`,
     * `E2`. The accepted values at `projects/bar` are either all or none
     * depending on the value of `constraint_default` (if `ALLOW`, all; if
     * `DENY`, none).  Example 5 (no policy inherits parent policy):
     * `organizations/foo` has no `Policy` set.   `projects/bar` has no `Policy`
     * set. The accepted values at both levels are either all or none depending
     * on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none).
     * Example 6 (ListConstraint allowing all):   `organizations/foo` has a
     * `Policy` with values:     {allowed_values: “E1” allowed_values: ”E2”}
     * `projects/bar` has a `Policy` with:     {all: ALLOW} The accepted values
     * at `organizations/foo` are `E1`, E2`. Any value is accepted at
     * `projects/bar`.  Example 7 (ListConstraint allowing none):
     * `organizations/foo` has a `Policy` with values:     {allowed_values: “E1”
     * allowed_values: ”E2”}   `projects/bar` has a `Policy` with:     {all:
     * DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value
     * is accepted at `projects/bar`.
     */
    inheritFromParent?: boolean;
    /**
     * Optional. The Google Cloud Console will try to default to a configuration
     * that matches the value specified in this `Policy`. If `suggested_value`
     * is not set, it will inherit the value specified higher in the hierarchy,
     * unless `inherit_from_parent` is `false`.
     */
    suggestedValue?: string;
  }
  /**
   * A page of the response received from the ListProjects method.  A paginated
   * response where more pages are available has `next_page_token` set. This
   * token can be used in a subsequent request to retrieve the next request
   * page.
   */
  export interface Schema$ListProjectsResponse {
    /**
     * Pagination token.  If the result set is too large to fit in a single
     * response, this token is returned. It encodes the position of the current
     * result cursor. Feeding this value into a new list request with the
     * `page_token` parameter gives the next page of the results.  When
     * `next_page_token` is not filled in, there is no next page and the list
     * returned is the last page in the result set.  Pagination tokens have a
     * limited lifetime.
     */
    nextPageToken?: string;
    /**
     * The list of Projects that matched the list filter. This list can be
     * paginated.
     */
    projects?: Schema$Project[];
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
  /**
   * The root node in the resource hierarchy to which a particular entity&#39;s
   * (e.g., company) resources belong.
   */
  export interface Schema$Organization {
    /**
     * Timestamp when the Organization was created. Assigned by the server.
     * @OutputOnly
     */
    creationTime?: string;
    /**
     * A human-readable string that refers to the Organization in the GCP
     * Console UI. This string is set by the server and cannot be changed. The
     * string will be set to the primary domain (for example,
     * &quot;google.com&quot;) of the G Suite customer that owns the
     * organization. @OutputOnly
     */
    displayName?: string;
    /**
     * The organization&#39;s current lifecycle state. Assigned by the server.
     * @OutputOnly
     */
    lifecycleState?: string;
    /**
     * Output Only. The resource name of the organization. This is the
     * organization&#39;s relative path in the API. Its format is
     * &quot;organizations/[organization_id]&quot;. For example,
     * &quot;organizations/1234&quot;.
     */
    name?: string;
    /**
     * The owner of this Organization. The owner should be specified on
     * creation. Once set, it cannot be changed. This field is required.
     */
    owner?: Schema$OrganizationOwner;
  }
  /**
   * The entity that owns an Organization. The lifetime of the Organization and
   * all of its descendants are bound to the `OrganizationOwner`. If the
   * `OrganizationOwner` is deleted, the Organization and all its descendants
   * will be deleted.
   */
  export interface Schema$OrganizationOwner {
    /**
     * The G Suite customer id used in the Directory API.
     */
    directoryCustomerId?: string;
  }
  /**
   * Defines a Cloud Organization `Policy` which is used to specify
   * `Constraints` for configurations of Cloud Platform resources.
   */
  export interface Schema$OrgPolicy {
    /**
     * For boolean `Constraints`, whether to enforce the `Constraint` or not.
     */
    booleanPolicy?: Schema$BooleanPolicy;
    /**
     * The name of the `Constraint` the `Policy` is configuring, for example,
     * `constraints/serviceuser.services`.  Immutable after creation.
     */
    constraint?: string;
    /**
     * An opaque tag indicating the current version of the `Policy`, used for
     * concurrency control.  When the `Policy` is returned from either a
     * `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the
     * version of the current `Policy` to use when executing a read-modify-write
     * loop.  When the `Policy` is returned from a `GetEffectivePolicy` request,
     * the `etag` will be unset.  When the `Policy` is used in a `SetOrgPolicy`
     * method, use the `etag` value that was returned from a `GetOrgPolicy`
     * request as part of a read-modify-write loop for concurrency control. Not
     * setting the `etag`in a `SetOrgPolicy` request will result in an
     * unconditional write of the `Policy`.
     */
    etag?: string;
    /**
     * List of values either allowed or disallowed.
     */
    listPolicy?: Schema$ListPolicy;
    /**
     * Restores the default behavior of the constraint; independent of
     * `Constraint` type.
     */
    restoreDefault?: Schema$RestoreDefault;
    /**
     * The time stamp the `Policy` was previously updated. This is set by the
     * server, not specified by the caller, and represents the last time a call
     * to `SetOrgPolicy` was made for that `Policy`. Any value set by the client
     * will be ignored.
     */
    updateTime?: string;
    /**
     * Version of the `Policy`. Default version is 0;
     */
    version?: number;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to
   * specify access control policies for Cloud Platform resources.   A `Policy`
   * consists of a list of `bindings`. A `binding` binds a list of `members` to
   * a `role`, where the members can be user accounts, Google groups, Google
   * domains, and service accounts. A `role` is a named list of permissions
   * defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [ {
   * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
   * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
   * &quot;domain:google.com&quot;,
   * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, {
   * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
   * [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML
   * Example**      bindings:     - members:       - user:mike@example.com -
   * group:admins@example.com       - domain:google.com       -
   * serviceAccount:my-other-app@appspot.gserviceaccount.com       role:
   * roles/owner     - members:       - user:sean@example.com       role:
   * roles/viewer   For a description of IAM and its features, see the [IAM
   * developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members
     * will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other. It
     * is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the
     * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
     * existing policy is overwritten blindly.
     */
    etag?: string;
    /**
     * Deprecated.
     */
    version?: number;
  }
  /**
   * A Project is a high-level Google Cloud Platform entity.  It is a container
   * for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform
   * resources.
   */
  export interface Schema$Project {
    /**
     * Creation time.  Read-only.
     */
    createTime?: string;
    /**
     * The labels associated with this Project.  Label keys must be between 1
     * and 63 characters long and must conform to the following regular
     * expression: \[a-z\](\[-a-z0-9\]*\[a-z0-9\])?.  Label values must be
     * between 0 and 63 characters long and must conform to the regular
     * expression (\[a-z\](\[-a-z0-9\]*\[a-z0-9\])?)?.  No more than 256 labels
     * can be associated with a given resource.  Clients should store labels in
     * a representation such as JSON that does not depend on specific characters
     * being disallowed.  Example: &lt;code&gt;&quot;environment&quot; :
     * &quot;dev&quot;&lt;/code&gt; Read-write.
     */
    labels?: any;
    /**
     * The Project lifecycle state.  Read-only.
     */
    lifecycleState?: string;
    /**
     * The user-assigned display name of the Project. It must be 4 to 30
     * characters. Allowed characters are: lowercase and uppercase letters,
     * numbers, hyphen, single-quote, double-quote, space, and exclamation
     * point.  Example: &lt;code&gt;My Project&lt;/code&gt; Read-write.
     */
    name?: string;
    /**
     * An optional reference to a parent Resource.  Supported parent types
     * include &quot;organization&quot; and &quot;folder&quot;. Once set, the
     * parent cannot be cleared. The `parent` can be set on creation or using
     * the `UpdateProject` method; the end user must have the
     * `resourcemanager.projects.create` permission on the parent.  Read-write.
     */
    parent?: Schema$ResourceId;
    /**
     * The unique, user-assigned ID of the Project. It must be 6 to 30 lowercase
     * letters, digits, or hyphens. It must start with a letter. Trailing
     * hyphens are prohibited.  Example: &lt;code&gt;tokyo-rain-123&lt;/code&gt;
     * Read-only after creation.
     */
    projectId?: string;
    /**
     * The number uniquely identifying the project.  Example:
     * &lt;code&gt;415104041262&lt;/code&gt; Read-only.
     */
    projectNumber?: string;
  }
  /**
   * A status object which is used as the `metadata` field for the Operation
   * returned by CreateProject. It provides insight for when significant phases
   * of Project creation have completed.
   */
  export interface Schema$ProjectCreationStatus {
    /**
     * Creation time of the project creation workflow.
     */
    createTime?: string;
    /**
     * True if the project can be retrieved using GetProject. No other
     * operations on the project are guaranteed to work until the project
     * creation is complete.
     */
    gettable?: boolean;
    /**
     * True if the project creation process is complete.
     */
    ready?: boolean;
  }
  /**
   * A container to reference an id for any resource type. A `resource` in
   * Google Cloud Platform is a generic term for something you (a developer) may
   * want to interact with through one of our API&#39;s. Some examples are an
   * App Engine app, a Compute Engine instance, a Cloud SQL database, and so on.
   */
  export interface Schema$ResourceId {
    /**
     * Required field for the type-specific id. This should correspond to the id
     * used in the type-specific API&#39;s.
     */
    id?: string;
    /**
     * Required field representing the resource type this id is for. At present,
     * the valid types are: &quot;organization&quot;
     */
    type?: string;
  }
  /**
   * Ignores policies set above this resource and restores the
   * `constraint_default` enforcement behavior of the specific `Constraint` at
   * this resource.  Suppose that `constraint_default` is set to `ALLOW` for the
   * `Constraint` `constraints/serviceuser.services`. Suppose that organization
   * foo.com sets a `Policy` at their Organization resource node that restricts
   * the allowed service activations to deny all service activations. They could
   * then set a `Policy` with the `policy_type` `restore_default` on several
   * experimental projects, restoring the `constraint_default` enforcement of
   * the `Constraint` for only those projects, allowing those projects to have
   * all services activated.
   */
  export interface Schema$RestoreDefault {}
  /**
   * The request sent to the `SearchOrganizations` method.
   */
  export interface Schema$SearchOrganizationsRequest {
    /**
     * An optional query string used to filter the Organizations to return in
     * the response. Filter rules are case-insensitive.   Organizations may be
     * filtered by `owner.directoryCustomerId` or by `domain`, where the domain
     * is a G Suite domain, for example:  |Filter|Description|
     * |------|-----------| |owner.directorycustomerid:123456789|Organizations
     * with `owner.directory_customer_id` equal to `123456789`.|
     * |domain:google.com|Organizations corresponding to the domain
     * `google.com`.|  This field is optional.
     */
    filter?: string;
    /**
     * The maximum number of Organizations to return in the response. This field
     * is optional.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `SearchOrganizations`
     * that indicates from where listing should continue. This field is
     * optional.
     */
    pageToken?: string;
  }
  /**
   * The response returned from the `SearchOrganizations` method.
   */
  export interface Schema$SearchOrganizationsResponse {
    /**
     * A pagination token to be used to retrieve the next page of results. If
     * the result is too large to fit within the page size specified in the
     * request, this field will be set with a token that can be used to fetch
     * the next page of results. If this field is empty, it indicates that this
     * response contains the last page of results.
     */
    nextPageToken?: string;
    /**
     * The list of Organizations that matched the search query, possibly
     * paginated.
     */
    organizations?: Schema$Organization[];
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size
     * of the policy is limited to a few 10s of KB. An empty policy is a valid
     * policy but certain Cloud Platform services (such as Projects) might
     * reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify.
     * Only the fields in the mask will be modified. If no mask is provided, the
     * following default mask is used: paths: &quot;bindings, etag&quot; This
     * field is only used by Cloud IAM.
     */
    updateMask?: string;
  }
  /**
   * The request sent to the SetOrgPolicyRequest method.
   */
  export interface Schema$SetOrgPolicyRequest {
    /**
     * `Policy` to set on the resource.
     */
    policy?: Schema$OrgPolicy;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
     * For more information see [IAM
     * Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }
  /**
   * The request sent to the UndeleteProject method.
   */
  export interface Schema$UndeleteProjectRequest {}


  export class Resource$Folders {
    root: Cloudresourcemanager;
    constructor(root: Cloudresourcemanager) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudresourcemanager.folders.clearOrgPolicy
     * @desc Clears a `Policy` from a resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource for the `Policy` to clear.
     *     resource_: 'folders/my-folder',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.folders.clearOrgPolicy(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.folders.clearOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource for the `Policy` to clear.
     * @param {().ClearOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clearOrgPolicy(
        params?: Params$Resource$Folders$Clearorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    clearOrgPolicy(
        params: Params$Resource$Folders$Clearorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    clearOrgPolicy(
        params: Params$Resource$Folders$Clearorgpolicy,
        callback: BodyResponseCallback<Schema$Empty>): void;
    clearOrgPolicy(callback: BodyResponseCallback<Schema$Empty>): void;
    clearOrgPolicy(
        paramsOrCallback?: Params$Resource$Folders$Clearorgpolicy|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Folders$Clearorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Clearorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:clearOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudresourcemanager.folders.getEffectiveOrgPolicy
     * @desc Gets the effective `Policy` on a resource. This is the result of
     * merging `Policies` in the resource hierarchy. The returned `Policy` will
     * not have an `etag`set because it is a computed `Policy` across multiple
     * resources.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource to start computing the effective
     * `Policy`. resource_: 'folders/my-folder',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.folders.getEffectiveOrgPolicy(request,
     * function(err, response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.folders.getEffectiveOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ The name of the resource to start computing the effective `Policy`.
     * @param {().GetEffectiveOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEffectiveOrgPolicy(
        params?: Params$Resource$Folders$Geteffectiveorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$OrgPolicy>;
    getEffectiveOrgPolicy(
        params: Params$Resource$Folders$Geteffectiveorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$OrgPolicy>,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getEffectiveOrgPolicy(
        params: Params$Resource$Folders$Geteffectiveorgpolicy,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getEffectiveOrgPolicy(callback: BodyResponseCallback<Schema$OrgPolicy>):
        void;
    getEffectiveOrgPolicy(
        paramsOrCallback?: Params$Resource$Folders$Geteffectiveorgpolicy|
        BodyResponseCallback<Schema$OrgPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OrgPolicy>,
        callback?: BodyResponseCallback<Schema$OrgPolicy>):
        void|AxiosPromise<Schema$OrgPolicy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Folders$Geteffectiveorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Geteffectiveorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:getEffectiveOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OrgPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrgPolicy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.folders.getOrgPolicy
     * @desc Gets a `Policy` on a resource.  If no `Policy` is set on the
     * resource, a `Policy` is returned with default values including
     * `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can
     * be used with `SetOrgPolicy()` to create or update a `Policy` during
     * read-modify-write.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource the `Policy` is set on.
     *     resource_: 'folders/my-folder',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.folders.getOrgPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.folders.getOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource the `Policy` is set on.
     * @param {().GetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOrgPolicy(
        params?: Params$Resource$Folders$Getorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$OrgPolicy>;
    getOrgPolicy(
        params: Params$Resource$Folders$Getorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$OrgPolicy>,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getOrgPolicy(
        params: Params$Resource$Folders$Getorgpolicy,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getOrgPolicy(callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getOrgPolicy(
        paramsOrCallback?: Params$Resource$Folders$Getorgpolicy|
        BodyResponseCallback<Schema$OrgPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OrgPolicy>,
        callback?: BodyResponseCallback<Schema$OrgPolicy>):
        void|AxiosPromise<Schema$OrgPolicy> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Folders$Getorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Getorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:getOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OrgPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrgPolicy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.folders.listAvailableOrgPolicyConstraints
     * @desc Lists `Constraints` that could be applied on the specified
     * resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource to list `Constraints` for.
     *     resource_: 'folders/my-folder',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var constraintsPage = response['constraints'];
     *     if (!constraintsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < constraintsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `constraintsPage`: console.log(JSON.stringify(constraintsPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       cloudResourceManager.folders.listAvailableOrgPolicyConstraints(request,
     * handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.folders.listAvailableOrgPolicyConstraints(request,
     * handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.folders.listAvailableOrgPolicyConstraints
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list `Constraints` for.
     * @param {().ListAvailableOrgPolicyConstraintsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listAvailableOrgPolicyConstraints(
        params?: Params$Resource$Folders$Listavailableorgpolicyconstraints,
        options?: MethodOptions):
        AxiosPromise<Schema$ListAvailableOrgPolicyConstraintsResponse>;
    listAvailableOrgPolicyConstraints(
        params: Params$Resource$Folders$Listavailableorgpolicyconstraints,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListAvailableOrgPolicyConstraintsResponse>,
        callback: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>): void;
    listAvailableOrgPolicyConstraints(
        params: Params$Resource$Folders$Listavailableorgpolicyconstraints,
        callback: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>): void;
    listAvailableOrgPolicyConstraints(
        callback: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>): void;
    listAvailableOrgPolicyConstraints(
        paramsOrCallback?:
            Params$Resource$Folders$Listavailableorgpolicyconstraints|
        BodyResponseCallback<Schema$ListAvailableOrgPolicyConstraintsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAvailableOrgPolicyConstraintsResponse>,
        callback?: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>):
        void|AxiosPromise<Schema$ListAvailableOrgPolicyConstraintsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Folders$Listavailableorgpolicyconstraints;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Folders$Listavailableorgpolicyconstraints;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/{+resource}:listAvailableOrgPolicyConstraints')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAvailableOrgPolicyConstraintsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$ListAvailableOrgPolicyConstraintsResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.folders.listOrgPolicies
     * @desc Lists all the `Policies` set for a particular resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource to list Policies for.
     *     resource_: 'folders/my-folder',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var policiesPage = response['policies'];
     *     if (!policiesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < policiesPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `policiesPage`: console.log(JSON.stringify(policiesPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       cloudResourceManager.folders.listOrgPolicies(request, handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.folders.listOrgPolicies(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.folders.listOrgPolicies
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list Policies for.
     * @param {().ListOrgPoliciesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOrgPolicies(
        params?: Params$Resource$Folders$Listorgpolicies,
        options?: MethodOptions): AxiosPromise<Schema$ListOrgPoliciesResponse>;
    listOrgPolicies(
        params: Params$Resource$Folders$Listorgpolicies,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOrgPoliciesResponse>,
        callback: BodyResponseCallback<Schema$ListOrgPoliciesResponse>): void;
    listOrgPolicies(
        params: Params$Resource$Folders$Listorgpolicies,
        callback: BodyResponseCallback<Schema$ListOrgPoliciesResponse>): void;
    listOrgPolicies(
        callback: BodyResponseCallback<Schema$ListOrgPoliciesResponse>): void;
    listOrgPolicies(
        paramsOrCallback?: Params$Resource$Folders$Listorgpolicies|
        BodyResponseCallback<Schema$ListOrgPoliciesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOrgPoliciesResponse>,
        callback?: BodyResponseCallback<Schema$ListOrgPoliciesResponse>):
        void|AxiosPromise<Schema$ListOrgPoliciesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Folders$Listorgpolicies;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Listorgpolicies;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:listOrgPolicies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOrgPoliciesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOrgPoliciesResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.folders.setOrgPolicy
     * @desc Updates the specified `Policy` on the resource. Creates a new
     * `Policy` for that `Constraint` on the resource if one does not exist. Not
     * supplying an `etag` on the request `Policy` results in an unconditional
     * write of the `Policy`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of the resource to attach the `Policy`.
     *     resource_: 'folders/my-folder',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.folders.setOrgPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.folders.setOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Resource name of the resource to attach the `Policy`.
     * @param {().SetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setOrgPolicy(
        params?: Params$Resource$Folders$Setorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$OrgPolicy>;
    setOrgPolicy(
        params: Params$Resource$Folders$Setorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$OrgPolicy>,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    setOrgPolicy(
        params: Params$Resource$Folders$Setorgpolicy,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    setOrgPolicy(callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    setOrgPolicy(
        paramsOrCallback?: Params$Resource$Folders$Setorgpolicy|
        BodyResponseCallback<Schema$OrgPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OrgPolicy>,
        callback?: BodyResponseCallback<Schema$OrgPolicy>):
        void|AxiosPromise<Schema$OrgPolicy> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Folders$Setorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Setorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:setOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OrgPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrgPolicy>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Clearorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource for the `Policy` to clear.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClearOrgPolicyRequest;
  }
  export interface Params$Resource$Folders$Geteffectiveorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the resource to start computing the effective `Policy`.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetEffectiveOrgPolicyRequest;
  }
  export interface Params$Resource$Folders$Getorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource the `Policy` is set on.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetOrgPolicyRequest;
  }
  export interface Params$Resource$Folders$Listavailableorgpolicyconstraints {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource to list `Constraints` for.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListAvailableOrgPolicyConstraintsRequest;
  }
  export interface Params$Resource$Folders$Listorgpolicies {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource to list Policies for.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListOrgPoliciesRequest;
  }
  export interface Params$Resource$Folders$Setorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name of the resource to attach the `Policy`.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetOrgPolicyRequest;
  }


  export class Resource$Liens {
    root: Cloudresourcemanager;
    constructor(root: Cloudresourcemanager) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudresourcemanager.liens.create
     * @desc Create a Lien which applies to the resource denoted by the `parent`
     * field.  Callers of this method will require permission on the `parent`
     * resource. For example, applying to `projects/1234` requires permission
     * `resourcemanager.projects.updateLiens`.  NOTE: Some resources may limit
     * the number of Liens which may be applied.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.liens.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.liens.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Lien} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: Params$Resource$Liens$Create, options?: MethodOptions):
        AxiosPromise<Schema$Lien>;
    create(
        params: Params$Resource$Liens$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Lien>,
        callback: BodyResponseCallback<Schema$Lien>): void;
    create(
        params: Params$Resource$Liens$Create,
        callback: BodyResponseCallback<Schema$Lien>): void;
    create(callback: BodyResponseCallback<Schema$Lien>): void;
    create(
        paramsOrCallback?: Params$Resource$Liens$Create|
        BodyResponseCallback<Schema$Lien>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Lien>,
        callback?: BodyResponseCallback<Schema$Lien>):
        void|AxiosPromise<Schema$Lien> {
      let params = (paramsOrCallback || {}) as Params$Resource$Liens$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liens$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/liens').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Lien>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Lien>(parameters);
      }
    }


    /**
     * cloudresourcemanager.liens.delete
     * @desc Delete a Lien by `name`.  Callers of this method will require
     * permission on the `parent` resource. For example, a Lien with a `parent`
     * of `projects/1234` requires permission
     * `resourcemanager.projects.updateLiens`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name/identifier of the Lien to delete.
     *     name: 'liens/my-lien',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.liens.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.liens.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name/identifier of the Lien to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Liens$Delete, options?: MethodOptions):
        AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Liens$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Liens$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Liens$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Liens$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liens$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudresourcemanager.liens.list
     * @desc List all Liens applied to the `parent` resource.  Callers of this
     * method will require permission on the `parent` resource. For example, a
     * Lien with a `parent` of `projects/1234` requires permission
     * `resourcemanager.projects.get`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var liensPage = response['liens'];
     *     if (!liensPage) {
     *       return;
     *     }
     *     for (var i = 0; i < liensPage.length; i++) {
     *       // TODO: Change code below to process each resource in `liensPage`:
     *       console.log(JSON.stringify(liensPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudResourceManager.liens.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.liens.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.liens.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return. This is a suggestion for the server.
     * @param {string=} params.pageToken The `next_page_token` value returned from a previous List request, if any.
     * @param {string=} params.parent The name of the resource to list all attached Liens. For example, `projects/1234`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Liens$List, options?: MethodOptions):
        AxiosPromise<Schema$ListLiensResponse>;
    list(
        params: Params$Resource$Liens$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListLiensResponse>,
        callback: BodyResponseCallback<Schema$ListLiensResponse>): void;
    list(
        params: Params$Resource$Liens$List,
        callback: BodyResponseCallback<Schema$ListLiensResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLiensResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Liens$List|
        BodyResponseCallback<Schema$ListLiensResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLiensResponse>,
        callback?: BodyResponseCallback<Schema$ListLiensResponse>):
        void|AxiosPromise<Schema$ListLiensResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Liens$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liens$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/liens').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListLiensResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLiensResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Liens$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Lien;
  }
  export interface Params$Resource$Liens$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name/identifier of the Lien to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Liens$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of items to return. This is a suggestion for the
     * server.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous List request, if
     * any.
     */
    pageToken?: string;
    /**
     * The name of the resource to list all attached Liens. For example,
     * `projects/1234`.
     */
    parent?: string;
  }


  export class Resource$Operations {
    root: Cloudresourcemanager;
    constructor(root: Cloudresourcemanager) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudresourcemanager.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: 'operations/my-operation',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.operations.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
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

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }


  export class Resource$Organizations {
    root: Cloudresourcemanager;
    constructor(root: Cloudresourcemanager) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudresourcemanager.organizations.clearOrgPolicy
     * @desc Clears a `Policy` from a resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource for the `Policy` to clear.
     *     resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.clearOrgPolicy(request,
     * function(err) { if (err) { console.error(err); return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.clearOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource for the `Policy` to clear.
     * @param {().ClearOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clearOrgPolicy(
        params?: Params$Resource$Organizations$Clearorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    clearOrgPolicy(
        params: Params$Resource$Organizations$Clearorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    clearOrgPolicy(
        params: Params$Resource$Organizations$Clearorgpolicy,
        callback: BodyResponseCallback<Schema$Empty>): void;
    clearOrgPolicy(callback: BodyResponseCallback<Schema$Empty>): void;
    clearOrgPolicy(
        paramsOrCallback?: Params$Resource$Organizations$Clearorgpolicy|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Clearorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Clearorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:clearOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.get
     * @desc Fetches an Organization resource identified by the specified
     * resource name.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the Organization to fetch, e.g.
     * "organizations/1234". name: 'organizations/my-organization',  // TODO:
     * Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.get(request, function(err, response)
     * { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Organization to fetch, e.g. "organizations/1234".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Organizations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Organization>;
    get(params: Params$Resource$Organizations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Organization>,
        callback: BodyResponseCallback<Schema$Organization>): void;
    get(params: Params$Resource$Organizations$Get,
        callback: BodyResponseCallback<Schema$Organization>): void;
    get(callback: BodyResponseCallback<Schema$Organization>): void;
    get(paramsOrCallback?: Params$Resource$Organizations$Get|
        BodyResponseCallback<Schema$Organization>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Organization>,
        callback?: BodyResponseCallback<Schema$Organization>):
        void|AxiosPromise<Schema$Organization> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Organizations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Organization>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Organization>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.getEffectiveOrgPolicy
     * @desc Gets the effective `Policy` on a resource. This is the result of
     * merging `Policies` in the resource hierarchy. The returned `Policy` will
     * not have an `etag`set because it is a computed `Policy` across multiple
     * resources.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource to start computing the effective
     * `Policy`. resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.getEffectiveOrgPolicy(request,
     * function(err, response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.getEffectiveOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ The name of the resource to start computing the effective `Policy`.
     * @param {().GetEffectiveOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEffectiveOrgPolicy(
        params?: Params$Resource$Organizations$Geteffectiveorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$OrgPolicy>;
    getEffectiveOrgPolicy(
        params: Params$Resource$Organizations$Geteffectiveorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$OrgPolicy>,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getEffectiveOrgPolicy(
        params: Params$Resource$Organizations$Geteffectiveorgpolicy,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getEffectiveOrgPolicy(callback: BodyResponseCallback<Schema$OrgPolicy>):
        void;
    getEffectiveOrgPolicy(
        paramsOrCallback?: Params$Resource$Organizations$Geteffectiveorgpolicy|
        BodyResponseCallback<Schema$OrgPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OrgPolicy>,
        callback?: BodyResponseCallback<Schema$OrgPolicy>):
        void|AxiosPromise<Schema$OrgPolicy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Geteffectiveorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Geteffectiveorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:getEffectiveOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OrgPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrgPolicy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.getIamPolicy
     * @desc Gets the access control policy for an Organization resource. May be
     * empty if no such policy or resource exists. The `resource` field should
     * be the organization's resource name, e.g. "organizations/123".
     * Authorization requires the Google IAM permission
     * `resourcemanager.organizations.getIamPolicy` on the specified
     * organization
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.getIamPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.getIamPolicy
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
        params?: Params$Resource$Organizations$Getiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    getIamPolicy(
        params: Params$Resource$Organizations$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params: Params$Resource$Organizations$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?: Params$Resource$Organizations$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.getOrgPolicy
     * @desc Gets a `Policy` on a resource.  If no `Policy` is set on the
     * resource, a `Policy` is returned with default values including
     * `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can
     * be used with `SetOrgPolicy()` to create or update a `Policy` during
     * read-modify-write.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource the `Policy` is set on.
     *     resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.getOrgPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.getOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource the `Policy` is set on.
     * @param {().GetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOrgPolicy(
        params?: Params$Resource$Organizations$Getorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$OrgPolicy>;
    getOrgPolicy(
        params: Params$Resource$Organizations$Getorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$OrgPolicy>,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getOrgPolicy(
        params: Params$Resource$Organizations$Getorgpolicy,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getOrgPolicy(callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getOrgPolicy(
        paramsOrCallback?: Params$Resource$Organizations$Getorgpolicy|
        BodyResponseCallback<Schema$OrgPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OrgPolicy>,
        callback?: BodyResponseCallback<Schema$OrgPolicy>):
        void|AxiosPromise<Schema$OrgPolicy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Getorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:getOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OrgPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrgPolicy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.listAvailableOrgPolicyConstraints
     * @desc Lists `Constraints` that could be applied on the specified
     * resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource to list `Constraints` for.
     *     resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var constraintsPage = response['constraints'];
     *     if (!constraintsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < constraintsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `constraintsPage`: console.log(JSON.stringify(constraintsPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       cloudResourceManager.organizations.listAvailableOrgPolicyConstraints(request,
     * handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.organizations.listAvailableOrgPolicyConstraints(request,
     * handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias
     * cloudresourcemanager.organizations.listAvailableOrgPolicyConstraints
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list `Constraints` for.
     * @param {().ListAvailableOrgPolicyConstraintsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listAvailableOrgPolicyConstraints(
        params?:
            Params$Resource$Organizations$Listavailableorgpolicyconstraints,
        options?: MethodOptions):
        AxiosPromise<Schema$ListAvailableOrgPolicyConstraintsResponse>;
    listAvailableOrgPolicyConstraints(
        params: Params$Resource$Organizations$Listavailableorgpolicyconstraints,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListAvailableOrgPolicyConstraintsResponse>,
        callback: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>): void;
    listAvailableOrgPolicyConstraints(
        params: Params$Resource$Organizations$Listavailableorgpolicyconstraints,
        callback: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>): void;
    listAvailableOrgPolicyConstraints(
        callback: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>): void;
    listAvailableOrgPolicyConstraints(
        paramsOrCallback?:
            Params$Resource$Organizations$Listavailableorgpolicyconstraints|
        BodyResponseCallback<Schema$ListAvailableOrgPolicyConstraintsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAvailableOrgPolicyConstraintsResponse>,
        callback?: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>):
        void|AxiosPromise<Schema$ListAvailableOrgPolicyConstraintsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Listavailableorgpolicyconstraints;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Organizations$Listavailableorgpolicyconstraints;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/{+resource}:listAvailableOrgPolicyConstraints')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAvailableOrgPolicyConstraintsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$ListAvailableOrgPolicyConstraintsResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.listOrgPolicies
     * @desc Lists all the `Policies` set for a particular resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource to list Policies for.
     *     resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var policiesPage = response['policies'];
     *     if (!policiesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < policiesPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `policiesPage`: console.log(JSON.stringify(policiesPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       cloudResourceManager.organizations.listOrgPolicies(request,
     * handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.organizations.listOrgPolicies(request,
     * handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.listOrgPolicies
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list Policies for.
     * @param {().ListOrgPoliciesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOrgPolicies(
        params?: Params$Resource$Organizations$Listorgpolicies,
        options?: MethodOptions): AxiosPromise<Schema$ListOrgPoliciesResponse>;
    listOrgPolicies(
        params: Params$Resource$Organizations$Listorgpolicies,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOrgPoliciesResponse>,
        callback: BodyResponseCallback<Schema$ListOrgPoliciesResponse>): void;
    listOrgPolicies(
        params: Params$Resource$Organizations$Listorgpolicies,
        callback: BodyResponseCallback<Schema$ListOrgPoliciesResponse>): void;
    listOrgPolicies(
        callback: BodyResponseCallback<Schema$ListOrgPoliciesResponse>): void;
    listOrgPolicies(
        paramsOrCallback?: Params$Resource$Organizations$Listorgpolicies|
        BodyResponseCallback<Schema$ListOrgPoliciesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOrgPoliciesResponse>,
        callback?: BodyResponseCallback<Schema$ListOrgPoliciesResponse>):
        void|AxiosPromise<Schema$ListOrgPoliciesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Listorgpolicies;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Listorgpolicies;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:listOrgPolicies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOrgPoliciesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOrgPoliciesResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.search
     * @desc Searches Organization resources that are visible to the user and
     * satisfy the specified filter. This method returns Organizations in an
     * unspecified order. New Organizations do not necessarily appear at the end
     * of the results.  Search will only return organizations on which the user
     * has the permission `resourcemanager.organizations.get`
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var organizationsPage = response['organizations'];
     *     if (!organizationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < organizationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `organizationsPage`: console.log(JSON.stringify(organizationsPage[i],
     * null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       cloudResourceManager.organizations.search(request, handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.organizations.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchOrganizationsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
        params?: Params$Resource$Organizations$Search, options?: MethodOptions):
        AxiosPromise<Schema$SearchOrganizationsResponse>;
    search(
        params: Params$Resource$Organizations$Search,
        options: MethodOptions|
        BodyResponseCallback<Schema$SearchOrganizationsResponse>,
        callback: BodyResponseCallback<Schema$SearchOrganizationsResponse>):
        void;
    search(
        params: Params$Resource$Organizations$Search,
        callback: BodyResponseCallback<Schema$SearchOrganizationsResponse>):
        void;
    search(callback: BodyResponseCallback<Schema$SearchOrganizationsResponse>):
        void;
    search(
        paramsOrCallback?: Params$Resource$Organizations$Search|
        BodyResponseCallback<Schema$SearchOrganizationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SearchOrganizationsResponse>,
        callback?: BodyResponseCallback<Schema$SearchOrganizationsResponse>):
        void|AxiosPromise<Schema$SearchOrganizationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Organizations$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/organizations:search')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SearchOrganizationsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchOrganizationsResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.setIamPolicy
     * @desc Sets the access control policy on an Organization resource.
     * Replaces any existing policy. The `resource` field should be the
     * organization's resource name, e.g. "organizations/123".  Authorization
     * requires the Google IAM permission
     * `resourcemanager.organizations.setIamPolicy` on the specified
     * organization
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.setIamPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.setIamPolicy
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
        params?: Params$Resource$Organizations$Setiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    setIamPolicy(
        params: Params$Resource$Organizations$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params: Params$Resource$Organizations$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?: Params$Resource$Organizations$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.setOrgPolicy
     * @desc Updates the specified `Policy` on the resource. Creates a new
     * `Policy` for that `Constraint` on the resource if one does not exist. Not
     * supplying an `etag` on the request `Policy` results in an unconditional
     * write of the `Policy`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of the resource to attach the `Policy`.
     *     resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.setOrgPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.setOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Resource name of the resource to attach the `Policy`.
     * @param {().SetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setOrgPolicy(
        params?: Params$Resource$Organizations$Setorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$OrgPolicy>;
    setOrgPolicy(
        params: Params$Resource$Organizations$Setorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$OrgPolicy>,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    setOrgPolicy(
        params: Params$Resource$Organizations$Setorgpolicy,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    setOrgPolicy(callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    setOrgPolicy(
        paramsOrCallback?: Params$Resource$Organizations$Setorgpolicy|
        BodyResponseCallback<Schema$OrgPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OrgPolicy>,
        callback?: BodyResponseCallback<Schema$OrgPolicy>):
        void|AxiosPromise<Schema$OrgPolicy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Setorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Setorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:setOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OrgPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrgPolicy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.organizations.testIamPermissions
     * @desc Returns permissions that a caller has on the specified
     * Organization. The `resource` field should be the organization's resource
     * name, e.g. "organizations/123".  There are no permissions required for
     * making this API call.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being
     * requested.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.testIamPermissions(request,
     * function(err, response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.testIamPermissions
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
        params?: Params$Resource$Organizations$Testiampermissions,
        options?: MethodOptions):
        AxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$Organizations$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params: Params$Resource$Organizations$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?: Params$Resource$Organizations$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Clearorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource for the `Policy` to clear.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClearOrgPolicyRequest;
  }
  export interface Params$Resource$Organizations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the Organization to fetch, e.g.
     * "organizations/1234".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Geteffectiveorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the resource to start computing the effective `Policy`.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetEffectiveOrgPolicyRequest;
  }
  export interface Params$Resource$Organizations$Getiampolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Getorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource the `Policy` is set on.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetOrgPolicyRequest;
  }
  export interface Params$Resource$Organizations$Listavailableorgpolicyconstraints {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource to list `Constraints` for.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListAvailableOrgPolicyConstraintsRequest;
  }
  export interface Params$Resource$Organizations$Listorgpolicies {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource to list Policies for.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListOrgPoliciesRequest;
  }
  export interface Params$Resource$Organizations$Search {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchOrganizationsRequest;
  }
  export interface Params$Resource$Organizations$Setiampolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Setorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name of the resource to attach the `Policy`.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetOrgPolicyRequest;
  }
  export interface Params$Resource$Organizations$Testiampermissions {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }


  export class Resource$Projects {
    root: Cloudresourcemanager;
    constructor(root: Cloudresourcemanager) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudresourcemanager.projects.clearOrgPolicy
     * @desc Clears a `Policy` from a resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource for the `Policy` to clear.
     *     resource_: 'projects/my-project',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.clearOrgPolicy(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.clearOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource for the `Policy` to clear.
     * @param {().ClearOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clearOrgPolicy(
        params?: Params$Resource$Projects$Clearorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    clearOrgPolicy(
        params: Params$Resource$Projects$Clearorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    clearOrgPolicy(
        params: Params$Resource$Projects$Clearorgpolicy,
        callback: BodyResponseCallback<Schema$Empty>): void;
    clearOrgPolicy(callback: BodyResponseCallback<Schema$Empty>): void;
    clearOrgPolicy(
        paramsOrCallback?: Params$Resource$Projects$Clearorgpolicy|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Clearorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Clearorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:clearOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.create
     * @desc Request that a new Project be created. The result is an Operation
     * which can be used to track the creation process. It is automatically
     * deleted after a few hours, so there is no need to call DeleteOperation.
     * Our SLO permits Project creation to take up to 30 seconds at the 90th
     * percentile. As of 2016-08-29, we are observing 6 seconds 50th percentile
     * latency. 95th percentile latency is around 11 seconds. We recommend
     * polling at the 5th second with an exponential backoff.  Authorization
     * requires the Google IAM permission `resourcemanager.projects.create` on
     * the specified parent for the new project. The parent is identified by a
     * specified ResourceId, which must include both an ID and a type, such as
     * organization.  This method does not associate the new project with a
     * billing account. You can set or update the billing account associated
     * with a project using the [`projects.updateBillingInfo`]
     * (/billing/reference/rest/v1/projects/updateBillingInfo) method.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Project} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: Params$Resource$Projects$Create, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Projects$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Projects$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.delete
     * @desc Marks the Project identified by the specified `project_id` (for
     * example, `my-project-123`) for deletion. This method will only affect the
     * Project if it has a lifecycle state of ACTIVE.  This method changes the
     * Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion
     * starts at an unspecified time, at which point the Project is no longer
     * accessible.  Until the deletion completes, you can check the lifecycle
     * state checked by retrieving the Project with GetProject, and the Project
     * remains visible to ListProjects. However, you cannot update the project.
     * After the deletion completes, the Project is not retrievable by the
     * GetProject and ListProjects methods.  The caller must have modify
     * permissions for this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The Project ID (for example, `foo-bar-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `foo-bar-123`).  Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Projects$Delete, options?: MethodOptions):
        AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.get
     * @desc Retrieves the Project identified by the specified `project_id` (for
     * example, `my-project-123`).  The caller must have read permissions for
     * this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The Project ID (for example, `my-project-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `my-project-123`).  Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Get,
        options?: MethodOptions): AxiosPromise<Schema$Project>;
    get(params: Params$Resource$Projects$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Project>,
        callback: BodyResponseCallback<Schema$Project>): void;
    get(params: Params$Resource$Projects$Get,
        callback: BodyResponseCallback<Schema$Project>): void;
    get(callback: BodyResponseCallback<Schema$Project>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Get|
        BodyResponseCallback<Schema$Project>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Project>,
        callback?: BodyResponseCallback<Schema$Project>):
        void|AxiosPromise<Schema$Project> {
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

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Project>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.getAncestry
     * @desc Gets a list of ancestors in the resource hierarchy for the Project
     * identified by the specified `project_id` (for example, `my-project-123`).
     * The caller must have read permissions for this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The Project ID (for example, `my-project-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.getAncestry(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.getAncestry
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `my-project-123`).  Required.
     * @param {().GetAncestryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAncestry(
        params?: Params$Resource$Projects$Getancestry,
        options?: MethodOptions): AxiosPromise<Schema$GetAncestryResponse>;
    getAncestry(
        params: Params$Resource$Projects$Getancestry,
        options: MethodOptions|BodyResponseCallback<Schema$GetAncestryResponse>,
        callback: BodyResponseCallback<Schema$GetAncestryResponse>): void;
    getAncestry(
        params: Params$Resource$Projects$Getancestry,
        callback: BodyResponseCallback<Schema$GetAncestryResponse>): void;
    getAncestry(callback: BodyResponseCallback<Schema$GetAncestryResponse>):
        void;
    getAncestry(
        paramsOrCallback?: Params$Resource$Projects$Getancestry|
        BodyResponseCallback<Schema$GetAncestryResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GetAncestryResponse>,
        callback?: BodyResponseCallback<Schema$GetAncestryResponse>):
        void|AxiosPromise<Schema$GetAncestryResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Getancestry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getancestry;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:getAncestry')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GetAncestryResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetAncestryResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.getEffectiveOrgPolicy
     * @desc Gets the effective `Policy` on a resource. This is the result of
     * merging `Policies` in the resource hierarchy. The returned `Policy` will
     * not have an `etag`set because it is a computed `Policy` across multiple
     * resources.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the resource to start computing the effective
     * `Policy`. resource_: 'projects/my-project',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.getEffectiveOrgPolicy(request,
     * function(err, response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.getEffectiveOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ The name of the resource to start computing the effective `Policy`.
     * @param {().GetEffectiveOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEffectiveOrgPolicy(
        params?: Params$Resource$Projects$Geteffectiveorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$OrgPolicy>;
    getEffectiveOrgPolicy(
        params: Params$Resource$Projects$Geteffectiveorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$OrgPolicy>,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getEffectiveOrgPolicy(
        params: Params$Resource$Projects$Geteffectiveorgpolicy,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getEffectiveOrgPolicy(callback: BodyResponseCallback<Schema$OrgPolicy>):
        void;
    getEffectiveOrgPolicy(
        paramsOrCallback?: Params$Resource$Projects$Geteffectiveorgpolicy|
        BodyResponseCallback<Schema$OrgPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OrgPolicy>,
        callback?: BodyResponseCallback<Schema$OrgPolicy>):
        void|AxiosPromise<Schema$OrgPolicy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Geteffectiveorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Geteffectiveorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:getEffectiveOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OrgPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrgPolicy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.getIamPolicy
     * @desc Returns the IAM access control policy for the specified Project.
     * Permission is denied if the policy or the resource does not exist.
     * Authorization requires the Google IAM permission
     * `resourcemanager.projects.getIamPolicy` on the project.  For additional
     * information about resource structure and identification, see [Resource
     * Names](/apis/design/resource_names).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'my-resource',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.getIamPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.getIamPolicy
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
        params?: Params$Resource$Projects$Getiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    getIamPolicy(
        params: Params$Resource$Projects$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params: Params$Resource$Projects$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?: Params$Resource$Projects$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.getOrgPolicy
     * @desc Gets a `Policy` on a resource.  If no `Policy` is set on the
     * resource, a `Policy` is returned with default values including
     * `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can
     * be used with `SetOrgPolicy()` to create or update a `Policy` during
     * read-modify-write.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource the `Policy` is set on.
     *     resource_: 'projects/my-project',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.getOrgPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.getOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource the `Policy` is set on.
     * @param {().GetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOrgPolicy(
        params?: Params$Resource$Projects$Getorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$OrgPolicy>;
    getOrgPolicy(
        params: Params$Resource$Projects$Getorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$OrgPolicy>,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getOrgPolicy(
        params: Params$Resource$Projects$Getorgpolicy,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getOrgPolicy(callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    getOrgPolicy(
        paramsOrCallback?: Params$Resource$Projects$Getorgpolicy|
        BodyResponseCallback<Schema$OrgPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OrgPolicy>,
        callback?: BodyResponseCallback<Schema$OrgPolicy>):
        void|AxiosPromise<Schema$OrgPolicy> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Getorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:getOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OrgPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrgPolicy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.list
     * @desc Lists Projects that are visible to the user and satisfy the
     * specified filter. This method returns Projects in an unspecified order.
     * This method is eventually consistent with project mutations; this means
     * that a newly created project may not appear in the results or recent
     * updates to an existing project may not be reflected in the results. To
     * retrieve the latest state of a project, use the GetProject method.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var projectsPage = response['projects'];
     *     if (!projectsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < projectsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `projectsPage`: console.log(JSON.stringify(projectsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudResourceManager.projects.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.projects.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter An expression for filtering the results of the request.  Filter rules are case insensitive. The fields eligible for filtering are:  + `name` + `id` + <code>labels.<em>key</em></code> where *key* is the name of a label  Some examples of using labels as filters:  |Filter|Description| |------|-----------| |name:how*|The project's name starts with "how".| |name:Howl|The project's name is `Howl` or `howl`.| |name:HOWL|Equivalent to above.| |NAME:howl|Equivalent to above.| |labels.color:*|The project has the label `color`.| |labels.color:red|The project's label `color` has the value `red`.| |labels.color:red&nbsp;labels.size:big|The project's label `color` has the value `red` and its label `size` has the value `big`.  If you specify a filter that has both `parent.type` and `parent.id`, then the `resourcemanager.projects.list` permission is checked on the parent. If the user has this permission, all projects under the parent will be returned after remaining filters have been applied. If the user lacks this permission, then all projects for which the user has the `resourcemanager.projects.get` permission will be returned after remaining filters have been applied. If no filter is specified, the call will return projects for which the user has `resourcemanager.projects.get` permissions.  Optional.
     * @param {integer=} params.pageSize The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default.  Optional.
     * @param {string=} params.pageToken A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.  Optional.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Projects$List, options?: MethodOptions):
        AxiosPromise<Schema$ListProjectsResponse>;
    list(
        params: Params$Resource$Projects$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListProjectsResponse>,
        callback: BodyResponseCallback<Schema$ListProjectsResponse>): void;
    list(
        params: Params$Resource$Projects$List,
        callback: BodyResponseCallback<Schema$ListProjectsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListProjectsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$List|
        BodyResponseCallback<Schema$ListProjectsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListProjectsResponse>,
        callback?: BodyResponseCallback<Schema$ListProjectsResponse>):
        void|AxiosPromise<Schema$ListProjectsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListProjectsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListProjectsResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.listAvailableOrgPolicyConstraints
     * @desc Lists `Constraints` that could be applied on the specified
     * resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource to list `Constraints` for.
     *     resource_: 'projects/my-project',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var constraintsPage = response['constraints'];
     *     if (!constraintsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < constraintsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `constraintsPage`: console.log(JSON.stringify(constraintsPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       cloudResourceManager.projects.listAvailableOrgPolicyConstraints(request,
     * handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.projects.listAvailableOrgPolicyConstraints(request,
     * handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.listAvailableOrgPolicyConstraints
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list `Constraints` for.
     * @param {().ListAvailableOrgPolicyConstraintsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listAvailableOrgPolicyConstraints(
        params?: Params$Resource$Projects$Listavailableorgpolicyconstraints,
        options?: MethodOptions):
        AxiosPromise<Schema$ListAvailableOrgPolicyConstraintsResponse>;
    listAvailableOrgPolicyConstraints(
        params: Params$Resource$Projects$Listavailableorgpolicyconstraints,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListAvailableOrgPolicyConstraintsResponse>,
        callback: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>): void;
    listAvailableOrgPolicyConstraints(
        params: Params$Resource$Projects$Listavailableorgpolicyconstraints,
        callback: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>): void;
    listAvailableOrgPolicyConstraints(
        callback: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>): void;
    listAvailableOrgPolicyConstraints(
        paramsOrCallback?:
            Params$Resource$Projects$Listavailableorgpolicyconstraints|
        BodyResponseCallback<Schema$ListAvailableOrgPolicyConstraintsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAvailableOrgPolicyConstraintsResponse>,
        callback?: BodyResponseCallback<
            Schema$ListAvailableOrgPolicyConstraintsResponse>):
        void|AxiosPromise<Schema$ListAvailableOrgPolicyConstraintsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Listavailableorgpolicyconstraints;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Listavailableorgpolicyconstraints;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/{+resource}:listAvailableOrgPolicyConstraints')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAvailableOrgPolicyConstraintsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$ListAvailableOrgPolicyConstraintsResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.listOrgPolicies
     * @desc Lists all the `Policies` set for a particular resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the resource to list Policies for.
     *     resource_: 'projects/my-project',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var policiesPage = response['policies'];
     *     if (!policiesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < policiesPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `policiesPage`: console.log(JSON.stringify(policiesPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       cloudResourceManager.projects.listOrgPolicies(request, handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.projects.listOrgPolicies(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.listOrgPolicies
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list Policies for.
     * @param {().ListOrgPoliciesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOrgPolicies(
        params?: Params$Resource$Projects$Listorgpolicies,
        options?: MethodOptions): AxiosPromise<Schema$ListOrgPoliciesResponse>;
    listOrgPolicies(
        params: Params$Resource$Projects$Listorgpolicies,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOrgPoliciesResponse>,
        callback: BodyResponseCallback<Schema$ListOrgPoliciesResponse>): void;
    listOrgPolicies(
        params: Params$Resource$Projects$Listorgpolicies,
        callback: BodyResponseCallback<Schema$ListOrgPoliciesResponse>): void;
    listOrgPolicies(
        callback: BodyResponseCallback<Schema$ListOrgPoliciesResponse>): void;
    listOrgPolicies(
        paramsOrCallback?: Params$Resource$Projects$Listorgpolicies|
        BodyResponseCallback<Schema$ListOrgPoliciesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOrgPoliciesResponse>,
        callback?: BodyResponseCallback<Schema$ListOrgPoliciesResponse>):
        void|AxiosPromise<Schema$ListOrgPoliciesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Listorgpolicies;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Listorgpolicies;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:listOrgPolicies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOrgPoliciesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOrgPoliciesResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.setIamPolicy
     * @desc Sets the IAM access control policy for the specified Project.
     * Overwrites any existing policy.  The following constraints apply when
     * using `setIamPolicy()`:  + Project does not support `allUsers` and
     * `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`.  + The
     * owner role can be granted only to `user` and `serviceAccount`.  + Service
     * accounts can be made owners of a project directly without any
     * restrictions. However, to be added as an owner, a user must be invited
     * via Cloud Platform console and must accept the invitation.  + A user
     * cannot be granted the owner role using `setIamPolicy()`. The user must be
     * granted the owner role using the Cloud Platform Console and must
     * explicitly accept the invitation.  + You can only grant ownership of a
     * project to a member by using the GCP Console. Inviting a member will
     * deliver an invitation email that they must accept. An invitation email is
     * not generated if you are granting a role other than owner, or if both the
     * member you are inviting and the project are part of your organization.  +
     * Membership changes that leave the project without any owners that have
     * accepted the Terms of Service (ToS) will be rejected.  + If the project
     * is not part of an organization, there must be at least one owner who has
     * accepted the Terms of Service (ToS) agreement in the policy. Calling
     * `setIamPolicy()` to remove the last ToS-accepted owner from the policy
     * will fail. This restriction also applies to legacy projects that no
     * longer have owners who have accepted the ToS. Edits to IAM policies will
     * be rejected until the lack of a ToS-accepting owner is rectified.  + This
     * method will replace the existing policy, and cannot be used to append
     * additional IAM settings.  Note: Removing service accounts from policies
     * or changing their roles can render services completely inoperable. It is
     * important to understand how the service account is being used before
     * removing or updating its roles.  Authorization requires the Google IAM
     * permission `resourcemanager.projects.setIamPolicy` on the project
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'my-resource',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.setIamPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.setIamPolicy
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
        params?: Params$Resource$Projects$Setiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    setIamPolicy(
        params: Params$Resource$Projects$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params: Params$Resource$Projects$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?: Params$Resource$Projects$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.setOrgPolicy
     * @desc Updates the specified `Policy` on the resource. Creates a new
     * `Policy` for that `Constraint` on the resource if one does not exist. Not
     * supplying an `etag` on the request `Policy` results in an unconditional
     * write of the `Policy`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of the resource to attach the `Policy`.
     *     resource_: 'projects/my-project',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.setOrgPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.setOrgPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Resource name of the resource to attach the `Policy`.
     * @param {().SetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setOrgPolicy(
        params?: Params$Resource$Projects$Setorgpolicy,
        options?: MethodOptions): AxiosPromise<Schema$OrgPolicy>;
    setOrgPolicy(
        params: Params$Resource$Projects$Setorgpolicy,
        options: MethodOptions|BodyResponseCallback<Schema$OrgPolicy>,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    setOrgPolicy(
        params: Params$Resource$Projects$Setorgpolicy,
        callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    setOrgPolicy(callback: BodyResponseCallback<Schema$OrgPolicy>): void;
    setOrgPolicy(
        paramsOrCallback?: Params$Resource$Projects$Setorgpolicy|
        BodyResponseCallback<Schema$OrgPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OrgPolicy>,
        callback?: BodyResponseCallback<Schema$OrgPolicy>):
        void|AxiosPromise<Schema$OrgPolicy> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Setorgpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Setorgpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:setOrgPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OrgPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrgPolicy>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.testIamPermissions
     * @desc Returns permissions that a caller has on the specified Project.
     * There are no permissions required for making this API call.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being
     * requested.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'my-resource',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.testIamPermissions(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.testIamPermissions
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
        params?: Params$Resource$Projects$Testiampermissions,
        options?: MethodOptions):
        AxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$Projects$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params: Params$Resource$Projects$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?: Params$Resource$Projects$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.undelete
     * @desc Restores the Project identified by the specified `project_id` (for
     * example, `my-project-123`). You can only use this method for a Project
     * that has a lifecycle state of DELETE_REQUESTED. After deletion starts,
     * the Project cannot be restored.  The caller must have modify permissions
     * for this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project ID (for example, `foo-bar-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.undelete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.undelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The project ID (for example, `foo-bar-123`).  Required.
     * @param {().UndeleteProjectRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete(
        params?: Params$Resource$Projects$Undelete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    undelete(
        params: Params$Resource$Projects$Undelete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    undelete(
        params: Params$Resource$Projects$Undelete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    undelete(callback: BodyResponseCallback<Schema$Empty>): void;
    undelete(
        paramsOrCallback?: Params$Resource$Projects$Undelete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}:undelete')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudresourcemanager.projects.update
     * @desc Updates the attributes of the Project identified by the specified
     * `project_id` (for example, `my-project-123`).  The caller must have
     * modify permissions for this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project ID (for example, `my-project-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing
     * properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The project ID (for example, `my-project-123`).  Required.
     * @param {().Project} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: Params$Resource$Projects$Update, options?: MethodOptions):
        AxiosPromise<Schema$Project>;
    update(
        params: Params$Resource$Projects$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Project>,
        callback: BodyResponseCallback<Schema$Project>): void;
    update(
        params: Params$Resource$Projects$Update,
        callback: BodyResponseCallback<Schema$Project>): void;
    update(callback: BodyResponseCallback<Schema$Project>): void;
    update(
        paramsOrCallback?: Params$Resource$Projects$Update|
        BodyResponseCallback<Schema$Project>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Project>,
        callback?: BodyResponseCallback<Schema$Project>):
        void|AxiosPromise<Schema$Project> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Project>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Clearorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource for the `Policy` to clear.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClearOrgPolicyRequest;
  }
  export interface Params$Resource$Projects$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Project;
  }
  export interface Params$Resource$Projects$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The Project ID (for example, `foo-bar-123`).  Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The Project ID (for example, `my-project-123`).  Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Getancestry {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The Project ID (for example, `my-project-123`).  Required.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetAncestryRequest;
  }
  export interface Params$Resource$Projects$Geteffectiveorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the resource to start computing the effective `Policy`.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetEffectiveOrgPolicyRequest;
  }
  export interface Params$Resource$Projects$Getiampolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Getorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource the `Policy` is set on.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetOrgPolicyRequest;
  }
  export interface Params$Resource$Projects$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * An expression for filtering the results of the request.  Filter rules are
     * case insensitive. The fields eligible for filtering are:  + `name` + `id`
     * + <code>labels.<em>key</em></code> where *key* is the name of a label
     * Some examples of using labels as filters:  |Filter|Description|
     * |------|-----------| |name:how*|The project's name starts with "how".|
     * |name:Howl|The project's name is `Howl` or `howl`.| |name:HOWL|Equivalent
     * to above.| |NAME:howl|Equivalent to above.| |labels.color:*|The project
     * has the label `color`.| |labels.color:red|The project's label `color` has
     * the value `red`.| |labels.color:red&nbsp;labels.size:big|The project's
     * label `color` has the value `red` and its label `size` has the value
     * `big`.  If you specify a filter that has both `parent.type` and
     * `parent.id`, then the `resourcemanager.projects.list` permission is
     * checked on the parent. If the user has this permission, all projects
     * under the parent will be returned after remaining filters have been
     * applied. If the user lacks this permission, then all projects for which
     * the user has the `resourcemanager.projects.get` permission will be
     * returned after remaining filters have been applied. If no filter is
     * specified, the call will return projects for which the user has
     * `resourcemanager.projects.get` permissions.  Optional.
     */
    filter?: string;
    /**
     * The maximum number of Projects to return in the response. The server can
     * return fewer Projects than requested. If unspecified, server picks an
     * appropriate default.  Optional.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListProjects that
     * indicates from where listing should continue.  Optional.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Listavailableorgpolicyconstraints {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource to list `Constraints` for.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListAvailableOrgPolicyConstraintsRequest;
  }
  export interface Params$Resource$Projects$Listorgpolicies {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource to list Policies for.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListOrgPoliciesRequest;
  }
  export interface Params$Resource$Projects$Setiampolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Setorgpolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name of the resource to attach the `Policy`.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetOrgPolicyRequest;
  }
  export interface Params$Resource$Projects$Testiampermissions {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Projects$Undelete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project ID (for example, `foo-bar-123`).  Required.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteProjectRequest;
  }
  export interface Params$Resource$Projects$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project ID (for example, `my-project-123`).  Required.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Project;
  }
}
