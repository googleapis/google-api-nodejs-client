/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace serviceusage_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  /**
   * Service Usage API
   *
   * Enables services that service consumers want to use on Google Cloud
   * Platform, lists the available or enabled services, or disables services
   * that service consumers no longer use.
   *
   * @example
   * const {google} = require('googleapis');
   * const serviceusage = google.serviceusage('v1beta1');
   *
   * @namespace serviceusage
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Serviceusage
   */
  export class Serviceusage {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    operations: Resource$Operations;
    services: Resource$Services;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.operations = new Resource$Operations(this);
      this.services = new Resource$Services(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Api is a light-weight descriptor for an API Interface.  Interfaces are also
   * described as &quot;protocol buffer services&quot; in some contexts, such as
   * by the &quot;service&quot; keyword in a .proto file, but they are different
   * from API Services, which represent a concrete implementation of an
   * interface as opposed to simply a description of methods and bindings. They
   * are also sometimes simply referred to as &quot;APIs&quot; in other
   * contexts, such as the name of this message itself. See
   * https://cloud.google.com/apis/design/glossary for detailed terminology.
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
     * The fully qualified name of this interface, including package name
     * followed by the interface&#39;s simple name.
     */
    name?: string;
    /**
     * Any metadata attached to the interface.
     */
    options?: Schema$Option[];
    /**
     * Source context for the protocol buffer service represented by this
     * message.
     */
    sourceContext?: Schema$SourceContext;
    /**
     * The source syntax of the service.
     */
    syntax?: string;
    /**
     * A version string for this interface. If specified, must have the form
     * `major-version.minor-version`, as in `1.10`. If the minor version is
     * omitted, it defaults to zero. If the entire version field is empty, the
     * major version is derived from the package name, as outlined below. If the
     * field is not empty, the version in the package name will be verified to
     * be consistent with what is provided here.  The versioning schema uses
     * [semantic versioning](http://semver.org) where the major version number
     * indicates a breaking change and the minor version an additive,
     * non-breaking change. Both version numbers are signals to users what to
     * expect from different versions, and should be carefully chosen based on
     * the product plan.  The major version is also reflected in the package
     * name of the interface, which must end in `v&lt;major-version&gt;`, as in
     * `google.feature.v1`. For major versions 0 and 1, the suffix can be
     * omitted. Zero major versions must only be used for experimental, non-GA
     * interfaces.
     */
    version?: string;
  }
  /**
   * `Authentication` defines the authentication configuration for an API.
   * Example for an API targeted for external use:      name:
   * calendar.googleapis.com     authentication:       providers:       - id:
   * google_calendar_auth         jwks_uri:
   * https://www.googleapis.com/oauth2/v1/certs         issuer:
   * https://securetoken.google.com       rules:       - selector: &quot;*&quot;
   * requirements:           provider_id: google_calendar_auth
   */
  export interface Schema$Authentication {
    /**
     * Defines a set of authentication providers that a service supports.
     */
    providers?: Schema$AuthProvider[];
    /**
     * A list of authentication rules that apply to individual API methods.
     * **NOTE:** All service configuration rules follow &quot;last one
     * wins&quot; order.
     */
    rules?: Schema$AuthenticationRule[];
  }
  /**
   * Authentication rules for the service.  By default, if a method has any
   * authentication requirements, every request must include a valid credential
   * matching one of the requirements. It&#39;s an error to include more than
   * one kind of credential in a single request.  If a method doesn&#39;t have
   * any auth requirements, request credentials will be ignored.
   */
  export interface Schema$AuthenticationRule {
    /**
     * If true, the service accepts API keys without any other credential.
     */
    allowWithoutCredential?: boolean;
    /**
     * The requirements for OAuth credentials.
     */
    oauth?: Schema$OAuthRequirements;
    /**
     * Requirements for additional authentication providers.
     */
    requirements?: Schema$AuthRequirement[];
    /**
     * Selects the methods to which this rule applies.  Refer to selector for
     * syntax details.
     */
    selector?: string;
  }
  /**
   * Configuration of authorization.  This section determines the authorization
   * provider, if unspecified, then no authorization check will be done.
   * Example:      experimental:       authorization:         provider:
   * firebaserules.googleapis.com
   */
  export interface Schema$AuthorizationConfig {
    /**
     * The name of the authorization provider, such as
     * firebaserules.googleapis.com.
     */
    provider?: string;
  }
  /**
   * Authorization rule for API services.  It specifies the permission(s)
   * required for an API element for the overall API request to succeed. It is
   * typically used to mark request message fields that contain the name of the
   * resource and indicates the permissions that will be checked on that
   * resource.  For example:      package google.storage.v1;      message
   * CopyObjectRequest {       string source = 1 [
   * (google.api.authz).permissions = &quot;storage.objects.get&quot;]; string
   * destination = 2 [         (google.api.authz).permissions =
   * &quot;storage.objects.create,storage.objects.update&quot;];     }
   */
  export interface Schema$AuthorizationRule {
    /**
     * The required permissions. The acceptable values vary depend on the
     * authorization system used. For Google APIs, it should be a
     * comma-separated Google IAM permission values. When multiple permissions
     * are listed, the semantics is not defined by the system. Additional
     * documentation must be provided manually.
     */
    permissions?: string;
    /**
     * Selects the API elements to which this rule applies.  Refer to selector
     * for syntax details.
     */
    selector?: string;
  }
  /**
   * Configuration for an anthentication provider, including support for [JSON
   * Web Token
   * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
   */
  export interface Schema$AuthProvider {
    /**
     * The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, only JWTs with audience
     * &quot;https://Service_name/API_name&quot; will be accepted. For example,
     * if no audiences are in the setting, LibraryService API will only accept
     * JWTs with the following audience
     * &quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService&quot;.
     * Example:      audiences: bookstore_android.apps.googleusercontent.com,
     * bookstore_web.apps.googleusercontent.com
     */
    audiences?: string;
    /**
     * Redirect URL if JWT token is required but no present or is expired.
     * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
     */
    authorizationUrl?: string;
    /**
     * The unique identifier of the auth provider. It will be referred to by
     * `AuthRequirement.provider_id`.  Example: &quot;bookstore_auth&quot;.
     */
    id?: string;
    /**
     * Identifies the principal that issued the JWT. See
     * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
     * Usually a URL or an email address.  Example:
     * https://securetoken.google.com Example:
     * 1234567-compute@developer.gserviceaccount.com
     */
    issuer?: string;
    /**
     * URL of the provider&#39;s public key set to validate signature of the
     * JWT. See [OpenID
     * Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     * Optional if the key set document:  - can be retrieved from    [OpenID
     * Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html of
     * the issuer.  - can be inferred from the email domain of the issuer (e.g.
     * a Google service account).  Example:
     * https://www.googleapis.com/oauth2/v1/certs
     */
    jwksUri?: string;
  }
  /**
   * User-defined authentication requirements, including support for [JSON Web
   * Token
   * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
   */
  export interface Schema$AuthRequirement {
    /**
     * NOTE: This will be deprecated soon, once AuthProvider.audiences is
     * implemented and accepted in all the runtime components.  The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, only JWTs with audience
     * &quot;https://Service_name/API_name&quot; will be accepted. For example,
     * if no audiences are in the setting, LibraryService API will only accept
     * JWTs with the following audience
     * &quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService&quot;.
     * Example:      audiences: bookstore_android.apps.googleusercontent.com,
     * bookstore_web.apps.googleusercontent.com
     */
    audiences?: string;
    /**
     * id from authentication provider.  Example:      provider_id:
     * bookstore_auth
     */
    providerId?: string;
  }
  /**
   * `Backend` defines the backend configuration for a service.
   */
  export interface Schema$Backend {
    /**
     * A list of API backend rules that apply to individual API methods.
     * **NOTE:** All service configuration rules follow &quot;last one
     * wins&quot; order.
     */
    rules?: Schema$BackendRule[];
  }
  /**
   * A backend rule provides configuration for an individual API element.
   */
  export interface Schema$BackendRule {
    /**
     * The address of the API backend.
     */
    address?: string;
    /**
     * The number of seconds to wait for a response from a request.  The default
     * deadline for gRPC is infinite (no deadline) and HTTP requests is 5
     * seconds.
     */
    deadline?: number;
    /**
     * Minimum deadline in seconds needed for this method. Calls having deadline
     * value lower than this will be rejected.
     */
    minDeadline?: number;
    /**
     * Selects the methods to which this rule applies.  Refer to selector for
     * syntax details.
     */
    selector?: string;
  }
  /**
   * Request message for the `BatchEnableServices` method.
   */
  export interface Schema$BatchEnableServicesRequest {
    /**
     * The identifiers of the services to enable on the project.  A valid
     * identifier would be: serviceusage.googleapis.com  Enabling services
     * requires that each service is public or is shared with the user enabling
     * the service.  Two or more services must be specified. To enable a single
     * service, use the `EnableService` method instead.  A single request can
     * enable a maximum of 20 services at a time. If more than 20 services are
     * specified, the request will fail, and no state changes will occur.
     */
    serviceIds?: string[];
  }
  /**
   * Response message for the `BatchEnableServices` method. This response
   * message is assigned to the `response` field of the returned Operation when
   * that operation is done.
   */
  export interface Schema$BatchEnableServicesResponse {
    /**
     * If allow_partial_success is true, and one or more services could not be
     * enabled, this field contains the details about each failure.
     */
    failures?: Schema$EnableFailure[];
    /**
     * The new state of the services after enabling.
     */
    services?: Schema$GoogleApiServiceusageV1Service[];
  }
  /**
   * Billing related configuration of the service.  The following example shows
   * how to configure monitored resources and metrics for billing:
   * monitored_resources:     - type: library.googleapis.com/branch labels: -
   * key: /city         description: The city where the library branch is
   * located in.       - key: /name         description: The name of the branch.
   * metrics:     - name: library.googleapis.com/book/borrowed_count
   * metric_kind: DELTA       value_type: INT64     billing:
   * consumer_destinations:       - monitored_resource:
   * library.googleapis.com/branch         metrics:         -
   * library.googleapis.com/book/borrowed_count
   */
  export interface Schema$Billing {
    /**
     * Billing configurations for sending metrics to the consumer project. There
     * can be multiple consumer destinations per service, each one must have a
     * different monitored resource type. A metric can be used in at most one
     * consumer destination.
     */
    consumerDestinations?: Schema$BillingDestination[];
  }
  /**
   * Configuration of a specific billing destination (Currently only support
   * bill against consumer project).
   */
  export interface Schema$BillingDestination {
    /**
     * Names of the metrics to report to this billing destination. Each name
     * must be defined in Service.metrics section.
     */
    metrics?: string[];
    /**
     * The monitored resource type. The type must be defined in
     * Service.monitored_resources section.
     */
    monitoredResource?: string;
  }
  /**
   * `Context` defines which contexts an API requests.  Example:      context:
   * rules:       - selector: &quot;*&quot;         requested:         -
   * google.rpc.context.ProjectContext         -
   * google.rpc.context.OriginContext  The above specifies that all methods in
   * the API request `google.rpc.context.ProjectContext` and
   * `google.rpc.context.OriginContext`.  Available context types are defined in
   * package `google.rpc.context`.  This also provides mechanism to whitelist
   * any protobuf message extension that can be sent in grpc metadata using
   * “x-goog-ext-&lt;extension_id&gt;-bin” and
   * “x-goog-ext-&lt;extension_id&gt;-jspb” format. For example, list any
   * service specific protobuf types that can appear in grpc metadata as follows
   * in your yaml file:  Example:      context:       rules:        - selector:
   * &quot;google.example.library.v1.LibraryService.CreateBook&quot;
   * allowed_request_extensions:          - google.foo.v1.NewExtension
   * allowed_response_extensions:          - google.foo.v1.NewExtension  You can
   * also specify extension ID instead of fully qualified extension name here.
   */
  export interface Schema$Context {
    /**
     * A list of RPC context rules that apply to individual API methods.
     * **NOTE:** All service configuration rules follow &quot;last one
     * wins&quot; order.
     */
    rules?: Schema$ContextRule[];
  }
  /**
   * A context rule provides information about the context for an individual API
   * element.
   */
  export interface Schema$ContextRule {
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc
     * side channel from client to backend.
     */
    allowedRequestExtensions?: string[];
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc
     * side channel from backend to client.
     */
    allowedResponseExtensions?: string[];
    /**
     * A list of full type names of provided contexts.
     */
    provided?: string[];
    /**
     * A list of full type names of requested contexts.
     */
    requested?: string[];
    /**
     * Selects the methods to which this rule applies.  Refer to selector for
     * syntax details.
     */
    selector?: string;
  }
  /**
   * Selects and configures the service controller used by the service.  The
   * service controller handles features like abuse, quota, billing, logging,
   * monitoring, etc.
   */
  export interface Schema$Control {
    /**
     * The service control environment to use. If empty, no control plane
     * feature (like quota and billing) will be enabled.
     */
    environment?: string;
  }
  /**
   * Customize service error responses.  For example, list any service specific
   * protobuf types that can appear in error detail lists of error responses.
   * Example:      custom_error:       types:       - google.foo.v1.CustomError
   * - google.foo.v1.AnotherError
   */
  export interface Schema$CustomError {
    /**
     * The list of custom error rules that apply to individual API messages.
     * **NOTE:** All service configuration rules follow &quot;last one
     * wins&quot; order.
     */
    rules?: Schema$CustomErrorRule[];
    /**
     * The list of custom error detail types, e.g.
     * &#39;google.foo.v1.CustomError&#39;.
     */
    types?: string[];
  }
  /**
   * A custom error rule.
   */
  export interface Schema$CustomErrorRule {
    /**
     * Mark this message as possible payload in error response.  Otherwise,
     * objects of this type will be filtered when they appear in error payload.
     */
    isErrorType?: boolean;
    /**
     * Selects messages to which this rule applies.  Refer to selector for
     * syntax details.
     */
    selector?: string;
  }
  /**
   * A custom pattern is used for defining custom HTTP verb.
   */
  export interface Schema$CustomHttpPattern {
    /**
     * The name of this custom HTTP verb.
     */
    kind?: string;
    /**
     * The path matched by this custom verb.
     */
    path?: string;
  }
  /**
   * Request message for the `DisableService` method.
   */
  export interface Schema$DisableServiceRequest {}
  /**
   * Response message for the `DisableService` method. This response message is
   * assigned to the `response` field of the returned Operation when that
   * operation is done.
   */
  export interface Schema$DisableServiceResponse {
    /**
     * The new state of the service after disabling.
     */
    service?: Schema$GoogleApiServiceusageV1Service;
  }
  /**
   * `Documentation` provides the information for describing a service. Example:
   * &lt;pre&gt;&lt;code&gt;documentation:   summary: &gt;     The Google
   * Calendar API gives access     to most calendar features.   pages:   - name:
   * Overview     content: &amp;#40;== include google/foo/overview.md
   * ==&amp;#41;   - name: Tutorial     content: &amp;#40;== include
   * google/foo/tutorial.md ==&amp;#41;     subpages;     - name: Java content:
   * &amp;#40;== include google/foo/tutorial_java.md ==&amp;#41;   rules:   -
   * selector: google.calendar.Calendar.Get     description: &gt;       ...   -
   * selector: google.calendar.Calendar.Put     description: &gt;       ...
   * &lt;/code&gt;&lt;/pre&gt; Documentation is provided in markdown syntax. In
   * addition to standard markdown features, definition lists, tables and fenced
   * code blocks are supported. Section headers can be provided and are
   * interpreted relative to the section nesting of the context where a
   * documentation fragment is embedded.  Documentation from the IDL is merged
   * with documentation defined via the config at normalization time, where
   * documentation provided by config rules overrides IDL provided.  A number of
   * constructs specific to the API platform are supported in documentation
   * text.  In order to reference a proto element, the following notation can be
   * used:
   * &lt;pre&gt;&lt;code&gt;&amp;#91;fully.qualified.proto.name]&amp;#91;]&lt;/code&gt;&lt;/pre&gt;
   * To override the display text used for the link, this can be used:
   * &lt;pre&gt;&lt;code&gt;&amp;#91;display
   * text]&amp;#91;fully.qualified.proto.name]&lt;/code&gt;&lt;/pre&gt; Text can
   * be excluded from doc using the following notation:
   * &lt;pre&gt;&lt;code&gt;&amp;#40;-- internal comment
   * --&amp;#41;&lt;/code&gt;&lt;/pre&gt;  A few directives are available in
   * documentation. Note that directives must appear on a single line to be
   * properly identified. The `include` directive includes a markdown file from
   * an external source: &lt;pre&gt;&lt;code&gt;&amp;#40;== include path/to/file
   * ==&amp;#41;&lt;/code&gt;&lt;/pre&gt; The `resource_for` directive marks a
   * message to be the resource of a collection in REST view. If it is not
   * specified, tools attempt to infer the resource from the operations in a
   * collection: &lt;pre&gt;&lt;code&gt;&amp;#40;== resource_for
   * v1.shelves.books ==&amp;#41;&lt;/code&gt;&lt;/pre&gt; The directive
   * `suppress_warning` does not directly affect documentation and is documented
   * together with service config validation.
   */
  export interface Schema$Documentation {
    /**
     * The URL to the root of documentation.
     */
    documentationRootUrl?: string;
    /**
     * Declares a single overview page. For example:
     * &lt;pre&gt;&lt;code&gt;documentation:   summary: ...   overview:
     * &amp;#40;== include overview.md ==&amp;#41; &lt;/code&gt;&lt;/pre&gt;
     * This is a shortcut for the following declaration (using pages style):
     * &lt;pre&gt;&lt;code&gt;documentation:   summary: ...   pages:   - name:
     * Overview     content: &amp;#40;== include overview.md ==&amp;#41;
     * &lt;/code&gt;&lt;/pre&gt; Note: you cannot specify both `overview` field
     * and `pages` field.
     */
    overview?: string;
    /**
     * The top level pages for the documentation set.
     */
    pages?: Schema$Page[];
    /**
     * A list of documentation rules that apply to individual API elements.
     * **NOTE:** All service configuration rules follow &quot;last one
     * wins&quot; order.
     */
    rules?: Schema$DocumentationRule[];
    /**
     * A short summary of what the service does. Can only be provided by plain
     * text.
     */
    summary?: string;
  }
  /**
   * A documentation rule provides information about individual API elements.
   */
  export interface Schema$DocumentationRule {
    /**
     * Deprecation description of the selected element(s). It can be provided if
     * an element is marked as `deprecated`.
     */
    deprecationDescription?: string;
    /**
     * Description of the selected API(s).
     */
    description?: string;
    /**
     * The selector is a comma-separated list of patterns. Each pattern is a
     * qualified name of the element which may end in &quot;*&quot;, indicating
     * a wildcard. Wildcards are only allowed at the end and for a whole
     * component of the qualified name, i.e. &quot;foo.*&quot; is ok, but not
     * &quot;foo.b*&quot; or &quot;foo.*.bar&quot;. To specify a default for all
     * applicable elements, the whole pattern &quot;*&quot; is used.
     */
    selector?: string;
  }
  export interface Schema$EnableFailure {
    /**
     * An error message describing why the service could not be enabled.
     */
    errorMessage?: string;
    /**
     * The service id of a service that could not be enabled.
     */
    serviceId?: string;
  }
  /**
   * Request message for the `EnableService` method.
   */
  export interface Schema$EnableServiceRequest {}
  /**
   * Response message for the `EnableService` method. This response message is
   * assigned to the `response` field of the returned Operation when that
   * operation is done.
   */
  export interface Schema$EnableServiceResponse {
    /**
     * The new state of the service after enabling.
     */
    service?: Schema$GoogleApiServiceusageV1Service;
  }
  /**
   * `Endpoint` describes a network endpoint that serves a set of APIs. A
   * service may expose any number of endpoints, and all endpoints share the
   * same service configuration, such as quota configuration and monitoring
   * configuration.  Example service configuration:      name:
   * library-example.googleapis.com     endpoints:       # Below entry makes
   * &#39;google.example.library.v1.Library&#39;       # API be served from
   * endpoint address library-example.googleapis.com.       # It also allows
   * HTTP OPTIONS calls to be passed to the backend, for       # it to decide
   * whether the subsequent cross-origin request is       # allowed to proceed.
   * - name: library-example.googleapis.com       allow_cors: true
   */
  export interface Schema$Endpoint {
    /**
     * DEPRECATED: This field is no longer supported. Instead of using aliases,
     * please specify multiple google.api.Endpoint for each of the intended
     * aliases.  Additional names that this endpoint will be hosted on.
     */
    aliases?: string[];
    /**
     * Allowing
     * [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
     * cross-domain traffic, would allow the backends served from this endpoint
     * to receive and respond to HTTP OPTIONS requests. The response will be
     * used by the browser to determine whether the subsequent cross-origin
     * request is allowed to proceed.
     */
    allowCors?: boolean;
    /**
     * The list of features enabled on this endpoint.
     */
    features?: string[];
    /**
     * The canonical name of this endpoint.
     */
    name?: string;
    /**
     * The specification of an Internet routable address of API frontend that
     * will handle requests to this [API
     * Endpoint](https://cloud.google.com/apis/design/glossary). It should be
     * either a valid IPv4 address or a fully-qualified domain name. For
     * example, &quot;8.8.8.8&quot; or &quot;myservice.appspot.com&quot;.
     */
    target?: string;
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
    name?: string;
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
    syntax?: string;
  }
  /**
   * Enum value definition.
   */
  export interface Schema$EnumValue {
    /**
     * Enum value name.
     */
    name?: string;
    /**
     * Enum value number.
     */
    number?: number;
    /**
     * Protocol buffer options.
     */
    options?: Schema$Option[];
  }
  /**
   * Experimental service configuration. These configuration options can only be
   * used by whitelisted users.
   */
  export interface Schema$Experimental {
    /**
     * Authorization configuration.
     */
    authorization?: Schema$AuthorizationConfig;
  }
  /**
   * A single field of a message type.
   */
  export interface Schema$Field {
    /**
     * The field cardinality.
     */
    cardinality?: string;
    /**
     * The string value of the default value of this field. Proto2 syntax only.
     */
    defaultValue?: string;
    /**
     * The field JSON name.
     */
    jsonName?: string;
    /**
     * The field type.
     */
    kind?: string;
    /**
     * The field name.
     */
    name?: string;
    /**
     * The field number.
     */
    number?: number;
    /**
     * The index of the field type in `Type.oneofs`, for message or enumeration
     * types. The first type has index 1; zero means the type is not in the
     * list.
     */
    oneofIndex?: number;
    /**
     * The protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * Whether to use alternative packed wire representation.
     */
    packed?: boolean;
    /**
     * The field type URL, without the scheme, for message or enumeration types.
     * Example: `&quot;type.googleapis.com/google.protobuf.Timestamp&quot;`.
     */
    typeUrl?: string;
  }
  /**
   * `Service` is the root object of Google service configuration schema. It
   * describes basic information about a service, such as the name and the
   * title, and delegates other aspects to sub-sections. Each sub-section is
   * either a proto message or a repeated proto message that configures a
   * specific aspect, such as auth. See each proto message definition for
   * details.  Example:      type: google.api.Service     config_version: 3
   * name: calendar.googleapis.com     title: Google Calendar API     apis: -
   * name: google.calendar.v3.Calendar     authentication:       providers: -
   * id: google_calendar_auth         jwks_uri:
   * https://www.googleapis.com/oauth2/v1/certs         issuer:
   * https://securetoken.google.com       rules:       - selector: &quot;*&quot;
   * requirements:           provider_id: google_calendar_auth
   */
  export interface Schema$GoogleApiService {
    /**
     * A list of API interfaces exported by this service. Only the `name` field
     * of the google.protobuf.Api needs to be provided by the configuration
     * author, as the remaining fields will be derived from the IDL during the
     * normalization process. It is an error to specify an API interface here
     * which cannot be resolved against the associated IDL files.
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
     * The semantic version of the service configuration. The config version
     * affects the interpretation of the service configuration. For example,
     * certain features are enabled by default for certain config versions. The
     * latest config version is `3`.
     */
    configVersion?: number;
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
     * Configuration for network endpoints.  If this is empty, then an endpoint
     * with the same name as the service is automatically generated to service
     * all defined APIs.
     */
    endpoints?: Schema$Endpoint[];
    /**
     * A list of all enum types included in this API service.  Enums referenced
     * directly or indirectly by the `apis` are automatically included.  Enums
     * which are not referenced but shall be included should be listed here by
     * name. Example:      enums:     - name: google.someapi.v1.SomeEnum
     */
    enums?: Schema$Enum[];
    /**
     * Experimental configuration.
     */
    experimental?: Schema$Experimental;
    /**
     * HTTP configuration.
     */
    http?: Schema$Http;
    /**
     * A unique ID for a specific instance of this message, typically assigned
     * by the client for tracking purpose. If empty, the server may choose to
     * generate one instead.
     */
    id?: string;
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
     * Defines the monitored resources used by this service. This is required by
     * the Service.monitoring and Service.logging configurations.
     */
    monitoredResources?: Schema$MonitoredResourceDescriptor[];
    /**
     * Monitoring configuration.
     */
    monitoring?: Schema$Monitoring;
    /**
     * The DNS address at which this service is available, e.g.
     * `calendar.googleapis.com`.
     */
    name?: string;
    /**
     * The Google project that owns this service.
     */
    producerProjectId?: string;
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
     * A list of all proto message types included in this API service. It serves
     * similar purpose as [google.api.Service.types], except that these types
     * are not needed by user-defined APIs. Therefore, they will not show up in
     * the generated discovery doc. This field should only be used to define
     * system APIs in ESF.
     */
    systemTypes?: Schema$Type[];
    /**
     * The product title for this service.
     */
    title?: string;
    /**
     * A list of all proto message types included in this API service. Types
     * referenced directly or indirectly by the `apis` are automatically
     * included.  Messages which are not referenced but shall be included, such
     * as types used by the `google.protobuf.Any` type, should be listed here by
     * name. Example:      types:     - name: google.protobuf.Int32
     */
    types?: Schema$Type[];
    /**
     * Configuration controlling usage of this service.
     */
    usage?: Schema$Usage;
  }
  /**
   * A service that is available for use by the consumer.
   */
  export interface Schema$GoogleApiServiceusageV1Service {
    /**
     * The service configuration of the available service. Some fields may be
     * filtered out of the configuration in responses to the `ListServices`
     * method. These fields are present only in responses to the `GetService`
     * method.
     */
    config?: Schema$GoogleApiServiceusageV1ServiceConfig;
    /**
     * The resource name of the consumer and service.  A valid name would be: -
     * projects/123/services/serviceusage.googleapis.com
     */
    name?: string;
    /**
     * The resource name of the consumer.  A valid name would be: - projects/123
     */
    parent?: string;
    /**
     * Whether or not the service has been enabled for use by the consumer.
     */
    state?: string;
  }
  /**
   * The configuration of the service.
   */
  export interface Schema$GoogleApiServiceusageV1ServiceConfig {
    /**
     * A list of API interfaces exported by this service. Contains only the
     * names, versions, and method names of the interfaces.
     */
    apis?: Schema$Api[];
    /**
     * Auth configuration. Contains only the OAuth rules.
     */
    authentication?: Schema$Authentication;
    /**
     * Additional API documentation. Contains only the summary and the
     * documentation URL.
     */
    documentation?: Schema$Documentation;
    /**
     * Configuration for network endpoints. Contains only the names and aliases
     * of the endpoints.
     */
    endpoints?: Schema$Endpoint[];
    /**
     * The DNS address at which this service is available.  An example DNS
     * address would be: `calendar.googleapis.com`.
     */
    name?: string;
    /**
     * Quota configuration.
     */
    quota?: Schema$Quota;
    /**
     * The product title for this service.
     */
    title?: string;
    /**
     * Configuration controlling usage of this service.
     */
    usage?: Schema$Usage;
  }
  /**
   * Defines the HTTP configuration for an API service. It contains a list of
   * HttpRule, each specifying the mapping of an RPC method to one or more HTTP
   * REST API methods.
   */
  export interface Schema$Http {
    /**
     * When set to true, URL path parmeters will be fully URI-decoded except in
     * cases of single segment matches in reserved expansion, where
     * &quot;%2F&quot; will be left encoded.  The default behavior is to not
     * decode RFC 6570 reserved characters in multi segment matches.
     */
    fullyDecodeReservedExpansion?: boolean;
    /**
     * A list of HTTP configuration rules that apply to individual API methods.
     * **NOTE:** All service configuration rules follow &quot;last one
     * wins&quot; order.
     */
    rules?: Schema$HttpRule[];
  }
  /**
   * `HttpRule` defines the mapping of an RPC method to one or more HTTP REST
   * API methods. The mapping specifies how different portions of the RPC
   * request message are mapped to URL path, URL query parameters, and HTTP
   * request body. The mapping is typically specified as an `google.api.http`
   * annotation on the RPC method, see &quot;google/api/annotations.proto&quot;
   * for details.  The mapping consists of a field specifying the path template
   * and method kind.  The path template can refer to fields in the request
   * message, as in the example below which describes a REST GET operation on a
   * resource collection of messages:       service Messaging {       rpc
   * GetMessage(GetMessageRequest) returns (Message) {         option
   * (google.api.http).get =
   * &quot;/v1/messages/{message_id}/{sub.subfield}&quot;;       }     } message
   * GetMessageRequest {       message SubMessage {         string subfield = 1;
   * }       string message_id = 1; // mapped to the URL       SubMessage sub =
   * 2;    // `sub.subfield` is url-mapped     }     message Message { string
   * text = 1; // content of the resource     }  The same http annotation can
   * alternatively be expressed inside the `GRPC API Configuration` YAML file.
   * http:       rules:         - selector:
   * &lt;proto_package_name&gt;.Messaging.GetMessage           get:
   * /v1/messages/{message_id}/{sub.subfield}  This definition enables an
   * automatic, bidrectional mapping of HTTP JSON to RPC. Example:  HTTP | RPC
   * -----|----- `GET /v1/messages/123456/foo`  | `GetMessage(message_id:
   * &quot;123456&quot; sub: SubMessage(subfield: &quot;foo&quot;))`  In
   * general, not only fields but also field paths can be referenced from a path
   * pattern. Fields mapped to the path pattern cannot be repeated and must have
   * a primitive (non-message) type.  Any fields in the request message which
   * are not bound by the path pattern automatically become (optional) HTTP
   * query parameters. Assume the following definition of the request message:
   * service Messaging {       rpc GetMessage(GetMessageRequest) returns
   * (Message) {         option (google.api.http).get =
   * &quot;/v1/messages/{message_id}&quot;;       }     }     message
   * GetMessageRequest {       message SubMessage {         string subfield = 1;
   * }       string message_id = 1; // mapped to the URL       int64 revision =
   * 2;    // becomes a parameter       SubMessage sub = 3;    // `sub.subfield`
   * becomes a parameter     }   This enables a HTTP JSON to RPC mapping as
   * below:  HTTP | RPC -----|----- `GET
   * /v1/messages/123456?revision=2&amp;sub.subfield=foo` |
   * `GetMessage(message_id: &quot;123456&quot; revision: 2 sub:
   * SubMessage(subfield: &quot;foo&quot;))`  Note that fields which are mapped
   * to HTTP parameters must have a primitive type or a repeated primitive type.
   * Message types are not allowed. In the case of a repeated type, the
   * parameter can be repeated in the URL, as in `...?param=A&amp;param=B`.  For
   * HTTP method kinds which allow a request body, the `body` field specifies
   * the mapping. Consider a REST update method on the message resource
   * collection:       service Messaging {       rpc
   * UpdateMessage(UpdateMessageRequest) returns (Message) {         option
   * (google.api.http) = {           put: &quot;/v1/messages/{message_id}&quot;
   * body: &quot;message&quot;         };       }     }     message
   * UpdateMessageRequest {       string message_id = 1; // mapped to the URL
   * Message message = 2;   // mapped to the body     }   The following HTTP
   * JSON to RPC mapping is enabled, where the representation of the JSON in the
   * request body is determined by protos JSON encoding:  HTTP | RPC -----|-----
   * `PUT /v1/messages/123456 { &quot;text&quot;: &quot;Hi!&quot; }` |
   * `UpdateMessage(message_id: &quot;123456&quot; message { text:
   * &quot;Hi!&quot; })`  The special name `*` can be used in the body mapping
   * to define that every field not bound by the path template should be mapped
   * to the request body.  This enables the following alternative definition of
   * the update method:      service Messaging {       rpc
   * UpdateMessage(Message) returns (Message) {         option (google.api.http)
   * = {           put: &quot;/v1/messages/{message_id}&quot;           body:
   * &quot;*&quot;         };       }     }     message Message {       string
   * message_id = 1;       string text = 2;     }   The following HTTP JSON to
   * RPC mapping is enabled:  HTTP | RPC -----|----- `PUT /v1/messages/123456 {
   * &quot;text&quot;: &quot;Hi!&quot; }` | `UpdateMessage(message_id:
   * &quot;123456&quot; text: &quot;Hi!&quot;)`  Note that when using `*` in the
   * body mapping, it is not possible to have HTTP parameters, as all fields not
   * bound by the path end in the body. This makes this option more rarely used
   * in practice of defining REST APIs. The common usage of `*` is in custom
   * methods which don&#39;t use the URL at all for transferring data.  It is
   * possible to define multiple HTTP methods for one RPC by using the
   * `additional_bindings` option. Example:      service Messaging {       rpc
   * GetMessage(GetMessageRequest) returns (Message) {         option
   * (google.api.http) = {           get: &quot;/v1/messages/{message_id}&quot;
   * additional_bindings {             get:
   * &quot;/v1/users/{user_id}/messages/{message_id}&quot;           } }; } }
   * message GetMessageRequest {       string message_id = 1;       string
   * user_id = 2;     }   This enables the following two alternative HTTP JSON
   * to RPC mappings:  HTTP | RPC -----|----- `GET /v1/messages/123456` |
   * `GetMessage(message_id: &quot;123456&quot;)` `GET
   * /v1/users/me/messages/123456` | `GetMessage(user_id: &quot;me&quot;
   * message_id: &quot;123456&quot;)`  # Rules for HTTP mapping  The rules for
   * mapping HTTP path, query parameters, and body fields to the request message
   * are as follows:  1. The `body` field specifies either `*` or a field path,
   * or is    omitted. If omitted, it indicates there is no HTTP request
   * body. 2. Leaf fields (recursive expansion of nested messages in the
   * request) can be classified into three types:     (a) Matched in the URL
   * template.     (b) Covered by body (if body is `*`, everything except (a)
   * fields;         else everything under the body field)     (c) All other
   * fields. 3. URL query parameters found in the HTTP request are mapped to (c)
   * fields. 4. Any body sent with an HTTP request can contain only (b) fields.
   * The syntax of the path template is as follows:      Template =
   * &quot;/&quot; Segments [ Verb ] ;     Segments = Segment { &quot;/&quot;
   * Segment } ;     Segment  = &quot;*&quot; | &quot;**&quot; | LITERAL |
   * Variable ;     Variable = &quot;{&quot; FieldPath [ &quot;=&quot; Segments
   * ] &quot;}&quot; ;     FieldPath = IDENT { &quot;.&quot; IDENT } ;     Verb
   * = &quot;:&quot; LITERAL ;  The syntax `*` matches a single path segment.
   * The syntax `**` matches zero or more path segments, which must be the last
   * part of the path except the `Verb`. The syntax `LITERAL` matches literal
   * text in the path.  The syntax `Variable` matches part of the URL path as
   * specified by its template. A variable template must not contain other
   * variables. If a variable matches a single path segment, its template may be
   * omitted, e.g. `{var}` is equivalent to `{var=*}`.  If a variable contains
   * exactly one path segment, such as `&quot;{var}&quot;` or
   * `&quot;{var=*}&quot;`, when such a variable is expanded into a URL path,
   * all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. Such variables
   * show up in the Discovery Document as `{var}`.  If a variable contains one
   * or more path segments, such as `&quot;{var=foo/*}&quot;` or
   * `&quot;{var=**}&quot;`, when such a variable is expanded into a URL path,
   * all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded. Such
   * variables show up in the Discovery Document as `{+var}`.  NOTE: While the
   * single segment variable matches the semantics of [RFC
   * 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String
   * Expansion, the multi segment variable **does not** match RFC 6570 Reserved
   * Expansion. The reason is that the Reserved Expansion does not expand
   * special characters like `?` and `#`, which would lead to invalid URLs.
   * NOTE: the field paths in variables and in the `body` must not refer to
   * repeated fields or map fields.
   */
  export interface Schema$HttpRule {
    /**
     * Additional HTTP bindings for the selector. Nested bindings must not
     * contain an `additional_bindings` field themselves (that is, the nesting
     * may only be one level deep).
     */
    additionalBindings?: Schema$HttpRule[];
    /**
     * Specifies the permission(s) required for an API element for the overall
     * API request to succeed. It is typically used to mark request message
     * fields that contain the name of the resource and indicates the
     * permissions that will be checked on that resource.
     */
    authorizations?: Schema$AuthorizationRule[];
    /**
     * The name of the request field whose value is mapped to the HTTP body, or
     * `*` for mapping all fields not captured by the path pattern to the HTTP
     * body. NOTE: the referred field must not be a repeated field and must be
     * present at the top-level of request message type.
     */
    body?: string;
    /**
     * The custom pattern is used for specifying an HTTP method that is not
     * included in the `pattern` field, such as HEAD, or &quot;*&quot; to leave
     * the HTTP method unspecified for this rule. The wild-card rule is useful
     * for services that provide content to Web (HTML) clients.
     */
    custom?: Schema$CustomHttpPattern;
    /**
     * Used for deleting a resource.
     */
    delete?: string;
    /**
     * Used for listing and getting information about resources.
     */
    get?: string;
    /**
     * Use this only for Scotty Requests. Do not use this for bytestream
     * methods. For media support, add instead
     * [][google.bytestream.RestByteStream] as an API to your configuration.
     */
    mediaDownload?: Schema$MediaDownload;
    /**
     * Use this only for Scotty Requests. Do not use this for media support
     * using Bytestream, add instead [][google.bytestream.RestByteStream] as an
     * API to your configuration for Bytestream methods.
     */
    mediaUpload?: Schema$MediaUpload;
    /**
     * Used for updating a resource.
     */
    patch?: string;
    /**
     * Used for creating a resource.
     */
    post?: string;
    /**
     * Used for updating a resource.
     */
    put?: string;
    /**
     * DO NOT USE. This is an experimental field.  Optional. The REST collection
     * name is by default derived from the URL pattern. If specified, this field
     * overrides the default collection name. Example:      rpc
     * AddressesAggregatedList(AddressesAggregatedListRequest)         returns
     * (AddressesAggregatedListResponse) {       option (google.api.http) = {
     * get: &quot;/v1/projects/{project_id}/aggregated/addresses&quot;
     * rest_collection: &quot;projects.addresses&quot;       };     }  This
     * method has the automatically derived collection name
     * &quot;projects.aggregated&quot;. Because, semantically, this rpc is
     * actually an operation on the &quot;projects.addresses&quot; collection,
     * the `rest_collection` field is configured to override the derived
     * collection name.
     */
    restCollection?: string;
    /**
     * DO NOT USE. This is an experimental field.  Optional. The rest method
     * name is by default derived from the URL pattern. If specified, this field
     * overrides the default method name. Example:      rpc
     * CreateResource(CreateResourceRequest)         returns
     * (CreateResourceResponse) {       option (google.api.http) = { post:
     * &quot;/v1/resources&quot;,         body: &quot;resource&quot;,
     * rest_method_name: &quot;insert&quot;       };     }  This method has the
     * automatically derived rest method name &quot;create&quot;, but for
     * backwards compatibility with apiary, it is specified as insert.
     */
    restMethodName?: string;
    /**
     * Selects methods to which this rule applies.  Refer to selector for syntax
     * details.
     */
    selector?: string;
  }
  /**
   * A description of a label.
   */
  export interface Schema$LabelDescriptor {
    /**
     * A human-readable description for the label.
     */
    description?: string;
    /**
     * The label key.
     */
    key?: string;
    /**
     * The type of data that can be assigned to the label.
     */
    valueType?: string;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Response message for the `ListServices` method.
   */
  export interface Schema$ListServicesResponse {
    /**
     * Token that can be passed to `ListServices` to resume a paginated query.
     */
    nextPageToken?: string;
    /**
     * The available services for the requested project.
     */
    services?: Schema$Service[];
  }
  /**
   * A description of a log type. Example in YAML format:      - name:
   * library.googleapis.com/activity_history       description: The history of
   * borrowing and returning library items.       display_name: Activity labels:
   * - key: /customer_id         description: Identifier of a library customer
   */
  export interface Schema$LogDescriptor {
    /**
     * A human-readable description of this log. This information appears in the
     * documentation and can contain details.
     */
    description?: string;
    /**
     * The human-readable name for this log. This information appears on the
     * user interface and should be concise.
     */
    displayName?: string;
    /**
     * The set of labels that are available to describe a specific log entry.
     * Runtime requests that contain labels not specified here are considered
     * invalid.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * The name of the log. It must be less than 512 characters long and can
     * include the following characters: upper- and lower-case alphanumeric
     * characters [A-Za-z0-9], and punctuation characters including slash,
     * underscore, hyphen, period [/_-.].
     */
    name?: string;
  }
  /**
   * Logging configuration of the service.  The following example shows how to
   * configure logs to be sent to the producer and consumer projects. In the
   * example, the `activity_history` log is sent to both the producer and
   * consumer projects, whereas the `purchase_history` log is only sent to the
   * producer project.      monitored_resources:     - type:
   * library.googleapis.com/branch       labels:       - key: /city description:
   * The city where the library branch is located in.       - key: /name
   * description: The name of the branch.     logs:     - name: activity_history
   * labels:       - key: /customer_id     - name: purchase_history     logging:
   * producer_destinations:       - monitored_resource:
   * library.googleapis.com/branch         logs:         - activity_history -
   * purchase_history       consumer_destinations:       - monitored_resource:
   * library.googleapis.com/branch         logs:         - activity_history
   */
  export interface Schema$Logging {
    /**
     * Logging configurations for sending logs to the consumer project. There
     * can be multiple consumer destinations, each one must have a different
     * monitored resource type. A log can be used in at most one consumer
     * destination.
     */
    consumerDestinations?: Schema$LoggingDestination[];
    /**
     * Logging configurations for sending logs to the producer project. There
     * can be multiple producer destinations, each one must have a different
     * monitored resource type. A log can be used in at most one producer
     * destination.
     */
    producerDestinations?: Schema$LoggingDestination[];
  }
  /**
   * Configuration of a specific logging destination (the producer project or
   * the consumer project).
   */
  export interface Schema$LoggingDestination {
    /**
     * Names of the logs to be sent to this destination. Each name must be
     * defined in the Service.logs section. If the log name is not a domain
     * scoped name, it will be automatically prefixed with the service name
     * followed by &quot;/&quot;.
     */
    logs?: string[];
    /**
     * The monitored resource type. The type must be defined in the
     * Service.monitored_resources section.
     */
    monitoredResource?: string;
  }
  /**
   * Defines the Media configuration for a service in case of a download. Use
   * this only for Scotty Requests. Do not use this for media support using
   * Bytestream, add instead [][google.bytestream.RestByteStream] as an API to
   * your configuration for Bytestream methods.
   */
  export interface Schema$MediaDownload {
    /**
     * A boolean that determines whether a notification for the completion of a
     * download should be sent to the backend.
     */
    completeNotification?: boolean;
    /**
     * DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.  Specify
     * name of the download service if one is used for download.
     */
    downloadService?: string;
    /**
     * Name of the Scotty dropzone to use for the current API.
     */
    dropzone?: string;
    /**
     * Whether download is enabled.
     */
    enabled?: boolean;
    /**
     * Optional maximum acceptable size for direct download. The size is
     * specified in bytes.
     */
    maxDirectDownloadSize?: string;
    /**
     * A boolean that determines if direct download from ESF should be used for
     * download of this media.
     */
    useDirectDownload?: boolean;
  }
  /**
   * Defines the Media configuration for a service in case of an upload. Use
   * this only for Scotty Requests. Do not use this for media support using
   * Bytestream, add instead [][google.bytestream.RestByteStream] as an API to
   * your configuration for Bytestream methods.
   */
  export interface Schema$MediaUpload {
    /**
     * A boolean that determines whether a notification for the completion of an
     * upload should be sent to the backend. These notifications will not be
     * seen by the client and will not consume quota.
     */
    completeNotification?: boolean;
    /**
     * Name of the Scotty dropzone to use for the current API.
     */
    dropzone?: string;
    /**
     * Whether upload is enabled.
     */
    enabled?: boolean;
    /**
     * Optional maximum acceptable size for an upload. The size is specified in
     * bytes.
     */
    maxSize?: string;
    /**
     * An array of mimetype patterns. Esf will only accept uploads that match
     * one of the given patterns.
     */
    mimeTypes?: string[];
    /**
     * Whether to receive a notification for progress changes of media upload.
     */
    progressNotification?: boolean;
    /**
     * Whether to receive a notification on the start of media upload.
     */
    startNotification?: boolean;
    /**
     * DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.  Specify
     * name of the upload service if one is used for upload.
     */
    uploadService?: string;
  }
  /**
   * Method represents a method of an API interface.
   */
  export interface Schema$Method {
    /**
     * The simple name of this method.
     */
    name?: string;
    /**
     * Any metadata attached to the method.
     */
    options?: Schema$Option[];
    /**
     * If true, the request is streamed.
     */
    requestStreaming?: boolean;
    /**
     * A URL of the input message type.
     */
    requestTypeUrl?: string;
    /**
     * If true, the response is streamed.
     */
    responseStreaming?: boolean;
    /**
     * The URL of the output message type.
     */
    responseTypeUrl?: string;
    /**
     * The source syntax of this method.
     */
    syntax?: string;
  }
  /**
   * Defines a metric type and its schema. Once a metric descriptor is created,
   * deleting or altering it stops data collection and makes the metric
   * type&#39;s existing data unusable.
   */
  export interface Schema$MetricDescriptor {
    /**
     * A detailed description of the metric, which can be used in documentation.
     */
    description?: string;
    /**
     * A concise name for the metric, which can be displayed in user interfaces.
     * Use sentence case without an ending period, for example &quot;Request
     * count&quot;. This field is optional but it is recommended to be set for
     * any metrics associated with user-visible concepts, such as Quota.
     */
    displayName?: string;
    /**
     * The set of labels that can be used to describe a specific instance of
     * this metric type. For example, the
     * `appengine.googleapis.com/http/server/response_latencies` metric type has
     * a label for the HTTP response code, `response_code`, so you can look at
     * latencies for successful responses or just for responses that failed.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Whether the metric records instantaneous values, changes to a value, etc.
     * Some combinations of `metric_kind` and `value_type` might not be
     * supported.
     */
    metricKind?: string;
    /**
     * The resource name of the metric descriptor.
     */
    name?: string;
    /**
     * The metric type, including its DNS name prefix. The type is not
     * URL-encoded.  All user-defined custom metric types have the DNS name
     * `custom.googleapis.com`.  Metric types should use a natural hierarchical
     * grouping. For example:
     * &quot;custom.googleapis.com/invoice/paid/amount&quot;
     * &quot;appengine.googleapis.com/http/server/response_latencies&quot;
     */
    type?: string;
    /**
     * The unit in which the metric value is reported. It is only applicable if
     * the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The supported
     * units are a subset of [The Unified Code for Units of
     * Measure](http://unitsofmeasure.org/ucum.html) standard:  **Basic units
     * (UNIT)**  * `bit`   bit * `By`    byte * `s`     second * `min`   minute
     * * `h`     hour * `d`     day  **Prefixes (PREFIX)**  * `k`     kilo
     * (10**3) * `M`     mega    (10**6) * `G`     giga    (10**9) * `T` tera
     * (10**12) * `P`     peta    (10**15) * `E`     exa     (10**18) * `Z`
     * zetta   (10**21) * `Y`     yotta   (10**24) * `m`     milli   (10**-3) *
     * `u`     micro   (10**-6) * `n`     nano    (10**-9) * `p`     pico
     * (10**-12) * `f`     femto   (10**-15) * `a`     atto    (10**-18) * `z`
     * zepto   (10**-21) * `y`     yocto   (10**-24) * `Ki`    kibi    (2**10) *
     * `Mi`    mebi    (2**20) * `Gi`    gibi    (2**30) * `Ti`    tebi (2**40)
     * **Grammar**  The grammar also includes these connectors:  * `/` division
     * (as an infix operator, e.g. `1/s`). * `.`    multiplication (as an infix
     * operator, e.g. `GBy.d`)  The grammar for a unit is as follows: Expression
     * = Component { &quot;.&quot; Component } { &quot;/&quot; Component } ;
     * Component = ( [ PREFIX ] UNIT | &quot;%&quot; ) [ Annotation ] |
     * Annotation               | &quot;1&quot;               ;      Annotation
     * = &quot;{&quot; NAME &quot;}&quot; ;  Notes:  * `Annotation` is just a
     * comment if it follows a `UNIT` and is    equivalent to `1` if it is used
     * alone. For examples,    `{requests}/s == 1/s`, `By{transmitted}/s ==
     * By/s`. * `NAME` is a sequence of non-blank printable ASCII characters not
     * containing &#39;{&#39; or &#39;}&#39;. * `1` represents dimensionless
     * value 1, such as in `1/s`. * `%` represents dimensionless value 1/100,
     * and annotates values giving    a percentage.
     */
    unit?: string;
    /**
     * Whether the measurement is an integer, a floating-point number, etc. Some
     * combinations of `metric_kind` and `value_type` might not be supported.
     */
    valueType?: string;
  }
  /**
   * Bind API methods to metrics. Binding a method to a metric causes that
   * metric&#39;s configured quota behaviors to apply to the method call.
   */
  export interface Schema$MetricRule {
    /**
     * Metrics to update when the selected methods are called, and the
     * associated cost applied to each metric.  The key of the map is the metric
     * name, and the values are the amount increased for the metric against
     * which the quota limits are defined. The value must not be negative.
     */
    metricCosts?: any;
    /**
     * Selects the methods to which this rule applies.  Refer to selector for
     * syntax details.
     */
    selector?: string;
  }
  /**
   * Declares an API Interface to be included in this interface. The including
   * interface must redeclare all the methods from the included interface, but
   * documentation and options are inherited as follows:  - If after comment and
   * whitespace stripping, the documentation   string of the redeclared method
   * is empty, it will be inherited   from the original method.  - Each
   * annotation belonging to the service config (http,   visibility) which is
   * not set in the redeclared method will be   inherited.  - If an http
   * annotation is inherited, the path pattern will be   modified as follows.
   * Any version prefix will be replaced by the   version of the including
   * interface plus the root path if   specified.  Example of a simple mixin:
   * package google.acl.v1;     service AccessControl {       // Get the
   * underlying ACL object.       rpc GetAcl(GetAclRequest) returns (Acl) {
   * option (google.api.http).get = &quot;/v1/{resource=**}:getAcl&quot;; } }
   * package google.storage.v2;     service Storage {       //       rpc
   * GetAcl(GetAclRequest) returns (Acl);        // Get a data record.       rpc
   * GetData(GetDataRequest) returns (Data) {         option
   * (google.api.http).get = &quot;/v2/{resource=**}&quot;;       }     }
   * Example of a mixin configuration:      apis:     - name:
   * google.storage.v2.Storage       mixins:       - name:
   * google.acl.v1.AccessControl  The mixin construct implies that all methods
   * in `AccessControl` are also declared with same name and request/response
   * types in `Storage`. A documentation generator or annotation processor will
   * see the effective `Storage.GetAcl` method after inherting documentation and
   * annotations as follows:      service Storage {       // Get the underlying
   * ACL object.       rpc GetAcl(GetAclRequest) returns (Acl) {         option
   * (google.api.http).get = &quot;/v2/{resource=**}:getAcl&quot;;       } ...
   * }  Note how the version in the path pattern changed from `v1` to `v2`.  If
   * the `root` field in the mixin is specified, it should be a relative path
   * under which inherited HTTP paths are placed. Example:      apis:     -
   * name: google.storage.v2.Storage       mixins:       - name:
   * google.acl.v1.AccessControl         root: acls  This implies the following
   * inherited HTTP annotation:      service Storage {       // Get the
   * underlying ACL object.       rpc GetAcl(GetAclRequest) returns (Acl) {
   * option (google.api.http).get = &quot;/v2/acls/{resource=**}:getAcl&quot;;
   * }       ...     }
   */
  export interface Schema$Mixin {
    /**
     * The fully qualified name of the interface which is included.
     */
    name?: string;
    /**
     * If non-empty specifies a path under which inherited HTTP paths are
     * rooted.
     */
    root?: string;
  }
  /**
   * An object that describes the schema of a MonitoredResource object using a
   * type name and a set of labels.  For example, the monitored resource
   * descriptor for Google Compute Engine VM instances has a type of
   * `&quot;gce_instance&quot;` and specifies the use of the labels
   * `&quot;instance_id&quot;` and `&quot;zone&quot;` to identify particular VM
   * instances.  Different APIs can support different monitored resource types.
   * APIs generally provide a `list` method that returns the monitored resource
   * descriptors used by the API.
   */
  export interface Schema$MonitoredResourceDescriptor {
    /**
     * Optional. A detailed description of the monitored resource type that
     * might be used in documentation.
     */
    description?: string;
    /**
     * Optional. A concise name for the monitored resource type that might be
     * displayed in user interfaces. It should be a Title Cased Noun Phrase,
     * without any article or other determiners. For example, `&quot;Google
     * Cloud SQL Database&quot;`.
     */
    displayName?: string;
    /**
     * Required. A set of labels used to describe instances of this monitored
     * resource type. For example, an individual Google Cloud SQL database is
     * identified by values for the labels `&quot;database_id&quot;` and
     * `&quot;zone&quot;`.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Optional. The resource name of the monitored resource descriptor:
     * `&quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot;`
     * where {type} is the value of the `type` field in this object and
     * {project_id} is a project ID that provides API-specific context for
     * accessing the type.  APIs that do not use project information can use the
     * resource name format `&quot;monitoredResourceDescriptors/{type}&quot;`.
     */
    name?: string;
    /**
     * Required. The monitored resource type. For example, the type
     * `&quot;cloudsql_database&quot;` represents databases in Google Cloud SQL.
     * The maximum length of this value is 256 characters.
     */
    type?: string;
  }
  /**
   * Monitoring configuration of the service.  The example below shows how to
   * configure monitored resources and metrics for monitoring. In the example, a
   * monitored resource and two metrics are defined. The
   * `library.googleapis.com/book/returned_count` metric is sent to both
   * producer and consumer projects, whereas the
   * `library.googleapis.com/book/overdue_count` metric is only sent to the
   * consumer project.      monitored_resources:     - type:
   * library.googleapis.com/branch       labels:       - key: /city description:
   * The city where the library branch is located in.       - key: /name
   * description: The name of the branch.     metrics:     - name:
   * library.googleapis.com/book/returned_count       metric_kind: DELTA
   * value_type: INT64       labels:       - key: /customer_id     - name:
   * library.googleapis.com/book/overdue_count       metric_kind: GAUGE
   * value_type: INT64       labels:       - key: /customer_id     monitoring:
   * producer_destinations:       - monitored_resource:
   * library.googleapis.com/branch         metrics:         -
   * library.googleapis.com/book/returned_count       consumer_destinations: -
   * monitored_resource: library.googleapis.com/branch         metrics: -
   * library.googleapis.com/book/returned_count         -
   * library.googleapis.com/book/overdue_count
   */
  export interface Schema$Monitoring {
    /**
     * Monitoring configurations for sending metrics to the consumer project.
     * There can be multiple consumer destinations, each one must have a
     * different monitored resource type. A metric can be used in at most one
     * consumer destination.
     */
    consumerDestinations?: Schema$MonitoringDestination[];
    /**
     * Monitoring configurations for sending metrics to the producer project.
     * There can be multiple producer destinations, each one must have a
     * different monitored resource type. A metric can be used in at most one
     * producer destination.
     */
    producerDestinations?: Schema$MonitoringDestination[];
  }
  /**
   * Configuration of a specific monitoring destination (the producer project or
   * the consumer project).
   */
  export interface Schema$MonitoringDestination {
    /**
     * Names of the metrics to report to this monitoring destination. Each name
     * must be defined in Service.metrics section.
     */
    metrics?: string[];
    /**
     * The monitored resource type. The type must be defined in
     * Service.monitored_resources section.
     */
    monitoredResource?: string;
  }
  /**
   * OAuth scopes are a way to define data and permissions on data. For example,
   * there are scopes defined for &quot;Read-only access to Google
   * Calendar&quot; and &quot;Access to Cloud Platform&quot;. Users can consent
   * to a scope for an application, giving it permission to access that data on
   * their behalf.  OAuth scope specifications should be fairly coarse grained;
   * a user will need to see and understand the text description of what your
   * scope means.  In most cases: use one or at most two OAuth scopes for an
   * entire family of products. If your product has multiple APIs, you should
   * probably be sharing the OAuth scope across all of those APIs.  When you
   * need finer grained OAuth consent screens: talk with your product management
   * about how developers will use them in practice.  Please note that even
   * though each of the canonical scopes is enough for a request to be accepted
   * and passed to the backend, a request can still fail due to the backend
   * requiring additional scopes or permissions.
   */
  export interface Schema$OAuthRequirements {
    /**
     * The list of publicly documented OAuth scopes that are allowed access. An
     * OAuth token containing any of these scopes will be accepted.  Example:
     * canonical_scopes: https://www.googleapis.com/auth/calendar,
     * https://www.googleapis.com/auth/calendar.read
     */
    canonicalScopes?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
  /**
   * The metadata associated with a long running operation resource.
   */
  export interface Schema$OperationMetadata {
    /**
     * Percentage of completion of this operation, ranging from 0 to 100.
     */
    progressPercentage?: number;
    /**
     * The full name of the resources that this operation is directly associated
     * with.
     */
    resourceNames?: string[];
    /**
     * The start time of the operation.
     */
    startTime?: string;
    /**
     * Detailed status information for each step. The order is undetermined.
     */
    steps?: Schema$Step[];
  }
  /**
   * A protocol buffer option, which can be attached to a message, field,
   * enumeration, etc.
   */
  export interface Schema$Option {
    /**
     * The option&#39;s name. For protobuf built-in options (options defined in
     * descriptor.proto), this is the short name. For example,
     * `&quot;map_entry&quot;`. For custom options, it should be the
     * fully-qualified name. For example, `&quot;google.api.http&quot;`.
     */
    name?: string;
    /**
     * The option&#39;s value packed in an Any message. If the value is a
     * primitive, the corresponding wrapper type defined in
     * google/protobuf/wrappers.proto should be used. If the value is an enum,
     * it should be stored as an int32 value using the
     * google.protobuf.Int32Value type.
     */
    value?: any;
  }
  /**
   * Represents a documentation page. A page can contain subpages to represent
   * nested documentation set structure.
   */
  export interface Schema$Page {
    /**
     * The Markdown content of the page. You can use &lt;code&gt;&amp;#40;==
     * include {path} ==&amp;#41;&lt;/code&gt; to include content from a
     * Markdown file.
     */
    content?: string;
    /**
     * The name of the page. It will be used as an identity of the page to
     * generate URI of the page, text of the link to this page in navigation,
     * etc. The full page name (start from the root page name to this page
     * concatenated with `.`) can be used as reference to the page in your
     * documentation. For example: &lt;pre&gt;&lt;code&gt;pages: - name:
     * Tutorial   content: &amp;#40;== include tutorial.md ==&amp;#41; subpages:
     * - name: Java     content: &amp;#40;== include tutorial_java.md
     * ==&amp;#41; &lt;/code&gt;&lt;/pre&gt; You can reference `Java` page using
     * Markdown reference link syntax: `Java`.
     */
    name?: string;
    /**
     * Subpages of this page. The order of subpages specified here will be
     * honored in the generated docset.
     */
    subpages?: Schema$Page[];
  }
  /**
   * Quota configuration helps to achieve fairness and budgeting in service
   * usage.  The quota configuration works this way: - The service configuration
   * defines a set of metrics. - For API calls, the quota.metric_rules maps
   * methods to metrics with   corresponding costs. - The quota.limits defines
   * limits on the metrics, which will be used for   quota checks at runtime. An
   * example quota configuration in yaml format:     quota:       - name:
   * apiWriteQpsPerProject        metric: library.googleapis.com/write_calls
   * unit: &quot;1/min/{project}&quot;  # rate limit for consumer projects
   * values:          STANDARD: 10000        # The metric rules bind all methods
   * to the read_calls metric,      # except for the UpdateBook and DeleteBook
   * methods. These two methods      # are mapped to the write_calls metric,
   * with the UpdateBook method      # consuming at twice rate as the DeleteBook
   * method.      metric_rules:      - selector: &quot;*&quot; metric_costs:
   * library.googleapis.com/read_calls: 1      - selector:
   * google.example.library.v1.LibraryService.UpdateBook        metric_costs:
   * library.googleapis.com/write_calls: 2      - selector:
   * google.example.library.v1.LibraryService.DeleteBook        metric_costs:
   * library.googleapis.com/write_calls: 1   Corresponding Metric definition:
   * metrics:      - name: library.googleapis.com/read_calls display_name: Read
   * requests        metric_kind: DELTA        value_type: INT64       - name:
   * library.googleapis.com/write_calls        display_name: Write requests
   * metric_kind: DELTA        value_type: INT64
   */
  export interface Schema$Quota {
    /**
     * List of `QuotaLimit` definitions for the service.
     */
    limits?: Schema$QuotaLimit[];
    /**
     * List of `MetricRule` definitions, each one mapping a selected method to
     * one or more metrics.
     */
    metricRules?: Schema$MetricRule[];
  }
  /**
   * `QuotaLimit` defines a specific limit that applies over a specified
   * duration for a limit type. There can be at most one limit for a duration
   * and limit type combination defined within a `QuotaGroup`.
   */
  export interface Schema$QuotaLimit {
    /**
     * Default number of tokens that can be consumed during the specified
     * duration. This is the number of tokens assigned when a client application
     * developer activates the service for his/her project.  Specifying a value
     * of 0 will block all requests. This can be used if you are provisioning
     * quota to selected consumers and blocking others. Similarly, a value of -1
     * will indicate an unlimited quota. No other negative values are allowed.
     * Used by group-based quotas only.
     */
    defaultLimit?: string;
    /**
     * Optional. User-visible, extended description for this quota limit. Should
     * be used only when more context is needed to understand this limit than
     * provided by the limit&#39;s display name (see: `display_name`).
     */
    description?: string;
    /**
     * User-visible display name for this limit. Optional. If not set, the UI
     * will provide a default display name based on the quota configuration.
     * This field can be used to override the default display name generated
     * from the configuration.
     */
    displayName?: string;
    /**
     * Duration of this limit in textual notation. Example: &quot;100s&quot;,
     * &quot;24h&quot;, &quot;1d&quot;. For duration longer than a day, only
     * multiple of days is supported. We support only &quot;100s&quot; and
     * &quot;1d&quot; for now. Additional support will be added in the future.
     * &quot;0&quot; indicates indefinite duration.  Used by group-based quotas
     * only.
     */
    duration?: string;
    /**
     * Free tier value displayed in the Developers Console for this limit. The
     * free tier is the number of tokens that will be subtracted from the billed
     * amount when billing is enabled. This field can only be set on a limit
     * with duration &quot;1d&quot;, in a billable group; it is invalid on any
     * other limit. If this field is not set, it defaults to 0, indicating that
     * there is no free tier for this service.  Used by group-based quotas only.
     */
    freeTier?: string;
    /**
     * Maximum number of tokens that can be consumed during the specified
     * duration. Client application developers can override the default limit up
     * to this maximum. If specified, this value cannot be set to a value less
     * than the default limit. If not specified, it is set to the default limit.
     * To allow clients to apply overrides with no upper bound, set this to -1,
     * indicating unlimited maximum quota.  Used by group-based quotas only.
     */
    maxLimit?: string;
    /**
     * The name of the metric this quota limit applies to. The quota limits with
     * the same metric will be checked together during runtime. The metric must
     * be defined within the service config.
     */
    metric?: string;
    /**
     * Name of the quota limit.  The name must be provided, and it must be
     * unique within the service. The name can only include alphanumeric
     * characters as well as &#39;-&#39;.  The maximum length of the limit name
     * is 64 characters.
     */
    name?: string;
    /**
     * Specify the unit of the quota limit. It uses the same syntax as
     * Metric.unit. The supported unit kinds are determined by the quota backend
     * system.  Here are some examples: * &quot;1/min/{project}&quot; for quota
     * per minute per project.  Note: the order of unit components is
     * insignificant. The &quot;1&quot; at the beginning is required to follow
     * the metric unit syntax.
     */
    unit?: string;
    /**
     * Tiered limit values. You must specify this as a key:value pair, with an
     * integer value that is the maximum number of requests allowed for the
     * specified unit. Currently only STANDARD is supported.
     */
    values?: any;
  }
  /**
   * A service that is available for use by the consumer.
   */
  export interface Schema$Service {
    /**
     * The service configuration of the available service. Some fields may be
     * filtered out of the configuration in responses to the `ListServices`
     * method. These fields are present only in responses to the `GetService`
     * method.
     */
    config?: Schema$ServiceConfig;
    /**
     * The resource name of the consumer and service.  A valid name would be: -
     * projects/123/services/serviceusage.googleapis.com
     */
    name?: string;
    /**
     * The resource name of the consumer.  A valid name would be: - projects/123
     */
    parent?: string;
    /**
     * Whether or not the service has been enabled for use by the consumer.
     */
    state?: string;
  }
  /**
   * The configuration of the service.
   */
  export interface Schema$ServiceConfig {
    /**
     * A list of API interfaces exported by this service. Contains only the
     * names, versions, and method names of the interfaces.
     */
    apis?: Schema$Api[];
    /**
     * Auth configuration. Contains only the OAuth rules.
     */
    authentication?: Schema$Authentication;
    /**
     * Additional API documentation. Contains only the summary and the
     * documentation URL.
     */
    documentation?: Schema$Documentation;
    /**
     * Configuration for network endpoints. Contains only the names and aliases
     * of the endpoints.
     */
    endpoints?: Schema$Endpoint[];
    /**
     * The DNS address at which this service is available.  An example DNS
     * address would be: `calendar.googleapis.com`.
     */
    name?: string;
    /**
     * Quota configuration.
     */
    quota?: Schema$Quota;
    /**
     * The product title for this service.
     */
    title?: string;
    /**
     * Configuration controlling usage of this service.
     */
    usage?: Schema$Usage;
  }
  /**
   * `SourceContext` represents information about the source of a protobuf
   * element, like the file in which it is defined.
   */
  export interface Schema$SourceContext {
    /**
     * The path-qualified name of the .proto file that contained the associated
     * protobuf element.  For example:
     * `&quot;google/protobuf/source_context.proto&quot;`.
     */
    fileName?: string;
  }
  /**
   * Source information used to create a Service Config
   */
  export interface Schema$SourceInfo {
    /**
     * All files used during config generation.
     */
    sourceFiles?: any[];
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Represents the status of one operation step.
   */
  export interface Schema$Step {
    /**
     * The short description of the step.
     */
    description?: string;
    /**
     * The status code.
     */
    status?: string;
  }
  /**
   * Define a parameter&#39;s name and location. The parameter may be passed as
   * either an HTTP header or a URL query parameter, and if both are passed the
   * behavior is implementation-dependent.
   */
  export interface Schema$SystemParameter {
    /**
     * Define the HTTP header name to use for the parameter. It is case
     * insensitive.
     */
    httpHeader?: string;
    /**
     * Define the name of the parameter, such as &quot;api_key&quot; . It is
     * case sensitive.
     */
    name?: string;
    /**
     * Define the URL query parameter name to use for the parameter. It is case
     * sensitive.
     */
    urlQueryParameter?: string;
  }
  /**
   * Define a system parameter rule mapping system parameter definitions to
   * methods.
   */
  export interface Schema$SystemParameterRule {
    /**
     * Define parameters. Multiple names may be defined for a parameter. For a
     * given method call, only one of them should be used. If multiple names are
     * used the behavior is implementation-dependent. If none of the specified
     * names are present the behavior is parameter-dependent.
     */
    parameters?: Schema$SystemParameter[];
    /**
     * Selects the methods to which this rule applies. Use &#39;*&#39; to
     * indicate all methods in all APIs.  Refer to selector for syntax details.
     */
    selector?: string;
  }
  /**
   * ### System parameter configuration  A system parameter is a special kind of
   * parameter defined by the API system, not by an individual API. It is
   * typically mapped to an HTTP header and/or a URL query parameter. This
   * configuration specifies which methods change the names of the system
   * parameters.
   */
  export interface Schema$SystemParameters {
    /**
     * Define system parameters.  The parameters defined here will override the
     * default parameters implemented by the system. If this field is missing
     * from the service config, default system parameters will be used. Default
     * system parameters and names is implementation-dependent.  Example: define
     * api key for all methods      system_parameters       rules:         -
     * selector: &quot;*&quot;           parameters:             - name: api_key
     * url_query_parameter: api_key   Example: define 2 api key names for a
     * specific method.      system_parameters       rules:         - selector:
     * &quot;/ListShelves&quot;           parameters:             - name:
     * api_key               http_header: Api-Key1             - name: api_key
     * http_header: Api-Key2  **NOTE:** All service configuration rules follow
     * &quot;last one wins&quot; order.
     */
    rules?: Schema$SystemParameterRule[];
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
    name?: string;
    /**
     * The list of types appearing in `oneof` definitions in this type.
     */
    oneofs?: string[];
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
    syntax?: string;
  }
  /**
   * Configuration controlling usage of a service.
   */
  export interface Schema$Usage {
    /**
     * The full resource name of a channel used for sending notifications to the
     * service producer.  Google Service Management currently only supports
     * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
     * channel. To use Google Cloud Pub/Sub as the channel, this must be the
     * name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name
     * format documented in https://cloud.google.com/pubsub/docs/overview.
     */
    producerNotificationChannel?: string;
    /**
     * Requirements that must be satisfied before a consumer project can use the
     * service. Each requirement is of the form
     * &lt;service.name&gt;/&lt;requirement-id&gt;; for example
     * &#39;serviceusage.googleapis.com/billing-enabled&#39;.
     */
    requirements?: string[];
    /**
     * A list of usage rules that apply to individual API methods.  **NOTE:**
     * All service configuration rules follow &quot;last one wins&quot; order.
     */
    rules?: Schema$UsageRule[];
  }
  /**
   * Usage configuration rules for the service.  NOTE: Under development.   Use
   * this rule to configure unregistered calls for the service. Unregistered
   * calls are calls that do not contain consumer project identity. (Example:
   * calls that do not contain an API key). By default, API methods do not allow
   * unregistered calls, and each method call must be identified by a consumer
   * project identity. Use this rule to allow/disallow unregistered calls.
   * Example of an API that wants to allow unregistered calls for entire
   * service.      usage:       rules:       - selector: &quot;*&quot;
   * allow_unregistered_calls: true  Example of a method that wants to allow
   * unregistered calls.      usage:       rules:       - selector:
   * &quot;google.example.library.v1.LibraryService.CreateBook&quot;
   * allow_unregistered_calls: true
   */
  export interface Schema$UsageRule {
    /**
     * If true, the selected method allows unregistered calls, e.g. calls that
     * don&#39;t identify any user or application.
     */
    allowUnregisteredCalls?: boolean;
    /**
     * Selects the methods to which this rule applies. Use &#39;*&#39; to
     * indicate all methods in all APIs.  Refer to selector for syntax details.
     */
    selector?: string;
    /**
     * If true, the selected method should skip service control and the control
     * plane features, such as quota and billing, will not be available. This
     * flag is used by Google Cloud Endpoints to bypass checks for internal
     * methods, such as service health check methods.
     */
    skipServiceControl?: boolean;
  }


  export class Resource$Operations {
    root: Serviceusage;
    constructor(root: Serviceusage) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * serviceusage.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias serviceusage.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
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

      const rootUrl = options.rootUrl || 'https://serviceusage.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * serviceusage.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @alias serviceusage.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string=} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Operations$List, options?: MethodOptions):
        AxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Operations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Operations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|AxiosPromise<Schema$ListOperationsResponse> {
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

      const rootUrl = options.rootUrl || 'https://serviceusage.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/operations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    root: Serviceusage;
    constructor(root: Serviceusage) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * serviceusage.services.batchEnable
     * @desc Enable multiple services on a project. The operation is atomic: if
     * enabling any service fails, then the entire batch fails, and no state
     * changes occur.  Operation<response: google.protobuf.Empty>
     * @alias serviceusage.services.batchEnable
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Parent to enable services on.  An example name would be: `projects/123` where `123` is the project number (not project ID).  The `BatchEnableServices` method currently only supports projects.
     * @param {().BatchEnableServicesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchEnable(
        params?: Params$Resource$Services$Batchenable,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    batchEnable(
        params: Params$Resource$Services$Batchenable,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    batchEnable(
        params: Params$Resource$Services$Batchenable,
        callback: BodyResponseCallback<Schema$Operation>): void;
    batchEnable(callback: BodyResponseCallback<Schema$Operation>): void;
    batchEnable(
        paramsOrCallback?: Params$Resource$Services$Batchenable|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Services$Batchenable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Batchenable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://serviceusage.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/services:batchEnable')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * serviceusage.services.disable
     * @desc Disable a service so that it can no longer be used with a project.
     * This prevents unintended usage that may cause unexpected billing charges
     * or security leaks.  It is not valid to call the disable method on a
     * service that is not currently enabled. Callers will receive a
     * `FAILED_PRECONDITION` status if the target service is not currently
     * enabled.  Operation<response: google.protobuf.Empty>
     * @alias serviceusage.services.disable
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the consumer and service to disable the service on.  The enable and disable methods currently only support projects.  An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID).
     * @param {().DisableServiceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    disable(params?: Params$Resource$Services$Disable, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    disable(
        params: Params$Resource$Services$Disable,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    disable(
        params: Params$Resource$Services$Disable,
        callback: BodyResponseCallback<Schema$Operation>): void;
    disable(callback: BodyResponseCallback<Schema$Operation>): void;
    disable(
        paramsOrCallback?: Params$Resource$Services$Disable|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Disable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Disable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://serviceusage.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}:disable')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * serviceusage.services.enable
     * @desc Enable a service so that it can be used with a project.
     * Operation<response: google.protobuf.Empty>
     * @alias serviceusage.services.enable
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the consumer and service to enable the service on.  The `EnableService` and `DisableService` methods currently only support projects.  Enabling a service requires that the service is public or is shared with the user enabling the service.  An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID).
     * @param {().EnableServiceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    enable(params?: Params$Resource$Services$Enable, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    enable(
        params: Params$Resource$Services$Enable,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    enable(
        params: Params$Resource$Services$Enable,
        callback: BodyResponseCallback<Schema$Operation>): void;
    enable(callback: BodyResponseCallback<Schema$Operation>): void;
    enable(
        paramsOrCallback?: Params$Resource$Services$Enable|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Enable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Enable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://serviceusage.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}:enable')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * serviceusage.services.get
     * @desc Returns the service configuration and enabled state for a given
     * service.
     * @alias serviceusage.services.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the consumer and service to get the `ConsumerState` for.  An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Services$Get,
        options?: MethodOptions): AxiosPromise<Schema$Service>;
    get(params: Params$Resource$Services$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Service>,
        callback: BodyResponseCallback<Schema$Service>): void;
    get(params: Params$Resource$Services$Get,
        callback: BodyResponseCallback<Schema$Service>): void;
    get(callback: BodyResponseCallback<Schema$Service>): void;
    get(paramsOrCallback?: Params$Resource$Services$Get|
        BodyResponseCallback<Schema$Service>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Service>,
        callback?: BodyResponseCallback<Schema$Service>):
        void|AxiosPromise<Schema$Service> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://serviceusage.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }


    /**
     * serviceusage.services.list
     * @desc List all services available to the specified project, and the
     * current state of those services with respect to the project. The list
     * includes all public services, all services for which the calling user has
     * the `servicemanagement.services.bind` permission, and all services that
     * have already been enabled on the project. The list can be filtered to
     * only include services in a specific state, for example to only include
     * services enabled on the project.
     * @alias serviceusage.services.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Only list services that conform to the given filter. The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
     * @param {integer=} params.pageSize Requested size of the next page of data. Requested page size cannot exceed 200.  If not set, the default page size is 50.
     * @param {string=} params.pageToken Token identifying which result to start with, which is returned by a previous list call.
     * @param {string} params.parent Parent to search for services on.  An example name would be: `projects/123` where `123` is the project number (not project ID).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Services$List, options?: MethodOptions):
        AxiosPromise<Schema$ListServicesResponse>;
    list(
        params: Params$Resource$Services$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListServicesResponse>,
        callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
        params: Params$Resource$Services$List,
        callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Services$List|
        BodyResponseCallback<Schema$ListServicesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListServicesResponse>,
        callback?: BodyResponseCallback<Schema$ListServicesResponse>):
        void|AxiosPromise<Schema$ListServicesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://serviceusage.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/services')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListServicesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListServicesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Services$Batchenable {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Parent to enable services on.  An example name would be: `projects/123`
     * where `123` is the project number (not project ID).  The
     * `BatchEnableServices` method currently only supports projects.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchEnableServicesRequest;
  }
  export interface Params$Resource$Services$Disable {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the consumer and service to disable the service on.  The enable
     * and disable methods currently only support projects.  An example name
     * would be: `projects/123/services/serviceusage.googleapis.com` where `123`
     * is the project number (not project ID).
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DisableServiceRequest;
  }
  export interface Params$Resource$Services$Enable {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the consumer and service to enable the service on.  The
     * `EnableService` and `DisableService` methods currently only support
     * projects.  Enabling a service requires that the service is public or is
     * shared with the user enabling the service.  An example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number (not project ID).
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnableServiceRequest;
  }
  export interface Params$Resource$Services$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the consumer and service to get the `ConsumerState` for.  An
     * example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number (not project ID).
     */
    name?: string;
  }
  export interface Params$Resource$Services$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Only list services that conform to the given filter. The allowed filter
     * strings are `state:ENABLED` and `state:DISABLED`.
     */
    filter?: string;
    /**
     * Requested size of the next page of data. Requested page size cannot
     * exceed 200.  If not set, the default page size is 50.
     */
    pageSize?: number;
    /**
     * Token identifying which result to start with, which is returned by a
     * previous list call.
     */
    pageToken?: string;
    /**
     * Parent to search for services on.  An example name would be:
     * `projects/123` where `123` is the project number (not project ID).
     */
    parent?: string;
  }
}
