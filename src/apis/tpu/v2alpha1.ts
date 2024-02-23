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

export namespace tpu_v2alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v2alpha1';
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
   * Cloud TPU API
   *
   * TPU API provides customers with access to Google TPU technology.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const tpu = google.tpu('v2alpha1');
   * ```
   */
  export class Tpu {
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
   * A TPU accelerator configuration.
   */
  export interface Schema$AcceleratorConfig {
    /**
     * Required. Topology of TPU in chips.
     */
    topology?: string | null;
    /**
     * Required. Type of TPU.
     */
    type?: string | null;
  }
  /**
   * A accelerator type that a Node can be configured with.
   */
  export interface Schema$AcceleratorType {
    /**
     * The accelerator config.
     */
    acceleratorConfigs?: Schema$AcceleratorConfig[];
    /**
     * The resource name.
     */
    name?: string | null;
    /**
     * The accelerator type.
     */
    type?: string | null;
  }
  /**
   * Further data for the accepted state.
   */
  export interface Schema$AcceptedData {}
  /**
   * An access config attached to the TPU worker.
   */
  export interface Schema$AccessConfig {
    /**
     * Output only. An external IP address associated with the TPU worker.
     */
    externalIp?: string | null;
  }
  /**
   * Further data for the active state.
   */
  export interface Schema$ActiveData {}
  /**
   * A node-attached disk resource. Next ID: 8;
   */
  export interface Schema$AttachedDisk {
    /**
     * The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks.
     */
    mode?: string | null;
    /**
     * Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk".
     */
    sourceDisk?: string | null;
  }
  /**
   * BestEffort tier definition.
   */
  export interface Schema$BestEffort {}
  /**
   * Boot disk configurations.
   */
  export interface Schema$BootDiskConfig {
    /**
     * Optional. Customer encryption key for boot disk.
     */
    customerEncryptionKey?: Schema$CustomerEncryptionKey;
    /**
     * Optional. Whether the boot disk will be created with confidential compute mode.
     */
    enableConfidentialCompute?: boolean | null;
  }
  /**
   * Further data for the creating state.
   */
  export interface Schema$CreatingData {}
  /**
   * Customer's encryption key.
   */
  export interface Schema$CustomerEncryptionKey {
    /**
     * The name of the encryption key that is stored in Google Cloud KMS. For example: "kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key The fully-qualifed key name may be returned for resource GET requests. For example: "kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key /cryptoKeyVersions/1
     */
    kmsKeyName?: string | null;
  }
  /**
   * Further data for the deleting state.
   */
  export interface Schema$DeletingData {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Further data for the failed state.
   */
  export interface Schema$FailedData {
    /**
     * The error that caused the queued resource to enter the FAILED state.
     */
    error?: Schema$Status;
  }
  /**
   * Request for GenerateServiceIdentity.
   */
  export interface Schema$GenerateServiceIdentityRequest {}
  /**
   * Response for GenerateServiceIdentity.
   */
  export interface Schema$GenerateServiceIdentityResponse {
    /**
     * ServiceIdentity that was created or retrieved.
     */
    identity?: Schema$ServiceIdentity;
  }
  /**
   * Request for GetGuestAttributes.
   */
  export interface Schema$GetGuestAttributesRequest {
    /**
     * The guest attributes path to be queried.
     */
    queryPath?: string | null;
    /**
     * The 0-based worker ID. If it is empty, all workers' GuestAttributes will be returned.
     */
    workerIds?: string[] | null;
  }
  /**
   * Response for GetGuestAttributes.
   */
  export interface Schema$GetGuestAttributesResponse {
    /**
     * The guest attributes for the TPU workers.
     */
    guestAttributes?: Schema$GuestAttributes[];
  }
  /**
   * Guaranteed tier definition.
   */
  export interface Schema$Guaranteed {
    /**
     * Optional. Defines the minimum duration of the guarantee. If specified, the requested resources will only be provisioned if they can be allocated for at least the given duration.
     */
    minDuration?: string | null;
    /**
     * Optional. Specifies the request should be scheduled on reserved capacity.
     */
    reserved?: boolean | null;
  }
  /**
   * A guest attributes.
   */
  export interface Schema$GuestAttributes {
    /**
     * The path to be queried. This can be the default namespace ('/') or a nested namespace ('/\/') or a specified key ('/\/\')
     */
    queryPath?: string | null;
    /**
     * The value of the requested queried path.
     */
    queryValue?: Schema$GuestAttributesValue;
  }
  /**
   * A guest attributes namespace/key/value entry.
   */
  export interface Schema$GuestAttributesEntry {
    /**
     * Key for the guest attribute entry.
     */
    key?: string | null;
    /**
     * Namespace for the guest attribute entry.
     */
    namespace?: string | null;
    /**
     * Value for the guest attribute entry.
     */
    value?: string | null;
  }
  /**
   * Array of guest attribute namespace/key/value tuples.
   */
  export interface Schema$GuestAttributesValue {
    /**
     * The list of guest attributes entries.
     */
    items?: Schema$GuestAttributesEntry[];
  }
  /**
   * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
   */
  export interface Schema$Interval {
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    endTime?: string | null;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    startTime?: string | null;
  }
  /**
   * Response for ListAcceleratorTypes.
   */
  export interface Schema$ListAcceleratorTypesResponse {
    /**
     * The listed nodes.
     */
    acceleratorTypes?: Schema$AcceleratorType[];
    /**
     * The next page token or empty if none.
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
   * Response for ListNodes.
   */
  export interface Schema$ListNodesResponse {
    /**
     * The next page token or empty if none.
     */
    nextPageToken?: string | null;
    /**
     * The listed nodes.
     */
    nodes?: Schema$Node[];
    /**
     * Locations that could not be reached.
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
   * Response for ListQueuedResources.
   */
  export interface Schema$ListQueuedResourcesResponse {
    /**
     * The next page token or empty if none.
     */
    nextPageToken?: string | null;
    /**
     * The listed queued resources.
     */
    queuedResources?: Schema$QueuedResource[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response for ListReservations.
   */
  export interface Schema$ListReservationsResponse {
    /**
     * The next page token or empty if none.
     */
    nextPageToken?: string | null;
    /**
     * The listed reservations.
     */
    reservations?: Schema$Reservation[];
  }
  /**
   * Response for ListRuntimeVersions.
   */
  export interface Schema$ListRuntimeVersionsResponse {
    /**
     * The next page token or empty if none.
     */
    nextPageToken?: string | null;
    /**
     * The listed nodes.
     */
    runtimeVersions?: Schema$RuntimeVersion[];
    /**
     * Locations that could not be reached.
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
   * Parameters to specify for multi-node QueuedResource requests. This field must be populated in case of multi-node requests instead of node_id. It's an error to specify both node_id and multi_node_params.
   */
  export interface Schema$MultiNodeParams {
    /**
     * Required. Number of nodes with this spec. The system will attempt to provison "node_count" nodes as part of the request. This needs to be \> 1.
     */
    nodeCount?: number | null;
    /**
     * Prefix of node_ids in case of multi-node request Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. If node_count = 3 and node_id_prefix = "np", node ids of nodes created will be "np-0", "np-1", "np-2". If this field is not provided we use queued_resource_id as the node_id_prefix.
     */
    nodeIdPrefix?: string | null;
  }
  /**
   * Network related configurations.
   */
  export interface Schema$NetworkConfig {
    /**
     * Allows the TPU node to send and receive packets with non-matching destination or source IPs. This is required if you plan to use the TPU workers to forward routes.
     */
    canIpForward?: boolean | null;
    /**
     * Indicates that external IP addresses would be associated with the TPU workers. If set to false, the specified subnetwork or network should have Private Google Access enabled.
     */
    enableExternalIps?: boolean | null;
    /**
     * The name of the network for the TPU node. It must be a preexisting Google Compute Engine network. If none is provided, "default" will be used.
     */
    network?: string | null;
    /**
     * Optional. Specifies networking queue count for TPU VM instance's network interface.
     */
    queueCount?: number | null;
    /**
     * The name of the subnetwork for the TPU node. It must be a preexisting Google Compute Engine subnetwork. If none is provided, "default" will be used.
     */
    subnetwork?: string | null;
  }
  /**
   * A network endpoint over which a TPU worker can be reached.
   */
  export interface Schema$NetworkEndpoint {
    /**
     * The access config for the TPU worker.
     */
    accessConfig?: Schema$AccessConfig;
    /**
     * The internal IP address of this network endpoint.
     */
    ipAddress?: string | null;
    /**
     * The port of this network endpoint.
     */
    port?: number | null;
  }
  /**
   * A TPU instance.
   */
  export interface Schema$Node {
    /**
     * The AccleratorConfig for the TPU Node.
     */
    acceleratorConfig?: Schema$AcceleratorConfig;
    /**
     * The type of hardware accelerators associated with this node.
     */
    acceleratorType?: string | null;
    /**
     * Output only. The API version that created this Node.
     */
    apiVersion?: string | null;
    /**
     * Optional. Whether Autocheckpoint is enabled.
     */
    autocheckpointEnabled?: boolean | null;
    /**
     * Optional. Boot disk configuration.
     */
    bootDiskConfig?: Schema$BootDiskConfig;
    /**
     * The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.
     */
    cidrBlock?: string | null;
    /**
     * Output only. The time when the node was created.
     */
    createTime?: string | null;
    /**
     * The additional data disks for the Node.
     */
    dataDisks?: Schema$AttachedDisk[];
    /**
     * The user-supplied description of the TPU. Maximum of 512 characters.
     */
    description?: string | null;
    /**
     * The health status of the TPU node.
     */
    health?: string | null;
    /**
     * Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy.
     */
    healthDescription?: string | null;
    /**
     * Output only. The unique identifier for the TPU Node.
     */
    id?: string | null;
    /**
     * Resource labels to represent user-provided metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Output only. Whether the Node belongs to a Multislice group.
     */
    multisliceNode?: boolean | null;
    /**
     * Output only. Immutable. The name of the TPU.
     */
    name?: string | null;
    /**
     * Network configurations for the TPU node.
     */
    networkConfig?: Schema$NetworkConfig;
    /**
     * Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that runtime clients of the node reach out to the 0th entry in this map first.
     */
    networkEndpoints?: Schema$NetworkEndpoint[];
    /**
     * Output only. The qualified name of the QueuedResource that requested this Node.
     */
    queuedResource?: string | null;
    /**
     * Required. The runtime version running in the Node.
     */
    runtimeVersion?: string | null;
    /**
     * The scheduling options for this node.
     */
    schedulingConfig?: Schema$SchedulingConfig;
    /**
     * The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is specified, the default compute service account will be used.
     */
    serviceAccount?: Schema$ServiceAccount;
    /**
     * Shielded Instance options.
     */
    shieldedInstanceConfig?: Schema$ShieldedInstanceConfig;
    /**
     * Output only. The current state for the TPU Node.
     */
    state?: string | null;
    /**
     * Output only. The Symptoms that have occurred to the TPU Node.
     */
    symptoms?: Schema$Symptom[];
    /**
     * Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
     */
    tags?: string[] | null;
  }
  /**
   * Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
   */
  export interface Schema$NodeSpec {
    /**
     * Optional. Fields to specify in case of multi-node request.
     */
    multiNodeParams?: Schema$MultiNodeParams;
    /**
     * Required. The node.
     */
    node?: Schema$Node;
    /**
     * The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. This is only specified when requesting a single node. In case of multi-node requests, multi_node_params must be populated instead. It's an error to specify both node_id and multi_node_params.
     */
    nodeId?: string | null;
    /**
     * Required. The parent resource name.
     */
    parent?: string | null;
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
   * Further data for the provisioning state.
   */
  export interface Schema$ProvisioningData {}
  /**
   * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
   */
  export interface Schema$QueuedResource {
    /**
     * The BestEffort tier.
     */
    bestEffort?: Schema$BestEffort;
    /**
     * Output only. The time when the QueuedResource was created.
     */
    createTime?: string | null;
    /**
     * The Guaranteed tier.
     */
    guaranteed?: Schema$Guaranteed;
    /**
     * Output only. Immutable. The name of the QueuedResource.
     */
    name?: string | null;
    /**
     * The queueing policy of the QueuedRequest.
     */
    queueingPolicy?: Schema$QueueingPolicy;
    /**
     * Name of the reservation in which the resource should be provisioned. Format: projects/{project\}/locations/{zone\}/reservations/{reservation\}
     */
    reservationName?: string | null;
    /**
     * Optional. The Spot tier.
     */
    spot?: Schema$Spot;
    /**
     * Output only. State of the QueuedResource request.
     */
    state?: Schema$QueuedResourceState;
    /**
     * Defines a TPU resource.
     */
    tpu?: Schema$Tpu;
  }
  /**
   * QueuedResourceState defines the details of the QueuedResource request.
   */
  export interface Schema$QueuedResourceState {
    /**
     * Further data for the accepted state.
     */
    acceptedData?: Schema$AcceptedData;
    /**
     * Further data for the active state.
     */
    activeData?: Schema$ActiveData;
    /**
     * Further data for the creating state.
     */
    creatingData?: Schema$CreatingData;
    /**
     * Further data for the deleting state.
     */
    deletingData?: Schema$DeletingData;
    /**
     * Further data for the failed state.
     */
    failedData?: Schema$FailedData;
    /**
     * Further data for the provisioning state.
     */
    provisioningData?: Schema$ProvisioningData;
    /**
     * State of the QueuedResource request.
     */
    state?: string | null;
    /**
     * Output only. The initiator of the QueuedResources's current state. Used to indicate whether the SUSPENDING/SUSPENDED state was initiated by the user or the service.
     */
    stateInitiator?: string | null;
    /**
     * Further data for the suspended state.
     */
    suspendedData?: Schema$SuspendedData;
    /**
     * Further data for the suspending state.
     */
    suspendingData?: Schema$SuspendingData;
  }
  /**
   * Defines the policy of the QueuedRequest.
   */
  export interface Schema$QueueingPolicy {
    /**
     * A relative time after which resources may be created.
     */
    validAfterDuration?: string | null;
    /**
     * An absolute time at which resources may be created.
     */
    validAfterTime?: string | null;
    /**
     * An absolute time interval within which resources may be created.
     */
    validInterval?: Schema$Interval;
    /**
     * A relative time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed.
     */
    validUntilDuration?: string | null;
    /**
     * An absolute time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed.
     */
    validUntilTime?: string | null;
  }
  /**
   * A reservation describes the amount of a resource 'allotted' for a defined period of time.
   */
  export interface Schema$Reservation {
    /**
     * The reservation name with the format: projects/{projectID\}/locations/{location\}/reservations/{reservationID\}
     */
    name?: string | null;
    standard?: Schema$Standard;
  }
  /**
   * Request for ResetQueuedResource.
   */
  export interface Schema$ResetQueuedResourceRequest {}
  /**
   * A runtime version that a Node can be configured with.
   */
  export interface Schema$RuntimeVersion {
    /**
     * The resource name.
     */
    name?: string | null;
    /**
     * The runtime version.
     */
    version?: string | null;
  }
  /**
   * Sets the scheduling options for this node.
   */
  export interface Schema$SchedulingConfig {
    /**
     * Defines whether the node is preemptible.
     */
    preemptible?: boolean | null;
    /**
     * Whether the node is created under a reservation.
     */
    reserved?: boolean | null;
    /**
     * Optional. Defines whether the node is Spot VM.
     */
    spot?: boolean | null;
  }
  /**
   * A service account.
   */
  export interface Schema$ServiceAccount {
    /**
     * Email address of the service account. If empty, default Compute service account will be used.
     */
    email?: string | null;
    /**
     * The list of scopes to be made available for this service account. If empty, access to all Cloud APIs will be allowed.
     */
    scope?: string[] | null;
  }
  /**
   * The per-product per-project service identity for Cloud TPU service.
   */
  export interface Schema$ServiceIdentity {
    /**
     * The email address of the service identity.
     */
    email?: string | null;
  }
  /**
   * A set of Shielded Instance options.
   */
  export interface Schema$ShieldedInstanceConfig {
    /**
     * Defines whether the instance has Secure Boot enabled.
     */
    enableSecureBoot?: boolean | null;
  }
  /**
   * Request for SimulateMaintenanceEvent.
   */
  export interface Schema$SimulateMaintenanceEventRequest {
    /**
     * The 0-based worker ID. If it is empty, worker ID 0 will be selected for maintenance event simulation. A maintenance event will only be fired on the first specified worker ID. Future implementations may support firing on multiple workers.
     */
    workerIds?: string[] | null;
  }
  /**
   * Spot tier definition.
   */
  export interface Schema$Spot {}
  export interface Schema$Standard {
    capacityUnits?: string | null;
    /**
     * The start and end time of the reservation.
     */
    interval?: Schema$Interval;
    /**
     * The resource type of the reservation.
     */
    resourceType?: string | null;
    /**
     * The size of the reservation, in the units specified in the 'capacity_units' field.
     */
    size?: number | null;
    usage?: Schema$Usage;
  }
  /**
   * Request for StartNode.
   */
  export interface Schema$StartNodeRequest {}
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
   * Request for StopNode.
   */
  export interface Schema$StopNodeRequest {}
  /**
   * Further data for the suspended state.
   */
  export interface Schema$SuspendedData {}
  /**
   * Further data for the suspending state.
   */
  export interface Schema$SuspendingData {}
  /**
   * A Symptom instance.
   */
  export interface Schema$Symptom {
    /**
     * Timestamp when the Symptom is created.
     */
    createTime?: string | null;
    /**
     * Detailed information of the current Symptom.
     */
    details?: string | null;
    /**
     * Type of the Symptom.
     */
    symptomType?: string | null;
    /**
     * A string used to uniquely distinguish a worker within a TPU node.
     */
    workerId?: string | null;
  }
  /**
   * Details of the TPU resource(s) being requested.
   */
  export interface Schema$Tpu {
    /**
     * The TPU node(s) being requested.
     */
    nodeSpec?: Schema$NodeSpec[];
  }
  export interface Schema$Usage {
    /**
     * The real-time value of usage within the reservation, with the unit specified in field capacity_units.
     */
    total?: string | null;
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
    acceleratorTypes: Resource$Projects$Locations$Acceleratortypes;
    nodes: Resource$Projects$Locations$Nodes;
    operations: Resource$Projects$Locations$Operations;
    queuedResources: Resource$Projects$Locations$Queuedresources;
    reservations: Resource$Projects$Locations$Reservations;
    runtimeVersions: Resource$Projects$Locations$Runtimeversions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.acceleratorTypes = new Resource$Projects$Locations$Acceleratortypes(
        this.context
      );
      this.nodes = new Resource$Projects$Locations$Nodes(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.queuedResources = new Resource$Projects$Locations$Queuedresources(
        this.context
      );
      this.reservations = new Resource$Projects$Locations$Reservations(
        this.context
      );
      this.runtimeVersions = new Resource$Projects$Locations$Runtimeversions(
        this.context
      );
    }

    /**
     * Generates the Cloud TPU service identity for the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateServiceIdentity(
      params: Params$Resource$Projects$Locations$Generateserviceidentity,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateServiceIdentity(
      params?: Params$Resource$Projects$Locations$Generateserviceidentity,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateServiceIdentityResponse>;
    generateServiceIdentity(
      params: Params$Resource$Projects$Locations$Generateserviceidentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateServiceIdentity(
      params: Params$Resource$Projects$Locations$Generateserviceidentity,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateServiceIdentityResponse>,
      callback: BodyResponseCallback<Schema$GenerateServiceIdentityResponse>
    ): void;
    generateServiceIdentity(
      params: Params$Resource$Projects$Locations$Generateserviceidentity,
      callback: BodyResponseCallback<Schema$GenerateServiceIdentityResponse>
    ): void;
    generateServiceIdentity(
      callback: BodyResponseCallback<Schema$GenerateServiceIdentityResponse>
    ): void;
    generateServiceIdentity(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Generateserviceidentity
        | BodyResponseCallback<Schema$GenerateServiceIdentityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateServiceIdentityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateServiceIdentityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateServiceIdentityResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Generateserviceidentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Generateserviceidentity;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2alpha1/{+parent}:generateServiceIdentity'
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
        createAPIRequest<Schema$GenerateServiceIdentityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateServiceIdentityResponse>(
          parameters
        );
      }
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

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}/locations').replace(
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

  export interface Params$Resource$Projects$Locations$Generateserviceidentity
    extends StandardParameters {
    /**
     * Required. The parent resource name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateServiceIdentityRequest;
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

  export class Resource$Projects$Locations$Acceleratortypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets AcceleratorType.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Acceleratortypes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Acceleratortypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AcceleratorType>;
    get(
      params: Params$Resource$Projects$Locations$Acceleratortypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Acceleratortypes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AcceleratorType>,
      callback: BodyResponseCallback<Schema$AcceleratorType>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Acceleratortypes$Get,
      callback: BodyResponseCallback<Schema$AcceleratorType>
    ): void;
    get(callback: BodyResponseCallback<Schema$AcceleratorType>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Acceleratortypes$Get
        | BodyResponseCallback<Schema$AcceleratorType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AcceleratorType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AcceleratorType>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AcceleratorType> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Acceleratortypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Acceleratortypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AcceleratorType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AcceleratorType>(parameters);
      }
    }

    /**
     * Lists accelerator types supported by this API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Acceleratortypes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Acceleratortypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAcceleratorTypesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Acceleratortypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Acceleratortypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAcceleratorTypesResponse>,
      callback: BodyResponseCallback<Schema$ListAcceleratorTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Acceleratortypes$List,
      callback: BodyResponseCallback<Schema$ListAcceleratorTypesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAcceleratorTypesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Acceleratortypes$List
        | BodyResponseCallback<Schema$ListAcceleratorTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAcceleratorTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAcceleratorTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAcceleratorTypesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Acceleratortypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Acceleratortypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+parent}/acceleratorTypes').replace(
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
        createAPIRequest<Schema$ListAcceleratorTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAcceleratorTypesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Acceleratortypes$Get
    extends StandardParameters {
    /**
     * Required. The resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Acceleratortypes$List
    extends StandardParameters {
    /**
     * List filter.
     */
    filter?: string;
    /**
     * Sort results.
     */
    orderBy?: string;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Nodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a node.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Nodes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Nodes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Nodes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Nodes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Nodes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodes$Create
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
        {}) as Params$Resource$Projects$Locations$Nodes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nodes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+parent}/nodes').replace(
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
     * Deletes a node.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Nodes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Nodes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Nodes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Nodes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Nodes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodes$Delete
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
        {}) as Params$Resource$Projects$Locations$Nodes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nodes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets the details of a node.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Nodes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Nodes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Node>;
    get(
      params: Params$Resource$Projects$Locations$Nodes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Nodes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Node>,
      callback: BodyResponseCallback<Schema$Node>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Nodes$Get,
      callback: BodyResponseCallback<Schema$Node>
    ): void;
    get(callback: BodyResponseCallback<Schema$Node>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodes$Get
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
        {}) as Params$Resource$Projects$Locations$Nodes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nodes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieves the guest attributes for the node.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getGuestAttributes(
      params: Params$Resource$Projects$Locations$Nodes$Getguestattributes,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getGuestAttributes(
      params?: Params$Resource$Projects$Locations$Nodes$Getguestattributes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetGuestAttributesResponse>;
    getGuestAttributes(
      params: Params$Resource$Projects$Locations$Nodes$Getguestattributes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getGuestAttributes(
      params: Params$Resource$Projects$Locations$Nodes$Getguestattributes,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetGuestAttributesResponse>,
      callback: BodyResponseCallback<Schema$GetGuestAttributesResponse>
    ): void;
    getGuestAttributes(
      params: Params$Resource$Projects$Locations$Nodes$Getguestattributes,
      callback: BodyResponseCallback<Schema$GetGuestAttributesResponse>
    ): void;
    getGuestAttributes(
      callback: BodyResponseCallback<Schema$GetGuestAttributesResponse>
    ): void;
    getGuestAttributes(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodes$Getguestattributes
        | BodyResponseCallback<Schema$GetGuestAttributesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetGuestAttributesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetGuestAttributesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetGuestAttributesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Nodes$Getguestattributes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Nodes$Getguestattributes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}:getGuestAttributes').replace(
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
        createAPIRequest<Schema$GetGuestAttributesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetGuestAttributesResponse>(parameters);
      }
    }

    /**
     * Lists nodes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Nodes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Nodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNodesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Nodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Nodes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListNodesResponse>,
      callback: BodyResponseCallback<Schema$ListNodesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Nodes$List,
      callback: BodyResponseCallback<Schema$ListNodesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNodesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodes$List
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
        {}) as Params$Resource$Projects$Locations$Nodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nodes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+parent}/nodes').replace(
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

    /**
     * Updates the configurations of a node.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Nodes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Nodes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Nodes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Nodes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Nodes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodes$Patch
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
        {}) as Params$Resource$Projects$Locations$Nodes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nodes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Simulates a maintenance event.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    simulateMaintenanceEvent(
      params: Params$Resource$Projects$Locations$Nodes$Simulatemaintenanceevent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    simulateMaintenanceEvent(
      params?: Params$Resource$Projects$Locations$Nodes$Simulatemaintenanceevent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    simulateMaintenanceEvent(
      params: Params$Resource$Projects$Locations$Nodes$Simulatemaintenanceevent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    simulateMaintenanceEvent(
      params: Params$Resource$Projects$Locations$Nodes$Simulatemaintenanceevent,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    simulateMaintenanceEvent(
      params: Params$Resource$Projects$Locations$Nodes$Simulatemaintenanceevent,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    simulateMaintenanceEvent(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    simulateMaintenanceEvent(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodes$Simulatemaintenanceevent
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
        {}) as Params$Resource$Projects$Locations$Nodes$Simulatemaintenanceevent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Nodes$Simulatemaintenanceevent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2alpha1/{+name}:simulateMaintenanceEvent'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
     * Starts a node.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    start(
      params: Params$Resource$Projects$Locations$Nodes$Start,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    start(
      params?: Params$Resource$Projects$Locations$Nodes$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    start(
      params: Params$Resource$Projects$Locations$Nodes$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Nodes$Start,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Nodes$Start,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(callback: BodyResponseCallback<Schema$Operation>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodes$Start
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
        {}) as Params$Resource$Projects$Locations$Nodes$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nodes$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}:start').replace(
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
     * Stops a node. This operation is only available with single TPU nodes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    stop(
      params: Params$Resource$Projects$Locations$Nodes$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Projects$Locations$Nodes$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    stop(
      params: Params$Resource$Projects$Locations$Nodes$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Nodes$Stop,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Nodes$Stop,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(callback: BodyResponseCallback<Schema$Operation>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nodes$Stop
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
        {}) as Params$Resource$Projects$Locations$Nodes$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nodes$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}:stop').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Nodes$Create
    extends StandardParameters {
    /**
     * The unqualified resource name.
     */
    nodeId?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
    /**
     * Idempotent request UUID.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Node;
  }
  export interface Params$Resource$Projects$Locations$Nodes$Delete
    extends StandardParameters {
    /**
     * Required. The resource name.
     */
    name?: string;
    /**
     * Idempotent request UUID.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Nodes$Get
    extends StandardParameters {
    /**
     * Required. The resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Nodes$Getguestattributes
    extends StandardParameters {
    /**
     * Required. The resource name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetGuestAttributesRequest;
  }
  export interface Params$Resource$Projects$Locations$Nodes$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Nodes$Patch
    extends StandardParameters {
    /**
     * Output only. Immutable. The name of the TPU.
     */
    name?: string;
    /**
     * Required. Mask of fields from Node to update. Supported fields: [description, tags, labels, metadata, network_config.enable_external_ips].
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Node;
  }
  export interface Params$Resource$Projects$Locations$Nodes$Simulatemaintenanceevent
    extends StandardParameters {
    /**
     * Required. The resource name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SimulateMaintenanceEventRequest;
  }
  export interface Params$Resource$Projects$Locations$Nodes$Start
    extends StandardParameters {
    /**
     * Required. The resource name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartNodeRequest;
  }
  export interface Params$Resource$Projects$Locations$Nodes$Stop
    extends StandardParameters {
    /**
     * Required. The resource name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopNodeRequest;
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

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}:cancel').replace(
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

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}/operations').replace(
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

  export class Resource$Projects$Locations$Queuedresources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a QueuedResource TPU instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Queuedresources$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Queuedresources$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Queuedresources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Queuedresources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Queuedresources$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Queuedresources$Create
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
        {}) as Params$Resource$Projects$Locations$Queuedresources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Queuedresources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+parent}/queuedResources').replace(
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
     * Deletes a QueuedResource TPU instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Queuedresources$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Queuedresources$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Queuedresources$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Queuedresources$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Queuedresources$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Queuedresources$Delete
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
        {}) as Params$Resource$Projects$Locations$Queuedresources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Queuedresources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets details of a queued resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Queuedresources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Queuedresources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueuedResource>;
    get(
      params: Params$Resource$Projects$Locations$Queuedresources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Queuedresources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$QueuedResource>,
      callback: BodyResponseCallback<Schema$QueuedResource>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Queuedresources$Get,
      callback: BodyResponseCallback<Schema$QueuedResource>
    ): void;
    get(callback: BodyResponseCallback<Schema$QueuedResource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Queuedresources$Get
        | BodyResponseCallback<Schema$QueuedResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueuedResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueuedResource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$QueuedResource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Queuedresources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queuedresources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$QueuedResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueuedResource>(parameters);
      }
    }

    /**
     * Lists queued resources.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Queuedresources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Queuedresources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListQueuedResourcesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Queuedresources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Queuedresources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListQueuedResourcesResponse>,
      callback: BodyResponseCallback<Schema$ListQueuedResourcesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Queuedresources$List,
      callback: BodyResponseCallback<Schema$ListQueuedResourcesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListQueuedResourcesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Queuedresources$List
        | BodyResponseCallback<Schema$ListQueuedResourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListQueuedResourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListQueuedResourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListQueuedResourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Queuedresources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queuedresources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+parent}/queuedResources').replace(
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
        createAPIRequest<Schema$ListQueuedResourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListQueuedResourcesResponse>(parameters);
      }
    }

    /**
     * Resets a QueuedResource TPU instance
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reset(
      params: Params$Resource$Projects$Locations$Queuedresources$Reset,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reset(
      params?: Params$Resource$Projects$Locations$Queuedresources$Reset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    reset(
      params: Params$Resource$Projects$Locations$Queuedresources$Reset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Queuedresources$Reset,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Queuedresources$Reset,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(callback: BodyResponseCallback<Schema$Operation>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Queuedresources$Reset
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
        {}) as Params$Resource$Projects$Locations$Queuedresources$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queuedresources$Reset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}:reset').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Queuedresources$Create
    extends StandardParameters {
    /**
     * Required. The parent resource name.
     */
    parent?: string;
    /**
     * The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format.
     */
    queuedResourceId?: string;
    /**
     * Idempotent request UUID.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$QueuedResource;
  }
  export interface Params$Resource$Projects$Locations$Queuedresources$Delete
    extends StandardParameters {
    /**
     * If set to true, all running nodes belonging to this queued resource will be deleted first and then the queued resource will be deleted. Otherwise (i.e. force=false), the queued resource will only be deleted if its nodes have already been deleted or the queued resource is in the ACCEPTED, FAILED, or SUSPENDED state.
     */
    force?: boolean;
    /**
     * Required. The resource name.
     */
    name?: string;
    /**
     * Idempotent request UUID.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Queuedresources$Get
    extends StandardParameters {
    /**
     * Required. The resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Queuedresources$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Queuedresources$Reset
    extends StandardParameters {
    /**
     * Required. The name of the queued resource.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetQueuedResourceRequest;
  }

  export class Resource$Projects$Locations$Reservations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the reservations for the given project in the given location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Reservations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReservationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReservationsResponse>,
      callback: BodyResponseCallback<Schema$ListReservationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      callback: BodyResponseCallback<Schema$ListReservationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReservationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$List
        | BodyResponseCallback<Schema$ListReservationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReservationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReservationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReservationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+parent}/reservations').replace(
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
        createAPIRequest<Schema$ListReservationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReservationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reservations$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent for reservations.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Runtimeversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a runtime version.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Runtimeversions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Runtimeversions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RuntimeVersion>;
    get(
      params: Params$Resource$Projects$Locations$Runtimeversions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Runtimeversions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RuntimeVersion>,
      callback: BodyResponseCallback<Schema$RuntimeVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Runtimeversions$Get,
      callback: BodyResponseCallback<Schema$RuntimeVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$RuntimeVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimeversions$Get
        | BodyResponseCallback<Schema$RuntimeVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RuntimeVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RuntimeVersion>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RuntimeVersion> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Runtimeversions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimeversions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RuntimeVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RuntimeVersion>(parameters);
      }
    }

    /**
     * Lists runtime versions supported by this API.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Runtimeversions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Runtimeversions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRuntimeVersionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Runtimeversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Runtimeversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRuntimeVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListRuntimeVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Runtimeversions$List,
      callback: BodyResponseCallback<Schema$ListRuntimeVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListRuntimeVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimeversions$List
        | BodyResponseCallback<Schema$ListRuntimeVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRuntimeVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRuntimeVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRuntimeVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Runtimeversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimeversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2alpha1/{+parent}/runtimeVersions').replace(
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
        createAPIRequest<Schema$ListRuntimeVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRuntimeVersionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Runtimeversions$Get
    extends StandardParameters {
    /**
     * Required. The resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Runtimeversions$List
    extends StandardParameters {
    /**
     * List filter.
     */
    filter?: string;
    /**
     * Sort results.
     */
    orderBy?: string;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
  }
}
