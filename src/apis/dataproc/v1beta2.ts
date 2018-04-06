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
 * Google Cloud Dataproc API
 *
 * Manages Hadoop-based clusters and jobs on Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const dataproc = google.dataproc('v1beta2');
 *
 * @namespace dataproc
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Dataproc
 */
export class Dataproc {
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
 * Specifies the type and number of accelerator cards attached to the instances
 * of an instance group (see GPUs on Compute Engine).
 */
export interface Schema$AcceleratorConfig {
  /**
   * The number of the accelerator cards of this type exposed to this instance.
   */
  acceleratorCount: number;
  /**
   * Full URL, partial URI, or short name of the accelerator type resource to
   * expose to this instance. See Compute Engine AcceleratorTypes(
   * /compute/docs/reference/beta/acceleratorTypes)Examples *
   * https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80
   * * projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80
   * * nvidia-tesla-k80Auto Zone Exception: If you are using the Cloud Dataproc
   * Auto Zone Placement feature, you must use the short name of the accelerator
   * type resource, for example, nvidia-tesla-k80.
   */
  acceleratorTypeUri: string;
}
/**
 * Associates members with a role.
 */
export interface Schema$Binding {
  /**
   * Specifies the identities requesting access for a Cloud Platform resource.
   * members can have the following values: allUsers: A special identifier that
   * represents anyone who is  on the internet; with or without a Google
   * account. allAuthenticatedUsers: A special identifier that represents anyone
   * who is authenticated with a Google account or a service account.
   * user:{emailid}: An email address that represents a specific Google account.
   * For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}:
   * An email address that represents a service  account. For example,
   * my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address
   * that represents a Google group.  For example, admins@example.com.
   * domain:{domain}: A Google Apps domain name that represents all the  users
   * of that domain. For example, google.com or example.com.
   */
  members: string[];
  /**
   * Role that is assigned to members. For example, roles/viewer, roles/editor,
   * or roles/owner. Required
   */
  role: string;
}
/**
 * A request to cancel a job.
 */
export interface Schema$CancelJobRequest {}
/**
 * Describes the identifying information, config, and status of a cluster of
 * Compute Engine instances.
 */
export interface Schema$Cluster {
  /**
   * Required. The cluster name. Cluster names within a project must be unique.
   * Names of deleted clusters can be reused.
   */
  clusterName: string;
  /**
   * Output only. A cluster UUID (Unique Universal Identifier). Cloud Dataproc
   * generates this value when it creates the cluster.
   */
  clusterUuid: string;
  /**
   * Required. The cluster config. Note that Cloud Dataproc may set default
   * values, and values may change when clusters are updated.
   */
  config: Schema$ClusterConfig;
  /**
   * Optional. The labels to associate with this cluster. Label keys must
   * contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if
   * present, must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be
   * associated with a cluster.
   */
  labels: any;
  /**
   * Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature:
   * This report is available for testing purposes only. It may be changed
   * before final release.
   */
  metrics: Schema$ClusterMetrics;
  /**
   * Required. The Google Cloud Platform project ID that the cluster belongs to.
   */
  projectId: string;
  /**
   * Output only. Cluster status.
   */
  status: Schema$ClusterStatus;
  /**
   * Output only. The previous cluster status.
   */
  statusHistory: Schema$ClusterStatus[];
}
/**
 * The cluster config.
 */
export interface Schema$ClusterConfig {
  /**
   * Optional. A Cloud Storage staging bucket used for sharing generated SSH
   * keys and config. If you do not specify a staging bucket, Cloud Dataproc
   * will determine an appropriate Cloud Storage location (US, ASIA, or EU) for
   * your cluster&#39;s staging bucket according to the Google Compute Engine
   * zone where your cluster is deployed, and then it will create and manage
   * this project-level, per-location bucket for you.
   */
  configBucket: string;
  /**
   * Required. The shared Compute Engine config settings for all instances in a
   * cluster.
   */
  gceClusterConfig: Schema$GceClusterConfig;
  /**
   * Optional. Commands to execute on each node after config is completed. By
   * default, executables are run on master and all worker nodes. You can test a
   * node&#39;s &lt;code&gt;role&lt;/code&gt; metadata to run an executable on a
   * master or worker node, as shown below using curl (you can also use wget):
   * ROLE=$(curl -H Metadata-Flavor:Google
   * http://metadata/computeMetadata/v1beta2/instance/attributes/dataproc-role)
   * if [[ &quot;${ROLE}&quot; == &#39;Master&#39; ]]; then   ... master
   * specific actions ... else   ... worker specific actions ... fi
   */
  initializationActions: Schema$NodeInitializationAction[];
  /**
   * Optional. The config setting for auto delete cluster schedule.
   */
  lifecycleConfig: Schema$LifecycleConfig;
  /**
   * Optional. The Compute Engine config settings for the master instance in a
   * cluster.
   */
  masterConfig: Schema$InstanceGroupConfig;
  /**
   * Optional. The Compute Engine config settings for additional worker
   * instances in a cluster.
   */
  secondaryWorkerConfig: Schema$InstanceGroupConfig;
  /**
   * Optional. The config settings for software inside the cluster.
   */
  softwareConfig: Schema$SoftwareConfig;
  /**
   * Optional. The Compute Engine config settings for worker instances in a
   * cluster.
   */
  workerConfig: Schema$InstanceGroupConfig;
}
/**
 * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature:
 * This report is available for testing purposes only. It may be changed before
 * final release.
 */
export interface Schema$ClusterMetrics {
  /**
   * The HDFS metrics.
   */
  hdfsMetrics: any;
  /**
   * The YARN metrics.
   */
  yarnMetrics: any;
}
/**
 * The cluster operation triggered by a workflow.
 */
export interface Schema$ClusterOperation {
  /**
   * Output only. Indicates the operation is done.
   */
  done: boolean;
  /**
   * Output only. Error, if operation failed.
   */
  error: string;
  /**
   * Output only. The id of the cluster operation.
   */
  operationId: string;
}
/**
 * Metadata describing the operation.
 */
export interface Schema$ClusterOperationMetadata {
  /**
   * Output only. Name of the cluster for the operation.
   */
  clusterName: string;
  /**
   * Output only. Cluster UUID for the operation.
   */
  clusterUuid: string;
  /**
   * Output only. Short description of operation.
   */
  description: string;
  /**
   * Output only. Labels associated with the operation
   */
  labels: any;
  /**
   * Output only. The operation type.
   */
  operationType: string;
  /**
   * Output only. Current operation status.
   */
  status: Schema$ClusterOperationStatus;
  /**
   * Output only. The previous operation status.
   */
  statusHistory: Schema$ClusterOperationStatus[];
  /**
   * Output only. Errors encountered during operation execution.
   */
  warnings: string[];
}
/**
 * The status of the operation.
 */
export interface Schema$ClusterOperationStatus {
  /**
   * Output only. A message containing any operation metadata details.
   */
  details: string;
  /**
   * Output only. A message containing the detailed operation state.
   */
  innerState: string;
  /**
   * Output only. A message containing the operation state.
   */
  state: string;
  /**
   * Output only. The time this state was entered.
   */
  stateStartTime: string;
}
/**
 * A selector that chooses target cluster for jobs based on metadata.
 */
export interface Schema$ClusterSelector {
  /**
   * Required. The cluster labels. Cluster must have all labels to match.
   */
  clusterLabels: any;
  /**
   * Optional. The zone where workflow process executes. This parameter does not
   * affect the selection of the cluster.If unspecified, the zone of the first
   * cluster matching the selector is used.
   */
  zone: string;
}
/**
 * The status of a cluster and its instances.
 */
export interface Schema$ClusterStatus {
  /**
   * Output only. Optional details of cluster&#39;s state.
   */
  detail: string;
  /**
   * Output only. The cluster&#39;s state.
   */
  state: string;
  /**
   * Output only. Time when this state was entered.
   */
  stateStartTime: string;
  /**
   * Output only. Additional state information that includes status reported by
   * the agent.
   */
  substate: string;
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
   * Output only. The Cloud Storage URI of the diagnostic output. The output
   * report is a plain text file with a summary of collected diagnostics.
   */
  outputUri: string;
}
/**
 * Specifies the config of disk options for a group of VM instances.
 */
export interface Schema$DiskConfig {
  /**
   * Optional. Size in GB of the boot disk (default is 500GB).
   */
  bootDiskSizeGb: number;
  /**
   * Optional. Type of the boot disk (default is &quot;pd-standard&quot;). Valid
   * values: &quot;pd-ssd&quot; (Persistent Disk Solid State Drive) or
   * &quot;pd-standard&quot; (Persistent Disk Hard Disk Drive).
   */
  bootDiskType: string;
  /**
   * Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are
   * not attached, the boot disk is used to store runtime logs and HDFS
   * (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one
   * or more SSDs are attached, this runtime bulk data is spread across them,
   * and the boot disk contains only basic config and installed binaries.
   */
  numLocalSsds: number;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance: service Foo {   rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON
 * representation for Empty is empty JSON object {}.
 */
export interface Schema$Empty {}
/**
 * Common config settings for resources of Compute Engine cluster instances,
 * applicable to all instances in the cluster.
 */
export interface Schema$GceClusterConfig {
  /**
   * Optional. If true, all instances in the cluster will only have internal IP
   * addresses. By default, clusters are not restricted to internal IP
   * addresses, and will have ephemeral external IP addresses assigned to each
   * instance. This internal_ip_only restriction can only be enabled for
   * subnetwork enabled networks, and all off-cluster dependencies must be
   * configured to be accessible without external IP addresses.
   */
  internalIpOnly: boolean;
  /**
   * The Compute Engine metadata entries to add to all instances (see Project
   * and instance metadata
   * (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
   */
  metadata: any;
  /**
   * Optional. The Compute Engine network to be used for machine communications.
   * Cannot be specified with subnetwork_uri. If neither network_uri nor
   * subnetwork_uri is specified, the &quot;default&quot; network of the project
   * is used, if it exists. Cannot be a &quot;Custom Subnet Network&quot; (see
   * Using Subnetworks for more information).A full URL, partial URI, or short
   * name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default
   * projects/[project_id]/regions/global/default default
   */
  networkUri: string;
  /**
   * Optional. The service account of the instances. Defaults to the default
   * Compute Engine service account. Custom service accounts need permissions
   * equivalent to the following IAM roles: roles/logging.logWriter
   * roles/storage.objectAdmin(see
   * https://cloud.google.com/compute/docs/access/service-accounts#custom_service_accounts
   * for more information). Example:
   * [account_id]@[project_id].iam.gserviceaccount.com
   */
  serviceAccount: string;
  /**
   * Optional. The URIs of service account scopes to be included in Compute
   * Engine instances. The following base set of scopes is always included:
   * https://www.googleapis.com/auth/cloud.useraccounts.readonly
   * https://www.googleapis.com/auth/devstorage.read_write
   * https://www.googleapis.com/auth/logging.writeIf no scopes are specified,
   * the following defaults are also provided:
   * https://www.googleapis.com/auth/bigquery
   * https://www.googleapis.com/auth/bigtable.admin.table
   * https://www.googleapis.com/auth/bigtable.data
   * https://www.googleapis.com/auth/devstorage.full_control
   */
  serviceAccountScopes: string[];
  /**
   * Optional. The Compute Engine subnetwork to be used for machine
   * communications. Cannot be specified with network_uri.A full URL, partial
   * URI, or short name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/sub0
   * projects/[project_id]/regions/us-east1/sub0 sub0
   */
  subnetworkUri: string;
  /**
   * The Compute Engine tags to add to all instances (see Tagging instances).
   */
  tags: string[];
  /**
   * Optional. The zone where the Compute Engine cluster will be located. On a
   * create request, it is required in the &quot;global&quot; region. If omitted
   * in a non-global Cloud Dataproc region, the service will pick a zone in the
   * corresponding Compute Engine region. On a get request, zone will always be
   * present.A full URL, partial URI, or short name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]
   * projects/[project_id]/zones/[zone] us-central1-f
   */
  zoneUri: string;
}
/**
 * A Cloud Dataproc job for running Apache Hadoop MapReduce
 * (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html)
 * jobs on Apache Hadoop YARN
 * (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
 */
export interface Schema$HadoopJob {
  /**
   * Optional. HCFS URIs of archives to be extracted in the working directory of
   * Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz,
   * or .zip.
   */
  archiveUris: string[];
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments,
   * such as -libjars or -Dfoo=bar, that can be set as job properties, since a
   * collision may occur that causes an incorrect job submission.
   */
  args: string[];
  /**
   * Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to
   * the working directory of Hadoop drivers and distributed tasks. Useful for
   * naively parallel tasks.
   */
  fileUris: string[];
  /**
   * Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and
   * tasks.
   */
  jarFileUris: string[];
  /**
   * Optional. The runtime log config for job execution.
   */
  loggingConfig: Schema$LoggingConfig;
  /**
   * The name of the driver&#39;s main class. The jar file containing the class
   * must be in the default CLASSPATH or specified in jar_file_uris.
   */
  mainClass: string;
  /**
   * The HCFS URI of the jar file containing the main class. Examples:
   * &#39;gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar&#39;
   * &#39;hdfs:/tmp/test-samples/custom-wordcount.jar&#39;
   * &#39;file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar&#39;
   */
  mainJarFileUri: string;
  /**
   * Optional. A mapping of property names to values, used to configure Hadoop.
   * Properties that conflict with values set by the Cloud Dataproc API may be
   * overwritten. Can include properties set in /etc/hadoop/conf/*-site and
   * classes in user code.
   */
  properties: any;
}
/**
 * A Cloud Dataproc job for running Apache Hive (https://hive.apache.org/)
 * queries on YARN.
 */
export interface Schema$HiveJob {
  /**
   * Optional. Whether to continue executing queries if a query fails. The
   * default value is false. Setting to true can be useful when executing
   * independent parallel queries.
   */
  continueOnFailure: boolean;
  /**
   * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server
   * and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
   */
  jarFileUris: string[];
  /**
   * Optional. A mapping of property names and values, used to configure Hive.
   * Properties that conflict with values set by the Cloud Dataproc API may be
   * overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml,
   * /etc/hive/conf/hive-site.xml, and classes in user code.
   */
  properties: any;
  /**
   * The HCFS URI of the script that contains Hive queries.
   */
  queryFileUri: string;
  /**
   * A list of queries.
   */
  queryList: Schema$QueryList;
  /**
   * Optional. Mapping of query variable names to values (equivalent to the Hive
   * command: SET name=&quot;value&quot;;).
   */
  scriptVariables: any;
}
/**
 * Optional. The config settings for Compute Engine resources in an instance
 * group, such as a master or worker group.
 */
export interface Schema$InstanceGroupConfig {
  /**
   * Optional. The Compute Engine accelerator configuration for these
   * instances.Beta Feature: This feature is still under development. It may be
   * changed before final release.
   */
  accelerators: Schema$AcceleratorConfig[];
  /**
   * Optional. Disk option config settings.
   */
  diskConfig: Schema$DiskConfig;
  /**
   * Output only. The Compute Engine image resource used for cluster instances.
   * Inferred from SoftwareConfig.image_version.
   */
  imageUri: string;
  /**
   * Optional. The list of instance names. Cloud Dataproc derives the names from
   * cluster_name, num_instances, and the instance group if not set by user
   * (recommended practice is to let Cloud Dataproc derive the name).
   */
  instanceNames: string[];
  /**
   * Optional. Specifies that this instance group contains preemptible
   * instances.
   */
  isPreemptible: boolean;
  /**
   * Optional. The Compute Engine machine type used for cluster instances.A full
   * URL, partial URI, or short name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2
   * projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2
   * n1-standard-2Auto Zone Exception: If you are using the Cloud Dataproc Auto
   * Zone Placement feature, you must use the short name of the machine type
   * resource, for example, n1-standard-2.
   */
  machineTypeUri: string;
  /**
   * Output only. The config for Compute Engine Instance Group Manager that
   * manages this group. This is only used for preemptible instance groups.
   */
  managedGroupConfig: Schema$ManagedGroupConfig;
  /**
   * Optional. Specifies the minimum cpu platform for the Instance Group. See
   * Cloud Dataproc&amp;rarr;Minimum CPU Platform.
   */
  minCpuPlatform: string;
  /**
   * Optional. The number of VM instances in the instance group. For master
   * instance groups, must be set to 1.
   */
  numInstances: number;
}
/**
 * A request to instantiate a workflow template.
 */
export interface Schema$InstantiateWorkflowTemplateRequest {
  /**
   * Optional. A tag that prevents multiple concurrent workflow instances with
   * the same tag from running. This mitigates risk of concurrent instances
   * started due to retries.It is recommended to always set this value to a UUID
   * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must
   * contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and
   * hyphens (-). The maximum length is 40 characters.
   */
  instanceId: string;
  /**
   * Optional. The version of workflow template to instantiate. If specified,
   * the workflow will be instantiated only if the current version of the
   * workflow template has the supplied version.This option cannot be used to
   * instantiate a previous version of workflow template.
   */
  version: number;
}
/**
 * A Cloud Dataproc job resource.
 */
export interface Schema$Job {
  /**
   * Output only. If present, the location of miscellaneous control files which
   * may be used as part of job setup and handling. If not present, control
   * files may be placed in the same location as driver_output_uri.
   */
  driverControlFilesUri: string;
  /**
   * Output only. A URI pointing to the location of the stdout of the job&#39;s
   * driver program.
   */
  driverOutputResourceUri: string;
  /**
   * Job is a Hadoop job.
   */
  hadoopJob: Schema$HadoopJob;
  /**
   * Job is a Hive job.
   */
  hiveJob: Schema$HiveJob;
  /**
   * Optional. The labels to associate with this job. Label keys must contain 1
   * to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if
   * present, must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be
   * associated with a job.
   */
  labels: any;
  /**
   * Job is a Pig job.
   */
  pigJob: Schema$PigJob;
  /**
   * Required. Job information, including how, when, and where to run the job.
   */
  placement: Schema$JobPlacement;
  /**
   * Job is a Pyspark job.
   */
  pysparkJob: Schema$PySparkJob;
  /**
   * Optional. The fully qualified reference to the job, which can be used to
   * obtain the equivalent REST path of the job resource. If this property is
   * not specified when a job is created, the server generates a
   * &lt;code&gt;job_id&lt;/code&gt;.
   */
  reference: Schema$JobReference;
  /**
   * Optional. Job scheduling configuration.
   */
  scheduling: Schema$JobScheduling;
  /**
   * Job is a Spark job.
   */
  sparkJob: Schema$SparkJob;
  /**
   * Job is a SparkSql job.
   */
  sparkSqlJob: Schema$SparkSqlJob;
  /**
   * Output only. The job status. Additional application-specific status
   * information may be contained in the &lt;code&gt;type_job&lt;/code&gt; and
   * &lt;code&gt;yarn_applications&lt;/code&gt; fields.
   */
  status: Schema$JobStatus;
  /**
   * Output only. The previous job status.
   */
  statusHistory: Schema$JobStatus[];
  /**
   * Output only. The collection of YARN applications spun up by this job.Beta
   * Feature: This report is available for testing purposes only. It may be
   * changed before final release.
   */
  yarnApplications: Schema$YarnApplication[];
}
/**
 * Cloud Dataproc job config.
 */
export interface Schema$JobPlacement {
  /**
   * Required. The name of the cluster where the job will be submitted.
   */
  clusterName: string;
  /**
   * Output only. A cluster UUID generated by the Cloud Dataproc service when
   * the job is submitted.
   */
  clusterUuid: string;
}
/**
 * Encapsulates the full scoping used to reference a job.
 */
export interface Schema$JobReference {
  /**
   * Optional. The job ID, which must be unique within the project. The job ID
   * is generated by the server upon job submission or provided by the user as a
   * means to perform retries without creating duplicate jobs. The ID must
   * contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens
   * (-). The maximum length is 100 characters.
   */
  jobId: string;
  /**
   * Required. The ID of the Google Cloud Platform project that the job belongs
   * to.
   */
  projectId: string;
}
/**
 * Job scheduling options.
 */
export interface Schema$JobScheduling {
  /**
   * Optional. Maximum number of times per hour a driver may be restarted as a
   * result of driver terminating with non-zero code before job is reported
   * failed.A job may be reported as thrashing if driver exits with non-zero
   * code 4 times within 10 minute window.Maximum value is 10.
   */
  maxFailuresPerHour: number;
}
/**
 * Cloud Dataproc job status.
 */
export interface Schema$JobStatus {
  /**
   * Output only. Optional job state details, such as an error description if
   * the state is &lt;code&gt;ERROR&lt;/code&gt;.
   */
  details: string;
  /**
   * Output only. A state message specifying the overall job state.
   */
  state: string;
  /**
   * Output only. The time when this state was entered.
   */
  stateStartTime: string;
  /**
   * Output only. Additional state information, which includes status reported
   * by the agent.
   */
  substate: string;
}
/**
 * Specifies the cluster auto delete related schedule configuration.
 */
export interface Schema$LifecycleConfig {
  /**
   * Optional. The time when cluster will be auto-deleted.
   */
  autoDeleteTime: string;
  /**
   * Optional. The life duration of cluster, the cluster will be auto-deleted at
   * the end of this duration.
   */
  autoDeleteTtl: string;
  /**
   * Optional. The longest duration that cluster would keep alive while staying
   * idle; passing this threshold will cause cluster to be auto-deleted.
   */
  idleDeleteTtl: string;
}
/**
 * The list of all clusters in a project.
 */
export interface Schema$ListClustersResponse {
  /**
   * Output only. The clusters in the project.
   */
  clusters: Schema$Cluster[];
  /**
   * Output only. This token is included in the response if there are more
   * results to fetch. To fetch additional results, provide this value as the
   * page_token in a subsequent &lt;code&gt;ListClustersRequest&lt;/code&gt;.
   */
  nextPageToken: string;
}
/**
 * A list of jobs in a project.
 */
export interface Schema$ListJobsResponse {
  /**
   * Output only. Jobs list.
   */
  jobs: Schema$Job[];
  /**
   * Optional. This token is included in the response if there are more results
   * to fetch. To fetch additional results, provide this value as the page_token
   * in a subsequent &lt;code&gt;ListJobsRequest&lt;/code&gt;.
   */
  nextPageToken: string;
}
/**
 * The response message for Operations.ListOperations.
 */
export interface Schema$ListOperationsResponse {
  /**
   * The standard List next-page token.
   */
  nextPageToken: string;
  /**
   * A list of operations that matches the specified filter in the request.
   */
  operations: Schema$Operation[];
}
/**
 * A response to a request to list workflow templates in a project.
 */
export interface Schema$ListWorkflowTemplatesResponse {
  /**
   * Output only. This token is included in the response if there are more
   * results to fetch. To fetch additional results, provide this value as the
   * page_token in a subsequent
   * &lt;code&gt;ListWorkflowTemplatesRequest&lt;/code&gt;.
   */
  nextPageToken: string;
  /**
   * Output only. WorkflowTemplates list.
   */
  templates: Schema$WorkflowTemplate[];
}
/**
 * The runtime logging config of the job.
 */
export interface Schema$LoggingConfig {
  /**
   * The per-package log levels for the driver. This may include
   * &quot;root&quot; package name to configure rootLogger. Examples:
   * &#39;com.google = FATAL&#39;, &#39;root = INFO&#39;, &#39;org.apache =
   * DEBUG&#39;
   */
  driverLogLevels: any;
}
/**
 * Cluster that is managed by the workflow.
 */
export interface Schema$ManagedCluster {
  /**
   * Required. The cluster name prefix. A unique cluster name will be formed by
   * appending a random suffix.The name must contain only lower-case letters
   * (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot
   * begin or end with hyphen. Must consist of between 2 and 35 characters.
   */
  clusterName: string;
  /**
   * Required. The cluster configuration.
   */
  config: Schema$ClusterConfig;
  /**
   * Optional. The labels to associate with this cluster.Label keys must be
   * between 1 and 63 characters long, and must conform to the following PCRE
   * regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63
   * characters long, and must conform to the following PCRE regular expression:
   * \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a
   * given cluster.
   */
  labels: any;
}
/**
 * Specifies the resources used to actively manage an instance group.
 */
export interface Schema$ManagedGroupConfig {
  /**
   * Output only. The name of the Instance Group Manager for this group.
   */
  instanceGroupManagerName: string;
  /**
   * Output only. The name of the Instance Template used for the Managed
   * Instance Group.
   */
  instanceTemplateName: string;
}
/**
 * Specifies an executable to run on a fully configured node and a timeout
 * period for executable completion.
 */
export interface Schema$NodeInitializationAction {
  /**
   * Required. Cloud Storage URI of executable file.
   */
  executableFile: string;
  /**
   * Optional. Amount of time executable has to complete. Default is 10 minutes.
   * Cluster creation fails with an explanatory error message (the name of the
   * executable that caused the error and the exceeded timeout period) if the
   * executable is not completed at end of the timeout period.
   */
  executionTimeout: string;
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Schema$Operation {
  /**
   * If the value is false, it means the operation is still in progress. If
   * true, the operation is completed, and either error or response is
   * available.
   */
  done: boolean;
  /**
   * The error result of the operation in case of failure or cancellation.
   */
  error: Schema$Status;
  /**
   * Service-specific metadata associated with the operation. It typically
   * contains progress information and common metadata such as create time. Some
   * services might not provide such metadata. Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata: any;
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the name should
   * have the format of operations/some/unique/name.
   */
  name: string;
  /**
   * The normal response of the operation in case of success. If the original
   * method returns no data on success, such as Delete, the response is
   * google.protobuf.Empty. If the original method is standard
   * Get/Create/Update, the response should be the resource. For other methods,
   * the response should have the type XxxResponse, where Xxx is the original
   * method name. For example, if the original method name is TakeSnapshot(),
   * the inferred response type is TakeSnapshotResponse.
   */
  response: any;
}
/**
 * A job executed by the workflow.
 */
export interface Schema$OrderedJob {
  /**
   * Job is a Hadoop job.
   */
  hadoopJob: Schema$HadoopJob;
  /**
   * Job is a Hive job.
   */
  hiveJob: Schema$HiveJob;
  /**
   * Optional. The labels to associate with this job.Label keys must be between
   * 1 and 63 characters long, and must conform to the following regular
   * expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63
   * characters long, and must conform to the following regular expression:
   * \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a
   * given job.
   */
  labels: any;
  /**
   * Job is a Pig job.
   */
  pigJob: Schema$PigJob;
  /**
   * Optional. The optional list of prerequisite job step_ids. If not specified,
   * the job will start at the beginning of workflow.
   */
  prerequisiteStepIds: string[];
  /**
   * Job is a Pyspark job.
   */
  pysparkJob: Schema$PySparkJob;
  /**
   * Optional. Job scheduling configuration.
   */
  scheduling: Schema$JobScheduling;
  /**
   * Job is a Spark job.
   */
  sparkJob: Schema$SparkJob;
  /**
   * Job is a SparkSql job.
   */
  sparkSqlJob: Schema$SparkSqlJob;
  /**
   * Required. The step id. The id must be unique among all jobs within the
   * template.The step id is used as prefix for job id, as job
   * goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from
   * other steps.The id must contain only letters (a-z, A-Z), numbers (0-9),
   * underscores (_), and hyphens (-). Cannot begin or end with underscore or
   * hyphen. Must consist of between 3 and 50 characters.
   */
  stepId: string;
}
/**
 * A Cloud Dataproc job for running Apache Pig (https://pig.apache.org/) queries
 * on YARN.
 */
export interface Schema$PigJob {
  /**
   * Optional. Whether to continue executing queries if a query fails. The
   * default value is false. Setting to true can be useful when executing
   * independent parallel queries.
   */
  continueOnFailure: boolean;
  /**
   * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client
   * and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
   */
  jarFileUris: string[];
  /**
   * Optional. The runtime log config for job execution.
   */
  loggingConfig: Schema$LoggingConfig;
  /**
   * Optional. A mapping of property names to values, used to configure Pig.
   * Properties that conflict with values set by the Cloud Dataproc API may be
   * overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml,
   * /etc/pig/conf/pig.properties, and classes in user code.
   */
  properties: any;
  /**
   * The HCFS URI of the script that contains the Pig queries.
   */
  queryFileUri: string;
  /**
   * A list of queries.
   */
  queryList: Schema$QueryList;
  /**
   * Optional. Mapping of query variable names to values (equivalent to the Pig
   * command: name=[value]).
   */
  scriptVariables: any;
}
/**
 * Defines an Identity and Access Management (IAM) policy. It is used to specify
 * access control policies for Cloud Platform resources.A Policy consists of a
 * list of bindings. A Binding binds a list of members to a role, where the
 * members can be user accounts, Google groups, Google domains, and service
 * accounts. A role is a named list of permissions defined by IAM.Example {
 * &quot;bindings&quot;: [     {       &quot;role&quot;:
 * &quot;roles/owner&quot;,       &quot;members&quot;: [
 * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
 * &quot;domain:google.com&quot;,
 * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;,       ]
 * },     {       &quot;role&quot;: &quot;roles/viewer&quot;,
 * &quot;members&quot;: [&quot;user:sean@example.com&quot;]     }   ] } For a
 * description of IAM and its features, see the IAM developer&#39;s guide
 * (https://cloud.google.com/iam/docs).
 */
export interface Schema$Policy {
  /**
   * Associates a list of members to a role. bindings with no members will
   * result in an error.
   */
  bindings: Schema$Binding[];
  /**
   * etag is used for optimistic concurrency control as a way to help prevent
   * simultaneous updates of a policy from overwriting each other. It is
   * strongly suggested that systems make use of the etag in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An etag is returned in the response to getIamPolicy, and
   * systems are expected to put that etag in the request to setIamPolicy to
   * ensure that their change will be applied to the same version of the
   * policy.If no etag is provided in the call to setIamPolicy, then the
   * existing policy is overwritten blindly.
   */
  etag: string;
  /**
   * Deprecated.
   */
  version: number;
}
/**
 * A Cloud Dataproc job for running Apache PySpark
 * (https://spark.apache.org/docs/0.9.0/python-programming-guide.html)
 * applications on YARN.
 */
export interface Schema$PySparkJob {
  /**
   * Optional. HCFS URIs of archives to be extracted in the working directory of
   * .jar, .tar, .tar.gz, .tgz, and .zip.
   */
  archiveUris: string[];
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments,
   * such as --conf, that can be set as job properties, since a collision may
   * occur that causes an incorrect job submission.
   */
  args: string[];
  /**
   * Optional. HCFS URIs of files to be copied to the working directory of
   * Python drivers and distributed tasks. Useful for naively parallel tasks.
   */
  fileUris: string[];
  /**
   * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python
   * driver and tasks.
   */
  jarFileUris: string[];
  /**
   * Optional. The runtime log config for job execution.
   */
  loggingConfig: Schema$LoggingConfig;
  /**
   * Required. The HCFS URI of the main Python file to use as the driver. Must
   * be a .py file.
   */
  mainPythonFileUri: string;
  /**
   * Optional. A mapping of property names to values, used to configure PySpark.
   * Properties that conflict with values set by the Cloud Dataproc API may be
   * overwritten. Can include properties set in
   * /etc/spark/conf/spark-defaults.conf and classes in user code.
   */
  properties: any;
  /**
   * Optional. HCFS file URIs of Python files to pass to the PySpark framework.
   * Supported file types: .py, .egg, and .zip.
   */
  pythonFileUris: string[];
}
/**
 * A list of queries to run on a cluster.
 */
export interface Schema$QueryList {
  /**
   * Required. The queries to execute. You do not need to terminate a query with
   * a semicolon. Multiple queries can be specified in one string by separating
   * each with a semicolon. Here is an example of an Cloud Dataproc API snippet
   * that uses a QueryList to specify a HiveJob: &quot;hiveJob&quot;: {
   * &quot;queryList&quot;: {     &quot;queries&quot;: [ &quot;query1&quot;,
   * &quot;query2&quot;,       &quot;query3;query4&quot;,     ]   } }
   */
  queries: string[];
}
/**
 * Request message for SetIamPolicy method.
 */
export interface Schema$SetIamPolicyRequest {
  /**
   * REQUIRED: The complete policy to be applied to the resource. The size of
   * the policy is limited to a few 10s of KB. An empty policy is a valid policy
   * but certain Cloud Platform services (such as Projects) might reject them.
   */
  policy: Schema$Policy;
}
/**
 * Specifies the selection and config of software inside the cluster.
 */
export interface Schema$SoftwareConfig {
  /**
   * Optional. The version of software inside the cluster. It must match the
   * regular expression [0-9]+\.[0-9]+. If unspecified, it defaults to the
   * latest version (see Cloud Dataproc Versioning).
   */
  imageVersion: string;
  /**
   * Optional. The properties to set on daemon config files.Property keys are
   * specified in prefix:property format, such as core:fs.defaultFS. The
   * following are supported prefixes and their mappings: capacity-scheduler:
   * capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs:
   * hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig:
   * pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more
   * information, see Cluster properties.
   */
  properties: any;
}
/**
 * A Cloud Dataproc job for running Apache Spark (http://spark.apache.org/)
 * applications on YARN.
 */
export interface Schema$SparkJob {
  /**
   * Optional. HCFS URIs of archives to be extracted in the working directory of
   * Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz,
   * and .zip.
   */
  archiveUris: string[];
  /**
   * Optional. The arguments to pass to the driver. Do not include arguments,
   * such as --conf, that can be set as job properties, since a collision may
   * occur that causes an incorrect job submission.
   */
  args: string[];
  /**
   * Optional. HCFS URIs of files to be copied to the working directory of Spark
   * drivers and distributed tasks. Useful for naively parallel tasks.
   */
  fileUris: string[];
  /**
   * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark
   * driver and tasks.
   */
  jarFileUris: string[];
  /**
   * Optional. The runtime log config for job execution.
   */
  loggingConfig: Schema$LoggingConfig;
  /**
   * The name of the driver&#39;s main class. The jar file that contains the
   * class must be in the default CLASSPATH or specified in jar_file_uris.
   */
  mainClass: string;
  /**
   * The HCFS URI of the jar file that contains the main class.
   */
  mainJarFileUri: string;
  /**
   * Optional. A mapping of property names to values, used to configure Spark.
   * Properties that conflict with values set by the Cloud Dataproc API may be
   * overwritten. Can include properties set in
   * /etc/spark/conf/spark-defaults.conf and classes in user code.
   */
  properties: any;
}
/**
 * A Cloud Dataproc job for running Apache Spark SQL
 * (http://spark.apache.org/sql/) queries.
 */
export interface Schema$SparkSqlJob {
  /**
   * Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
   */
  jarFileUris: string[];
  /**
   * Optional. The runtime log config for job execution.
   */
  loggingConfig: Schema$LoggingConfig;
  /**
   * Optional. A mapping of property names to values, used to configure Spark
   * SQL&#39;s SparkConf. Properties that conflict with values set by the Cloud
   * Dataproc API may be overwritten.
   */
  properties: any;
  /**
   * The HCFS URI of the script that contains SQL queries.
   */
  queryFileUri: string;
  /**
   * A list of queries.
   */
  queryList: Schema$QueryList;
  /**
   * Optional. Mapping of query variable names to values (equivalent to the
   * Spark SQL command: SET name=&quot;value&quot;;).
   */
  scriptVariables: any;
}
/**
 * The Status type defines a logical error model that is suitable for different
 * programming environments, including REST APIs and RPC APIs. It is used by
 * gRPC (https://github.com/grpc). The error model is designed to be: Simple to
 * use and understand for most users Flexible enough to meet unexpected
 * needsOverviewThe Status message contains three pieces of data: error code,
 * error message, and error details. The error code should be an enum value of
 * google.rpc.Code, but it may accept additional error codes if needed. The
 * error message should be a developer-facing English message that helps
 * developers understand and resolve the error. If a localized user-facing error
 * message is needed, put the localized message in the error details or localize
 * it in the client. The optional error details may contain arbitrary
 * information about the error. There is a predefined set of error detail types
 * in the package google.rpc that can be used for common error
 * conditions.Language mappingThe Status message is the logical representation
 * of the error model, but it is not necessarily the actual wire format. When
 * the Status message is exposed in different client libraries and different
 * wire protocols, it can be mapped differently. For example, it will likely be
 * mapped to some exceptions in Java, but more likely mapped to some error codes
 * in C.Other usesThe error model and the Status message can be used in a
 * variety of environments, either with or without APIs, to provide a consistent
 * developer experience across different environments.Example uses of this error
 * model include: Partial errors. If a service needs to return partial errors to
 * the client, it may embed the Status in the normal response to indicate the
 * partial errors. Workflow errors. A typical workflow has multiple steps. Each
 * step may have a Status message for error reporting. Batch operations. If a
 * client uses batch request and batch response, the Status message should be
 * used directly inside batch response, one for each error sub-response.
 * Asynchronous operations. If an API call embeds asynchronous operation results
 * in its response, the status of those operations should be represented
 * directly using the Status message. Logging. If some API errors are stored in
 * logs, the message Status could be used directly after any stripping needed
 * for security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details. There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * A request to submit a job.
 */
export interface Schema$SubmitJobRequest {
  /**
   * Required. The job resource.
   */
  job: Schema$Job;
  /**
   * Optional. A unique id used to identify the request. If the server receives
   * two SubmitJobRequest requests with the same id, then the second request
   * will be ignored and the first Job created and stored in the backend is
   * returned.It is recommended to always set this value to a UUID
   * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must
   * contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and
   * hyphens (-). The maximum length is 40 characters.
   */
  requestId: string;
}
/**
 * Request message for TestIamPermissions method.
 */
export interface Schema$TestIamPermissionsRequest {
  /**
   * The set of permissions to check for the resource. Permissions with
   * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For
   * more information see IAM Overview
   * (https://cloud.google.com/iam/docs/overview#permissions).
   */
  permissions: string[];
}
/**
 * Response message for TestIamPermissions method.
 */
export interface Schema$TestIamPermissionsResponse {
  /**
   * A subset of TestPermissionsRequest.permissions that the caller is allowed.
   */
  permissions: string[];
}
/**
 * The workflow graph.
 */
export interface Schema$WorkflowGraph {
  /**
   * Output only. The workflow nodes.
   */
  nodes: Schema$WorkflowNode[];
}
/**
 * A Cloud Dataproc workflow template resource.
 */
export interface Schema$WorkflowMetadata {
  /**
   * Output only. The name of the managed cluster.
   */
  clusterName: string;
  /**
   * Output only. The create cluster operation metadata.
   */
  createCluster: Schema$ClusterOperation;
  /**
   * Output only. The delete cluster operation metadata.
   */
  deleteCluster: Schema$ClusterOperation;
  /**
   * Output only. The workflow graph.
   */
  graph: Schema$WorkflowGraph;
  /**
   * Map from parameter names to values that were used for those parameters.
   */
  parameters: any;
  /**
   * Output only. The workflow state.
   */
  state: string;
  /**
   * Output only. The &quot;resource name&quot; of the template.
   */
  template: string;
  /**
   * Output only. The version of template at the time of workflow instantiation.
   */
  version: number;
}
/**
 * The workflow node.
 */
export interface Schema$WorkflowNode {
  /**
   * Output only. The error detail.
   */
  error: string;
  /**
   * Output only. The job id; populated after the node enters RUNNING state.
   */
  jobId: string;
  /**
   * Output only. Node&#39;s prerequisite nodes.
   */
  prerequisiteStepIds: string[];
  /**
   * Output only. The node state.
   */
  state: string;
  /**
   * Output only. The name of the node.
   */
  stepId: string;
}
/**
 * A Cloud Dataproc workflow template resource.
 */
export interface Schema$WorkflowTemplate {
  /**
   * Output only. The time template was created.
   */
  createTime: string;
  /**
   * Required. The template id.The id must contain only letters (a-z, A-Z),
   * numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with
   * underscore or hyphen. Must consist of between 3 and 50 characters.
   */
  id: string;
  /**
   * Required. The Directed Acyclic Graph of Jobs to submit.
   */
  jobs: Schema$OrderedJob[];
  /**
   * Optional. The labels to associate with this template. These labels will be
   * propagated to all jobs and clusters created by the workflow instance.Label
   * keys must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if
   * present, must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be
   * associated with a template.
   */
  labels: any;
  /**
   * Output only. The &quot;resource name&quot; of the template, as described in
   * https://cloud.google.com/apis/design/resource_names of the form
   * projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
   */
  name: string;
  /**
   * Required. WorkflowTemplate scheduling information.
   */
  placement: Schema$WorkflowTemplatePlacement;
  /**
   * Output only. The time template was last updated.
   */
  updateTime: string;
  /**
   * Optional. Used to perform a consistent read-modify-write.This field should
   * be left blank for a CreateWorkflowTemplate request. It is required for an
   * UpdateWorkflowTemplate request, and must match the current server version.
   * A typical update template flow would fetch the current template with a
   * GetWorkflowTemplate request, which will return the current template with
   * the version field filled in with the current server version. The user
   * updates other fields in the template, then returns it as part of the
   * UpdateWorkflowTemplate request.
   */
  version: number;
}
/**
 * Specifies workflow execution target.Either managed_cluster or
 * cluster_selector is required.
 */
export interface Schema$WorkflowTemplatePlacement {
  /**
   * Optional. A selector that chooses target cluster for jobs based on
   * metadata.The selector is evaluated at the time each job is submitted.
   */
  clusterSelector: Schema$ClusterSelector;
  /**
   * Optional. A cluster that is managed by the workflow.
   */
  managedCluster: Schema$ManagedCluster;
}
/**
 * A YARN application created by a job. Application information is a subset of
 * &lt;code&gt;org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto&lt;/code&gt;.Beta
 * Feature: This report is available for testing purposes only. It may be
 * changed before final release.
 */
export interface Schema$YarnApplication {
  /**
   * Required. The application name.
   */
  name: string;
  /**
   * Required. The numerical progress of the application, from 1 to 100.
   */
  progress: number;
  /**
   * Required. The application state.
   */
  state: string;
  /**
   * Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or
   * TimelineServer that provides application-specific information. The URL uses
   * the internal hostname, and requires a proxy server for resolution and,
   * possibly, access.
   */
  trackingUrl: string;
}

export class Resource$Projects {
  root: Dataproc;
  locations: Resource$Projects$Locations;
  regions: Resource$Projects$Regions;
  constructor(root: Dataproc) {
    this.root = root;
    this.getRoot.bind(this);
    this.locations = new Resource$Projects$Locations(root);
    this.regions = new Resource$Projects$Regions(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Locations {
  root: Dataproc;
  workflowTemplates: Resource$Projects$Locations$Workflowtemplates;
  constructor(root: Dataproc) {
    this.root = root;
    this.getRoot.bind(this);
    this.workflowTemplates =
        new Resource$Projects$Locations$Workflowtemplates(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Locations$Workflowtemplates {
  root: Dataproc;
  constructor(root: Dataproc) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataproc.projects.locations.workflowTemplates.create
   * @desc Creates new workflow template.
   * @alias dataproc.projects.locations.workflowTemplates.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The "resource name" of the region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
   * @param {().WorkflowTemplate} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$WorkflowTemplate>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>):
      void|AxiosPromise<Schema$WorkflowTemplate> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/workflowTemplates')
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
      createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WorkflowTemplate>(parameters);
    }
  }


  /**
   * dataproc.projects.locations.workflowTemplates.delete
   * @desc Deletes a workflow template. It does not cancel in-progress
   * workflows.
   * @alias dataproc.projects.locations.workflowTemplates.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
   * @param {integer=} params.version Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
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
   * dataproc.projects.locations.workflowTemplates.get
   * @desc Retrieves the latest workflow template.Can retrieve previously
   * instantiated template by specifying optional version parameter.
   * @alias dataproc.projects.locations.workflowTemplates.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
   * @param {integer=} params.version Optional. The version of workflow template to retrieve. Only previously instatiated versions can be retrieved.If unspecified, retrieves the current version.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$WorkflowTemplate>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>):
      void|AxiosPromise<Schema$WorkflowTemplate> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WorkflowTemplate>(parameters);
    }
  }


  /**
   * dataproc.projects.locations.workflowTemplates.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @alias dataproc.projects.locations.workflowTemplates.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * dataproc.projects.locations.workflowTemplates.instantiate
   * @desc Instantiates a template and begins execution.The returned Operation
   * can be used to track execution of workflow by polling operations.get. The
   * Operation will complete when entire workflow is finished.The running
   * workflow can be aborted via operations.cancel. This will cause any inflight
   * jobs to be cancelled and workflow-owned clusters to be deleted.The
   * Operation.metadata will be WorkflowMetadata.On successful completion,
   * Operation.response will be Empty.
   * @alias dataproc.projects.locations.workflowTemplates.instantiate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
   * @param {().InstantiateWorkflowTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  instantiate(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  instantiate(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  instantiate(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:instantiate')
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
   * dataproc.projects.locations.workflowTemplates.instantiateInline
   * @desc Instantiates a template and begins execution.This method is
   * equivalent to executing the sequence CreateWorkflowTemplate,
   * InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation
   * can be used to track execution of workflow by polling operations.get. The
   * Operation will complete when entire workflow is finished.The running
   * workflow can be aborted via operations.cancel. This will cause any inflight
   * jobs to be cancelled and workflow-owned clusters to be deleted.The
   * Operation.metadata will be WorkflowMetadata.On successful completion,
   * Operation.response will be Empty.
   * @alias dataproc.projects.locations.workflowTemplates.instantiateInline
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.instanceId Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
   * @param {string} params.parent Required. The "resource name" of the workflow template region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
   * @param {().WorkflowTemplate} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  instantiateInline(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  instantiateInline(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  instantiateInline(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta2/{+parent}/workflowTemplates:instantiateInline')
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
   * dataproc.projects.locations.workflowTemplates.list
   * @desc Lists workflows that match the specified filter in the request.
   * @alias dataproc.projects.locations.workflowTemplates.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional. The maximum number of results to return in each response.
   * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
   * @param {string} params.parent Required. The "resource name" of the region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListWorkflowTemplatesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      callback?: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      callback?: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>):
      void|AxiosPromise<Schema$ListWorkflowTemplatesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/workflowTemplates')
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
      createAPIRequest<Schema$ListWorkflowTemplatesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListWorkflowTemplatesResponse>(parameters);
    }
  }


  /**
   * dataproc.projects.locations.workflowTemplates.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * dataproc.projects.locations.workflowTemplates.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }


  /**
   * dataproc.projects.locations.workflowTemplates.update
   * @desc Updates (replaces) workflow template. The updated template must
   * contain version that matches the current server version.
   * @alias dataproc.projects.locations.workflowTemplates.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Output only. The "resource name" of the template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
   * @param {().WorkflowTemplate} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$WorkflowTemplate>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>):
      void|AxiosPromise<Schema$WorkflowTemplate> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WorkflowTemplate>(parameters);
    }
  }
}


export class Resource$Projects$Regions {
  root: Dataproc;
  clusters: Resource$Projects$Regions$Clusters;
  jobs: Resource$Projects$Regions$Jobs;
  operations: Resource$Projects$Regions$Operations;
  workflowTemplates: Resource$Projects$Regions$Workflowtemplates;
  constructor(root: Dataproc) {
    this.root = root;
    this.getRoot.bind(this);
    this.clusters = new Resource$Projects$Regions$Clusters(root);
    this.jobs = new Resource$Projects$Regions$Jobs(root);
    this.operations = new Resource$Projects$Regions$Operations(root);
    this.workflowTemplates =
        new Resource$Projects$Regions$Workflowtemplates(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Regions$Clusters {
  root: Dataproc;
  constructor(root: Dataproc) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataproc.projects.regions.clusters.create
   * @desc Creates a cluster in a project.
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta2/projects/{projectId}/regions/{region}/clusters')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'region'],
      pathParams: ['projectId', 'region'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.clusters.delete
   * @desc Deletes a cluster in a project.
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['projectId', 'region', 'clusterName'],
      pathParams: ['clusterName', 'projectId', 'region'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.clusters.diagnose
   * @desc Gets cluster diagnostic information. After the operation completes,
   * the Operation.response field contains DiagnoseClusterOutputLocation.
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
  diagnose(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  diagnose(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  diagnose(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'region', 'clusterName'],
      pathParams: ['clusterName', 'projectId', 'region'],
      context: this.getRoot()
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'region', 'clusterName'],
      pathParams: ['clusterName', 'projectId', 'region'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Cluster>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Cluster>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.clusters.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @alias dataproc.projects.regions.clusters.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta2/projects/{projectId}/regions/{region}/clusters')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'region'],
      pathParams: ['projectId', 'region'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListClustersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListClustersResponse>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.clusters.patch
   * @desc Updates a cluster in a project.
   * @alias dataproc.projects.regions.clusters.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.clusterName Required. The cluster name.
   * @param {string=} params.gracefulDecommissionTimeout Optional. Timeout for graceful YARN decomissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day.Only supported on Dataproc image versions 1.2 and higher.
   * @param {string} params.projectId Required. The ID of the Google Cloud Platform project the cluster belongs to.
   * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
   * @param {string=} params.requestId Optional. A unique id used to identify the request. If the server receives two UpdateClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
   * @param {string=} params.updateMask Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: {   "config":{     "workerConfig":{       "numInstances":"5"     }   } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: {   "config":{     "secondaryWorkerConfig":{       "numInstances":"5"     }   } } <strong>Note:</strong> currently only the following fields can be updated: <table> <tr> <td><strong>Mask</strong></td><td><strong>Purpose</strong></td> </tr> <tr> <td>labels</td><td>Updates labels</td> </tr> <tr> <td>config.worker_config.num_instances</td><td>Resize primary worker group</td> </tr> <tr> <td>config.secondary_worker_config.num_instances</td><td>Resize secondary worker group</td> </tr> <tr> <td>config.lifecycle_config.auto_delete_ttl</td><td>Reset MAX TTL duration</td> </tr> <tr> <td>config.lifecycle_config.auto_delete_time</td><td>Update MAX TTL deletion timestamp</td> </tr> <tr> <td>config.lifecycle_config.idle_delete_ttl</td><td>Update Idle TTL duration</td> </tr> </table>
   * @param {().Cluster} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  patch(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['projectId', 'region', 'clusterName'],
      pathParams: ['clusterName', 'projectId', 'region'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.clusters.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.clusters.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }
}

export class Resource$Projects$Regions$Jobs {
  root: Dataproc;
  constructor(root: Dataproc) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataproc.projects.regions.jobs.cancel
   * @desc Starts a job cancellation request. To access the job resource after
   * cancellation, call regions/{region}/jobs.list or regions/{region}/jobs.get.
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
  cancel(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'region', 'jobId'],
      pathParams: ['jobId', 'projectId', 'region'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.jobs.delete
   * @desc Deletes the job from the project. If the job is active, the delete
   * fails, and the response returns FAILED_PRECONDITION.
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
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['projectId', 'region', 'jobId'],
      pathParams: ['jobId', 'projectId', 'region'],
      context: this.getRoot()
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
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'region', 'jobId'],
      pathParams: ['jobId', 'projectId', 'region'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.jobs.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @alias dataproc.projects.regions.jobs.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListJobsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>):
      void|AxiosPromise<Schema$ListJobsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta2/projects/{projectId}/regions/{region}/jobs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'region'],
      pathParams: ['projectId', 'region'],
      context: this.getRoot()
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
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['projectId', 'region', 'jobId'],
      pathParams: ['jobId', 'projectId', 'region'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.jobs.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
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
  submit(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  submit(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  submit(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta2/projects/{projectId}/regions/{region}/jobs:submit')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'region'],
      pathParams: ['projectId', 'region'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.jobs.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }
}

export class Resource$Projects$Regions$Operations {
  root: Dataproc;
  constructor(root: Dataproc) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataproc.projects.regions.operations.cancel
   * @desc Starts asynchronous cancellation on a long-running operation. The
   * server makes a best effort to cancel the operation, but success is not
   * guaranteed. If the server doesn't support this method, it returns
   * google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or
   * other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation, the
   * operation is not deleted; instead, it becomes an operation with an
   * Operation.error value with a google.rpc.Status.code of 1, corresponding to
   * Code.CANCELLED.
   * @alias dataproc.projects.regions.operations.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be cancelled.
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:cancel')
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
   * dataproc.projects.regions.operations.delete
   * @desc Deletes a long-running operation. This method indicates that the
   * client is no longer interested in the operation result. It does not cancel
   * the operation. If the server doesn't support this method, it returns
   * google.rpc.Code.UNIMPLEMENTED.
   * @alias dataproc.projects.regions.operations.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be deleted.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
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
   * dataproc.projects.regions.operations.get
   * @desc Gets the latest state of a long-running operation. Clients can use
   * this method to poll the operation result at intervals as recommended by the
   * API service.
   * @alias dataproc.projects.regions.operations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource.
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
   * dataproc.projects.regions.operations.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @alias dataproc.projects.regions.operations.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.operations.list
   * @desc Lists operations that match the specified filter in the request. If
   * the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the
   * name binding allows API services to override the binding to use different
   * resource name schemes, such as users/x/operations. To override the binding,
   * API services can add a binding such as "/v1/{name=users/x}/operations" to
   * their service configuration. For backwards compatibility, the default name
   * includes the operations collection id, however overriding users must ensure
   * the name binding is the parent resource, without the operations collection
   * id.
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListOperationsResponse>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.operations.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.operations.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }
}

export class Resource$Projects$Regions$Workflowtemplates {
  root: Dataproc;
  constructor(root: Dataproc) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataproc.projects.regions.workflowTemplates.create
   * @desc Creates new workflow template.
   * @alias dataproc.projects.regions.workflowTemplates.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The "resource name" of the region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
   * @param {().WorkflowTemplate} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$WorkflowTemplate>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>):
      void|AxiosPromise<Schema$WorkflowTemplate> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/workflowTemplates')
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
      createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WorkflowTemplate>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.workflowTemplates.delete
   * @desc Deletes a workflow template. It does not cancel in-progress
   * workflows.
   * @alias dataproc.projects.regions.workflowTemplates.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
   * @param {integer=} params.version Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
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
   * dataproc.projects.regions.workflowTemplates.get
   * @desc Retrieves the latest workflow template.Can retrieve previously
   * instantiated template by specifying optional version parameter.
   * @alias dataproc.projects.regions.workflowTemplates.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
   * @param {integer=} params.version Optional. The version of workflow template to retrieve. Only previously instatiated versions can be retrieved.If unspecified, retrieves the current version.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$WorkflowTemplate>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>):
      void|AxiosPromise<Schema$WorkflowTemplate> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WorkflowTemplate>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.workflowTemplates.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @alias dataproc.projects.regions.workflowTemplates.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.workflowTemplates.instantiate
   * @desc Instantiates a template and begins execution.The returned Operation
   * can be used to track execution of workflow by polling operations.get. The
   * Operation will complete when entire workflow is finished.The running
   * workflow can be aborted via operations.cancel. This will cause any inflight
   * jobs to be cancelled and workflow-owned clusters to be deleted.The
   * Operation.metadata will be WorkflowMetadata.On successful completion,
   * Operation.response will be Empty.
   * @alias dataproc.projects.regions.workflowTemplates.instantiate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
   * @param {().InstantiateWorkflowTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  instantiate(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  instantiate(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  instantiate(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:instantiate')
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
   * dataproc.projects.regions.workflowTemplates.instantiateInline
   * @desc Instantiates a template and begins execution.This method is
   * equivalent to executing the sequence CreateWorkflowTemplate,
   * InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation
   * can be used to track execution of workflow by polling operations.get. The
   * Operation will complete when entire workflow is finished.The running
   * workflow can be aborted via operations.cancel. This will cause any inflight
   * jobs to be cancelled and workflow-owned clusters to be deleted.The
   * Operation.metadata will be WorkflowMetadata.On successful completion,
   * Operation.response will be Empty.
   * @alias dataproc.projects.regions.workflowTemplates.instantiateInline
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.instanceId Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
   * @param {string} params.parent Required. The "resource name" of the workflow template region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
   * @param {().WorkflowTemplate} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  instantiateInline(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Operation>;
  instantiateInline(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  instantiateInline(
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
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1beta2/{+parent}/workflowTemplates:instantiateInline')
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
   * dataproc.projects.regions.workflowTemplates.list
   * @desc Lists workflows that match the specified filter in the request.
   * @alias dataproc.projects.regions.workflowTemplates.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional. The maximum number of results to return in each response.
   * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
   * @param {string} params.parent Required. The "resource name" of the region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListWorkflowTemplatesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      callback?: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>,
      callback?: BodyResponseCallback<Schema$ListWorkflowTemplatesResponse>):
      void|AxiosPromise<Schema$ListWorkflowTemplatesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/workflowTemplates')
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
      createAPIRequest<Schema$ListWorkflowTemplatesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListWorkflowTemplatesResponse>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.workflowTemplates.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.workflowTemplates.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }


  /**
   * dataproc.projects.regions.workflowTemplates.update
   * @desc Updates (replaces) workflow template. The updated template must
   * contain version that matches the current server version.
   * @alias dataproc.projects.regions.workflowTemplates.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Output only. The "resource name" of the template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
   * @param {().WorkflowTemplate} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$WorkflowTemplate>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WorkflowTemplate>,
      callback?: BodyResponseCallback<Schema$WorkflowTemplate>):
      void|AxiosPromise<Schema$WorkflowTemplate> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WorkflowTemplate>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WorkflowTemplate>(parameters);
    }
  }
}
