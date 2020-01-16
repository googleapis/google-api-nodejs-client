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

export namespace policytroubleshooter_v1 {
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
   * Policy Troubleshooter API
   *
   *
   *
   * @example
   * const {google} = require('googleapis');
   * const policytroubleshooter = google.policytroubleshooter('v1');
   *
   * @namespace policytroubleshooter
   * @type {Function}
   * @version v1
   * @variation v1
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
   * Information about the member, resource, and permission to check.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1AccessTuple {
    /**
     * Required. The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`.  For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
     */
    fullResourceName?: string | null;
    /**
     * Required. The IAM permission to check for the specified member and resource.  For a complete list of IAM permissions, see https://cloud.google.com/iam/help/permissions/reference.  For a complete list of predefined IAM roles and the permissions in each role, see https://cloud.google.com/iam/help/roles/reference.
     */
    permission?: string | null;
    /**
     * Required. The member, or principal, whose access you want to check, in the form of the email address that represents that member. For example, `alice@example.com` or `my-service-account@my-project.iam.gserviceaccount.com`.  The member must be a Google Account or a service account. Other types of members are not supported.
     */
    principal?: string | null;
  }
  /**
   * Details about how a binding in a policy affects a member&#39;s ability to use a permission.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1BindingExplanation {
    /**
     * Required. Indicates whether _this binding_ provides the specified permission to the specified member for the specified resource.  This field does _not_ indicate whether the member actually has the permission for the resource. There might be another binding that overrides this binding. To determine whether the member actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse.
     */
    access?: string | null;
    /**
     * A condition expression that prevents access unless the expression evaluates to `true`.  To learn about IAM Conditions, see http://cloud.google.com/iam/help/conditions/overview.
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Indicates whether each member in the binding includes the member specified in the request, either directly or indirectly. Each key identifies a member in the binding, and each value indicates whether the member in the binding includes the member in the request.  For example, suppose that a binding includes the following members:  * `user:alice@example.com` * `group:product-eng@example.com`  You want to troubleshoot access for `user:bob@example.com`. This user is a member of the group `group:product-eng@example.com`.  For the first member in the binding, the key is `user:alice@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_NOT_INCLUDED`.  For the second member in the binding, the key is `group:product-eng@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_INCLUDED`.
     */
    memberships?: {
      [key: string]: Schema$GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership;
    } | null;
    /**
     * The relevance of this binding to the overall determination for the entire policy.
     */
    relevance?: string | null;
    /**
     * The role that this binding grants. For example, `roles/compute.serviceAgent`.  For a complete list of predefined IAM roles, as well as the permissions in each role, see https://cloud.google.com/iam/help/roles/reference.
     */
    role?: string | null;
    /**
     * Indicates whether the role granted by this binding contains the specified permission.
     */
    rolePermission?: string | null;
    /**
     * The relevance of the permission&#39;s existence, or nonexistence, in the role to the overall determination for the entire policy.
     */
    rolePermissionRelevance?: string | null;
  }
  /**
   * Details about whether the binding includes the member.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership {
    /**
     * Indicates whether the binding includes the member.
     */
    membership?: string | null;
    /**
     * The relevance of the member&#39;s status to the overall determination for the binding.
     */
    relevance?: string | null;
  }
  /**
   * Details about how a specific IAM Policy contributed to the access check.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1ExplainedPolicy {
    /**
     * Indicates whether _this policy_ provides the specified permission to the specified member for the specified resource.  This field does _not_ indicate whether the member actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the member actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse.
     */
    access?: string | null;
    /**
     * Details about how each binding in the policy affects the member&#39;s ability, or inability, to use the permission for the resource.  If the sender of the request does not have access to the policy, this field is omitted.
     */
    bindingExplanations?: Schema$GoogleCloudPolicytroubleshooterV1BindingExplanation[];
    /**
     * The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`.  If the sender of the request does not have access to the policy, this field is omitted.  For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
     */
    fullResourceName?: string | null;
    /**
     * The IAM policy attached to the resource.  If the sender of the request does not have access to the policy, this field is empty.
     */
    policy?: Schema$GoogleIamV1Policy;
    /**
     * The relevance of this policy to the overall determination in the TroubleshootIamPolicyResponse.  If the sender of the request does not have access to the policy, this field is omitted.
     */
    relevance?: string | null;
  }
  /**
   * Request for TroubleshootIamPolicy.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest {
    /**
     * The information to use for checking whether a member has a permission for a resource.
     */
    accessTuple?: Schema$GoogleCloudPolicytroubleshooterV1AccessTuple;
  }
  /**
   * Response for TroubleshootIamPolicy.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse {
    /**
     * Indicates whether the member has the specified permission for the specified resource, based on evaluating all of the applicable IAM policies.
     */
    access?: string | null;
    /**
     * List of IAM policies that were evaluated to check the member&#39;s permissions, with annotations to indicate how each policy contributed to the final result.  The list of policies can include the policy for the resource itself. It can also include policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and the project.  To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy.
     */
    explainedPolicies?: Schema$GoogleCloudPolicytroubleshooterV1ExplainedPolicy[];
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
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.  * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a user that has been recently deleted. For    example, `alice@example.com?uid=123456789012345678901`. If the user is    recovered, this value reverts to `user:{emailid}` and the recovered user    retains the role in the binding.  * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus    unique identifier) representing a service account that has been recently    deleted. For example,    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.    If the service account is undeleted, this value reverts to    `serviceAccount:{emailid}` and the undeleted service account retains the    role in the binding.  * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a Google group that has been recently    deleted. For example, `admins@example.com?uid=123456789012345678901`. If    the group is recovered, this value reverts to `group:{emailid}` and the    recovered group retains the role in the binding.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  Optionally, a `binding` can specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both.  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [&quot;user:eve@example.com&quot;],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$GoogleIamV1Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$GoogleIamV1Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.
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
     * @desc Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission.
     * @alias policytroubleshooter.iam.troubleshoot
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    troubleshoot(
      params?: Params$Resource$Iam$Troubleshoot,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
    >;
    troubleshoot(
      params: Params$Resource$Iam$Troubleshoot,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
      >
    ): void;
    troubleshoot(
      params: Params$Resource$Iam$Troubleshoot,
      callback: BodyResponseCallback<
        Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
      >
    ): void;
    troubleshoot(
      callback: BodyResponseCallback<
        Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
      >
    ): void;
    troubleshoot(
      paramsOrCallback?:
        | Params$Resource$Iam$Troubleshoot
        | BodyResponseCallback<
            Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
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
            url: (rootUrl + '/v1/iam:troubleshoot').replace(
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
          Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
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
    requestBody?: Schema$GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest;
  }
}
