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
 * Google Cloud Deployment Manager API V2Beta Methods
 *
 * The Deployment Manager API allows users to declaratively configure, deploy
 * and run complex solutions on the Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const deploymentmanager = google.deploymentmanager('v2beta');
 *
 * @namespace deploymentmanager
 * @type {Function}
 * @version v2beta
 * @variation v2beta
 * @param {object=} options Options for Deploymentmanager
 */
export class Deploymentmanager {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  compositeTypes: Resource$Compositetypes;
  deployments: Resource$Deployments;
  manifests: Resource$Manifests;
  operations: Resource$Operations;
  resources: Resource$Resources;
  typeProviders: Resource$Typeproviders;
  types: Resource$Types;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.compositeTypes = new Resource$Compositetypes(this);
    this.deployments = new Resource$Deployments(this);
    this.manifests = new Resource$Manifests(this);
    this.operations = new Resource$Operations(this);
    this.resources = new Resource$Resources(this);
    this.typeProviders = new Resource$Typeproviders(this);
    this.types = new Resource$Types(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Async options that determine when a resource should finish.
 */
export interface Schema$AsyncOptions {
  /**
   * Method regex where this policy will apply.
   */
  methodMatch: string;
  /**
   * Deployment manager will poll instances for this API resource setting a
   * RUNNING state, and blocking until polling conditions tell whether the
   * resource is completed or failed.
   */
  pollingOptions: Schema$PollingOptions;
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
 * BaseType that describes a service-backed Type.
 */
export interface Schema$BaseType {
  /**
   * Allows resource handling overrides for specific collections
   */
  collectionOverrides: Schema$CollectionOverride[];
  /**
   * Credential used when interacting with this type.
   */
  credential: Schema$Credential;
  /**
   * Descriptor Url for the this type.
   */
  descriptorUrl: string;
  /**
   * Options to apply when handling any resources in this service.
   */
  options: Schema$Options;
}
/**
 * Basic Auth used as a credential.
 */
export interface Schema$BasicAuth {
  password: string;
  user: string;
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
 * CollectionOverride allows resource handling overrides for specific resources
 * within a BaseType
 */
export interface Schema$CollectionOverride {
  /**
   * The collection that identifies this resource within its service.
   */
  collection: string;
  /**
   * The options to apply to this resource-level override
   */
  options: Schema$Options;
}
/**
 * Holds the composite type.
 */
export interface Schema$CompositeType {
  /**
   * An optional textual description of the resource; provided by the client
   * when the resource is created.
   */
  description: string;
  /**
   * Output only. Unique identifier for the resource; defined by the server.
   */
  id: string;
  /**
   * Output only. Timestamp when the composite type was created, in RFC3339 text
   * format.
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
  labels: Schema$CompositeTypeLabelEntry[];
  /**
   * Name of the composite type, must follow the expression:
   * [a-z]([-a-z0-9_.]{0,61}[a-z0-9])?.
   */
  name: string;
  /**
   * Output only. The Operation that most recently ran, or is currently running,
   * on this composite type.
   */
  operation: Schema$Operation;
  /**
   * Output only. Self link for the type provider.
   */
  selfLink: string;
  status: string;
  /**
   * Files for the template type.
   */
  templateContents: Schema$TemplateContents;
}
export interface Schema$CompositeTypeLabelEntry {
  key: string;
  value: string;
}
/**
 * A response that returns all Composite Types supported by Deployment Manager
 */
export interface Schema$CompositeTypesListResponse {
  /**
   * Output only. A list of resource composite types supported by Deployment
   * Manager.
   */
  compositeTypes: Schema$CompositeType[];
  /**
   * A token used to continue a truncated list request.
   */
  nextPageToken: string;
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
/**
 * The credential used by Deployment Manager and TypeProvider. Only one of the
 * options is permitted.
 */
export interface Schema$Credential {
  /**
   * Basic Auth Credential, only used by TypeProvider.
   */
  basicAuth: Schema$BasicAuth;
  /**
   * Service Account Credential, only used by Deployment.
   */
  serviceAccount: Schema$ServiceAccount;
  /**
   * Specify to use the project default credential, only supported by
   * Deployment.
   */
  useProjectDefault: boolean;
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
export interface Schema$Diagnostic {
  /**
   * JsonPath expression on the resource that if non empty, indicates that this
   * field needs to be extracted as a diagnostic.
   */
  field: string;
  /**
   * Level to record this diagnostic.
   */
  level: string;
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
 * InputMapping creates a &#39;virtual&#39; property that will be injected into
 * the properties before sending the request to the underlying API.
 */
export interface Schema$InputMapping {
  /**
   * The name of the field that is going to be injected.
   */
  fieldName: string;
  /**
   * The location where this mapping applies.
   */
  location: string;
  /**
   * Regex to evaluate on method to decide if input applies.
   */
  methodMatch: string;
  /**
   * A jsonPath expression to select an element.
   */
  value: string;
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
 * Options allows customized resource handling by Deployment Manager.
 */
export interface Schema$Options {
  /**
   * Options regarding how to thread async requests.
   */
  asyncOptions: Schema$AsyncOptions[];
  /**
   * The mappings that apply for requests.
   */
  inputMappings: Schema$InputMapping[];
  /**
   * Options for how to validate and process properties on a resource.
   */
  validationOptions: Schema$ValidationOptions;
  /**
   * Additional properties block described as a jsonSchema, these properties
   * will never be part of the json payload, but they can be consumed by
   * InputMappings, this must be a valid json schema draft-04. The properties
   * specified here will be decouple in a different section. This schema will be
   * merged to the schema validation, and properties here will be extracted From
   * the payload and consumed explicitly by InputMappings. ex: field1: type:
   * string field2: type: number
   */
  virtualProperties: string;
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
export interface Schema$PollingOptions {
  /**
   * An array of diagnostics to be collected by Deployment Manager, these
   * diagnostics will be displayed to the user.
   */
  diagnostics: Schema$Diagnostic[];
  /**
   * JsonPath expression that determines if the request failed.
   */
  failCondition: string;
  /**
   * JsonPath expression that determines if the request is completed.
   */
  finishCondition: string;
  /**
   * JsonPath expression that evaluates to string, it indicates where to poll.
   */
  pollingLink: string;
  /**
   * JsonPath expression, after polling is completed, indicates where to fetch
   * the resource.
   */
  targetLink: string;
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
/**
 * Service Account used as a credential.
 */
export interface Schema$ServiceAccount {
  /**
   * The IAM service account email address like
   * test@myproject.iam.gserviceaccount.com
   */
  email: string;
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
/**
 * Files that make up the template contents of a template type.
 */
export interface Schema$TemplateContents {
  /**
   * Import files referenced by the main template.
   */
  imports: Schema$ImportFile[];
  /**
   * Which interpreter (python or jinja) should be used during expansion.
   */
  interpreter: string;
  /**
   * The filename of the mainTemplate
   */
  mainTemplate: string;
  /**
   * The contents of the template schema.
   */
  schema: string;
  /**
   * The contents of the main template file.
   */
  template: string;
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
   * Base Type (configurable service) that backs this Type.
   */
  base: Schema$BaseType;
  /**
   * An optional textual description of the resource; provided by the client
   * when the resource is created.
   */
  description: string;
  /**
   * Output only. Unique identifier for the resource; defined by the server.
   */
  id: string;
  /**
   * Output only. Timestamp when the type was created, in RFC3339 text format.
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
  labels: Schema$TypeLabelEntry[];
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
 * Contains detailed information about a composite type, base type, or base type
 * with specific collection.
 */
export interface Schema$TypeInfo {
  /**
   * The description of the type.
   */
  description: string;
  /**
   * For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field
   * will be empty.
   */
  documentationLink: string;
  /**
   * Output only. Type of the output. Always deploymentManager#TypeInfo for
   * TypeInfo.
   */
  kind: string;
  /**
   * The base type or composite type name.
   */
  name: string;
  /**
   * For base types with a collection, we return a schema and documentation link
   * For template types, we return only a schema
   */
  schema: Schema$TypeInfoSchemaInfo;
  /**
   * Output only. Server-defined URL for the resource.
   */
  selfLink: string;
  /**
   * The title on the API descriptor URL provided.
   */
  title: string;
}
export interface Schema$TypeInfoSchemaInfo {
  /**
   * The properties that this composite type or base type collection accept as
   * input, represented as a json blob, format is: JSON Schema Draft V4
   */
  input: string;
  /**
   * The properties that this composite type or base type collection exposes as
   * output, these properties can be used for references, represented as json
   * blob, format is: JSON Schema Draft V4
   */
  output: string;
}
export interface Schema$TypeLabelEntry {
  key: string;
  value: string;
}
/**
 * A type provider that describes a service-backed Type.
 */
export interface Schema$TypeProvider {
  /**
   * Allows resource handling overrides for specific collections
   */
  collectionOverrides: Schema$CollectionOverride[];
  /**
   * Credential used when interacting with this type.
   */
  credential: Schema$Credential;
  /**
   * An optional textual description of the resource; provided by the client
   * when the resource is created.
   */
  description: string;
  /**
   * Descriptor Url for the this type provider.
   */
  descriptorUrl: string;
  /**
   * Output only. Unique identifier for the resource; defined by the server.
   */
  id: string;
  /**
   * Output only. Timestamp when the type provider was created, in RFC3339 text
   * format.
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
  labels: Schema$TypeProviderLabelEntry[];
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
   * on this type provider.
   */
  operation: Schema$Operation;
  /**
   * Options to apply when handling any resources in this service.
   */
  options: Schema$Options;
  /**
   * Output only. Self link for the type provider.
   */
  selfLink: string;
}
export interface Schema$TypeProviderLabelEntry {
  key: string;
  value: string;
}
/**
 * A response that returns all Type Providers supported by Deployment Manager
 */
export interface Schema$TypeProvidersListResponse {
  /**
   * A token used to continue a truncated list request.
   */
  nextPageToken: string;
  /**
   * Output only. A list of resource type providers supported by Deployment
   * Manager.
   */
  typeProviders: Schema$TypeProvider[];
}
export interface Schema$TypeProvidersListTypesResponse {
  /**
   * A token used to continue a truncated list request.
   */
  nextPageToken: string;
  /**
   * Output only. A list of resource type info.
   */
  types: Schema$TypeInfo[];
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
/**
 * Options for how to validate and process properties on a resource.
 */
export interface Schema$ValidationOptions {
  /**
   * Customize how deployment manager will validate the resource against schema
   * errors.
   */
  schemaValidation: string;
  /**
   * Specify what to do with extra properties when executing a request.
   */
  undeclaredProperties: string;
}

export class Resource$Compositetypes {
  root: Deploymentmanager;
  constructor(root: Deploymentmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * deploymentmanager.compositeTypes.delete
   * @desc Deletes a composite type.
   * @alias deploymentmanager.compositeTypes.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.compositeType The name of the type for this request.
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
                 '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['project', 'compositeType'],
      pathParams: ['compositeType', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.compositeTypes.get
   * @desc Gets information about a specific composite type.
   * @alias deploymentmanager.compositeTypes.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.compositeType The name of the composite type for this request.
   * @param {string} params.project The project ID for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$CompositeType>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CompositeType>,
      callback?: BodyResponseCallback<Schema$CompositeType>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CompositeType>,
      callback?: BodyResponseCallback<Schema$CompositeType>):
      void|AxiosPromise<Schema$CompositeType> {
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
                 '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'compositeType'],
      pathParams: ['compositeType', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CompositeType>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CompositeType>(parameters);
    }
  }


  /**
   * deploymentmanager.compositeTypes.insert
   * @desc Creates a composite type.
   * @alias deploymentmanager.compositeTypes.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project ID for this request.
   * @param {().CompositeType} params.resource Request body data
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
            url:
                (rootUrl +
                 '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes')
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
   * deploymentmanager.compositeTypes.list
   * @desc Lists all composite types for Deployment Manager.
   * @alias deploymentmanager.compositeTypes.list
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
      AxiosPromise<Schema$CompositeTypesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CompositeTypesListResponse>,
      callback?: BodyResponseCallback<Schema$CompositeTypesListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CompositeTypesListResponse>,
      callback?: BodyResponseCallback<Schema$CompositeTypesListResponse>):
      void|AxiosPromise<Schema$CompositeTypesListResponse> {
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
                 '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes')
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
      createAPIRequest<Schema$CompositeTypesListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CompositeTypesListResponse>(parameters);
    }
  }


  /**
   * deploymentmanager.compositeTypes.patch
   * @desc Updates a composite type. This method supports patch semantics.
   * @alias deploymentmanager.compositeTypes.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.compositeType The name of the composite type for this request.
   * @param {string} params.project The project ID for this request.
   * @param {().CompositeType} params.resource Request body data
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
                 '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['project', 'compositeType'],
      pathParams: ['compositeType', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.compositeTypes.update
   * @desc Updates a composite type.
   * @alias deploymentmanager.compositeTypes.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.compositeType The name of the composite type for this request.
   * @param {string} params.project The project ID for this request.
   * @param {().CompositeType} params.resource Request body data
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
                 '/deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['project', 'compositeType'],
      pathParams: ['compositeType', 'project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/cancelPreview')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/getIamPolicy')
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
            url:
                (rootUrl +
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments')
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
            url:
                (rootUrl +
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/setIamPolicy')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/stop')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/testIamPermissions')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests/{manifest}')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/operations/{operation}')
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
            url:
                (rootUrl +
                 '/deploymentmanager/v2beta/projects/{project}/global/operations')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources/{resource}')
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
                 '/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources')
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

export class Resource$Typeproviders {
  root: Deploymentmanager;
  constructor(root: Deploymentmanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * deploymentmanager.typeProviders.delete
   * @desc Deletes a type provider.
   * @alias deploymentmanager.typeProviders.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project ID for this request.
   * @param {string} params.typeProvider The name of the type provider for this request.
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
                 '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['project', 'typeProvider'],
      pathParams: ['project', 'typeProvider'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.typeProviders.get
   * @desc Gets information about a specific type provider.
   * @alias deploymentmanager.typeProviders.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project ID for this request.
   * @param {string} params.typeProvider The name of the type provider for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$TypeProvider>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TypeProvider>,
      callback?: BodyResponseCallback<Schema$TypeProvider>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TypeProvider>,
      callback?: BodyResponseCallback<Schema$TypeProvider>):
      void|AxiosPromise<Schema$TypeProvider> {
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
                 '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'typeProvider'],
      pathParams: ['project', 'typeProvider'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TypeProvider>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TypeProvider>(parameters);
    }
  }


  /**
   * deploymentmanager.typeProviders.getType
   * @desc Gets a type info for a type provided by a TypeProvider.
   * @alias deploymentmanager.typeProviders.getType
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project ID for this request.
   * @param {string} params.type The name of the type provider for this request.
   * @param {string} params.typeProvider The name of the type provider for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getType(params?: any, options?: MethodOptions): AxiosPromise<Schema$TypeInfo>;
  getType(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TypeInfo>,
      callback?: BodyResponseCallback<Schema$TypeInfo>): void;
  getType(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TypeInfo>,
      callback?: BodyResponseCallback<Schema$TypeInfo>):
      void|AxiosPromise<Schema$TypeInfo> {
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
                 '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types/{type}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'typeProvider', 'type'],
      pathParams: ['project', 'type', 'typeProvider'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TypeInfo>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TypeInfo>(parameters);
    }
  }


  /**
   * deploymentmanager.typeProviders.insert
   * @desc Creates a type provider.
   * @alias deploymentmanager.typeProviders.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project ID for this request.
   * @param {().TypeProvider} params.resource Request body data
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
            url:
                (rootUrl +
                 '/deploymentmanager/v2beta/projects/{project}/global/typeProviders')
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
   * deploymentmanager.typeProviders.list
   * @desc Lists all resource type providers for Deployment Manager.
   * @alias deploymentmanager.typeProviders.list
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
      AxiosPromise<Schema$TypeProvidersListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TypeProvidersListResponse>,
      callback?: BodyResponseCallback<Schema$TypeProvidersListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TypeProvidersListResponse>,
      callback?: BodyResponseCallback<Schema$TypeProvidersListResponse>):
      void|AxiosPromise<Schema$TypeProvidersListResponse> {
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
                 '/deploymentmanager/v2beta/projects/{project}/global/typeProviders')
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
      createAPIRequest<Schema$TypeProvidersListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TypeProvidersListResponse>(parameters);
    }
  }


  /**
   * deploymentmanager.typeProviders.listTypes
   * @desc Lists all the type info for a TypeProvider.
   * @alias deploymentmanager.typeProviders.listTypes
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
   * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
   * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
   * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
   * @param {string} params.project The project ID for this request.
   * @param {string} params.typeProvider The name of the type provider for this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  listTypes(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TypeProvidersListTypesResponse>;
  listTypes(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TypeProvidersListTypesResponse>,
      callback?: BodyResponseCallback<Schema$TypeProvidersListTypesResponse>):
      void;
  listTypes(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TypeProvidersListTypesResponse>,
      callback?: BodyResponseCallback<Schema$TypeProvidersListTypesResponse>):
      void|AxiosPromise<Schema$TypeProvidersListTypesResponse> {
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
                 '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'typeProvider'],
      pathParams: ['project', 'typeProvider'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TypeProvidersListTypesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$TypeProvidersListTypesResponse>(
          parameters);
    }
  }


  /**
   * deploymentmanager.typeProviders.patch
   * @desc Updates a type provider. This method supports patch semantics.
   * @alias deploymentmanager.typeProviders.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project ID for this request.
   * @param {string} params.typeProvider The name of the type provider for this request.
   * @param {().TypeProvider} params.resource Request body data
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
                 '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['project', 'typeProvider'],
      pathParams: ['project', 'typeProvider'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * deploymentmanager.typeProviders.update
   * @desc Updates a type provider.
   * @alias deploymentmanager.typeProviders.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project ID for this request.
   * @param {string} params.typeProvider The name of the type provider for this request.
   * @param {().TypeProvider} params.resource Request body data
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
                 '/deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['project', 'typeProvider'],
      pathParams: ['project', 'typeProvider'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
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
                  '/deploymentmanager/v2beta/projects/{project}/global/types')
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
