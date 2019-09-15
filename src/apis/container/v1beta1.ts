/**
 * Copyright 2019 Google LLC
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

export namespace container_v1beta1 {
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
   * Kubernetes Engine API
   *
   * Builds and manages container-based applications, powered by the open source Kubernetes technology.
   *
   * @example
   * const {google} = require('googleapis');
   * const container = google.container('v1beta1');
   *
   * @namespace container
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Container
   */
  export class Container {
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
   * AcceleratorConfig represents a Hardware Accelerator request.
   */
  export interface Schema$AcceleratorConfig {
    /**
     * The number of the accelerator cards exposed to an instance.
     */
    acceleratorCount?: string | null;
    /**
     * The accelerator type resource name. List of supported accelerators [here](/compute/docs/gpus/#Introduction)
     */
    acceleratorType?: string | null;
  }
  /**
   * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
   */
  export interface Schema$AddonsConfig {
    /**
     * Configuration for the Cloud Run addon. The `IstioConfig` addon must be enabled in order to enable Cloud Run addon. This option can only be enabled at cluster creation time.
     */
    cloudRunConfig?: Schema$CloudRunConfig;
    /**
     * Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
     */
    horizontalPodAutoscaling?: Schema$HorizontalPodAutoscaling;
    /**
     * Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
     */
    httpLoadBalancing?: Schema$HttpLoadBalancing;
    /**
     * Configuration for Istio, an open platform to connect, manage, and secure microservices.
     */
    istioConfig?: Schema$IstioConfig;
    /**
     * Configuration for the Kubernetes Dashboard. This addon is deprecated, and will be disabled in 1.15. It is recommended to use the Cloud Console to manage and monitor your Kubernetes clusters, workloads and applications. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dashboards
     */
    kubernetesDashboard?: Schema$KubernetesDashboard;
    /**
     * Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
     */
    networkPolicyConfig?: Schema$NetworkPolicyConfig;
  }
  /**
   * Configuration for returning group information from authenticators.
   */
  export interface Schema$AuthenticatorGroupsConfig {
    /**
     * Whether this cluster should return group membership lookups during authentication using a group of security groups.
     */
    enabled?: boolean | null;
    /**
     * The name of the security group-of-groups to be used. Only relevant if enabled = true.
     */
    securityGroup?: string | null;
  }
  /**
   * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
   */
  export interface Schema$AutoprovisioningNodePoolDefaults {
    /**
     * Scopes that are used by NAP when creating node pools. If oauth_scopes are specified, service_account should be empty.
     */
    oauthScopes?: string[] | null;
    /**
     * The Google Cloud Platform Service Account to be used by the node VMs. If service_account is specified, scopes should be empty.
     */
    serviceAccount?: string | null;
  }
  /**
   * AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.
   */
  export interface Schema$AutoUpgradeOptions {
    /**
     * [Output only] This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    autoUpgradeStartTime?: string | null;
    /**
     * [Output only] This field is set when upgrades are about to commence with the description of the upgrade.
     */
    description?: string | null;
  }
  /**
   * Parameters for using BigQuery as the destination of resource usage export.
   */
  export interface Schema$BigQueryDestination {
    /**
     * The ID of a BigQuery Dataset.
     */
    datasetId?: string | null;
  }
  /**
   * Configuration for Binary Authorization.
   */
  export interface Schema$BinaryAuthorization {
    /**
     * Enable Binary Authorization for this cluster. If enabled, all container images will be validated by Google Binauthz.
     */
    enabled?: boolean | null;
  }
  /**
   * CancelOperationRequest cancels a single operation.
   */
  export interface Schema$CancelOperationRequest {
    /**
     * The name (project, location, operation id) of the operation to cancel. Specified in the format &#39;projects/x/locations/x/operations/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     */
    operationId?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * CidrBlock contains an optional name and one CIDR block.
   */
  export interface Schema$CidrBlock {
    /**
     * cidr_block must be specified in CIDR notation.
     */
    cidrBlock?: string | null;
    /**
     * display_name is an optional field for users to identify CIDR blocks.
     */
    displayName?: string | null;
  }
  /**
   * Configuration for client certificates on the cluster.
   */
  export interface Schema$ClientCertificateConfig {
    /**
     * Issue a client certificate.
     */
    issueClientCertificate?: boolean | null;
  }
  /**
   * Configuration options for the Cloud Run feature.
   */
  export interface Schema$CloudRunConfig {
    /**
     * Whether Cloud Run addon is enabled for this cluster.
     */
    disabled?: boolean | null;
  }
  /**
   * A Google Kubernetes Engine cluster.
   */
  export interface Schema$Cluster {
    /**
     * Configurations for the various addons available to run in the cluster.
     */
    addonsConfig?: Schema$AddonsConfig;
    /**
     * Configuration controlling RBAC group membership information.
     */
    authenticatorGroupsConfig?: Schema$AuthenticatorGroupsConfig;
    /**
     * Cluster-level autoscaling configuration.
     */
    autoscaling?: Schema$ClusterAutoscaling;
    /**
     * Configuration for Binary Authorization.
     */
    binaryAuthorization?: Schema$BinaryAuthorization;
    /**
     * The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
     */
    clusterIpv4Cidr?: string | null;
    /**
     * Which conditions caused the current cluster state.
     */
    conditions?: Schema$StatusCondition[];
    /**
     * [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createTime?: string | null;
    /**
     * [Output only] The current software version of the master endpoint.
     */
    currentMasterVersion?: string | null;
    /**
     * [Output only]  The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.
     */
    currentNodeCount?: number | null;
    /**
     * [Output only] Deprecated, use [NodePool.version](/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they&#39;re in the process of being upgraded, this reflects the minimum version of all nodes.
     */
    currentNodeVersion?: string | null;
    /**
     * Configuration of etcd encryption.
     */
    databaseEncryption?: Schema$DatabaseEncryption;
    /**
     * The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support.
     */
    defaultMaxPodsConstraint?: Schema$MaxPodsConstraint;
    /**
     * An optional description of this cluster.
     */
    description?: string | null;
    /**
     * Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.
     */
    enableKubernetesAlpha?: boolean | null;
    /**
     * Enable the ability to use Cloud TPUs in this cluster.
     */
    enableTpu?: boolean | null;
    /**
     * [Output only] The IP address of this cluster&#39;s master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`.  See the `masterAuth` property of this resource for username and password information.
     */
    endpoint?: string | null;
    /**
     * [Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    expireTime?: string | null;
    /**
     * The initial Kubernetes version for this cluster.  Valid versions are those found in validMasterVersions returned by getServerConfig.  The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion.  Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior:  - &quot;latest&quot;: picks the highest valid Kubernetes version - &quot;1.X&quot;: picks the highest valid patch+gke.N patch in the 1.X version - &quot;1.X.Y&quot;: picks the highest valid gke.N patch in the 1.X.Y version - &quot;1.X.Y-gke.N&quot;: picks an explicit Kubernetes version - &quot;&quot;,&quot;-&quot;: picks the default Kubernetes version
     */
    initialClusterVersion?: string | null;
    /**
     * The number of nodes to create in this cluster. You must ensure that your Compute Engine &lt;a href=&quot;/compute/docs/resource-quotas&quot;&gt;resource quota&lt;/a&gt; is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a &quot;node_pool&quot; object, since this configuration (along with the &quot;node_config&quot;) will be used to create a &quot;NodePool&quot; object with an auto-generated name. Do not use this and a node_pool at the same time.  This field is deprecated, use node_pool.initial_node_count instead.
     */
    initialNodeCount?: number | null;
    /**
     * Deprecated. Use node_pools.instance_group_urls.
     */
    instanceGroupUrls?: string[] | null;
    /**
     * Configuration for cluster IP allocation.
     */
    ipAllocationPolicy?: Schema$IPAllocationPolicy;
    /**
     * The fingerprint of the set of labels for this cluster.
     */
    labelFingerprint?: string | null;
    /**
     * Configuration for the legacy ABAC authorization mode.
     */
    legacyAbac?: Schema$LegacyAbac;
    /**
     * [Output only] The name of the Google Compute Engine [zone](/compute/docs/regions-zones/regions-zones#available) or [region](/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
     */
    location?: string | null;
    /**
     * The list of Google Compute Engine [zones](/compute/docs/zones#available) in which the cluster&#39;s nodes should be located.
     */
    locations?: string[] | null;
    /**
     * The logging service the cluster should use to write logs. Currently available options:  * `logging.googleapis.com` - the Google Cloud Logging service. * `none` - no logs will be exported from the cluster. * if left as an empty string,`logging.googleapis.com` will be used.
     */
    loggingService?: string | null;
    /**
     * Configure the maintenance policy for this cluster.
     */
    maintenancePolicy?: Schema$MaintenancePolicy;
    /**
     * The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to &quot;admin&quot;, a random password will be generated, and a client certificate will be issued.
     */
    masterAuth?: Schema$MasterAuth;
    /**
     * The configuration options for master authorized networks feature.
     */
    masterAuthorizedNetworksConfig?: Schema$MasterAuthorizedNetworksConfig;
    /**
     * The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead.
     */
    masterIpv4CidrBlock?: string | null;
    /**
     * The monitoring service the cluster should use to write metrics. Currently available options:  * `monitoring.googleapis.com` - the Google Cloud Monitoring service. * `none` - no metrics will be exported from the cluster. * if left as an empty string, `monitoring.googleapis.com` will be used.
     */
    monitoringService?: string | null;
    /**
     * The name of this cluster. The name must be unique within this project and zone, and can be up to 40 characters with the following restrictions:  * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.
     */
    name?: string | null;
    /**
     * The name of the Google Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name.
     */
    network?: string | null;
    /**
     * Configuration for cluster networking.
     */
    networkConfig?: Schema$NetworkConfig;
    /**
     * Configuration options for the NetworkPolicy feature.
     */
    networkPolicy?: Schema$NetworkPolicy;
    /**
     * Parameters used in creating the cluster&#39;s nodes. For requests, this field should only be used in lieu of a &quot;node_pool&quot; object, since this configuration (along with the &quot;initial_node_count&quot;) will be used to create a &quot;NodePool&quot; object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`)  If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead.
     */
    nodeConfig?: Schema$NodeConfig;
    /**
     * [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.
     */
    nodeIpv4CidrSize?: number | null;
    /**
     * The node pools associated with this cluster. This field should not be set if &quot;node_config&quot; or &quot;initial_node_count&quot; are specified.
     */
    nodePools?: Schema$NodePool[];
    /**
     * Configuration for the PodSecurityPolicy feature.
     */
    podSecurityPolicyConfig?: Schema$PodSecurityPolicyConfig;
    /**
     * If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead.
     */
    privateCluster?: boolean | null;
    /**
     * Configuration for private cluster.
     */
    privateClusterConfig?: Schema$PrivateClusterConfig;
    /**
     * Release channel configuration.
     */
    releaseChannel?: Schema$ReleaseChannel;
    /**
     * The resource labels for the cluster to use to annotate any related Google Compute Engine resources.
     */
    resourceLabels?: {[key: string]: string} | null;
    /**
     * Configuration for exporting resource usages. Resource usage export is disabled when this config unspecified.
     */
    resourceUsageExportConfig?: Schema$ResourceUsageExportConfig;
    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string | null;
    /**
     * [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.
     */
    servicesIpv4Cidr?: string | null;
    /**
     * Shielded Nodes configuration.
     */
    shieldedNodes?: Schema$ShieldedNodes;
    /**
     * [Output only] The current status of this cluster.
     */
    status?: string | null;
    /**
     * [Output only] Additional information about the current status of this cluster, if available.
     */
    statusMessage?: string | null;
    /**
     * The name of the Google Compute Engine [subnetwork](/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name.
     */
    subnetwork?: string | null;
    /**
     * Cluster tier settings.
     */
    tierSettings?: Schema$TierSettings;
    /**
     * [Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`).
     */
    tpuIpv4CidrBlock?: string | null;
    /**
     * Cluster-level Vertical Pod Autoscaling configuration.
     */
    verticalPodAutoscaling?: Schema$VerticalPodAutoscaling;
    /**
     * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
     */
    workloadIdentityConfig?: Schema$WorkloadIdentityConfig;
    /**
     * [Output only] The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.
     */
    zone?: string | null;
  }
  /**
   * ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
   */
  export interface Schema$ClusterAutoscaling {
    /**
     * The list of Google Compute Engine [zones](/compute/docs/zones#available) in which the NodePool&#39;s nodes can be created by NAP.
     */
    autoprovisioningLocations?: string[] | null;
    /**
     * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
     */
    autoprovisioningNodePoolDefaults?: Schema$AutoprovisioningNodePoolDefaults;
    /**
     * Enables automatic node pool creation and deletion.
     */
    enableNodeAutoprovisioning?: boolean | null;
    /**
     * Contains global constraints regarding minimum and maximum amount of resources in the cluster.
     */
    resourceLimits?: Schema$ResourceLimit[];
  }
  /**
   * ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
   */
  export interface Schema$ClusterUpdate {
    /**
     * Configurations for the various addons available to run in the cluster.
     */
    desiredAddonsConfig?: Schema$AddonsConfig;
    /**
     * The desired configuration options for the Binary Authorization feature.
     */
    desiredBinaryAuthorization?: Schema$BinaryAuthorization;
    /**
     * Cluster-level autoscaling configuration.
     */
    desiredClusterAutoscaling?: Schema$ClusterAutoscaling;
    /**
     * Configuration of etcd encryption.
     */
    desiredDatabaseEncryption?: Schema$DatabaseEncryption;
    /**
     * The desired image type for the node pool. NOTE: Set the &quot;desired_node_pool&quot; field as well.
     */
    desiredImageType?: string | null;
    /**
     * The desired config of Intra-node visibility.
     */
    desiredIntraNodeVisibilityConfig?: Schema$IntraNodeVisibilityConfig;
    /**
     * The desired list of Google Compute Engine [zones](/compute/docs/zones#available) in which the cluster&#39;s nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed.  This list must always include the cluster&#39;s primary zone.
     */
    desiredLocations?: string[] | null;
    /**
     * The logging service the cluster should use to write metrics. Currently available options:  * &quot;logging.googleapis.com/kubernetes&quot; - the Google Cloud Logging service with Kubernetes-native resource model in Stackdriver * &quot;logging.googleapis.com&quot; - the Google Cloud Logging service * &quot;none&quot; - no logs will be exported from the cluster
     */
    desiredLoggingService?: string | null;
    /**
     * The desired configuration options for master authorized networks feature.
     */
    desiredMasterAuthorizedNetworksConfig?: Schema$MasterAuthorizedNetworksConfig;
    /**
     * The Kubernetes version to change the master to. The only valid value is the latest supported version.  Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior:  - &quot;latest&quot;: picks the highest valid Kubernetes version - &quot;1.X&quot;: picks the highest valid patch+gke.N patch in the 1.X version - &quot;1.X.Y&quot;: picks the highest valid gke.N patch in the 1.X.Y version - &quot;1.X.Y-gke.N&quot;: picks an explicit Kubernetes version - &quot;-&quot;: picks the default Kubernetes version
     */
    desiredMasterVersion?: string | null;
    /**
     * The monitoring service the cluster should use to write metrics. Currently available options:  * &quot;monitoring.googleapis.com/kubernetes&quot; - the Google Cloud Monitoring service with Kubernetes-native resource model in Stackdriver * &quot;monitoring.googleapis.com&quot; - the Google Cloud Monitoring service * &quot;none&quot; - no metrics will be exported from the cluster
     */
    desiredMonitoringService?: string | null;
    /**
     * Autoscaler configuration for the node pool specified in desired_node_pool_id. If there is only one pool in the cluster and desired_node_pool_id is not provided then the change applies to that single node pool.
     */
    desiredNodePoolAutoscaling?: Schema$NodePoolAutoscaling;
    /**
     * The node pool to be upgraded. This field is mandatory if &quot;desired_node_version&quot;, &quot;desired_image_family&quot;, &quot;desired_node_pool_autoscaling&quot;, or &quot;desired_workload_metadata_config&quot; is specified and there is more than one node pool on the cluster.
     */
    desiredNodePoolId?: string | null;
    /**
     * The Kubernetes version to change the nodes to (typically an upgrade).  Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior:  - &quot;latest&quot;: picks the highest valid Kubernetes version - &quot;1.X&quot;: picks the highest valid patch+gke.N patch in the 1.X version - &quot;1.X.Y&quot;: picks the highest valid gke.N patch in the 1.X.Y version - &quot;1.X.Y-gke.N&quot;: picks an explicit Kubernetes version - &quot;-&quot;: picks the Kubernetes master version
     */
    desiredNodeVersion?: string | null;
    /**
     * The desired configuration options for the PodSecurityPolicy feature.
     */
    desiredPodSecurityPolicyConfig?: Schema$PodSecurityPolicyConfig;
    /**
     * The desired private cluster configuration.
     */
    desiredPrivateClusterConfig?: Schema$PrivateClusterConfig;
    /**
     * The desired configuration for exporting resource usage.
     */
    desiredResourceUsageExportConfig?: Schema$ResourceUsageExportConfig;
    /**
     * Configuration for Shielded Nodes.
     */
    desiredShieldedNodes?: Schema$ShieldedNodes;
    /**
     * Cluster-level Vertical Pod Autoscaling configuration.
     */
    desiredVerticalPodAutoscaling?: Schema$VerticalPodAutoscaling;
    /**
     * Configuration for Workload Identity.
     */
    desiredWorkloadIdentityConfig?: Schema$WorkloadIdentityConfig;
  }
  /**
   * CompleteIPRotationRequest moves the cluster master back into single-IP mode.
   */
  export interface Schema$CompleteIPRotationRequest {
    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * Parameters for controlling consumption metering.
   */
  export interface Schema$ConsumptionMeteringConfig {
    /**
     * Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records.
     */
    enabled?: boolean | null;
  }
  /**
   * CreateClusterRequest creates a cluster.
   */
  export interface Schema$CreateClusterRequest {
    /**
     * A [cluster resource](/container-engine/reference/rest/v1beta1/projects.zones.clusters)
     */
    cluster?: Schema$Cluster;
    /**
     * The parent (project and location) where the cluster will be created. Specified in the format &#39;projects/x/locations/*&#39;.
     */
    parent?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string | null;
  }
  /**
   * CreateNodePoolRequest creates a node pool for a cluster.
   */
  export interface Schema$CreateNodePoolRequest {
    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string | null;
    /**
     * The node pool to create.
     */
    nodePool?: Schema$NodePool;
    /**
     * The parent (project, location, cluster id) where the node pool will be created. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    parent?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string | null;
  }
  /**
   * Time window specified for daily maintenance operations.
   */
  export interface Schema$DailyMaintenanceWindow {
    /**
     * [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario.
     */
    duration?: string | null;
    /**
     * Time within the maintenance window to start the maintenance operations. It must be in format &quot;HH:MM&quot;, where HH : [00-23] and MM : [00-59] GMT.
     */
    startTime?: string | null;
  }
  /**
   * Configuration of etcd encryption.
   */
  export interface Schema$DatabaseEncryption {
    /**
     * Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key
     */
    keyName?: string | null;
    /**
     * Denotes the state of etcd encryption.
     */
    state?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * FeatureConfig is the configuration for a specific feature including the definition of the feature as well as the tier in which it resides.
   */
  export interface Schema$FeatureConfig {
    /**
     * The feature that is being configured with this value.
     */
    feature?: string | null;
    /**
     * The tier in which the configured feature resides.
     */
    tier?: string | null;
  }
  /**
   * GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517
   */
  export interface Schema$GetJSONWebKeysResponse {
    /**
     * OnePlatform automatically extracts this field and uses it to set the HTTP Cache-Control header.
     */
    cacheHeader?: Schema$HttpCacheControlResponseHeader;
    /**
     * The public component of the keys used by the cluster to sign token requests.
     */
    keys?: Schema$Jwk[];
  }
  /**
   * GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
   */
  export interface Schema$GetOpenIDConfigResponse {
    /**
     * OnePlatform automatically extracts this field and uses it to set the HTTP Cache-Control header.
     */
    cacheHeader?: Schema$HttpCacheControlResponseHeader;
    /**
     * Supported claims.
     */
    claims_supported?: string[] | null;
    /**
     * Supported grant types.
     */
    grant_types?: string[] | null;
    /**
     * supported ID Token signing Algorithms.
     */
    id_token_signing_alg_values_supported?: string[] | null;
    /**
     * OIDC Issuer.
     */
    issuer?: string | null;
    /**
     * JSON Web Key uri.
     */
    jwks_uri?: string | null;
    /**
     * Supported response types.
     */
    response_types_supported?: string[] | null;
    /**
     * Supported subject types.
     */
    subject_types_supported?: string[] | null;
  }
  /**
   * Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
   */
  export interface Schema$HorizontalPodAutoscaling {
    /**
     * Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that a Heapster pod is running in the cluster, which is also used by the Cloud Monitoring service.
     */
    disabled?: boolean | null;
  }
  /**
   * RFC-2616: cache control support
   */
  export interface Schema$HttpCacheControlResponseHeader {
    /**
     * 14.6 response cache age, in seconds since the response is generated
     */
    age?: string | null;
    /**
     * 14.9 request and response directives
     */
    directive?: string | null;
    /**
     * 14.21 response cache expires, in RFC 1123 date format
     */
    expires?: string | null;
  }
  /**
   * Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
   */
  export interface Schema$HttpLoadBalancing {
    /**
     * Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers.
     */
    disabled?: boolean | null;
  }
  /**
   * IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.
   */
  export interface Schema$IntraNodeVisibilityConfig {
    /**
     * Enables intra node visibility for this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * Configuration for controlling how IPs are allocated in the cluster.
   */
  export interface Schema$IPAllocationPolicy {
    /**
     * If true, allow allocation of cluster CIDR ranges that overlap with certain kinds of network routes. By default we do not allow cluster CIDR ranges to intersect with any user declared routes. With allow_route_overlap == true, we allow overlapping with CIDR ranges that are larger than the cluster CIDR range.  If this field is set to true, then cluster and services CIDRs must be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1) When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and    `services_ipv4_cidr_block` must be fully-specified. 2) When `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be    fully-specified.
     */
    allowRouteOverlap?: boolean | null;
    /**
     * This field is deprecated, use cluster_ipv4_cidr_block.
     */
    clusterIpv4Cidr?: string | null;
    /**
     * The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank.  This field is only applicable when `use_ip_aliases` is true.  Set to blank to have a range chosen with the default size.  Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask.  Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
     */
    clusterIpv4CidrBlock?: string | null;
    /**
     * The name of the secondary range to be used for the cluster CIDR block.  The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork.  This field is only applicable with use_ip_aliases and create_subnetwork is false.
     */
    clusterSecondaryRangeName?: string | null;
    /**
     * Whether a new subnetwork will be created automatically for the cluster.  This field is only applicable when `use_ip_aliases` is true.
     */
    createSubnetwork?: boolean | null;
    /**
     * This field is deprecated, use node_ipv4_cidr_block.
     */
    nodeIpv4Cidr?: string | null;
    /**
     * The IP address range of the instance IPs in this cluster.  This is applicable only if `create_subnetwork` is true.  Set to blank to have a range chosen with the default size.  Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask.  Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
     */
    nodeIpv4CidrBlock?: string | null;
    /**
     * This field is deprecated, use services_ipv4_cidr_block.
     */
    servicesIpv4Cidr?: string | null;
    /**
     * The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size.  This field is only applicable when `use_ip_aliases` is true.  Set to blank to have a range chosen with the default size.  Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask.  Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
     */
    servicesIpv4CidrBlock?: string | null;
    /**
     * The name of the secondary range to be used as for the services CIDR block.  The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork.  This field is only applicable with use_ip_aliases and create_subnetwork is false.
     */
    servicesSecondaryRangeName?: string | null;
    /**
     * A custom subnetwork name to be used if `create_subnetwork` is true.  If this field is empty, then an automatic name will be chosen for the new subnetwork.
     */
    subnetworkName?: string | null;
    /**
     * The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size.  This field is only applicable when `use_ip_aliases` is true.  If unspecified, the range will use the default size.  Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask.  Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
     */
    tpuIpv4CidrBlock?: string | null;
    /**
     * Whether alias IPs will be used for pod IPs in the cluster.
     */
    useIpAliases?: boolean | null;
  }
  /**
   * Configuration options for Istio addon.
   */
  export interface Schema$IstioConfig {
    /**
     * The specified Istio auth mode, either none, or mutual TLS.
     */
    auth?: string | null;
    /**
     * Whether Istio is enabled for this cluster.
     */
    disabled?: boolean | null;
  }
  /**
   * Jwk is a JSON Web Key as specified in RFC 7517
   */
  export interface Schema$Jwk {
    /**
     * Algorithm.
     */
    alg?: string | null;
    /**
     * Used for ECDSA keys.
     */
    crv?: string | null;
    /**
     * Used for RSA keys.
     */
    e?: string | null;
    /**
     * Key ID.
     */
    kid?: string | null;
    /**
     * Key Type.
     */
    kty?: string | null;
    /**
     * Used for RSA keys.
     */
    n?: string | null;
    /**
     * Permitted uses for the public keys.
     */
    use?: string | null;
    /**
     * Used for ECDSA keys.
     */
    x?: string | null;
    /**
     * Used for ECDSA keys.
     */
    y?: string | null;
  }
  /**
   * Configuration for the Kubernetes Dashboard.
   */
  export interface Schema$KubernetesDashboard {
    /**
     * Whether the Kubernetes Dashboard is enabled for this cluster.
     */
    disabled?: boolean | null;
  }
  /**
   * Configuration for the legacy Attribute Based Access Control authorization mode.
   */
  export interface Schema$LegacyAbac {
    /**
     * Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM.
     */
    enabled?: boolean | null;
  }
  /**
   * ListClustersResponse is the result of ListClustersRequest.
   */
  export interface Schema$ListClustersResponse {
    /**
     * A list of clusters in the project in the specified zone, or across all ones.
     */
    clusters?: Schema$Cluster[];
    /**
     * If any zones are listed here, the list of clusters returned may be missing those zones.
     */
    missingZones?: string[] | null;
  }
  /**
   * ListLocationsResponse returns the list of all GKE locations and their recommendation state.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A full list of GKE locations.
     */
    locations?: Schema$Location[];
    /**
     * Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse).
     */
    nextPageToken?: string | null;
  }
  /**
   * ListNodePoolsResponse is the result of ListNodePoolsRequest.
   */
  export interface Schema$ListNodePoolsResponse {
    /**
     * A list of node pools for a cluster.
     */
    nodePools?: Schema$NodePool[];
  }
  /**
   * ListOperationsResponse is the result of ListOperationsRequest.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * If any zones are listed here, the list of operations returned may be missing the operations from those zones.
     */
    missingZones?: string[] | null;
    /**
     * A list of operations in the project in the specified zone.
     */
    operations?: Schema$Operation[];
  }
  /**
   * ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.
   */
  export interface Schema$ListUsableSubnetworksResponse {
    /**
     * This token allows you to get the next page of results for list requests. If the number of results is larger than `page_size`, use the `next_page_token` as a value for the query parameter `page_token` in the next request. The value will become empty when there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of usable subnetworks in the specified network project.
     */
    subnetworks?: Schema$UsableSubnetwork[];
  }
  /**
   * Location returns the location name, and if the location is recommended for GKE cluster scheduling.
   */
  export interface Schema$Location {
    /**
     * Contains the name of the resource requested. Specified in the format &#39;projects/x/locations/*&#39;.
     */
    name?: string | null;
    /**
     * Whether the location is recomended for GKE cluster scheduling.
     */
    recommended?: boolean | null;
    /**
     * Contains the type of location this Location is for. Regional or Zonal.
     */
    type?: string | null;
  }
  /**
   * MaintenancePolicy defines the maintenance policy to be used for the cluster.
   */
  export interface Schema$MaintenancePolicy {
    /**
     * Specifies the maintenance window in which maintenance may be performed.
     */
    window?: Schema$MaintenanceWindow;
  }
  /**
   * MaintenanceWindow defines the maintenance window to be used for the cluster.
   */
  export interface Schema$MaintenanceWindow {
    /**
     * DailyMaintenanceWindow specifies a daily maintenance operation window.
     */
    dailyMaintenanceWindow?: Schema$DailyMaintenanceWindow;
  }
  /**
   * The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
   */
  export interface Schema$MasterAuth {
    /**
     * [Output only] Base64-encoded public certificate used by clients to authenticate to the cluster endpoint.
     */
    clientCertificate?: string | null;
    /**
     * Configuration for client certificate authentication on the cluster. For clusters before v1.12, if no configuration is specified, a client certificate is issued.
     */
    clientCertificateConfig?: Schema$ClientCertificateConfig;
    /**
     * [Output only] Base64-encoded private key used by clients to authenticate to the cluster endpoint.
     */
    clientKey?: string | null;
    clusterCaCertificate?: string | null;
    /**
     * The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password.  If a password is provided for cluster creation, username must be non-empty.
     */
    password?: string | null;
    /**
     * The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string).
     */
    username?: string | null;
  }
  /**
   * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
   */
  export interface Schema$MasterAuthorizedNetworksConfig {
    /**
     * cidr_blocks define up to 10 external networks that could access Kubernetes master through HTTPS.
     */
    cidrBlocks?: Schema$CidrBlock[];
    /**
     * Whether or not master authorized networks is enabled.
     */
    enabled?: boolean | null;
  }
  /**
   * Constraints applied to pods.
   */
  export interface Schema$MaxPodsConstraint {
    /**
     * Constraint enforced on the max num of pods per node.
     */
    maxPodsPerNode?: string | null;
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
     * Metric name, required. e.g., &quot;nodes total&quot;, &quot;percent done&quot;
     */
    name?: string | null;
    /**
     * For metrics with custom values (ratios, visual progress, etc.).
     */
    stringValue?: string | null;
  }
  /**
   * NetworkConfig reports the relative names of network &amp; subnetwork.
   */
  export interface Schema$NetworkConfig {
    /**
     * Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
     */
    enableIntraNodeVisibility?: boolean | null;
    /**
     * Output only. The relative name of the Google Compute Engine network(/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network
     */
    network?: string | null;
    /**
     * Output only. The relative name of the Google Compute Engine [subnetwork](/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
     */
    subnetwork?: string | null;
  }
  /**
   * Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
   */
  export interface Schema$NetworkPolicy {
    /**
     * Whether network policy is enabled on the cluster.
     */
    enabled?: boolean | null;
    /**
     * The selected network policy provider.
     */
    provider?: string | null;
  }
  /**
   * Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
   */
  export interface Schema$NetworkPolicyConfig {
    /**
     * Whether NetworkPolicy is enabled for this cluster.
     */
    disabled?: boolean | null;
  }
  /**
   * Parameters that describe the nodes in a cluster.
   */
  export interface Schema$NodeConfig {
    /**
     * A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs.
     */
    accelerators?: Schema$AcceleratorConfig[];
    /**
     * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.  If unspecified, the default disk size is 100GB.
     */
    diskSizeGb?: number | null;
    /**
     * Type of the disk attached to each node (e.g. &#39;pd-standard&#39; or &#39;pd-ssd&#39;)  If unspecified, the default disk type is &#39;pd-standard&#39;
     */
    diskType?: string | null;
    /**
     * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
     */
    imageType?: string | null;
    /**
     * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it&#39;s best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
     */
    labels?: {[key: string]: string} | null;
    /**
     * The number of local SSD disks to be attached to the node.  The limit for this value is dependant upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd#local_ssd_limits for more information.
     */
    localSsdCount?: number | null;
    /**
     * The name of a Google Compute Engine [machine type](/compute/docs/machine-types) (e.g. `n1-standard-1`).  If unspecified, the default machine type is `n1-standard-1`.
     */
    machineType?: string | null;
    /**
     * The metadata key/value pairs assigned to instances in the cluster.  Keys must conform to the regexp [a-zA-Z0-9-_]+ and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys:  &quot;cluster-location&quot;  &quot;cluster-name&quot;  &quot;cluster-uid&quot;  &quot;configure-sh&quot;  &quot;containerd-configure-sh&quot;  &quot;enable-oslogin&quot;  &quot;gci-ensure-gke-docker&quot;  &quot;gci-update-strategy&quot;  &quot;instance-template&quot;  &quot;kube-env&quot;  &quot;startup-script&quot;  &quot;user-data&quot;  &quot;disable-address-manager&quot;  &quot;windows-startup-script-ps1&quot;  &quot;common-psm1&quot;  &quot;k8s-node-setup-psm1&quot;  &quot;install-ssh-psm1&quot;  &quot;user-profile-psm1&quot;  &quot;serial-port-logging-enable&quot; Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value&#39;s size must be less than or equal to 32 KB.  The total size of all keys and values must be less than 512 KB.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as &lt;code&gt;minCpuPlatform: &amp;quot;Intel Haswell&amp;quot;&lt;/code&gt; or &lt;code&gt;minCpuPlatform: &amp;quot;Intel Sandy Bridge&amp;quot;&lt;/code&gt;. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
     */
    minCpuPlatform?: string | null;
    /**
     * The set of Google API scopes to be made available on all of the node VMs under the &quot;default&quot; service account.  The following scopes are recommended, but not required, and by default are not included:  * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](/container-registry/)).  If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.
     */
    oauthScopes?: string[] | null;
    /**
     * Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more inforamtion about preemptible VM instances.
     */
    preemptible?: boolean | null;
    /**
     * Sandbox configuration for this node.
     */
    sandboxConfig?: Schema$SandboxConfig;
    /**
     * The Google Cloud Platform Service Account to be used by the node VMs. If no Service Account is specified, the &quot;default&quot; service account is used.
     */
    serviceAccount?: string | null;
    /**
     * Shielded Instance options.
     */
    shieldedInstanceConfig?: Schema$ShieldedInstanceConfig;
    /**
     * The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035.
     */
    tags?: string[] | null;
    /**
     * List of kubernetes taints to be applied to each node.  For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
     */
    taints?: Schema$NodeTaint[];
    /**
     * The workload metadata configuration for this node.
     */
    workloadMetadataConfig?: Schema$WorkloadMetadataConfig;
  }
  /**
   * NodeManagement defines the set of node management services turned on for the node pool.
   */
  export interface Schema$NodeManagement {
    /**
     * Whether the nodes will be automatically repaired.
     */
    autoRepair?: boolean | null;
    /**
     * Whether the nodes will be automatically upgraded.
     */
    autoUpgrade?: boolean | null;
    /**
     * Specifies the Auto Upgrade knobs for the node pool.
     */
    upgradeOptions?: Schema$AutoUpgradeOptions;
  }
  /**
   * NodePool contains the name and configuration for a cluster&#39;s node pool. Node pools are a set of nodes (i.e. VM&#39;s), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
   */
  export interface Schema$NodePool {
    /**
     * Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present.
     */
    autoscaling?: Schema$NodePoolAutoscaling;
    /**
     * Which conditions caused the current node pool state.
     */
    conditions?: Schema$StatusCondition[];
    /**
     * The node configuration of the pool.
     */
    config?: Schema$NodeConfig;
    /**
     * The initial node count for the pool. You must ensure that your Compute Engine &lt;a href=&quot;/compute/docs/resource-quotas&quot;&gt;resource quota&lt;/a&gt; is sufficient for this number of instances. You must also have available firewall and routes quota.
     */
    initialNodeCount?: number | null;
    /**
     * [Output only] The resource URLs of the [managed instance groups](/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool.
     */
    instanceGroupUrls?: string[] | null;
    /**
     * The list of Google Compute Engine [zones](/compute/docs/zones#available) in which the NodePool&#39;s nodes should be located.
     */
    locations?: string[] | null;
    /**
     * NodeManagement configuration for this NodePool.
     */
    management?: Schema$NodeManagement;
    /**
     * The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
     */
    maxPodsConstraint?: Schema$MaxPodsConstraint;
    /**
     * The name of the node pool.
     */
    name?: string | null;
    /**
     * [Output only] The pod CIDR block size per node in this node pool.
     */
    podIpv4CidrSize?: number | null;
    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string | null;
    /**
     * [Output only] The status of the nodes in this pool instance.
     */
    status?: string | null;
    /**
     * [Output only] Additional information about the current status of this node pool instance, if available.
     */
    statusMessage?: string | null;
    /**
     * The version of the Kubernetes of this node.
     */
    version?: string | null;
  }
  /**
   * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
   */
  export interface Schema$NodePoolAutoscaling {
    /**
     * Can this node pool be deleted automatically.
     */
    autoprovisioned?: boolean | null;
    /**
     * Is autoscaling enabled for this node pool.
     */
    enabled?: boolean | null;
    /**
     * Maximum number of nodes in the NodePool. Must be &gt;= min_node_count. There has to enough quota to scale up the cluster.
     */
    maxNodeCount?: number | null;
    /**
     * Minimum number of nodes in the NodePool. Must be &gt;= 1 and &lt;= max_node_count.
     */
    minNodeCount?: number | null;
  }
  /**
   * Kubernetes taint is comprised of three fields: key, value, and effect. Effect can only be one of three types:  NoSchedule, PreferNoSchedule or NoExecute.  For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
   */
  export interface Schema$NodeTaint {
    /**
     * Effect for taint.
     */
    effect?: string | null;
    /**
     * Key for taint.
     */
    key?: string | null;
    /**
     * Value for taint.
     */
    value?: string | null;
  }
  /**
   * This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.
   */
  export interface Schema$Operation {
    /**
     * Which conditions caused the current cluster state.
     */
    clusterConditions?: Schema$StatusCondition[];
    /**
     * Detailed operation progress, if available.
     */
    detail?: string | null;
    /**
     * [Output only] The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    endTime?: string | null;
    /**
     * [Output only] The name of the Google Compute Engine [zone](/compute/docs/regions-zones/regions-zones#available) or [region](/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
     */
    location?: string | null;
    /**
     * The server-assigned ID for the operation.
     */
    name?: string | null;
    /**
     * Which conditions caused the current node pool state.
     */
    nodepoolConditions?: Schema$StatusCondition[];
    /**
     * The operation type.
     */
    operationType?: string | null;
    /**
     * [Output only] Progress information for an operation.
     */
    progress?: Schema$OperationProgress;
    /**
     * Server-defined URL for the resource.
     */
    selfLink?: string | null;
    /**
     * [Output only] The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    startTime?: string | null;
    /**
     * The current status of the operation.
     */
    status?: string | null;
    /**
     * If an error has occurred, a textual description of the error.
     */
    statusMessage?: string | null;
    /**
     * Server-defined URL for the target of the operation.
     */
    targetLink?: string | null;
    /**
     * The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead.
     */
    zone?: string | null;
  }
  /**
   * Information about operation (or operation stage) progress.
   */
  export interface Schema$OperationProgress {
    /**
     * Progress metric bundle, for example:   metrics: [{name: &quot;nodes done&quot;,     int_value: 15},             {name: &quot;nodes total&quot;,    int_value: 32}] or   metrics: [{name: &quot;progress&quot;,       double_value: 0.56},             {name: &quot;progress scale&quot;, double_value: 1.0}]
     */
    metrics?: Schema$Metric[];
    /**
     * A non-parameterized string describing an operation stage. Unset for single-stage operations.
     */
    name?: string | null;
    /**
     * Substages of an operation or a stage.
     */
    stages?: Schema$OperationProgress[];
    /**
     * Status of an operation stage. Unset for single-stage operations.
     */
    status?: string | null;
  }
  /**
   * Configuration for the PodSecurityPolicy feature.
   */
  export interface Schema$PodSecurityPolicyConfig {
    /**
     * Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.
     */
    enabled?: boolean | null;
  }
  /**
   * PremiumConfig is the configuration for all premium features and tiers.
   */
  export interface Schema$PremiumConfig {
    /**
     * The features that GKE provides.
     */
    features?: Schema$FeatureConfig[];
    /**
     * The tiers that are part of the premium offering.
     */
    tiers?: Schema$TierConfig[];
  }
  /**
   * Configuration options for private clusters.
   */
  export interface Schema$PrivateClusterConfig {
    /**
     * Whether to enable route sharing over the network peering.
     */
    enablePeeringRouteSharing?: boolean | null;
    /**
     * Whether the master&#39;s internal IP address is used as the cluster endpoint.
     */
    enablePrivateEndpoint?: boolean | null;
    /**
     * Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.
     */
    enablePrivateNodes?: boolean | null;
    /**
     * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster&#39;s network.
     */
    masterIpv4CidrBlock?: string | null;
    /**
     * Output only. The internal IP address of this cluster&#39;s master endpoint.
     */
    privateEndpoint?: string | null;
    /**
     * Output only. The external IP address of this cluster&#39;s master endpoint.
     */
    publicEndpoint?: string | null;
  }
  /**
   * ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk and frequency of updates.  When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled. Updates to version related fields (e.g. current_master_version) return an error.
   */
  export interface Schema$ReleaseChannel {
    /**
     * channel specifies which release channel the cluster is subscribed to.
     */
    channel?: string | null;
  }
  /**
   * ReleaseChannelConfig exposes configuration for a release channel.
   */
  export interface Schema$ReleaseChannelConfig {
    /**
     * The release channel this configuration applies to.
     */
    channel?: string | null;
    /**
     * The default version for newly created clusters on the channel.
     */
    defaultVersion?: string | null;
  }
  /**
   * Contains information about amount of some resource in the cluster. For memory, value should be in GB.
   */
  export interface Schema$ResourceLimit {
    /**
     * Maximum amount of the resource in the cluster.
     */
    maximum?: string | null;
    /**
     * Minimum amount of the resource in the cluster.
     */
    minimum?: string | null;
    /**
     * Resource name &quot;cpu&quot;, &quot;memory&quot; or gpu-specific string.
     */
    resourceType?: string | null;
  }
  /**
   * Configuration for exporting cluster resource usages.
   */
  export interface Schema$ResourceUsageExportConfig {
    /**
     * Configuration to use BigQuery as usage export destination.
     */
    bigqueryDestination?: Schema$BigQueryDestination;
    /**
     * Configuration to enable resource consumption metering.
     */
    consumptionMeteringConfig?: Schema$ConsumptionMeteringConfig;
    /**
     * Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.
     */
    enableNetworkEgressMetering?: boolean | null;
  }
  /**
   * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
   */
  export interface Schema$RollbackNodePoolUpgradeRequest {
    /**
     * Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SandboxConfig contains configurations of the sandbox to use for the node.
   */
  export interface Schema$SandboxConfig {
    /**
     * Type of the sandbox to use for the node (e.g. &#39;gvisor&#39;)
     */
    sandboxType?: string | null;
  }
  /**
   * Kubernetes Engine service configuration.
   */
  export interface Schema$ServerConfig {
    /**
     * List of release channel configurations.
     */
    channels?: Schema$ReleaseChannelConfig[];
    /**
     * Version of Kubernetes the service deploys by default.
     */
    defaultClusterVersion?: string | null;
    /**
     * Default image type.
     */
    defaultImageType?: string | null;
    /**
     * Premium configuration for service.
     */
    premiumConfig?: Schema$PremiumConfig;
    /**
     * List of valid image types.
     */
    validImageTypes?: string[] | null;
    /**
     * List of valid master versions.
     */
    validMasterVersions?: string[] | null;
    /**
     * List of valid node upgrade target versions.
     */
    validNodeVersions?: string[] | null;
  }
  /**
   * SetAddonsRequest sets the addons associated with the cluster.
   */
  export interface Schema$SetAddonsConfigRequest {
    /**
     * The desired configurations for the various addons available to run in the cluster.
     */
    addonsConfig?: Schema$AddonsConfig;
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to set addons. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster
   */
  export interface Schema$SetLabelsRequest {
    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a &lt;code&gt;get()&lt;/code&gt; request to the resource to get the latest fingerprint.
     */
    labelFingerprint?: string | null;
    /**
     * The name (project, location, cluster id) of the cluster to set labels. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * The labels to set for that cluster.
     */
    resourceLabels?: {[key: string]: string} | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.
   */
  export interface Schema$SetLegacyAbacRequest {
    /**
     * Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * Whether ABAC authorization will be enabled in the cluster.
     */
    enabled?: boolean | null;
    /**
     * The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetLocationsRequest sets the locations of the cluster.
   */
  export interface Schema$SetLocationsRequest {
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The desired list of Google Compute Engine [zones](/compute/docs/zones#available) in which the cluster&#39;s nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed.  This list must always include the cluster&#39;s primary zone.
     */
    locations?: string[] | null;
    /**
     * The name (project, location, cluster) of the cluster to set locations. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetLoggingServiceRequest sets the logging service of a cluster.
   */
  export interface Schema$SetLoggingServiceRequest {
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The logging service the cluster should use to write metrics. Currently available options:  * &quot;logging.googleapis.com&quot; - the Google Cloud Logging service * &quot;none&quot; - no metrics will be exported from the cluster
     */
    loggingService?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to set logging. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
   */
  export interface Schema$SetMaintenancePolicyRequest {
    /**
     * The name of the cluster to update.
     */
    clusterId?: string | null;
    /**
     * The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy.
     */
    maintenancePolicy?: Schema$MaintenancePolicy;
    /**
     * The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
     */
    projectId?: string | null;
    /**
     * The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
     */
    zone?: string | null;
  }
  /**
   * SetMasterAuthRequest updates the admin password of a cluster.
   */
  export interface Schema$SetMasterAuthRequest {
    /**
     * The exact form of action to be taken on the master auth.
     */
    action?: string | null;
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to set auth. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * A description of the update.
     */
    update?: Schema$MasterAuth;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetMonitoringServiceRequest sets the monitoring service of a cluster.
   */
  export interface Schema$SetMonitoringServiceRequest {
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The monitoring service the cluster should use to write metrics. Currently available options:  * &quot;monitoring.googleapis.com&quot; - the Google Cloud Monitoring service * &quot;none&quot; - no metrics will be exported from the cluster
     */
    monitoringService?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to set monitoring. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNetworkPolicyRequest enables/disables network policy for a cluster.
   */
  export interface Schema$SetNetworkPolicyRequest {
    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Configuration options for the NetworkPolicy feature.
     */
    networkPolicy?: Schema$NetworkPolicy;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
   */
  export interface Schema$SetNodePoolAutoscalingRequest {
    /**
     * Autoscaling configuration for the node pool.
     */
    autoscaling?: Schema$NodePoolAutoscaling;
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNodePoolManagementRequest sets the node management properties of a node pool.
   */
  export interface Schema$SetNodePoolManagementRequest {
    /**
     * Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * NodeManagement configuration for the node pool.
     */
    management?: Schema$NodeManagement;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNodePoolSizeRequest sets the size a node pool.
   */
  export interface Schema$SetNodePoolSizeRequest {
    /**
     * Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
     */
    name?: string | null;
    /**
     * The desired node count for the pool.
     */
    nodeCount?: number | null;
    /**
     * Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * A set of Shielded Instance options.
   */
  export interface Schema$ShieldedInstanceConfig {
    /**
     * Defines whether the instance has integrity monitoring enabled.  Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created.
     */
    enableIntegrityMonitoring?: boolean | null;
    /**
     * Defines whether the instance has Secure Boot enabled.  Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails.
     */
    enableSecureBoot?: boolean | null;
  }
  /**
   * Configuration of Shielded Nodes feature.
   */
  export interface Schema$ShieldedNodes {
    /**
     * Whether Shielded Nodes features are enabled on all nodes in this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.
   */
  export interface Schema$StartIPRotationRequest {
    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Whether to rotate credentials during IP rotation.
     */
    rotateCredentials?: boolean | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED).
   */
  export interface Schema$StatusCondition {
    /**
     * Machine-friendly representation of the condition
     */
    code?: string | null;
    /**
     * Human-friendly representation of the condition
     */
    message?: string | null;
  }
  /**
   * TierConfig is the configuration for a tier offering.  For example the GKE standard or advanced offerings which contain different levels of functionality and possibly cost.
   */
  export interface Schema$TierConfig {
    /**
     * The tier from which the tier being configured inherits.  The configured tier will inherit all the features from its parent tier.
     */
    parent?: string | null;
    /**
     * The tier that is being configured with this value.
     */
    tier?: string | null;
  }
  /**
   * Cluster tier settings.
   */
  export interface Schema$TierSettings {
    /**
     * Cluster tier.
     */
    tier?: string | null;
  }
  /**
   * UpdateClusterRequest updates the settings of a cluster.
   */
  export interface Schema$UpdateClusterRequest {
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to update. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * A description of the update.
     */
    update?: Schema$ClusterUpdate;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * UpdateMasterRequest updates the master of the cluster.
   */
  export interface Schema$UpdateMasterRequest {
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The Kubernetes version to change the master to.  Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior:  - &quot;latest&quot;: picks the highest valid Kubernetes version - &quot;1.X&quot;: picks the highest valid patch+gke.N patch in the 1.X version - &quot;1.X.Y&quot;: picks the highest valid gke.N patch in the 1.X.Y version - &quot;1.X.Y-gke.N&quot;: picks an explicit Kubernetes version - &quot;-&quot;: picks the default Kubernetes version
     */
    masterVersion?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to update. Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNodePoolVersionRequest updates the version of a node pool.
   */
  export interface Schema$UpdateNodePoolRequest {
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The desired image type for the node pool.
     */
    imageType?: string | null;
    /**
     * The desired list of Google Compute Engine [zones](/compute/docs/zones#available) in which the node pool&#39;s nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed.
     */
    locations?: string[] | null;
    /**
     * The name (project, location, cluster, node pool) of the node pool to update. Specified in the format &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
     */
    name?: string | null;
    /**
     * Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * The Kubernetes version to change the nodes to (typically an upgrade).  Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior:  - &quot;latest&quot;: picks the highest valid Kubernetes version - &quot;1.X&quot;: picks the highest valid patch+gke.N patch in the 1.X version - &quot;1.X.Y&quot;: picks the highest valid gke.N patch in the 1.X.Y version - &quot;1.X.Y-gke.N&quot;: picks an explicit Kubernetes version - &quot;-&quot;: picks the Kubernetes master version
     */
    nodeVersion?: string | null;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * The desired image type for the node pool.
     */
    workloadMetadataConfig?: Schema$WorkloadMetadataConfig;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.
   */
  export interface Schema$UsableSubnetwork {
    /**
     * The range of internal addresses that are owned by this subnetwork.
     */
    ipCidrRange?: string | null;
    /**
     * Network Name. Example: projects/my-project/global/networks/my-network
     */
    network?: string | null;
    /**
     * Secondary IP ranges.
     */
    secondaryIpRanges?: Schema$UsableSubnetworkSecondaryRange[];
    /**
     * A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message.
     */
    statusMessage?: string | null;
    /**
     * Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
     */
    subnetwork?: string | null;
  }
  /**
   * Secondary IP range of a usable subnetwork.
   */
  export interface Schema$UsableSubnetworkSecondaryRange {
    /**
     * The range of IP addresses belonging to this subnetwork secondary range.
     */
    ipCidrRange?: string | null;
    /**
     * The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.
     */
    rangeName?: string | null;
    /**
     * This field is to determine the status of the secondary range programmably.
     */
    status?: string | null;
  }
  /**
   * VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.
   */
  export interface Schema$VerticalPodAutoscaling {
    /**
     * Enables vertical pod autoscaling.
     */
    enabled?: boolean | null;
  }
  /**
   * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
   */
  export interface Schema$WorkloadIdentityConfig {
    /**
     * IAM Identity Namespace to attach all Kubernetes Service Accounts to.
     */
    identityNamespace?: string | null;
  }
  /**
   * WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
   */
  export interface Schema$WorkloadMetadataConfig {
    /**
     * NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.
     */
    nodeMetadata?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    aggregated: Resource$Projects$Aggregated;
    locations: Resource$Projects$Locations;
    zones: Resource$Projects$Zones;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.aggregated = new Resource$Projects$Aggregated(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.zones = new Resource$Projects$Zones(this.context);
    }
  }

  export class Resource$Projects$Aggregated {
    context: APIRequestContext;
    usableSubnetworks: Resource$Projects$Aggregated$Usablesubnetworks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.usableSubnetworks = new Resource$Projects$Aggregated$Usablesubnetworks(
        this.context
      );
    }
  }

  export class Resource$Projects$Aggregated$Usablesubnetworks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * container.projects.aggregated.usableSubnetworks.list
     * @desc Lists subnetworks that can be used for creating clusters in a project.
     * @alias container.projects.aggregated.usableSubnetworks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.
     * @param {integer=} params.pageSize The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string=} params.pageToken Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.
     * @param {string} params.parent The parent project where subnetworks are usable. Specified in the format 'projects/x'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Aggregated$Usablesubnetworks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUsableSubnetworksResponse>;
    list(
      params: Params$Resource$Projects$Aggregated$Usablesubnetworks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUsableSubnetworksResponse>,
      callback: BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Aggregated$Usablesubnetworks$List,
      callback: BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Aggregated$Usablesubnetworks$List
        | BodyResponseCallback<Schema$ListUsableSubnetworksResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUsableSubnetworksResponse>,
      callback?: BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
    ): void | GaxiosPromise<Schema$ListUsableSubnetworksResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Aggregated$Usablesubnetworks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Aggregated$Usablesubnetworks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/aggregated/usableSubnetworks'
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
        createAPIRequest<Schema$ListUsableSubnetworksResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListUsableSubnetworksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Aggregated$Usablesubnetworks$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.
     */
    filter?: string;
    /**
     * The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.
     */
    pageToken?: string;
    /**
     * The parent project where subnetworks are usable. Specified in the format 'projects/x'.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    clusters: Resource$Projects$Locations$Clusters;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Locations$Clusters(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * container.projects.locations.getServerConfig
     * @desc Returns configuration info about the Google Kubernetes Engine service.
     * @alias container.projects.locations.getServerConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project and location) of the server config to get, specified in the format 'projects/x/locations/x'.
     * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getServerConfig(
      params?: Params$Resource$Projects$Locations$Getserverconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServerConfig>;
    getServerConfig(
      params: Params$Resource$Projects$Locations$Getserverconfig,
      options: MethodOptions | BodyResponseCallback<Schema$ServerConfig>,
      callback: BodyResponseCallback<Schema$ServerConfig>
    ): void;
    getServerConfig(
      params: Params$Resource$Projects$Locations$Getserverconfig,
      callback: BodyResponseCallback<Schema$ServerConfig>
    ): void;
    getServerConfig(callback: BodyResponseCallback<Schema$ServerConfig>): void;
    getServerConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getserverconfig
        | BodyResponseCallback<Schema$ServerConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ServerConfig>,
      callback?: BodyResponseCallback<Schema$ServerConfig>
    ): void | GaxiosPromise<Schema$ServerConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getserverconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getserverconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/serverConfig').replace(
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
        createAPIRequest<Schema$ServerConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ServerConfig>(parameters);
      }
    }

    /**
     * container.projects.locations.list
     * @desc Fetches locations that offer Google Kubernetes Engine.
     * @alias container.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Contains the name of the resource requested. Specified in the format 'projects/x'.
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

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Getserverconfig
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project and location) of the server config to get, specified in the format 'projects/x/locations/x'.
     */
    name?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Contains the name of the resource requested. Specified in the format 'projects/x'.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Clusters {
    context: APIRequestContext;
    nodePools: Resource$Projects$Locations$Clusters$Nodepools;
    wellKnown: Resource$Projects$Locations$Clusters$WellKnown;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.nodePools = new Resource$Projects$Locations$Clusters$Nodepools(
        this.context
      );
      this.wellKnown = new Resource$Projects$Locations$Clusters$WellKnown(
        this.context
      );
    }

    /**
     * container.projects.locations.clusters.completeIpRotation
     * @desc Completes master IP rotation.
     * @alias container.projects.locations.clusters.completeIpRotation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().CompleteIPRotationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    completeIpRotation(
      params?: Params$Resource$Projects$Locations$Clusters$Completeiprotation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    completeIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Completeiprotation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    completeIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Completeiprotation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    completeIpRotation(callback: BodyResponseCallback<Schema$Operation>): void;
    completeIpRotation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Completeiprotation
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Completeiprotation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Completeiprotation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:completeIpRotation').replace(
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
     * container.projects.locations.clusters.create
     * @desc Creates a cluster, consisting of the specified number and type of Google Compute Engine instances.  By default, the cluster is created in the project's [default network](/compute/docs/networks-and-firewalls#networks).  One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster.  Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     * @alias container.projects.locations.clusters.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent (project and location) where the cluster will be created. Specified in the format 'projects/x/locations/x'.
     * @param {().CreateClusterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Clusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/clusters').replace(
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
     * container.projects.locations.clusters.delete
     * @desc Deletes the cluster, including the Kubernetes endpoint and all worker nodes.  Firewalls and routes that were configured during cluster creation are also deleted.  Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
     * @alias container.projects.locations.clusters.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clusterId Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     * @param {string} params.name The name (project, location, cluster) of the cluster to delete. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Clusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
     * container.projects.locations.clusters.get
     * @desc Gets the details for a specific cluster.
     * @alias container.projects.locations.clusters.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clusterId Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     * @param {string} params.name The name (project, location, cluster) of the cluster to retrieve. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Clusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Cluster>;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$Cluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Get
        | BodyResponseCallback<Schema$Cluster>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback?: BodyResponseCallback<Schema$Cluster>
    ): void | GaxiosPromise<Schema$Cluster> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
        createAPIRequest<Schema$Cluster>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Cluster>(parameters);
      }
    }

    /**
     * container.projects.locations.clusters.getJwks
     * @desc Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
     * @alias container.projects.locations.clusters.getJwks
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The cluster (project, location, cluster id) to get keys for. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getJwks(
      params?: Params$Resource$Projects$Locations$Clusters$Getjwks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetJSONWebKeysResponse>;
    getJwks(
      params: Params$Resource$Projects$Locations$Clusters$Getjwks,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetJSONWebKeysResponse>,
      callback: BodyResponseCallback<Schema$GetJSONWebKeysResponse>
    ): void;
    getJwks(
      params: Params$Resource$Projects$Locations$Clusters$Getjwks,
      callback: BodyResponseCallback<Schema$GetJSONWebKeysResponse>
    ): void;
    getJwks(
      callback: BodyResponseCallback<Schema$GetJSONWebKeysResponse>
    ): void;
    getJwks(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Getjwks
        | BodyResponseCallback<Schema$GetJSONWebKeysResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetJSONWebKeysResponse>,
      callback?: BodyResponseCallback<Schema$GetJSONWebKeysResponse>
    ): void | GaxiosPromise<Schema$GetJSONWebKeysResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Getjwks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Getjwks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/jwks').replace(
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
        createAPIRequest<Schema$GetJSONWebKeysResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetJSONWebKeysResponse>(parameters);
      }
    }

    /**
     * container.projects.locations.clusters.list
     * @desc Lists all clusters owned by a project in either the specified zone or all zones.
     * @alias container.projects.locations.clusters.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent (project and location) where the clusters will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
     * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Clusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$List
        | BodyResponseCallback<Schema$ListClustersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListClustersResponse>
    ): void | GaxiosPromise<Schema$ListClustersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/clusters').replace(
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
        createAPIRequest<Schema$ListClustersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListClustersResponse>(parameters);
      }
    }

    /**
     * container.projects.locations.clusters.setAddons
     * @desc Sets the addons for a specific cluster.
     * @alias container.projects.locations.clusters.setAddons
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster) of the cluster to set addons. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().SetAddonsConfigRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setAddons(
      params?: Params$Resource$Projects$Locations$Clusters$Setaddons,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setAddons(
      params: Params$Resource$Projects$Locations$Clusters$Setaddons,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAddons(
      params: Params$Resource$Projects$Locations$Clusters$Setaddons,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAddons(callback: BodyResponseCallback<Schema$Operation>): void;
    setAddons(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setaddons
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Setaddons;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setaddons;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setAddons').replace(
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
     * container.projects.locations.clusters.setLegacyAbac
     * @desc Enables or disables the ABAC authorization mechanism on a cluster.
     * @alias container.projects.locations.clusters.setLegacyAbac
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().SetLegacyAbacRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setLegacyAbac(
      params?: Params$Resource$Projects$Locations$Clusters$Setlegacyabac,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setLegacyAbac(
      params: Params$Resource$Projects$Locations$Clusters$Setlegacyabac,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLegacyAbac(
      params: Params$Resource$Projects$Locations$Clusters$Setlegacyabac,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLegacyAbac(callback: BodyResponseCallback<Schema$Operation>): void;
    setLegacyAbac(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setlegacyabac
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Setlegacyabac;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setlegacyabac;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setLegacyAbac').replace(
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
     * container.projects.locations.clusters.setLocations
     * @desc Sets the locations for a specific cluster.
     * @alias container.projects.locations.clusters.setLocations
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster) of the cluster to set locations. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().SetLocationsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setLocations(
      params?: Params$Resource$Projects$Locations$Clusters$Setlocations,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setLocations(
      params: Params$Resource$Projects$Locations$Clusters$Setlocations,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLocations(
      params: Params$Resource$Projects$Locations$Clusters$Setlocations,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLocations(callback: BodyResponseCallback<Schema$Operation>): void;
    setLocations(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setlocations
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Setlocations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setlocations;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setLocations').replace(
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
     * container.projects.locations.clusters.setLogging
     * @desc Sets the logging service for a specific cluster.
     * @alias container.projects.locations.clusters.setLogging
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster) of the cluster to set logging. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().SetLoggingServiceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setLogging(
      params?: Params$Resource$Projects$Locations$Clusters$Setlogging,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setLogging(
      params: Params$Resource$Projects$Locations$Clusters$Setlogging,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLogging(
      params: Params$Resource$Projects$Locations$Clusters$Setlogging,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLogging(callback: BodyResponseCallback<Schema$Operation>): void;
    setLogging(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setlogging
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Setlogging;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setlogging;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setLogging').replace(
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
     * container.projects.locations.clusters.setMaintenancePolicy
     * @desc Sets the maintenance policy for a cluster.
     * @alias container.projects.locations.clusters.setMaintenancePolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().SetMaintenancePolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMaintenancePolicy(
      params?: Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setMaintenancePolicy').replace(
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
     * container.projects.locations.clusters.setMasterAuth
     * @desc Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     * @alias container.projects.locations.clusters.setMasterAuth
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster) of the cluster to set auth. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().SetMasterAuthRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMasterAuth(
      params?: Params$Resource$Projects$Locations$Clusters$Setmasterauth,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMasterAuth(
      params: Params$Resource$Projects$Locations$Clusters$Setmasterauth,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMasterAuth(
      params: Params$Resource$Projects$Locations$Clusters$Setmasterauth,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMasterAuth(callback: BodyResponseCallback<Schema$Operation>): void;
    setMasterAuth(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setmasterauth
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Setmasterauth;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setmasterauth;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setMasterAuth').replace(
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
     * container.projects.locations.clusters.setMonitoring
     * @desc Sets the monitoring service for a specific cluster.
     * @alias container.projects.locations.clusters.setMonitoring
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster) of the cluster to set monitoring. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().SetMonitoringServiceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMonitoring(
      params?: Params$Resource$Projects$Locations$Clusters$Setmonitoring,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMonitoring(
      params: Params$Resource$Projects$Locations$Clusters$Setmonitoring,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMonitoring(
      params: Params$Resource$Projects$Locations$Clusters$Setmonitoring,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMonitoring(callback: BodyResponseCallback<Schema$Operation>): void;
    setMonitoring(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setmonitoring
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Setmonitoring;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setmonitoring;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setMonitoring').replace(
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
     * container.projects.locations.clusters.setNetworkPolicy
     * @desc Enables or disables Network Policy for a cluster.
     * @alias container.projects.locations.clusters.setNetworkPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().SetNetworkPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setNetworkPolicy(
      params?: Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setNetworkPolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setNetworkPolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setNetworkPolicy(callback: BodyResponseCallback<Schema$Operation>): void;
    setNetworkPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setNetworkPolicy').replace(
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
     * container.projects.locations.clusters.setResourceLabels
     * @desc Sets labels on a cluster.
     * @alias container.projects.locations.clusters.setResourceLabels
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster id) of the cluster to set labels. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().SetLabelsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setResourceLabels(
      params?: Params$Resource$Projects$Locations$Clusters$Setresourcelabels,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setResourceLabels(
      params: Params$Resource$Projects$Locations$Clusters$Setresourcelabels,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setResourceLabels(
      params: Params$Resource$Projects$Locations$Clusters$Setresourcelabels,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setResourceLabels(callback: BodyResponseCallback<Schema$Operation>): void;
    setResourceLabels(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setresourcelabels
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Setresourcelabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setresourcelabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setResourceLabels').replace(
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
     * container.projects.locations.clusters.startIpRotation
     * @desc Starts master IP rotation.
     * @alias container.projects.locations.clusters.startIpRotation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().StartIPRotationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startIpRotation(
      params?: Params$Resource$Projects$Locations$Clusters$Startiprotation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    startIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Startiprotation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Startiprotation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startIpRotation(callback: BodyResponseCallback<Schema$Operation>): void;
    startIpRotation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Startiprotation
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Startiprotation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Startiprotation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:startIpRotation').replace(
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
     * container.projects.locations.clusters.update
     * @desc Updates the settings for a specific cluster.
     * @alias container.projects.locations.clusters.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster) of the cluster to update. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().UpdateClusterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Locations$Clusters$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
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
     * container.projects.locations.clusters.updateMaster
     * @desc Updates the master for a specific cluster.
     * @alias container.projects.locations.clusters.updateMaster
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster) of the cluster to update. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().UpdateMasterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateMaster(
      params?: Params$Resource$Projects$Locations$Clusters$Updatemaster,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateMaster(
      params: Params$Resource$Projects$Locations$Clusters$Updatemaster,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateMaster(
      params: Params$Resource$Projects$Locations$Clusters$Updatemaster,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateMaster(callback: BodyResponseCallback<Schema$Operation>): void;
    updateMaster(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Updatemaster
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Updatemaster;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Updatemaster;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:updateMaster').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Clusters$Completeiprotation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompleteIPRotationRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent (project and location) where the cluster will be created. Specified in the format 'projects/x/locations/x'.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateClusterRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to delete. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to retrieve. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Getjwks
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The cluster (project, location, cluster id) to get keys for. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent (project and location) where the clusters will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
     */
    parent?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setaddons
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster) of the cluster to set addons. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetAddonsConfigRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setlegacyabac
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLegacyAbacRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setlocations
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster) of the cluster to set locations. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLocationsRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setlogging
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster) of the cluster to set logging. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLoggingServiceRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMaintenancePolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setmasterauth
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster) of the cluster to set auth. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMasterAuthRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setmonitoring
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster) of the cluster to set monitoring. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMonitoringServiceRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNetworkPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setresourcelabels
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster id) of the cluster to set labels. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLabelsRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Startiprotation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartIPRotationRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster) of the cluster to update. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateClusterRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Updatemaster
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster) of the cluster to update. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateMasterRequest;
  }

  export class Resource$Projects$Locations$Clusters$Nodepools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * container.projects.locations.clusters.nodePools.create
     * @desc Creates a node pool for a cluster.
     * @alias container.projects.locations.clusters.nodePools.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent (project, location, cluster id) where the node pool will be created. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {().CreateNodePoolRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/nodePools').replace(
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
     * container.projects.locations.clusters.nodePools.delete
     * @desc Deletes a node pool from a cluster.
     * @alias container.projects.locations.clusters.nodePools.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     * @param {string=} params.nodePoolId Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
     * container.projects.locations.clusters.nodePools.get
     * @desc Retrieves the requested node pool.
     * @alias container.projects.locations.clusters.nodePools.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     * @param {string=} params.nodePoolId Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NodePool>;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NodePool>,
      callback: BodyResponseCallback<Schema$NodePool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Get,
      callback: BodyResponseCallback<Schema$NodePool>
    ): void;
    get(callback: BodyResponseCallback<Schema$NodePool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Get
        | BodyResponseCallback<Schema$NodePool>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$NodePool>,
      callback?: BodyResponseCallback<Schema$NodePool>
    ): void | GaxiosPromise<Schema$NodePool> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
        createAPIRequest<Schema$NodePool>(parameters, callback);
      } else {
        return createAPIRequest<Schema$NodePool>(parameters);
      }
    }

    /**
     * container.projects.locations.clusters.nodePools.list
     * @desc Lists the node pools for a cluster.
     * @alias container.projects.locations.clusters.nodePools.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     * @param {string} params.parent The parent (project, location, cluster id) where the node pools will be listed. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNodePoolsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$List,
      callback: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNodePoolsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$List
        | BodyResponseCallback<Schema$ListNodePoolsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback?: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void | GaxiosPromise<Schema$ListNodePoolsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Nodepools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/nodePools').replace(
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
        createAPIRequest<Schema$ListNodePoolsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListNodePoolsResponse>(parameters);
      }
    }

    /**
     * container.projects.locations.clusters.nodePools.rollback
     * @desc Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     * @alias container.projects.locations.clusters.nodePools.rollback
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     * @param {().RollbackNodePoolUpgradeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rollback(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rollback(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Operation>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:rollback').replace(
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
     * container.projects.locations.clusters.nodePools.setAutoscaling
     * @desc Sets the autoscaling settings of a specific node pool.
     * @alias container.projects.locations.clusters.nodePools.setAutoscaling
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     * @param {().SetNodePoolAutoscalingRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setAutoscaling(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setAutoscaling(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAutoscaling(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAutoscaling(callback: BodyResponseCallback<Schema$Operation>): void;
    setAutoscaling(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setAutoscaling').replace(
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
     * container.projects.locations.clusters.nodePools.setManagement
     * @desc Sets the NodeManagement options for a node pool.
     * @alias container.projects.locations.clusters.nodePools.setManagement
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     * @param {().SetNodePoolManagementRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setManagement(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setManagement(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setManagement(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setManagement(callback: BodyResponseCallback<Schema$Operation>): void;
    setManagement(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setManagement').replace(
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
     * container.projects.locations.clusters.nodePools.setSize
     * @desc Sets the size for a specific node pool.
     * @alias container.projects.locations.clusters.nodePools.setSize
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     * @param {().SetNodePoolSizeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setSize(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setSize(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setSize(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setSize(callback: BodyResponseCallback<Schema$Operation>): void;
    setSize(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setSize').replace(
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
     * container.projects.locations.clusters.nodePools.update
     * @desc Updates the version and/or image type of a specific node pool.
     * @alias container.projects.locations.clusters.nodePools.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, cluster, node pool) of the node pool to update. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     * @param {().UpdateNodePoolRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
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
  }

  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent (project, location, cluster id) where the node pool will be created. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateNodePoolRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     */
    name?: string;
    /**
     * Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     */
    name?: string;
    /**
     * Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string;
    /**
     * The parent (project, location, cluster id) where the node pools will be listed. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    parent?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackNodePoolUpgradeRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolAutoscalingRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolManagementRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolSizeRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, cluster, node pool) of the node pool to update. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateNodePoolRequest;
  }

  export class Resource$Projects$Locations$Clusters$WellKnown {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * container.projects.locations.clusters.well-known.getOpenid-configuration
     * @desc Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
     * @alias container.projects.locations.clusters.well-known.getOpenid-configuration
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The cluster (project, location, cluster id) to get the discovery document for. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOpenidConfiguration(
      params?: Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetOpenIDConfigResponse>;
    getOpenidConfiguration(
      params: Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOpenIDConfigResponse>,
      callback: BodyResponseCallback<Schema$GetOpenIDConfigResponse>
    ): void;
    getOpenidConfiguration(
      params: Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration,
      callback: BodyResponseCallback<Schema$GetOpenIDConfigResponse>
    ): void;
    getOpenidConfiguration(
      callback: BodyResponseCallback<Schema$GetOpenIDConfigResponse>
    ): void;
    getOpenidConfiguration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration
        | BodyResponseCallback<Schema$GetOpenIDConfigResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOpenIDConfigResponse>,
      callback?: BodyResponseCallback<Schema$GetOpenIDConfigResponse>
    ): void | GaxiosPromise<Schema$GetOpenIDConfigResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/.well-known/openid-configuration'
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
        createAPIRequest<Schema$GetOpenIDConfigResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetOpenIDConfigResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The cluster (project, location, cluster id) to get the discovery document for. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * container.projects.locations.operations.cancel
     * @desc Cancels the specified operation.
     * @alias container.projects.locations.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, operation id) of the operation to cancel. Specified in the format 'projects/x/locations/x/operations/x'.
     * @param {().CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
     * container.projects.locations.operations.get
     * @desc Gets the specified operation.
     * @alias container.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name (project, location, operation id) of the operation to get. Specified in the format 'projects/x/locations/x/operations/x'.
     * @param {string=} params.operationId Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
     * container.projects.locations.operations.list
     * @desc Lists all operations in a project in the specified zone or all zones.
     * @alias container.projects.locations.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent (project and location) where the operations will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
     * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
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
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
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

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, operation id) of the operation to cancel. Specified in the format 'projects/x/locations/x/operations/x'.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, operation id) of the operation to get. Specified in the format 'projects/x/locations/x/operations/x'.
     */
    name?: string;
    /**
     * Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     */
    operationId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent (project and location) where the operations will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
     */
    parent?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }

  export class Resource$Projects$Zones {
    context: APIRequestContext;
    clusters: Resource$Projects$Zones$Clusters;
    operations: Resource$Projects$Zones$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Zones$Clusters(this.context);
      this.operations = new Resource$Projects$Zones$Operations(this.context);
    }

    /**
     * container.projects.zones.getServerconfig
     * @desc Returns configuration info about the Google Kubernetes Engine service.
     * @alias container.projects.zones.getServerconfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.name The name (project and location) of the server config to get, specified in the format 'projects/x/locations/x'.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getServerconfig(
      params?: Params$Resource$Projects$Zones$Getserverconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServerConfig>;
    getServerconfig(
      params: Params$Resource$Projects$Zones$Getserverconfig,
      options: MethodOptions | BodyResponseCallback<Schema$ServerConfig>,
      callback: BodyResponseCallback<Schema$ServerConfig>
    ): void;
    getServerconfig(
      params: Params$Resource$Projects$Zones$Getserverconfig,
      callback: BodyResponseCallback<Schema$ServerConfig>
    ): void;
    getServerconfig(callback: BodyResponseCallback<Schema$ServerConfig>): void;
    getServerconfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Getserverconfig
        | BodyResponseCallback<Schema$ServerConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ServerConfig>,
      callback?: BodyResponseCallback<Schema$ServerConfig>
    ): void | GaxiosPromise<Schema$ServerConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Getserverconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Getserverconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/serverconfig'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone'],
        pathParams: ['projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ServerConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ServerConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Zones$Getserverconfig
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project and location) of the server config to get, specified in the format 'projects/x/locations/x'.
     */
    name?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }

  export class Resource$Projects$Zones$Clusters {
    context: APIRequestContext;
    nodePools: Resource$Projects$Zones$Clusters$Nodepools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.nodePools = new Resource$Projects$Zones$Clusters$Nodepools(
        this.context
      );
    }

    /**
     * container.projects.zones.clusters.addons
     * @desc Sets the addons for a specific cluster.
     * @alias container.projects.zones.clusters.addons
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetAddonsConfigRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addons(
      params?: Params$Resource$Projects$Zones$Clusters$Addons,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    addons(
      params: Params$Resource$Projects$Zones$Clusters$Addons,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addons(
      params: Params$Resource$Projects$Zones$Clusters$Addons,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addons(callback: BodyResponseCallback<Schema$Operation>): void;
    addons(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Addons
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Addons;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Addons;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.completeIpRotation
     * @desc Completes master IP rotation.
     * @alias container.projects.zones.clusters.completeIpRotation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().CompleteIPRotationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    completeIpRotation(
      params?: Params$Resource$Projects$Zones$Clusters$Completeiprotation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    completeIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Completeiprotation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    completeIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Completeiprotation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    completeIpRotation(callback: BodyResponseCallback<Schema$Operation>): void;
    completeIpRotation(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Completeiprotation
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Completeiprotation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Completeiprotation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.create
     * @desc Creates a cluster, consisting of the specified number and type of Google Compute Engine instances.  By default, the cluster is created in the project's [default network](/compute/docs/networks-and-firewalls#networks).  One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster.  Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     * @alias container.projects.zones.clusters.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {().CreateClusterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Zones$Clusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone'],
        pathParams: ['projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.delete
     * @desc Deletes the cluster, including the Kubernetes endpoint and all worker nodes.  Firewalls and routes that were configured during cluster creation are also deleted.  Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
     * @alias container.projects.zones.clusters.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     * @param {string=} params.name The name (project, location, cluster) of the cluster to delete. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Zones$Clusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.get
     * @desc Gets the details for a specific cluster.
     * @alias container.projects.zones.clusters.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     * @param {string=} params.name The name (project, location, cluster) of the cluster to retrieve. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Zones$Clusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Cluster>;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Get,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$Cluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Get
        | BodyResponseCallback<Schema$Cluster>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback?: BodyResponseCallback<Schema$Cluster>
    ): void | GaxiosPromise<Schema$Cluster> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Cluster>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Cluster>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.legacyAbac
     * @desc Enables or disables the ABAC authorization mechanism on a cluster.
     * @alias container.projects.zones.clusters.legacyAbac
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetLegacyAbacRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    legacyAbac(
      params?: Params$Resource$Projects$Zones$Clusters$Legacyabac,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    legacyAbac(
      params: Params$Resource$Projects$Zones$Clusters$Legacyabac,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    legacyAbac(
      params: Params$Resource$Projects$Zones$Clusters$Legacyabac,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    legacyAbac(callback: BodyResponseCallback<Schema$Operation>): void;
    legacyAbac(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Legacyabac
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Legacyabac;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Legacyabac;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.list
     * @desc Lists all clusters owned by a project in either the specified zone or all zones.
     * @alias container.projects.zones.clusters.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.parent The parent (project and location) where the clusters will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Zones$Clusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListClustersResponse>;
    list(
      params: Params$Resource$Projects$Zones$Clusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Zones$Clusters$List,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$List
        | BodyResponseCallback<Schema$ListClustersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListClustersResponse>
    ): void | GaxiosPromise<Schema$ListClustersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone'],
        pathParams: ['projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListClustersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListClustersResponse>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.locations
     * @desc Sets the locations for a specific cluster.
     * @alias container.projects.zones.clusters.locations
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetLocationsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    locations(
      params?: Params$Resource$Projects$Zones$Clusters$Locations,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    locations(
      params: Params$Resource$Projects$Zones$Clusters$Locations,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    locations(
      params: Params$Resource$Projects$Zones$Clusters$Locations,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    locations(callback: BodyResponseCallback<Schema$Operation>): void;
    locations(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Locations
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Locations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Locations;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.logging
     * @desc Sets the logging service for a specific cluster.
     * @alias container.projects.zones.clusters.logging
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetLoggingServiceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    logging(
      params?: Params$Resource$Projects$Zones$Clusters$Logging,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    logging(
      params: Params$Resource$Projects$Zones$Clusters$Logging,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    logging(
      params: Params$Resource$Projects$Zones$Clusters$Logging,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    logging(callback: BodyResponseCallback<Schema$Operation>): void;
    logging(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Logging
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Logging;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Logging;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.master
     * @desc Updates the master for a specific cluster.
     * @alias container.projects.zones.clusters.master
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().UpdateMasterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    master(
      params?: Params$Resource$Projects$Zones$Clusters$Master,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    master(
      params: Params$Resource$Projects$Zones$Clusters$Master,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    master(
      params: Params$Resource$Projects$Zones$Clusters$Master,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    master(callback: BodyResponseCallback<Schema$Operation>): void;
    master(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Master
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Master;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Master;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.monitoring
     * @desc Sets the monitoring service for a specific cluster.
     * @alias container.projects.zones.clusters.monitoring
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetMonitoringServiceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    monitoring(
      params?: Params$Resource$Projects$Zones$Clusters$Monitoring,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    monitoring(
      params: Params$Resource$Projects$Zones$Clusters$Monitoring,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    monitoring(
      params: Params$Resource$Projects$Zones$Clusters$Monitoring,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    monitoring(callback: BodyResponseCallback<Schema$Operation>): void;
    monitoring(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Monitoring
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Monitoring;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Monitoring;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.resourceLabels
     * @desc Sets labels on a cluster.
     * @alias container.projects.zones.clusters.resourceLabels
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetLabelsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resourceLabels(
      params?: Params$Resource$Projects$Zones$Clusters$Resourcelabels,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    resourceLabels(
      params: Params$Resource$Projects$Zones$Clusters$Resourcelabels,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resourceLabels(
      params: Params$Resource$Projects$Zones$Clusters$Resourcelabels,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resourceLabels(callback: BodyResponseCallback<Schema$Operation>): void;
    resourceLabels(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Resourcelabels
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Resourcelabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Resourcelabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.setMaintenancePolicy
     * @desc Sets the maintenance policy for a cluster.
     * @alias container.projects.zones.clusters.setMaintenancePolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId The name of the cluster to update.
     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
     * @param {().SetMaintenancePolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMaintenancePolicy(
      params?: Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.setMasterAuth
     * @desc Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     * @alias container.projects.zones.clusters.setMasterAuth
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetMasterAuthRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMasterAuth(
      params?: Params$Resource$Projects$Zones$Clusters$Setmasterauth,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMasterAuth(
      params: Params$Resource$Projects$Zones$Clusters$Setmasterauth,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMasterAuth(
      params: Params$Resource$Projects$Zones$Clusters$Setmasterauth,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMasterAuth(callback: BodyResponseCallback<Schema$Operation>): void;
    setMasterAuth(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Setmasterauth
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Setmasterauth;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Setmasterauth;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.setNetworkPolicy
     * @desc Enables or disables Network Policy for a cluster.
     * @alias container.projects.zones.clusters.setNetworkPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetNetworkPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setNetworkPolicy(
      params?: Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setNetworkPolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setNetworkPolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setNetworkPolicy(callback: BodyResponseCallback<Schema$Operation>): void;
    setNetworkPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.startIpRotation
     * @desc Starts master IP rotation.
     * @alias container.projects.zones.clusters.startIpRotation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().StartIPRotationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startIpRotation(
      params?: Params$Resource$Projects$Zones$Clusters$Startiprotation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    startIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Startiprotation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Startiprotation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startIpRotation(callback: BodyResponseCallback<Schema$Operation>): void;
    startIpRotation(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Startiprotation
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Startiprotation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Startiprotation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.update
     * @desc Updates the settings for a specific cluster.
     * @alias container.projects.zones.clusters.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().UpdateClusterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Zones$Clusters$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Zones$Clusters$Addons
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetAddonsConfigRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Completeiprotation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompleteIPRotationRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateClusterRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to delete. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to retrieve. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    name?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Legacyabac
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLegacyAbacRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent (project and location) where the clusters will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
     */
    parent?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Locations
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLocationsRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Logging
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLoggingServiceRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Master
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateMasterRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Monitoring
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMonitoringServiceRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Resourcelabels
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLabelsRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the cluster to update.
     */
    clusterId?: string;
    /**
     * The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
     */
    projectId?: string;
    /**
     * The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMaintenancePolicyRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Setmasterauth
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMasterAuthRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNetworkPolicyRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Startiprotation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartIPRotationRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateClusterRequest;
  }

  export class Resource$Projects$Zones$Clusters$Nodepools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * container.projects.zones.clusters.nodePools.autoscaling
     * @desc Sets the autoscaling settings of a specific node pool.
     * @alias container.projects.zones.clusters.nodePools.autoscaling
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetNodePoolAutoscalingRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    autoscaling(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    autoscaling(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    autoscaling(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    autoscaling(callback: BodyResponseCallback<Schema$Operation>): void;
    autoscaling(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.nodePools.create
     * @desc Creates a node pool for a cluster.
     * @alias container.projects.zones.clusters.nodePools.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {().CreateNodePoolRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.nodePools.delete
     * @desc Deletes a node pool from a cluster.
     * @alias container.projects.zones.clusters.nodePools.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string=} params.name The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     * @param {string} params.nodePoolId Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.nodePools.get
     * @desc Retrieves the requested node pool.
     * @alias container.projects.zones.clusters.nodePools.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     * @param {string=} params.name The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     * @param {string} params.nodePoolId Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NodePool>;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NodePool>,
      callback: BodyResponseCallback<Schema$NodePool>
    ): void;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Get,
      callback: BodyResponseCallback<Schema$NodePool>
    ): void;
    get(callback: BodyResponseCallback<Schema$NodePool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Get
        | BodyResponseCallback<Schema$NodePool>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$NodePool>,
      callback?: BodyResponseCallback<Schema$NodePool>
    ): void | GaxiosPromise<Schema$NodePool> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$NodePool>(parameters, callback);
      } else {
        return createAPIRequest<Schema$NodePool>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.nodePools.list
     * @desc Lists the node pools for a cluster.
     * @alias container.projects.zones.clusters.nodePools.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     * @param {string=} params.parent The parent (project, location, cluster id) where the node pools will be listed. Specified in the format 'projects/x/locations/x/clusters/x'.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNodePoolsResponse>;
    list(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$List,
      callback: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNodePoolsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$List
        | BodyResponseCallback<Schema$ListNodePoolsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback?: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void | GaxiosPromise<Schema$ListNodePoolsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListNodePoolsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListNodePoolsResponse>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.nodePools.rollback
     * @desc Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     * @alias container.projects.zones.clusters.nodePools.rollback
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().RollbackNodePoolUpgradeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rollback(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rollback(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Operation>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.nodePools.setManagement
     * @desc Sets the NodeManagement options for a node pool.
     * @alias container.projects.zones.clusters.nodePools.setManagement
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetNodePoolManagementRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setManagement(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setManagement(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setManagement(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setManagement(callback: BodyResponseCallback<Schema$Operation>): void;
    setManagement(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.nodePools.setSize
     * @desc Sets the size for a specific node pool.
     * @alias container.projects.zones.clusters.nodePools.setSize
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().SetNodePoolSizeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setSize(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setSize(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setSize(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setSize(callback: BodyResponseCallback<Schema$Operation>): void;
    setSize(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.clusters.nodePools.update
     * @desc Updates the version and/or image type of a specific node pool.
     * @alias container.projects.zones.clusters.nodePools.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterId Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.nodePoolId Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {().UpdateNodePoolRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Update
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolAutoscalingRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateNodePoolRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     */
    name?: string;
    /**
     * Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
     */
    name?: string;
    /**
     * Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string;
    /**
     * The parent (project, location, cluster id) where the node pools will be listed. Specified in the format 'projects/x/locations/x/clusters/x'.
     */
    parent?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackNodePoolUpgradeRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolManagementRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolSizeRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateNodePoolRequest;
  }

  export class Resource$Projects$Zones$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * container.projects.zones.operations.cancel
     * @desc Cancels the specified operation.
     * @alias container.projects.zones.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.operationId Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
     * @param {().CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Zones$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Zones$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Zones$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'operationId'],
        pathParams: ['operationId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * container.projects.zones.operations.get
     * @desc Gets the specified operation.
     * @alias container.projects.zones.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.name The name (project, location, operation id) of the operation to get. Specified in the format 'projects/x/locations/x/operations/x'.
     * @param {string} params.operationId Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Zones$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Zones$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Zones$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'operationId'],
        pathParams: ['operationId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * container.projects.zones.operations.list
     * @desc Lists all operations in a project in the specified zone or all zones.
     * @alias container.projects.zones.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.parent The parent (project and location) where the operations will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
     * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Zones$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Zones$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Zones$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/operations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone'],
        pathParams: ['projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Zones$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     */
    operationId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Zones$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name (project, location, operation id) of the operation to get. Specified in the format 'projects/x/locations/x/operations/x'.
     */
    name?: string;
    /**
     * Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     */
    operationId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Operations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent (project and location) where the operations will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
     */
    parent?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
}
