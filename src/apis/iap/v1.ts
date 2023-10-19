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

export namespace iap_v1 {
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
   * Cloud Identity-Aware Proxy API
   *
   * Controls access to cloud applications running on Google Cloud Platform.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const iap = google.iap('v1');
   * ```
   */
  export class Iap {
    context: APIRequestContext;
    projects: Resource$Projects;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead.
   */
  export interface Schema$AccessDeniedPageSettings {
    /**
     * The URI to be redirected to when access is denied.
     */
    accessDeniedPageUri?: string | null;
    /**
     * Whether to generate a troubleshooting URL on access denied events to this application.
     */
    generateTroubleshootingUri?: boolean | null;
    /**
     * Whether to generate remediation token on access denied events to this application.
     */
    remediationTokenGenerationEnabled?: boolean | null;
  }
  /**
   * Access related settings for IAP protected apps.
   */
  export interface Schema$AccessSettings {
    /**
     * Settings to configure and enable allowed domains.
     */
    allowedDomainsSettings?: Schema$AllowedDomainsSettings;
    /**
     * Configuration to allow cross-origin requests via IAP.
     */
    corsSettings?: Schema$CorsSettings;
    /**
     * GCIP claims and endpoint configurations for 3p identity providers.
     */
    gcipSettings?: Schema$GcipSettings;
    /**
     * Settings to configure IAP's OAuth behavior.
     */
    oauthSettings?: Schema$OAuthSettings;
    /**
     * Settings to configure Policy delegation for apps hosted in tenant projects. INTERNAL_ONLY.
     */
    policyDelegationSettings?: Schema$PolicyDelegationSettings;
    /**
     * Settings to configure reauthentication policies in IAP.
     */
    reauthSettings?: Schema$ReauthSettings;
  }
  /**
   * Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.
   */
  export interface Schema$AllowedDomainsSettings {
    /**
     * List of trusted domains.
     */
    domains?: string[] | null;
    /**
     * Configuration for customers to opt in for the feature.
     */
    enable?: boolean | null;
  }
  /**
   * Wrapper over application specific settings for IAP.
   */
  export interface Schema$ApplicationSettings {
    /**
     * Customization for Access Denied page.
     */
    accessDeniedPageSettings?: Schema$AccessDeniedPageSettings;
    /**
     * Settings to configure attribute propagation.
     */
    attributePropagationSettings?: Schema$AttributePropagationSettings;
    /**
     * The Domain value to set for cookies generated by IAP. This value is not validated by the API, but will be ignored at runtime if invalid.
     */
    cookieDomain?: string | null;
    /**
     * Settings to configure IAP's behavior for a service mesh.
     */
    csmSettings?: Schema$CsmSettings;
  }
  /**
   * Configuration for propagating attributes to applications protected by IAP.
   */
  export interface Schema$AttributePropagationSettings {
    /**
     * Whether the provided attribute propagation settings should be evaluated on user requests. If set to true, attributes returned from the expression will be propagated in the set output credentials.
     */
    enable?: boolean | null;
    /**
     * Raw string CEL expression. Must return a list of attributes. A maximum of 45 attributes can be selected. Expressions can select different attribute types from `attributes`: `attributes.saml_attributes`, `attributes.iap_attributes`. The following functions are supported: - filter `.filter(, )`: Returns a subset of `` where `` is true for every item. - in ` in `: Returns true if `` contains ``. - selectByName `.selectByName()`: Returns the attribute in `` with the given `` name, otherwise returns empty. - emitAs `.emitAs()`: Sets the `` name field to the given `` for propagation in selected output credentials. - strict `.strict()`: Ignores the `x-goog-iap-attr-` prefix for the provided `` when propagating with the `HEADER` output credential, such as request headers. - append `.append()` OR `.append()`: Appends the provided `` or `` to the end of ``. Example expression: `attributes.saml_attributes.filter(x, x.name in ['test']).append(attributes.iap_attributes.selectByName('exact').emitAs('custom').strict())`
     */
    expression?: string | null;
    /**
     * Which output credentials attributes selected by the CEL expression should be propagated in. All attributes will be fully duplicated in each selected output credential.
     */
    outputCredentials?: string[] | null;
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
   * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
   */
  export interface Schema$Brand {
    /**
     * Application name displayed on OAuth consent screen.
     */
    applicationTitle?: string | null;
    /**
     * Output only. Identifier of the brand. NOTE: GCP project number achieves the same brand identification purpose as only one brand per project can be created.
     */
    name?: string | null;
    /**
     * Output only. Whether the brand is only intended for usage inside the G Suite organization only.
     */
    orgInternalOnly?: boolean | null;
    /**
     * Support email displayed on the OAuth consent screen.
     */
    supportEmail?: string | null;
  }
  /**
   * Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization.
   */
  export interface Schema$CorsSettings {
    /**
     * Configuration to allow HTTP OPTIONS calls to skip authorization. If undefined, IAP will not apply any special logic to OPTIONS requests.
     */
    allowHttpOptions?: boolean | null;
  }
  /**
   * Configuration for RCToken generated for service mesh workloads protected by IAP. RCToken are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for service mesh deployments, and can be scoped to a single mesh by configuring the audience field accordingly.
   */
  export interface Schema$CsmSettings {
    /**
     * Audience claim set in the generated RCToken. This value is not validated by IAP.
     */
    rctokenAud?: string | null;
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
   * Allows customers to configure tenant_id for GCIP instance per-app.
   */
  export interface Schema$GcipSettings {
    /**
     * Login page URI associated with the GCIP tenants. Typically, all resources within the same project share the same login page, though it could be overridden at the sub resource level.
     */
    loginPageUri?: string | null;
    /**
     * GCIP tenant ids that are linked to the IAP resource. tenant_ids could be a string beginning with a number character to indicate authenticating with GCIP tenant flow, or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow is used, tenant_ids should only contain one single element, while for tenant flow, tenant_ids can contain multiple elements.
     */
    tenantIds?: string[] | null;
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
   * The IAP configurable settings.
   */
  export interface Schema$IapSettings {
    /**
     * Top level wrapper for all access related setting in IAP
     */
    accessSettings?: Schema$AccessSettings;
    /**
     * Top level wrapper for all application related settings in IAP
     */
    applicationSettings?: Schema$ApplicationSettings;
    /**
     * Required. The resource name of the IAP protected resource.
     */
    name?: string | null;
  }
  /**
   * Contains the data that describes an Identity Aware Proxy owned client.
   */
  export interface Schema$IdentityAwareProxyClient {
    /**
     * Human-friendly name given to the OAuth client.
     */
    displayName?: string | null;
    /**
     * Output only. Unique identifier of the OAuth client.
     */
    name?: string | null;
    /**
     * Output only. Client secret of the OAuth client.
     */
    secret?: string | null;
  }
  /**
   * Response message for ListBrands.
   */
  export interface Schema$ListBrandsResponse {
    /**
     * Brands existing in the project.
     */
    brands?: Schema$Brand[];
  }
  /**
   * Response message for ListIdentityAwareProxyClients.
   */
  export interface Schema$ListIdentityAwareProxyClientsResponse {
    /**
     * Clients existing in the brand.
     */
    identityAwareProxyClients?: Schema$IdentityAwareProxyClient[];
    /**
     * A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response from ListTunnelDestGroups.
   */
  export interface Schema$ListTunnelDestGroupsResponse {
    /**
     * A token that you can send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * TunnelDestGroup existing in the project.
     */
    tunnelDestGroups?: Schema$TunnelDestGroup[];
  }
  /**
   * Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.
   */
  export interface Schema$OAuthSettings {
    /**
     * Domain hint to send as hd=? parameter in OAuth request flow. Enables redirect to primary IDP by skipping Google's login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token's hd claim matches this value since access behavior is managed by IAM policies.
     */
    loginHint?: string | null;
    /**
     * List of client ids allowed to use IAP programmatically.
     */
    programmaticClients?: string[] | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
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
   * PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
   */
  export interface Schema$PolicyDelegationSettings {
    /**
     * Permission to check in IAM.
     */
    iamPermission?: string | null;
    /**
     * The DNS name of the service (e.g. "resourcemanager.googleapis.com"). This should be the domain name part of the full resource names (see https://aip.dev/122#full-resource-names), which is usually the same as IamServiceSpec.service of the service where the resource type is defined.
     */
    iamServiceName?: string | null;
    /**
     * Policy name to be checked
     */
    policyName?: Schema$PolicyName;
    /**
     * IAM resource to check permission on
     */
    resource?: Schema$Resource;
  }
  /**
   * An internal name for an IAM policy, based on the resource to which the policy applies. Not to be confused with a resource's external full resource name. For more information on this distinction, see go/iam-full-resource-names.
   */
  export interface Schema$PolicyName {
    /**
     * Identifies an instance of the type. ID format varies by type. The ID format is defined in the IAM .service file that defines the type, either in path_mapping or in a comment.
     */
    id?: string | null;
    /**
     * For Cloud IAM: The location of the Policy. Must be empty or "global" for Policies owned by global IAM. Must name a region from prodspec/cloud-iam-cloudspec for Regional IAM Policies, see go/iam-faq#where-is-iam-currently-deployed. For Local IAM: This field should be set to "local".
     */
    region?: string | null;
    /**
     * Resource type. Types are defined in IAM's .service files. Valid values for type might be 'gce', 'gcs', 'project', 'account' etc.
     */
    type?: string | null;
  }
  /**
   * Configuration for IAP reauthentication policies.
   */
  export interface Schema$ReauthSettings {
    /**
     * Reauth session lifetime, how long before a user has to reauthenticate again.
     */
    maxAge?: string | null;
    /**
     * Reauth method requested.
     */
    method?: string | null;
    /**
     * How IAP determines the effective policy in cases of hierarchical policies. Policies are merged from higher in the hierarchy to lower in the hierarchy.
     */
    policyType?: string | null;
  }
  /**
   * The request sent to ResetIdentityAwareProxyClientSecret.
   */
  export interface Schema$ResetIdentityAwareProxyClientSecretRequest {}
  export interface Schema$Resource {
    /**
     * The proto or JSON formatted expected next state of the resource, wrapped in a google.protobuf.Any proto, against which the policy rules are evaluated. Services not integrated with custom org policy can omit this field. Services integrated with custom org policy must populate this field for all requests where the API call changes the state of the resource. Custom org policy backend uses these attributes to enforce custom org policies. When a proto is wrapped, it is generally the One Platform API proto. When a JSON string is wrapped, use `google.protobuf.StringValue` for the inner value. It is sufficient to pass just the max set of attributes that are allowed for use in custom constraints; other attributes can be omitted. See go/custom-constraints-org-policy-integration-guide for additional details.
     */
    expectedNextState?: {[key: string]: any} | null;
    /**
     * The service defined labels of the resource on which the conditions will be evaluated. The semantics - including the key names - are vague to IAM. If the effective condition has a reference to a `resource.labels[foo]` construct, IAM consults with this map to retrieve the values associated with `foo` key for Conditions evaluation. If the provided key is not found in the labels map, the condition would evaluate to false. This field is in limited use. If your intended use case is not expected to express resource.labels attribute in IAM Conditions, leave this field empty. Before planning on using this attribute please: * Read go/iam-conditions-labels-comm and ensure your service can meet the data availability and management requirements. * Talk to iam-conditions-eng@ about your use case.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Name of the resource on which conditions will be evaluated. Must use the Relative Resource Name of the resource, which is the URI path of the resource without the leading "/". Examples are "projects/_/buckets/[BUCKET-ID]" for storage buckets or "projects/[PROJECT-ID]/global/firewalls/[FIREWALL-ID]" for a firewall. This field is required for evaluating conditions with rules on resource names. For a `list` permission check, the resource.name value must be set to the parent resource. If the parent resource is a project, this field should be left unset.
     */
    name?: string | null;
    /**
     * The name of the service this resource belongs to. It is configured using the official_service_name of the Service as defined in service configurations under //configs/cloud/resourcetypes. For example, the official_service_name of cloud resource manager service is set as 'cloudresourcemanager.googleapis.com' according to //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml
     */
    service?: string | null;
    /**
     * The public resource type name of the resource on which conditions will be evaluated. It is configured using the official_name of the ResourceType as defined in service configurations under //configs/cloud/resourcetypes. For example, the official_name for GCP projects is set as 'cloudresourcemanager.googleapis.com/Project' according to //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml For details see go/iam-conditions-integration-guide.
     */
    type?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
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
  /**
   * A TunnelDestGroup.
   */
  export interface Schema$TunnelDestGroup {
    /**
     * Unordered list. List of CIDRs that this group applies to.
     */
    cidrs?: string[] | null;
    /**
     * Unordered list. List of FQDNs that this group applies to.
     */
    fqdns?: string[] | null;
    /**
     * Required. Immutable. Identifier for the TunnelDestGroup. Must be unique within the project and contain only lower case letters (a-z) and dashes (-).
     */
    name?: string | null;
  }
  /**
   * API requires a return message, but currently all response strings will fit in the status and public message. In the future, this response can hold AST validation info.
   */
  export interface Schema$ValidateIapAttributeExpressionResponse {}

  export class Resource$Projects {
    context: APIRequestContext;
    brands: Resource$Projects$Brands;
    iap_tunnel: Resource$Projects$Iap_tunnel;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.brands = new Resource$Projects$Brands(this.context);
      this.iap_tunnel = new Resource$Projects$Iap_tunnel(this.context);
    }
  }

  export class Resource$Projects$Brands {
    context: APIRequestContext;
    identityAwareProxyClients: Resource$Projects$Brands$Identityawareproxyclients;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.identityAwareProxyClients =
        new Resource$Projects$Brands$Identityawareproxyclients(this.context);
    }

    /**
     * Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Brands$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Brands$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Brand>;
    create(
      params: Params$Resource$Projects$Brands$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Brands$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Brand>,
      callback: BodyResponseCallback<Schema$Brand>
    ): void;
    create(
      params: Params$Resource$Projects$Brands$Create,
      callback: BodyResponseCallback<Schema$Brand>
    ): void;
    create(callback: BodyResponseCallback<Schema$Brand>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Brands$Create
        | BodyResponseCallback<Schema$Brand>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Brand>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Brand>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Brand> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brands$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brands$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/brands').replace(
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
        createAPIRequest<Schema$Brand>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Brand>(parameters);
      }
    }

    /**
     * Retrieves the OAuth brand of the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Brands$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Brands$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Brand>;
    get(
      params: Params$Resource$Projects$Brands$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Brands$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Brand>,
      callback: BodyResponseCallback<Schema$Brand>
    ): void;
    get(
      params: Params$Resource$Projects$Brands$Get,
      callback: BodyResponseCallback<Schema$Brand>
    ): void;
    get(callback: BodyResponseCallback<Schema$Brand>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Brands$Get
        | BodyResponseCallback<Schema$Brand>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Brand>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Brand>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Brand> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brands$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brands$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
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
        createAPIRequest<Schema$Brand>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Brand>(parameters);
      }
    }

    /**
     * Lists the existing brands for the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Brands$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Brands$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBrandsResponse>;
    list(
      params: Params$Resource$Projects$Brands$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Brands$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListBrandsResponse>,
      callback: BodyResponseCallback<Schema$ListBrandsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Brands$List,
      callback: BodyResponseCallback<Schema$ListBrandsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBrandsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Brands$List
        | BodyResponseCallback<Schema$ListBrandsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBrandsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBrandsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBrandsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brands$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brands$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/brands').replace(
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
        createAPIRequest<Schema$ListBrandsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBrandsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brands$Create
    extends StandardParameters {
    /**
     * Required. GCP Project number/id under which the brand is to be created. In the following format: projects/{project_number/id\}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Brand;
  }
  export interface Params$Resource$Projects$Brands$Get
    extends StandardParameters {
    /**
     * Required. Name of the brand to be fetched. In the following format: projects/{project_number/id\}/brands/{brand\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Brands$List
    extends StandardParameters {
    /**
     * Required. GCP Project number/id. In the following format: projects/{project_number/id\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Brands$Identityawareproxyclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Brands$Identityawareproxyclients$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IdentityAwareProxyClient>;
    create(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    create(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Create,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Brands$Identityawareproxyclients$Create
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$IdentityAwareProxyClient>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brands$Identityawareproxyclients$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Brands$Identityawareproxyclients$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/identityAwareProxyClients').replace(
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
        createAPIRequest<Schema$IdentityAwareProxyClient>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IdentityAwareProxyClient>(parameters);
      }
    }

    /**
     * Deletes an Identity Aware Proxy (IAP) OAuth client. Useful for removing obsolete clients, managing the number of clients in a given project, and cleaning up after tests. Requires that the client is owned by IAP.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Brands$Identityawareproxyclients$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Brands$Identityawareproxyclients$Delete
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
        {}) as Params$Resource$Projects$Brands$Identityawareproxyclients$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Brands$Identityawareproxyclients$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
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
     * Retrieves an Identity Aware Proxy (IAP) OAuth client. Requires that the client is owned by IAP.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Brands$Identityawareproxyclients$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IdentityAwareProxyClient>;
    get(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    get(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Get,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    get(callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Brands$Identityawareproxyclients$Get
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$IdentityAwareProxyClient>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brands$Identityawareproxyclients$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Brands$Identityawareproxyclients$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
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
        createAPIRequest<Schema$IdentityAwareProxyClient>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IdentityAwareProxyClient>(parameters);
      }
    }

    /**
     * Lists the existing clients for the brand.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Brands$Identityawareproxyclients$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListIdentityAwareProxyClientsResponse>;
    list(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>,
      callback: BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$List,
      callback: BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Brands$Identityawareproxyclients$List
        | BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListIdentityAwareProxyClientsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brands$Identityawareproxyclients$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Brands$Identityawareproxyclients$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/identityAwareProxyClients').replace(
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
        createAPIRequest<Schema$ListIdentityAwareProxyClientsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListIdentityAwareProxyClientsResponse>(
          parameters
        );
      }
    }

    /**
     * Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resetSecret(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Resetsecret,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resetSecret(
      params?: Params$Resource$Projects$Brands$Identityawareproxyclients$Resetsecret,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IdentityAwareProxyClient>;
    resetSecret(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Resetsecret,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resetSecret(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Resetsecret,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    resetSecret(
      params: Params$Resource$Projects$Brands$Identityawareproxyclients$Resetsecret,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    resetSecret(
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    resetSecret(
      paramsOrCallback?:
        | Params$Resource$Projects$Brands$Identityawareproxyclients$Resetsecret
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$IdentityAwareProxyClient>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brands$Identityawareproxyclients$Resetsecret;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Brands$Identityawareproxyclients$Resetsecret;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:resetSecret').replace(
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
        createAPIRequest<Schema$IdentityAwareProxyClient>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IdentityAwareProxyClient>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brands$Identityawareproxyclients$Create
    extends StandardParameters {
    /**
     * Required. Path to create the client in. In the following format: projects/{project_number/id\}/brands/{brand\}. The project must belong to a G Suite account.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentityAwareProxyClient;
  }
  export interface Params$Resource$Projects$Brands$Identityawareproxyclients$Delete
    extends StandardParameters {
    /**
     * Required. Name of the Identity Aware Proxy client to be deleted. In the following format: projects/{project_number/id\}/brands/{brand\}/identityAwareProxyClients/{client_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Brands$Identityawareproxyclients$Get
    extends StandardParameters {
    /**
     * Required. Name of the Identity Aware Proxy client to be fetched. In the following format: projects/{project_number/id\}/brands/{brand\}/identityAwareProxyClients/{client_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Brands$Identityawareproxyclients$List
    extends StandardParameters {
    /**
     * The maximum number of clients to return. The service may return fewer than this value. If unspecified, at most 100 clients will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListIdentityAwareProxyClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdentityAwareProxyClients` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Full brand path. In the following format: projects/{project_number/id\}/brands/{brand\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Brands$Identityawareproxyclients$Resetsecret
    extends StandardParameters {
    /**
     * Required. Name of the Identity Aware Proxy client to that will have its secret reset. In the following format: projects/{project_number/id\}/brands/{brand\}/identityAwareProxyClients/{client_id\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetIdentityAwareProxyClientSecretRequest;
  }

  export class Resource$Projects$Iap_tunnel {
    context: APIRequestContext;
    locations: Resource$Projects$Iap_tunnel$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Iap_tunnel$Locations(this.context);
    }
  }

  export class Resource$Projects$Iap_tunnel$Locations {
    context: APIRequestContext;
    destGroups: Resource$Projects$Iap_tunnel$Locations$Destgroups;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.destGroups = new Resource$Projects$Iap_tunnel$Locations$Destgroups(
        this.context
      );
    }
  }

  export class Resource$Projects$Iap_tunnel$Locations$Destgroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new TunnelDestGroup.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TunnelDestGroup>;
    create(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TunnelDestGroup>,
      callback: BodyResponseCallback<Schema$TunnelDestGroup>
    ): void;
    create(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Create,
      callback: BodyResponseCallback<Schema$TunnelDestGroup>
    ): void;
    create(callback: BodyResponseCallback<Schema$TunnelDestGroup>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Create
        | BodyResponseCallback<Schema$TunnelDestGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TunnelDestGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TunnelDestGroup>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TunnelDestGroup> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/destGroups').replace(
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
        createAPIRequest<Schema$TunnelDestGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TunnelDestGroup>(parameters);
      }
    }

    /**
     * Deletes a TunnelDestGroup.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Delete
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
        {}) as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
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
     * Retrieves an existing TunnelDestGroup.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TunnelDestGroup>;
    get(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TunnelDestGroup>,
      callback: BodyResponseCallback<Schema$TunnelDestGroup>
    ): void;
    get(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Get,
      callback: BodyResponseCallback<Schema$TunnelDestGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$TunnelDestGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Get
        | BodyResponseCallback<Schema$TunnelDestGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TunnelDestGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TunnelDestGroup>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TunnelDestGroup> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
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
        createAPIRequest<Schema$TunnelDestGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TunnelDestGroup>(parameters);
      }
    }

    /**
     * Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTunnelDestGroupsResponse>;
    list(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTunnelDestGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListTunnelDestGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$List,
      callback: BodyResponseCallback<Schema$ListTunnelDestGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTunnelDestGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$List
        | BodyResponseCallback<Schema$ListTunnelDestGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTunnelDestGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTunnelDestGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTunnelDestGroupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/destGroups').replace(
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
        createAPIRequest<Schema$ListTunnelDestGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTunnelDestGroupsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a TunnelDestGroup.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TunnelDestGroup>;
    patch(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TunnelDestGroup>,
      callback: BodyResponseCallback<Schema$TunnelDestGroup>
    ): void;
    patch(
      params: Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Patch,
      callback: BodyResponseCallback<Schema$TunnelDestGroup>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TunnelDestGroup>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Patch
        | BodyResponseCallback<Schema$TunnelDestGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TunnelDestGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TunnelDestGroup>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TunnelDestGroup> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
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
        createAPIRequest<Schema$TunnelDestGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TunnelDestGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Create
    extends StandardParameters {
    /**
     * Required. Google Cloud Project ID and location. In the following format: `projects/{project_number/id\}/iap_tunnel/locations/{location\}`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the TunnelDestGroup, which becomes the final component of the resource name. This value must be 4-63 characters, and valid characters are `[a-z]-`.
     */
    tunnelDestGroupId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TunnelDestGroup;
  }
  export interface Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Delete
    extends StandardParameters {
    /**
     * Required. Name of the TunnelDestGroup to delete. In the following format: `projects/{project_number/id\}/iap_tunnel/locations/{location\}/destGroups/{dest_group\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Get
    extends StandardParameters {
    /**
     * Required. Name of the TunnelDestGroup to be fetched. In the following format: `projects/{project_number/id\}/iap_tunnel/locations/{location\}/destGroups/{dest_group\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$List
    extends StandardParameters {
    /**
     * The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 100 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListTunnelDestGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTunnelDestGroups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Google Cloud Project ID and location. In the following format: `projects/{project_number/id\}/iap_tunnel/locations/{location\}`. A `-` can be used for the location to group across all locations.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Iap_tunnel$Locations$Destgroups$Patch
    extends StandardParameters {
    /**
     * Required. Immutable. Identifier for the TunnelDestGroup. Must be unique within the project and contain only lower case letters (a-z) and dashes (-).
     */
    name?: string;
    /**
     * A field mask that specifies which IAP settings to update. If omitted, then all of the settings are updated. See https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TunnelDestGroup;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$V1$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$V1$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$V1$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$V1$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$V1$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$V1$Getiampolicy
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
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
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
     * Gets the IAP settings on a particular IAP protected resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIapSettings(
      params: Params$Resource$V1$Getiapsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIapSettings(
      params?: Params$Resource$V1$Getiapsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IapSettings>;
    getIapSettings(
      params: Params$Resource$V1$Getiapsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIapSettings(
      params: Params$Resource$V1$Getiapsettings,
      options: MethodOptions | BodyResponseCallback<Schema$IapSettings>,
      callback: BodyResponseCallback<Schema$IapSettings>
    ): void;
    getIapSettings(
      params: Params$Resource$V1$Getiapsettings,
      callback: BodyResponseCallback<Schema$IapSettings>
    ): void;
    getIapSettings(callback: BodyResponseCallback<Schema$IapSettings>): void;
    getIapSettings(
      paramsOrCallback?:
        | Params$Resource$V1$Getiapsettings
        | BodyResponseCallback<Schema$IapSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IapSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IapSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$IapSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Getiapsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Getiapsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:iapSettings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$IapSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IapSettings>(parameters);
      }
    }

    /**
     * Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$V1$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$V1$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$V1$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$V1$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$V1$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$V1$Setiampolicy
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
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
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
     * Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$V1$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$V1$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$V1$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$V1$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$V1$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$V1$Testiampermissions
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
        {}) as Params$Resource$V1$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
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

    /**
     * Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateIapSettings(
      params: Params$Resource$V1$Updateiapsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateIapSettings(
      params?: Params$Resource$V1$Updateiapsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IapSettings>;
    updateIapSettings(
      params: Params$Resource$V1$Updateiapsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateIapSettings(
      params: Params$Resource$V1$Updateiapsettings,
      options: MethodOptions | BodyResponseCallback<Schema$IapSettings>,
      callback: BodyResponseCallback<Schema$IapSettings>
    ): void;
    updateIapSettings(
      params: Params$Resource$V1$Updateiapsettings,
      callback: BodyResponseCallback<Schema$IapSettings>
    ): void;
    updateIapSettings(callback: BodyResponseCallback<Schema$IapSettings>): void;
    updateIapSettings(
      paramsOrCallback?:
        | Params$Resource$V1$Updateiapsettings
        | BodyResponseCallback<Schema$IapSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IapSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IapSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$IapSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Updateiapsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Updateiapsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:iapSettings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$IapSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IapSettings>(parameters);
      }
    }

    /**
     * Validates a given CEL expression conforms to IAP restrictions.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    validateAttributeExpression(
      params: Params$Resource$V1$Validateattributeexpression,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    validateAttributeExpression(
      params?: Params$Resource$V1$Validateattributeexpression,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ValidateIapAttributeExpressionResponse>;
    validateAttributeExpression(
      params: Params$Resource$V1$Validateattributeexpression,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validateAttributeExpression(
      params: Params$Resource$V1$Validateattributeexpression,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ValidateIapAttributeExpressionResponse>,
      callback: BodyResponseCallback<Schema$ValidateIapAttributeExpressionResponse>
    ): void;
    validateAttributeExpression(
      params: Params$Resource$V1$Validateattributeexpression,
      callback: BodyResponseCallback<Schema$ValidateIapAttributeExpressionResponse>
    ): void;
    validateAttributeExpression(
      callback: BodyResponseCallback<Schema$ValidateIapAttributeExpressionResponse>
    ): void;
    validateAttributeExpression(
      paramsOrCallback?:
        | Params$Resource$V1$Validateattributeexpression
        | BodyResponseCallback<Schema$ValidateIapAttributeExpressionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ValidateIapAttributeExpressionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ValidateIapAttributeExpressionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ValidateIapAttributeExpressionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Validateattributeexpression;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Validateattributeexpression;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:validateAttributeExpression').replace(
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
        createAPIRequest<Schema$ValidateIapAttributeExpressionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ValidateIapAttributeExpressionResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$V1$Getiampolicy extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$V1$Getiapsettings
    extends StandardParameters {
    /**
     * Required. The resource name for which to retrieve the settings. Authorization: Requires the `getSettings` permission for the associated resource.
     */
    name?: string;
  }
  export interface Params$Resource$V1$Setiampolicy extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$V1$Testiampermissions
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
  export interface Params$Resource$V1$Updateiapsettings
    extends StandardParameters {
    /**
     * Required. The resource name of the IAP protected resource.
     */
    name?: string;
    /**
     * The field mask specifying which IAP settings should be updated. If omitted, then all of the settings are updated. See https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. Note: All IAP reauth settings must always be set together, using the field mask: `iapSettings.accessSettings.reauthSettings`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IapSettings;
  }
  export interface Params$Resource$V1$Validateattributeexpression
    extends StandardParameters {
    /**
     * Required. User input string expression. Should be of the form 'attributes.saml_attributes.filter(attribute, attribute.name in ['{attribute_name\}', '{attribute_name\}'])'
     */
    expression?: string;
    /**
     * Required. The resource name of the IAP protected resource.
     */
    name?: string;
  }
}
