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

export namespace dataproc_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
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
   * Cloud Dataproc API
   *
   * Manages Hadoop-based clusters and jobs on Google Cloud Platform.
   *
   * @example
   * const {google} = require('googleapis');
   * const dataproc = google.dataproc('v1beta2');
   *
   * @namespace dataproc
   * @type {Function}
   * @version v1beta2
   * @variation v1beta2
   * @param {object=} options Options for Dataproc
   */
  export class Dataproc {
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
   * Specifies the type and number of accelerator cards attached to the instances of an instance group (see GPUs on Compute Engine).
   */
  export interface Schema$AcceleratorConfig {
    /**
     * The number of the accelerator cards of this type exposed to this instance.
     */
    acceleratorCount?: number | null;
    /**
     * Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypesExamples * https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 * projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 * nvidia-tesla-k80Auto Zone Exception: If you are using the Cloud Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-k80.
     */
    acceleratorTypeUri?: string | null;
  }
  /**
   * Autoscaling Policy config associated with the cluster.
   */
  export interface Schema$AutoscalingConfig {
    /**
     * Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id] projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Cloud Dataproc region.
     */
    policyUri?: string | null;
  }
  /**
   * Describes an autoscaling policy for Dataproc cluster autoscaler.
   */
  export interface Schema$AutoscalingPolicy {
    basicAlgorithm?: Schema$BasicAutoscalingAlgorithm;
    /**
     * Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
     */
    id?: string | null;
    /**
     * Output only. The &quot;resource name&quot; of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     */
    name?: string | null;
    /**
     * Optional. Describes how the autoscaler will operate for secondary workers.
     */
    secondaryWorkerConfig?: Schema$InstanceGroupAutoscalingPolicyConfig;
    /**
     * Required. Describes how the autoscaler will operate for primary workers.
     */
    workerConfig?: Schema$InstanceGroupAutoscalingPolicyConfig;
  }
  /**
   * Basic algorithm for autoscaling.
   */
  export interface Schema$BasicAutoscalingAlgorithm {
    /**
     * Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m.
     */
    cooldownPeriod?: string | null;
    /**
     * Required. YARN autoscaling configuration.
     */
    yarnConfig?: Schema$BasicYarnAutoscalingConfig;
  }
  /**
   * Basic autoscaling configurations for YARN.
   */
  export interface Schema$BasicYarnAutoscalingConfig {
    /**
     * Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.Bounds: 0s, 1d.
     */
    gracefulDecommissionTimeout?: string | null;
    /**
     * Required. Fraction of average pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job.Bounds: 0.0, 1.0.
     */
    scaleDownFactor?: number | null;
    /**
     * Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.
     */
    scaleDownMinWorkerFraction?: number | null;
    /**
     * Required. Fraction of average pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0.
     */
    scaleUpFactor?: number | null;
    /**
     * Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.
     */
    scaleUpMinWorkerFraction?: number | null;
  }
  /**
   * Associates members with a role.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. members can have the following values: allUsers: A special identifier that represents anyone who is  on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone  who is authenticated with a Google account or a service account. user:{emailid}: An email address that represents a specific Google  account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a service  account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group.  For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the  users of that domain. For example, google.com or example.com.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to members. For example, roles/viewer, roles/editor, or roles/owner.
     */
    role?: string | null;
  }
  /**
   * A request to cancel a job.
   */
  export interface Schema$CancelJobRequest {}
  /**
   * Describes the identifying information, config, and status of a cluster of Compute Engine instances.
   */
  export interface Schema$Cluster {
    /**
     * Required. The cluster name. Cluster names within a project must be unique. Names of deleted clusters can be reused.
     */
    clusterName?: string | null;
    /**
     * Output only. A cluster UUID (Unique Universal Identifier). Cloud Dataproc generates this value when it creates the cluster.
     */
    clusterUuid?: string | null;
    /**
     * Required. The cluster config. Note that Cloud Dataproc may set default values, and values may change when clusters are updated.
     */
    config?: Schema$ClusterConfig;
    /**
     * Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
     */
    metrics?: Schema$ClusterMetrics;
    /**
     * Required. The Google Cloud Platform project ID that the cluster belongs to.
     */
    projectId?: string | null;
    /**
     * Output only. Cluster status.
     */
    status?: Schema$ClusterStatus;
    /**
     * Output only. The previous cluster status.
     */
    statusHistory?: Schema$ClusterStatus[];
  }
  /**
   * The cluster config.
   */
  export interface Schema$ClusterConfig {
    /**
     * Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.
     */
    autoscalingConfig?: Schema$AutoscalingConfig;
    /**
     * Optional. A Google Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster&#39;s staging bucket according to the Google Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Cloud Dataproc staging bucket).
     */
    configBucket?: string | null;
    /**
     * Optional. Encryption settings for the cluster.
     */
    encryptionConfig?: Schema$EncryptionConfig;
    /**
     * Optional. Port/endpoint configuration for this cluster
     */
    endpointConfig?: Schema$EndpointConfig;
    /**
     * Optional. The shared Compute Engine config settings for all instances in a cluster.
     */
    gceClusterConfig?: Schema$GceClusterConfig;
    /**
     * Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node&#39;s &lt;code&gt;role&lt;/code&gt; metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1beta2/instance/attributes/dataproc-role) if [[ &quot;${ROLE}&quot; == &#39;Master&#39; ]]; then   ... master specific actions ... else   ... worker specific actions ... fi
     */
    initializationActions?: Schema$NodeInitializationAction[];
    /**
     * Optional. The config setting for auto delete cluster schedule.
     */
    lifecycleConfig?: Schema$LifecycleConfig;
    /**
     * Optional. The Compute Engine config settings for the master instance in a cluster.
     */
    masterConfig?: Schema$InstanceGroupConfig;
    /**
     * Optional. The Compute Engine config settings for additional worker instances in a cluster.
     */
    secondaryWorkerConfig?: Schema$InstanceGroupConfig;
    /**
     * Optional. Security related configuration.
     */
    securityConfig?: Schema$SecurityConfig;
    /**
     * Optional. The config settings for software inside the cluster.
     */
    softwareConfig?: Schema$SoftwareConfig;
    /**
     * Optional. The Compute Engine config settings for worker instances in a cluster.
     */
    workerConfig?: Schema$InstanceGroupConfig;
  }
  /**
   * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
   */
  export interface Schema$ClusterMetrics {
    /**
     * The HDFS metrics.
     */
    hdfsMetrics?: {[key: string]: string} | null;
    /**
     * The YARN metrics.
     */
    yarnMetrics?: {[key: string]: string} | null;
  }
  /**
   * The cluster operation triggered by a workflow.
   */
  export interface Schema$ClusterOperation {
    /**
     * Output only. Indicates the operation is done.
     */
    done?: boolean | null;
    /**
     * Output only. Error, if operation failed.
     */
    error?: string | null;
    /**
     * Output only. The id of the cluster operation.
     */
    operationId?: string | null;
  }
  /**
   * Metadata describing the operation.
   */
  export interface Schema$ClusterOperationMetadata {
    /**
     * Output only. Name of the cluster for the operation.
     */
    clusterName?: string | null;
    /**
     * Output only. Cluster UUID for the operation.
     */
    clusterUuid?: string | null;
    /**
     * Output only. Short description of operation.
     */
    description?: string | null;
    /**
     * Output only. Labels associated with the operation
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The operation type.
     */
    operationType?: string | null;
    /**
     * Output only. Current operation status.
     */
    status?: Schema$ClusterOperationStatus;
    /**
     * Output only. The previous operation status.
     */
    statusHistory?: Schema$ClusterOperationStatus[];
    /**
     * Output only. Errors encountered during operation execution.
     */
    warnings?: string[] | null;
  }
  /**
   * The status of the operation.
   */
  export interface Schema$ClusterOperationStatus {
    /**
     * Output only. A message containing any operation metadata details.
     */
    details?: string | null;
    /**
     * Output only. A message containing the detailed operation state.
     */
    innerState?: string | null;
    /**
     * Output only. A message containing the operation state.
     */
    state?: string | null;
    /**
     * Output only. The time this state was entered.
     */
    stateStartTime?: string | null;
  }
  /**
   * A selector that chooses target cluster for jobs based on metadata.
   */
  export interface Schema$ClusterSelector {
    /**
     * Required. The cluster labels. Cluster must have all labels to match.
     */
    clusterLabels?: {[key: string]: string} | null;
    /**
     * Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used.
     */
    zone?: string | null;
  }
  /**
   * The status of a cluster and its instances.
   */
  export interface Schema$ClusterStatus {
    /**
     * Output only. Optional details of cluster&#39;s state.
     */
    detail?: string | null;
    /**
     * Output only. The cluster&#39;s state.
     */
    state?: string | null;
    /**
     * Output only. Time when this state was entered.
     */
    stateStartTime?: string | null;
    /**
     * Output only. Additional state information that includes status reported by the agent.
     */
    substate?: string | null;
  }
  /**
   * A request to collect cluster diagnostic information.
   */
  export interface Schema$DiagnoseClusterRequest {}
  /**
   * The location of diagnostic output.
   */
  export interface Schema$DiagnoseClusterResults {
    /**
     * Output only. The Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics.
     */
    outputUri?: string | null;
  }
  /**
   * Specifies the config of disk options for a group of VM instances.
   */
  export interface Schema$DiskConfig {
    /**
     * Optional. Size in GB of the boot disk (default is 500GB).
     */
    bootDiskSizeGb?: number | null;
    /**
     * Optional. Type of the boot disk (default is &quot;pd-standard&quot;). Valid values: &quot;pd-ssd&quot; (Persistent Disk Solid State Drive) or &quot;pd-standard&quot; (Persistent Disk Hard Disk Drive).
     */
    bootDiskType?: string | null;
    /**
     * Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
     */
    numLocalSsds?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo {   rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for Empty is empty JSON object {}.
   */
  export interface Schema$Empty {}
  /**
   * Encryption settings for the cluster.
   */
  export interface Schema$EncryptionConfig {
    /**
     * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
     */
    gcePdKmsKeyName?: string | null;
  }
  /**
   * Endpoint config for this cluster
   */
  export interface Schema$EndpointConfig {
    /**
     * Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
     */
    enableHttpPortAccess?: boolean | null;
    /**
     * Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.
     */
    httpPorts?: {[key: string]: string} | null;
  }
  /**
   * Represents an expression text. Example: title: &quot;User account presence&quot; description: &quot;Determines whether the request has a user account&quot; expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.The application context of the containing message determines which well-known feature set of CEL is supported.
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
   * Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
   */
  export interface Schema$GceClusterConfig {
    /**
     * Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
     */
    internalIpOnly?: boolean | null;
    /**
     * The Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the &quot;default&quot; network of the project is used, if it exists. Cannot be a &quot;Custom Subnet Network&quot; (see Using Subnetworks for more information).A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default projects/[project_id]/regions/global/default default
     */
    networkUri?: string | null;
    /**
     * Optional. Reservation Affinity for consuming Zonal reservation.
     */
    reservationAffinity?: Schema$ReservationAffinity;
    /**
     * Optional. The service account of the instances. Defaults to the default Compute Engine service account. Custom service accounts need permissions equivalent to the following IAM roles: roles/logging.logWriter roles/storage.objectAdmin(see https://cloud.google.com/compute/docs/access/service-accounts#custom_service_accounts for more information). Example: [account_id]@[project_id].iam.gserviceaccount.com
     */
    serviceAccount?: string | null;
    /**
     * Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read_write https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full_control
     */
    serviceAccountScopes?: string[] | null;
    /**
     * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0 projects/[project_id]/regions/us-east1/subnetworks/sub0 sub0
     */
    subnetworkUri?: string | null;
    /**
     * The Compute Engine tags to add to all instances (see Tagging instances).
     */
    tags?: string[] | null;
    /**
     * Optional. The zone where the Compute Engine cluster will be located. On a create request, it is required in the &quot;global&quot; region. If omitted in a non-global Cloud Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone] projects/[project_id]/zones/[zone] us-central1-f
     */
    zoneUri?: string | null;
  }
  /**
   * Request message for GetIamPolicy method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A GetPolicyOptions object for specifying options to GetIamPolicy. This field is only used by Cloud IAM.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * A Cloud Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
   */
  export interface Schema$HadoopJob {
    /**
     * Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.
     */
    archiveUris?: string[] | null;
    /**
     * Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
     */
    args?: string[] | null;
    /**
     * Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.
     */
    fileUris?: string[] | null;
    /**
     * Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.
     */
    jarFileUris?: string[] | null;
    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * The name of the driver&#39;s main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris.
     */
    mainClass?: string | null;
    /**
     * The HCFS URI of the jar file containing the main class. Examples:  &#39;gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar&#39;  &#39;hdfs:/tmp/test-samples/custom-wordcount.jar&#39;  &#39;file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar&#39;
     */
    mainJarFileUri?: string | null;
    /**
     * Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code.
     */
    properties?: {[key: string]: string} | null;
  }
  /**
   * A Cloud Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
   */
  export interface Schema$HiveJob {
    /**
     * Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
     */
    continueOnFailure?: boolean | null;
    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
     */
    jarFileUris?: string[] | null;
    /**
     * Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
     */
    properties?: {[key: string]: string} | null;
    /**
     * The HCFS URI of the script that contains Hive queries.
     */
    queryFileUri?: string | null;
    /**
     * A list of queries.
     */
    queryList?: Schema$QueryList;
    /**
     * Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name=&quot;value&quot;;).
     */
    scriptVariables?: {[key: string]: string} | null;
  }
  /**
   * Configuration for the size bounds of an instance group, including its proportional size to other groups.
   */
  export interface Schema$InstanceGroupAutoscalingPolicyConfig {
    /**
     * Optional. Maximum number of instances for this group. Required for primary workers. Note that by default, clusters will not use secondary workers. Required for secondary workers if the minimum secondary instances is set.Primary workers - Bounds: [min_instances, ). Required. Secondary workers - Bounds: [min_instances, ). Default: 0.
     */
    maxInstances?: number | null;
    /**
     * Optional. Minimum number of instances for this group.Primary workers - Bounds: 2, max_instances. Default: 2. Secondary workers - Bounds: 0, max_instances. Default: 0.
     */
    minInstances?: number | null;
    /**
     * Optional. Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. For example, if primary workers have weight 2, and secondary workers have weight 1, the cluster will have approximately 2 primary workers for each secondary worker.The cluster may not reach the specified balance if constrained by min/max bounds or other autoscaling settings. For example, if max_instances for secondary workers is 0, then only primary workers will be added. The cluster can also be out of balance when created.If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group. If weight is set for one group only, the cluster will default to zero weight on the unset group. For example if weight is set only on primary workers, the cluster will use primary workers only and no secondary workers.
     */
    weight?: number | null;
  }
  /**
   * Optional. The config settings for Compute Engine resources in an instance group, such as a master or worker group.
   */
  export interface Schema$InstanceGroupConfig {
    /**
     * Optional. The Compute Engine accelerator configuration for these instances.Beta Feature: This feature is still under development. It may be changed before final release.
     */
    accelerators?: Schema$AcceleratorConfig[];
    /**
     * Optional. Disk option config settings.
     */
    diskConfig?: Schema$DiskConfig;
    /**
     * Optional. The Compute Engine image resource used for cluster instances. It can be specified or may be inferred from SoftwareConfig.image_version.
     */
    imageUri?: string | null;
    /**
     * Output only. The list of instance names. Cloud Dataproc derives the names from cluster_name, num_instances, and the instance group.
     */
    instanceNames?: string[] | null;
    /**
     * Optional. Specifies that this instance group contains preemptible instances.
     */
    isPreemptible?: boolean | null;
    /**
     * Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2 projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using the Cloud Dataproc Auto Zone Placement feature, you must use the short name of the machine type resource, for example, n1-standard-2.
     */
    machineTypeUri?: string | null;
    /**
     * Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
     */
    managedGroupConfig?: Schema$ManagedGroupConfig;
    /**
     * Optional. Specifies the minimum cpu platform for the Instance Group. See Cloud Dataproc&amp;rarr;Minimum CPU Platform.
     */
    minCpuPlatform?: string | null;
    /**
     * Optional. The number of VM instances in the instance group. For master instance groups, must be set to 1.
     */
    numInstances?: number | null;
  }
  /**
   * A request to instantiate a workflow template.
   */
  export interface Schema$InstantiateWorkflowTemplateRequest {
    /**
     * Deprecated. Please use request_id field instead.
     */
    instanceId?: string | null;
    /**
     * Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 100 characters.
     */
    parameters?: {[key: string]: string} | null;
    /**
     * Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string | null;
    /**
     * Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template.
     */
    version?: number | null;
  }
  /**
   * A Cloud Dataproc job resource.
   */
  export interface Schema$Job {
    /**
     * Output only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.
     */
    driverControlFilesUri?: string | null;
    /**
     * Output only. A URI pointing to the location of the stdout of the job&#39;s driver program.
     */
    driverOutputResourceUri?: string | null;
    /**
     * Job is a Hadoop job.
     */
    hadoopJob?: Schema$HadoopJob;
    /**
     * Job is a Hive job.
     */
    hiveJob?: Schema$HiveJob;
    /**
     * Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that may be reused over time.
     */
    jobUuid?: string | null;
    /**
     * Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Job is a Pig job.
     */
    pigJob?: Schema$PigJob;
    /**
     * Required. Job information, including how, when, and where to run the job.
     */
    placement?: Schema$JobPlacement;
    /**
     * Job is a Presto job
     */
    prestoJob?: Schema$PrestoJob;
    /**
     * Job is a Pyspark job.
     */
    pysparkJob?: Schema$PySparkJob;
    /**
     * Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a &lt;code&gt;job_id&lt;/code&gt;.
     */
    reference?: Schema$JobReference;
    /**
     * Optional. Job scheduling configuration.
     */
    scheduling?: Schema$JobScheduling;
    /**
     * Job is a Spark job.
     */
    sparkJob?: Schema$SparkJob;
    /**
     * Job is a SparkR job.
     */
    sparkRJob?: Schema$SparkRJob;
    /**
     * Job is a SparkSql job.
     */
    sparkSqlJob?: Schema$SparkSqlJob;
    /**
     * Output only. The job status. Additional application-specific status information may be contained in the &lt;code&gt;type_job&lt;/code&gt; and &lt;code&gt;yarn_applications&lt;/code&gt; fields.
     */
    status?: Schema$JobStatus;
    /**
     * Output only. The previous job status.
     */
    statusHistory?: Schema$JobStatus[];
    /**
     * Output only. The email address of the user submitting the job. For jobs submitted on the cluster, the address is &lt;code&gt;username@hostname&lt;/code&gt;.
     */
    submittedBy?: string | null;
    /**
     * Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
     */
    yarnApplications?: Schema$YarnApplication[];
  }
  /**
   * Cloud Dataproc job config.
   */
  export interface Schema$JobPlacement {
    /**
     * Required. The name of the cluster where the job will be submitted.
     */
    clusterName?: string | null;
    /**
     * Output only. A cluster UUID generated by the Cloud Dataproc service when the job is submitted.
     */
    clusterUuid?: string | null;
  }
  /**
   * Encapsulates the full scoping used to reference a job.
   */
  export interface Schema$JobReference {
    /**
     * Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server.
     */
    jobId?: string | null;
    /**
     * Required. The ID of the Google Cloud Platform project that the job belongs to.
     */
    projectId?: string | null;
  }
  /**
   * Job scheduling options.
   */
  export interface Schema$JobScheduling {
    /**
     * Optional. Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported failed.A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window.Maximum value is 10.
     */
    maxFailuresPerHour?: number | null;
  }
  /**
   * Cloud Dataproc job status.
   */
  export interface Schema$JobStatus {
    /**
     * Output only. Optional job state details, such as an error description if the state is &lt;code&gt;ERROR&lt;/code&gt;.
     */
    details?: string | null;
    /**
     * Output only. A state message specifying the overall job state.
     */
    state?: string | null;
    /**
     * Output only. The time when this state was entered.
     */
    stateStartTime?: string | null;
    /**
     * Output only. Additional state information, which includes status reported by the agent.
     */
    substate?: string | null;
  }
  /**
   * Specifies Kerberos related configuration.
   */
  export interface Schema$KerberosConfig {
    /**
     * Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
     */
    crossRealmTrustAdminServer?: string | null;
    /**
     * Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
     */
    crossRealmTrustKdc?: string | null;
    /**
     * Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.
     */
    crossRealmTrustRealm?: string | null;
    /**
     * Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship.
     */
    crossRealmTrustSharedPasswordUri?: string | null;
    /**
     * Optional. Flag to indicate whether to Kerberize the cluster.
     */
    enableKerberos?: boolean | null;
    /**
     * Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.
     */
    kdcDbKeyUri?: string | null;
    /**
     * Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.
     */
    keyPasswordUri?: string | null;
    /**
     * Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc.
     */
    keystorePasswordUri?: string | null;
    /**
     * Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
     */
    keystoreUri?: string | null;
    /**
     * Required. The uri of the KMS key used to encrypt various sensitive files.
     */
    kmsKeyUri?: string | null;
    /**
     * Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.
     */
    realm?: string | null;
    /**
     * Required. The Cloud Storage URI of a KMS encrypted file containing the root principal password.
     */
    rootPrincipalPasswordUri?: string | null;
    /**
     * Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used.
     */
    tgtLifetimeHours?: number | null;
    /**
     * Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.
     */
    truststorePasswordUri?: string | null;
    /**
     * Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
     */
    truststoreUri?: string | null;
  }
  /**
   * Specifies the cluster auto-delete schedule configuration.
   */
  export interface Schema$LifecycleConfig {
    /**
     * Optional. The time when cluster will be auto-deleted.
     */
    autoDeleteTime?: string | null;
    /**
     * Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Valid range: 10m, 14d.Example: &quot;1d&quot;, to delete the cluster 1 day after its creation..
     */
    autoDeleteTtl?: string | null;
    /**
     * Optional. The duration to keep the cluster alive while idling. Passing this threshold will cause the cluster to be deleted. Valid range: 10m, 14d.Example: &quot;10m&quot;, the minimum value, to delete the cluster when it has had no jobs running for 10 minutes.
     */
    idleDeleteTtl?: string | null;
    /**
     * Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness.
     */
    idleStartTime?: string | null;
  }
  /**
   * A response to a request to list autoscaling policies in a project.
   */
  export interface Schema$ListAutoscalingPoliciesResponse {
    /**
     * Output only. This token is included in the response if there are more results to fetch.
     */
    nextPageToken?: string | null;
    /**
     * Output only. Autoscaling policies list.
     */
    policies?: Schema$AutoscalingPolicy[];
  }
  /**
   * The list of all clusters in a project.
   */
  export interface Schema$ListClustersResponse {
    /**
     * Output only. The clusters in the project.
     */
    clusters?: Schema$Cluster[];
    /**
     * Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent &lt;code&gt;ListClustersRequest&lt;/code&gt;.
     */
    nextPageToken?: string | null;
  }
  /**
   * A list of jobs in a project.
   */
  export interface Schema$ListJobsResponse {
    /**
     * Output only. Jobs list.
     */
    jobs?: Schema$Job[];
    /**
     * Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent &lt;code&gt;ListJobsRequest&lt;/code&gt;.
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
   * A response to a request to list workflow templates in a project.
   */
  export interface Schema$ListWorkflowTemplatesResponse {
    /**
     * Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent &lt;code&gt;ListWorkflowTemplatesRequest&lt;/code&gt;.
     */
    nextPageToken?: string | null;
    /**
     * Output only. WorkflowTemplates list.
     */
    templates?: Schema$WorkflowTemplate[];
  }
  /**
   * The runtime logging config of the job.
   */
  export interface Schema$LoggingConfig {
    /**
     * The per-package log levels for the driver. This may include &quot;root&quot; package name to configure rootLogger. Examples:  &#39;com.google = FATAL&#39;, &#39;root = INFO&#39;, &#39;org.apache = DEBUG&#39;
     */
    driverLogLevels?: {[key: string]: string} | null;
  }
  /**
   * Cluster that is managed by the workflow.
   */
  export interface Schema$ManagedCluster {
    /**
     * Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.
     */
    clusterName?: string | null;
    /**
     * Required. The cluster configuration.
     */
    config?: Schema$ClusterConfig;
    /**
     * Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * Specifies the resources used to actively manage an instance group.
   */
  export interface Schema$ManagedGroupConfig {
    /**
     * Output only. The name of the Instance Group Manager for this group.
     */
    instanceGroupManagerName?: string | null;
    /**
     * Output only. The name of the Instance Template used for the Managed Instance Group.
     */
    instanceTemplateName?: string | null;
  }
  /**
   * Specifies an executable to run on a fully configured node and a timeout period for executable completion.
   */
  export interface Schema$NodeInitializationAction {
    /**
     * Required. Cloud Storage URI of executable file.
     */
    executableFile?: string | null;
    /**
     * Optional. Amount of time executable has to complete. Default is 10 minutes. Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
     */
    executionTimeout?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
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
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A job executed by the workflow.
   */
  export interface Schema$OrderedJob {
    /**
     * Job is a Hadoop job.
     */
    hadoopJob?: Schema$HadoopJob;
    /**
     * Job is a Hive job.
     */
    hiveJob?: Schema$HiveJob;
    /**
     * Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Job is a Pig job.
     */
    pigJob?: Schema$PigJob;
    /**
     * Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.
     */
    prerequisiteStepIds?: string[] | null;
    /**
     * Job is a Pyspark job.
     */
    pysparkJob?: Schema$PySparkJob;
    /**
     * Optional. Job scheduling configuration.
     */
    scheduling?: Schema$JobScheduling;
    /**
     * Job is a Spark job.
     */
    sparkJob?: Schema$SparkJob;
    /**
     * Job is a SparkSql job.
     */
    sparkSqlJob?: Schema$SparkSqlJob;
    /**
     * Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
     */
    stepId?: string | null;
  }
  /**
   * Configuration for parameter validation.
   */
  export interface Schema$ParameterValidation {
    /**
     * Validation based on regular expressions.
     */
    regex?: Schema$RegexValidation;
    /**
     * Validation based on a list of allowed values.
     */
    values?: Schema$ValueValidation;
  }
  /**
   * A Cloud Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
   */
  export interface Schema$PigJob {
    /**
     * Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
     */
    continueOnFailure?: boolean | null;
    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
     */
    jarFileUris?: string[] | null;
    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
     */
    properties?: {[key: string]: string} | null;
    /**
     * The HCFS URI of the script that contains the Pig queries.
     */
    queryFileUri?: string | null;
    /**
     * A list of queries.
     */
    queryList?: Schema$QueryList;
    /**
     * Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]).
     */
    scriptVariables?: {[key: string]: string} | null;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.A Policy consists of a list of bindings. A binding binds a list of members to a role, where the members can be user accounts, Google groups, Google domains, and service accounts. A role is a named list of permissions defined by IAM.JSON Example {   &quot;bindings&quot;: [     {       &quot;role&quot;: &quot;roles/owner&quot;,       &quot;members&quot;: [         &quot;user:mike@example.com&quot;,         &quot;group:admins@example.com&quot;,         &quot;domain:google.com&quot;,         &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;       ]     },     {       &quot;role&quot;: &quot;roles/viewer&quot;,       &quot;members&quot;: [&quot;user:sean@example.com&quot;]     }   ] } YAML Example bindings: - members:   - user:mike@example.com   - group:admins@example.com   - domain:google.com   - serviceAccount:my-other-app@appspot.gserviceaccount.com   role: roles/owner - members:   - user:sean@example.com   role: roles/viewer For a description of IAM and its features, see the IAM developer&#39;s guide (https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of members to a role. bindings with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.If no etag is provided in the call to setIamPolicy, then the existing policy is overwritten.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    version?: number | null;
  }
  /**
   * A Cloud Dataproc job for running Presto (https://prestosql.io/) queries
   */
  export interface Schema$PrestoJob {
    /**
     * Optional. Presto client tags to attach to this query
     */
    clientTags?: string[] | null;
    /**
     * Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
     */
    continueOnFailure?: boolean | null;
    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats
     */
    outputFormat?: string | null;
    /**
     * Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI
     */
    properties?: {[key: string]: string} | null;
    /**
     * The HCFS URI of the script that contains SQL queries.
     */
    queryFileUri?: string | null;
    /**
     * A list of queries.
     */
    queryList?: Schema$QueryList;
  }
  /**
   * A Cloud Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.
   */
  export interface Schema$PySparkJob {
    /**
     * Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
     */
    archiveUris?: string[] | null;
    /**
     * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
     */
    args?: string[] | null;
    /**
     * Optional. HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks.
     */
    fileUris?: string[] | null;
    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
     */
    jarFileUris?: string[] | null;
    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
     */
    mainPythonFileUri?: string | null;
    /**
     * Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
     */
    properties?: {[key: string]: string} | null;
    /**
     * Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
     */
    pythonFileUris?: string[] | null;
  }
  /**
   * A list of queries to run on a cluster.
   */
  export interface Schema$QueryList {
    /**
     * Required. The queries to execute. You do not need to terminate a query with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of an Cloud Dataproc API snippet that uses a QueryList to specify a HiveJob: &quot;hiveJob&quot;: {   &quot;queryList&quot;: {     &quot;queries&quot;: [       &quot;query1&quot;,       &quot;query2&quot;,       &quot;query3;query4&quot;,     ]   } }
     */
    queries?: string[] | null;
  }
  /**
   * Validation based on regular expressions.
   */
  export interface Schema$RegexValidation {
    /**
     * Required. RE2 regular expressions used to validate the parameter&#39;s value. The value must match the regex in its entirety (substring matches are not sufficient).
     */
    regexes?: string[] | null;
  }
  /**
   * Reservation Affinity for consuming Zonal reservation.
   */
  export interface Schema$ReservationAffinity {
    /**
     * Optional. Type of reservation to consume
     */
    consumeReservationType?: string | null;
    /**
     * Optional. Corresponds to the label key of reservation resource.
     */
    key?: string | null;
    /**
     * Optional. Corresponds to the label values of reservation resource.
     */
    values?: string[] | null;
  }
  /**
   * Security related configuration, including encryption, Kerberos, etc.
   */
  export interface Schema$SecurityConfig {
    /**
     * Kerberos related configuration.
     */
    kerberosConfig?: Schema$KerberosConfig;
  }
  /**
   * Request message for SetIamPolicy method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * Specifies the selection and config of software inside the cluster.
   */
  export interface Schema$SoftwareConfig {
    /**
     * Optional. The version of software inside the cluster. It must be one of the supported Cloud Dataproc Versions, such as &quot;1.2&quot; (including a subminor version, such as &quot;1.2.29&quot;), or the &quot;preview&quot; version. If unspecified, it defaults to the latest Debian version.
     */
    imageVersion?: string | null;
    /**
     * The set of optional components to activate on the cluster.
     */
    optionalComponents?: string[] | null;
    /**
     * Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties.
     */
    properties?: {[key: string]: string} | null;
  }
  /**
   * A Cloud Dataproc job for running Apache Spark (http://spark.apache.org/) applications on YARN.
   */
  export interface Schema$SparkJob {
    /**
     * Optional. HCFS URIs of archives to be extracted in the working directory of Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
     */
    archiveUris?: string[] | null;
    /**
     * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
     */
    args?: string[] | null;
    /**
     * Optional. HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
     */
    fileUris?: string[] | null;
    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
     */
    jarFileUris?: string[] | null;
    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * The name of the driver&#39;s main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris.
     */
    mainClass?: string | null;
    /**
     * The HCFS URI of the jar file that contains the main class.
     */
    mainJarFileUri?: string | null;
    /**
     * Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
     */
    properties?: {[key: string]: string} | null;
  }
  /**
   * A Cloud Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.
   */
  export interface Schema$SparkRJob {
    /**
     * Optional. HCFS URIs of archives to be extracted in the working directory of Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
     */
    archiveUris?: string[] | null;
    /**
     * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
     */
    args?: string[] | null;
    /**
     * Optional. HCFS URIs of files to be copied to the working directory of R drivers and distributed tasks. Useful for naively parallel tasks.
     */
    fileUris?: string[] | null;
    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * Required. The HCFS URI of the main R file to use as the driver. Must be a .R file.
     */
    mainRFileUri?: string | null;
    /**
     * Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
     */
    properties?: {[key: string]: string} | null;
  }
  /**
   * A Cloud Dataproc job for running Apache Spark SQL (http://spark.apache.org/sql/) queries.
   */
  export interface Schema$SparkSqlJob {
    /**
     * Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
     */
    jarFileUris?: string[] | null;
    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * Optional. A mapping of property names to values, used to configure Spark SQL&#39;s SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
     */
    properties?: {[key: string]: string} | null;
    /**
     * The HCFS URI of the script that contains SQL queries.
     */
    queryFileUri?: string | null;
    /**
     * A list of queries.
     */
    queryList?: Schema$QueryList;
    /**
     * Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name=&quot;value&quot;;).
     */
    scriptVariables?: {[key: string]: string} | null;
  }
  /**
   * The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).
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
   * A request to submit a job.
   */
  export interface Schema$SubmitJobRequest {
    /**
     * Required. The job resource.
     */
    job?: Schema$Job;
    /**
     * Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest requests with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string | null;
  }
  /**
   * A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)
   */
  export interface Schema$TemplateParameter {
    /**
     * Optional. Brief description of the parameter. Must not exceed 1024 characters.
     */
    description?: string | null;
    /**
     * Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter&#39;s list of field paths.A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template&#39;s cluster selector would be specified as placement.clusterSelector.zone.Also, field paths can reference fields using the following syntax: Values in maps can be referenced by key: labels&#39;key&#39; placement.clusterSelector.clusterLabels&#39;key&#39; placement.managedCluster.labels&#39;key&#39; placement.clusterSelector.clusterLabels&#39;key&#39; jobs&#39;step-id&#39;.labels&#39;key&#39; Jobs in the jobs list can be referenced by step-id: jobs&#39;step-id&#39;.hadoopJob.mainJarFileUri jobs&#39;step-id&#39;.hiveJob.queryFileUri jobs&#39;step-id&#39;.pySparkJob.mainPythonFileUri jobs&#39;step-id&#39;.hadoopJob.jarFileUris0 jobs&#39;step-id&#39;.hadoopJob.archiveUris0 jobs&#39;step-id&#39;.hadoopJob.fileUris0 jobs&#39;step-id&#39;.pySparkJob.pythonFileUris0 Items in repeated fields can be referenced by a zero-based index: jobs&#39;step-id&#39;.sparkJob.args0 Other examples: jobs&#39;step-id&#39;.hadoopJob.properties&#39;key&#39; jobs&#39;step-id&#39;.hadoopJob.args0 jobs&#39;step-id&#39;.hiveJob.scriptVariables&#39;key&#39; jobs&#39;step-id&#39;.hadoopJob.mainJarFileUri placement.clusterSelector.zoneIt may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid: placement.clusterSelector.clusterLabels jobs&#39;step-id&#39;.sparkJob.args
     */
    fields?: string[] | null;
    /**
     * Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters.
     */
    name?: string | null;
    /**
     * Optional. Validation rules to be applied to this parameter&#39;s value.
     */
    validation?: Schema$ParameterValidation;
  }
  /**
   * Request message for TestIamPermissions method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the resource. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for TestIamPermissions method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of TestPermissionsRequest.permissions that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * Validation based on a list of allowed values.
   */
  export interface Schema$ValueValidation {
    /**
     * Required. List of allowed values for the parameter.
     */
    values?: string[] | null;
  }
  /**
   * The workflow graph.
   */
  export interface Schema$WorkflowGraph {
    /**
     * Output only. The workflow nodes.
     */
    nodes?: Schema$WorkflowNode[];
  }
  /**
   * A Cloud Dataproc workflow template resource.
   */
  export interface Schema$WorkflowMetadata {
    /**
     * Output only. The name of the target cluster.
     */
    clusterName?: string | null;
    /**
     * Output only. The UUID of target cluster.
     */
    clusterUuid?: string | null;
    /**
     * Output only. The create cluster operation metadata.
     */
    createCluster?: Schema$ClusterOperation;
    /**
     * Output only. The delete cluster operation metadata.
     */
    deleteCluster?: Schema$ClusterOperation;
    /**
     * Output only. Workflow end time.
     */
    endTime?: string | null;
    /**
     * Output only. The workflow graph.
     */
    graph?: Schema$WorkflowGraph;
    /**
     * Map from parameter names to values that were used for those parameters.
     */
    parameters?: {[key: string]: string} | null;
    /**
     * Output only. Workflow start time.
     */
    startTime?: string | null;
    /**
     * Output only. The workflow state.
     */
    state?: string | null;
    /**
     * Output only. The resource name of the workflow template as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    template?: string | null;
    /**
     * Output only. The version of template at the time of workflow instantiation.
     */
    version?: number | null;
  }
  /**
   * The workflow node.
   */
  export interface Schema$WorkflowNode {
    /**
     * Output only. The error detail.
     */
    error?: string | null;
    /**
     * Output only. The job id; populated after the node enters RUNNING state.
     */
    jobId?: string | null;
    /**
     * Output only. Node&#39;s prerequisite nodes.
     */
    prerequisiteStepIds?: string[] | null;
    /**
     * Output only. The node state.
     */
    state?: string | null;
    /**
     * Output only. The name of the node.
     */
    stepId?: string | null;
  }
  /**
   * A Cloud Dataproc workflow template resource.
   */
  export interface Schema$WorkflowTemplate {
    /**
     * Output only. The time template was created.
     */
    createTime?: string | null;
    /**
     * Required. The template id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters..
     */
    id?: string | null;
    /**
     * Required. The Directed Acyclic Graph of Jobs to submit.
     */
    jobs?: Schema$OrderedJob[];
    /**
     * Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    name?: string | null;
    /**
     * Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
     */
    parameters?: Schema$TemplateParameter[];
    /**
     * Required. WorkflowTemplate scheduling information.
     */
    placement?: Schema$WorkflowTemplatePlacement;
    /**
     * Output only. The time template was last updated.
     */
    updateTime?: string | null;
    /**
     * Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.
     */
    version?: number | null;
  }
  /**
   * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
   */
  export interface Schema$WorkflowTemplatePlacement {
    /**
     * Optional. A selector that chooses target cluster for jobs based on metadata.The selector is evaluated at the time each job is submitted.
     */
    clusterSelector?: Schema$ClusterSelector;
    /**
     * Optional. A cluster that is managed by the workflow.
     */
    managedCluster?: Schema$ManagedCluster;
  }
  /**
   * A YARN application created by a job. Application information is a subset of &lt;code&gt;org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto&lt;/code&gt;.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
   */
  export interface Schema$YarnApplication {
    /**
     * Required. The application name.
     */
    name?: string | null;
    /**
     * Required. The numerical progress of the application, from 1 to 100.
     */
    progress?: number | null;
    /**
     * Required. The application state.
     */
    state?: string | null;
    /**
     * Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access.
     */
    trackingUrl?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    regions: Resource$Projects$Regions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
      this.regions = new Resource$Projects$Regions(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    autoscalingPolicies: Resource$Projects$Locations$Autoscalingpolicies;
    workflowTemplates: Resource$Projects$Locations$Workflowtemplates;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.autoscalingPolicies = new Resource$Projects$Locations$Autoscalingpolicies(
        this.context
      );
      this.workflowTemplates = new Resource$Projects$Locations$Workflowtemplates(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Autoscalingpolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dataproc.projects.locations.autoscalingPolicies.create
     * @desc Creates new autoscaling policy.
     * @alias dataproc.projects.locations.autoscalingPolicies.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name  has the following format:  projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name  has the following format:  projects/{project_id}/locations/{location}
     * @param {().AutoscalingPolicy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Autoscalingpolicies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoscalingPolicy>;
    create(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Create,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    create(callback: BodyResponseCallback<Schema$AutoscalingPolicy>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autoscalingpolicies$Create
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback?: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void | GaxiosPromise<Schema$AutoscalingPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autoscalingpolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autoscalingpolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/autoscalingPolicies').replace(
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
        createAPIRequest<Schema$AutoscalingPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoscalingPolicy>(parameters);
      }
    }

    /**
     * dataproc.projects.locations.autoscalingPolicies.delete
     * @desc Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.
     * @alias dataproc.projects.locations.autoscalingPolicies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name  of the policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name  of the policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Autoscalingpolicies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autoscalingpolicies$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autoscalingpolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autoscalingpolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * dataproc.projects.locations.autoscalingPolicies.get
     * @desc Retrieves autoscaling policy.
     * @alias dataproc.projects.locations.autoscalingPolicies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name  of the policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name  of the policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Autoscalingpolicies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoscalingPolicy>;
    get(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Get,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$AutoscalingPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autoscalingpolicies$Get
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback?: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void | GaxiosPromise<Schema$AutoscalingPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autoscalingpolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autoscalingpolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AutoscalingPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoscalingPolicy>(parameters);
      }
    }

    /**
     * dataproc.projects.locations.autoscalingPolicies.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias dataproc.projects.locations.autoscalingPolicies.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Autoscalingpolicies$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autoscalingpolicies$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autoscalingpolicies$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autoscalingpolicies$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy').replace(
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
     * dataproc.projects.locations.autoscalingPolicies.list
     * @desc Lists autoscaling policies in the project.
     * @alias dataproc.projects.locations.autoscalingPolicies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
     * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name  of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name  of the location has the following format:  projects/{project_id}/locations/{location}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Autoscalingpolicies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAutoscalingPoliciesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$List,
      callback: BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autoscalingpolicies$List
        | BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>,
      callback?: BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>
    ): void | GaxiosPromise<Schema$ListAutoscalingPoliciesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autoscalingpolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autoscalingpolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/autoscalingPolicies').replace(
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
        createAPIRequest<Schema$ListAutoscalingPoliciesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListAutoscalingPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * dataproc.projects.locations.autoscalingPolicies.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias dataproc.projects.locations.autoscalingPolicies.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Autoscalingpolicies$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autoscalingpolicies$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autoscalingpolicies$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autoscalingpolicies$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy').replace(
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
     * dataproc.projects.locations.autoscalingPolicies.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias dataproc.projects.locations.autoscalingPolicies.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Autoscalingpolicies$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autoscalingpolicies$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autoscalingpolicies$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autoscalingpolicies$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions').replace(
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
     * dataproc.projects.locations.autoscalingPolicies.update
     * @desc Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.
     * @alias dataproc.projects.locations.autoscalingPolicies.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @param {().AutoscalingPolicy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Locations$Autoscalingpolicies$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoscalingPolicy>;
    update(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Autoscalingpolicies$Update,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    update(callback: BodyResponseCallback<Schema$AutoscalingPolicy>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autoscalingpolicies$Update
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback?: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void | GaxiosPromise<Schema$AutoscalingPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autoscalingpolicies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autoscalingpolicies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AutoscalingPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoscalingPolicy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Autoscalingpolicies$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name  has the following format:  projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name  has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutoscalingPolicy;
  }
  export interface Params$Resource$Projects$Locations$Autoscalingpolicies$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name  of the policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name  of the policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Autoscalingpolicies$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name  of the policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name  of the policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Autoscalingpolicies$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Autoscalingpolicies$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
     */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name  of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name  of the location has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Autoscalingpolicies$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Autoscalingpolicies$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Autoscalingpolicies$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutoscalingPolicy;
  }

  export class Resource$Projects$Locations$Workflowtemplates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dataproc.projects.locations.workflowTemplates.create
     * @desc Creates new workflow template.
     * @alias dataproc.projects.locations.workflowTemplates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,create, the resource name of the  region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of  the location has the following format:  projects/{project_id}/locations/{location}
     * @param {().WorkflowTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowTemplate>;
    create(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Create,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Create,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    create(callback: BodyResponseCallback<Schema$WorkflowTemplate>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$Create
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void | GaxiosPromise<Schema$WorkflowTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/workflowTemplates').replace(
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
        createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WorkflowTemplate>(parameters);
      }
    }

    /**
     * dataproc.projects.locations.workflowTemplates.delete
     * @desc Deletes a workflow template. It does not cancel in-progress workflows.
     * @alias dataproc.projects.locations.workflowTemplates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {integer=} params.version Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * dataproc.projects.locations.workflowTemplates.get
     * @desc Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
     * @alias dataproc.projects.locations.workflowTemplates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {integer=} params.version Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowTemplate>;
    get(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Get,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    get(callback: BodyResponseCallback<Schema$WorkflowTemplate>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$Get
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void | GaxiosPromise<Schema$WorkflowTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WorkflowTemplate>(parameters);
      }
    }

    /**
     * dataproc.projects.locations.workflowTemplates.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias dataproc.projects.locations.workflowTemplates.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy').replace(
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
     * dataproc.projects.locations.workflowTemplates.instantiate
     * @desc Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata. Also see Using WorkflowMetadata.On successful completion, Operation.response will be Empty.
     * @alias dataproc.projects.locations.workflowTemplates.instantiate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {().InstantiateWorkflowTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    instantiate(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$Instantiate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    instantiate(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Instantiate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    instantiate(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Instantiate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    instantiate(callback: BodyResponseCallback<Schema$Operation>): void;
    instantiate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$Instantiate
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$Instantiate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$Instantiate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:instantiate').replace(
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
     * dataproc.projects.locations.workflowTemplates.instantiateInline
     * @desc Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata. Also see Using WorkflowMetadata.On successful completion, Operation.response will be Empty.
     * @alias dataproc.projects.locations.workflowTemplates.instantiateInline
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.instanceId Deprecated. Please use request_id field instead.
     * @param {string} params.parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource  name of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
     * @param {string=} params.requestId Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {().WorkflowTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    instantiateInline(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$Instantiateinline,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    instantiateInline(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Instantiateinline,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    instantiateInline(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Instantiateinline,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    instantiateInline(callback: BodyResponseCallback<Schema$Operation>): void;
    instantiateInline(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$Instantiateinline
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$Instantiateinline;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$Instantiateinline;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta2/{+parent}/workflowTemplates:instantiateInline'
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * dataproc.projects.locations.workflowTemplates.list
     * @desc Lists workflows that match the specified filter in the request.
     * @alias dataproc.projects.locations.workflowTemplates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return in each response.
     * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource  name of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkflowTemplatesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Workflowtemplates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      callback: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workflowtemplates$List,
      callback: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$List
        | BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      callback?: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>
    ): void | GaxiosPromise<Schema$ListWorkflowTemplatesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/workflowTemplates').replace(
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
        createAPIRequest<Schema$ListWorkflowTemplatesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListWorkflowTemplatesResponse>(
          parameters
        );
      }
    }

    /**
     * dataproc.projects.locations.workflowTemplates.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias dataproc.projects.locations.workflowTemplates.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy').replace(
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
     * dataproc.projects.locations.workflowTemplates.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias dataproc.projects.locations.workflowTemplates.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions').replace(
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
     * dataproc.projects.locations.workflowTemplates.update
     * @desc Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
     * @alias dataproc.projects.locations.workflowTemplates.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {().WorkflowTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Locations$Workflowtemplates$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowTemplate>;
    update(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Update,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Workflowtemplates$Update,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    update(callback: BodyResponseCallback<Schema$WorkflowTemplate>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflowtemplates$Update
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void | GaxiosPromise<Schema$WorkflowTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflowtemplates$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflowtemplates$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WorkflowTemplate>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workflowtemplates$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,create, the resource name of the  region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of  the location has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkflowTemplate;
  }
  export interface Params$Resource$Projects$Locations$Workflowtemplates$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    name?: string;
    /**
     * Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
     */
    version?: number;
  }
  export interface Params$Resource$Projects$Locations$Workflowtemplates$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    name?: string;
    /**
     * Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
     */
    version?: number;
  }
  export interface Params$Resource$Projects$Locations$Workflowtemplates$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Workflowtemplates$Instantiate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstantiateWorkflowTemplateRequest;
  }
  export interface Params$Resource$Projects$Locations$Workflowtemplates$Instantiateinline
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. Please use request_id field instead.
     */
    instanceId?: string;
    /**
     * Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource  name of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;
    /**
     * Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkflowTemplate;
  }
  export interface Params$Resource$Projects$Locations$Workflowtemplates$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return in each response.
     */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource  name of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Workflowtemplates$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Workflowtemplates$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Workflowtemplates$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkflowTemplate;
  }

  export class Resource$Projects$Regions {
    context: APIRequestContext;
    autoscalingPolicies: Resource$Projects$Regions$Autoscalingpolicies;
    clusters: Resource$Projects$Regions$Clusters;
    jobs: Resource$Projects$Regions$Jobs;
    operations: Resource$Projects$Regions$Operations;
    workflowTemplates: Resource$Projects$Regions$Workflowtemplates;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.autoscalingPolicies = new Resource$Projects$Regions$Autoscalingpolicies(
        this.context
      );
      this.clusters = new Resource$Projects$Regions$Clusters(this.context);
      this.jobs = new Resource$Projects$Regions$Jobs(this.context);
      this.operations = new Resource$Projects$Regions$Operations(this.context);
      this.workflowTemplates = new Resource$Projects$Regions$Workflowtemplates(
        this.context
      );
    }
  }

  export class Resource$Projects$Regions$Autoscalingpolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dataproc.projects.regions.autoscalingPolicies.create
     * @desc Creates new autoscaling policy.
     * @alias dataproc.projects.regions.autoscalingPolicies.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name  has the following format:  projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name  has the following format:  projects/{project_id}/locations/{location}
     * @param {().AutoscalingPolicy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Regions$Autoscalingpolicies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoscalingPolicy>;
    create(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    create(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Create,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    create(callback: BodyResponseCallback<Schema$AutoscalingPolicy>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Autoscalingpolicies$Create
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback?: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void | GaxiosPromise<Schema$AutoscalingPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Autoscalingpolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Autoscalingpolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/autoscalingPolicies').replace(
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
        createAPIRequest<Schema$AutoscalingPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoscalingPolicy>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.autoscalingPolicies.delete
     * @desc Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.
     * @alias dataproc.projects.regions.autoscalingPolicies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name  of the policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name  of the policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Regions$Autoscalingpolicies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Autoscalingpolicies$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Autoscalingpolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Autoscalingpolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * dataproc.projects.regions.autoscalingPolicies.get
     * @desc Retrieves autoscaling policy.
     * @alias dataproc.projects.regions.autoscalingPolicies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name  of the policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name  of the policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Regions$Autoscalingpolicies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoscalingPolicy>;
    get(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Get,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$AutoscalingPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Autoscalingpolicies$Get
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback?: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void | GaxiosPromise<Schema$AutoscalingPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Autoscalingpolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Autoscalingpolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AutoscalingPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoscalingPolicy>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.autoscalingPolicies.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias dataproc.projects.regions.autoscalingPolicies.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Regions$Autoscalingpolicies$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Autoscalingpolicies$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Autoscalingpolicies$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Autoscalingpolicies$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy').replace(
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
     * dataproc.projects.regions.autoscalingPolicies.list
     * @desc Lists autoscaling policies in the project.
     * @alias dataproc.projects.regions.autoscalingPolicies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
     * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name  of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name  of the location has the following format:  projects/{project_id}/locations/{location}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Regions$Autoscalingpolicies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAutoscalingPoliciesResponse>;
    list(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$List,
      callback: BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Autoscalingpolicies$List
        | BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>,
      callback?: BodyResponseCallback<Schema$ListAutoscalingPoliciesResponse>
    ): void | GaxiosPromise<Schema$ListAutoscalingPoliciesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Autoscalingpolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Autoscalingpolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/autoscalingPolicies').replace(
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
        createAPIRequest<Schema$ListAutoscalingPoliciesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListAutoscalingPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * dataproc.projects.regions.autoscalingPolicies.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias dataproc.projects.regions.autoscalingPolicies.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Regions$Autoscalingpolicies$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Autoscalingpolicies$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Autoscalingpolicies$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Autoscalingpolicies$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy').replace(
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
     * dataproc.projects.regions.autoscalingPolicies.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias dataproc.projects.regions.autoscalingPolicies.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Regions$Autoscalingpolicies$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Autoscalingpolicies$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Autoscalingpolicies$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Autoscalingpolicies$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions').replace(
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
     * dataproc.projects.regions.autoscalingPolicies.update
     * @desc Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.
     * @alias dataproc.projects.regions.autoscalingPolicies.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     * @param {().AutoscalingPolicy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Regions$Autoscalingpolicies$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoscalingPolicy>;
    update(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    update(
      params: Params$Resource$Projects$Regions$Autoscalingpolicies$Update,
      callback: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void;
    update(callback: BodyResponseCallback<Schema$AutoscalingPolicy>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Autoscalingpolicies$Update
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoscalingPolicy>,
      callback?: BodyResponseCallback<Schema$AutoscalingPolicy>
    ): void | GaxiosPromise<Schema$AutoscalingPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Autoscalingpolicies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Autoscalingpolicies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AutoscalingPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoscalingPolicy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Regions$Autoscalingpolicies$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name  has the following format:  projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name  has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutoscalingPolicy;
  }
  export interface Params$Resource$Projects$Regions$Autoscalingpolicies$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.delete, the resource name  of the policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.delete, the resource name  of the policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Regions$Autoscalingpolicies$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.get, the resource name  of the policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies.get, the resource name  of the policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Regions$Autoscalingpolicies$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Regions$Autoscalingpolicies$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
     */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name  of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name  of the location has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Regions$Autoscalingpolicies$Setiampolicy
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
  export interface Params$Resource$Projects$Regions$Autoscalingpolicies$Testiampermissions
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
  export interface Params$Resource$Projects$Regions$Autoscalingpolicies$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutoscalingPolicy;
  }

  export class Resource$Projects$Regions$Clusters {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dataproc.projects.regions.clusters.create
     * @desc Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata.
     * @alias dataproc.projects.regions.clusters.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {string=} params.requestId Optional. A unique id used to identify the request. If the server receives two CreateClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {().Cluster} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Regions$Clusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Regions$Clusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Regions$Clusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Clusters$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Clusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Clusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/clusters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region'],
        pathParams: ['projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.clusters.delete
     * @desc Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata.
     * @alias dataproc.projects.regions.clusters.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterName Required. The cluster name.
     * @param {string=} params.clusterUuid Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {string=} params.requestId Optional. A unique id used to identify the request. If the server receives two DeleteClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Regions$Clusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Regions$Clusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Regions$Clusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Clusters$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Clusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Clusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region', 'clusterName'],
        pathParams: ['clusterName', 'projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.clusters.diagnose
     * @desc Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata. After the operation completes, Operation.response contains DiagnoseClusterResults.
     * @alias dataproc.projects.regions.clusters.diagnose
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterName Required. The cluster name.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {().DiagnoseClusterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    diagnose(
      params?: Params$Resource$Projects$Regions$Clusters$Diagnose,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    diagnose(
      params: Params$Resource$Projects$Regions$Clusters$Diagnose,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    diagnose(
      params: Params$Resource$Projects$Regions$Clusters$Diagnose,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    diagnose(callback: BodyResponseCallback<Schema$Operation>): void;
    diagnose(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Clusters$Diagnose
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Clusters$Diagnose;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Clusters$Diagnose;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region', 'clusterName'],
        pathParams: ['clusterName', 'projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.clusters.get
     * @desc Gets the resource representation for a cluster in a project.
     * @alias dataproc.projects.regions.clusters.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterName Required. The cluster name.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Regions$Clusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Cluster>;
    get(
      params: Params$Resource$Projects$Regions$Clusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(
      params: Params$Resource$Projects$Regions$Clusters$Get,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$Cluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Clusters$Get
        | BodyResponseCallback<Schema$Cluster>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback?: BodyResponseCallback<Schema$Cluster>
    ): void | GaxiosPromise<Schema$Cluster> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Clusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Clusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region', 'clusterName'],
        pathParams: ['clusterName', 'projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Cluster>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Cluster>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.clusters.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias dataproc.projects.regions.clusters.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Regions$Clusters$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Clusters$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Clusters$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Clusters$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Clusters$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Clusters$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy').replace(
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
     * dataproc.projects.regions.clusters.list
     * @desc Lists all regions/{region}/clusters in a project.
     * @alias dataproc.projects.regions.clusters.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *
     * @param {integer=} params.pageSize Optional. The standard List page size.
     * @param {string=} params.pageToken Optional. The standard List page token.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Regions$Clusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListClustersResponse>;
    list(
      params: Params$Resource$Projects$Regions$Clusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Regions$Clusters$List,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Clusters$List
        | BodyResponseCallback<Schema$ListClustersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListClustersResponse>
    ): void | GaxiosPromise<Schema$ListClustersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Clusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Clusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/clusters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region'],
        pathParams: ['projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListClustersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListClustersResponse>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.clusters.patch
     * @desc Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata.
     * @alias dataproc.projects.regions.clusters.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clusterName Required. The cluster name.
     * @param {string=} params.gracefulDecommissionTimeout Optional. Timeout for graceful YARN decomissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day.Only supported on Dataproc image versions 1.2 and higher.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project the cluster belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {string=} params.requestId Optional. A unique id used to identify the request. If the server receives two UpdateClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {string=} params.updateMask Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: {   "config":{     "workerConfig":{       "numInstances":"5"     }   } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: {   "config":{     "secondaryWorkerConfig":{       "numInstances":"5"     }   } } <strong>Note:</strong> currently only the following fields can be updated: <table> <tr> <td><strong>Mask</strong></td><td><strong>Purpose</strong></td> </tr> <tr> <td>labels</td><td>Updates labels</td> </tr> <tr> <td>config.worker_config.num_instances</td><td>Resize primary worker group</td> </tr> <tr> <td>config.secondary_worker_config.num_instances</td><td>Resize secondary worker group</td> </tr> <tr> <td>config.lifecycle_config.auto_delete_ttl</td><td>Reset MAX TTL duration</td> </tr> <tr> <td>config.lifecycle_config.auto_delete_time</td><td>Update MAX TTL deletion timestamp</td> </tr> <tr> <td>config.lifecycle_config.idle_delete_ttl</td><td>Update Idle TTL duration</td> </tr> <tr> <td>config.autoscaling_config.policy_uri</td><td>Use, stop using, or change autoscaling policies</td> </tr> </table>
     * @param {().Cluster} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Regions$Clusters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Regions$Clusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Regions$Clusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Clusters$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Clusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Clusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region', 'clusterName'],
        pathParams: ['clusterName', 'projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.clusters.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias dataproc.projects.regions.clusters.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Regions$Clusters$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Clusters$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Clusters$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Clusters$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Clusters$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Clusters$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy').replace(
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
     * dataproc.projects.regions.clusters.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias dataproc.projects.regions.clusters.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Regions$Clusters$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Clusters$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Clusters$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Clusters$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Clusters$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Clusters$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Regions$Clusters$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;
    /**
     * Optional. A unique id used to identify the request. If the server receives two CreateClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }
  export interface Params$Resource$Projects$Regions$Clusters$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The cluster name.
     */
    clusterName?: string;
    /**
     * Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.
     */
    clusterUuid?: string;
    /**
     * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;
    /**
     * Optional. A unique id used to identify the request. If the server receives two DeleteClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Regions$Clusters$Diagnose
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The cluster name.
     */
    clusterName?: string;
    /**
     * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DiagnoseClusterRequest;
  }
  export interface Params$Resource$Projects$Regions$Clusters$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The cluster name.
     */
    clusterName?: string;
    /**
     * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;
  }
  export interface Params$Resource$Projects$Regions$Clusters$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Regions$Clusters$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *
     */
    filter?: string;
    /**
     * Optional. The standard List page size.
     */
    pageSize?: number;
    /**
     * Optional. The standard List page token.
     */
    pageToken?: string;
    /**
     * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;
  }
  export interface Params$Resource$Projects$Regions$Clusters$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The cluster name.
     */
    clusterName?: string;
    /**
     * Optional. Timeout for graceful YARN decomissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day.Only supported on Dataproc image versions 1.2 and higher.
     */
    gracefulDecommissionTimeout?: string;
    /**
     * Required. The ID of the Google Cloud Platform project the cluster belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;
    /**
     * Optional. A unique id used to identify the request. If the server receives two UpdateClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
    /**
     * Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: {   "config":{     "workerConfig":{       "numInstances":"5"     }   } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: {   "config":{     "secondaryWorkerConfig":{       "numInstances":"5"     }   } } <strong>Note:</strong> currently only the following fields can be updated: <table> <tr> <td><strong>Mask</strong></td><td><strong>Purpose</strong></td> </tr> <tr> <td>labels</td><td>Updates labels</td> </tr> <tr> <td>config.worker_config.num_instances</td><td>Resize primary worker group</td> </tr> <tr> <td>config.secondary_worker_config.num_instances</td><td>Resize secondary worker group</td> </tr> <tr> <td>config.lifecycle_config.auto_delete_ttl</td><td>Reset MAX TTL duration</td> </tr> <tr> <td>config.lifecycle_config.auto_delete_time</td><td>Update MAX TTL deletion timestamp</td> </tr> <tr> <td>config.lifecycle_config.idle_delete_ttl</td><td>Update Idle TTL duration</td> </tr> <tr> <td>config.autoscaling_config.policy_uri</td><td>Use, stop using, or change autoscaling policies</td> </tr> </table>
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }
  export interface Params$Resource$Projects$Regions$Clusters$Setiampolicy
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
  export interface Params$Resource$Projects$Regions$Clusters$Testiampermissions
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

  export class Resource$Projects$Regions$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dataproc.projects.regions.jobs.cancel
     * @desc Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list or regions/{region}/jobs.get.
     * @alias dataproc.projects.regions.jobs.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId Required. The job ID.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {().CancelJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Regions$Jobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    cancel(
      params: Params$Resource$Projects$Regions$Jobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    cancel(
      params: Params$Resource$Projects$Regions$Jobs$Cancel,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Job>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Jobs$Cancel
        | BodyResponseCallback<Schema$Job>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>
    ): void | GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Jobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Jobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region', 'jobId'],
        pathParams: ['jobId', 'projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.jobs.delete
     * @desc Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
     * @alias dataproc.projects.regions.jobs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId Required. The job ID.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Regions$Jobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Regions$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Regions$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Jobs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region', 'jobId'],
        pathParams: ['jobId', 'projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.jobs.get
     * @desc Gets the resource representation for a job in a project.
     * @alias dataproc.projects.regions.jobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId Required. The job ID.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Regions$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    get(
      params: Params$Resource$Projects$Regions$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Projects$Regions$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Jobs$Get
        | BodyResponseCallback<Schema$Job>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>
    ): void | GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region', 'jobId'],
        pathParams: ['jobId', 'projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.jobs.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias dataproc.projects.regions.jobs.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Regions$Jobs$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Jobs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Jobs$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Jobs$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Jobs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Jobs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy').replace(
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
     * dataproc.projects.regions.jobs.list
     * @desc Lists regions/{region}/jobs in a project.
     * @alias dataproc.projects.regions.jobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clusterName Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
     * @param {string=} params.filter Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *
     * @param {string=} params.jobStateMatcher Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored.
     * @param {integer=} params.pageSize Optional. The number of results to return in each response.
     * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Regions$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListJobsResponse>;
    list(
      params: Params$Resource$Projects$Regions$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobsResponse>,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Regions$Jobs$List,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Jobs$List
        | BodyResponseCallback<Schema$ListJobsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>
    ): void | GaxiosPromise<Schema$ListJobsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/jobs'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region'],
        pathParams: ['projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListJobsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.jobs.patch
     * @desc Updates a job in a project.
     * @alias dataproc.projects.regions.jobs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId Required. The job ID.
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {string=} params.updateMask Required. Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
     * @param {().Job} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Regions$Jobs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    patch(
      params: Params$Resource$Projects$Regions$Jobs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    patch(
      params: Params$Resource$Projects$Regions$Jobs$Patch,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Job>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Jobs$Patch
        | BodyResponseCallback<Schema$Job>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>
    ): void | GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Jobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Jobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region', 'jobId'],
        pathParams: ['jobId', 'projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.jobs.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias dataproc.projects.regions.jobs.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Regions$Jobs$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Jobs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Jobs$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Jobs$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Jobs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Jobs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy').replace(
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
     * dataproc.projects.regions.jobs.submit
     * @desc Submits a job to a cluster.
     * @alias dataproc.projects.regions.jobs.submit
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
     * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
     * @param {().SubmitJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    submit(
      params?: Params$Resource$Projects$Regions$Jobs$Submit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    submit(
      params: Params$Resource$Projects$Regions$Jobs$Submit,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    submit(
      params: Params$Resource$Projects$Regions$Jobs$Submit,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    submit(callback: BodyResponseCallback<Schema$Job>): void;
    submit(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Jobs$Submit
        | BodyResponseCallback<Schema$Job>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>
    ): void | GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Jobs$Submit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Jobs$Submit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta2/projects/{projectId}/regions/{region}/jobs:submit'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'region'],
        pathParams: ['projectId', 'region'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.jobs.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias dataproc.projects.regions.jobs.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Regions$Jobs$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Jobs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Jobs$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Jobs$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Jobs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Jobs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Regions$Jobs$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The job ID.
     */
    jobId?: string;
    /**
     * Required. The ID of the Google Cloud Platform project that the job belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelJobRequest;
  }
  export interface Params$Resource$Projects$Regions$Jobs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The job ID.
     */
    jobId?: string;
    /**
     * Required. The ID of the Google Cloud Platform project that the job belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;
  }
  export interface Params$Resource$Projects$Regions$Jobs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The job ID.
     */
    jobId?: string;
    /**
     * Required. The ID of the Google Cloud Platform project that the job belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;
  }
  export interface Params$Resource$Projects$Regions$Jobs$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Regions$Jobs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
     */
    clusterName?: string;
    /**
     * Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *
     */
    filter?: string;
    /**
     * Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored.
     */
    jobStateMatcher?: string;
    /**
     * Optional. The number of results to return in each response.
     */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The ID of the Google Cloud Platform project that the job belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;
  }
  export interface Params$Resource$Projects$Regions$Jobs$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The job ID.
     */
    jobId?: string;
    /**
     * Required. The ID of the Google Cloud Platform project that the job belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;
    /**
     * Required. Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Projects$Regions$Jobs$Setiampolicy
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
  export interface Params$Resource$Projects$Regions$Jobs$Submit
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The ID of the Google Cloud Platform project that the job belongs to.
     */
    projectId?: string;
    /**
     * Required. The Cloud Dataproc region in which to handle the request.
     */
    region?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubmitJobRequest;
  }
  export interface Params$Resource$Projects$Regions$Jobs$Testiampermissions
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

  export class Resource$Projects$Regions$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dataproc.projects.regions.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @alias dataproc.projects.regions.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Regions$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Regions$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Regions$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:cancel').replace(
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
     * dataproc.projects.regions.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
     * @alias dataproc.projects.regions.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Regions$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Regions$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Regions$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * dataproc.projects.regions.operations.get
     * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias dataproc.projects.regions.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Regions$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Regions$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Regions$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * dataproc.projects.regions.operations.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias dataproc.projects.regions.operations.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Regions$Operations$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Operations$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Operations$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Operations$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Operations$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Operations$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy').replace(
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
     * dataproc.projects.regions.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/x/operations. To override the binding, API services can add a binding such as "/v1/{name=users/x}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias dataproc.projects.regions.operations.list
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
      params?: Params$Resource$Projects$Regions$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Regions$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Regions$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

    /**
     * dataproc.projects.regions.operations.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias dataproc.projects.regions.operations.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Regions$Operations$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Operations$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Operations$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Operations$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Operations$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Operations$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy').replace(
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
     * dataproc.projects.regions.operations.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias dataproc.projects.regions.operations.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Regions$Operations$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Operations$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Operations$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Operations$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Operations$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Operations$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Regions$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Regions$Operations$Delete
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
  export interface Params$Resource$Projects$Regions$Operations$Get
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
  export interface Params$Resource$Projects$Regions$Operations$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Regions$Operations$List
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
  export interface Params$Resource$Projects$Regions$Operations$Setiampolicy
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
  export interface Params$Resource$Projects$Regions$Operations$Testiampermissions
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

  export class Resource$Projects$Regions$Workflowtemplates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dataproc.projects.regions.workflowTemplates.create
     * @desc Creates new workflow template.
     * @alias dataproc.projects.regions.workflowTemplates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,create, the resource name of the  region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of  the location has the following format:  projects/{project_id}/locations/{location}
     * @param {().WorkflowTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowTemplate>;
    create(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Create,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    create(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Create,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    create(callback: BodyResponseCallback<Schema$WorkflowTemplate>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$Create
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void | GaxiosPromise<Schema$WorkflowTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/workflowTemplates').replace(
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
        createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WorkflowTemplate>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.workflowTemplates.delete
     * @desc Deletes a workflow template. It does not cancel in-progress workflows.
     * @alias dataproc.projects.regions.workflowTemplates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {integer=} params.version Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * dataproc.projects.regions.workflowTemplates.get
     * @desc Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
     * @alias dataproc.projects.regions.workflowTemplates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {integer=} params.version Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowTemplate>;
    get(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    get(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Get,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    get(callback: BodyResponseCallback<Schema$WorkflowTemplate>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$Get
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void | GaxiosPromise<Schema$WorkflowTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WorkflowTemplate>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.workflowTemplates.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias dataproc.projects.regions.workflowTemplates.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy').replace(
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
     * dataproc.projects.regions.workflowTemplates.instantiate
     * @desc Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata. Also see Using WorkflowMetadata.On successful completion, Operation.response will be Empty.
     * @alias dataproc.projects.regions.workflowTemplates.instantiate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {().InstantiateWorkflowTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    instantiate(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$Instantiate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    instantiate(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Instantiate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    instantiate(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Instantiate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    instantiate(callback: BodyResponseCallback<Schema$Operation>): void;
    instantiate(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$Instantiate
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$Instantiate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$Instantiate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:instantiate').replace(
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
     * dataproc.projects.regions.workflowTemplates.instantiateInline
     * @desc Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata. Also see Using WorkflowMetadata.On successful completion, Operation.response will be Empty.
     * @alias dataproc.projects.regions.workflowTemplates.instantiateInline
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.instanceId Deprecated. Please use request_id field instead.
     * @param {string} params.parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource  name of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
     * @param {string=} params.requestId Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     * @param {().WorkflowTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    instantiateInline(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$Instantiateinline,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    instantiateInline(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Instantiateinline,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    instantiateInline(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Instantiateinline,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    instantiateInline(callback: BodyResponseCallback<Schema$Operation>): void;
    instantiateInline(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$Instantiateinline
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$Instantiateinline;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$Instantiateinline;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta2/{+parent}/workflowTemplates:instantiateInline'
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * dataproc.projects.regions.workflowTemplates.list
     * @desc Lists workflows that match the specified filter in the request.
     * @alias dataproc.projects.regions.workflowTemplates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return in each response.
     * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource  name of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkflowTemplatesResponse>;
    list(
      params: Params$Resource$Projects$Regions$Workflowtemplates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      callback: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Regions$Workflowtemplates$List,
      callback: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$List
        | BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      callback?: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>
    ): void | GaxiosPromise<Schema$ListWorkflowTemplatesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/workflowTemplates').replace(
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
        createAPIRequest<Schema$ListWorkflowTemplatesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListWorkflowTemplatesResponse>(
          parameters
        );
      }
    }

    /**
     * dataproc.projects.regions.workflowTemplates.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias dataproc.projects.regions.workflowTemplates.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy').replace(
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
     * dataproc.projects.regions.workflowTemplates.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias dataproc.projects.regions.workflowTemplates.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions').replace(
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
     * dataproc.projects.regions.workflowTemplates.update
     * @desc Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
     * @alias dataproc.projects.regions.workflowTemplates.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     * @param {().WorkflowTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Regions$Workflowtemplates$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkflowTemplate>;
    update(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Update,
      options: MethodOptions | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    update(
      params: Params$Resource$Projects$Regions$Workflowtemplates$Update,
      callback: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void;
    update(callback: BodyResponseCallback<Schema$WorkflowTemplate>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Regions$Workflowtemplates$Update
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>
    ): void | GaxiosPromise<Schema$WorkflowTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Regions$Workflowtemplates$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Regions$Workflowtemplates$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WorkflowTemplate>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Regions$Workflowtemplates$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,create, the resource name of the  region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of  the location has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkflowTemplate;
  }
  export interface Params$Resource$Projects$Regions$Workflowtemplates$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    name?: string;
    /**
     * Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
     */
    version?: number;
  }
  export interface Params$Resource$Projects$Regions$Workflowtemplates$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    name?: string;
    /**
     * Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
     */
    version?: number;
  }
  export interface Params$Resource$Projects$Regions$Workflowtemplates$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Regions$Workflowtemplates$Instantiate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstantiateWorkflowTemplateRequest;
  }
  export interface Params$Resource$Projects$Regions$Workflowtemplates$Instantiateinline
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Deprecated. Please use request_id field instead.
     */
    instanceId?: string;
    /**
     * Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource  name of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;
    /**
     * Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkflowTemplate;
  }
  export interface Params$Resource$Projects$Regions$Workflowtemplates$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return in each response.
     */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource  name of the region has the following format:  projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Regions$Workflowtemplates$Setiampolicy
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
  export interface Params$Resource$Projects$Regions$Workflowtemplates$Testiampermissions
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
  export interface Params$Resource$Projects$Regions$Workflowtemplates$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkflowTemplate;
  }
}
