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

export namespace vmmigration_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
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
   * VM Migration API
   *
   * Use the Migrate to Virtual Machines API to programmatically migrate workloads.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const vmmigration = google.vmmigration('v1alpha1');
   * ```
   */
  export class Vmmigration {
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
   * Message describing AWS Credentials using access key id and secret.
   */
  export interface Schema$AccessKeyCredentials {
    /**
     * AWS access key ID.
     */
    accessKeyId?: string | null;
    /**
     * Input only. AWS secret access key.
     */
    secretAccessKey?: string | null;
    /**
     * Input only. AWS session token. Used only when AWS security token service (STS) is responsible for creating the temporary credentials.
     */
    sessionToken?: string | null;
  }
  /**
   * AdaptingOSStep contains specific step details.
   */
  export interface Schema$AdaptingOSStep {}
  /**
   * Request message for 'AddGroupMigration' request.
   */
  export interface Schema$AddGroupMigrationRequest {
    /**
     * The full path name of the MigratingVm to add.
     */
    migratingVm?: string | null;
  }
  /**
   * Describes an appliance version.
   */
  export interface Schema$ApplianceVersion {
    /**
     * Determine whether it's critical to upgrade the appliance to this version.
     */
    critical?: boolean | null;
    /**
     * Link to a page that contains the version release notes.
     */
    releaseNotesUri?: string | null;
    /**
     * A link for downloading the version.
     */
    uri?: string | null;
    /**
     * The appliance version.
     */
    version?: string | null;
  }
  /**
   * AppliedLicense holds the license data returned by adaptation module report.
   */
  export interface Schema$AppliedLicense {
    /**
     * The OS license returned from the adaptation module's report.
     */
    osLicense?: string | null;
    /**
     * The license type that was used in OS adaptation.
     */
    type?: string | null;
  }
  /**
   * Holds informatiom about the available versions for upgrade.
   */
  export interface Schema$AvailableUpdates {
    /**
     * The latest version for in place update. The current appliance can be updated to this version using the API or m4c CLI.
     */
    inPlaceUpdate?: Schema$ApplianceVersion;
    /**
     * The newest deployable version of the appliance. The current appliance can't be updated into this version, and the owner must manually deploy this OVA to a new appliance.
     */
    newDeployableAppliance?: Schema$ApplianceVersion;
  }
  /**
   * The details of an AWS instance disk.
   */
  export interface Schema$AwsDiskDetails {
    /**
     * The ordinal number of the disk.
     */
    diskNumber?: number | null;
    /**
     * Size in GB.
     */
    sizeGb?: string | null;
    /**
     * AWS volume ID.
     */
    volumeId?: string | null;
  }
  /**
   * AwsSecurityGroup describes a security group of an AWS VM.
   */
  export interface Schema$AwsSecurityGroup {
    /**
     * The AWS security group id.
     */
    id?: string | null;
    /**
     * The AWS security group name.
     */
    name?: string | null;
  }
  /**
   * AwsSourceDetails message describes a specific source details for the AWS source type.
   */
  export interface Schema$AwsSourceDetails {
    /**
     * AWS Credentials using access key id and secret.
     */
    accessKeyCreds?: Schema$AccessKeyCredentials;
    /**
     * Immutable. The AWS region that the source VMs will be migrated from.
     */
    awsRegion?: string | null;
    /**
     * Output only. Provides details on the state of the Source in case of an error.
     */
    error?: Schema$Status;
    /**
     * AWS security group names to limit the scope of the source inventory.
     */
    inventorySecurityGroupNames?: string[] | null;
    /**
     * AWS resource tags to limit the scope of the source inventory.
     */
    inventoryTagList?: Schema$Tag[];
    /**
     * User specified tags to add to every M2VM generated resource in AWS. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m2vm`.
     */
    migrationResourcesUserTags?: {[key: string]: string} | null;
    /**
     * Output only. The source's public IP. All communication initiated by this source will originate from this IP.
     */
    publicIp?: string | null;
    /**
     * Output only. State of the source as determined by the health check.
     */
    state?: string | null;
  }
  /**
   * Represent the source AWS VM details.
   */
  export interface Schema$AwsSourceVmDetails {
    /**
     * The total size of the disks being migrated in bytes.
     */
    committedStorageBytes?: string | null;
    /**
     * The disks attached to the source VM.
     */
    disks?: Schema$AwsDiskDetails[];
    /**
     * The firmware type of the source VM.
     */
    firmware?: string | null;
  }
  /**
   * AwsVmDetails describes a VM in AWS.
   */
  export interface Schema$AwsVmDetails {
    /**
     * The CPU architecture.
     */
    architecture?: string | null;
    /**
     * The VM Boot Option.
     */
    bootOption?: string | null;
    /**
     * The total size of the storage allocated to the VM in MB.
     */
    committedStorageMb?: string | null;
    /**
     * The number of cpus the VM has.
     */
    cpuCount?: number | null;
    /**
     * The number of disks the VM has.
     */
    diskCount?: number | null;
    /**
     * The display name of the VM. Note that this value is not necessarily unique.
     */
    displayName?: string | null;
    /**
     * The instance type of the VM.
     */
    instanceType?: string | null;
    /**
     * The memory size of the VM in MB.
     */
    memoryMb?: number | null;
    /**
     * The VM's OS.
     */
    osDescription?: string | null;
    /**
     * Output only. The power state of the VM at the moment list was taken.
     */
    powerState?: string | null;
    /**
     * The security groups the VM belongs to.
     */
    securityGroups?: Schema$AwsSecurityGroup[];
    /**
     * The descriptive name of the AWS's source this VM is connected to.
     */
    sourceDescription?: string | null;
    /**
     * The id of the AWS's source this VM is connected to.
     */
    sourceId?: string | null;
    /**
     * The tags of the VM.
     */
    tags?: {[key: string]: string} | null;
    /**
     * The virtualization type.
     */
    virtualizationType?: string | null;
    /**
     * The VM ID in AWS.
     */
    vmId?: string | null;
    /**
     * The VPC ID the VM belongs to.
     */
    vpcId?: string | null;
    /**
     * The AWS zone of the VM.
     */
    zone?: string | null;
  }
  /**
   * AWSVmsDetails describes VMs in AWS.
   */
  export interface Schema$AwsVmsDetails {
    /**
     * The details of the AWS VMs.
     */
    details?: Schema$AwsVmDetails[];
  }
  /**
   * Request message for 'CancelCloneJob' request.
   */
  export interface Schema$CancelCloneJobRequest {}
  /**
   * Request message for 'CancelCutoverJob' request.
   */
  export interface Schema$CancelCutoverJobRequest {}
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
   */
  export interface Schema$CloneJob {
    /**
     * Output only. Details of the target VM in Compute Engine.
     */
    computeEngineTargetDetails?: Schema$ComputeEngineTargetDetails;
    /**
     * Output only. Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_details instead.
     */
    computeEngineVmDetails?: Schema$TargetVMDetails;
    /**
     * Output only. The time the clone job was created (as an API call, not when it was actually created in the target).
     */
    createTime?: string | null;
    /**
     * Output only. The time the clone job was ended.
     */
    endTime?: string | null;
    /**
     * Output only. Provides details for the errors that led to the Clone Job's state.
     */
    error?: Schema$Status;
    /**
     * Output only. The name of the clone.
     */
    name?: string | null;
    /**
     * Output only. State of the clone job.
     */
    state?: string | null;
    /**
     * Output only. The time the state was last updated.
     */
    stateTime?: string | null;
    /**
     * Output only. The clone steps list representing its progress.
     */
    steps?: Schema$CloneStep[];
    /**
     * Output only. Details of the VM to create as the target of this clone job. Deprecated: Use compute_engine_target_details instead.
     */
    targetDetails?: Schema$TargetVMDetails;
  }
  /**
   * CloneStep holds information about the clone step progress.
   */
  export interface Schema$CloneStep {
    /**
     * Adapting OS step.
     */
    adaptingOs?: Schema$AdaptingOSStep;
    /**
     * The time the step has ended.
     */
    endTime?: string | null;
    /**
     * Instantiating migrated VM step.
     */
    instantiatingMigratedVm?: Schema$InstantiatingMigratedVMStep;
    /**
     * Preparing VM disks step.
     */
    preparingVmDisks?: Schema$PreparingVMDisksStep;
    /**
     * The time the step has started.
     */
    startTime?: string | null;
  }
  /**
   * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
   */
  export interface Schema$ComputeEngineTargetDefaults {
    /**
     * Additional licenses to assign to the VM.
     */
    additionalLicenses?: string[] | null;
    /**
     * Output only. The OS license returned from the adaptation module report.
     */
    appliedLicense?: Schema$AppliedLicense;
    /**
     * Output only. The VM Boot Option, as set in the source vm.
     */
    bootOption?: string | null;
    /**
     * Compute instance scheduling information (if empty default is used).
     */
    computeScheduling?: Schema$ComputeScheduling;
    /**
     * The disk type to use in the VM.
     */
    diskType?: string | null;
    /**
     * The hostname to assign to the VM.
     */
    hostname?: string | null;
    /**
     * A map of labels to associate with the VM.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The license type to use in OS adaptation.
     */
    licenseType?: string | null;
    /**
     * The machine type to create the VM with.
     */
    machineType?: string | null;
    /**
     * The machine type series to create the VM with.
     */
    machineTypeSeries?: string | null;
    /**
     * The metadata key/value pairs to assign to the VM.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * List of NICs connected to this VM.
     */
    networkInterfaces?: Schema$NetworkInterface[];
    /**
     * A map of network tags to associate with the VM.
     */
    networkTags?: string[] | null;
    /**
     * Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.
     */
    secureBoot?: boolean | null;
    /**
     * The service account to associate the VM with.
     */
    serviceAccount?: string | null;
    /**
     * The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.
     */
    targetProject?: string | null;
    /**
     * The name of the VM to create.
     */
    vmName?: string | null;
    /**
     * The zone in which to create the VM.
     */
    zone?: string | null;
  }
  /**
   * ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
   */
  export interface Schema$ComputeEngineTargetDetails {
    /**
     * Additional licenses to assign to the VM.
     */
    additionalLicenses?: string[] | null;
    /**
     * The OS license returned from the adaptation module report.
     */
    appliedLicense?: Schema$AppliedLicense;
    /**
     * The VM Boot Option, as set in the source vm.
     */
    bootOption?: string | null;
    /**
     * Compute instance scheduling information (if empty default is used).
     */
    computeScheduling?: Schema$ComputeScheduling;
    /**
     * The disk type to use in the VM.
     */
    diskType?: string | null;
    /**
     * The hostname to assign to the VM.
     */
    hostname?: string | null;
    /**
     * A map of labels to associate with the VM.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The license type to use in OS adaptation.
     */
    licenseType?: string | null;
    /**
     * The machine type to create the VM with.
     */
    machineType?: string | null;
    /**
     * The machine type series to create the VM with.
     */
    machineTypeSeries?: string | null;
    /**
     * The metadata key/value pairs to assign to the VM.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * List of NICs connected to this VM.
     */
    networkInterfaces?: Schema$NetworkInterface[];
    /**
     * A map of network tags to associate with the VM.
     */
    networkTags?: string[] | null;
    /**
     * The Google Cloud target project ID or project name.
     */
    project?: string | null;
    /**
     * Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.
     */
    secureBoot?: boolean | null;
    /**
     * The service account to associate the VM with.
     */
    serviceAccount?: string | null;
    /**
     * The name of the VM to create.
     */
    vmName?: string | null;
    /**
     * The zone in which to create the VM.
     */
    zone?: string | null;
  }
  /**
   * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
   */
  export interface Schema$ComputeScheduling {
    automaticRestart?: boolean | null;
    /**
     * The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. Ignored if no node_affinites are configured.
     */
    minNodeCpus?: number | null;
    /**
     * A set of node affinity and anti-affinity configurations for sole tenant nodes.
     */
    nodeAffinities?: Schema$SchedulingNodeAffinity[];
    /**
     * How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance.
     */
    onHostMaintenance?: string | null;
    /**
     * Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user). This configuration is identical to `automaticRestart` field in Compute Engine create instance under scheduling. It was changed to an enum (instead of a boolean) to match the default value in Compute Engine which is automatic restart.
     */
    restartType?: string | null;
  }
  /**
   * CutoverForecast holds information about future CutoverJobs of a MigratingVm.
   */
  export interface Schema$CutoverForecast {
    /**
     * Output only. Estimation of the CutoverJob duration.
     */
    estimatedCutoverJobDuration?: string | null;
  }
  /**
   * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
   */
  export interface Schema$CutoverJob {
    /**
     * Output only. Details of the target VM in Compute Engine.
     */
    computeEngineTargetDetails?: Schema$ComputeEngineTargetDetails;
    /**
     * Output only. Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_details instead.
     */
    computeEngineVmDetails?: Schema$TargetVMDetails;
    /**
     * Output only. The time the cutover job was created (as an API call, not when it was actually created in the target).
     */
    createTime?: string | null;
    /**
     * Output only. The time the cutover job had finished.
     */
    endTime?: string | null;
    /**
     * Output only. Provides details for the errors that led to the Cutover Job's state.
     */
    error?: Schema$Status;
    /**
     * Output only. The name of the cutover job.
     */
    name?: string | null;
    /**
     * Output only. The current progress in percentage of the cutover job.
     */
    progress?: number | null;
    /**
     * Output only. The current progress in percentage of the cutover job.
     */
    progressPercent?: number | null;
    /**
     * Output only. State of the cutover job.
     */
    state?: string | null;
    /**
     * Output only. A message providing possible extra details about the current state.
     */
    stateMessage?: string | null;
    /**
     * Output only. The time the state was last updated.
     */
    stateTime?: string | null;
    /**
     * Output only. The cutover steps list representing its progress.
     */
    steps?: Schema$CutoverStep[];
    /**
     * Output only. Details of the VM to create as the target of this cutover job. Deprecated: Use compute_engine_target_details instead.
     */
    targetDetails?: Schema$TargetVMDetails;
  }
  /**
   * CutoverStep holds information about the cutover step progress.
   */
  export interface Schema$CutoverStep {
    /**
     * The time the step has ended.
     */
    endTime?: string | null;
    /**
     * Final sync step.
     */
    finalSync?: Schema$ReplicationCycle;
    /**
     * Instantiating migrated VM step.
     */
    instantiatingMigratedVm?: Schema$InstantiatingMigratedVMStep;
    /**
     * Preparing VM disks step.
     */
    preparingVmDisks?: Schema$PreparingVMDisksStep;
    /**
     * A replication cycle prior cutover step.
     */
    previousReplicationCycle?: Schema$ReplicationCycle;
    /**
     * Shutting down VM step.
     */
    shuttingDownSourceVm?: Schema$ShuttingDownSourceVMStep;
    /**
     * The time the step has started.
     */
    startTime?: string | null;
  }
  /**
   * CycleStep holds information about a step progress.
   */
  export interface Schema$CycleStep {
    /**
     * The time the cycle step has ended.
     */
    endTime?: string | null;
    /**
     * Initializing replication step.
     */
    initializingReplication?: Schema$InitializingReplicationStep;
    /**
     * Post processing step.
     */
    postProcessing?: Schema$PostProcessingStep;
    /**
     * Replicating step.
     */
    replicating?: Schema$ReplicatingStep;
    /**
     * The time the cycle step has started.
     */
    startTime?: string | null;
  }
  /**
   * DatacenterConnector message describes a connector between the Source and Google Cloud, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to Google Cloud and support vm migration data transfer.
   */
  export interface Schema$DatacenterConnector {
    /**
     * Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance.
     */
    applianceInfrastructureVersion?: string | null;
    /**
     * Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance.
     */
    applianceSoftwareVersion?: string | null;
    /**
     * Output only. The available versions for updating this appliance.
     */
    availableVersions?: Schema$AvailableUpdates;
    /**
     * Output only. The communication channel between the datacenter connector and Google Cloud.
     */
    bucket?: string | null;
    /**
     * Output only. The time the connector was created (as an API call, not when it was actually installed).
     */
    createTime?: string | null;
    /**
     * Output only. Provides details on the state of the Datacenter Connector in case of an error.
     */
    error?: Schema$Status;
    /**
     * Output only. The connector's name.
     */
    name?: string | null;
    /**
     * Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified.
     */
    registrationId?: string | null;
    /**
     * The service account to use in the connector when communicating with the cloud.
     */
    serviceAccount?: string | null;
    /**
     * Output only. State of the DatacenterConnector, as determined by the health checks.
     */
    state?: string | null;
    /**
     * Output only. The time the state was last set.
     */
    stateTime?: string | null;
    /**
     * Output only. The last time the connector was updated with an API call.
     */
    updateTime?: string | null;
    /**
     * Output only. The status of the current / last upgradeAppliance operation.
     */
    upgradeStatus?: Schema$UpgradeStatus;
    /**
     * The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified.
     */
    version?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Response message for fetchInventory.
   */
  export interface Schema$FetchInventoryResponse {
    /**
     * The description of the VMs in a Source of type AWS.
     */
    awsVms?: Schema$AwsVmsDetails;
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. The timestamp when the source was last queried (if the result is from the cache).
     */
    updateTime?: string | null;
    /**
     * The description of the VMs in a Source of type Vmware.
     */
    vmwareVms?: Schema$VmwareVmsDetails;
  }
  /**
   * Request message for 'FinalizeMigration' request.
   */
  export interface Schema$FinalizeMigrationRequest {}
  /**
   * Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
   */
  export interface Schema$Group {
    /**
     * Output only. The create time timestamp.
     */
    createTime?: string | null;
    /**
     * User-provided description of the group.
     */
    description?: string | null;
    /**
     * Display name is a user defined name for this group which can be updated.
     */
    displayName?: string | null;
    /**
     * Output only. The Group name.
     */
    name?: string | null;
    /**
     * Output only. The update time timestamp.
     */
    updateTime?: string | null;
  }
  /**
   * InitializingReplicationStep contains specific step details.
   */
  export interface Schema$InitializingReplicationStep {}
  /**
   * InstantiatingMigratedVMStep contains specific step details.
   */
  export interface Schema$InstantiatingMigratedVMStep {}
  /**
   * Describes a URL link.
   */
  export interface Schema$Link {
    /**
     * Describes what the link offers.
     */
    description?: string | null;
    /**
     * The URL of the link.
     */
    url?: string | null;
  }
  /**
   * Response message for 'ListCloneJobs' request.
   */
  export interface Schema$ListCloneJobsResponse {
    /**
     * Output only. The list of clone jobs response.
     */
    cloneJobs?: Schema$CloneJob[];
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for 'ListCutoverJobs' request.
   */
  export interface Schema$ListCutoverJobsResponse {
    /**
     * Output only. The list of cutover jobs response.
     */
    cutoverJobs?: Schema$CutoverJob[];
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for 'ListDatacenterConnectors' request.
   */
  export interface Schema$ListDatacenterConnectorsResponse {
    /**
     * Output only. The list of sources response.
     */
    datacenterConnectors?: Schema$DatacenterConnector[];
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for 'ListGroups' request.
   */
  export interface Schema$ListGroupsResponse {
    /**
     * Output only. The list of groups response.
     */
    groups?: Schema$Group[];
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. Locations that could not be reached.
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
   * Response message for 'ListMigratingVms' request.
   */
  export interface Schema$ListMigratingVmsResponse {
    /**
     * Output only. The list of Migrating VMs response.
     */
    migratingVms?: Schema$MigratingVm[];
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. Locations that could not be reached.
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
   * Response message for 'ListReplicationCycles' request.
   */
  export interface Schema$ListReplicationCyclesResponse {
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. The list of replication cycles response.
     */
    replicationCycles?: Schema$ReplicationCycle[];
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for 'ListSources' request.
   */
  export interface Schema$ListSourcesResponse {
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. The list of sources response.
     */
    sources?: Schema$Source[];
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for 'ListTargetProjects' call.
   */
  export interface Schema$ListTargetProjectsResponse {
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. The list of target response.
     */
    targetProjects?: Schema$TargetProject[];
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for 'ListUtilizationReports' request.
   */
  export interface Schema$ListUtilizationReportsResponse {
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * Output only. The list of reports.
     */
    utilizationReports?: Schema$UtilizationReport[];
  }
  /**
   * Provides a localized error message that is safe to return to the user which can be attached to an RPC error.
   */
  export interface Schema$LocalizedMessage {
    /**
     * The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: "en-US", "fr-CH", "es-MX"
     */
    locale?: string | null;
    /**
     * The localized error message in the above locale.
     */
    message?: string | null;
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
   * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
   */
  export interface Schema$MigratingVm {
    /**
     * Output only. Details of the VM from an AWS source.
     */
    awsSourceVmDetails?: Schema$AwsSourceVmDetails;
    /**
     * Details of the target VM in Compute Engine.
     */
    computeEngineTargetDefaults?: Schema$ComputeEngineTargetDefaults;
    /**
     * Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_defaults instead.
     */
    computeEngineVmDefaults?: Schema$TargetVMDetails;
    /**
     * Output only. The time the migrating VM was created (this refers to this resource and not to the time it was installed in the source).
     */
    createTime?: string | null;
    /**
     * Output only. Details of the current running replication cycle.
     */
    currentSyncInfo?: Schema$ReplicationCycle;
    /**
     * Output only. Provides details of future CutoverJobs of a MigratingVm. Set to empty when cutover forecast is unavailable.
     */
    cutoverForecast?: Schema$CutoverForecast;
    /**
     * The description attached to the migrating VM by the user.
     */
    description?: string | null;
    /**
     * The display name attached to the MigratingVm by the user.
     */
    displayName?: string | null;
    /**
     * Output only. Provides details on the state of the Migrating VM in case of an error in replication.
     */
    error?: Schema$Status;
    /**
     * Output only. The group this migrating vm is included in, if any. The group is represented by the full path of the appropriate Group resource.
     */
    group?: string | null;
    /**
     * The labels of the migrating VM.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Details of the last replication cycle. This will be updated whenever a replication cycle is finished and is not to be confused with last_sync which is only updated on successful replication cycles.
     */
    lastReplicationCycle?: Schema$ReplicationCycle;
    /**
     * Output only. The most updated snapshot created time in the source that finished replication.
     */
    lastSync?: Schema$ReplicationSync;
    /**
     * Output only. The identifier of the MigratingVm.
     */
    name?: string | null;
    /**
     * The replication schedule policy.
     */
    policy?: Schema$SchedulePolicy;
    /**
     * Output only. The recent clone jobs performed on the migrating VM. This field holds the vm's last completed clone job and the vm's running clone job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.
     */
    recentCloneJobs?: Schema$CloneJob[];
    /**
     * Output only. The recent cutover jobs performed on the migrating VM. This field holds the vm's last completed cutover job and the vm's running cutover job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.
     */
    recentCutoverJobs?: Schema$CutoverJob[];
    /**
     * The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-.
     */
    sourceVmId?: string | null;
    /**
     * Output only. State of the MigratingVm.
     */
    state?: string | null;
    /**
     * Output only. The last time the migrating VM state was updated.
     */
    stateTime?: string | null;
    /**
     * The default configuration of the target VM that will be created in Google Cloud as a result of the migration. Deprecated: Use compute_engine_target_defaults instead.
     */
    targetDefaults?: Schema$TargetVMDetails;
    /**
     * Output only. The last time the migrating VM resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Represents migration resource error information that can be used with google.rpc.Status message. MigrationError is used to present the user with error information in migration operations.
   */
  export interface Schema$MigrationError {
    /**
     * Output only. Suggested action for solving the error.
     */
    actionItem?: Schema$LocalizedMessage;
    /**
     * Output only. The error code.
     */
    code?: string | null;
    /**
     * Output only. The localized error message.
     */
    errorMessage?: Schema$LocalizedMessage;
    /**
     * Output only. The time the error occurred.
     */
    errorTime?: string | null;
    /**
     * Output only. URL(s) pointing to additional information on handling the current error.
     */
    helpLinks?: Schema$Link[];
  }
  /**
   * Represents migration resource warning information that can be used with google.rpc.Status message. MigrationWarning is used to present the user with warning information in migration operations.
   */
  export interface Schema$MigrationWarning {
    /**
     * Suggested action for solving the warning.
     */
    actionItem?: Schema$LocalizedMessage;
    /**
     * The warning code.
     */
    code?: string | null;
    /**
     * URL(s) pointing to additional information on handling the current warning.
     */
    helpLinks?: Schema$Link[];
    /**
     * The localized warning message.
     */
    warningMessage?: Schema$LocalizedMessage;
    /**
     * The time the warning occurred.
     */
    warningTime?: string | null;
  }
  /**
   * NetworkInterface represents a NIC of a VM.
   */
  export interface Schema$NetworkInterface {
    /**
     * The external IP to define in the NIC.
     */
    externalIp?: string | null;
    /**
     * The internal IP to define in the NIC. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path.
     */
    internalIp?: string | null;
    /**
     * The network to connect the NIC to.
     */
    network?: string | null;
    /**
     * The subnetwork to connect the NIC to.
     */
    subnetwork?: string | null;
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
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * Request message for 'PauseMigration' request.
   */
  export interface Schema$PauseMigrationRequest {}
  /**
   * PostProcessingStep contains specific step details.
   */
  export interface Schema$PostProcessingStep {}
  /**
   * PreparingVMDisksStep contains specific step details.
   */
  export interface Schema$PreparingVMDisksStep {}
  /**
   * Request message for 'RemoveMigration' request.
   */
  export interface Schema$RemoveGroupMigrationRequest {
    /**
     * The MigratingVm to remove.
     */
    migratingVm?: string | null;
  }
  /**
   * ReplicatingStep contains specific step details.
   */
  export interface Schema$ReplicatingStep {
    /**
     * The source disks replication rate for the last 30 minutes in bytes per second.
     */
    lastThirtyMinutesAverageBytesPerSecond?: string | null;
    /**
     * The source disks replication rate for the last 2 minutes in bytes per second.
     */
    lastTwoMinutesAverageBytesPerSecond?: string | null;
    /**
     * Replicated bytes in the step.
     */
    replicatedBytes?: string | null;
    /**
     * Total bytes to be handled in the step.
     */
    totalBytes?: string | null;
  }
  /**
   * ReplicationCycle contains information about the current replication cycle status.
   */
  export interface Schema$ReplicationCycle {
    /**
     * The cycle's ordinal number.
     */
    cycleNumber?: number | null;
    /**
     * The time the replication cycle has ended.
     */
    endTime?: string | null;
    /**
     * Provides details on the state of the cycle in case of an error.
     */
    error?: Schema$Status;
    /**
     * The identifier of the ReplicationCycle.
     */
    name?: string | null;
    /**
     * The current progress in percentage of this cycle.
     */
    progress?: number | null;
    /**
     * The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately.
     */
    progressPercent?: number | null;
    /**
     * The time the replication cycle has started.
     */
    startTime?: string | null;
    /**
     * State of the ReplicationCycle.
     */
    state?: string | null;
    /**
     * The cycle's steps list representing its progress.
     */
    steps?: Schema$CycleStep[];
    /**
     * The accumulated duration the replication cycle was paused.
     */
    totalPauseDuration?: string | null;
    /**
     * Output only. Warnings that occurred during the cycle.
     */
    warnings?: Schema$MigrationWarning[];
  }
  /**
   * ReplicationSync contain information about the last replica sync to the cloud.
   */
  export interface Schema$ReplicationSync {
    /**
     * The most updated snapshot created time in the source that finished replication.
     */
    lastSyncTime?: string | null;
  }
  /**
   * Request message for 'ResumeMigration' request.
   */
  export interface Schema$ResumeMigrationRequest {}
  /**
   * A policy for scheduling replications.
   */
  export interface Schema$SchedulePolicy {
    /**
     * The idle duration between replication stages.
     */
    idleDuration?: string | null;
    /**
     * A flag to indicate whether to skip OS adaptation during the replication sync. OS adaptation is a process where the VM's operating system undergoes changes and adaptations to fully function on Compute Engine.
     */
    skipOsAdaptation?: boolean | null;
  }
  /**
   * Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling
   */
  export interface Schema$SchedulingNodeAffinity {
    /**
     * The label key of Node resource to reference.
     */
    key?: string | null;
    /**
     * The operator to use for the node resources specified in the `values` parameter.
     */
    operator?: string | null;
    /**
     * Corresponds to the label values of Node resource.
     */
    values?: string[] | null;
  }
  /**
   * ShuttingDownSourceVMStep contains specific step details.
   */
  export interface Schema$ShuttingDownSourceVMStep {}
  /**
   * Source message describes a specific vm migration Source resource. It contains the source environment information.
   */
  export interface Schema$Source {
    /**
     * AWS type source details.
     */
    aws?: Schema$AwsSourceDetails;
    /**
     * Output only. The create time timestamp.
     */
    createTime?: string | null;
    /**
     * User-provided description of the source.
     */
    description?: string | null;
    /**
     * Output only. Provides details on the state of the Source in case of an error.
     */
    error?: Schema$Status;
    /**
     * The labels of the source.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The Source name.
     */
    name?: string | null;
    /**
     * Output only. The update time timestamp.
     */
    updateTime?: string | null;
    /**
     * Vmware type source details.
     */
    vmware?: Schema$VmwareSourceDetails;
  }
  /**
   * Request message for 'StartMigrationRequest' request.
   */
  export interface Schema$StartMigrationRequest {}
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
   * Tag is an AWS tag representation.
   */
  export interface Schema$Tag {
    /**
     * Key of tag.
     */
    key?: string | null;
    /**
     * Value of tag.
     */
    value?: string | null;
  }
  /**
   * TargetProject message represents a target Compute Engine project for a migration or a clone.
   */
  export interface Schema$TargetProject {
    /**
     * Output only. The time this target project resource was created (not related to when the Compute Engine project it points to was created).
     */
    createTime?: string | null;
    /**
     * The target project's description.
     */
    description?: string | null;
    /**
     * Output only. The name of the target project.
     */
    name?: string | null;
    /**
     * The target project ID (number) or project name.
     */
    project?: string | null;
    /**
     * Output only. The last time the target project resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
   */
  export interface Schema$TargetVMDetails {
    /**
     * Output only. The OS license returned from the adaptation module report.
     */
    appliedLicense?: Schema$AppliedLicense;
    /**
     * Output only. The VM Boot Option, as set in the source vm.
     */
    bootOption?: string | null;
    /**
     * Compute instance scheduling information (if empty default is used).
     */
    computeScheduling?: Schema$ComputeScheduling;
    /**
     * The disk type to use in the VM.
     */
    diskType?: string | null;
    /**
     * The external IP to define in the VM.
     */
    externalIp?: string | null;
    /**
     * The internal IP to define in the VM. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path.
     */
    internalIp?: string | null;
    /**
     * A map of labels to associate with the VM.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The license type to use in OS adaptation.
     */
    licenseType?: string | null;
    /**
     * The machine type to create the VM with.
     */
    machineType?: string | null;
    /**
     * The machine type series to create the VM with.
     */
    machineTypeSeries?: string | null;
    /**
     * The metadata key/value pairs to assign to the VM.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of the VM to create.
     */
    name?: string | null;
    /**
     * The network to connect the VM to.
     */
    network?: string | null;
    /**
     * List of NICs connected to this VM.
     */
    networkInterfaces?: Schema$NetworkInterface[];
    /**
     * A map of network tags to associate with the VM.
     */
    networkTags?: string[] | null;
    /**
     * Output only. The project in which to create the VM.
     */
    project?: string | null;
    /**
     * Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.
     */
    secureBoot?: boolean | null;
    /**
     * The service account to associate the VM with.
     */
    serviceAccount?: string | null;
    /**
     * The subnetwork to connect the VM to.
     */
    subnetwork?: string | null;
    /**
     * The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.
     */
    targetProject?: string | null;
    /**
     * The zone in which to create the VM.
     */
    zone?: string | null;
  }
  /**
   * Request message for 'UpgradeAppliance' request.
   */
  export interface Schema$UpgradeApplianceRequest {
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * UpgradeStatus contains information about upgradeAppliance operation.
   */
  export interface Schema$UpgradeStatus {
    /**
     * Provides details on the state of the upgrade operation in case of an error.
     */
    error?: Schema$Status;
    /**
     * The version from which we upgraded.
     */
    previousVersion?: string | null;
    /**
     * The time the operation was started.
     */
    startTime?: string | null;
    /**
     * The state of the upgradeAppliance operation.
     */
    state?: string | null;
    /**
     * The version to upgrade to.
     */
    version?: string | null;
  }
  /**
   * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
   */
  export interface Schema$UtilizationReport {
    /**
     * Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed).
     */
    createTime?: string | null;
    /**
     * The report display name, as assigned by the user.
     */
    displayName?: string | null;
    /**
     * Output only. Provides details on the state of the report in case of an error.
     */
    error?: Schema$Status;
    /**
     * Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the "frame_end_time" value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14.
     */
    frameEndTime?: string | null;
    /**
     * Output only. The report unique name.
     */
    name?: string | null;
    /**
     * Output only. Current state of the report.
     */
    state?: string | null;
    /**
     * Output only. The time the state was last set.
     */
    stateTime?: string | null;
    /**
     * Time frame of the report.
     */
    timeFrame?: string | null;
    /**
     * Output only. Total number of VMs included in the report.
     */
    vmCount?: number | null;
    /**
     * List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored.
     */
    vms?: Schema$VmUtilizationInfo[];
    /**
     * Output only. Total number of VMs included in the report.
     */
    vmsCount?: number | null;
  }
  /**
   * Utilization information of a single VM.
   */
  export interface Schema$VmUtilizationInfo {
    /**
     * Utilization metrics for this VM.
     */
    utilization?: Schema$VmUtilizationMetrics;
    /**
     * The VM's ID in the source.
     */
    vmId?: string | null;
    /**
     * The description of the VM in a Source of type Vmware.
     */
    vmwareVmDetails?: Schema$VmwareVmDetails;
  }
  /**
   * Utilization metrics values for a single VM.
   */
  export interface Schema$VmUtilizationMetrics {
    /**
     * Average CPU usage, percent.
     */
    cpuAverage?: number | null;
    /**
     * Average CPU usage, percent.
     */
    cpuAveragePercent?: number | null;
    /**
     * Max CPU usage, percent.
     */
    cpuMax?: number | null;
    /**
     * Max CPU usage, percent.
     */
    cpuMaxPercent?: number | null;
    /**
     * Average disk IO rate, in kilobytes per second.
     */
    diskIoRateAverage?: string | null;
    /**
     * Average disk IO rate, in kilobytes per second.
     */
    diskIoRateAverageKbps?: string | null;
    /**
     * Max disk IO rate, in kilobytes per second.
     */
    diskIoRateMax?: string | null;
    /**
     * Max disk IO rate, in kilobytes per second.
     */
    diskIoRateMaxKbps?: string | null;
    /**
     * Average memory usage, percent.
     */
    memoryAverage?: number | null;
    /**
     * Average memory usage, percent.
     */
    memoryAveragePercent?: number | null;
    /**
     * Max memory usage, percent.
     */
    memoryMax?: number | null;
    /**
     * Max memory usage, percent.
     */
    memoryMaxPercent?: number | null;
    /**
     * Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second.
     */
    networkThroughputAverage?: string | null;
    /**
     * Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second.
     */
    networkThroughputAverageKbps?: string | null;
    /**
     * Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second.
     */
    networkThroughputMax?: string | null;
    /**
     * Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second.
     */
    networkThroughputMaxKbps?: string | null;
  }
  /**
   * VmwareSourceDetails message describes a specific source details for the vmware source type.
   */
  export interface Schema$VmwareSourceDetails {
    /**
     * Input only. The credentials password. This is write only and can not be read in a GET operation.
     */
    password?: string | null;
    /**
     * The hostname of the vcenter.
     */
    resolvedVcenterHost?: string | null;
    /**
     * The thumbprint representing the certificate for the vcenter.
     */
    thumbprint?: string | null;
    /**
     * The credentials username.
     */
    username?: string | null;
    /**
     * The ip address of the vcenter this Source represents.
     */
    vcenterIp?: string | null;
  }
  /**
   * VmwareVmDetails describes a VM in vCenter.
   */
  export interface Schema$VmwareVmDetails {
    /**
     * Output only. The VM Boot Option.
     */
    bootOption?: string | null;
    /**
     * The total size of the storage allocated to the VM in MB.
     */
    committedStorage?: string | null;
    /**
     * The total size of the storage allocated to the VM in MB.
     */
    committedStorageMb?: string | null;
    /**
     * The number of cpus in the VM.
     */
    cpuCount?: number | null;
    /**
     * The descriptive name of the vCenter's datacenter this VM is contained in.
     */
    datacenterDescription?: string | null;
    /**
     * The id of the vCenter's datacenter this VM is contained in.
     */
    datacenterId?: string | null;
    /**
     * The number of disks the VM has.
     */
    diskCount?: number | null;
    /**
     * The display name of the VM. Note that this is not necessarily unique.
     */
    displayName?: string | null;
    /**
     * The VM's OS. See for example https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html for types of strings this might hold.
     */
    guestDescription?: string | null;
    /**
     * The size of the memory of the VM in MB.
     */
    memoryMb?: number | null;
    /**
     * The power state of the VM at the moment list was taken.
     */
    powerState?: string | null;
    /**
     * The unique identifier of the VM in vCenter.
     */
    uuid?: string | null;
    /**
     * The VM's id in the source (note that this is not the MigratingVm's id). This is the moref id of the VM.
     */
    vmId?: string | null;
  }
  /**
   * VmwareVmsDetails describes VMs in vCenter.
   */
  export interface Schema$VmwareVmsDetails {
    /**
     * The details of the vmware VMs.
     */
    details?: Schema$VmwareVmDetails[];
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
    groups: Resource$Projects$Locations$Groups;
    operations: Resource$Projects$Locations$Operations;
    sources: Resource$Projects$Locations$Sources;
    targetProjects: Resource$Projects$Locations$Targetprojects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.groups = new Resource$Projects$Locations$Groups(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.sources = new Resource$Projects$Locations$Sources(this.context);
      this.targetProjects = new Resource$Projects$Locations$Targetprojects(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
     *   //   "name": "my_name"
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

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.list({
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
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

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/locations').replace(
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

  export class Resource$Projects$Locations$Groups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a MigratingVm to a Group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.groups.addGroupMigration({
     *     // Required. The full path name of the Group to add to.
     *     group: 'projects/my-project/locations/my-location/groups/my-group',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "migratingVm": "my_migratingVm"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    addGroupMigration(
      params: Params$Resource$Projects$Locations$Groups$Addgroupmigration,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addGroupMigration(
      params?: Params$Resource$Projects$Locations$Groups$Addgroupmigration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    addGroupMigration(
      params: Params$Resource$Projects$Locations$Groups$Addgroupmigration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addGroupMigration(
      params: Params$Resource$Projects$Locations$Groups$Addgroupmigration,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addGroupMigration(
      params: Params$Resource$Projects$Locations$Groups$Addgroupmigration,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addGroupMigration(callback: BodyResponseCallback<Schema$Operation>): void;
    addGroupMigration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Addgroupmigration
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
        {}) as Params$Resource$Projects$Locations$Groups$Addgroupmigration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Groups$Addgroupmigration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+group}:addGroupMigration').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['group'],
        pathParams: ['group'],
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
     * Creates a new Group in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.groups.create({
     *     // Required. The group identifier.
     *     groupId: 'placeholder-value',
     *     // Required. The Group's parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    create(
      params: Params$Resource$Projects$Locations$Groups$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Groups$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Groups$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Groups$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Groups$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Create
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
        {}) as Params$Resource$Projects$Locations$Groups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/groups').replace(
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
     * Deletes a single Group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.groups.delete({
     *     // Required. The Group name.
     *     name: 'projects/my-project/locations/my-location/groups/my-group',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Groups$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Groups$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Groups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Groups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Groups$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Delete
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
        {}) as Params$Resource$Projects$Locations$Groups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets details of a single Group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.groups.get({
     *     // Required. The group name.
     *     name: 'projects/my-project/locations/my-location/groups/my-group',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Groups$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Groups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Group>;
    get(
      params: Params$Resource$Projects$Locations$Groups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Groups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Group>,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Groups$Get,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(callback: BodyResponseCallback<Schema$Group>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Get
        | BodyResponseCallback<Schema$Group>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Group>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Group>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Group> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Group>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }

    /**
     * Lists Groups in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.groups.list({
     *     // Optional. The filter request.
     *     filter: 'placeholder-value',
     *     // Optional. the order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 500 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Required. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of groups.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "groups": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Groups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Groups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGroupsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Groups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Groups$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Groups$List,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$List
        | BodyResponseCallback<Schema$ListGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGroupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/groups').replace(
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
        createAPIRequest<Schema$ListGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGroupsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single Group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.groups.patch({
     *     // Output only. The Group name.
     *     name: 'projects/my-project/locations/my-location/groups/my-group',
     *     // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the Group resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    patch(
      params: Params$Resource$Projects$Locations$Groups$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Groups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Groups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Groups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Groups$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Patch
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
        {}) as Params$Resource$Projects$Locations$Groups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Removes a MigratingVm from a Group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.groups.removeGroupMigration({
     *     // Required. The name of the Group.
     *     group: 'projects/my-project/locations/my-location/groups/my-group',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "migratingVm": "my_migratingVm"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    removeGroupMigration(
      params: Params$Resource$Projects$Locations$Groups$Removegroupmigration,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeGroupMigration(
      params?: Params$Resource$Projects$Locations$Groups$Removegroupmigration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    removeGroupMigration(
      params: Params$Resource$Projects$Locations$Groups$Removegroupmigration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeGroupMigration(
      params: Params$Resource$Projects$Locations$Groups$Removegroupmigration,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeGroupMigration(
      params: Params$Resource$Projects$Locations$Groups$Removegroupmigration,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeGroupMigration(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeGroupMigration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Removegroupmigration
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
        {}) as Params$Resource$Projects$Locations$Groups$Removegroupmigration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Groups$Removegroupmigration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+group}:removeGroupMigration').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['group'],
        pathParams: ['group'],
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

  export interface Params$Resource$Projects$Locations$Groups$Addgroupmigration
    extends StandardParameters {
    /**
     * Required. The full path name of the Group to add to.
     */
    group?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddGroupMigrationRequest;
  }
  export interface Params$Resource$Projects$Locations$Groups$Create
    extends StandardParameters {
    /**
     * Required. The group identifier.
     */
    groupId?: string;
    /**
     * Required. The Group's parent.
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Projects$Locations$Groups$Delete
    extends StandardParameters {
    /**
     * Required. The Group name.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Groups$Get
    extends StandardParameters {
    /**
     * Required. The group name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Groups$List
    extends StandardParameters {
    /**
     * Optional. The filter request.
     */
    filter?: string;
    /**
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 500 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of groups.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Groups$Patch
    extends StandardParameters {
    /**
     * Output only. The Group name.
     */
    name?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the Group resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Projects$Locations$Groups$Removegroupmigration
    extends StandardParameters {
    /**
     * Required. The name of the Group.
     */
    group?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveGroupMigrationRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:cancel').replace(
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/operations').replace(
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

  export class Resource$Projects$Locations$Sources {
    context: APIRequestContext;
    datacenterConnectors: Resource$Projects$Locations$Sources$Datacenterconnectors;
    migratingVms: Resource$Projects$Locations$Sources$Migratingvms;
    utilizationReports: Resource$Projects$Locations$Sources$Utilizationreports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datacenterConnectors =
        new Resource$Projects$Locations$Sources$Datacenterconnectors(
          this.context
        );
      this.migratingVms = new Resource$Projects$Locations$Sources$Migratingvms(
        this.context
      );
      this.utilizationReports =
        new Resource$Projects$Locations$Sources$Utilizationreports(
          this.context
        );
    }

    /**
     * Creates a new Source in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.create({
     *     // Required. The Source's parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The source identifier.
     *     sourceId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aws": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "error": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime",
     *       //   "vmware": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    create(
      params: Params$Resource$Projects$Locations$Sources$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Sources$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Sources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Create
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
        {}) as Params$Resource$Projects$Locations$Sources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/sources').replace(
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
     * Deletes a single Source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.delete({
     *     // Required. The Source name.
     *     name: 'projects/my-project/locations/my-location/sources/my-source',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Sources$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Sources$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Delete
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
        {}) as Params$Resource$Projects$Locations$Sources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.fetchInventory({
     *     // If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower.
     *     forceRefresh: 'placeholder-value',
     *     // The maximum number of VMs to return. The service may return fewer than this value. For AWS source: If unspecified, at most 500 VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. For VMWare source: If unspecified, all VMs will be returned. There is no limit for maximum value.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `FetchInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchInventory` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the Source.
     *     source: 'projects/my-project/locations/my-location/sources/my-source',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "awsVms": {},
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "updateTime": "my_updateTime",
     *   //   "vmwareVms": {}
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
    fetchInventory(
      params: Params$Resource$Projects$Locations$Sources$Fetchinventory,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchInventory(
      params?: Params$Resource$Projects$Locations$Sources$Fetchinventory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchInventoryResponse>;
    fetchInventory(
      params: Params$Resource$Projects$Locations$Sources$Fetchinventory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchInventory(
      params: Params$Resource$Projects$Locations$Sources$Fetchinventory,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchInventoryResponse>,
      callback: BodyResponseCallback<Schema$FetchInventoryResponse>
    ): void;
    fetchInventory(
      params: Params$Resource$Projects$Locations$Sources$Fetchinventory,
      callback: BodyResponseCallback<Schema$FetchInventoryResponse>
    ): void;
    fetchInventory(
      callback: BodyResponseCallback<Schema$FetchInventoryResponse>
    ): void;
    fetchInventory(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Fetchinventory
        | BodyResponseCallback<Schema$FetchInventoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchInventoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchInventoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchInventoryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Fetchinventory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Fetchinventory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+source}:fetchInventory').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['source'],
        pathParams: ['source'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchInventoryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchInventoryResponse>(parameters);
      }
    }

    /**
     * Gets details of a single Source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.get({
     *     // Required. The Source name.
     *     name: 'projects/my-project/locations/my-location/sources/my-source',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aws": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "error": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime",
     *   //   "vmware": {}
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
    get(
      params: Params$Resource$Projects$Locations$Sources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Sources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Source>;
    get(
      params: Params$Resource$Projects$Locations$Sources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Get,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(callback: BodyResponseCallback<Schema$Source>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Get
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Source> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Source>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * Lists Sources in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.list({
     *     // Optional. The filter request.
     *     filter: 'placeholder-value',
     *     // Optional. the order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of sources to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Required. A page token, received from a previous `ListSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSources` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of sources.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sources": [],
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Sources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Sources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSourcesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Sources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$List,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$List
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/sources').replace(
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
        createAPIRequest<Schema$ListSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSourcesResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single Source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.patch({
     *     // Output only. The Source name.
     *     name: 'projects/my-project/locations/my-location/sources/my-source',
     *     // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the Source resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aws": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "error": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime",
     *       //   "vmware": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    patch(
      params: Params$Resource$Projects$Locations$Sources$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Sources$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Sources$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Sources$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Sources$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Patch
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
        {}) as Params$Resource$Projects$Locations$Sources$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Sources$Create
    extends StandardParameters {
    /**
     * Required. The Source's parent.
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The source identifier.
     */
    sourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Source;
  }
  export interface Params$Resource$Projects$Locations$Sources$Delete
    extends StandardParameters {
    /**
     * Required. The Source name.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Fetchinventory
    extends StandardParameters {
    /**
     * If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower.
     */
    forceRefresh?: boolean;
    /**
     * The maximum number of VMs to return. The service may return fewer than this value. For AWS source: If unspecified, at most 500 VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. For VMWare source: If unspecified, all VMs will be returned. There is no limit for maximum value.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `FetchInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchInventory` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the Source.
     */
    source?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Get
    extends StandardParameters {
    /**
     * Required. The Source name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$List
    extends StandardParameters {
    /**
     * Optional. The filter request.
     */
    filter?: string;
    /**
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of sources to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSources` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of sources.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Patch
    extends StandardParameters {
    /**
     * Output only. The Source name.
     */
    name?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the Source resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Source;
  }

  export class Resource$Projects$Locations$Sources$Datacenterconnectors {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new DatacenterConnector in a given Source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.datacenterConnectors.create({
     *       // Required. The datacenterConnector identifier.
     *       datacenterConnectorId: 'placeholder-value',
     *       // Required. The DatacenterConnector's parent. Required. The Source in where the new DatacenterConnector will be created. For example: `projects/my-project/locations/us-central1/sources/my-source`
     *       parent: 'projects/my-project/locations/my-location/sources/my-source',
     *       // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "applianceInfrastructureVersion": "my_applianceInfrastructureVersion",
     *         //   "applianceSoftwareVersion": "my_applianceSoftwareVersion",
     *         //   "availableVersions": {},
     *         //   "bucket": "my_bucket",
     *         //   "createTime": "my_createTime",
     *         //   "error": {},
     *         //   "name": "my_name",
     *         //   "registrationId": "my_registrationId",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "state": "my_state",
     *         //   "stateTime": "my_stateTime",
     *         //   "updateTime": "my_updateTime",
     *         //   "upgradeStatus": {},
     *         //   "version": "my_version"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    create(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Create
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
        {}) as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/datacenterConnectors').replace(
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
     * Deletes a single DatacenterConnector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.datacenterConnectors.delete({
     *       // Required. The DatacenterConnector name.
     *       name: 'projects/my-project/locations/my-location/sources/my-source/datacenterConnectors/my-datacenterConnector',
     *       // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Delete
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
        {}) as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets details of a single DatacenterConnector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.datacenterConnectors.get({
     *       // Required. The name of the DatacenterConnector.
     *       name: 'projects/my-project/locations/my-location/sources/my-source/datacenterConnectors/my-datacenterConnector',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "applianceInfrastructureVersion": "my_applianceInfrastructureVersion",
     *   //   "applianceSoftwareVersion": "my_applianceSoftwareVersion",
     *   //   "availableVersions": {},
     *   //   "bucket": "my_bucket",
     *   //   "createTime": "my_createTime",
     *   //   "error": {},
     *   //   "name": "my_name",
     *   //   "registrationId": "my_registrationId",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "state": "my_state",
     *   //   "stateTime": "my_stateTime",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgradeStatus": {},
     *   //   "version": "my_version"
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
    get(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatacenterConnector>;
    get(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DatacenterConnector>,
      callback: BodyResponseCallback<Schema$DatacenterConnector>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Get,
      callback: BodyResponseCallback<Schema$DatacenterConnector>
    ): void;
    get(callback: BodyResponseCallback<Schema$DatacenterConnector>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Get
        | BodyResponseCallback<Schema$DatacenterConnector>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatacenterConnector>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatacenterConnector>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatacenterConnector>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DatacenterConnector>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatacenterConnector>(parameters);
      }
    }

    /**
     * Lists DatacenterConnectors in a given Source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.datacenterConnectors.list({
     *       // Optional. The filter request.
     *       filter: 'placeholder-value',
     *       // Optional. the order by fields for the result.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Required. A page token, received from a previous `ListDatacenterConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatacenterConnectors` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent, which owns this collection of connectors.
     *       parent: 'projects/my-project/locations/my-location/sources/my-source',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "datacenterConnectors": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDatacenterConnectorsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDatacenterConnectorsResponse>,
      callback: BodyResponseCallback<Schema$ListDatacenterConnectorsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$List,
      callback: BodyResponseCallback<Schema$ListDatacenterConnectorsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDatacenterConnectorsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Datacenterconnectors$List
        | BodyResponseCallback<Schema$ListDatacenterConnectorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDatacenterConnectorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDatacenterConnectorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDatacenterConnectorsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/datacenterConnectors').replace(
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
        createAPIRequest<Schema$ListDatacenterConnectorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDatacenterConnectorsResponse>(
          parameters
        );
      }
    }

    /**
     * Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.datacenterConnectors.upgradeAppliance(
     *       {
     *         // Required. The DatacenterConnector name.
     *         datacenterConnector:
     *           'projects/my-project/locations/my-location/sources/my-source/datacenterConnectors/my-datacenterConnector',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "requestId": "my_requestId"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    upgradeAppliance(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Upgradeappliance,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upgradeAppliance(
      params?: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Upgradeappliance,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    upgradeAppliance(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Upgradeappliance,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upgradeAppliance(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Upgradeappliance,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    upgradeAppliance(
      params: Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Upgradeappliance,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    upgradeAppliance(callback: BodyResponseCallback<Schema$Operation>): void;
    upgradeAppliance(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Upgradeappliance
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
        {}) as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Upgradeappliance;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Upgradeappliance;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha1/{+datacenterConnector}:upgradeAppliance'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['datacenterConnector'],
        pathParams: ['datacenterConnector'],
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

  export interface Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Create
    extends StandardParameters {
    /**
     * Required. The datacenterConnector identifier.
     */
    datacenterConnectorId?: string;
    /**
     * Required. The DatacenterConnector's parent. Required. The Source in where the new DatacenterConnector will be created. For example: `projects/my-project/locations/us-central1/sources/my-source`
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DatacenterConnector;
  }
  export interface Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Delete
    extends StandardParameters {
    /**
     * Required. The DatacenterConnector name.
     */
    name?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Get
    extends StandardParameters {
    /**
     * Required. The name of the DatacenterConnector.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Datacenterconnectors$List
    extends StandardParameters {
    /**
     * Optional. The filter request.
     */
    filter?: string;
    /**
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListDatacenterConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatacenterConnectors` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of connectors.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Datacenterconnectors$Upgradeappliance
    extends StandardParameters {
    /**
     * Required. The DatacenterConnector name.
     */
    datacenterConnector?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpgradeApplianceRequest;
  }

  export class Resource$Projects$Locations$Sources$Migratingvms {
    context: APIRequestContext;
    cloneJobs: Resource$Projects$Locations$Sources$Migratingvms$Clonejobs;
    cutoverJobs: Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs;
    replicationCycles: Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.cloneJobs =
        new Resource$Projects$Locations$Sources$Migratingvms$Clonejobs(
          this.context
        );
      this.cutoverJobs =
        new Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs(
          this.context
        );
      this.replicationCycles =
        new Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles(
          this.context
        );
    }

    /**
     * Creates a new MigratingVm in a given Source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.migratingVms.create({
     *     // Required. The migratingVm identifier.
     *     migratingVmId: 'placeholder-value',
     *     // Required. The MigratingVm's parent.
     *     parent: 'projects/my-project/locations/my-location/sources/my-source',
     *     // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "awsSourceVmDetails": {},
     *       //   "computeEngineTargetDefaults": {},
     *       //   "computeEngineVmDefaults": {},
     *       //   "createTime": "my_createTime",
     *       //   "currentSyncInfo": {},
     *       //   "cutoverForecast": {},
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "error": {},
     *       //   "group": "my_group",
     *       //   "labels": {},
     *       //   "lastReplicationCycle": {},
     *       //   "lastSync": {},
     *       //   "name": "my_name",
     *       //   "policy": {},
     *       //   "recentCloneJobs": [],
     *       //   "recentCutoverJobs": [],
     *       //   "sourceVmId": "my_sourceVmId",
     *       //   "state": "my_state",
     *       //   "stateTime": "my_stateTime",
     *       //   "targetDefaults": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Create
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/migratingVms').replace(
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
     * Deletes a single MigratingVm.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.migratingVms.delete({
     *     // Required. The name of the MigratingVm.
     *     name: 'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Delete
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.finalizeMigration(
     *       {
     *         // Required. The name of the MigratingVm.
     *         migratingVm:
     *           'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    finalizeMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Finalizemigration,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    finalizeMigration(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Finalizemigration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    finalizeMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Finalizemigration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    finalizeMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Finalizemigration,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    finalizeMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Finalizemigration,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    finalizeMigration(callback: BodyResponseCallback<Schema$Operation>): void;
    finalizeMigration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Finalizemigration
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Finalizemigration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Finalizemigration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha1/{+migratingVm}:finalizeMigration'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['migratingVm'],
        pathParams: ['migratingVm'],
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
     * Gets details of a single MigratingVm.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.migratingVms.get({
     *     // Required. The name of the MigratingVm.
     *     name: 'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *     // Optional. The level of details of the migrating VM.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "awsSourceVmDetails": {},
     *   //   "computeEngineTargetDefaults": {},
     *   //   "computeEngineVmDefaults": {},
     *   //   "createTime": "my_createTime",
     *   //   "currentSyncInfo": {},
     *   //   "cutoverForecast": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "error": {},
     *   //   "group": "my_group",
     *   //   "labels": {},
     *   //   "lastReplicationCycle": {},
     *   //   "lastSync": {},
     *   //   "name": "my_name",
     *   //   "policy": {},
     *   //   "recentCloneJobs": [],
     *   //   "recentCutoverJobs": [],
     *   //   "sourceVmId": "my_sourceVmId",
     *   //   "state": "my_state",
     *   //   "stateTime": "my_stateTime",
     *   //   "targetDefaults": {},
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MigratingVm>;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MigratingVm>,
      callback: BodyResponseCallback<Schema$MigratingVm>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Get,
      callback: BodyResponseCallback<Schema$MigratingVm>
    ): void;
    get(callback: BodyResponseCallback<Schema$MigratingVm>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Get
        | BodyResponseCallback<Schema$MigratingVm>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MigratingVm>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MigratingVm>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MigratingVm> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$MigratingVm>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MigratingVm>(parameters);
      }
    }

    /**
     * Lists MigratingVms in a given Source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.migratingVms.list({
     *     // Optional. The filter request.
     *     filter: 'placeholder-value',
     *     // Optional. the order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of migrating VMs to return. The service may return fewer than this value. If unspecified, at most 500 migrating VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Required. A page token, received from a previous `ListMigratingVms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigratingVms` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of MigratingVms.
     *     parent: 'projects/my-project/locations/my-location/sources/my-source',
     *     // Optional. The level of details of each migrating VM.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "migratingVms": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMigratingVmsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMigratingVmsResponse>,
      callback: BodyResponseCallback<Schema$ListMigratingVmsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$List,
      callback: BodyResponseCallback<Schema$ListMigratingVmsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMigratingVmsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$List
        | BodyResponseCallback<Schema$ListMigratingVmsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMigratingVmsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMigratingVmsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMigratingVmsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/migratingVms').replace(
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
        createAPIRequest<Schema$ListMigratingVmsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMigratingVmsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single MigratingVm.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.sources.migratingVms.patch({
     *     // Output only. The identifier of the MigratingVm.
     *     name: 'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *     // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the MigratingVm resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "awsSourceVmDetails": {},
     *       //   "computeEngineTargetDefaults": {},
     *       //   "computeEngineVmDefaults": {},
     *       //   "createTime": "my_createTime",
     *       //   "currentSyncInfo": {},
     *       //   "cutoverForecast": {},
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "error": {},
     *       //   "group": "my_group",
     *       //   "labels": {},
     *       //   "lastReplicationCycle": {},
     *       //   "lastSync": {},
     *       //   "name": "my_name",
     *       //   "policy": {},
     *       //   "recentCloneJobs": [],
     *       //   "recentCutoverJobs": [],
     *       //   "sourceVmId": "my_sourceVmId",
     *       //   "state": "my_state",
     *       //   "stateTime": "my_stateTime",
     *       //   "targetDefaults": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    patch(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Patch
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.pauseMigration({
     *       // Required. The name of the MigratingVm.
     *       migratingVm:
     *         'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    pauseMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Pausemigration,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    pauseMigration(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Pausemigration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    pauseMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Pausemigration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pauseMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Pausemigration,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    pauseMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Pausemigration,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    pauseMigration(callback: BodyResponseCallback<Schema$Operation>): void;
    pauseMigration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Pausemigration
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Pausemigration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Pausemigration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+migratingVm}:pauseMigration').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['migratingVm'],
        pathParams: ['migratingVm'],
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
     * Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.resumeMigration({
     *       // Required. The name of the MigratingVm.
     *       migratingVm:
     *         'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    resumeMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Resumemigration,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resumeMigration(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Resumemigration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    resumeMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Resumemigration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resumeMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Resumemigration,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resumeMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Resumemigration,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resumeMigration(callback: BodyResponseCallback<Schema$Operation>): void;
    resumeMigration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Resumemigration
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Resumemigration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Resumemigration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+migratingVm}:resumeMigration').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['migratingVm'],
        pathParams: ['migratingVm'],
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
     * Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.startMigration({
     *       // Required. The name of the MigratingVm.
     *       migratingVm:
     *         'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    startMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Startmigration,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    startMigration(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Startmigration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    startMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Startmigration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Startmigration,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startMigration(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Startmigration,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startMigration(callback: BodyResponseCallback<Schema$Operation>): void;
    startMigration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Startmigration
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Startmigration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Startmigration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+migratingVm}:startMigration').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['migratingVm'],
        pathParams: ['migratingVm'],
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

  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Create
    extends StandardParameters {
    /**
     * Required. The migratingVm identifier.
     */
    migratingVmId?: string;
    /**
     * Required. The MigratingVm's parent.
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MigratingVm;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Delete
    extends StandardParameters {
    /**
     * Required. The name of the MigratingVm.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Finalizemigration
    extends StandardParameters {
    /**
     * Required. The name of the MigratingVm.
     */
    migratingVm?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FinalizeMigrationRequest;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Get
    extends StandardParameters {
    /**
     * Required. The name of the MigratingVm.
     */
    name?: string;
    /**
     * Optional. The level of details of the migrating VM.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$List
    extends StandardParameters {
    /**
     * Optional. The filter request.
     */
    filter?: string;
    /**
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of migrating VMs to return. The service may return fewer than this value. If unspecified, at most 500 migrating VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListMigratingVms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigratingVms` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of MigratingVms.
     */
    parent?: string;
    /**
     * Optional. The level of details of each migrating VM.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Patch
    extends StandardParameters {
    /**
     * Output only. The identifier of the MigratingVm.
     */
    name?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the MigratingVm resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MigratingVm;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Pausemigration
    extends StandardParameters {
    /**
     * Required. The name of the MigratingVm.
     */
    migratingVm?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseMigrationRequest;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Resumemigration
    extends StandardParameters {
    /**
     * Required. The name of the MigratingVm.
     */
    migratingVm?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeMigrationRequest;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Startmigration
    extends StandardParameters {
    /**
     * Required. The name of the MigratingVm.
     */
    migratingVm?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartMigrationRequest;
  }

  export class Resource$Projects$Locations$Sources$Migratingvms$Clonejobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Initiates the cancellation of a running clone job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.cloneJobs.cancel({
     *       // Required. The clone job id
     *       name: 'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm/cloneJobs/my-cloneJob',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    cancel(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    cancel(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Cancel,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Operation>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Cancel
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:cancel').replace(
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
     * Initiates a Clone of a specific migrating VM.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.cloneJobs.create({
     *       // Required. The clone job identifier.
     *       cloneJobId: 'placeholder-value',
     *       // Required. The Clone's parent.
     *       parent:
     *         'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *       // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "computeEngineTargetDetails": {},
     *         //   "computeEngineVmDetails": {},
     *         //   "createTime": "my_createTime",
     *         //   "endTime": "my_endTime",
     *         //   "error": {},
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "stateTime": "my_stateTime",
     *         //   "steps": [],
     *         //   "targetDetails": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Create
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/cloneJobs').replace(
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
     * Gets details of a single CloneJob.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.cloneJobs.get({
     *       // Required. The name of the CloneJob.
     *       name: 'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm/cloneJobs/my-cloneJob',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "computeEngineTargetDetails": {},
     *   //   "computeEngineVmDetails": {},
     *   //   "createTime": "my_createTime",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "stateTime": "my_stateTime",
     *   //   "steps": [],
     *   //   "targetDetails": {}
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
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CloneJob>;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CloneJob>,
      callback: BodyResponseCallback<Schema$CloneJob>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Get,
      callback: BodyResponseCallback<Schema$CloneJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$CloneJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Get
        | BodyResponseCallback<Schema$CloneJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CloneJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CloneJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CloneJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CloneJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CloneJob>(parameters);
      }
    }

    /**
     * Lists CloneJobs of a given migrating VM.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.cloneJobs.list({
     *       // Optional. The filter request.
     *       filter: 'placeholder-value',
     *       // Optional. the order by fields for the result.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of clone jobs to return. The service may return fewer than this value. If unspecified, at most 500 clone jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Required. A page token, received from a previous `ListCloneJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCloneJobs` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent, which owns this collection of source VMs.
     *       parent:
     *         'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloneJobs": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCloneJobsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCloneJobsResponse>,
      callback: BodyResponseCallback<Schema$ListCloneJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$List,
      callback: BodyResponseCallback<Schema$ListCloneJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCloneJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$List
        | BodyResponseCallback<Schema$ListCloneJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCloneJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCloneJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCloneJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/cloneJobs').replace(
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
        createAPIRequest<Schema$ListCloneJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCloneJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Cancel
    extends StandardParameters {
    /**
     * Required. The clone job id
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelCloneJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Create
    extends StandardParameters {
    /**
     * Required. The clone job identifier.
     */
    cloneJobId?: string;
    /**
     * Required. The Clone's parent.
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloneJob;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$Get
    extends StandardParameters {
    /**
     * Required. The name of the CloneJob.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Clonejobs$List
    extends StandardParameters {
    /**
     * Optional. The filter request.
     */
    filter?: string;
    /**
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of clone jobs to return. The service may return fewer than this value. If unspecified, at most 500 clone jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListCloneJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCloneJobs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of source VMs.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Initiates the cancellation of a running cutover job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.cutoverJobs.cancel(
     *       {
     *         // Required. The cutover job id
     *         name: 'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm/cutoverJobs/my-cutoverJob',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    cancel(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    cancel(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Cancel,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Operation>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Cancel
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:cancel').replace(
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
     * Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.cutoverJobs.create(
     *       {
     *         // Required. The cutover job identifier.
     *         cutoverJobId: 'placeholder-value',
     *         // Required. The Cutover's parent.
     *         parent:
     *           'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *         // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *         requestId: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "computeEngineTargetDetails": {},
     *           //   "computeEngineVmDetails": {},
     *           //   "createTime": "my_createTime",
     *           //   "endTime": "my_endTime",
     *           //   "error": {},
     *           //   "name": "my_name",
     *           //   "progress": 0,
     *           //   "progressPercent": 0,
     *           //   "state": "my_state",
     *           //   "stateMessage": "my_stateMessage",
     *           //   "stateTime": "my_stateTime",
     *           //   "steps": [],
     *           //   "targetDetails": {}
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Create
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
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/cutoverJobs').replace(
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
     * Gets details of a single CutoverJob.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.cutoverJobs.get({
     *       // Required. The name of the CutoverJob.
     *       name: 'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm/cutoverJobs/my-cutoverJob',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "computeEngineTargetDetails": {},
     *   //   "computeEngineVmDetails": {},
     *   //   "createTime": "my_createTime",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "name": "my_name",
     *   //   "progress": 0,
     *   //   "progressPercent": 0,
     *   //   "state": "my_state",
     *   //   "stateMessage": "my_stateMessage",
     *   //   "stateTime": "my_stateTime",
     *   //   "steps": [],
     *   //   "targetDetails": {}
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
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CutoverJob>;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CutoverJob>,
      callback: BodyResponseCallback<Schema$CutoverJob>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Get,
      callback: BodyResponseCallback<Schema$CutoverJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$CutoverJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Get
        | BodyResponseCallback<Schema$CutoverJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CutoverJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CutoverJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CutoverJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CutoverJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CutoverJob>(parameters);
      }
    }

    /**
     * Lists CutoverJobs of a given migrating VM.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.cutoverJobs.list({
     *       // Optional. The filter request.
     *       filter: 'placeholder-value',
     *       // Optional. the order by fields for the result.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of cutover jobs to return. The service may return fewer than this value. If unspecified, at most 500 cutover jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Required. A page token, received from a previous `ListCutoverJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCutoverJobs` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent, which owns this collection of migrating VMs.
     *       parent:
     *         'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cutoverJobs": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCutoverJobsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCutoverJobsResponse>,
      callback: BodyResponseCallback<Schema$ListCutoverJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$List,
      callback: BodyResponseCallback<Schema$ListCutoverJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCutoverJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$List
        | BodyResponseCallback<Schema$ListCutoverJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCutoverJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCutoverJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCutoverJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/cutoverJobs').replace(
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
        createAPIRequest<Schema$ListCutoverJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCutoverJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Cancel
    extends StandardParameters {
    /**
     * Required. The cutover job id
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelCutoverJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Create
    extends StandardParameters {
    /**
     * Required. The cutover job identifier.
     */
    cutoverJobId?: string;
    /**
     * Required. The Cutover's parent.
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CutoverJob;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$Get
    extends StandardParameters {
    /**
     * Required. The name of the CutoverJob.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Cutoverjobs$List
    extends StandardParameters {
    /**
     * Optional. The filter request.
     */
    filter?: string;
    /**
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of cutover jobs to return. The service may return fewer than this value. If unspecified, at most 500 cutover jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListCutoverJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCutoverJobs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of migrating VMs.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of a single ReplicationCycle.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.replicationCycles.get(
     *       {
     *         // Required. The name of the ReplicationCycle.
     *         name: 'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm/replicationCycles/my-replicationCycle',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cycleNumber": 0,
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "name": "my_name",
     *   //   "progress": 0,
     *   //   "progressPercent": 0,
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "steps": [],
     *   //   "totalPauseDuration": "my_totalPauseDuration",
     *   //   "warnings": []
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
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReplicationCycle>;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReplicationCycle>,
      callback: BodyResponseCallback<Schema$ReplicationCycle>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$Get,
      callback: BodyResponseCallback<Schema$ReplicationCycle>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReplicationCycle>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$Get
        | BodyResponseCallback<Schema$ReplicationCycle>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReplicationCycle>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReplicationCycle>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReplicationCycle> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ReplicationCycle>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReplicationCycle>(parameters);
      }
    }

    /**
     * Lists ReplicationCycles in a given MigratingVM.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.migratingVms.replicationCycles.list(
     *       {
     *         // Optional. The filter request.
     *         filter: 'placeholder-value',
     *         // Optional. the order by fields for the result.
     *         orderBy: 'placeholder-value',
     *         // Optional. The maximum number of replication cycles to return. The service may return fewer than this value. If unspecified, at most 100 migrating VMs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *         pageSize: 'placeholder-value',
     *         // Required. A page token, received from a previous `ListReplicationCycles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReplicationCycles` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent, which owns this collection of ReplicationCycles.
     *         parent:
     *           'projects/my-project/locations/my-location/sources/my-source/migratingVms/my-migratingVm',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "replicationCycles": [],
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReplicationCyclesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReplicationCyclesResponse>,
      callback: BodyResponseCallback<Schema$ListReplicationCyclesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$List,
      callback: BodyResponseCallback<Schema$ListReplicationCyclesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListReplicationCyclesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$List
        | BodyResponseCallback<Schema$ListReplicationCyclesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReplicationCyclesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReplicationCyclesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReplicationCyclesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/replicationCycles').replace(
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
        createAPIRequest<Schema$ListReplicationCyclesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReplicationCyclesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$Get
    extends StandardParameters {
    /**
     * Required. The name of the ReplicationCycle.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Migratingvms$Replicationcycles$List
    extends StandardParameters {
    /**
     * Optional. The filter request.
     */
    filter?: string;
    /**
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of replication cycles to return. The service may return fewer than this value. If unspecified, at most 100 migrating VMs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListReplicationCycles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReplicationCycles` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of ReplicationCycles.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Sources$Utilizationreports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new UtilizationReport.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.utilizationReports.create({
     *       // Required. The Utilization Report's parent.
     *       parent: 'projects/my-project/locations/my-location/sources/my-source',
     *       // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Required. The ID to use for the report, which will become the final component of the reports's resource name. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen.
     *       utilizationReportId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "displayName": "my_displayName",
     *         //   "error": {},
     *         //   "frameEndTime": "my_frameEndTime",
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "stateTime": "my_stateTime",
     *         //   "timeFrame": "my_timeFrame",
     *         //   "vmCount": 0,
     *         //   "vms": [],
     *         //   "vmsCount": 0
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    create(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Sources$Utilizationreports$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Utilizationreports$Create
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
        {}) as Params$Resource$Projects$Locations$Sources$Utilizationreports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Utilizationreports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/utilizationReports').replace(
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
     * Deletes a single Utilization Report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.utilizationReports.delete({
     *       // Required. The Utilization Report name.
     *       name: 'projects/my-project/locations/my-location/sources/my-source/utilizationReports/my-utilizationReport',
     *       // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Sources$Utilizationreports$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Utilizationreports$Delete
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
        {}) as Params$Resource$Projects$Locations$Sources$Utilizationreports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Utilizationreports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a single Utilization Report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.utilizationReports.get({
     *       // Required. The Utilization Report name.
     *       name: 'projects/my-project/locations/my-location/sources/my-source/utilizationReports/my-utilizationReport',
     *       // Optional. The level of details of the report. Defaults to FULL
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "error": {},
     *   //   "frameEndTime": "my_frameEndTime",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "stateTime": "my_stateTime",
     *   //   "timeFrame": "my_timeFrame",
     *   //   "vmCount": 0,
     *   //   "vms": [],
     *   //   "vmsCount": 0
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
    get(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Sources$Utilizationreports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UtilizationReport>;
    get(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UtilizationReport>,
      callback: BodyResponseCallback<Schema$UtilizationReport>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$Get,
      callback: BodyResponseCallback<Schema$UtilizationReport>
    ): void;
    get(callback: BodyResponseCallback<Schema$UtilizationReport>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Utilizationreports$Get
        | BodyResponseCallback<Schema$UtilizationReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UtilizationReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UtilizationReport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UtilizationReport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Utilizationreports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Utilizationreports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UtilizationReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UtilizationReport>(parameters);
      }
    }

    /**
     * Lists Utilization Reports of the given Source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await vmmigration.projects.locations.sources.utilizationReports.list({
     *       // Optional. The filter request.
     *       filter: 'placeholder-value',
     *       // Optional. the order by fields for the result.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 500 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Required. A page token, received from a previous `ListUtilizationReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUtilizationReports` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The Utilization Reports parent.
     *       parent: 'projects/my-project/locations/my-location/sources/my-source',
     *       // Optional. The level of details of each report. Defaults to BASIC.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "utilizationReports": []
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
    list(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Sources$Utilizationreports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUtilizationReportsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUtilizationReportsResponse>,
      callback: BodyResponseCallback<Schema$ListUtilizationReportsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Utilizationreports$List,
      callback: BodyResponseCallback<Schema$ListUtilizationReportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUtilizationReportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Utilizationreports$List
        | BodyResponseCallback<Schema$ListUtilizationReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUtilizationReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUtilizationReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUtilizationReportsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Utilizationreports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Utilizationreports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/utilizationReports').replace(
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
        createAPIRequest<Schema$ListUtilizationReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUtilizationReportsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Sources$Utilizationreports$Create
    extends StandardParameters {
    /**
     * Required. The Utilization Report's parent.
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The ID to use for the report, which will become the final component of the reports's resource name. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen.
     */
    utilizationReportId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UtilizationReport;
  }
  export interface Params$Resource$Projects$Locations$Sources$Utilizationreports$Delete
    extends StandardParameters {
    /**
     * Required. The Utilization Report name.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Utilizationreports$Get
    extends StandardParameters {
    /**
     * Required. The Utilization Report name.
     */
    name?: string;
    /**
     * Optional. The level of details of the report. Defaults to FULL
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Utilizationreports$List
    extends StandardParameters {
    /**
     * Optional. The filter request.
     */
    filter?: string;
    /**
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 500 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListUtilizationReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUtilizationReports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The Utilization Reports parent.
     */
    parent?: string;
    /**
     * Optional. The level of details of each report. Defaults to BASIC.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Targetprojects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.targetProjects.create({
     *     // Required. The TargetProject's parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The target_project identifier.
     *     targetProjectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "name": "my_name",
     *       //   "project": "my_project",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    create(
      params: Params$Resource$Projects$Locations$Targetprojects$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Targetprojects$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Targetprojects$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Targetprojects$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Targetprojects$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targetprojects$Create
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
        {}) as Params$Resource$Projects$Locations$Targetprojects$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targetprojects$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/targetProjects').replace(
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
     * Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.targetProjects.delete({
     *     // Required. The TargetProject name.
     *     name: 'projects/my-project/locations/my-location/targetProjects/my-targetProject',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    delete(
      params: Params$Resource$Projects$Locations$Targetprojects$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Targetprojects$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Targetprojects$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Targetprojects$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Targetprojects$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targetprojects$Delete
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
        {}) as Params$Resource$Projects$Locations$Targetprojects$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targetprojects$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.targetProjects.get({
     *     // Required. The TargetProject name.
     *     name: 'projects/my-project/locations/my-location/targetProjects/my-targetProject',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "name": "my_name",
     *   //   "project": "my_project",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Targetprojects$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Targetprojects$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TargetProject>;
    get(
      params: Params$Resource$Projects$Locations$Targetprojects$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Targetprojects$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TargetProject>,
      callback: BodyResponseCallback<Schema$TargetProject>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Targetprojects$Get,
      callback: BodyResponseCallback<Schema$TargetProject>
    ): void;
    get(callback: BodyResponseCallback<Schema$TargetProject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targetprojects$Get
        | BodyResponseCallback<Schema$TargetProject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TargetProject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TargetProject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TargetProject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targetprojects$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targetprojects$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$TargetProject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TargetProject>(parameters);
      }
    }

    /**
     * Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.targetProjects.list({
     *     // Optional. The filter request.
     *     filter: 'placeholder-value',
     *     // Optional. the order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Required. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargets` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of targets.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "targetProjects": [],
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Targetprojects$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Targetprojects$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTargetProjectsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Targetprojects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Targetprojects$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTargetProjectsResponse>,
      callback: BodyResponseCallback<Schema$ListTargetProjectsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Targetprojects$List,
      callback: BodyResponseCallback<Schema$ListTargetProjectsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTargetProjectsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targetprojects$List
        | BodyResponseCallback<Schema$ListTargetProjectsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTargetProjectsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTargetProjectsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTargetProjectsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targetprojects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targetprojects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/targetProjects').replace(
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
        createAPIRequest<Schema$ListTargetProjectsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTargetProjectsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/vmmigration.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const vmmigration = google.vmmigration('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await vmmigration.projects.locations.targetProjects.patch({
     *     // Output only. The name of the target project.
     *     name: 'projects/my-project/locations/my-location/targetProjects/my-targetProject',
     *     // A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the TargetProject resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "name": "my_name",
     *       //   "project": "my_project",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    patch(
      params: Params$Resource$Projects$Locations$Targetprojects$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Targetprojects$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Targetprojects$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Targetprojects$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Targetprojects$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targetprojects$Patch
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
        {}) as Params$Resource$Projects$Locations$Targetprojects$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targetprojects$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vmmigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Targetprojects$Create
    extends StandardParameters {
    /**
     * Required. The TargetProject's parent.
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The target_project identifier.
     */
    targetProjectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TargetProject;
  }
  export interface Params$Resource$Projects$Locations$Targetprojects$Delete
    extends StandardParameters {
    /**
     * Required. The TargetProject name.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Targetprojects$Get
    extends StandardParameters {
    /**
     * Required. The TargetProject name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Targetprojects$List
    extends StandardParameters {
    /**
     * Optional. The filter request.
     */
    filter?: string;
    /**
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargets` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of targets.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Targetprojects$Patch
    extends StandardParameters {
    /**
     * Output only. The name of the target project.
     */
    name?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the TargetProject resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TargetProject;
  }
}
