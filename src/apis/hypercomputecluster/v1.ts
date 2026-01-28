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

export namespace hypercomputecluster_v1 {
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
   * Cluster Director API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const hypercomputecluster = google.hypercomputecluster('v1');
   * ```
   */
  export class Hypercomputecluster {
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
   * A [Persistent disk](https://cloud.google.com/compute/docs/disks) used as the boot disk for a Compute Engine VM instance.
   */
  export interface Schema$BootDisk {
    /**
     * Required. Immutable. Size of the disk in gigabytes. Must be at least 10GB.
     */
    sizeGb?: string | null;
    /**
     * Required. Immutable. [Persistent disk type](https://cloud.google.com/compute/docs/disks#disk-types), in the format `projects/{project\}/zones/{zone\}/diskTypes/{disk_type\}`.
     */
    type?: string | null;
  }
  /**
   * A reference to a [Google Cloud Storage](https://cloud.google.com/storage) bucket.
   */
  export interface Schema$BucketReference {
    /**
     * Output only. Name of the bucket.
     */
    bucket?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * When set in OperationStep, indicates that cluster health check should be performed.
   */
  export interface Schema$CheckClusterHealth {}
  /**
   * A collection of virtual machines and connected resources forming a high-performance computing cluster capable of running large-scale, tightly coupled workloads. A cluster combines a set a compute resources that perform computations, storage resources that contain inputs and store outputs, an orchestrator that is responsible for assigning jobs to compute resources, and network resources that connect everything together.
   */
  export interface Schema$Cluster {
    /**
     * Optional. Compute resources available to the cluster. Keys specify the ID of the compute resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
     */
    computeResources?: {[key: string]: Schema$ComputeResource} | null;
    /**
     * Output only. Time that the cluster was originally created.
     */
    createTime?: string | null;
    /**
     * Optional. User-provided description of the cluster.
     */
    description?: string | null;
    /**
     * Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) applied to the cluster. Labels can be used to organize clusters and to filter them in queries.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. [Relative resource name](https://google.aip.dev/122) of the cluster, in the format `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    name?: string | null;
    /**
     * Optional. Network resources available to the cluster. Must contain at most one value. Keys specify the ID of the network resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
     */
    networkResources?: {[key: string]: Schema$NetworkResource} | null;
    /**
     * Optional. Orchestrator that is responsible for scheduling and running jobs on the cluster.
     */
    orchestrator?: Schema$Orchestrator;
    /**
     * Output only. Indicates whether changes to the cluster are currently in flight. If this is `true`, then the current state might not match the cluster's intended state.
     */
    reconciling?: boolean | null;
    /**
     * Optional. Storage resources available to the cluster. Keys specify the ID of the storage resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
     */
    storageResources?: {[key: string]: Schema$StorageResource} | null;
    /**
     * Output only. Time that the cluster was most recently updated.
     */
    updateTime?: string | null;
  }
  /**
   * Details about a Compute Engine [instance](https://cloud.google.com/compute/docs/instances).
   */
  export interface Schema$ComputeInstance {
    /**
     * Output only. Name of the VM instance, in the format `projects/{project\}/zones/{zone\}/instances/{instance\}`.
     */
    instance?: string | null;
  }
  /**
   * When set in a SlurmNodeSet, indicates that the nodeset should be backed by Compute Engine VM instances.
   */
  export interface Schema$ComputeInstanceSlurmNodeSet {
    /**
     * Optional. Boot disk for the compute instance
     */
    bootDisk?: Schema$BootDisk;
    /**
     * Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each VM instance in the nodeset.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. [Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each VM instance in the nodeset. Max 256KB.
     */
    startupScript?: string | null;
  }
  /**
   * A resource defining how virtual machines and accelerators should be provisioned for the cluster.
   */
  export interface Schema$ComputeResource {
    /**
     * Required. Immutable. Configuration for this compute resource, which describes how it should be created at runtime.
     */
    config?: Schema$ComputeResourceConfig;
  }
  /**
   * Describes how a compute resource should be created at runtime.
   */
  export interface Schema$ComputeResourceConfig {
    /**
     * Optional. Immutable. If set, indicates that this resource should use flex-start VMs.
     */
    newFlexStartInstances?: Schema$NewFlexStartInstancesConfig;
    /**
     * Optional. Immutable. If set, indicates that this resource should use on-demand VMs.
     */
    newOnDemandInstances?: Schema$NewOnDemandInstancesConfig;
    /**
     * Optional. Immutable. If set, indicates that this resource should use reserved VMs.
     */
    newReservedInstances?: Schema$NewReservedInstancesConfig;
    /**
     * Optional. Immutable. If set, indicates that this resource should use spot VMs.
     */
    newSpotInstances?: Schema$NewSpotInstancesConfig;
  }
  /**
   * When set in OperationStep, indicates that a new filestore instance should be created.
   */
  export interface Schema$CreateFilestoreInstance {
    /**
     * Output only. Name of the Filestore instance, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    filestore?: string | null;
  }
  /**
   * When set in OperationStep, indicates that a login node should be created.
   */
  export interface Schema$CreateLoginNode {}
  /**
   * When set in OperationStep, indicates that a new lustre instance should be created.
   */
  export interface Schema$CreateLustreInstance {
    /**
     * Output only. Name of the Managed Lustre instance, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    lustre?: string | null;
  }
  /**
   * When set in OperationStep, indicates that a new network should be created.
   */
  export interface Schema$CreateNetwork {
    /**
     * Output only. Name of the network to create, in the format `projects/{project\}/global/networks/{network\}`.
     */
    network?: string | null;
  }
  /**
   * When set in OperationStep, indicates that a nodeset should be created.
   */
  export interface Schema$CreateNodeset {
    /**
     * Output only. Name of the nodeset to create
     */
    nodesets?: string[] | null;
  }
  /**
   * When set in OperationStep, indicates that an orchestrator should be created.
   */
  export interface Schema$CreateOrchestrator {}
  /**
   * When set in OperationStep, indicates that a partition should be created.
   */
  export interface Schema$CreatePartition {
    /**
     * Output only. Name of the partition to create
     */
    partitions?: string[] | null;
  }
  /**
   * When set in OperationStep, indicates that a new private service access should be created.
   */
  export interface Schema$CreatePrivateServiceAccess {}
  /**
   * When set in OperationStep, indicates that a new storage bucket should be created.
   */
  export interface Schema$CreateStorageBucket {
    /**
     * Output only. Name of the bucket.
     */
    bucket?: string | null;
  }
  /**
   * When set in OperationStep, indicates that a Filestore instance should be deleted.
   */
  export interface Schema$DeleteFilestoreInstance {
    /**
     * Output only. Name of the Filestore instance, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    filestore?: string | null;
  }
  /**
   * When set in OperationStep, indicates that a login node should be deleted.
   */
  export interface Schema$DeleteLoginNode {}
  /**
   * When set in OperationStep, indicates that a Lustre instance should be deleted.
   */
  export interface Schema$DeleteLustreInstance {
    /**
     * Output only. Name of the Managed Lustre instance, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    lustre?: string | null;
  }
  /**
   * When set in OperationStep, indicates network deletion step with the resource name.
   */
  export interface Schema$DeleteNetwork {
    /**
     * Output only. Name of the network to delete, in the format `projects/{project\}/global/networks/{network\}`.
     */
    network?: string | null;
  }
  /**
   * When set in OperationStep, indicates that a nodeset should be deleted.
   */
  export interface Schema$DeleteNodeset {
    /**
     * Output only. Name of the nodeset to delete
     */
    nodesets?: string[] | null;
  }
  /**
   * When set in OperationStep, indicates that an orchestrator should be deleted.
   */
  export interface Schema$DeleteOrchestrator {}
  /**
   * When set in OperationStep, indicates that a partition should be deleted.
   */
  export interface Schema$DeletePartition {
    /**
     * Output only. Name of the partition to delete
     */
    partitions?: string[] | null;
  }
  /**
   * When set in OperationStep, indicates private service access deletion step.
   */
  export interface Schema$DeletePrivateServiceAccess {}
  /**
   * When set in OperationStep, indicates that Cloud Storage bucket should be deleted.
   */
  export interface Schema$DeleteStorageBucket {
    /**
     * Output only. Name of the bucket.
     */
    bucket?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * When set in a StorageResourceConfig, indicates that an existing [Google Cloud Storage](https://cloud.google.com/storage) bucket should be imported.
   */
  export interface Schema$ExistingBucketConfig {
    /**
     * Required. Immutable. Name of the Cloud Storage bucket to import.
     */
    bucket?: string | null;
  }
  /**
   * When set in a StorageResourceConfig, indicates that an existing [Filestore](https://cloud.google.com/filestore) instance should be imported.
   */
  export interface Schema$ExistingFilestoreConfig {
    /**
     * Required. Immutable. Name of the Filestore instance to import, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    filestore?: string | null;
  }
  /**
   * When set in a StorageResourceConfig, indicates that an existing [Managed Lustre](https://cloud.google.com/products/managed-lustre) instance should be imported.
   */
  export interface Schema$ExistingLustreConfig {
    /**
     * Required. Immutable. Name of the Managed Lustre instance to import, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    lustre?: string | null;
  }
  /**
   * When set in a NetworkResourceConfig, indicates that an existing network should be imported.
   */
  export interface Schema$ExistingNetworkConfig {
    /**
     * Required. Immutable. Name of the network to import, in the format `projects/{project\}/global/networks/{network\}`.
     */
    network?: string | null;
    /**
     * Required. Immutable. Particular subnetwork to use, in the format `projects/{project\}/regions/{region\}/subnetworks/{subnetwork\}`.
     */
    subnetwork?: string | null;
  }
  /**
   * Message describing filestore configuration
   */
  export interface Schema$FileShareConfig {
    /**
     * Required. Size of the filestore in GB. Must be between 1024 and 102400, and must meet scalability requirements described at https://cloud.google.com/filestore/docs/service-tiers.
     */
    capacityGb?: string | null;
    /**
     * Required. Filestore share location
     */
    fileShare?: string | null;
  }
  /**
   * A reference to a [Filestore](https://cloud.google.com/filestore) instance.
   */
  export interface Schema$FilestoreReference {
    /**
     * Output only. Name of the Filestore instance, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    filestore?: string | null;
  }
  /**
   * Message describing Google Cloud Storage autoclass configuration
   */
  export interface Schema$GcsAutoclassConfig {
    /**
     * Required. Enables Auto-class feature.
     */
    enabled?: boolean | null;
    /**
     * Optional. Terminal storage class of the autoclass bucket
     */
    terminalStorageClass?: string | null;
  }
  /**
   * Message describing Google Cloud Storage hierarchical namespace configuration
   */
  export interface Schema$GcsHierarchicalNamespaceConfig {
    /**
     * Required. Enables hierarchical namespace setup for the bucket.
     */
    enabled?: boolean | null;
  }
  /**
   * Response message for ListClusters.
   */
  export interface Schema$ListClustersResponse {
    /**
     * Clusters in the specified location.
     */
    clusters?: Schema$Cluster[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is absent, there are no subsequent pages.
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
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
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
   * A reference to a [Managed Lustre](https://cloud.google.com/products/managed-lustre) instance.
   */
  export interface Schema$LustreReference {
    /**
     * Output only. Name of the Managed Lustre instance, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    lustre?: string | null;
  }
  /**
   * A reference to a [VPC network](https://cloud.google.com/vpc/docs/vpc) in Google Compute Engine.
   */
  export interface Schema$NetworkReference {
    /**
     * Output only. Name of the network, in the format `projects/{project\}/global/networks/{network\}`.
     */
    network?: string | null;
    /**
     * Output only. Name of the particular subnetwork being used by the cluster, in the format `projects/{project\}/regions/{region\}/subnetworks/{subnetwork\}`.
     */
    subnetwork?: string | null;
  }
  /**
   * A resource representing a network that connects the various components of a cluster together.
   */
  export interface Schema$NetworkResource {
    /**
     * Immutable. Configuration for this network resource, which describes how it should be created or imported. This field only controls how the network resource is initially created or imported. Subsequent changes to the network resource should be made via the resource's API and will not be reflected in the configuration.
     */
    config?: Schema$NetworkResourceConfig;
    /**
     * Reference to a network in Google Compute Engine.
     */
    network?: Schema$NetworkReference;
  }
  /**
   * Describes how a network resource should be initialized. Each network resource can either be imported from an existing Google Cloud resource or initialized when the cluster is created.
   */
  export interface Schema$NetworkResourceConfig {
    /**
     * Optional. Immutable. If set, indicates that an existing network should be imported.
     */
    existingNetwork?: Schema$ExistingNetworkConfig;
    /**
     * Optional. Immutable. If set, indicates that a new network should be created.
     */
    newNetwork?: Schema$NewNetworkConfig;
  }
  /**
   * When set in a StorageResourceConfig, indicates that a new [Google Cloud Storage](https://cloud.google.com/storage) bucket should be created.
   */
  export interface Schema$NewBucketConfig {
    /**
     * Optional. Immutable. If set, indicates that the bucket should use [Autoclass](https://cloud.google.com/storage/docs/autoclass).
     */
    autoclass?: Schema$GcsAutoclassConfig;
    /**
     * Required. Immutable. Name of the Cloud Storage bucket to create.
     */
    bucket?: string | null;
    /**
     * Optional. Immutable. If set, indicates that the bucket should use [hierarchical namespaces](https://cloud.google.com/storage/docs/hns-overview).
     */
    hierarchicalNamespace?: Schema$GcsHierarchicalNamespaceConfig;
    /**
     * Optional. Immutable. If set, uses the provided storage class as the bucket's default storage class.
     */
    storageClass?: string | null;
  }
  /**
   * When set in a StorageResourceConfig, indicates that a new [Filestore](https://cloud.google.com/filestore) instance should be created.
   */
  export interface Schema$NewFilestoreConfig {
    /**
     * Optional. Immutable. Description of the instance. Maximum of 2048 characters.
     */
    description?: string | null;
    /**
     * Required. Immutable. File system shares on the instance. Exactly one file share must be specified.
     */
    fileShares?: Schema$FileShareConfig[];
    /**
     * Required. Immutable. Name of the Filestore instance to create, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    filestore?: string | null;
    /**
     * Optional. Immutable. Access protocol to use for all file shares in the instance. Defaults to NFS V3 if not set.
     */
    protocol?: string | null;
    /**
     * Required. Immutable. Service tier to use for the instance.
     */
    tier?: string | null;
  }
  /**
   * When set in a ComputeResourceConfig, indicates that VM instances should be created using [Flex Start](https://cloud.google.com/compute/docs/instances/provisioning-models).
   */
  export interface Schema$NewFlexStartInstancesConfig {
    /**
     * Required. Immutable. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. `n2-standard-2`.
     */
    machineType?: string | null;
    /**
     * Required. Immutable. Specifies the time limit for created instances. Instances will be terminated at the end of this duration.
     */
    maxDuration?: string | null;
    /**
     * Required. Immutable. Name of the zone in which VM instances should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster.
     */
    zone?: string | null;
  }
  /**
   * When set in a StorageResourceConfig, indicates that a new [Managed Lustre](https://cloud.google.com/products/managed-lustre) instance should be created.
   */
  export interface Schema$NewLustreConfig {
    /**
     * Required. Immutable. Storage capacity of the instance in gibibytes (GiB). Allowed values are between 18000 and 7632000.
     */
    capacityGb?: string | null;
    /**
     * Optional. Immutable. Description of the Managed Lustre instance. Maximum of 2048 characters.
     */
    description?: string | null;
    /**
     * Required. Immutable. Filesystem name for this instance. This name is used by client-side tools, including when mounting the instance. Must be 8 characters or less and can only contain letters and numbers.
     */
    filesystem?: string | null;
    /**
     * Required. Immutable. Name of the Managed Lustre instance to create, in the format `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    lustre?: string | null;
  }
  /**
   * When set in a NetworkResourceConfig, indicates that a new network should be created.
   */
  export interface Schema$NewNetworkConfig {
    /**
     * Optional. Immutable. Description of the network. Maximum of 2048 characters.
     */
    description?: string | null;
    /**
     * Required. Immutable. Name of the network to create, in the format `projects/{project\}/global/networks/{network\}`.
     */
    network?: string | null;
  }
  /**
   * When set in a ComputeResourceConfig, indicates that on-demand (i.e., using the standard provisioning model) VM instances should be created.
   */
  export interface Schema$NewOnDemandInstancesConfig {
    /**
     * Required. Immutable. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. `n2-standard-2`.
     */
    machineType?: string | null;
    /**
     * Required. Immutable. Name of the zone in which VM instances should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster.
     */
    zone?: string | null;
  }
  /**
   * When set in a ComputeResourceConfig, indicates that VM instances should be created from a [reservation](https://cloud.google.com/compute/docs/instances/reservations-overview).
   */
  export interface Schema$NewReservedInstancesConfig {
    /**
     * Optional. Immutable. Name of the reservation from which VM instances should be created, in the format `projects/{project\}/zones/{zone\}/reservations/{reservation\}`.
     */
    reservation?: string | null;
  }
  /**
   * When set in a ComputeResourceConfig, indicates that [spot VM](https://cloud.google.com/compute/docs/instances/spot) instances should be created.
   */
  export interface Schema$NewSpotInstancesConfig {
    /**
     * Required. Immutable. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. `n2-standard-2`.
     */
    machineType?: string | null;
    /**
     * Optional. Specifies the termination action of the instance
     */
    terminationAction?: string | null;
    /**
     * Required. Immutable. Name of the zone in which VM instances should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster.
     */
    zone?: string | null;
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
     * Output only. Progress of the operation.
     */
    progress?: Schema$OperationProgress;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
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
   * Message describing the progress of a cluster mutation long-running operation. operation.
   */
  export interface Schema$OperationProgress {
    /**
     * Output only. Steps and status of the operation.
     */
    steps?: Schema$OperationStep[];
  }
  /**
   * Message describing the status of a single step in a cluster mutation long-running operation.
   */
  export interface Schema$OperationStep {
    /**
     * Output only. If set, indicates that cluster health check is part of the operation.
     */
    checkClusterHealth?: Schema$CheckClusterHealth;
    /**
     * Output only. If set, indicates that new Filestore instance creation is part of the operation.
     */
    createFilestoreInstance?: Schema$CreateFilestoreInstance;
    /**
     * Output only. If set, indicates that new login node creation is part of the operation.
     */
    createLoginNode?: Schema$CreateLoginNode;
    /**
     * Output only. If set, indicates that new Lustre instance creation is part of the operation.
     */
    createLustreInstance?: Schema$CreateLustreInstance;
    /**
     * Output only. If set, indicates that new network creation is part of the operation.
     */
    createNetwork?: Schema$CreateNetwork;
    /**
     * Output only. If set, indicates that new nodeset creation is part of the operation.
     */
    createNodeset?: Schema$CreateNodeset;
    /**
     * Output only. If set, indicates that orchestrator creation is part of the operation.
     */
    createOrchestrator?: Schema$CreateOrchestrator;
    /**
     * Output only. If set, indicates that new partition creation is part of the operation.
     */
    createPartition?: Schema$CreatePartition;
    /**
     * Output only. If set, indicates that new private service access creation is part of the operation.
     */
    createPrivateServiceAccess?: Schema$CreatePrivateServiceAccess;
    /**
     * Output only. If set, indicates that new Cloud Storage bucket creation is part of the operation.
     */
    createStorageBucket?: Schema$CreateStorageBucket;
    /**
     * Output only. If set, indicates that Filestore instance deletion is part of the operation.
     */
    deleteFilestoreInstance?: Schema$DeleteFilestoreInstance;
    /**
     * Output only. If set, indicates that login node deletion is part of the operation.
     */
    deleteLoginNode?: Schema$DeleteLoginNode;
    /**
     * Output only. If set, indicates that Lustre instance deletion is part of the operation.
     */
    deleteLustreInstance?: Schema$DeleteLustreInstance;
    /**
     * Output only. If set, indicates that network deletion is part of the operation.
     */
    deleteNetwork?: Schema$DeleteNetwork;
    /**
     * Output only. If set, indicates that nodeset deletion is part of the operation.
     */
    deleteNodeset?: Schema$DeleteNodeset;
    /**
     * Output only. If set, indicates that orchestrator deletion is part of the operation.
     */
    deleteOrchestrator?: Schema$DeleteOrchestrator;
    /**
     * Output only. If set, indicates that partition deletion is part of the operation.
     */
    deletePartition?: Schema$DeletePartition;
    /**
     * Output only. If set, indicates that private service access deletion is part of the operation.
     */
    deletePrivateServiceAccess?: Schema$DeletePrivateServiceAccess;
    /**
     * Output only. If set, indicates that Cloud Storage bucket deletion is part of the operation.
     */
    deleteStorageBucket?: Schema$DeleteStorageBucket;
    /**
     * Output only. State of the operation step.
     */
    state?: string | null;
    /**
     * Output only. If set, indicates that login node update is part of the operation.
     */
    updateLoginNode?: Schema$UpdateLoginNode;
    /**
     * Output only. If set, indicates that nodeset update is part of the operation.
     */
    updateNodeset?: Schema$UpdateNodeset;
    /**
     * Output only. If set, indicates that an orchestrator update is part of the operation.
     */
    updateOrchestrator?: Schema$UpdateOrchestrator;
    /**
     * Output only. If set, indicates that partition update is part of the operation.
     */
    updatePartition?: Schema$UpdatePartition;
  }
  /**
   * The component responsible for scheduling and running workloads on the cluster as well as providing the user interface for interacting with the cluster at runtime.
   */
  export interface Schema$Orchestrator {
    /**
     * Optional. If set, indicates that the cluster should use Slurm as the orchestrator.
     */
    slurm?: Schema$SlurmOrchestrator;
  }
  /**
   * Configuration for Slurm [login nodes](https://slurm.schedmd.com/quickstart_admin.html#login) in the cluster. Login nodes are Compute Engine VM instances that allow users to access the cluster over SSH.
   */
  export interface Schema$SlurmLoginNodes {
    /**
     * Optional. Boot disk for the login node.
     */
    bootDisk?: Schema$BootDisk;
    /**
     * Required. Number of login node instances to create.
     */
    count?: string | null;
    /**
     * Optional. Whether [OS Login](https://cloud.google.com/compute/docs/oslogin) should be enabled on login node instances.
     */
    enableOsLogin?: boolean | null;
    /**
     * Optional. Whether login node instances should be assigned [external IP addresses](https://cloud.google.com/compute/docs/ip-addresses#externaladdresses).
     */
    enablePublicIps?: boolean | null;
    /**
     * Output only. Information about the login node instances that were created in Compute Engine.
     */
    instances?: Schema$ComputeInstance[];
    /**
     * Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each login node instance.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use for login nodes, e.g. `n2-standard-2`.
     */
    machineType?: string | null;
    /**
     * Optional. [Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each login node instance. Max 256KB. The script must complete within the system-defined default timeout of 5 minutes. For tasks that require more time, consider running them in the background using methods such as `&` or `nohup`.
     */
    startupScript?: string | null;
    /**
     * Optional. How storage resources should be mounted on each login node.
     */
    storageConfigs?: Schema$StorageConfig[];
    /**
     * Required. Name of the zone in which login nodes should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster.
     */
    zone?: string | null;
  }
  /**
   * Configuration for Slurm nodesets in the cluster. Nodesets are groups of compute nodes used by Slurm that are responsible for running workloads submitted to the cluster.
   */
  export interface Schema$SlurmNodeSet {
    /**
     * Optional. ID of the compute resource on which this nodeset will run. Must match a key in the cluster's [compute_resources](Cluster.compute_resources).
     */
    computeId?: string | null;
    /**
     * Optional. If set, indicates that the nodeset should be backed by Compute Engine instances.
     */
    computeInstance?: Schema$ComputeInstanceSlurmNodeSet;
    /**
     * Required. Identifier for the nodeset, which allows it to be referenced by partitions. Must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
     */
    id?: string | null;
    /**
     * Optional. Controls how many additional nodes a cluster can bring online to handle workloads. Set this value to enable dynamic node creation and limit the number of additional nodes the cluster can bring online. Leave empty if you do not want the cluster to create nodes dynamically, and instead rely only on static nodes.
     */
    maxDynamicNodeCount?: string | null;
    /**
     * Optional. Number of nodes to be statically created for this nodeset. The cluster will attempt to ensure that at least this many nodes exist at all times.
     */
    staticNodeCount?: string | null;
    /**
     * Optional. How storage resources should be mounted on each compute node.
     */
    storageConfigs?: Schema$StorageConfig[];
  }
  /**
   * When set in Orchestrator, indicates that the cluster should use [Slurm](https://slurm.schedmd.com/) as the orchestrator.
   */
  export interface Schema$SlurmOrchestrator {
    /**
     * Optional. Default partition to use for submitted jobs that do not explicitly specify a partition. Required if and only if there is more than one partition, in which case it must match the id of one of the partitions.
     */
    defaultPartition?: string | null;
    /**
     * Optional. Slurm [epilog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes whenever a node finishes running a job. Values must not be empty.
     */
    epilogBashScripts?: string[] | null;
    /**
     * Required. Configuration for login nodes, which allow users to access the cluster over SSH.
     */
    loginNodes?: Schema$SlurmLoginNodes;
    /**
     * Required. Configuration of Slurm nodesets, which define groups of compute resources that can be used by Slurm. At least one compute node is required.
     */
    nodeSets?: Schema$SlurmNodeSet[];
    /**
     * Required. Configuration of Slurm partitions, which group one or more nodesets. Acts as a queue against which jobs can be submitted. At least one partition is required.
     */
    partitions?: Schema$SlurmPartition[];
    /**
     * Optional. Slurm [prolog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes before a node begins running a new job. Values must not be empty.
     */
    prologBashScripts?: string[] | null;
  }
  /**
   * Configuration for Slurm partitions in the cluster. Partitions are groups of nodesets, and are how clients specify where their workloads should be run.
   */
  export interface Schema$SlurmPartition {
    /**
     * Required. ID of the partition, which is how users will identify it. Must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
     */
    id?: string | null;
    /**
     * Required. IDs of the nodesets that make up this partition. Values must match SlurmNodeSet.id.
     */
    nodeSetIds?: string[] | null;
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
   * Description of how a storage resource should be mounted on a VM instance.
   */
  export interface Schema$StorageConfig {
    /**
     * Required. ID of the storage resource to mount, which must match a key in the cluster's [storage_resources](Cluster.storage_resources).
     */
    id?: string | null;
    /**
     * Required. A directory inside the VM instance's file system where the storage resource should be mounted (e.g., `/mnt/share`).
     */
    localMount?: string | null;
  }
  /**
   * A resource representing a form of persistent storage that is accessible to compute resources in the cluster.
   */
  export interface Schema$StorageResource {
    /**
     * Reference to a Google Cloud Storage bucket. Populated if and only if the storage resource was configured to use Google Cloud Storage.
     */
    bucket?: Schema$BucketReference;
    /**
     * Required. Immutable. Configuration for this storage resource, which describes how it should be created or imported. This field only controls how the storage resource is initially created or imported. Subsequent changes to the storage resource should be made via the resource's API and will not be reflected in the configuration.
     */
    config?: Schema$StorageResourceConfig;
    /**
     * Reference to a Filestore instance. Populated if and only if the storage resource was configured to use Filestore.
     */
    filestore?: Schema$FilestoreReference;
    /**
     * Reference to a Managed Lustre instance. Populated if and only if the storage resource was configured to use Managed Lustre.
     */
    lustre?: Schema$LustreReference;
  }
  /**
   * Describes how a storage resource should be initialized. Each storage resource can either be imported from an existing Google Cloud resource or initialized when the cluster is created.
   */
  export interface Schema$StorageResourceConfig {
    /**
     * Optional. Immutable. If set, indicates that an existing Cloud Storage bucket should be imported.
     */
    existingBucket?: Schema$ExistingBucketConfig;
    /**
     * Optional. Immutable. If set, indicates that an existing Filestore instance should be imported.
     */
    existingFilestore?: Schema$ExistingFilestoreConfig;
    /**
     * Optional. Immutable. If set, indicates that an existing Managed Lustre instance should be imported.
     */
    existingLustre?: Schema$ExistingLustreConfig;
    /**
     * Optional. Immutable. If set, indicates that a new Cloud Storage bucket should be created.
     */
    newBucket?: Schema$NewBucketConfig;
    /**
     * Optional. Immutable. If set, indicates that a new Filestore instance should be created.
     */
    newFilestore?: Schema$NewFilestoreConfig;
    /**
     * Optional. Immutable. If set, indicates that a new Managed Lustre instance should be created.
     */
    newLustre?: Schema$NewLustreConfig;
  }
  /**
   * When set in OperationStep, indicates that a login node should be updated.
   */
  export interface Schema$UpdateLoginNode {}
  /**
   * When set in OperationStep, indicates that a nodeset should be updated.
   */
  export interface Schema$UpdateNodeset {
    /**
     * Output only. Name of the nodeset to update
     */
    nodesets?: string[] | null;
  }
  /**
   * When set in OperationStep, indicates that an orchestrator should be updated.
   */
  export interface Schema$UpdateOrchestrator {}
  /**
   * When set in OperationStep, indicates that a partition should be updated.
   */
  export interface Schema$UpdatePartition {
    /**
     * Output only. Name of the partition to update
     */
    partitions?: string[] | null;
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
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.get({
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Location>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
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
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.list({
     *     // Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     *     extraLocationTypes: 'placeholder-value',
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
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

  export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends StandardParameters {
    /**
     * Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     */
    extraLocationTypes?: string[];
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

  export class Resource$Projects$Locations$Clusters {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Cluster in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.clusters.create({
     *     // Required. ID of the cluster to create. Must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
     *     clusterId: 'placeholder-value',
     *     // Required. Parent location in which the cluster should be created, in the format `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "computeResources": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "networkResources": {},
     *       //   "orchestrator": {},
     *       //   "reconciling": false,
     *       //   "storageResources": {},
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
      params: Params$Resource$Projects$Locations$Clusters$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Clusters$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl =
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clusters').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
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
     * Deletes a single Cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.clusters.delete({
     *     // Required. Name of the cluster to delete, in the format `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *     // Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided.
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
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Clusters$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl =
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
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
     * Gets details of a single Cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.clusters.get({
     *     // Required. Name of the cluster to retrieve, in the format `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "computeResources": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "networkResources": {},
     *   //   "orchestrator": {},
     *   //   "reconciling": false,
     *   //   "storageResources": {},
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
      params: Params$Resource$Projects$Locations$Clusters$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Clusters$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Cluster>>;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Cluster>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl =
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
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
     * Lists Clusters in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.clusters.list({
     *     // Optional. [Filter](https://google.aip.dev/160) to apply to the returned results.
     *     filter: 'placeholder-value',
     *     // Optional. How to order the resulting clusters. Must be one of the following strings: * `name` * `name desc` * `create_time` * `create_time desc` If not specified, clusters will be returned in an arbitrary order.
     *     orderBy: 'placeholder-value',
     *     // Optional. Maximum number of clusters to return. The service may return fewer than this value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent location of the clusters to list, in the format `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusters": [],
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
      params: Params$Resource$Projects$Locations$Clusters$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Clusters$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListClustersResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListClustersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl =
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clusters').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
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
     * Updates the parameters of a single Cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.clusters.patch({
     *     // Identifier. [Relative resource name](https://google.aip.dev/122) of the cluster, in the format `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *     // Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided.
     *     requestId: 'placeholder-value',
     *     // Optional. Mask specifying which fields in the cluster to update. All paths must be specified explicitly - wildcards are not supported. At least one path must be provided.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "computeResources": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "networkResources": {},
     *       //   "orchestrator": {},
     *       //   "reconciling": false,
     *       //   "storageResources": {},
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
      params: Params$Resource$Projects$Locations$Clusters$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Clusters$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Patch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
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

  export interface Params$Resource$Projects$Locations$Clusters$Create extends StandardParameters {
    /**
     * Required. ID of the cluster to create. Must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
     */
    clusterId?: string;
    /**
     * Required. Parent location in which the cluster should be created, in the format `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Delete extends StandardParameters {
    /**
     * Required. Name of the cluster to delete, in the format `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    name?: string;
    /**
     * Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Get extends StandardParameters {
    /**
     * Required. Name of the cluster to retrieve, in the format `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$List extends StandardParameters {
    /**
     * Optional. [Filter](https://google.aip.dev/160) to apply to the returned results.
     */
    filter?: string;
    /**
     * Optional. How to order the resulting clusters. Must be one of the following strings: * `name` * `name desc` * `create_time` * `create_time desc` If not specified, clusters will be returned in an arbitrary order.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of clusters to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent location of the clusters to list, in the format `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Patch extends StandardParameters {
    /**
     * Identifier. [Relative resource name](https://google.aip.dev/122) of the cluster, in the format `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    name?: string;
    /**
     * Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided.
     */
    requestId?: string;
    /**
     * Optional. Mask specifying which fields in the cluster to update. All paths must be specified explicitly - wildcards are not supported. At least one path must be provided.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.operations.cancel({
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl =
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
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
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.operations.delete({
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl =
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
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
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.operations.get({
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl =
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
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
     * //   https://console.developers.google.com/apis/api/hypercomputecluster.googleapis.com
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
     * const hypercomputecluster = google.hypercomputecluster('v1');
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
     *   const res = await hypercomputecluster.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *     // When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": [],
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
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl =
        options.rootUrl || 'https://hypercomputecluster.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
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

  export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
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
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     */
    returnPartialSuccess?: boolean;
  }
}
