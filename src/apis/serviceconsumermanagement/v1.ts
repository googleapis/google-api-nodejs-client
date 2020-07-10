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

export namespace serviceconsumermanagement_v1 {
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
   * Service Consumer Management API
   *
   * Manages the service consumers of a Service Infrastructure service.
   *
   * @example
   * const {google} = require('googleapis');
   * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
   *
   * @namespace serviceconsumermanagement
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Serviceconsumermanagement
   */
  export class Serviceconsumermanagement {
    context: APIRequestContext;
    operations: Resource$Operations;
    services: Resource$Services;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.operations = new Resource$Operations(this.context);
      this.services = new Resource$Services(this.context);
    }
  }

  /**
   * Request to add a newly created and configured tenant project to a tenancy unit.
   */
  export interface Schema$AddTenantProjectRequest {
    /**
     * Configuration of the new tenant project to be added to tenancy unit resources.
     */
    projectConfig?: Schema$TenantProjectConfig;
    /**
     * Tag of the added project. Must be less than 128 characters. Required.
     */
    tag?: string | null;
  }
  /**
   * Api is a light-weight descriptor for an API Interface.  Interfaces are also described as &quot;protocol buffer services&quot; in some contexts, such as by the &quot;service&quot; keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as &quot;APIs&quot; in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
   */
  export interface Schema$Api {
    /**
     * The methods of this interface, in unspecified order.
     */
    methods?: Schema$Method[];
    /**
     * Included interfaces. See Mixin.
     */
    mixins?: Schema$Mixin[];
    /**
     * The fully qualified name of this interface, including package name followed by the interface&#39;s simple name.
     */
    name?: string | null;
    /**
     * Any metadata attached to the interface.
     */
    options?: Schema$Option[];
    /**
     * Source context for the protocol buffer service represented by this message.
     */
    sourceContext?: Schema$SourceContext;
    /**
     * The source syntax of the service.
     */
    syntax?: string | null;
    /**
     * A version string for this interface. If specified, must have the form `major-version.minor-version`, as in `1.10`. If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here.  The versioning schema uses [semantic versioning](http://semver.org) where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan.  The major version is also reflected in the package name of the interface, which must end in `v&lt;major-version&gt;`, as in `google.feature.v1`. For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces.
     */
    version?: string | null;
  }
  /**
   * Request to apply configuration to an existing tenant project.
   */
  export interface Schema$ApplyTenantProjectConfigRequest {
    /**
     * Configuration that should be applied to the existing tenant project.
     */
    projectConfig?: Schema$TenantProjectConfig;
    /**
     * Tag of the project. Must be less than 128 characters. Required.
     */
    tag?: string | null;
  }
  /**
   * Request to attach an existing project to the tenancy unit as a new tenant resource.
   */
  export interface Schema$AttachTenantProjectRequest {
    /**
     * When attaching an external project, this is in the format of `projects/{project_number}`.
     */
    externalResource?: string | null;
    /**
     * When attaching a reserved project already in tenancy units, this is the tag of a tenant resource under the tenancy unit for the managed service&#39;s service producer project. The reserved tenant resource must be in an active state.
     */
    reservedResource?: string | null;
    /**
     * Tag of the tenant resource after attachment. Must be less than 128 characters. Required.
     */
    tag?: string | null;
  }
  /**
   * `Authentication` defines the authentication configuration for an API.  Example for an API targeted for external use:      name: calendar.googleapis.com     authentication:       providers:       - id: google_calendar_auth         jwks_uri: https://www.googleapis.com/oauth2/v1/certs         issuer: https://securetoken.google.com       rules:       - selector: &quot;*&quot;         requirements:           provider_id: google_calendar_auth
   */
  export interface Schema$Authentication {
    /**
     * Defines a set of authentication providers that a service supports.
     */
    providers?: Schema$AuthProvider[];
    /**
     * A list of authentication rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$AuthenticationRule[];
  }
  /**
   * Authentication rules for the service.  By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It&#39;s an error to include more than one kind of credential in a single request.  If a method doesn&#39;t have any auth requirements, request credentials will be ignored.
   */
  export interface Schema$AuthenticationRule {
    /**
     * If true, the service accepts API keys without any other credential.
     */
    allowWithoutCredential?: boolean | null;
    /**
     * The requirements for OAuth credentials.
     */
    oauth?: Schema$OAuthRequirements;
    /**
     * Requirements for additional authentication providers.
     */
    requirements?: Schema$AuthRequirement[];
    /**
     * Selects the methods to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
   */
  export interface Schema$AuthProvider {
    /**
     * The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, JWTs with audiences:   - &quot;https://[service.name]/[google.protobuf.Api.name]&quot;   - &quot;https://[service.name]/&quot; will be accepted. For example, if no audiences are in the setting, LibraryService API will accept JWTs with the following audiences:   -   https://library-example.googleapis.com/google.example.library.v1.LibraryService   - https://library-example.googleapis.com/  Example:      audiences: bookstore_android.apps.googleusercontent.com,                bookstore_web.apps.googleusercontent.com
     */
    audiences?: string | null;
    /**
     * Redirect URL if JWT token is required but not present or is expired. Implement authorizationUrl of securityDefinitions in OpenAPI spec.
     */
    authorizationUrl?: string | null;
    /**
     * The unique identifier of the auth provider. It will be referred to by `AuthRequirement.provider_id`.  Example: &quot;bookstore_auth&quot;.
     */
    id?: string | null;
    /**
     * Identifies the principal that issued the JWT. See https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1 Usually a URL or an email address.  Example: https://securetoken.google.com Example: 1234567-compute@developer.gserviceaccount.com
     */
    issuer?: string | null;
    /**
     * URL of the provider&#39;s public key set to validate signature of the JWT. See [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). Optional if the key set document:  - can be retrieved from    [OpenID    Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html of    the issuer.  - can be inferred from the email domain of the issuer (e.g. a Google  service account).  Example: https://www.googleapis.com/oauth2/v1/certs
     */
    jwksUri?: string | null;
    /**
     * Defines the locations to extract the JWT.  JWT locations can be either from HTTP headers or URL query parameters. The rule is that the first match wins. The checking order is: checking all headers first, then URL query parameters.  If not specified,  default to use following 3 locations:    1) Authorization: Bearer    2) x-goog-iap-jwt-assertion    3) access_token query parameter  Default locations can be specified as followings:    jwt_locations:    - header: Authorization      value_prefix: &quot;Bearer &quot;    - header: x-goog-iap-jwt-assertion    - query: access_token
     */
    jwtLocations?: Schema$JwtLocation[];
  }
  /**
   * User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
   */
  export interface Schema$AuthRequirement {
    /**
     * NOTE: This will be deprecated soon, once AuthProvider.audiences is implemented and accepted in all the runtime components.  The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience &quot;https://Service_name/API_name&quot; will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience &quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService&quot;.  Example:      audiences: bookstore_android.apps.googleusercontent.com,                bookstore_web.apps.googleusercontent.com
     */
    audiences?: string | null;
    /**
     * id from authentication provider.  Example:      provider_id: bookstore_auth
     */
    providerId?: string | null;
  }
  /**
   * `Backend` defines the backend configuration for a service.
   */
  export interface Schema$Backend {
    /**
     * A list of API backend rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$BackendRule[];
  }
  /**
   * A backend rule provides configuration for an individual API element.
   */
  export interface Schema$BackendRule {
    /**
     * The address of the API backend.  The scheme is used to determine the backend protocol and security. The following schemes are accepted:     SCHEME        PROTOCOL    SECURITY    http://       HTTP        None    https://      HTTP        TLS    grpc://       gRPC        None    grpcs://      gRPC        TLS  It is recommended to explicitly include a scheme. Leaving out the scheme may cause constrasting behaviors across platforms.  If the port is unspecified, the default is: - 80 for schemes without TLS - 443 for schemes with TLS  For HTTP backends, use protocol to specify the protocol version.
     */
    address?: string | null;
    /**
     * The number of seconds to wait for a response from a request. The default varies based on the request protocol and deployment environment.
     */
    deadline?: number | null;
    /**
     * When disable_auth is true, a JWT ID token won&#39;t be generated and the original &quot;Authorization&quot; HTTP header will be preserved. If the header is used to carry the original token and is expected by the backend, this field must be set to true to preserve the header.
     */
    disableAuth?: boolean | null;
    /**
     * The JWT audience is used when generating a JWT ID token for the backend. This ID token will be added in the HTTP &quot;authorization&quot; header, and sent to the backend.
     */
    jwtAudience?: string | null;
    /**
     * Minimum deadline in seconds needed for this method. Calls having deadline value lower than this will be rejected.
     */
    minDeadline?: number | null;
    /**
     * The number of seconds to wait for the completion of a long running operation. The default is no deadline.
     */
    operationDeadline?: number | null;
    pathTranslation?: string | null;
    /**
     * The protocol used for sending a request to the backend. The supported values are &quot;http/1.1&quot; and &quot;h2&quot;.  The default value is inferred from the scheme in the address field:     SCHEME        PROTOCOL    http://       http/1.1    https://      http/1.1    grpc://       h2    grpcs://      h2  For secure HTTP backends (https://) that support HTTP/2, set this field to &quot;h2&quot; for improved performance.  Configuring this field to non-default values is only supported for secure HTTP backends. This field will be ignored for all other backends.  See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for more details on the supported values.
     */
    protocol?: string | null;
    /**
     * Selects the methods to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * Billing related configuration of the service.  The following example shows how to configure monitored resources and metrics for billing, `consumer_destinations` is the only supported destination and the monitored resources need at least one label key `cloud.googleapis.com/location` to indicate the location of the billing usage, using different monitored resources between monitoring and billing is recommended so they can be evolved independently:       monitored_resources:     - type: library.googleapis.com/billing_branch       labels:       - key: cloud.googleapis.com/location         description: |           Predefined label to support billing location restriction.       - key: city         description: |           Custom label to define the city where the library branch is located           in.       - key: name         description: Custom label to define the name of the library branch.     metrics:     - name: library.googleapis.com/book/borrowed_count       metric_kind: DELTA       value_type: INT64       unit: &quot;1&quot;     billing:       consumer_destinations:       - monitored_resource: library.googleapis.com/billing_branch         metrics:         - library.googleapis.com/book/borrowed_count
   */
  export interface Schema$Billing {
    /**
     * Billing configurations for sending metrics to the consumer project. There can be multiple consumer destinations per service, each one must have a different monitored resource type. A metric can be used in at most one consumer destination.
     */
    consumerDestinations?: Schema$BillingDestination[];
  }
  /**
   * Describes the billing configuration for a new tenant project.
   */
  export interface Schema$BillingConfig {
    /**
     * Name of the billing account. For example `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: string | null;
  }
  /**
   * Configuration of a specific billing destination (Currently only support bill against consumer project).
   */
  export interface Schema$BillingDestination {
    /**
     * Names of the metrics to report to this billing destination. Each name must be defined in Service.metrics section.
     */
    metrics?: string[] | null;
    /**
     * The monitored resource type. The type must be defined in Service.monitored_resources section.
     */
    monitoredResource?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * `Context` defines which contexts an API requests.  Example:      context:       rules:       - selector: &quot;*&quot;         requested:         - google.rpc.context.ProjectContext         - google.rpc.context.OriginContext  The above specifies that all methods in the API request `google.rpc.context.ProjectContext` and `google.rpc.context.OriginContext`.  Available context types are defined in package `google.rpc.context`.  This also provides mechanism to whitelist any protobuf message extension that can be sent in grpc metadata using “x-goog-ext-&lt;extension_id&gt;-bin” and “x-goog-ext-&lt;extension_id&gt;-jspb” format. For example, list any service specific protobuf types that can appear in grpc metadata as follows in your yaml file:  Example:      context:       rules:        - selector: &quot;google.example.library.v1.LibraryService.CreateBook&quot;          allowed_request_extensions:          - google.foo.v1.NewExtension          allowed_response_extensions:          - google.foo.v1.NewExtension  You can also specify extension ID instead of fully qualified extension name here.
   */
  export interface Schema$Context {
    /**
     * A list of RPC context rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$ContextRule[];
  }
  /**
   * A context rule provides information about the context for an individual API element.
   */
  export interface Schema$ContextRule {
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc side channel from client to backend.
     */
    allowedRequestExtensions?: string[] | null;
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc side channel from backend to client.
     */
    allowedResponseExtensions?: string[] | null;
    /**
     * A list of full type names of provided contexts.
     */
    provided?: string[] | null;
    /**
     * A list of full type names of requested contexts.
     */
    requested?: string[] | null;
    /**
     * Selects the methods to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * Selects and configures the service controller used by the service.  The service controller handles features like abuse, quota, billing, logging, monitoring, etc.
   */
  export interface Schema$Control {
    /**
     * The service control environment to use. If empty, no control plane feature (like quota and billing) will be enabled.
     */
    environment?: string | null;
  }
  /**
   * Request to create a tenancy unit for a service consumer of a managed service.
   */
  export interface Schema$CreateTenancyUnitRequest {
    /**
     * Optional service producer-provided identifier of the tenancy unit. Must be no longer than 40 characters and preferably URI friendly. If it isn&#39;t provided, a UID for the tenancy unit is automatically generated. The identifier must be unique across a managed service. If the tenancy unit already exists for the managed service and service consumer pair, calling `CreateTenancyUnit` returns the existing tenancy unit if the provided identifier is identical or empty, otherwise the call fails.
     */
    tenancyUnitId?: string | null;
  }
  /**
   * Customize service error responses.  For example, list any service specific protobuf types that can appear in error detail lists of error responses.  Example:      custom_error:       types:       - google.foo.v1.CustomError       - google.foo.v1.AnotherError
   */
  export interface Schema$CustomError {
    /**
     * The list of custom error rules that apply to individual API messages.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$CustomErrorRule[];
    /**
     * The list of custom error detail types, e.g. &#39;google.foo.v1.CustomError&#39;.
     */
    types?: string[] | null;
  }
  /**
   * A custom error rule.
   */
  export interface Schema$CustomErrorRule {
    /**
     * Mark this message as possible payload in error response.  Otherwise, objects of this type will be filtered when they appear in error payload.
     */
    isErrorType?: boolean | null;
    /**
     * Selects messages to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * A custom pattern is used for defining custom HTTP verb.
   */
  export interface Schema$CustomHttpPattern {
    /**
     * The name of this custom HTTP verb.
     */
    kind?: string | null;
    /**
     * The path matched by this custom verb.
     */
    path?: string | null;
  }
  /**
   * Request message to delete tenant project resource from the tenancy unit.
   */
  export interface Schema$DeleteTenantProjectRequest {
    /**
     * Tag of the resource within the tenancy unit.
     */
    tag?: string | null;
  }
  /**
   * `Documentation` provides the information for describing a service.  Example: &lt;pre&gt;&lt;code&gt;documentation:   summary: &gt;     The Google Calendar API gives access     to most calendar features.   pages:   - name: Overview     content: &amp;#40;== include google/foo/overview.md ==&amp;#41;   - name: Tutorial     content: &amp;#40;== include google/foo/tutorial.md ==&amp;#41;     subpages;     - name: Java       content: &amp;#40;== include google/foo/tutorial_java.md ==&amp;#41;   rules:   - selector: google.calendar.Calendar.Get     description: &gt;       ...   - selector: google.calendar.Calendar.Put     description: &gt;       ... &lt;/code&gt;&lt;/pre&gt; Documentation is provided in markdown syntax. In addition to standard markdown features, definition lists, tables and fenced code blocks are supported. Section headers can be provided and are interpreted relative to the section nesting of the context where a documentation fragment is embedded.  Documentation from the IDL is merged with documentation defined via the config at normalization time, where documentation provided by config rules overrides IDL provided.  A number of constructs specific to the API platform are supported in documentation text.  In order to reference a proto element, the following notation can be used: &lt;pre&gt;&lt;code&gt;&amp;#91;fully.qualified.proto.name]&amp;#91;]&lt;/code&gt;&lt;/pre&gt; To override the display text used for the link, this can be used: &lt;pre&gt;&lt;code&gt;&amp;#91;display text]&amp;#91;fully.qualified.proto.name]&lt;/code&gt;&lt;/pre&gt; Text can be excluded from doc using the following notation: &lt;pre&gt;&lt;code&gt;&amp;#40;-- internal comment --&amp;#41;&lt;/code&gt;&lt;/pre&gt;  A few directives are available in documentation. Note that directives must appear on a single line to be properly identified. The `include` directive includes a markdown file from an external source: &lt;pre&gt;&lt;code&gt;&amp;#40;== include path/to/file ==&amp;#41;&lt;/code&gt;&lt;/pre&gt; The `resource_for` directive marks a message to be the resource of a collection in REST view. If it is not specified, tools attempt to infer the resource from the operations in a collection: &lt;pre&gt;&lt;code&gt;&amp;#40;== resource_for v1.shelves.books ==&amp;#41;&lt;/code&gt;&lt;/pre&gt; The directive `suppress_warning` does not directly affect documentation and is documented together with service config validation.
   */
  export interface Schema$Documentation {
    /**
     * The URL to the root of documentation.
     */
    documentationRootUrl?: string | null;
    /**
     * Declares a single overview page. For example: &lt;pre&gt;&lt;code&gt;documentation:   summary: ...   overview: &amp;#40;== include overview.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; This is a shortcut for the following declaration (using pages style): &lt;pre&gt;&lt;code&gt;documentation:   summary: ...   pages:   - name: Overview     content: &amp;#40;== include overview.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; Note: you cannot specify both `overview` field and `pages` field.
     */
    overview?: string | null;
    /**
     * The top level pages for the documentation set.
     */
    pages?: Schema$Page[];
    /**
     * A list of documentation rules that apply to individual API elements.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$DocumentationRule[];
    /**
     * Specifies the service root url if the default one (the service name from the yaml file) is not suitable. This can be seen in any fully specified service urls as well as sections that show a base that other urls are relative to.
     */
    serviceRootUrl?: string | null;
    /**
     * A short summary of what the service does. Can only be provided by plain text.
     */
    summary?: string | null;
  }
  /**
   * A documentation rule provides information about individual API elements.
   */
  export interface Schema$DocumentationRule {
    /**
     * Deprecation description of the selected element(s). It can be provided if an element is marked as `deprecated`.
     */
    deprecationDescription?: string | null;
    /**
     * Description of the selected API(s).
     */
    description?: string | null;
    /**
     * The selector is a comma-separated list of patterns. Each pattern is a qualified name of the element which may end in &quot;*&quot;, indicating a wildcard. Wildcards are only allowed at the end and for a whole component of the qualified name, i.e. &quot;foo.*&quot; is ok, but not &quot;foo.b*&quot; or &quot;foo.*.bar&quot;. A wildcard will match one or more components. To specify a default for all applicable elements, the whole pattern &quot;*&quot; is used.
     */
    selector?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * `Endpoint` describes a network endpoint that serves a set of APIs. A service may expose any number of endpoints, and all endpoints share the same service configuration, such as quota configuration and monitoring configuration.  Example service configuration:      name: library-example.googleapis.com     endpoints:       # Below entry makes &#39;google.example.library.v1.Library&#39;       # API be served from endpoint address library-example.googleapis.com.       # It also allows HTTP OPTIONS calls to be passed to the backend, for       # it to decide whether the subsequent cross-origin request is       # allowed to proceed.     - name: library-example.googleapis.com       allow_cors: true
   */
  export interface Schema$Endpoint {
    /**
     * DEPRECATED: This field is no longer supported. Instead of using aliases, please specify multiple google.api.Endpoint for each of the intended aliases.  Additional names that this endpoint will be hosted on.
     */
    aliases?: string[] | null;
    /**
     * Allowing [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka cross-domain traffic, would allow the backends served from this endpoint to receive and respond to HTTP OPTIONS requests. The response will be used by the browser to determine whether the subsequent cross-origin request is allowed to proceed.
     */
    allowCors?: boolean | null;
    /**
     * The canonical name of this endpoint.
     */
    name?: string | null;
    /**
     * The specification of an Internet routable address of API frontend that will handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary). It should be either a valid IPv4 address or a fully-qualified domain name. For example, &quot;8.8.8.8&quot; or &quot;myservice.appspot.com&quot;.
     */
    target?: string | null;
  }
  /**
   * Enum type definition.
   */
  export interface Schema$Enum {
    /**
     * Enum value definitions.
     */
    enumvalue?: Schema$EnumValue[];
    /**
     * Enum type name.
     */
    name?: string | null;
    /**
     * Protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * The source context.
     */
    sourceContext?: Schema$SourceContext;
    /**
     * The source syntax.
     */
    syntax?: string | null;
  }
  /**
   * Enum value definition.
   */
  export interface Schema$EnumValue {
    /**
     * Enum value name.
     */
    name?: string | null;
    /**
     * Enum value number.
     */
    number?: number | null;
    /**
     * Protocol buffer options.
     */
    options?: Schema$Option[];
  }
  /**
   * A single field of a message type.
   */
  export interface Schema$Field {
    /**
     * The field cardinality.
     */
    cardinality?: string | null;
    /**
     * The string value of the default value of this field. Proto2 syntax only.
     */
    defaultValue?: string | null;
    /**
     * The field JSON name.
     */
    jsonName?: string | null;
    /**
     * The field type.
     */
    kind?: string | null;
    /**
     * The field name.
     */
    name?: string | null;
    /**
     * The field number.
     */
    number?: number | null;
    /**
     * The index of the field type in `Type.oneofs`, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
     */
    oneofIndex?: number | null;
    /**
     * The protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * Whether to use alternative packed wire representation.
     */
    packed?: boolean | null;
    /**
     * The field type URL, without the scheme, for message or enumeration types. Example: `&quot;type.googleapis.com/google.protobuf.Timestamp&quot;`.
     */
    typeUrl?: string | null;
  }
  /**
   * Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods.
   */
  export interface Schema$Http {
    /**
     * When set to true, URL path parameters will be fully URI-decoded except in cases of single segment matches in reserved expansion, where &quot;%2F&quot; will be left encoded.  The default behavior is to not decode RFC 6570 reserved characters in multi segment matches.
     */
    fullyDecodeReservedExpansion?: boolean | null;
    /**
     * A list of HTTP configuration rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$HttpRule[];
  }
  /**
   * # gRPC Transcoding  gRPC Transcoding is a feature for mapping between a gRPC method and one or more HTTP REST endpoints. It allows developers to build a single API service that supports both gRPC APIs and REST APIs. Many systems, including [Google APIs](https://github.com/googleapis/googleapis), [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC Gateway](https://github.com/grpc-ecosystem/grpc-gateway), and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature and use it for large scale production services.  `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies how different portions of the gRPC request message are mapped to the URL path, URL query parameters, and HTTP request body. It also controls how the gRPC response message is mapped to the HTTP response body. `HttpRule` is typically specified as an `google.api.http` annotation on the gRPC method.  Each mapping specifies a URL path template and an HTTP method. The path template may refer to one or more fields in the gRPC request message, as long as each field is a non-repeated field with a primitive (non-message) type. The path template controls how fields of the request message are mapped to the URL path.  Example:      service Messaging {       rpc GetMessage(GetMessageRequest) returns (Message) {         option (google.api.http) = {             get: &quot;/v1/{name=messages/*}&quot;         };       }     }     message GetMessageRequest {       string name = 1; // Mapped to URL path.     }     message Message {       string text = 1; // The resource content.     }  This enables an HTTP REST to gRPC mapping as below:  HTTP | gRPC -----|----- `GET /v1/messages/123456`  | `GetMessage(name: &quot;messages/123456&quot;)`  Any fields in the request message which are not bound by the path template automatically become HTTP query parameters if there is no HTTP request body. For example:      service Messaging {       rpc GetMessage(GetMessageRequest) returns (Message) {         option (google.api.http) = {             get:&quot;/v1/messages/{message_id}&quot;         };       }     }     message GetMessageRequest {       message SubMessage {         string subfield = 1;       }       string message_id = 1; // Mapped to URL path.       int64 revision = 2;    // Mapped to URL query parameter `revision`.       SubMessage sub = 3;    // Mapped to URL query parameter `sub.subfield`.     }  This enables a HTTP JSON to RPC mapping as below:  HTTP | gRPC -----|----- `GET /v1/messages/123456?revision=2&amp;sub.subfield=foo` | `GetMessage(message_id: &quot;123456&quot; revision: 2 sub: SubMessage(subfield: &quot;foo&quot;))`  Note that fields which are mapped to URL query parameters must have a primitive type or a repeated primitive type or a non-repeated message type. In the case of a repeated type, the parameter can be repeated in the URL as `...?param=A&amp;param=B`. In the case of a message type, each field of the message is mapped to a separate parameter, such as `...?foo.a=A&amp;foo.b=B&amp;foo.c=C`.  For HTTP methods that allow a request body, the `body` field specifies the mapping. Consider a REST update method on the message resource collection:      service Messaging {       rpc UpdateMessage(UpdateMessageRequest) returns (Message) {         option (google.api.http) = {           patch: &quot;/v1/messages/{message_id}&quot;           body: &quot;message&quot;         };       }     }     message UpdateMessageRequest {       string message_id = 1; // mapped to the URL       Message message = 2;   // mapped to the body     }  The following HTTP JSON to RPC mapping is enabled, where the representation of the JSON in the request body is determined by protos JSON encoding:  HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { &quot;text&quot;: &quot;Hi!&quot; }` | `UpdateMessage(message_id: &quot;123456&quot; message { text: &quot;Hi!&quot; })`  The special name `*` can be used in the body mapping to define that every field not bound by the path template should be mapped to the request body.  This enables the following alternative definition of the update method:      service Messaging {       rpc UpdateMessage(Message) returns (Message) {         option (google.api.http) = {           patch: &quot;/v1/messages/{message_id}&quot;           body: &quot;*&quot;         };       }     }     message Message {       string message_id = 1;       string text = 2;     }   The following HTTP JSON to RPC mapping is enabled:  HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { &quot;text&quot;: &quot;Hi!&quot; }` | `UpdateMessage(message_id: &quot;123456&quot; text: &quot;Hi!&quot;)`  Note that when using `*` in the body mapping, it is not possible to have HTTP parameters, as all fields not bound by the path end in the body. This makes this option more rarely used in practice when defining REST APIs. The common usage of `*` is in custom methods which don&#39;t use the URL at all for transferring data.  It is possible to define multiple HTTP methods for one RPC by using the `additional_bindings` option. Example:      service Messaging {       rpc GetMessage(GetMessageRequest) returns (Message) {         option (google.api.http) = {           get: &quot;/v1/messages/{message_id}&quot;           additional_bindings {             get: &quot;/v1/users/{user_id}/messages/{message_id}&quot;           }         };       }     }     message GetMessageRequest {       string message_id = 1;       string user_id = 2;     }  This enables the following two alternative HTTP JSON to RPC mappings:  HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(message_id: &quot;123456&quot;)` `GET /v1/users/me/messages/123456` | `GetMessage(user_id: &quot;me&quot; message_id: &quot;123456&quot;)`  ## Rules for HTTP mapping  1. Leaf request fields (recursive expansion nested messages in the request    message) are classified into three categories:    - Fields referred by the path template. They are passed via the URL path.    - Fields referred by the HttpRule.body. They are passed via the HTTP      request body.    - All other fields are passed via the URL query parameters, and the      parameter name is the field path in the request message. A repeated      field can be represented as multiple query parameters under the same      name.  2. If HttpRule.body is &quot;*&quot;, there is no URL query parameter, all fields     are passed via URL path and HTTP request body.  3. If HttpRule.body is omitted, there is no HTTP request body, all     fields are passed via URL path and URL query parameters.  ### Path template syntax      Template = &quot;/&quot; Segments [ Verb ] ;     Segments = Segment { &quot;/&quot; Segment } ;     Segment  = &quot;*&quot; | &quot;**&quot; | LITERAL | Variable ;     Variable = &quot;{&quot; FieldPath [ &quot;=&quot; Segments ] &quot;}&quot; ;     FieldPath = IDENT { &quot;.&quot; IDENT } ;     Verb     = &quot;:&quot; LITERAL ;  The syntax `*` matches a single URL path segment. The syntax `**` matches zero or more URL path segments, which must be the last part of the URL path except the `Verb`.  The syntax `Variable` matches part of the URL path as specified by its template. A variable template must not contain other variables. If a variable matches a single path segment, its template may be omitted, e.g. `{var}` is equivalent to `{var=*}`.  The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL` contains any reserved character, such characters should be percent-encoded before the matching.  If a variable contains exactly one path segment, such as `&quot;{var}&quot;` or `&quot;{var=*}&quot;`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{var}`.  If a variable contains multiple path segments, such as `&quot;{var=foo/*}&quot;` or `&quot;{var=**}&quot;`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding, except &quot;%2F&quot; and &quot;%2f&quot; are left unchanged. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{+var}`.  ## Using gRPC API Service Configuration  gRPC API Service Configuration (service config) is a configuration language for configuring a gRPC service to become a user-facing product. The service config is simply the YAML representation of the `google.api.Service` proto message.  As an alternative to annotating your proto file, you can configure gRPC transcoding in your service config YAML files. You do this by specifying a `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same effect as the proto annotation. This can be particularly useful if you have a proto that is reused in multiple services. Note that any transcoding specified in the service config will override any matching transcoding configuration in the proto.  Example:      http:       rules:         # Selects a gRPC method and applies HttpRule to it.         - selector: example.v1.Messaging.GetMessage           get: /v1/messages/{message_id}/{sub.subfield}  ## Special notes  When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the proto to JSON conversion must follow the [proto3 specification](https://developers.google.com/protocol-buffers/docs/proto3#json).  While the single segment variable follows the semantics of [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String Expansion, the multi segment variable **does not** follow RFC 6570 Section 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion does not expand special characters like `?` and `#`, which would lead to invalid URLs. As the result, gRPC Transcoding uses a custom encoding for multi segment variables.  The path variables **must not** refer to any repeated or mapped field, because client libraries are not capable of handling such variable expansion.  The path variables **must not** capture the leading &quot;/&quot; character. The reason is that the most common use case &quot;{var}&quot; does not capture the leading &quot;/&quot; character. For consistency, all path variables must share the same behavior.  Repeated message fields must not be mapped to URL query parameters, because no client library can support such complicated mapping.  If an API needs to use a JSON array for request or response body, it can map the request or response body to a repeated field. However, some gRPC Transcoding implementations may not support this feature.
   */
  export interface Schema$HttpRule {
    /**
     * Additional HTTP bindings for the selector. Nested bindings must not contain an `additional_bindings` field themselves (that is, the nesting may only be one level deep).
     */
    additionalBindings?: Schema$HttpRule[];
    /**
     * When this flag is set to true, HTTP requests will be allowed to invoke a half-duplex streaming method.
     */
    allowHalfDuplex?: boolean | null;
    /**
     * The name of the request field whose value is mapped to the HTTP request body, or `*` for mapping all request fields not captured by the path pattern to the HTTP body, or omitted for not having any HTTP request body.  NOTE: the referred field must be present at the top-level of the request message type.
     */
    body?: string | null;
    /**
     * The custom pattern is used for specifying an HTTP method that is not included in the `pattern` field, such as HEAD, or &quot;*&quot; to leave the HTTP method unspecified for this rule. The wild-card rule is useful for services that provide content to Web (HTML) clients.
     */
    custom?: Schema$CustomHttpPattern;
    /**
     * Maps to HTTP DELETE. Used for deleting a resource.
     */
    delete?: string | null;
    /**
     * Maps to HTTP GET. Used for listing and getting information about resources.
     */
    get?: string | null;
    /**
     * Maps to HTTP PATCH. Used for updating a resource.
     */
    patch?: string | null;
    /**
     * Maps to HTTP POST. Used for creating a resource or performing an action.
     */
    post?: string | null;
    /**
     * Maps to HTTP PUT. Used for replacing a resource.
     */
    put?: string | null;
    /**
     * Optional. The name of the response field whose value is mapped to the HTTP response body. When omitted, the entire response message will be used as the HTTP response body.  NOTE: The referred field must be present at the top-level of the response message type.
     */
    responseBody?: string | null;
    /**
     * Selects a method to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * Specifies a location to extract JWT from an API request.
   */
  export interface Schema$JwtLocation {
    /**
     * Specifies HTTP header name to extract JWT token.
     */
    header?: string | null;
    /**
     * Specifies URL query parameter name to extract JWT token.
     */
    query?: string | null;
    /**
     * The value prefix. The value format is &quot;value_prefix{token}&quot; Only applies to &quot;in&quot; header type. Must be empty for &quot;in&quot; query type. If not empty, the header value has to match (case sensitive) this prefix. If not matched, JWT will not be extracted. If matched, JWT will be extracted after the prefix is removed.  For example, for &quot;Authorization: Bearer {JWT}&quot;, value_prefix=&quot;Bearer &quot; with a space at the end.
     */
    valuePrefix?: string | null;
  }
  /**
   * A description of a label.
   */
  export interface Schema$LabelDescriptor {
    /**
     * A human-readable description for the label.
     */
    description?: string | null;
    /**
     * The label key.
     */
    key?: string | null;
    /**
     * The type of data that can be assigned to the label.
     */
    valueType?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Response for the list request.
   */
  export interface Schema$ListTenancyUnitsResponse {
    /**
     * Pagination token for large results.
     */
    nextPageToken?: string | null;
    /**
     * Tenancy units matching the request.
     */
    tenancyUnits?: Schema$TenancyUnit[];
  }
  /**
   * A description of a log type. Example in YAML format:      - name: library.googleapis.com/activity_history       description: The history of borrowing and returning library items.       display_name: Activity       labels:       - key: /customer_id         description: Identifier of a library customer
   */
  export interface Schema$LogDescriptor {
    /**
     * A human-readable description of this log. This information appears in the documentation and can contain details.
     */
    description?: string | null;
    /**
     * The human-readable name for this log. This information appears on the user interface and should be concise.
     */
    displayName?: string | null;
    /**
     * The set of labels that are available to describe a specific log entry. Runtime requests that contain labels not specified here are considered invalid.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * The name of the log. It must be less than 512 characters long and can include the following characters: upper- and lower-case alphanumeric characters [A-Za-z0-9], and punctuation characters including slash, underscore, hyphen, period [/_-.].
     */
    name?: string | null;
  }
  /**
   * Logging configuration of the service.  The following example shows how to configure logs to be sent to the producer and consumer projects. In the example, the `activity_history` log is sent to both the producer and consumer projects, whereas the `purchase_history` log is only sent to the producer project.      monitored_resources:     - type: library.googleapis.com/branch       labels:       - key: /city         description: The city where the library branch is located in.       - key: /name         description: The name of the branch.     logs:     - name: activity_history       labels:       - key: /customer_id     - name: purchase_history     logging:       producer_destinations:       - monitored_resource: library.googleapis.com/branch         logs:         - activity_history         - purchase_history       consumer_destinations:       - monitored_resource: library.googleapis.com/branch         logs:         - activity_history
   */
  export interface Schema$Logging {
    /**
     * Logging configurations for sending logs to the consumer project. There can be multiple consumer destinations, each one must have a different monitored resource type. A log can be used in at most one consumer destination.
     */
    consumerDestinations?: Schema$LoggingDestination[];
    /**
     * Logging configurations for sending logs to the producer project. There can be multiple producer destinations, each one must have a different monitored resource type. A log can be used in at most one producer destination.
     */
    producerDestinations?: Schema$LoggingDestination[];
  }
  /**
   * Configuration of a specific logging destination (the producer project or the consumer project).
   */
  export interface Schema$LoggingDestination {
    /**
     * Names of the logs to be sent to this destination. Each name must be defined in the Service.logs section. If the log name is not a domain scoped name, it will be automatically prefixed with the service name followed by &quot;/&quot;.
     */
    logs?: string[] | null;
    /**
     * The monitored resource type. The type must be defined in the Service.monitored_resources section.
     */
    monitoredResource?: string | null;
  }
  /**
   * Method represents a method of an API interface.
   */
  export interface Schema$Method {
    /**
     * The simple name of this method.
     */
    name?: string | null;
    /**
     * Any metadata attached to the method.
     */
    options?: Schema$Option[];
    /**
     * If true, the request is streamed.
     */
    requestStreaming?: boolean | null;
    /**
     * A URL of the input message type.
     */
    requestTypeUrl?: string | null;
    /**
     * If true, the response is streamed.
     */
    responseStreaming?: boolean | null;
    /**
     * The URL of the output message type.
     */
    responseTypeUrl?: string | null;
    /**
     * The source syntax of this method.
     */
    syntax?: string | null;
  }
  /**
   * Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type&#39;s existing data unusable.  The following are specific rules for service defined Monitoring metric descriptors:  * `type`, `metric_kind`, `value_type`, `description`, `display_name`,   `launch_stage` fields are all required. The `unit` field must be specified   if the `value_type` is any of DOUBLE, INT64, DISTRIBUTION. * Maximum of default 500 metric descriptors per service is allowed. * Maximum of default 10 labels per metric descriptor is allowed.  The default maximum limit can be overridden. Please follow https://cloud.google.com/monitoring/quotas
   */
  export interface Schema$MetricDescriptor {
    /**
     * A detailed description of the metric, which can be used in documentation.
     */
    description?: string | null;
    /**
     * A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example &quot;Request count&quot;. This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
     */
    displayName?: string | null;
    /**
     * The set of labels that can be used to describe a specific instance of this metric type.  The label key name must follow:  * Only upper and lower-case letters, digits and underscores (_) are   allowed. * Label name must start with a letter or digit. * The maximum length of a label name is 100 characters.  For example, the `appengine.googleapis.com/http/server/response_latencies` metric type has a label for the HTTP response code, `response_code`, so you can look at latencies for successful responses or just for responses that failed.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Optional. The launch stage of the metric definition.
     */
    launchStage?: string | null;
    /**
     * Optional. Metadata which can be used to guide usage of the metric.
     */
    metadata?: Schema$MetricDescriptorMetadata;
    /**
     * Whether the metric records instantaneous values, changes to a value, etc. Some combinations of `metric_kind` and `value_type` might not be supported.
     */
    metricKind?: string | null;
    /**
     * Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here.
     */
    monitoredResourceTypes?: string[] | null;
    /**
     * The resource name of the metric descriptor.
     */
    name?: string | null;
    /**
     * The metric type, including its DNS name prefix. The type is not URL-encoded.  All service defined metrics must be prefixed with the service name, in the format of `{service name}/{relative metric name}`, such as `cloudsql.googleapis.com/database/cpu/utilization`. The relative metric name must follow:  * Only upper and lower-case letters, digits, &#39;/&#39; and underscores &#39;_&#39; are   allowed. * The maximum number of characters allowed for the relative_metric_name is   100.  All user-defined metric types have the DNS name `custom.googleapis.com`, `external.googleapis.com`, or `logging.googleapis.com/user/`.  Metric types should use a natural hierarchical grouping. For example:      &quot;custom.googleapis.com/invoice/paid/amount&quot;     &quot;external.googleapis.com/prometheus/up&quot;     &quot;appengine.googleapis.com/http/server/response_latencies&quot;
     */
    type?: string | null;
    /**
     * The units in which the metric value is reported. It is only applicable if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit` defines the representation of the stored metric values.  Different systems may scale the values to be more easily displayed (so a value of `0.02KBy` _might_ be displayed as `20By`, and a value of `3523KBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is `KBy`, then the value of the metric is always in thousands of bytes, no matter how it may be displayed..  If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is `s{CPU}` (or equivalently `1s{CPU}` or just `s`). If the job uses 12,005 CPU-seconds, then the value is written as `12005`.  Alternatively, if you want a custom metric to record data in a more granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is `ks{CPU}`, and then write the value `12.005` (which is `12005/1000`), or use `Kis{CPU}` and write `11.723` (which is `12005/1024`).  The supported units are a subset of [The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard:  **Basic units (UNIT)**  * `bit`   bit * `By`    byte * `s`     second * `min`   minute * `h`     hour * `d`     day * `1`     dimensionless  **Prefixes (PREFIX)**  * `k`     kilo    (10^3) * `M`     mega    (10^6) * `G`     giga    (10^9) * `T`     tera    (10^12) * `P`     peta    (10^15) * `E`     exa     (10^18) * `Z`     zetta   (10^21) * `Y`     yotta   (10^24)  * `m`     milli   (10^-3) * `u`     micro   (10^-6) * `n`     nano    (10^-9) * `p`     pico    (10^-12) * `f`     femto   (10^-15) * `a`     atto    (10^-18) * `z`     zepto   (10^-21) * `y`     yocto   (10^-24)  * `Ki`    kibi    (2^10) * `Mi`    mebi    (2^20) * `Gi`    gibi    (2^30) * `Ti`    tebi    (2^40) * `Pi`    pebi    (2^50)  **Grammar**  The grammar also includes these connectors:  * `/`    division or ratio (as an infix operator). For examples,          `kBy/{email}` or `MiBy/10ms` (although you should almost never          have `/s` in a metric `unit`; rates should always be computed at          query time from the underlying cumulative or delta value). * `.`    multiplication or composition (as an infix operator). For          examples, `GBy.d` or `k{watt}.h`.  The grammar for a unit is as follows:      Expression = Component { &quot;.&quot; Component } { &quot;/&quot; Component } ;      Component = ( [ PREFIX ] UNIT | &quot;%&quot; ) [ Annotation ]               | Annotation               | &quot;1&quot;               ;      Annotation = &quot;{&quot; NAME &quot;}&quot; ;  Notes:  * `Annotation` is just a comment if it follows a `UNIT`. If the annotation    is used alone, then the unit is equivalent to `1`. For examples,    `{request}/s == 1/s`, `By{transmitted}/s == By/s`. * `NAME` is a sequence of non-blank printable ASCII characters not    containing `{` or `}`. * `1` represents a unitary [dimensionless    unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such    as in `1/s`. It is typically used when none of the basic units are    appropriate. For example, &quot;new users per day&quot; can be represented as    `1/d` or `{new-users}/d` (and a metric value `5` would mean &quot;5 new    users). Alternatively, &quot;thousands of page views per day&quot; would be    represented as `1000/d` or `k1/d` or `k{page_views}/d` (and a metric    value of `5.3` would mean &quot;5300 page views per day&quot;). * `%` represents dimensionless value of 1/100, and annotates values giving    a percentage (so the metric values are typically in the range of 0..100,    and a metric value `3` means &quot;3 percent&quot;). * `10^2.%` indicates a metric contains a ratio, typically in the range    0..1, that will be multiplied by 100 and displayed as a percentage    (so a metric value `0.03` means &quot;3 percent&quot;).
     */
    unit?: string | null;
    /**
     * Whether the measurement is an integer, a floating-point number, etc. Some combinations of `metric_kind` and `value_type` might not be supported.
     */
    valueType?: string | null;
  }
  /**
   * Additional annotations that can be used to guide the usage of a metric.
   */
  export interface Schema$MetricDescriptorMetadata {
    /**
     * The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors.
     */
    ingestDelay?: string | null;
    /**
     * Deprecated. Must use the MetricDescriptor.launch_stage instead.
     */
    launchStage?: string | null;
    /**
     * The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period.
     */
    samplePeriod?: string | null;
  }
  /**
   * Bind API methods to metrics. Binding a method to a metric causes that metric&#39;s configured quota behaviors to apply to the method call.
   */
  export interface Schema$MetricRule {
    /**
     * Metrics to update when the selected methods are called, and the associated cost applied to each metric.  The key of the map is the metric name, and the values are the amount increased for the metric against which the quota limits are defined. The value must not be negative.
     */
    metricCosts?: {[key: string]: string} | null;
    /**
     * Selects the methods to which this rule applies.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * Declares an API Interface to be included in this interface. The including interface must redeclare all the methods from the included interface, but documentation and options are inherited as follows:  - If after comment and whitespace stripping, the documentation   string of the redeclared method is empty, it will be inherited   from the original method.  - Each annotation belonging to the service config (http,   visibility) which is not set in the redeclared method will be   inherited.  - If an http annotation is inherited, the path pattern will be   modified as follows. Any version prefix will be replaced by the   version of the including interface plus the root path if   specified.  Example of a simple mixin:      package google.acl.v1;     service AccessControl {       // Get the underlying ACL object.       rpc GetAcl(GetAclRequest) returns (Acl) {         option (google.api.http).get = &quot;/v1/{resource=**}:getAcl&quot;;       }     }      package google.storage.v2;     service Storage {       //       rpc GetAcl(GetAclRequest) returns (Acl);        // Get a data record.       rpc GetData(GetDataRequest) returns (Data) {         option (google.api.http).get = &quot;/v2/{resource=**}&quot;;       }     }  Example of a mixin configuration:      apis:     - name: google.storage.v2.Storage       mixins:       - name: google.acl.v1.AccessControl  The mixin construct implies that all methods in `AccessControl` are also declared with same name and request/response types in `Storage`. A documentation generator or annotation processor will see the effective `Storage.GetAcl` method after inherting documentation and annotations as follows:      service Storage {       // Get the underlying ACL object.       rpc GetAcl(GetAclRequest) returns (Acl) {         option (google.api.http).get = &quot;/v2/{resource=**}:getAcl&quot;;       }       ...     }  Note how the version in the path pattern changed from `v1` to `v2`.  If the `root` field in the mixin is specified, it should be a relative path under which inherited HTTP paths are placed. Example:      apis:     - name: google.storage.v2.Storage       mixins:       - name: google.acl.v1.AccessControl         root: acls  This implies the following inherited HTTP annotation:      service Storage {       // Get the underlying ACL object.       rpc GetAcl(GetAclRequest) returns (Acl) {         option (google.api.http).get = &quot;/v2/acls/{resource=**}:getAcl&quot;;       }       ...     }
   */
  export interface Schema$Mixin {
    /**
     * The fully qualified name of the interface which is included.
     */
    name?: string | null;
    /**
     * If non-empty specifies a path under which inherited HTTP paths are rooted.
     */
    root?: string | null;
  }
  /**
   * An object that describes the schema of a MonitoredResource object using a type name and a set of labels.  For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of `&quot;gce_instance&quot;` and specifies the use of the labels `&quot;instance_id&quot;` and `&quot;zone&quot;` to identify particular VM instances.  Different services can support different monitored resource types.  The following are specific rules to service defined monitored resources for Monitoring and Logging:  * The `type`, `display_name`, `description`, `labels` and `launch_stage`   fields are all required. * The first label of the monitored resource descriptor must be   `resource_container`. There are legacy monitored resource descritptors   start with `project_id`. * It must include a `location` label. * Maximum of default 5 service defined monitored resource descriptors   is allowed per service. * Maximum of default 10 labels per monitored resource is allowed.  The default maximum limit can be overridden. Please follow https://cloud.google.com/monitoring/quotas
   */
  export interface Schema$MonitoredResourceDescriptor {
    /**
     * Optional. A detailed description of the monitored resource type that might be used in documentation.
     */
    description?: string | null;
    /**
     * Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, `&quot;Google Cloud SQL Database&quot;`.
     */
    displayName?: string | null;
    /**
     * Required. A set of labels used to describe instances of this monitored resource type. The label key name must follow:  * Only upper and lower-case letters, digits and underscores (_) are   allowed. * Label name must start with a letter or digit. * The maximum length of a label name is 100 characters.  For example, an individual Google Cloud SQL database is identified by values for the labels `database_id` and `location`.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Optional. The launch stage of the monitored resource definition.
     */
    launchStage?: string | null;
    /**
     * Optional. The resource name of the monitored resource descriptor: `&quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot;` where {type} is the value of the `type` field in this object and {project_id} is a project ID that provides API-specific context for accessing the type.  APIs that do not use project information can use the resource name format `&quot;monitoredResourceDescriptors/{type}&quot;`.
     */
    name?: string | null;
    /**
     * Required. The monitored resource type. For example, the type `cloudsql_database` represents databases in Google Cloud SQL.  All service defined monitored resource types must be prefixed with the service name, in the format of `{service name}/{relative resource name}`. The relative resource name must follow:  * Only upper and lower-case letters and digits are allowed. * It must start with upper case character and is recommended to use Upper   Camel Case style. * The maximum number of characters allowed for the relative_resource_name   is 100.  Note there are legacy service monitored resources not following this rule.
     */
    type?: string | null;
  }
  /**
   * Monitoring configuration of the service.  The example below shows how to configure monitored resources and metrics for monitoring. In the example, a monitored resource and two metrics are defined. The `library.googleapis.com/book/returned_count` metric is sent to both producer and consumer projects, whereas the `library.googleapis.com/book/num_overdue` metric is only sent to the consumer project.      monitored_resources:     - type: library.googleapis.com/Branch       display_name: &quot;Library Branch&quot;       description: &quot;A branch of a library.&quot;       launch_stage: GA       labels:       - key: resource_container         description: &quot;The Cloud container (ie. project id) for the Branch.&quot;       - key: location         description: &quot;The location of the library branch.&quot;       - key: branch_id         description: &quot;The id of the branch.&quot;     metrics:     - name: library.googleapis.com/book/returned_count       display_name: &quot;Books Returned&quot;       description: &quot;The count of books that have been returned.&quot;       launch_stage: GA       metric_kind: DELTA       value_type: INT64       unit: &quot;1&quot;       labels:       - key: customer_id         description: &quot;The id of the customer.&quot;     - name: library.googleapis.com/book/num_overdue       display_name: &quot;Books Overdue&quot;       description: &quot;The current number of overdue books.&quot;       launch_stage: GA       metric_kind: GAUGE       value_type: INT64       unit: &quot;1&quot;       labels:       - key: customer_id         description: &quot;The id of the customer.&quot;     monitoring:       producer_destinations:       - monitored_resource: library.googleapis.com/Branch         metrics:         - library.googleapis.com/book/returned_count       consumer_destinations:       - monitored_resource: library.googleapis.com/Branch         metrics:         - library.googleapis.com/book/returned_count         - library.googleapis.com/book/num_overdue
   */
  export interface Schema$Monitoring {
    /**
     * Monitoring configurations for sending metrics to the consumer project. There can be multiple consumer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.
     */
    consumerDestinations?: Schema$MonitoringDestination[];
    /**
     * Monitoring configurations for sending metrics to the producer project. There can be multiple producer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.
     */
    producerDestinations?: Schema$MonitoringDestination[];
  }
  /**
   * Configuration of a specific monitoring destination (the producer project or the consumer project).
   */
  export interface Schema$MonitoringDestination {
    /**
     * Types of the metrics to report to this monitoring destination. Each type must be defined in Service.metrics section.
     */
    metrics?: string[] | null;
    /**
     * The monitored resource type. The type must be defined in Service.monitored_resources section.
     */
    monitoredResource?: string | null;
  }
  /**
   * OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for &quot;Read-only access to Google Calendar&quot; and &quot;Access to Cloud Platform&quot;. Users can consent to a scope for an application, giving it permission to access that data on their behalf.  OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means.  In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs.  When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice.  Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions.
   */
  export interface Schema$OAuthRequirements {
    /**
     * The list of publicly documented OAuth scopes that are allowed access. An OAuth token containing any of these scopes will be accepted.  Example:       canonical_scopes: https://www.googleapis.com/auth/calendar,                        https://www.googleapis.com/auth/calendar.read
     */
    canonicalScopes?: string | null;
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
   * A protocol buffer option, which can be attached to a message, field, enumeration, etc.
   */
  export interface Schema$Option {
    /**
     * The option&#39;s name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, `&quot;map_entry&quot;`. For custom options, it should be the fully-qualified name. For example, `&quot;google.api.http&quot;`.
     */
    name?: string | null;
    /**
     * The option&#39;s value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.
     */
    value?: {[key: string]: any} | null;
  }
  /**
   * Represents a documentation page. A page can contain subpages to represent nested documentation set structure.
   */
  export interface Schema$Page {
    /**
     * The Markdown content of the page. You can use &lt;code&gt;&amp;#40;== include {path} ==&amp;#41;&lt;/code&gt; to include content from a Markdown file.
     */
    content?: string | null;
    /**
     * The name of the page. It will be used as an identity of the page to generate URI of the page, text of the link to this page in navigation, etc. The full page name (start from the root page name to this page concatenated with `.`) can be used as reference to the page in your documentation. For example: &lt;pre&gt;&lt;code&gt;pages: - name: Tutorial   content: &amp;#40;== include tutorial.md ==&amp;#41;   subpages:   - name: Java     content: &amp;#40;== include tutorial_java.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; You can reference `Java` page using Markdown reference link syntax: `Java`.
     */
    name?: string | null;
    /**
     * Subpages of this page. The order of subpages specified here will be honored in the generated docset.
     */
    subpages?: Schema$Page[];
  }
  /**
   * Translates to IAM Policy bindings (without auditing at this level)
   */
  export interface Schema$PolicyBinding {
    /**
     * Uses the same format as in IAM policy. `member` must include both a prefix and ID. For example, `user:{emailId}`, `serviceAccount:{emailId}`, `group:{emailId}`.
     */
    members?: string[] | null;
    /**
     * Role. (https://cloud.google.com/iam/docs/understanding-roles) For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Quota configuration helps to achieve fairness and budgeting in service usage.  The metric based quota configuration works this way: - The service configuration defines a set of metrics. - For API calls, the quota.metric_rules maps methods to metrics with   corresponding costs. - The quota.limits defines limits on the metrics, which will be used for   quota checks at runtime.  An example quota configuration in yaml format:     quota:      limits:       - name: apiWriteQpsPerProject        metric: library.googleapis.com/write_calls        unit: &quot;1/min/{project}&quot;  # rate limit for consumer projects        values:          STANDARD: 10000        # The metric rules bind all methods to the read_calls metric,      # except for the UpdateBook and DeleteBook methods. These two methods      # are mapped to the write_calls metric, with the UpdateBook method      # consuming at twice rate as the DeleteBook method.      metric_rules:      - selector: &quot;*&quot;        metric_costs:          library.googleapis.com/read_calls: 1      - selector: google.example.library.v1.LibraryService.UpdateBook        metric_costs:          library.googleapis.com/write_calls: 2      - selector: google.example.library.v1.LibraryService.DeleteBook        metric_costs:          library.googleapis.com/write_calls: 1   Corresponding Metric definition:       metrics:      - name: library.googleapis.com/read_calls        display_name: Read requests        metric_kind: DELTA        value_type: INT64       - name: library.googleapis.com/write_calls        display_name: Write requests        metric_kind: DELTA        value_type: INT64
   */
  export interface Schema$Quota {
    /**
     * List of `QuotaLimit` definitions for the service.
     */
    limits?: Schema$QuotaLimit[];
    /**
     * List of `MetricRule` definitions, each one mapping a selected method to one or more metrics.
     */
    metricRules?: Schema$MetricRule[];
  }
  /**
   * `QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`.
   */
  export interface Schema$QuotaLimit {
    /**
     * Default number of tokens that can be consumed during the specified duration. This is the number of tokens assigned when a client application developer activates the service for his/her project.  Specifying a value of 0 will block all requests. This can be used if you are provisioning quota to selected consumers and blocking others. Similarly, a value of -1 will indicate an unlimited quota. No other negative values are allowed.  Used by group-based quotas only.
     */
    defaultLimit?: string | null;
    /**
     * Optional. User-visible, extended description for this quota limit. Should be used only when more context is needed to understand this limit than provided by the limit&#39;s display name (see: `display_name`).
     */
    description?: string | null;
    /**
     * User-visible display name for this limit. Optional. If not set, the UI will provide a default display name based on the quota configuration. This field can be used to override the default display name generated from the configuration.
     */
    displayName?: string | null;
    /**
     * Duration of this limit in textual notation. Must be &quot;100s&quot; or &quot;1d&quot;.  Used by group-based quotas only.
     */
    duration?: string | null;
    /**
     * Free tier value displayed in the Developers Console for this limit. The free tier is the number of tokens that will be subtracted from the billed amount when billing is enabled. This field can only be set on a limit with duration &quot;1d&quot;, in a billable group; it is invalid on any other limit. If this field is not set, it defaults to 0, indicating that there is no free tier for this service.  Used by group-based quotas only.
     */
    freeTier?: string | null;
    /**
     * Maximum number of tokens that can be consumed during the specified duration. Client application developers can override the default limit up to this maximum. If specified, this value cannot be set to a value less than the default limit. If not specified, it is set to the default limit.  To allow clients to apply overrides with no upper bound, set this to -1, indicating unlimited maximum quota.  Used by group-based quotas only.
     */
    maxLimit?: string | null;
    /**
     * The name of the metric this quota limit applies to. The quota limits with the same metric will be checked together during runtime. The metric must be defined within the service config.
     */
    metric?: string | null;
    /**
     * Name of the quota limit.  The name must be provided, and it must be unique within the service. The name can only include alphanumeric characters as well as &#39;-&#39;.  The maximum length of the limit name is 64 characters.
     */
    name?: string | null;
    /**
     * Specify the unit of the quota limit. It uses the same syntax as Metric.unit. The supported unit kinds are determined by the quota backend system.  Here are some examples: * &quot;1/min/{project}&quot; for quota per minute per project.  Note: the order of unit components is insignificant. The &quot;1&quot; at the beginning is required to follow the metric unit syntax.
     */
    unit?: string | null;
    /**
     * Tiered limit values. You must specify this as a key:value pair, with an integer value that is the maximum number of requests allowed for the specified unit. Currently only STANDARD is supported.
     */
    values?: {[key: string]: string} | null;
  }
  /**
   * Request message to remove a tenant project resource from the tenancy unit.
   */
  export interface Schema$RemoveTenantProjectRequest {
    /**
     * Tag of the resource within the tenancy unit.
     */
    tag?: string | null;
  }
  /**
   * Response for the search query.
   */
  export interface Schema$SearchTenancyUnitsResponse {
    /**
     * Pagination token for large results.
     */
    nextPageToken?: string | null;
    /**
     * Tenancy Units matching the request.
     */
    tenancyUnits?: Schema$TenancyUnit[];
  }
  /**
   * `Service` is the root object of Google service configuration schema. It describes basic information about a service, such as the name and the title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. See each proto message definition for details.  Example:      type: google.api.Service     config_version: 3     name: calendar.googleapis.com     title: Google Calendar API     apis:     - name: google.calendar.v3.Calendar     authentication:       providers:       - id: google_calendar_auth         jwks_uri: https://www.googleapis.com/oauth2/v1/certs         issuer: https://securetoken.google.com       rules:       - selector: &quot;*&quot;         requirements:           provider_id: google_calendar_auth
   */
  export interface Schema$Service {
    /**
     * A list of API interfaces exported by this service. Only the `name` field of the google.protobuf.Api needs to be provided by the configuration author, as the remaining fields will be derived from the IDL during the normalization process. It is an error to specify an API interface here which cannot be resolved against the associated IDL files.
     */
    apis?: Schema$Api[];
    /**
     * Auth configuration.
     */
    authentication?: Schema$Authentication;
    /**
     * API backend configuration.
     */
    backend?: Schema$Backend;
    /**
     * Billing configuration.
     */
    billing?: Schema$Billing;
    /**
     * The semantic version of the service configuration. The config version affects the interpretation of the service configuration. For example, certain features are enabled by default for certain config versions.  The latest config version is `3`.
     */
    configVersion?: number | null;
    /**
     * Context configuration.
     */
    context?: Schema$Context;
    /**
     * Configuration for the service control plane.
     */
    control?: Schema$Control;
    /**
     * Custom error configuration.
     */
    customError?: Schema$CustomError;
    /**
     * Additional API documentation.
     */
    documentation?: Schema$Documentation;
    /**
     * Configuration for network endpoints.  If this is empty, then an endpoint with the same name as the service is automatically generated to service all defined APIs.
     */
    endpoints?: Schema$Endpoint[];
    /**
     * A list of all enum types included in this API service.  Enums referenced directly or indirectly by the `apis` are automatically included.  Enums which are not referenced but shall be included should be listed here by name. Example:      enums:     - name: google.someapi.v1.SomeEnum
     */
    enums?: Schema$Enum[];
    /**
     * HTTP configuration.
     */
    http?: Schema$Http;
    /**
     * A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. Must be no longer than 63 characters and only lower case letters, digits, &#39;.&#39;, &#39;_&#39; and &#39;-&#39; are allowed. If empty, the server may choose to generate one instead.
     */
    id?: string | null;
    /**
     * Logging configuration.
     */
    logging?: Schema$Logging;
    /**
     * Defines the logs used by this service.
     */
    logs?: Schema$LogDescriptor[];
    /**
     * Defines the metrics used by this service.
     */
    metrics?: Schema$MetricDescriptor[];
    /**
     * Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations.
     */
    monitoredResources?: Schema$MonitoredResourceDescriptor[];
    /**
     * Monitoring configuration.
     */
    monitoring?: Schema$Monitoring;
    /**
     * The service name, which is a DNS-like logical identifier for the service, such as `calendar.googleapis.com`. The service name typically goes through DNS verification to make sure the owner of the service also owns the DNS name.
     */
    name?: string | null;
    /**
     * The Google project that owns this service.
     */
    producerProjectId?: string | null;
    /**
     * Quota configuration.
     */
    quota?: Schema$Quota;
    /**
     * Output only. The source information for this configuration if available.
     */
    sourceInfo?: Schema$SourceInfo;
    /**
     * System parameter configuration.
     */
    systemParameters?: Schema$SystemParameters;
    /**
     * A list of all proto message types included in this API service. It serves similar purpose as [google.api.Service.types], except that these types are not needed by user-defined APIs. Therefore, they will not show up in the generated discovery doc. This field should only be used to define system APIs in ESF.
     */
    systemTypes?: Schema$Type[];
    /**
     * The product title for this service.
     */
    title?: string | null;
    /**
     * A list of all proto message types included in this API service. Types referenced directly or indirectly by the `apis` are automatically included.  Messages which are not referenced but shall be included, such as types used by the `google.protobuf.Any` type, should be listed here by name. Example:      types:     - name: google.protobuf.Int32
     */
    types?: Schema$Type[];
    /**
     * Configuration controlling usage of this service.
     */
    usage?: Schema$Usage;
  }
  /**
   * Describes the service account configuration for the tenant project.
   */
  export interface Schema$ServiceAccountConfig {
    /**
     * ID of the IAM service account to be created in tenant project. The email format of the service account is &quot;&lt;account-id&gt;@&lt;tenant-project-id&gt;.iam.gserviceaccount.com&quot;. This account ID must be unique within tenant project and service producers have to guarantee it. The ID must be 6-30 characters long, and match the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])`.
     */
    accountId?: string | null;
    /**
     * Roles for the associated service account for the tenant project.
     */
    tenantProjectRoles?: string[] | null;
  }
  /**
   * The per-product per-project service identity for a service.   Use this field to configure per-product per-project service identity. Example of a service identity configuration.      usage:       service_identity:       - service_account_parent: &quot;projects/123456789&quot;         display_name: &quot;Cloud XXX Service Agent&quot;         description: &quot;Used as the identity of Cloud XXX to access resources&quot;
   */
  export interface Schema$ServiceIdentity {
    /**
     * Optional. A user-specified opaque description of the service account. Must be less than or equal to 256 UTF-8 bytes.
     */
    description?: string | null;
    /**
     * Optional. A user-specified name for the service account. Must be less than or equal to 100 UTF-8 bytes.
     */
    displayName?: string | null;
    /**
     * A service account project that hosts the service accounts.  An example name would be: `projects/123456789`
     */
    serviceAccountParent?: string | null;
  }
  /**
   * `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
   */
  export interface Schema$SourceContext {
    /**
     * The path-qualified name of the .proto file that contained the associated protobuf element.  For example: `&quot;google/protobuf/source_context.proto&quot;`.
     */
    fileName?: string | null;
  }
  /**
   * Source information used to create a Service Config
   */
  export interface Schema$SourceInfo {
    /**
     * All files used during config generation.
     */
    sourceFiles?: Array<{[key: string]: any}> | null;
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
  /**
   * Define a parameter&#39;s name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.
   */
  export interface Schema$SystemParameter {
    /**
     * Define the HTTP header name to use for the parameter. It is case insensitive.
     */
    httpHeader?: string | null;
    /**
     * Define the name of the parameter, such as &quot;api_key&quot; . It is case sensitive.
     */
    name?: string | null;
    /**
     * Define the URL query parameter name to use for the parameter. It is case sensitive.
     */
    urlQueryParameter?: string | null;
  }
  /**
   * Define a system parameter rule mapping system parameter definitions to methods.
   */
  export interface Schema$SystemParameterRule {
    /**
     * Define parameters. Multiple names may be defined for a parameter. For a given method call, only one of them should be used. If multiple names are used the behavior is implementation-dependent. If none of the specified names are present the behavior is parameter-dependent.
     */
    parameters?: Schema$SystemParameter[];
    /**
     * Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all methods in all APIs.  Refer to selector for syntax details.
     */
    selector?: string | null;
  }
  /**
   * ### System parameter configuration  A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters.
   */
  export interface Schema$SystemParameters {
    /**
     * Define system parameters.  The parameters defined here will override the default parameters implemented by the system. If this field is missing from the service config, default system parameters will be used. Default system parameters and names is implementation-dependent.  Example: define api key for all methods      system_parameters       rules:         - selector: &quot;*&quot;           parameters:             - name: api_key               url_query_parameter: api_key   Example: define 2 api key names for a specific method.      system_parameters       rules:         - selector: &quot;/ListShelves&quot;           parameters:             - name: api_key               http_header: Api-Key1             - name: api_key               http_header: Api-Key2  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$SystemParameterRule[];
  }
  /**
   * Representation of a tenancy unit.
   */
  export interface Schema$TenancyUnit {
    /**
     * @OutputOnly Cloud resource name of the consumer of this service. For example &#39;projects/123456&#39;.
     */
    consumer?: string | null;
    /**
     * @OutputOnly The time this tenancy unit was created.
     */
    createTime?: string | null;
    /**
     * Globally unique identifier of this tenancy unit &quot;services/{service}/{collection id}/{resource id}/tenancyUnits/{unit}&quot;
     */
    name?: string | null;
    /**
     * Output only. Google Cloud API name of the managed service owning this tenancy unit. For example &#39;serviceconsumermanagement.googleapis.com&#39;.
     */
    service?: string | null;
    /**
     * Resources constituting the tenancy unit. There can be at most 512 tenant resources in a tenancy unit.
     */
    tenantResources?: Schema$TenantResource[];
  }
  /**
   * This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal.
   */
  export interface Schema$TenantProjectConfig {
    /**
     * Billing account properties. The billing account must be specified.
     */
    billingConfig?: Schema$BillingConfig;
    /**
     * Folder where project in this tenancy unit must be located This folder must have been previously created with the required permissions for the caller to create and configure a project in it. Valid folder resource names have the format `folders/{folder_number}` (for example, `folders/123456`).
     */
    folder?: string | null;
    /**
     * Labels that are applied to this project.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Configuration for the IAM service account on the tenant project.
     */
    serviceAccountConfig?: Schema$ServiceAccountConfig;
    /**
     * Google Cloud API names of services that are activated on this project during provisioning.  If any of these services can&#39;t be activated, the request fails. For example: &#39;compute.googleapis.com&#39;,&#39;cloudfunctions.googleapis.com&#39;
     */
    services?: string[] | null;
    /**
     * Describes ownership and policies for the new tenant project. Required.
     */
    tenantProjectPolicy?: Schema$TenantProjectPolicy;
  }
  /**
   * Describes policy settings that need to be applied to a newly created tenant project.
   */
  export interface Schema$TenantProjectPolicy {
    /**
     * Policy bindings to be applied to the tenant project, in addition to the &#39;roles/owner&#39; role granted to the Service Consumer Management service account. At least one binding must have the role `roles/owner`. Among the list of members for `roles/owner`, at least one of them must be either the `user` or `group` type.
     */
    policyBindings?: Schema$PolicyBinding[];
  }
  /**
   * Resource constituting the TenancyUnit.
   */
  export interface Schema$TenantResource {
    /**
     * @OutputOnly Identifier of the tenant resource. For cloud projects, it is in the form &#39;projects/{number}&#39;. For example &#39;projects/123456&#39;.
     */
    resource?: string | null;
    /**
     * Status of tenant resource.
     */
    status?: string | null;
    /**
     * Unique per single tenancy unit.
     */
    tag?: string | null;
  }
  /**
   * A protocol buffer message type.
   */
  export interface Schema$Type {
    /**
     * The list of fields.
     */
    fields?: Schema$Field[];
    /**
     * The fully qualified message name.
     */
    name?: string | null;
    /**
     * The list of types appearing in `oneof` definitions in this type.
     */
    oneofs?: string[] | null;
    /**
     * The protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * The source context.
     */
    sourceContext?: Schema$SourceContext;
    /**
     * The source syntax.
     */
    syntax?: string | null;
  }
  /**
   * Request message to undelete tenant project resource previously deleted from the tenancy unit.
   */
  export interface Schema$UndeleteTenantProjectRequest {
    /**
     * Tag of the resource within the tenancy unit.
     */
    tag?: string | null;
  }
  /**
   * Configuration controlling usage of a service.
   */
  export interface Schema$Usage {
    /**
     * The full resource name of a channel used for sending notifications to the service producer.  Google Service Management currently only supports [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification channel. To use Google Cloud Pub/Sub as the channel, this must be the name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format documented in https://cloud.google.com/pubsub/docs/overview.
     */
    producerNotificationChannel?: string | null;
    /**
     * Requirements that must be satisfied before a consumer project can use the service. Each requirement is of the form &lt;service.name&gt;/&lt;requirement-id&gt;; for example &#39;serviceusage.googleapis.com/billing-enabled&#39;.
     */
    requirements?: string[] | null;
    /**
     * A list of usage rules that apply to individual API methods.  **NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$UsageRule[];
    /**
     * The configuration of a per-product per-project service identity.
     */
    serviceIdentity?: Schema$ServiceIdentity;
  }
  /**
   * Usage configuration rules for the service.  NOTE: Under development.   Use this rule to configure unregistered calls for the service. Unregistered calls are calls that do not contain consumer project identity. (Example: calls that do not contain an API key). By default, API methods do not allow unregistered calls, and each method call must be identified by a consumer project identity. Use this rule to allow/disallow unregistered calls.  Example of an API that wants to allow unregistered calls for entire service.      usage:       rules:       - selector: &quot;*&quot;         allow_unregistered_calls: true  Example of a method that wants to allow unregistered calls.      usage:       rules:       - selector: &quot;google.example.library.v1.LibraryService.CreateBook&quot;         allow_unregistered_calls: true
   */
  export interface Schema$UsageRule {
    /**
     * If true, the selected method allows unregistered calls, e.g. calls that don&#39;t identify any user or application.
     */
    allowUnregisteredCalls?: boolean | null;
    /**
     * Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all methods in all APIs.  Refer to selector for syntax details.
     */
    selector?: string | null;
    /**
     * If true, the selected method should skip service control and the control plane features, such as quota and billing, will not be available. This flag is used by Google Cloud Endpoints to bypass checks for internal methods, such as service health check methods.
     */
    skipServiceControl?: boolean | null;
  }
  /**
   * Response message for the `AddVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1AddVisibilityLabelsResponse {
    /**
     * The updated set of visibility labels for this consumer on this service.
     */
    labels?: string[] | null;
  }
  /**
   * Response message for BatchCreateProducerOverrides
   */
  export interface Schema$V1Beta1BatchCreateProducerOverridesResponse {
    /**
     * The overrides that were created.
     */
    overrides?: Schema$V1Beta1QuotaOverride[];
  }
  /**
   * Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1Beta1DisableConsumerResponse {}
  /**
   * Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1Beta1EnableConsumerResponse {}
  /**
   * Response message for the `GenerateServiceIdentity` method.  This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1Beta1GenerateServiceIdentityResponse {
    /**
     * ServiceIdentity that was created or retrieved.
     */
    identity?: Schema$V1Beta1ServiceIdentity;
  }
  /**
   * Response message for ImportProducerOverrides
   */
  export interface Schema$V1Beta1ImportProducerOverridesResponse {
    /**
     * The overrides that were created from the imported data.
     */
    overrides?: Schema$V1Beta1QuotaOverride[];
  }
  /**
   * Response message for ImportProducerQuotaPolicies
   */
  export interface Schema$V1Beta1ImportProducerQuotaPoliciesResponse {
    /**
     * The policies that were created from the imported data.
     */
    policies?: Schema$V1Beta1ProducerQuotaPolicy[];
  }
  /**
   * Quota policy created by service producer.
   */
  export interface Schema$V1Beta1ProducerQuotaPolicy {
    /**
     * The cloud resource container at which the quota policy is created. The format is {container_type}/{container_number}
     */
    container?: string | null;
    /**
     *  If this map is nonempty, then this policy applies only to specific values for dimensions defined in the limit unit.  For example, an policy on a limit with the unit 1/{project}/{region} could contain an entry with the key &quot;region&quot; and the value &quot;us-east-1&quot;; the policy is only applied to quota consumed in that region.  This map has the following restrictions:  *   Keys that are not defined in the limit&#39;s unit are not valid keys.     Any string appearing in {brackets} in the unit (besides {project} or     {user}) is a defined key. *   &quot;project&quot; is not a valid key; the project is already specified in     the parent resource name. *   &quot;user&quot; is not a valid key; the API does not support quota polcies     that apply only to a specific user. *   If &quot;region&quot; appears as a key, its value must be a valid Cloud region. *   If &quot;zone&quot; appears as a key, its value must be a valid Cloud zone. *   If any valid key other than &quot;region&quot; or &quot;zone&quot; appears in the map, then     all valid keys other than &quot;region&quot; or &quot;zone&quot; must also appear in the     map.
     */
    dimensions?: {[key: string]: string} | null;
    /**
     * The name of the metric to which this policy applies.  An example name would be: `compute.googleapis.com/cpus`
     */
    metric?: string | null;
    /**
     * The resource name of the producer policy. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d`
     */
    name?: string | null;
    /**
     * The quota policy value. Can be any nonnegative integer, or -1 (unlimited quota).
     */
    policyValue?: string | null;
    /**
     * The limit unit of the limit to which this policy applies.  An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.
     */
    unit?: string | null;
  }
  /**
   * A quota override
   */
  export interface Schema$V1Beta1QuotaOverride {
    /**
     * The resource name of the ancestor that requested the override. For example: &quot;organizations/12345&quot; or &quot;folders/67890&quot;. Used by admin overrides only.
     */
    adminOverrideAncestor?: string | null;
    /**
     *  If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.  For example, an override on a limit with the unit 1/{project}/{region} could contain an entry with the key &quot;region&quot; and the value &quot;us-east-1&quot;; the override is only applied to quota consumed in that region.  This map has the following restrictions:  *   Keys that are not defined in the limit&#39;s unit are not valid keys.     Any string appearing in {brackets} in the unit (besides {project} or     {user}) is a defined key. *   &quot;project&quot; is not a valid key; the project is already specified in     the parent resource name. *   &quot;user&quot; is not a valid key; the API does not support quota overrides     that apply only to a specific user. *   If &quot;region&quot; appears as a key, its value must be a valid Cloud region. *   If &quot;zone&quot; appears as a key, its value must be a valid Cloud zone. *   If any valid key other than &quot;region&quot; or &quot;zone&quot; appears in the map, then     all valid keys other than &quot;region&quot; or &quot;zone&quot; must also appear in the     map.
     */
    dimensions?: {[key: string]: string} | null;
    /**
     * The name of the metric to which this override applies.  An example name would be: `compute.googleapis.com/cpus`
     */
    metric?: string | null;
    /**
     * The resource name of the producer override. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
     */
    name?: string | null;
    /**
     * The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
     */
    overrideValue?: string | null;
    /**
     * The limit unit of the limit to which this override applies.  An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.
     */
    unit?: string | null;
  }
  /**
   * Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1Beta1RefreshConsumerResponse {}
  /**
   * A service identity in the Identity and Access Management API.
   */
  export interface Schema$V1Beta1ServiceIdentity {
    /**
     * The email address of the service identity.
     */
    email?: string | null;
    /**
     * P4 service identity resource name.  An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceIdentities/default`
     */
    name?: string | null;
    /**
     * The P4 service identity configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to &quot;default&quot;.
     */
    tag?: string | null;
    /**
     * The unique and stable id of the service identity.
     */
    uniqueId?: string | null;
  }
  /**
   * A default identity in the Identity and Access Management API.
   */
  export interface Schema$V1DefaultIdentity {
    /**
     * The email address of the default identity.
     */
    email?: string | null;
    /**
     * Default identity resource name.  An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/defaultIdentity`
     */
    name?: string | null;
    /**
     * The unique and stable id of the default identity.
     */
    uniqueId?: string | null;
  }
  /**
   * Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1DisableConsumerResponse {}
  /**
   * Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1EnableConsumerResponse {}
  /**
   * Response message for the `GenerateDefaultIdentity` method.  This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1GenerateDefaultIdentityResponse {
    /**
     * Status of the role attachment. Under development (go/si-attach-role), currently always return ATTACH_STATUS_UNSPECIFIED)
     */
    attachStatus?: string | null;
    /**
     * DefaultIdentity that was created or retrieved.
     */
    identity?: Schema$V1DefaultIdentity;
    /**
     * Role attached to consumer project. Empty if not attached in this request. (Under development, currently always return empty.)
     */
    role?: string | null;
  }
  /**
   * Response message for the `GenerateServiceAccount` method.  This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1GenerateServiceAccountResponse {
    /**
     * ServiceAccount that was created or retrieved.
     */
    account?: Schema$V1ServiceAccount;
  }
  /**
   * Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1RefreshConsumerResponse {}
  /**
   * Response message for the `RemoveVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
   */
  export interface Schema$V1RemoveVisibilityLabelsResponse {
    /**
     * The updated set of visibility labels for this consumer on this service.
     */
    labels?: string[] | null;
  }
  /**
   * A service account in the Identity and Access Management API.
   */
  export interface Schema$V1ServiceAccount {
    /**
     * The email address of the service account.
     */
    email?: string | null;
    /**
     * Deprecated. See b/136209818.
     */
    iamAccountName?: string | null;
    /**
     * P4 SA resource name.  An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceAccounts/default`
     */
    name?: string | null;
    /**
     * The P4 SA configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to &quot;default&quot;.
     */
    tag?: string | null;
    /**
     * The unique and stable id of the service account.
     */
    uniqueId?: string | null;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * serviceconsumermanagement.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
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
     * @alias serviceconsumermanagement.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().CancelOperationRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
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
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'operations/.*',
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
     * @alias serviceconsumermanagement.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Operations$Delete
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
        {}) as Params$Resource$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.operations.get({
     *     // The name of the operation resource.
     *     name: 'operations/my-operation',
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
     * @alias serviceconsumermanagement.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'operations',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias serviceconsumermanagement.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
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

  export class Resource$Services {
    context: APIRequestContext;
    tenancyUnits: Resource$Services$Tenancyunits;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.tenancyUnits = new Resource$Services$Tenancyunits(this.context);
    }

    /**
     * serviceconsumermanagement.services.search
     * @desc Search tenancy units for a managed service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.search({
     *     // The maximum number of results returned by this request. Currently, the
     *     // default maximum is set to 1000. If `page_size` isn't provided or the size
     *     // provided is a number larger than 1000, it's automatically set to 1000.
     *     //
     *     // Optional.
     *     pageSize: 'placeholder-value',
     *     // The continuation token, which is used to page through large result sets.
     *     // To get the next page of results, set this parameter to the value of
     *     // `nextPageToken` from the previous response.
     *     //
     *     // Optional.
     *     pageToken: 'placeholder-value',
     *     // Service for which search is performed.
     *     // services/{service}
     *     // {service} the name of a service, for example 'service.googleapis.com'.
     *     parent: 'services/my-service',
     *     // Set a query `{expression}` for querying tenancy units. Your `{expression}`
     *     // must be in the format: `field_name=literal_string`. The `field_name` is the
     *     // name of the field you want to compare. Supported fields are
     *     // `tenant_resources.tag` and `tenant_resources.resource`.
     *     //
     *     // For example, to search tenancy units that contain at least one tenant
     *     // resource with a given tag 'xyz', use the query `tenant_resources.tag=xyz`.
     *     // To search tenancy units that contain at least one tenant resource with
     *     // a given resource name 'projects/123456', use the query
     *     // `tenant_resources.resource=projects/123456`.
     *     //
     *     // Multiple expressions can be joined with `AND`s. Tenancy units must match
     *     // all expressions to be included in the result set. For example,
     *     // `tenant_resources.tag=xyz AND tenant_resources.resource=projects/123456`
     *     //
     *     // Optional.
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tenancyUnits": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias serviceconsumermanagement.services.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results returned by this request. Currently, the default maximum is set to 1000. If `page_size` isn't provided or the size provided is a number larger than 1000, it's automatically set to 1000.  Optional.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.  Optional.
     * @param {string} params.parent Service for which search is performed. services/{service} {service} the name of a service, for example 'service.googleapis.com'.
     * @param {string=} params.query Set a query `{expression}` for querying tenancy units. Your `{expression}` must be in the format: `field_name=literal_string`. The `field_name` is the name of the field you want to compare. Supported fields are `tenant_resources.tag` and `tenant_resources.resource`.  For example, to search tenancy units that contain at least one tenant resource with a given tag 'xyz', use the query `tenant_resources.tag=xyz`. To search tenancy units that contain at least one tenant resource with a given resource name 'projects/123456', use the query `tenant_resources.resource=projects/123456`.  Multiple expressions can be joined with `AND`s. Tenancy units must match all expressions to be included in the result set. For example, `tenant_resources.tag=xyz AND tenant_resources.resource=projects/123456`  Optional.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
      params: Params$Resource$Services$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Services$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchTenancyUnitsResponse>;
    search(
      params: Params$Resource$Services$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Services$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchTenancyUnitsResponse>,
      callback: BodyResponseCallback<Schema$SearchTenancyUnitsResponse>
    ): void;
    search(
      params: Params$Resource$Services$Search,
      callback: BodyResponseCallback<Schema$SearchTenancyUnitsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$SearchTenancyUnitsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Services$Search
        | BodyResponseCallback<Schema$SearchTenancyUnitsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchTenancyUnitsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchTenancyUnitsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchTenancyUnitsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:search').replace(
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
        createAPIRequest<Schema$SearchTenancyUnitsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SearchTenancyUnitsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Services$Search extends StandardParameters {
    /**
     * The maximum number of results returned by this request. Currently, the default maximum is set to 1000. If `page_size` isn't provided or the size provided is a number larger than 1000, it's automatically set to 1000.  Optional.
     */
    pageSize?: number;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.  Optional.
     */
    pageToken?: string;
    /**
     * Service for which search is performed. services/{service} {service} the name of a service, for example 'service.googleapis.com'.
     */
    parent?: string;
    /**
     * Set a query `{expression}` for querying tenancy units. Your `{expression}` must be in the format: `field_name=literal_string`. The `field_name` is the name of the field you want to compare. Supported fields are `tenant_resources.tag` and `tenant_resources.resource`.  For example, to search tenancy units that contain at least one tenant resource with a given tag 'xyz', use the query `tenant_resources.tag=xyz`. To search tenancy units that contain at least one tenant resource with a given resource name 'projects/123456', use the query `tenant_resources.resource=projects/123456`.  Multiple expressions can be joined with `AND`s. Tenancy units must match all expressions to be included in the result set. For example, `tenant_resources.tag=xyz AND tenant_resources.resource=projects/123456`  Optional.
     */
    query?: string;
  }

  export class Resource$Services$Tenancyunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * serviceconsumermanagement.services.tenancyUnits.addProject
     * @desc Add a new tenant project to the tenancy unit. There can be a maximum of 512 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation<response: Empty>.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.tenancyUnits.addProject({
     *     // Name of the tenancy unit.
     *     // Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     *     parent: 'services/my-service/[^/]+/[^/]+/tenancyUnits/my-tenancyUnit',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "projectConfig": {},
     *       //   "tag": "my_tag"
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
     * @alias serviceconsumermanagement.services.tenancyUnits.addProject
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     * @param {().AddTenantProjectRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addProject(
      params: Params$Resource$Services$Tenancyunits$Addproject,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addProject(
      params?: Params$Resource$Services$Tenancyunits$Addproject,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    addProject(
      params: Params$Resource$Services$Tenancyunits$Addproject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addProject(
      params: Params$Resource$Services$Tenancyunits$Addproject,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addProject(
      params: Params$Resource$Services$Tenancyunits$Addproject,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addProject(callback: BodyResponseCallback<Schema$Operation>): void;
    addProject(
      paramsOrCallback?:
        | Params$Resource$Services$Tenancyunits$Addproject
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
        {}) as Params$Resource$Services$Tenancyunits$Addproject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Tenancyunits$Addproject;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:addProject').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.services.tenancyUnits.applyProjectConfig
     * @desc Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation<response: Empty>.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.tenancyUnits.applyProjectConfig(
     *     {
     *       // Name of the tenancy unit.
     *       // Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     *       name: 'services/my-service/[^/]+/[^/]+/tenancyUnits/my-tenancyUnit',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "projectConfig": {},
     *         //   "tag": "my_tag"
     *         // }
     *       },
     *     }
     *   );
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
     * @alias serviceconsumermanagement.services.tenancyUnits.applyProjectConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     * @param {().ApplyTenantProjectConfigRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    applyProjectConfig(
      params: Params$Resource$Services$Tenancyunits$Applyprojectconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    applyProjectConfig(
      params?: Params$Resource$Services$Tenancyunits$Applyprojectconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    applyProjectConfig(
      params: Params$Resource$Services$Tenancyunits$Applyprojectconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    applyProjectConfig(
      params: Params$Resource$Services$Tenancyunits$Applyprojectconfig,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    applyProjectConfig(
      params: Params$Resource$Services$Tenancyunits$Applyprojectconfig,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    applyProjectConfig(callback: BodyResponseCallback<Schema$Operation>): void;
    applyProjectConfig(
      paramsOrCallback?:
        | Params$Resource$Services$Tenancyunits$Applyprojectconfig
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
        {}) as Params$Resource$Services$Tenancyunits$Applyprojectconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Tenancyunits$Applyprojectconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:applyProjectConfig').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.services.tenancyUnits.attachProject
     * @desc Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation<response: Empty>.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.tenancyUnits.attachProject(
     *     {
     *       // Name of the tenancy unit that the project will be attached to.
     *       // Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     *       name: 'services/my-service/[^/]+/[^/]+/tenancyUnits/my-tenancyUnit',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "externalResource": "my_externalResource",
     *         //   "reservedResource": "my_reservedResource",
     *         //   "tag": "my_tag"
     *         // }
     *       },
     *     }
     *   );
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
     * @alias serviceconsumermanagement.services.tenancyUnits.attachProject
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the tenancy unit that the project will be attached to. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     * @param {().AttachTenantProjectRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    attachProject(
      params: Params$Resource$Services$Tenancyunits$Attachproject,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    attachProject(
      params?: Params$Resource$Services$Tenancyunits$Attachproject,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    attachProject(
      params: Params$Resource$Services$Tenancyunits$Attachproject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    attachProject(
      params: Params$Resource$Services$Tenancyunits$Attachproject,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    attachProject(
      params: Params$Resource$Services$Tenancyunits$Attachproject,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    attachProject(callback: BodyResponseCallback<Schema$Operation>): void;
    attachProject(
      paramsOrCallback?:
        | Params$Resource$Services$Tenancyunits$Attachproject
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
        {}) as Params$Resource$Services$Tenancyunits$Attachproject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Tenancyunits$Attachproject;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:attachProject').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.services.tenancyUnits.create
     * @desc Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnit has to be used to get a complete TenancyUnit with all fields populated.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.tenancyUnits.create({
     *     // services/{service}/{collection id}/{resource id}
     *     // {collection id} is the cloud resource collection type representing the
     *     // service consumer, for example 'projects', or 'organizations'.
     *     // {resource id} is the consumer numeric id, such as project number: '123456'.
     *     // {service} the name of a managed service, such as 'service.googleapis.com'.
     *     // Enables service binding using the new tenancy unit.
     *     parent: 'services/my-service/[^/]+/[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "tenancyUnitId": "my_tenancyUnitId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "consumer": "my_consumer",
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "service": "my_service",
     *   //   "tenantResources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias serviceconsumermanagement.services.tenancyUnits.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent services/{service}/{collection id}/{resource id} {collection id} is the cloud resource collection type representing the service consumer, for example 'projects', or 'organizations'. {resource id} is the consumer numeric id, such as project number: '123456'. {service} the name of a managed service, such as 'service.googleapis.com'. Enables service binding using the new tenancy unit.
     * @param {().CreateTenancyUnitRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Services$Tenancyunits$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Services$Tenancyunits$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TenancyUnit>;
    create(
      params: Params$Resource$Services$Tenancyunits$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Services$Tenancyunits$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TenancyUnit>,
      callback: BodyResponseCallback<Schema$TenancyUnit>
    ): void;
    create(
      params: Params$Resource$Services$Tenancyunits$Create,
      callback: BodyResponseCallback<Schema$TenancyUnit>
    ): void;
    create(callback: BodyResponseCallback<Schema$TenancyUnit>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Services$Tenancyunits$Create
        | BodyResponseCallback<Schema$TenancyUnit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TenancyUnit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TenancyUnit>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TenancyUnit> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Services$Tenancyunits$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Tenancyunits$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tenancyUnits').replace(
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
        createAPIRequest<Schema$TenancyUnit>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TenancyUnit>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.services.tenancyUnits.delete
     * @desc Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation<response: Empty>.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.tenancyUnits.delete({
     *     // Name of the tenancy unit to be deleted.
     *     name: 'services/my-service/[^/]+/[^/]+/tenancyUnits/my-tenancyUnit',
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
     * @alias serviceconsumermanagement.services.tenancyUnits.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the tenancy unit to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Services$Tenancyunits$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Services$Tenancyunits$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Services$Tenancyunits$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Services$Tenancyunits$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Services$Tenancyunits$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Services$Tenancyunits$Delete
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
        {}) as Params$Resource$Services$Tenancyunits$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Tenancyunits$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.services.tenancyUnits.deleteProject
     * @desc Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED.  To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation<response: Empty>.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.tenancyUnits.deleteProject(
     *     {
     *       // Name of the tenancy unit.
     *       // Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     *       name: 'services/my-service/[^/]+/[^/]+/tenancyUnits/my-tenancyUnit',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "tag": "my_tag"
     *         // }
     *       },
     *     }
     *   );
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
     * @alias serviceconsumermanagement.services.tenancyUnits.deleteProject
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     * @param {().DeleteTenantProjectRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteProject(
      params: Params$Resource$Services$Tenancyunits$Deleteproject,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteProject(
      params?: Params$Resource$Services$Tenancyunits$Deleteproject,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    deleteProject(
      params: Params$Resource$Services$Tenancyunits$Deleteproject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteProject(
      params: Params$Resource$Services$Tenancyunits$Deleteproject,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteProject(
      params: Params$Resource$Services$Tenancyunits$Deleteproject,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteProject(callback: BodyResponseCallback<Schema$Operation>): void;
    deleteProject(
      paramsOrCallback?:
        | Params$Resource$Services$Tenancyunits$Deleteproject
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
        {}) as Params$Resource$Services$Tenancyunits$Deleteproject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Tenancyunits$Deleteproject;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:deleteProject').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.services.tenancyUnits.list
     * @desc Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.tenancyUnits.list({
     *     // Filter expression over tenancy resources field. Optional.
     *     filter: 'placeholder-value',
     *     // The maximum number of results returned by this request.
     *     pageSize: 'placeholder-value',
     *     // The continuation token, which is used to page through large result sets.
     *     // To get the next page of results, set this parameter to the value of
     *     // `nextPageToken` from the previous response.
     *     pageToken: 'placeholder-value',
     *     // Managed service and service consumer. Required.
     *     // services/{service}/{collection id}/{resource id}
     *     // {collection id} is the cloud resource collection type representing the
     *     // service consumer, for example 'projects', or 'organizations'.
     *     // {resource id} is the consumer numeric id, such as project number: '123456'.
     *     // {service} the name of a service, such as 'service.googleapis.com'.
     *     parent: 'services/my-service/[^/]+/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tenancyUnits": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias serviceconsumermanagement.services.tenancyUnits.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Filter expression over tenancy resources field. Optional.
     * @param {integer=} params.pageSize The maximum number of results returned by this request.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
     * @param {string} params.parent Managed service and service consumer. Required. services/{service}/{collection id}/{resource id} {collection id} is the cloud resource collection type representing the service consumer, for example 'projects', or 'organizations'. {resource id} is the consumer numeric id, such as project number: '123456'. {service} the name of a service, such as 'service.googleapis.com'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Services$Tenancyunits$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Services$Tenancyunits$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTenancyUnitsResponse>;
    list(
      params: Params$Resource$Services$Tenancyunits$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Services$Tenancyunits$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTenancyUnitsResponse>,
      callback: BodyResponseCallback<Schema$ListTenancyUnitsResponse>
    ): void;
    list(
      params: Params$Resource$Services$Tenancyunits$List,
      callback: BodyResponseCallback<Schema$ListTenancyUnitsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTenancyUnitsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Services$Tenancyunits$List
        | BodyResponseCallback<Schema$ListTenancyUnitsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTenancyUnitsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTenancyUnitsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTenancyUnitsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Services$Tenancyunits$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Tenancyunits$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tenancyUnits').replace(
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
        createAPIRequest<Schema$ListTenancyUnitsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListTenancyUnitsResponse>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.services.tenancyUnits.removeProject
     * @desc Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation<response: Empty>.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.tenancyUnits.removeProject(
     *     {
     *       // Name of the tenancy unit.
     *       // Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     *       name: 'services/my-service/[^/]+/[^/]+/tenancyUnits/my-tenancyUnit',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "tag": "my_tag"
     *         // }
     *       },
     *     }
     *   );
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
     * @alias serviceconsumermanagement.services.tenancyUnits.removeProject
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     * @param {().RemoveTenantProjectRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeProject(
      params: Params$Resource$Services$Tenancyunits$Removeproject,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeProject(
      params?: Params$Resource$Services$Tenancyunits$Removeproject,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    removeProject(
      params: Params$Resource$Services$Tenancyunits$Removeproject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeProject(
      params: Params$Resource$Services$Tenancyunits$Removeproject,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeProject(
      params: Params$Resource$Services$Tenancyunits$Removeproject,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeProject(callback: BodyResponseCallback<Schema$Operation>): void;
    removeProject(
      paramsOrCallback?:
        | Params$Resource$Services$Tenancyunits$Removeproject
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
        {}) as Params$Resource$Services$Tenancyunits$Removeproject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Tenancyunits$Removeproject;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:removeProject').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * serviceconsumermanagement.services.tenancyUnits.undeleteProject
     * @desc Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation<response: Empty>.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1');
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
     *   const res = await serviceconsumermanagement.services.tenancyUnits.undeleteProject(
     *     {
     *       // Name of the tenancy unit.
     *       // Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     *       name: 'services/my-service/[^/]+/[^/]+/tenancyUnits/my-tenancyUnit',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "tag": "my_tag"
     *         // }
     *       },
     *     }
     *   );
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
     * @alias serviceconsumermanagement.services.tenancyUnits.undeleteProject
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     * @param {().UndeleteTenantProjectRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undeleteProject(
      params: Params$Resource$Services$Tenancyunits$Undeleteproject,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undeleteProject(
      params?: Params$Resource$Services$Tenancyunits$Undeleteproject,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    undeleteProject(
      params: Params$Resource$Services$Tenancyunits$Undeleteproject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undeleteProject(
      params: Params$Resource$Services$Tenancyunits$Undeleteproject,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undeleteProject(
      params: Params$Resource$Services$Tenancyunits$Undeleteproject,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undeleteProject(callback: BodyResponseCallback<Schema$Operation>): void;
    undeleteProject(
      paramsOrCallback?:
        | Params$Resource$Services$Tenancyunits$Undeleteproject
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
        {}) as Params$Resource$Services$Tenancyunits$Undeleteproject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Tenancyunits$Undeleteproject;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://serviceconsumermanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undeleteProject').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Services$Tenancyunits$Addproject
    extends StandardParameters {
    /**
     * Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddTenantProjectRequest;
  }
  export interface Params$Resource$Services$Tenancyunits$Applyprojectconfig
    extends StandardParameters {
    /**
     * Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApplyTenantProjectConfigRequest;
  }
  export interface Params$Resource$Services$Tenancyunits$Attachproject
    extends StandardParameters {
    /**
     * Name of the tenancy unit that the project will be attached to. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AttachTenantProjectRequest;
  }
  export interface Params$Resource$Services$Tenancyunits$Create
    extends StandardParameters {
    /**
     * services/{service}/{collection id}/{resource id} {collection id} is the cloud resource collection type representing the service consumer, for example 'projects', or 'organizations'. {resource id} is the consumer numeric id, such as project number: '123456'. {service} the name of a managed service, such as 'service.googleapis.com'. Enables service binding using the new tenancy unit.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateTenancyUnitRequest;
  }
  export interface Params$Resource$Services$Tenancyunits$Delete
    extends StandardParameters {
    /**
     * Name of the tenancy unit to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Services$Tenancyunits$Deleteproject
    extends StandardParameters {
    /**
     * Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeleteTenantProjectRequest;
  }
  export interface Params$Resource$Services$Tenancyunits$List
    extends StandardParameters {
    /**
     * Filter expression over tenancy resources field. Optional.
     */
    filter?: string;
    /**
     * The maximum number of results returned by this request.
     */
    pageSize?: number;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
     */
    pageToken?: string;
    /**
     * Managed service and service consumer. Required. services/{service}/{collection id}/{resource id} {collection id} is the cloud resource collection type representing the service consumer, for example 'projects', or 'organizations'. {resource id} is the consumer numeric id, such as project number: '123456'. {service} the name of a service, such as 'service.googleapis.com'.
     */
    parent?: string;
  }
  export interface Params$Resource$Services$Tenancyunits$Removeproject
    extends StandardParameters {
    /**
     * Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveTenantProjectRequest;
  }
  export interface Params$Resource$Services$Tenancyunits$Undeleteproject
    extends StandardParameters {
    /**
     * Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteTenantProjectRequest;
  }
}
