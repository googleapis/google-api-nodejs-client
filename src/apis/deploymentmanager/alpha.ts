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

export namespace deploymentmanager_alpha {
  export interface Options extends GlobalOptions {
    version: 'alpha';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Cloud Deployment Manager Alpha API
   *
   * The Deployment Manager API allows users to declaratively configure, deploy and run complex solutions on the Google Cloud Platform.
   *
   * @example
   * const {google} = require('googleapis');
   * const deploymentmanager = google.deploymentmanager('alpha');
   *
   * @namespace deploymentmanager
   * @type {Function}
   * @version alpha
   * @variation alpha
   * @param {object=} options Options for Deploymentmanager
   */
  export class Deploymentmanager {
    context: APIRequestContext;
    compositeTypes: Resource$Compositetypes;
    deployments: Resource$Deployments;
    manifests: Resource$Manifests;
    operations: Resource$Operations;
    resources: Resource$Resources;
    typeProviders: Resource$Typeproviders;
    types: Resource$Types;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.compositeTypes = new Resource$Compositetypes(this.context);
      this.deployments = new Resource$Deployments(this.context);
      this.manifests = new Resource$Manifests(this.context);
      this.operations = new Resource$Operations(this.context);
      this.resources = new Resource$Resources(this.context);
      this.typeProviders = new Resource$Typeproviders(this.context);
      this.types = new Resource$Types(this.context);
    }
  }

  /**
   * Async options that determine when a resource should finish.
   */
  export interface Schema$AsyncOptions {
    /**
     * Method regex where this policy will apply.
     */
    methodMatch?: string | null;
    /**
     * Deployment manager will poll instances for this API resource setting a RUNNING state, and blocking until polling conditions tell whether the resource is completed or failed.
     */
    pollingOptions?: Schema$PollingOptions;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:  { &quot;audit_configs&quot;: [ { &quot;service&quot;: &quot;allServices&quot; &quot;audit_log_configs&quot;: [ { &quot;log_type&quot;: &quot;DATA_READ&quot;, &quot;exempted_members&quot;: [ &quot;user:foo@gmail.com&quot; ] }, { &quot;log_type&quot;: &quot;DATA_WRITE&quot;, }, { &quot;log_type&quot;: &quot;ADMIN_READ&quot;, } ] }, { &quot;service&quot;: &quot;fooservice.googleapis.com&quot; &quot;audit_log_configs&quot;: [ { &quot;log_type&quot;: &quot;DATA_READ&quot;, }, { &quot;log_type&quot;: &quot;DATA_WRITE&quot;, &quot;exempted_members&quot;: [ &quot;user:bar@gmail.com&quot; ] } ] } ] }  For fooservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging, and bar@gmail.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    exemptedMembers?: string[] | null;
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:  { &quot;audit_log_configs&quot;: [ { &quot;log_type&quot;: &quot;DATA_READ&quot;, &quot;exempted_members&quot;: [ &quot;user:foo@gmail.com&quot; ] }, { &quot;log_type&quot;: &quot;DATA_WRITE&quot;, } ] }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting foo@gmail.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of [Binding.members][].
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Authorization-related information used by Cloud Audit Logging.
   */
  export interface Schema$AuthorizationLoggingOptions {
    /**
     * The type of the permission that was checked.
     */
    permissionType?: string | null;
  }
  /**
   * Basic Auth used as a credential.
   */
  export interface Schema$BasicAuth {
    password?: string | null;
    user?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * Unimplemented. The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` .    * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`.    * `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * CollectionOverride allows resource handling overrides for specific resources within a BaseType
   */
  export interface Schema$CollectionOverride {
    /**
     * The collection that identifies this resource within its service.
     */
    collection?: string | null;
    /**
     * Custom verb method mappings to support unordered list API mappings.
     */
    methodMap?: Schema$MethodMap;
    /**
     * The options to apply to this resource-level override
     */
    options?: Schema$Options;
  }
  /**
   * Holds the composite type.
   */
  export interface Schema$CompositeType {
    /**
     * An optional textual description of the resource; provided by the client when the resource is created.
     */
    description?: string | null;
    id?: string | null;
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string | null;
    /**
     * Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
     */
    labels?: Schema$CompositeTypeLabelEntry[];
    /**
     * Name of the composite type, must follow the expression: [a-z]([-a-z0-9_.]{0,61}[a-z0-9])?.
     */
    name?: string | null;
    /**
     * Output only. The Operation that most recently ran, or is currently running, on this composite type.
     */
    operation?: Schema$Operation;
    /**
     * Output only. Server defined URL for the resource.
     */
    selfLink?: string | null;
    status?: string | null;
    /**
     * Files for the template type.
     */
    templateContents?: Schema$TemplateContents;
  }
  export interface Schema$CompositeTypeLabelEntry {
    key?: string | null;
    value?: string | null;
  }
  /**
   * A response that returns all Composite Types supported by Deployment Manager
   */
  export interface Schema$CompositeTypesListResponse {
    /**
     * Output only. A list of resource composite types supported by Deployment Manager.
     */
    compositeTypes?: Schema$CompositeType[];
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string | null;
  }
  /**
   * A condition to be met.
   */
  export interface Schema$Condition {
    /**
     * Trusted attributes supplied by the IAM system.
     */
    iam?: string | null;
    /**
     * An operator to apply the subject with.
     */
    op?: string | null;
    /**
     * Trusted attributes discharged by the service.
     */
    svc?: string | null;
    /**
     * Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
     */
    sys?: string | null;
    /**
     * DEPRECATED. Use &#39;values&#39; instead.
     */
    value?: string | null;
    /**
     * The objects of the condition. This is mutually exclusive with &#39;value&#39;.
     */
    values?: string[] | null;
  }
  export interface Schema$ConfigFile {
    /**
     * The contents of the file.
     */
    content?: string | null;
  }
  /**
   * BaseType that describes a service-backed Type.
   */
  export interface Schema$ConfigurableService {
    /**
     * Allows resource handling overrides for specific collections
     */
    collectionOverrides?: Schema$CollectionOverride[];
    /**
     * Credential used when interacting with this type.
     */
    credential?: Schema$Credential;
    /**
     * Descriptor Url for the this type.
     */
    descriptorUrl?: string | null;
    /**
     * Options to apply when handling any resources in this service.
     */
    options?: Schema$Options;
  }
  /**
   * The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
   */
  export interface Schema$Credential {
    /**
     * Basic Auth Credential, only used by TypeProvider.
     */
    basicAuth?: Schema$BasicAuth;
    /**
     * Service Account Credential, only used by Deployment.
     */
    serviceAccount?: Schema$ServiceAccount;
    /**
     * Specify to use the project default credential, only supported by Deployment.
     */
    useProjectDefault?: boolean | null;
  }
  export interface Schema$Deployment {
    /**
     * User provided default credential for the deployment.
     */
    credential?: Schema$Credential;
    /**
     * An optional user-provided description of the deployment.
     */
    description?: string | null;
    /**
     * Provides a fingerprint to use in requests to modify a deployment, such as update(), stop(), and cancelPreview() requests. A fingerprint is a randomly generated value that must be provided with update(), stop(), and cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time.  The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a get() request to a deployment.
     */
    fingerprint?: string | null;
    id?: string | null;
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string | null;
    /**
     * Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
     */
    labels?: Schema$DeploymentLabelEntry[];
    /**
     * Output only. URL of the manifest representing the last manifest that was successfully deployed.
     */
    manifest?: string | null;
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string | null;
    /**
     * Output only. The Operation that most recently ran, or is currently running, on this deployment.
     */
    operation?: Schema$Operation;
    /**
     * Output only. Map of outputs from the last manifest that deployed successfully.
     */
    outputs?: Schema$DeploymentOutputsEntry[];
    /**
     * Output only. Server defined URL for the resource.
     */
    selfLink?: string | null;
    /**
     * [Input Only] The parameters that define your deployment, including the deployment configuration and relevant templates.
     */
    target?: Schema$TargetConfiguration;
    /**
     * Output only. If Deployment Manager is currently updating or previewing an update to this deployment, the updated configuration appears here.
     */
    update?: Schema$DeploymentUpdate;
    /**
     * Output only. Update timestamp in RFC3339 text format.
     */
    updateTime?: string | null;
  }
  export interface Schema$DeploymentLabelEntry {
    key?: string | null;
    value?: string | null;
  }
  export interface Schema$DeploymentOutputsEntry {
    key?: string | null;
    value?: string | null;
  }
  export interface Schema$DeploymentsCancelPreviewRequest {
    /**
     * Specifies a fingerprint for cancelPreview() requests. A fingerprint is a randomly generated value that must be provided in cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests).  The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a get() request on the deployment.
     */
    fingerprint?: string | null;
  }
  /**
   * A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
   */
  export interface Schema$DeploymentsListResponse {
    /**
     * Output only. The deployments contained in this response.
     */
    deployments?: Schema$Deployment[];
    /**
     * Output only. A token used to continue a truncated list request.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$DeploymentsStopRequest {
    /**
     * Specifies a fingerprint for stop() requests. A fingerprint is a randomly generated value that must be provided in stop() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision).  The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a get() request on the deployment.
     */
    fingerprint?: string | null;
  }
  export interface Schema$DeploymentUpdate {
    /**
     * Output only. The user-provided default credential to use when deploying this preview.
     */
    credential?: Schema$Credential;
    /**
     * Output only. An optional user-provided description of the deployment after the current update has been applied.
     */
    description?: string | null;
    /**
     * Output only. Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
     */
    labels?: Schema$DeploymentUpdateLabelEntry[];
    /**
     * Output only. URL of the manifest representing the update configuration of this deployment.
     */
    manifest?: string | null;
  }
  export interface Schema$DeploymentUpdateLabelEntry {
    key?: string | null;
    value?: string | null;
  }
  export interface Schema$Diagnostic {
    /**
     * JsonPath expression on the resource that if non empty, indicates that this field needs to be extracted as a diagnostic.
     */
    field?: string | null;
    /**
     * Level to record this diagnostic.
     */
    level?: string | null;
  }
  /**
   * Represents an expression text. Example:  title: &quot;User account presence&quot; description: &quot;Determines whether the request has a user account&quot; expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string | null;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  export interface Schema$GlobalSetPolicyRequest {
    /**
     * Flatten Policy to create a backward compatible wire-format. Deprecated. Use &#39;policy&#39; to specify bindings.
     */
    bindings?: Schema$Binding[];
    /**
     * Flatten Policy to create a backward compatible wire-format. Deprecated. Use &#39;policy&#39; to specify the etag.
     */
    etag?: string | null;
    /**
     * REQUIRED: The complete policy to be applied to the &#39;resource&#39;. The size of the policy is limited to a few 10s of KB. An empty policy is in general a valid policy but certain services (like Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  export interface Schema$ImportFile {
    /**
     * The contents of the file.
     */
    content?: string | null;
    /**
     * The name of the file.
     */
    name?: string | null;
  }
  /**
   * InputMapping creates a &#39;virtual&#39; property that will be injected into the properties before sending the request to the underlying API.
   */
  export interface Schema$InputMapping {
    /**
     * The name of the field that is going to be injected.
     */
    fieldName?: string | null;
    /**
     * The location where this mapping applies.
     */
    location?: string | null;
    /**
     * Regex to evaluate on method to decide if input applies.
     */
    methodMatch?: string | null;
    /**
     * A jsonPath expression to select an element.
     */
    value?: string | null;
  }
  /**
   * Specifies what kind of log the caller must write
   */
  export interface Schema$LogConfig {
    /**
     * Cloud audit options.
     */
    cloudAudit?: Schema$LogConfigCloudAuditOptions;
    /**
     * Counter options.
     */
    counter?: Schema$LogConfigCounterOptions;
    /**
     * Data access options.
     */
    dataAccess?: Schema$LogConfigDataAccessOptions;
  }
  /**
   * Write a Cloud Audit log
   */
  export interface Schema$LogConfigCloudAuditOptions {
    /**
     * Information used by the Cloud Audit Logging pipeline.
     */
    authorizationLoggingOptions?: Schema$AuthorizationLoggingOptions;
    /**
     * The log_name to populate in the Cloud Audit Record.
     */
    logName?: string | null;
  }
  /**
   * Increment a streamz counter with the specified metric and field names.  Metric names should start with a &#39;/&#39;, generally be lowercase-only, and end in &quot;_count&quot;. Field names should not contain an initial slash. The actual exported metric names will have &quot;/iam/policy&quot; prepended.  Field names correspond to IAM request parameters and field values are their respective values.  Supported field names: - &quot;authority&quot;, which is &quot;[token]&quot; if IAMContext.token is present, otherwise the value of IAMContext.authority_selector if present, and otherwise a representation of IAMContext.principal; or - &quot;iam_principal&quot;, a representation of IAMContext.principal even if a token or authority selector is present; or - &quot;&quot; (empty string), resulting in a counter with no fields.  Examples: counter { metric: &quot;/debug_access_count&quot; field: &quot;iam_principal&quot; } ==&gt; increment counter /iam/policy/backend_debug_access_count {iam_principal=[value of IAMContext.principal]}  At this time we do not support multiple field names (though this may be supported in the future).
   */
  export interface Schema$LogConfigCounterOptions {
    /**
     * The field value to attribute.
     */
    field?: string | null;
    /**
     * The metric to update.
     */
    metric?: string | null;
  }
  /**
   * Write a Data Access (Gin) log
   */
  export interface Schema$LogConfigDataAccessOptions {
    /**
     * Whether Gin logging should happen in a fail-closed manner at the caller. This is relevant only in the LocalIAM implementation, for now.  NOTE: Logging to Gin in a fail-closed manner is currently unsupported while work is being done to satisfy the requirements of go/345. Currently, setting LOG_FAIL_CLOSED mode will have no effect, but still exists because there is active work being done to support it (b/115874152).
     */
    logMode?: string | null;
  }
  export interface Schema$Manifest {
    /**
     * Output only. The YAML configuration for this manifest.
     */
    config?: Schema$ConfigFile;
    /**
     * Output only. The fully-expanded configuration file, including any templates and references.
     */
    expandedConfig?: string | null;
    id?: string | null;
    /**
     * Output only. The imported files for this manifest.
     */
    imports?: Schema$ImportFile[];
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string | null;
    /**
     * Output only. The YAML layout for this manifest.
     */
    layout?: string | null;
    /**
     * Output only.  The name of the manifest.
     */
    name?: string | null;
    /**
     * Output only. Self link for the manifest.
     */
    selfLink?: string | null;
  }
  /**
   * A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
   */
  export interface Schema$ManifestsListResponse {
    /**
     * Output only. Manifests contained in this list response.
     */
    manifests?: Schema$Manifest[];
    /**
     * Output only. A token used to continue a truncated list request.
     */
    nextPageToken?: string | null;
  }
  /**
   * Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy
   */
  export interface Schema$MethodMap {
    /**
     * The action identifier for the create method to be used for this collection
     */
    create?: string | null;
    /**
     * The action identifier for the delete method to be used for this collection
     */
    delete?: string | null;
    /**
     * The action identifier for the get method to be used for this collection
     */
    get?: string | null;
    /**
     * The action identifier for the setIamPolicy method to be used for this collection
     */
    setIamPolicy?: string | null;
    /**
     * The action identifier for the update method to be used for this collection
     */
    update?: string | null;
  }
  /**
   * An Operation resource, used to manage asynchronous API requests. (== resource_for v1.globalOperations ==) (== resource_for beta.globalOperations ==) (== resource_for v1.regionOperations ==) (== resource_for beta.regionOperations ==) (== resource_for v1.zoneOperations ==) (== resource_for beta.zoneOperations ==)
   */
  export interface Schema$Operation {
    /**
     * [Output Only] The value of `requestId` if you provided it in the request. Not present otherwise.
     */
    clientOperationId?: string | null;
    /**
     * [Deprecated] This field is deprecated.
     */
    creationTimestamp?: string | null;
    /**
     * [Output Only] A textual description of the operation, which is set when the operation is created.
     */
    description?: string | null;
    /**
     * [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
     */
    endTime?: string | null;
    /**
     * [Output Only] If errors are generated during processing of the operation, this field will be populated.
     */
    error?: {
      errors?: Array<{code?: string; location?: string; message?: string}>;
    } | null;
    /**
     * [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
     */
    httpErrorMessage?: string | null;
    /**
     * [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
     */
    httpErrorStatusCode?: number | null;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string | null;
    /**
     * [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
     */
    insertTime?: string | null;
    /**
     * [Output Only] Type of the resource. Always compute#operation for Operation resources.
     */
    kind?: string | null;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string | null;
    /**
     * [Output Only] The type of operation, such as insert, update, or delete, and so on.
     */
    operationType?: string | null;
    /**
     * [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
     */
    progress?: number | null;
    /**
     * [Output Only] The URL of the region where the operation resides. Only available when performing regional operations. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    region?: string | null;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string | null;
    /**
     * [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
     */
    startTime?: string | null;
    /**
     * [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
     */
    status?: string | null;
    /**
     * [Output Only] An optional textual description of the current status of the operation.
     */
    statusMessage?: string | null;
    /**
     * [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
     */
    targetId?: string | null;
    /**
     * [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.
     */
    targetLink?: string | null;
    /**
     * [Output Only] User who requested the operation, for example: user@example.com.
     */
    user?: string | null;
    /**
     * [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
     */
    warnings?: Array<{
      code?: string;
      data?: Array<{key?: string; value?: string}>;
      message?: string;
    }> | null;
    /**
     * [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    zone?: string | null;
  }
  /**
   * A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.
   */
  export interface Schema$OperationsListResponse {
    /**
     * Output only. A token used to continue a truncated list request.
     */
    nextPageToken?: string | null;
    /**
     * Output only. Operations contained in this list response.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Options allows customized resource handling by Deployment Manager.
   */
  export interface Schema$Options {
    /**
     * Options regarding how to thread async requests.
     */
    asyncOptions?: Schema$AsyncOptions[];
    /**
     * The mappings that apply for requests.
     */
    inputMappings?: Schema$InputMapping[];
    /**
     * The json path to the field in the resource JSON body into which the resource name should be mapped. Leaving this empty indicates that there should be no mapping performed.
     */
    nameProperty?: string | null;
    /**
     * Options for how to validate and process properties on a resource.
     */
    validationOptions?: Schema$ValidationOptions;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.    A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**  { &quot;bindings&quot;: [ { &quot;role&quot;: &quot;roles/owner&quot;, &quot;members&quot;: [ &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;, &quot;domain:google.com&quot;, &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, { &quot;role&quot;: &quot;roles/viewer&quot;, &quot;members&quot;: [&quot;user:sean@example.com&quot;] } ] }  **YAML Example**  bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-other-app@appspot.gserviceaccount.com role: roles/owner - members: - user:sean@example.com role: roles/viewer    For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
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
    etag?: string | null;
    iamOwned?: boolean | null;
    /**
     * If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
     */
    rules?: Schema$Rule[];
    /**
     * Deprecated.
     */
    version?: number | null;
  }
  export interface Schema$PollingOptions {
    /**
     * An array of diagnostics to be collected by Deployment Manager, these diagnostics will be displayed to the user.
     */
    diagnostics?: Schema$Diagnostic[];
    /**
     * JsonPath expression that determines if the request failed.
     */
    failCondition?: string | null;
    /**
     * JsonPath expression that determines if the request is completed.
     */
    finishCondition?: string | null;
    /**
     * JsonPath expression that evaluates to string, it indicates where to poll.
     */
    pollingLink?: string | null;
    /**
     * JsonPath expression, after polling is completed, indicates where to fetch the resource.
     */
    targetLink?: string | null;
  }
  export interface Schema$Resource {
    /**
     * The Access Control Policy set on this resource.
     */
    accessControl?: Schema$ResourceAccessControl;
    /**
     * Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML.
     */
    finalProperties?: string | null;
    id?: string | null;
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string | null;
    /**
     * Output only. The last used credential that successfully created/updated the resource.
     */
    lastUsedCredential?: Schema$Credential;
    /**
     * Output only. URL of the manifest representing the current configuration of this resource.
     */
    manifest?: string | null;
    /**
     * Output only. The name of the resource as it appears in the YAML config.
     */
    name?: string | null;
    /**
     * Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML.
     */
    properties?: string | null;
    /**
     * Output only. In case this is an action, it will show the runtimePolicies on which this action will run in the deployment
     */
    runtimePolicies?: string[] | null;
    /**
     * Output only. The type of the resource, for example compute.v1.instance, or cloudfunctions.v1beta1.function.
     */
    type?: string | null;
    /**
     * Output only. If Deployment Manager is currently updating or previewing an update to this resource, the updated configuration appears here.
     */
    update?: Schema$ResourceUpdate;
    /**
     * Output only. Update timestamp in RFC3339 text format.
     */
    updateTime?: string | null;
    /**
     * Output only. The URL of the actual resource.
     */
    url?: string | null;
    /**
     * Output only. If warning messages are generated during processing of this resource, this field will be populated.
     */
    warnings?: Array<{
      code?: string;
      data?: Array<{key?: string; value?: string}>;
      message?: string;
    }> | null;
  }
  /**
   * The access controls set on the resource.
   */
  export interface Schema$ResourceAccessControl {
    /**
     * The GCP IAM Policy to set on the resource.
     */
    gcpIamPolicy?: string | null;
  }
  /**
   * A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.
   */
  export interface Schema$ResourcesListResponse {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string | null;
    /**
     * Resources contained in this list response.
     */
    resources?: Schema$Resource[];
  }
  export interface Schema$ResourceUpdate {
    /**
     * The Access Control Policy to set on this resource after updating the resource itself.
     */
    accessControl?: Schema$ResourceAccessControl;
    /**
     * Output only. The credential that will be used creating/updating this resource.
     */
    credential?: Schema$Credential;
    /**
     * Output only. If errors are generated during update of the resource, this field will be populated.
     */
    error?: {
      errors?: Array<{code?: string; location?: string; message?: string}>;
    } | null;
    /**
     * Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML.
     */
    finalProperties?: string | null;
    /**
     * Output only. The intent of the resource: PREVIEW, UPDATE, or CANCEL.
     */
    intent?: string | null;
    /**
     * Output only. URL of the manifest representing the update configuration of this resource.
     */
    manifest?: string | null;
    /**
     * Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML.
     */
    properties?: string | null;
    /**
     * Output only. In case this is an action, it will show the runtimePolicies that this action will have after updating the deployment.
     */
    runtimePolicies?: string[] | null;
    /**
     * Output only. The state of the resource.
     */
    state?: string | null;
    /**
     * Output only. If warning messages are generated during processing of this resource, this field will be populated.
     */
    warnings?: Array<{
      code?: string;
      data?: Array<{key?: string; value?: string}>;
      message?: string;
    }> | null;
  }
  /**
   * A rule to be applied in a Policy.
   */
  export interface Schema$Rule {
    /**
     * Required
     */
    action?: string | null;
    /**
     * Additional restrictions that must be met. All conditions must pass for the rule to match.
     */
    conditions?: Schema$Condition[];
    /**
     * Human-readable description of the rule.
     */
    description?: string | null;
    /**
     * If one or more &#39;in&#39; clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
     */
    ins?: string[] | null;
    /**
     * The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
     */
    logConfigs?: Schema$LogConfig[];
    /**
     * If one or more &#39;not_in&#39; clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
     */
    notIns?: string[] | null;
    /**
     * A permission is a string of form &#39;..&#39; (e.g., &#39;storage.buckets.list&#39;). A value of &#39;*&#39; matches all permissions, and a verb part of &#39;*&#39; (e.g., &#39;storage.buckets.*&#39;) matches all verbs.
     */
    permissions?: string[] | null;
  }
  /**
   * Service Account used as a credential.
   */
  export interface Schema$ServiceAccount {
    /**
     * The IAM service account email address like test@myproject.iam.gserviceaccount.com
     */
    email?: string | null;
  }
  export interface Schema$TargetConfiguration {
    /**
     * The configuration to use for this deployment.
     */
    config?: Schema$ConfigFile;
    /**
     * Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template.
     */
    imports?: Schema$ImportFile[];
  }
  /**
   * Files that make up the template contents of a template type.
   */
  export interface Schema$TemplateContents {
    /**
     * Import files referenced by the main template.
     */
    imports?: Schema$ImportFile[];
    /**
     * Which interpreter (python or jinja) should be used during expansion.
     */
    interpreter?: string | null;
    /**
     * The filename of the mainTemplate
     */
    mainTemplate?: string | null;
    /**
     * The contents of the template schema.
     */
    schema?: string | null;
    /**
     * The contents of the main template file.
     */
    template?: string | null;
  }
  export interface Schema$TestPermissionsRequest {
    /**
     * The set of permissions to check for the &#39;resource&#39;. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
     */
    permissions?: string[] | null;
  }
  export interface Schema$TestPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * A resource type supported by Deployment Manager.
   */
  export interface Schema$Type {
    /**
     * Base Type (configurable service) that backs this Type.
     */
    configurableService?: Schema$ConfigurableService;
    /**
     * An optional textual description of the resource; provided by the client when the resource is created.
     */
    description?: string | null;
    id?: string | null;
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string | null;
    /**
     * Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
     */
    labels?: Schema$TypeLabelEntry[];
    /**
     * Name of the type.
     */
    name?: string | null;
    /**
     * Output only. The Operation that most recently ran, or is currently running, on this type.
     */
    operation?: Schema$Operation;
    /**
     * Output only. Server defined URL for the resource.
     */
    selfLink?: string | null;
  }
  /**
   * Type Information. Contains detailed information about a composite type, base type, or base type with specific collection.
   */
  export interface Schema$TypeInfo {
    /**
     * The description of the type.
     */
    description?: string | null;
    /**
     * For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty.
     */
    documentationLink?: string | null;
    /**
     * Output only. Type of the output. Always deploymentManager#TypeInfo for TypeInfo.
     */
    kind?: string | null;
    /**
     * The base type or composite type name.
     */
    name?: string | null;
    /**
     * For base types with a collection, we return a schema and documentation link For template types, we return only a schema
     */
    schema?: Schema$TypeInfoSchemaInfo;
    /**
     * Output only. Self link for the type provider.
     */
    selfLink?: string | null;
    /**
     * The title on the API descriptor URL provided.
     */
    title?: string | null;
  }
  export interface Schema$TypeInfoSchemaInfo {
    /**
     * The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4
     */
    input?: string | null;
    /**
     * The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4
     */
    output?: string | null;
  }
  export interface Schema$TypeLabelEntry {
    key?: string | null;
    value?: string | null;
  }
  /**
   * A type provider that describes a service-backed Type.
   */
  export interface Schema$TypeProvider {
    /**
     * Allows resource handling overrides for specific collections
     */
    collectionOverrides?: Schema$CollectionOverride[];
    /**
     * Credential used when interacting with this type.
     */
    credential?: Schema$Credential;
    /**
     * An optional textual description of the resource; provided by the client when the resource is created.
     */
    description?: string | null;
    /**
     * Descriptor Url for the this type provider.
     */
    descriptorUrl?: string | null;
    /**
     * Output only. Unique identifier for the resource defined by the server.
     */
    id?: string | null;
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string | null;
    /**
     * Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
     */
    labels?: Schema$TypeProviderLabelEntry[];
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string | null;
    /**
     * Output only. The Operation that most recently ran, or is currently running, on this type provider.
     */
    operation?: Schema$Operation;
    /**
     * Options to apply when handling any resources in this service.
     */
    options?: Schema$Options;
    /**
     * Output only. Self link for the type provider.
     */
    selfLink?: string | null;
  }
  export interface Schema$TypeProviderLabelEntry {
    key?: string | null;
    value?: string | null;
  }
  /**
   * A response that returns all Type Providers supported by Deployment Manager
   */
  export interface Schema$TypeProvidersListResponse {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string | null;
    /**
     * Output only. A list of resource type providers supported by Deployment Manager.
     */
    typeProviders?: Schema$TypeProvider[];
  }
  export interface Schema$TypeProvidersListTypesResponse {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string | null;
    /**
     * Output only. A list of resource type info.
     */
    types?: Schema$TypeInfo[];
  }
  /**
   * A response that returns all Types supported by Deployment Manager
   */
  export interface Schema$TypesListResponse {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string | null;
    /**
     * Output only. A list of resource types supported by Deployment Manager.
     */
    types?: Schema$Type[];
  }
  /**
   * Options for how to validate and process properties on a resource.
   */
  export interface Schema$ValidationOptions {
    /**
     * Customize how deployment manager will validate the resource against schema errors.
     */
    schemaValidation?: string | null;
    /**
     * Specify what to do with extra properties when executing a request.
     */
    undeclaredProperties?: string | null;
  }

  export class Resource$Compositetypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    delete(
      params?: Params$Resource$Compositetypes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Compositetypes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Compositetypes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Compositetypes$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Compositetypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Compositetypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'compositeType'],
        pathParams: ['compositeType', 'project'],
        context: this.context,
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
    get(
      params?: Params$Resource$Compositetypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CompositeType>;
    get(
      params: Params$Resource$Compositetypes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CompositeType>,
      callback: BodyResponseCallback<Schema$CompositeType>
    ): void;
    get(
      params: Params$Resource$Compositetypes$Get,
      callback: BodyResponseCallback<Schema$CompositeType>
    ): void;
    get(callback: BodyResponseCallback<Schema$CompositeType>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Compositetypes$Get
        | BodyResponseCallback<Schema$CompositeType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CompositeType>,
      callback?: BodyResponseCallback<Schema$CompositeType>
    ): void | GaxiosPromise<Schema$CompositeType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Compositetypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Compositetypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'compositeType'],
        pathParams: ['compositeType', 'project'],
        context: this.context,
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
    insert(
      params?: Params$Resource$Compositetypes$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    insert(
      params: Params$Resource$Compositetypes$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(
      params: Params$Resource$Compositetypes$Insert,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Compositetypes$Insert
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Compositetypes$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Compositetypes$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/compositeTypes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
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
    list(
      params?: Params$Resource$Compositetypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CompositeTypesListResponse>;
    list(
      params: Params$Resource$Compositetypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CompositeTypesListResponse>,
      callback: BodyResponseCallback<Schema$CompositeTypesListResponse>
    ): void;
    list(
      params: Params$Resource$Compositetypes$List,
      callback: BodyResponseCallback<Schema$CompositeTypesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CompositeTypesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Compositetypes$List
        | BodyResponseCallback<Schema$CompositeTypesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CompositeTypesListResponse>,
      callback?: BodyResponseCallback<Schema$CompositeTypesListResponse>
    ): void | GaxiosPromise<Schema$CompositeTypesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Compositetypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Compositetypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/compositeTypes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CompositeTypesListResponse>(
          parameters,
          callback
        );
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
    patch(
      params?: Params$Resource$Compositetypes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Compositetypes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Compositetypes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Compositetypes$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Compositetypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Compositetypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'compositeType'],
        pathParams: ['compositeType', 'project'],
        context: this.context,
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
    update(
      params?: Params$Resource$Compositetypes$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Compositetypes$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Compositetypes$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Compositetypes$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Compositetypes$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Compositetypes$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'compositeType'],
        pathParams: ['compositeType', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Compositetypes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the type for this request.
     */
    compositeType?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Compositetypes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the composite type for this request.
     */
    compositeType?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Compositetypes$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompositeType;
  }
  export interface Params$Resource$Compositetypes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
     */
    filter?: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    maxResults?: number;
    /**
     * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     */
    orderBy?: string;
    /**
     * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Compositetypes$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the composite type for this request.
     */
    compositeType?: string;
    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompositeType;
  }
  export interface Params$Resource$Compositetypes$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the composite type for this request.
     */
    compositeType?: string;
    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompositeType;
  }

  export class Resource$Deployments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * deploymentmanager.deployments.cancelPreview
     * @desc Cancels and removes the preview currently associated with the deployment.
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
    cancelPreview(
      params?: Params$Resource$Deployments$Cancelpreview,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    cancelPreview(
      params: Params$Resource$Deployments$Cancelpreview,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelPreview(
      params: Params$Resource$Deployments$Cancelpreview,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancelPreview(callback: BodyResponseCallback<Schema$Operation>): void;
    cancelPreview(
      paramsOrCallback?:
        | Params$Resource$Deployments$Cancelpreview
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Cancelpreview;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Cancelpreview;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/cancelPreview'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: this.context,
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
    delete(
      params?: Params$Resource$Deployments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Deployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Deployments$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Deployments$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: this.context,
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
    get(
      params?: Params$Resource$Deployments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Deployment>;
    get(
      params: Params$Resource$Deployments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Deployment>,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    get(
      params: Params$Resource$Deployments$Get,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Deployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Deployments$Get
        | BodyResponseCallback<Schema$Deployment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Deployment>,
      callback?: BodyResponseCallback<Schema$Deployment>
    ): void | GaxiosPromise<Schema$Deployment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Deployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Deployment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Deployment>(parameters);
      }
    }

    /**
     * deploymentmanager.deployments.getIamPolicy
     * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     * @alias deploymentmanager.deployments.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name or id of the resource for this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Deployments$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Deployments$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Deployments$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Deployments$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{resource}/getIamPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * deploymentmanager.deployments.insert
     * @desc Creates a deployment and all of the resources described by the deployment manifest.
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
    insert(
      params?: Params$Resource$Deployments$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    insert(
      params: Params$Resource$Deployments$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(
      params: Params$Resource$Deployments$Insert,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Deployments$Insert
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
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
    list(
      params?: Params$Resource$Deployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DeploymentsListResponse>;
    list(
      params: Params$Resource$Deployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DeploymentsListResponse>,
      callback: BodyResponseCallback<Schema$DeploymentsListResponse>
    ): void;
    list(
      params: Params$Resource$Deployments$List,
      callback: BodyResponseCallback<Schema$DeploymentsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$DeploymentsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Deployments$List
        | BodyResponseCallback<Schema$DeploymentsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DeploymentsListResponse>,
      callback?: BodyResponseCallback<Schema$DeploymentsListResponse>
    ): void | GaxiosPromise<Schema$DeploymentsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Deployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DeploymentsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DeploymentsListResponse>(parameters);
      }
    }

    /**
     * deploymentmanager.deployments.patch
     * @desc Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.
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
    patch(
      params?: Params$Resource$Deployments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Deployments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Deployments$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Deployments$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * deploymentmanager.deployments.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias deploymentmanager.deployments.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name or id of the resource for this request.
     * @param {().GlobalSetPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Deployments$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Deployments$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Deployments$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Deployments$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{resource}/setIamPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * deploymentmanager.deployments.stop
     * @desc Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
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
    stop(
      params?: Params$Resource$Deployments$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    stop(
      params: Params$Resource$Deployments$Stop,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(
      params: Params$Resource$Deployments$Stop,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(callback: BodyResponseCallback<Schema$Operation>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Deployments$Stop
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Deployments$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/stop'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: this.context,
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
     * @param {string} params.resource_ Name or id of the resource for this request.
     * @param {().TestPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Deployments$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Deployments$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Deployments$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Deployments$Testiampermissions
        | BodyResponseCallback<Schema$TestPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{resource}/testIamPermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestPermissionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TestPermissionsResponse>(parameters);
      }
    }

    /**
     * deploymentmanager.deployments.update
     * @desc Updates a deployment and all of the resources described by the deployment manifest.
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
    update(
      params?: Params$Resource$Deployments$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Deployments$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Deployments$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Deployments$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Deployments$Cancelpreview
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeploymentsCancelPreviewRequest;
  }
  export interface Params$Resource$Deployments$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Sets the policy to use for deleting resources.
     */
    deletePolicy?: string;
    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Deployments$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Deployments$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project ID for this request.
     */
    project?: string;
    /**
     * Name or id of the resource for this request.
     */
    resource?: string;
  }
  export interface Params$Resource$Deployments$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Sets the policy to use for creating new resources.
     */
    createPolicy?: string;
    /**
     * If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     */
    preview?: boolean;
    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Deployment;
  }
  export interface Params$Resource$Deployments$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
     */
    filter?: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    maxResults?: number;
    /**
     * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     */
    orderBy?: string;
    /**
     * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Deployments$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Sets the policy to use for creating new resources.
     */
    createPolicy?: string;
    /**
     * Sets the policy to use for deleting resources.
     */
    deletePolicy?: string;
    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     */
    preview?: boolean;
    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Deployment;
  }
  export interface Params$Resource$Deployments$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project ID for this request.
     */
    project?: string;
    /**
     * Name or id of the resource for this request.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GlobalSetPolicyRequest;
  }
  export interface Params$Resource$Deployments$Stop extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeploymentsStopRequest;
  }
  export interface Params$Resource$Deployments$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project ID for this request.
     */
    project?: string;
    /**
     * Name or id of the resource for this request.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestPermissionsRequest;
  }
  export interface Params$Resource$Deployments$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Sets the policy to use for creating new resources.
     */
    createPolicy?: string;
    /**
     * Sets the policy to use for deleting resources.
     */
    deletePolicy?: string;
    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     */
    preview?: boolean;
    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Deployment;
  }

  export class Resource$Manifests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    get(
      params?: Params$Resource$Manifests$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Manifest>;
    get(
      params: Params$Resource$Manifests$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Manifest>,
      callback: BodyResponseCallback<Schema$Manifest>
    ): void;
    get(
      params: Params$Resource$Manifests$Get,
      callback: BodyResponseCallback<Schema$Manifest>
    ): void;
    get(callback: BodyResponseCallback<Schema$Manifest>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Manifests$Get
        | BodyResponseCallback<Schema$Manifest>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Manifest>,
      callback?: BodyResponseCallback<Schema$Manifest>
    ): void | GaxiosPromise<Schema$Manifest> {
      let params = (paramsOrCallback || {}) as Params$Resource$Manifests$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Manifests$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/manifests/{manifest}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment', 'manifest'],
        pathParams: ['deployment', 'manifest', 'project'],
        context: this.context,
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
    list(
      params?: Params$Resource$Manifests$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManifestsListResponse>;
    list(
      params: Params$Resource$Manifests$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ManifestsListResponse>,
      callback: BodyResponseCallback<Schema$ManifestsListResponse>
    ): void;
    list(
      params: Params$Resource$Manifests$List,
      callback: BodyResponseCallback<Schema$ManifestsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ManifestsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Manifests$List
        | BodyResponseCallback<Schema$ManifestsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ManifestsListResponse>,
      callback?: BodyResponseCallback<Schema$ManifestsListResponse>
    ): void | GaxiosPromise<Schema$ManifestsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Manifests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Manifests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/manifests'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ManifestsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ManifestsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Manifests$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * The name of the manifest for this request.
     */
    manifest?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Manifests$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
     */
    filter?: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    maxResults?: number;
    /**
     * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     */
    orderBy?: string;
    /**
     * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/operations/{operation}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: this.context,
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
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OperationsListResponse>;
    list(
      params: Params$Resource$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OperationsListResponse>,
      callback: BodyResponseCallback<Schema$OperationsListResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$OperationsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$OperationsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
        | BodyResponseCallback<Schema$OperationsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OperationsListResponse>,
      callback?: BodyResponseCallback<Schema$OperationsListResponse>
    ): void | GaxiosPromise<Schema$OperationsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/operations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OperationsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OperationsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation for this request.
     */
    operation?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
     */
    filter?: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    maxResults?: number;
    /**
     * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     */
    orderBy?: string;
    /**
     * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }

  export class Resource$Resources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    get(
      params?: Params$Resource$Resources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Resource>;
    get(
      params: Params$Resource$Resources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Resource>,
      callback: BodyResponseCallback<Schema$Resource>
    ): void;
    get(
      params: Params$Resource$Resources$Get,
      callback: BodyResponseCallback<Schema$Resource>
    ): void;
    get(callback: BodyResponseCallback<Schema$Resource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Resources$Get
        | BodyResponseCallback<Schema$Resource>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Resource>,
      callback?: BodyResponseCallback<Schema$Resource>
    ): void | GaxiosPromise<Schema$Resource> {
      let params = (paramsOrCallback || {}) as Params$Resource$Resources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/resources/{resource}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment', 'resource'],
        pathParams: ['deployment', 'project', 'resource'],
        context: this.context,
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
    list(
      params?: Params$Resource$Resources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResourcesListResponse>;
    list(
      params: Params$Resource$Resources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResourcesListResponse>,
      callback: BodyResponseCallback<Schema$ResourcesListResponse>
    ): void;
    list(
      params: Params$Resource$Resources$List,
      callback: BodyResponseCallback<Schema$ResourcesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ResourcesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Resources$List
        | BodyResponseCallback<Schema$ResourcesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ResourcesListResponse>,
      callback?: BodyResponseCallback<Schema$ResourcesListResponse>
    ): void | GaxiosPromise<Schema$ResourcesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Resources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/resources'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ResourcesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ResourcesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Resources$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the resource for this request.
     */
    resource?: string;
  }
  export interface Params$Resource$Resources$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the deployment for this request.
     */
    deployment?: string;
    /**
     * A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
     */
    filter?: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    maxResults?: number;
    /**
     * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     */
    orderBy?: string;
    /**
     * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }

  export class Resource$Typeproviders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    delete(
      params?: Params$Resource$Typeproviders$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Typeproviders$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Typeproviders$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Typeproviders$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Typeproviders$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Typeproviders$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: this.context,
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
    get(
      params?: Params$Resource$Typeproviders$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TypeProvider>;
    get(
      params: Params$Resource$Typeproviders$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TypeProvider>,
      callback: BodyResponseCallback<Schema$TypeProvider>
    ): void;
    get(
      params: Params$Resource$Typeproviders$Get,
      callback: BodyResponseCallback<Schema$TypeProvider>
    ): void;
    get(callback: BodyResponseCallback<Schema$TypeProvider>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Typeproviders$Get
        | BodyResponseCallback<Schema$TypeProvider>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TypeProvider>,
      callback?: BodyResponseCallback<Schema$TypeProvider>
    ): void | GaxiosPromise<Schema$TypeProvider> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Typeproviders$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Typeproviders$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: this.context,
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
     * @param {string} params.type The name of the type provider type for this request.
     * @param {string} params.typeProvider The name of the type provider for this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getType(
      params?: Params$Resource$Typeproviders$Gettype,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TypeInfo>;
    getType(
      params: Params$Resource$Typeproviders$Gettype,
      options: MethodOptions | BodyResponseCallback<Schema$TypeInfo>,
      callback: BodyResponseCallback<Schema$TypeInfo>
    ): void;
    getType(
      params: Params$Resource$Typeproviders$Gettype,
      callback: BodyResponseCallback<Schema$TypeInfo>
    ): void;
    getType(callback: BodyResponseCallback<Schema$TypeInfo>): void;
    getType(
      paramsOrCallback?:
        | Params$Resource$Typeproviders$Gettype
        | BodyResponseCallback<Schema$TypeInfo>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$TypeInfo>,
      callback?: BodyResponseCallback<Schema$TypeInfo>
    ): void | GaxiosPromise<Schema$TypeInfo> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Typeproviders$Gettype;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Typeproviders$Gettype;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}/types/{type}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'typeProvider', 'type'],
        pathParams: ['project', 'type', 'typeProvider'],
        context: this.context,
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
    insert(
      params?: Params$Resource$Typeproviders$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    insert(
      params: Params$Resource$Typeproviders$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(
      params: Params$Resource$Typeproviders$Insert,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Typeproviders$Insert
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Typeproviders$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Typeproviders$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/typeProviders'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
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
    list(
      params?: Params$Resource$Typeproviders$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TypeProvidersListResponse>;
    list(
      params: Params$Resource$Typeproviders$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TypeProvidersListResponse>,
      callback: BodyResponseCallback<Schema$TypeProvidersListResponse>
    ): void;
    list(
      params: Params$Resource$Typeproviders$List,
      callback: BodyResponseCallback<Schema$TypeProvidersListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$TypeProvidersListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Typeproviders$List
        | BodyResponseCallback<Schema$TypeProvidersListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TypeProvidersListResponse>,
      callback?: BodyResponseCallback<Schema$TypeProvidersListResponse>
    ): void | GaxiosPromise<Schema$TypeProvidersListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Typeproviders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Typeproviders$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/typeProviders'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TypeProvidersListResponse>(
          parameters,
          callback
        );
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
    listTypes(
      params?: Params$Resource$Typeproviders$Listtypes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TypeProvidersListTypesResponse>;
    listTypes(
      params: Params$Resource$Typeproviders$Listtypes,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TypeProvidersListTypesResponse>,
      callback: BodyResponseCallback<Schema$TypeProvidersListTypesResponse>
    ): void;
    listTypes(
      params: Params$Resource$Typeproviders$Listtypes,
      callback: BodyResponseCallback<Schema$TypeProvidersListTypesResponse>
    ): void;
    listTypes(
      callback: BodyResponseCallback<Schema$TypeProvidersListTypesResponse>
    ): void;
    listTypes(
      paramsOrCallback?:
        | Params$Resource$Typeproviders$Listtypes
        | BodyResponseCallback<Schema$TypeProvidersListTypesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TypeProvidersListTypesResponse>,
      callback?: BodyResponseCallback<Schema$TypeProvidersListTypesResponse>
    ): void | GaxiosPromise<Schema$TypeProvidersListTypesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Typeproviders$Listtypes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Typeproviders$Listtypes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}/types'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TypeProvidersListTypesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TypeProvidersListTypesResponse>(
          parameters
        );
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
    patch(
      params?: Params$Resource$Typeproviders$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Typeproviders$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Typeproviders$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Typeproviders$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Typeproviders$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Typeproviders$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: this.context,
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
    update(
      params?: Params$Resource$Typeproviders$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Typeproviders$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Typeproviders$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Typeproviders$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Typeproviders$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Typeproviders$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Typeproviders$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type provider for this request.
     */
    typeProvider?: string;
  }
  export interface Params$Resource$Typeproviders$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type provider for this request.
     */
    typeProvider?: string;
  }
  export interface Params$Resource$Typeproviders$Gettype
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type provider type for this request.
     */
    type?: string;
    /**
     * The name of the type provider for this request.
     */
    typeProvider?: string;
  }
  export interface Params$Resource$Typeproviders$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TypeProvider;
  }
  export interface Params$Resource$Typeproviders$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
     */
    filter?: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    maxResults?: number;
    /**
     * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     */
    orderBy?: string;
    /**
     * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Typeproviders$Listtypes
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
     */
    filter?: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    maxResults?: number;
    /**
     * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     */
    orderBy?: string;
    /**
     * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type provider for this request.
     */
    typeProvider?: string;
  }
  export interface Params$Resource$Typeproviders$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type provider for this request.
     */
    typeProvider?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TypeProvider;
  }
  export interface Params$Resource$Typeproviders$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type provider for this request.
     */
    typeProvider?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TypeProvider;
  }

  export class Resource$Types {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * deploymentmanager.types.delete
     * @desc Deletes a type and all of the resources in the type.
     * @alias deploymentmanager.types.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.type The name of the type for this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Types$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Types$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Types$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Types$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Types$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Types$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/types/{type}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['project', 'type'],
        pathParams: ['project', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * deploymentmanager.types.get
     * @desc Gets information about a specific type.
     * @alias deploymentmanager.types.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.type The name of the type for this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Types$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Type>;
    get(
      params: Params$Resource$Types$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Type>,
      callback: BodyResponseCallback<Schema$Type>
    ): void;
    get(
      params: Params$Resource$Types$Get,
      callback: BodyResponseCallback<Schema$Type>
    ): void;
    get(callback: BodyResponseCallback<Schema$Type>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Types$Get
        | BodyResponseCallback<Schema$Type>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Type>,
      callback?: BodyResponseCallback<Schema$Type>
    ): void | GaxiosPromise<Schema$Type> {
      let params = (paramsOrCallback || {}) as Params$Resource$Types$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Types$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/types/{type}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'type'],
        pathParams: ['project', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Type>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Type>(parameters);
      }
    }

    /**
     * deploymentmanager.types.insert
     * @desc Creates a type.
     * @alias deploymentmanager.types.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {().Type} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Types$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    insert(
      params: Params$Resource$Types$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(
      params: Params$Resource$Types$Insert,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Types$Insert
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Types$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Types$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/types'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
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
    list(
      params?: Params$Resource$Types$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TypesListResponse>;
    list(
      params: Params$Resource$Types$List,
      options: MethodOptions | BodyResponseCallback<Schema$TypesListResponse>,
      callback: BodyResponseCallback<Schema$TypesListResponse>
    ): void;
    list(
      params: Params$Resource$Types$List,
      callback: BodyResponseCallback<Schema$TypesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$TypesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Types$List
        | BodyResponseCallback<Schema$TypesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TypesListResponse>,
      callback?: BodyResponseCallback<Schema$TypesListResponse>
    ): void | GaxiosPromise<Schema$TypesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Types$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Types$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/types'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TypesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TypesListResponse>(parameters);
      }
    }

    /**
     * deploymentmanager.types.patch
     * @desc Updates a type. This method supports patch semantics.
     * @alias deploymentmanager.types.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.type The name of the type for this request.
     * @param {().Type} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Types$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Types$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Types$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Types$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Types$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Types$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/types/{type}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['project', 'type'],
        pathParams: ['project', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * deploymentmanager.types.update
     * @desc Updates a type.
     * @alias deploymentmanager.types.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.type The name of the type for this request.
     * @param {().Type} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Types$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Types$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Types$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Types$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Types$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Types$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/deploymentmanager/alpha/projects/{project}/global/types/{type}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['project', 'type'],
        pathParams: ['project', 'type'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Types$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type for this request.
     */
    type?: string;
  }
  export interface Params$Resource$Types$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type for this request.
     */
    type?: string;
  }
  export interface Params$Resource$Types$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Type;
  }
  export interface Params$Resource$Types$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.  For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.  You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
     */
    filter?: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    maxResults?: number;
    /**
     * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     */
    orderBy?: string;
    /**
     * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The project ID for this request.
     */
    project?: string;
  }
  export interface Params$Resource$Types$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type for this request.
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Type;
  }
  export interface Params$Resource$Types$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this request.
     */
    project?: string;
    /**
     * The name of the type for this request.
     */
    type?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Type;
  }
}
