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
/* eslint-disable @typescript-eslint/class-name-casing */
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

export namespace baremetalsolution_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Bare Metal Solution API
   *
   * Provides ways to manage Bare Metal Solution hardware installed in a regional extension located near a Google Cloud data center.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const baremetalsolution = google.baremetalsolution('v2');
   * ```
   */
  export class Baremetalsolution {
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
   * Represents an 'access point' for the share.
   */
  export interface Schema$AllowedClient {
    /**
     * Allow dev flag. Which controls whether to allow creation of devices.
     */
    allowDev?: boolean | null;
    /**
     * The subnet of IP addresses permitted to access the share.
     */
    allowedClientsCidr?: string | null;
    /**
     * Allow the setuid flag.
     */
    allowSuid?: boolean | null;
    /**
     * Mount permissions.
     */
    mountPermissions?: string | null;
    /**
     * The network the access point sits on.
     */
    network?: string | null;
    /**
     * Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication.
     */
    noRootSquash?: boolean | null;
    /**
     * The IP address of the share on this network.
     */
    shareIp?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * A server.
   */
  export interface Schema$Instance {
    /**
     * Output only. Create a time stamp.
     */
    createTime?: string | null;
    /**
     * True if you enable hyperthreading for the server, otherwise false. The default value is false.
     */
    hyperthreadingEnabled?: boolean | null;
    /**
     * An identifier for the `Instance`, generated by the backend.
     */
    id?: string | null;
    /**
     * True if the interactive serial console feature is enabled for the instance, false otherwise. The default value is false.
     */
    interactiveSerialConsoleEnabled?: boolean | null;
    /**
     * Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * List of LUNs associated with this server.
     */
    luns?: Schema$Lun[];
    /**
     * The server type. [Available server types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)
     */
    machineType?: string | null;
    /**
     * Output only. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    name?: string | null;
    /**
     * List of networks associated with this server.
     */
    networks?: Schema$Network[];
    /**
     * The state of the server.
     */
    state?: string | null;
    /**
     * Output only. Update a time stamp.
     */
    updateTime?: string | null;
  }
  /**
   * Configuration parameters for a new instance.
   */
  export interface Schema$InstanceConfig {
    /**
     * Client network address.
     */
    clientNetwork?: Schema$NetworkAddress;
    /**
     * Whether the instance should be provisioned with Hyperthreading enabled.
     */
    hyperthreading?: boolean | null;
    /**
     * A transient unique identifier to idenfity an instance within an ProvisioningConfig request.
     */
    id?: string | null;
    /**
     * Instance type. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)
     */
    instanceType?: string | null;
    /**
     * Output only. The name of the instance config.
     */
    name?: string | null;
    /**
     * OS image to initialize the instance. [Available images](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)
     */
    osImage?: string | null;
    /**
     * Private network address, if any.
     */
    privateNetwork?: Schema$NetworkAddress;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team .
     */
    userNote?: string | null;
  }
  /**
   * A resource budget.
   */
  export interface Schema$InstanceQuota {
    /**
     * Number of machines than can be created for the given location and instance_type.
     */
    availableMachineCount?: number | null;
    /**
     * Instance type.
     */
    instanceType?: string | null;
    /**
     * Location where the quota applies.
     */
    location?: string | null;
    /**
     * Output only. The name of the instance quota.
     */
    name?: string | null;
  }
  /**
   * A GCP vlan attachment.
   */
  export interface Schema$IntakeVlanAttachment {
    /**
     * Identifier of the VLAN attachment.
     */
    id?: string | null;
    /**
     * Attachment pairing key.
     */
    pairingKey?: string | null;
  }
  /**
   * Response message for the list of servers.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * The list of servers.
     */
    instances?: Schema$Instance[];
    /**
     * A token identifying a page of results from the server.
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
   * Response message containing the list of storage volume luns.
   */
  export interface Schema$ListLunsResponse {
    /**
     * The list of luns.
     */
    luns?: Schema$Lun[];
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message containing the list of networks.
   */
  export interface Schema$ListNetworksResponse {
    /**
     * The list of networks.
     */
    networks?: Schema$Network[];
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response with Networks with IPs
   */
  export interface Schema$ListNetworkUsageResponse {
    /**
     * Networks with IPs.
     */
    networks?: Schema$NetworkUsage[];
  }
  /**
   * Response message containing the list of NFS shares.
   */
  export interface Schema$ListNfsSharesResponse {
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string | null;
    /**
     * The list of NFS shares.
     */
    nfsShares?: Schema$NfsShare[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for the list of provisioning quotas.
   */
  export interface Schema$ListProvisioningQuotasResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The provisioning quotas registered in this project.
     */
    provisioningQuotas?: Schema$ProvisioningQuota[];
  }
  /**
   * Response message containing the list of snapshot schedule policies.
   */
  export interface Schema$ListSnapshotSchedulePoliciesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The snapshot schedule policies registered in this project.
     */
    snapshotSchedulePolicies?: Schema$SnapshotSchedulePolicy[];
  }
  /**
   * Response message containing the list of storage volume snapshots.
   */
  export interface Schema$ListVolumeSnapshotsResponse {
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * The list of storage volumes.
     */
    volumeSnapshots?: Schema$VolumeSnapshot[];
  }
  /**
   * Response message containing the list of storage volumes.
   */
  export interface Schema$ListVolumesResponse {
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * The list of storage volumes.
     */
    volumes?: Schema$Volume[];
  }
  /**
   * A resource that represents Google Cloud Platform location.
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
   * A storage volume logical unit number (LUN).
   */
  export interface Schema$Lun {
    /**
     * Display if this LUN is a boot LUN.
     */
    bootLun?: boolean | null;
    /**
     * An identifier for the LUN, generated by the backend.
     */
    id?: string | null;
    /**
     * The LUN multiprotocol type ensures the characteristics of the LUN are optimized for each operating system.
     */
    multiprotocolType?: string | null;
    /**
     * Output only. The name of the LUN.
     */
    name?: string | null;
    /**
     * Display if this LUN can be shared between multiple physical servers.
     */
    shareable?: boolean | null;
    /**
     * The size of this LUN, in gigabytes.
     */
    sizeGb?: string | null;
    /**
     * The state of this storage volume.
     */
    state?: string | null;
    /**
     * The storage type for this LUN.
     */
    storageType?: string | null;
    /**
     * Display the storage volume for this LUN.
     */
    storageVolume?: string | null;
    /**
     * The WWID for this LUN.
     */
    wwid?: string | null;
  }
  /**
   * A LUN(Logical Unit Number) range.
   */
  export interface Schema$LunRange {
    /**
     * Number of LUNs to create.
     */
    quantity?: number | null;
    /**
     * The requested size of each LUN, in GB.
     */
    sizeGb?: number | null;
  }
  /**
   * A Network.
   */
  export interface Schema$Network {
    /**
     * The cidr of the Network.
     */
    cidr?: string | null;
    /**
     * An identifier for the `Network`, generated by the backend.
     */
    id?: string | null;
    /**
     * IP address configured.
     */
    ipAddress?: string | null;
    /**
     * Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * List of physical interfaces.
     */
    macAddress?: string[] | null;
    /**
     * Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project\}/locations/{location\}/networks/{network\}`
     */
    name?: string | null;
    /**
     * IP range for reserved for services (e.g. NFS).
     */
    servicesCidr?: string | null;
    /**
     * The Network state.
     */
    state?: string | null;
    /**
     * The type of this network.
     */
    type?: string | null;
    /**
     * The vlan id of the Network.
     */
    vlanId?: string | null;
    /**
     * The vrf for the Network.
     */
    vrf?: Schema$VRF;
  }
  /**
   * A network.
   */
  export interface Schema$NetworkAddress {
    /**
     * IPv4 address to be assigned to the server.
     */
    address?: string | null;
    /**
     * Name of the existing network to use.
     */
    existingNetworkId?: string | null;
    /**
     * Id of the network to use, within the same ProvisioningConfig request.
     */
    networkId?: string | null;
  }
  /**
   * Configuration parameters for a new network.
   */
  export interface Schema$NetworkConfig {
    /**
     * Interconnect bandwidth. Set only when type is CLIENT.
     */
    bandwidth?: string | null;
    /**
     * CIDR range of the network.
     */
    cidr?: string | null;
    /**
     * A transient unique identifier to identify a volume within an ProvisioningConfig request.
     */
    id?: string | null;
    /**
     * Output only. The name of the network config.
     */
    name?: string | null;
    /**
     * Service CIDR, if any.
     */
    serviceCidr?: string | null;
    /**
     * The type of this network, either Client or Private.
     */
    type?: string | null;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617).
     */
    userNote?: string | null;
    /**
     * List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan).
     */
    vlanAttachments?: Schema$IntakeVlanAttachment[];
  }
  /**
   * Network with all used IP addresses.
   */
  export interface Schema$NetworkUsage {
    /**
     * Network.
     */
    network?: Schema$Network;
    /**
     * All used IP addresses in this network.
     */
    usedIps?: string[] | null;
  }
  /**
   * A NFS export entry.
   */
  export interface Schema$NfsExport {
    /**
     * Allow dev flag in NfsShare AllowedClientsRequest.
     */
    allowDev?: boolean | null;
    /**
     * Allow the setuid flag.
     */
    allowSuid?: boolean | null;
    /**
     * A CIDR range.
     */
    cidr?: string | null;
    /**
     * Either a single machine, identified by an ID, or a comma-separated list of machine IDs.
     */
    machineId?: string | null;
    /**
     * Network to use to publish the export.
     */
    networkId?: string | null;
    /**
     * Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication.
     */
    noRootSquash?: boolean | null;
    /**
     * Export permissions.
     */
    permissions?: string | null;
  }
  /**
   * An NFS share.
   */
  export interface Schema$NfsShare {
    /**
     * List of allowed access points.
     */
    allowedClients?: Schema$AllowedClient[];
    /**
     * Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The name of the NFS share.
     */
    name?: string | null;
    /**
     * Output only. An identifier for the NFS share, generated by the backend.
     */
    nfsShareId?: string | null;
    /**
     * The state of the NFS share.
     */
    state?: string | null;
    /**
     * The volume containing the share.
     */
    volume?: string | null;
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
   * A provisioning configuration.
   */
  export interface Schema$ProvisioningConfig {
    /**
     * A service account to enable customers to access instance credentials upon handover.
     */
    handoverServiceAccount?: string | null;
    /**
     * Instances to be created.
     */
    instances?: Schema$InstanceConfig[];
    /**
     * Output only. The name of the provisioning config.
     */
    name?: string | null;
    /**
     * Networks to be created.
     */
    networks?: Schema$NetworkConfig[];
    /**
     * A generated buganizer id to track provisioning request.
     */
    ticketId?: string | null;
    /**
     * Volumes to be created.
     */
    volumes?: Schema$VolumeConfig[];
  }
  /**
   * A provisioning quota for a given project.
   */
  export interface Schema$ProvisioningQuota {
    /**
     * The asset type of this provisioning quota.
     */
    assetType?: string | null;
    /**
     * The available count of the provisioning quota.
     */
    availableCount?: number | null;
    /**
     * The gcp service of the provisioning quota.
     */
    gcpService?: string | null;
    /**
     * Instance quota.
     */
    instanceQuota?: Schema$InstanceQuota;
    /**
     * The specific location of the provisioining quota.
     */
    location?: string | null;
    /**
     * Output only. The name of the provisioning quota.
     */
    name?: string | null;
  }
  /**
   * QOS policy parameters.
   */
  export interface Schema$QosPolicy {
    /**
     * The bandwidth permitted by the QOS policy, in gbps.
     */
    bandwidthGbps?: number | null;
  }
  /**
   * Message requesting to reset a server.
   */
  export interface Schema$ResetInstanceRequest {}
  /**
   * Message for restoring a volume snapshot.
   */
  export interface Schema$RestoreVolumeSnapshotRequest {}
  /**
   * A snapshot schedule.
   */
  export interface Schema$Schedule {
    /**
     * A crontab-like specification that the schedule uses to take snapshots.
     */
    crontabSpec?: string | null;
    /**
     * A list of snapshot names created in this schedule.
     */
    prefix?: string | null;
    /**
     * The maximum number of snapshots to retain in this schedule.
     */
    retentionCount?: number | null;
  }
  /**
   * Details about snapshot space reservation and usage on the storage volume.
   */
  export interface Schema$SnapshotReservationDetail {
    /**
     * The space on this storage volume reserved for snapshots, shown in GiB.
     */
    reservedSpaceGib?: string | null;
    /**
     * The amount, in GiB, of available space in this storage volume's reserved snapshot space.
     */
    reservedSpaceRemainingGib?: string | null;
    /**
     * The percent of snapshot space on this storage volume actually being used by the snapshot copies. This value might be higher than 100% if the snapshot copies have overflowed into the data portion of the storage volume.
     */
    reservedSpaceUsedPercent?: number | null;
  }
  /**
   * A snapshot schedule policy.
   */
  export interface Schema$SnapshotSchedulePolicy {
    /**
     * The description of the snapshot schedule policy.
     */
    description?: string | null;
    /**
     * An identifier for the snapshot schedule policy, generated by the backend.
     */
    id?: string | null;
    /**
     * Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The name of the snapshot schedule policy.
     */
    name?: string | null;
    /**
     * The snapshot schedules contained in this policy. You can specify a maximum of 5 schedules.
     */
    schedules?: Schema$Schedule[];
    /**
     * The state of the snapshot schedule policy.
     */
    state?: string | null;
  }
  /**
   * Message requesting to start a server.
   */
  export interface Schema$StartInstanceRequest {}
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
   * Request for SubmitProvisioningConfig.
   */
  export interface Schema$SubmitProvisioningConfigRequest {
    /**
     * Optional. Email provided to send a confirmation with provisioning config to.
     */
    email?: string | null;
    /**
     * Required. The ProvisioningConfig to create.
     */
    provisioningConfig?: Schema$ProvisioningConfig;
  }
  /**
   * Response for SubmitProvisioningConfig.
   */
  export interface Schema$SubmitProvisioningConfigResponse {
    /**
     * The submitted provisioning config.
     */
    provisioningConfig?: Schema$ProvisioningConfig;
  }
  /**
   * VLAN attachment details.
   */
  export interface Schema$VlanAttachment {
    /**
     * The peer IP of the attachment.
     */
    peerIp?: string | null;
    /**
     * The peer vlan ID of the attachment.
     */
    peerVlanId?: string | null;
    /**
     * The router IP of the attachment.
     */
    routerIp?: string | null;
  }
  /**
   * A storage volume.
   */
  export interface Schema$Volume {
    /**
     * The size, in GiB, that this storage volume has expanded as a result of an auto grow policy. In the absence of auto-grow, the value is 0.
     */
    autoGrownSizeGib?: string | null;
    /**
     * The current size of this storage volume, in GiB, including space reserved for snapshots. This size might be different than the requested size if the storage volume has been configured with auto grow or auto shrink.
     */
    currentSizeGib?: string | null;
    /**
     * An identifier for the `Volume`, generated by the backend.
     */
    id?: string | null;
    /**
     * Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project\}/locations/{location\}/volumes/{volume\}`
     */
    name?: string | null;
    /**
     * The space remaining in the storage volume for new LUNs, in GiB, excluding space reserved for snapshots.
     */
    remainingSpaceGib?: string | null;
    /**
     * The requested size of this storage volume, in GiB.
     */
    requestedSizeGib?: string | null;
    /**
     * The behavior to use when snapshot reserved space is full.
     */
    snapshotAutoDeleteBehavior?: string | null;
    /**
     * Details about snapshot space reservation and usage on the storage volume.
     */
    snapshotReservationDetail?: Schema$SnapshotReservationDetail;
    /**
     * The name of the snapshot schedule policy in use for this volume, if any.
     */
    snapshotSchedulePolicy?: string | null;
    /**
     * The state of this storage volume.
     */
    state?: string | null;
    /**
     * The storage type for this volume.
     */
    storageType?: string | null;
  }
  /**
   * Configuration parameters for a new volume.
   */
  export interface Schema$VolumeConfig {
    /**
     * A transient unique identifier to identify a volume within an ProvisioningConfig request.
     */
    id?: string | null;
    /**
     * LUN ranges to be configured. Set only when protocol is PROTOCOL_FC.
     */
    lunRanges?: Schema$LunRange[];
    /**
     * Machine ids connected to this volume. Set only when protocol is PROTOCOL_FC.
     */
    machineIds?: string[] | null;
    /**
     * Output only. The name of the volume config.
     */
    name?: string | null;
    /**
     * NFS exports. Set only when protocol is PROTOCOL_NFS.
     */
    nfsExports?: Schema$NfsExport[];
    /**
     * Volume protocol.
     */
    protocol?: string | null;
    /**
     * The requested size of this volume, in GB.
     */
    sizeGb?: number | null;
    /**
     * Whether snapshots should be enabled.
     */
    snapshotsEnabled?: boolean | null;
    /**
     * The type of this Volume.
     */
    type?: string | null;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617).
     */
    userNote?: string | null;
  }
  /**
   * Snapshot registered for a given storage volume.
   */
  export interface Schema$VolumeSnapshot {
    /**
     * Output only. The creation time of the storage volume snapshot.
     */
    createTime?: string | null;
    /**
     * The description of the storage volume snapshot.
     */
    description?: string | null;
    /**
     * An identifier for the snapshot, generated by the backend.
     */
    id?: string | null;
    /**
     * Output only. The name of the storage volume snapshot.
     */
    name?: string | null;
    /**
     * The size of the storage volume snapshot, in bytes.
     */
    sizeBytes?: string | null;
    /**
     * The storage volume this snapshot belongs to.
     */
    storageVolume?: string | null;
  }
  /**
   * A network VRF.
   */
  export interface Schema$VRF {
    /**
     * The name of the VRF.
     */
    name?: string | null;
    /**
     * The QOS policy applied to this VRF.
     */
    qosPolicy?: Schema$QosPolicy;
    /**
     * The possible state of VRF.
     */
    state?: string | null;
    /**
     * The list of VLAN attachments for the VRF.
     */
    vlanAttachments?: Schema$VlanAttachment[];
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
    instances: Resource$Projects$Locations$Instances;
    networks: Resource$Projects$Locations$Networks;
    nfsShares: Resource$Projects$Locations$Nfsshares;
    provisioningConfigs: Resource$Projects$Locations$Provisioningconfigs;
    provisioningQuotas: Resource$Projects$Locations$Provisioningquotas;
    snapshotSchedulePolicies: Resource$Projects$Locations$Snapshotschedulepolicies;
    volumes: Resource$Projects$Locations$Volumes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Locations$Instances(this.context);
      this.networks = new Resource$Projects$Locations$Networks(this.context);
      this.nfsShares = new Resource$Projects$Locations$Nfsshares(this.context);
      this.provisioningConfigs =
        new Resource$Projects$Locations$Provisioningconfigs(this.context);
      this.provisioningQuotas =
        new Resource$Projects$Locations$Provisioningquotas(this.context);
      this.snapshotSchedulePolicies =
        new Resource$Projects$Locations$Snapshotschedulepolicies(this.context);
      this.volumes = new Resource$Projects$Locations$Volumes(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.get({
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

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.list({
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in [AIP-160](https://google.aip.dev/160).
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

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/locations').replace(
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
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in [AIP-160](https://google.aip.dev/160).
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

  export class Resource$Projects$Locations$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get details about a single server.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.instances.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "hyperthreadingEnabled": false,
     *   //   "id": "my_id",
     *   //   "interactiveSerialConsoleEnabled": false,
     *   //   "labels": {},
     *   //   "luns": [],
     *   //   "machineType": "my_machineType",
     *   //   "name": "my_name",
     *   //   "networks": [],
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Instances$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Instance>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(callback: BodyResponseCallback<Schema$Instance>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Get
        | BodyResponseCallback<Schema$Instance>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Instance>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Instance>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Instance> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Instance>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }

    /**
     * List servers in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.instances.list({
     *     // List filter.
     *     filter: 'placeholder-value',
     *     // Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results from the server.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListInstancesRequest.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "instances": [],
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
      params: Params$Resource$Projects$Locations$Instances$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Instances$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInstancesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$List
        | BodyResponseCallback<Schema$ListInstancesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListInstancesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListInstancesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/instances').replace(
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
        createAPIRequest<Schema$ListInstancesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListInstancesResponse>(parameters);
      }
    }

    /**
     * Update details of a single server.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.instances.patch({
     *     // Output only. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project\}/locations/{location\}/instances/{instance\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *     // The list of fields to update. The only currently supported fields are: `labels`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "hyperthreadingEnabled": false,
     *       //   "id": "my_id",
     *       //   "interactiveSerialConsoleEnabled": false,
     *       //   "labels": {},
     *       //   "luns": [],
     *       //   "machineType": "my_machineType",
     *       //   "name": "my_name",
     *       //   "networks": [],
     *       //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Instances$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Instances$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Patch
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
        {}) as Params$Resource$Projects$Locations$Instances$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.instances.reset({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
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
    reset(
      params: Params$Resource$Projects$Locations$Instances$Reset,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reset(
      params?: Params$Resource$Projects$Locations$Instances$Reset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    reset(
      params: Params$Resource$Projects$Locations$Instances$Reset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Instances$Reset,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Instances$Reset,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(callback: BodyResponseCallback<Schema$Operation>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Reset
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
        {}) as Params$Resource$Projects$Locations$Instances$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Reset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:reset').replace(/([^:]\/)\/+/g, '$1'),
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
     * Starts a server that was shutdown.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.instances.start({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
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
    start(
      params: Params$Resource$Projects$Locations$Instances$Start,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    start(
      params?: Params$Resource$Projects$Locations$Instances$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    start(
      params: Params$Resource$Projects$Locations$Instances$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Instances$Start,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Instances$Start,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(callback: BodyResponseCallback<Schema$Operation>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Start
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
        {}) as Params$Resource$Projects$Locations$Instances$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:start').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Instances$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$List
    extends StandardParameters {
    /**
     * List filter.
     */
    filter?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results from the server.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListInstancesRequest.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project\}/locations/{location\}/instances/{instance\}`
     */
    name?: string;
    /**
     * The list of fields to update. The only currently supported fields are: `labels`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }
  export interface Params$Resource$Projects$Locations$Instances$Reset
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Start
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartInstanceRequest;
  }

  export class Resource$Projects$Locations$Networks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get details of a single network.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.networks.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/networks/my-network',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cidr": "my_cidr",
     *   //   "id": "my_id",
     *   //   "ipAddress": "my_ipAddress",
     *   //   "labels": {},
     *   //   "macAddress": [],
     *   //   "name": "my_name",
     *   //   "servicesCidr": "my_servicesCidr",
     *   //   "state": "my_state",
     *   //   "type": "my_type",
     *   //   "vlanId": "my_vlanId",
     *   //   "vrf": {}
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
      params: Params$Resource$Projects$Locations$Networks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Networks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Network>;
    get(
      params: Params$Resource$Projects$Locations$Networks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Network>,
      callback: BodyResponseCallback<Schema$Network>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networks$Get,
      callback: BodyResponseCallback<Schema$Network>
    ): void;
    get(callback: BodyResponseCallback<Schema$Network>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networks$Get
        | BodyResponseCallback<Schema$Network>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Network>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Network>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Network> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Networks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Network>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Network>(parameters);
      }
    }

    /**
     * List network in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.networks.list({
     *     // List filter.
     *     filter: 'placeholder-value',
     *     // Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results from the server.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListNetworksRequest.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "networks": [],
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
      params: Params$Resource$Projects$Locations$Networks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Networks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNetworksResponse>;
    list(
      params: Params$Resource$Projects$Locations$Networks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNetworksResponse>,
      callback: BodyResponseCallback<Schema$ListNetworksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networks$List,
      callback: BodyResponseCallback<Schema$ListNetworksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNetworksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networks$List
        | BodyResponseCallback<Schema$ListNetworksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNetworksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNetworksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNetworksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Networks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/networks').replace(
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
        createAPIRequest<Schema$ListNetworksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNetworksResponse>(parameters);
      }
    }

    /**
     * List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.networks.listNetworkUsage({
     *       // Required. Parent value (project and location).
     *       location: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "networks": []
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
    listNetworkUsage(
      params: Params$Resource$Projects$Locations$Networks$Listnetworkusage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listNetworkUsage(
      params?: Params$Resource$Projects$Locations$Networks$Listnetworkusage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNetworkUsageResponse>;
    listNetworkUsage(
      params: Params$Resource$Projects$Locations$Networks$Listnetworkusage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listNetworkUsage(
      params: Params$Resource$Projects$Locations$Networks$Listnetworkusage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNetworkUsageResponse>,
      callback: BodyResponseCallback<Schema$ListNetworkUsageResponse>
    ): void;
    listNetworkUsage(
      params: Params$Resource$Projects$Locations$Networks$Listnetworkusage,
      callback: BodyResponseCallback<Schema$ListNetworkUsageResponse>
    ): void;
    listNetworkUsage(
      callback: BodyResponseCallback<Schema$ListNetworkUsageResponse>
    ): void;
    listNetworkUsage(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networks$Listnetworkusage
        | BodyResponseCallback<Schema$ListNetworkUsageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNetworkUsageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNetworkUsageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNetworkUsageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networks$Listnetworkusage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networks$Listnetworkusage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+location}/networks:listNetworkUsage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['location'],
        pathParams: ['location'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListNetworkUsageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNetworkUsageResponse>(parameters);
      }
    }

    /**
     * Update details of a single network.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.networks.patch({
     *     // Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project\}/locations/{location\}/networks/{network\}`
     *     name: 'projects/my-project/locations/my-location/networks/my-network',
     *     // The list of fields to update. The only currently supported fields are: `labels`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cidr": "my_cidr",
     *       //   "id": "my_id",
     *       //   "ipAddress": "my_ipAddress",
     *       //   "labels": {},
     *       //   "macAddress": [],
     *       //   "name": "my_name",
     *       //   "servicesCidr": "my_servicesCidr",
     *       //   "state": "my_state",
     *       //   "type": "my_type",
     *       //   "vlanId": "my_vlanId",
     *       //   "vrf": {}
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
      params: Params$Resource$Projects$Locations$Networks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Networks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Networks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Networks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Networks$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networks$Patch
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
        {}) as Params$Resource$Projects$Locations$Networks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Networks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Networks$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Networks$List
    extends StandardParameters {
    /**
     * List filter.
     */
    filter?: string;
    /**
     * Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results from the server.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListNetworksRequest.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Networks$Listnetworkusage
    extends StandardParameters {
    /**
     * Required. Parent value (project and location).
     */
    location?: string;
  }
  export interface Params$Resource$Projects$Locations$Networks$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project\}/locations/{location\}/networks/{network\}`
     */
    name?: string;
    /**
     * The list of fields to update. The only currently supported fields are: `labels`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Network;
  }

  export class Resource$Projects$Locations$Nfsshares {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get details of a single NFS share.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.nfsShares.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/nfsShares/my-nfsShare',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowedClients": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "nfsShareId": "my_nfsShareId",
     *   //   "state": "my_state",
     *   //   "volume": "my_volume"
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
      params: Params$Resource$Projects$Locations$Nfsshares$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Nfsshares$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NfsShare>;
    get(
      params: Params$Resource$Projects$Locations$Nfsshares$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Nfsshares$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NfsShare>,
      callback: BodyResponseCallback<Schema$NfsShare>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Nfsshares$Get,
      callback: BodyResponseCallback<Schema$NfsShare>
    ): void;
    get(callback: BodyResponseCallback<Schema$NfsShare>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nfsshares$Get
        | BodyResponseCallback<Schema$NfsShare>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NfsShare>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NfsShare>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NfsShare> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Nfsshares$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nfsshares$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$NfsShare>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NfsShare>(parameters);
      }
    }

    /**
     * List NFS shares.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.nfsShares.list({
     *     // List filter.
     *     filter: 'placeholder-value',
     *     // Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results from the server.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListNfsSharesRequest.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "nfsShares": [],
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
      params: Params$Resource$Projects$Locations$Nfsshares$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Nfsshares$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNfsSharesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Nfsshares$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Nfsshares$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNfsSharesResponse>,
      callback: BodyResponseCallback<Schema$ListNfsSharesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Nfsshares$List,
      callback: BodyResponseCallback<Schema$ListNfsSharesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNfsSharesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nfsshares$List
        | BodyResponseCallback<Schema$ListNfsSharesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNfsSharesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNfsSharesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNfsSharesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Nfsshares$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nfsshares$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/nfsShares').replace(
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
        createAPIRequest<Schema$ListNfsSharesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNfsSharesResponse>(parameters);
      }
    }

    /**
     * Update details of a single NFS share.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.nfsShares.patch({
     *     // Output only. The name of the NFS share.
     *     name: 'projects/my-project/locations/my-location/nfsShares/my-nfsShare',
     *     // The list of fields to update. The only currently supported fields are: `labels`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowedClients": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "nfsShareId": "my_nfsShareId",
     *       //   "state": "my_state",
     *       //   "volume": "my_volume"
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
      params: Params$Resource$Projects$Locations$Nfsshares$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Nfsshares$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Nfsshares$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Nfsshares$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Nfsshares$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Nfsshares$Patch
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
        {}) as Params$Resource$Projects$Locations$Nfsshares$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Nfsshares$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Nfsshares$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Nfsshares$List
    extends StandardParameters {
    /**
     * List filter.
     */
    filter?: string;
    /**
     * Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results from the server.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListNfsSharesRequest.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Nfsshares$Patch
    extends StandardParameters {
    /**
     * Output only. The name of the NFS share.
     */
    name?: string;
    /**
     * The list of fields to update. The only currently supported fields are: `labels`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NfsShare;
  }

  export class Resource$Projects$Locations$Provisioningconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Submit a provisiong configuration for a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.provisioningConfigs.submit({
     *       // Required. The parent project and location containing the ProvisioningConfig.
     *       parent: 'projects/my-project/locations/my-location',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "email": "my_email",
     *         //   "provisioningConfig": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "provisioningConfig": {}
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
    submit(
      params: Params$Resource$Projects$Locations$Provisioningconfigs$Submit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    submit(
      params?: Params$Resource$Projects$Locations$Provisioningconfigs$Submit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubmitProvisioningConfigResponse>;
    submit(
      params: Params$Resource$Projects$Locations$Provisioningconfigs$Submit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    submit(
      params: Params$Resource$Projects$Locations$Provisioningconfigs$Submit,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubmitProvisioningConfigResponse>,
      callback: BodyResponseCallback<Schema$SubmitProvisioningConfigResponse>
    ): void;
    submit(
      params: Params$Resource$Projects$Locations$Provisioningconfigs$Submit,
      callback: BodyResponseCallback<Schema$SubmitProvisioningConfigResponse>
    ): void;
    submit(
      callback: BodyResponseCallback<Schema$SubmitProvisioningConfigResponse>
    ): void;
    submit(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Provisioningconfigs$Submit
        | BodyResponseCallback<Schema$SubmitProvisioningConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubmitProvisioningConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubmitProvisioningConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubmitProvisioningConfigResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Provisioningconfigs$Submit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Provisioningconfigs$Submit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/provisioningConfigs:submit').replace(
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
        createAPIRequest<Schema$SubmitProvisioningConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubmitProvisioningConfigResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Provisioningconfigs$Submit
    extends StandardParameters {
    /**
     * Required. The parent project and location containing the ProvisioningConfig.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubmitProvisioningConfigRequest;
  }

  export class Resource$Projects$Locations$Provisioningquotas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the budget details to provision resources on a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.provisioningQuotas.list({
     *       // Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.
     *       pageSize: 'placeholder-value',
     *       // A token identifying a page of results from the server.
     *       pageToken: 'placeholder-value',
     *       // Required. Parent value for ListProvisioningQuotasRequest.
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "provisioningQuotas": []
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
      params: Params$Resource$Projects$Locations$Provisioningquotas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Provisioningquotas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListProvisioningQuotasResponse>;
    list(
      params: Params$Resource$Projects$Locations$Provisioningquotas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Provisioningquotas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProvisioningQuotasResponse>,
      callback: BodyResponseCallback<Schema$ListProvisioningQuotasResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Provisioningquotas$List,
      callback: BodyResponseCallback<Schema$ListProvisioningQuotasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListProvisioningQuotasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Provisioningquotas$List
        | BodyResponseCallback<Schema$ListProvisioningQuotasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListProvisioningQuotasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListProvisioningQuotasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListProvisioningQuotasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Provisioningquotas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Provisioningquotas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/provisioningQuotas').replace(
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
        createAPIRequest<Schema$ListProvisioningQuotasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListProvisioningQuotasResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Provisioningquotas$List
    extends StandardParameters {
    /**
     * Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results from the server.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListProvisioningQuotasRequest.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Snapshotschedulepolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a snapshot schedule policy in the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.snapshotSchedulePolicies.create({
     *       // Required. The parent project and location containing the SnapshotSchedulePolicy.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Required. Snapshot policy ID
     *       snapshotSchedulePolicyId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "description": "my_description",
     *         //   "id": "my_id",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "schedules": [],
     *         //   "state": "my_state"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "schedules": [],
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SnapshotSchedulePolicy>;
    create(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>,
      callback: BodyResponseCallback<Schema$SnapshotSchedulePolicy>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Create,
      callback: BodyResponseCallback<Schema$SnapshotSchedulePolicy>
    ): void;
    create(callback: BodyResponseCallback<Schema$SnapshotSchedulePolicy>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Snapshotschedulepolicies$Create
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SnapshotSchedulePolicy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Snapshotschedulepolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Snapshotschedulepolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/snapshotSchedulePolicies').replace(
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
        createAPIRequest<Schema$SnapshotSchedulePolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SnapshotSchedulePolicy>(parameters);
      }
    }

    /**
     * Delete a named snapshot schedule policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.snapshotSchedulePolicies.delete({
     *       // Required. The name of the snapshot schedule policy to delete.
     *       name: 'projects/my-project/locations/my-location/snapshotSchedulePolicies/my-snapshotSchedulePolicie',
     *     });
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
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Snapshotschedulepolicies$Delete
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
        {}) as Params$Resource$Projects$Locations$Snapshotschedulepolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Snapshotschedulepolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Get details of a single snapshot schedule policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.snapshotSchedulePolicies.get({
     *       // Required. Name of the resource.
     *       name: 'projects/my-project/locations/my-location/snapshotSchedulePolicies/my-snapshotSchedulePolicie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "schedules": [],
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SnapshotSchedulePolicy>;
    get(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>,
      callback: BodyResponseCallback<Schema$SnapshotSchedulePolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Get,
      callback: BodyResponseCallback<Schema$SnapshotSchedulePolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$SnapshotSchedulePolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Snapshotschedulepolicies$Get
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SnapshotSchedulePolicy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Snapshotschedulepolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Snapshotschedulepolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SnapshotSchedulePolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SnapshotSchedulePolicy>(parameters);
      }
    }

    /**
     * List snapshot schedule policies in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.snapshotSchedulePolicies.list({
     *       // List filter.
     *       filter: 'placeholder-value',
     *       // The maximum number of items to return.
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from a previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent project containing the Snapshot Schedule Policies.
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "snapshotSchedulePolicies": []
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
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Snapshotschedulepolicies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSnapshotSchedulePoliciesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSnapshotSchedulePoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListSnapshotSchedulePoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$List,
      callback: BodyResponseCallback<Schema$ListSnapshotSchedulePoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSnapshotSchedulePoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Snapshotschedulepolicies$List
        | BodyResponseCallback<Schema$ListSnapshotSchedulePoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSnapshotSchedulePoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSnapshotSchedulePoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSnapshotSchedulePoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Snapshotschedulepolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Snapshotschedulepolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/snapshotSchedulePolicies').replace(
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
        createAPIRequest<Schema$ListSnapshotSchedulePoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSnapshotSchedulePoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Update a snapshot schedule policy in the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.snapshotSchedulePolicies.patch({
     *       // Output only. The name of the snapshot schedule policy.
     *       name: 'projects/my-project/locations/my-location/snapshotSchedulePolicies/my-snapshotSchedulePolicie',
     *       // Required. The list of fields to update.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "description": "my_description",
     *         //   "id": "my_id",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "schedules": [],
     *         //   "state": "my_state"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "schedules": [],
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SnapshotSchedulePolicy>;
    patch(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>,
      callback: BodyResponseCallback<Schema$SnapshotSchedulePolicy>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Snapshotschedulepolicies$Patch,
      callback: BodyResponseCallback<Schema$SnapshotSchedulePolicy>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SnapshotSchedulePolicy>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Snapshotschedulepolicies$Patch
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SnapshotSchedulePolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SnapshotSchedulePolicy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Snapshotschedulepolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Snapshotschedulepolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SnapshotSchedulePolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SnapshotSchedulePolicy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Snapshotschedulepolicies$Create
    extends StandardParameters {
    /**
     * Required. The parent project and location containing the SnapshotSchedulePolicy.
     */
    parent?: string;
    /**
     * Required. Snapshot policy ID
     */
    snapshotSchedulePolicyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SnapshotSchedulePolicy;
  }
  export interface Params$Resource$Projects$Locations$Snapshotschedulepolicies$Delete
    extends StandardParameters {
    /**
     * Required. The name of the snapshot schedule policy to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Snapshotschedulepolicies$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Snapshotschedulepolicies$List
    extends StandardParameters {
    /**
     * List filter.
     */
    filter?: string;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent project containing the Snapshot Schedule Policies.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Snapshotschedulepolicies$Patch
    extends StandardParameters {
    /**
     * Output only. The name of the snapshot schedule policy.
     */
    name?: string;
    /**
     * Required. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SnapshotSchedulePolicy;
  }

  export class Resource$Projects$Locations$Volumes {
    context: APIRequestContext;
    luns: Resource$Projects$Locations$Volumes$Luns;
    snapshots: Resource$Projects$Locations$Volumes$Snapshots;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.luns = new Resource$Projects$Locations$Volumes$Luns(this.context);
      this.snapshots = new Resource$Projects$Locations$Volumes$Snapshots(
        this.context
      );
    }

    /**
     * Get details of a single storage volume.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.volumes.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/volumes/my-volume',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoGrownSizeGib": "my_autoGrownSizeGib",
     *   //   "currentSizeGib": "my_currentSizeGib",
     *   //   "id": "my_id",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "remainingSpaceGib": "my_remainingSpaceGib",
     *   //   "requestedSizeGib": "my_requestedSizeGib",
     *   //   "snapshotAutoDeleteBehavior": "my_snapshotAutoDeleteBehavior",
     *   //   "snapshotReservationDetail": {},
     *   //   "snapshotSchedulePolicy": "my_snapshotSchedulePolicy",
     *   //   "state": "my_state",
     *   //   "storageType": "my_storageType"
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
      params: Params$Resource$Projects$Locations$Volumes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Volumes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volume>;
    get(
      params: Params$Resource$Projects$Locations$Volumes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Volumes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Volume>,
      callback: BodyResponseCallback<Schema$Volume>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Volumes$Get,
      callback: BodyResponseCallback<Schema$Volume>
    ): void;
    get(callback: BodyResponseCallback<Schema$Volume>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$Get
        | BodyResponseCallback<Schema$Volume>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volume>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volume>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volume> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Volumes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Volumes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Volume>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Volume>(parameters);
      }
    }

    /**
     * List storage volumes in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.volumes.list({
     *     // List filter.
     *     filter: 'placeholder-value',
     *     // Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results from the server.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListVolumesRequest.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "volumes": []
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
      params: Params$Resource$Projects$Locations$Volumes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Volumes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVolumesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Volumes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Volumes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListVolumesResponse>,
      callback: BodyResponseCallback<Schema$ListVolumesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Volumes$List,
      callback: BodyResponseCallback<Schema$ListVolumesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVolumesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$List
        | BodyResponseCallback<Schema$ListVolumesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVolumesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVolumesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVolumesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Volumes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Volumes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/volumes').replace(
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
        createAPIRequest<Schema$ListVolumesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVolumesResponse>(parameters);
      }
    }

    /**
     * Update details of a single storage volume.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.volumes.patch({
     *     // Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project\}/locations/{location\}/volumes/{volume\}`
     *     name: 'projects/my-project/locations/my-location/volumes/my-volume',
     *     // The list of fields to update. The only currently supported fields are: `snapshot_auto_delete_behavior` `snapshot_schedule_policy_name` 'labels' 'requested_size_gib'
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoGrownSizeGib": "my_autoGrownSizeGib",
     *       //   "currentSizeGib": "my_currentSizeGib",
     *       //   "id": "my_id",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "remainingSpaceGib": "my_remainingSpaceGib",
     *       //   "requestedSizeGib": "my_requestedSizeGib",
     *       //   "snapshotAutoDeleteBehavior": "my_snapshotAutoDeleteBehavior",
     *       //   "snapshotReservationDetail": {},
     *       //   "snapshotSchedulePolicy": "my_snapshotSchedulePolicy",
     *       //   "state": "my_state",
     *       //   "storageType": "my_storageType"
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
      params: Params$Resource$Projects$Locations$Volumes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Volumes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Volumes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Volumes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Volumes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$Patch
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
        {}) as Params$Resource$Projects$Locations$Volumes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Volumes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Volumes$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Volumes$List
    extends StandardParameters {
    /**
     * List filter.
     */
    filter?: string;
    /**
     * Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results from the server.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListVolumesRequest.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Volumes$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project\}/locations/{location\}/volumes/{volume\}`
     */
    name?: string;
    /**
     * The list of fields to update. The only currently supported fields are: `snapshot_auto_delete_behavior` `snapshot_schedule_policy_name` 'labels' 'requested_size_gib'
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Volume;
  }

  export class Resource$Projects$Locations$Volumes$Luns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get details of a single storage logical unit number(LUN).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.volumes.luns.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/volumes/my-volume/luns/my-lun',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bootLun": false,
     *   //   "id": "my_id",
     *   //   "multiprotocolType": "my_multiprotocolType",
     *   //   "name": "my_name",
     *   //   "shareable": false,
     *   //   "sizeGb": "my_sizeGb",
     *   //   "state": "my_state",
     *   //   "storageType": "my_storageType",
     *   //   "storageVolume": "my_storageVolume",
     *   //   "wwid": "my_wwid"
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
      params: Params$Resource$Projects$Locations$Volumes$Luns$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Volumes$Luns$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Lun>;
    get(
      params: Params$Resource$Projects$Locations$Volumes$Luns$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Volumes$Luns$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Lun>,
      callback: BodyResponseCallback<Schema$Lun>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Volumes$Luns$Get,
      callback: BodyResponseCallback<Schema$Lun>
    ): void;
    get(callback: BodyResponseCallback<Schema$Lun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$Luns$Get
        | BodyResponseCallback<Schema$Lun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Lun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Lun>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Lun> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Volumes$Luns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Volumes$Luns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Lun>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Lun>(parameters);
      }
    }

    /**
     * List storage volume luns for given storage volume.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.volumes.luns.list({
     *     // Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results from the server.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListLunsRequest.
     *     parent: 'projects/my-project/locations/my-location/volumes/my-volume',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "luns": [],
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
      params: Params$Resource$Projects$Locations$Volumes$Luns$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Volumes$Luns$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLunsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Volumes$Luns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Volumes$Luns$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListLunsResponse>,
      callback: BodyResponseCallback<Schema$ListLunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Volumes$Luns$List,
      callback: BodyResponseCallback<Schema$ListLunsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLunsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$Luns$List
        | BodyResponseCallback<Schema$ListLunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLunsResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ListLunsResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Volumes$Luns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Volumes$Luns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/luns').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListLunsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLunsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Volumes$Luns$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Volumes$Luns$List
    extends StandardParameters {
    /**
     * Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results from the server.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListLunsRequest.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Volumes$Snapshots {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a storage volume snapshot in a containing volume.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.volumes.snapshots.create({
     *       // Required. The volume to snapshot.
     *       parent: 'projects/my-project/locations/my-location/volumes/my-volume',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "id": "my_id",
     *         //   "name": "my_name",
     *         //   "sizeBytes": "my_sizeBytes",
     *         //   "storageVolume": "my_storageVolume"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "sizeBytes": "my_sizeBytes",
     *   //   "storageVolume": "my_storageVolume"
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
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Volumes$Snapshots$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VolumeSnapshot>;
    create(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Create,
      options: MethodOptions | BodyResponseCallback<Schema$VolumeSnapshot>,
      callback: BodyResponseCallback<Schema$VolumeSnapshot>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Create,
      callback: BodyResponseCallback<Schema$VolumeSnapshot>
    ): void;
    create(callback: BodyResponseCallback<Schema$VolumeSnapshot>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$Snapshots$Create
        | BodyResponseCallback<Schema$VolumeSnapshot>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VolumeSnapshot>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VolumeSnapshot>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$VolumeSnapshot> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Volumes$Snapshots$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Volumes$Snapshots$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/snapshots').replace(
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
        createAPIRequest<Schema$VolumeSnapshot>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VolumeSnapshot>(parameters);
      }
    }

    /**
     * Deletes a storage volume snapshot for a given volume.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.volumes.snapshots.delete({
     *       // Required. The name of the snapshot to delete.
     *       name: 'projects/my-project/locations/my-location/volumes/my-volume/snapshots/my-snapshot',
     *     });
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
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$Snapshots$Delete
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
        {}) as Params$Resource$Projects$Locations$Volumes$Snapshots$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Volumes$Snapshots$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Get details of a single storage volume snapshot.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.volumes.snapshots.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/volumes/my-volume/snapshots/my-snapshot',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "sizeBytes": "my_sizeBytes",
     *   //   "storageVolume": "my_storageVolume"
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
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Volumes$Snapshots$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VolumeSnapshot>;
    get(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VolumeSnapshot>,
      callback: BodyResponseCallback<Schema$VolumeSnapshot>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Get,
      callback: BodyResponseCallback<Schema$VolumeSnapshot>
    ): void;
    get(callback: BodyResponseCallback<Schema$VolumeSnapshot>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$Snapshots$Get
        | BodyResponseCallback<Schema$VolumeSnapshot>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VolumeSnapshot>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VolumeSnapshot>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$VolumeSnapshot> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Volumes$Snapshots$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Volumes$Snapshots$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VolumeSnapshot>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VolumeSnapshot>(parameters);
      }
    }

    /**
     * List storage volume snapshots for given storage volume.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *   const res = await baremetalsolution.projects.locations.volumes.snapshots.list(
     *     {
     *       // Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // A token identifying a page of results from the server.
     *       pageToken: 'placeholder-value',
     *       // Required. Parent value for ListVolumesRequest.
     *       parent: 'projects/my-project/locations/my-location/volumes/my-volume',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "volumeSnapshots": []
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
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Volumes$Snapshots$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVolumeSnapshotsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVolumeSnapshotsResponse>,
      callback: BodyResponseCallback<Schema$ListVolumeSnapshotsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$List,
      callback: BodyResponseCallback<Schema$ListVolumeSnapshotsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVolumeSnapshotsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$Snapshots$List
        | BodyResponseCallback<Schema$ListVolumeSnapshotsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVolumeSnapshotsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVolumeSnapshotsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVolumeSnapshotsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Volumes$Snapshots$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Volumes$Snapshots$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/snapshots').replace(
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
        createAPIRequest<Schema$ListVolumeSnapshotsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVolumeSnapshotsResponse>(parameters);
      }
    }

    /**
     * Restore a storage volume snapshot to its containing volume.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/baremetalsolution.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const baremetalsolution = google.baremetalsolution('v2');
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
     *     await baremetalsolution.projects.locations.volumes.snapshots.restoreVolumeSnapshot(
     *       {
     *         // Required. Name of the resource.
     *         volumeSnapshot:
     *           'projects/my-project/locations/my-location/volumes/my-volume/snapshots/my-snapshot',
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
    restoreVolumeSnapshot(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Restorevolumesnapshot,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restoreVolumeSnapshot(
      params?: Params$Resource$Projects$Locations$Volumes$Snapshots$Restorevolumesnapshot,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    restoreVolumeSnapshot(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Restorevolumesnapshot,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restoreVolumeSnapshot(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Restorevolumesnapshot,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restoreVolumeSnapshot(
      params: Params$Resource$Projects$Locations$Volumes$Snapshots$Restorevolumesnapshot,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restoreVolumeSnapshot(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restoreVolumeSnapshot(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Volumes$Snapshots$Restorevolumesnapshot
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
        {}) as Params$Resource$Projects$Locations$Volumes$Snapshots$Restorevolumesnapshot;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Volumes$Snapshots$Restorevolumesnapshot;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://baremetalsolution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+volumeSnapshot}:restoreVolumeSnapshot'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['volumeSnapshot'],
        pathParams: ['volumeSnapshot'],
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

  export interface Params$Resource$Projects$Locations$Volumes$Snapshots$Create
    extends StandardParameters {
    /**
     * Required. The volume to snapshot.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VolumeSnapshot;
  }
  export interface Params$Resource$Projects$Locations$Volumes$Snapshots$Delete
    extends StandardParameters {
    /**
     * Required. The name of the snapshot to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Volumes$Snapshots$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Volumes$Snapshots$List
    extends StandardParameters {
    /**
     * Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results from the server.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListVolumesRequest.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Volumes$Snapshots$Restorevolumesnapshot
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    volumeSnapshot?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestoreVolumeSnapshotRequest;
  }
}
