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

export namespace networkmanagement_v1beta1 {
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
   * Network Management API
   *
   * The Network Management API provides a collection of network performance monitoring and diagnostic capabilities.
   *
   * @example
   * const {google} = require('googleapis');
   * const networkmanagement = google.networkmanagement('v1beta1');
   *
   * @namespace networkmanagement
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Networkmanagement
   */
  export class Networkmanagement {
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
   * Details of the final state &quot;abort&quot; and associated resource.
   */
  export interface Schema$AbortInfo {
    /**
     * Causes that the analysis is aborted.
     */
    cause?: string | null;
    /**
     * URI of the resource that caused the abort.
     */
    resourceUri?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
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
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
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
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * A Connectivity Test for a network reachability analysis.
   */
  export interface Schema$ConnectivityTest {
    /**
     * Output only. The time the test was created.
     */
    createTime?: string | null;
    /**
     * The user-supplied description of the Connectivity Test. Maximum of 512 characters.
     */
    description?: string | null;
    /**
     * Required. Destination specification of the Connectivity Test.  You can use a combination of destination IP address, Compute Engine VM instance, or VPC network to uniquely identify the destination location.  Even if the destination IP address is not unique, the source IP location is unique. Usually, the analysis can infer the destination endpoint from route information.  If the destination you specify is a VM instance and the instance has multiple network interfaces, then you must also specify either a destination IP address  or VPC network to identify the destination interface.  A reachability analysis proceeds even if the destination location is ambiguous. However, the result can include endpoints that you don&#39;t intend to test.
     */
    destination?: Schema$Endpoint;
    /**
     * Output only. The display name of a Connectivity Test.
     */
    displayName?: string | null;
    /**
     * Resource labels to represent user-provided metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. Unique name of the resource using the form:     `projects/{project_id}/tests/{test_id}`
     */
    name?: string | null;
    /**
     * IP Protocol of the test. When not provided, &quot;TCP&quot; is assumed.
     */
    protocol?: string | null;
    /**
     * Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.
     */
    reachabilityDetails?: Schema$ReachabilityDetails;
    /**
     * Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.
     */
    relatedProjects?: string[] | null;
    /**
     * Required. Source specification of the Connectivity Test.  You can use a combination of source IP address, virtual machine (VM) instance, or Compute Engine network to uniquely identify the source location.  Examples: If the source IP address is an internal IP address within a Google Cloud Virtual Private Cloud (VPC) network, then you must also specify the VPC network. Otherwise, specify the VM instance, which already contains its internal IP address and VPC network information.  If the source of the test is within an on-premises network, then you must provide the destination VPC network.  If the source endpoint is a Compute Engine VM instance with multiple network interfaces, the instance itself is not sufficient to identify the endpoint. So, you must also specify the source IP address or VPC network.  A reachability analysis proceeds even if the source location is ambiguous. However, the test result may include endpoints that you don&#39;t intend to test.
     */
    source?: Schema$Endpoint;
    /**
     * Output only. The time the test&#39;s configuration was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Details of the final state &quot;deliver&quot; and associated resource.
   */
  export interface Schema$DeliverInfo {
    /**
     * URI of the resource that the packet is delivered to.
     */
    resourceUri?: string | null;
    /**
     * Target type where the packet is delivered to.
     */
    target?: string | null;
  }
  /**
   * Details of the final state &quot;drop&quot; and associated resource.
   */
  export interface Schema$DropInfo {
    /**
     * Cause that the packet is dropped.
     */
    cause?: string | null;
    /**
     * URI of the resource that caused the drop.
     */
    resourceUri?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Source or destination of the Connectivity Test.
   */
  export interface Schema$Endpoint {
    /**
     * A Compute Engine instance URI.
     */
    instance?: string | null;
    /**
     * The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test&#39;s destination is a [global load balancer VIP](/load-balancing/docs/load-balancing-overview).
     */
    ipAddress?: string | null;
    /**
     * A Compute Engine network URI.
     */
    network?: string | null;
    /**
     * Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.
     */
    networkType?: string | null;
    /**
     * The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.
     */
    port?: number | null;
    /**
     * Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID: 1. Only the IP address is specified, and the IP address is within a GCP project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.
     */
    projectId?: string | null;
  }
  /**
   * For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
   */
  export interface Schema$EndpointInfo {
    /**
     * Destination IP address.
     */
    destinationIp?: string | null;
    /**
     * URI of the network where this packet is sent to.
     */
    destinationNetworkUri?: string | null;
    /**
     * Destination port. Only valid when protocol is TCP or UDP.
     */
    destinationPort?: number | null;
    /**
     * IP protocol in string format, for example: &quot;TCP&quot;, &quot;UDP&quot;, &quot;ICMP&quot;.
     */
    protocol?: string | null;
    /**
     * Source IP address.
     */
    sourceIp?: string | null;
    /**
     * URI of the network where this packet originates from.
     */
    sourceNetworkUri?: string | null;
    /**
     * Source port. Only valid when protocol is TCP or UDP.
     */
    sourcePort?: number | null;
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
   * For display only. Metadata associated with a Compute Engine firewall rule.
   */
  export interface Schema$FirewallInfo {
    /**
     * Possible values: ALLOW, DENY
     */
    action?: string | null;
    /**
     * Possible values: INGRESS, EGRESS
     */
    direction?: string | null;
    /**
     * Name of a Compute Engine firewall rule.
     */
    displayName?: string | null;
    /**
     * URI of a Compute Engine network.
     */
    networkUri?: string | null;
    /**
     * Priority of the firewall rule.
     */
    priority?: number | null;
    /**
     * Target service accounts of the firewall rule.
     */
    targetServiceAccounts?: string[] | null;
    /**
     * Target tags of the firewall rule.
     */
    targetTags?: string[] | null;
    /**
     * URI of a Compute Engine firewall rule. Implied default rule does not have URI.
     */
    uri?: string | null;
  }
  /**
   * Details of the final state &quot;forward&quot; and associated resource.
   */
  export interface Schema$ForwardInfo {
    /**
     * URI of the resource that the packet is forwarded to.
     */
    resourceUri?: string | null;
    /**
     * Target type where this packet is forwarded to.
     */
    target?: string | null;
  }
  /**
   * For display only. Metadata associated with a Compute Engine forwarding rule.
   */
  export interface Schema$ForwardingRuleInfo {
    /**
     * Name of a Compute Engine forwarding rule.
     */
    displayName?: string | null;
    /**
     * Port range defined in the forwarding rule that matches the test.
     */
    matchedPortRange?: string | null;
    /**
     * Protocol defined in the forwarding rule that matches the test.
     */
    matchedProtocol?: string | null;
    /**
     * Network URI. Only valid for Internal Load Balancer.
     */
    networkUri?: string | null;
    /**
     * Target type of the forwarding rule.
     */
    target?: string | null;
    /**
     * URI of a Compute Engine forwarding rule.
     */
    uri?: string | null;
    /**
     * VIP of the forwarding rule.
     */
    vip?: string | null;
  }
  /**
   * For display only. Metadata associated with a Compute Engine instance.
   */
  export interface Schema$InstanceInfo {
    /**
     * Name of a Compute Engine instance.
     */
    displayName?: string | null;
    /**
     * External IP address of the network interface.
     */
    externalIp?: string | null;
    /**
     * Name of the network interface of a Compute Engine instance.
     */
    interface?: string | null;
    /**
     * Internal IP address of the network interface.
     */
    internalIp?: string | null;
    /**
     * Network tags configured on the instance.
     */
    networkTags?: string[] | null;
    /**
     * URI of a Compute Engine network.
     */
    networkUri?: string | null;
    /**
     * Service account authorized for the instance.
     */
    serviceAccount?: string | null;
    /**
     * URI of a Compute Engine instance.
     */
    uri?: string | null;
  }
  /**
   * Response for the `ListConnectivityTests` method.
   */
  export interface Schema$ListConnectivityTestsResponse {
    /**
     * Page token to fetch the next set of Connectivity Tests.
     */
    nextPageToken?: string | null;
    /**
     * List of Connectivity Tests.
     */
    resources?: Schema$ConnectivityTest[];
    /**
     * Locations that could not be reached (when querying all locations with `-`).
     */
    unreachable?: string[] | null;
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
   * For display only. Metadata associated with a specific load balancer backend.
   */
  export interface Schema$LoadBalancerBackend {
    /**
     * Name of a Compute Engine instance or network endpoint.
     */
    displayName?: string | null;
    /**
     * A list of firewall rule URIs allowing probes from health check IP ranges.
     */
    healthCheckAllowingFirewallRules?: string[] | null;
    /**
     * A list of firewall rule URIs blocking probes from health check IP ranges.
     */
    healthCheckBlockingFirewallRules?: string[] | null;
    /**
     * State of the health check firewall configuration.
     */
    healthCheckFirewallState?: string | null;
    /**
     * URI of a Compute Engine instance or network endpoint.
     */
    uri?: string | null;
  }
  /**
   * For display only. Metadata associated with a load balancer.
   */
  export interface Schema$LoadBalancerInfo {
    /**
     * Information for the loadbalancer backends.
     */
    backends?: Schema$LoadBalancerBackend[];
    /**
     * Type of load balancer&#39;s backend configuration.
     */
    backendType?: string | null;
    /**
     * Backend configuration URI.
     */
    backendUri?: string | null;
    /**
     * URI of the health check for the load balancer.
     */
    healthCheckUri?: string | null;
    /**
     * Type of the load balancer.
     */
    loadBalancerType?: string | null;
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
   * For display only. Metadata associated with a Compute Engine network.
   */
  export interface Schema$NetworkInfo {
    /**
     * Name of a Compute Engine network.
     */
    displayName?: string | null;
    /**
     * The IP range that matches the test.
     */
    matchedIpRange?: string | null;
    /**
     * URI of a Compute Engine network.
     */
    uri?: string | null;
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
   * Metadata describing an Operation
   */
  export interface Schema$OperationMetadata {
    /**
     * API version.
     */
    apiVersion?: string | null;
    /**
     * Specifies if cancellation was requested for the operation.
     */
    cancelRequested?: boolean | null;
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
    /**
     * Target of the operation - for example projects/project-1/connectivityTests/test-1
     */
    target?: string | null;
    /**
     * Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  Optionally, a `binding` can specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both.  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [&quot;user:eve@example.com&quot;],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
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
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.
     */
    version?: number | null;
  }
  /**
   * The details of reachability state from the latest run.
   */
  export interface Schema$ReachabilityDetails {
    /**
     * The details of a failure or a cancellation of reachability analysis.
     */
    error?: Schema$Status;
    /**
     * The overall reachability result of the test.
     */
    result?: string | null;
    /**
     * Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.
     */
    traces?: Schema$Trace[];
    /**
     * The time the reachability state was verified.
     */
    verifyTime?: string | null;
  }
  /**
   * Request for the `RerunConnectivityTest` method.
   */
  export interface Schema$RerunConnectivityTestRequest {}
  /**
   * For display only. Metadata associated with a Compute Engine route.
   */
  export interface Schema$RouteInfo {
    /**
     * Destination IP range of the route.
     */
    destIpRange?: string | null;
    /**
     * Name of a Compute Engine route.
     */
    displayName?: string | null;
    /**
     * Instance tags of the route.
     */
    instanceTags?: string[] | null;
    /**
     * URI of a Compute Engine network.
     */
    networkUri?: string | null;
    /**
     * Next hop of the route.
     */
    nextHop?: string | null;
    /**
     * Type of next hop.
     */
    nextHopType?: string | null;
    /**
     * Priority of the route.
     */
    priority?: number | null;
    /**
     * Type of route.
     */
    routeType?: string | null;
    /**
     * URI of a Compute Engine route. Dynamic route from cloud router does not have a URI. Advertised route from Google Cloud VPC to on-premises network also does not have a URI.
     */
    uri?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
     */
    updateMask?: string | null;
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
   * A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
   */
  export interface Schema$Step {
    /**
     * Display info of the final state &quot;abort&quot; and reason.
     */
    abort?: Schema$AbortInfo;
    /**
     * This is a step that leads to the final state Drop.
     */
    causesDrop?: boolean | null;
    /**
     * Display info of the final state &quot;deliver&quot; and reason.
     */
    deliver?: Schema$DeliverInfo;
    /**
     * A description of the step. Usually this is a summary of the state.
     */
    description?: string | null;
    /**
     * Display info of the final state &quot;drop&quot; and reason.
     */
    drop?: Schema$DropInfo;
    /**
     * Display info of the source and destination under analysis. The endpiont info in an intermediate state may differ with the initial input, as it might be modified by state like NAT, or Connection Proxy.
     */
    endpoint?: Schema$EndpointInfo;
    /**
     * Display info of a Compute Engine firewall rule.
     */
    firewall?: Schema$FirewallInfo;
    /**
     * Display info of the final state &quot;forward&quot; and reason.
     */
    forward?: Schema$ForwardInfo;
    /**
     * Display info of a Compute Engine forwarding rule.
     */
    forwardingRule?: Schema$ForwardingRuleInfo;
    /**
     * Display info of a Compute Engine instance.
     */
    instance?: Schema$InstanceInfo;
    /**
     * Display info of the load balancers.
     */
    loadBalancer?: Schema$LoadBalancerInfo;
    /**
     * Display info of a GCP network.
     */
    network?: Schema$NetworkInfo;
    /**
     * Project ID that contains the configuration this step is validating.
     */
    projectId?: string | null;
    /**
     * Display info of a Compute Engine route.
     */
    route?: Schema$RouteInfo;
    /**
     * Each step is in one of the pre-defined states.
     */
    state?: string | null;
    /**
     * Display info of a Compute Engine VPN gateway.
     */
    vpnGateway?: Schema$VpnGatewayInfo;
    /**
     * Display info of a Compute Engine VPN tunnel.
     */
    vpnTunnel?: Schema$VpnTunnelInfo;
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
  /**
   * Trace represents one simulated packet forwarding path. &lt;ul&gt;   &lt;li&gt;Each trace contains multiple ordered steps.&lt;/li&gt;   &lt;li&gt;Each step is in a particular state and has an associated   configuration.&lt;/li&gt; &lt;li&gt;State is categorized as a final or non-final   state.&lt;/li&gt; &lt;li&gt;Each final state has a reason associated with it.&lt;/li&gt;   &lt;li&gt;Each trace must end with a final state (the last step).&lt;/li&gt; &lt;/ul&gt; &lt;pre&gt;&lt;code&gt;   |---------------------Trace----------------------|   Step1(State) Step2(State) ---  StepN(State(final)) &lt;/code&gt;&lt;/pre&gt;
   */
  export interface Schema$Trace {
    /**
     * Derived from the source and destination endpoints definition, and validated by the data plane model. If there are multiple traces starting from different source locations, then the endpoint_info may be different between traces.
     */
    endpointInfo?: Schema$EndpointInfo;
    /**
     * A trace of a test contains multiple steps from the initial state to the final state (delivered, dropped, forwarded, or aborted).  The steps are ordered by the processing sequence within the simulated network state machine. It is critical to preserve the order of the steps and avoid reordering or sorting them.
     */
    steps?: Schema$Step[];
  }
  /**
   * For display only. Metadata associated with a Compute Engine VPN gateway.
   */
  export interface Schema$VpnGatewayInfo {
    /**
     * Name of a VPN gateway.
     */
    displayName?: string | null;
    /**
     * IP address of the VPN gateway.
     */
    ipAddress?: string | null;
    /**
     * URI of a Compute Engine network where the VPN gateway is configured.
     */
    networkUri?: string | null;
    /**
     * Name of a GCP region where this VPN gateway is configured.
     */
    region?: string | null;
    /**
     * URI of a VPN gateway.
     */
    uri?: string | null;
    /**
     * A VPN tunnel that is associated with this VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed.
     */
    vpnTunnelUri?: string | null;
  }
  /**
   * For display only. Metadata associated with a Compute Engine VPN tunnel.
   */
  export interface Schema$VpnTunnelInfo {
    /**
     * Name of a VPN tunnel.
     */
    displayName?: string | null;
    /**
     * URI of a Compute Engine network where the VPN tunnel is configured.
     */
    networkUri?: string | null;
    /**
     * Name of a GCP region where this VPN tunnel is configured.
     */
    region?: string | null;
    /**
     * URI of a VPN gateway at remote end of the tunnel.
     */
    remoteGateway?: string | null;
    /**
     * Remote VPN gateway&#39;s IP address.
     */
    remoteGatewayIp?: string | null;
    /**
     * Type of the routing policy.
     */
    routingType?: string | null;
    /**
     * URI of the VPN gateway at local end of the tunnel.
     */
    sourceGateway?: string | null;
    /**
     * Local VPN gateway&#39;s IP address.
     */
    sourceGatewayIp?: string | null;
    /**
     * URI of a VPN tunnel.
     */
    uri?: string | null;
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
    global: Resource$Projects$Locations$Global;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.global = new Resource$Projects$Locations$Global(this.context);
    }

    /**
     * networkmanagement.projects.locations.get
     * @desc Gets information about a location.
     * @alias networkmanagement.projects.locations.get
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
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * networkmanagement.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias networkmanagement.projects.locations.list
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
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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

  export class Resource$Projects$Locations$Global {
    context: APIRequestContext;
    connectivityTests: Resource$Projects$Locations$Global$Connectivitytests;
    operations: Resource$Projects$Locations$Global$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connectivityTests = new Resource$Projects$Locations$Global$Connectivitytests(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Global$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Global$Connectivitytests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * networkmanagement.projects.locations.global.connectivityTests.create
     * @desc Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.  If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.  If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of <code>AMBIGUOUS</code>. For more information, see the Connectivity Test documentation.
     * @alias networkmanagement.projects.locations.global.connectivityTests.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource of the Connectivity Test to create:     `projects/{project_id}/locations/global`
     * @param {string=} params.testId Required. The logical name of the Connectivity Test in your project with the following restrictions:  * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project
     * @param {().ConnectivityTest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/connectivityTests').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * networkmanagement.projects.locations.global.connectivityTests.delete
     * @desc Deletes a specific `ConnectivityTest`.
     * @alias networkmanagement.projects.locations.global.connectivityTests.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Connectivity Test resource name using the form:     `projects/{project_id}/connectivityTests/{test_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * networkmanagement.projects.locations.global.connectivityTests.get
     * @desc Gets the details of a specific Connectivity Test.
     * @alias networkmanagement.projects.locations.global.connectivityTests.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. `ConnectivityTest` resource name using the form:     `projects/{project_id}/locations/global/connectivityTests/{test_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConnectivityTest>;
    get(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConnectivityTest>,
      callback: BodyResponseCallback<Schema$ConnectivityTest>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Get,
      callback: BodyResponseCallback<Schema$ConnectivityTest>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConnectivityTest>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Get
        | BodyResponseCallback<Schema$ConnectivityTest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ConnectivityTest>,
      callback?: BodyResponseCallback<Schema$ConnectivityTest>
    ): void | GaxiosPromise<Schema$ConnectivityTest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$ConnectivityTest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ConnectivityTest>(parameters);
      }
    }

    /**
     * networkmanagement.projects.locations.global.connectivityTests.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias networkmanagement.projects.locations.global.connectivityTests.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
     * networkmanagement.projects.locations.global.connectivityTests.list
     * @desc Lists all Connectivity Tests owned by a project.
     * @alias networkmanagement.projects.locations.global.connectivityTests.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form `<field> <operator> <value>` where operators: `<`, `>`, `<=`, `>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). <field> can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case.  Examples: - Filter by name:   name = "projects/proj-1/connectivityTests/test-1  - Filter by labels:   - Resources that have a key called `foo`     labels.foo:*   - Resources that have a key called `foo` whose value is `bar`     labels.foo = bar
     * @param {string=} params.orderBy Field to use to sort the list.
     * @param {integer=} params.pageSize Number of `ConnectivityTests` to return.
     * @param {string=} params.pageToken Page token from an earlier query, as returned in `next_page_token`.
     * @param {string} params.parent Required. The parent resource of the Connectivity Tests:     `projects/{project_id}/locations/global`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConnectivityTestsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectivityTestsResponse>,
      callback: BodyResponseCallback<Schema$ListConnectivityTestsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$List,
      callback: BodyResponseCallback<Schema$ListConnectivityTestsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConnectivityTestsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$List
        | BodyResponseCallback<Schema$ListConnectivityTestsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectivityTestsResponse>,
      callback?: BodyResponseCallback<Schema$ListConnectivityTestsResponse>
    ): void | GaxiosPromise<Schema$ListConnectivityTestsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Connectivitytests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/connectivityTests').replace(
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
        createAPIRequest<Schema$ListConnectivityTestsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListConnectivityTestsResponse>(
          parameters
        );
      }
    }

    /**
     * networkmanagement.projects.locations.global.connectivityTests.patch
     * @desc Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result.  If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of <code>UNKNOWN</code>.  If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
     * @alias networkmanagement.projects.locations.global.connectivityTests.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Unique name of the resource using the form:     `projects/{project_id}/tests/{test_id}`
     * @param {string=} params.updateMask Required. Mask of fields to update. At least one path must be supplied in this field.
     * @param {().ConnectivityTest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * networkmanagement.projects.locations.global.connectivityTests.rerun
     * @desc Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.  Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes.  If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
     * @alias networkmanagement.projects.locations.global.connectivityTests.rerun
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Connectivity Test resource name using the form:     `projects/{project_id}/connectivityTests/{test_id}`
     * @param {().RerunConnectivityTestRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rerun(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rerun(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rerun(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rerun(callback: BodyResponseCallback<Schema$Operation>): void;
    rerun(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:rerun').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * networkmanagement.projects.locations.global.connectivityTests.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
     * @alias networkmanagement.projects.locations.global.connectivityTests.setIamPolicy
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
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * networkmanagement.projects.locations.global.connectivityTests.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias networkmanagement.projects.locations.global.connectivityTests.testIamPermissions
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
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource of the Connectivity Test to create:     `projects/{project_id}/locations/global`
     */
    parent?: string;
    /**
     * Required. The logical name of the Connectivity Test in your project with the following restrictions:  * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project
     */
    testId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectivityTest;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Connectivity Test resource name using the form:     `projects/{project_id}/connectivityTests/{test_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. `ConnectivityTest` resource name using the form:     `projects/{project_id}/locations/global/connectivityTests/{test_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form `<field> <operator> <value>` where operators: `<`, `>`, `<=`, `>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). <field> can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case.  Examples: - Filter by name:   name = "projects/proj-1/connectivityTests/test-1  - Filter by labels:   - Resources that have a key called `foo`     labels.foo:*   - Resources that have a key called `foo` whose value is `bar`     labels.foo = bar
     */
    filter?: string;
    /**
     * Field to use to sort the list.
     */
    orderBy?: string;
    /**
     * Number of `ConnectivityTests` to return.
     */
    pageSize?: number;
    /**
     * Page token from an earlier query, as returned in `next_page_token`.
     */
    pageToken?: string;
    /**
     * Required. The parent resource of the Connectivity Tests:     `projects/{project_id}/locations/global`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Unique name of the resource using the form:     `projects/{project_id}/tests/{test_id}`
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectivityTest;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Connectivity Test resource name using the form:     `projects/{project_id}/connectivityTests/{test_id}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RerunConnectivityTestRequest;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions
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

  export class Resource$Projects$Locations$Global$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * networkmanagement.projects.locations.global.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias networkmanagement.projects.locations.global.operations.cancel
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
      params?: Params$Resource$Projects$Locations$Global$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Global$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Global$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:cancel').replace(
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * networkmanagement.projects.locations.global.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias networkmanagement.projects.locations.global.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Global$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Global$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * networkmanagement.projects.locations.global.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias networkmanagement.projects.locations.global.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Global$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Global$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * networkmanagement.projects.locations.global.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias networkmanagement.projects.locations.global.operations.list
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
      params?: Params$Resource$Projects$Locations$Global$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Global$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Global$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Global$Operations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Operations$List
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
}
