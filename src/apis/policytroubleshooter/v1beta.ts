// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

export namespace policytroubleshooter_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Policy Troubleshooter API
   *
   *
   *
   * @example
   * const {google} = require('googleapis');
   * const policytroubleshooter = google.policytroubleshooter('v1beta');
   *
   * @namespace policytroubleshooter
   * @type {Function}
   * @version v1beta
   * @variation v1beta
   * @param {object=} options Options for Policytroubleshooter
   */
  export class Policytroubleshooter {
    context: APIRequestContext;
    iam: Resource$Iam;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.iam = new Resource$Iam(this.context);
    }
  }

  /**
   * AccessTuple defines information required for checking an access attempt. In other words, this is the tuple given to `CheckAccess`.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1betaAccessTuple {
    /**
     * Required. A full resource name according to https://cloud.google.com/apis/design/resource_names. This is the full resource name of the resource that access is checked against.
     */
    fullResourceName?: string | null;
    /**
     * Required. The Cloud IAM permission under which defines the kind of access being explained. Example: &quot;resourcemanager.projects.get&quot; would explain if and why the principal has the resourcemanager.projects.get permission on the resource specified in full_resource_name declared in this structure. See https://cloud.google.com/iam/docs/testing-permissions
     */
    permission?: string | null;
    /**
     * Required. The principal on behalf of who the access is explained for. The format is one of the principal&#39;s email addresses associated with its gaia account. It must be an account that can appear as an actor. For example groups are not supported. Currently, service accounts, users are supported.
     */
    principal?: string | null;
  }
  /**
   * Binding Explanation.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1betaBindingExplanation {
    /**
     * REQUIRED: Access decision for this binding.
     */
    access?: string | null;
    /**
     * The condition which needs to be satisfied in order for this binding to grant the role to the principal. See https://cloud.google.com/iam/docs/conditions-base
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * For each member in the binding, provides information whether or not the principal from the request is included in the member by which the CheckResult is keyed. May indicate that the caller has no access to this information. example key: &#39;group:cloud-iam-assist-eng@google.com&#39; example value &#39;{NOT_GRANTED, HIGH}
     */
    memberships?: {
      [key: string]: Schema$GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership;
    } | null;
    /**
     * Bubbles up role_permission level relavance to BindingExplanation object. If role permission is NORMAL, then binding relevance is NORMAL. If role permission is HIGH, then binding relevance is HIGH.
     */
    relevance?: string | null;
    /**
     * The role that this binding grants in the policy. for example &quot;roles/compute.serviceAgent&quot;
     */
    role?: string | null;
    /**
     * Whether the role of this binding contains the checked permission
     */
    rolePermission?: string | null;
    /**
     * The relevance of this permission with respect to the BindingExplanation.
     */
    rolePermissionRelevance?: string | null;
  }
  /**
   * Encapsulated membership and the relevance of that membership with respect to BindingExplanation.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership {
    /**
     * Membership status.
     */
    membership?: string | null;
    /**
     * Relevance of this membership with respect to BindingExplanation.
     */
    relevance?: string | null;
  }
  /**
   * An explained IAM policy combines the raw policy in the context of the resource which it is attached to along with detailed evaluation on the evaluation parameters provided through the request.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1betaExplainedPolicy {
    /**
     * Access decision for this section of the resource&#39;s effective policy.
     */
    access?: string | null;
    /**
     * Detailed binding evaluation explanations provide information about how each binding contributes to the principal&#39;s access or the lack thereof.
     */
    bindingExplanations?: Schema$GoogleCloudPolicytroubleshooterV1betaBindingExplanation[];
    /**
     * Resource that this section of the effective policy attaches to.
     */
    fullResourceName?: string | null;
    /**
     * The IAM policy attached to the resource.
     */
    policy?: Schema$GoogleIamV1Policy;
    /**
     * Relevance of this Policy.
     */
    relevance?: string | null;
  }
  /**
   * TroubleshootIamPolicyRequest is used in TroubleshootIamPolicy
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest {
    /**
     * Collection of attributes for example user, permission, resource that define troubleshooter&#39;s input.
     */
    accessTuple?: Schema$GoogleCloudPolicytroubleshooterV1betaAccessTuple;
  }
  /**
   * TroubleshootIamPolicyResponse is used in TroubleshootIamPolicy.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse {
    /**
     * Reflects whether the probed access was granted, denied or ultimately could not be decided from the caller&#39;s point of view.
     */
    access?: string | null;
    /**
     * List of explained policies. Each explanation corresponds to one policy along the ancestry path.
     */
    explainedPolicies?: Schema$GoogleCloudPolicytroubleshooterV1betaExplainedPolicy[];
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$GoogleIamV1AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$GoogleIamV1AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$GoogleIamV1AuditLogConfig {
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
   * Associates `members` with a `role`.
   */
  export interface Schema$GoogleIamV1Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions (defined by IAM or configured by users). A `binding` can optionally specify a `condition`, which is a logic expression that further constrains the role binding based on attributes about the request and/or target resource.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [&quot;user:eve@example.com&quot;],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt;             timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)  For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$GoogleIamV1Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally may specify a `condition` that determines when binding is in effect. `bindings` with no members will result in an error.
     */
    bindings?: Schema$GoogleIamV1Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten. Due to blind-set semantics of an etag-less policy, &#39;setIamPolicy&#39; will not fail even if either of incoming or stored policy does not meet the version requirements.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Operations affecting conditional bindings must specify version 3. This can be either setting a conditional policy, modifying a conditional binding, or removing a conditional binding from the stored conditional policy. Operations on non-conditional policies may specify any valid value or leave the field unset.  If no etag is provided in the call to `setIamPolicy`, any version compliance checks on the incoming and/or stored policy is skipped.
     */
    version?: number | null;
  }
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$GoogleTypeExpr {
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

  export class Resource$Iam {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * policytroubleshooter.iam.troubleshoot
     * @desc Perform a check on whether a member is granted a permission on a resource and how that grant/deny is determined accordinga to the resource's effective IAM policy interpretation.
     * @alias policytroubleshooter.iam.troubleshoot
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    troubleshoot(
      params?: Params$Resource$Iam$Troubleshoot,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
    >;
    troubleshoot(
      params: Params$Resource$Iam$Troubleshoot,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
      >
    ): void;
    troubleshoot(
      params: Params$Resource$Iam$Troubleshoot,
      callback: BodyResponseCallback<
        Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
      >
    ): void;
    troubleshoot(
      callback: BodyResponseCallback<
        Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
      >
    ): void;
    troubleshoot(
      paramsOrCallback?:
        | Params$Resource$Iam$Troubleshoot
        | BodyResponseCallback<
            Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
    > {
      let params = (paramsOrCallback || {}) as Params$Resource$Iam$Troubleshoot;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Iam$Troubleshoot;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://policytroubleshooter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/iam:troubleshoot').replace(
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
        createAPIRequest<
          Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Iam$Troubleshoot extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest;
  }
}
