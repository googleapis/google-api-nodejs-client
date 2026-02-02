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
  GaxiosResponseWithHTTP2,
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

export namespace policytroubleshooter_v3beta {
  export interface Options extends GlobalOptions {
    version: 'v3beta';
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
   * Policy Troubleshooter API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const policytroubleshooter = google.policytroubleshooter('v3beta');
   * ```
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
   * Information about the principal, resource, and permission to check.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaAccessTuple {
    /**
     * Optional. Additional context for the request, such as the request time or IP address. This context allows Policy Troubleshooter to troubleshoot conditional role bindings and deny rules.
     */
    conditionContext?: Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContext;
    /**
     * Required. The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
     */
    fullResourceName?: string | null;
    /**
     * Required. The IAM permission to check for, either in the `v1` permission format or the `v2` permission format. For a complete list of IAM permissions in the `v1` format, see https://cloud.google.com/iam/help/permissions/reference. For a list of IAM permissions in the `v2` format, see https://cloud.google.com/iam/help/deny/supported-permissions. For a complete list of predefined IAM roles and the permissions in each role, see https://cloud.google.com/iam/help/roles/reference.
     */
    permission?: string | null;
    /**
     * Output only. The permission that Policy Troubleshooter checked for, in the `v2` format.
     */
    permissionFqdn?: string | null;
    /**
     * Required. The email address of the principal whose access you want to check. For example, `alice@example.com` or `my-service-account@my-project.iam.gserviceaccount.com`. The principal must be a Google Account or a service account. Other types of principals are not supported.
     */
    principal?: string | null;
  }
  /**
   * Details about how a role binding in an allow policy affects a principal's ability to use a permission.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaAllowBindingExplanation {
    /**
     * Required. Indicates whether _this role binding_ gives the specified permission to the specified principal on the specified resource. This field does _not_ indicate whether the principal actually has the permission on the resource. There might be another role binding that overrides this role binding. To determine whether the principal actually has the permission, use the `overall_access_state` field in the TroubleshootIamPolicyResponse.
     */
    allowAccessState?: string | null;
    /**
     * The combined result of all memberships. Indicates if the principal is included in any role binding, either directly or indirectly.
     */
    combinedMembership?: Schema$GoogleCloudPolicytroubleshooterIamV3betaAllowBindingExplanationAnnotatedAllowMembership;
    /**
     * A condition expression that specifies when the role binding grants access. To learn about IAM Conditions, see https://cloud.google.com/iam/help/conditions/overview.
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Condition evaluation state for this role binding.
     */
    conditionExplanation?: Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionExplanation;
    /**
     * Indicates whether each role binding includes the principal specified in the request, either directly or indirectly. Each key identifies a principal in the role binding, and each value indicates whether the principal in the role binding includes the principal in the request. For example, suppose that a role binding includes the following principals: * `user:alice@example.com` * `group:product-eng@example.com` You want to troubleshoot access for `user:bob@example.com`. This user is a member of the group `group:product-eng@example.com`. For the first principal in the role binding, the key is `user:alice@example.com`, and the `membership` field in the value is set to `NOT_INCLUDED`. For the second principal in the role binding, the key is `group:product-eng@example.com`, and the `membership` field in the value is set to `INCLUDED`.
     */
    memberships?: {
      [
        key: string
      ]: Schema$GoogleCloudPolicytroubleshooterIamV3betaAllowBindingExplanationAnnotatedAllowMembership;
    } | null;
    /**
     * The relevance of this role binding to the overall determination for the entire policy.
     */
    relevance?: string | null;
    /**
     * The role that this role binding grants. For example, `roles/compute.admin`. For a complete list of predefined IAM roles, as well as the permissions in each role, see https://cloud.google.com/iam/help/roles/reference.
     */
    role?: string | null;
    /**
     * Indicates whether the role granted by this role binding contains the specified permission.
     */
    rolePermission?: string | null;
    /**
     * The relevance of the permission's existence, or nonexistence, in the role to the overall determination for the entire policy.
     */
    rolePermissionRelevance?: string | null;
  }
  /**
   * Details about whether the role binding includes the principal.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaAllowBindingExplanationAnnotatedAllowMembership {
    /**
     * Indicates whether the role binding includes the principal.
     */
    membership?: string | null;
    /**
     * The relevance of the principal's status to the overall determination for the role binding.
     */
    relevance?: string | null;
  }
  /**
   * Details about how the relevant IAM allow policies affect the final access state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaAllowPolicyExplanation {
    /**
     * Indicates whether the principal has the specified permission for the specified resource, based on evaluating all applicable IAM allow policies.
     */
    allowAccessState?: string | null;
    /**
     * List of IAM allow policies that were evaluated to check the principal's permissions, with annotations to indicate how each policy contributed to the final result. The list of policies includes the policy for the resource itself, as well as allow policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and the project. To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy.
     */
    explainedPolicies?: Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedAllowPolicy[];
    /**
     * The relevance of the allow policy type to the overall access state.
     */
    relevance?: string | null;
  }
  /**
   * Additional context for troubleshooting conditional role bindings and deny rules.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContext {
    /**
     * The destination of a network activity, such as accepting a TCP connection. In a multi-hop network activity, the destination represents the receiver of the last hop.
     */
    destination?: Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContextPeer;
    /**
     * Output only. The effective tags on the resource. The effective tags are fetched during troubleshooting.
     */
    effectiveTags?: Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContextEffectiveTag[];
    /**
     * Represents a network request, such as an HTTP request.
     */
    request?: Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContextRequest;
    /**
     * Represents a target resource that is involved with a network activity. If multiple resources are involved with an activity, this must be the primary one.
     */
    resource?: Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContextResource;
  }
  /**
   * A tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. `EffectiveTag` contains the `name` and `namespaced_name` of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContextEffectiveTag {
    /**
     * Output only. Indicates the inheritance status of a tag value attached to the given resource. If the tag value is inherited from one of the resource's ancestors, inherited will be true. If false, then the tag value is directly attached to the resource, inherited will be false.
     */
    inherited?: boolean | null;
    /**
     * Output only. The namespaced name of the TagKey. Can be in the form `{organization_id\}/{tag_key_short_name\}` or `{project_id\}/{tag_key_short_name\}` or `{project_number\}/{tag_key_short_name\}`.
     */
    namespacedTagKey?: string | null;
    /**
     * Output only. The namespaced name of the TagValue. Can be in the form `{organization_id\}/{tag_key_short_name\}/{tag_value_short_name\}` or `{project_id\}/{tag_key_short_name\}/{tag_value_short_name\}` or `{project_number\}/{tag_key_short_name\}/{tag_value_short_name\}`.
     */
    namespacedTagValue?: string | null;
    /**
     * Output only. The name of the TagKey, in the format `tagKeys/{id\}`, such as `tagKeys/123`.
     */
    tagKey?: string | null;
    /**
     * The parent name of the tag key. Must be in the format `organizations/{organization_id\}` or `projects/{project_number\}`
     */
    tagKeyParentName?: string | null;
    /**
     * Output only. Resource name for TagValue in the format `tagValues/456`.
     */
    tagValue?: string | null;
  }
  /**
   * This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContextPeer {
    /**
     * The IPv4 or IPv6 address of the peer.
     */
    ip?: string | null;
    /**
     * The network port of the peer.
     */
    port?: string | null;
  }
  /**
   * This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContextRequest {
    /**
     * Optional. The timestamp when the destination service receives the first byte of the request.
     */
    receiveTime?: string | null;
  }
  /**
   * Core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a Compute Engine instance.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionContextResource {
    /**
     * The stable identifier (name) of a resource on the `service`. A resource can be logically identified as `//{resource.service\}/{resource.name\}`. Unlike the resource URI, the resource name doesn't contain any protocol and version information. For a list of full resource name formats, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names
     */
    name?: string | null;
    /**
     * The name of the service that this resource belongs to, such as `compute.googleapis.com`. The service name might not match the DNS hostname that actually serves the request. For a full list of resource service values, see https://cloud.google.com/iam/help/conditions/resource-services
     */
    service?: string | null;
    /**
     * The type of the resource, in the format `{service\}/{kind\}`. For a full list of resource type values, see https://cloud.google.com/iam/help/conditions/resource-types
     */
    type?: string | null;
  }
  /**
   * Explanation for how a condition affects a principal's access
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionExplanation {
    /**
     * Any errors that prevented complete evaluation of the condition expression.
     */
    errors?: Schema$GoogleRpcStatus[];
    /**
     * The value of each statement of the condition expression. The value can be `true`, `false`, or `null`. The value is `null` if the statement can't be evaluated.
     */
    evaluationStates?: Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionExplanationEvaluationState[];
    /**
     * Value of the condition.
     */
    value?: any | null;
  }
  /**
   * Evaluated state of a condition expression.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionExplanationEvaluationState {
    /**
     * End position of an expression in the condition, by character, end included, for example: the end position of the first part of `a==b || c==d` would be 4.
     */
    end?: number | null;
    /**
     * Any errors that prevented complete evaluation of the condition expression.
     */
    errors?: Schema$GoogleRpcStatus[];
    /**
     * Start position of an expression in the condition, by character.
     */
    start?: number | null;
    /**
     * Value of this expression.
     */
    value?: any | null;
  }
  /**
   * Details about how the relevant IAM deny policies affect the final access state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyPolicyExplanation {
    /**
     * Indicates whether the principal is denied the specified permission for the specified resource, based on evaluating all applicable IAM deny policies.
     */
    denyAccessState?: string | null;
    /**
     * List of resources with IAM deny policies that were evaluated to check the principal's denied permissions, with annotations to indicate how each policy contributed to the final result. The list of resources includes the policy for the resource itself, as well as policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and the project. The order of the resources starts from the resource and climbs up the resource hierarchy. To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy.
     */
    explainedResources?: Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedDenyResource[];
    /**
     * Indicates whether the permission to troubleshoot is supported in deny policies.
     */
    permissionDeniable?: boolean | null;
    /**
     * The relevance of the deny policy result to the overall access state.
     */
    relevance?: string | null;
  }
  /**
   * Details about how a deny rule in a deny policy affects a principal's ability to use a permission.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanation {
    /**
     * Indicates whether the permission in the request is listed as a denied permission in the deny rule.
     */
    combinedDeniedPermission?: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedPermissionMatching;
    /**
     * Indicates whether the principal is listed as a denied principal in the deny rule, either directly or through membership in a principal set.
     */
    combinedDeniedPrincipal?: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedDenyPrincipalMatching;
    /**
     * Indicates whether the permission in the request is listed as an exception permission in the deny rule.
     */
    combinedExceptionPermission?: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedPermissionMatching;
    /**
     * Indicates whether the principal is listed as an exception principal in the deny rule, either directly or through membership in a principal set.
     */
    combinedExceptionPrincipal?: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedDenyPrincipalMatching;
    /**
     * A condition expression that specifies when the deny rule denies the principal access. To learn about IAM Conditions, see https://cloud.google.com/iam/help/conditions/overview.
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Condition evaluation state for this role binding.
     */
    conditionExplanation?: Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionExplanation;
    /**
     * Lists all denied permissions in the deny rule and indicates whether each permission matches the permission in the request. Each key identifies a denied permission in the rule, and each value indicates whether the denied permission matches the permission in the request.
     */
    deniedPermissions?: {
      [
        key: string
      ]: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedPermissionMatching;
    } | null;
    /**
     * Lists all denied principals in the deny rule and indicates whether each principal matches the principal in the request, either directly or through membership in a principal set. Each key identifies a denied principal in the rule, and each value indicates whether the denied principal matches the principal in the request.
     */
    deniedPrincipals?: {
      [
        key: string
      ]: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedDenyPrincipalMatching;
    } | null;
    /**
     * Required. Indicates whether _this rule_ denies the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal is actually denied on the permission for the resource. There might be another rule that overrides this rule. To determine whether the principal actually has the permission, use the `overall_access_state` field in the TroubleshootIamPolicyResponse.
     */
    denyAccessState?: string | null;
    /**
     * Lists all exception permissions in the deny rule and indicates whether each permission matches the permission in the request. Each key identifies a exception permission in the rule, and each value indicates whether the exception permission matches the permission in the request.
     */
    exceptionPermissions?: {
      [
        key: string
      ]: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedPermissionMatching;
    } | null;
    /**
     * Lists all exception principals in the deny rule and indicates whether each principal matches the principal in the request, either directly or through membership in a principal set. Each key identifies a exception principal in the rule, and each value indicates whether the exception principal matches the principal in the request.
     */
    exceptionPrincipals?: {
      [
        key: string
      ]: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedDenyPrincipalMatching;
    } | null;
    /**
     * The relevance of this role binding to the overall determination for the entire policy.
     */
    relevance?: string | null;
  }
  /**
   * Details about whether the principal in the request is listed as a denied principal in the deny rule, either directly or through membership in a principal set.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedDenyPrincipalMatching {
    /**
     * Indicates whether the principal is listed as a denied principal in the deny rule, either directly or through membership in a principal set.
     */
    membership?: string | null;
    /**
     * The relevance of the principal's status to the overall determination for the role binding.
     */
    relevance?: string | null;
  }
  /**
   * Details about whether the permission in the request is denied by the deny rule.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanationAnnotatedPermissionMatching {
    /**
     * Indicates whether the permission in the request is denied by the deny rule.
     */
    permissionMatchingState?: string | null;
    /**
     * The relevance of the permission status to the overall determination for the rule.
     */
    relevance?: string | null;
  }
  /**
   * Details about how a specific IAM allow policy contributed to the final access state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedAllowPolicy {
    /**
     * Required. Indicates whether _this policy_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the `overall_access_state` field in the TroubleshootIamPolicyResponse.
     */
    allowAccessState?: string | null;
    /**
     * Details about how each role binding in the policy affects the principal's ability, or inability, to use the permission for the resource. The order of the role bindings matches the role binding order in the policy. If the sender of the request does not have access to the policy, this field is omitted.
     */
    bindingExplanations?: Schema$GoogleCloudPolicytroubleshooterIamV3betaAllowBindingExplanation[];
    /**
     * The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. If the sender of the request does not have access to the policy, this field is omitted. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
     */
    fullResourceName?: string | null;
    /**
     * The IAM allow policy attached to the resource. If the sender of the request does not have access to the policy, this field is empty.
     */
    policy?: Schema$GoogleIamV1Policy;
    /**
     * The relevance of this policy to the overall access state in the TroubleshootIamPolicyResponse. If the sender of the request does not have access to the policy, this field is omitted.
     */
    relevance?: string | null;
  }
  /**
   * Details about how a specific IAM deny policy Policy contributed to the access check.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedDenyPolicy {
    /**
     * Required. Indicates whether _this policy_ denies the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the `overall_access_state` field in the TroubleshootIamPolicyResponse.
     */
    denyAccessState?: string | null;
    /**
     * The IAM deny policy attached to the resource. If the sender of the request does not have access to the policy, this field is omitted.
     */
    policy?: Schema$GoogleIamV2Policy;
    /**
     * The relevance of this policy to the overall access state in the TroubleshootIamPolicyResponse. If the sender of the request does not have access to the policy, this field is omitted.
     */
    relevance?: string | null;
    /**
     * Details about how each rule in the policy affects the principal's inability to use the permission for the resource. The order of the deny rule matches the order of the rules in the deny policy. If the sender of the request does not have access to the policy, this field is omitted.
     */
    ruleExplanations?: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyRuleExplanation[];
  }
  /**
   * Details about how a specific resource contributed to the deny policy evaluation.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedDenyResource {
    /**
     * Required. Indicates whether any policies attached to _this resource_ deny the specific permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the `overall_access_state` field in the TroubleshootIamPolicyResponse.
     */
    denyAccessState?: string | null;
    /**
     * List of IAM deny policies that were evaluated to check the principal's denied permissions, with annotations to indicate how each policy contributed to the final result.
     */
    explainedPolicies?: Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedDenyPolicy[];
    /**
     * The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. If the sender of the request does not have access to the policy, this field is omitted. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
     */
    fullResourceName?: string | null;
    /**
     * The relevance of this policy to the overall access state in the TroubleshootIamPolicyResponse. If the sender of the request does not have access to the policy, this field is omitted.
     */
    relevance?: string | null;
  }
  /**
   * Details about how a principal access boundary binding and policy contributes to the principal access boundary explanation, with annotations to indicate how the binding and policy contribute to the overall access state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABBindingAndPolicy {
    /**
     * Output only. Indicates whether the principal is allowed to access the specified resource based on evaluating the binding and policy.
     */
    bindingAndPolicyAccessState?: string | null;
    /**
     * Optional. Details about how this policy contributes to the principal access boundary explanation, with annotations to indicate how the policy contributes to the overall access state. If the caller doesn't have permission to view the policy in the binding, this field is omitted.
     */
    explainedPolicy?: Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABPolicy;
    /**
     * Details about how this binding contributes to the principal access boundary explanation, with annotations to indicate how the binding contributes to the overall access state.
     */
    explainedPolicyBinding?: Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPolicyBinding;
    /**
     * The relevance of this principal access boundary binding and policy to the overall access state.
     */
    relevance?: string | null;
  }
  /**
   * Details about how a principal access boundary policy contributes to the explanation, with annotations to indicate how the policy contributes to the overall access state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABPolicy {
    /**
     * List of principal access boundary rules that were explained to check the principal's access to specified resource, with annotations to indicate how each rule contributes to the overall access state.
     */
    explainedRules?: Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABRule[];
    /**
     * The policy that is explained.
     */
    policy?: Schema$GoogleIamV3PrincipalAccessBoundaryPolicy;
    /**
     * Output only. Indicates whether the policy allows access to the specified resource.
     */
    policyAccessState?: string | null;
    /**
     * Output only. Explanation of the principal access boundary policy's version.
     */
    policyVersion?: Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABPolicyVersion;
    /**
     * The relevance of this policy to the overall access state.
     */
    relevance?: string | null;
  }
  /**
   * Details about how a principal access boundary policy's version contributes to the policy's enforcement state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABPolicyVersion {
    /**
     * Output only. Indicates whether the policy is enforced based on its version.
     */
    enforcementState?: string | null;
    /**
     * Output only. The actual version of the policy. - If the policy uses static version, this field is the chosen static version. - If the policy uses dynamic version, this field is the effective latest version.
     */
    version?: number | null;
  }
  /**
   * Details about how a principal access boundary rule contributes to the explanation, with annotations to indicate how the rule contributes to the overall access state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABRule {
    /**
     * Output only. Indicates whether any resource of the rule is the specified resource or includes the specified resource.
     */
    combinedResourceInclusionState?: string | null;
    /**
     * Required. The effect of the rule which describes the access relationship.
     */
    effect?: string | null;
    /**
     * List of resources that were explained to check the principal's access to specified resource, with annotations to indicate how each resource contributes to the overall access state.
     */
    explainedResources?: Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABRuleExplainedResource[];
    /**
     * The relevance of this rule to the overall access state.
     */
    relevance?: string | null;
    /**
     * Output only. Indicates whether the rule allows access to the specified resource.
     */
    ruleAccessState?: string | null;
  }
  /**
   * Details about how a resource contributes to the explanation, with annotations to indicate how the resource contributes to the overall access state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABRuleExplainedResource {
    /**
     * The relevance of this resource to the overall access state.
     */
    relevance?: string | null;
    /**
     * The [full resource name](https://cloud.google.com/iam/docs/full-resource-names) that identifies the resource that is explained. This can only be a project, a folder, or an organization which is what a PAB rule accepts.
     */
    resource?: string | null;
    /**
     * Output only. Indicates whether the resource is the specified resource or includes the specified resource.
     */
    resourceInclusionState?: string | null;
  }
  /**
   * Details about how a policy binding contributes to the policy explanation, with annotations to indicate how the policy binding contributes to the overall access state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPolicyBinding {
    /**
     * Optional. Explanation of the condition in the policy binding. If the policy binding doesn't have a condition, this field is omitted.
     */
    conditionExplanation?: Schema$GoogleCloudPolicytroubleshooterIamV3betaConditionExplanation;
    /**
     * The policy binding that is explained.
     */
    policyBinding?: Schema$GoogleIamV3PolicyBinding;
    /**
     * Output only. Indicates whether the policy binding takes effect.
     */
    policyBindingState?: string | null;
    /**
     * The relevance of this policy binding to the overall access state.
     */
    relevance?: string | null;
  }
  /**
   * Details about how the relevant principal access boundary policies affect the overall access state.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaPABPolicyExplanation {
    /**
     * List of principal access boundary policies and bindings that are applicable to the principal's access state, with annotations to indicate how each binding and policy contributes to the overall access state.
     */
    explainedBindingsAndPolicies?: Schema$GoogleCloudPolicytroubleshooterIamV3betaExplainedPABBindingAndPolicy[];
    /**
     * Output only. Indicates whether the principal is allowed to access specified resource, based on evaluating all applicable principal access boundary bindings and policies.
     */
    principalAccessBoundaryAccessState?: string | null;
    /**
     * The relevance of the principal access boundary access state to the overall access state.
     */
    relevance?: string | null;
  }
  /**
   * Request for TroubleshootIamPolicy.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyRequest {
    /**
     * The information to use for checking whether a principal has a permission for a resource.
     */
    accessTuple?: Schema$GoogleCloudPolicytroubleshooterIamV3betaAccessTuple;
  }
  /**
   * Response for TroubleshootIamPolicy.
   */
  export interface Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse {
    /**
     * The access tuple from the request, including any provided context used to evaluate the condition.
     */
    accessTuple?: Schema$GoogleCloudPolicytroubleshooterIamV3betaAccessTuple;
    /**
     * An explanation of how the applicable IAM allow policies affect the final access state.
     */
    allowPolicyExplanation?: Schema$GoogleCloudPolicytroubleshooterIamV3betaAllowPolicyExplanation;
    /**
     * An explanation of how the applicable IAM deny policies affect the final access state.
     */
    denyPolicyExplanation?: Schema$GoogleCloudPolicytroubleshooterIamV3betaDenyPolicyExplanation;
    /**
     * Indicates whether the principal has the specified permission for the specified resource, based on evaluating all types of the applicable IAM policies.
     */
    overallAccessState?: string | null;
    /**
     * An explanation of how the applicable principal access boundary policies affect the final access state.
     */
    pabPolicyExplanation?: Schema$GoogleCloudPolicytroubleshooterIamV3betaPABPolicyExplanation;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
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
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
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
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$GoogleIamV1Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
     */
    role?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$GoogleIamV1Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$GoogleIamV1Binding[];
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
   * A deny rule in an IAM deny policy.
   */
  export interface Schema$GoogleIamV2DenyRule {
    /**
     * The condition that determines whether this deny rule applies to a request. If the condition expression evaluates to `true`, then the deny rule is applied; otherwise, the deny rule is not applied. Each deny rule is evaluated independently. If this deny rule does not apply to a request, other deny rules might still apply. The condition can use CEL functions that evaluate [resource tags](https://cloud.google.com/iam/help/conditions/resource-tags). Other functions and operators are not supported.
     */
    denialCondition?: Schema$GoogleTypeExpr;
    /**
     * The permissions that are explicitly denied by this rule. Each permission uses the format `{service_fqdn\}/{resource\}.{verb\}`, where `{service_fqdn\}` is the fully qualified domain name for the service. For example, `iam.googleapis.com/roles.list`.
     */
    deniedPermissions?: string[] | null;
    /**
     *  The identities that are prevented from using one or more permissions on Google Cloud resources. This field can contain the following values: * `principal://goog/subject/{email_id\}`: A specific Google Account. Includes Gmail, Cloud Identity, and Google Workspace user accounts. For example, `principal://goog/subject/alice@example.com`. * `principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id\}`: A Google Cloud service account. For example, `principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com`. * `principalSet://goog/group/{group_id\}`: A Google group. For example, `principalSet://goog/group/admins@example.com`. * `principalSet://goog/public:all`: A special identifier that represents any principal that is on the internet, even if they do not have a Google Account or are not logged in. * `principalSet://goog/cloudIdentityCustomerId/{customer_id\}`: All of the principals associated with the specified Google Workspace or Cloud Identity customer ID. For example, `principalSet://goog/cloudIdentityCustomerId/C01Abc35`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `principalSet://cloudresourcemanager.googleapis.com/[projects|folders|organizations]/{project_number|folder_number|org_number\}/type/ServiceAccount`: All service accounts grouped under a resource (project, folder, or organization). * `principalSet://cloudresourcemanager.googleapis.com/[projects|folders|organizations]/{project_number|folder_number|org_number\}/type/ServiceAgent`: All service agents grouped under a resource (project, folder, or organization). * `deleted:principal://goog/subject/{email_id\}?uid={uid\}`: A specific Google Account that was deleted recently. For example, `deleted:principal://goog/subject/alice@example.com?uid=1234567890`. If the Google Account is recovered, this identifier reverts to the standard identifier for a Google Account. * `deleted:principalSet://goog/group/{group_id\}?uid={uid\}`: A Google group that was deleted recently. For example, `deleted:principalSet://goog/group/admins@example.com?uid=1234567890`. If the Google group is restored, this identifier reverts to the standard identifier for a Google group. * `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id\}?uid={uid\}`: A Google Cloud service account that was deleted recently. For example, `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890`. If the service account is undeleted, this identifier reverts to the standard identifier for a service account. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
     */
    deniedPrincipals?: string[] | null;
    /**
     * Specifies the permissions that this rule excludes from the set of denied permissions given by `denied_permissions`. If a permission appears in `denied_permissions` _and_ in `exception_permissions` then it will _not_ be denied. The excluded permissions can be specified using the same syntax as `denied_permissions`.
     */
    exceptionPermissions?: string[] | null;
    /**
     * The identities that are excluded from the deny rule, even if they are listed in the `denied_principals`. For example, you could add a Google group to the `denied_principals`, then exclude specific users who belong to that group. This field can contain the same values as the `denied_principals` field, excluding `principalSet://goog/public:all`, which represents all users on the internet.
     */
    exceptionPrincipals?: string[] | null;
  }
  /**
   * Data for an IAM policy.
   */
  export interface Schema$GoogleIamV2Policy {
    /**
     * A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The time when the `Policy` was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time when the `Policy` was deleted. Empty if the policy is not deleted.
     */
    deleteTime?: string | null;
    /**
     * A user-specified description of the `Policy`. This value can be up to 63 characters.
     */
    displayName?: string | null;
    /**
     * An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored.
     */
    etag?: string | null;
    /**
     * Output only. The kind of the `Policy`. Always contains the value `DenyPolicy`.
     */
    kind?: string | null;
    /**
     * Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point\}/denypolicies/{policy_id\}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.
     */
    name?: string | null;
    /**
     * A list of rules that specify the behavior of the `Policy`. All of the rules should be of the `kind` specified in the `Policy`.
     */
    rules?: Schema$GoogleIamV2PolicyRule[];
    /**
     * Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created.
     */
    uid?: string | null;
    /**
     * Output only. The time when the `Policy` was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A single rule in a `Policy`.
   */
  export interface Schema$GoogleIamV2PolicyRule {
    /**
     * A rule for a deny policy.
     */
    denyRule?: Schema$GoogleIamV2DenyRule;
    /**
     * A user-specified description of the rule. This value can be up to 256 characters.
     */
    description?: string | null;
  }
  /**
   * IAM policy binding resource.
   */
  export interface Schema$GoogleIamV3PolicyBinding {
    /**
     * Optional. User-defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. The condition to apply to the policy binding. When set, the `expression` field in the `Expr` must include from 1 to 10 subexpressions, joined by the "||"(Logical OR), "&&"(Logical AND) or "!"(Logical NOT) operators and cannot contain more than 250 characters. The condition is currently only supported when bound to policies of kind principal access boundary. When the bound policy is a principal access boundary policy, the only supported attributes in any subexpression are `principal.type` and `principal.subject`. An example expression is: "principal.type == 'iam.googleapis.com/ServiceAccount'" or "principal.subject == 'bob@example.com'". Allowed operations for `principal.subject`: - `principal.subject == ` - `principal.subject != ` - `principal.subject in []` - `principal.subject.startsWith()` - `principal.subject.endsWith()` Allowed operations for `principal.type`: - `principal.type == ` - `principal.type != ` - `principal.type in []` Supported principal types are Workspace, Workforce Pool, Workload Pool and Service Account. Allowed string must be one of: - iam.googleapis.com/WorkspaceIdentity - iam.googleapis.com/WorkforcePoolIdentity - iam.googleapis.com/WorkloadPoolIdentity - iam.googleapis.com/ServiceAccount
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Output only. The time when the policy binding was created.
     */
    createTime?: string | null;
    /**
     * Optional. The description of the policy binding. Must be less than or equal to 63 characters.
     */
    displayName?: string | null;
    /**
     * Optional. The etag for the policy binding. If this is provided on update, it must match the server's etag.
     */
    etag?: string | null;
    /**
     * Identifier. The name of the policy binding, in the format `{binding_parent/locations/{location\}/policyBindings/{policy_binding_id\}`. The binding parent is the closest Resource Manager resource (project, folder, or organization) to the binding target. Format: * `projects/{project_id\}/locations/{location\}/policyBindings/{policy_binding_id\}` * `projects/{project_number\}/locations/{location\}/policyBindings/{policy_binding_id\}` * `folders/{folder_id\}/locations/{location\}/policyBindings/{policy_binding_id\}` * `organizations/{organization_id\}/locations/{location\}/policyBindings/{policy_binding_id\}`
     */
    name?: string | null;
    /**
     * Required. Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same organization.
     */
    policy?: string | null;
    /**
     * Immutable. The kind of the policy to attach in this binding. This field must be one of the following: - Left empty (will be automatically set to the policy kind) - The input policy kind
     */
    policyKind?: string | null;
    /**
     * Output only. The globally unique ID of the policy to be bound.
     */
    policyUid?: string | null;
    /**
     * Required. Immutable. The full resource name of the resource to which the policy will be bound. Immutable once set.
     */
    target?: Schema$GoogleIamV3PolicyBindingTarget;
    /**
     * Output only. The globally unique ID of the policy binding. Assigned when the policy binding is created.
     */
    uid?: string | null;
    /**
     * Output only. The time when the policy binding was most recently updated.
     */
    updateTime?: string | null;
  }
  /**
   * The full resource name of the resource to which the policy will be bound. Immutable once set.
   */
  export interface Schema$GoogleIamV3PolicyBindingTarget {
    /**
     * Immutable. The full resource name that's used for principal access boundary policy bindings. The principal set must be directly parented by the policy binding's parent or same as the parent if the target is a project, folder, or organization. Examples: * For bindings parented by an organization: * Organization: `//cloudresourcemanager.googleapis.com/organizations/ORGANIZATION_ID` * Workforce Identity: `//iam.googleapis.com/locations/global/workforcePools/WORKFORCE_POOL_ID` * Workspace Identity: `//iam.googleapis.com/locations/global/workspace/WORKSPACE_ID` * For bindings parented by a folder: * Folder: `//cloudresourcemanager.googleapis.com/folders/FOLDER_ID` * For bindings parented by a project: * Project: * `//cloudresourcemanager.googleapis.com/projects/PROJECT_NUMBER` * `//cloudresourcemanager.googleapis.com/projects/PROJECT_ID` * Workload Identity Pool: `//iam.googleapis.com/projects/PROJECT_NUMBER/locations/LOCATION/workloadIdentityPools/WORKLOAD_POOL_ID`
     */
    principalSet?: string | null;
    /**
     * Immutable. The full resource name that's used for access policy bindings. Examples: * Organization: `//cloudresourcemanager.googleapis.com/organizations/ORGANIZATION_ID` * Folder: `//cloudresourcemanager.googleapis.com/folders/FOLDER_ID` * Project: * `//cloudresourcemanager.googleapis.com/projects/PROJECT_NUMBER` * `//cloudresourcemanager.googleapis.com/projects/PROJECT_ID`
     */
    resource?: string | null;
  }
  /**
   * An IAM principal access boundary policy resource.
   */
  export interface Schema$GoogleIamV3PrincipalAccessBoundaryPolicy {
    /**
     * Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The time when the principal access boundary policy was created.
     */
    createTime?: string | null;
    /**
     * Optional. The details for the principal access boundary policy.
     */
    details?: Schema$GoogleIamV3PrincipalAccessBoundaryPolicyDetails;
    /**
     * Optional. The description of the principal access boundary policy. Must be less than or equal to 63 characters.
     */
    displayName?: string | null;
    /**
     * Optional. The etag for the principal access boundary. If this is provided on update, it must match the server's etag.
     */
    etag?: string | null;
    /**
     * Identifier. The resource name of the principal access boundary policy. The following format is supported: `organizations/{organization_id\}/locations/{location\}/principalAccessBoundaryPolicies/{policy_id\}`
     */
    name?: string | null;
    /**
     * Output only. The globally unique ID of the principal access boundary policy.
     */
    uid?: string | null;
    /**
     * Output only. The time when the principal access boundary policy was most recently updated.
     */
    updateTime?: string | null;
  }
  /**
   * Principal access boundary policy details
   */
  export interface Schema$GoogleIamV3PrincipalAccessBoundaryPolicyDetails {
    /**
     * Optional. The version number (for example, `1` or `latest`) that indicates which permissions are able to be blocked by the policy. If empty, the PAB policy version will be set to the most recent version number at the time of the policy's creation.
     */
    enforcementVersion?: string | null;
    /**
     * Required. A list of principal access boundary policy rules. The number of rules in a policy is limited to 500.
     */
    rules?: Schema$GoogleIamV3PrincipalAccessBoundaryPolicyRule[];
  }
  /**
   * Principal access boundary policy rule that defines the resource boundary.
   */
  export interface Schema$GoogleIamV3PrincipalAccessBoundaryPolicyRule {
    /**
     * Optional. The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.
     */
    description?: string | null;
    /**
     * Required. The access relationship of principals to the resources in this rule.
     */
    effect?: string | null;
    /**
     * Required. A list of Resource Manager resources. If a resource is listed in the rule, then the rule applies for that resource and its descendants. The number of resources in a policy is limited to 500 across all rules in the policy. The following resource types are supported: * Organizations, such as `//cloudresourcemanager.googleapis.com/organizations/123`. * Folders, such as `//cloudresourcemanager.googleapis.com/folders/123`. * Projects, such as `//cloudresourcemanager.googleapis.com/projects/123` or `//cloudresourcemanager.googleapis.com/projects/my-project-id`.
     */
    resources?: string[] | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$GoogleTypeExpr {
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

  export class Resource$Iam {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or doesn't have that permission.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/policytroubleshooter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const policytroubleshooter = google.policytroubleshooter('v3beta');
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
     *   const res = await policytroubleshooter.iam.troubleshoot({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessTuple": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessTuple": {},
     *   //   "allowPolicyExplanation": {},
     *   //   "denyPolicyExplanation": {},
     *   //   "overallAccessState": "my_overallAccessState",
     *   //   "pabPolicyExplanation": {}
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
    troubleshoot(
      params: Params$Resource$Iam$Troubleshoot,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    troubleshoot(
      params?: Params$Resource$Iam$Troubleshoot,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>
    >;
    troubleshoot(
      params: Params$Resource$Iam$Troubleshoot,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    troubleshoot(
      params: Params$Resource$Iam$Troubleshoot,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>
    ): void;
    troubleshoot(
      params: Params$Resource$Iam$Troubleshoot,
      callback: BodyResponseCallback<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>
    ): void;
    troubleshoot(
      callback: BodyResponseCallback<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>
    ): void;
    troubleshoot(
      paramsOrCallback?:
        | Params$Resource$Iam$Troubleshoot
        | BodyResponseCallback<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            url: (rootUrl + '/v3beta/iam:troubleshoot').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Iam$Troubleshoot extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudPolicytroubleshooterIamV3betaTroubleshootIamPolicyRequest;
  }
}
