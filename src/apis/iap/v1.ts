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

export namespace iap_v1 {
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
   * Cloud Identity-Aware Proxy API
   *
   * Controls access to cloud applications running on Google Cloud Platform.
   *
   * @example
   * const {google} = require('googleapis');
   * const iap = google.iap('v1');
   *
   * @namespace iap
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Iap
   */
  export class Iap {
    context: APIRequestContext;
    oauth: Resource$Oauth;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.oauth = new Resource$Oauth(this.context);
      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * Access related settings for IAP protected apps.
   */
  export interface Schema$AccessSettings {
    /**
     * Configuration to allow cross-origin requests via IAP.
     */
    corsSettings?: Schema$CorsSettings;
    /**
     * GCIP claims and endpoint configurations for 3p identity providers.
     */
    gcipSettings?: Schema$GcipSettings;
    /**
     * Settings to configure IAP&#39;s OAuth behavior.
     */
    oauthSettings?: Schema$OAuthSettings;
  }
  /**
   * Wrapper over application specific settings for IAP.
   */
  export interface Schema$ApplicationSettings {
    /**
     * Settings to configure IAP&#39;s behavior for a CSM mesh.
     */
    csmSettings?: Schema$CsmSettings;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
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
     * Output only. Whether the brand is only intended for usage inside the GSuite organization only.
     */
    orgInternalOnly?: boolean | null;
    /**
     * Support email displayed on the OAuth consent screen.
     */
    supportEmail?: string | null;
  }
  /**
   * Allows customers to configure HTTP request paths that&#39;ll allow HTTP OPTIONS call to bypass authentication and authorization.
   */
  export interface Schema$CorsSettings {
    /**
     * Configuration to allow HTTP OPTIONS calls to skip authorization. If undefined, IAP will not apply any special logic to OPTIONS requests.
     */
    allowHttpOptions?: boolean | null;
  }
  /**
   * Configuration for RCTokens generated for CSM workloads protected by IAP. RCTokens are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for ISTIO deployments, and can be scoped to a single mesh by configuring the audience field accordingly
   */
  export interface Schema$CsmSettings {
    /**
     * Audience claim set in the generated RCToken. This value is not validated by IAP.
     */
    rctokenAud?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
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
  /**
   * Allows customers to configure tenant_id for GCIP instance per-app.
   */
  export interface Schema$GcipSettings {
    /**
     * Login page URI associated with the GCIP tenants. Typically, all resources within the same project share the same login page, though it could be overridden at the sub resource level.
     */
    loginPageUri?: string | null;
    /**
     * GCIP tenant ids that are linked to the IAP resource. tenant_ids could be a string beginning with a number character to indicate authenticating with GCIP tenant flow, or in the format of _&lt;ProjectNumber&gt; to indicate authenticating with GCIP agent flow. If agent flow is used, tenant_ids should only contain one single element, while for tenant flow, tenant_ids can contain multiple elements.
     */
    tenantIds?: string[] | null;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
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
   * Configuration for OAuth login&amp;consent flow behavior.
   */
  export interface Schema$OAuthSettings {
    /**
     * Domain hint to send as hd=? parameter in OAuth request flow. Enables redirect to primary IDP by skipping Google&#39;s login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token&#39;s hd claim matches this value since access behavior is managed by IAM policies.
     */
    loginHint?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  Optionally, a `binding` can specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both.  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [&quot;user:eve@example.com&quot;],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
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
   * The request sent to ResetIdentityAwareProxyClientSecret.
   */
  export interface Schema$ResetIdentityAwareProxyClientSecretRequest {}
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
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

  export class Resource$Oauth {
    context: APIRequestContext;
    projects: Resource$Oauth$Projects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.projects = new Resource$Oauth$Projects(this.context);
    }
  }

  export class Resource$Oauth$Projects {
    context: APIRequestContext;
    brands: Resource$Oauth$Projects$Brands;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.brands = new Resource$Oauth$Projects$Brands(this.context);
    }
  }

  export class Resource$Oauth$Projects$Brands {
    context: APIRequestContext;
    identityAwareProxyClients: Resource$Oauth$Projects$Brands$Identityawareproxyclients;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.identityAwareProxyClients = new Resource$Oauth$Projects$Brands$Identityawareproxyclients(
        this.context
      );
    }

    /**
     * iap.oauth.projects.brands.create
     * @desc Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same G Suite organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
     * @alias iap.oauth.projects.brands.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. GCP Project number/id under which the brand is to be created. In the following format: projects/{project_number/id}.
     * @param {().Brand} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Oauth$Projects$Brands$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Brand>;
    create(
      params: Params$Resource$Oauth$Projects$Brands$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Brand>,
      callback: BodyResponseCallback<Schema$Brand>
    ): void;
    create(
      params: Params$Resource$Oauth$Projects$Brands$Create,
      callback: BodyResponseCallback<Schema$Brand>
    ): void;
    create(callback: BodyResponseCallback<Schema$Brand>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Oauth$Projects$Brands$Create
        | BodyResponseCallback<Schema$Brand>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Brand>,
      callback?: BodyResponseCallback<Schema$Brand>
    ): void | GaxiosPromise<Schema$Brand> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauth$Projects$Brands$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauth$Projects$Brands$Create;
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
            url: (rootUrl + '/v1/oauth/{+parent}/brands').replace(
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
        createAPIRequest<Schema$Brand>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Brand>(parameters);
      }
    }

    /**
     * iap.oauth.projects.brands.get
     * @desc Retrieves the OAuth brand of the project.
     * @alias iap.oauth.projects.brands.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the brand to be fetched. In the following format: projects/{project_number/id}/brands/{brand}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Oauth$Projects$Brands$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Brand>;
    get(
      params: Params$Resource$Oauth$Projects$Brands$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Brand>,
      callback: BodyResponseCallback<Schema$Brand>
    ): void;
    get(
      params: Params$Resource$Oauth$Projects$Brands$Get,
      callback: BodyResponseCallback<Schema$Brand>
    ): void;
    get(callback: BodyResponseCallback<Schema$Brand>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Oauth$Projects$Brands$Get
        | BodyResponseCallback<Schema$Brand>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Brand>,
      callback?: BodyResponseCallback<Schema$Brand>
    ): void | GaxiosPromise<Schema$Brand> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauth$Projects$Brands$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauth$Projects$Brands$Get;
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
            url: (rootUrl + '/v1/oauth/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Brand>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Brand>(parameters);
      }
    }

    /**
     * iap.oauth.projects.brands.list
     * @desc Lists the existing brands for the project.
     * @alias iap.oauth.projects.brands.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. GCP Project number/id. In the following format: projects/{project_number/id}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Oauth$Projects$Brands$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBrandsResponse>;
    list(
      params: Params$Resource$Oauth$Projects$Brands$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListBrandsResponse>,
      callback: BodyResponseCallback<Schema$ListBrandsResponse>
    ): void;
    list(
      params: Params$Resource$Oauth$Projects$Brands$List,
      callback: BodyResponseCallback<Schema$ListBrandsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBrandsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Oauth$Projects$Brands$List
        | BodyResponseCallback<Schema$ListBrandsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBrandsResponse>,
      callback?: BodyResponseCallback<Schema$ListBrandsResponse>
    ): void | GaxiosPromise<Schema$ListBrandsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauth$Projects$Brands$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauth$Projects$Brands$List;
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
            url: (rootUrl + '/v1/oauth/{+parent}/brands').replace(
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
        createAPIRequest<Schema$ListBrandsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListBrandsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Oauth$Projects$Brands$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. GCP Project number/id under which the brand is to be created. In the following format: projects/{project_number/id}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Brand;
  }
  export interface Params$Resource$Oauth$Projects$Brands$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Name of the brand to be fetched. In the following format: projects/{project_number/id}/brands/{brand}.
     */
    name?: string;
  }
  export interface Params$Resource$Oauth$Projects$Brands$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. GCP Project number/id. In the following format: projects/{project_number/id}.
     */
    parent?: string;
  }

  export class Resource$Oauth$Projects$Brands$Identityawareproxyclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * iap.oauth.projects.brands.identityAwareProxyClients.create
     * @desc Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
     * @alias iap.oauth.projects.brands.identityAwareProxyClients.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Path to create the client in. In the following format: projects/{project_number/id}/brands/{brand}. The project must belong to a GSuite account.
     * @param {().IdentityAwareProxyClient} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IdentityAwareProxyClient>;
    create(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    create(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Create,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Create
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      callback?: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void | GaxiosPromise<Schema$IdentityAwareProxyClient> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Create;
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
            url: (
              rootUrl + '/v1/oauth/{+parent}/identityAwareProxyClients'
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
        createAPIRequest<Schema$IdentityAwareProxyClient>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IdentityAwareProxyClient>(parameters);
      }
    }

    /**
     * iap.oauth.projects.brands.identityAwareProxyClients.delete
     * @desc Deletes an Identity Aware Proxy (IAP) OAuth client. Useful for removing obsolete clients, managing the number of clients in a given project, and cleaning up after tests. Requires that the client is owned by IAP.
     * @alias iap.oauth.projects.brands.identityAwareProxyClients.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the Identity Aware Proxy client to be deleted. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Delete;
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
            url: (rootUrl + '/v1/oauth/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * iap.oauth.projects.brands.identityAwareProxyClients.get
     * @desc Retrieves an Identity Aware Proxy (IAP) OAuth client. Requires that the client is owned by IAP.
     * @alias iap.oauth.projects.brands.identityAwareProxyClients.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the Identity Aware Proxy client to be fetched. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IdentityAwareProxyClient>;
    get(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    get(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Get,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    get(callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Get
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      callback?: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void | GaxiosPromise<Schema$IdentityAwareProxyClient> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Get;
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
            url: (rootUrl + '/v1/oauth/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IdentityAwareProxyClient>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IdentityAwareProxyClient>(parameters);
      }
    }

    /**
     * iap.oauth.projects.brands.identityAwareProxyClients.list
     * @desc Lists the existing clients for the brand.
     * @alias iap.oauth.projects.brands.identityAwareProxyClients.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of clients to return. The service may return fewer than this value. If unspecified, at most 100 clients will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string=} params.pageToken A page token, received from a previous `ListIdentityAwareProxyClients` call. Provide this to retrieve the subsequent page.  When paginating, all other parameters provided to `ListIdentityAwareProxyClients` must match the call that provided the page token.
     * @param {string} params.parent Required. Full brand path. In the following format: projects/{project_number/id}/brands/{brand}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListIdentityAwareProxyClientsResponse>;
    list(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>,
      callback: BodyResponseCallback<
        Schema$ListIdentityAwareProxyClientsResponse
      >
    ): void;
    list(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$List,
      callback: BodyResponseCallback<
        Schema$ListIdentityAwareProxyClientsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$ListIdentityAwareProxyClientsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$List
        | BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListIdentityAwareProxyClientsResponse>,
      callback?: BodyResponseCallback<
        Schema$ListIdentityAwareProxyClientsResponse
      >
    ): void | GaxiosPromise<Schema$ListIdentityAwareProxyClientsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$List;
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
            url: (
              rootUrl + '/v1/oauth/{+parent}/identityAwareProxyClients'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
          callback
        );
      } else {
        return createAPIRequest<Schema$ListIdentityAwareProxyClientsResponse>(
          parameters
        );
      }
    }

    /**
     * iap.oauth.projects.brands.identityAwareProxyClients.resetSecret
     * @desc Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
     * @alias iap.oauth.projects.brands.identityAwareProxyClients.resetSecret
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Name of the Identity Aware Proxy client to that will have its secret reset. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
     * @param {().ResetIdentityAwareProxyClientSecretRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetSecret(
      params?: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Resetsecret,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IdentityAwareProxyClient>;
    resetSecret(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Resetsecret,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    resetSecret(
      params: Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Resetsecret,
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    resetSecret(
      callback: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void;
    resetSecret(
      paramsOrCallback?:
        | Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Resetsecret
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentityAwareProxyClient>,
      callback?: BodyResponseCallback<Schema$IdentityAwareProxyClient>
    ): void | GaxiosPromise<Schema$IdentityAwareProxyClient> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Resetsecret;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Resetsecret;
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
            url: (rootUrl + '/v1/oauth/{+name}:resetSecret').replace(
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
        createAPIRequest<Schema$IdentityAwareProxyClient>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IdentityAwareProxyClient>(parameters);
      }
    }
  }

  export interface Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Path to create the client in. In the following format: projects/{project_number/id}/brands/{brand}. The project must belong to a GSuite account.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentityAwareProxyClient;
  }
  export interface Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Name of the Identity Aware Proxy client to be deleted. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
     */
    name?: string;
  }
  export interface Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Name of the Identity Aware Proxy client to be fetched. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
     */
    name?: string;
  }
  export interface Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of clients to return. The service may return fewer than this value. If unspecified, at most 100 clients will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListIdentityAwareProxyClients` call. Provide this to retrieve the subsequent page.  When paginating, all other parameters provided to `ListIdentityAwareProxyClients` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Full brand path. In the following format: projects/{project_number/id}/brands/{brand}.
     */
    parent?: string;
  }
  export interface Params$Resource$Oauth$Projects$Brands$Identityawareproxyclients$Resetsecret
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Name of the Identity Aware Proxy client to that will have its secret reset. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetIdentityAwareProxyClientSecretRequest;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * iap.getIamPolicy
     * @desc Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     * @alias iap.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$V1$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * iap.getIapSettings
     * @desc Gets the IAP settings on a particular IAP protected resource.
     * @alias iap.getIapSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name for which to retrieve the settings. Authorization: Requires the `getSettings` permission for the associated resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIapSettings(
      params?: Params$Resource$V1$Getiapsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IapSettings>;
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
        | BodyResponseCallback<Schema$IapSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IapSettings>,
      callback?: BodyResponseCallback<Schema$IapSettings>
    ): void | GaxiosPromise<Schema$IapSettings> {
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
        createAPIRequest<Schema$IapSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IapSettings>(parameters);
      }
    }

    /**
     * iap.setIamPolicy
     * @desc Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     * @alias iap.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$V1$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
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
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * iap.testIamPermissions
     * @desc Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     * @alias iap.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$V1$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
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
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
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
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * iap.updateIapSettings
     * @desc Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
     * @alias iap.updateIapSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the IAP protected resource.
     * @param {string=} params.updateMask The field mask specifying which IAP settings should be updated. If omitted, the all of the settings are updated. See https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {().IapSettings} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateIapSettings(
      params?: Params$Resource$V1$Updateiapsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IapSettings>;
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
        | BodyResponseCallback<Schema$IapSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IapSettings>,
      callback?: BodyResponseCallback<Schema$IapSettings>
    ): void | GaxiosPromise<Schema$IapSettings> {
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
        createAPIRequest<Schema$IapSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IapSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$V1$Getiampolicy extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name for which to retrieve the settings. Authorization: Requires the `getSettings` permission for the associated resource.
     */
    name?: string;
  }
  export interface Params$Resource$V1$Setiampolicy extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the IAP protected resource.
     */
    name?: string;
    /**
     * The field mask specifying which IAP settings should be updated. If omitted, the all of the settings are updated. See https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IapSettings;
  }
}
