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

export namespace composer_v1 {
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
   * Cloud Composer API
   *
   * Manages Apache Airflow environments on Google Cloud Platform.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const composer = google.composer('v1');
   * ```
   */
  export class Composer {
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
   * Allowed IP range with user-provided description.
   */
  export interface Schema$AllowedIpRange {
    /**
     * Optional. User-provided description. It must contain at most 300 characters.
     */
    description?: string | null;
    /**
     * IP address or range, defined using CIDR notation, of requests that this rule applies to. Examples: `192.168.1.1` or `192.168.0.0/16` or `2001:db8::/32` or `2001:0db8:0000:0042:0000:8a2e:0370:7334`. IP range prefixes should be properly truncated. For example, `1.2.3.4/24` should be truncated to `1.2.3.0/24`. Similarly, for IPv6, `2001:db8::1/32` should be truncated to `2001:db8::/32`.
     */
    value?: string | null;
  }
  /**
   * Message containing information about the result of an upgrade check operation.
   */
  export interface Schema$CheckUpgradeResponse {
    /**
     * Output only. Url for a docker build log of an upgraded image.
     */
    buildLogUri?: string | null;
    /**
     * Output only. Whether build has succeeded or failed on modules conflicts.
     */
    containsPypiModulesConflict?: string | null;
    /**
     * Composer image for which the build was happening.
     */
    imageVersion?: string | null;
    /**
     * Output only. Extract from a docker image build log containing information about pypi modules conflicts.
     */
    pypiConflictBuildLogExtract?: string | null;
    /**
     * Pypi dependencies specified in the environment configuration, at the time when the build was triggered.
     */
    pypiDependencies?: {[key: string]: string} | null;
  }
  /**
   * CIDR block with an optional name.
   */
  export interface Schema$CidrBlock {
    /**
     * CIDR block that must be specified in CIDR notation.
     */
    cidrBlock?: string | null;
    /**
     * User-defined name that identifies the CIDR block.
     */
    displayName?: string | null;
  }
  /**
   * The configuration of Cloud SQL instance that is used by the Apache Airflow software.
   */
  export interface Schema$DatabaseConfig {
    /**
     * Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    machineType?: string | null;
  }
  /**
   * Request to trigger database failover (only for highly resilient environments).
   */
  export interface Schema$DatabaseFailoverRequest {}
  /**
   * Response for DatabaseFailoverRequest.
   */
  export interface Schema$DatabaseFailoverResponse {}
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * The encryption options for the Cloud Composer environment and its dependencies.Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
   */
  export interface Schema$EncryptionConfig {
    /**
     * Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. If not specified, Google-managed key will be used.
     */
    kmsKeyName?: string | null;
  }
  /**
   * An environment for running orchestration tasks.
   */
  export interface Schema$Environment {
    /**
     * Configuration parameters for this environment.
     */
    config?: Schema$EnvironmentConfig;
    /**
     * Output only. The time at which this environment was created.
     */
    createTime?: string | null;
    /**
     * Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll\}\p{Lo\}{0,62\} * Values must conform to regexp: [\p{Ll\}\p{Lo\}\p{N\}_-]{0,63\} * Both keys and values are additionally constrained to be <= 128 bytes in size.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name of the environment, in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     */
    name?: string | null;
    /**
     * The current state of the environment.
     */
    state?: string | null;
    /**
     * Output only. The time at which this environment was last modified.
     */
    updateTime?: string | null;
    /**
     * Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.
     */
    uuid?: string | null;
  }
  /**
   * Configuration information for an environment.
   */
  export interface Schema$EnvironmentConfig {
    /**
     * Output only. The 'bring your own identity' variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see [Access environments with workforce identity federation](/composer/docs/composer-2/access-environments-with-workforce-identity-federation)).
     */
    airflowByoidUri?: string | null;
    /**
     * Output only. The URI of the Apache Airflow Web UI hosted within this environment (see [Airflow web interface](/composer/docs/how-to/accessing/airflow-web-interface)).
     */
    airflowUri?: string | null;
    /**
     * Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using "/"-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with the given prefix.
     */
    dagGcsPrefix?: string | null;
    /**
     * Optional. The configuration settings for Cloud SQL instance used internally by Apache Airflow software.
     */
    databaseConfig?: Schema$DatabaseConfig;
    /**
     * Optional. The encryption options for the Cloud Composer environment and its dependencies. Cannot be updated.
     */
    encryptionConfig?: Schema$EncryptionConfig;
    /**
     * Optional. The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    environmentSize?: string | null;
    /**
     * Output only. The Kubernetes Engine cluster used to run this environment.
     */
    gkeCluster?: string | null;
    /**
     * Optional. The maintenance window is the period when Cloud Composer components may undergo maintenance. It is defined so that maintenance is not executed during peak hours or critical time periods. The system will not be under maintenance for every occurrence of this window, but when maintenance is planned, it will be scheduled during the window. The maintenance window period must encompass at least 12 hours per week. This may be split into multiple chunks, each with a size of at least 4 hours. If this value is omitted, the default value for maintenance window will be applied. The default value is Saturday and Sunday 00-06 GMT.
     */
    maintenanceWindow?: Schema$MaintenanceWindow;
    /**
     * Optional. The configuration options for GKE cluster master authorized networks. By default master authorized networks feature is: - in case of private environment: enabled with no external networks allowlisted. - in case of public environment: disabled.
     */
    masterAuthorizedNetworksConfig?: Schema$MasterAuthorizedNetworksConfig;
    /**
     * The configuration used for the Kubernetes Engine cluster.
     */
    nodeConfig?: Schema$NodeConfig;
    /**
     * The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    nodeCount?: number | null;
    /**
     * The configuration used for the Private IP Cloud Composer environment.
     */
    privateEnvironmentConfig?: Schema$PrivateEnvironmentConfig;
    /**
     * Optional. The Recovery settings configuration of an environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    recoveryConfig?: Schema$RecoveryConfig;
    /**
     * Optional. Resilience mode of the Cloud Composer Environment. This field is supported for Cloud Composer environments in versions composer-2.2.0-airflow-*.*.* and newer.
     */
    resilienceMode?: string | null;
    /**
     * The configuration settings for software inside the environment.
     */
    softwareConfig?: Schema$SoftwareConfig;
    /**
     * Optional. The configuration settings for the Airflow web server App Engine instance.
     */
    webServerConfig?: Schema$WebServerConfig;
    /**
     * Optional. The network-level access control policy for the Airflow web server. If unspecified, no network-level access restrictions will be applied.
     */
    webServerNetworkAccessControl?: Schema$WebServerNetworkAccessControl;
    /**
     * Optional. The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. The GKE cluster runs Airflow scheduler, web server and workers workloads. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    workloadsConfig?: Schema$WorkloadsConfig;
  }
  /**
   * Execute Airflow Command request.
   */
  export interface Schema$ExecuteAirflowCommandRequest {
    /**
     * Airflow command.
     */
    command?: string | null;
    /**
     * Parameters for the Airflow command/subcommand as an array of arguments. It may contain positional arguments like `["my-dag-id"]`, key-value parameters like `["--foo=bar"]` or `["--foo","bar"]`, or other flags like `["-f"]`.
     */
    parameters?: string[] | null;
    /**
     * Airflow subcommand.
     */
    subcommand?: string | null;
  }
  /**
   * Response to ExecuteAirflowCommandRequest.
   */
  export interface Schema$ExecuteAirflowCommandResponse {
    /**
     * Error message. Empty if there was no error.
     */
    error?: string | null;
    /**
     * The unique ID of the command execution for polling.
     */
    executionId?: string | null;
    /**
     * The name of the pod where the command is executed.
     */
    pod?: string | null;
    /**
     * The namespace of the pod where the command is executed.
     */
    podNamespace?: string | null;
  }
  /**
   * Information about how a command ended.
   */
  export interface Schema$ExitInfo {
    /**
     * Error message. Empty if there was no error.
     */
    error?: string | null;
    /**
     * The exit code from the command execution.
     */
    exitCode?: number | null;
  }
  /**
   * Response for FetchDatabasePropertiesRequest.
   */
  export interface Schema$FetchDatabasePropertiesResponse {
    /**
     * The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only fail over to the failover replica when the status is true.
     */
    isFailoverReplicaAvailable?: boolean | null;
    /**
     * The Compute Engine zone that the instance is currently serving from.
     */
    primaryGceZone?: string | null;
    /**
     * The Compute Engine zone that the failover instance is currently serving from for a regional Cloud SQL instance.
     */
    secondaryGceZone?: string | null;
  }
  /**
   * ImageVersion information
   */
  export interface Schema$ImageVersion {
    /**
     * Whether it is impossible to create an environment with the image version.
     */
    creationDisabled?: boolean | null;
    /**
     * The string identifier of the ImageVersion, in the form: "composer-x.y.z-airflow-a.b.c"
     */
    imageVersionId?: string | null;
    /**
     * Whether this is the default ImageVersion used by Composer during environment creation if no input ImageVersion is specified.
     */
    isDefault?: boolean | null;
    /**
     * The date of the version release.
     */
    releaseDate?: Schema$Date;
    /**
     * supported python versions
     */
    supportedPythonVersions?: string[] | null;
    /**
     * Whether it is impossible to upgrade an environment running with the image version.
     */
    upgradeDisabled?: boolean | null;
  }
  /**
   * Configuration for controlling how IPs are allocated in the GKE cluster running the Apache Airflow software.
   */
  export interface Schema$IPAllocationPolicy {
    /**
     * Optional. The IP address range used to allocate IP addresses to pods in the GKE cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
     */
    clusterIpv4CidrBlock?: string | null;
    /**
     * Optional. The name of the GKE cluster's secondary range used to allocate IP addresses to pods. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true.
     */
    clusterSecondaryRangeName?: string | null;
    /**
     * Optional. The IP address range of the services IP addresses in this GKE cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
     */
    servicesIpv4CidrBlock?: string | null;
    /**
     * Optional. The name of the services' secondary range used to allocate IP addresses to the GKE cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true.
     */
    servicesSecondaryRangeName?: string | null;
    /**
     * Optional. Whether or not to enable Alias IPs in the GKE cluster. If `true`, a VPC-native cluster is created. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters.
     */
    useIpAliases?: boolean | null;
  }
  /**
   * Contains information about a single line from logs.
   */
  export interface Schema$Line {
    /**
     * Text content of the log line.
     */
    content?: string | null;
    /**
     * Number of the line.
     */
    lineNumber?: number | null;
  }
  /**
   * The environments in a project and location.
   */
  export interface Schema$ListEnvironmentsResponse {
    /**
     * The list of environments returned by a ListEnvironmentsRequest.
     */
    environments?: Schema$Environment[];
    /**
     * The page token used to query for the next page if one exists.
     */
    nextPageToken?: string | null;
  }
  /**
   * The ImageVersions in a project and location.
   */
  export interface Schema$ListImageVersionsResponse {
    /**
     * The list of supported ImageVersions in a location.
     */
    imageVersions?: Schema$ImageVersion[];
    /**
     * The page token used to query for the next page if one exists.
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
   * Request to load a snapshot into a Cloud Composer environment.
   */
  export interface Schema$LoadSnapshotRequest {
    /**
     * Whether or not to skip setting Airflow overrides when loading the environment's state.
     */
    skipAirflowOverridesSetting?: boolean | null;
    /**
     * Whether or not to skip setting environment variables when loading the environment's state.
     */
    skipEnvironmentVariablesSetting?: boolean | null;
    /**
     * Whether or not to skip copying Cloud Storage data when loading the environment's state.
     */
    skipGcsDataCopying?: boolean | null;
    /**
     * Whether or not to skip installing Pypi packages when loading the environment's state.
     */
    skipPypiPackagesInstallation?: boolean | null;
    /**
     * A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp".
     */
    snapshotPath?: string | null;
  }
  /**
   * Response to LoadSnapshotRequest.
   */
  export interface Schema$LoadSnapshotResponse {}
  /**
   * The configuration settings for Cloud Composer maintenance window. The following example: ``` { "startTime":"2019-08-01T01:00:00Z" "endTime":"2019-08-01T07:00:00Z" "recurrence":"FREQ=WEEKLY;BYDAY=TU,WE" \} ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday.
   */
  export interface Schema$MaintenanceWindow {
    /**
     * Required. Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to `start_time`.
     */
    endTime?: string | null;
    /**
     * Required. Maintenance window recurrence. Format is a subset of [RFC-5545](https://tools.ietf.org/html/rfc5545) `RRULE`. The only allowed values for `FREQ` field are `FREQ=DAILY` and `FREQ=WEEKLY;BYDAY=...` Example values: `FREQ=WEEKLY;BYDAY=TU,WE`, `FREQ=DAILY`.
     */
    recurrence?: string | null;
    /**
     * Required. Start time of the first recurrence of the maintenance window.
     */
    startTime?: string | null;
  }
  /**
   * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
   */
  export interface Schema$MasterAuthorizedNetworksConfig {
    /**
     * Up to 50 external networks that could access Kubernetes master through HTTPS.
     */
    cidrBlocks?: Schema$CidrBlock[];
    /**
     * Whether or not master authorized networks feature is enabled.
     */
    enabled?: boolean | null;
  }
  /**
   * Configuration options for networking connections in the Composer 2 environment.
   */
  export interface Schema$NetworkingConfig {
    /**
     * Optional. Indicates the user requested specifc connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment.
     */
    connectionType?: string | null;
  }
  /**
   * The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.
   */
  export interface Schema$NodeConfig {
    /**
     * Optional. The disk size in GB used for node VMs. Minimum size is 30GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    diskSizeGb?: number | null;
    /**
     * Optional. Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent
     */
    enableIpMasqAgent?: boolean | null;
    /**
     * Optional. The configuration for controlling how IPs are allocated in the GKE cluster.
     */
    ipAllocationPolicy?: Schema$IPAllocationPolicy;
    /**
     * Optional. The Compute Engine [zone](/compute/docs/regions-zones) in which to deploy the VMs used to run the Apache Airflow software, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId\}/zones/{zoneId\}". This `location` must belong to the enclosing environment's project and location. If both this field and `nodeConfig.machineType` are specified, `nodeConfig.machineType` must belong to this `location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If only one field (`location` or `nodeConfig.machineType`) is specified, the location information from the specified field will be propagated to the unspecified field. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    location?: string | null;
    /**
     * Optional. The Compute Engine [machine type](/compute/docs/machine-types) used for cluster instances, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId\}/zones/{zoneId\}/machineTypes/{machineTypeId\}". The `machineType` must belong to the enclosing environment's project and location. If both this field and `nodeConfig.location` are specified, this `machineType` must belong to the `nodeConfig.location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If exactly one of this field and `nodeConfig.location` is specified, the location information from the specified field will be propagated to the unspecified field. The `machineTypeId` must not be a [shared-core machine type](/compute/docs/machine-types#sharedcore). If this field is unspecified, the `machineTypeId` defaults to "n1-standard-1". This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    machineType?: string | null;
    /**
     * Optional. The Compute Engine network to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId\}/global/networks/{networkId\}". If unspecified, the "default" network ID in the environment's project is used. If a [Custom Subnet Network](/vpc/docs/vpc#vpc_networks_and_subnets) is provided, `nodeConfig.subnetwork` must also be provided. For [Shared VPC](/vpc/docs/shared-vpc) subnetwork requirements, see `nodeConfig.subnetwork`.
     */
    network?: string | null;
    /**
     * Optional. The set of Google API scopes to be made available on all node VMs. If `oauth_scopes` is empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    oauthScopes?: string[] | null;
    /**
     * Optional. The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated.
     */
    serviceAccount?: string | null;
    /**
     * Optional. The Compute Engine subnetwork to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId\}/regions/{regionId\}/subnetworks/{subnetworkId\}" If a subnetwork is provided, `nodeConfig.network` must also be provided, and the subnetwork must belong to the enclosing environment's project and location.
     */
    subnetwork?: string | null;
    /**
     * Optional. The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Cannot be updated.
     */
    tags?: string[] | null;
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
   * Metadata describing an operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. The time the operation was submitted to the server.
     */
    createTime?: string | null;
    /**
     * Output only. The time when the operation terminated, regardless of its success. This field is unset if the operation is still ongoing.
     */
    endTime?: string | null;
    /**
     * Output only. The type of operation being performed.
     */
    operationType?: string | null;
    /**
     * Output only. The resource being operated on, as a [relative resource name]( /apis/design/resource_names#relative_resource_name).
     */
    resource?: string | null;
    /**
     * Output only. The UUID of the resource being operated on.
     */
    resourceUuid?: string | null;
    /**
     * Output only. The current operation state.
     */
    state?: string | null;
  }
  /**
   * Poll Airflow Command request.
   */
  export interface Schema$PollAirflowCommandRequest {
    /**
     * The unique ID of the command execution.
     */
    executionId?: string | null;
    /**
     * Line number from which new logs should be fetched.
     */
    nextLineNumber?: number | null;
    /**
     * The name of the pod where the command is executed.
     */
    pod?: string | null;
    /**
     * The namespace of the pod where the command is executed.
     */
    podNamespace?: string | null;
  }
  /**
   * Response to PollAirflowCommandRequest.
   */
  export interface Schema$PollAirflowCommandResponse {
    /**
     * The result exit status of the command.
     */
    exitInfo?: Schema$ExitInfo;
    /**
     * Output from the command execution. It may not contain the full output and the caller may need to poll for more lines.
     */
    output?: Schema$Line[];
    /**
     * Whether the command execution has finished and there is no more output.
     */
    outputEnd?: boolean | null;
  }
  /**
   * Configuration options for the private GKE cluster in a Cloud Composer environment.
   */
  export interface Schema$PrivateClusterConfig {
    /**
     * Optional. If `true`, access to the public endpoint of the GKE cluster is denied.
     */
    enablePrivateEndpoint?: boolean | null;
    /**
     * Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If left blank, the default value of '172.16.0.0/23' is used.
     */
    masterIpv4CidrBlock?: string | null;
    /**
     * Output only. The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the GKE cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network.
     */
    masterIpv4ReservedRange?: string | null;
  }
  /**
   * The configuration information for configuring a Private IP Cloud Composer environment.
   */
  export interface Schema$PrivateEnvironmentConfig {
    /**
     * Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.
     */
    cloudComposerConnectionSubnetwork?: string | null;
    /**
     * Optional. The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    cloudComposerNetworkIpv4CidrBlock?: string | null;
    /**
     * Output only. The IP range reserved for the tenant project's Cloud Composer network. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    cloudComposerNetworkIpv4ReservedRange?: string | null;
    /**
     * Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from `web_server_ipv4_cidr_block`.
     */
    cloudSqlIpv4CidrBlock?: string | null;
    /**
     * Optional. If `true`, a Private IP Cloud Composer environment is created. If this field is set to true, `IPAllocationPolicy.use_ip_aliases` must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    enablePrivateEnvironment?: boolean | null;
    /**
     * Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for `IPAllocationPolicy.cluster_ipv4_cidr_block` and `IPAllocationPolicy.service_ipv4_cidr_block`.
     */
    enablePrivatelyUsedPublicIps?: boolean | null;
    /**
     * Optional. Configuration for the network connections configuration in the environment.
     */
    networkingConfig?: Schema$NetworkingConfig;
    /**
     * Optional. Configuration for the private GKE cluster for a Private IP Cloud Composer environment.
     */
    privateClusterConfig?: Schema$PrivateClusterConfig;
    /**
     * Optional. The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from `private_cluster_config.master_ipv4_cidr_block` and `cloud_sql_ipv4_cidr_block`. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    webServerIpv4CidrBlock?: string | null;
    /**
     * Output only. The IP range reserved for the tenant project's App Engine VMs. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    webServerIpv4ReservedRange?: string | null;
  }
  /**
   * The Recovery settings of an environment.
   */
  export interface Schema$RecoveryConfig {
    /**
     * Optional. The configuration for scheduled snapshot creation mechanism.
     */
    scheduledSnapshotsConfig?: Schema$ScheduledSnapshotsConfig;
  }
  /**
   * Request to create a snapshot of a Cloud Composer environment.
   */
  export interface Schema$SaveSnapshotRequest {
    /**
     * Location in a Cloud Storage where the snapshot is going to be stored, e.g.: "gs://my-bucket/snapshots".
     */
    snapshotLocation?: string | null;
  }
  /**
   * Response to SaveSnapshotRequest.
   */
  export interface Schema$SaveSnapshotResponse {
    /**
     * The fully-resolved Cloud Storage path of the created snapshot, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp". This field is populated only if the snapshot creation was successful.
     */
    snapshotPath?: string | null;
  }
  /**
   * The configuration for scheduled snapshot creation mechanism.
   */
  export interface Schema$ScheduledSnapshotsConfig {
    /**
     * Optional. Whether scheduled snapshots creation is enabled.
     */
    enabled?: boolean | null;
    /**
     * Optional. The cron expression representing the time when snapshots creation mechanism runs. This field is subject to additional validation around frequency of execution.
     */
    snapshotCreationSchedule?: string | null;
    /**
     * Optional. The Cloud Storage location for storing automatically created snapshots.
     */
    snapshotLocation?: string | null;
    /**
     * Optional. Time zone that sets the context to interpret snapshot_creation_schedule.
     */
    timeZone?: string | null;
  }
  /**
   * Configuration for resources used by Airflow schedulers.
   */
  export interface Schema$SchedulerResource {
    /**
     * Optional. The number of schedulers.
     */
    count?: number | null;
    /**
     * Optional. CPU request and limit for a single Airflow scheduler replica.
     */
    cpu?: number | null;
    /**
     * Optional. Memory (GB) request and limit for a single Airflow scheduler replica.
     */
    memoryGb?: number | null;
    /**
     * Optional. Storage (GB) request and limit for a single Airflow scheduler replica.
     */
    storageGb?: number | null;
  }
  /**
   * Specifies the selection and configuration of software inside the environment.
   */
  export interface Schema$SoftwareConfig {
    /**
     * Optional. Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and must not contain an equals sign ("=") or semicolon (";"). Section and property names must not contain a period ("."). Apache Airflow configuration property names must be written in [snake_case](https://en.wikipedia.org/wiki/Snake_case). Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are [blocked](/composer/docs/concepts/airflow-configurations), and cannot be overridden.
     */
    airflowConfigOverrides?: {[key: string]: string} | null;
    /**
     * Optional. Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. Environment variable names must match the regular expression `a-zA-Z_*`. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression `AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+`), and they cannot match any of the following reserved names: * `AIRFLOW_HOME` * `C_FORCE_ROOT` * `CONTAINER_NAME` * `DAGS_FOLDER` * `GCP_PROJECT` * `GCS_BUCKET` * `GKE_CLUSTER_NAME` * `SQL_DATABASE` * `SQL_INSTANCE` * `SQL_PASSWORD` * `SQL_PROJECT` * `SQL_REGION` * `SQL_USER`
     */
    envVariables?: {[key: string]: string} | null;
    /**
     * The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview).
     */
    imageVersion?: string | null;
    /**
     * Optional. Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name such as "numpy" and values are the lowercase extras and version specifier such as "==1.12.0", "[devel,gcp_api]", or "[devel]\>=1.8.2, <1.9.2". To specify a package without pinning it to a version specifier, use the empty string as the value.
     */
    pypiPackages?: {[key: string]: string} | null;
    /**
     * Optional. The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to '2' or '3'. If not specified, the default is '3'. Cannot be updated. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.
     */
    pythonVersion?: string | null;
    /**
     * Optional. The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.
     */
    schedulerCount?: number | null;
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
   * Stop Airflow Command request.
   */
  export interface Schema$StopAirflowCommandRequest {
    /**
     * The unique ID of the command execution.
     */
    executionId?: string | null;
    /**
     * If true, the execution is terminated forcefully (SIGKILL). If false, the execution is stopped gracefully, giving it time for cleanup.
     */
    force?: boolean | null;
    /**
     * The name of the pod where the command is executed.
     */
    pod?: string | null;
    /**
     * The namespace of the pod where the command is executed.
     */
    podNamespace?: string | null;
  }
  /**
   * Response to StopAirflowCommandRequest.
   */
  export interface Schema$StopAirflowCommandResponse {
    /**
     * Whether the execution is still running.
     */
    isDone?: boolean | null;
    /**
     * Output message from stopping execution request.
     */
    output?: string[] | null;
  }
  /**
   * The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*
   */
  export interface Schema$WebServerConfig {
    /**
     * Optional. Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.
     */
    machineType?: string | null;
  }
  /**
   * Network-level access control policy for the Airflow web server.
   */
  export interface Schema$WebServerNetworkAccessControl {
    /**
     * A collection of allowed IP ranges with descriptions.
     */
    allowedIpRanges?: Schema$AllowedIpRange[];
  }
  /**
   * Configuration for resources used by Airflow web server.
   */
  export interface Schema$WebServerResource {
    /**
     * Optional. CPU request and limit for Airflow web server.
     */
    cpu?: number | null;
    /**
     * Optional. Memory (GB) request and limit for Airflow web server.
     */
    memoryGb?: number | null;
    /**
     * Optional. Storage (GB) request and limit for Airflow web server.
     */
    storageGb?: number | null;
  }
  /**
   * Configuration for resources used by Airflow workers.
   */
  export interface Schema$WorkerResource {
    /**
     * Optional. CPU request and limit for a single Airflow worker replica.
     */
    cpu?: number | null;
    /**
     * Optional. Maximum number of workers for autoscaling.
     */
    maxCount?: number | null;
    /**
     * Optional. Memory (GB) request and limit for a single Airflow worker replica.
     */
    memoryGb?: number | null;
    /**
     * Optional. Minimum number of workers for autoscaling.
     */
    minCount?: number | null;
    /**
     * Optional. Storage (GB) request and limit for a single Airflow worker replica.
     */
    storageGb?: number | null;
  }
  /**
   * The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
   */
  export interface Schema$WorkloadsConfig {
    /**
     * Optional. Resources used by Airflow schedulers.
     */
    scheduler?: Schema$SchedulerResource;
    /**
     * Optional. Resources used by Airflow web server.
     */
    webServer?: Schema$WebServerResource;
    /**
     * Optional. Resources used by Airflow workers.
     */
    worker?: Schema$WorkerResource;
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
    environments: Resource$Projects$Locations$Environments;
    imageVersions: Resource$Projects$Locations$Imageversions;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.environments = new Resource$Projects$Locations$Environments(
        this.context
      );
      this.imageVersions = new Resource$Projects$Locations$Imageversions(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Environments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new environment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Environments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Environments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Environments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Environments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Environments$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Create
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
        {}) as Params$Resource$Projects$Locations$Environments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/environments').replace(
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
     * Triggers database failover (only for highly resilient environments).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    databaseFailover(
      params: Params$Resource$Projects$Locations$Environments$Databasefailover,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    databaseFailover(
      params?: Params$Resource$Projects$Locations$Environments$Databasefailover,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    databaseFailover(
      params: Params$Resource$Projects$Locations$Environments$Databasefailover,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    databaseFailover(
      params: Params$Resource$Projects$Locations$Environments$Databasefailover,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    databaseFailover(
      params: Params$Resource$Projects$Locations$Environments$Databasefailover,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    databaseFailover(callback: BodyResponseCallback<Schema$Operation>): void;
    databaseFailover(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Databasefailover
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
        {}) as Params$Resource$Projects$Locations$Environments$Databasefailover;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Environments$Databasefailover;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+environment}:databaseFailover').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['environment'],
        pathParams: ['environment'],
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
     * Delete an environment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Environments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Environments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Environments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Environments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Environments$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Delete
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
        {}) as Params$Resource$Projects$Locations$Environments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
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
     * Executes Airflow CLI command.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    executeAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Executeairflowcommand,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    executeAirflowCommand(
      params?: Params$Resource$Projects$Locations$Environments$Executeairflowcommand,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExecuteAirflowCommandResponse>;
    executeAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Executeairflowcommand,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    executeAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Executeairflowcommand,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExecuteAirflowCommandResponse>,
      callback: BodyResponseCallback<Schema$ExecuteAirflowCommandResponse>
    ): void;
    executeAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Executeairflowcommand,
      callback: BodyResponseCallback<Schema$ExecuteAirflowCommandResponse>
    ): void;
    executeAirflowCommand(
      callback: BodyResponseCallback<Schema$ExecuteAirflowCommandResponse>
    ): void;
    executeAirflowCommand(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Executeairflowcommand
        | BodyResponseCallback<Schema$ExecuteAirflowCommandResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExecuteAirflowCommandResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExecuteAirflowCommandResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ExecuteAirflowCommandResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Environments$Executeairflowcommand;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Environments$Executeairflowcommand;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+environment}:executeAirflowCommand').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['environment'],
        pathParams: ['environment'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExecuteAirflowCommandResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExecuteAirflowCommandResponse>(
          parameters
        );
      }
    }

    /**
     * Fetches database properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchDatabaseProperties(
      params: Params$Resource$Projects$Locations$Environments$Fetchdatabaseproperties,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchDatabaseProperties(
      params?: Params$Resource$Projects$Locations$Environments$Fetchdatabaseproperties,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchDatabasePropertiesResponse>;
    fetchDatabaseProperties(
      params: Params$Resource$Projects$Locations$Environments$Fetchdatabaseproperties,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchDatabaseProperties(
      params: Params$Resource$Projects$Locations$Environments$Fetchdatabaseproperties,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchDatabasePropertiesResponse>,
      callback: BodyResponseCallback<Schema$FetchDatabasePropertiesResponse>
    ): void;
    fetchDatabaseProperties(
      params: Params$Resource$Projects$Locations$Environments$Fetchdatabaseproperties,
      callback: BodyResponseCallback<Schema$FetchDatabasePropertiesResponse>
    ): void;
    fetchDatabaseProperties(
      callback: BodyResponseCallback<Schema$FetchDatabasePropertiesResponse>
    ): void;
    fetchDatabaseProperties(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Fetchdatabaseproperties
        | BodyResponseCallback<Schema$FetchDatabasePropertiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchDatabasePropertiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchDatabasePropertiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchDatabasePropertiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Environments$Fetchdatabaseproperties;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Environments$Fetchdatabaseproperties;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+environment}:fetchDatabaseProperties'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['environment'],
        pathParams: ['environment'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchDatabasePropertiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchDatabasePropertiesResponse>(
          parameters
        );
      }
    }

    /**
     * Get an existing environment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Environments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Environments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Environment>;
    get(
      params: Params$Resource$Projects$Locations$Environments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Environments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Environment>,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Environments$Get,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Environment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Get
        | BodyResponseCallback<Schema$Environment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Environment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Environment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Environment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Environments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
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
        createAPIRequest<Schema$Environment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Environment>(parameters);
      }
    }

    /**
     * List environments.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Environments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Environments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEnvironmentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Environments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Environments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>,
      callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Environments$List,
      callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$List
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEnvironmentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Environments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/environments').replace(
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
        createAPIRequest<Schema$ListEnvironmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEnvironmentsResponse>(parameters);
      }
    }

    /**
     * Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    loadSnapshot(
      params: Params$Resource$Projects$Locations$Environments$Loadsnapshot,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    loadSnapshot(
      params?: Params$Resource$Projects$Locations$Environments$Loadsnapshot,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    loadSnapshot(
      params: Params$Resource$Projects$Locations$Environments$Loadsnapshot,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    loadSnapshot(
      params: Params$Resource$Projects$Locations$Environments$Loadsnapshot,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    loadSnapshot(
      params: Params$Resource$Projects$Locations$Environments$Loadsnapshot,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    loadSnapshot(callback: BodyResponseCallback<Schema$Operation>): void;
    loadSnapshot(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Loadsnapshot
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
        {}) as Params$Resource$Projects$Locations$Environments$Loadsnapshot;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Environments$Loadsnapshot;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+environment}:loadSnapshot').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['environment'],
        pathParams: ['environment'],
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
     * Update an environment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Environments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Environments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Environments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Environments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Environments$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Patch
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
        {}) as Params$Resource$Projects$Locations$Environments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
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
     * Polls Airflow CLI command execution and fetches logs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    pollAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Pollairflowcommand,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    pollAirflowCommand(
      params?: Params$Resource$Projects$Locations$Environments$Pollairflowcommand,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PollAirflowCommandResponse>;
    pollAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Pollairflowcommand,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pollAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Pollairflowcommand,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PollAirflowCommandResponse>,
      callback: BodyResponseCallback<Schema$PollAirflowCommandResponse>
    ): void;
    pollAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Pollairflowcommand,
      callback: BodyResponseCallback<Schema$PollAirflowCommandResponse>
    ): void;
    pollAirflowCommand(
      callback: BodyResponseCallback<Schema$PollAirflowCommandResponse>
    ): void;
    pollAirflowCommand(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Pollairflowcommand
        | BodyResponseCallback<Schema$PollAirflowCommandResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PollAirflowCommandResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PollAirflowCommandResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PollAirflowCommandResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Environments$Pollairflowcommand;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Environments$Pollairflowcommand;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+environment}:pollAirflowCommand').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['environment'],
        pathParams: ['environment'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PollAirflowCommandResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PollAirflowCommandResponse>(parameters);
      }
    }

    /**
     * Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    saveSnapshot(
      params: Params$Resource$Projects$Locations$Environments$Savesnapshot,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    saveSnapshot(
      params?: Params$Resource$Projects$Locations$Environments$Savesnapshot,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    saveSnapshot(
      params: Params$Resource$Projects$Locations$Environments$Savesnapshot,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    saveSnapshot(
      params: Params$Resource$Projects$Locations$Environments$Savesnapshot,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    saveSnapshot(
      params: Params$Resource$Projects$Locations$Environments$Savesnapshot,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    saveSnapshot(callback: BodyResponseCallback<Schema$Operation>): void;
    saveSnapshot(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Savesnapshot
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
        {}) as Params$Resource$Projects$Locations$Environments$Savesnapshot;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Environments$Savesnapshot;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+environment}:saveSnapshot').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['environment'],
        pathParams: ['environment'],
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
     * Stops Airflow CLI command execution.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    stopAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Stopairflowcommand,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stopAirflowCommand(
      params?: Params$Resource$Projects$Locations$Environments$Stopairflowcommand,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StopAirflowCommandResponse>;
    stopAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Stopairflowcommand,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stopAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Stopairflowcommand,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$StopAirflowCommandResponse>,
      callback: BodyResponseCallback<Schema$StopAirflowCommandResponse>
    ): void;
    stopAirflowCommand(
      params: Params$Resource$Projects$Locations$Environments$Stopairflowcommand,
      callback: BodyResponseCallback<Schema$StopAirflowCommandResponse>
    ): void;
    stopAirflowCommand(
      callback: BodyResponseCallback<Schema$StopAirflowCommandResponse>
    ): void;
    stopAirflowCommand(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Stopairflowcommand
        | BodyResponseCallback<Schema$StopAirflowCommandResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StopAirflowCommandResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StopAirflowCommandResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$StopAirflowCommandResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Environments$Stopairflowcommand;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Environments$Stopairflowcommand;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+environment}:stopAirflowCommand').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['environment'],
        pathParams: ['environment'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StopAirflowCommandResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StopAirflowCommandResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Environments$Create
    extends StandardParameters {
    /**
     * The parent must be of the form "projects/{projectId\}/locations/{locationId\}".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Environment;
  }
  export interface Params$Resource$Projects$Locations$Environments$Databasefailover
    extends StandardParameters {
    /**
     * Target environment: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}"
     */
    environment?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DatabaseFailoverRequest;
  }
  export interface Params$Resource$Projects$Locations$Environments$Delete
    extends StandardParameters {
    /**
     * The environment to delete, in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Environments$Executeairflowcommand
    extends StandardParameters {
    /**
     * The resource name of the environment in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}".
     */
    environment?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecuteAirflowCommandRequest;
  }
  export interface Params$Resource$Projects$Locations$Environments$Fetchdatabaseproperties
    extends StandardParameters {
    /**
     * Required. The resource name of the environment, in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}"
     */
    environment?: string;
  }
  export interface Params$Resource$Projects$Locations$Environments$Get
    extends StandardParameters {
    /**
     * The resource name of the environment to get, in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Environments$List
    extends StandardParameters {
    /**
     * The maximum number of environments to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * List environments in the given project and location, in the form: "projects/{projectId\}/locations/{locationId\}"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Environments$Loadsnapshot
    extends StandardParameters {
    /**
     * The resource name of the target environment in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}"
     */
    environment?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LoadSnapshotRequest;
  }
  export interface Params$Resource$Projects$Locations$Environments$Patch
    extends StandardParameters {
    /**
     * The relative resource name of the environment to update, in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}"
     */
    name?: string;
    /**
     * Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of numpy, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.numpy". The included patch environment would specify the scikit-learn version as follows: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" \} \} \} \} Note that in the above example, any existing PyPI packages other than scikit-learn and numpy will be unaffected. Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" \} \} Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected. It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" \} \} \} \} **Note:** Only the following fields can be updated: * `config.softwareConfig.pypiPackages` * Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package. * `config.softwareConfig.pypiPackages.`packagename * Update the custom PyPI package *packagename*, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask. * `labels` * Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels. * `labels.`labelName * Set the label named *labelName*, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask. * `config.nodeCount` * Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerNetworkAccessControl` * Replace the environment's current `WebServerNetworkAccessControl`. * `config.softwareConfig.airflowConfigOverrides` * Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides. * `config.softwareConfig.airflowConfigOverrides.`section-name * Override the Apache Airflow config property *name* in the section named *section*, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask. * `config.softwareConfig.envVariables` * Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared. * `config.softwareConfig.schedulerCount` * Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. * `config.databaseConfig.machineType` * Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerConfig.machineType` * Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Environment;
  }
  export interface Params$Resource$Projects$Locations$Environments$Pollairflowcommand
    extends StandardParameters {
    /**
     * The resource name of the environment in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}"
     */
    environment?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PollAirflowCommandRequest;
  }
  export interface Params$Resource$Projects$Locations$Environments$Savesnapshot
    extends StandardParameters {
    /**
     * The resource name of the source environment in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}"
     */
    environment?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SaveSnapshotRequest;
  }
  export interface Params$Resource$Projects$Locations$Environments$Stopairflowcommand
    extends StandardParameters {
    /**
     * The resource name of the environment in the form: "projects/{projectId\}/locations/{locationId\}/environments/{environmentId\}".
     */
    environment?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopAirflowCommandRequest;
  }

  export class Resource$Projects$Locations$Imageversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List ImageVersions for provided location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Imageversions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Imageversions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListImageVersionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Imageversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Imageversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListImageVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListImageVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Imageversions$List,
      callback: BodyResponseCallback<Schema$ListImageVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListImageVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Imageversions$List
        | BodyResponseCallback<Schema$ListImageVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListImageVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListImageVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListImageVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Imageversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Imageversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/imageVersions').replace(
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
        createAPIRequest<Schema$ListImageVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListImageVersionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Imageversions$List
    extends StandardParameters {
    /**
     * Whether or not image versions from old releases should be included.
     */
    includePastReleases?: boolean;
    /**
     * The maximum number of image_versions to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * List ImageVersions in the given project and location, in the form: "projects/{projectId\}/locations/{locationId\}"
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

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
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

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
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

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
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
}
