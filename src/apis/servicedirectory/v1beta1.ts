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
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';

export namespace servicedirectory_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Service Directory API
   *
   * Service Directory is a platform for discovering, publishing, and connecting services.
   *
   * @example
   * const {google} = require('googleapis');
   * const servicedirectory = google.servicedirectory('v1beta1');
   *
   * @namespace servicedirectory
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Servicedirectory
   */
  export class Servicedirectory {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * An individual endpoint that provides a service. The service must already exist to create an endpoint.
   */
  export interface Schema$Endpoint {
    /**
     * Optional. An IPv4 or IPv6 address. Service Directory will reject bad addresses like:   &quot;8.8.8&quot;   &quot;8.8.8.8:53&quot;   &quot;test:bad:address&quot;   &quot;[::1]&quot;   &quot;[::1]:8080&quot; Limited to 45 characters.
     */
    address?: string | null;
    /**
     * Optional. Metadata for the endpoint. This data can be consumed by service clients.  The entire metadata dictionary may contain up to 512 characters, spread accoss all key-value pairs. Metadata that goes beyond any these limits will be rejected.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Immutable. The resource name for the endpoint in the format &#39;projects/x/locations/x/namespaces/x/services/x/endpoints/*&#39;.
     */
    name?: string | null;
    /**
     * Optional. Service Directory will reject values outside of [0, 65535].
     */
    port?: number | null;
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
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * The response message for RegistrationService.ListEndpoints.
   */
  export interface Schema$ListEndpointsResponse {
    /**
     * The list of endpoints.
     */
    endpoints?: Schema$Endpoint[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for RegistrationService.ListNamespaces.
   */
  export interface Schema$ListNamespacesResponse {
    /**
     * The list of namespaces.
     */
    namespaces?: Schema$Namespace[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for RegistrationService.ListServices.
   */
  export interface Schema$ListServicesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The list of services.
     */
    services?: Schema$Service[];
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
  }
  /**
   * A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
   */
  export interface Schema$Namespace {
    /**
     * Optional. Resource labels associated with this Namespace. No more than 64 user labels can be associated with a given resource.  Label keys and values can be no longer than 63 characters.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Immutable. The resource name for the namespace in the format &#39;projects/x/locations/x/namespaces/*&#39;.
     */
    name?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [             &quot;user:eve@example.com&quot;           ],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
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
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.
   */
  export interface Schema$ResolveServiceRequest {
    /**
     * Optional. The filter applied to the endpoints of the resolved service.  General filter string syntax: &lt;field&gt; &lt;operator&gt; &lt;value&gt; (&lt;logical connector&gt;) &lt;field&gt; can be &quot;name&quot; or &quot;metadata.&lt;key&gt;&quot; for map field. &lt;operator&gt; can be &quot;&lt;, &gt;, &lt;=, &gt;=, !=, =, :&quot;. Of which &quot;:&quot; means HAS and is roughly the same as &quot;=&quot;. &lt;value&gt; must be the same data type as the field. &lt;logical connector&gt; can be &quot;AND, OR, NOT&quot;.  Examples of valid filters: * &quot;metadata.owner&quot; returns Endpoints that have a label with the   key &quot;owner&quot;, this is the same as &quot;metadata:owner&quot; * &quot;metadata.protocol=gRPC&quot; returns Endpoints that have key/value   &quot;protocol=gRPC&quot; * &quot;metadata.owner!=sd AND metadata.foo=bar&quot; returns   Endpoints that have &quot;owner&quot; field in metadata with a value that is not   &quot;sd&quot; AND have the key/value foo=bar.
     */
    endpointFilter?: string | null;
    /**
     * Optional. The maximum number of endpoints to return. Defaults to 25. Maximum is 100. If a value less than one is specified, the Default is used. If a value greater than the Maximum is specified, the Maximum is used.
     */
    maxEndpoints?: number | null;
  }
  /**
   * The response message for LookupService.ResolveService.
   */
  export interface Schema$ResolveServiceResponse {
    service?: Schema$Service;
  }
  /**
   * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
   */
  export interface Schema$Service {
    /**
     * Output only. Endpoints associated with this service. Returned on LookupService.Resolve. Control plane clients should use RegistrationService.ListEndpoints.
     */
    endpoints?: Schema$Endpoint[];
    /**
     * Optional. Metadata for the service. This data can be consumed by service clients.  The entire metadata dictionary may contain up to 2000 characters, spread across all key-value pairs. Metadata that goes beyond any these limits will be rejected.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Immutable. The resource name for the service in the format &#39;projects/x/locations/x/namespaces/x/services/*&#39;.
     */
    name?: string | null;
  }
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

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    namespaces: Resource$Projects$Locations$Namespaces;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.namespaces = new Resource$Projects$Locations$Namespaces(
        this.context
      );
    }

    /**
     * servicedirectory.projects.locations.get
     * @desc Gets information about a location.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void | GaxiosPromise<Schema$ListLocationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Namespaces {
    context: APIRequestContext;
    services: Resource$Projects$Locations$Namespaces$Services;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.services = new Resource$Projects$Locations$Namespaces$Services(
        this.context
      );
    }

    /**
     * servicedirectory.projects.locations.namespaces.create
     * @desc Creates a namespace, and returns the new Namespace.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.create({
     *     // Required. The Resource ID must be 1-63 characters long, and comply with
     *     // <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>.
     *     // Specifically, the name must be 1-63 characters long and match the regular
     *     // expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first
     *     // character must be a lowercase letter, and all following characters must
     *     // be a dash, lowercase letter, or digit, except the last character, which
     *     // cannot be a dash.
     *     namespaceId: 'placeholder-value',
     *     // Required. The resource name of the project and location the namespace
     *     // will be created in.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labels": {},
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.namespaceId Required. The Resource ID must be 1-63 characters long, and comply with <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     * @param {string} params.parent Required. The resource name of the project and location the namespace will be created in.
     * @param {().Namespace} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Namespaces$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Namespace>;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Namespace>,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Create,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    create(callback: BodyResponseCallback<Schema$Namespace>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Create
        | BodyResponseCallback<Schema$Namespace>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Namespace>,
      callback?: BodyResponseCallback<Schema$Namespace>
    ): void | GaxiosPromise<Schema$Namespace> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/namespaces').replace(
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
        createAPIRequest<Schema$Namespace>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Namespace>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.delete
     * @desc Deletes a namespace. This also deletes all services and endpoints in the namespace.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.delete({
     *     // Required. The name of the namespace to delete.
     *     name: 'projects/my-project/locations/my-location/namespaces/my-namespace',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the namespace to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Namespaces$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * servicedirectory.projects.locations.namespaces.get
     * @desc Gets a namespace.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.get({
     *     // Required. The name of the namespace to retrieve.
     *     name: 'projects/my-project/locations/my-location/namespaces/my-namespace',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the namespace to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Namespaces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Namespace>;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Namespace>,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Get,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    get(callback: BodyResponseCallback<Schema$Namespace>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Get
        | BodyResponseCallback<Schema$Namespace>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Namespace>,
      callback?: BodyResponseCallback<Schema$Namespace>
    ): void | GaxiosPromise<Schema$Namespace> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Namespace>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Namespace>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.getIamPolicy
     * @desc Gets the IAM Policy for a resource (namespace or service only).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.getIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "options": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.getIamPolicy
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
      params?: Params$Resource$Projects$Locations$Namespaces$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Namespaces$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Namespaces$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * servicedirectory.projects.locations.namespaces.list
     * @desc Lists all namespaces.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.list({
     *     // Optional. The filter to list result by.
     *     //
     *     // General filter string syntax:
     *     // <field> <operator> <value> (<logical connector>)
     *     // <field> can be "name", or "labels.<key>" for map field.
     *     // <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and
     *     // is roughly the same as "=".
     *     // <value> must be the same data type as field.
     *     // <logical connector> can be "AND, OR, NOT".
     *     //
     *     // Examples of valid filters:
     *     // * "labels.owner" returns Namespaces that have a label with the key "owner"
     *     //   this is the same as "labels:owner".
     *     // * "labels.protocol=gRPC" returns Namespaces that have key/value
     *     //   "protocol=gRPC".
     *     // * "name>projects/my-project/locations/us-east/namespaces/namespace-c"
     *     //   returns Namespaces that have name that is alphabetically later than the
     *     //   string, so "namespace-e" will be returned but "namespace-a" will not be.
     *     // * "labels.owner!=sd AND labels.foo=bar" returns Namespaces that have
     *     //   "owner" in label key but value is not "sd" AND have key/value foo=bar.
     *     // * "doesnotexist.foo=bar" returns an empty list. Note that Namespace doesn't
     *     //   have a field called "doesnotexist". Since the filter does not match any
     *     //   Namespaces, it returns no results.
     *     filter: 'placeholder-value',
     *     // Optional. The order to list result by.
     *     //
     *     // General order by string syntax:
     *     // <field> (<asc|desc>) (,)
     *     // <field> allows values {"name"}
     *     // <asc/desc> ascending or descending order by <field>. If this is left
     *     // blank, "asc" is used.
     *     // Note that an empty order_by string result in default order, which is order
     *     // by name in ascending order.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the project and location whose namespaces we'd like to
     *     // list.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "namespaces": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. The filter to list result by.  General filter string syntax: <field> <operator> <value> (<logical connector>) <field> can be "name", or "labels.<key>" for map field. <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". <value> must be the same data type as field. <logical connector> can be "AND, OR, NOT".  Examples of valid filters: * "labels.owner" returns Namespaces that have a label with the key "owner"   this is the same as "labels:owner". * "labels.protocol=gRPC" returns Namespaces that have key/value   "protocol=gRPC". * "name>projects/my-project/locations/us-east/namespaces/namespace-c"   returns Namespaces that have name that is alphabetically later than the   string, so "namespace-e" will be returned but "namespace-a" will not be. * "labels.owner!=sd AND labels.foo=bar" returns Namespaces that have   "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Namespace doesn't   have a field called "doesnotexist". Since the filter does not match any   Namespaces, it returns no results.
     * @param {string=} params.orderBy Optional. The order to list result by.  General order by string syntax: <field> (<asc|desc>) (,) <field> allows values {"name"} <asc/desc> ascending or descending order by <field>. If this is left blank, "asc" is used. Note that an empty order_by string result in default order, which is order by name in ascending order.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The resource name of the project and location whose namespaces we'd like to list.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Namespaces$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNamespacesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNamespacesResponse>,
      callback: BodyResponseCallback<Schema$ListNamespacesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$List,
      callback: BodyResponseCallback<Schema$ListNamespacesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNamespacesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$List
        | BodyResponseCallback<Schema$ListNamespacesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNamespacesResponse>,
      callback?: BodyResponseCallback<Schema$ListNamespacesResponse>
    ): void | GaxiosPromise<Schema$ListNamespacesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/namespaces').replace(
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
        createAPIRequest<Schema$ListNamespacesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListNamespacesResponse>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.patch
     * @desc Updates a namespace.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.patch({
     *     // Immutable. The resource name for the namespace in the format
     *     // 'projects/x/locations/x/namespaces/x'.
     *     name: 'projects/my-project/locations/my-location/namespaces/my-namespace',
     *     // Required. List of fields to be updated in this request.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labels": {},
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Immutable. The resource name for the namespace in the format 'projects/x/locations/x/namespaces/x'.
     * @param {string=} params.updateMask Required. List of fields to be updated in this request.
     * @param {().Namespace} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Namespaces$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Namespace>;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Namespace>,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Patch,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Namespace>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Patch
        | BodyResponseCallback<Schema$Namespace>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Namespace>,
      callback?: BodyResponseCallback<Schema$Namespace>
    ): void | GaxiosPromise<Schema$Namespace> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Namespace>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Namespace>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.setIamPolicy
     * @desc Sets the IAM Policy for a resource (namespace or service only).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.setIamPolicy
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
      params?: Params$Resource$Projects$Locations$Namespaces$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Namespaces$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Namespaces$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * servicedirectory.projects.locations.namespaces.testIamPermissions
     * @desc Tests IAM permissions for a resource (namespace or service only).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.testIamPermissions(
     *     {
     *       // REQUIRED: The resource for which the policy detail is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.testIamPermissions
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
      params?: Params$Resource$Projects$Locations$Namespaces$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Namespaces$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Namespaces$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Namespaces$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The Resource ID must be 1-63 characters long, and comply with <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    namespaceId?: string;
    /**
     * Required. The resource name of the project and location the namespace will be created in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Namespace;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the namespace to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the namespace to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Getiampolicy
    extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Namespaces$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The filter to list result by.  General filter string syntax: <field> <operator> <value> (<logical connector>) <field> can be "name", or "labels.<key>" for map field. <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". <value> must be the same data type as field. <logical connector> can be "AND, OR, NOT".  Examples of valid filters: * "labels.owner" returns Namespaces that have a label with the key "owner"   this is the same as "labels:owner". * "labels.protocol=gRPC" returns Namespaces that have key/value   "protocol=gRPC". * "name>projects/my-project/locations/us-east/namespaces/namespace-c"   returns Namespaces that have name that is alphabetically later than the   string, so "namespace-e" will be returned but "namespace-a" will not be. * "labels.owner!=sd AND labels.foo=bar" returns Namespaces that have   "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Namespace doesn't   have a field called "doesnotexist". Since the filter does not match any   Namespaces, it returns no results.
     */
    filter?: string;
    /**
     * Optional. The order to list result by.  General order by string syntax: <field> (<asc|desc>) (,) <field> allows values {"name"} <asc/desc> ascending or descending order by <field>. If this is left blank, "asc" is used. Note that an empty order_by string result in default order, which is order by name in ascending order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the project and location whose namespaces we'd like to list.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Immutable. The resource name for the namespace in the format 'projects/x/locations/x/namespaces/x'.
     */
    name?: string;
    /**
     * Required. List of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Namespace;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Setiampolicy
    extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Namespaces$Testiampermissions
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

  export class Resource$Projects$Locations$Namespaces$Services {
    context: APIRequestContext;
    endpoints: Resource$Projects$Locations$Namespaces$Services$Endpoints;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.endpoints = new Resource$Projects$Locations$Namespaces$Services$Endpoints(
        this.context
      );
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.create
     * @desc Creates a service, and returns the new Service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.create(
     *     {
     *       // Required. The resource name of the namespace this service will belong to.
     *       parent:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace',
     *       // Required. The Resource ID must be 1-63 characters long, and comply with
     *       // <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>.
     *       // Specifically, the name must be 1-63 characters long and match the regular
     *       // expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first
     *       // character must be a lowercase letter, and all following characters must
     *       // be a dash, lowercase letter, or digit, except the last character, which
     *       // cannot be a dash.
     *       serviceId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "endpoints": [],
     *         //   "metadata": {},
     *         //   "name": "my_name"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endpoints": [],
     *   //   "metadata": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The resource name of the namespace this service will belong to.
     * @param {string=} params.serviceId Required. The Resource ID must be 1-63 characters long, and comply with <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     * @param {().Service} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Create,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(callback: BodyResponseCallback<Schema$Service>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Create
        | BodyResponseCallback<Schema$Service>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback?: BodyResponseCallback<Schema$Service>
    ): void | GaxiosPromise<Schema$Service> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/services').replace(
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
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.delete
     * @desc Deletes a service. This also deletes all endpoints associated with the service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.delete(
     *     {
     *       // Required. The name of the service to delete.
     *       name:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the service to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * servicedirectory.projects.locations.namespaces.services.get
     * @desc Gets a service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.get(
     *     {
     *       // Required. The name of the service to get.
     *       name:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endpoints": [],
     *   //   "metadata": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the service to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Get,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(callback: BodyResponseCallback<Schema$Service>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Get
        | BodyResponseCallback<Schema$Service>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback?: BodyResponseCallback<Schema$Service>
    ): void | GaxiosPromise<Schema$Service> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.getIamPolicy
     * @desc Gets the IAM Policy for a resource (namespace or service only).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.getIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "options": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.getIamPolicy
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
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
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
     * servicedirectory.projects.locations.namespaces.services.list
     * @desc Lists all services belonging to a namespace.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.list(
     *     {
     *       // Optional. The filter to list result by.
     *       //
     *       // General filter string syntax:
     *       // <field> <operator> <value> (<logical connector>)
     *       // <field> can be "name", or "metadata.<key>" for map field.
     *       // <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and
     *       // is roughly the same as "=".
     *       // <value> must be the same data type as field.
     *       // <logical connector> can be "AND, OR, NOT".
     *       //
     *       // Examples of valid filters:
     *       // * "metadata.owner" returns Services that have a label with the key "owner"
     *       //   this is the same as "metadata:owner".
     *       // * "metadata.protocol=gRPC" returns Services that have key/value
     *       //   "protocol=gRPC".
     *       // * "name>projects/my-project/locations/us-east/namespaces/my-namespace/services/service-c"
     *       //   returns Services that have name that is alphabetically later than the
     *       //   string, so "service-e" will be returned but "service-a" will not be.
     *       // * "metadata.owner!=sd AND metadata.foo=bar" returns Services that have
     *       //   "owner" in label key but value is not "sd" AND have key/value foo=bar.
     *       // * "doesnotexist.foo=bar" returns an empty list. Note that Service doesn't
     *       //   have a field called "doesnotexist". Since the filter does not match any
     *       //   Services, it returns no results.
     *       filter: 'placeholder-value',
     *       // Optional. The order to list result by.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of items to return.
     *       pageSize: 'placeholder-value',
     *       // Optional. The next_page_token value returned from a previous List request,
     *       // if any.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name of the namespace whose services we'd
     *       // like to list.
     *       parent:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "services": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. The filter to list result by.  General filter string syntax: <field> <operator> <value> (<logical connector>) <field> can be "name", or "metadata.<key>" for map field. <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". <value> must be the same data type as field. <logical connector> can be "AND, OR, NOT".  Examples of valid filters: * "metadata.owner" returns Services that have a label with the key "owner"   this is the same as "metadata:owner". * "metadata.protocol=gRPC" returns Services that have key/value   "protocol=gRPC". * "name>projects/my-project/locations/us-east/namespaces/my-namespace/services/service-c"   returns Services that have name that is alphabetically later than the   string, so "service-e" will be returned but "service-a" will not be. * "metadata.owner!=sd AND metadata.foo=bar" returns Services that have   "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Service doesn't   have a field called "doesnotexist". Since the filter does not match any   Services, it returns no results.
     * @param {string=} params.orderBy Optional. The order to list result by.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The resource name of the namespace whose services we'd like to list.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListServicesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$Services$List,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$List
        | BodyResponseCallback<Schema$ListServicesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback?: BodyResponseCallback<Schema$ListServicesResponse>
    ): void | GaxiosPromise<Schema$ListServicesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/services').replace(
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
        createAPIRequest<Schema$ListServicesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListServicesResponse>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.patch
     * @desc Updates a service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.patch(
     *     {
     *       // Immutable. The resource name for the service in the format
     *       // 'projects/x/locations/x/namespaces/x/services/x'.
     *       name:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service',
     *       // Required. List of fields to be updated in this request.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "endpoints": [],
     *         //   "metadata": {},
     *         //   "name": "my_name"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endpoints": [],
     *   //   "metadata": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Immutable. The resource name for the service in the format 'projects/x/locations/x/namespaces/x/services/x'.
     * @param {string=} params.updateMask Required. List of fields to be updated in this request.
     * @param {().Service} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Patch,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Service>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Patch
        | BodyResponseCallback<Schema$Service>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback?: BodyResponseCallback<Schema$Service>
    ): void | GaxiosPromise<Schema$Service> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.resolve
     * @desc Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.resolve(
     *     {
     *       // Required. The name of the service to resolve.
     *       name:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "endpointFilter": "my_endpointFilter",
     *         //   "maxEndpoints": 0
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "service": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.resolve
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the service to resolve.
     * @param {().ResolveServiceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resolve(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Resolve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResolveServiceResponse>;
    resolve(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Resolve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResolveServiceResponse>,
      callback: BodyResponseCallback<Schema$ResolveServiceResponse>
    ): void;
    resolve(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Resolve,
      callback: BodyResponseCallback<Schema$ResolveServiceResponse>
    ): void;
    resolve(
      callback: BodyResponseCallback<Schema$ResolveServiceResponse>
    ): void;
    resolve(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Resolve
        | BodyResponseCallback<Schema$ResolveServiceResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ResolveServiceResponse>,
      callback?: BodyResponseCallback<Schema$ResolveServiceResponse>
    ): void | GaxiosPromise<Schema$ResolveServiceResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Resolve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Resolve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:resolve').replace(
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
        createAPIRequest<Schema$ResolveServiceResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ResolveServiceResponse>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.setIamPolicy
     * @desc Sets the IAM Policy for a resource (namespace or service only).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.setIamPolicy
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
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
     * servicedirectory.projects.locations.namespaces.services.testIamPermissions
     * @desc Tests IAM permissions for a resource (namespace or service only).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.testIamPermissions(
     *     {
     *       // REQUIRED: The resource for which the policy detail is being requested.
     *       // See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.testIamPermissions
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
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Namespaces$Services$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the namespace this service will belong to.
     */
    parent?: string;
    /**
     * Required. The Resource ID must be 1-63 characters long, and comply with <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    serviceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the service to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the service to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Getiampolicy
    extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Namespaces$Services$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The filter to list result by.  General filter string syntax: <field> <operator> <value> (<logical connector>) <field> can be "name", or "metadata.<key>" for map field. <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". <value> must be the same data type as field. <logical connector> can be "AND, OR, NOT".  Examples of valid filters: * "metadata.owner" returns Services that have a label with the key "owner"   this is the same as "metadata:owner". * "metadata.protocol=gRPC" returns Services that have key/value   "protocol=gRPC". * "name>projects/my-project/locations/us-east/namespaces/my-namespace/services/service-c"   returns Services that have name that is alphabetically later than the   string, so "service-e" will be returned but "service-a" will not be. * "metadata.owner!=sd AND metadata.foo=bar" returns Services that have   "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Service doesn't   have a field called "doesnotexist". Since the filter does not match any   Services, it returns no results.
     */
    filter?: string;
    /**
     * Optional. The order to list result by.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the namespace whose services we'd like to list.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Immutable. The resource name for the service in the format 'projects/x/locations/x/namespaces/x/services/x'.
     */
    name?: string;
    /**
     * Required. List of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Resolve
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the service to resolve.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResolveServiceRequest;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Setiampolicy
    extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Testiampermissions
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

  export class Resource$Projects$Locations$Namespaces$Services$Endpoints {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.endpoints.create
     * @desc Creates a endpoint, and returns the new Endpoint.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.endpoints.create(
     *     {
     *       // Required. The Resource ID must be 1-63 characters long, and comply with
     *       // <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>.
     *       // Specifically, the name must be 1-63 characters long and match the regular
     *       // expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first
     *       // character must be a lowercase letter, and all following characters must
     *       // be a dash, lowercase letter, or digit, except the last character, which
     *       // cannot be a dash.
     *       endpointId: 'placeholder-value',
     *       // Required. The resource name of the service that this endpoint provides.
     *       parent:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "address": "my_address",
     *         //   "metadata": {},
     *         //   "name": "my_name",
     *         //   "port": 0
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": "my_address",
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "port": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.endpoints.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.endpointId Required. The Resource ID must be 1-63 characters long, and comply with <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     * @param {string} params.parent Required. The resource name of the service that this endpoint provides.
     * @param {().Endpoint} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Endpoint>;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Endpoint>,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Create,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    create(callback: BodyResponseCallback<Schema$Endpoint>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Create
        | BodyResponseCallback<Schema$Endpoint>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Endpoint>,
      callback?: BodyResponseCallback<Schema$Endpoint>
    ): void | GaxiosPromise<Schema$Endpoint> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/endpoints').replace(
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
        createAPIRequest<Schema$Endpoint>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Endpoint>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.endpoints.delete
     * @desc Deletes a endpoint.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.endpoints.delete(
     *     {
     *       // Required. The name of the endpoint to delete.
     *       name:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service/endpoints/my-endpoint',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.endpoints.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the endpoint to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * servicedirectory.projects.locations.namespaces.services.endpoints.get
     * @desc Gets a endpoint.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.endpoints.get(
     *     {
     *       // Required. The name of the endpoint to get.
     *       name:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service/endpoints/my-endpoint',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": "my_address",
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "port": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.endpoints.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the endpoint to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Endpoint>;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Endpoint>,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Get,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    get(callback: BodyResponseCallback<Schema$Endpoint>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Get
        | BodyResponseCallback<Schema$Endpoint>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Endpoint>,
      callback?: BodyResponseCallback<Schema$Endpoint>
    ): void | GaxiosPromise<Schema$Endpoint> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Endpoint>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Endpoint>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.endpoints.list
     * @desc Lists all endpoints.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.endpoints.list(
     *     {
     *       // Optional. The filter to list result by.
     *       //
     *       // General filter string syntax:
     *       // <field> <operator> <value> (<logical connector>)
     *       // <field> can be "name", "address", "port" or "metadata.<key>" for map field.
     *       // <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and
     *       // is roughly the same as "=".
     *       // <value> must be the same data type as field.
     *       // <logical connector> can be "AND, OR, NOT".
     *       //
     *       // Examples of valid filters:
     *       // * "metadata.owner" returns Endpoints that have a label with the key "owner"
     *       //   this is the same as "metadata:owner".
     *       // * "metadata.protocol=gRPC" returns Endpoints that have key/value
     *       //   "protocol=gRPC".
     *       // * "address=192.108.1.105" returns Endpoints that have this address.
     *       // * "port>8080" returns Endpoints that have port number larger than 8080.
     *       // * "name>projects/my-project/locations/us-east/namespaces/my-namespace/services/my-service/endpoints/endpoint-c"
     *       //   returns Endpoints that have name that is alphabetically later than the
     *       //   string, so "endpoint-e" will be returned but "endpoint-a" will not be.
     *       // * "metadata.owner!=sd AND metadata.foo=bar" returns Endpoints that have
     *       //   "owner" in label key but value is not "sd" AND have key/value foo=bar.
     *       // * "doesnotexist.foo=bar" returns an empty list. Note that Endpoint doesn't
     *       //   have a field called "doesnotexist". Since the filter does not match any
     *       //   Endpoints, it returns no results.
     *       filter: 'placeholder-value',
     *       // Optional. The order to list result by.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of items to return.
     *       pageSize: 'placeholder-value',
     *       // Optional. The next_page_token value returned from a previous List request,
     *       // if any.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name of the service whose endpoints we'd like to
     *       // list.
     *       parent:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endpoints": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.endpoints.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. The filter to list result by.  General filter string syntax: <field> <operator> <value> (<logical connector>) <field> can be "name", "address", "port" or "metadata.<key>" for map field. <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". <value> must be the same data type as field. <logical connector> can be "AND, OR, NOT".  Examples of valid filters: * "metadata.owner" returns Endpoints that have a label with the key "owner"   this is the same as "metadata:owner". * "metadata.protocol=gRPC" returns Endpoints that have key/value   "protocol=gRPC". * "address=192.108.1.105" returns Endpoints that have this address. * "port>8080" returns Endpoints that have port number larger than 8080. * "name>projects/my-project/locations/us-east/namespaces/my-namespace/services/my-service/endpoints/endpoint-c"   returns Endpoints that have name that is alphabetically later than the   string, so "endpoint-e" will be returned but "endpoint-a" will not be. * "metadata.owner!=sd AND metadata.foo=bar" returns Endpoints that have   "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Endpoint doesn't   have a field called "doesnotexist". Since the filter does not match any   Endpoints, it returns no results.
     * @param {string=} params.orderBy Optional. The order to list result by.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The resource name of the service whose endpoints we'd like to list.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEndpointsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEndpointsResponse>,
      callback: BodyResponseCallback<Schema$ListEndpointsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$List,
      callback: BodyResponseCallback<Schema$ListEndpointsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEndpointsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$List
        | BodyResponseCallback<Schema$ListEndpointsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEndpointsResponse>,
      callback?: BodyResponseCallback<Schema$ListEndpointsResponse>
    ): void | GaxiosPromise<Schema$ListEndpointsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/endpoints').replace(
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
        createAPIRequest<Schema$ListEndpointsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListEndpointsResponse>(parameters);
      }
    }

    /**
     * servicedirectory.projects.locations.namespaces.services.endpoints.patch
     * @desc Updates a endpoint.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicedirectory.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const servicedirectory = google.servicedirectory('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await servicedirectory.projects.locations.namespaces.services.endpoints.patch(
     *     {
     *       // Immutable. The resource name for the endpoint in the format
     *       // 'projects/x/locations/x/namespaces/x/services/x/endpoints/x'.
     *       name:
     *         'projects/my-project/locations/my-location/namespaces/my-namespace/services/my-service/endpoints/my-endpoint',
     *       // Required. List of fields to be updated in this request.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "address": "my_address",
     *         //   "metadata": {},
     *         //   "name": "my_name",
     *         //   "port": 0
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": "my_address",
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "port": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias servicedirectory.projects.locations.namespaces.services.endpoints.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Immutable. The resource name for the endpoint in the format 'projects/x/locations/x/namespaces/x/services/x/endpoints/x'.
     * @param {string=} params.updateMask Required. List of fields to be updated in this request.
     * @param {().Endpoint} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Endpoint>;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Endpoint>,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Patch,
      callback: BodyResponseCallback<Schema$Endpoint>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Endpoint>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Patch
        | BodyResponseCallback<Schema$Endpoint>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Endpoint>,
      callback?: BodyResponseCallback<Schema$Endpoint>
    ): void | GaxiosPromise<Schema$Endpoint> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicedirectory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Endpoint>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Endpoint>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The Resource ID must be 1-63 characters long, and comply with <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    endpointId?: string;
    /**
     * Required. The resource name of the service that this endpoint provides.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Endpoint;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the endpoint to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the endpoint to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The filter to list result by.  General filter string syntax: <field> <operator> <value> (<logical connector>) <field> can be "name", "address", "port" or "metadata.<key>" for map field. <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". <value> must be the same data type as field. <logical connector> can be "AND, OR, NOT".  Examples of valid filters: * "metadata.owner" returns Endpoints that have a label with the key "owner"   this is the same as "metadata:owner". * "metadata.protocol=gRPC" returns Endpoints that have key/value   "protocol=gRPC". * "address=192.108.1.105" returns Endpoints that have this address. * "port>8080" returns Endpoints that have port number larger than 8080. * "name>projects/my-project/locations/us-east/namespaces/my-namespace/services/my-service/endpoints/endpoint-c"   returns Endpoints that have name that is alphabetically later than the   string, so "endpoint-e" will be returned but "endpoint-a" will not be. * "metadata.owner!=sd AND metadata.foo=bar" returns Endpoints that have   "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Endpoint doesn't   have a field called "doesnotexist". Since the filter does not match any   Endpoints, it returns no results.
     */
    filter?: string;
    /**
     * Optional. The order to list result by.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the service whose endpoints we'd like to list.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Services$Endpoints$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Immutable. The resource name for the endpoint in the format 'projects/x/locations/x/namespaces/x/services/x/endpoints/x'.
     */
    name?: string;
    /**
     * Required. List of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Endpoint;
  }
}
