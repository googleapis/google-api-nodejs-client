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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Google Cloud Deployment Manager API
 *
 * Declares, configures, and deploys complex solutions on Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const deploymentmanager = google.deploymentmanager('v2');
 *
 * @namespace deploymentmanager
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Deploymentmanager
 */
export class Deploymentmanager {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  deployments: Resource$Deployments;
  manifests: Resource$Manifests;
  operations: Resource$Operations;
  resources: Resource$Resources;
  types: Resource$Types;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.deployments = new Resource$Deployments(this);
    this.manifests = new Resource$Manifests(this);
    this.operations = new Resource$Operations(this);
    this.resources = new Resource$Resources(this);
    this.types = new Resource$Types(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Specifies the audit configuration for a service. The configuration determines
 * which permission types are logged, and what identities, if any, are exempted
 * from logging. An AuditConfig must have one or more AuditLogConfigs.  If there
 * are AuditConfigs for both `allServices` and a specific service, the union of
 * the two AuditConfigs is used for that service: the log_types specified in
 * each AuditConfig are enabled, and the exempted_members in each AuditLogConfig
 * are exempted.  Example Policy with multiple AuditConfigs:  {
 * &quot;audit_configs&quot;: [ { &quot;service&quot;: &quot;allServices&quot;
 * &quot;audit_log_configs&quot;: [ { &quot;log_type&quot;:
 * &quot;DATA_READ&quot;, &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot; ] }, { &quot;log_type&quot;:
 * &quot;DATA_WRITE&quot;, }, { &quot;log_type&quot;: &quot;ADMIN_READ&quot;, }
 * ] }, { &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
 * &quot;audit_log_configs&quot;: [ { &quot;log_type&quot;:
 * &quot;DATA_READ&quot;, }, { &quot;log_type&quot;: &quot;DATA_WRITE&quot;,
 * &quot;exempted_members&quot;: [ &quot;user:bar@gmail.com&quot; ] } ] } ] }
 * For fooservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
 * logging. It also exempts foo@gmail.com from DATA_READ logging, and
 * bar@gmail.com from DATA_WRITE logging.
 */
export interface Schema$AuditConfig {
  /**
   * The configuration for logging of each type of permission.
   */
  auditLogConfigs: Schema$AuditLogConfig[];
  exemptedMembers: string[];
  /**
   * Specifies a service that will be enabled for audit logging. For example,
   * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
   * special value that covers all services.
   */
  service: string;
}
/**
 * Provides the configuration for logging a type of permissions. Example:  {
 * &quot;audit_log_configs&quot;: [ { &quot;log_type&quot;:
 * &quot;DATA_READ&quot;, &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot; ] }, { &quot;log_type&quot;:
 * &quot;DATA_WRITE&quot;, } ] }  This enables &#39;DATA_READ&#39; and
 * &#39;DATA_WRITE&#39; logging, while exempting foo@gmail.com from DATA_READ
 * logging.
 */
export interface Schema$AuditLogConfig {
  /**
   * Specifies the identities that do not cause logging for this type of
   * permission. Follows the same format of [Binding.members][].
   */
  exemptedMembers: string[];
  /**
   * The log type that this config enables.
   */
  logType: string;
}
/**
 * Authorization-related information used by Cloud Audit Logging.
 */
export interface Schema$AuthorizationLoggingOptions {
  /**
   * The type of the permission that was checked.
   */
  permissionType: string;
}
/**
 * Associates `members` with a `role`.
 */
export interface Schema$Binding {
  /**
   * The condition that is associated with this binding. NOTE: an unsatisfied
   * condition will not allow user access via current binding. Different
   * bindings, including their conditions, are examined independently. This
   * field is only visible as GOOGLE_INTERNAL or CONDITION_TRUSTED_TESTER.
   */
  condition: Schema$Expr;
  /**
   * Specifies the identities requesting access for a Cloud Platform resource.
   * `members` can have the following values:  * `allUsers`: A special
   * identifier that represents anyone who is on the internet; with or without a
   * Google account.  * `allAuthenticatedUsers`: A special identifier that
   * represents anyone who is authenticated with a Google account or a service
   * account.  * `user:{emailid}`: An email address that represents a specific
   * Google account. For example, `alice@gmail.com` or `joe@example.com`.    *
   * `serviceAccount:{emailid}`: An email address that represents a service
   * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
   * `group:{emailid}`: An email address that represents a Google group. For
   * example, `admins@example.com`.    * `domain:{domain}`: A Google Apps domain
   * name that represents all the users of that domain. For example,
   * `google.com` or `example.com`.
   */
  members: string[];
  /**
   * Role that is assigned to `members`. For example, `roles/viewer`,
   * `roles/editor`, or `roles/owner`.
   */
  role: string;
}
/**
 * A condition to be met.
 */
export interface Schema$Condition {
  /**
   * Trusted attributes supplied by the IAM system.
   */
  iam: string;
  /**
   * An operator to apply the subject with.
   */
  op: string;
  /**
   * Trusted attributes discharged by the service.
   */
  svc: string;
  /**
   * Trusted attributes supplied by any service that owns resources and uses the
   * IAM system for access control.
   */
  sys: string;
  /**
   * DEPRECATED. Use &#39;values&#39; instead.
   */
  value: string;
  /**
   * The objects of the condition. This is mutually exclusive with
   * &#39;value&#39;.
   */
  values: string[];
}
export interface Schema$ConfigFile {
  /**
   * The contents of the file.
   */
  content: string;
}
export interface Schema$Deployment {
  /**
   * An optional user-provided description of the deployment.
   */
  description: string;
  /**
   * Provides a fingerprint to use in requests to modify a deployment, such as
   * update(), stop(), and cancelPreview() requests. A fingerprint is a randomly
   * generated value that must be provided with update(), stop(), and
   * cancelPreview() requests to perform optimistic locking. This ensures
   * optimistic concurrency so that only one request happens at a time.  The
   * fingerprint is initially generated by Deployment Manager and changes after
   * every request to modify data. To get the latest fingerprint value, perform
   * a get() request to a deployment.
   */
  fingerprint: string;
  /**
   * Output only. Unique identifier for the resource; defined by the server.
   */
  id: string;
  /**
   * Output only. Timestamp when the deployment was created, in RFC3339 text
   * format .
   */
  insertTime: string;
  /**
   * Map of labels; provided by the client when the resource is created or
   * updated. Specifically: Label keys must be between 1 and 63 characters long
   * and must conform to the following regular expression:
   * [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters
   * long and must conform to the regular expression
   * ([a-z]([-a-z0-9]*[a-z0-9])?)?
   */
  labels: Schema$DeploymentLabelEntry[];
  /**
   * Output only. URL of the manifest representing the last manifest that was
   * successfully deployed.
   */
  manifest: string;
  /**
   * Name of the resource; provided by the client when the resource is created.
   * The name must be 1-63 characters long, and comply with RFC1035.
   * Specifically, the name must be 1-63 characters long and match the regular
   * expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must
   * be a lowercase letter, and all following characters must be a dash,
   * lowercase letter, or digit, except the last character, which cannot be a
   * dash.
   */
  name: string;
  /**
   * Output only. The Operation that most recently ran, or is currently running,
   * on this deployment.
   */
  operation: Schema$Operation;
  /**
   * Output only. Self link for the deployment.
   */
  selfLink: string;
  /**
   * [Input Only] The parameters that define your deployment, including the
   * deployment configuration and relevant templates.
   */
  target: Schema$TargetConfiguration;
  /**
   * Output only. If Deployment Manager is currently updating or previewing an
   * update to this deployment, the updated configuration appears here.
   */
  update: Schema$DeploymentUpdate;
}
export interface Schema$DeploymentLabelEntry {
  key: string;
  value: string;
}
export interface Schema$DeploymentsCancelPreviewRequest {
  /**
   * Specifies a fingerprint for cancelPreview() requests. A fingerprint is a
   * randomly generated value that must be provided in cancelPreview() requests
   * to perform optimistic locking. This ensures optimistic concurrency so that
   * the deployment does not have conflicting requests (e.g. if someone attempts
   * to make a new update request while another user attempts to cancel a
   * preview, this would prevent one of the requests).  The fingerprint is
   * initially generated by Deployment Manager and changes after every request
   * to modify a deployment. To get the latest fingerprint value, perform a
   * get() request on the deployment.
   */
  fingerprint: string;
}
/**
 * A response containing a partial list of deployments and a page token used to
 * build the next request if the request has been truncated.
 */
export interface Schema$DeploymentsListResponse {
  /**
   * Output only. The deployments contained in this response.
   */
  deployments: Schema$Deployment[];
  /**
   * Output only. A token used to continue a truncated list request.
   */
  nextPageToken: string;
}
export interface Schema$DeploymentsStopRequest {
  /**
   * Specifies a fingerprint for stop() requests. A fingerprint is a randomly
   * generated value that must be provided in stop() requests to perform
   * optimistic locking. This ensures optimistic concurrency so that the
   * deployment does not have conflicting requests (e.g. if someone attempts to
   * make a new update request while another user attempts to stop an ongoing
   * update request, this would prevent a collision).  The fingerprint is
   * initially generated by Deployment Manager and changes after every request
   * to modify a deployment. To get the latest fingerprint value, perform a
   * get() request on the deployment.
   */
  fingerprint: string;
}
export interface Schema$DeploymentUpdate {
  /**
   * Output only. An optional user-provided description of the deployment after
   * the current update has been applied.
   */
  description: string;
  /**
   * Output only. Map of labels; provided by the client when the resource is
   * created or updated. Specifically: Label keys must be between 1 and 63
   * characters long and must conform to the following regular expression:
   * [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters
   * long and must conform to the regular expression
   * ([a-z]([-a-z0-9]*[a-z0-9])?)?
   */
  labels: Schema$DeploymentUpdateLabelEntry[];
  /**
   * Output only. URL of the manifest representing the update configuration of
   * this deployment.
   */
  manifest: string;
}
export interface Schema$DeploymentUpdateLabelEntry {
  key: string;
  value: string;
}
/**
 * Represents an expression text. Example:  title: &quot;User account
 * presence&quot; description: &quot;Determines whether the request has a user
 * account&quot; expression: &quot;size(request.user) &gt; 0&quot;
 */
export interface Schema$Expr {
  /**
   * An optional description of the expression. This is a longer text which
   * describes the expression, e.g. when hovered over it in a UI.
   */
  description: string;
  /**
   * Textual representation of an expression in Common Expression Language
   * syntax.  The application context of the containing message determines which
   * well-known feature set of CEL is supported.
   */
  expression: string;
  /**
   * An optional string indicating the location of the expression for error
   * reporting, e.g. a file name and a position in the file.
   */
  location: string;
  /**
   * An optional title for the expression, i.e. a short string describing its
   * purpose. This can be used e.g. in UIs which allow to enter the expression.
   */
  title: string;
}
export interface Schema$ImportFile {
  /**
   * The contents of the file.
   */
  content: string;
  /**
   * The name of the file.
   */
  name: string;
}
/**
 * Specifies what kind of log the caller must write
 */
export interface Schema$LogConfig {
  /**
   * Cloud audit options.
   */
  cloudAudit: Schema$LogConfigCloudAuditOptions;
  /**
   * Counter options.
   */
  counter: Schema$LogConfigCounterOptions;
  /**
   * Data access options.
   */
  dataAccess: Schema$LogConfigDataAccessOptions;
}
/**
 * Write a Cloud Audit log
 */
export interface Schema$LogConfigCloudAuditOptions {
  /**
   * Information used by the Cloud Audit Logging pipeline.
   */
  authorizationLoggingOptions: Schema$AuthorizationLoggingOptions;
  /**
   * The log_name to populate in the Cloud Audit Record.
   */
  logName: string;
}
/**
 * Increment a streamz counter with the specified metric and field names. Metric
 * names should start with a &#39;/&#39;, generally be lowercase-only, and end
 * in &quot;_count&quot;. Field names should not contain an initial slash. The
 * actual exported metric names will have &quot;/iam/policy&quot; prepended.
 * Field names correspond to IAM request parameters and field values are their
 * respective values.  At present the only supported field names are -
 * &quot;iam_principal&quot;, corresponding to IAMContext.principal; -
 * &quot;&quot; (empty string), resulting in one aggretated counter with no
 * field.  Examples: counter { metric: &quot;/debug_access_count&quot; field:
 * &quot;iam_principal&quot; } ==&gt; increment counter
 * /iam/policy/backend_debug_access_count {iam_principal=[value of
 * IAMContext.principal]}  At this time we do not support: * multiple field
 * names (though this may be supported in the future) * decrementing the counter
 * * incrementing it by anything other than 1
 */
export interface Schema$LogConfigCounterOptions {
  /**
   * The field value to attribute.
   */
  field: string;
  /**
   * The metric to update.
   */
  metric: string;
}
/**
 * Write a Data Access (Gin) log
 */
export interface Schema$LogConfigDataAccessOptions {
  /**
   * Whether Gin logging should happen in a fail-closed manner at the caller.
   * This is relevant only in the LocalIAM implementation, for now.
   */
  logMode: string;
}
export interface Schema$Manifest {
  /**
   * Output only. The YAML configuration for this manifest.
   */
  config: Schema$ConfigFile;
  /**
   * Output only. The fully-expanded configuration file, including any templates
   * and references.
   */
  expandedConfig: string;
  /**
   * Output only. Unique identifier for the resource; defined by the server.
   */
  id: string;
  /**
   * Output only. The imported files for this manifest.
   */
  imports: Schema$ImportFile[];
  /**
   * Output only. Timestamp when the manifest was created, in RFC3339 text
   * format.
   */
  insertTime: string;
  /**
   * Output only. The YAML layout for this manifest.
   */
  layout: string;
  /**
   * Output only.  The name of the manifest.
   */
  name: string;
  /**
   * Output only. Self link for the manifest.
   */
  selfLink: string;
}
/**
 * A response containing a partial list of manifests and a page token used to
 * build the next request if the request has been truncated.
 */
export interface Schema$ManifestsListResponse {
  /**
   * Output only. Manifests contained in this list response.
   */
  manifests: Schema$Manifest[];
  /**
   * Output only. A token used to continue a truncated list request.
   */
  nextPageToken: string;
}
/**
 * An Operation resource, used to manage asynchronous API requests. (==
 * resource_for v1.globalOperations ==) (== resource_for beta.globalOperations
 * ==) (== resource_for v1.regionOperations ==) (== resource_for
 * beta.regionOperations ==) (== resource_for v1.zoneOperations ==) (==
 * resource_for beta.zoneOperations ==)
 */
export interface Schema$Operation {
  /**
   * [Output Only] Reserved for future use.
   */
  clientOperationId: string;
  /**
   * [Deprecated] This field is deprecated.
   */
  creationTimestamp: string;
  /**
   * [Output Only] A textual description of the operation, which is set when the
   * operation is created.
   */
  description: string;
  /**
   * [Output Only] The time that this operation was completed. This value is in
   * RFC3339 text format.
   */
  endTime: string;
  /**
   * [Output Only] If errors are generated during processing of the operation,
   * this field will be populated.
   */
  error: any;
  /**
   * [Output Only] If the operation fails, this field contains the HTTP error
   * message that was returned, such as NOT FOUND.
   */
  httpErrorMessage: string;
  /**
   * [Output Only] If the operation fails, this field contains the HTTP error
   * status code that was returned. For example, a 404 means the resource was
   * not found.
   */
  httpErrorStatusCode: number;
  /**
   * [Output Only] The unique identifier for the resource. This identifier is
   * defined by the server.
   */
  id: string;
  /**
   * [Output Only] The time that this operation was requested. This value is in
   * RFC3339 text format.
   */
  insertTime: string;
  /**
   * [Output Only] Type of the resource. Always compute#operation for Operation
   * resources.
   */
  kind: string;
  /**
   * [Output Only] Name of the resource.
   */
  name: string;
  /**
   * [Output Only] The type of operation, such as insert, update, or delete, and
   * so on.
   */
  operationType: string;
  /**
   * [Output Only] An optional progress indicator that ranges from 0 to 100.
   * There is no requirement that this be linear or support any granularity of
   * operations. This should not be used to guess when the operation will be
   * complete. This number should monotonically increase as the operation
   * progresses.
   */
  progress: number;
  /**
   * [Output Only] The URL of the region where the operation resides. Only
   * available when performing regional operations. You must specify this field
   * as part of the HTTP request URL. It is not settable as a field in the
   * request body.
   */
  region: string;
  /**
   * [Output Only] Server-defined URL for the resource.
   */
  selfLink: string;
  /**
   * [Output Only] The time that this operation was started by the server. This
   * value is in RFC3339 text format.
   */
  startTime: string;
  /**
   * [Output Only] The status of the operation, which can be one of the
   * following: PENDING, RUNNING, or DONE.
   */
  status: string;
  /**
   * [Output Only] An optional textual description of the current status of the
   * operation.
   */
  statusMessage: string;
  /**
   * [Output Only] The unique target ID, which identifies a specific incarnation
   * of the target resource.
   */
  targetId: string;
  /**
   * [Output Only] The URL of the resource that the operation modifies. For
   * operations related to creating a snapshot, this points to the persistent
   * disk that the snapshot was created from.
   */
  targetLink: string;
  /**
   * [Output Only] User who requested the operation, for example:
   * user@example.com.
   */
  user: string;
  /**
   * [Output Only] If warning messages are generated during processing of the
   * operation, this field will be populated.
   */
  warnings: any[];
  /**
   * [Output Only] The URL of the zone where the operation resides. Only
   * available when performing per-zone operations. You must specify this field
   * as part of the HTTP request URL. It is not settable as a field in the
   * request body.
   */
  zone: string;
}
/**
 * A response containing a partial list of operations and a page token used to
 * build the next request if the request has been truncated.
 */
export interface Schema$OperationsListResponse {
  /**
   * Output only. A token used to continue a truncated list request.
   */
  nextPageToken: string;
  /**
   * Output only. Operations contained in this list response.
   */
  operations: Schema$Operation[];
}
/**
 * Defines an Identity and Access Management (IAM) policy. It is used to specify
 * access control policies for Cloud Platform resources.    A `Policy` consists
 * of a list of `bindings`. A `Binding` binds a list of `members` to a `role`,
 * where the members can be user accounts, Google groups, Google domains, and
 * service accounts. A `role` is a named list of permissions defined by IAM.
 * **Example**  { &quot;bindings&quot;: [ { &quot;role&quot;:
 * &quot;roles/owner&quot;, &quot;members&quot;: [
 * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
 * &quot;domain:google.com&quot;,
 * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;, ] }, {
 * &quot;role&quot;: &quot;roles/viewer&quot;, &quot;members&quot;:
 * [&quot;user:sean@example.com&quot;] } ] }  For a description of IAM and its
 * features, see the [IAM developer&#39;s
 * guide](https://cloud.google.com/iam/docs).
 */
export interface Schema$Policy {
  /**
   * Specifies cloud audit logging configuration for this policy.
   */
  auditConfigs: Schema$AuditConfig[];
  /**
   * Associates a list of `members` to a `role`. `bindings` with no members will
   * result in an error.
   */
  bindings: Schema$Binding[];
  /**
   * `etag` is used for optimistic concurrency control as a way to help prevent
   * simultaneous updates of a policy from overwriting each other. It is
   * strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and
   * systems are expected to put that etag in the request to `setIamPolicy` to
   * ensure that their change will be applied to the same version of the policy.
   * If no `etag` is provided in the call to `setIamPolicy`, then the existing
   * policy is overwritten blindly.
   */
  etag: string;
  iamOwned: boolean;
  /**
   * If more than one rule is specified, the rules are applied in the following
   * manner: - All matching LOG rules are always applied. - If any
   * DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be
   * applied if one or more matching rule requires logging. - Otherwise, if any
   * ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be
   * applied if one or more matching rule requires logging. - Otherwise, if no
   * rule applies, permission is denied.
   */
  rules: Schema$Rule[];
  /**
   * Deprecated.
   */
  version: number;
}
export interface Schema$Resource {
  /**
   * The Access Control Policy set on this resource.
   */
  accessControl: Schema$ResourceAccessControl;
  /**
   * Output only. The evaluated properties of the resource with references
   * expanded. Returned as serialized YAML.
   */
  finalProperties: string;
  /**
   * Output only. Unique identifier for the resource; defined by the server.
   */
  id: string;
  /**
   * Output only. Timestamp when the resource was created or acquired, in
   * RFC3339 text format .
   */
  insertTime: string;
  /**
   * Output only. URL of the manifest representing the current configuration of
   * this resource.
   */
  manifest: string;
  /**
   * Output only. The name of the resource as it appears in the YAML config.
   */
  name: string;
  /**
   * Output only. The current properties of the resource before any references
   * have been filled in. Returned as serialized YAML.
   */
  properties: string;
  /**
   * Output only. The type of the resource, for example compute.v1.instance, or
   * cloudfunctions.v1beta1.function.
   */
  type: string;
  /**
   * Output only. If Deployment Manager is currently updating or previewing an
   * update to this resource, the updated configuration appears here.
   */
  update: Schema$ResourceUpdate;
  /**
   * Output only. Timestamp when the resource was updated, in RFC3339 text
   * format .
   */
  updateTime: string;
  /**
   * Output only. The URL of the actual resource.
   */
  url: string;
  /**
   * Output only. If warning messages are generated during processing of this
   * resource, this field will be populated.
   */
  warnings: any[];
}
/**
 * The access controls set on the resource.
 */
export interface Schema$ResourceAccessControl {
  /**
   * The GCP IAM Policy to set on the resource.
   */
  gcpIamPolicy: string;
}
/**
 * A response containing a partial list of resources and a page token used to
 * build the next request if the request has been truncated.
 */
export interface Schema$ResourcesListResponse {
  /**
   * A token used to continue a truncated list request.
   */
  nextPageToken: string;
  /**
   * Resources contained in this list response.
   */
  resources: Schema$Resource[];
}
export interface Schema$ResourceUpdate {
  /**
   * The Access Control Policy to set on this resource after updating the
   * resource itself.
   */
  accessControl: Schema$ResourceAccessControl;
  /**
   * Output only. If errors are generated during update of the resource, this
   * field will be populated.
   */
  error: any;
  /**
   * Output only. The expanded properties of the resource with reference values
   * expanded. Returned as serialized YAML.
   */
  finalProperties: string;
  /**
   * Output only. The intent of the resource: PREVIEW, UPDATE, or CANCEL.
   */
  intent: string;
  /**
   * Output only. URL of the manifest representing the update configuration of
   * this resource.
   */
  manifest: string;
  /**
   * Output only. The set of updated properties for this resource, before
   * references are expanded. Returned as serialized YAML.
   */
  properties: string;
  /**
   * Output only. The state of the resource.
   */
  state: string;
  /**
   * Output only. If warning messages are generated during processing of this
   * resource, this field will be populated.
   */
  warnings: any[];
}
/**
 * A rule to be applied in a Policy.
 */
export interface Schema$Rule {
  /**
   * Required
   */
  action: string;
  /**
   * Additional restrictions that must be met. All conditions must pass for the
   * rule to match.
   */
  conditions: Schema$Condition[];
  /**
   * Human-readable description of the rule.
   */
  description: string;
  /**
   * If one or more &#39;in&#39; clauses are specified, the rule matches if the
   * PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
   */
  ins: string[];
  /**
   * The config returned to callers of tech.iam.IAM.CheckPolicy for any entries
   * that match the LOG action.
   */
  logConfigs: Schema$LogConfig[];
  /**
   * If one or more &#39;not_in&#39; clauses are specified, the rule matches if
   * the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
   */
  notIns: string[];
  /**
   * A permission is a string of form &#39;..&#39; (e.g.,
   * &#39;storage.buckets.list&#39;). A value of &#39;*&#39; matches all
   * permissions, and a verb part of &#39;*&#39; (e.g.,
   * &#39;storage.buckets.*&#39;) matches all verbs.
   */
  permissions: string[];
}
export interface Schema$TargetConfiguration {
  /**
   * The configuration to use for this deployment.
   */
  config: Schema$ConfigFile;
  /**
   * Specifies any files to import for this configuration. This can be used to
   * import templates or other files. For example, you might import a text file
   * in order to use the file in a template.
   */
  imports: Schema$ImportFile[];
}
export interface Schema$TestPermissionsRequest {
  /**
   * The set of permissions to check for the &#39;resource&#39;. Permissions
   * with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not
   * allowed.
   */
  permissions: string[];
}
export interface Schema$TestPermissionsResponse {
  /**
   * A subset of `TestPermissionsRequest.permissions` that the caller is
   * allowed.
   */
  permissions: string[];
}
/**
 * A resource type supported by Deployment Manager.
 */
export interface Schema$Type {
  /**
   * Output only. Unique identifier for the resource; defined by the server.
   */
  id: string;
  /**
   * Output only. Timestamp when the type was created, in RFC3339 text format.
   */
  insertTime: string;
  /**
   * Name of the type.
   */
  name: string;
  /**
   * Output only. The Operation that most recently ran, or is currently running,
   * on this type.
   */
  operation: Schema$Operation;
  /**
   * Output only. Self link for the type.
   */
  selfLink: string;
}
/**
 * A response that returns all Types supported by Deployment Manager
 */
export interface Schema$TypesListResponse {
  /**
   * A token used to continue a truncated list request.
   */
  nextPageToken: string;
  /**
   * Output only. A list of resource types supported by Deployment Manager.
   */
  types: Schema$Type[];
}

export class Resource$Deployments {
  root: Deploymentmanager;
  constructor(root: Deploymentmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * deploymentmanager.deployments.cancelPreview
   * @desc Cancels and removes the preview currently associated with the
   * deployment.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.deployments.cancelPreview(request, function(err,
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
   * @alias deploymentmanager.deployments.cancelPreview
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {string} params.project The project ID for this request.
   * @param {().DeploymentsCancelPreviewRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancelPreview(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  cancelPreview(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  cancelPreview(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/cancelPreview')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['project', 'deployment'],
      pathParams: ['deployment', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.delete
   * @desc Deletes a deployment and all of the resources in the deployment.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.deployments.delete(request, function(err, response) {
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
   * @alias deploymentmanager.deployments.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['project', 'deployment'],
      pathParams: ['deployment', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.get
   * @desc Gets information about a specific deployment.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.deployments.get(request, function(err, response) {
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
   * @alias deploymentmanager.deployments.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Deployment>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Deployment>,
      callback?: BodyResponseCallback<Schema$Deployment>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Deployment>,
      callback?: BodyResponseCallback<Schema$Deployment>):
      void|AxiosPromise<Schema$Deployment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'deployment'],
      pathParams: ['deployment', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Deployment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Deployment>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.getIamPolicy
   * @desc Gets the access control policy for a resource. May be empty if no
   * such policy or resource exists.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Name of the resource for this request.
   *     resource_: 'my-resource',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.deployments.getIamPolicy(request, function(err,
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
   * @alias deploymentmanager.deployments.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project Project ID for this request.
   * @param {string} params.resource_ Name of the resource for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{resource}/getIamPolicy')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'resource'],
      pathParams: ['project', 'resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.insert
   * @desc Creates a deployment and all of the resources described by the
   * deployment manifest.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.deployments.insert(request, function(err, response) {
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
   * @alias deploymentmanager.deployments.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.createPolicy Sets the policy to use for creating new resources.
   * @param {boolean=} params.preview If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
   * @param {string} params.project The project ID for this request.
   * @param {().Deployment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/deploymentmanager/v2/projects/{project}/global/deployments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.list
   * @desc Lists all deployments for a given project.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
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
   *     var deploymentsPage = response['deployments'];
   *     if (!deploymentsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < deploymentsPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `deploymentsPage`: console.log(JSON.stringify(deploymentsPage[i], null,
   * 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       deploymentManager.deployments.list(request, handlePage);
   *     }
   *   };
   *
   *   deploymentManager.deployments.list(request, handlePage);
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
   * @alias deploymentmanager.deployments.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
   * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
   * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
   * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DeploymentsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DeploymentsListResponse>,
      callback?: BodyResponseCallback<Schema$DeploymentsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DeploymentsListResponse>,
      callback?: BodyResponseCallback<Schema$DeploymentsListResponse>):
      void|AxiosPromise<Schema$DeploymentsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/deploymentmanager/v2/projects/{project}/global/deployments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DeploymentsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DeploymentsListResponse>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.patch
   * @desc Updates a deployment and all of the resources described by the
   * deployment manifest. This method supports patch semantics.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. Only these
   * properties
   *       // will be changed.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.deployments.patch(request, function(err, response) {
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
   * @alias deploymentmanager.deployments.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.createPolicy Sets the policy to use for creating new resources.
   * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {boolean=} params.preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
   * @param {string} params.project The project ID for this request.
   * @param {().Deployment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['project', 'deployment'],
      pathParams: ['deployment', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Name of the resource for this request.
   *     resource_: 'my-resource',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.deployments.setIamPolicy(request, function(err,
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
   * @alias deploymentmanager.deployments.setIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project Project ID for this request.
   * @param {string} params.resource_ Name of the resource for this request.
   * @param {().Policy} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{resource}/setIamPolicy')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['project', 'resource'],
      pathParams: ['project', 'resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.stop
   * @desc Stops an ongoing operation. This does not roll back any work that has
   * already been completed, but prevents any new work from being started.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.deployments.stop(request, function(err, response) {
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
   * @alias deploymentmanager.deployments.stop
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {string} params.project The project ID for this request.
   * @param {().DeploymentsStopRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  stop(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  stop(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  stop(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/stop')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['project', 'deployment'],
      pathParams: ['deployment', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // Name of the resource for this request.
   *     resource_: 'my-resource',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.deployments.testIamPermissions(request, function(err,
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
   * @alias deploymentmanager.deployments.testIamPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project Project ID for this request.
   * @param {string} params.resource_ Name of the resource for this request.
   * @param {().TestPermissionsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestPermissionsResponse>):
      void|AxiosPromise<Schema$TestPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{resource}/testIamPermissions')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['project', 'resource'],
      pathParams: ['project', 'resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestPermissionsResponse>(parameters);
    }
  }


  /**
   * deploymentmanager.deployments.update
   * @desc Updates a deployment and all of the resources described by the
   * deployment manifest.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
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
   *   deploymentManager.deployments.update(request, function(err, response) {
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
   * @alias deploymentmanager.deployments.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.createPolicy Sets the policy to use for creating new resources.
   * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {boolean=} params.preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
   * @param {string} params.project The project ID for this request.
   * @param {().Deployment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['project', 'deployment'],
      pathParams: ['deployment', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }
}

export class Resource$Manifests {
  root: Deploymentmanager;
  constructor(root: Deploymentmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * deploymentmanager.manifests.get
   * @desc Gets information about a specific manifest.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
   *
   *     // The name of the manifest for this request.
   *     manifest: 'my-manifest',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.manifests.get(request, function(err, response) {
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
   * @alias deploymentmanager.manifests.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {string} params.manifest The name of the manifest for this request.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Manifest>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Manifest>,
      callback?: BodyResponseCallback<Schema$Manifest>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Manifest>,
      callback?: BodyResponseCallback<Schema$Manifest>):
      void|AxiosPromise<Schema$Manifest> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests/{manifest}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'deployment', 'manifest'],
      pathParams: ['deployment', 'manifest', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Manifest>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Manifest>(parameters);
    }
  }


  /**
   * deploymentmanager.manifests.list
   * @desc Lists all manifests for a given deployment.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
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
   *     var manifestsPage = response['manifests'];
   *     if (!manifestsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < manifestsPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `manifestsPage`: console.log(JSON.stringify(manifestsPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       deploymentManager.manifests.list(request, handlePage);
   *     }
   *   };
   *
   *   deploymentManager.manifests.list(request, handlePage);
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
   * @alias deploymentmanager.manifests.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {string=} params.filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
   * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
   * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
   * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ManifestsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManifestsListResponse>,
      callback?: BodyResponseCallback<Schema$ManifestsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManifestsListResponse>,
      callback?: BodyResponseCallback<Schema$ManifestsListResponse>):
      void|AxiosPromise<Schema$ManifestsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'deployment'],
      pathParams: ['deployment', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManifestsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManifestsListResponse>(parameters);
    }
  }
}

export class Resource$Operations {
  root: Deploymentmanager;
  constructor(root: Deploymentmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * deploymentmanager.operations.get
   * @desc Gets information about a specific operation.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the operation for this request.
   *     operation: 'my-operation',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.operations.get(request, function(err, response) {
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
   * @alias deploymentmanager.operations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.operation The name of the operation for this request.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/operations/{operation}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'operation'],
      pathParams: ['operation', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.operations.list
   * @desc Lists all operations for a project.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
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
   *     var operationsPage = response['operations'];
   *     if (!operationsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < operationsPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `operationsPage`: console.log(JSON.stringify(operationsPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       deploymentManager.operations.list(request, handlePage);
   *     }
   *   };
   *
   *   deploymentManager.operations.list(request, handlePage);
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
   * @alias deploymentmanager.operations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
   * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
   * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
   * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$OperationsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OperationsListResponse>,
      callback?: BodyResponseCallback<Schema$OperationsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$OperationsListResponse>,
      callback?: BodyResponseCallback<Schema$OperationsListResponse>):
      void|AxiosPromise<Schema$OperationsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/deploymentmanager/v2/projects/{project}/global/operations')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$OperationsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$OperationsListResponse>(parameters);
    }
  }
}

export class Resource$Resources {
  root: Deploymentmanager;
  constructor(root: Deploymentmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * deploymentmanager.resources.get
   * @desc Gets information about a single resource.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
   *
   *     // The name of the resource for this request.
   *     resource_: 'my-resource',  // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   deploymentManager.resources.get(request, function(err, response) {
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
   * @alias deploymentmanager.resources.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {string} params.project The project ID for this request.
   * @param {string} params.resource_ The name of the resource for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Resource>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Resource>,
      callback?: BodyResponseCallback<Schema$Resource>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Resource>,
      callback?: BodyResponseCallback<Schema$Resource>):
      void|AxiosPromise<Schema$Resource> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources/{resource}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'deployment', 'resource'],
      pathParams: ['deployment', 'project', 'resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Resource>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Resource>(parameters);
    }
  }


  /**
   * deploymentmanager.resources.list
   * @desc Lists all resources in a given deployment.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
   *
   *     // The name of the deployment for this request.
   *     deployment: 'my-deployment',  // TODO: Update placeholder value.
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
   *     var resourcesPage = response['resources'];
   *     if (!resourcesPage) {
   *       return;
   *     }
   *     for (var i = 0; i < resourcesPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `resourcesPage`: console.log(JSON.stringify(resourcesPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       deploymentManager.resources.list(request, handlePage);
   *     }
   *   };
   *
   *   deploymentManager.resources.list(request, handlePage);
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
   * @alias deploymentmanager.resources.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deployment The name of the deployment for this request.
   * @param {string=} params.filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
   * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
   * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
   * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ResourcesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ResourcesListResponse>,
      callback?: BodyResponseCallback<Schema$ResourcesListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ResourcesListResponse>,
      callback?: BodyResponseCallback<Schema$ResourcesListResponse>):
      void|AxiosPromise<Schema$ResourcesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'deployment'],
      pathParams: ['deployment', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ResourcesListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ResourcesListResponse>(parameters);
    }
  }
}

export class Resource$Types {
  root: Deploymentmanager;
  constructor(root: Deploymentmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * deploymentmanager.types.list
   * @desc Lists all resource types for Deployment Manager.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Deployment Manager API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/deploymentmanager
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var deploymentManager = google.deploymentmanager('v2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The project ID for this request.
   *     project: 'my-project',  // TODO: Update placeholder value.
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
   *     var typesPage = response['types'];
   *     if (!typesPage) {
   *       return;
   *     }
   *     for (var i = 0; i < typesPage.length; i++) {
   *       // TODO: Change code below to process each resource in `typesPage`:
   *       console.log(JSON.stringify(typesPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       deploymentManager.types.list(request, handlePage);
   *     }
   *   };
   *
   *   deploymentManager.types.list(request, handlePage);
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
   * @alias deploymentmanager.types.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
   * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
   * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
   * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TypesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TypesListResponse>,
      callback?: BodyResponseCallback<Schema$TypesListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TypesListResponse>,
      callback?: BodyResponseCallback<Schema$TypesListResponse>):
      void|AxiosPromise<Schema$TypesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/deploymentmanager/v2/projects/{project}/global/types')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TypesListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TypesListResponse>(parameters);
    }
  }
}
