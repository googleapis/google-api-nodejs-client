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

export namespace cloudasset_v1p1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1p1beta1';
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
   * const cloudasset = google.cloudasset('v1p1beta1');
   *
   * @namespace cloudasset
   * @type {Function}
   * @version v1p1beta1
   * @variation v1p1beta1
   * @param {object=} options Options for Cloudasset
   */
  export class Cloudasset {
    context: APIRequestContext;
    iamPolicies: Resource$Iampolicies;
    resources: Resource$Resources;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.iamPolicies = new Resource$Iampolicies(this.context);
      this.resources = new Resource$Resources(this.context);
    }
  }

  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;,           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;,           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
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
   * Explanation about the IAM policy search result.
   */
  export interface Schema$Explanation {
    /**
     * The map from roles to their included permission matching the permission query (e.g. containing `policy.role.permissions:`). A sample role string: &quot;roles/compute.instanceAdmin&quot;. The roles can also be found in the returned `policy` bindings. Note that the map is populated only if requesting with a permission query.
     */
    matchedPermissions?: {[key: string]: Schema$Permissions} | null;
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
   * The result for a IAM Policy search.
   */
  export interface Schema$IamPolicySearchResult {
    /**
     * Explanation about the IAM policy search result. It contains additional information to explain why the search result matches the query.
     */
    explanation?: Schema$Explanation;
    /**
     * The IAM policy directly set on the given resource. Note that the original IAM policy can contain multiple bindings. This only contains the bindings that match the given query. For queries that don&#39;t contain a constrain on policies (e.g. an empty query), this contains all the bindings.
     */
    policy?: Schema$Policy;
    /**
     * The project that the associated GCP resource belongs to, in the form of `projects/{project_number}`. If an IAM policy is set on a resource (like VM instance, Cloud Storage bucket), the project field will indicate the project that contains the resource. If an IAM policy is set on a folder or orgnization, the project field will be empty.
     */
    project?: string | null;
    /**
     * The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) of the resource associated with this IAM policy.
     */
    resource?: string | null;
  }
  /**
   * IAM permissions
   */
  export interface Schema$Permissions {
    /**
     * A list of permissions. A sample permission string: &quot;compute.disk.get&quot;.
     */
    permissions?: string[] | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [             &quot;user:eve@example.com&quot;           ],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Search all IAM policies response.
   */
  export interface Schema$SearchAllIamPoliciesResponse {
    /**
     * Set if there are more results than those appearing in this response; to get the next set of results, call this method again, using this value as the `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * A list of IamPolicy that match the search query. Related information such as the associated resource is returned along with the policy.
     */
    results?: Schema$IamPolicySearchResult[];
  }
  /**
   * Search all resources response.
   */
  export interface Schema$SearchAllResourcesResponse {
    /**
     * If there are more results than those appearing in this response, then `next_page_token` is included.  To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * A list of resource that match the search query.
     */
    results?: Schema$StandardResourceMetadata[];
  }
  /**
   * The standard metadata of a cloud resource.
   */
  export interface Schema$StandardResourceMetadata {
    /**
     * Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc.
     */
    additionalAttributes?: string[] | null;
    /**
     * The type of this resource. For example: &quot;compute.googleapis.com/Disk&quot;.
     */
    assetType?: string | null;
    /**
     * One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes.
     */
    description?: string | null;
    /**
     * The display name of this resource.
     */
    displayName?: string | null;
    /**
     * Labels associated with this resource. See [Labelling and grouping GCP resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Location can be &quot;global&quot;, regional like &quot;us-east1&quot;, or zonal like &quot;us-west1-b&quot;.
     */
    location?: string | null;
    /**
     * The full resource name. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.
     */
    name?: string | null;
    /**
     * Network tags associated with this resource. Like labels, network tags are a type of annotations used to group GCP resources. See [Labelling GCP resources](lhttps://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information.
     */
    networkTags?: string[] | null;
    /**
     * The project that this resource belongs to, in the form of `projects/{project_number}`.
     */
    project?: string | null;
  }

  export class Resource$Iampolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudasset.iamPolicies.searchAll
     * @desc Searches all the IAM policies within a given accessible CRM scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloud.assets.SearchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected.
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
     * const cloudasset = google.cloudasset('v1p1beta1');
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
     *   const res = await cloudasset.iamPolicies.searchAll({
     *     // Optional. The page size for search result pagination. Page size is capped at 500 even
     *     // if a larger value is given. If set to zero, server will pick an appropriate
     *     // default. Returned results may be fewer than requested. When this happens,
     *     // there could be more results as long as `next_page_token` is returned.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, retrieve the next batch of results from the preceding call to
     *     // this method. `page_token` must be the value of `next_page_token` from the
     *     // previous response. The values of all other method parameters must be
     *     // identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Optional. The query statement. Examples:
     *     //
     *     // * "policy:myuser@mydomain.com"
     *     // * "policy:(myuser@mydomain.com viewer)"
     *     query: 'placeholder-value',
     *     // Required. The relative name of an asset. The search is limited to the resources
     *     // within the `scope`. The allowed value must be:
     *     //
     *     // * Organization number (such as "organizations/123")
     *     // * Folder number(such as "folders/1234")
     *     // * Project number (such as "projects/12345")
     *     // * Project id (such as "projects/abc")
     *     scope: '[^/]+/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "results": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudasset.iamPolicies.searchAll
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.
     * @param {string=} params.pageToken Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters must be identical to those in the previous call.
     * @param {string=} params.query Optional. The query statement. Examples:  * "policy:myuser@mydomain.com" * "policy:(myuser@mydomain.com viewer)"
     * @param {string} params.scope Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be:  * Organization number (such as "organizations/123") * Folder number(such as "folders/1234") * Project number (such as "projects/12345") * Project id (such as "projects/abc")
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchAll(
      params: Params$Resource$Iampolicies$Searchall,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchAll(
      params?: Params$Resource$Iampolicies$Searchall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchAllIamPoliciesResponse>;
    searchAll(
      params: Params$Resource$Iampolicies$Searchall,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchAll(
      params: Params$Resource$Iampolicies$Searchall,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchAllIamPoliciesResponse>,
      callback: BodyResponseCallback<Schema$SearchAllIamPoliciesResponse>
    ): void;
    searchAll(
      params: Params$Resource$Iampolicies$Searchall,
      callback: BodyResponseCallback<Schema$SearchAllIamPoliciesResponse>
    ): void;
    searchAll(
      callback: BodyResponseCallback<Schema$SearchAllIamPoliciesResponse>
    ): void;
    searchAll(
      paramsOrCallback?:
        | Params$Resource$Iampolicies$Searchall
        | BodyResponseCallback<Schema$SearchAllIamPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchAllIamPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchAllIamPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchAllIamPoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Iampolicies$Searchall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Iampolicies$Searchall;
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
              rootUrl + '/v1p1beta1/{+scope}/iamPolicies:searchAll'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scope'],
        pathParams: ['scope'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchAllIamPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SearchAllIamPoliciesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Iampolicies$Searchall
    extends StandardParameters {
    /**
     * Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.
     */
    pageSize?: number;
    /**
     * Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Optional. The query statement. Examples:  * "policy:myuser@mydomain.com" * "policy:(myuser@mydomain.com viewer)"
     */
    query?: string;
    /**
     * Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be:  * Organization number (such as "organizations/123") * Folder number(such as "folders/1234") * Project number (such as "projects/12345") * Project id (such as "projects/abc")
     */
    scope?: string;
  }

  export class Resource$Resources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudasset.resources.searchAll
     * @desc Searches all the resources within a given accessible CRM scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.
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
     * const cloudasset = google.cloudasset('v1p1beta1');
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
     *   const res = await cloudasset.resources.searchAll({
     *     // Optional. A list of asset types that this request searches for. If empty, it will
     *     // search all the supported asset types.
     *     assetTypes: 'placeholder-value',
     *     // Optional. A comma separated list of fields specifying the sorting order of the
     *     // results. The default order is ascending. Add ` DESC` after the field name
     *     // to indicate descending order. Redundant space characters are ignored. For
     *     // example, `  location DESC ,  name  `.
     *     orderBy: 'placeholder-value',
     *     // Optional. The page size for search result pagination. Page size is capped at 500 even
     *     // if a larger value is given. If set to zero, server will pick an appropriate
     *     // default. Returned results may be fewer than requested. When this happens,
     *     // there could be more results as long as `next_page_token` is returned.
     *     pageSize: 'placeholder-value',
     *     // Optional. If present, then retrieve the next batch of results from the preceding call
     *     // to this method.  `page_token` must be the value of `next_page_token` from
     *     // the previous response. The values of all other method parameters, must be
     *     // identical to those in the previous call.
     *     pageToken: 'placeholder-value',
     *     // Optional. The query statement.
     *     query: 'placeholder-value',
     *     // Required. The relative name of an asset. The search is limited to the resources
     *     // within the `scope`. The allowed value must be:
     *     //
     *     // * Organization number (such as "organizations/123")
     *     // * Folder number(such as "folders/1234")
     *     // * Project number (such as "projects/12345")
     *     // * Project id (such as "projects/abc")
     *     scope: '[^/]+/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "results": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cloudasset.resources.searchAll
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.assetTypes Optional. A list of asset types that this request searches for. If empty, it will search all the supported asset types.
     * @param {string=} params.orderBy Optional. A comma separated list of fields specifying the sorting order of the results. The default order is ascending. Add ` DESC` after the field name to indicate descending order. Redundant space characters are ignored. For example, `  location DESC ,  name  `.
     * @param {integer=} params.pageSize Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.
     * @param {string=} params.query Optional. The query statement.
     * @param {string} params.scope Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be:  * Organization number (such as "organizations/123") * Folder number(such as "folders/1234") * Project number (such as "projects/12345") * Project id (such as "projects/abc")
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchAll(
      params: Params$Resource$Resources$Searchall,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchAll(
      params?: Params$Resource$Resources$Searchall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchAllResourcesResponse>;
    searchAll(
      params: Params$Resource$Resources$Searchall,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchAll(
      params: Params$Resource$Resources$Searchall,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchAllResourcesResponse>,
      callback: BodyResponseCallback<Schema$SearchAllResourcesResponse>
    ): void;
    searchAll(
      params: Params$Resource$Resources$Searchall,
      callback: BodyResponseCallback<Schema$SearchAllResourcesResponse>
    ): void;
    searchAll(
      callback: BodyResponseCallback<Schema$SearchAllResourcesResponse>
    ): void;
    searchAll(
      paramsOrCallback?:
        | Params$Resource$Resources$Searchall
        | BodyResponseCallback<Schema$SearchAllResourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchAllResourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchAllResourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchAllResourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Resources$Searchall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Resources$Searchall;
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
            url: (rootUrl + '/v1p1beta1/{+scope}/resources:searchAll').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['scope'],
        pathParams: ['scope'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchAllResourcesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SearchAllResourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Resources$Searchall
    extends StandardParameters {
    /**
     * Optional. A list of asset types that this request searches for. If empty, it will search all the supported asset types.
     */
    assetTypes?: string[];
    /**
     * Optional. A comma separated list of fields specifying the sorting order of the results. The default order is ascending. Add ` DESC` after the field name to indicate descending order. Redundant space characters are ignored. For example, `  location DESC ,  name  `.
     */
    orderBy?: string;
    /**
     * Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Optional. The query statement.
     */
    query?: string;
    /**
     * Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be:  * Organization number (such as "organizations/123") * Folder number(such as "folders/1234") * Project number (such as "projects/12345") * Project id (such as "projects/abc")
     */
    scope?: string;
  }
}
