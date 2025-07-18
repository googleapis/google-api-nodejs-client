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

export namespace servicecontrol_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Service Control API
   *
   * Provides admission control and telemetry reporting for services integrated with Service Infrastructure.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const servicecontrol = google.servicecontrol('v2');
   * ```
   */
  export class Servicecontrol {
    context: APIRequestContext;
    services: Resource$Services;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.services = new Resource$Services(this.context);
    }
  }

  /**
   * This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.
   */
  export interface Schema$Api {
    /**
     * The API operation name. For gRPC requests, it is the fully qualified API method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI requests, it is the `operationId`, such as "getPet".
     */
    operation?: string | null;
    /**
     * The API protocol used for sending the request, such as "http", "https", "grpc", or "internal".
     */
    protocol?: string | null;
    /**
     * The API service name. It is a logical identifier for a networked API, such as "pubsub.googleapis.com". The naming syntax depends on the API management system being used for handling the request.
     */
    service?: string | null;
    /**
     * The API version associated with the API operation above, such as "v1" or "v1alpha1".
     */
    version?: string | null;
  }
  /**
   * This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.
   */
  export interface Schema$AttributeContext {
    /**
     * Represents an API operation that is involved to a network activity.
     */
    api?: Schema$Api;
    /**
     * The destination of a network activity, such as accepting a TCP connection. In a multi hop network activity, the destination represents the receiver of the last hop.
     */
    destination?: Schema$Peer;
    /**
     * Supports extensions for advanced use cases, such as logs and metrics.
     */
    extensions?: Array<{[key: string]: any}> | null;
    /**
     * The origin of a network activity. In a multi hop network activity, the origin represents the sender of the first hop. For the first hop, the `source` and the `origin` must have the same content.
     */
    origin?: Schema$Peer;
    /**
     * Represents a network request, such as an HTTP request.
     */
    request?: Schema$Request;
    /**
     * Represents a target resource that is involved with a network activity. If multiple resources are involved with an activity, this must be the primary one.
     */
    resource?: Schema$Resource;
    /**
     * Represents a network response, such as an HTTP response.
     */
    response?: Schema$Response;
    /**
     * The source of a network activity, such as starting a TCP connection. In a multi hop network activity, the source represents the sender of the last hop.
     */
    source?: Schema$Peer;
  }
  /**
   * Common audit log format for Google Cloud Platform API operations.
   */
  export interface Schema$AuditLog {
    /**
     * Authentication information.
     */
    authenticationInfo?: Schema$AuthenticationInfo;
    /**
     * Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission\} tuple.
     */
    authorizationInfo?: Schema$AuthorizationInfo[];
    /**
     * Other service-specific data about the request, response, and other information associated with the current audited event.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable" "google.logging.v2.ConfigServiceV2.CreateSink"
     */
    methodName?: string | null;
    /**
     * The number of items returned from a List or Query API method, if applicable.
     */
    numResponseItems?: string | null;
    /**
     * Indicates the policy violations for this request. If the request is denied by the policy, violation information will be logged here.
     */
    policyViolationInfo?: Schema$PolicyViolationInfo;
    /**
     * The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
     */
    request?: {[key: string]: any} | null;
    /**
     * Metadata about the operation.
     */
    requestMetadata?: Schema$RequestMetadata;
    /**
     * The resource location information.
     */
    resourceLocation?: Schema$ResourceLocation;
    /**
     * The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID"
     */
    resourceName?: string | null;
    /**
     * The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
     */
    resourceOriginalState?: {[key: string]: any} | null;
    /**
     * The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
     */
    response?: {[key: string]: any} | null;
    /**
     * Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities.
     */
    serviceData?: {[key: string]: any} | null;
    /**
     * The name of the API service performing the operation. For example, `"compute.googleapis.com"`.
     */
    serviceName?: string | null;
    /**
     * The status of the overall operation.
     */
    status?: Schema$Status;
  }
  /**
   * This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.
   */
  export interface Schema$Auth {
    /**
     * A list of access level resource names that allow resources to be accessed by authenticated requester. It is part of Secure GCP processing for the incoming request. An access level string has the format: "//{api_service_name\}/accessPolicies/{policy_id\}/accessLevels/{short_name\}" Example: "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
     */
    accessLevels?: string[] | null;
    /**
     * The intended audience(s) for this authentication information. Reflects the audience (`aud`) claim within a JWT. The audience value(s) depends on the `issuer`, but typically include one or more of the following pieces of information: * The services intended to receive the credential. For example, ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]. * A set of service-based scopes. For example, ["https://www.googleapis.com/auth/cloud-platform"]. * The client id of an app, such as the Firebase project id for JWTs from Firebase Auth. Consult the documentation for the credential issuer to determine the information provided.
     */
    audiences?: string[] | null;
    /**
     * Structured claims presented with the credential. JWTs include `{key: value\}` pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'], 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926\} SAML assertions are similarly specified, but with an identity provider dependent structure.
     */
    claims?: {[key: string]: any} | null;
    /**
     * The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: "123456789012.apps.googleusercontent.com".
     */
    presenter?: string | null;
    /**
     * The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id\}"
     */
    principal?: string | null;
  }
  /**
   * Authentication information for the operation.
   */
  export interface Schema$AuthenticationInfo {
    /**
     * The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority.
     */
    authoritySelector?: string | null;
    /**
     * The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).
     */
    principalEmail?: string | null;
    /**
     * String representation of identity of requesting party. Populated for both first and third party identities.
     */
    principalSubject?: string | null;
    /**
     * Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by delegating on a service account. When multiple authorities present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.
     */
    serviceAccountDelegationInfo?: Schema$ServiceAccountDelegationInfo[];
    /**
     * The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}/keys/{key\}"
     */
    serviceAccountKeyName?: string | null;
    /**
     * Records the history of delegated resource access across Google services.
     */
    serviceDelegationHistory?: Schema$ServiceDelegationHistory;
    /**
     * The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
     */
    thirdPartyPrincipal?: {[key: string]: any} | null;
  }
  /**
   * Authorization information for the operation.
   */
  export interface Schema$AuthorizationInfo {
    /**
     * Whether or not authorization for `resource` and `permission` was granted.
     */
    granted?: boolean | null;
    /**
     * The required IAM permission.
     */
    permission?: string | null;
    /**
     * The type of the permission that was checked. For data access audit logs this corresponds with the permission type that must be enabled in the project/folder/organization IAM policy in order for the log to be written.
     */
    permissionType?: string | null;
    /**
     * The resource being accessed, as a REST-style or cloud resource string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID or projects/PROJECTID/datasets/DATASETID
     */
    resource?: string | null;
    /**
     * Resource attributes used in IAM condition evaluation. This field contains resource attributes like resource type and resource name. To get the whole view of the attributes used in IAM condition evaluation, the user must also look into `AuditLog.request_metadata.request_attributes`.
     */
    resourceAttributes?: Schema$Resource;
  }
  /**
   * Request message for the Check method.
   */
  export interface Schema$CheckRequest {
    /**
     * Describes attributes about the operation being executed by the service.
     */
    attributes?: Schema$AttributeContext;
    /**
     * Optional. Contains a comma-separated list of flags.
     */
    flags?: string | null;
    /**
     * Describes the resources and the policies applied to each resource.
     */
    resources?: Schema$ResourceInfo[];
    /**
     * Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration.
     */
    serviceConfigId?: string | null;
  }
  /**
   * Response message for the Check method.
   */
  export interface Schema$CheckResponse {
    /**
     * Optional response metadata that will be emitted as dynamic metadata to be consumed by the caller of ServiceController. For compatibility with the ext_authz interface.
     */
    dynamicMetadata?: {[key: string]: any} | null;
    /**
     * Returns a set of request contexts generated from the `CheckRequest`.
     */
    headers?: {[key: string]: string} | null;
    /**
     * Operation is allowed when this field is not set. Any non-'OK' status indicates a denial; google.rpc.Status.details would contain additional details about the denial.
     */
    status?: Schema$Status;
  }
  /**
   * First party identity principal.
   */
  export interface Schema$FirstPartyPrincipal {
    /**
     * The email address of a Google account. .
     */
    principalEmail?: string | null;
    /**
     * Metadata about the service that uses the service account. .
     */
    serviceMetadata?: {[key: string]: any} | null;
  }
  /**
   * Represents OrgPolicy Violation information.
   */
  export interface Schema$OrgPolicyViolationInfo {
    /**
     * Optional. Deprecated. Resource payload that is currently in scope and is subjected to orgpolicy conditions. This payload may be the subset of the actual Resource that may come in the request.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. Deprecated. Tags referenced on the resource at the time of evaluation.
     */
    resourceTags?: {[key: string]: string} | null;
    /**
     * Optional. Resource type that the orgpolicy is checked against. Example: compute.googleapis.com/Instance, store.googleapis.com/bucket
     */
    resourceType?: string | null;
    /**
     * Optional. Policy violations
     */
    violationInfo?: Schema$ViolationInfo[];
  }
  /**
   * This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
   */
  export interface Schema$Peer {
    /**
     * The IP address of the peer.
     */
    ip?: string | null;
    /**
     * The labels associated with the peer.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The network port of the peer.
     */
    port?: string | null;
    /**
     * The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request.
     */
    principal?: string | null;
    /**
     * The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running.
     */
    regionCode?: string | null;
  }
  /**
   * Information related to policy violations for this request.
   */
  export interface Schema$PolicyViolationInfo {
    /**
     * Indicates the orgpolicy violations for this resource.
     */
    orgPolicyViolationInfo?: Schema$OrgPolicyViolationInfo;
  }
  /**
   * Request message for the Report method.
   */
  export interface Schema$ReportRequest {
    /**
     * Describes the list of operations to be reported. Each operation is represented as an AttributeContext, and contains all attributes around an API access.
     */
    operations?: Schema$AttributeContext[];
    /**
     * Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration.
     */
    serviceConfigId?: string | null;
  }
  /**
   * Response message for the Report method.
   */
  export interface Schema$ReportResponse {
    /**
     * The extension field to store serialized OTel responses. e.g. ExportLogsServiceResponse, ExportMetricsServiceResponse.
     */
    extensions?: {[key: string]: any} | null;
  }
  /**
   * This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request.
   */
  export interface Schema$Request {
    /**
     * The request authentication. May be absent for unauthenticated requests. Derived from the HTTP request `Authorization` header or equivalent.
     */
    auth?: Schema$Auth;
    /**
     * The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive.
     */
    headers?: {[key: string]: string} | null;
    /**
     * The HTTP request `Host` header value.
     */
    host?: string | null;
    /**
     * The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service.
     */
    id?: string | null;
    /**
     * The HTTP request method, such as `GET`, `POST`.
     */
    method?: string | null;
    /**
     * The values from Origin header from the HTTP request, such as "https://console.cloud.google.com". Modern browsers can only have one origin. Special browsers and/or HTTP clients may require multiple origins.
     */
    origin?: string | null;
    /**
     * The HTTP URL path, excluding the query parameters.
     */
    path?: string | null;
    /**
     * The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details.
     */
    protocol?: string | null;
    /**
     * The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed.
     */
    query?: string | null;
    /**
     * A special parameter for request reason. It is used by security systems to associate auditing information with a request.
     */
    reason?: string | null;
    /**
     * The HTTP URL scheme, such as `http` and `https`.
     */
    scheme?: string | null;
    /**
     * The HTTP request size in bytes. If unknown, it must be -1.
     */
    size?: string | null;
    /**
     * The timestamp when the `destination` service receives the last byte of the request.
     */
    time?: string | null;
  }
  /**
   * Metadata about the request.
   */
  export interface Schema$RequestMetadata {
    /**
     * The IP address of the caller. For a caller from the internet, this will be the public IPv4 or IPv6 address. For calls made from inside Google's internal production network from one GCP service to another, `caller_ip` will be redacted to "private". For a caller from a Compute Engine VM with a external IP address, `caller_ip` will be the VM's external IP address. For a caller from a Compute Engine VM without a external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will be the VM's internal IPv4 address, otherwise `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information.
     */
    callerIp?: string | null;
    /**
     * The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example: "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID"
     */
    callerNetwork?: string | null;
    /**
     * The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app.
     */
    callerSuppliedUserAgent?: string | null;
    /**
     * The destination of a network activity, such as accepting a TCP connection. In a multi hop network activity, the destination represents the receiver of the last hop. Only two fields are used in this message, Peer.port and Peer.ip. These fields are optionally populated by those services utilizing the IAM condition feature.
     */
    destinationAttributes?: Schema$Peer;
    /**
     * Request attributes used in IAM condition evaluation. This field contains request attributes like request time and access levels associated with the request. To get the whole view of the attributes used in IAM condition evaluation, the user must also look into `AuditLog.authentication_info.resource_attributes`.
     */
    requestAttributes?: Schema$Request;
  }
  /**
   * This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service.
   */
  export interface Schema$Resource {
    /**
     * Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed.
     */
    createTime?: string | null;
    /**
     * Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty.
     */
    deleteTime?: string | null;
    /**
     * Mutable. The display name set by clients. Must be <= 63 characters.
     */
    displayName?: string | null;
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Immutable. The location of the resource. The location encoding is specific to the service provider, and new encoding may be introduced as the service evolves. For Google Cloud products, the encoding is what is used by Google Cloud APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The semantics of `location` is identical to the `cloud.googleapis.com/location` label used by some Google Cloud APIs.
     */
    location?: string | null;
    /**
     * The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service\}/{resource.name\}". The differences between a resource name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See https://cloud.google.com/apis/design/resource_names for details.
     */
    name?: string | null;
    /**
     * The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request.
     */
    service?: string | null;
    /**
     * The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be "{service\}/{kind\}", such as "pubsub.googleapis.com/Topic".
     */
    type?: string | null;
    /**
     * The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
  }
  /**
   * Describes a resource referenced in the request.
   */
  export interface Schema$ResourceInfo {
    /**
     * Optional. The identifier of the container of this resource. For Google Cloud APIs, the resource container must be one of the following formats: - `projects/` - `folders/` - `organizations/` Required for the policy enforcement on the container level (e.g. VPCSC, Location Policy check, Org Policy check).
     */
    container?: string | null;
    /**
     * Optional. The location of the resource, it must be a valid zone, region or multiregion, for example: "europe-west4", "northamerica-northeast1-a". Required for location policy check.
     */
    location?: string | null;
    /**
     * The name of the resource referenced in the request.
     */
    name?: string | null;
    /**
     * The resource permission needed for this request. The format must be "{service\}/{plural\}.{verb\}".
     */
    permission?: string | null;
    /**
     * The resource type in the format of "{service\}/{kind\}".
     */
    type?: string | null;
  }
  /**
   * Location information about a resource.
   */
  export interface Schema$ResourceLocation {
    /**
     * The locations of a resource after the execution of the operation. Requests to create or delete a location based resource must populate the 'current_locations' field and not the 'original_locations' field. For example: "europe-west1-a" "us-east1" "nam3"
     */
    currentLocations?: string[] | null;
    /**
     * The locations of a resource prior to the execution of the operation. Requests that mutate the resource's location must populate both the 'original_locations' as well as the 'current_locations' fields. For example: "europe-west1-a" "us-east1" "nam3"
     */
    originalLocations?: string[] | null;
  }
  /**
   * This message defines attributes for a typical network response. It generally models semantics of an HTTP response.
   */
  export interface Schema$Response {
    /**
     * The amount of time it takes the backend service to fully respond to a request. Measured from when the destination service starts to send the request to the backend until when the destination service receives the complete response from the backend.
     */
    backendLatency?: string | null;
    /**
     * The HTTP response status code, such as `200` and `404`.
     */
    code?: string | null;
    /**
     * The HTTP response headers. If multiple headers share the same key, they must be merged according to HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive.
     */
    headers?: {[key: string]: string} | null;
    /**
     * The HTTP response size in bytes. If unknown, it must be -1.
     */
    size?: string | null;
    /**
     * The timestamp when the `destination` service sends the last byte of the response.
     */
    time?: string | null;
  }
  /**
   * Identity delegation history of an authenticated service account.
   */
  export interface Schema$ServiceAccountDelegationInfo {
    /**
     * First party (Google) identity as the real authority.
     */
    firstPartyPrincipal?: Schema$FirstPartyPrincipal;
    /**
     * A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name\}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name\}[{subject\}]`
     */
    principalSubject?: string | null;
    /**
     * Third party identity as the real authority.
     */
    thirdPartyPrincipal?: Schema$ThirdPartyPrincipal;
  }
  /**
   * The history of delegation across multiple services as the result of the original user's action. Such as "service A uses its own account to do something for user B". This differs from ServiceAccountDelegationInfo, which only tracks the history of direct token exchanges (impersonation).
   */
  export interface Schema$ServiceDelegationHistory {
    /**
     * The original end user who initiated the request to GCP.
     */
    originalPrincipal?: string | null;
    /**
     * Data identifying the service specific jobs or units of work that were involved in a chain of service calls.
     */
    serviceMetadata?: Schema$ServiceMetadata[];
  }
  /**
   * Metadata describing the service and additional service specific information used to identify the job or unit of work at hand.
   */
  export interface Schema$ServiceMetadata {
    /**
     * Additional metadata provided by service teams to describe service specific job information that was triggered by the original principal.
     */
    jobMetadata?: {[key: string]: any} | null;
    /**
     * A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name\}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name\}[{subject\}]` If the identity is a Google account (e.g. workspace user account or service account), this will be the email of the prefixed by `serviceAccount:`. For example: `serviceAccount:my-service-account@project-1.iam.gserviceaccount.com`. If the identity is an individual user, the identity will be formatted as: `user:user_ABC@email.com`.
     */
    principalSubject?: string | null;
    /**
     * The service's fully qualified domain name, e.g. "dataproc.googleapis.com".
     */
    serviceDomain?: string | null;
  }
  /**
   * The context of a span. This is attached to an Exemplar in Distribution values during aggregation. It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID]
   */
  export interface Schema$SpanContext {
    /**
     * The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
     */
    spanName?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
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
   * Third party identity principal.
   */
  export interface Schema$ThirdPartyPrincipal {
    /**
     * Metadata about third party identity.
     */
    thirdPartyClaims?: {[key: string]: any} | null;
  }
  /**
   * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
   */
  export interface Schema$V2HttpRequest {
    /**
     * The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.
     */
    cacheFillBytes?: string | null;
    /**
     * Whether or not an entity was served from cache (with or without validation).
     */
    cacheHit?: boolean | null;
    /**
     * Whether or not a cache lookup was attempted.
     */
    cacheLookup?: boolean | null;
    /**
     * Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True.
     */
    cacheValidatedWithOriginServer?: boolean | null;
    /**
     * The request processing latency on the server, from the time the request was received until the response was sent.
     */
    latency?: string | null;
    /**
     * Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"
     */
    protocol?: string | null;
    /**
     * The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer?: string | null;
    /**
     * The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`.
     */
    remoteIp?: string | null;
    /**
     * The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`.
     */
    requestMethod?: string | null;
    /**
     * The size of the HTTP request message in bytes, including the request headers and the request body.
     */
    requestSize?: string | null;
    /**
     * The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`.
     */
    requestUrl?: string | null;
    /**
     * The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
     */
    responseSize?: string | null;
    /**
     * The IP address (IPv4 or IPv6) of the origin server that the request was sent to.
     */
    serverIp?: string | null;
    /**
     * The response code indicating the status of the response. Examples: 200, 404.
     */
    status?: number | null;
    /**
     * The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`.
     */
    userAgent?: string | null;
  }
  /**
   * An individual log entry.
   */
  export interface Schema$V2LogEntry {
    /**
     * Optional. Information about the HTTP request associated with this log entry, if applicable.
     */
    httpRequest?: Schema$V2HttpRequest;
    /**
     * A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id.
     */
    insertId?: string | null;
    /**
     * A set of user-defined (key, value) data that provides additional information about the log entry.
     */
    labels?: {[key: string]: string} | null;
    /**
     * A set of user-defined (key, value) data that provides additional information about the moniotored resource that the log entry belongs to.
     */
    monitoredResourceLabels?: {[key: string]: string} | null;
    /**
     * Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`.
     */
    name?: string | null;
    /**
     * Optional. Information about an operation associated with the log entry, if applicable.
     */
    operation?: Schema$V2LogEntryOperation;
    /**
     * The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog.
     */
    protoPayload?: {[key: string]: any} | null;
    /**
     * The severity of the log entry. The default value is `LogSeverity.DEFAULT`.
     */
    severity?: string | null;
    /**
     * Optional. Source code location information associated with the log entry, if any.
     */
    sourceLocation?: Schema$V2LogEntrySourceLocation;
    /**
     * The log entry payload, represented as a structure that is expressed as a JSON object.
     */
    structPayload?: {[key: string]: any} | null;
    /**
     * The log entry payload, represented as a Unicode string (UTF-8).
     */
    textPayload?: string | null;
    /**
     * The time the event described by the log entry occurred. If omitted, defaults to operation start time.
     */
    timestamp?: string | null;
    /**
     * Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     */
    trace?: string | null;
  }
  /**
   * Additional information about a potentially long-running operation with which a log entry is associated.
   */
  export interface Schema$V2LogEntryOperation {
    /**
     * Optional. Set this to True if this is the first log entry in the operation.
     */
    first?: boolean | null;
    /**
     * Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
     */
    id?: string | null;
    /**
     * Optional. Set this to True if this is the last log entry in the operation.
     */
    last?: boolean | null;
    /**
     * Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
     */
    producer?: string | null;
  }
  /**
   * Additional information about the source code location that produced the log entry.
   */
  export interface Schema$V2LogEntrySourceLocation {
    /**
     * Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
     */
    file?: string | null;
    /**
     * Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python).
     */
    function?: string | null;
    /**
     * Optional. Line within the source file. 1-based; 0 indicates no line number available.
     */
    line?: string | null;
  }
  /**
   * Report v2 extension proto for passing the resource metadata associated with a resource create/update/delete/undelete event from ESF to Chemist. ResourceEvent proto should be serialized into the ReportRequest.operations.extensions.
   */
  export interface Schema$V2ResourceEvent {
    /**
     * The ESF unique context id of the api request, from which this resource event originated. This field is only needed for CAIS integration via api annotation. See go/cais-lro-delete for more details.
     */
    contextId?: string | null;
    /**
     * The destinations field determines which backend services should handle the event. This should be specified as a comma-delimited string.
     */
    destinations?: string | null;
    /**
     * The parent resource for the resource.
     */
    parent?: Schema$Resource;
    /**
     * The api path the resource event was created in. This should match the source of the `payload` field. For direct integrations with Chemist, this should generally be the RESPONSE. go/resource-event-pipeline-type
     */
    path?: string | null;
    /**
     * The payload contains metadata associated with the resource event. A ResourceEventPayloadStatus is provided instead if the original payload cannot be returned due to a limitation (e.g. size limit).
     */
    payload?: {[key: string]: any} | null;
    /**
     * The resource associated with the event.
     */
    resource?: Schema$Resource;
    /**
     * The resource event type determines how the backend service should process the event.
     */
    type?: string | null;
  }
  /**
   * Provides information about the Policy violation info for this request.
   */
  export interface Schema$ViolationInfo {
    /**
     * Optional. Value that is being checked for the policy. This could be in encrypted form (if pii sensitive). This field will only be emitted in LIST_POLICY types
     */
    checkedValue?: string | null;
    /**
     * Optional. Constraint name
     */
    constraint?: string | null;
    /**
     * Optional. Error message that policy is indicating.
     */
    errorMessage?: string | null;
    /**
     * Optional. Indicates the type of the policy.
     */
    policyType?: string | null;
  }

  export class Resource$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicecontrol.googleapis.com
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
     * const servicecontrol = google.servicecontrol('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/servicecontrol',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await servicecontrol.services.check({
     *     // The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     *     serviceName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "flags": "my_flags",
     *       //   "resources": [],
     *       //   "serviceConfigId": "my_serviceConfigId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dynamicMetadata": {},
     *   //   "headers": {},
     *   //   "status": {}
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
    check(
      params: Params$Resource$Services$Check,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    check(
      params?: Params$Resource$Services$Check,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckResponse>>;
    check(
      params: Params$Resource$Services$Check,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    check(
      params: Params$Resource$Services$Check,
      options: MethodOptions | BodyResponseCallback<Schema$CheckResponse>,
      callback: BodyResponseCallback<Schema$CheckResponse>
    ): void;
    check(
      params: Params$Resource$Services$Check,
      callback: BodyResponseCallback<Schema$CheckResponse>
    ): void;
    check(callback: BodyResponseCallback<Schema$CheckResponse>): void;
    check(
      paramsOrCallback?:
        | Params$Resource$Services$Check
        | BodyResponseCallback<Schema$CheckResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Check;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Check;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicecontrol.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/services/{serviceName}:check').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckResponse>(parameters);
      }
    }

    /**
     * This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicecontrol.googleapis.com
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
     * const servicecontrol = google.servicecontrol('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/servicecontrol',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await servicecontrol.services.report({
     *     // The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     *     serviceName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "operations": [],
     *       //   "serviceConfigId": "my_serviceConfigId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "extensions": {}
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
    report(
      params: Params$Resource$Services$Report,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    report(
      params?: Params$Resource$Services$Report,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReportResponse>>;
    report(
      params: Params$Resource$Services$Report,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    report(
      params: Params$Resource$Services$Report,
      options: MethodOptions | BodyResponseCallback<Schema$ReportResponse>,
      callback: BodyResponseCallback<Schema$ReportResponse>
    ): void;
    report(
      params: Params$Resource$Services$Report,
      callback: BodyResponseCallback<Schema$ReportResponse>
    ): void;
    report(callback: BodyResponseCallback<Schema$ReportResponse>): void;
    report(
      paramsOrCallback?:
        | Params$Resource$Services$Report
        | BodyResponseCallback<Schema$ReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReportResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Report;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Report;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicecontrol.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/services/{serviceName}:report').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReportResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Services$Check extends StandardParameters {
    /**
     * The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     */
    serviceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckRequest;
  }
  export interface Params$Resource$Services$Report extends StandardParameters {
    /**
     * The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     */
    serviceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportRequest;
  }
}
