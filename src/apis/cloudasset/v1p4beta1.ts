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

export namespace cloudasset_v1p4beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1p4beta1';
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
   * const cloudasset = google.cloudasset('v1p4beta1');
   *
   * @namespace cloudasset
   * @type {Function}
   * @version v1p4beta1
   * @variation v1p4beta1
   * @param {object=} options Options for Cloudasset
   */
  export class Cloudasset {
    context: APIRequestContext;
    v1p4beta1: Resource$V1p4beta1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.v1p4beta1 = new Resource$V1p4beta1(this.context);
    }
  }

  /**
   * Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include identities and resources matching any of them.
   */
  export interface Schema$AccessSelector {
    /**
     * Optional. The permissions to appear in result.
     */
    permissions?: string[] | null;
    /**
     * Optional. The roles to appear in result.
     */
    roles?: string[] | null;
  }
  /**
   * A response message for AssetService.AnalyzeIamPolicy.
   */
  export interface Schema$AnalyzeIamPolicyResponse {
    /**
     * Represents whether all entries in the main_analysis and service_account_impersonation_analysis have been fully explored to answer the query in the request.
     */
    fullyExplored?: boolean | null;
    /**
     * The main analysis that matches the original request.
     */
    mainAnalysis?: Schema$IamPolicyAnalysis;
    /**
     * A list of non-critical errors happened during the request handling to explain why `fully_explored` is false, or empty if no error happened.
     */
    nonCriticalErrors?: Schema$GoogleCloudAssetV1p4beta1AnalysisState[];
    /**
     * The service account impersonation analysis if AnalyzeIamPolicyRequest.analyze_service_account_impersonation is enabled.
     */
    serviceAccountImpersonationAnalysis?: Schema$IamPolicyAnalysis[];
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
   * A request message for AssetService.ExportIamPolicyAnalysis.
   */
  export interface Schema$ExportIamPolicyAnalysisRequest {
    /**
     * Required. The request query.
     */
    analysisQuery?: Schema$IamPolicyAnalysisQuery;
    /**
     * Optional. The request options.
     */
    options?: Schema$Options;
    /**
     * Required. Output configuration indicating where the results will be output to.
     */
    outputConfig?: Schema$IamPolicyAnalysisOutputConfig;
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
   * A Cloud Storage location.
   */
  export interface Schema$GcsDestination {
    /**
     * Required. The uri of the Cloud Storage object. It&#39;s the same uri that is used by gsutil. For example: &quot;gs://bucket_name/object_name&quot;. See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information.
     */
    uri?: string | null;
  }
  /**
   * An IAM role or permission under analysis.
   */
  export interface Schema$GoogleCloudAssetV1p4beta1Access {
    /**
     * The analysis state of this access.
     */
    analysisState?: Schema$GoogleCloudAssetV1p4beta1AnalysisState;
    /**
     * The permission.
     */
    permission?: string | null;
    /**
     * The role.
     */
    role?: string | null;
  }
  /**
   * An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry.  NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations.  For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3;  This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3]
   */
  export interface Schema$GoogleCloudAssetV1p4beta1AccessControlList {
    /**
     * The accesses that match one of the following conditions: - The access_selector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding&#39;s role.
     */
    accesses?: Schema$GoogleCloudAssetV1p4beta1Access[];
    /**
     * Resource edges of the graph starting from the policy attached resource to any descendant resources. The Edge.source_node contains the full resource name of a parent resource and Edge.target_node contains the full resource name of a child resource. This field is present only if the output_resource_edges option is enabled in request.
     */
    resourceEdges?: Schema$GoogleCloudAssetV1p4beta1Edge[];
    /**
     * The resources that match one of the following conditions: - The resource_selector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource.
     */
    resources?: Schema$GoogleCloudAssetV1p4beta1Resource[];
  }
  /**
   * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
   */
  export interface Schema$GoogleCloudAssetV1p4beta1AnalysisState {
    /**
     * The human-readable description of the cause of failure.
     */
    cause?: string | null;
    /**
     * The Google standard error code that best describes the state. For example: - OK means the analysis on this entity has been successfully finished; - PERMISSION_DENIED means an access denied error is encountered; - DEADLINE_EXCEEDED means the analysis on this entity hasn&#39;t been started in time;
     */
    code?: string | null;
  }
  /**
   * A directional edge.
   */
  export interface Schema$GoogleCloudAssetV1p4beta1Edge {
    /**
     * The source node of the edge.
     */
    sourceNode?: string | null;
    /**
     * The target node of the edge.
     */
    targetNode?: string | null;
  }
  /**
   * An identity under analysis.
   */
  export interface Schema$GoogleCloudAssetV1p4beta1Identity {
    /**
     * The analysis state of this identity.
     */
    analysisState?: Schema$GoogleCloudAssetV1p4beta1AnalysisState;
    /**
     * The identity name in any form of members appear in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding), such as: - user:foo@google.com - group:group1@google.com - serviceAccount:s1@prj1.iam.gserviceaccount.com - projectOwner:some_project_id - domain:google.com - allUsers - etc.
     */
    name?: string | null;
  }
  export interface Schema$GoogleCloudAssetV1p4beta1IdentityList {
    /**
     * Group identity edges of the graph starting from the binding&#39;s group members to any node of the identities. The Edge.source_node contains a group, such as &quot;group:parent@google.com&quot;. The Edge.target_node contains a member of the group, such as &quot;group:child@google.com&quot; or &quot;user:foo@google.com&quot;. This field is present only if the output_group_edges option is enabled in request.
     */
    groupEdges?: Schema$GoogleCloudAssetV1p4beta1Edge[];
    /**
     * Only the identities that match one of the following conditions will be presented: - The identity_selector, if it is specified in request; - Otherwise, identities reachable from the policy binding&#39;s members.
     */
    identities?: Schema$GoogleCloudAssetV1p4beta1Identity[];
  }
  /**
   * A Google Cloud resource under analysis.
   */
  export interface Schema$GoogleCloudAssetV1p4beta1Resource {
    /**
     * The analysis state of this resource.
     */
    analysisState?: Schema$GoogleCloudAssetV1p4beta1AnalysisState;
    /**
     * The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format)
     */
    fullResourceName?: string | null;
  }
  /**
   * An analysis message to group the query and results.
   */
  export interface Schema$IamPolicyAnalysis {
    /**
     * The analysis query.
     */
    analysisQuery?: Schema$IamPolicyAnalysisQuery;
    /**
     * A list of IamPolicyAnalysisResult that matches the analysis query, or empty if no result is found.
     */
    analysisResults?: Schema$IamPolicyAnalysisResult[];
    /**
     * Represents whether all entries in the analysis_results have been fully explored to answer the query.
     */
    fullyExplored?: boolean | null;
  }
  /**
   * Output configuration for export IAM policy analysis destination.
   */
  export interface Schema$IamPolicyAnalysisOutputConfig {
    /**
     * Destination on Cloud Storage.
     */
    gcsDestination?: Schema$GcsDestination;
  }
  /**
   * IAM policy analysis query message.
   */
  export interface Schema$IamPolicyAnalysisQuery {
    /**
     * Optional. Specifies roles or permissions for analysis. This is optional.
     */
    accessSelector?: Schema$AccessSelector;
    /**
     * Optional. Specifies an identity for analysis. Either ResourceSelector or IdentitySelector must be specified.
     */
    identitySelector?: Schema$IdentitySelector;
    /**
     * Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as &quot;organizations/123&quot;) or a folder number (such as &quot;folders/123&quot;).  To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).  To know how to get folder id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
     */
    parent?: string | null;
    /**
     * Optional. Specifies a resource for analysis. Either ResourceSelector or IdentitySelector must be specified.
     */
    resourceSelector?: Schema$ResourceSelector;
  }
  /**
   * IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.
   */
  export interface Schema$IamPolicyAnalysisResult {
    /**
     * The access control lists derived from the iam_binding that match or potentially match resource and access selectors specified in the request.
     */
    accessControlLists?: Schema$GoogleCloudAssetV1p4beta1AccessControlList[];
    /**
     * The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the resource to which the iam_binding policy attaches.
     */
    attachedResourceFullName?: string | null;
    /**
     * Represents whether all analyses on the iam_binding have successfully finished.
     */
    fullyExplored?: boolean | null;
    /**
     * The Cloud IAM policy binding under analysis.
     */
    iamBinding?: Schema$Binding;
    /**
     * The identity list derived from members of the iam_binding that match or potentially match identity selector specified in the request.
     */
    identityList?: Schema$GoogleCloudAssetV1p4beta1IdentityList;
  }
  /**
   * Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly.
   */
  export interface Schema$IdentitySelector {
    /**
     * Required. The identity appear in the form of members in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding).  The examples of supported forms are: &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;, &quot;domain:google.com&quot;, &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;.  Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity.
     */
    identity?: string | null;
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
   * Contains request options.
   */
  export interface Schema$Options {
    /**
     * Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed.  For example, if the request analyzes for which resources user A has permission P, and there&#39;s an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there&#39;s another IAM policy states service account SA has permission P to a GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis.  Another example, if the request analyzes for who has permission P to a GCP folder F, and there&#39;s an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there&#39;s another IAM policy states service account SA has permission P to the GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis.  Default is false.
     */
    analyzeServiceAccountImpersonation?: boolean | null;
    /**
     * Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding.  If identity_selector is specified, the identity in the result will be determined by the selector, and this flag will have no effect.  Default is false.
     */
    expandGroups?: boolean | null;
    /**
     * Optional. If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy.  For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a GCP folder, the results will also include resources in that folder with permission P.  If resource_selector is specified, the resource section of the result will be determined by the selector, and this flag will have no effect. Default is false.
     */
    expandResources?: boolean | null;
    /**
     * Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions.  If access_selector is specified, the access section of the result will be determined by the selector, and this flag will have no effect.  Default is false.
     */
    expandRoles?: boolean | null;
    /**
     * Optional. If true, the result will output group identity edges, starting from the binding&#39;s group members, to any expanded identities. Default is false.
     */
    outputGroupEdges?: boolean | null;
    /**
     * Optional. If true, the result will output resource edges, starting from the policy attached resource, to any expanded resources. Default is false.
     */
    outputResourceEdges?: boolean | null;
  }
  /**
   * Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects.
   */
  export interface Schema$ResourceSelector {
    /**
     * Required. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types).
     */
    fullResourceName?: string | null;
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

  export class Resource$V1p4beta1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudasset.analyzeIamPolicy
     * @desc Analyzes IAM policies to answer which identities have what accesses on which resources.
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
     * const cloudasset = google.cloudasset('v1p4beta1');
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
     *   const res = await cloudasset.analyzeIamPolicy({
     *     // Optional. The permissions to appear in result.
     *     'analysisQuery.accessSelector.permissions': 'placeholder-value',
     *     // Optional. The roles to appear in result.
     *     'analysisQuery.accessSelector.roles': 'placeholder-value',
     *     // Required. The identity appear in the form of members in
     *     // [IAM policy
     *     // binding](https://cloud.google.com/iam/reference/rest/v1/Binding).
     *     //
     *     // The examples of supported forms are:
     *     // "user:mike@example.com",
     *     // "group:admins@example.com",
     *     // "domain:google.com",
     *     // "serviceAccount:my-project-id@appspot.gserviceaccount.com".
     *     //
     *     // Notice that wildcard characters (such as * and ?) are not supported.
     *     // You must give a specific identity.
     *     'analysisQuery.identitySelector.identity': 'placeholder-value',
     *     // Required. The [full resource
     *     // name](https://cloud.google.com/asset-inventory/docs/resource-name-format)
     *     // of a resource of [supported resource
     *     // types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types).
     *     'analysisQuery.resourceSelector.fullResourceName': 'placeholder-value',
     *     // Optional. If true, the response will include access analysis from identities to
     *     // resources via service account impersonation. This is a very expensive
     *     // operation, because many derived queries will be executed. We highly
     *     // recommend you use AssetService.ExportIamPolicyAnalysis rpc instead.
     *     //
     *     // For example, if the request analyzes for which resources user A has
     *     // permission P, and there's an IAM policy states user A has
     *     // iam.serviceAccounts.getAccessToken permission to a service account SA,
     *     // and there's another IAM policy states service account SA has permission P
     *     // to a GCP folder F, then user A potentially has access to the GCP folder
     *     // F. And those advanced analysis results will be included in
     *     // AnalyzeIamPolicyResponse.service_account_impersonation_analysis.
     *     //
     *     // Another example, if the request analyzes for who has
     *     // permission P to a GCP folder F, and there's an IAM policy states user A
     *     // has iam.serviceAccounts.actAs permission to a service account SA, and
     *     // there's another IAM policy states service account SA has permission P to
     *     // the GCP folder F, then user A potentially has access to the GCP folder
     *     // F. And those advanced analysis results will be included in
     *     // AnalyzeIamPolicyResponse.service_account_impersonation_analysis.
     *     //
     *     // Default is false.
     *     'options.analyzeServiceAccountImpersonation': 'placeholder-value',
     *     // Optional. Amount of time executable has to complete.  See JSON representation of
     *     // [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json).
     *     //
     *     // If this field is set with a value less than the RPC deadline, and the
     *     // execution of your query hasn't finished in the specified
     *     // execution timeout,  you will get a response with partial result.
     *     // Otherwise, your query's execution will continue until the RPC deadline.
     *     // If it's not finished until then, you will get a  DEADLINE_EXCEEDED error.
     *     //
     *     // Default is empty.
     *     'options.executionTimeout': 'placeholder-value',
     *     // Optional. If true, the identities section of the result will expand any
     *     // Google groups appearing in an IAM policy binding.
     *     //
     *     // If identity_selector is specified, the identity in the result will
     *     // be determined by the selector, and this flag will have no effect.
     *     //
     *     // Default is false.
     *     'options.expandGroups': 'placeholder-value',
     *     // Optional. If true, the resource section of the result will expand any
     *     // resource attached to an IAM policy to include resources lower in the
     *     // resource hierarchy.
     *     //
     *     // For example, if the request analyzes for which resources user A has
     *     // permission P, and the results include an IAM policy with P on a GCP
     *     // folder, the results will also include resources in that folder with
     *     // permission P.
     *     //
     *     // If resource_selector is specified, the resource section of the result
     *     // will be determined by the selector, and this flag will have no effect.
     *     // Default is false.
     *     'options.expandResources': 'placeholder-value',
     *     // Optional. If true, the access section of result will expand any roles
     *     // appearing in IAM policy bindings to include their permissions.
     *     //
     *     // If access_selector is specified, the access section of the result
     *     // will be determined by the selector, and this flag will have no effect.
     *     //
     *     // Default is false.
     *     'options.expandRoles': 'placeholder-value',
     *     // Optional. If true, the result will output group identity edges, starting
     *     // from the binding's group members, to any expanded identities.
     *     // Default is false.
     *     'options.outputGroupEdges': 'placeholder-value',
     *     // Optional. If true, the result will output resource edges, starting
     *     // from the policy attached resource, to any expanded resources.
     *     // Default is false.
     *     'options.outputResourceEdges': 'placeholder-value',
     *     // Required. The relative name of the root asset. Only resources and IAM policies within
     *     // the parent will be analyzed. This can only be an organization number (such
     *     // as "organizations/123") or a folder number (such as "folders/123").
     *     //
     *     // To know how to get organization id, visit [here
     *     // ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).
     *     //
     *     // To know how to get folder id, visit [here
     *     // ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
     *     parent: '[^/]+/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fullyExplored": false,
     *   //   "mainAnalysis": {},
     *   //   "nonCriticalErrors": [],
     *   //   "serviceAccountImpersonationAnalysis": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudasset.analyzeIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.analysisQuery.accessSelector.permissions Optional. The permissions to appear in result.
     * @param {string=} params.analysisQuery.accessSelector.roles Optional. The roles to appear in result.
     * @param {string=} params.analysisQuery.identitySelector.identity Required. The identity appear in the form of members in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding).  The examples of supported forms are: "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com".  Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity.
     * @param {string=} params.analysisQuery.resourceSelector.fullResourceName Required. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types).
     * @param {boolean=} params.options.analyzeServiceAccountImpersonation Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AssetService.ExportIamPolicyAnalysis rpc instead.  For example, if the request analyzes for which resources user A has permission P, and there's an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there's another IAM policy states service account SA has permission P to a GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis.  Another example, if the request analyzes for who has permission P to a GCP folder F, and there's an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there's another IAM policy states service account SA has permission P to the GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis.  Default is false.
     * @param {string=} params.options.executionTimeout Optional. Amount of time executable has to complete.  See JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json).  If this field is set with a value less than the RPC deadline, and the execution of your query hasn't finished in the specified execution timeout,  you will get a response with partial result. Otherwise, your query's execution will continue until the RPC deadline. If it's not finished until then, you will get a  DEADLINE_EXCEEDED error.  Default is empty.
     * @param {boolean=} params.options.expandGroups Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding.  If identity_selector is specified, the identity in the result will be determined by the selector, and this flag will have no effect.  Default is false.
     * @param {boolean=} params.options.expandResources Optional. If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy.  For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a GCP folder, the results will also include resources in that folder with permission P.  If resource_selector is specified, the resource section of the result will be determined by the selector, and this flag will have no effect. Default is false.
     * @param {boolean=} params.options.expandRoles Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions.  If access_selector is specified, the access section of the result will be determined by the selector, and this flag will have no effect.  Default is false.
     * @param {boolean=} params.options.outputGroupEdges Optional. If true, the result will output group identity edges, starting from the binding's group members, to any expanded identities. Default is false.
     * @param {boolean=} params.options.outputResourceEdges Optional. If true, the result will output resource edges, starting from the policy attached resource, to any expanded resources. Default is false.
     * @param {string} params.parent Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123") or a folder number (such as "folders/123").  To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).  To know how to get folder id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeIamPolicy(
      params: Params$Resource$V1p4beta1$Analyzeiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    analyzeIamPolicy(
      params?: Params$Resource$V1p4beta1$Analyzeiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyzeIamPolicyResponse>;
    analyzeIamPolicy(
      params: Params$Resource$V1p4beta1$Analyzeiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeIamPolicy(
      params: Params$Resource$V1p4beta1$Analyzeiampolicy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeIamPolicyResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeIamPolicyResponse>
    ): void;
    analyzeIamPolicy(
      params: Params$Resource$V1p4beta1$Analyzeiampolicy,
      callback: BodyResponseCallback<Schema$AnalyzeIamPolicyResponse>
    ): void;
    analyzeIamPolicy(
      callback: BodyResponseCallback<Schema$AnalyzeIamPolicyResponse>
    ): void;
    analyzeIamPolicy(
      paramsOrCallback?:
        | Params$Resource$V1p4beta1$Analyzeiampolicy
        | BodyResponseCallback<Schema$AnalyzeIamPolicyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeIamPolicyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeIamPolicyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnalyzeIamPolicyResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1p4beta1$Analyzeiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1p4beta1$Analyzeiampolicy;
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
            url: (rootUrl + '/v1p4beta1/{+parent}:analyzeIamPolicy').replace(
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
        createAPIRequest<Schema$AnalyzeIamPolicyResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeIamPolicyResponse>(parameters);
      }
    }

    /**
     * cloudasset.exportIamPolicyAnalysis
     * @desc Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.
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
     * const cloudasset = google.cloudasset('v1p4beta1');
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
     *   const res = await cloudasset.exportIamPolicyAnalysis({
     *     // Required. The relative name of the root asset. Only resources and IAM policies within
     *     // the parent will be analyzed. This can only be an organization number (such
     *     // as "organizations/123") or a folder number (such as "folders/123").
     *     //
     *     // To know how to get organization id, visit [here
     *     // ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).
     *     //
     *     // To know how to get folder id, visit [here
     *     // ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
     *     parent: '[^/]+/[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "analysisQuery": {},
     *       //   "options": {},
     *       //   "outputConfig": {}
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
     * @alias cloudasset.exportIamPolicyAnalysis
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123") or a folder number (such as "folders/123").  To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).  To know how to get folder id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
     * @param {().ExportIamPolicyAnalysisRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    exportIamPolicyAnalysis(
      params: Params$Resource$V1p4beta1$Exportiampolicyanalysis,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    exportIamPolicyAnalysis(
      params?: Params$Resource$V1p4beta1$Exportiampolicyanalysis,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    exportIamPolicyAnalysis(
      params: Params$Resource$V1p4beta1$Exportiampolicyanalysis,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportIamPolicyAnalysis(
      params: Params$Resource$V1p4beta1$Exportiampolicyanalysis,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    exportIamPolicyAnalysis(
      params: Params$Resource$V1p4beta1$Exportiampolicyanalysis,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    exportIamPolicyAnalysis(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    exportIamPolicyAnalysis(
      paramsOrCallback?:
        | Params$Resource$V1p4beta1$Exportiampolicyanalysis
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1p4beta1$Exportiampolicyanalysis;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1p4beta1$Exportiampolicyanalysis;
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
            url: (
              rootUrl + '/v1p4beta1/{+parent}:exportIamPolicyAnalysis'
            ).replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$V1p4beta1$Analyzeiampolicy
    extends StandardParameters {
    /**
     * Optional. The permissions to appear in result.
     */
    'analysisQuery.accessSelector.permissions'?: string[];
    /**
     * Optional. The roles to appear in result.
     */
    'analysisQuery.accessSelector.roles'?: string[];
    /**
     * Required. The identity appear in the form of members in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding).  The examples of supported forms are: "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com".  Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity.
     */
    'analysisQuery.identitySelector.identity'?: string;
    /**
     * Required. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types).
     */
    'analysisQuery.resourceSelector.fullResourceName'?: string;
    /**
     * Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AssetService.ExportIamPolicyAnalysis rpc instead.  For example, if the request analyzes for which resources user A has permission P, and there's an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there's another IAM policy states service account SA has permission P to a GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis.  Another example, if the request analyzes for who has permission P to a GCP folder F, and there's an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there's another IAM policy states service account SA has permission P to the GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis.  Default is false.
     */
    'options.analyzeServiceAccountImpersonation'?: boolean;
    /**
     * Optional. Amount of time executable has to complete.  See JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json).  If this field is set with a value less than the RPC deadline, and the execution of your query hasn't finished in the specified execution timeout,  you will get a response with partial result. Otherwise, your query's execution will continue until the RPC deadline. If it's not finished until then, you will get a  DEADLINE_EXCEEDED error.  Default is empty.
     */
    'options.executionTimeout'?: string;
    /**
     * Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding.  If identity_selector is specified, the identity in the result will be determined by the selector, and this flag will have no effect.  Default is false.
     */
    'options.expandGroups'?: boolean;
    /**
     * Optional. If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy.  For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a GCP folder, the results will also include resources in that folder with permission P.  If resource_selector is specified, the resource section of the result will be determined by the selector, and this flag will have no effect. Default is false.
     */
    'options.expandResources'?: boolean;
    /**
     * Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions.  If access_selector is specified, the access section of the result will be determined by the selector, and this flag will have no effect.  Default is false.
     */
    'options.expandRoles'?: boolean;
    /**
     * Optional. If true, the result will output group identity edges, starting from the binding's group members, to any expanded identities. Default is false.
     */
    'options.outputGroupEdges'?: boolean;
    /**
     * Optional. If true, the result will output resource edges, starting from the policy attached resource, to any expanded resources. Default is false.
     */
    'options.outputResourceEdges'?: boolean;
    /**
     * Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123") or a folder number (such as "folders/123").  To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).  To know how to get folder id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
     */
    parent?: string;
  }
  export interface Params$Resource$V1p4beta1$Exportiampolicyanalysis
    extends StandardParameters {
    /**
     * Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123") or a folder number (such as "folders/123").  To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).  To know how to get folder id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportIamPolicyAnalysisRequest;
  }
}
