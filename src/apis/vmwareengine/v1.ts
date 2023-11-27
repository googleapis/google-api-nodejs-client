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

export namespace vmwareengine_v1 {
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
   * VMware Engine API
   *
   * The Google VMware Engine API lets you programmatically manage VMware environments.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const vmwareengine = google.vmwareengine('v1');
   * ```
   */
  export class Vmwareengine {
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
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
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
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
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
   * A cluster in a private cloud.
   */
  export interface Schema$Cluster {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * Output only. True if the cluster is a management cluster; false otherwise. There can only be one management cluster in a private cloud and it has to be the first one.
     */
    management?: boolean | null;
    /**
     * Output only. The resource name of this cluster. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
     */
    name?: string | null;
    /**
     * Required. The map of cluster node types in this cluster, where the key is canonical identifier of the node type (corresponds to the `NodeType`).
     */
    nodeTypeConfigs?: {[key: string]: Schema$NodeTypeConfig} | null;
    /**
     * Output only. State of the resource.
     */
    state?: string | null;
    /**
     * Optional. Configuration of a stretched cluster. Required for clusters that belong to a STRETCHED private cloud.
     */
    stretchedClusterConfig?: Schema$StretchedClusterConfig;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
  }
  /**
   * Credentials for a private cloud.
   */
  export interface Schema$Credentials {
    /**
     * Initial password.
     */
    password?: string | null;
    /**
     * Initial username.
     */
    username?: string | null;
  }
  /**
   * DnsBindPermission resource that contains the accounts having the consumer DNS bind permission on the corresponding intranet VPC of the consumer project.
   */
  export interface Schema$DnsBindPermission {
    /**
     * Required. Output only. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission`
     */
    name?: string | null;
    /**
     * Output only. Users/Service accounts which have access for binding on the intranet VPC project corresponding to the consumer project.
     */
    principals?: Schema$Principal[];
  }
  /**
   * DNS forwarding config. This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution.
   */
  export interface Schema$DnsForwarding {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * Required. List of domain mappings to configure
     */
    forwardingRules?: Schema$ForwardingRule[];
    /**
     * Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`
     */
    name?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
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
   * External access firewall rules for filtering incoming traffic destined to `ExternalAddress` resources.
   */
  export interface Schema$ExternalAccessRule {
    /**
     * The action that the external access rule performs.
     */
    action?: string | null;
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * User-provided description for this external access rule.
     */
    description?: string | null;
    /**
     * If destination ranges are specified, the external access rule applies only to the traffic that has a destination IP address in these ranges. The specified IP addresses must have reserved external IP addresses in the scope of the parent network policy. To match all external IP addresses in the scope of the parent network policy, specify `0.0.0.0/0`. To match a specific external IP address, specify it using the `IpRange.external_address` property.
     */
    destinationIpRanges?: Schema$IpRange[];
    /**
     * A list of destination ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: `["22"]`, `["80","443"]`, or `["12345-12349"]`. To match all destination ports, specify `["0-65535"]`.
     */
    destinationPorts?: string[] | null;
    /**
     * The IP protocol to which the external access rule applies. This value can be one of the following three protocol strings (not case-sensitive): `tcp`, `udp`, or `icmp`.
     */
    ipProtocol?: string | null;
    /**
     * Output only. The resource name of this external access rule. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule`
     */
    name?: string | null;
    /**
     * External access rule priority, which determines the external access rule to use when multiple rules apply. If multiple rules have the same priority, their ordering is non-deterministic. If specific ordering is required, assign unique priorities to enforce such ordering. The external access rule priority is an integer from 100 to 4096, both inclusive. Lower integers indicate higher precedence. For example, a rule with priority `100` has higher precedence than a rule with priority `101`.
     */
    priority?: number | null;
    /**
     * If source ranges are specified, the external access rule applies only to traffic that has a source IP address in these ranges. These ranges can either be expressed in the CIDR format or as an IP address. As only inbound rules are supported, `ExternalAddress` resources cannot be the source IP addresses of an external access rule. To match all source addresses, specify `0.0.0.0/0`.
     */
    sourceIpRanges?: Schema$IpRange[];
    /**
     * A list of source ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: `["22"]`, `["80","443"]`, or `["12345-12349"]`. To match all source ports, specify `["0-65535"]`.
     */
    sourcePorts?: string[] | null;
    /**
     * Output only. The state of the resource.
     */
    state?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
  }
  /**
   * Represents an allocated external IP address and its corresponding internal IP address in a private cloud.
   */
  export interface Schema$ExternalAddress {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * User-provided description for this resource.
     */
    description?: string | null;
    /**
     * Output only. The external IP address of a workload VM.
     */
    externalIp?: string | null;
    /**
     * The internal IP address of a workload VM.
     */
    internalIp?: string | null;
    /**
     * Output only. The resource name of this external IP address. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address`
     */
    name?: string | null;
    /**
     * Output only. The state of the resource.
     */
    state?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for VmwareEngine.FetchNetworkPolicyExternalAddresses
   */
  export interface Schema$FetchNetworkPolicyExternalAddressesResponse {
    /**
     * A list of external IP addresses assigned to VMware workload VMs within the scope of the given network policy.
     */
    externalAddresses?: Schema$ExternalAddress[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * A forwarding rule is a mapping of a `domain` to `name_servers`. This mapping allows VMware Engine to resolve domains for attached private clouds by forwarding DNS requests for a given domain to the specified nameservers.
   */
  export interface Schema$ForwardingRule {
    /**
     * Required. Domain used to resolve a `name_servers` list.
     */
    domain?: string | null;
    /**
     * Required. List of DNS servers to use for domain resolution
     */
    nameServers?: string[] | null;
  }
  /**
   * Request message for VmwareEngine.GrantDnsBindPermission
   */
  export interface Schema$GrantDnsBindPermissionRequest {
    /**
     * Required. The consumer provided user/service account which needs to be granted permission to bind with the intranet VPC corresponding to the consumer project.
     */
    principal?: Schema$Principal;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Details about a HCX Cloud Manager appliance.
   */
  export interface Schema$Hcx {
    /**
     * Fully qualified domain name of the appliance.
     */
    fqdn?: string | null;
    /**
     * Internal IP address of the appliance.
     */
    internalIp?: string | null;
    /**
     * Output only. The state of the appliance.
     */
    state?: string | null;
    /**
     * Version of the appliance.
     */
    version?: string | null;
  }
  /**
   * HCX activation key. A default key is created during private cloud provisioning, but this behavior is subject to change and you should always verify active keys. Use VmwareEngine.ListHcxActivationKeys to retrieve existing keys and VmwareEngine.CreateHcxActivationKey to create new ones.
   */
  export interface Schema$HcxActivationKey {
    /**
     * Output only. HCX activation key.
     */
    activationKey?: string | null;
    /**
     * Output only. Creation time of HCX activation key.
     */
    createTime?: string | null;
    /**
     * Output only. The resource name of this HcxActivationKey. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud/hcxActivationKeys/my-key`
     */
    name?: string | null;
    /**
     * Output only. State of HCX activation key.
     */
    state?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
  }
  /**
   * An IP range provided in any one of the supported formats.
   */
  export interface Schema$IpRange {
    /**
     * The name of an `ExternalAddress` resource. The external address must have been reserved in the scope of this external access rule's parent network policy. Provide the external address name in the form of `projects/{project\}/locations/{location\}/privateClouds/{private_cloud\}/externalAddresses/{external_address\}`. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address`.
     */
    externalAddress?: string | null;
    /**
     * A single IP address. For example: `10.0.0.5`.
     */
    ipAddress?: string | null;
    /**
     * An IP address range in the CIDR format. For example: `10.0.0.0/24`.
     */
    ipAddressRange?: string | null;
  }
  /**
   * Response message for VmwareEngine.ListClusters
   */
  export interface Schema$ListClustersResponse {
    /**
     * A list of private cloud clusters.
     */
    clusters?: Schema$Cluster[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListExternalAccessRules
   */
  export interface Schema$ListExternalAccessRulesResponse {
    /**
     * A list of external access firewall rules.
     */
    externalAccessRules?: Schema$ExternalAccessRule[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListExternalAddresses
   */
  export interface Schema$ListExternalAddressesResponse {
    /**
     * A list of external IP addresses.
     */
    externalAddresses?: Schema$ExternalAddress[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListHcxActivationKeys
   */
  export interface Schema$ListHcxActivationKeysResponse {
    /**
     * List of HCX activation keys.
     */
    hcxActivationKeys?: Schema$HcxActivationKey[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
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
   * Response message for VmwareEngine.ListLoggingServers
   */
  export interface Schema$ListLoggingServersResponse {
    /**
     * A list of Logging Servers.
     */
    loggingServers?: Schema$LoggingServer[];
    /**
     * A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListManagementDnsZoneBindings
   */
  export interface Schema$ListManagementDnsZoneBindingsResponse {
    /**
     * A list of management DNS zone bindings.
     */
    managementDnsZoneBindings?: Schema$ManagementDnsZoneBinding[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListNetworkPeerings
   */
  export interface Schema$ListNetworkPeeringsResponse {
    /**
     * A list of network peerings.
     */
    networkPeerings?: Schema$NetworkPeering[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListNetworkPolicies
   */
  export interface Schema$ListNetworkPoliciesResponse {
    /**
     * A list of network policies.
     */
    networkPolicies?: Schema$NetworkPolicy[];
    /**
     * A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListNodes
   */
  export interface Schema$ListNodesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The nodes.
     */
    nodes?: Schema$Node[];
  }
  /**
   * Response message for VmwareEngine.ListNodeTypes
   */
  export interface Schema$ListNodeTypesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of Node Types.
     */
    nodeTypes?: Schema$NodeType[];
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
     */
    unreachable?: string[] | null;
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
   * Response message for VmwareEngine.ListPeeringRoutes
   */
  export interface Schema$ListPeeringRoutesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of peering routes.
     */
    peeringRoutes?: Schema$PeeringRoute[];
  }
  /**
   * Response message for VmwareEngine.ListPrivateClouds
   */
  export interface Schema$ListPrivateCloudsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of private clouds.
     */
    privateClouds?: Schema$PrivateCloud[];
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListPrivateConnectionPeeringRoutes
   */
  export interface Schema$ListPrivateConnectionPeeringRoutesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of peering routes.
     */
    peeringRoutes?: Schema$PeeringRoute[];
  }
  /**
   * Response message for VmwareEngine.ListPrivateConnections
   */
  export interface Schema$ListPrivateConnectionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of private connections.
     */
    privateConnections?: Schema$PrivateConnection[];
    /**
     * Unreachable resources.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListSubnets
   */
  export interface Schema$ListSubnetsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of subnets.
     */
    subnets?: Schema$Subnet[];
    /**
     * Locations that could not be reached when making an aggregated query using wildcards.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for VmwareEngine.ListVmwareEngineNetworks
   */
  export interface Schema$ListVmwareEngineNetworksResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources.
     */
    unreachable?: string[] | null;
    /**
     * A list of VMware Engine networks.
     */
    vmwareEngineNetworks?: Schema$VmwareEngineNetwork[];
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * VmwareEngine specific metadata for the given google.cloud.location.Location. It is returned as a content of the `google.cloud.location.Location.metadata` field.
   */
  export interface Schema$LocationMetadata {
    /**
     * Output only. Capabilities of this location.
     */
    capabilities?: string[] | null;
  }
  /**
   * Logging server to receive vCenter or ESXi logs.
   */
  export interface Schema$LoggingServer {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * Required. Fully-qualified domain name (FQDN) or IP Address of the logging server.
     */
    hostname?: string | null;
    /**
     * Output only. The resource name of this logging server. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server`
     */
    name?: string | null;
    /**
     * Required. Port number at which the logging server receives logs.
     */
    port?: number | null;
    /**
     * Required. Protocol used by vCenter to send logs to a logging server.
     */
    protocol?: string | null;
    /**
     * Required. The type of component that produces logs that will be forwarded to this logging server.
     */
    sourceType?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
  }
  /**
   * Management cluster configuration.
   */
  export interface Schema$ManagementCluster {
    /**
     * Required. The user-provided identifier of the new `Cluster`. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    clusterId?: string | null;
    /**
     * Required. The map of cluster node types in this cluster, where the key is canonical identifier of the node type (corresponds to the `NodeType`).
     */
    nodeTypeConfigs?: {[key: string]: Schema$NodeTypeConfig} | null;
    /**
     * Optional. Configuration of a stretched cluster. Required for STRETCHED private clouds.
     */
    stretchedClusterConfig?: Schema$StretchedClusterConfig;
  }
  /**
   * Represents a binding between a network and the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.
   */
  export interface Schema$ManagementDnsZoneBinding {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * User-provided description for this resource.
     */
    description?: string | null;
    /**
     * Output only. The resource name of this binding. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
     */
    name?: string | null;
    /**
     * Output only. The state of the resource.
     */
    state?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
    /**
     * Network to bind is a VMware Engine network. Specify the name in the following form for VMware engine network: `projects/{project\}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id\}`. `{project\}` can either be a project number or a project ID.
     */
    vmwareEngineNetwork?: string | null;
    /**
     * Network to bind is a standard consumer VPC. Specify the name in the following form for consumer VPC network: `projects/{project\}/global/networks/{network_id\}`. `{project\}` can either be a project number or a project ID.
     */
    vpcNetwork?: string | null;
  }
  /**
   * Network configuration in the consumer project with which the peering has to be done.
   */
  export interface Schema$NetworkConfig {
    /**
     * Output only. DNS Server IP of the Private Cloud. All DNS queries can be forwarded to this address for name resolution of Private Cloud's management entities like vCenter, NSX-T Manager and ESXi hosts.
     */
    dnsServerIp?: string | null;
    /**
     * Required. Management CIDR used by VMware management appliances.
     */
    managementCidr?: string | null;
    /**
     * Output only. The IP address layout version of the management IP address range. Possible versions include: * `managementIpAddressLayoutVersion=1`: Indicates the legacy IP address layout used by some existing private clouds. This is no longer supported for new private clouds as it does not support all features. * `managementIpAddressLayoutVersion=2`: Indicates the latest IP address layout used by all newly created private clouds. This version supports all current features.
     */
    managementIpAddressLayoutVersion?: number | null;
    /**
     * Optional. The relative resource name of the VMware Engine network attached to the private cloud. Specify the name in the following form: `projects/{project\}/locations/{location\}/vmwareEngineNetworks/{vmware_engine_network_id\}` where `{project\}` can either be a project number or a project ID.
     */
    vmwareEngineNetwork?: string | null;
    /**
     * Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number\}/locations/{location\}/vmwareEngineNetworks/{vmware_engine_network_id\}`
     */
    vmwareEngineNetworkCanonical?: string | null;
  }
  /**
   * Details of a network peering.
   */
  export interface Schema$NetworkPeering {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * Optional. User-provided description for this network peering.
     */
    description?: string | null;
    /**
     * Optional. True if full mesh connectivity is created and managed automatically between peered networks; false otherwise. Currently this field is always true because Google Compute Engine automatically creates and manages subnetwork routes between two VPC networks when peering state is 'ACTIVE'.
     */
    exchangeSubnetRoutes?: boolean | null;
    /**
     * Optional. True if custom routes are exported to the peered network; false otherwise. The default value is true.
     */
    exportCustomRoutes?: boolean | null;
    /**
     * Optional. True if all subnet routes with a public IP address range are exported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.
     */
    exportCustomRoutesWithPublicIp?: boolean | null;
    /**
     * Optional. True if custom routes are imported from the peered network; false otherwise. The default value is true.
     */
    importCustomRoutes?: boolean | null;
    /**
     * Optional. True if all subnet routes with public IP address range are imported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported to peers and are not controlled by this field.
     */
    importCustomRoutesWithPublicIp?: boolean | null;
    /**
     * Output only. The resource name of the network peering. Resource names are scheme-less URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`
     */
    name?: string | null;
    /**
     * Optional. Maximum transmission unit (MTU) in bytes. The default value is `1500`. If a value of `0` is provided for this field, VMware Engine uses the default value instead.
     */
    peerMtu?: number | null;
    /**
     * Required. The relative resource name of the network to peer with a standard VMware Engine network. The provided network can be a consumer VPC network or another standard VMware Engine network. If the `peer_network_type` is VMWARE_ENGINE_NETWORK, specify the name in the form: `projects/{project\}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id\}`. Otherwise specify the name in the form: `projects/{project\}/global/networks/{network_id\}`, where `{project\}` can either be a project number or a project ID.
     */
    peerNetwork?: string | null;
    /**
     * Required. The type of the network to peer with the VMware Engine network.
     */
    peerNetworkType?: string | null;
    /**
     * Output only. State of the network peering. This field has a value of 'ACTIVE' when there's a matching configuration in the peer network. New values may be added to this enum when appropriate.
     */
    state?: string | null;
    /**
     * Output only. Output Only. Details about the current state of the network peering.
     */
    stateDetails?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
    /**
     * Required. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project\}/locations/{location\}/vmwareEngineNetworks/{vmware_engine_network_id\}` where `{project\}` can either be a project number or a project ID.
     */
    vmwareEngineNetwork?: string | null;
  }
  /**
   * Represents a network policy resource. Network policies are regional resources. You can use a network policy to enable or disable internet access and external IP access. Network policies are associated with a VMware Engine network, which might span across regions. For a given region, a network policy applies to all private clouds in the VMware Engine network associated with the policy.
   */
  export interface Schema$NetworkPolicy {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * Optional. User-provided description for this network policy.
     */
    description?: string | null;
    /**
     * Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.
     */
    edgeServicesCidr?: string | null;
    /**
     * Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.
     */
    externalIp?: Schema$NetworkService;
    /**
     * Network service that allows VMware workloads to access the internet.
     */
    internetAccess?: Schema$NetworkService;
    /**
     * Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`
     */
    name?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
    /**
     * Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project\}/locations/{location\}/vmwareEngineNetworks/{vmware_engine_network_id\}` where `{project\}` can either be a project number or a project ID.
     */
    vmwareEngineNetwork?: string | null;
    /**
     * Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number\}/locations/{location\}/vmwareEngineNetworks/{vmware_engine_network_id\}`
     */
    vmwareEngineNetworkCanonical?: string | null;
  }
  /**
   * Represents a network service that is managed by a `NetworkPolicy` resource. A network service provides a way to control an aspect of external access to VMware workloads. For example, whether the VMware workloads in the private clouds governed by a network policy can access or be accessed from the internet.
   */
  export interface Schema$NetworkService {
    /**
     * True if the service is enabled; false otherwise.
     */
    enabled?: boolean | null;
    /**
     * Output only. State of the service. New values may be added to this enum when appropriate.
     */
    state?: string | null;
  }
  /**
   * Node in a cluster.
   */
  export interface Schema$Node {
    /**
     * Output only. Customized number of cores
     */
    customCoreCount?: string | null;
    /**
     * Output only. Fully qualified domain name of the node.
     */
    fqdn?: string | null;
    /**
     * Output only. Internal IP address of the node.
     */
    internalIp?: string | null;
    /**
     * Output only. The resource name of this node. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster/nodes/my-node
     */
    name?: string | null;
    /**
     * Output only. The canonical identifier of the node type (corresponds to the `NodeType`). For example: standard-72.
     */
    nodeTypeId?: string | null;
    /**
     * Output only. The state of the appliance.
     */
    state?: string | null;
    /**
     * Output only. The version number of the VMware ESXi management component in this cluster.
     */
    version?: string | null;
  }
  /**
   * Describes node type.
   */
  export interface Schema$NodeType {
    /**
     * Output only. List of possible values of custom core count.
     */
    availableCustomCoreCounts?: number[] | null;
    /**
     * Output only. Capabilities of this node type.
     */
    capabilities?: string[] | null;
    /**
     * Output only. The amount of storage available, defined in GB.
     */
    diskSizeGb?: number | null;
    /**
     * Output only. The friendly name for this node type. For example: ve1-standard-72
     */
    displayName?: string | null;
    /**
     * Output only. The amount of physical memory available, defined in GB.
     */
    memoryGb?: number | null;
    /**
     * Output only. The resource name of this node type. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-proj/locations/us-central1-a/nodeTypes/standard-72`
     */
    name?: string | null;
    /**
     * Output only. The canonical identifier of the node type (corresponds to the `NodeType`). For example: standard-72.
     */
    nodeTypeId?: string | null;
    /**
     * Output only. The total number of CPU cores in a single node.
     */
    totalCoreCount?: number | null;
    /**
     * Output only. The total number of virtual CPUs in a single node.
     */
    virtualCpuCount?: number | null;
  }
  /**
   * Information about the type and number of nodes associated with the cluster.
   */
  export interface Schema$NodeTypeConfig {
    /**
     * Optional. Customized number of cores available to each node of the type. This number must always be one of `nodeType.availableCustomCoreCounts`. If zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.
     */
    customCoreCount?: number | null;
    /**
     * Required. The number of nodes of this type in the cluster
     */
    nodeCount?: number | null;
  }
  /**
   * Details about a NSX Manager appliance.
   */
  export interface Schema$Nsx {
    /**
     * Fully qualified domain name of the appliance.
     */
    fqdn?: string | null;
    /**
     * Internal IP address of the appliance.
     */
    internalIp?: string | null;
    /**
     * Output only. The state of the appliance.
     */
    state?: string | null;
    /**
     * Version of the appliance.
     */
    version?: string | null;
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
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. True if the user has requested cancellation of the operation; false otherwise. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Exchanged network peering route.
   */
  export interface Schema$PeeringRoute {
    /**
     * Output only. Destination range of the peering route in CIDR notation.
     */
    destRange?: string | null;
    /**
     * Output only. Direction of the routes exchanged with the peer network, from the VMware Engine network perspective: * Routes of direction `INCOMING` are imported from the peer network. * Routes of direction `OUTGOING` are exported from the intranet VPC network of the VMware Engine network.
     */
    direction?: string | null;
    /**
     * Output only. True if the peering route has been imported from a peered VPC network; false otherwise. The import happens if the field `NetworkPeering.importCustomRoutes` is true for this network, `NetworkPeering.exportCustomRoutes` is true for the peer VPC network, and the import does not result in a route conflict.
     */
    imported?: boolean | null;
    /**
     * Output only. Region containing the next hop of the peering route. This field only applies to dynamic routes in the peer VPC network.
     */
    nextHopRegion?: string | null;
    /**
     * Output only. The priority of the peering route.
     */
    priority?: string | null;
    /**
     * Output only. Type of the route in the peer VPC network.
     */
    type?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
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
   * Users/Service accounts which have access for DNS binding on the intranet VPC corresponding to the consumer project.
   */
  export interface Schema$Principal {
    /**
     * The service account which needs to be granted the permission.
     */
    serviceAccount?: string | null;
    /**
     * The user who needs to be granted permission.
     */
    user?: string | null;
  }
  /**
   * Represents a private cloud resource. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional.
   */
  export interface Schema$PrivateCloud {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * Output only. Time when the resource was scheduled for deletion.
     */
    deleteTime?: string | null;
    /**
     * User-provided description for this private cloud.
     */
    description?: string | null;
    /**
     * Output only. Time when the resource will be irreversibly deleted.
     */
    expireTime?: string | null;
    /**
     * Output only. HCX appliance.
     */
    hcx?: Schema$Hcx;
    /**
     * Required. Input only. The management cluster for this private cloud. This field is required during creation of the private cloud to provide details for the default cluster. The following fields can't be changed after private cloud creation: `ManagementCluster.clusterId`, `ManagementCluster.nodeTypeId`.
     */
    managementCluster?: Schema$ManagementCluster;
    /**
     * Output only. The resource name of this private cloud. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    name?: string | null;
    /**
     * Required. Network configuration of the private cloud.
     */
    networkConfig?: Schema$NetworkConfig;
    /**
     * Output only. NSX appliance.
     */
    nsx?: Schema$Nsx;
    /**
     * Output only. State of the resource. New values may be added to this enum when appropriate.
     */
    state?: string | null;
    /**
     * Optional. Type of the private cloud. Defaults to STANDARD.
     */
    type?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
    /**
     * Output only. Vcenter appliance.
     */
    vcenter?: Schema$Vcenter;
  }
  /**
   * Private connection resource that provides connectivity for VMware Engine private clouds.
   */
  export interface Schema$PrivateConnection {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * Optional. User-provided description for this private connection.
     */
    description?: string | null;
    /**
     * Output only. The resource name of the private connection. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection`
     */
    name?: string | null;
    /**
     * Output only. VPC network peering id between given network VPC and VMwareEngineNetwork.
     */
    peeringId?: string | null;
    /**
     * Output only. Peering state between service network and VMware Engine network.
     */
    peeringState?: string | null;
    /**
     * Optional. Routing Mode. Default value is set to GLOBAL. For type = PRIVATE_SERVICE_ACCESS, this field can be set to GLOBAL or REGIONAL, for other types only GLOBAL is supported.
     */
    routingMode?: string | null;
    /**
     * Required. Service network to create private connection. Specify the name in the following form: `projects/{project\}/global/networks/{network_id\}` For type = PRIVATE_SERVICE_ACCESS, this field represents servicenetworking VPC, e.g. projects/project-tp/global/networks/servicenetworking. For type = NETAPP_CLOUD_VOLUME, this field represents NetApp service VPC, e.g. projects/project-tp/global/networks/netapp-tenant-vpc. For type = DELL_POWERSCALE, this field represent Dell service VPC, e.g. projects/project-tp/global/networks/dell-tenant-vpc. For type= THIRD_PARTY_SERVICE, this field could represent a consumer VPC or any other producer VPC to which the VMware Engine Network needs to be connected, e.g. projects/project/global/networks/vpc.
     */
    serviceNetwork?: string | null;
    /**
     * Output only. State of the private connection.
     */
    state?: string | null;
    /**
     * Required. Private connection type.
     */
    type?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
    /**
     * Required. The relative resource name of Legacy VMware Engine network. Specify the name in the following form: `projects/{project\}/locations/{location\}/vmwareEngineNetworks/{vmware_engine_network_id\}` where `{project\}`, `{location\}` will be same as specified in private connection resource name and `{vmware_engine_network_id\}` will be in the form of `{location\}`-default e.g. projects/project/locations/us-central1/vmwareEngineNetworks/us-central1-default.
     */
    vmwareEngineNetwork?: string | null;
    /**
     * Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number\}/locations/{location\}/vmwareEngineNetworks/{vmware_engine_network_id\}`
     */
    vmwareEngineNetworkCanonical?: string | null;
  }
  /**
   * Request message for VmwareEngine.RepairManagementDnsZoneBindings
   */
  export interface Schema$RepairManagementDnsZoneBindingRequest {
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Request message for VmwareEngine.ResetNsxCredentials
   */
  export interface Schema$ResetNsxCredentialsRequest {
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Request message for VmwareEngine.ResetVcenterCredentials
   */
  export interface Schema$ResetVcenterCredentialsRequest {
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
    /**
     * Optional. The username of the user to be to reset the credentials. The default value of this field is CloudOwner@gve.local. The provided value should be one of the following: solution-user-01@gve.local, solution-user-02@gve.local, solution-user-03@gve.local, solution-user-04@gve.local, solution-user-05@gve.local, zertoadmin@gve.local.
     */
    username?: string | null;
  }
  /**
   * Request message for VmwareEngine.RevokeDnsBindPermission
   */
  export interface Schema$RevokeDnsBindPermissionRequest {
    /**
     * Required. The consumer provided user/service account which needs to be granted permission to bind with the intranet VPC corresponding to the consumer project.
     */
    principal?: Schema$Principal;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
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
   * Configuration of a stretched cluster.
   */
  export interface Schema$StretchedClusterConfig {
    /**
     * Required. Zone that will remain operational when connection between the two zones is lost. Specify the resource name of a zone that belongs to the region of the private cloud. For example: `projects/{project\}/locations/europe-west3-a` where `{project\}` can either be a project number or a project ID.
     */
    preferredLocation?: string | null;
    /**
     * Required. Additional zone for a higher level of availability and load balancing. Specify the resource name of a zone that belongs to the region of the private cloud. For example: `projects/{project\}/locations/europe-west3-b` where `{project\}` can either be a project number or a project ID.
     */
    secondaryLocation?: string | null;
  }
  /**
   * Subnet in a private cloud. Either `management` subnets (such as vMotion) that are read-only, or `userDefined`, which can also be updated.
   */
  export interface Schema$Subnet {
    /**
     * The IP address of the gateway of this subnet. Must fall within the IP prefix defined above.
     */
    gatewayIp?: string | null;
    /**
     * The IP address range of the subnet in CIDR format '10.0.0.0/24'.
     */
    ipCidrRange?: string | null;
    /**
     * Output only. The resource name of this subnet. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/subnets/my-subnet`
     */
    name?: string | null;
    /**
     * Output only. The state of the resource.
     */
    state?: string | null;
    /**
     * Output only. The type of the subnet. For example "management" or "userDefined".
     */
    type?: string | null;
    /**
     * Output only. VLAN ID of the VLAN on which the subnet is configured
     */
    vlanId?: number | null;
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
   * Request message for VmwareEngine.UndeletePrivateCloud
   */
  export interface Schema$UndeletePrivateCloudRequest {
    /**
     * Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Details about a vCenter Server management appliance.
   */
  export interface Schema$Vcenter {
    /**
     * Fully qualified domain name of the appliance.
     */
    fqdn?: string | null;
    /**
     * Internal IP address of the appliance.
     */
    internalIp?: string | null;
    /**
     * Output only. The state of the appliance.
     */
    state?: string | null;
    /**
     * Version of the appliance.
     */
    version?: string | null;
  }
  /**
   * VMware Engine network resource that provides connectivity for VMware Engine private clouds.
   */
  export interface Schema$VmwareEngineNetwork {
    /**
     * Output only. Creation time of this resource.
     */
    createTime?: string | null;
    /**
     * User-provided description for this VMware Engine network.
     */
    description?: string | null;
    /**
     * Checksum that may be sent on update and delete requests to ensure that the user-provided value is up to date before the server processes a request. The server computes checksums based on the value of other fields in the request.
     */
    etag?: string | null;
    /**
     * Output only. The resource name of the VMware Engine network. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
     */
    name?: string | null;
    /**
     * Output only. State of the VMware Engine network.
     */
    state?: string | null;
    /**
     * Required. VMware Engine network type.
     */
    type?: string | null;
    /**
     * Output only. System-generated unique identifier for the resource.
     */
    uid?: string | null;
    /**
     * Output only. Last update time of this resource.
     */
    updateTime?: string | null;
    /**
     * Output only. VMware Engine service VPC networks that provide connectivity from a private cloud to customer projects, the internet, and other Google Cloud services.
     */
    vpcNetworks?: Schema$VpcNetwork[];
  }
  /**
   * Represents a VMware Engine VPC network that is managed by a VMware Engine network resource.
   */
  export interface Schema$VpcNetwork {
    /**
     * Output only. The relative resource name of the service VPC network this VMware Engine network is attached to. For example: `projects/123123/global/networks/my-network`
     */
    network?: string | null;
    /**
     * Output only. Type of VPC network (INTRANET, INTERNET, or GOOGLE_CLOUD)
     */
    type?: string | null;
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
    networkPolicies: Resource$Projects$Locations$Networkpolicies;
    nodeTypes: Resource$Projects$Locations$Nodetypes;
    operations: Resource$Projects$Locations$Operations;
    privateClouds: Resource$Projects$Locations$Privateclouds;
    privateConnections: Resource$Projects$Locations$Privateconnections;
    vmwareEngineNetworks: Resource$Projects$Locations$Vmwareenginenetworks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.global = new Resource$Projects$Locations$Global(this.context);
      this.networkPolicies = new Resource$Projects$Locations$Networkpolicies(
        this.context
      );
      this.nodeTypes = new Resource$Projects$Locations$Nodetypes(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.privateClouds = new Resource$Projects$Locations$Privateclouds(
        this.context
      );
      this.privateConnections =
        new Resource$Projects$Locations$Privateconnections(this.context);
      this.vmwareEngineNetworks =
        new Resource$Projects$Locations$Vmwareenginenetworks(this.context);
    }

    /**
     * Gets information about a location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Global {
    context: APIRequestContext;
    dnsBindPermission: Resource$Projects$Locations$Global$Dnsbindpermission;
    networkPeerings: Resource$Projects$Locations$Global$Networkpeerings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dnsBindPermission =
        new Resource$Projects$Locations$Global$Dnsbindpermission(this.context);
      this.networkPeerings =
        new Resource$Projects$Locations$Global$Networkpeerings(this.context);
    }

    /**
     * Gets all the principals having bind permission on the intranet VPC associated with the consumer project granted by the Grant API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getDnsBindPermission(
      params: Params$Resource$Projects$Locations$Global$Getdnsbindpermission,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDnsBindPermission(
      params?: Params$Resource$Projects$Locations$Global$Getdnsbindpermission,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DnsBindPermission>;
    getDnsBindPermission(
      params: Params$Resource$Projects$Locations$Global$Getdnsbindpermission,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDnsBindPermission(
      params: Params$Resource$Projects$Locations$Global$Getdnsbindpermission,
      options: MethodOptions | BodyResponseCallback<Schema$DnsBindPermission>,
      callback: BodyResponseCallback<Schema$DnsBindPermission>
    ): void;
    getDnsBindPermission(
      params: Params$Resource$Projects$Locations$Global$Getdnsbindpermission,
      callback: BodyResponseCallback<Schema$DnsBindPermission>
    ): void;
    getDnsBindPermission(
      callback: BodyResponseCallback<Schema$DnsBindPermission>
    ): void;
    getDnsBindPermission(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Getdnsbindpermission
        | BodyResponseCallback<Schema$DnsBindPermission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DnsBindPermission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DnsBindPermission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DnsBindPermission>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Getdnsbindpermission;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Getdnsbindpermission;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$DnsBindPermission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DnsBindPermission>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Global$Getdnsbindpermission
    extends StandardParameters {
    /**
     * Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission`
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Global$Dnsbindpermission {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Grants the bind permission to the customer provided principal(user / service account) to bind their DNS zone with the intranet VPC associated with the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    grant(
      params: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Grant,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    grant(
      params?: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Grant,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    grant(
      params: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Grant,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    grant(
      params: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Grant,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    grant(
      params: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Grant,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    grant(callback: BodyResponseCallback<Schema$Operation>): void;
    grant(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Dnsbindpermission$Grant
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
        {}) as Params$Resource$Projects$Locations$Global$Dnsbindpermission$Grant;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Dnsbindpermission$Grant;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:grant').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Revokes the bind permission from the customer provided principal(user / service account) on the intranet VPC associated with the consumer project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    revoke(
      params: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Revoke,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    revoke(
      params?: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Revoke,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    revoke(
      params: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Revoke,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Revoke,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Global$Dnsbindpermission$Revoke,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    revoke(callback: BodyResponseCallback<Schema$Operation>): void;
    revoke(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Dnsbindpermission$Revoke
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
        {}) as Params$Resource$Projects$Locations$Global$Dnsbindpermission$Revoke;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Dnsbindpermission$Revoke;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:revoke').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Global$Dnsbindpermission$Grant
    extends StandardParameters {
    /**
     * Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GrantDnsBindPermissionRequest;
  }
  export interface Params$Resource$Projects$Locations$Global$Dnsbindpermission$Revoke
    extends StandardParameters {
    /**
     * Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RevokeDnsBindPermissionRequest;
  }

  export class Resource$Projects$Locations$Global$Networkpeerings {
    context: APIRequestContext;
    peeringRoutes: Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.peeringRoutes =
        new Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes(
          this.context
        );
    }

    /**
     * Creates a new network peering between the peer network and VMware Engine network provided in a `NetworkPeering` resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Global$Networkpeerings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Networkpeerings$Create
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
        {}) as Params$Resource$Projects$Locations$Global$Networkpeerings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Networkpeerings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/networkPeerings').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a `NetworkPeering` resource. When a network peering is deleted for a VMware Engine network, the peer network becomes inaccessible to that VMware Engine network.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Global$Networkpeerings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Networkpeerings$Delete
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
        {}) as Params$Resource$Projects$Locations$Global$Networkpeerings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Networkpeerings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Retrieves a `NetworkPeering` resource by its resource name. The resource contains details of the network peering, such as peered networks, import and export custom route configurations, and peering state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Global$Networkpeerings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NetworkPeering>;
    get(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NetworkPeering>,
      callback: BodyResponseCallback<Schema$NetworkPeering>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Get,
      callback: BodyResponseCallback<Schema$NetworkPeering>
    ): void;
    get(callback: BodyResponseCallback<Schema$NetworkPeering>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Networkpeerings$Get
        | BodyResponseCallback<Schema$NetworkPeering>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NetworkPeering>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NetworkPeering>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NetworkPeering> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Networkpeerings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Networkpeerings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$NetworkPeering>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NetworkPeering>(parameters);
      }
    }

    /**
     * Lists `NetworkPeering` resources in a given project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Global$Networkpeerings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNetworkPeeringsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNetworkPeeringsResponse>,
      callback: BodyResponseCallback<Schema$ListNetworkPeeringsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$List,
      callback: BodyResponseCallback<Schema$ListNetworkPeeringsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNetworkPeeringsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Networkpeerings$List
        | BodyResponseCallback<Schema$ListNetworkPeeringsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNetworkPeeringsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNetworkPeeringsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNetworkPeeringsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Networkpeerings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Networkpeerings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/networkPeerings').replace(
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
        createAPIRequest<Schema$ListNetworkPeeringsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNetworkPeeringsResponse>(parameters);
      }
    }

    /**
     * Modifies a `NetworkPeering` resource. Only the `description` field can be updated. Only fields specified in `updateMask` are applied.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Global$Networkpeerings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Networkpeerings$Patch
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
        {}) as Params$Resource$Projects$Locations$Global$Networkpeerings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Networkpeerings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Global$Networkpeerings$Create
    extends StandardParameters {
    /**
     * Required. The user-provided identifier of the new `NetworkPeering`. This identifier must be unique among `NetworkPeering` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    networkPeeringId?: string;
    /**
     * Required. The resource name of the location to create the new network peering in. This value is always `global`, because `NetworkPeering` is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NetworkPeering;
  }
  export interface Params$Resource$Projects$Locations$Global$Networkpeerings$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the network peering to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Networkpeerings$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the network peering to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Networkpeerings$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of network peerings, you can exclude the ones named `example-peering` by specifying `name != "example-peering"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-peering") (createTime \> "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-peering-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "example-peering-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of network peerings to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListNetworkPeerings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworkPeerings` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location (global) to query for network peerings. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Networkpeerings$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the network peering. Resource names are scheme-less URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `NetworkPeering` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NetworkPeering;
  }

  export class Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the network peering routes exchanged over a peering connection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPeeringRoutesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPeeringRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListPeeringRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes$List,
      callback: BodyResponseCallback<Schema$ListPeeringRoutesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPeeringRoutesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes$List
        | BodyResponseCallback<Schema$ListPeeringRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPeeringRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPeeringRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPeeringRoutesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/peeringRoutes').replace(
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
        createAPIRequest<Schema$ListPeeringRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPeeringRoutesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Global$Networkpeerings$Peeringroutes$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. Currently, only filtering on the `direction` field is supported. To return routes imported from the peer network, provide "direction=INCOMING". To return routes exported from the VMware Engine network, provide "direction=OUTGOING". Other filter expressions return an error.
     */
    filter?: string;
    /**
     * The maximum number of peering routes to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPeeringRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPeeringRoutes` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the network peering to retrieve peering routes from. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Networkpolicies {
    context: APIRequestContext;
    externalAccessRules: Resource$Projects$Locations$Networkpolicies$Externalaccessrules;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.externalAccessRules =
        new Resource$Projects$Locations$Networkpolicies$Externalaccessrules(
          this.context
        );
    }

    /**
     * Creates a new network policy in a given VMware Engine network of a project and location (region). A new network policy cannot be created if another network policy already exists in the same scope.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Networkpolicies$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Networkpolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Networkpolicies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Networkpolicies$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Create
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
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkpolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/networkPolicies').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a `NetworkPolicy` resource. A network policy cannot be deleted when `NetworkService.state` is set to `RECONCILING` for either its external IP or internet access service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Networkpolicies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Networkpolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Networkpolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Networkpolicies$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Delete
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
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkpolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists external IP addresses assigned to VMware workload VMs within the scope of the given network policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchExternalAddresses(
      params: Params$Resource$Projects$Locations$Networkpolicies$Fetchexternaladdresses,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchExternalAddresses(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Fetchexternaladdresses,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchNetworkPolicyExternalAddressesResponse>;
    fetchExternalAddresses(
      params: Params$Resource$Projects$Locations$Networkpolicies$Fetchexternaladdresses,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchExternalAddresses(
      params: Params$Resource$Projects$Locations$Networkpolicies$Fetchexternaladdresses,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchNetworkPolicyExternalAddressesResponse>,
      callback: BodyResponseCallback<Schema$FetchNetworkPolicyExternalAddressesResponse>
    ): void;
    fetchExternalAddresses(
      params: Params$Resource$Projects$Locations$Networkpolicies$Fetchexternaladdresses,
      callback: BodyResponseCallback<Schema$FetchNetworkPolicyExternalAddressesResponse>
    ): void;
    fetchExternalAddresses(
      callback: BodyResponseCallback<Schema$FetchNetworkPolicyExternalAddressesResponse>
    ): void;
    fetchExternalAddresses(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Fetchexternaladdresses
        | BodyResponseCallback<Schema$FetchNetworkPolicyExternalAddressesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchNetworkPolicyExternalAddressesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchNetworkPolicyExternalAddressesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchNetworkPolicyExternalAddressesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Fetchexternaladdresses;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkpolicies$Fetchexternaladdresses;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+networkPolicy}:fetchExternalAddresses'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['networkPolicy'],
        pathParams: ['networkPolicy'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchNetworkPolicyExternalAddressesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchNetworkPolicyExternalAddressesResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves a `NetworkPolicy` resource by its resource name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Networkpolicies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NetworkPolicy>;
    get(
      params: Params$Resource$Projects$Locations$Networkpolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkpolicies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NetworkPolicy>,
      callback: BodyResponseCallback<Schema$NetworkPolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkpolicies$Get,
      callback: BodyResponseCallback<Schema$NetworkPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$NetworkPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Get
        | BodyResponseCallback<Schema$NetworkPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NetworkPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NetworkPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NetworkPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Networkpolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$NetworkPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NetworkPolicy>(parameters);
      }
    }

    /**
     * Lists `NetworkPolicy` resources in a specified project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Networkpolicies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Networkpolicies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNetworkPoliciesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Networkpolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkpolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNetworkPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListNetworkPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkpolicies$List,
      callback: BodyResponseCallback<Schema$ListNetworkPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNetworkPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$List
        | BodyResponseCallback<Schema$ListNetworkPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNetworkPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNetworkPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNetworkPoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkpolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Networkpolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/networkPolicies').replace(
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
        createAPIRequest<Schema$ListNetworkPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNetworkPoliciesResponse>(parameters);
      }
    }

    /**
     * Modifies a `NetworkPolicy` resource. Only the following fields can be updated: `internet_access`, `external_ip`, `edge_services_cidr`. Only fields specified in `updateMask` are applied. When updating a network policy, the external IP network service can only be disabled if there are no external IP addresses present in the scope of the policy. Also, a `NetworkService` cannot be updated when `NetworkService.state` is set to `RECONCILING`. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Networkpolicies$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Networkpolicies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Networkpolicies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Networkpolicies$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Patch
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
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Networkpolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Networkpolicies$Create
    extends StandardParameters {
    /**
     * Required. The user-provided identifier of the network policy to be created. This identifier must be unique within parent `projects/{my-project\}/locations/{us-central1\}/networkPolicies` and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    networkPolicyId?: string;
    /**
     * Required. The resource name of the location (region) to create the new network policy in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NetworkPolicy;
  }
  export interface Params$Resource$Projects$Locations$Networkpolicies$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the network policy to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkpolicies$Fetchexternaladdresses
    extends StandardParameters {
    /**
     * Required. The resource name of the network policy to query for assigned external IP addresses. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`
     */
    networkPolicy?: string;
    /**
     * The maximum number of external IP addresses to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `FetchNetworkPolicyExternalAddresses` call. Provide this to retrieve the subsequent page. When paginating, all parameters provided to `FetchNetworkPolicyExternalAddresses`, except for `page_size` and `page_token`, must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkpolicies$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the network policy to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkpolicies$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of network policies, you can exclude the ones named `example-policy` by specifying `name != "example-policy"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-policy") (createTime \> "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-policy-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "example-policy-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of network policies to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListNetworkPolicies` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworkPolicies` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location (region) to query for network policies. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkpolicies$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `NetworkPolicy` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NetworkPolicy;
  }

  export class Resource$Projects$Locations$Networkpolicies$Externalaccessrules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new external access rule in a given network policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Create
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
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/externalAccessRules').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single external access rule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Delete
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
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single external access rule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExternalAccessRule>;
    get(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ExternalAccessRule>,
      callback: BodyResponseCallback<Schema$ExternalAccessRule>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Get,
      callback: BodyResponseCallback<Schema$ExternalAccessRule>
    ): void;
    get(callback: BodyResponseCallback<Schema$ExternalAccessRule>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Get
        | BodyResponseCallback<Schema$ExternalAccessRule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExternalAccessRule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExternalAccessRule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ExternalAccessRule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$ExternalAccessRule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExternalAccessRule>(parameters);
      }
    }

    /**
     * Lists `ExternalAccessRule` resources in the specified network policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExternalAccessRulesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExternalAccessRulesResponse>,
      callback: BodyResponseCallback<Schema$ListExternalAccessRulesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$List,
      callback: BodyResponseCallback<Schema$ListExternalAccessRulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListExternalAccessRulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$List
        | BodyResponseCallback<Schema$ListExternalAccessRulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExternalAccessRulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExternalAccessRulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListExternalAccessRulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/externalAccessRules').replace(
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
        createAPIRequest<Schema$ListExternalAccessRulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExternalAccessRulesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single external access rule. Only fields specified in `update_mask` are applied.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Patch
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
        {}) as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Create
    extends StandardParameters {
    /**
     * Required. The user-provided identifier of the `ExternalAccessRule` to be created. This identifier must be unique among `ExternalAccessRule` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    externalAccessRuleId?: string;
    /**
     * Required. The resource name of the network policy to create a new external access firewall rule in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExternalAccessRule;
  }
  export interface Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the external access firewall rule to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the external access firewall rule to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of external access rules, you can exclude the ones named `example-rule` by specifying `name != "example-rule"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-rule") (createTime \> "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-rule-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "example-rule-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of external access rules to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListExternalAccessRulesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExternalAccessRulesRequest` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the network policy to query for external access firewall rules. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkpolicies$Externalaccessrules$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this external access rule. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `ExternalAccessRule` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExternalAccessRule;
  }

  export class Resource$Projects$Locations$Nodetypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of a single `NodeType`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Nodetypes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Nodetypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NodeType>;
    get(
      params: Params$Resource$Projects$Locations$Nodetypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Nodetypes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NodeType>,
      callback: BodyResponseCallback<Schema$NodeType>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Nodetypes$Get,
      callback: BodyResponseCallback<Schema$NodeType>
    ): void;
    get(callback: BodyResponseCallback<Schema$NodeType>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodetypes$Get
        | BodyResponseCallback<Schema$NodeType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NodeType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NodeType>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NodeType> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Nodetypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nodetypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$NodeType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NodeType>(parameters);
      }
    }

    /**
     * Lists node types
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Nodetypes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Nodetypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNodeTypesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Nodetypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Nodetypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNodeTypesResponse>,
      callback: BodyResponseCallback<Schema$ListNodeTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Nodetypes$List,
      callback: BodyResponseCallback<Schema$ListNodeTypesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNodeTypesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodetypes$List
        | BodyResponseCallback<Schema$ListNodeTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNodeTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNodeTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNodeTypesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Nodetypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nodetypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/nodeTypes').replace(
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
        createAPIRequest<Schema$ListNodeTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNodeTypesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Nodetypes$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the node type to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-proj/locations/us-central1-a/nodeTypes/standard-72`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Nodetypes$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of node types, you can exclude the ones named `standard-72` by specifying `name != "standard-72"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "standard-72") (virtual_cpu_count \> 2) ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "standard-96") AND (virtual_cpu_count \> 2) OR (name = "standard-72") ```
     */
    filter?: string;
    /**
     * The maximum number of node types to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListNodeTypes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNodeTypes` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location to be queried for node types. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
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
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
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

  export class Resource$Projects$Locations$Privateclouds {
    context: APIRequestContext;
    clusters: Resource$Projects$Locations$Privateclouds$Clusters;
    externalAddresses: Resource$Projects$Locations$Privateclouds$Externaladdresses;
    hcxActivationKeys: Resource$Projects$Locations$Privateclouds$Hcxactivationkeys;
    loggingServers: Resource$Projects$Locations$Privateclouds$Loggingservers;
    managementDnsZoneBindings: Resource$Projects$Locations$Privateclouds$Managementdnszonebindings;
    subnets: Resource$Projects$Locations$Privateclouds$Subnets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Locations$Privateclouds$Clusters(
        this.context
      );
      this.externalAddresses =
        new Resource$Projects$Locations$Privateclouds$Externaladdresses(
          this.context
        );
      this.hcxActivationKeys =
        new Resource$Projects$Locations$Privateclouds$Hcxactivationkeys(
          this.context
        );
      this.loggingServers =
        new Resource$Projects$Locations$Privateclouds$Loggingservers(
          this.context
        );
      this.managementDnsZoneBindings =
        new Resource$Projects$Locations$Privateclouds$Managementdnszonebindings(
          this.context
        );
      this.subnets = new Resource$Projects$Locations$Privateclouds$Subnets(
        this.context
      );
    }

    /**
     * Creates a new `PrivateCloud` resource in a given project and location. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional. Creating a private cloud also creates a [management cluster](https://cloud.google.com/vmware-engine/docs/concepts-vmware-components) for that private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Privateclouds$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Create
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Privateclouds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/privateClouds').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Schedules a `PrivateCloud` resource for deletion. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `expireTime` set to the time when deletion is final and can no longer be reversed. The delete operation is marked as done as soon as the `PrivateCloud` is successfully scheduled for deletion (this also applies when `delayHours` is set to zero), and the operation is not kept in pending state until `PrivateCloud` is purged. `PrivateCloud` can be restored using `UndeletePrivateCloud` method before the `expireTime` elapses. When `expireTime` is reached, deletion is final and all private cloud resources are irreversibly removed and billing stops. During the final removal process, `PrivateCloud.state` is set to `PURGING`. `PrivateCloud` can be polled using standard `GET` method for the whole period of deletion and purging. It will not be returned only when it is completely purged.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Privateclouds$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Delete
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Privateclouds$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Retrieves a `PrivateCloud` resource by its resource name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateclouds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PrivateCloud>;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PrivateCloud>,
      callback: BodyResponseCallback<Schema$PrivateCloud>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Get,
      callback: BodyResponseCallback<Schema$PrivateCloud>
    ): void;
    get(callback: BodyResponseCallback<Schema$PrivateCloud>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Get
        | BodyResponseCallback<Schema$PrivateCloud>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PrivateCloud>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PrivateCloud>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PrivateCloud> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Privateclouds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$PrivateCloud>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PrivateCloud>(parameters);
      }
    }

    /**
     * Gets details of the `DnsForwarding` config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getDnsForwarding(
      params: Params$Resource$Projects$Locations$Privateclouds$Getdnsforwarding,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDnsForwarding(
      params?: Params$Resource$Projects$Locations$Privateclouds$Getdnsforwarding,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DnsForwarding>;
    getDnsForwarding(
      params: Params$Resource$Projects$Locations$Privateclouds$Getdnsforwarding,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDnsForwarding(
      params: Params$Resource$Projects$Locations$Privateclouds$Getdnsforwarding,
      options: MethodOptions | BodyResponseCallback<Schema$DnsForwarding>,
      callback: BodyResponseCallback<Schema$DnsForwarding>
    ): void;
    getDnsForwarding(
      params: Params$Resource$Projects$Locations$Privateclouds$Getdnsforwarding,
      callback: BodyResponseCallback<Schema$DnsForwarding>
    ): void;
    getDnsForwarding(
      callback: BodyResponseCallback<Schema$DnsForwarding>
    ): void;
    getDnsForwarding(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Getdnsforwarding
        | BodyResponseCallback<Schema$DnsForwarding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DnsForwarding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DnsForwarding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DnsForwarding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Getdnsforwarding;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Getdnsforwarding;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$DnsForwarding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DnsForwarding>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Privateclouds$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Getiampolicy
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists `PrivateCloud` resources in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateclouds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPrivateCloudsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPrivateCloudsResponse>,
      callback: BodyResponseCallback<Schema$ListPrivateCloudsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$List,
      callback: BodyResponseCallback<Schema$ListPrivateCloudsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPrivateCloudsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$List
        | BodyResponseCallback<Schema$ListPrivateCloudsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPrivateCloudsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPrivateCloudsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPrivateCloudsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Privateclouds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/privateClouds').replace(
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
        createAPIRequest<Schema$ListPrivateCloudsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPrivateCloudsResponse>(parameters);
      }
    }

    /**
     * Modifies a `PrivateCloud` resource. Only the following fields can be updated: `description`. Only fields specified in `updateMask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Privateclouds$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Patch
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Privateclouds$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Resets credentials of the NSX appliance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resetNsxCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Resetnsxcredentials,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resetNsxCredentials(
      params?: Params$Resource$Projects$Locations$Privateclouds$Resetnsxcredentials,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    resetNsxCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Resetnsxcredentials,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resetNsxCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Resetnsxcredentials,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resetNsxCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Resetnsxcredentials,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resetNsxCredentials(callback: BodyResponseCallback<Schema$Operation>): void;
    resetNsxCredentials(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Resetnsxcredentials
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Resetnsxcredentials;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Resetnsxcredentials;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+privateCloud}:resetNsxCredentials').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['privateCloud'],
        pathParams: ['privateCloud'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Resets credentials of the Vcenter appliance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resetVcenterCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Resetvcentercredentials,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resetVcenterCredentials(
      params?: Params$Resource$Projects$Locations$Privateclouds$Resetvcentercredentials,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    resetVcenterCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Resetvcentercredentials,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resetVcenterCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Resetvcentercredentials,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resetVcenterCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Resetvcentercredentials,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resetVcenterCredentials(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resetVcenterCredentials(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Resetvcentercredentials
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Resetvcentercredentials;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Resetvcentercredentials;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+privateCloud}:resetVcenterCredentials'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['privateCloud'],
        pathParams: ['privateCloud'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Privateclouds$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Setiampolicy
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
     * Gets details of credentials for NSX appliance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    showNsxCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Shownsxcredentials,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    showNsxCredentials(
      params?: Params$Resource$Projects$Locations$Privateclouds$Shownsxcredentials,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Credentials>;
    showNsxCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Shownsxcredentials,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    showNsxCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Shownsxcredentials,
      options: MethodOptions | BodyResponseCallback<Schema$Credentials>,
      callback: BodyResponseCallback<Schema$Credentials>
    ): void;
    showNsxCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Shownsxcredentials,
      callback: BodyResponseCallback<Schema$Credentials>
    ): void;
    showNsxCredentials(
      callback: BodyResponseCallback<Schema$Credentials>
    ): void;
    showNsxCredentials(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Shownsxcredentials
        | BodyResponseCallback<Schema$Credentials>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Credentials>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Credentials>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Credentials> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Shownsxcredentials;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Shownsxcredentials;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+privateCloud}:showNsxCredentials').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['privateCloud'],
        pathParams: ['privateCloud'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Credentials>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Credentials>(parameters);
      }
    }

    /**
     * Gets details of credentials for Vcenter appliance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    showVcenterCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Showvcentercredentials,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    showVcenterCredentials(
      params?: Params$Resource$Projects$Locations$Privateclouds$Showvcentercredentials,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Credentials>;
    showVcenterCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Showvcentercredentials,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    showVcenterCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Showvcentercredentials,
      options: MethodOptions | BodyResponseCallback<Schema$Credentials>,
      callback: BodyResponseCallback<Schema$Credentials>
    ): void;
    showVcenterCredentials(
      params: Params$Resource$Projects$Locations$Privateclouds$Showvcentercredentials,
      callback: BodyResponseCallback<Schema$Credentials>
    ): void;
    showVcenterCredentials(
      callback: BodyResponseCallback<Schema$Credentials>
    ): void;
    showVcenterCredentials(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Showvcentercredentials
        | BodyResponseCallback<Schema$Credentials>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Credentials>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Credentials>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Credentials> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Showvcentercredentials;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Showvcentercredentials;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+privateCloud}:showVcenterCredentials'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['privateCloud'],
        pathParams: ['privateCloud'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Credentials>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Credentials>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Privateclouds$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
     * Restores a private cloud that was previously scheduled for deletion by `DeletePrivateCloud`. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `PrivateCloud.expireTime` set to the time when deletion can no longer be reversed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    undelete(
      params: Params$Resource$Projects$Locations$Privateclouds$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Projects$Locations$Privateclouds$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    undelete(
      params: Params$Resource$Projects$Locations$Privateclouds$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Projects$Locations$Privateclouds$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undelete(
      params: Params$Resource$Projects$Locations$Privateclouds$Undelete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Operation>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Undelete
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undelete').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Updates the parameters of the `DnsForwarding` config, like associated domains. Only fields specified in `update_mask` are applied.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateDnsForwarding(
      params: Params$Resource$Projects$Locations$Privateclouds$Updatednsforwarding,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateDnsForwarding(
      params?: Params$Resource$Projects$Locations$Privateclouds$Updatednsforwarding,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateDnsForwarding(
      params: Params$Resource$Projects$Locations$Privateclouds$Updatednsforwarding,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateDnsForwarding(
      params: Params$Resource$Projects$Locations$Privateclouds$Updatednsforwarding,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateDnsForwarding(
      params: Params$Resource$Projects$Locations$Privateclouds$Updatednsforwarding,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateDnsForwarding(callback: BodyResponseCallback<Schema$Operation>): void;
    updateDnsForwarding(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Updatednsforwarding
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Updatednsforwarding;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Updatednsforwarding;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateclouds$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the location to create the new private cloud in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a`
     */
    parent?: string;
    /**
     * Required. The user-provided identifier of the private cloud to be created. This identifier must be unique among each `PrivateCloud` within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    privateCloudId?: string;
    /**
     * Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. True if you want the request to be validated and not executed; false otherwise.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PrivateCloud;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Delete
    extends StandardParameters {
    /**
     * Optional. Time delay of the deletion specified in hours. The default value is `3`. Specifying a non-zero value for this field changes the value of `PrivateCloud.state` to `DELETED` and sets `expire_time` to the planned deletion time. Deletion can be cancelled before `expire_time` elapses using VmwareEngine.UndeletePrivateCloud. Specifying a value of `0` for this field instead begins the deletion process and ceases billing immediately. During the final deletion process, the value of `PrivateCloud.state` becomes `PURGING`.
     */
    delayHours?: number;
    /**
     * Optional. If set to true, cascade delete is enabled and all children of this private cloud resource are also deleted. When this flag is set to false, the private cloud will not be deleted if there are any children other than the management cluster. The management cluster is always deleted.
     */
    force?: boolean;
    /**
     * Required. The resource name of the private cloud to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    name?: string;
    /**
     * Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the private cloud to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Getdnsforwarding
    extends StandardParameters {
    /**
     * Required. The resource name of a `DnsForwarding` to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of private clouds, you can exclude the ones named `example-pc` by specifying `name != "example-pc"`. You can also filter nested fields. For example, you could specify `networkConfig.managementCidr = "192.168.0.0/24"` to include private clouds only if they have a matching address in their network configuration. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-pc") (createTime \> "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "private-cloud-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "private-cloud-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of private clouds to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPrivateClouds` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateClouds` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the private cloud to be queried for clusters. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this private cloud. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    name?: string;
    /**
     * Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `PrivateCloud` resource by the update. The fields specified in `updateMask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PrivateCloud;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Resetnsxcredentials
    extends StandardParameters {
    /**
     * Required. The resource name of the private cloud to reset credentials for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    privateCloud?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetNsxCredentialsRequest;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Resetvcentercredentials
    extends StandardParameters {
    /**
     * Required. The resource name of the private cloud to reset credentials for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    privateCloud?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetVcenterCredentialsRequest;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Shownsxcredentials
    extends StandardParameters {
    /**
     * Required. The resource name of the private cloud to be queried for credentials. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    privateCloud?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Showvcentercredentials
    extends StandardParameters {
    /**
     * Required. The resource name of the private cloud to be queried for credentials. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    privateCloud?: string;
    /**
     * Optional. The username of the user to be queried for credentials. The default value of this field is CloudOwner@gve.local. The provided value must be one of the following: CloudOwner@gve.local, solution-user-01@gve.local, solution-user-02@gve.local, solution-user-03@gve.local, solution-user-04@gve.local, solution-user-05@gve.local, zertoadmin@gve.local.
     */
    username?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Privateclouds$Undelete
    extends StandardParameters {
    /**
     * Required. The resource name of the private cloud scheduled for deletion. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeletePrivateCloudRequest;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Updatednsforwarding
    extends StandardParameters {
    /**
     * Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `DnsForwarding` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DnsForwarding;
  }

  export class Resource$Projects$Locations$Privateclouds$Clusters {
    context: APIRequestContext;
    nodes: Resource$Projects$Locations$Privateclouds$Clusters$Nodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.nodes = new Resource$Projects$Locations$Privateclouds$Clusters$Nodes(
        this.context
      );
    }

    /**
     * Creates a new cluster in a given private cloud. Creating a new cluster provides additional nodes for use in the parent private cloud and requires sufficient [node quota](https://cloud.google.com/vmware-engine/quotas).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$Create
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clusters').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a `Cluster` resource. To avoid unintended data loss, migrate or gracefully shut down any workloads running on the cluster before deletion. You cannot delete the management cluster of a private cloud using this method.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$Delete
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Retrieves a `Cluster` resource by its resource name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Cluster>;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Get,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$Cluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$Get
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Cluster> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Cluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Cluster>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$Getiampolicy
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists `Cluster` resources in a given private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$List,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$List
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clusters').replace(
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
        createAPIRequest<Schema$ListClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListClustersResponse>(parameters);
      }
    }

    /**
     * Modifies a `Cluster` resource. Only fields specified in `updateMask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$Patch
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$Setiampolicy
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
  }

  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$Create
    extends StandardParameters {
    /**
     * Required. The user-provided identifier of the new `Cluster`. This identifier must be unique among clusters within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    clusterId?: string;
    /**
     * Required. The resource name of the private cloud to create a new cluster in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    parent?: string;
    /**
     * Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. True if you want the request to be validated and not executed; false otherwise.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the cluster to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
     */
    name?: string;
    /**
     * Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$Get
    extends StandardParameters {
    /**
     * Required. The cluster resource name to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$List
    extends StandardParameters {
    /**
     *  To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-cluster") (nodeCount = "3") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-cluster-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "example-cluster-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of clusters to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the private cloud to query for clusters. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this cluster. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
     */
    name?: string;
    /**
     * Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `Cluster` resource by the update. The fields specified in the `updateMask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;
    /**
     * Optional. True if you want the request to be validated and not executed; false otherwise.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$Testiampermissions
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

  export class Resource$Projects$Locations$Privateclouds$Clusters$Nodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of a single node.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Node>;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Node>,
      callback: BodyResponseCallback<Schema$Node>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$Get,
      callback: BodyResponseCallback<Schema$Node>
    ): void;
    get(callback: BodyResponseCallback<Schema$Node>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$Get
        | BodyResponseCallback<Schema$Node>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Node>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Node>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Node> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Node>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Node>(parameters);
      }
    }

    /**
     * Lists nodes in a given cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNodesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListNodesResponse>,
      callback: BodyResponseCallback<Schema$ListNodesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$List,
      callback: BodyResponseCallback<Schema$ListNodesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNodesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$List
        | BodyResponseCallback<Schema$ListNodesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNodesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNodesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNodesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/nodes').replace(
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
        createAPIRequest<Schema$ListNodesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNodesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the node to retrieve. For example: `projects/{project\}/locations/{location\}/privateClouds/{private_cloud\}/clusters/{cluster\}/nodes/{node\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Clusters$Nodes$List
    extends StandardParameters {
    /**
     * The maximum number of nodes to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListNodes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNodes` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the cluster to be queried for nodes. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Privateclouds$Externaladdresses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `ExternalAddress` resource in a given private cloud. The network policy that corresponds to the private cloud must have the external IP address network service enabled (`NetworkPolicy.external_ip`).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Create
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/externalAddresses').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single external IP address. When you delete an external IP address, connectivity between the external IP address and the corresponding internal IP address is lost.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Delete
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single external IP address.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExternalAddress>;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ExternalAddress>,
      callback: BodyResponseCallback<Schema$ExternalAddress>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Get,
      callback: BodyResponseCallback<Schema$ExternalAddress>
    ): void;
    get(callback: BodyResponseCallback<Schema$ExternalAddress>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Get
        | BodyResponseCallback<Schema$ExternalAddress>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExternalAddress>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExternalAddress>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ExternalAddress> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$ExternalAddress>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExternalAddress>(parameters);
      }
    }

    /**
     * Lists external IP addresses assigned to VMware workload VMs in a given private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExternalAddressesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExternalAddressesResponse>,
      callback: BodyResponseCallback<Schema$ListExternalAddressesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$List,
      callback: BodyResponseCallback<Schema$ListExternalAddressesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListExternalAddressesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$List
        | BodyResponseCallback<Schema$ListExternalAddressesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExternalAddressesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExternalAddressesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListExternalAddressesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/externalAddresses').replace(
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
        createAPIRequest<Schema$ListExternalAddressesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExternalAddressesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single external IP address. Only fields specified in `update_mask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Patch
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Create
    extends StandardParameters {
    /**
     * Required. The user-provided identifier of the `ExternalAddress` to be created. This identifier must be unique among `ExternalAddress` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    externalAddressId?: string;
    /**
     * Required. The resource name of the private cloud to create a new external IP address in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExternalAddress;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the external IP address to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-ip`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the external IP address to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-ip`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of IP addresses, you can exclude the ones named `example-ip` by specifying `name != "example-ip"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-ip") (createTime \> "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-ip-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "example-ip-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of external IP addresses to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListExternalAddresses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExternalAddresses` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the private cloud to be queried for external IP addresses. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Externaladdresses$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this external IP address. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `ExternalAddress` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExternalAddress;
  }

  export class Resource$Projects$Locations$Privateclouds$Hcxactivationkeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new HCX activation key in a given private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Create
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/hcxActivationKeys').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Retrieves a `HcxActivationKey` resource by its resource name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HcxActivationKey>;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Get,
      options: MethodOptions | BodyResponseCallback<Schema$HcxActivationKey>,
      callback: BodyResponseCallback<Schema$HcxActivationKey>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Get,
      callback: BodyResponseCallback<Schema$HcxActivationKey>
    ): void;
    get(callback: BodyResponseCallback<Schema$HcxActivationKey>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Get
        | BodyResponseCallback<Schema$HcxActivationKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HcxActivationKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HcxActivationKey>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$HcxActivationKey> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$HcxActivationKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HcxActivationKey>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Getiampolicy
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists `HcxActivationKey` resources in a given private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListHcxActivationKeysResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHcxActivationKeysResponse>,
      callback: BodyResponseCallback<Schema$ListHcxActivationKeysResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$List,
      callback: BodyResponseCallback<Schema$ListHcxActivationKeysResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListHcxActivationKeysResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$List
        | BodyResponseCallback<Schema$ListHcxActivationKeysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListHcxActivationKeysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListHcxActivationKeysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListHcxActivationKeysResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/hcxActivationKeys').replace(
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
        createAPIRequest<Schema$ListHcxActivationKeysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListHcxActivationKeysResponse>(
          parameters
        );
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Setiampolicy
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
  }

  export interface Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Create
    extends StandardParameters {
    /**
     * Required. The user-provided identifier of the `HcxActivationKey` to be created. This identifier must be unique among `HcxActivationKey` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    hcxActivationKeyId?: string;
    /**
     * Required. The resource name of the private cloud to create the key for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud`
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HcxActivationKey;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the HCX activation key to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud/hcxActivationKeys/my-key`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$List
    extends StandardParameters {
    /**
     * The maximum number of HCX activation keys to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListHcxActivationKeys` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListHcxActivationKeys` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the private cloud to be queried for HCX activation keys. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Hcxactivationkeys$Testiampermissions
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

  export class Resource$Projects$Locations$Privateclouds$Loggingservers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new logging server for a given private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Create
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/loggingServers').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single logging server.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Delete
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a logging server.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoggingServer>;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LoggingServer>,
      callback: BodyResponseCallback<Schema$LoggingServer>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Get,
      callback: BodyResponseCallback<Schema$LoggingServer>
    ): void;
    get(callback: BodyResponseCallback<Schema$LoggingServer>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Get
        | BodyResponseCallback<Schema$LoggingServer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoggingServer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoggingServer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoggingServer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$LoggingServer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoggingServer>(parameters);
      }
    }

    /**
     * Lists logging servers configured for a given private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLoggingServersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLoggingServersResponse>,
      callback: BodyResponseCallback<Schema$ListLoggingServersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$List,
      callback: BodyResponseCallback<Schema$ListLoggingServersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListLoggingServersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Loggingservers$List
        | BodyResponseCallback<Schema$ListLoggingServersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLoggingServersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLoggingServersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLoggingServersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/loggingServers').replace(
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
        createAPIRequest<Schema$ListLoggingServersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLoggingServersResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single logging server. Only fields specified in `update_mask` are applied.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Patch
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Create
    extends StandardParameters {
    /**
     * Required. The user-provided identifier of the `LoggingServer` to be created. This identifier must be unique among `LoggingServer` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    loggingServerId?: string;
    /**
     * Required. The resource name of the private cloud to create a new Logging Server in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LoggingServer;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the logging server to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Logging Server to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Loggingservers$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of logging servers, you can exclude the ones named `example-server` by specifying `name != "example-server"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-server") (createTime \> "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-server-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "example-server-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of logging servers to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListLoggingServersRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLoggingServersRequest` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the private cloud to be queried for logging servers. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Loggingservers$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this logging server. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `LoggingServer` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LoggingServer;
  }

  export class Resource$Projects$Locations$Privateclouds$Managementdnszonebindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `ManagementDnsZoneBinding` resource in a private cloud. This RPC creates the DNS binding and the resource that represents the DNS binding of the consumer VPC network to the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Create
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/managementDnsZoneBindings').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a `ManagementDnsZoneBinding` resource. When a management DNS zone binding is deleted, the corresponding consumer VPC network is no longer bound to the management DNS zone.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Delete
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Retrieves a 'ManagementDnsZoneBinding' resource by its resource name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ManagementDnsZoneBinding>;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ManagementDnsZoneBinding>,
      callback: BodyResponseCallback<Schema$ManagementDnsZoneBinding>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Get,
      callback: BodyResponseCallback<Schema$ManagementDnsZoneBinding>
    ): void;
    get(callback: BodyResponseCallback<Schema$ManagementDnsZoneBinding>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Get
        | BodyResponseCallback<Schema$ManagementDnsZoneBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManagementDnsZoneBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManagementDnsZoneBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ManagementDnsZoneBinding>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$ManagementDnsZoneBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManagementDnsZoneBinding>(parameters);
      }
    }

    /**
     * Lists Consumer VPCs bound to Management DNS Zone of a given private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListManagementDnsZoneBindingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListManagementDnsZoneBindingsResponse>,
      callback: BodyResponseCallback<Schema$ListManagementDnsZoneBindingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$List,
      callback: BodyResponseCallback<Schema$ListManagementDnsZoneBindingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListManagementDnsZoneBindingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$List
        | BodyResponseCallback<Schema$ListManagementDnsZoneBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListManagementDnsZoneBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListManagementDnsZoneBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListManagementDnsZoneBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/managementDnsZoneBindings').replace(
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
        createAPIRequest<Schema$ListManagementDnsZoneBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListManagementDnsZoneBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a `ManagementDnsZoneBinding` resource. Only fields specified in `update_mask` are applied.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Patch
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Retries to create a `ManagementDnsZoneBinding` resource that is in failed state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    repair(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Repair,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    repair(
      params?: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Repair,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    repair(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Repair,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    repair(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Repair,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    repair(
      params: Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Repair,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    repair(callback: BodyResponseCallback<Schema$Operation>): void;
    repair(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Repair
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Repair;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Repair;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:repair').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Create
    extends StandardParameters {
    /**
     * Required. The user-provided identifier of the `ManagementDnsZoneBinding` resource to be created. This identifier must be unique among `ManagementDnsZoneBinding` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    managementDnsZoneBindingId?: string;
    /**
     * Required. The resource name of the private cloud to create a new management DNS zone binding for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagementDnsZoneBinding;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the management DNS zone binding to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the management DNS zone binding to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of Management DNS Zone Bindings, you can exclude the ones named `example-management-dns-zone-binding` by specifying `name != "example-management-dns-zone-binding"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-management-dns-zone-binding") (createTime \> "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-management-dns-zone-binding-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "example-management-dns-zone-binding-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of management DNS zone bindings to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListManagementDnsZoneBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListManagementDnsZoneBindings` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the private cloud to be queried for management DNS zone bindings. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this binding. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `ManagementDnsZoneBinding` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagementDnsZoneBinding;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Managementdnszonebindings$Repair
    extends StandardParameters {
    /**
     * Required. The resource name of the management DNS zone binding to repair. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RepairManagementDnsZoneBindingRequest;
  }

  export class Resource$Projects$Locations$Privateclouds$Subnets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of a single subnet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateclouds$Subnets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subnet>;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Subnet>,
      callback: BodyResponseCallback<Schema$Subnet>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$Get,
      callback: BodyResponseCallback<Schema$Subnet>
    ): void;
    get(callback: BodyResponseCallback<Schema$Subnet>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Subnets$Get
        | BodyResponseCallback<Schema$Subnet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subnet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subnet>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Subnet> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Subnets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Subnets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Subnet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subnet>(parameters);
      }
    }

    /**
     * Lists subnets in a given private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateclouds$Subnets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSubnetsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSubnetsResponse>,
      callback: BodyResponseCallback<Schema$ListSubnetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$List,
      callback: BodyResponseCallback<Schema$ListSubnetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSubnetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Subnets$List
        | BodyResponseCallback<Schema$ListSubnetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSubnetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSubnetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSubnetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateclouds$Subnets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Subnets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/subnets').replace(
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
        createAPIRequest<Schema$ListSubnetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubnetsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single subnet. Only fields specified in `update_mask` are applied. *Note*: This API is synchronous and always returns a successful `google.longrunning.Operation` (LRO). The returned LRO will only have `done` and `response` fields.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Privateclouds$Subnets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateclouds$Subnets$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateclouds$Subnets$Patch
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
        {}) as Params$Resource$Projects$Locations$Privateclouds$Subnets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateclouds$Subnets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateclouds$Subnets$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the subnet to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/subnets/my-subnet`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Subnets$List
    extends StandardParameters {
    /**
     * The maximum number of subnets to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSubnetsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubnetsRequest` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the private cloud to be queried for subnets. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateclouds$Subnets$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this subnet. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/subnets/my-subnet`
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `Subnet` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subnet;
  }

  export class Resource$Projects$Locations$Privateconnections {
    context: APIRequestContext;
    peeringRoutes: Resource$Projects$Locations$Privateconnections$Peeringroutes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.peeringRoutes =
        new Resource$Projects$Locations$Privateconnections$Peeringroutes(
          this.context
        );
    }

    /**
     * Creates a new private connection that can be used for accessing private Clouds.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Privateconnections$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Create
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
        {}) as Params$Resource$Projects$Locations$Privateconnections$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/privateConnections').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a `PrivateConnection` resource. When a private connection is deleted for a VMware Engine network, the connected network becomes inaccessible to that VMware Engine network.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Delete
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
        {}) as Params$Resource$Projects$Locations$Privateconnections$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Retrieves a `PrivateConnection` resource by its resource name. The resource contains details of the private connection, such as connected network, routing mode and state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateconnections$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PrivateConnection>;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PrivateConnection>,
      callback: BodyResponseCallback<Schema$PrivateConnection>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      callback: BodyResponseCallback<Schema$PrivateConnection>
    ): void;
    get(callback: BodyResponseCallback<Schema$PrivateConnection>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Get
        | BodyResponseCallback<Schema$PrivateConnection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PrivateConnection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PrivateConnection>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PrivateConnection>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$PrivateConnection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PrivateConnection>(parameters);
      }
    }

    /**
     * Lists `PrivateConnection` resources in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateconnections$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPrivateConnectionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>,
      callback: BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      callback: BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$List
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPrivateConnectionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/privateConnections').replace(
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
        createAPIRequest<Schema$ListPrivateConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPrivateConnectionsResponse>(
          parameters
        );
      }
    }

    /**
     * Modifies a `PrivateConnection` resource. Only `description` and `routing_mode` fields can be updated. Only fields specified in `updateMask` are applied.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Privateconnections$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Privateconnections$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Privateconnections$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateconnections$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Privateconnections$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Patch
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
        {}) as Params$Resource$Projects$Locations$Privateconnections$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateconnections$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the location to create the new private connection in. Private connection is a regional resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
     */
    parent?: string;
    /**
     * Required. The user-provided identifier of the new private connection. This identifier must be unique among private connection resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    privateConnectionId?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PrivateConnection;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the private connection to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the private connection to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of private connections, you can exclude the ones named `example-connection` by specifying `name != "example-connection"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-connection") (createTime \> "2022-09-22T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-connection-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "example-connection-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of private connections to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location to query for private connections. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the private connection. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `PrivateConnection` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PrivateConnection;
  }

  export class Resource$Projects$Locations$Privateconnections$Peeringroutes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the private connection routes exchanged over a peering connection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$Peeringroutes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateconnections$Peeringroutes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPrivateConnectionPeeringRoutesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$Peeringroutes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$Peeringroutes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPrivateConnectionPeeringRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListPrivateConnectionPeeringRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$Peeringroutes$List,
      callback: BodyResponseCallback<Schema$ListPrivateConnectionPeeringRoutesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPrivateConnectionPeeringRoutesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Peeringroutes$List
        | BodyResponseCallback<Schema$ListPrivateConnectionPeeringRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPrivateConnectionPeeringRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPrivateConnectionPeeringRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPrivateConnectionPeeringRoutesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$Peeringroutes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Peeringroutes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/peeringRoutes').replace(
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
        createAPIRequest<Schema$ListPrivateConnectionPeeringRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPrivateConnectionPeeringRoutesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateconnections$Peeringroutes$List
    extends StandardParameters {
    /**
     * The maximum number of peering routes to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPrivateConnectionPeeringRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnectionPeeringRoutes` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the private connection to retrieve peering routes from. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-west1/privateConnections/my-connection`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Vmwareenginenetworks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new VMware Engine network that can be used by a private cloud.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Vmwareenginenetworks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareenginenetworks$Create
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
        {}) as Params$Resource$Projects$Locations$Vmwareenginenetworks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareenginenetworks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareEngineNetworks').replace(
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a `VmwareEngineNetwork` resource. You can only delete a VMware Engine network after all resources that refer to it are deleted. For example, a private cloud, a network peering, and a network policy can all refer to the same VMware Engine network.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Vmwareenginenetworks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareenginenetworks$Delete
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
        {}) as Params$Resource$Projects$Locations$Vmwareenginenetworks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareenginenetworks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Retrieves a `VmwareEngineNetwork` resource by its resource name. The resource contains details of the VMware Engine network, such as its VMware Engine network type, peered networks in a service project, and state (for example, `CREATING`, `ACTIVE`, `DELETING`).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Vmwareenginenetworks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VmwareEngineNetwork>;
    get(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VmwareEngineNetwork>,
      callback: BodyResponseCallback<Schema$VmwareEngineNetwork>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Get,
      callback: BodyResponseCallback<Schema$VmwareEngineNetwork>
    ): void;
    get(callback: BodyResponseCallback<Schema$VmwareEngineNetwork>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareenginenetworks$Get
        | BodyResponseCallback<Schema$VmwareEngineNetwork>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VmwareEngineNetwork>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VmwareEngineNetwork>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VmwareEngineNetwork>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vmwareenginenetworks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareenginenetworks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$VmwareEngineNetwork>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VmwareEngineNetwork>(parameters);
      }
    }

    /**
     * Lists `VmwareEngineNetwork` resources in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Vmwareenginenetworks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVmwareEngineNetworksResponse>;
    list(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVmwareEngineNetworksResponse>,
      callback: BodyResponseCallback<Schema$ListVmwareEngineNetworksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$List,
      callback: BodyResponseCallback<Schema$ListVmwareEngineNetworksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVmwareEngineNetworksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareenginenetworks$List
        | BodyResponseCallback<Schema$ListVmwareEngineNetworksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVmwareEngineNetworksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVmwareEngineNetworksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVmwareEngineNetworksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vmwareenginenetworks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareenginenetworks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareEngineNetworks').replace(
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
        createAPIRequest<Schema$ListVmwareEngineNetworksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVmwareEngineNetworksResponse>(
          parameters
        );
      }
    }

    /**
     * Modifies a VMware Engine network resource. Only the following fields can be updated: `description`. Only fields specified in `updateMask` are applied.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Vmwareenginenetworks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareenginenetworks$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareenginenetworks$Patch
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
        {}) as Params$Resource$Projects$Locations$Vmwareenginenetworks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareenginenetworks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmwareengine.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Vmwareenginenetworks$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the location to create the new VMware Engine network in. A VMware Engine network of type `LEGACY` is a regional resource, and a VMware Engine network of type `STANDARD` is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The user-provided identifier of the new VMware Engine network. This identifier must be unique among VMware Engine network resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * For networks of type LEGACY, adheres to the format: `{region-id\}-default`. Replace `{region-id\}` with the region where you want to create the VMware Engine network. For example, "us-central1-default". * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
     */
    vmwareEngineNetworkId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VmwareEngineNetwork;
  }
  export interface Params$Resource$Projects$Locations$Vmwareenginenetworks$Delete
    extends StandardParameters {
    /**
     * Optional. Checksum used to ensure that the user-provided value is up to date before the server processes the request. The server compares provided checksum with the current checksum of the resource. If the user-provided value is out of date, this request returns an `ABORTED` error.
     */
    etag?: string;
    /**
     * Required. The resource name of the VMware Engine network to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareenginenetworks$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the VMware Engine network to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareenginenetworks$List
    extends StandardParameters {
    /**
     * A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `\>`, or `<`. For example, if you are filtering a list of network peerings, you can exclude the ones named `example-network` by specifying `name != "example-network"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-network") (createTime \> "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-network-1") AND (createTime \> "2021-04-12T08:15:10.40Z") OR (name = "example-network-2") ```
     */
    filter?: string;
    /**
     * Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListVmwareEngineNetworks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListVmwareEngineNetworks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location to query for VMware Engine networks. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareenginenetworks$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the VMware Engine network. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the VMware Engine network resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. Only the following fields can be updated: `description`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VmwareEngineNetwork;
  }
}
