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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Google Kubernetes Engine API
 *
 * The Google Kubernetes Engine API is used for building and managing container
 * based applications, powered by the open source Kubernetes technology.
 *
 * @example
 * const google = require('googleapis');
 * const container = google.container('v1beta1');
 *
 * @namespace container
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Container
 */
export class Container {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.projects = new Resource$Projects(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * AcceleratorConfig represents a Hardware Accelerator request.
 */
export interface Schema$AcceleratorConfig {
  /**
   * The number of the accelerator cards exposed to an instance.
   */
  acceleratorCount: string;
  /**
   * The accelerator type resource name. List of supported accelerators
   * [here](/compute/docs/gpus/#Introduction)
   */
  acceleratorType: string;
}
/**
 * Configuration for the addons that can be automatically spun up in the
 * cluster, enabling additional functionality.
 */
export interface Schema$AddonsConfig {
  /**
   * Configuration for the horizontal pod autoscaling feature, which increases
   * or decreases the number of replica pods a replication controller has based
   * on the resource usage of the existing pods.
   */
  horizontalPodAutoscaling: Schema$HorizontalPodAutoscaling;
  /**
   * Configuration for the HTTP (L7) load balancing controller addon, which
   * makes it easy to set up HTTP load balancers for services in a cluster.
   */
  httpLoadBalancing: Schema$HttpLoadBalancing;
  /**
   * Configuration for the Kubernetes Dashboard.
   */
  kubernetesDashboard: Schema$KubernetesDashboard;
  /**
   * Configuration for NetworkPolicy. This only tracks whether the addon is
   * enabled or not on the Master, it does not track whether network policy is
   * enabled for the nodes.
   */
  networkPolicyConfig: Schema$NetworkPolicyConfig;
}
/**
 * AutoUpgradeOptions defines the set of options for the user to control how the
 * Auto Upgrades will proceed.
 */
export interface Schema$AutoUpgradeOptions {
  /**
   * [Output only] This field is set when upgrades are about to commence with
   * the approximate start time for the upgrades, in
   * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
   */
  autoUpgradeStartTime: string;
  /**
   * [Output only] This field is set when upgrades are about to commence with
   * the description of the upgrade.
   */
  description: string;
}
/**
 * CancelOperationRequest cancels a single operation.
 */
export interface Schema$CancelOperationRequest {
  /**
   * The name (project, location, operation id) of the operation to cancel.
   * Specified in the format &#39;projects/x/locations/x/operations/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The server-assigned `name` of the operation. This field has
   * been deprecated and replaced by the name field.
   */
  operationId: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the operation resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * CidrBlock contains an optional name and one CIDR block.
 */
export interface Schema$CidrBlock {
  /**
   * cidr_block must be specified in CIDR notation.
   */
  cidrBlock: string;
  /**
   * display_name is an optional field for users to identify CIDR blocks.
   */
  displayName: string;
}
/**
 * Configuration for client certificates on the cluster.
 */
export interface Schema$ClientCertificateConfig {
  /**
   * Issue a client certificate.
   */
  issueClientCertificate: boolean;
}
/**
 * A Google Kubernetes Engine cluster.
 */
export interface Schema$Cluster {
  /**
   * Configurations for the various addons available to run in the cluster.
   */
  addonsConfig: Schema$AddonsConfig;
  /**
   * The IP address range of the container pods in this cluster, in
   * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
   * notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically
   * chosen or specify a `/14` block in `10.0.0.0/8`.
   */
  clusterIpv4Cidr: string;
  /**
   * [Output only] The time the cluster was created, in
   * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
   */
  createTime: string;
  /**
   * [Output only] The current software version of the master endpoint.
   */
  currentMasterVersion: string;
  /**
   * [Output only] The number of nodes currently in the cluster.
   */
  currentNodeCount: number;
  /**
   * [Output only] The current version of the node software components. If they
   * are currently at multiple versions because they&#39;re in the process of
   * being upgraded, this reflects the minimum version of all nodes.
   */
  currentNodeVersion: string;
  /**
   * An optional description of this cluster.
   */
  description: string;
  /**
   * Kubernetes alpha features are enabled on this cluster. This includes alpha
   * API groups (e.g. v1beta1) and features that may not be production ready in
   * the kubernetes version of the master and nodes. The cluster has no SLA for
   * uptime and master/node upgrades are disabled. Alpha enabled clusters are
   * automatically deleted thirty days after creation.
   */
  enableKubernetesAlpha: boolean;
  /**
   * [Output only] The IP address of this cluster&#39;s master endpoint. The
   * endpoint can be accessed from the internet at
   * `https://username:password@endpoint/`.  See the `masterAuth` property of
   * this resource for username and password information.
   */
  endpoint: string;
  /**
   * [Output only] The time the cluster will be automatically deleted in
   * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
   */
  expireTime: string;
  /**
   * The initial Kubernetes version for this cluster.  Valid versions are those
   * found in validMasterVersions returned by getServerConfig.  The version can
   * be upgraded over time; such upgrades are reflected in currentMasterVersion
   * and currentNodeVersion.  Users may specify either explicit versions offered
   * by Kubernetes Engine or version aliases, which have the following behavior:
   * - &quot;latest&quot;: picks the highest valid Kubernetes version -
   * &quot;1.X&quot;: picks the highest valid patch+gke.N patch in the 1.X
   * version - &quot;1.X.Y&quot;: picks the highest valid gke.N patch in
   * the 1.X.Y version - &quot;1.X.Y-gke.N&quot;: picks an explicit Kubernetes
   * version - &quot;&quot;,&quot;-&quot;: picks the default Kubernetes version
   */
  initialClusterVersion: string;
  /**
   * The number of nodes to create in this cluster. You must ensure that your
   * Compute Engine &lt;a
   * href=&quot;/compute/docs/resource-quotas&quot;&gt;resource quota&lt;/a&gt;
   * is sufficient for this number of instances. You must also have available
   * firewall and routes quota. For requests, this field should only be used in
   * lieu of a &quot;node_pool&quot; object, since this configuration (along
   * with the &quot;node_config&quot;) will be used to create a
   * &quot;NodePool&quot; object with an auto-generated name. Do not use this
   * and a node_pool at the same time.
   */
  initialNodeCount: number;
  /**
   * Deprecated. Use node_pools.instance_group_urls.
   */
  instanceGroupUrls: string[];
  /**
   * Configuration for cluster IP allocation.
   */
  ipAllocationPolicy: Schema$IPAllocationPolicy;
  /**
   * The fingerprint of the set of labels for this cluster.
   */
  labelFingerprint: string;
  /**
   * Configuration for the legacy ABAC authorization mode.
   */
  legacyAbac: Schema$LegacyAbac;
  /**
   * [Output only] The name of the Google Compute Engine
   * [zone](/compute/docs/regions-zones/regions-zones#available) or
   * [region](/compute/docs/regions-zones/regions-zones#available) in which the
   * cluster resides.
   */
  location: string;
  /**
   * The list of Google Compute Engine
   * [locations](/compute/docs/zones#available) in which the cluster&#39;s nodes
   * should be located.
   */
  locations: string[];
  /**
   * The logging service the cluster should use to write logs. Currently
   * available options:  * `logging.googleapis.com` - the Google Cloud Logging
   * service. * `none` - no logs will be exported from the cluster. * if left as
   * an empty string,`logging.googleapis.com` will be used.
   */
  loggingService: string;
  /**
   * Configure the maintenance policy for this cluster.
   */
  maintenancePolicy: Schema$MaintenancePolicy;
  /**
   * The authentication information for accessing the master endpoint.
   */
  masterAuth: Schema$MasterAuth;
  /**
   * The configuration options for master authorized networks feature.
   */
  masterAuthorizedNetworksConfig: Schema$MasterAuthorizedNetworksConfig;
  /**
   * The IP prefix in CIDR notation to use for the hosted master network. This
   * prefix will be used for assigning private IP addresses to the master or set
   * of masters, as well as the ILB VIP.
   */
  masterIpv4CidrBlock: string;
  /**
   * The monitoring service the cluster should use to write metrics. Currently
   * available options:  * `monitoring.googleapis.com` - the Google Cloud
   * Monitoring service. * `none` - no metrics will be exported from the
   * cluster. * if left as an empty string, `monitoring.googleapis.com` will be
   * used.
   */
  monitoringService: string;
  /**
   * The name of this cluster. The name must be unique within this project and
   * zone, and can be up to 40 characters with the following restrictions:  *
   * Lowercase letters, numbers, and hyphens only. * Must start with a letter. *
   * Must end with a number or a letter.
   */
  name: string;
  /**
   * The name of the Google Compute Engine
   * [network](/compute/docs/networks-and-firewalls#networks) to which the
   * cluster is connected. If left unspecified, the `default` network will be
   * used. On output this shows the network ID instead of the name.
   */
  network: string;
  /**
   * Configuration options for the NetworkPolicy feature.
   */
  networkPolicy: Schema$NetworkPolicy;
  /**
   * Parameters used in creating the cluster&#39;s nodes. See `nodeConfig` for
   * the description of its properties. For requests, this field should only be
   * used in lieu of a &quot;node_pool&quot; object, since this configuration
   * (along with the &quot;initial_node_count&quot;) will be used to create a
   * &quot;NodePool&quot; object with an auto-generated name. Do not use this
   * and a node_pool at the same time. For responses, this field will be
   * populated with the node configuration of the first node pool.  If
   * unspecified, the defaults are used.
   */
  nodeConfig: Schema$NodeConfig;
  /**
   * [Output only] The size of the address space on each node for hosting
   * containers. This is provisioned from within the `container_ipv4_cidr`
   * range.
   */
  nodeIpv4CidrSize: number;
  /**
   * The node pools associated with this cluster. This field should not be set
   * if &quot;node_config&quot; or &quot;initial_node_count&quot; are specified.
   */
  nodePools: Schema$NodePool[];
  /**
   * Configuration for the PodSecurityPolicy feature.
   */
  podSecurityPolicyConfig: Schema$PodSecurityPolicyConfig;
  /**
   * If this is a private cluster setup. Private clusters are clusters that, by
   * default have no external IP addresses on the nodes and where nodes and the
   * master communicate over private IP addresses.
   */
  privateCluster: boolean;
  /**
   * The resource labels for the cluster to use to annotate any related GCE
   * resources.
   */
  resourceLabels: any;
  /**
   * [Output only] Server-defined URL for the resource.
   */
  selfLink: string;
  /**
   * [Output only] The IP address range of the Kubernetes services in this
   * cluster, in
   * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
   * notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the
   * last `/16` from the container CIDR.
   */
  servicesIpv4Cidr: string;
  /**
   * [Output only] The current status of this cluster.
   */
  status: string;
  /**
   * [Output only] Additional information about the current status of this
   * cluster, if available.
   */
  statusMessage: string;
  /**
   * The name of the Google Compute Engine
   * [subnetwork](/compute/docs/subnetworks) to which the cluster is connected.
   * On output this shows the subnetwork ID instead of the name.
   */
  subnetwork: string;
  /**
   * [Output only] The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field is deprecated, use location instead.
   */
  zone: string;
}
/**
 * ClusterUpdate describes an update to the cluster. Exactly one update can be
 * applied to a cluster with each request, so at most one field can be provided.
 */
export interface Schema$ClusterUpdate {
  /**
   * Configurations for the various addons available to run in the cluster.
   */
  desiredAddonsConfig: Schema$AddonsConfig;
  /**
   * The desired image type for the node pool. NOTE: Set the
   * &quot;desired_node_pool&quot; field as well.
   */
  desiredImageType: string;
  /**
   * The desired list of Google Compute Engine
   * [locations](/compute/docs/zones#available) in which the cluster&#39;s nodes
   * should be located. Changing the locations a cluster is in will result in
   * nodes being either created or removed from the cluster, depending on
   * whether locations are being added or removed.  This list must always
   * include the cluster&#39;s primary zone.
   */
  desiredLocations: string[];
  /**
   * The desired configuration options for master authorized networks feature.
   */
  desiredMasterAuthorizedNetworksConfig: Schema$MasterAuthorizedNetworksConfig;
  /**
   * The Kubernetes version to change the master to. The only valid value is the
   * latest supported version.  Users may specify either explicit versions
   * offered by Kubernetes Engine or version aliases, which have the following
   * behavior:  - &quot;latest&quot;: picks the highest valid Kubernetes version
   * - &quot;1.X&quot;: picks the highest valid patch+gke.N patch in the 1.X
   * version - &quot;1.X.Y&quot;: picks the highest valid gke.N patch in
   * the 1.X.Y version - &quot;1.X.Y-gke.N&quot;: picks an explicit Kubernetes
   * version - &quot;-&quot;: picks the default Kubernetes version
   */
  desiredMasterVersion: string;
  /**
   * The monitoring service the cluster should use to write metrics. Currently
   * available options:  * &quot;monitoring.googleapis.com&quot; - the Google
   * Cloud Monitoring service * &quot;none&quot; - no metrics will be exported
   * from the cluster
   */
  desiredMonitoringService: string;
  /**
   * Autoscaler configuration for the node pool specified in
   * desired_node_pool_id. If there is only one pool in the cluster and
   * desired_node_pool_id is not provided then the change applies to that single
   * node pool.
   */
  desiredNodePoolAutoscaling: Schema$NodePoolAutoscaling;
  /**
   * The node pool to be upgraded. This field is mandatory if
   * &quot;desired_node_version&quot;, &quot;desired_image_family&quot; or
   * &quot;desired_node_pool_autoscaling&quot; is specified and there is more
   * than one node pool on the cluster.
   */
  desiredNodePoolId: string;
  /**
   * The Kubernetes version to change the nodes to (typically an upgrade). Users
   * may specify either explicit versions offered by Kubernetes Engine or
   * version aliases, which have the following behavior:  - &quot;latest&quot;:
   * picks the highest valid Kubernetes version - &quot;1.X&quot;: picks the
   * highest valid patch+gke.N patch in the 1.X version - &quot;1.X.Y&quot;:
   * picks the highest valid gke.N patch in the 1.X.Y version -
   * &quot;1.X.Y-gke.N&quot;: picks an explicit Kubernetes version -
   * &quot;-&quot;: picks the Kubernetes master version
   */
  desiredNodeVersion: string;
  /**
   * The desired configuration options for the PodSecurityPolicy feature.
   */
  desiredPodSecurityPolicyConfig: Schema$PodSecurityPolicyConfig;
}
/**
 * CompleteIPRotationRequest moves the cluster master back into single-IP mode.
 */
export interface Schema$CompleteIPRotationRequest {
  /**
   * Deprecated. The name of the cluster. This field has been deprecated and
   * replaced by the name field.
   */
  clusterId: string;
  /**
   * The name (project, location, cluster id) of the cluster to complete IP
   * rotation. Specified in the format
   * &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://developers.google.com/console/help/new/#projectnumber).
   * This field has been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * CreateClusterRequest creates a cluster.
 */
export interface Schema$CreateClusterRequest {
  /**
   * A [cluster
   * resource](/container-engine/reference/rest/v1beta1/projects.zones.clusters)
   */
  cluster: Schema$Cluster;
  /**
   * The parent (project and location) where the cluster will be created.
   * Specified in the format &#39;projects/x/locations/*&#39;.
   */
  parent: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the parent field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the parent field.
   */
  zone: string;
}
/**
 * CreateNodePoolRequest creates a node pool for a cluster.
 */
export interface Schema$CreateNodePoolRequest {
  /**
   * Deprecated. The name of the cluster. This field has been deprecated and
   * replaced by the parent field.
   */
  clusterId: string;
  /**
   * The node pool to create.
   */
  nodePool: Schema$NodePool;
  /**
   * The parent (project, location, cluster id) where the node pool will be
   * created. Specified in the format
   * &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
   */
  parent: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://developers.google.com/console/help/new/#projectnumber).
   * This field has been deprecated and replaced by the parent field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the parent field.
   */
  zone: string;
}
/**
 * Time window specified for daily maintenance operations.
 */
export interface Schema$DailyMaintenanceWindow {
  /**
   * [Output only] Duration of the time window, automatically chosen to be
   * smallest possible in the given scenario.
   */
  duration: string;
  /**
   * Time within the maintenance window to start the maintenance operations. It
   * must be in format &quot;HH:MM”, where HH : [00-23] and MM : [00-59] GMT.
   */
  startTime: string;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * Configuration options for the horizontal pod autoscaling feature, which
 * increases or decreases the number of replica pods a replication controller
 * has based on the resource usage of the existing pods.
 */
export interface Schema$HorizontalPodAutoscaling {
  /**
   * Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.
   * When enabled, it ensures that a Heapster pod is running in the cluster,
   * which is also used by the Cloud Monitoring service.
   */
  disabled: boolean;
}
/**
 * Configuration options for the HTTP (L7) load balancing controller addon,
 * which makes it easy to set up HTTP load balancers for services in a cluster.
 */
export interface Schema$HttpLoadBalancing {
  /**
   * Whether the HTTP Load Balancing controller is enabled in the cluster. When
   * enabled, it runs a small pod in the cluster that manages the load
   * balancers.
   */
  disabled: boolean;
}
/**
 * Configuration for controlling how IPs are allocated in the cluster.
 */
export interface Schema$IPAllocationPolicy {
  /**
   * If true, allow allocation of cluster CIDR ranges that overlap with certain
   * kinds of network routes. By default we do not allow cluster CIDR ranges to
   * intersect with any user declared routes. With allow_route_overlap == true,
   * we allow overlapping with CIDR ranges that are larger than the cluster CIDR
   * range.  If this field is set to true, then cluster and services CIDRs must
   * be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1)
   * When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and
   * `services_ipv4_cidr_block` must be fully-specified. 2) When
   * `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be
   * fully-specified.
   */
  allowRouteOverlap: boolean;
  /**
   * This field is deprecated, use cluster_ipv4_cidr_block.
   */
  clusterIpv4Cidr: string;
  /**
   * The IP address range for the cluster pod IPs. If this field is set, then
   * `cluster.cluster_ipv4_cidr` must be left blank.  This field is only
   * applicable when `use_ip_aliases` is true.  Set to blank to have a range
   * chosen with the default size.  Set to /netmask (e.g. `/14`) to have a range
   * chosen with a specific netmask.  Set to a
   * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
   * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
   * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
   * to use.
   */
  clusterIpv4CidrBlock: string;
  /**
   * The name of the secondary range to be used for the cluster CIDR block.  The
   * secondary range will be used for pod IP addresses. This must be an existing
   * secondary range associated with the cluster subnetwork.  This field is only
   * applicable with use_ip_aliases and create_subnetwork is false.
   */
  clusterSecondaryRangeName: string;
  /**
   * Whether a new subnetwork will be created automatically for the cluster.
   * This field is only applicable when `use_ip_aliases` is true.
   */
  createSubnetwork: boolean;
  /**
   * This field is deprecated, use node_ipv4_cidr_block.
   */
  nodeIpv4Cidr: string;
  /**
   * The IP address range of the instance IPs in this cluster.  This is
   * applicable only if `create_subnetwork` is true.  Set to blank to have a
   * range chosen with the default size.  Set to /netmask (e.g. `/14`) to have a
   * range chosen with a specific netmask.  Set to a
   * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
   * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
   * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
   * to use.
   */
  nodeIpv4CidrBlock: string;
  /**
   * This field is deprecated, use services_ipv4_cidr_block.
   */
  servicesIpv4Cidr: string;
  /**
   * The IP address range of the services IPs in this cluster. If blank, a range
   * will be automatically chosen with the default size.  This field is only
   * applicable when `use_ip_aliases` is true.  Set to blank to have a range
   * chosen with the default size.  Set to /netmask (e.g. `/14`) to have a range
   * chosen with a specific netmask.  Set to a
   * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
   * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
   * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
   * to use.
   */
  servicesIpv4CidrBlock: string;
  /**
   * The name of the secondary range to be used as for the services CIDR block.
   * The secondary range will be used for service ClusterIPs. This must be an
   * existing secondary range associated with the cluster subnetwork.  This
   * field is only applicable with use_ip_aliases and create_subnetwork is
   * false.
   */
  servicesSecondaryRangeName: string;
  /**
   * A custom subnetwork name to be used if `create_subnetwork` is true.  If
   * this field is empty, then an automatic name will be chosen for the new
   * subnetwork.
   */
  subnetworkName: string;
  /**
   * Whether alias IPs will be used for pod IPs in the cluster.
   */
  useIpAliases: boolean;
}
/**
 * Configuration for the Kubernetes Dashboard.
 */
export interface Schema$KubernetesDashboard {
  /**
   * Whether the Kubernetes Dashboard is enabled for this cluster.
   */
  disabled: boolean;
}
/**
 * Configuration for the legacy Attribute Based Access Control authorization
 * mode.
 */
export interface Schema$LegacyAbac {
  /**
   * Whether the ABAC authorizer is enabled for this cluster. When enabled,
   * identities in the system, including service accounts, nodes, and
   * controllers, will have statically granted permissions beyond those provided
   * by the RBAC configuration or IAM.
   */
  enabled: boolean;
}
/**
 * ListClustersResponse is the result of ListClustersRequest.
 */
export interface Schema$ListClustersResponse {
  /**
   * A list of clusters in the project in the specified zone, or across all
   * ones.
   */
  clusters: Schema$Cluster[];
  /**
   * If any zones are listed here, the list of clusters returned may be missing
   * those zones.
   */
  missingZones: string[];
}
/**
 * ListNodePoolsResponse is the result of ListNodePoolsRequest.
 */
export interface Schema$ListNodePoolsResponse {
  /**
   * A list of node pools for a cluster.
   */
  nodePools: Schema$NodePool[];
}
/**
 * ListOperationsResponse is the result of ListOperationsRequest.
 */
export interface Schema$ListOperationsResponse {
  /**
   * If any zones are listed here, the list of operations returned may be
   * missing the operations from those zones.
   */
  missingZones: string[];
  /**
   * A list of operations in the project in the specified zone.
   */
  operations: Schema$Operation[];
}
/**
 * MaintenancePolicy defines the maintenance policy to be used for the cluster.
 */
export interface Schema$MaintenancePolicy {
  /**
   * Specifies the maintenance window in which maintenance may be performed.
   */
  window: Schema$MaintenanceWindow;
}
/**
 * MaintenanceWindow defines the maintenance window to be used for the cluster.
 */
export interface Schema$MaintenanceWindow {
  /**
   * DailyMaintenanceWindow specifies a daily maintenance operation window.
   */
  dailyMaintenanceWindow: Schema$DailyMaintenanceWindow;
}
/**
 * The authentication information for accessing the master endpoint.
 * Authentication can be done using HTTP basic auth or using client
 * certificates.
 */
export interface Schema$MasterAuth {
  /**
   * [Output only] Base64-encoded public certificate used by clients to
   * authenticate to the cluster endpoint.
   */
  clientCertificate: string;
  /**
   * Configuration for client certificate authentication on the cluster.  If no
   * configuration is specified, a client certificate is issued.
   */
  clientCertificateConfig: Schema$ClientCertificateConfig;
  /**
   * [Output only] Base64-encoded private key used by clients to authenticate to
   * the cluster endpoint.
   */
  clientKey: string;
  /**
   * [Output only] Base64-encoded public certificate that is the root of trust
   * for the cluster.
   */
  clusterCaCertificate: string;
  /**
   * The password to use for HTTP basic authentication to the master endpoint.
   * Because the master endpoint is open to the Internet, you should create a
   * strong password.  If a password is provided for cluster creation, username
   * must be non-empty.
   */
  password: string;
  /**
   * The username to use for HTTP basic authentication to the master endpoint.
   * For clusters v1.6.0 and later, you can disable basic authentication by
   * providing an empty username.
   */
  username: string;
}
/**
 * Configuration options for the master authorized networks feature. Enabled
 * master authorized networks will disallow all external traffic to access
 * Kubernetes master through HTTPS except traffic from the given CIDR blocks,
 * Google Compute Engine Public IPs and Google Prod IPs.
 */
export interface Schema$MasterAuthorizedNetworksConfig {
  /**
   * cidr_blocks define up to 10 external networks that could access Kubernetes
   * master through HTTPS.
   */
  cidrBlocks: Schema$CidrBlock[];
  /**
   * Whether or not master authorized networks is enabled.
   */
  enabled: boolean;
}
/**
 * Configuration options for the NetworkPolicy feature.
 * https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
 */
export interface Schema$NetworkPolicy {
  /**
   * Whether network policy is enabled on the cluster.
   */
  enabled: boolean;
  /**
   * The selected network policy provider.
   */
  provider: string;
}
/**
 * Configuration for NetworkPolicy. This only tracks whether the addon is
 * enabled or not on the Master, it does not track whether network policy is
 * enabled for the nodes.
 */
export interface Schema$NetworkPolicyConfig {
  /**
   * Whether NetworkPolicy is enabled for this cluster.
   */
  disabled: boolean;
}
/**
 * Parameters that describe the nodes in a cluster.
 */
export interface Schema$NodeConfig {
  /**
   * A list of hardware accelerators to be attached to each node. See
   * https://cloud.google.com/compute/docs/gpus for more information about
   * support for GPUs.
   */
  accelerators: Schema$AcceleratorConfig[];
  /**
   * Size of the disk attached to each node, specified in GB. The smallest
   * allowed disk size is 10GB.  If unspecified, the default disk size is 100GB.
   */
  diskSizeGb: number;
  /**
   * The image type to use for this node. Note that for a given image type, the
   * latest version of it will be used.
   */
  imageType: string;
  /**
   * The map of Kubernetes labels (key/value pairs) to be applied to each node.
   * These will added in addition to any default label(s) that Kubernetes may
   * apply to the node. In case of conflict in label keys, the applied set may
   * differ depending on the Kubernetes version -- it&#39;s best to assume the
   * behavior is undefined and conflicts should be avoided. For more
   * information, including usage and the valid values, see:
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
   */
  labels: any;
  /**
   * The number of local SSD disks to be attached to the node.  The limit for
   * this value is dependant upon the maximum number of disks available on a
   * machine per zone. See:
   * https://cloud.google.com/compute/docs/disks/local-ssd#local_ssd_limits for
   * more information.
   */
  localSsdCount: number;
  /**
   * The name of a Google Compute Engine [machine
   * type](/compute/docs/machine-types) (e.g. `n1-standard-1`).  If unspecified,
   * the default machine type is `n1-standard-1`.
   */
  machineType: string;
  /**
   * The metadata key/value pairs assigned to instances in the cluster.  Keys
   * must conform to the regexp [a-zA-Z0-9-_]+ and be less than 128 bytes in
   * length. These are reflected as part of a URL in the metadata server.
   * Additionally, to avoid ambiguity, keys must not conflict with any other
   * metadata keys for the project or be one of the reserved keys:
   * &quot;cluster-location&quot;  &quot;cluster-name&quot;
   * &quot;cluster-uid&quot;  &quot;configure-sh&quot;
   * &quot;gci-update-strategy&quot;  &quot;gci-ensure-gke-docker&quot;
   * &quot;instance-template&quot;  &quot;kube-env&quot;
   * &quot;startup-script&quot;  &quot;user-data&quot;  Values are free-form
   * strings, and only have meaning as interpreted by the image running in the
   * instance. The only restriction placed on them is that each value&#39;s size
   * must be less than or equal to 32 KB.  The total size of all keys and values
   * must be less than 512 KB.
   */
  metadata: any;
  /**
   * Minimum CPU platform to be used by this instance. The instance may be
   * scheduled on the specified or newer CPU platform. Applicable values are the
   * friendly names of CPU platforms, such as &lt;code&gt;minCpuPlatform:
   * &amp;quot;Intel Haswell&amp;quot;&lt;/code&gt; or
   * &lt;code&gt;minCpuPlatform: &amp;quot;Intel Sandy
   * Bridge&amp;quot;&lt;/code&gt;. For more information, read [how to specify
   * min CPU
   * platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
   */
  minCpuPlatform: string;
  /**
   * The set of Google API scopes to be made available on all of the node VMs
   * under the &quot;default&quot; service account.  The following scopes are
   * recommended, but not required, and by default are not included:  *
   * `https://www.googleapis.com/auth/compute` is required for mounting
   * persistent storage on your nodes. *
   * `https://www.googleapis.com/auth/devstorage.read_only` is required for
   * communicating with **gcr.io** (the [Google Container
   * Registry](/container-registry/)).  If unspecified, no scopes are added,
   * unless Cloud Logging or Cloud Monitoring are enabled, in which case their
   * required scopes will be added.
   */
  oauthScopes: string[];
  /**
   * Whether the nodes are created as preemptible VM instances. See:
   * https://cloud.google.com/compute/docs/instances/preemptible for more
   * inforamtion about preemptible VM instances.
   */
  preemptible: boolean;
  /**
   * The Google Cloud Platform Service Account to be used by the node VMs. If no
   * Service Account is specified, the &quot;default&quot; service account is
   * used.
   */
  serviceAccount: string;
  /**
   * The list of instance tags applied to all nodes. Tags are used to identify
   * valid sources or targets for network firewalls and are specified by the
   * client during cluster or node pool creation. Each tag within the list must
   * comply with RFC1035.
   */
  tags: string[];
  /**
   * List of kubernetes taints to be applied to each node.  For more
   * information, including usage and the valid values, see:
   * https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
   */
  taints: Schema$NodeTaint[];
  /**
   * The workload metadata configuration for this node.
   */
  workloadMetadataConfig: Schema$WorkloadMetadataConfig;
}
/**
 * NodeManagement defines the set of node management services turned on for the
 * node pool.
 */
export interface Schema$NodeManagement {
  /**
   * Whether the nodes will be automatically repaired.
   */
  autoRepair: boolean;
  /**
   * Whether the nodes will be automatically upgraded.
   */
  autoUpgrade: boolean;
  /**
   * Specifies the Auto Upgrade knobs for the node pool.
   */
  upgradeOptions: Schema$AutoUpgradeOptions;
}
/**
 * NodePool contains the name and configuration for a cluster&#39;s node pool.
 * Node pools are a set of nodes (i.e. VM&#39;s), with a common configuration
 * and specification, under the control of the cluster master. They may have a
 * set of Kubernetes labels applied to them, which may be used to reference them
 * during pod scheduling. They may also be resized up or down, to accommodate
 * the workload.
 */
export interface Schema$NodePool {
  /**
   * Autoscaler configuration for this NodePool. Autoscaler is enabled only if a
   * valid configuration is present.
   */
  autoscaling: Schema$NodePoolAutoscaling;
  /**
   * The node configuration of the pool.
   */
  config: Schema$NodeConfig;
  /**
   * The initial node count for the pool. You must ensure that your Compute
   * Engine &lt;a href=&quot;/compute/docs/resource-quotas&quot;&gt;resource
   * quota&lt;/a&gt; is sufficient for this number of instances. You must also
   * have available firewall and routes quota.
   */
  initialNodeCount: number;
  /**
   * [Output only] The resource URLs of the [managed instance
   * groups](/compute/docs/instance-groups/creating-groups-of-managed-instances)
   * associated with this node pool.
   */
  instanceGroupUrls: string[];
  /**
   * NodeManagement configuration for this NodePool.
   */
  management: Schema$NodeManagement;
  /**
   * The name of the node pool.
   */
  name: string;
  /**
   * [Output only] Server-defined URL for the resource.
   */
  selfLink: string;
  /**
   * [Output only] The status of the nodes in this pool instance.
   */
  status: string;
  /**
   * [Output only] Additional information about the current status of this node
   * pool instance, if available.
   */
  statusMessage: string;
  /**
   * The version of the Kubernetes of this node.
   */
  version: string;
}
/**
 * NodePoolAutoscaling contains information required by cluster autoscaler to
 * adjust the size of the node pool to the current cluster usage.
 */
export interface Schema$NodePoolAutoscaling {
  /**
   * Is autoscaling enabled for this node pool.
   */
  enabled: boolean;
  /**
   * Maximum number of nodes in the NodePool. Must be &gt;= min_node_count.
   * There has to enough quota to scale up the cluster.
   */
  maxNodeCount: number;
  /**
   * Minimum number of nodes in the NodePool. Must be &gt;= 1 and &lt;=
   * max_node_count.
   */
  minNodeCount: number;
}
/**
 * Kubernetes taint is comprised of three fields: key, value, and effect. Effect
 * can only be one of three types:  NoSchedule, PreferNoSchedule or NoExecute.
 * For more information, including usage and the valid values, see:
 * https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
 */
export interface Schema$NodeTaint {
  /**
   * Effect for taint.
   */
  effect: string;
  /**
   * Key for taint.
   */
  key: string;
  /**
   * Value for taint.
   */
  value: string;
}
/**
 * This operation resource represents operations that may have happened or are
 * happening on the cluster. All fields are output only.
 */
export interface Schema$Operation {
  /**
   * Detailed operation progress, if available.
   */
  detail: string;
  /**
   * [Output only] The time the operation completed, in
   * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
   */
  endTime: string;
  /**
   * [Output only] The name of the Google Compute Engine
   * [zone](/compute/docs/regions-zones/regions-zones#available) or
   * [region](/compute/docs/regions-zones/regions-zones#available) in which the
   * cluster resides.
   */
  location: string;
  /**
   * The server-assigned ID for the operation.
   */
  name: string;
  /**
   * The operation type.
   */
  operationType: string;
  /**
   * Server-defined URL for the resource.
   */
  selfLink: string;
  /**
   * [Output only] The time the operation started, in
   * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
   */
  startTime: string;
  /**
   * The current status of the operation.
   */
  status: string;
  /**
   * If an error has occurred, a textual description of the error.
   */
  statusMessage: string;
  /**
   * Server-defined URL for the target of the operation.
   */
  targetLink: string;
  /**
   * The name of the Google Compute Engine [zone](/compute/docs/zones#available)
   * in which the operation is taking place. This field is deprecated, use
   * location instead.
   */
  zone: string;
}
/**
 * Configuration for the PodSecurityPolicy feature.
 */
export interface Schema$PodSecurityPolicyConfig {
  /**
   * Enable the PodSecurityPolicy controller for this cluster. If enabled, pods
   * must be valid under a PodSecurityPolicy to be created.
   */
  enabled: boolean;
}
/**
 * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed
 * NodePool upgrade. This will be an no-op if the last upgrade successfully
 * completed.
 */
export interface Schema$RollbackNodePoolUpgradeRequest {
  /**
   * Deprecated. The name of the cluster to rollback. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The name (project, location, cluster, node pool id) of the node poll to
   * rollback upgrade. Specified in the format
   * &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The name of the node pool to rollback. This field has been
   * deprecated and replaced by the name field.
   */
  nodePoolId: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * Kubernetes Engine service configuration.
 */
export interface Schema$ServerConfig {
  /**
   * Version of Kubernetes the service deploys by default.
   */
  defaultClusterVersion: string;
  /**
   * Default image type.
   */
  defaultImageType: string;
  /**
   * List of valid image types.
   */
  validImageTypes: string[];
  /**
   * List of valid master versions.
   */
  validMasterVersions: string[];
  /**
   * List of valid node upgrade target versions.
   */
  validNodeVersions: string[];
}
/**
 * SetAddonsRequest sets the addons associated with the cluster.
 */
export interface Schema$SetAddonsConfigRequest {
  /**
   * The desired configurations for the various addons available to run in the
   * cluster.
   */
  addonsConfig: Schema$AddonsConfig;
  /**
   * Deprecated. The name of the cluster to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The name (project, location, cluster) of the cluster to set addons.
   * Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetLabelsRequest sets the Google Cloud Platform labels on a Google Container
 * Engine cluster, which will in turn set them for Google Compute Engine
 * resources used by that cluster
 */
export interface Schema$SetLabelsRequest {
  /**
   * Deprecated. The name of the cluster. This field has been deprecated and
   * replaced by the name field.
   */
  clusterId: string;
  /**
   * The fingerprint of the previous set of labels for this resource, used to
   * detect conflicts. The fingerprint is initially generated by Kubernetes
   * Engine and changes after every request to modify or update labels. You must
   * always provide an up-to-date fingerprint hash when updating or changing
   * labels. Make a &lt;code&gt;get()&lt;/code&gt; request to the resource to
   * get the latest fingerprint.
   */
  labelFingerprint: string;
  /**
   * The name (project, location, cluster id) of the cluster to set labels.
   * Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://developers.google.com/console/help/new/#projectnumber).
   * This field has been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * The labels to set for that cluster.
   */
  resourceLabels: any;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for
 * a cluster.
 */
export interface Schema$SetLegacyAbacRequest {
  /**
   * Deprecated. The name of the cluster to update. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * Whether ABAC authorization will be enabled in the cluster.
   */
  enabled: boolean;
  /**
   * The name (project, location, cluster id) of the cluster to set legacy abac.
   * Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetLocationsRequest sets the locations of the cluster.
 */
export interface Schema$SetLocationsRequest {
  /**
   * Deprecated. The name of the cluster to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The desired list of Google Compute Engine
   * [locations](/compute/docs/zones#available) in which the cluster&#39;s nodes
   * should be located. Changing the locations a cluster is in will result in
   * nodes being either created or removed from the cluster, depending on
   * whether locations are being added or removed.  This list must always
   * include the cluster&#39;s primary zone.
   */
  locations: string[];
  /**
   * The name (project, location, cluster) of the cluster to set locations.
   * Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetLoggingServiceRequest sets the logging service of a cluster.
 */
export interface Schema$SetLoggingServiceRequest {
  /**
   * Deprecated. The name of the cluster to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The logging service the cluster should use to write metrics. Currently
   * available options:  * &quot;logging.googleapis.com&quot; - the Google Cloud
   * Logging service * &quot;none&quot; - no metrics will be exported from the
   * cluster
   */
  loggingService: string;
  /**
   * The name (project, location, cluster) of the cluster to set logging.
   * Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
 */
export interface Schema$SetMaintenancePolicyRequest {
  /**
   * The name of the cluster to update.
   */
  clusterId: string;
  /**
   * The maintenance policy to be set for the cluster. An empty field clears the
   * existing maintenance policy.
   */
  maintenancePolicy: Schema$MaintenancePolicy;
  /**
   * The name (project, location, cluster id) of the cluster to set maintenance
   * policy. Specified in the format
   * &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840).
   */
  projectId: string;
  /**
   * The name of the Google Compute Engine [zone](/compute/docs/zones#available)
   * in which the cluster resides.
   */
  zone: string;
}
/**
 * SetMasterAuthRequest updates the admin password of a cluster.
 */
export interface Schema$SetMasterAuthRequest {
  /**
   * The exact form of action to be taken on the master auth.
   */
  action: string;
  /**
   * Deprecated. The name of the cluster to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The name (project, location, cluster) of the cluster to set auth. Specified
   * in the format &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * A description of the update.
   */
  update: Schema$MasterAuth;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetMonitoringServiceRequest sets the monitoring service of a cluster.
 */
export interface Schema$SetMonitoringServiceRequest {
  /**
   * Deprecated. The name of the cluster to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The monitoring service the cluster should use to write metrics. Currently
   * available options:  * &quot;monitoring.googleapis.com&quot; - the Google
   * Cloud Monitoring service * &quot;none&quot; - no metrics will be exported
   * from the cluster
   */
  monitoringService: string;
  /**
   * The name (project, location, cluster) of the cluster to set monitoring.
   * Specified in the format &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetNetworkPolicyRequest enables/disables network policy for a cluster.
 */
export interface Schema$SetNetworkPolicyRequest {
  /**
   * Deprecated. The name of the cluster. This field has been deprecated and
   * replaced by the name field.
   */
  clusterId: string;
  /**
   * The name (project, location, cluster id) of the cluster to set networking
   * policy. Specified in the format
   * &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Configuration options for the NetworkPolicy feature.
   */
  networkPolicy: Schema$NetworkPolicy;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://developers.google.com/console/help/new/#projectnumber).
   * This field has been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
 */
export interface Schema$SetNodePoolAutoscalingRequest {
  /**
   * Autoscaling configuration for the node pool.
   */
  autoscaling: Schema$NodePoolAutoscaling;
  /**
   * Deprecated. The name of the cluster to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The name (project, location, cluster, node pool) of the node pool to set
   * autoscaler settings. Specified in the format
   * &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The name of the node pool to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  nodePoolId: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetNodePoolManagementRequest sets the node management properties of a node
 * pool.
 */
export interface Schema$SetNodePoolManagementRequest {
  /**
   * Deprecated. The name of the cluster to update. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * NodeManagement configuration for the node pool.
   */
  management: Schema$NodeManagement;
  /**
   * The name (project, location, cluster, node pool id) of the node pool to set
   * management properties. Specified in the format
   * &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The name of the node pool to update. This field has been
   * deprecated and replaced by the name field.
   */
  nodePoolId: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetNodePoolSizeRequest sets the size a node pool.
 */
export interface Schema$SetNodePoolSizeRequest {
  /**
   * Deprecated. The name of the cluster to update. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The name (project, location, cluster, node pool id) of the node pool to set
   * size. Specified in the format
   * &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
   */
  name: string;
  /**
   * The desired node count for the pool.
   */
  nodeCount: number;
  /**
   * Deprecated. The name of the node pool to update. This field has been
   * deprecated and replaced by the name field.
   */
  nodePoolId: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * StartIPRotationRequest creates a new IP for the cluster and then performs a
 * node upgrade on each node pool to point to the new IP.
 */
export interface Schema$StartIPRotationRequest {
  /**
   * Deprecated. The name of the cluster. This field has been deprecated and
   * replaced by the name field.
   */
  clusterId: string;
  /**
   * The name (project, location, cluster id) of the cluster to start IP
   * rotation. Specified in the format
   * &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://developers.google.com/console/help/new/#projectnumber).
   * This field has been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * UpdateClusterRequest updates the settings of a cluster.
 */
export interface Schema$UpdateClusterRequest {
  /**
   * Deprecated. The name of the cluster to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The name (project, location, cluster) of the cluster to update. Specified
   * in the format &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * A description of the update.
   */
  update: Schema$ClusterUpdate;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * UpdateMasterRequest updates the master of the cluster.
 */
export interface Schema$UpdateMasterRequest {
  /**
   * Deprecated. The name of the cluster to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The Kubernetes version to change the master to.  Users may specify either
   * explicit versions offered by Kubernetes Engine or version aliases, which
   * have the following behavior:  - &quot;latest&quot;: picks the highest valid
   * Kubernetes version - &quot;1.X&quot;: picks the highest valid patch+gke.N
   * patch in the 1.X version - &quot;1.X.Y&quot;: picks the highest valid gke.N
   * patch in the 1.X.Y version - &quot;1.X.Y-gke.N&quot;: picks an explicit
   * Kubernetes version - &quot;-&quot;: picks the default Kubernetes version
   */
  masterVersion: string;
  /**
   * The name (project, location, cluster) of the cluster to update. Specified
   * in the format &#39;projects/x/locations/x/clusters/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * SetNodePoolVersionRequest updates the version of a node pool.
 */
export interface Schema$UpdateNodePoolRequest {
  /**
   * Deprecated. The name of the cluster to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  clusterId: string;
  /**
   * The desired image type for the node pool.
   */
  imageType: string;
  /**
   * The name (project, location, cluster, node pool) of the node pool to
   * update. Specified in the format
   * &#39;projects/x/locations/x/clusters/x/nodePools/*&#39;.
   */
  name: string;
  /**
   * Deprecated. The name of the node pool to upgrade. This field has been
   * deprecated and replaced by the name field.
   */
  nodePoolId: string;
  /**
   * The Kubernetes version to change the nodes to (typically an upgrade). Users
   * may specify either explicit versions offered by Kubernetes Engine or
   * version aliases, which have the following behavior:  - &quot;latest&quot;:
   * picks the highest valid Kubernetes version - &quot;1.X&quot;: picks the
   * highest valid patch+gke.N patch in the 1.X version - &quot;1.X.Y&quot;:
   * picks the highest valid gke.N patch in the 1.X.Y version -
   * &quot;1.X.Y-gke.N&quot;: picks an explicit Kubernetes version -
   * &quot;-&quot;: picks the Kubernetes master version
   */
  nodeVersion: string;
  /**
   * Deprecated. The Google Developers Console [project ID or project
   * number](https://support.google.com/cloud/answer/6158840). This field has
   * been deprecated and replaced by the name field.
   */
  projectId: string;
  /**
   * Deprecated. The name of the Google Compute Engine
   * [zone](/compute/docs/zones#available) in which the cluster resides. This
   * field has been deprecated and replaced by the name field.
   */
  zone: string;
}
/**
 * WorkloadMetadataConfig defines the metadata configuration to expose to
 * workloads on the node pool.
 */
export interface Schema$WorkloadMetadataConfig {
  /**
   * NodeMetadata is the configuration for how to expose the node metadata to
   * the workload running on the node.
   */
  nodeMetadata: string;
}

export class Resource$Projects {
  root: Container;
  locations: Resource$Projects$Locations;
  zones: Resource$Projects$Zones;
  constructor(root: Container) {
    this.root = root;
    this.getRoot.bind(this);
    this.locations = new Resource$Projects$Locations(root);
    this.zones = new Resource$Projects$Zones(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Locations {
  root: Container;
  clusters: Resource$Projects$Locations$Clusters;
  operations: Resource$Projects$Locations$Operations;
  constructor(root: Container) {
    this.root = root;
    this.getRoot.bind(this);
    this.clusters = new Resource$Projects$Locations$Clusters(root);
    this.operations = new Resource$Projects$Locations$Operations(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * container.projects.locations.getServerConfig
   * @desc Returns configuration info about the Kubernetes Engine service.
   * @alias container.projects.locations.getServerConfig
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name (project and location) of the server config to get Specified in the format 'projects/x/locations/x'.
   * @param {string=} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
   * @param {string=} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getServerConfig(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ServerConfig>;
  getServerConfig(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServerConfig>,
      callback?: BodyResponseCallback<Schema$ServerConfig>): void;
  getServerConfig(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServerConfig>,
      callback?: BodyResponseCallback<Schema$ServerConfig>):
      void|AxiosPromise<Schema$ServerConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/serverConfig')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServerConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServerConfig>(parameters);
    }
  }
}
export class Resource$Projects$Locations$Clusters {
  root: Container;
  nodePools: Resource$Projects$Locations$Clusters$Nodepools;
  constructor(root: Container) {
    this.root = root;
    this.getRoot.bind(this);
    this.nodePools = new Resource$Projects$Locations$Clusters$Nodepools(root);
  }

  getRoot() {
    return this.root;
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
  completeIpRotation(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  completeIpRotation(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  completeIpRotation(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:completeIpRotation')
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
   * container.projects.locations.clusters.create
   * @desc Creates a cluster, consisting of the specified number and type of
   * Google Compute Engine instances.  By default, the cluster is created in the
   * project's [default network](/compute/docs/networks-and-firewalls#networks).
   * One firewall is added for the cluster. After cluster creation, the cluster
   * creates routes for each node to allow the containers on that node to
   * communicate with all other instances in the cluster.  Finally, an entry is
   * added to the project's global metadata indicating which CIDR range is being
   * used by the cluster.
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/clusters')
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
   * container.projects.locations.clusters.delete
   * @desc Deletes the cluster, including the Kubernetes endpoint and all worker
   * nodes.  Firewalls and routes that were configured during cluster creation
   * are also deleted.  Other Google Compute Engine resources that might be in
   * use by the cluster (e.g. load balancer resources) will not be deleted if
   * they weren't present at the initial create time.
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
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
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
   * container.projects.locations.clusters.get
   * @desc Gets the details of a specific cluster.
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Cluster>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Cluster>,
      callback?: BodyResponseCallback<Schema$Cluster>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Cluster>,
      callback?: BodyResponseCallback<Schema$Cluster>):
      void|AxiosPromise<Schema$Cluster> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
      createAPIRequest<Schema$Cluster>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Cluster>(parameters);
    }
  }


  /**
   * container.projects.locations.clusters.list
   * @desc Lists all clusters owned by a project in either the specified zone or
   * all zones.
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListClustersResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListClustersResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListClustersResponse>):
      void|AxiosPromise<Schema$ListClustersResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/clusters')
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
      createAPIRequest<Schema$ListClustersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListClustersResponse>(parameters);
    }
  }


  /**
   * container.projects.locations.clusters.setAddons
   * @desc Sets the addons of a specific cluster.
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
  setAddons(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setAddons(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setAddons(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setAddons')
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
  setLegacyAbac(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setLegacyAbac(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setLegacyAbac(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setLegacyAbac')
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
   * container.projects.locations.clusters.setLocations
   * @desc Sets the locations of a specific cluster.
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
  setLocations(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setLocations(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setLocations(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setLocations')
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
   * container.projects.locations.clusters.setLogging
   * @desc Sets the logging service of a specific cluster.
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
  setLogging(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setLogging(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setLogging(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setLogging')
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
  setMaintenancePolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setMaintenancePolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setMaintenancePolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setMaintenancePolicy')
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
   * container.projects.locations.clusters.setMasterAuth
   * @desc Used to set master auth materials. Currently supports :- Changing the
   * admin password of a specific cluster. This can be either via password
   * generation or explicitly set. Modify basic_auth.csv and reset the K8S API
   * server.
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
  setMasterAuth(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setMasterAuth(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setMasterAuth(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setMasterAuth')
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
   * container.projects.locations.clusters.setMonitoring
   * @desc Sets the monitoring service of a specific cluster.
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
  setMonitoring(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setMonitoring(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setMonitoring(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setMonitoring')
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
   * container.projects.locations.clusters.setNetworkPolicy
   * @desc Enables/Disables Network Policy for a cluster.
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
  setNetworkPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setNetworkPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setNetworkPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setNetworkPolicy')
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
  setResourceLabels(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setResourceLabels(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setResourceLabels(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setResourceLabels')
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
   * container.projects.locations.clusters.startIpRotation
   * @desc Start master IP rotation.
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
  startIpRotation(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  startIpRotation(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  startIpRotation(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:startIpRotation')
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
   * container.projects.locations.clusters.update
   * @desc Updates the settings of a specific cluster.
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
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
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
   * container.projects.locations.clusters.updateMaster
   * @desc Updates the master of a specific cluster.
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
  updateMaster(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  updateMaster(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  updateMaster(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:updateMaster')
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
}
export class Resource$Projects$Locations$Clusters$Nodepools {
  root: Container;
  constructor(root: Container) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * container.projects.locations.clusters.nodePools.create
   * @desc Creates a node pool for a cluster.
   * @alias container.projects.locations.clusters.nodePools.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The parent (project, location, cluster id) where the node pool will be created. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
   * @param {().CreateNodePoolRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/nodePools')
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
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
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
   * container.projects.locations.clusters.nodePools.get
   * @desc Retrieves the node pool requested.
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$NodePool>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$NodePool>,
      callback?: BodyResponseCallback<Schema$NodePool>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$NodePool>,
      callback?: BodyResponseCallback<Schema$NodePool>):
      void|AxiosPromise<Schema$NodePool> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListNodePoolsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback?: BodyResponseCallback<Schema$ListNodePoolsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback?: BodyResponseCallback<Schema$ListNodePoolsResponse>):
      void|AxiosPromise<Schema$ListNodePoolsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/nodePools')
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
      createAPIRequest<Schema$ListNodePoolsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListNodePoolsResponse>(parameters);
    }
  }


  /**
   * container.projects.locations.clusters.nodePools.rollback
   * @desc Roll back the previously Aborted or Failed NodePool upgrade. This
   * will be an no-op if the last upgrade successfully completed.
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
  rollback(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  rollback(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  rollback(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:rollback')
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
  setAutoscaling(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setAutoscaling(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setAutoscaling(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setAutoscaling')
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
  setManagement(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setManagement(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setManagement(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setManagement')
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
   * container.projects.locations.clusters.nodePools.setSize
   * @desc Sets the size of a specific node pool.
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
  setSize(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setSize(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setSize(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setSize')
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
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
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
}


export class Resource$Projects$Locations$Operations {
  root: Container;
  constructor(root: Container) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  cancel(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:cancel')
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
   * container.projects.locations.operations.list
   * @desc Lists all operations in a project in a specific zone or all zones.
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListOperationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
      void|AxiosPromise<Schema$ListOperationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/operations')
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
      createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListOperationsResponse>(parameters);
    }
  }
}


export class Resource$Projects$Zones {
  root: Container;
  clusters: Resource$Projects$Zones$Clusters;
  operations: Resource$Projects$Zones$Operations;
  constructor(root: Container) {
    this.root = root;
    this.getRoot.bind(this);
    this.clusters = new Resource$Projects$Zones$Clusters(root);
    this.operations = new Resource$Projects$Zones$Operations(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * container.projects.zones.getServerconfig
   * @desc Returns configuration info about the Kubernetes Engine service.
   * @alias container.projects.zones.getServerconfig
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.name The name (project and location) of the server config to get Specified in the format 'projects/x/locations/x'.
   * @param {string} params.projectId Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
   * @param {string} params.zone Deprecated. The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getServerconfig(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ServerConfig>;
  getServerconfig(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServerConfig>,
      callback?: BodyResponseCallback<Schema$ServerConfig>): void;
  getServerconfig(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServerConfig>,
      callback?: BodyResponseCallback<Schema$ServerConfig>):
      void|AxiosPromise<Schema$ServerConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta1/projects/{projectId}/zones/{zone}/serverconfig')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone'],
      pathParams: ['projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServerConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServerConfig>(parameters);
    }
  }
}
export class Resource$Projects$Zones$Clusters {
  root: Container;
  nodePools: Resource$Projects$Zones$Clusters$Nodepools;
  constructor(root: Container) {
    this.root = root;
    this.getRoot.bind(this);
    this.nodePools = new Resource$Projects$Zones$Clusters$Nodepools(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * container.projects.zones.clusters.addons
   * @desc Sets the addons of a specific cluster.
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
  addons(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  addons(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  addons(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
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
  completeIpRotation(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  completeIpRotation(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  completeIpRotation(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.create
   * @desc Creates a cluster, consisting of the specified number and type of
   * Google Compute Engine instances.  By default, the cluster is created in the
   * project's [default network](/compute/docs/networks-and-firewalls#networks).
   * One firewall is added for the cluster. After cluster creation, the cluster
   * creates routes for each node to allow the containers on that node to
   * communicate with all other instances in the cluster.  Finally, an entry is
   * added to the project's global metadata indicating which CIDR range is being
   * used by the cluster.
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta1/projects/{projectId}/zones/{zone}/clusters')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone'],
      pathParams: ['projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.delete
   * @desc Deletes the cluster, including the Kubernetes endpoint and all worker
   * nodes.  Firewalls and routes that were configured during cluster creation
   * are also deleted.  Other Google Compute Engine resources that might be in
   * use by the cluster (e.g. load balancer resources) will not be deleted if
   * they weren't present at the initial create time.
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
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.get
   * @desc Gets the details of a specific cluster.
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Cluster>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Cluster>,
      callback?: BodyResponseCallback<Schema$Cluster>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Cluster>,
      callback?: BodyResponseCallback<Schema$Cluster>):
      void|AxiosPromise<Schema$Cluster> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
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
  legacyAbac(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  legacyAbac(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  legacyAbac(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.list
   * @desc Lists all clusters owned by a project in either the specified zone or
   * all zones.
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListClustersResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListClustersResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListClustersResponse>):
      void|AxiosPromise<Schema$ListClustersResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta1/projects/{projectId}/zones/{zone}/clusters')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone'],
      pathParams: ['projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListClustersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListClustersResponse>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.locations
   * @desc Sets the locations of a specific cluster.
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
  locations(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  locations(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  locations(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.logging
   * @desc Sets the logging service of a specific cluster.
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
  logging(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  logging(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  logging(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.master
   * @desc Updates the master of a specific cluster.
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
  master(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  master(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  master(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.monitoring
   * @desc Sets the monitoring service of a specific cluster.
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
  monitoring(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  monitoring(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  monitoring(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
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
  resourceLabels(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  resourceLabels(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  resourceLabels(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
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
  setMaintenancePolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setMaintenancePolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setMaintenancePolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.setMasterAuth
   * @desc Used to set master auth materials. Currently supports :- Changing the
   * admin password of a specific cluster. This can be either via password
   * generation or explicitly set. Modify basic_auth.csv and reset the K8S API
   * server.
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
  setMasterAuth(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setMasterAuth(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setMasterAuth(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.setNetworkPolicy
   * @desc Enables/Disables Network Policy for a cluster.
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
  setNetworkPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setNetworkPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setNetworkPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.startIpRotation
   * @desc Start master IP rotation.
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
  startIpRotation(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  startIpRotation(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  startIpRotation(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.update
   * @desc Updates the settings of a specific cluster.
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
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }
}
export class Resource$Projects$Zones$Clusters$Nodepools {
  root: Container;
  constructor(root: Container) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  autoscaling(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  autoscaling(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  autoscaling(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
      pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
      context: this.getRoot()
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
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
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
      pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.nodePools.get
   * @desc Retrieves the node pool requested.
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$NodePool>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$NodePool>,
      callback?: BodyResponseCallback<Schema$NodePool>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$NodePool>,
      callback?: BodyResponseCallback<Schema$NodePool>):
      void|AxiosPromise<Schema$NodePool> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
      pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
      context: this.getRoot()
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListNodePoolsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback?: BodyResponseCallback<Schema$ListNodePoolsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback?: BodyResponseCallback<Schema$ListNodePoolsResponse>):
      void|AxiosPromise<Schema$ListNodePoolsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId'],
      pathParams: ['clusterId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListNodePoolsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListNodePoolsResponse>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.nodePools.rollback
   * @desc Roll back the previously Aborted or Failed NodePool upgrade. This
   * will be an no-op if the last upgrade successfully completed.
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
  rollback(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  rollback(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  rollback(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
      pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
      context: this.getRoot()
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
  setManagement(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setManagement(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setManagement(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
      pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.clusters.nodePools.setSize
   * @desc Sets the size of a specific node pool.
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
  setSize(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  setSize(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  setSize(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
      pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
      context: this.getRoot()
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
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
      pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }
}


export class Resource$Projects$Zones$Operations {
  root: Container;
  constructor(root: Container) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  cancel(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'operationId'],
      pathParams: ['operationId', 'projectId', 'zone'],
      context: this.getRoot()
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone', 'operationId'],
      pathParams: ['operationId', 'projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * container.projects.zones.operations.list
   * @desc Lists all operations in a project in a specific zone or all zones.
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListOperationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
      void|AxiosPromise<Schema$ListOperationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta1/projects/{projectId}/zones/{zone}/operations')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'zone'],
      pathParams: ['projectId', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListOperationsResponse>(parameters);
    }
  }
}
