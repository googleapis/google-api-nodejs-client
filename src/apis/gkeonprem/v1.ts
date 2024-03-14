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

export namespace gkeonprem_v1 {
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
   * Anthos On-Prem API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const gkeonprem = google.gkeonprem('v1');
   * ```
   */
  export class Gkeonprem {
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
   * Authorization defines the On-Prem cluster authorization configuration to bootstrap onto the admin cluster.
   */
  export interface Schema$Authorization {
    /**
     * For VMware and bare metal user clusters, users will be granted the cluster-admin role on the cluster, which provides full administrative access to the cluster. For bare metal admin clusters, users will be granted the cluster-view role, which limits users to read-only access.
     */
    adminUsers?: Schema$ClusterUser[];
  }
  /**
   * BareMetalAdminApiServerArgument represents an arg name-\>value pair. Only a subset of customized flags are supported. Please refer to the API server documentation below to know the exact format: https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/
   */
  export interface Schema$BareMetalAdminApiServerArgument {
    /**
     * Required. The argument name as it appears on the API Server command line please make sure to remove the leading dashes.
     */
    argument?: string | null;
    /**
     * Required. The value of the arg as it will be passed to the API Server command line.
     */
    value?: string | null;
  }
  /**
   * Resource that represents a bare metal admin cluster.
   */
  export interface Schema$BareMetalAdminCluster {
    /**
     * Annotations on the bare metal admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * The Anthos clusters on bare metal version for the bare metal admin cluster.
     */
    bareMetalVersion?: string | null;
    /**
     * Binary Authorization related configurations.
     */
    binaryAuthorization?: Schema$BinaryAuthorization;
    /**
     * Cluster operations configuration.
     */
    clusterOperations?: Schema$BareMetalAdminClusterOperationsConfig;
    /**
     * Control plane configuration.
     */
    controlPlane?: Schema$BareMetalAdminControlPlaneConfig;
    /**
     * Output only. The time at which this bare metal admin cluster was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time at which this bare metal admin cluster was deleted. If the resource is not deleted, this must be empty
     */
    deleteTime?: string | null;
    /**
     * A human readable description of this bare metal admin cluster.
     */
    description?: string | null;
    /**
     * Output only. The IP address name of bare metal admin cluster's API server.
     */
    endpoint?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
     */
    etag?: string | null;
    /**
     * Output only. Fleet configuration for the cluster.
     */
    fleet?: Schema$Fleet;
    /**
     * Load balancer configuration.
     */
    loadBalancer?: Schema$BareMetalAdminLoadBalancerConfig;
    /**
     * Output only. The object name of the bare metal cluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.
     */
    localName?: string | null;
    /**
     * Maintenance configuration.
     */
    maintenanceConfig?: Schema$BareMetalAdminMaintenanceConfig;
    /**
     * Output only. MaintenanceStatus representing state of maintenance.
     */
    maintenanceStatus?: Schema$BareMetalAdminMaintenanceStatus;
    /**
     * Immutable. The bare metal admin cluster resource name.
     */
    name?: string | null;
    /**
     * Network configuration.
     */
    networkConfig?: Schema$BareMetalAdminNetworkConfig;
    /**
     * Node access related configurations.
     */
    nodeAccessConfig?: Schema$BareMetalAdminNodeAccessConfig;
    /**
     * Workload node configuration.
     */
    nodeConfig?: Schema$BareMetalAdminWorkloadNodeConfig;
    /**
     * OS environment related configurations.
     */
    osEnvironmentConfig?: Schema$BareMetalAdminOsEnvironmentConfig;
    /**
     * Proxy configuration.
     */
    proxy?: Schema$BareMetalAdminProxyConfig;
    /**
     * Output only. If set, there are currently changes in flight to the bare metal Admin Cluster.
     */
    reconciling?: boolean | null;
    /**
     * Security related configuration.
     */
    securityConfig?: Schema$BareMetalAdminSecurityConfig;
    /**
     * Output only. The current state of the bare metal admin cluster.
     */
    state?: string | null;
    /**
     * Output only. ResourceStatus representing detailed cluster status.
     */
    status?: Schema$ResourceStatus;
    /**
     * Storage configuration.
     */
    storage?: Schema$BareMetalAdminStorageConfig;
    /**
     * Output only. The unique identifier of the bare metal admin cluster.
     */
    uid?: string | null;
    /**
     * Output only. The time at which this bare metal admin cluster was last updated.
     */
    updateTime?: string | null;
    /**
     * Output only. ValidationCheck representing the result of the preflight check.
     */
    validationCheck?: Schema$ValidationCheck;
  }
  /**
   * BareMetalAdminClusterOperationsConfig specifies the admin cluster's observability infrastructure.
   */
  export interface Schema$BareMetalAdminClusterOperationsConfig {
    /**
     * Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).
     */
    enableApplicationLogs?: boolean | null;
  }
  /**
   * BareMetalAdminControlPlaneConfig specifies the control plane configuration.
   */
  export interface Schema$BareMetalAdminControlPlaneConfig {
    /**
     * Customizes the default API server args. Only a subset of customized flags are supported. Please refer to the API server documentation below to know the exact format: https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/
     */
    apiServerArgs?: Schema$BareMetalAdminApiServerArgument[];
    /**
     * Required. Configures the node pool running the control plane. If specified the corresponding NodePool will be created for the cluster's control plane. The NodePool will have the same name and namespace as the cluster.
     */
    controlPlaneNodePoolConfig?: Schema$BareMetalAdminControlPlaneNodePoolConfig;
  }
  /**
   * BareMetalAdminControlPlaneNodePoolConfig specifies the control plane node pool configuration. We have a control plane specific node pool config so that we can flexible about supporting control plane specific fields in the future.
   */
  export interface Schema$BareMetalAdminControlPlaneNodePoolConfig {
    /**
     * Required. The generic configuration for a node pool running the control plane.
     */
    nodePoolConfig?: Schema$BareMetalNodePoolConfig;
  }
  /**
   * BareMetalAdminDrainedMachine represents the machines that are drained.
   */
  export interface Schema$BareMetalAdminDrainedMachine {
    /**
     * Drained machine IP address.
     */
    nodeIp?: string | null;
  }
  /**
   * BareMetalAdminDrainingMachine represents the machines that are currently draining.
   */
  export interface Schema$BareMetalAdminDrainingMachine {
    /**
     * Draining machine IP address.
     */
    nodeIp?: string | null;
    /**
     * The count of pods yet to drain.
     */
    podCount?: number | null;
  }
  /**
   * BareMetalAdminIslandModeCidrConfig specifies the cluster CIDR configuration while running in island mode.
   */
  export interface Schema$BareMetalAdminIslandModeCidrConfig {
    /**
     * Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
     */
    podAddressCidrBlocks?: string[] | null;
    /**
     * Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
     */
    serviceAddressCidrBlocks?: string[] | null;
  }
  /**
   * BareMetalAdminLoadBalancerConfig specifies the load balancer configuration.
   */
  export interface Schema$BareMetalAdminLoadBalancerConfig {
    /**
     * Manually configured load balancers.
     */
    manualLbConfig?: Schema$BareMetalAdminManualLbConfig;
    /**
     * Configures the ports that the load balancer will listen on.
     */
    portConfig?: Schema$BareMetalAdminPortConfig;
    /**
     * The VIPs used by the load balancer.
     */
    vipConfig?: Schema$BareMetalAdminVipConfig;
  }
  /**
   * BareMetalAdminMachineDrainStatus represents the status of bare metal node machines that are undergoing drain operations.
   */
  export interface Schema$BareMetalAdminMachineDrainStatus {
    /**
     * The list of drained machines.
     */
    drainedMachines?: Schema$BareMetalAdminDrainedMachine[];
    /**
     * The list of draning machines.
     */
    drainingMachines?: Schema$BareMetalAdminDrainingMachine[];
  }
  /**
   * BareMetalAdminMaintenanceConfig specifies configurations to put bare metal Admin cluster CRs nodes in and out of maintenance.
   */
  export interface Schema$BareMetalAdminMaintenanceConfig {
    /**
     * Required. All IPv4 address from these ranges will be placed into maintenance mode. Nodes in maintenance mode will be cordoned and drained. When both of these are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set on the node resource.
     */
    maintenanceAddressCidrBlocks?: string[] | null;
  }
  /**
   * BareMetalAdminMaintenanceStatus represents the maintenance status for bare metal Admin cluster CR's nodes.
   */
  export interface Schema$BareMetalAdminMaintenanceStatus {
    /**
     * Represents the status of draining and drained machine nodes. This is used to show the progress of cluster upgrade.
     */
    machineDrainStatus?: Schema$BareMetalAdminMachineDrainStatus;
  }
  /**
   * BareMetalAdminManualLbConfig represents configuration parameters for a manual load balancer.
   */
  export interface Schema$BareMetalAdminManualLbConfig {
    /**
     * Whether manual load balancing is enabled.
     */
    enabled?: boolean | null;
  }
  /**
   * BareMetalAdminNetworkConfig specifies the cluster network configuration.
   */
  export interface Schema$BareMetalAdminNetworkConfig {
    /**
     * Configuration for Island mode CIDR.
     */
    islandModeCidr?: Schema$BareMetalAdminIslandModeCidrConfig;
  }
  /**
   * Specifies the node access related settings for the bare metal admin cluster.
   */
  export interface Schema$BareMetalAdminNodeAccessConfig {
    /**
     * Required. LoginUser is the user name used to access node machines. It defaults to "root" if not set.
     */
    loginUser?: string | null;
  }
  /**
   * Specifies operating system operation settings for cluster provisioning.
   */
  export interface Schema$BareMetalAdminOsEnvironmentConfig {
    /**
     * Whether the package repo should be added when initializing bare metal machines.
     */
    packageRepoExcluded?: boolean | null;
  }
  /**
   * BareMetalAdminPortConfig is the specification of load balancer ports.
   */
  export interface Schema$BareMetalAdminPortConfig {
    /**
     * The port that control plane hosted load balancers will listen on.
     */
    controlPlaneLoadBalancerPort?: number | null;
  }
  /**
   * BareMetalAdminProxyConfig specifies the cluster proxy configuration.
   */
  export interface Schema$BareMetalAdminProxyConfig {
    /**
     * A list of IPs, hostnames, and domains that should skip the proxy. Examples: ["127.0.0.1", "example.com", ".corp", "localhost"].
     */
    noProxy?: string[] | null;
    /**
     * Required. Specifies the address of your proxy server. Examples: `http://domain` WARNING: Do not provide credentials in the format `http://(username:password@)domain` these will be rejected by the server.
     */
    uri?: string | null;
  }
  /**
   * Specifies the security related settings for the bare metal admin cluster.
   */
  export interface Schema$BareMetalAdminSecurityConfig {
    /**
     * Configures user access to the admin cluster.
     */
    authorization?: Schema$Authorization;
  }
  /**
   * BareMetalAdminStorageConfig specifies the cluster storage configuration.
   */
  export interface Schema$BareMetalAdminStorageConfig {
    /**
     * Required. Specifies the config for local PersistentVolumes backed by mounted node disks. These disks need to be formatted and mounted by the user, which can be done before or after cluster creation.
     */
    lvpNodeMountsConfig?: Schema$BareMetalLvpConfig;
    /**
     * Required. Specifies the config for local PersistentVolumes backed by subdirectories in a shared filesystem. These subdirectores are automatically created during cluster creation.
     */
    lvpShareConfig?: Schema$BareMetalLvpShareConfig;
  }
  /**
   * BareMetalAdminVipConfig for bare metal load balancer configurations.
   */
  export interface Schema$BareMetalAdminVipConfig {
    /**
     * The VIP which you previously set aside for the Kubernetes API of this bare metal admin cluster.
     */
    controlPlaneVip?: string | null;
  }
  /**
   * BareMetalAdminWorkloadNodeConfig specifies the workload node configurations.
   */
  export interface Schema$BareMetalAdminWorkloadNodeConfig {
    /**
     * The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter. By default 110 Pods are created per Node. Upper bound is 250 for both HA and non-HA admin cluster. Lower bound is 64 for non-HA admin cluster and 32 for HA admin cluster.
     */
    maxPodsPerNode?: string | null;
  }
  /**
   * Represents an arg name-\>value pair. Only a subset of customized flags are supported. For the exact format, refer to the [API server documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/).
   */
  export interface Schema$BareMetalApiServerArgument {
    /**
     * Required. The argument name as it appears on the API Server command line, make sure to remove the leading dashes.
     */
    argument?: string | null;
    /**
     * Required. The value of the arg as it will be passed to the API Server command line.
     */
    value?: string | null;
  }
  /**
   * BareMetalBgpLbConfig represents configuration parameters for a Border Gateway Protocol (BGP) load balancer.
   */
  export interface Schema$BareMetalBgpLbConfig {
    /**
     * Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools.
     */
    addressPools?: Schema$BareMetalLoadBalancerAddressPool[];
    /**
     * Required. BGP autonomous system number (ASN) of the cluster. This field can be updated after cluster creation.
     */
    asn?: string | null;
    /**
     * Required. The list of BGP peers that the cluster will connect to. At least one peer must be configured for each control plane node. Control plane nodes will connect to these peers to advertise the control plane VIP. The Services load balancer also uses these peers by default. This field can be updated after cluster creation.
     */
    bgpPeerConfigs?: Schema$BareMetalBgpPeerConfig[];
    /**
     * Specifies the node pool running data plane load balancing. L2 connectivity is required among nodes in this pool. If missing, the control plane node pool is used for data plane load balancing.
     */
    loadBalancerNodePoolConfig?: Schema$BareMetalLoadBalancerNodePoolConfig;
  }
  /**
   * BareMetalBgpPeerConfig represents configuration parameters for a Border Gateway Protocol (BGP) peer.
   */
  export interface Schema$BareMetalBgpPeerConfig {
    /**
     * Required. BGP autonomous system number (ASN) for the network that contains the external peer device.
     */
    asn?: string | null;
    /**
     * The IP address of the control plane node that connects to the external peer. If you don't specify any control plane nodes, all control plane nodes can connect to the external peer. If you specify one or more IP addresses, only the nodes specified participate in peering sessions.
     */
    controlPlaneNodes?: string[] | null;
    /**
     * Required. The IP address of the external peer device.
     */
    ipAddress?: string | null;
  }
  /**
   * Resource that represents a bare metal user cluster.
   */
  export interface Schema$BareMetalCluster {
    /**
     * Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership.
     */
    adminClusterMembership?: string | null;
    /**
     * Output only. The resource name of the bare metal admin cluster managing this user cluster.
     */
    adminClusterName?: string | null;
    /**
     * Annotations on the bare metal user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Required. The Anthos clusters on bare metal version for your user cluster.
     */
    bareMetalVersion?: string | null;
    /**
     * Binary Authorization related configurations.
     */
    binaryAuthorization?: Schema$BinaryAuthorization;
    /**
     * Cluster operations configuration.
     */
    clusterOperations?: Schema$BareMetalClusterOperationsConfig;
    /**
     * Required. Control plane configuration.
     */
    controlPlane?: Schema$BareMetalControlPlaneConfig;
    /**
     * Output only. The time when the bare metal user cluster was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time when the bare metal user cluster was deleted. If the resource is not deleted, this must be empty
     */
    deleteTime?: string | null;
    /**
     * A human readable description of this bare metal user cluster.
     */
    description?: string | null;
    /**
     * Output only. The IP address of the bare metal user cluster's API server.
     */
    endpoint?: string | null;
    /**
     * Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
     */
    etag?: string | null;
    /**
     * Output only. Fleet configuration for the cluster.
     */
    fleet?: Schema$Fleet;
    /**
     * Required. Load balancer configuration.
     */
    loadBalancer?: Schema$BareMetalLoadBalancerConfig;
    /**
     * Output only. The object name of the bare metal user cluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the name in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. When the local name and cluster name differ, the local name is used in the admin cluster controller logs. You use the cluster name when accessing the cluster using bmctl and kubectl.
     */
    localName?: string | null;
    /**
     * Maintenance configuration.
     */
    maintenanceConfig?: Schema$BareMetalMaintenanceConfig;
    /**
     * Output only. Status of on-going maintenance tasks.
     */
    maintenanceStatus?: Schema$BareMetalMaintenanceStatus;
    /**
     * Immutable. The bare metal user cluster resource name.
     */
    name?: string | null;
    /**
     * Required. Network configuration.
     */
    networkConfig?: Schema$BareMetalNetworkConfig;
    /**
     * Node access related configurations.
     */
    nodeAccessConfig?: Schema$BareMetalNodeAccessConfig;
    /**
     * Workload node configuration.
     */
    nodeConfig?: Schema$BareMetalWorkloadNodeConfig;
    /**
     * OS environment related configurations.
     */
    osEnvironmentConfig?: Schema$BareMetalOsEnvironmentConfig;
    /**
     * Proxy configuration.
     */
    proxy?: Schema$BareMetalProxyConfig;
    /**
     * Output only. If set, there are currently changes in flight to the bare metal user cluster.
     */
    reconciling?: boolean | null;
    /**
     * Security related setting configuration.
     */
    securityConfig?: Schema$BareMetalSecurityConfig;
    /**
     * Output only. The current state of the bare metal user cluster.
     */
    state?: string | null;
    /**
     * Output only. Detailed cluster status.
     */
    status?: Schema$ResourceStatus;
    /**
     * Required. Storage configuration.
     */
    storage?: Schema$BareMetalStorageConfig;
    /**
     * Output only. The unique identifier of the bare metal user cluster.
     */
    uid?: string | null;
    /**
     * Output only. The time when the bare metal user cluster was last updated.
     */
    updateTime?: string | null;
    /**
     * The cluster upgrade policy.
     */
    upgradePolicy?: Schema$BareMetalClusterUpgradePolicy;
    /**
     * Output only. The result of the preflight check.
     */
    validationCheck?: Schema$ValidationCheck;
  }
  /**
   * Specifies the bare metal user cluster's observability infrastructure.
   */
  export interface Schema$BareMetalClusterOperationsConfig {
    /**
     * Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).
     */
    enableApplicationLogs?: boolean | null;
  }
  /**
   * BareMetalClusterUpgradePolicy defines the cluster upgrade policy.
   */
  export interface Schema$BareMetalClusterUpgradePolicy {
    /**
     * Specifies which upgrade policy to use.
     */
    policy?: string | null;
  }
  /**
   * Specifies the control plane configuration.
   */
  export interface Schema$BareMetalControlPlaneConfig {
    /**
     * Customizes the default API server args. Only a subset of customized flags are supported. For the exact format, refer to the [API server documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/).
     */
    apiServerArgs?: Schema$BareMetalApiServerArgument[];
    /**
     * Required. Configures the node pool running the control plane.
     */
    controlPlaneNodePoolConfig?: Schema$BareMetalControlPlaneNodePoolConfig;
  }
  /**
   * Specifies the control plane node pool configuration.
   */
  export interface Schema$BareMetalControlPlaneNodePoolConfig {
    /**
     * Required. The generic configuration for a node pool running the control plane.
     */
    nodePoolConfig?: Schema$BareMetalNodePoolConfig;
  }
  /**
   * Represents a machine that is currently drained.
   */
  export interface Schema$BareMetalDrainedMachine {
    /**
     * Drained machine IP address.
     */
    nodeIp?: string | null;
  }
  /**
   * Represents a machine that is currently draining.
   */
  export interface Schema$BareMetalDrainingMachine {
    /**
     * Draining machine IP address.
     */
    nodeIp?: string | null;
    /**
     * The count of pods yet to drain.
     */
    podCount?: number | null;
  }
  /**
   * Specifies the cluster CIDR configuration while running in island mode.
   */
  export interface Schema$BareMetalIslandModeCidrConfig {
    /**
     * Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
     */
    podAddressCidrBlocks?: string[] | null;
    /**
     * Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field is mutable after creation starting with version 1.15.
     */
    serviceAddressCidrBlocks?: string[] | null;
  }
  /**
   * KubeletConfig defines the modifiable kubelet configurations for bare metal machines. Note: this list includes fields supported in GKE (see https://cloud.google.com/kubernetes-engine/docs/how-to/node-system-config#kubelet-options).
   */
  export interface Schema$BareMetalKubeletConfig {
    /**
     * The maximum size of bursty pulls, temporarily allows pulls to burst to this number, while still not exceeding registry_pull_qps. The value must not be a negative number. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 10.
     */
    registryBurst?: number | null;
    /**
     * The limit of registry pulls per second. Setting this value to 0 means no limit. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 5.
     */
    registryPullQps?: number | null;
    /**
     * Prevents the Kubelet from pulling multiple images at a time. We recommend *not* changing the default value on nodes that run docker daemon with version < 1.9 or an Another Union File System (Aufs) storage backend. Issue https://github.com/kubernetes/kubernetes/issues/10959 has more details.
     */
    serializeImagePullsDisabled?: boolean | null;
  }
  /**
   * Represents an IP pool used by the load balancer.
   */
  export interface Schema$BareMetalLoadBalancerAddressPool {
    /**
     * Required. The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5).
     */
    addresses?: string[] | null;
    /**
     * If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.
     */
    avoidBuggyIps?: boolean | null;
    /**
     * If true, prevent IP addresses from being automatically assigned.
     */
    manualAssign?: boolean | null;
    /**
     * Required. The name of the address pool.
     */
    pool?: string | null;
  }
  /**
   * Specifies the load balancer configuration.
   */
  export interface Schema$BareMetalLoadBalancerConfig {
    /**
     * Configuration for BGP typed load balancers. When set network_config.advanced_networking is automatically set to true.
     */
    bgpLbConfig?: Schema$BareMetalBgpLbConfig;
    /**
     * Manually configured load balancers.
     */
    manualLbConfig?: Schema$BareMetalManualLbConfig;
    /**
     * Configuration for MetalLB load balancers.
     */
    metalLbConfig?: Schema$BareMetalMetalLbConfig;
    /**
     * Configures the ports that the load balancer will listen on.
     */
    portConfig?: Schema$BareMetalPortConfig;
    /**
     * The VIPs used by the load balancer.
     */
    vipConfig?: Schema$BareMetalVipConfig;
  }
  /**
   * Specifies the load balancer's node pool configuration.
   */
  export interface Schema$BareMetalLoadBalancerNodePoolConfig {
    /**
     * The generic configuration for a node pool running a load balancer.
     */
    nodePoolConfig?: Schema$BareMetalNodePoolConfig;
  }
  /**
   * Specifies the configs for local persistent volumes (PVs).
   */
  export interface Schema$BareMetalLvpConfig {
    /**
     * Required. The host machine path.
     */
    path?: string | null;
    /**
     * Required. The StorageClass name that PVs will be created with.
     */
    storageClass?: string | null;
  }
  /**
   * Specifies the configs for local persistent volumes under a shared file system.
   */
  export interface Schema$BareMetalLvpShareConfig {
    /**
     * Required. Defines the machine path and storage class for the LVP Share.
     */
    lvpConfig?: Schema$BareMetalLvpConfig;
    /**
     * The number of subdirectories to create under path.
     */
    sharedPathPvCount?: number | null;
  }
  /**
   * Represents the status of node machines that are undergoing drain operations.
   */
  export interface Schema$BareMetalMachineDrainStatus {
    /**
     * The list of drained machines.
     */
    drainedMachines?: Schema$BareMetalDrainedMachine[];
    /**
     * The list of draning machines.
     */
    drainingMachines?: Schema$BareMetalDrainingMachine[];
  }
  /**
   * Specifies configurations to put bare metal nodes in and out of maintenance.
   */
  export interface Schema$BareMetalMaintenanceConfig {
    /**
     * Required. All IPv4 address from these ranges will be placed into maintenance mode. Nodes in maintenance mode will be cordoned and drained. When both of these are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set on the node resource.
     */
    maintenanceAddressCidrBlocks?: string[] | null;
  }
  /**
   * Represents the maintenance status of the bare metal user cluster.
   */
  export interface Schema$BareMetalMaintenanceStatus {
    /**
     * The maintenance status of node machines.
     */
    machineDrainStatus?: Schema$BareMetalMachineDrainStatus;
  }
  /**
   * Represents configuration parameters for a manual load balancer.
   */
  export interface Schema$BareMetalManualLbConfig {
    /**
     * Whether manual load balancing is enabled.
     */
    enabled?: boolean | null;
  }
  /**
   * Represents configuration parameters for a MetalLB load balancer.
   */
  export interface Schema$BareMetalMetalLbConfig {
    /**
     * Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools.
     */
    addressPools?: Schema$BareMetalLoadBalancerAddressPool[];
    /**
     * Specifies the node pool running the load balancer. L2 connectivity is required among nodes in this pool. If missing, the control plane node pool is used as the load balancer pool.
     */
    loadBalancerNodePoolConfig?: Schema$BareMetalLoadBalancerNodePoolConfig;
  }
  /**
   * Specifies the multiple networking interfaces cluster configuration.
   */
  export interface Schema$BareMetalMultipleNetworkInterfacesConfig {
    /**
     * Whether to enable multiple network interfaces for your pods. When set network_config.advanced_networking is automatically set to true.
     */
    enabled?: boolean | null;
  }
  /**
   * Specifies the cluster network configuration.
   */
  export interface Schema$BareMetalNetworkConfig {
    /**
     * Enables the use of advanced Anthos networking features, such as Bundled Load Balancing with BGP or the egress NAT gateway. Setting configuration for advanced networking features will automatically set this flag.
     */
    advancedNetworking?: boolean | null;
    /**
     * Configuration for island mode CIDR. In an island-mode network, nodes have unique IP addresses, but pods don't have unique addresses across clusters. This doesn't cause problems because pods in one cluster never directly communicate with pods in another cluster. Instead, there are gateways that mediate between a pod in one cluster and a pod in another cluster.
     */
    islandModeCidr?: Schema$BareMetalIslandModeCidrConfig;
    /**
     * Configuration for multiple network interfaces.
     */
    multipleNetworkInterfacesConfig?: Schema$BareMetalMultipleNetworkInterfacesConfig;
    /**
     * Configuration for SR-IOV.
     */
    srIovConfig?: Schema$BareMetalSrIovConfig;
  }
  /**
   * Specifies the node access related settings for the bare metal user cluster.
   */
  export interface Schema$BareMetalNodeAccessConfig {
    /**
     * LoginUser is the user name used to access node machines. It defaults to "root" if not set.
     */
    loginUser?: string | null;
  }
  /**
   * BareMetalNodeConfig lists machine addresses to access Nodes.
   */
  export interface Schema$BareMetalNodeConfig {
    /**
     * The labels assigned to this node. An object containing a list of key/value pairs. The labels here, unioned with the labels set on BareMetalNodePoolConfig are the set of labels that will be applied to the node. If there are any conflicts, the BareMetalNodeConfig labels take precedence. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" \}.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1
     */
    nodeIp?: string | null;
  }
  /**
   * Resource that represents a bare metal node pool.
   */
  export interface Schema$BareMetalNodePool {
    /**
     * Annotations on the bare metal node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The time at which this bare metal node pool was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time at which this bare metal node pool was deleted. If the resource is not deleted, this must be empty
     */
    deleteTime?: string | null;
    /**
     * The display name for the bare metal node pool.
     */
    displayName?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
     */
    etag?: string | null;
    /**
     * Immutable. The bare metal node pool resource name.
     */
    name?: string | null;
    /**
     * Required. Node pool configuration.
     */
    nodePoolConfig?: Schema$BareMetalNodePoolConfig;
    /**
     * Output only. If set, there are currently changes in flight to the bare metal node pool.
     */
    reconciling?: boolean | null;
    /**
     * Output only. The current state of the bare metal node pool.
     */
    state?: string | null;
    /**
     * Output only. ResourceStatus representing the detailed node pool status.
     */
    status?: Schema$ResourceStatus;
    /**
     * Output only. The unique identifier of the bare metal node pool.
     */
    uid?: string | null;
    /**
     * Output only. The time at which this bare metal node pool was last updated.
     */
    updateTime?: string | null;
    /**
     * The worker node pool upgrade policy.
     */
    upgradePolicy?: Schema$BareMetalNodePoolUpgradePolicy;
  }
  /**
   * BareMetalNodePoolConfig describes the configuration of all nodes within a given bare metal node pool.
   */
  export interface Schema$BareMetalNodePoolConfig {
    /**
     * The modifiable kubelet configurations for the bare metal machines.
     */
    kubeletConfig?: Schema$BareMetalKubeletConfig;
    /**
     * The labels assigned to nodes of this node pool. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" \}.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The list of machine addresses in the bare metal node pool.
     */
    nodeConfigs?: Schema$BareMetalNodeConfig[];
    /**
     * Specifies the nodes operating system (default: LINUX).
     */
    operatingSystem?: string | null;
    /**
     * The initial taints assigned to nodes of this node pool.
     */
    taints?: Schema$NodeTaint[];
  }
  /**
   * BareMetalNodePoolUpgradePolicy defines the node pool upgrade policy.
   */
  export interface Schema$BareMetalNodePoolUpgradePolicy {
    /**
     * The parallel upgrade settings for worker node pools.
     */
    parallelUpgradeConfig?: Schema$BareMetalParallelUpgradeConfig;
  }
  /**
   * Specifies operating system settings for cluster provisioning.
   */
  export interface Schema$BareMetalOsEnvironmentConfig {
    /**
     * Whether the package repo should not be included when initializing bare metal machines.
     */
    packageRepoExcluded?: boolean | null;
  }
  /**
   * BareMetalParallelUpgradeConfig defines the parallel upgrade settings for worker node pools.
   */
  export interface Schema$BareMetalParallelUpgradeConfig {
    /**
     * The maximum number of nodes that can be upgraded at once.
     */
    concurrentNodes?: number | null;
    /**
     * The minimum number of nodes that should be healthy and available during an upgrade. If set to the default value of 0, it is possible that none of the nodes will be available during an upgrade.
     */
    minimumAvailableNodes?: number | null;
  }
  /**
   * Specifies load balancer ports for the bare metal user cluster.
   */
  export interface Schema$BareMetalPortConfig {
    /**
     * The port that control plane hosted load balancers will listen on.
     */
    controlPlaneLoadBalancerPort?: number | null;
  }
  /**
   * Specifies the cluster proxy configuration.
   */
  export interface Schema$BareMetalProxyConfig {
    /**
     * A list of IPs, hostnames, and domains that should skip the proxy. Examples: ["127.0.0.1", "example.com", ".corp", "localhost"].
     */
    noProxy?: string[] | null;
    /**
     * Required. Specifies the address of your proxy server. Examples: `http://domain` Do not provide credentials in the format `http://(username:password@)domain` these will be rejected by the server.
     */
    uri?: string | null;
  }
  /**
   * Specifies the security related settings for the bare metal user cluster.
   */
  export interface Schema$BareMetalSecurityConfig {
    /**
     * Configures user access to the user cluster.
     */
    authorization?: Schema$Authorization;
  }
  /**
   * Specifies the SR-IOV networking operator config.
   */
  export interface Schema$BareMetalSrIovConfig {
    /**
     * Whether to install the SR-IOV operator.
     */
    enabled?: boolean | null;
  }
  /**
   * BareMetalStorageConfig specifies the cluster storage configuration.
   */
  export interface Schema$BareMetalStorageConfig {
    /**
     * Required. Specifies the config for local PersistentVolumes backed by mounted node disks. These disks need to be formatted and mounted by the user, which can be done before or after cluster creation.
     */
    lvpNodeMountsConfig?: Schema$BareMetalLvpConfig;
    /**
     * Required. Specifies the config for local PersistentVolumes backed by subdirectories in a shared filesystem. These subdirectores are automatically created during cluster creation.
     */
    lvpShareConfig?: Schema$BareMetalLvpShareConfig;
  }
  /**
   * Contains information about a specific Anthos on bare metal version.
   */
  export interface Schema$BareMetalVersionInfo {
    /**
     * The list of upgrade dependencies for this version.
     */
    dependencies?: Schema$UpgradeDependency[];
    /**
     * If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster, version skew policy, etc) must be upgraded before this version can be installed or upgraded to.
     */
    hasDependencies?: boolean | null;
    /**
     * Version number e.g. 1.13.1.
     */
    version?: string | null;
  }
  /**
   * Specifies the VIP config for the bare metal load balancer.
   */
  export interface Schema$BareMetalVipConfig {
    /**
     * The VIP which you previously set aside for the Kubernetes API of this bare metal user cluster.
     */
    controlPlaneVip?: string | null;
    /**
     * The VIP which you previously set aside for ingress traffic into this bare metal user cluster.
     */
    ingressVip?: string | null;
  }
  /**
   * Specifies the workload node configurations.
   */
  export interface Schema$BareMetalWorkloadNodeConfig {
    /**
     * Specifies which container runtime will be used.
     */
    containerRuntime?: string | null;
    /**
     * The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter.
     */
    maxPodsPerNode?: string | null;
  }
  /**
   * Configuration for Binary Authorization.
   */
  export interface Schema$BinaryAuthorization {
    /**
     * Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED.
     */
    evaluationMode?: string | null;
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
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
     */
    role?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * ClusterUser configures user principals for an RBAC policy.
   */
  export interface Schema$ClusterUser {
    /**
     * Required. The name of the user, e.g. `my-gcp-id@gmail.com`.
     */
    username?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Message for enrolling an existing bare metal admin cluster to the GKE on-prem API.
   */
  export interface Schema$EnrollBareMetalAdminClusterRequest {
    /**
     * User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format.
     */
    bareMetalAdminClusterId?: string | null;
    /**
     * Required. This is the full resource name of this admin cluster's fleet membership.
     */
    membership?: string | null;
  }
  /**
   * Message for enrolling an existing bare metal cluster to the Anthos On-Prem API.
   */
  export interface Schema$EnrollBareMetalClusterRequest {
    /**
     * Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources.
     */
    adminClusterMembership?: string | null;
    /**
     * User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all bare metal clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format.
     */
    bareMetalClusterId?: string | null;
    /**
     * Optional. The object name of the bare metal cluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the bare_metal_cluster_id. Otherwise, it must match the object name of the bare metal cluster custom resource. It is not modifiable outside / beyond the enrollment operation.
     */
    localName?: string | null;
  }
  /**
   * Message for enrolling an existing bare metal node pool to the GKE on-prem API.
   */
  export interface Schema$EnrollBareMetalNodePoolRequest {
    /**
     * User provided OnePlatform identifier that is used as part of the resource name. (https://tools.ietf.org/html/rfc1123) format.
     */
    bareMetalNodePoolId?: string | null;
    /**
     * If set, only validate the request, but do not actually enroll the node pool.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Message for enrolling an existing VMware admin cluster to the GKE on-prem API.
   */
  export interface Schema$EnrollVmwareAdminClusterRequest {
    /**
     * Required. This is the full resource name of this admin cluster's fleet membership.
     */
    membership?: string | null;
    /**
     * User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format.
     */
    vmwareAdminClusterId?: string | null;
  }
  /**
   * Message for enrolling an existing VMware cluster to the Anthos On-Prem API.
   */
  export interface Schema$EnrollVmwareClusterRequest {
    /**
     * Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources.
     */
    adminClusterMembership?: string | null;
    /**
     * Optional. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the vmware_cluster_id. Otherwise, it must match the object name of the VMware OnPremUserCluster custom resource. It is not modifiable outside / beyond the enrollment operation.
     */
    localName?: string | null;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean | null;
    /**
     * User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format.
     */
    vmwareClusterId?: string | null;
  }
  /**
   * Message for enrolling a VMware node pool.
   */
  export interface Schema$EnrollVmwareNodePoolRequest {
    /**
     * The target node pool id to be enrolled.
     */
    vmwareNodePoolId?: string | null;
  }
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
   * Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and manage multi-cluster capabilities and apply consistent policies across your systems. See [Anthos Fleets](`https://cloud.google.com/anthos/multicluster-management/fleets`) for more details on Anthos multi-cluster capabilities using Fleets. ##
   */
  export interface Schema$Fleet {
    /**
     * Output only. The name of the managed fleet Membership resource associated to this cluster. Membership names are formatted as `projects//locations//memberships/`.
     */
    membership?: string | null;
  }
  /**
   * Response message for listing bare metal admin clusters.
   */
  export interface Schema$ListBareMetalAdminClustersResponse {
    /**
     * The list of bare metal admin cluster.
     */
    bareMetalAdminClusters?: Schema$BareMetalAdminCluster[];
    /**
     * A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for listing bare metal Clusters.
   */
  export interface Schema$ListBareMetalClustersResponse {
    /**
     * The list of bare metal Clusters.
     */
    bareMetalClusters?: Schema$BareMetalCluster[];
    /**
     * A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for listing bare metal node pools.
   */
  export interface Schema$ListBareMetalNodePoolsResponse {
    /**
     * The node pools from the specified parent resource.
     */
    bareMetalNodePools?: Schema$BareMetalNodePool[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
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
   * Response message for listing VMware admin clusters.
   */
  export interface Schema$ListVmwareAdminClustersResponse {
    /**
     * A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * The list of VMware admin cluster.
     */
    vmwareAdminClusters?: Schema$VmwareAdminCluster[];
  }
  /**
   * Response message for listing VMware Clusters.
   */
  export interface Schema$ListVmwareClustersResponse {
    /**
     * A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * The list of VMware Cluster.
     */
    vmwareClusters?: Schema$VmwareCluster[];
  }
  /**
   * Response message for listing VMware node pools.
   */
  export interface Schema$ListVmwareNodePoolsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * The node pools from the specified parent resource.
     */
    vmwareNodePools?: Schema$VmwareNodePool[];
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
   * Progress metric is (string, int|float|string) pair.
   */
  export interface Schema$Metric {
    /**
     * For metrics with floating point value.
     */
    doubleValue?: number | null;
    /**
     * For metrics with integer value.
     */
    intValue?: string | null;
    /**
     * Required. The metric name.
     */
    metric?: string | null;
    /**
     * For metrics with custom values (ratios, visual progress, etc.).
     */
    stringValue?: string | null;
  }
  /**
   * NodeTaint applied to every Kubernetes node in a node pool. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. Node taints are permanent.
   */
  export interface Schema$NodeTaint {
    /**
     * The taint effect.
     */
    effect?: string | null;
    /**
     * Key associated with the effect.
     */
    key?: string | null;
    /**
     * Value associated with the effect.
     */
    value?: string | null;
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
     * Output only. Denotes if the local managing cluster's control plane is currently disconnected. This is expected to occur temporarily during self-managed cluster upgrades.
     */
    controlPlaneDisconnected?: boolean | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Detailed progress information for the operation.
     */
    progress?: Schema$OperationProgress;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have [Operation.error] value with a [google.rpc.Status.code] of 1, corresponding to `Code.CANCELLED`.
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
     * Output only. Type of operation being executed.
     */
    type?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Information about operation progress.
   */
  export interface Schema$OperationProgress {
    /**
     * The stages of the operation.
     */
    stages?: Schema$OperationStage[];
  }
  /**
   * Information about a particular stage of an operation.
   */
  export interface Schema$OperationStage {
    /**
     * Time the stage ended.
     */
    endTime?: string | null;
    /**
     * Progress metric bundle.
     */
    metrics?: Schema$Metric[];
    /**
     * The high-level stage of the operation.
     */
    stage?: string | null;
    /**
     * Time the stage started.
     */
    startTime?: string | null;
    /**
     * Output only. State of the stage.
     */
    state?: string | null;
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
   * Response message for querying bare metal admin cluster version config.
   */
  export interface Schema$QueryBareMetalAdminVersionConfigResponse {
    /**
     * List of available versions to install or to upgrade to.
     */
    versions?: Schema$BareMetalVersionInfo[];
  }
  /**
   * Response message for querying bare metal admin cluster version config.
   */
  export interface Schema$QueryBareMetalVersionConfigResponse {
    /**
     * List of available versions to install or to upgrade to.
     */
    versions?: Schema$BareMetalVersionInfo[];
  }
  /**
   * Response message for querying VMware user cluster version config.
   */
  export interface Schema$QueryVmwareVersionConfigResponse {
    /**
     * List of available versions to install or to upgrade to.
     */
    versions?: Schema$VmwareVersionInfo[];
  }
  /**
   * ResourceCondition provides a standard mechanism for higher-level status reporting from controller.
   */
  export interface Schema$ResourceCondition {
    /**
     * Last time the condition transit from one status to another.
     */
    lastTransitionTime?: string | null;
    /**
     * Human-readable message indicating details about last transition.
     */
    message?: string | null;
    /**
     * Machine-readable message indicating details about last transition.
     */
    reason?: string | null;
    /**
     * state of the condition.
     */
    state?: string | null;
    /**
     * Type of the condition. (e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)
     */
    type?: string | null;
  }
  /**
   * ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED).
   */
  export interface Schema$ResourceStatus {
    /**
     * ResourceCondition provide a standard mechanism for higher-level status reporting from controller.
     */
    conditions?: Schema$ResourceCondition[];
    /**
     * Human-friendly representation of the error message from controller. The error message can be temporary as the controller controller creates a cluster or node pool. If the error message persists for a longer period of time, it can be used to surface error message to indicate real problems requiring user intervention.
     */
    errorMessage?: string | null;
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
   * UpgradeDependency represents a dependency when upgrading a resource.
   */
  export interface Schema$UpgradeDependency {
    /**
     * Current version of the dependency e.g. 1.15.0.
     */
    currentVersion?: string | null;
    /**
     * Membership names are formatted as `projects//locations//memberships/`.
     */
    membership?: string | null;
    /**
     * Resource name of the dependency.
     */
    resourceName?: string | null;
    /**
     * Target version of the dependency e.g. 1.16.1. This is the version the dependency needs to be upgraded to before a resource can be upgraded.
     */
    targetVersion?: string | null;
  }
  /**
   * ValidationCheck represents the result of preflight check.
   */
  export interface Schema$ValidationCheck {
    /**
     * Options used for the validation check
     */
    option?: string | null;
    /**
     * Output only. The scenario when the preflight checks were run.
     */
    scenario?: string | null;
    /**
     * Output only. The detailed validation check status.
     */
    status?: Schema$ValidationCheckStatus;
  }
  /**
   * ValidationCheckResult defines the details about the validation check.
   */
  export interface Schema$ValidationCheckResult {
    /**
     * The category of the validation.
     */
    category?: string | null;
    /**
     * The description of the validation check.
     */
    description?: string | null;
    /**
     * Detailed failure information, which might be unformatted.
     */
    details?: string | null;
    /**
     * A human-readable message of the check failure.
     */
    reason?: string | null;
    /**
     * The validation check state.
     */
    state?: string | null;
  }
  /**
   * ValidationCheckStatus defines the detailed validation check status.
   */
  export interface Schema$ValidationCheckStatus {
    /**
     * Individual checks which failed as part of the Preflight check execution.
     */
    result?: Schema$ValidationCheckResult[];
  }
  /**
   * Specifies anti affinity group config for the VMware user cluster.
   */
  export interface Schema$VmwareAAGConfig {
    /**
     * Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.
     */
    aagConfigDisabled?: boolean | null;
  }
  /**
   * Represents an IP pool used by the load balancer.
   */
  export interface Schema$VmwareAddressPool {
    /**
     * Required. The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5).
     */
    addresses?: string[] | null;
    /**
     * If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.
     */
    avoidBuggyIps?: boolean | null;
    /**
     * If true, prevent IP addresses from being automatically assigned.
     */
    manualAssign?: boolean | null;
    /**
     * Required. The name of the address pool.
     */
    pool?: string | null;
  }
  /**
   * VmwareAdminAddonNodeConfig contains add-on node configurations for VMware admin cluster.
   */
  export interface Schema$VmwareAdminAddonNodeConfig {
    /**
     * VmwareAutoResizeConfig config specifies auto resize config.
     */
    autoResizeConfig?: Schema$VmwareAutoResizeConfig;
  }
  /**
   * VmwareAdminAuthorizationConfig represents configuration for admin cluster authorization.
   */
  export interface Schema$VmwareAdminAuthorizationConfig {
    /**
     * For VMware admin clusters, users will be granted the cluster-viewer role on the cluster.
     */
    viewerUsers?: Schema$ClusterUser[];
  }
  /**
   * Resource that represents a VMware admin cluster.
   */
  export interface Schema$VmwareAdminCluster {
    /**
     * The VMware admin cluster addon node configuration.
     */
    addonNode?: Schema$VmwareAdminAddonNodeConfig;
    /**
     * Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * The VMware admin cluster anti affinity group configuration.
     */
    antiAffinityGroups?: Schema$VmwareAAGConfig;
    /**
     * The VMware admin cluster authorization configuration.
     */
    authorization?: Schema$VmwareAdminAuthorizationConfig;
    /**
     * The VMware admin cluster auto repair configuration.
     */
    autoRepairConfig?: Schema$VmwareAutoRepairConfig;
    /**
     * The bootstrap cluster this VMware admin cluster belongs to.
     */
    bootstrapClusterMembership?: string | null;
    /**
     * The VMware admin cluster control plane node configuration.
     */
    controlPlaneNode?: Schema$VmwareAdminControlPlaneNodeConfig;
    /**
     * Output only. The time at which VMware admin cluster was created.
     */
    createTime?: string | null;
    /**
     * A human readable description of this VMware admin cluster.
     */
    description?: string | null;
    /**
     * Output only. The DNS name of VMware admin cluster's API server.
     */
    endpoint?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
     */
    etag?: string | null;
    /**
     * Output only. Fleet configuration for the cluster.
     */
    fleet?: Schema$Fleet;
    /**
     * The OS image type for the VMware admin cluster.
     */
    imageType?: string | null;
    /**
     * The VMware admin cluster load balancer configuration.
     */
    loadBalancer?: Schema$VmwareAdminLoadBalancerConfig;
    /**
     * Output only. The object name of the VMware OnPremAdminCluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.
     */
    localName?: string | null;
    /**
     * Immutable. The VMware admin cluster resource name.
     */
    name?: string | null;
    /**
     * The VMware admin cluster network configuration.
     */
    networkConfig?: Schema$VmwareAdminNetworkConfig;
    /**
     * The Anthos clusters on the VMware version for the admin cluster.
     */
    onPremVersion?: string | null;
    /**
     * The VMware platform configuration.
     */
    platformConfig?: Schema$VmwarePlatformConfig;
    /**
     * Output only. The VMware admin cluster prepared secrets configuration. It should always be enabled by the Central API, instead of letting users set it.
     */
    preparedSecrets?: Schema$VmwareAdminPreparedSecretsConfig;
    /**
     * Output only. If set, there are currently changes in flight to the VMware admin cluster.
     */
    reconciling?: boolean | null;
    /**
     * Output only. The current state of VMware admin cluster.
     */
    state?: string | null;
    /**
     * Output only. ResourceStatus representing detailed cluster state.
     */
    status?: Schema$ResourceStatus;
    /**
     * Output only. The unique identifier of the VMware admin cluster.
     */
    uid?: string | null;
    /**
     * Output only. The time at which VMware admin cluster was last updated.
     */
    updateTime?: string | null;
    /**
     * The VMware admin cluster VCenter configuration.
     */
    vcenter?: Schema$VmwareAdminVCenterConfig;
  }
  /**
   * VmwareAdminControlPlaneNodeConfig contains control plane node configuration for VMware admin cluster.
   */
  export interface Schema$VmwareAdminControlPlaneNodeConfig {
    /**
     * The number of vCPUs for the control-plane node of the admin cluster.
     */
    cpus?: string | null;
    /**
     * The number of mebibytes of memory for the control-plane node of the admin cluster.
     */
    memory?: string | null;
    /**
     * The number of control plane nodes for this VMware admin cluster. (default: 1 replica).
     */
    replicas?: string | null;
  }
  /**
   * VmwareAdminF5BigIpConfig represents configuration parameters for an F5 BIG-IP load balancer.
   */
  export interface Schema$VmwareAdminF5BigIpConfig {
    /**
     * The load balancer's IP address.
     */
    address?: string | null;
    /**
     * The preexisting partition to be used by the load balancer. This partition is usually created for the admin cluster for example: 'my-f5-admin-partition'.
     */
    partition?: string | null;
    /**
     * The pool name. Only necessary, if using SNAT.
     */
    snatPool?: string | null;
  }
  /**
   * Specifies HA admin control plane config.
   */
  export interface Schema$VmwareAdminHAControlPlaneConfig {
    /**
     * Static IP addresses for the admin control plane nodes.
     */
    controlPlaneIpBlock?: Schema$VmwareIpBlock;
  }
  /**
   * VmwareAdminLoadBalancerConfig contains load balancer configuration for VMware admin cluster.
   */
  export interface Schema$VmwareAdminLoadBalancerConfig {
    /**
     * Configuration for F5 Big IP typed load balancers.
     */
    f5Config?: Schema$VmwareAdminF5BigIpConfig;
    /**
     * Manually configured load balancers.
     */
    manualLbConfig?: Schema$VmwareAdminManualLbConfig;
    /**
     * MetalLB load balancers.
     */
    metalLbConfig?: Schema$VmwareAdminMetalLbConfig;
    /**
     * Output only. Configuration for Seesaw typed load balancers.
     */
    seesawConfig?: Schema$VmwareAdminSeesawConfig;
    /**
     * The VIPs used by the load balancer.
     */
    vipConfig?: Schema$VmwareAdminVipConfig;
  }
  export interface Schema$VmwareAdminManualLbConfig {
    /**
     * NodePort for add-ons server in the admin cluster.
     */
    addonsNodePort?: number | null;
    /**
     * NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968).
     */
    controlPlaneNodePort?: number | null;
    /**
     * NodePort for ingress service's http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527).
     */
    ingressHttpNodePort?: number | null;
    /**
     * NodePort for ingress service's https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139).
     */
    ingressHttpsNodePort?: number | null;
    /**
     * NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).
     */
    konnectivityServerNodePort?: number | null;
  }
  /**
   * VmwareAdminMetalLbConfig represents configuration parameters for a MetalLB load balancer. For admin clusters, currently no configurations is needed.
   */
  export interface Schema$VmwareAdminMetalLbConfig {}
  /**
   * VmwareAdminNetworkConfig contains network configuration for VMware admin cluster.
   */
  export interface Schema$VmwareAdminNetworkConfig {
    /**
     * Configuration settings for a DHCP IP configuration.
     */
    dhcpIpConfig?: Schema$VmwareDhcpIpConfig;
    /**
     * Configuration for HA admin cluster control plane.
     */
    haControlPlaneConfig?: Schema$VmwareAdminHAControlPlaneConfig;
    /**
     * Represents common network settings irrespective of the host's IP address.
     */
    hostConfig?: Schema$VmwareHostConfig;
    /**
     * Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
     */
    podAddressCidrBlocks?: string[] | null;
    /**
     * Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
     */
    serviceAddressCidrBlocks?: string[] | null;
    /**
     * Configuration settings for a static IP configuration.
     */
    staticIpConfig?: Schema$VmwareStaticIpConfig;
    /**
     * vcenter_network specifies vCenter network name.
     */
    vcenterNetwork?: string | null;
  }
  /**
   * VmwareAdminPreparedSecretsConfig represents configuration for admin cluster prepared secrets.
   */
  export interface Schema$VmwareAdminPreparedSecretsConfig {
    /**
     * Whether prepared secrets is enabled.
     */
    enabled?: boolean | null;
  }
  /**
   * VmwareSeesawConfig represents configuration parameters for an already existing Seesaw load balancer. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update Seesaw configurations it can only bind a pre-existing configuration to a new user cluster. IMPORTANT: When attempting to create a user cluster with a pre-existing Seesaw load balancer you will need to follow some preparation steps before calling the 'CreateVmwareCluster' API method. First you will need to create the user cluster's namespace via kubectl. The namespace will need to use the following naming convention : -gke-onprem-mgmt or -gke-onprem-mgmt depending on whether you used the 'VmwareCluster.local_name' to disambiguate collisions; for more context see the documentation of 'VmwareCluster.local_name'. Once the namespace is created you will need to create a secret resource via kubectl. This secret will contain copies of your Seesaw credentials. The Secret must be called 'user-cluster-creds' and contain Seesaw's SSH and Cert credentials. The credentials must be keyed with the following names: 'seesaw-ssh-private-key', 'seesaw-ssh-public-key', 'seesaw-ssh-ca-key', 'seesaw-ssh-ca-cert'.
   */
  export interface Schema$VmwareAdminSeesawConfig {
    /**
     * Enable two load balancer VMs to achieve a highly-available Seesaw load balancer.
     */
    enableHa?: boolean | null;
    /**
     * In general the following format should be used for the Seesaw group name: seesaw-for-[cluster_name].
     */
    group?: string | null;
    /**
     * The IP Blocks to be used by the Seesaw load balancer
     */
    ipBlocks?: Schema$VmwareIpBlock[];
    /**
     * MasterIP is the IP announced by the master of Seesaw group.
     */
    masterIp?: string | null;
    /**
     * Name to be used by Stackdriver.
     */
    stackdriverName?: string | null;
    /**
     * Names of the VMs created for this Seesaw group.
     */
    vms?: string[] | null;
  }
  /**
   * VmwareAdminVCenterConfig contains VCenter configuration for VMware admin cluster.
   */
  export interface Schema$VmwareAdminVCenterConfig {
    /**
     * The vCenter IP address.
     */
    address?: string | null;
    /**
     * Contains the vCenter CA certificate public key for SSL verification.
     */
    caCertData?: string | null;
    /**
     * The name of the vCenter cluster for the admin cluster.
     */
    cluster?: string | null;
    /**
     * The name of the vCenter datacenter for the admin cluster.
     */
    datacenter?: string | null;
    /**
     * The name of the virtual machine disk (VMDK) for the admin cluster.
     */
    dataDisk?: string | null;
    /**
     * The name of the vCenter datastore for the admin cluster.
     */
    datastore?: string | null;
    /**
     * The name of the vCenter folder for the admin cluster.
     */
    folder?: string | null;
    /**
     * The name of the vCenter resource pool for the admin cluster.
     */
    resourcePool?: string | null;
    /**
     * The name of the vCenter storage policy for the user cluster.
     */
    storagePolicyName?: string | null;
  }
  /**
   * VmwareAdminVipConfig for VMware load balancer configurations.
   */
  export interface Schema$VmwareAdminVipConfig {
    /**
     * The VIP to configure the load balancer for add-ons.
     */
    addonsVip?: string | null;
    /**
     * The VIP which you previously set aside for the Kubernetes API of the admin cluster.
     */
    controlPlaneVip?: string | null;
  }
  /**
   * Specifies config to enable/disable auto repair. The cluster-health-controller is deployed only if Enabled is true.
   */
  export interface Schema$VmwareAutoRepairConfig {
    /**
     * Whether auto repair is enabled.
     */
    enabled?: boolean | null;
  }
  /**
   * Represents auto resizing configurations for the VMware user cluster.
   */
  export interface Schema$VmwareAutoResizeConfig {
    /**
     * Whether to enable controle plane node auto resizing.
     */
    enabled?: boolean | null;
  }
  /**
   * VmwareBundleConfig represents configuration for the bundle.
   */
  export interface Schema$VmwareBundleConfig {
    /**
     * Output only. Resource status for the bundle.
     */
    status?: Schema$ResourceStatus;
    /**
     * The version of the bundle.
     */
    version?: string | null;
  }
  /**
   * Resource that represents a VMware user cluster. ##
   */
  export interface Schema$VmwareCluster {
    /**
     * Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources.
     */
    adminClusterMembership?: string | null;
    /**
     * Output only. The resource name of the VMware admin cluster hosting this user cluster.
     */
    adminClusterName?: string | null;
    /**
     * Annotations on the VMware user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * AAGConfig specifies whether to spread VMware user cluster nodes across at least three physical hosts in the datacenter.
     */
    antiAffinityGroups?: Schema$VmwareAAGConfig;
    /**
     * RBAC policy that will be applied and managed by the Anthos On-Prem API.
     */
    authorization?: Schema$Authorization;
    /**
     * Configuration for auto repairing.
     */
    autoRepairConfig?: Schema$VmwareAutoRepairConfig;
    /**
     * Binary Authorization related configurations.
     */
    binaryAuthorization?: Schema$BinaryAuthorization;
    /**
     * VMware user cluster control plane nodes must have either 1 or 3 replicas.
     */
    controlPlaneNode?: Schema$VmwareControlPlaneNodeConfig;
    /**
     * Output only. The time at which VMware user cluster was created.
     */
    createTime?: string | null;
    /**
     * VmwareDataplaneV2Config specifies configuration for Dataplane V2.
     */
    dataplaneV2?: Schema$VmwareDataplaneV2Config;
    /**
     * Output only. The time at which VMware user cluster was deleted.
     */
    deleteTime?: string | null;
    /**
     * A human readable description of this VMware user cluster.
     */
    description?: string | null;
    /**
     * Disable bundled ingress.
     */
    disableBundledIngress?: boolean | null;
    /**
     * Enable control plane V2. Default to false.
     */
    enableControlPlaneV2?: boolean | null;
    /**
     * Output only. The DNS name of VMware user cluster's API server.
     */
    endpoint?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
     */
    etag?: string | null;
    /**
     * Output only. Fleet configuration for the cluster.
     */
    fleet?: Schema$Fleet;
    /**
     * Load balancer configuration.
     */
    loadBalancer?: Schema$VmwareLoadBalancerConfig;
    /**
     * Output only. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.
     */
    localName?: string | null;
    /**
     * Immutable. The VMware user cluster resource name.
     */
    name?: string | null;
    /**
     * The VMware user cluster network configuration.
     */
    networkConfig?: Schema$VmwareNetworkConfig;
    /**
     * Required. The Anthos clusters on the VMware version for your user cluster.
     */
    onPremVersion?: string | null;
    /**
     * Output only. If set, there are currently changes in flight to the VMware user cluster.
     */
    reconciling?: boolean | null;
    /**
     * Output only. The current state of VMware user cluster.
     */
    state?: string | null;
    /**
     * Output only. ResourceStatus representing detailed cluster state.
     */
    status?: Schema$ResourceStatus;
    /**
     * Storage configuration.
     */
    storage?: Schema$VmwareStorageConfig;
    /**
     * Output only. The unique identifier of the VMware user cluster.
     */
    uid?: string | null;
    /**
     * Output only. The time at which VMware user cluster was last updated.
     */
    updateTime?: string | null;
    /**
     * Specifies upgrade policy for the cluster.
     */
    upgradePolicy?: Schema$VmwareClusterUpgradePolicy;
    /**
     * Output only. ValidationCheck represents the result of the preflight check job.
     */
    validationCheck?: Schema$ValidationCheck;
    /**
     * VmwareVCenterConfig specifies vCenter config for the user cluster. If unspecified, it is inherited from the admin cluster.
     */
    vcenter?: Schema$VmwareVCenterConfig;
    /**
     * Enable VM tracking.
     */
    vmTrackingEnabled?: boolean | null;
  }
  /**
   * VmwareClusterUpgradePolicy defines the cluster upgrade policy.
   */
  export interface Schema$VmwareClusterUpgradePolicy {
    /**
     * Controls whether the upgrade applies to the control plane only.
     */
    controlPlaneOnly?: boolean | null;
  }
  /**
   * Specifies control plane node config for the VMware user cluster.
   */
  export interface Schema$VmwareControlPlaneNodeConfig {
    /**
     * AutoResizeConfig provides auto resizing configurations.
     */
    autoResizeConfig?: Schema$VmwareAutoResizeConfig;
    /**
     * The number of CPUs for each admin cluster node that serve as control planes for this VMware user cluster. (default: 4 CPUs)
     */
    cpus?: string | null;
    /**
     * The megabytes of memory for each admin cluster node that serves as a control plane for this VMware user cluster (default: 8192 MB memory).
     */
    memory?: string | null;
    /**
     * The number of control plane nodes for this VMware user cluster. (default: 1 replica).
     */
    replicas?: string | null;
    /**
     * Vsphere-specific config.
     */
    vsphereConfig?: Schema$VmwareControlPlaneVsphereConfig;
  }
  /**
   * Specifies control plane V2 config.
   */
  export interface Schema$VmwareControlPlaneV2Config {
    /**
     * Static IP addresses for the control plane nodes.
     */
    controlPlaneIpBlock?: Schema$VmwareIpBlock;
  }
  /**
   * Specifies control plane node config.
   */
  export interface Schema$VmwareControlPlaneVsphereConfig {
    /**
     * The Vsphere datastore used by the control plane Node.
     */
    datastore?: string | null;
    /**
     * The Vsphere storage policy used by the control plane Node.
     */
    storagePolicyName?: string | null;
  }
  /**
   * Contains configurations for Dataplane V2, which is optimized dataplane for Kubernetes networking. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2
   */
  export interface Schema$VmwareDataplaneV2Config {
    /**
     * Enable advanced networking which requires dataplane_v2_enabled to be set true.
     */
    advancedNetworking?: boolean | null;
    /**
     * Enables Dataplane V2.
     */
    dataplaneV2Enabled?: boolean | null;
    /**
     * Configure ForwardMode for Dataplane v2.
     */
    forwardMode?: string | null;
    /**
     * Enable Dataplane V2 for clusters with Windows nodes.
     */
    windowsDataplaneV2Enabled?: boolean | null;
  }
  /**
   * Represents the network configuration required for the VMware user clusters with DHCP IP configurations.
   */
  export interface Schema$VmwareDhcpIpConfig {
    /**
     * enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters.
     */
    enabled?: boolean | null;
  }
  /**
   * Represents configuration parameters for an F5 BIG-IP load balancer.
   */
  export interface Schema$VmwareF5BigIpConfig {
    /**
     * The load balancer's IP address.
     */
    address?: string | null;
    /**
     * The preexisting partition to be used by the load balancer. This partition is usually created for the admin cluster for example: 'my-f5-admin-partition'.
     */
    partition?: string | null;
    /**
     * The pool name. Only necessary, if using SNAT.
     */
    snatPool?: string | null;
  }
  /**
   * Represents the common parameters for all the hosts irrespective of their IP address.
   */
  export interface Schema$VmwareHostConfig {
    /**
     * DNS search domains.
     */
    dnsSearchDomains?: string[] | null;
    /**
     * DNS servers.
     */
    dnsServers?: string[] | null;
    /**
     * NTP servers.
     */
    ntpServers?: string[] | null;
  }
  /**
   * Represents VMware user cluster node's network configuration.
   */
  export interface Schema$VmwareHostIp {
    /**
     * Hostname of the machine. VM's name will be used if this field is empty.
     */
    hostname?: string | null;
    /**
     * IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).
     */
    ip?: string | null;
  }
  /**
   * Represents a collection of IP addresses to assign to nodes.
   */
  export interface Schema$VmwareIpBlock {
    /**
     * The network gateway used by the VMware user cluster.
     */
    gateway?: string | null;
    /**
     * The node's network configurations used by the VMware user cluster.
     */
    ips?: Schema$VmwareHostIp[];
    /**
     * The netmask used by the VMware user cluster.
     */
    netmask?: string | null;
  }
  /**
   * Specifies the locad balancer config for the VMware user cluster.
   */
  export interface Schema$VmwareLoadBalancerConfig {
    /**
     * Configuration for F5 Big IP typed load balancers.
     */
    f5Config?: Schema$VmwareF5BigIpConfig;
    /**
     * Manually configured load balancers.
     */
    manualLbConfig?: Schema$VmwareManualLbConfig;
    /**
     * Configuration for MetalLB typed load balancers.
     */
    metalLbConfig?: Schema$VmwareMetalLbConfig;
    /**
     * Output only. Configuration for Seesaw typed load balancers.
     */
    seesawConfig?: Schema$VmwareSeesawConfig;
    /**
     * The VIPs used by the load balancer.
     */
    vipConfig?: Schema$VmwareVipConfig;
  }
  /**
   * Represents configuration parameters for an already existing manual load balancer. Given the nature of manual load balancers it is expected that said load balancer will be fully managed by users. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update ManualLB configurations it can only bind a pre-existing configuration to a new VMware user cluster.
   */
  export interface Schema$VmwareManualLbConfig {
    /**
     * NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968).
     */
    controlPlaneNodePort?: number | null;
    /**
     * NodePort for ingress service's http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527).
     */
    ingressHttpNodePort?: number | null;
    /**
     * NodePort for ingress service's https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139).
     */
    ingressHttpsNodePort?: number | null;
    /**
     * NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).
     */
    konnectivityServerNodePort?: number | null;
  }
  /**
   * Represents configuration parameters for the MetalLB load balancer.
   */
  export interface Schema$VmwareMetalLbConfig {
    /**
     * Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools.
     */
    addressPools?: Schema$VmwareAddressPool[];
  }
  /**
   * Specifies network config for the VMware user cluster.
   */
  export interface Schema$VmwareNetworkConfig {
    /**
     * Configuration for control plane V2 mode.
     */
    controlPlaneV2Config?: Schema$VmwareControlPlaneV2Config;
    /**
     * Configuration settings for a DHCP IP configuration.
     */
    dhcpIpConfig?: Schema$VmwareDhcpIpConfig;
    /**
     * Represents common network settings irrespective of the host's IP address.
     */
    hostConfig?: Schema$VmwareHostConfig;
    /**
     * Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
     */
    podAddressCidrBlocks?: string[] | null;
    /**
     * Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
     */
    serviceAddressCidrBlocks?: string[] | null;
    /**
     * Configuration settings for a static IP configuration.
     */
    staticIpConfig?: Schema$VmwareStaticIpConfig;
    /**
     * vcenter_network specifies vCenter network name. Inherited from the admin cluster.
     */
    vcenterNetwork?: string | null;
  }
  /**
   * Parameters that describe the configuration of all nodes within a given node pool.
   */
  export interface Schema$VmwareNodeConfig {
    /**
     * VMware disk size to be used during creation.
     */
    bootDiskSizeGb?: string | null;
    /**
     * The number of CPUs for each node in the node pool.
     */
    cpus?: string | null;
    /**
     * Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers.
     */
    enableLoadBalancer?: boolean | null;
    /**
     * The OS image name in vCenter, only valid when using Windows.
     */
    image?: string | null;
    /**
     * Required. The OS image to be used for each node in a node pool. Currently `cos`, `cos_cgv2`, `ubuntu`, `ubuntu_cgv2`, `ubuntu_containerd` and `windows` are supported.
     */
    imageType?: string | null;
    /**
     * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
     */
    labels?: {[key: string]: string} | null;
    /**
     * The megabytes of memory for each node in the node pool.
     */
    memoryMb?: string | null;
    /**
     * The number of nodes in the node pool.
     */
    replicas?: string | null;
    /**
     * The initial taints assigned to nodes of this node pool.
     */
    taints?: Schema$NodeTaint[];
    /**
     * Specifies the vSphere config for node pool.
     */
    vsphereConfig?: Schema$VmwareVsphereConfig;
  }
  /**
   * Resource VmwareNodePool represents a VMware node pool. ##
   */
  export interface Schema$VmwareNodePool {
    /**
     * Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Required. The node configuration of the node pool.
     */
    config?: Schema$VmwareNodeConfig;
    /**
     * Output only. The time at which this node pool was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time at which this node pool was deleted. If the resource is not deleted, this must be empty
     */
    deleteTime?: string | null;
    /**
     * The display name for the node pool.
     */
    displayName?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
     */
    etag?: string | null;
    /**
     * Immutable. The resource name of this node pool.
     */
    name?: string | null;
    /**
     * Node pool autoscaling config for the node pool.
     */
    nodePoolAutoscaling?: Schema$VmwareNodePoolAutoscalingConfig;
    /**
     * Anthos version for the node pool. Defaults to the user cluster version.
     */
    onPremVersion?: string | null;
    /**
     * Output only. If set, there are currently changes in flight to the node pool.
     */
    reconciling?: boolean | null;
    /**
     * Output only. The current state of the node pool.
     */
    state?: string | null;
    /**
     * Output only. ResourceStatus representing the detailed VMware node pool state.
     */
    status?: Schema$ResourceStatus;
    /**
     * Output only. The unique identifier of the node pool.
     */
    uid?: string | null;
    /**
     * Output only. The time at which this node pool was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * NodePoolAutoscaling config for the NodePool to allow for the kubernetes to scale NodePool.
   */
  export interface Schema$VmwareNodePoolAutoscalingConfig {
    /**
     * Maximum number of replicas in the NodePool.
     */
    maxReplicas?: number | null;
    /**
     * Minimum number of replicas in the NodePool.
     */
    minReplicas?: number | null;
  }
  /**
   * VmwarePlatformConfig represents configuration for the VMware platform.
   */
  export interface Schema$VmwarePlatformConfig {
    /**
     * Output only. The list of bundles installed in the admin cluster.
     */
    bundles?: Schema$VmwareBundleConfig[];
    /**
     * Output only. The platform version e.g. 1.13.2.
     */
    platformVersion?: string | null;
    /**
     * Input only. The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle.
     */
    requiredPlatformVersion?: string | null;
    /**
     * Output only. Resource status for the platform.
     */
    status?: Schema$ResourceStatus;
  }
  /**
   * VmwareSeesawConfig represents configuration parameters for an already existing Seesaw load balancer. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update Seesaw configurations it can only bind a pre-existing configuration to a new user cluster. IMPORTANT: When attempting to create a user cluster with a pre-existing Seesaw load balancer you will need to follow some preparation steps before calling the 'CreateVmwareCluster' API method. First you will need to create the user cluster's namespace via kubectl. The namespace will need to use the following naming convention : -gke-onprem-mgmt or -gke-onprem-mgmt depending on whether you used the 'VmwareCluster.local_name' to disambiguate collisions; for more context see the documentation of 'VmwareCluster.local_name'. Once the namespace is created you will need to create a secret resource via kubectl. This secret will contain copies of your Seesaw credentials. The Secret must be called 'user-cluster-creds' and contain Seesaw's SSH and Cert credentials. The credentials must be keyed with the following names: 'seesaw-ssh-private-key', 'seesaw-ssh-public-key', 'seesaw-ssh-ca-key', 'seesaw-ssh-ca-cert'.
   */
  export interface Schema$VmwareSeesawConfig {
    /**
     * Enable two load balancer VMs to achieve a highly-available Seesaw load balancer.
     */
    enableHa?: boolean | null;
    /**
     * Required. In general the following format should be used for the Seesaw group name: seesaw-for-[cluster_name].
     */
    group?: string | null;
    /**
     * Required. The IP Blocks to be used by the Seesaw load balancer
     */
    ipBlocks?: Schema$VmwareIpBlock[];
    /**
     * Required. MasterIP is the IP announced by the master of Seesaw group.
     */
    masterIp?: string | null;
    /**
     * Name to be used by Stackdriver.
     */
    stackdriverName?: string | null;
    /**
     * Names of the VMs created for this Seesaw group.
     */
    vms?: string[] | null;
  }
  /**
   * Represents the network configuration required for the VMware user clusters with Static IP configurations.
   */
  export interface Schema$VmwareStaticIpConfig {
    /**
     * Represents the configuration values for static IP allocation to nodes.
     */
    ipBlocks?: Schema$VmwareIpBlock[];
  }
  /**
   * Specifies vSphere CSI components deployment config in the VMware user cluster.
   */
  export interface Schema$VmwareStorageConfig {
    /**
     * Whether or not to deploy vSphere CSI components in the VMware user cluster. Enabled by default.
     */
    vsphereCsiDisabled?: boolean | null;
  }
  /**
   * Represents configuration for the VMware VCenter for the user cluster.
   */
  export interface Schema$VmwareVCenterConfig {
    /**
     * Output only. The vCenter IP address.
     */
    address?: string | null;
    /**
     * Contains the vCenter CA certificate public key for SSL verification.
     */
    caCertData?: string | null;
    /**
     * The name of the vCenter cluster for the user cluster.
     */
    cluster?: string | null;
    /**
     * The name of the vCenter datacenter for the user cluster.
     */
    datacenter?: string | null;
    /**
     * The name of the vCenter datastore for the user cluster.
     */
    datastore?: string | null;
    /**
     * The name of the vCenter folder for the user cluster.
     */
    folder?: string | null;
    /**
     * The name of the vCenter resource pool for the user cluster.
     */
    resourcePool?: string | null;
    /**
     * The name of the vCenter storage policy for the user cluster.
     */
    storagePolicyName?: string | null;
  }
  /**
   * Contains information about a specific Anthos on VMware version.
   */
  export interface Schema$VmwareVersionInfo {
    /**
     * The list of upgrade dependencies for this version.
     */
    dependencies?: Schema$UpgradeDependency[];
    /**
     * If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster) must be upgraded before this version can be installed or upgraded to.
     */
    hasDependencies?: boolean | null;
    /**
     * If set, the version is installed in the admin cluster. Otherwise, the version bundle must be downloaded and installed before a user cluster can be created at or upgraded to this version.
     */
    isInstalled?: boolean | null;
    /**
     * Version number e.g. 1.13.1-gke.1000.
     */
    version?: string | null;
  }
  /**
   * Specifies the VIP config for the VMware user cluster load balancer.
   */
  export interface Schema$VmwareVipConfig {
    /**
     * The VIP which you previously set aside for the Kubernetes API of this cluster.
     */
    controlPlaneVip?: string | null;
    /**
     * The VIP which you previously set aside for ingress traffic into this cluster.
     */
    ingressVip?: string | null;
  }
  /**
   * VmwareVsphereConfig represents configuration for the VMware VCenter for node pool.
   */
  export interface Schema$VmwareVsphereConfig {
    /**
     * The name of the vCenter datastore. Inherited from the user cluster.
     */
    datastore?: string | null;
    /**
     * Vsphere host groups to apply to all VMs in the node pool
     */
    hostGroups?: string[] | null;
    /**
     * Tags to apply to VMs.
     */
    tags?: Schema$VmwareVsphereTag[];
  }
  /**
   * VmwareVsphereTag describes a vSphere tag to be placed on VMs in the node pool. For more information, see https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-E8E854DD-AA97-4E0C-8419-CE84F93C4058.html
   */
  export interface Schema$VmwareVsphereTag {
    /**
     * The Vsphere tag category.
     */
    category?: string | null;
    /**
     * The Vsphere tag name.
     */
    tag?: string | null;
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
    bareMetalAdminClusters: Resource$Projects$Locations$Baremetaladminclusters;
    bareMetalClusters: Resource$Projects$Locations$Baremetalclusters;
    operations: Resource$Projects$Locations$Operations;
    vmwareAdminClusters: Resource$Projects$Locations$Vmwareadminclusters;
    vmwareClusters: Resource$Projects$Locations$Vmwareclusters;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.bareMetalAdminClusters =
        new Resource$Projects$Locations$Baremetaladminclusters(this.context);
      this.bareMetalClusters =
        new Resource$Projects$Locations$Baremetalclusters(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.vmwareAdminClusters =
        new Resource$Projects$Locations$Vmwareadminclusters(this.context);
      this.vmwareClusters = new Resource$Projects$Locations$Vmwareclusters(
        this.context
      );
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

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

  export class Resource$Projects$Locations$Baremetaladminclusters {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Baremetaladminclusters$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Baremetaladminclusters$Operations(
          this.context
        );
    }

    /**
     * Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Create
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
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bareMetalAdminClusters').replace(
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
     * Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enroll(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Enroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enroll(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Enroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    enroll(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Enroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Enroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Enroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(callback: BodyResponseCallback<Schema$Operation>): void;
    enroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Enroll
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
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Enroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Enroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/bareMetalAdminClusters:enroll'
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single bare metal admin cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BareMetalAdminCluster>;
    get(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BareMetalAdminCluster>,
      callback: BodyResponseCallback<Schema$BareMetalAdminCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Get,
      callback: BodyResponseCallback<Schema$BareMetalAdminCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$BareMetalAdminCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Get
        | BodyResponseCallback<Schema$BareMetalAdminCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BareMetalAdminCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BareMetalAdminCluster>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BareMetalAdminCluster>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
        createAPIRequest<Schema$BareMetalAdminCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BareMetalAdminCluster>(parameters);
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
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Lists bare metal admin clusters in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBareMetalAdminClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBareMetalAdminClustersResponse>,
      callback: BodyResponseCallback<Schema$ListBareMetalAdminClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$List,
      callback: BodyResponseCallback<Schema$ListBareMetalAdminClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBareMetalAdminClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$List
        | BodyResponseCallback<Schema$ListBareMetalAdminClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBareMetalAdminClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBareMetalAdminClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBareMetalAdminClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bareMetalAdminClusters').replace(
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
        createAPIRequest<Schema$ListBareMetalAdminClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBareMetalAdminClustersResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single bare metal admin cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Patch
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
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Queries the bare metal admin cluster version config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Queryversionconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    queryVersionConfig(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Queryversionconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryBareMetalAdminVersionConfigResponse>;
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Queryversionconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Queryversionconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryBareMetalAdminVersionConfigResponse>,
      callback: BodyResponseCallback<Schema$QueryBareMetalAdminVersionConfigResponse>
    ): void;
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Queryversionconfig,
      callback: BodyResponseCallback<Schema$QueryBareMetalAdminVersionConfigResponse>
    ): void;
    queryVersionConfig(
      callback: BodyResponseCallback<Schema$QueryBareMetalAdminVersionConfigResponse>
    ): void;
    queryVersionConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Queryversionconfig
        | BodyResponseCallback<Schema$QueryBareMetalAdminVersionConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryBareMetalAdminVersionConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryBareMetalAdminVersionConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryBareMetalAdminVersionConfigResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Queryversionconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Queryversionconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/{+parent}/bareMetalAdminClusters:queryVersionConfig'
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
        createAPIRequest<Schema$QueryBareMetalAdminVersionConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryBareMetalAdminVersionConfigResponse>(
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
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Unenrolls an existing bare metal admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Unenroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unenroll(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Unenroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Unenroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Unenroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Unenroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(callback: BodyResponseCallback<Schema$Operation>): void;
    unenroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Unenroll
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
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Unenroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Unenroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:unenroll').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
  }

  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Create
    extends StandardParameters {
    /**
     * Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/
     */
    bareMetalAdminClusterId?: string;
    /**
     * Required. The parent of the project and location where the cluster is created in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BareMetalAdminCluster;
  }
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Enroll
    extends StandardParameters {
    /**
     * Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnrollBareMetalAdminClusterRequest;
  }
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Get
    extends StandardParameters {
    /**
     * Required. Name of the bare metal admin cluster to get. Format: "projects/{project\}/locations/{location\}/bareMetalAdminClusters/{bare_metal_admin_cluster\}"
     */
    name?: string;
    /**
     * View for bare metal admin cluster. When `BASIC` is specified, only the cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$List
    extends StandardParameters {
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * View for bare metal admin clusters. When `BASIC` is specified, only the admin cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete admin cluster configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Patch
    extends StandardParameters {
    /**
     * Immutable. The bare metal admin cluster resource name.
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the BareMetalAdminCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the BareMetalAdminCluster message will be updated. Empty fields will be ignored unless a field mask is used.
     */
    updateMask?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BareMetalAdminCluster;
  }
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Queryversionconfig
    extends StandardParameters {
    /**
     * Required. The parent of the project and location to query for version config. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project\}/locations/{location\}/bareMetalAdminClusters/{bare_metal_admin_cluster\}"
     */
    'upgradeConfig.clusterName'?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Unenroll
    extends StandardParameters {
    /**
     * If set to true, and the bare metal admin cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the bare metal admin cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * If set to true, the unenrollment of a bare metal admin cluster resource will succeed even if errors occur during unenrollment. This parameter can be used when you want to unenroll admin cluster resource and the on-prem admin cluster is disconnected / unreachable. WARNING: Using this parameter when your admin cluster still exists may result in a deleted GCP admin cluster but existing resourcelink in on-prem admin cluster and membership.
     */
    ignoreErrors?: boolean;
    /**
     * Required. Name of the bare metal admin cluster to be unenrolled. Format: "projects/{project\}/locations/{location\}/bareMetalAdminClusters/{cluster\}"
     */
    name?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;
  }

  export class Resource$Projects$Locations$Baremetaladminclusters$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetaladminclusters$Operations$List
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

  export class Resource$Projects$Locations$Baremetalclusters {
    context: APIRequestContext;
    bareMetalNodePools: Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools;
    operations: Resource$Projects$Locations$Baremetalclusters$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.bareMetalNodePools =
        new Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Baremetalclusters$Operations(
          this.context
        );
    }

    /**
     * Creates a new bare metal cluster in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Create
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bareMetalClusters').replace(
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
     * Deletes a single bare metal Cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Delete
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Enroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enroll(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Enroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    enroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Enroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Enroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Enroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(callback: BodyResponseCallback<Schema$Operation>): void;
    enroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Enroll
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Enroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Enroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bareMetalClusters:enroll').replace(
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
     * Gets details of a single bare metal Cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BareMetalCluster>;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BareMetalCluster>,
      callback: BodyResponseCallback<Schema$BareMetalCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Get,
      callback: BodyResponseCallback<Schema$BareMetalCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$BareMetalCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Get
        | BodyResponseCallback<Schema$BareMetalCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BareMetalCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BareMetalCluster>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BareMetalCluster> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Baremetalclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
        createAPIRequest<Schema$BareMetalCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BareMetalCluster>(parameters);
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Lists bare metal clusters in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBareMetalClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBareMetalClustersResponse>,
      callback: BodyResponseCallback<Schema$ListBareMetalClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$List,
      callback: BodyResponseCallback<Schema$ListBareMetalClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBareMetalClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$List
        | BodyResponseCallback<Schema$ListBareMetalClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBareMetalClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBareMetalClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBareMetalClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bareMetalClusters').replace(
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
        createAPIRequest<Schema$ListBareMetalClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBareMetalClustersResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single bare metal Cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Patch
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Queries the bare metal user cluster version config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Queryversionconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    queryVersionConfig(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Queryversionconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryBareMetalVersionConfigResponse>;
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Queryversionconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Queryversionconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryBareMetalVersionConfigResponse>,
      callback: BodyResponseCallback<Schema$QueryBareMetalVersionConfigResponse>
    ): void;
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Queryversionconfig,
      callback: BodyResponseCallback<Schema$QueryBareMetalVersionConfigResponse>
    ): void;
    queryVersionConfig(
      callback: BodyResponseCallback<Schema$QueryBareMetalVersionConfigResponse>
    ): void;
    queryVersionConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Queryversionconfig
        | BodyResponseCallback<Schema$QueryBareMetalVersionConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryBareMetalVersionConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryBareMetalVersionConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryBareMetalVersionConfigResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Queryversionconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Queryversionconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/bareMetalClusters:queryVersionConfig'
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
        createAPIRequest<Schema$QueryBareMetalVersionConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryBareMetalVersionConfigResponse>(
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Unenrolls an existing bare metal user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Unenroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unenroll(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Unenroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Unenroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Unenroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Unenroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(callback: BodyResponseCallback<Schema$Operation>): void;
    unenroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Unenroll
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Unenroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Unenroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:unenroll').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
  }

  export interface Params$Resource$Projects$Locations$Baremetalclusters$Create
    extends StandardParameters {
    /**
     * Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/
     */
    bareMetalClusterId?: string;
    /**
     * Required. The parent of the project and location where the cluster is created in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BareMetalCluster;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Delete
    extends StandardParameters {
    /**
     * If set to true, and the bare metal cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the bare metal Cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * If set to true, any node pools from the cluster will also be deleted.
     */
    force?: boolean;
    /**
     * If set to true, the deletion of a bare metal user cluster resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's cluster resource and the on-prem admin cluster that hosts your user cluster is disconnected / unreachable or deleted. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP user cluster but an existing on-prem user cluster.
     */
    ignoreErrors?: boolean;
    /**
     * Required. Name of the bare metal user cluster to be deleted. Format: "projects/{project\}/locations/{location\}/bareMetalClusters/{bare_metal_cluster\}"
     */
    name?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Enroll
    extends StandardParameters {
    /**
     * Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnrollBareMetalClusterRequest;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Get
    extends StandardParameters {
    /**
     * Required. Name of the bare metal user cluster to get. Format: "projects/{project\}/locations/{location\}/bareMetalClusters/{bare_metal_cluster\}"
     */
    name?: string;
    /**
     * View for bare metal user cluster. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Baremetalclusters$List
    extends StandardParameters {
    /**
     * A resource filtering expression following https://google.aip.dev/160. When non-empty, only resource's whose attributes field matches the filter are returned.
     */
    filter?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * View for bare metal Clusters. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Patch
    extends StandardParameters {
    /**
     * If set to true, and the bare metal cluster is not found, the request will create a new bare metal cluster with the provided configuration. The user must have both create and update permission to call Update with allow_missing set to true.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The bare metal user cluster resource name.
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the BareMetalCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the BareMetalCluster message will be updated. Empty fields will be ignored unless a field mask is used.
     */
    updateMask?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BareMetalCluster;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Queryversionconfig
    extends StandardParameters {
    /**
     * The admin cluster membership. This is the full resource name of the admin cluster's fleet membership. Format: "projects/{project\}/locations/{location\}/memberships/{membership\}"
     */
    'createConfig.adminClusterMembership'?: string;
    /**
     * The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project\}/locations/{location\}/bareMetalAdminClusters/{bare_metal_admin_cluster\}"
     */
    'createConfig.adminClusterName'?: string;
    /**
     * Required. The parent of the project and location to query for version config. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * The user cluster resource name. This is the full resource name of the user cluster resource. Format: "projects/{project\}/locations/{location\}/bareMetalClusters/{bare_metal_cluster\}"
     */
    'upgradeConfig.clusterName'?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Unenroll
    extends StandardParameters {
    /**
     * If set to true, and the bare metal cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the bare metal Cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * This is required if the cluster has any associated node pools. When set, any child node pools will also be unenrolled.
     */
    force?: boolean;
    /**
     * Required. Name of the bare metal user cluster to be unenrolled. Format: "projects/{project\}/locations/{location\}/bareMetalClusters/{cluster\}"
     */
    name?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;
  }

  export class Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations(
          this.context
        );
    }

    /**
     * Creates a new bare metal node pool in a given project, location and Bare Metal cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Create
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bareMetalNodePools').replace(
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
     * Deletes a single bare metal node pool.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Delete
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Enroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enroll(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Enroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    enroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Enroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Enroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Enroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(callback: BodyResponseCallback<Schema$Operation>): void;
    enroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Enroll
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Enroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Enroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bareMetalNodePools:enroll').replace(
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
     * Gets details of a single bare metal node pool.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BareMetalNodePool>;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BareMetalNodePool>,
      callback: BodyResponseCallback<Schema$BareMetalNodePool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Get,
      callback: BodyResponseCallback<Schema$BareMetalNodePool>
    ): void;
    get(callback: BodyResponseCallback<Schema$BareMetalNodePool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Get
        | BodyResponseCallback<Schema$BareMetalNodePool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BareMetalNodePool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BareMetalNodePool>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BareMetalNodePool>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
        createAPIRequest<Schema$BareMetalNodePool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BareMetalNodePool>(parameters);
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Lists bare metal node pools in a given project, location and bare metal cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBareMetalNodePoolsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBareMetalNodePoolsResponse>,
      callback: BodyResponseCallback<Schema$ListBareMetalNodePoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$List,
      callback: BodyResponseCallback<Schema$ListBareMetalNodePoolsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBareMetalNodePoolsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$List
        | BodyResponseCallback<Schema$ListBareMetalNodePoolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBareMetalNodePoolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBareMetalNodePoolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBareMetalNodePoolsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bareMetalNodePools').replace(
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
        createAPIRequest<Schema$ListBareMetalNodePoolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBareMetalNodePoolsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single bare metal node pool.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Patch
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Unenrolls a bare metal node pool from Anthos On-Prem API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Unenroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unenroll(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Unenroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Unenroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Unenroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Unenroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(callback: BodyResponseCallback<Schema$Operation>): void;
    unenroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Unenroll
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Unenroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Unenroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:unenroll').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
  }

  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Create
    extends StandardParameters {
    /**
     * The ID to use for the node pool, which will become the final component of the node pool's resource name. This value must be up to 63 characters, and valid characters are /a-z-/. The value must not be permitted to be a UUID (or UUID-like: anything matching /^[0-9a-f]{8\}(-[0-9a-f]{4\}){3\}-[0-9a-f]{12\}$/i).
     */
    bareMetalNodePoolId?: string;
    /**
     * Required. The parent resource where this node pool will be created. projects/{project\}/locations/{location\}/bareMetalClusters/{cluster\}
     */
    parent?: string;
    /**
     * If set, only validate the request, but do not actually create the node pool.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BareMetalNodePool;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Delete
    extends StandardParameters {
    /**
     * If set to true, and the bare metal node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the BareMetalNodePool. If an etag is provided and does not match the current etag of the node pool, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * If set to true, the deletion of a bare metal node pool resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's node pool resource and you've already deleted the on-prem admin cluster that hosted your node pool. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP node pool but an existing on-prem node pool.
     */
    ignoreErrors?: boolean;
    /**
     * Required. The name of the node pool to delete. Format: projects/{project\}/locations/{location\}/bareMetalClusters/{cluster\}/bareMetalNodePools/{nodepool\}
     */
    name?: string;
    /**
     * If set, only validate the request, but do not actually delete the node pool.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Enroll
    extends StandardParameters {
    /**
     * Required. The parent resource where this node pool will be created. projects/{project\}/locations/{location\}/bareMetalClusters/{cluster\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnrollBareMetalNodePoolRequest;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Get
    extends StandardParameters {
    /**
     * Required. The name of the node pool to retrieve. projects/{project\}/locations/{location\}/bareMetalClusters/{cluster\}/bareMetalNodePools/{nodepool\}
     */
    name?: string;
    /**
     * View for bare metal node pool. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$List
    extends StandardParameters {
    /**
     * The maximum number of node pools to return. The service may return fewer than this value. If unspecified, at most 50 node pools will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListBareMetalNodePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBareMetalNodePools` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of node pools. Format: projects/{project\}/locations/{location\}/bareMetalClusters/{bareMetalCluster\}
     */
    parent?: string;
    /**
     * View for bare metal node pools. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Patch
    extends StandardParameters {
    /**
     * If set to true, and the bare metal node pool is not found, the request will create a new bare metal node pool with the provided configuration. The user must have both create and update permission to call Update with allow_missing set to true.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The bare metal node pool resource name.
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the BareMetalNodePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the BareMetalNodePool message will be updated. Empty fields will be ignored unless a field mask is used.
     */
    updateMask?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BareMetalNodePool;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Unenroll
    extends StandardParameters {
    /**
     * If set to true, and the bare metal node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the bare metal node pool. If an etag is provided and does not match the current etag of node pool, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The name of the node pool to unenroll. Format: projects/{project\}/locations/{location\}/bareMetalClusters/{cluster\}/bareMetalNodePools/{nodepool\}
     */
    name?: string;
    /**
     * If set, only validate the request, but do not actually unenroll the node pool.
     */
    validateOnly?: boolean;
  }

  export class Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Baremetalnodepools$Operations$List
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

  export class Resource$Projects$Locations$Baremetalclusters$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Baremetalclusters$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Baremetalclusters$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Baremetalclusters$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Baremetalclusters$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Baremetalclusters$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Baremetalclusters$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Baremetalclusters$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Baremetalclusters$Operations$List
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

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
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
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
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

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Operations$Cancel
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

  export class Resource$Projects$Locations$Vmwareadminclusters {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Vmwareadminclusters$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Vmwareadminclusters$Operations(
          this.context
        );
    }

    /**
     * Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Enroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enroll(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$Enroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Enroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Enroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Enroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(callback: BodyResponseCallback<Schema$Operation>): void;
    enroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$Enroll
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
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$Enroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$Enroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareAdminClusters:enroll').replace(
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
     * Gets details of a single VMware admin cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VmwareAdminCluster>;
    get(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VmwareAdminCluster>,
      callback: BodyResponseCallback<Schema$VmwareAdminCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Get,
      callback: BodyResponseCallback<Schema$VmwareAdminCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$VmwareAdminCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$Get
        | BodyResponseCallback<Schema$VmwareAdminCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VmwareAdminCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VmwareAdminCluster>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VmwareAdminCluster>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
        createAPIRequest<Schema$VmwareAdminCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VmwareAdminCluster>(parameters);
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
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Lists VMware admin clusters in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVmwareAdminClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVmwareAdminClustersResponse>,
      callback: BodyResponseCallback<Schema$ListVmwareAdminClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$List,
      callback: BodyResponseCallback<Schema$ListVmwareAdminClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVmwareAdminClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$List
        | BodyResponseCallback<Schema$ListVmwareAdminClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVmwareAdminClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVmwareAdminClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVmwareAdminClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareAdminClusters').replace(
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
        createAPIRequest<Schema$ListVmwareAdminClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVmwareAdminClustersResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single VMware admin cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$Patch
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
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Unenrolls an existing VMware admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Unenroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unenroll(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$Unenroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Unenroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Unenroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Unenroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(callback: BodyResponseCallback<Schema$Operation>): void;
    unenroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$Unenroll
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
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$Unenroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$Unenroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:unenroll').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
  }

  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$Enroll
    extends StandardParameters {
    /**
     * Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnrollVmwareAdminClusterRequest;
  }
  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$Get
    extends StandardParameters {
    /**
     * Required. Name of the VMware admin cluster to be returned. Format: "projects/{project\}/locations/{location\}/vmwareAdminClusters/{vmware_admin_cluster\}"
     */
    name?: string;
    /**
     * View for VMware admin cluster. When `BASIC` is specified, only the cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$List
    extends StandardParameters {
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * View for VMware admin clusters. When `BASIC` is specified, only the admin cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete admin cluster configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$Patch
    extends StandardParameters {
    /**
     * Immutable. The VMware admin cluster resource name.
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the VMwareAdminCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VmwareAdminCluster message will be updated. Empty fields will be ignored unless a field mask is used.
     */
    updateMask?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VmwareAdminCluster;
  }
  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$Unenroll
    extends StandardParameters {
    /**
     * If set to true, and the VMware admin cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the VMware admin cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. Name of the VMware admin cluster to be unenrolled. Format: "projects/{project\}/locations/{location\}/vmwareAdminClusters/{cluster\}"
     */
    name?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;
  }

  export class Resource$Projects$Locations$Vmwareadminclusters$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareadminclusters$Operations$List
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

  export class Resource$Projects$Locations$Vmwareclusters {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Vmwareclusters$Operations;
    vmwareNodePools: Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Vmwareclusters$Operations(this.context);
      this.vmwareNodePools =
        new Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools(
          this.context
        );
    }

    /**
     * Creates a new VMware user cluster in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Create
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Vmwareclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareClusters').replace(
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
     * Deletes a single VMware Cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Delete
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Vmwareclusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Enroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enroll(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Enroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Enroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Enroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Enroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(callback: BodyResponseCallback<Schema$Operation>): void;
    enroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Enroll
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Enroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Vmwareclusters$Enroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareClusters:enroll').replace(
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
     * Gets details of a single VMware Cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VmwareCluster>;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VmwareCluster>,
      callback: BodyResponseCallback<Schema$VmwareCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Get,
      callback: BodyResponseCallback<Schema$VmwareCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$VmwareCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Get
        | BodyResponseCallback<Schema$VmwareCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VmwareCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VmwareCluster>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$VmwareCluster> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Vmwareclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
        createAPIRequest<Schema$VmwareCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VmwareCluster>(parameters);
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Lists VMware Clusters in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVmwareClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVmwareClustersResponse>,
      callback: BodyResponseCallback<Schema$ListVmwareClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$List,
      callback: BodyResponseCallback<Schema$ListVmwareClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVmwareClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$List
        | BodyResponseCallback<Schema$ListVmwareClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVmwareClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVmwareClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVmwareClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Vmwareclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareClusters').replace(
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
        createAPIRequest<Schema$ListVmwareClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVmwareClustersResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single VMware cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Patch
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Vmwareclusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Queries the VMware user cluster version config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Queryversionconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    queryVersionConfig(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Queryversionconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryVmwareVersionConfigResponse>;
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Queryversionconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Queryversionconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryVmwareVersionConfigResponse>,
      callback: BodyResponseCallback<Schema$QueryVmwareVersionConfigResponse>
    ): void;
    queryVersionConfig(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Queryversionconfig,
      callback: BodyResponseCallback<Schema$QueryVmwareVersionConfigResponse>
    ): void;
    queryVersionConfig(
      callback: BodyResponseCallback<Schema$QueryVmwareVersionConfigResponse>
    ): void;
    queryVersionConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Queryversionconfig
        | BodyResponseCallback<Schema$QueryVmwareVersionConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryVmwareVersionConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryVmwareVersionConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$QueryVmwareVersionConfigResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Queryversionconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Queryversionconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/vmwareClusters:queryVersionConfig'
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
        createAPIRequest<Schema$QueryVmwareVersionConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryVmwareVersionConfigResponse>(
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Unenrolls an existing VMware user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or UI.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Unenroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unenroll(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Unenroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Unenroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Unenroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Unenroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(callback: BodyResponseCallback<Schema$Operation>): void;
    unenroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Unenroll
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Unenroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Unenroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:unenroll').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
  }

  export interface Params$Resource$Projects$Locations$Vmwareclusters$Create
    extends StandardParameters {
    /**
     * Required. The parent of the project and location where this cluster is created in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;
    /**
     * User provided identifier that is used as part of the resource name; This value must be up to 40 characters and follow RFC-1123 (https://tools.ietf.org/html/rfc1123) format.
     */
    vmwareClusterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VmwareCluster;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Delete
    extends StandardParameters {
    /**
     * If set to true, and the VMware cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the VMware cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * If set to true, any node pools from the cluster will also be deleted.
     */
    force?: boolean;
    /**
     * If set to true, the deletion of a VMware user cluster resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's cluster resource and the on-prem admin cluster that hosts your user cluster is disconnected / unreachable or deleted. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP user cluster but an existing on-prem user cluster.
     */
    ignoreErrors?: boolean;
    /**
     * Required. Name of the VMware user cluster to be deleted. Format: "projects/{project\}/locations/{location\}/vmwareClusters/{vmware_cluster\}"
     */
    name?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Enroll
    extends StandardParameters {
    /**
     * Required. The parent of the project and location where the cluster is Enrolled in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnrollVmwareClusterRequest;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Get
    extends StandardParameters {
    /**
     * Required. Name of the VMware user cluster to be returned. Format: "projects/{project\}/locations/{location\}/vmwareClusters/{vmware_cluster\}"
     */
    name?: string;
    /**
     * View for VMware user cluster. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Vmwareclusters$List
    extends StandardParameters {
    /**
     * A resource filtering expression following https://google.aip.dev/160. When non-empty, only resource's whose attributes field matches the filter are returned.
     */
    filter?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * View for VMware clusters. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Patch
    extends StandardParameters {
    /**
     * Immutable. The VMware user cluster resource name.
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the VMwareCluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VmwareCluster message will be updated. Empty fields will be ignored unless a field mask is used.
     */
    updateMask?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VmwareCluster;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Queryversionconfig
    extends StandardParameters {
    /**
     * The admin cluster membership. This is the full resource name of the admin cluster's fleet membership. Format: "projects/{project\}/locations/{location\}/memberships/{membership\}"
     */
    'createConfig.adminClusterMembership'?: string;
    /**
     * The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project\}/locations/{location\}/vmwareAdminClusters/{vmware_admin_cluster\}"
     */
    'createConfig.adminClusterName'?: string;
    /**
     * Required. The parent of the project and location to query for version config. Format: "projects/{project\}/locations/{location\}"
     */
    parent?: string;
    /**
     * The user cluster resource name. This is the full resource name of the user cluster resource. Format: "projects/{project\}/locations/{location\}/vmwareClusters/{vmware_cluster\}"
     */
    'upgradeConfig.clusterName'?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Unenroll
    extends StandardParameters {
    /**
     * If set to true, and the VMware cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the VMware Cluster. If an etag is provided and does not match the current etag of the cluster, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * This is required if the cluster has any associated node pools. When set, any child node pools will also be unenrolled.
     */
    force?: boolean;
    /**
     * Required. Name of the VMware user cluster to be unenrolled. Format: "projects/{project\}/locations/{location\}/vmwareClusters/{vmware_cluster\}"
     */
    name?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;
  }

  export class Resource$Projects$Locations$Vmwareclusters$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Vmwareclusters$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Operations$List
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

  export class Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations(
          this.context
        );
    }

    /**
     * Creates a new VMware node pool in a given project, location and VMWare cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Create
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareNodePools').replace(
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
     * Deletes a single VMware node pool.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Delete
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Enrolls a VMware node pool to Anthos On-Prem API
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Enroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enroll(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Enroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Enroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Enroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Enroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enroll(callback: BodyResponseCallback<Schema$Operation>): void;
    enroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Enroll
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Enroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Enroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareNodePools:enroll').replace(
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
     * Gets details of a single VMware node pool.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VmwareNodePool>;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VmwareNodePool>,
      callback: BodyResponseCallback<Schema$VmwareNodePool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Get,
      callback: BodyResponseCallback<Schema$VmwareNodePool>
    ): void;
    get(callback: BodyResponseCallback<Schema$VmwareNodePool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Get
        | BodyResponseCallback<Schema$VmwareNodePool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VmwareNodePool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VmwareNodePool>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$VmwareNodePool> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
        createAPIRequest<Schema$VmwareNodePool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VmwareNodePool>(parameters);
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Lists VMware node pools in a given project, location and VMWare cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVmwareNodePoolsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVmwareNodePoolsResponse>,
      callback: BodyResponseCallback<Schema$ListVmwareNodePoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$List,
      callback: BodyResponseCallback<Schema$ListVmwareNodePoolsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVmwareNodePoolsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$List
        | BodyResponseCallback<Schema$ListVmwareNodePoolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVmwareNodePoolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVmwareNodePoolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVmwareNodePoolsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vmwareNodePools').replace(
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
        createAPIRequest<Schema$ListVmwareNodePoolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVmwareNodePoolsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single VMware node pool.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Patch
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
     * Unenrolls a VMware node pool to Anthos On-Prem API
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Unenroll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unenroll(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Unenroll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Unenroll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Unenroll,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Unenroll,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unenroll(callback: BodyResponseCallback<Schema$Operation>): void;
    unenroll(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Unenroll
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Unenroll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Unenroll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:unenroll').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
  }

  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this node pool will be created. projects/{project\}/locations/{location\}/vmwareClusters/{cluster\}
     */
    parent?: string;
    /**
     * If set, only validate the request, but do not actually create the node pool.
     */
    validateOnly?: boolean;
    /**
     * The ID to use for the node pool, which will become the final component of the node pool's resource name. This value must be up to 40 characters and follow RFC-1123 (https://tools.ietf.org/html/rfc1123) format. The value must not be permitted to be a UUID (or UUID-like: anything matching /^[0-9a-f]{8\}(-[0-9a-f]{4\}){3\}-[0-9a-f]{12\}$/i).
     */
    vmwareNodePoolId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VmwareNodePool;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Delete
    extends StandardParameters {
    /**
     * If set to true, and the VMware node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the VmwareNodePool. If an etag is provided and does not match the current etag of the node pool, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * If set to true, the deletion of a VMware node pool resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's node pool resource and you've already deleted the on-prem admin cluster that hosted your node pool. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP node pool but an existing on-prem node pool.
     */
    ignoreErrors?: boolean;
    /**
     * Required. The name of the node pool to delete. Format: projects/{project\}/locations/{location\}/vmwareClusters/{cluster\}/vmwareNodePools/{nodepool\}
     */
    name?: string;
    /**
     * If set, only validate the request, but do not actually delete the node pool.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Enroll
    extends StandardParameters {
    /**
     * Required. The parent resource where the node pool is enrolled in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnrollVmwareNodePoolRequest;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Get
    extends StandardParameters {
    /**
     * Required. The name of the node pool to retrieve. projects/{project\}/locations/{location\}/vmwareClusters/{cluster\}/vmwareNodePools/{nodepool\}
     */
    name?: string;
    /**
     * View for VMware node pool. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$List
    extends StandardParameters {
    /**
     * The maximum number of node pools to return. The service may return fewer than this value. If unspecified, at most 50 node pools will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListVmwareNodePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListVmwareNodePools` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of node pools. Format: projects/{project\}/locations/{location\}/vmwareClusters/{vmwareCluster\}
     */
    parent?: string;
    /**
     * View for VMware node pools. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of this node pool.
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the VMwareNodePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VMwareNodePool message will be updated. Empty fields will be ignored unless a field mask is used.
     */
    updateMask?: string;
    /**
     * Validate the request without actually doing any updates.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VmwareNodePool;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Unenroll
    extends StandardParameters {
    /**
     * If set to true, and the VMware node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
     */
    allowMissing?: boolean;
    /**
     * The current etag of the VMware node pool. If an etag is provided and does not match the current etag of node pool, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The name of the node pool to unenroll. Format: projects/{project\}/locations/{location\}/vmwareClusters/{cluster\}/vmwareNodePools/{nodepool\}
     */
    name?: string;
    /**
     * If set, only validate the request, but do not actually unenroll the node pool.
     */
    validateOnly?: boolean;
  }

  export class Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkeonprem.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Vmwareclusters$Vmwarenodepools$Operations$List
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
}
